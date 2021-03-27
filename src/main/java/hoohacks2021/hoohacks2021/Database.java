package hoohacks2021.hoohacks2021;

import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.ResultSet;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Database {
    
    CqlSession session;

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
    }

    public void addActivity(String activityName) {
        session.execute("insert into activities (name) VALUES('" + activityName + "');");
    }

    public List<String> getActivities() {
        ResultSet rs = session.execute("select * from activities;");
        return rs.all().stream()
            .map(row -> row.getString("name"))
            .collect(Collectors.toList());
    }
}
