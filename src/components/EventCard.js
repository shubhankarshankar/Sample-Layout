import React from "react";

class EventsCard extends React.Component {
  // const card = document.getElementsByClassName("yo");

  // card.addEventListener("mouseover", () => {
  //   const datePlace = document.getElementById(
  //     `event-date-place-${this.props.id}`
  //   );

  //   datePlace.classList.add("fade-out-animation");
  // });

  handleMouseover = () => {};

  componentDidMount() {
    //adding animations
    const card = document.getElementById(`event-card-${this.props.id}`);

    card.addEventListener("mouseenter", () => {
      const datePlace = document.getElementById(
        `event-date-place-${this.props.id}`
      );
      const bookTicket = document.getElementById(
        `book-ticket-${this.props.id}`
      );
      const hrt = document.getElementById(`like-${this.props.id}`);

      datePlace.classList.add("fade-out-animation");
      datePlace.classList.remove("back-in-animation");
      bookTicket.classList.add("fade-in-animation");
      bookTicket.classList.remove("back-out-animation");
      hrt.classList.add("fade-in-animation");
      hrt.classList.remove("back-out-animation");
    });

    card.addEventListener("mouseleave", () => {
      const datePlace = document.getElementById(
        `event-date-place-${this.props.id}`
      );
      const bookTicket = document.getElementById(
        `book-ticket-${this.props.id}`
      );
      const hrt = document.getElementById(`like-${this.props.id}`);

      datePlace.classList.remove("fade-out-animation");
      datePlace.classList.add("back-in-animation");
      bookTicket.classList.remove("fade-in-animation");
      bookTicket.classList.add("back-out-animation");
      hrt.classList.remove("fade-in-animation");
      hrt.classList.add("back-out-animation");
    });
  }

  render() {
    return (
      <div className="event-card enter-up" id={`event-card-${this.props.id}`}>
        <i className="fas fa-heart like-icn" id={`like-${this.props.id}`}></i>

        {/* eslint-disable-next-line */}
        <a href="#">
          <img
            className="event-img inset-shadow"
            src={require(`../static/imgs/${this.props.name.toLowerCase()}.jpg`)}
            alt="Events Card"
          />
        </a>

        <div className="event-info">
          <p className="event-price-range">{this.props.priceRange}</p>
          <p className="event-name">{this.props.title}</p>
          <div
            className="event-date-place"
            id={`event-date-place-${this.props.id}`}
          >
            <div
              className="event-date"
              style={{ width: "25%", marginRight: "5%" }}
            >
              <i className="far fa-calendar icn"></i>

              {this.props.date}
            </div>
            <div className="event-location" style={{ width: "70%" }}>
              <i className="fas fa-map-marker-alt icn"></i>

              {this.props.location}
            </div>
          </div>
          <div className="book-ticket" id={`book-ticket-${this.props.id}`}>
            Book Ticket <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default EventsCard;
