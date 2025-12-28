import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("sachin@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const navigate = useNavigate();
  const disptach = useDispatch();

  //Step 4 : disptach
  const handleSignIn = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      disptach(addUser(res.data));

      //console.log("Sign-in response:", res.data);
      return navigate("/");
    } catch (error) {
      console.log("Error during sign-in:", error);
    }
  };

  return (
    <div className="flex justify-center h-full mt-20 ">
      <div className="card card-border bg-base-400 w-96 shadow-white">
        <div className="card-body items-center">
          <h2 className="card-title">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend justify-start">Email</legend>
            <input
              type="text"
              className="input"
              value={emailId}
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend justify-start">Password</legend>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </fieldset>

          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleSignIn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
