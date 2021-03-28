import Navbar from './Navbar';
import React from "react";
import axios from "axios";


export default function AddNewActivityType() {
    const [activities, setActivities] = React.useState([])

    React.useEffect(() => {
        axios
            .get("https://hoohacks2021-308917.ue.r.appspot.com/api/activities")
            .then((response) => {
                setActivities(response.data)
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div style={{padding: "50px"}}>
                <h2>Add New Activity</h2>
                <div>
                    <label className="form-label">Activity Name</label>
                    <input className="form-control" list="activeList" name="myBrowser" placeholder="Enter Name of Activity..." />
                    <datalist id="activeList">
                        {activities.map((activity) => (
                            <option key={activity} value={activity} />
                        ))}
                    </datalist>
                </div>
                <hr />
                <div>
                    <label className="col-form-label-lg">Activity Time</label>
                    <br />
                    <label className="form-label">Start Date</label>
                    <input className="form-control" type="date" />
                    <label className="form-label">End Date</label>
                    <input className="form-control" type="date" />
                    <br />
                    <label className="form-label">Start Time</label>
                    <input className="form-control" type="time" />
                    <label className="form-label">End Time</label>
                    <input className="form-control" type="time" />
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}