import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./Post.css";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  Verified,
} from "@mui/icons-material";

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, timeStamp },
    ref
  ) => {
    const DisplayCreatedAt = () => {
      const nowTime = Date.now();
      const time = parseInt(timeStamp - nowTime);
      if (time > -60000) {
        return <Moment fromNow>{timeStamp}</Moment>;
      } else if (time < -86400000) {
        return <Moment format="MMM D일">{timeStamp}</Moment>;
      } else if (time > -86400000) {
        return <Moment fromNow>{timeStamp}</Moment>;
      }
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <Verified className="post__badge" />}
                  {" @" + username + " · "}
                  <DisplayCreatedAt />
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
