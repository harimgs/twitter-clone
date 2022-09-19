import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "rafeh Qazi",
      username: "cleverqazi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i2-prod.football.london/tottenham-hotspur-fc/news/article23669886.ece/ALTERNATES/s615/0_GettyImages-1390539425.jpg",
      timeStamp: Date.now(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image url"
          type="text"
        ></input>

        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
