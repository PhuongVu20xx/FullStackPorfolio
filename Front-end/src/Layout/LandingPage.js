import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import {
  SELECT_ACCOUNT_INFO,
  SHOW_PROJECTS,
  SHOW_EXPERIENTS,
  SHOW_INFORMATION,
  SHOW_EDUCATION,
  SHOW_SKILLS,
  SELECTED_PROJECT_VIDEOS,
  SELECTED_PROJECT_IMAGES,
} from "./ServerService/API";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Project from "./Action/Project";
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
    return (
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row">
          {/* <div className="col-2"></div> */}
          <div className="col-md-4 mt-3">
            <div className="gx-3 mb-2">
              <i
                className="fa-solid fa-person-half-dress"
                style={{ scale: "200%", marginRight: "30px", color: "#BFBABA" }}
              ></i>
              <label
                style={{
                  fontSize: "20px",
                  color: this.state.account.text_color,
                }}
              >
                Female
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
                  color: this.state.account.text_color,
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
                  color: this.state.account.text_color,
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
                  color: this.state.account.text_color,
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
                  color: this.state.account.text_color,
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
                    color: this.state.account.text_color,
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
                    color: this.state.account.text_color,
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
                <button className="btn-landing-page">Project</button>
              </a>
              <a href="#information">
                <button className="btn-landing-page">Information</button>
              </a>
              <a href="#experients">
                <button className="btn-landing-page">Experients</button>
              </a>
              <a href="#education">
                <button className="btn-landing-page">Education</button>
              </a>
              <a
                href={`https://rynadb.herokuapp.com/Files/${this.state.account.cv}`}
                target="blank"
                download={true}
              >
                <button className="btn-landing-page">Down CV</button>
              </a>
            </div>
          </div>

          <div className="col-md-8 mt-3">
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
                <div className="gx-3 mb-2">
                  <label
                    className="small"
                    style={{
                      fontSize: "20px",
                      color: this.state.account.text_color,
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
                      color: this.state.account.text_color,
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
                      color: this.state.account.text_color,
                    }}
                  >
                    luongtuankiet@gmail.com
                  </label>
                </div>
              </div>
            </div>

            <hr />
            <div>
              <h3 id="project" className="landing-page-lable">
                Projects
              </h3>
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
                <div id="projects-wrapper">
                  {this.state.projects.map((project, index) => {
                    return (
                      <button
                        key={index}
                        style={{
                          backgroundImage: `url(https://rynadb.herokuapp.com/Images/${project.thumbnail})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        className="button"
                        value={project.id}
                        data-content={project.name}
                        onClick={openModalUpdateProject}
                      >
                        {project.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <Modal
              isOpen={this.state.modalProjectIsOpen}
              onAfterOpen={afterOpenModalUpdateProject}
              onRequestClose={closeModalUpdateProject}
              style={customStyles}
              contentLabel="Project Modal"
            >
              <h2
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="modal-title"
              >
                {this.state.currentProject.name}
                <i
                  className="fa-solid fa-rectangle-xmark close-icon"
                  onClick={closeModalUpdateProject}
                ></i>
              </h2>

              <Project
                currentProject={this.state.currentProject}
                videos={this.state.videos}
                images={this.state.images}
                loadingImages={this.state.loadingImages}
                loadingVideos={this.state.loadingVideos}
              />
            </Modal>
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
                        <label className="landing-page-information">
                          {info.info}
                        </label>
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
                      <div key={index} className="row">
                        <div className="col-2 landing-page-information">
                          {exp.work_time}
                        </div>
                        <div className="col-7">
                          <div className="row">
                            <label className="col-12 landing-page-information">
                              Work place
                            </label>
                            <label className="col-12 landing-page-information">
                              {exp.work_place}
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-12 landing-page-information">
                              Position
                            </label>
                            <label
                              className="col-12 landing-page-information"
                              htmlFor=""
                            >
                              {exp.position}
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-12 landing-page-information">
                              Experient
                            </label>
                            <label className="col-12 landing-page-information">
                              {exp.experient}
                            </label>
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
                      <div key={index}>
                        <div key={index} className="row">
                          <div className="col-2 landing-page-information">
                            {edu.learn_time}
                          </div>
                          <div className="col-7">
                            <div className="row">
                              <label className="col-12 landing-page-information">
                                School
                              </label>
                              <label className="col-12 landing-page-information">
                                {edu.school}
                              </label>
                            </div>
                            <div className="row">
                              <label className="col-12 landing-page-information">
                                Course
                              </label>
                              <label
                                className="col-12 landing-page-information"
                                htmlFor=""
                              >
                                {edu.course}
                              </label>
                            </div>
                            <div className="row">
                              <label className="col-12 landing-page-information">
                                Information
                              </label>
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
