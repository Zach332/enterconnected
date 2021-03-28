package hoohacks2021.hoohacks2021.database.dao;

import java.util.UUID;

import com.datastax.oss.driver.api.core.PagingIterable;
import com.datastax.oss.driver.api.mapper.annotations.Dao;
import com.datastax.oss.driver.api.mapper.annotations.Insert;
import com.datastax.oss.driver.api.mapper.annotations.Query;
import com.datastax.oss.driver.api.mapper.annotations.Select;
import com.datastax.oss.driver.api.mapper.annotations.Update;

import hoohacks2021.hoohacks2021.database.entity.ActivityAvailability;

@Dao
public interface ActivityAvailabilityDAO {
    
    @Insert
    void save(ActivityAvailability activityAvailability);

    @Select
    PagingIterable<ActivityAvailability> findByUserId(UUID userId);

    @Query("select * from activity_availability where activityname = :activityname allow filtering")
    PagingIterable<ActivityAvailability> findByActivityName(String activityname);

    @Update
    void updateActivityAvailability(ActivityAvailability activityAvailability);
}
