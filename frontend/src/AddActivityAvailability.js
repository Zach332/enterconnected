import Navbar from './Navbar';
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useGlobalState } from "./State";
import CheckMark from "./check.svg";

export default function AddNewActivityType() {
    const [user] = useGlobalState("user");
    const [activities, setActivities] = React.useState([]);
    const [status, setStatus] = React.useState("notSubmitted")
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
        setForm((form) => ({
            ...form,
            [name]: target.value,
        }));
    };

    const submitButtonClicked = (event) => {
        axios.post("https://hoohacks2021-308917.ue.r.appspot.com/api/activity-availability/new", {
                activityName: form.act,
                rangeStartTime: Date.parse(form.sd + " " + form.st), // start day / time in epoch time
                rangeEndTime: Date.parse(form.ed + " " + form.et), // end day / time in epoch time
                minimumNumberOfParticipants: form.mp,
        });
        setStatus("submitted")
        event.preventDefault();
    }

    if(status == "submitted") {
        return (
            <div>
                <Navbar />
                <img
                    src={CheckMark}
                    className="mx-auto d-block p-4"
                />
                <div className="text-center">
                    Your activity availability has been successfully submitted! 
                    <div></div>
                    <Link
                        className="btn btn-link btn-lg"
                        to="/home"
                    >
                        Go to the homepage
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            {user.id == null && <div className="bg-secondary p-3 text-center w-50 mx-auto">
                It looks like you haven't logged in. You won't be able to see or do much without an account.
                <div className="p-2"/>
                <Link className="btn btn-primary btn-md" to="/" role="button">
                    Log in here!
                </Link>
            </div>}
            <div style={{padding: "0px 50px 0px 50px"}}>
                <h2>Add your availability for an activity</h2>
                <p>We'll add your availability to our database, but your availability will not be publicly posted. If a friend is available for the same activity at an overlapping time, we'll notify both of you, and add the activity to your {<Link to="/scheduled">scheduled activities</Link>}!</p>
                <div>
                    <label className="form-label">Activity Name</label>
                    <input className="form-control" id="act" value={form.act} list="activeList" placeholder="Enter Name of Activity..." onChange={handleInputChange} />
                    <datalist id="activeList">
                        {activities.map((activity) => (
                            <option key={activity} value={activity} />
                        ))}
                    </datalist>
                </div>
                <hr />
                <div>
                    <label className="form-label">Minimum Number of People</label>
                    <input className="form-control" type="number" min="2" id="mp" value={form.mp} placeholder="Enter Number (including yourself)" onChange={handleInputChange} />
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