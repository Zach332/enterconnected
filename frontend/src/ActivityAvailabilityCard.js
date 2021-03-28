export default function ActivityAvailabilityCard( {activityAvailability} ) {

    return (
        <div
            className="mx-auto list-group-item list-group-item-action m-1 rounded border bg-info"
            style={{width: 280, height:290}}
        >
            <div style={{width: 250, height: 270}} className="card list-group-item-action bg-info">
                <div className="card-body">
                    <h5 className="card-title">{activityAvailability.activityName}</h5>
                    <p className="card-text">I'm available from {activityAvailability.rangeStartTime} to {activityAvailability.rangeEndTime}.</p>
                    <p className="card-text">This activity requires {activityAvailability.minimumNumberOfParticipants} people.</p>
                </div>
            </div>
        </div>
    )
}
