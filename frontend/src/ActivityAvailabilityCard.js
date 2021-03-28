import React from "react";
import {formatTime} from "./formatTime";
import {formatUserList} from "./formatUserList"

export default function ActivityAvailabilityCard( {activityAvailability} ) {
    console.log(activityAvailability)

    return (
        <div
            className={"mx-auto list-group-item m-1 rounded border bg-info" + (activityAvailability.happening && " border-success")}
            style={{width: 310, height:310}}
        >
            <div style={{width: 280, height: 290}} className={"card bg-info" + (activityAvailability.happening && " border-success")}>
                <div className="card-body">
                    <h5 className="card-title">{activityAvailability.activityName}</h5>
                    {activityAvailability.happening && <div>
                            <div
                                className="badge rounded-pill btn-primary me-2"
                            >
                                Scheduled
                            </div>
                            <div>
                                Scheduled with {formatUserList(activityAvailability.participants)} from {formatTime(activityAvailability.startTime)} to {formatTime(activityAvailability.endTime)}!
                            </div>
                            <hr></hr>
                        </div>}
                    <p className="card-text">I'm available from {formatTime(activityAvailability.rangeStartTime).toString()} to {formatTime(activityAvailability.rangeEndTime).toString()}.</p>
                    <p className="card-text">This activity requires {activityAvailability.minimumNumberOfParticipants} people.</p>
                </div>
            </div>
        </div>
    )
}
