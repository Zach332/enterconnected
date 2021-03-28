import { Link } from "react-router-dom";

export default function Spinner() {
    return (
        <div className="text-center">
            <div className="spinner-border mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="m-2"></div>
            Please be patient. The server may be asleep; it can take ~30 seconds to wake up. After this period, feel free to <Link to="/">start over</Link>.
        </div>
    );
}
