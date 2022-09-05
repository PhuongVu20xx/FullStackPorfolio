import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import Project from "./Action/Projects";
import Experients from "./Action/Experients";
import Information from "./Action/Information";
import Education from "./Action/Education";
import Skills from "./Action/Skills";
import Images from "./Action/Images";
import Videos from "./Action/Videos";
import Modal from "react-modal";

import {
  IMAGE,
  UPDATE_ACCOUNT_INFO,
  CHANGE_ACCOUNT_AVATAR,
  CHANGE_ACCOUNT_PASSWORD,
  SELECT_ACCOUNT_INFO,
  SELECT_PROJECTS,
  SELECT_EXPERIENTS,
  SELECT_INFORMATIONS,
  SELECT_EDUCATIONS,
  SELECT_SKILLS,
  SELECT_VIDEOS,
  SELECT_IMAGES,
  CHANGE_BACKGROUND,
  CHANGE_CV,
  CHANGE_TITLE_COLOR,
  CHANGE_CONTENT_COLOR,
  UPDATE_PAGE_SETTING,
  SELECT_PAGE_SETTING,
} from "./ServerService/API";

class Profile extends Component {
  state = {
    viewIndex: 1,
    account: {},
    projects: [],
    projectsLoading: false,
    experients: [],
    experientsLoading: false,
    information: [],
    informationLoading: false,
    education: [],
    educationLoading: false,
    skills: [],
    skillsLoading: false,
    videos: [],
    videosLoading: false,
    images: [],
    imagesLoading: false,
    modalIsOpen: false,
    pageSettings: [],
  };
  componentDidMount() {
    this.setState({ viewIndex: 1 });
    this.setState({ projectsLoading: true });
    const self = this;
    axios
      .post(SELECT_ACCOUNT_INFO)
      .then((response) => {
        self.setState({ account: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_PROJECTS)
      .then((response) => {
        self.setState({ projects: response.data });
        self.setState({ projectsLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_EXPERIENTS)
      .then((response) => {
        self.setState({ experients: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_INFORMATIONS)
      .then((response) => {
        self.setState({ information: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_EDUCATIONS)
      .then((response) => {
        self.setState({ education: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_SKILLS)
      .then((response) => {
        self.setState({ skills: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_VIDEOS)
      .then((response) => {
        self.setState({ skills: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_IMAGES)
      .then((response) => {
        self.setState({ skills: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SELECT_PAGE_SETTING)
      .then((response) => {
        self.setState({ pageSettings: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const btnMenuOnClick = (e) => {
      const index = e.target.value;
      this.setState({ viewIndex: index });
      const self = this;
      if (index == 1) {
        this.setState({ projectsLoading: true });
        axios
          .post(SELECT_PROJECTS)
          .then((response) => {
            self.setState({ projects: response.data });
            self.setState({ projectsLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (index == 2) {
        this.setState({ experientsLoading: true });
        axios
          .post(SELECT_EXPERIENTS)
          .then((response) => {
            self.setState({ experients: response.data });
            self.setState({ experientsLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (index == 3) {
        this.setState({ informationLoading: true });
        axios
          .post(SELECT_INFORMATIONS)
          .then((response) => {
            self.setState({ information: response.data });
            self.setState({ informationLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (index == 4) {
        this.setState({ educationLoading: true });
        axios
          .post(SELECT_EDUCATIONS)
          .then((response) => {
            self.setState({ education: response.data });
            self.setState({ educationLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (index == 5) {
        this.setState({ skillsLoading: true });
        axios
          .post(SELECT_SKILLS)
          .then((response) => {
            self.setState({ skills: response.data });
            self.setState({ skillsLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (index == 6) {
        this.setState({ videosLoading: true });
        axios
          .post(SELECT_VIDEOS)
          .then((response) => {
            self.setState({ videos: response.data });
            self.setState({ videosLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (index == 7) {
        this.setState({ imagesLoading: true });
        axios
          .post(SELECT_IMAGES)
          .then((response) => {
            self.setState({ images: response.data });
            self.setState({ imagesLoading: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    //update account
    const btnEditOnClick = () => {
      const id = this.state.account.id;
      const name = $("#name").val();
      const email = $("#email").val();
      const phone = $("#phone").val();
      const dob = $("#dob").val();
      const address = $("#address").val();
      const information = $("#information").val();
      const partner = $("#partner").val();
      const gender = $("#gender").val();

      const data = {
        id,
        name,
        email,
        phone,
        dob,
        address,
        information,
        partner,
        gender,
      };
      console.log(data);
      axios
        .post(UPDATE_ACCOUNT_INFO, data)
        .then((response) => {
          if (response.data > 0) {
            alert("Update account successfull.");
          } else {
            alert("Update account fail.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    //change avatar
    const onAvatarChange = (e) => {
      const avatar = e.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(avatar);

      reader.onloadend = function () {
        $("#avatar").prop("src", reader.result);
      };
    };

    const btnChangeAvatarOnClick = () => {
      const id = this.state.account.id;
      const avatar = $("#user-avatar-img").prop("files")[0];
      const name = avatar.name;
      const index = name.indexOf(".");
      const img_extension = name.substr(index, index + 5);

      let data = new FormData();
      data.set("avatar", avatar);
      data.set("img_extension", img_extension);
      data.set("id", id);

      axios
        .post(CHANGE_ACCOUNT_AVATAR, data)
        .then((response) => {
          if (response.data > 0) {
            alert("Update avatar successfull.");
          } else {
            alert("Update avatar fail.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    //change background
    const btnChangeBackgroundOnClick = () => {
      const id = this.state.account.id;
      const background = $("#background").prop("files")[0];
      const name = background.name;
      const index = name.indexOf(".");
      const img_extension = name.substr(index, index + 5);

      let data = new FormData();
      data.set("background", background);
      data.set("img_extension", img_extension);
      data.set("id", id);

      axios
        .post(CHANGE_BACKGROUND, data)
        .then((response) => {
          if (response.data > 0) {
            alert("Update avatar successfull.");
          } else {
            alert("Update avatar fail.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    //change cv
    const btnChangeCvOnClick = () => {
      const id = this.state.account.id;
      const cv = $("#cv").prop("files")[0];
      const name = cv.name;
      const index = name.indexOf(".");
      const img_extension = name.substr(index, index + 5);
      const cv_name = this.state.account.cv;

      let data = new FormData();
      data.set("cv", cv);
      data.set("img_extension", img_extension);
      data.set("id", id);
      data.set("cv_name", cv_name);

      axios
        .post(CHANGE_CV, data)
        .then((response) => {
          if (response.data > 0) {
            alert("Update avatar successfull.");
          } else {
            alert("Update avatar fail.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //change password
    const btnChangePasswordOnClick = () => {
      const id = this.state.account.id;
      const new_password = $("#new-password").val();
      axios
        .post(CHANGE_ACCOUNT_PASSWORD, { id, new_password })
        .then((response) => {
          if (response.data > 0) {
            alert("Update password successfull.");
          } else {
            alert("Update passwords fail.");
          }
          $("#new-password").val("");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // change title color
    const btnChangeTitleColorOnClick = () => {
      const color = $("#lable-color").val();
      const id = this.state.account.id;
      const data = { id, color };
      axios
        .post(CHANGE_TITLE_COLOR, data)
        .then((response) => {
          if (response.data != 0) {
            alert("Update color successfull.");
          } else {
            alert("Update color fail.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const btnChangeContentColorOnClick = () => {
      const color = $("#text-color").val();
      const id = this.state.account.id;
      const data = { id, color };
      axios
        .post(CHANGE_CONTENT_COLOR, data)
        .then((response) => {
          if (response.data != 0) {
            alert("Update color successfull.");
          } else {
            alert("Update color fail.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // setting modal
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    let subtitle;
    const self = this;
    function openModal() {
      self.setState({ modalIsOpen: true });
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "black";
    }

    function closeModal() {
      self.setState({ modalIsOpen: false });
    }

    const btnChangeSettingOnClick = () => {
      const title_color = $("#change-title-color").val();
      const content_color = $("#change-content-color").val();
      const link_color = $("#change-link-color").val();
      const background_color = $("#change-background-color").val();
      const header_color = $("#change-header-color").val();
      const footer_color = $("#change-footer-color").val();
      const main_color = $("#change-main-color").val();
      const background_image = $("#change-background-image").prop("files")[0];
      let img_extension = "";
      if (background_image != null) {
        const name = background_image.name;
        const index = name.indexOf(".");
        img_extension = name.substr(index, index + 5);
      }

      let data = new FormData();
      data.set("background-image", background_image);
      data.set("img_extension", img_extension);
      data.set("title_color", title_color);
      data.set("content_color", content_color);
      data.set("link_color", link_color);
      data.set("background_color", background_color);
      data.set("header_color", header_color);
      data.set("footer_color", footer_color);
      data.set("main_color", main_color);

      axios
        .post(UPDATE_PAGE_SETTING, data)
        .then((response) => {
          if (response.data > 0) {
            alert("Update avatar successfull.");
          } else {
            alert("Update avatar fail.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row user-account-profile">
          <div className="col-xl-4 card">
            <div className="row">
              <div className="card-header background-header-content">
                <h4>
                  <b>Profile Picture</b>
                </h4>
              </div>
              <div className="card-body text-center background-header-body">
                <div className="row profile-img-form">
                  <div>
                    <img
                      className="img-user-account-profile"
                      id="avatar"
                      src={IMAGE + this.state.account.avatar}
                    />
                  </div>

                  <div id="avatar-img">
                    <input
                      type="file"
                      id="user-avatar-img"
                      onChange={onAvatarChange}
                    />
                  </div>

                  <div>
                    <button
                      className="btn-change-profile"
                      onClick={btnChangeAvatarOnClick}
                    >
                      <b>CHANGE AVATAR</b>
                    </button>
                  </div>
                  <div>
                    <input type="file" id="background" />
                  </div>

                  <div>
                    <button
                      className="btn-change-profile"
                      onClick={btnChangeBackgroundOnClick}
                    >
                      <b>CHANGE BACKGROUND</b>
                    </button>
                  </div>

                  <div>
                    <input type="file" id="cv" />
                  </div>

                  <div>
                    <button
                      className="btn-change-profile"
                      onClick={btnChangeCvOnClick}
                    >
                      <b>CHANGE CV</b>
                    </button>
                  </div>
                  <div className="mb-1">
                    <div className="card-body ">
                      <div className="">
                        <label className="small mb-1" htmlFor="email">
                          <b>NEW PASSWORD</b>
                        </label>
                        <input
                          className="form-control"
                          id="new-password"
                          type="password"
                        />
                      </div>
                    </div>
                    <button
                      className="btn-change-profile"
                      onClick={btnChangePasswordOnClick}
                    >
                      <b>CHANGE PASSWORD</b>
                    </button>
                  </div>

                  <div>
                    <div className="row card-body">
                      <div className="col-4">
                        <label for="lable-color">
                          <b>Title:</b>{" "}
                        </label>
                        <input
                          className="mb-2 form-control"
                          type="color"
                          id="lable-color"
                        />
                        <button
                          className="btn-change-color"
                          onClick={btnChangeTitleColorOnClick}
                        >
                          <b>TITLE COLOR</b>
                        </button>
                      </div>

                      <div className="col-4">
                        <label for="text-color">
                          <b>Content:</b>{" "}
                        </label>
                        <input
                          className="mb-2 form-control"
                          type="color"
                          id="text-color"
                        />
                        <button
                          className="btn-change-color"
                          onClick={btnChangeContentColorOnClick}
                        >
                          <b>CONTENT COLOR</b>
                        </button>
                      </div>
                      <div className="col-4">
                        <button
                          className="btn-change-color"
                          onClick={openModal}
                          style={{ marginTop: "63px" }}
                        >
                          <b>CHANGE SETTINGS</b>
                        </button>
                        <Modal
                          isOpen={this.state.modalIsOpen}
                          onAfterOpen={afterOpenModal}
                          onRequestClose={closeModal}
                          style={customStyles}
                          contentLabel="Example Modal"
                          id="project-modal-settings"
                        >
                          <h2
                            ref={(_subtitle) => (subtitle = _subtitle)}
                            className="modal-title"
                          >
                            <b className="text-title">Settings</b>
                            <i
                              className="fa-solid fa-rectangle-xmark close-icon"
                              onClick={closeModal}
                            ></i>
                          </h2>
                          <div className="form-control mb-3  mt-3">
                            <div className="container">
                              <div className="row">
                                <div className="col-3 mb-3">
                                  <label className="mb-1 mt-2">
                                    Background Image:
                                  </label>
                                  <input
                                    type="file"
                                    id="change-background-image"
                                  />
                                </div>
                                <div className="col-3 mb-3 mt-2">
                                  <label className="mb-1">Title Color:</label>
                                  <input type="color" id="change-title-color" />
                                </div>
                                <div className="col-3 mb-3 mt-2">
                                  <label
                                    className="mb-1"
                                    id="change-content-color"
                                  >
                                    Content Color:
                                  </label>
                                  <input type="color" />
                                </div>
                                <div className="col-3 mb-3 mt-2">
                                  <label
                                    className="mb-1"
                                    id="change-link-color"
                                  >
                                    Link Color:
                                  </label>
                                  <input type="color" />
                                </div>
                                <div className="col-3 mb-3">
                                  <label
                                    className="mb-1"
                                    id="change-background-color"
                                  >
                                    Background Color:
                                  </label>
                                  <input type="color" />
                                </div>
                                <div className="col-3 mb-3">
                                  <label
                                    className="mb-1"
                                    id="change-header-color"
                                  >
                                    Header Color:
                                  </label>
                                  <input type="color" />
                                </div>
                                <div className="col-3 mb-3">
                                  <label
                                    className="mb-1"
                                    id="change-footer-color"
                                  >
                                    Footer Color:
                                  </label>
                                  <input type="color" />
                                </div>
                                <div className="col-3 mb-3">
                                  <label
                                    className="mb-1"
                                    id="change-main-color"
                                  >
                                    Main Color:
                                  </label>
                                  <input type="color" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn-update"
                            value={this.state.pageSettings.background_image}
                            onClick={btnChangeSettingOnClick}
                          >
                            <b>UPDATE</b>
                          </button>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xl-8 col-lg-12 col-md-12" id="account-detail">
            <div className="card" id="account-detail-body">
              <div className="card-header background-header-content">
                <h4>
                  <b>Account Details</b>
                </h4>
              </div>
              <div className="card-body background-header-body">
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="fullname">
                    <b>FULL NAME</b>
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    defaultValue={this.state.account.name}
                  />
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="email">
                    <b>EMAIL</b>
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    defaultValue={this.state.account.email}
                  />
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="address">
                    <b>ADDRESS</b>
                  </label>
                  <input
                    className="form-control"
                    id="address"
                    type="text"
                    defaultValue={this.state.account.address}
                  />
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="contact">
                      <b>PHONE NUMBER</b>
                    </label>
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      defaultValue={this.state.account.phone}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="dateofbirth">
                      <b>BIRTHDAY</b>
                    </label>
                    <input
                      className="form-control"
                      id="dob"
                      type="text"
                      defaultValue={this.state.account.dob}
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-12">
                    <label className="small mb-1" htmlFor="contact">
                      <b>PARTNER</b>
                    </label>
                    <textarea
                      className="form-control"
                      id="partner"
                      type="text"
                      cols="100"
                      defaultValue={this.state.account.partner}
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1">
                      <b>INFORMATION</b>
                    </label>
                    <textarea
                      className="form-control"
                      id="information"
                      type="text"
                      cols="50"
                      rows="5"
                      defaultValue={this.state.account.information}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="small mb-1">
                      <b>GENDER</b>
                    </label>
                    <br />
                    <select
                      id="gender"
                      defaultValue={this.state.account.gender}
                    >
                      <option value={this.state.account.gender} hidden>
                        {this.state.account.gender}
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <button className="btn-edit" onClick={btnEditOnClick}>
                  <b>EDIT</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr id="user-profile-hr" />
        <div className="row btn-form-group">
          <button
            id={this.state.viewIndex == 1 ? "btn-fade-in" : "btn-fade-out"}
            value={1}
            onClick={btnMenuOnClick}
          >
            PROJECTS
          </button>

          <button
            id={this.state.viewIndex == 2 ? "btn-fade-in" : "btn-fade-out"}
            value={2}
            onClick={btnMenuOnClick}
          >
            EXPERIENTS
          </button>

          <button
            id={this.state.viewIndex == 3 ? "btn-fade-in" : "btn-fade-out"}
            value={3}
            onClick={btnMenuOnClick}
          >
            INFORMATION
          </button>

          <button
            id={this.state.viewIndex == 4 ? "btn-fade-in" : "btn-fade-out"}
            value={4}
            onClick={btnMenuOnClick}
          >
            EDUCATION
          </button>

          <button
            id={this.state.viewIndex == 5 ? "btn-fade-in" : "btn-fade-out"}
            value={5}
            onClick={btnMenuOnClick}
          >
            SKILL
          </button>

          <button
            id={this.state.viewIndex == 6 ? "btn-fade-in" : "btn-fade-out"}
            value={6}
            onClick={btnMenuOnClick}
          >
            VIDEOS
          </button>

          <button
            id={this.state.viewIndex == 7 ? "btn-fade-in" : "btn-fade-out"}
            value={7}
            onClick={btnMenuOnClick}
          >
            IMAGES
          </button>
        </div>
        <hr id="user-profile-hr" />
        <div className="container">
          <div
            className={
              this.state.viewIndex == 1 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            {this.state.projectsLoading ? (
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Project projects={this.state.projects} />
            )}
          </div>
          <div
            className={
              this.state.viewIndex == 2 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            {this.state.experientsLoading ? (
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Experients experients={this.state.experients} />
            )}
          </div>
          <div
            className={
              this.state.viewIndex == 3 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            {this.state.informationLoading ? (
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Information information={this.state.information} />
            )}
          </div>

          <div
            className={
              this.state.viewIndex == 4 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            {this.state.educationLoading ? (
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Education education={this.state.education} />
            )}
          </div>

          <div
            className={
              this.state.viewIndex == 5 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            {this.state.skillsLoading ? (
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Skills skills={this.state.skills} />
            )}
          </div>

          <div
            className={
              this.state.viewIndex == 6 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            {this.state.videosLoading ? (
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Videos videos={this.state.videos} />
            )}
          </div>

          <div
            className={
              this.state.viewIndex == 7 ? "popup-fade-in" : "popup-fade-out"
            }
          >
            {this.state.imagesLoading ? (
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Images images={this.state.images} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
