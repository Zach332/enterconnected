package hoohacks2021.hoohacks2021;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Autowired
    private Database database;
    
    @GetMapping("/api/test")
    public String test() {
        return database.getReleaseVersion();
    }
}
