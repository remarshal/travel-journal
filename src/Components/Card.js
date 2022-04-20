import "./Card.css";

function Card(props) {
    return (
        <div className="travel-card">
            <div className="travel--img">
                <img src={props.destination.imageUrl} className="card--img" />
            </div>
            <div className="travel--title">
                <h1>{props.destination.title}</h1>
                <h5>{props.destination.location}</h5>
                <div>
                <a href={props.destination.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                
            </div>
            <div className="travel--details">
                <h5>{props.destination.startDate} - {props.destination.endDate}</h5>
                <p>{props.destination.description}</p>
            </div>
        </div>
    );
}

export default Card;