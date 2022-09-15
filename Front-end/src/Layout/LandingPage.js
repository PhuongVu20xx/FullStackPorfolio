import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import {
  FILE,
  IMAGE,
  SELECT_ACCOUNT_INFO,
  SHOW_PROJECTS,
  SHOW_EXPERIENTS,
  SHOW_INFORMATION,
  SHOW_EDUCATION,
  SHOW_SKILLS,
  SELECTED_PROJECT_VIDEOS,
  SELECTED_PROJECT_IMAGES,
} from "./ServerService/API";
import Modal from "react-modal";
import Project from "./Action/Project";

import cv from "../Image/Vu-Xuan-Phuong-Back-end-Dev.pdf";
class LandingPage extends Component {
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
    currentProject: {},
    modalProjectIsOpen: false,
    videos: [],
    loadingVideos: false,
    images: [],
    loadingImages: false,
  };

  componentDidMount() {
    this.setState({ viewIndex: 1 });
    this.setState({ projectsLoading: true });
    this.setState({ modalProjectIsOpen: false });
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
      .post(SHOW_PROJECTS)
      .then((response) => {
        self.setState({ projects: response.data });
        self.setState({ projectsLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SHOW_EXPERIENTS)
      .then((response) => {
        self.setState({ experients: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SHOW_INFORMATION)
      .then((response) => {
        self.setState({ information: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SHOW_EDUCATION)
      .then((response) => {
        self.setState({ education: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(SHOW_SKILLS)
      .then((response) => {
        self.setState({ skills: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
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
    const selectedProject = (id) => {
      this.state.projects.forEach((project) => {
        if (id == project.id) {
          self.setState({ currentProject: project });
        }
      });
    };

    function openModalUpdateProject(e) {
      self.setState({ modalProjectIsOpen: true });
      self.setState({ loadingVideos: true });
      self.setState({ loadingImages: true });
      const id = e.target.value;

      console.log(e.target);
      selectedProject(id);

      axios
        .post(SELECTED_PROJECT_VIDEOS, { id })
        .then((response) => {
          self.setState({ videos: response.data });
          self.setState({ loadingVideos: false });
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .post(SELECTED_PROJECT_IMAGES, { id })
        .then((response) => {
          self.setState({ images: response.data });
          self.setState({ loadingImages: false });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function afterOpenModalUpdateProject() {
      subtitle.style.color = "black";
    }
    function closeModalUpdateProject() {
      self.setState({ modalProjectIsOpen: false });
    }

    const projects = [
      {
        time: "8 August 2022 - <br />12 August 2022",
        name: "VNHP-HEALTH-CARE",
        type: "WEB APPLICATION",
        work: "- Database design<br/>- User profile, register, login. Admin (doctor) view history, create new bill <br/>- Support team as a leader",
        function:
          "- Login/Logout: Client won't be able to access any admin page if they aren't logged in. <br />" +
          "- Admin profile: Display admin information. Client also changes their information and passwords. <br />" +
          "- Dasboard: I have taken data from API and have displayed revenues by charts and statistic of loyal customer. <br />" +
          "- Customer: Display all customer by a datatable. Client also sees all user's bidding and payment histories <br />" +
          "- Feedback: Present each card for one product, you can click on comments to show all product's review. <br />" +
          "- Product: Displayed all products of website from API, client can also activate or deactivate one product. It will show up or disappear on user page. Besides, client can add or edit any products they want <br />" +
          "- Doctor: Displayed all doctors of website from API. Moreover, client can add new doctors <br />" +
          "- Post: Client can add new post about heathing of website. Besides, client can add new or edit any posts they want <br />" +
          "- Appointment: Display all current and histories appointment.",
        solfware:
          "- Visual studio code 2019 <br /> - SQL SERVER 2019 <br /> -Github",
        tech: " - ReactJS, Bootstrap, CSS (front-end)<br /> - Laravel API (back-end)",
        source: "https://gitlab.com/vnhp-group/fitness-lifestyle-tech-wiz",
        images: "",
        video: (
          <iframe
            width="546"
            height="356"
            src="https://www.youtube.com/embed/JYM16JwFCSU"
            title="vnhp health care"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        time: "8 July 2022 - <br />4 August 2022",
        name: "VNHP-ONLINE-AUTION",
        type: "WEB APPLICATION",
        work: "- Database design<br />- User page: register, login, profile<br />- Support team as a leader",
        function:
          "- Login/Logout: Client won't be able to access any admin pages if they aren't logged in. <br />" +
          "- Admin profile: Display admin information. Client also changes their information and passwords. <br />" +
          "- Dasboard: I have taken data from API and have displayed revenues by charts and statistic of loyal customer. <br />" +
          "- Customer: Display all customer by a datatable. Client also sees user's bidding histories and all payment histories.<br />" +
          "- Feedback: Each card for one product, you can click on comment to show all product's review. <br />" +
          "- Bill: I have displayed all bills of all customers from API, client has searched characters so client can search to look for which bill they need. Besides, I also have displayed 3 statuses of bill (Paid + Unpaid + Pending Payment). <br />" +
          "- Bill Detail: Client can click on the detail button to view Bill Detail and call for customer to remind their payments or other issues. <br />" +
          "- Category: All categories are display on the website from API, client can activate or deactivate any categories. It can show up or disappear flexibly on user's page. Moreover, client can add or edit any categories they want. <br />" +
          "- Product: Displayed all products of website from API, client can also active or deactive one product. It will show up or disappear on user page. Besides, client can add new or edit any products they want",
        solfware:
          "- Visual studio code 2019 <br /> - SQL SERVER 2019 <br /> -Github",
        tech: " - ReactJS, Bootstrap, CSS (front-end)<br /> - Laravel API (back-end)",
        source: "https://github.com/phongvan-1412/VNHP-Online-Auction",
        images: "",
        video: (
          <iframe
            width="546"
            height="371"
            src="https://www.youtube.com/embed/FOOEn4aIbM8"
            title="vnhp online aution"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        time: "April 2022 -<br /> Now",
        name: "GREEN BELI",
        type: "WEB GAME - TURN BASE",
        work: "- Build new feature.<br /> - coffee voucher.<br /> - Fix bug.",
        function:
          "The project “Green Beli” started from 2019 with a mission to reduce plastic waste, promote a green lifestyle and raise community’s environmental awareness via media campaigns. ",
        solfware: "- Unity 2020.3.20f1",
        tech: "C#",
        source: "https://build-dev.d325gj1lpt9b8d.amplifyapp.com/",
        images: "",
        video: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UFI4nEUiwyg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ),
      },
      {
        time: "May 2022 -<br /> July 2022",
        name: "ESCAPE PLAN 3D",
        type: "PC-THIRD PERSON",
        work: "- Design core game.<br />- Support team as a leader.<br /> - Fix bug.",
        function:
          "Elen - main character, in order to escape the dangerous landscape, she must kill and overcome any monster and boss on the road, then find the way to the ship at the end.",
        solfware: "- Unity 2020.3.20f1",
        tech: "C#",
        source: "https://gitlab.com/teeltruong/escapeplan3dproject.git",
        images: "",
        video: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CqPRpWpDY5g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ),
      },
    ];

    let tmp = 0;
    return (
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-md-2 mt-3">
            <div className="gx-3 mb-2">
              <i
                className="fa-solid fa-person-half-dress"
                style={{ scale: "200%", marginRight: "30px", color: "#BFBABA" }}
              ></i>
              <label
                style={{
                  fontSize: "20px",
                  color: this.state.account.content_color,
                }}
              >
                {this.state.account.gender}
              </label>
            </div>
            <div className="gx-3 mb-2">
              <i
                className="fa-solid fa-calendar"
                style={{ scale: "170%", marginRight: "25px", color: "#BFBABA" }}
              ></i>
              <label
                className="small"
                style={{
                  fontSize: "20px",
                  color: this.state.account.content_color,
                }}
              >
                {this.state.account.dob}
              </label>
            </div>
            <div className="gx-3 mb-2">
              <i
                className="fa-solid fa-square-phone-flip"
                style={{ scale: "190%", marginRight: "25px", color: "#BFBABA" }}
              ></i>
              <label
                className="small"
                style={{
                  fontSize: "20px",
                  color: this.state.account.content_color,
                }}
              >
                {this.state.account.phone}
              </label>
            </div>
            <div className=" gx-3 mb-2">
              <i
                className="fa-solid fa-envelope"
                style={{ scale: "170%", marginRight: "25px", color: "#BFBABA" }}
              ></i>
              <label
                className="small"
                style={{
                  fontSize: "20px",
                  color: this.state.account.content_color,
                }}
              >
                {this.state.account.email}
              </label>
            </div>

            <div className=" gx-3 mb-2">
              <i
                className="fa-sharp fa-solid fa-location-dot"
                style={{ scale: "180%", marginRight: "25px", color: "#BFBABA" }}
              ></i>
              <label
                className="small"
                style={{
                  fontSize: "20px",
                  color: this.state.account.content_color,
                }}
              >
                {this.state.account.address}
              </label>
            </div>

            {this.state.account.partner == "" ? null : (
              <div>
                <label className="small">
                  <i
                    className="fa-solid fa-handshake"
                    style={{
                      scale: "180%",
                      marginRight: "25px",
                      color: "#BFBABA",
                    }}
                  ></i>
                </label>
                <label
                  className="col-12"
                  style={{
                    fontSize: "20px",
                    color: this.state.account.content_color,
                  }}
                >
                  {this.state.account.partner}
                </label>
              </div>
            )}
            {this.state.account.information == "" ? null : (
              <div className=" gx-3 mb-2">
                <i
                  className="fa-solid fa-bars"
                  style={{
                    scale: "180%",
                    marginRight: "25px",
                    color: "#BFBABA",
                  }}
                ></i>
                <label
                  className="col-12"
                  style={{
                    fontSize: "20px",
                    color: this.state.account.content_color,
                  }}
                >
                  {this.state.account.information}
                </label>
              </div>
            )}
            <div className="main-home-navigator">
              <a href="#skills">
                <button className="btn-landing-page">Skills</button>
              </a>
              <a href="#project">
                <button className="btn-landing-page">Projects</button>
              </a>
              <a href="#information">
                <button className="btn-landing-page">Info</button>
              </a>
              <a href="#experients">
                <button className="btn-landing-page">Exps</button>
              </a>
              <a href="#education">
                <button className="btn-landing-page">Edu</button>
              </a>
              <a
                href={cv}
                target="blank"
                download={true}
              >
                <button className="btn-landing-page">CV</button>
              </a>
            </div>
          </div>

          <div className="col-md-10 mt-3">
            <div className="row">
              <div className="col-lg-7">
                <h3 id="skills" className="landing-page-lable">
                  Skills
                </h3>
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
                  <div id="skills-wrapper">
                    {this.state.skills.map((skill, index) => {
                      return (
                        <div key={index}>
                          <label className="landing-page-skill">
                            {skill.name}
                          </label>
                          <div
                            className="progress mb-3"
                            style={{ width: "100px", height: "10px" }}
                          >
                            <div
                              className={
                                skill.ranking <= 6
                                  ? "progress-bar bg-warning"
                                  : "progress-bar bg-success"
                              }
                              role="progressbar"
                              style={{ width: skill.ranking * 10 + "%" }}
                              aria-valuenow={skill.ranking * 10}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="col-lg-5">
                <h3 id="references" className="landing-page-lable">
                  References
                </h3>
                {/* <div className="gx-3 mb-2">
                  <label
                    className="small"
                    style={{
                      fontSize: "20px",
                      color: this.state.account.content_color,
                    }}
                  >
                    Luong Tuan Kiet
                  </label>
                </div>
                <div className="gx-3 mb-2">
                  <i
                    className="fa-solid fa-square-phone-flip"
                    style={{
                      scale: "190%",
                      marginRight: "25px",
                      marginLeft: "5px",
                      color: "#BFBABA",
                    }}
                  ></i>
                  <label
                    className="small"
                    style={{
                      fontSize: "20px",
                      color: this.state.account.content_color,
                    }}
                  >
                    0908 567 100
                  </label>
                </div>
                <div className="gx-3 mb-2">
                  <i
                    className="fa-solid fa-envelope"
                    style={{
                      scale: "170%",
                      marginRight: "25px",
                      marginLeft: "5px",
                      color: "#BFBABA",
                    }}
                  ></i>
                  <label
                    className="small"
                    style={{
                      fontSize: "20px",
                      color: this.state.account.content_color,
                    }}
                  >
                    luongtuankiet@gmail.com
                  </label>
                </div> */}
              </div>
            </div>

            <hr />
            <h3 id="project" className="landing-page-lable">
              Projects
            </h3>
            {projects.map((project, index) => {
              return (
                <div className="row" key={index}>
                  <div hidden>{tmp++}</div>
                  <div
                    className="col-2 landing-page-information"
                    dangerouslySetInnerHTML={{ __html: project.time }}
                  ></div>
                  <div className="col-10">
                    <h4 className="landing-page-information">{project.name}</h4>
                    <div
                      className="landing-page-information"
                      dangerouslySetInnerHTML={{ __html: project.type }}
                    ></div>
                    <div className="landing-page-lable">MAIN WORK</div>
                    <div
                      className="landing-page-information"
                      dangerouslySetInnerHTML={{ __html: project.work }}
                    ></div>
                    <div className="landing-page-lable">FUNCTION</div>
                    <div
                      className="landing-page-information"
                      dangerouslySetInnerHTML={{ __html: project.function }}
                    ></div>
                    <div className="landing-page-lable">SOFTWARE</div>
                    <div
                      className="landing-page-information"
                      dangerouslySetInnerHTML={{ __html: project.solfware }}
                    ></div>
                    <div className="landing-page-lable">TECHNOLOGY</div>
                    <div
                      className="landing-page-information"
                      dangerouslySetInnerHTML={{ __html: project.tech }}
                    ></div>
                    <div className="landing-page-lable">SOURCE</div>
                    <div className="landing-page-information">
                      <a href={project.source} target="blank">Link</a>
                    </div>
                    <div className="landing-page-lable">VIDEO</div>
                    <div className="landing-page-information">
                      {project.video}
                    </div>
                    {/* <div className="landing-page-lable">IMAGES</div>
                    <div
                      className="landing-page-information"
                      dangerouslySetInnerHTML={{ __html: project.tech }}
                    ></div> */}
                    {tmp < projects.length ? <hr /> : null}
                  </div>
                </div>
              );
            })}
            <hr />
            <div>
              <h3 id="information" className="landing-page-lable">
                Information
              </h3>
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
                <div>
                  {this.state.information.map((info, index) => {
                    return (
                      <div key={index}>
                        <label
                          className="landing-page-information"
                          dangerouslySetInnerHTML={{ __html: info.info }}
                        ></label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <hr />

            <div>
              <h3 id="experients" className="landing-page-lable">
                Experients
              </h3>
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
                <div>
                  {this.state.experients.map((exp, index) => {
                    return (
                      <div key={index} className="row mb-3">
                        <div className="col-2 landing-page-information">
                          {exp.work_time}
                        </div>
                        <div className="col-7">
                          <div className="row">
                            {/* <label className="col-12 landing-page-information">
                              Work place
                            </label> */}
                            <label className="col-12 landing-page-information">
                              {exp.work_place}
                            </label>
                          </div>
                          <div className="row">
                            {/* <label className="col-12 landing-page-information">
                              Position
                            </label> */}
                            <label
                              className="col-12 landing-page-information"
                              dangerouslySetInnerHTML={{ __html: exp.position }}
                            ></label>
                          </div>
                          <div className="row">
                            {/* <label className="col-12 landing-page-information">
                              Experient
                            </label> */}
                            <label
                              className="col-12 landing-page-information"
                              dangerouslySetInnerHTML={{
                                __html: exp.experient,
                              }}
                            ></label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <hr />

            <div>
              <h3 id="education" className="landing-page-lable">
                Education
              </h3>
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
                <div className="mb-4">
                  {this.state.education.map((edu, index) => {
                    return (
                      <div key={index} className="mb-3">
                        <div key={index} className="row">
                          <div className="col-2 landing-page-information">
                            {edu.learn_time}
                          </div>
                          <div className="col-7">
                            <div className="row">
                              {/* <label className="col-12 landing-page-information">
                                School
                              </label> */}
                              <label className="col-12 landing-page-information">
                                {edu.school}
                              </label>
                            </div>
                            <div className="row">
                              {/* <label className="col-12 landing-page-information">
                                Course
                              </label> */}
                              <label
                                className="col-12 landing-page-information"
                                htmlFor=""
                              >
                                {edu.course}
                              </label>
                            </div>
                            <div className="row">
                              {/* <label className="col-12 landing-page-information">
                                Information
                              </label> */}
                              <label className="col-12 landing-page-information">
                                {edu.info}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
