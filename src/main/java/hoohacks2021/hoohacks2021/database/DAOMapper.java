package hoohacks2021.hoohacks2021.database;

import com.datastax.oss.driver.api.mapper.annotations.DaoFactory;
import com.datastax.oss.driver.api.mapper.annotations.Mapper;

import hoohacks2021.hoohacks2021.database.dao.ActivityDAO;

@Mapper
public interface DAOMapper {

    @DaoFactory
    ActivityDAO activityDAO();
}
