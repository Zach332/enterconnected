import Navbar from './Navbar';
import { useEffect, useState } from "react";
import { toParams } from "./Routing";
import { useHistory, Link } from "react-router-dom";
import { login, useGlobalState } from "./State";
import axios from 'axios';
import Spinner from './Spinner';

export default function Home() {
    const [user] = useGlobalState("user");
    let history = useHistory();
    const [status, setStatus] = useState("loading");
    const [activityAvailabilities, setActivityAvailabilities] = useState([]);
    useEffect(() => {
        const params = toParams(window.location.hash.replace(/^#/, ""));
        handleLogin(params);
    }, []);

    useEffect(() => {
        axios
            .get("api/activity-availability")
            .then((response) => {
                setActivityAvailabilities(response.data);
            });
    }, []);

    const handleLogin = (data) => {
        if (data.access_token) {
            axios
                .post("https://hoohacks2021-308917.ue.r.appspot.com/api/login/google", {
                    token: data.access_token,
                })
                .then((response) => {
                    login(
                        response.data.firstName,
                        response.data.id
                    );
                    setStatus("loaded")
                    history.push("/home")
                });
        } else {
            setStatus("loaded")
        }
    };

    const addActivityAvailability = () => {
        history.push("/addActivityAvailability")
    }

    if(status == "loading") {
        return (
            <Spinner />
        )
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
        <div className="bg-light p-3 text-center w-75 mx-auto">
            <h1>Welcome to EnterConnected, {user.firstName}!</h1>
            <p>Organize activities with friends without worrying about your friends' availability or interest.</p>
            <p>Just add what activities you want to do when, and we'll notify you if your friends also added those activities and are available at those times.</p>
        </div>
        <div className="d-flex align-items-center">
            <div className="me-auto p-2 ms-5">
                <h1>Home</h1>
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
                    <div/>
                ))}
            </div>
        </div> :
        <div className="ms-5">You don't have any upcoming activity availability. <Link to="/addActivityAvailability">Add your availability</Link>!</div>}
    </div>);
}
