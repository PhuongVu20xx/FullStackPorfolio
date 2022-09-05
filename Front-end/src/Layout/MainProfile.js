import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import { SELECT_ACCOUNT_INFO } from "./ServerService/API";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

class MainProfile extends Component {
  state = {
    account: {},
    more_information: false,
  };

  componentDidMount() {
    this.setState({ more_information: false });
    const self = this;
    axios
      .post(SELECT_ACCOUNT_INFO)
      .then((response) => {
        self.setState({ account: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(https://rynadb.herokuapp.com/Files/${this.state.account.background})`,
          height: "50vh",
          minHeight: "400px",
          width: "auto",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="row"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          
        >
          <div className="col-md-1"></div>
          <img
            className="col-sm-3 p-0"
            id="main-account-profile"
            src={
              "https://rynadb.herokuapp.com/Images/" + this.state.account.avatar
            }
          />
          <div id="main-account-profile-lable">
            <h3
              style={{
                fontSize: "30px",
                color: this.state.account.text_color,
              }}
            >
              {this.state.account.name}
            </h3>
            <h3
              style={{
                fontSize: "30px",
                color: this.state.account.title_color,
              }}
            >
              3D Modeler
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
export default MainProfile;
