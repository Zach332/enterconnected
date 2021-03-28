export default function ActivityAvailabilityCard( {activityAvailability} ) {

    return (
        <dir
            className="mx-auto list-group-item list-group-item-action m-1 rounded border"
            style={{width: 300, height:450, backgroundColor:"#ECDDD9"}}
        >
            <div style={{width: 270, height: 430, backgroundColor:"#ECDDD9"}} className="card list-group-item-action">
                <div className="card-body">
                    <h5 className="card-title">{activityAvailability.activityName}</h5>
                    <p className="card-text">I'm available from {activityAvailability.rangeStartTime} to {activityAvailability.rangeEndTime}.</p>
                    <p className="card-text">This activity requires {activityAvailability.minimumNumberOfParticipants} people.</p>
                </div>
            </div>
        </dir>
    )
}
