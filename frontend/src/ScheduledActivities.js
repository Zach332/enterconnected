import Navbar from './Navbar';
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useGlobalState } from "./State";
import axios from 'axios';
import ActivityAvailabilityCard from './ActivityAvailabilityCard';

export default function Home() {
    const [user] = useGlobalState("user");
    let history = useHistory();
    const [activityAvailabilities, setActivityAvailabilities] = useState([]);

    useEffect(() => {
        axios
            .get("https://hoohacks2021-308917.ue.r.appspot.com/api/activity-availability")
            .then((response) => {
                setActivityAvailabilities(response.data.filter(
                    (availability) => availability.happening
                ));
            });
    }, []);

    const addActivityAvailability = () => {
        history.push("/addActivityAvailability")
    }

    return (<div>
        <Navbar />
        {user.id == null && <div className="bg-secondary p-3 text-center w-50 mx-auto">
            It looks like you haven't logged in. You won't be able to see or do much without an account.
            <div className="p-2"/>
            <Link className="btn btn-primary btn-md" to="/" role="button">
                Log in here!
            </Link>
        </div>}
        <div className="d-flex align-items-center">
            <div className="me-auto p-2 ms-5">
                <h1>Scheduled activities</h1>
            </div>
            <div className="p-2 me-5">
                <a
                    type="btn btn-primary"
                    className="btn btn-outline-primary btn-md"
                    onClick={addActivityAvailability}
                >
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-plus"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                    </svg>
                        Add activity availability
                </a>
            </div>
        </div>
        {activityAvailabilities != null && activityAvailabilities.length > 0 ? <div className="container">
            <div className="row">
            {activityAvailabilities.map((activity) => (
                    <ActivityAvailabilityCard activityAvailability={activity} />
            ))}
            </div>
        </div> :
        <div className="ms-5 p-2">You don't have any upcoming scheduled activities. <Link to="/addActivityAvailability">Add to your availability</Link>!</div>}
    </div>);
}
