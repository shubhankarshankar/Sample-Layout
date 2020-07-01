import React from "react";

const FooterItem = props => {
  return (
    <div className="footer-item">
      <p className="footer-title"> {props.title} </p>
      <div>
        <ul className="footer-link-list">
          <li>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              {props.linkOne}
            </a>
          </li>
          <li>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              {props.linkTwo}
            </a>
          </li>
          <li>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              {props.linkThree}
            </a>
          </li>
          <li>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              {props.linkFour}
            </a>
          </li>
          <li>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              {props.linkFive}
            </a>
          </li>
          <li>{props.descp}</li>
          <br />
          {props.address && (
            <li>
              <i className="fas fa-map-marker-alt icn"></i> {props.address}
            </li>
          )}
          {props.phone && (
            <li>
              <i className="fas fa-mobile icn"></i> {props.phone}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FooterItem;
