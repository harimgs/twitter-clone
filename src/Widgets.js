import React from "react";
import "./Widgets.css";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400. }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awsome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
