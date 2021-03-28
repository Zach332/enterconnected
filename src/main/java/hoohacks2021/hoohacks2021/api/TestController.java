package hoohacks2021.hoohacks2021.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import hoohacks2021.hoohacks2021.database.Database;
import hoohacks2021.hoohacks2021.database.entity.User;

@CrossOrigin
@RestController
public class TestController {
    
    @Autowired
    private Database database;

    @GetMapping("/api/test")
    public void test() {
        User user = database.getUserByEmail("");
        System.out.println(user);
    }
}
