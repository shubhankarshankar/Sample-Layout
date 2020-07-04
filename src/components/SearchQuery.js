import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";

import "react-datepicker/dist/react-datepicker.css";

const SearchQuery = props => {
  const { visible, setVisible, ref } = useOutsideAlerter(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [what, setWhat] = useState("Select Category");
  const [where, setWhere] = useState("Select Location");

  const handleOnClick = (queryTitle, item) => {
    queryTitle === "what" ? setWhat(item.option) : setWhere(item.option);
    setVisible(false);
  };

  //mapping for each option in the option list
  const renderContent = (queryTitle, optionsList) => {
    return (
      <div className="dropdown-content enter-up-d">
        {optionsList.map(item => (
          <div
            className="list-item"
            key={item.id}
            onClick={() => handleOnClick(queryTitle, item)}
          >
            <span>{item.option}</span>
          </div>
        ))}
      </div>
    );
  };

  //Rendering the date query
  if (props.queryTitle === "WHEN") {
    return (
      <div className="query-block">
        <div className="query-name"> {props.queryTitle} </div>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          showPopperArrow={false}
          dateFormat="dd/MM/yyyy"
          className="date-input"
        />
      </div>
    );
  } else if (props.queryTitle === "KEYWORD") {
    // Rendering the keyword query
    return (
      <div className="query-block">
        <div className="query-name"> {props.queryTitle} </div>
        <input type="text" className="keyword-input" placeholder="..." />
      </div>
    );
  }

  //else, rendering the dropdowns
  return (
    <div>
      <div className="query-block">
        <div className="query-name">
          {props.queryTitle === "what" ? "WHAT" : "WHERE"}
        </div>
        <div className="option" onClick={() => setVisible(!visible)}>
          {props.queryTitle === "what" ? what : where}
        </div>
      </div>
      <div ref={ref}>
        {visible && renderContent(props.queryTitle, props.optionsList)}
      </div>
    </div>
  );
};

export default SearchQuery;
