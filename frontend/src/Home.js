import Navbar from './Navbar';
import { useEffect } from "react";
import { toParams } from "./Routing";
import { useHistory } from "react-router-dom";


export default function Home() {
    let history = useHistory();
    useEffect(() => {
        const params = toParams(window.location.hash.replace(/^#/, ""));
        handleLogin(params);
    }, []);

    const handleLogin = (data) => {
        console.log(data)
        if (data.access_token) {
            history.push("/home")
        }
    };

    return <div><Navbar /></div>;
}
