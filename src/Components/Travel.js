import React from "react";

function Travel(props) {
  return (
    <div className="main-travel">
      <img className="location--image" src={props.image} alt="place" />
      <div className="sub-travel">
        <div className="location">
          <img className="place-map" src="map.png" alt="placeonmap" />
          <span className="country">{props.location.country}</span>
          <span className="maps-link">
            <a href={props.location.googlemaps}>View on Google Maps</a>
          </span>
        </div>
        <h2>{props.placename}</h2>
        <h4>{props.duration}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Travel;
