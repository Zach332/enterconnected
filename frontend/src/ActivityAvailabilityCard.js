import React from "react";
import {formatTime} from "./formatTime";

export default function ActivityAvailabilityCard( {activityAvailability} ) {

    React.useEffect(() => {
        console.log(formatTime(activityAvailability.rangeStartTime));
    }, []);


    return (
        <div
            className={"mx-auto list-group-item m-1 rounded border bg-info" + (activityAvailability.happening && " border-success")}
            style={{width: 280, height:290}}
        >
            <div style={{width: 250, height: 270}} className={"card bg-info" + (activityAvailability.happening && " border-success")}>
                <div className="card-body">
                    <h5 className="card-title">{activityAvailability.activityName}</h5>
                    {activityAvailability.happening && <div
                                            className="badge rounded-pill btn-primary me-2"
                                        >
                                            Scheduled
                                        </div>}
                    <p className="card-text">I'm available from {formatTime(activityAvailability.rangeStartTime).toString()} to {formatTime(activityAvailability.rangeEndTime).toString()}.</p>
                    <p className="card-text">This activity requires {activityAvailability.minimumNumberOfParticipants} people.</p>
                </div>
            </div>
        </div>
    )
}
