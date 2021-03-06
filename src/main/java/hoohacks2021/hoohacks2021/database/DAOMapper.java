package hoohacks2021.hoohacks2021.database;

import com.datastax.oss.driver.api.mapper.annotations.DaoFactory;
import com.datastax.oss.driver.api.mapper.annotations.Mapper;

import hoohacks2021.hoohacks2021.database.dao.ActivityAvailabilityDAO;
import hoohacks2021.hoohacks2021.database.dao.ActivityDAO;
import hoohacks2021.hoohacks2021.database.dao.UserDAO;

@Mapper
public interface DAOMapper {

    @DaoFactory
    UserDAO userDAO();

    @DaoFactory
    ActivityDAO activityDAO();

    @DaoFactory
    ActivityAvailabilityDAO activityAvailabilityDAO();
}
