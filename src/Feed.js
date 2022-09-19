import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  orderBy("date", "desc");
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      }
    );
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post, i) => (
          <Post
            key={i}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            timeStamp={post.timeStamp}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
