import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import { LOGIN } from "../ServerService/API";
class Login extends Component {
  state = { loading: false };

  render() {
    if (localStorage.getItem("account_info") != null) {
      window.location.href = "https://ryna69.herokuapp.com/";
    }

    function returnHome() {
      window.location.href = "https://ryna69.herokuapp.com/";
    }

    const btnLoginOnClick = () => {
      const email = $("#email").val();
      const password = $("#password").val();
      this.setState({ loading: true });
      const self = this;
      axios
        .post(LOGIN, { email, password })
        .then((response) => {
          if (response.data != 0) {
            localStorage.setItem("account_info", JSON.stringify(response.data));
            setInterval(returnHome, 15000);
          } else {
            alert("Something wrong!!! Try again.");
          }
          self.setState({ loading: false });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <div className="row m-5">
        <div className="col-xl-4 col-lg-2"></div>
        <div className="col-xl-4 col-lg-4 col-md-6 card login-form">
          <div className="login-form-group">
            <label>
              <b>Email</b>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
            <div
              id="emailResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>
          <div className="login-form-group">
            <label htmlFor="exampleInputPassword1" className="">
              <b>Password</b>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
            <div
              id="loginResult"
              className="small font-italic form-waring-text"
            ></div>
          </div>

          <div className="login-form-group">
            <div className="pt-1 btn-login-group">
              <button className="btn-change-profile" onClick={btnLoginOnClick}>
                <b>LOGIN</b>
              </button>
              {this.state.loading && (
                <div
                  className="spinner-border text-light"
                  id="register-loading-ring"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
