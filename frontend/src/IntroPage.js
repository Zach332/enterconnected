import Activity1 from "./images/activity1.jpg"
import { toQuery } from "./Routing";
import { useLocation } from 'react-router-dom';
export default function LoginLandingGithub() {
    var background = Activity1
    let location = useLocation();

    const onClickGoogle = () => {
        window.location.href =
            "https://accounts.google.com/o/oauth2/v2/auth?" + googleParams;
    };

    const googleParams = toQuery({
        client_id:
            "449086482050-sadfuvcq2nudv6in6n25l8srn89bn28e.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/userinfo.email",
        response_type: "token",
        redirect_uri: window.location.origin + "/login/oauth2/code/google",
    });

    return (
        <div style={{ 
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.7), 
                rgba(0, 0, 0, 0.7)
                ),
                url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        }}>
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="text-light">Welcome!</h1>
                <button
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
                        <path
                            fillRule="evenodd"
                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}