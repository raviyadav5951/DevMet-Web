import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import Profile from "./Profile";
import Login from "./Login";
import Body from "./Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <NavBar/>
      <h1 className="text-3xl font-bold underline">Hello World</h1> */}
    </>
  );
}

export default App;
