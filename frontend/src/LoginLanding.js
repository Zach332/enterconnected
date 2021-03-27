import { useEffect } from "react";
import { toParams } from "./Routing";
import Spinner from "./Spinner";
import { useHistory } from "react-router-dom";

export default function LoginLanding() {
    let history = useHistory();

    useEffect(() => {
        const params = toParams(window.location.hash.replace(/^#/, ""));
        onSuccess(params);
    }, []);

    const onSuccess = (data) => {
        history.push("/home")
    };

    return <div><Spinner /></div>;
}
