import React from "react";
import {formatTime} from "./formatTime";

export default function ActivityAvailabilityCard( {activityAvailability} ) {

    React.useEffect(() => {
        console.log(formatTime(activityAvailability.rangeStartTime));
    }, []);


    return (
        <div
            className="mx-auto list-group-item list-group-item-action m-1 rounded border bg-info"
            style={{width: 280, height:290}}
        >
            <div style={{width: 250, height: 270}} className="card list-group-item-action bg-info">
                <div className="card-body">
                    <h5 className="card-title">{activityAvailability.activityName}</h5>
                    <p className="card-text">I'm available from {formatTime(activityAvailability.rangeStartTime).toString()} to {formatTime(activityAvailability.rangeEndTime).toString()}.</p>
                    <p className="card-text">This activity requires {activityAvailability.minimumNumberOfParticipants} people.</p>
                </div>
            </div>
        </div>
    )
}
