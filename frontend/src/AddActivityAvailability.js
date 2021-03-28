import Navbar from './Navbar';
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function AddNewActivityType() {
    const [activities, setActivities] = React.useState([]);
    const [form, setForm] = React.useState({
        act: "",
        mp: "2",
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
            <div style={{padding: "0px 50px 0px 50px"}}>
                <h2>Add your availability for an activity</h2>
                <p>We'll add your availability to our database, but your availability will not be publicly posted. If a friend is available for the same activity at an overlapping time, we'll notify both of you, and add the activity to your {<Link to="/scheduled">scheduled activities</Link>}!</p>
                <div>
                    <label className="form-label">Activity Name</label>
                    <input className="form-control" id="act" value={form.act} list="activeList" name="myBrowser" placeholder="Enter Name of Activity..." />
                    <datalist id="activeList">
                        {activities.map((activity) => (
                            <option key={activity} value={activity} />
                        ))}
                    </datalist>
                </div>
                <hr />
                <div>
                    <label className="form-label">Minimum Number of People</label>
                    <input className="form-control" type="number" min="2" id="mp" value={form.mp} placeholder="Enter Number (including yourself)" />
                </div>
                <hr />
                <div>
                    <label className="col-form-label-lg">I'm available between...</label>
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
                    <button type="submit" className="btn btn-primary"
                            disabled={form.sd === "" || form.ed === "" || form.st === "" || form.et === "" || form.mp === "" || form.act === ""}
                            onClick={submitButtonClicked}>Submit</button>
                </div>
            </div>
        </div>
    )
}