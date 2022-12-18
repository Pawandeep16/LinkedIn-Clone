import React, { useState, useEffect } from "react";
import "./feed.css";
import Post from "./Posts/posts";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";
import InputOptions from "./InputOptions";
import {
  Create,
  Image,
  Subscriptions,
  EventNote,
  Assignment,
} from "@material-ui/icons";
import { db } from "../Utils/Firebase";
import firebase from "firebase";
export default function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      profileUrl: user.photoUrl || user.email[0].toUpperCase(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="Feed">
      <div className="feed_inputCont">
        <div className="feed_input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptuions">
          <InputOptions Icon={Image} title="Photo" color="#70B5f9" />
          <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOptions Icon={EventNote} title="Events" color="#C0CBD" />
          <InputOptions
            Icon={Assignment}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}
