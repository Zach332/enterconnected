package hoohacks2021.hoohacks2021.database.dao;

import java.util.UUID;

import com.datastax.oss.driver.api.mapper.annotations.Dao;
import com.datastax.oss.driver.api.mapper.annotations.Insert;
import com.datastax.oss.driver.api.mapper.annotations.Query;
import com.datastax.oss.driver.api.mapper.annotations.Select;

import hoohacks2021.hoohacks2021.database.entity.User;

@Dao
public interface UserDAO {

    @Insert
    void save(User activity);

    @Select
    User findById(UUID id);

    @Query("select * from user where email = :email allow filtering")
    User findByEmail(String email);
}
