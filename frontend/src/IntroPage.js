import "./IntroPage.css"
import { toQuery } from "./Routing";
import { useHistory } from "react-router-dom";
import { useGlobalState } from "./State";

export default function LoginLandingGithub() {
    const [user] = useGlobalState("user");
    let history = useHistory();

    const onClickGoogle = () => {
        window.location.href =
            "https://accounts.google.com/o/oauth2/v2/auth?" + googleParams;
    };

    const enter  = () => {
        history.push("/home");
    }

    const googleParams = toQuery({
        client_id:
            "449086482050-sadfuvcq2nudv6in6n25l8srn89bn28e.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
        response_type: "token",
        redirect_uri: window.location.href.substring(0,window.location.href.length - 3),
    });

    return (
        <div id="home" className="panel">
            <div className="d-flex flex-column align-items-center justify-content-center vh-100" id="welcomeContent">
                {user.id == null ? <h1 className="text-light">Welcome!</h1> : <h1 className="text-light">Welcome, {user.firstName}!</h1>}
                {user.id == null ? <button
                    type="btn btn-light"
                    onClick={onClickGoogle}
                    className="btn btn-outline-light btn-lg"
                >
                    Login with Google
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-box-arrow-in-right"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd"
                              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                        <path fillRule="evenodd"
                              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                </button> : 
                <button
                    type="btn btn-light"
                    onClick={enter}
                    className="btn btn-outline-light btn-lg"
                >
                    Get EnterConnected
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-box-arrow-in-right"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd"
                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                        <path fillRule="evenodd"
                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                </button>
                }
            </div>


            <div className="inner">
                <div id="backgroundchange">
                    <div className="backgroundimg" id="back1"/>
                    <div className="backgroundimg" id="back2"/>
                    <div className="backgroundimg" id="back3"/>
                    <div className="backgroundimg" id="back4"/>
                    <div className="backgroundimg" id="back5"/>
                    <div className="backgroundimg" id="back6"/>
                    <div className="backgroundimg" id="back7"/>
                    <div className="backgroundimg" id="back8"/>
                    <div className="backgroundimg" id="back9"/>
                </div>
            </div>
        </div>
    );
}