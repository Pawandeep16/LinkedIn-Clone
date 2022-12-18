import React from "react";
import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import Feed from "./Feed/Feed";
import Login from "./Login/Login";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import "./App.css";
import { auth } from "./Utils/Firebase";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/*Widgets*/}
        </div>
      )}
    </div>
  );
}

export default App;
