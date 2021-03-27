import LoginLanding from './LoginLanding';
import Navbar from './Navbar';
import { useEffect } from "react";
import { toParams } from "./Routing";


export default function Home() {
    useEffect(() => {
        const params = toParams(window.location.hash.replace(/^#/, ""));
        handleLogin(params);
    }, []);

    const handleLogin = (data) => {
        if (data.access_token) {
            return <LoginLanding />
        }
    };

    return <div><Navbar /></div>;
}
