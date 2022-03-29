import "./Card.css";

function Card(props) {
    return (
        <div className="travel-card">
            <img src={props.destination.imageUrl} className="card--img"/>
            <a href={props.destination.googleMapsUrl} target="_blank">View on Google Maps</a>
            <h2>{props.destination.location}</h2>
            <h1>{props.destination.title}</h1>
            <h5>{props.destination.startDate} - {props.destination.endDate}</h5>
            <p>{props.destination.description}</p>
        </div>
    );
}

export default Card;