import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Modal from "react-modal";
import axios from "axios";
import {
  ADD_NEW_PROJECT,
  UPDATE_PROJECT_INFO,
  CHANGE_PROJECT_THUMBNAIL,
  CHANGE_PROJECT_STATUS,
  ADD_NEW_VIDEO,
  ADD_NEW_IMAGE,
} from "../ServerService/API";

function Projects({ projects }) {
  function Search() {
    var value = $("#search-project").val().toLowerCase();
    $("#bill-records tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  }
  let i = 1;

  const [currentPage, setCurrentPage] = useState(1);
  if (currentPage > 1) {
    i = 1;
  }
  const productsPerPage = 10;

  const indexOfLastPage = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const currentProjects = projects.slice(indexOfFirstPage, indexOfLastPage);

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projects.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number) => {
    setCurrentPage(number);
  };

  //modal
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

  const [modalNewProjectIsOpen, setNewProjectIsOpen] = useState(false);
  const [modalUpdateProjectIsOpen, setUpdateProjectIsOpen] = useState(false);
  const [modalUpdateThumbnailIsOpen, setUpdateThumbnailIsOpen] =
    useState(false);
  const [modalNewVideoIsOpen, setNewVideoIsOpen] = useState(false);
  const [modalNewImageIsOpen, setNewImageIsOpen] = useState(false);
  let subtitle;

  //new project modal
  function openModalNewProject(e) {
    setNewProjectIsOpen(true);
  }
  function afterOpenModalNewProject() {
    subtitle.style.color = "black";
  }
  function closeModalNewProject() {
    setNewProjectIsOpen(false);
  }

  const [currentProject, setCurrentProject] = useState({});
  const selectedProject = (id) => {
    currentProjects.forEach((project) => {
      if (id == project.id) {
        setCurrentProject(project);
      }
    });
  };

  //UpdateProject modal
  function openModalUpdateProject(e) {
    setUpdateProjectIsOpen(true);
    selectedProject(e.target.value);
  }
  const btnUpdateProjectOnClick = () => {
    const id = currentProject.id;
    const name = $("#update-project-name").val();
    const working_days = $("#update-project-working-days").val();
    const verts = $("#update-project-verts").val();
    const edges = $("#update-project-edges").val();
    const faces = $("#update-project-faces").val();
    const tris = $("#update-project-tris").val();
    const information = $("#update-project-information").val();

    const maya = $("#update-project-maya").prop("checked") == 1 ? "Maya," : "";
    const zbrush =
      $("#update-project-zbrush").prop("checked") == 1 ? "ZBrush," : "";
    const substance =
      $("#update-project-substance").prop("checked") == 1
        ? "Adobe Substance 3D,"
        : "";
    const photoshop =
      $("#update-project-photoshop").prop("checked") == 1 ? "Photoshop," : "";
    const illustrator =
      $("#update-project-illustrator").prop("checked") == 1
        ? "Adobe Illustrator."
        : "";

    const test = maya + zbrush + substance + photoshop + illustrator;
    const solfware = test.substring(0, test.length - 1);

    const data = {
      id,
      name,
      working_days,
      verts,
      edges,
      faces,
      tris,
      solfware,
      information,
    };
    axios
      .post(UPDATE_PROJECT_INFO, data)
      .then((response) => {
        if (response.data > 0) {
          alert("Update update project successfull.");
        } else {
          alert("Update update project fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function afterOpenModalUpdateProject() {
    subtitle.style.color = "black";
  }
  function closeModalUpdateProject() {
    setUpdateProjectIsOpen(false);
  }

  //UpdateThumbnail modal
  function openModalUpdateThumbnail(e) {
    setUpdateThumbnailIsOpen(true);
    selectedProject(e.target.value);
  }
  const btnUpdateThumbnailOnClick = () => {
    const id = currentProject.id;
    const old_thumbnail = currentProject.thumbnail;

    const thumbnail = $("#update-thumbnail").prop("files")[0];
    const tmp = thumbnail.name;
    const index = tmp.indexOf(".");
    const img_extension = tmp.substr(index, index + 5);

    let data = new FormData();
    data.set("thumbnail", thumbnail);
    data.set("img_extension", img_extension);
    data.set("id", id);
    data.set("old_thumbnail", old_thumbnail);

    axios
      .post(CHANGE_PROJECT_THUMBNAIL, data)
      .then((response) => {
        if (response.data > 0) {
          alert("Update update thumbnail successfull.");
        } else {
          alert("Update update thumbnail fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function afterOpenModalUpdateThumbnail() {
    subtitle.style.color = "black";
  }
  function closeModalUpdateThumbnail() {
    setUpdateThumbnailIsOpen(false);
  }

  //NewVideo modal
  function openModalNewVideo(e) {
    setNewVideoIsOpen(true);
    selectedProject(e.target.value);
  }
  const btnAddVideoOnClick = () => {
    const project_id = currentProject.id;
    const source = $("#source").val();

    const data = { source, project_id };
    axios
      .post(ADD_NEW_VIDEO, data)
      .then((response) => {
        if (response.data > 0) {
          alert("Update add video successfull.");
        } else {
          alert("Update add video fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function afterOpenModalNewVideo() {
    subtitle.style.color = "black";
  }
  function closeModalNewVideo() {
    setNewVideoIsOpen(false);
  }

  //NewImage modal
  function openModalNewImage(e) {
    setNewImageIsOpen(true);
    selectedProject(e.target.value);
  }
  const btnAddImageOnClick = () => {
    const project_id = currentProject.id;
    const image = $("#image").prop("files")[0];
    const tmp = image.name;
    const index = tmp.indexOf(".");
    const img_extension = tmp.substr(index, index + 5);

    let data = new FormData();
    data.set("image", image);
    data.set("img_extension", img_extension);
    data.set("project_id", project_id);

    axios
      .post(ADD_NEW_IMAGE, data)
      .then((response) => {
        if (response.data > 0) {
          alert("Update add image successfull.");
        } else {
          alert("Update add image fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function afterOpenModalNewImage() {
    subtitle.style.color = "black";
  }
  function closeModalNewImage() {
    setNewImageIsOpen(false);
  }

  //new project
  const btnAddOnClick = () => {
    const name = $("#project-name").val();
    const working_days = $("#working-days").val();
    const verts = $("#verts").val();
    const edges = $("#edges").val();
    const faces = $("#faces").val();
    const tris = $("#tris").val();
    const information = $("#information").val();

    const thumbnail = $("#thumbnail").prop("files")[0];
    const tmp = thumbnail.name;
    const index = tmp.indexOf(".");
    const img_extension = tmp.substr(index, index + 5);

    const maya = $("#maya").prop("checked") == 1 ? "Maya," : "";
    const zbrush = $("#zbrush").prop("checked") == 1 ? "ZBrush," : "";
    const substance =
      $("#substance").prop("checked") == 1 ? "Adobe Substance 3D," : "";
    const photoshop = $("#photoshop").prop("checked") == 1 ? "Photoshop," : "";
    const illustrator =
      $("#illustrator").prop("checked") == 1 ? "Adobe Illustrator." : "";

    const test = maya + zbrush + substance + photoshop + illustrator;
    const solfware = test.substring(0, test.length - 1);

    let data = new FormData();
    data.set("thumbnail", thumbnail);
    data.set("img_extension", img_extension);
    data.set("name", name);
    data.set("working_days", working_days);
    data.set("verts", verts);
    data.set("edges", edges);
    data.set("faces", faces);
    data.set("tris", tris);
    data.set("solfware", solfware);
    data.set("information", information);

    axios
      .post(ADD_NEW_PROJECT, data)
      .then((response) => {
        console.log(response.data);
        if (response.data > 0) {
          alert("Update add project successfull.");
        } else {
          alert("Update add project fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onProjectChangeStatus = (e) => {
    const status = e.target.checked ? "1" : "0";
    const id = parseInt(e.target.name);
    const data = { id, status };
    axios
      .post(CHANGE_PROJECT_STATUS, data)
      .then((response) => {
        if (response.data > 0) {
          alert("Update update status successfull.");
        } else {
          alert("Update update status fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <button onClick={openModalNewProject} className="btn-edit">
        New
      </button>
      {projects.length <= 0 ? (
        <div className="row">
          <div className="col-5"></div>
          <div className="col-2">
            <span>No record found</span>
          </div>
          <div className="col-5"></div>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3 background-header-content">
            <h4 className="m-0 font-weight-bold">Projects</h4>
          </div>
          <div className="card-body background-header-body">
            <input
              className="form-control col-3 mb-3"
              id="search-project"
              type="text"
              onKeyUp={Search}
              placeholder="Search.."
            />
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                style={{ width: "100%" }}
                cellSpacing="0"
              >
                <thead>
                  <tr className="table-title">
                    <th>No</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="bill-records">
                  {currentProjects.map((bh, index) => {
                    return (
                      <tr key={index} className="table-text">
                        <td className="fit-content">
                          <b>{(currentPage - 1) * 10 + i++}</b>
                        </td>
                        <td className="fit-content">
                          <img
                            className="img-user-account-profile"
                            id="avatar"
                            src={
                              "https://rynadb.herokuapp.com/Images/" +
                              bh.thumbnail
                            }
                          />
                        </td>
                        <td className="float-right-text">{bh.name}</td>
                        <td className="fit-content">
                          {bh.status ? (
                            <label className="switch">
                              <input
                                type="checkbox"
                                defaultChecked
                                name={bh.id}
                                onClick={onProjectChangeStatus}
                              />
                              <span className="slider round"></span>
                            </label>
                          ) : (
                            <label className="switch">
                              <input
                                type="checkbox"
                                name={bh.id}
                                onClick={onProjectChangeStatus}
                              />
                              <span className="slider round"></span>
                            </label>
                          )}
                        </td>
                        <td className="fit-content">
                          <button
                            onClick={openModalNewVideo}
                            value={bh.id}
                            className="btn-change-profile"
                          >
                            Add Video
                          </button>
                          <br />
                          <button
                            onClick={openModalNewImage}
                            value={bh.id}
                            className="btn-change-profile"
                          >
                            Add Image
                          </button>{" "}
                          <br />
                          <button
                            onClick={openModalUpdateProject}
                            value={bh.id}
                            className="btn-change-profile"
                          >
                            Update Project
                          </button>
                          <br />
                          <button
                            onClick={openModalUpdateThumbnail}
                            value={bh.id}
                            className="btn-change-profile"
                          >
                            Update Thumbnail
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div
              className="col-md-10"
              style={{ padding: "0px", margin: "0px" }}
            >
              <ul className="pagination">
                {pageNumbers.map((number, index) => (
                  <li key={index} className="page-item">
                    <Link
                      to="#"
                      className="page-link"
                      onClick={() => paginate(number)}
                    >
                      <b>{number}</b>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* new project */}
      <Modal
        isOpen={modalNewProjectIsOpen}
        onAfterOpen={afterOpenModalNewProject}
        onRequestClose={closeModalNewProject}
        style={customStyles}
        contentLabel="Example Modal"
        id="project-modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">
          <b className="text-title">New Project</b>
          <i
            className="fa-solid fa-rectangle-xmark close-icon"
            onClick={closeModalNewProject}
          ></i>
        </h2>

        <div className="card-body user-profile-body">
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <label className="small mb-1">
                  <b className="text-title">PROJECT NAME</b>
                </label>
                <input className="form-control" id="project-name" type="text" />
              </div>
              <div className="col-6">
                <label className="small mb-1">
                  <b className="text-title">WORKING DAYS</b>
                </label>
                <input className="form-control" id="working-days" type="text" />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="row">
              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">VERTS</b>
                </label>
                <input className="form-control" id="verts" type="text" />
              </div>

              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">EDGES</b>
                </label>
                <input className="form-control" id="edges" type="text" />
              </div>

              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">FACES</b>
                </label>
                <input className="form-control" id="faces" type="text" />
              </div>

              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">TRIS</b>
                </label>
                <input className="form-control" id="tris" type="text" />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="small mb-1" htmlFor="address">
              <b className="text-title">SOLFWARE</b>
            </label>
            <div className="row">
              <div className="col-3">
                <label className="text-title">Maya</label> <input id="maya" type="checkbox" />
              </div>

              <div className="col-3">
                <label className="text-title">ZBrush</label> <input id="zbrush" type="checkbox" />
              </div>
              <div className="col-3">
                <label className="text-title">Adobe Substance 3D</label>{" "}
                <input id="substance" type="checkbox" />
              </div>
              <div className="col-3">
                <label className="text-title">Photoshop</label>{" "}
                <input id="photoshop" type="checkbox" />
              </div>
              <div className="col-3">
                <label className="text-title">Adobe Illustrator</label>{" "}
                <input id="illustrator" type="checkbox" />
              </div>
            </div>
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1">
                <b className="text-title">THUMBNAIL</b>
              </label>
              <input className="form-control" id="thumbnail" type="file" />
            </div>
            <div className="col-md-6">
              <label className="mb-1">
                <b className="text-title">INFORMATION</b>
              </label>
              <textarea
                className="form-control"
                id="information"
                rows="5"
                cols="50"
                type="text"
              />
            </div>
          </div>

          <button className="btn-add" onClick={btnAddOnClick}>
            <b>ADD</b>
          </button>
        </div>
      </Modal>

      {/* update project */}
      <Modal
        isOpen={modalUpdateProjectIsOpen}
        onAfterOpen={afterOpenModalUpdateProject}
        onRequestClose={closeModalUpdateProject}
        style={customStyles}
        contentLabel="Example Modal"
        id="project-modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">
          <b className="text-title">Update Project</b>
          <i
            className="fa-solid fa-rectangle-xmark close-icon"
            onClick={closeModalUpdateProject}
          ></i>
        </h2>

        <div className="card-body user-profile-body">
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <label className="small mb-1">
                  <b className="text-title">PROJECT NAME</b>
                </label>
                <input
                  className="form-control"
                  id="update-project-name"
                  defaultValue={currentProject.name}
                  type="text"
                />
              </div>
              <div className="col-6">
                <label className="small mb-1">
                  <b className="text-title">WORKING DAYS</b>
                </label>
                <input
                  className="form-control"
                  id="update-project-working-days"
                  defaultValue={currentProject.working_days}
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="row">
              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">VERTS</b>
                </label>
                <input
                  className="form-control"
                  id="update-project-verts"
                  defaultValue={currentProject.verts}
                  type="text"
                />
              </div>

              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">EDGES</b>
                </label>
                <input
                  className="form-control"
                  id="update-project-edges"
                  defaultValue={currentProject.edges}
                  type="text"
                />
              </div>

              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">FACES</b>
                </label>
                <input
                  className="form-control"
                  id="update-project-faces"
                  defaultValue={currentProject.faces}
                  type="text"
                />
              </div>

              <div className="col-3">
                <label className="small mb-1">
                  <b className="text-title">TRIS</b>
                </label>
                <input
                  className="form-control"
                  id="update-project-tris"
                  defaultValue={currentProject.tris}
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="small mb-1" htmlFor="address">
              <b className="text-title">SOLFWARE</b>
            </label>
            <div className="row">
              <div className="col-3">
                <label className="text-title">Maya</label>{" "}
                <input id="update-project-maya" type="checkbox" />
              </div>

              <div className="col-3">
                <label className="text-title">ZBrush</label>{" "}
                <input id="update-project-zbrush" type="checkbox" />
              </div>
              <div className="col-3">
                <label className="text-title">Adobe Substance 3D</label>{" "}
                <input id="update-project-substance" type="checkbox" />
              </div>
              <div className="col-3">
                <label className="text-title">Photoshop</label>{" "}
                <input id="update-project-photoshop" type="checkbox" />
              </div>
              <div className="col-3">
                <label className="text-title">Adobe Illustrator</label>{" "}
                <input id="update-project-illustrator" type="checkbox" />
              </div>
            </div>
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-12">
              <label className="mb-1">
                <b className="text-title">INFORMATION</b>
              </label>
              <textarea
                className="form-control"
                id="update-project-information"
                rows="5"
                cols="50"
                type="text"
                defaultValue={currentProject.information}
              />
            </div>
          </div>

          <button onClick={btnUpdateProjectOnClick}>
            <b>UPDATE</b>
          </button>
        </div>
      </Modal>

      {/* update thumbnail */}
      <Modal
        isOpen={modalUpdateThumbnailIsOpen}
        onAfterOpen={afterOpenModalUpdateThumbnail}
        onRequestClose={closeModalUpdateThumbnail}
        style={customStyles}
        contentLabel="Example Modal"
        id="project-modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">
          <b className="text-title">Update Thumbnail</b>
          <i
            className="fa-solid fa-rectangle-xmark close-icon"
            onClick={closeModalUpdateThumbnail}
          ></i>
        </h2>

        <div className="card-body user-profile-body">
          <div className="row gx-3 mb-3">
            <div className="col-md-12">
              <label className="small mb-1">
                <b className="text-title">THUMBNAIL</b>
              </label>
              <input
                className="form-control"
                id="update-thumbnail"
                type="file"
              />
            </div>
          </div>

          <button onClick={btnUpdateThumbnailOnClick}>
            <b>UPDATE</b>
          </button>
        </div>
      </Modal>

      {/* add video */}
      <Modal
        isOpen={modalNewVideoIsOpen}
        onAfterOpen={afterOpenModalNewVideo}
        onRequestClose={closeModalNewVideo}
        style={customStyles}
        contentLabel="Example Modal"
        id="project-modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">
          <b className="text-title">Add Video</b>
          <i
            className="fa-solid fa-rectangle-xmark close-icon"
            onClick={closeModalNewVideo}
          ></i>
        </h2>
        <div className="card-body user-profile-body">
          <div className="row gx-3 mb-3">
            <div className="col-md-12">
              <label className="mb-1">
                <b className="text-title">VIDEO</b>
              </label>
              <textarea
                className="form-control"
                id="source"
                rows="5"
                cols="50"
                type="text"
              />
            </div>
          </div>

          <button onClick={btnAddVideoOnClick}>
            <b>ADD</b>
          </button>
        </div>
      </Modal>

      {/* add image */}
      <Modal
        isOpen={modalNewImageIsOpen}
        onAfterOpen={afterOpenModalNewImage}
        onRequestClose={closeModalNewImage}
        style={customStyles}
        contentLabel="Example Modal"
        id="project-modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">
          <b className="text-title"> Add Image</b>
          <i
            className="fa-solid fa-rectangle-xmark close-icon"
            onClick={closeModalNewImage}
          ></i>
        </h2>
        <div className="card-body user-profile-body">
          <div className="row gx-3 mb-3">
            <div>
              <input type="file" className="form-control" id="image" />
            </div>
          </div>

          <button onClick={btnAddImageOnClick}>
            <b>ADD</b>
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default Projects;
