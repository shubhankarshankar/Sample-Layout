import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";

import "react-datepicker/dist/react-datepicker.css";

const SearchQuery = props => {
  const { visible, setVisible, ref } = useOutsideAlerter(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    return (
      <div className="query-block">
        <div className="query-name"> {props.queryTitle} </div>
        <input type="text" className="keyword-input" placeholder="..." />
      </div>
    );
  }

  return (
    <>
      <div className="query-block">
        <div className="query-name">{props.queryTitle}</div>
        <div className="option" onClick={() => setVisible(!visible)}>
          {props.optionsType}
        </div>
      </div>
      <div ref={ref}>{visible && props.children}</div>
    </>
  );
};

export default SearchQuery;
