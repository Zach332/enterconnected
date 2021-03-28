package hoohacks2021.hoohacks2021.api;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import hoohacks2021.hoohacks2021.database.Database;
import hoohacks2021.hoohacks2021.database.entity.ActivityAvailability;

@RestController
public class ActivityAvailabilityController {
    
    @Autowired
    private Database database;

    @GetMapping("api/activity-availability")
    public List<ActivityAvailability> getUserActivityAvailability(
        @RequestHeader("authorization") String userId
    ) {
        return database.getActivityAvailabilitiesForUser(userId);
    }

    @PostMapping("/api/activity-availability/new")
    public void addActivityAvailability(
        @RequestHeader("authorization") String userId,
        @RequestBody ActivityAvailability activityAvailability
    ) {
        ActivityAvailability newActivityAvailability = new ActivityAvailability(
            UUID.fromString(userId), 
            activityAvailability.getActivityName(), 
            activityAvailability.getRangeStartTime(), 
            activityAvailability.getRangeEndTime(), 
            activityAvailability.getMinimumNumberOfParticipants()
        );
        database.addActivityAvailability(newActivityAvailability);
    }
}
