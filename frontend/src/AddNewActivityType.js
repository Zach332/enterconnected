import Navbar from './Navbar';
import React from "react";
import axios from "axios";


export default function AddNewActivityType() {
    const [activities, setActivities] = React.useState([]);
    const [form, setForm] = React.useState({
        sd: "",
        ed: "",
        st: "",
        et: "",
    });

    React.useEffect(() => {
        axios
            .get("https://hoohacks2021-308917.ue.r.appspot.com/api/activities")
            .then((response) => {
                setActivities(response.data)
            });
    }, []);

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.id;
        setForm((idea) => ({
            ...idea,
            [name]: target.value,
        }));
    };

    const submitButtonClicked = () => {
        Date.parse(form.sd + " " + form.st); // start day / time in epoch time
        Date.parse(form.ed + " " + form.et); // end day / time in epoch time
    }

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
                    <input id="sd" value={form.sd} className="form-control" type="date" onChange={handleInputChange} />
                    <label className="form-label">End Date</label>
                    <input id="ed" value={form.ed} className="form-control" type="date" onChange={handleInputChange} />
                    <br />
                    <label className="form-label">Start Time</label>
                    <input id="st" value={form.st} className="form-control" type="time" onChange={handleInputChange} />
                    <label className="form-label">End Time</label>
                    <input id="et" value={form.et} className="form-control" type="time" onChange={handleInputChange} />
                    <br />
                    <button type="submit" className="btn btn-primary" disabled={form.sd === "" || form.ed === "" || form.st === "" || form.et === ""}
                            onClick={submitButtonClicked}>Submit</button>
                </div>
            </div>
        </div>
    )
}