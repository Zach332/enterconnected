package hoohacks2021.hoohacks2021.database.dao;

import com.datastax.oss.driver.api.core.PagingIterable;
import com.datastax.oss.driver.api.mapper.annotations.Dao;
import com.datastax.oss.driver.api.mapper.annotations.Insert;
import com.datastax.oss.driver.api.mapper.annotations.Select;

import hoohacks2021.hoohacks2021.database.entity.Activity;

@Dao
public interface ActivityDAO {

    @Insert
    void save(Activity activity);

    @Select
    PagingIterable<Activity> all();
}
