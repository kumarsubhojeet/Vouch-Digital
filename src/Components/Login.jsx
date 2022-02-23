import React, { useState } from "react";
import "../Styles/Login.css";
import axios from "axios";

import { Input, Checkbox, message } from "antd";
import Team from "../img/Team.svg";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState("");

  const URL = `https://reqres.in/api/login`;

  const btnClick = async () => {
    if (!password || !email) {
        settoken("Error :(");
      } 

    const res = await axios.post(URL, {
      email: email,
      password: password,
    });

    if (res.data) {
        settoken("Successful :)");
    } else {
      settoken("Error :(");
    }
  };

  return (
    <div className="Login_main">
      <div className="Login_wrapper">
        <div className="Login_left">
          <div className="Form_main">
            <div className="Form_heading">
              <h2>Welcome Back</h2>
              <p>Sub-title text goes here</p>
            </div>
            <form className="form">
              <Input
                className="InputField"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter Email *"
              />
              <Input
                className="InputField"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter Password *"
              />
            </form>

            <div className="Btn">
              <h4 className="btn" onClick={btnClick}>
                Click
              </h4>
            </div>

            <div className="checkbox">
              <Checkbox>Remember Me</Checkbox>
              <p>Forgot Password ?</p>
            </div>

            <div className="error">
              {
                  token === 'Error :(' ? <h3 style={{color:'red'}}>{token}</h3> : <h3 style={{color:'green'}}>{token}</h3>
              }
            </div>
          </div>
        </div>

        <div className="Login_right">
          <img src={Team} alt="img-error" />
        </div>
      </div>
    </div>
  );
}
