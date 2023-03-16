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
        <h2>What's Happening!</h2>
        <TwitterTweetEmbed tweetId={"1627417446016483331"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ElonMusk"
          options={{ height: 400. }}
        />

  
      </div>
    </div>
  );
}

export default Widgets;
