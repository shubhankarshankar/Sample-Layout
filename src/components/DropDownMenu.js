import React from "react";

const RenderContent = ({ optionsList, onOptionClick }) => {
  //options for what kind of event
  if (optionsList === "what") {
    return (
      <div>
        <div className="list-item">Select Category</div>
        <div className="list-item">Arts & Theatre</div>
        <div className="list-item">Concerts</div>
        <div className="list-item">Conference</div>
        <div className="list-item">Family</div>
        <div className="list-item">Festivals</div>
      </div>
    );
  } else if (optionsList === "where") {
    //The options list for locations of the events
    return (
      <div>
        <div className="list-item">Select Location</div>
        <div className="list-item">Brooklyn</div>
        <div className="list-item">Chicago</div>
        <div className="list-item">Napa</div>
        <div className="list-item">New York</div>
        <div className="list-item">San Jose</div>
      </div>
    );
  }
};

const DropDownMenu = props => {
  return (
    <div className="dropdown-content">
      <RenderContent optionsList={props.optionsList} />
    </div>
  );
};

export default DropDownMenu;
