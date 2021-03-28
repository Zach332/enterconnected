package hoohacks2021.hoohacks2021.api;

import java.io.IOException;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import hoohacks2021.hoohacks2021.database.Database;
import hoohacks2021.hoohacks2021.database.entity.User;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

@CrossOrigin
@RestController
public class AuthenticationController {

    @Autowired
    private Database database;

    private static final OkHttpClient httpClient = new OkHttpClient();

    static class GoogleToken {

        String token;

        public GoogleToken() {}

        public void setToken(String token) {
            this.token = token;
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    static class GoogleProfile {

        public String email;
        public String given_name;
        public String family_name;

        public GoogleProfile() {}
    }
    
    @PostMapping("/api/login/google")
    public User googleAuthentication(@RequestBody GoogleToken googleToken)
        throws IOException {
        Request request = new Request.Builder()
            .url("https://www.googleapis.com/oauth2/v1/userinfo")
            .header("Authorization", "Bearer " + googleToken.token)
            .build();

        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                System.out.println("Unexpected code " + response);
                throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
            String responseString = response.body().string();
            ObjectMapper mapper = new ObjectMapper();
            GoogleProfile profile = mapper.readValue(
                responseString,
                GoogleProfile.class
            );

            User user = database.getUserByEmail(profile.email);
            if (user != null) {
                return user;
            }
            else {
                user = new User(profile.email, profile.given_name, profile.family_name);
                database.addUser(user);
                return user;
            }
        }
    }
}
