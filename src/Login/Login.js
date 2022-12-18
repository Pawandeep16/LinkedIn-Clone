import React from "react";
import "./Login.css";
import { auth } from "../Utils/Firebase";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please Enter Name..");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profile,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="Login">
      <img
        src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full-Name(Required)"
        ></input>
        <input
          value={profile}
          type="text"
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Profile Picture"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Don't Have Account?
        <span className="Login_Register" onClick={register}>
          {" "}
          Register Now{" "}
        </span>{" "}
      </p>
    </div>
  );
}
