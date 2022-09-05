import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Modal from "react-modal";
import axios from "axios";
import { CHANGE_IMAGE_STATUS, DELETE_IMAGE } from "../ServerService/API";

function Images({ images }) {
  function Search() {
    var value = $("#search-images").val().toLowerCase();
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
  const currentImages = images.slice(indexOfFirstPage, indexOfLastPage);

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(images.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const onImageChangeStatus = (e) => {
    const status = e.target.checked ? "1" : "0";
    const id = parseInt(e.target.name);
    const data = { id, status };

    axios
      .post(CHANGE_IMAGE_STATUS, data)
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

  const btnDeleteImageOnClick = (e) => {
    const id = parseInt(e.target.value);
    const data = { id };

    axios
      .post(DELETE_IMAGE, data)
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
      {images.length <= 0 ? (
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
            <h4 className="m-0 font-weight-bold">Images</h4>
          </div>
          <div className="card-body background-header-body">
            <input
              className="form-control col-3 mb-3"
              id="search-images"
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
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="bill-records">
                  {currentImages.map((bh, index) => {
                    return (
                      <tr key={index} className="table-text">
                        <td className="fit-content"><b>{(currentPage - 1) * 10 + i++}</b></td>
                        <td className="float-right-text">
                          <img
                            className="img-user-account-profile "
                            id="avatar"
                            src={
                              "https://rynadb.herokuapp.com/Images/" + bh.image
                            }
                          />
                        </td>
                        <td className="fit-content">
                          {bh.status ? (
                            <label className="switch">
                              <input
                                type="checkbox"
                                defaultChecked
                                name={bh.id}
                                onClick={onImageChangeStatus}
                              />
                              <span className="slider round"></span>
                            </label>
                          ) : (
                            <label className="switch">
                              <input
                                type="checkbox"
                                name={bh.id}
                                onClick={onImageChangeStatus}
                              />
                              <span className="slider round"></span>
                            </label>
                          )}
                        </td>
                        <td className="fit-content">
                          <button value={bh.id} onClick={btnDeleteImageOnClick} className="btn-delete-profile">
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
    </div>
  );
}
export default Images;
