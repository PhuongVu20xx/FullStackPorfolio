import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Modal from "react-modal";
import axios from "axios";
import {
  ADD_NEW_EXPERIENT,
  CHANGE_EXPERIENT_STATUS,
  DELETE_EXPERIENT,
} from "../ServerService/API";

function Experients({ experients }) {
  function Search() {
    var value = $("#search-experient").val().toLowerCase();
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
  const currentExperients = experients.slice(indexOfFirstPage, indexOfLastPage);

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(experients.length / productsPerPage); i++) {
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

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }
  let subtitle;

  //add experient
  const btnAddOnClick = () => {
    const work_place = $("#work-place").val();
    const work_time = $("#time").val();
    const position = $("#position").val();
    const experient = $("#experient").val();
    const data = { work_place, work_time, position, experient };
    axios
      .post(ADD_NEW_EXPERIENT, data)
      .then((response) => {
        if (response.data > 0) {
          alert("Update add experient successfull.");
        } else {
          alert("Update add experient fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onExperientChangeStatus = (e) => {
    const status = e.target.checked ? "1" : "0";
    const id = parseInt(e.target.name);
    const data = { id, status };

    axios
      .post(CHANGE_EXPERIENT_STATUS, data)
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

  const btnDeleteExperientOnClick = (e) => {
    const id = parseInt(e.target.name);
    const data = { id };

    axios
      .post(DELETE_EXPERIENT, data)
      .then((response) => {
        if (response.data > 0) {
          alert("Update delete successfull.");
        } else {
          alert("Update delete fail.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <button onClick={openModal} className="btn-edit">
        New
      </button>
      {experients.length <= 0 ? (
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
            <h4 className="m-0 font-weight-bold">Experients</h4>
          </div>
          <div className="card-body background-header-body">
            <input
              className="form-control col-3 mb-3"
              id="search-experient"
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
                    <th>Work Place</th>
                    <th>Position</th>
                    <th>Work Time</th>
                    <th>Experient</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="bill-records">
                  {currentExperients.map((bh, index) => {
                    return (
                      <tr key={index} className="table-text">
                        <td className="fit-content">
                          <b>{(currentPage - 1) * 10 + i++}</b>
                        </td>
                        <td className="float-right-text">{bh.work_place}</td>
                        <td className="float-right-text">{bh.position}</td>
                        <td className="float-right-text">{bh.work_time}</td>
                        <td className="float-right-text">{bh.experient}</td>
                        <td className="fit-content">
                          {bh.status ? (
                            <label className="switch">
                              <input
                                type="checkbox"
                                defaultChecked
                                name={bh.id}
                                onClick={onExperientChangeStatus}
                              />
                              <span className="slider round"></span>
                            </label>
                          ) : (
                            <label className="switch">
                              <input
                                type="checkbox"
                                name={bh.id}
                                onClick={onExperientChangeStatus}
                              />
                              <span className="slider round"></span>
                            </label>
                          )}
                        </td>
                        <td className="fit-content">
                          <button
                            name={bh.id}
                            onClick={btnDeleteExperientOnClick}
                            className="btn-delete-profile"
                          >
                            DELETE
                          </button>{" "}
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
                      {number}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        id="project-modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modal-title">
          <b>New Experient</b>
          <i
            className="fa-solid fa-rectangle-xmark close-icon"
            onClick={closeModal}
          ></i>
        </h2>

        <div className="card-body user-profile-body">
          <div className="mb-3">
            <div className="row gx-3 mb-3">
              <div className="col-6">
                <label className="small mb-1">
                  <b className="text-title">WORK PLACE</b>
                </label>
                <input className="form-control" id="work-place" type="text" />
              </div>
              <div className="col-6">
                <label className="small mb-1">
                  <b className="text-title">TIME</b>
                </label>
                <input className="form-control" id="time" type="text" />
              </div>
            </div>
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1">
                <b className="text-title">POSITION</b>
              </label>
              <input className="form-control" id="position" type="text" />
            </div>
            <div className="col-md-6">
              <label className="mb-1">
                <b className="text-title">EXPERIENTS</b>
              </label>
              <textarea
                className="form-control"
                id="experient"
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
    </div>
  );
}
export default Experients;
