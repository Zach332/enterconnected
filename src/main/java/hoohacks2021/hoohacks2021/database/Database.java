package hoohacks2021.hoohacks2021.database;

import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import com.datastax.oss.driver.api.core.CqlSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import hoohacks2021.hoohacks2021.database.dao.ActivityDAO;
import hoohacks2021.hoohacks2021.database.entity.Activity;

@Component
public class Database {
    
    CqlSession session;
    
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
        
        DAOMapper databaseMapper = new DAOMapperBuilder(session).build();
        activityDAO = databaseMapper.activityDAO();
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
