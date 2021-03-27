package hoohacks2021.hoohacks2021;

import java.nio.file.Paths;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.ResultSet;
import com.datastax.oss.driver.api.core.cql.Row;

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

    public String getReleaseVersion() {
        ResultSet rs = session.execute("select release_version from system.local");
        Row row = rs.one();
        if (row != null) {
            return row.getString("release_version");
        } else {
            throw new IllegalStateException();
        }
    }
}
