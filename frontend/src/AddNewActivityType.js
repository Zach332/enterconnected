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

                <input list="activeList" name="myBrowser" placeholder="Enter Name of Activity..." />
                <datalist id="activeList">
                    {activities.map((activity) => (
                        <option key={activity} value={activity} />
                    ))}
                </datalist>

            </div>
        </div>
    )
}