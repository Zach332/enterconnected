package hoohacks2021.hoohacks2021;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActivitiesController {
    
    @Autowired
    private Database database;

    @PostMapping("/api/activities/new/{activityName}")
    public void addActivity(
        @PathVariable("activityName") String activityName
    ) {
        database.addActivity(activityName);
    }

    @GetMapping("/api/activities")
    public List<String> getActivities() {
        return database.getActivities();
    }
}
