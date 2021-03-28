package hoohacks2021.hoohacks2021.database;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.datastax.oss.driver.api.core.CqlSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import hoohacks2021.hoohacks2021.database.dao.ActivityAvailabilityDAO;
import hoohacks2021.hoohacks2021.database.dao.ActivityDAO;
import hoohacks2021.hoohacks2021.database.dao.UserDAO;
import hoohacks2021.hoohacks2021.database.entity.Activity;
import hoohacks2021.hoohacks2021.database.entity.ActivityAvailability;
import hoohacks2021.hoohacks2021.database.entity.User;

@Component
public class Database {
    
    CqlSession session;
    
    UserDAO userDAO;
    ActivityDAO activityDAO;
    ActivityAvailabilityDAO activityAvailabilityDAO;

    public Database(
        @Value("${hoohacks2021.astra.secureConnectionLocation}") String secureConnectLocation, 
        @Value("${hoohacks2021.astra.username}") String username, 
        @Value("${hoohacks2021.astra.password}") String password
    ) {
        session = CqlSession.builder()
            .withCloudSecureConnectBundle(Paths.get(secureConnectLocation))
            .withAuthCredentials(username, password)
            .withKeyspace("production")
            .build();
        
        DAOMapper daoMapper = new DAOMapperBuilder(session).build();
        userDAO = daoMapper.userDAO();
        activityDAO = daoMapper.activityDAO();
        activityAvailabilityDAO = daoMapper.activityAvailabilityDAO();
    }

    // Users

    public void addUser(User user) {
        userDAO.save(user);
    }

    public User getUser(UUID id) {
        return userDAO.findById(id);
    }

    public User getUserByEmail(String email) {
        return userDAO.findByEmail(email);
    }

    // Activities

    public void addActivity(Activity activity) {
        activityDAO.save(activity);
    }

    public List<String> getActivities() {
        return activityDAO.all().all().stream()
            .map(activity -> activity.getName())
            .collect(Collectors.toList());
    }

    // Activity availabilities

    public void addActivityAvailability(ActivityAvailability newAvailability) {
        activityAvailabilityDAO.save(newAvailability);

        if (activityDAO.findByName(newAvailability.getActivityName()) == null) {
            activityDAO.save(new Activity(newAvailability.getActivityName()));
        }

        List<ActivityAvailability> activityAvailabilities = activityAvailabilityDAO.findByActivityName(newAvailability.getActivityName()).all();
        activityAvailabilities.sort((a1, a2) -> a2.getMinimumNumberOfParticipants() - a1.getMinimumNumberOfParticipants());
        
        ArrayList<ActivityAvailability> possiblyHappeningAvailabilities = new ArrayList<>();
        possiblyHappeningAvailabilities.add(newAvailability);
        int requiredNumberOfParticipants = newAvailability.getMinimumNumberOfParticipants();
        for (ActivityAvailability availability : activityAvailabilities) {
            if (
                availability.getRangeStartTime() < newAvailability.getRangeEndTime() && 
                availability.getRangeEndTime() > newAvailability.getRangeEndTime()
            ) {
                if (
                    possiblyHappeningAvailabilities.size() >= requiredNumberOfParticipants &&
                    availability.getMinimumNumberOfParticipants() > requiredNumberOfParticipants - 1
                ) {
                    break;
                } 
                if (availability.getMinimumNumberOfParticipants() > requiredNumberOfParticipants) {
                    requiredNumberOfParticipants = availability.getMinimumNumberOfParticipants();
                }
                possiblyHappeningAvailabilities.add(availability);
            }
        }

        if (possiblyHappeningAvailabilities.size() >= requiredNumberOfParticipants) {
            possiblyHappeningAvailabilities.forEach(availability -> {
                availability.setHappening(true);
                activityAvailabilityDAO.updateActivityAvailability(availability);
            });
        }
    }

    public List<ActivityAvailability> getActivityAvailabilitiesForUser(String userId) {
        return activityAvailabilityDAO.findByUserId(UUID.fromString(userId)).all();
    }
}
