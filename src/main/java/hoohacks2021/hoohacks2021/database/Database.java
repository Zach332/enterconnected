package hoohacks2021.hoohacks2021.database;

import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.datastax.oss.driver.api.core.CqlSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import hoohacks2021.hoohacks2021.database.dao.ActivityDAO;
import hoohacks2021.hoohacks2021.database.dao.UserDAO;
import hoohacks2021.hoohacks2021.database.entity.Activity;
import hoohacks2021.hoohacks2021.database.entity.User;

@Component
public class Database {
    
    CqlSession session;
    
    UserDAO userDAO;
    ActivityDAO activityDAO;

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
}
