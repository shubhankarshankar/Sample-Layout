import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchQuery from "./SearchQuery";
import DropDownMenu from "./DropDownMenu";
import EventsGrid from "./EventsGrid";
import EventsCard from "./EventCard";
import Footer from "./Footer";
import FooterItem from "./FooterItem";
import SocialPanel from "./SocialPanel";

// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

const App = () => {
  const [what] = useState("Select Category");
  const [where] = useState("Select Location");

  return (
    <div className="site-wrapper">
      <div className="main-wrapper">
        {/* Header */}
        <p className="header">Simple Layout</p>

        {/* Search Bar for specific Event */}
        <SearchBar>
          <div className="w-20">
            <SearchQuery queryTitle={what} optionsType="Select Category">
              <DropDownMenu optionsList="what" />
            </SearchQuery>
          </div>
          <div className="w-20">
            <SearchQuery queryTitle={where} optionsType="Select Location">
              <DropDownMenu optionsList="where" />
            </SearchQuery>
          </div>
          <div className="w-20">
            <SearchQuery queryTitle="WHEN" optionsType="Select Date" />
          </div>
          <div className="w-20">
            <SearchQuery queryTitle="KEYWORD" />
          </div>

          <button className="srch-btn">SEARCH</button>
        </SearchBar>

        {/* Available Events */}
        <EventsGrid>
          <EventsCard
            id="1"
            name="vibra"
            title="Vibra Manhou Fest"
            priceRange="$39 - $1,200"
            date="Jul 16"
            location="Grant Park, Chicago"
            dura="600"
          />
          <EventsCard
            id="2"
            name="kenny"
            title="Kenny G"
            priceRange="$120"
            date="Aug 28"
            location="Majestic Theatre"
            dura="900"
          />
          <EventsCard
            id="3"
            name="sesame"
            title="Sesame Street Live! Make Your Magic"
            priceRange="$45"
            date="Sep 26"
            location="Grand Chapiteau"
            dura="1200"
          />
          <EventsCard
            id="4"
            name="nutcracker"
            title="St. Petersburg Ballet - The Nutcracker"
            priceRange="$69 - $79"
            date="Oct 9"
            location="Majestic Theatre"
            dura="600"
          />
          <EventsCard
            id="5"
            name="vlah"
            title="The Phantom of the Opera"
            priceRange="$36 - $69"
            date="Nov 28"
            location="Kings Theatre"
            dura="900"
          />
          <EventsCard
            id="6"
            name="cirque"
            title="Cirque du Soleil Kurios"
            priceRange="$49"
            date="Dec 26"
            location="Grand Chapiteau"
            dura="1200"
          />
        </EventsGrid>
      </div>

      {/* Footer */}
      <div className="foot-wrapper">
        <Footer>
          <div className="footer-items">
            <FooterItem
              title="helpful links"
              linkOne="My Account"
              linkTwo="Refund and Exchanges"
              linkThree="Ticket Your Event"
              linkFour="Get Help"
              linkFive="Sell"
            />
            <FooterItem
              title="explore"
              linkOne="concerts"
              linkTwo="family"
              linkThree="Conference"
              linkFour="musical"
              linkFive="music festivals"
            />
            <FooterItem
              title="about us"
              linkOne="become organizer"
              linkTwo="who we are"
              linkThree="ticketing 101"
              linkFour="our blog"
              linkFive="work with us"
            />
            <FooterItem
              title="about us"
              descp="RoyalTickets – Premium Ticket Booking"
              address="111 Wall Street, USA, New York"
              phone="Phone: (123) 456-7890"
            />
          </div>

          <SocialPanel>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              <i className="fab fa-facebook-f footer-icn"></i>
            </a>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              <i className="fab fa-twitter footer-icn"></i>
            </a>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              <i className="fab fa-instagram-square footer-icn"></i>
            </a>
            <a href="https://royaltickets.fantasythemes.net/demo08/simple-layout/#">
              <i className="fab fa-youtube footer-icn"></i>
            </a>
          </SocialPanel>
        </Footer>
      </div>
    </div>
  );
};

export default App;
