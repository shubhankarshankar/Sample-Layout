import React from "react";

const EventsCard = props => {
  return (
    <div
      className="event-card"
      data-aos="fade-up"
      data-aos-duration={`${props.dura}`}
    >
      <i className="fas fa-heart like-icn"></i>

      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img
          className="event-img inset-shadow"
          src={require(`../static/imgs/${props.name.toLowerCase()}.jpg`)}
          alt="Events Card"
        />
      </a>

      <div className="event-info">
        <p className="event-price-range">{props.priceRange}</p>
        <p className="event-name">{props.title}</p>
        <div className="event-date-place">
          <div
            className="event-date"
            style={{ width: "25%", marginRight: "5%" }}
          >
            <i className="far fa-calendar icn"></i>
            {"           "}
            {props.date}
          </div>
          <div className="event-location" style={{ width: "70%" }}>
            <i className="fas fa-map-marker-alt icn"></i>
            {"           "}
            {props.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
