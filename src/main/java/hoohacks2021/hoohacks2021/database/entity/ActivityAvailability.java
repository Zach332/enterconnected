package hoohacks2021.hoohacks2021.database.entity;

import java.util.UUID;

import com.datastax.oss.driver.api.mapper.annotations.ClusteringColumn;
import com.datastax.oss.driver.api.mapper.annotations.CqlName;
import com.datastax.oss.driver.api.mapper.annotations.Entity;
import com.datastax.oss.driver.api.mapper.annotations.PartitionKey;

@Entity
public class ActivityAvailability {

    @ClusteringColumn
    private UUID id;
    @PartitionKey
    @CqlName("userid")
    private UUID userId;
    @CqlName("activityname")
    private String activityName;
    // Unix epoch
    @CqlName("rangestarttime")
    private long rangeStartTime;
    @CqlName("rangeendtime")
    private long rangeEndTime;
    @CqlName("minimumnumberofparticipants")
    private int minimumNumberOfParticipants;
    private boolean happening;

    public ActivityAvailability() { }

    public ActivityAvailability(UUID userId, String activityName, long rangeStartTime, long rangeEndTime, int minimumNumberOfParticipants) {
        this.id = UUID.randomUUID();
        this.userId = userId;
        this.activityName = activityName;
        this.rangeStartTime = rangeStartTime;
        this.rangeEndTime = rangeEndTime;
        this.minimumNumberOfParticipants = minimumNumberOfParticipants;
        this.happening = false;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    public long getRangeStartTime() {
        return rangeStartTime;
    }

    public void setRangeStartTime(long rangeStartTime) {
        this.rangeStartTime = rangeStartTime;
    }

    public long getRangeEndTime() {
        return rangeEndTime;
    }

    public void setRangeEndTime(long rangeEndTime) {
        this.rangeEndTime = rangeEndTime;
    }

    public int getMinimumNumberOfParticipants() {
        return minimumNumberOfParticipants;
    }

    public void setMinimumNumberOfParticipants(int minimumNumberOfParticipants) {
        this.minimumNumberOfParticipants = minimumNumberOfParticipants;
    }

    public boolean getHappening() {
        return happening;
    }

    public void setHappening(boolean happening) {
        this.happening = happening;
    }
}
