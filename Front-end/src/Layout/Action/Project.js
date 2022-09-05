import React, { Component, useState } from "react";

function Project({
  currentProject,
  videos,
  images,
  loadingImages,
  loadingVideos,
}) {
  return (
    <div className="container">
      <div className="row profile-body-wrapper">
        <div className="col-10">
          <div>
            {loadingImages ? (
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
                {images.length <= 0 ? (
                  <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2">
                      <span>No images found</span>
                    </div>
                    <div className="col-5"></div>
                  </div>
                ) : (
                  <div>
                    {images.map((img, index) => {
                      return (
                        <div key={index} className="mb-3">
                          <img
                            className="selected-project-images"
                            src={
                              "https://rynadb.herokuapp.com/Images/" + img.image
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            {loadingVideos ? (
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
                {videos.length <= 0 ? (
                  <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2">
                      <span>No videos found</span>
                    </div>
                    <div className="col-5"></div>
                  </div>
                ) : (
                  <div>
                    {videos.map((vid, index) => {
                      return (
                        <div
                          key={index}
                          className="selected-project-videos"
                          dangerouslySetInnerHTML={{ __html: vid.source }}
                        ></div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col-2">
          <label>
            <b className="text-title">WORKING DAYS</b>
          </label>
          <label className="small">
            <b className="text-content">{currentProject.working_days}</b>
          </label>
          <label className="">
            <b className="text-title">SOFTWARE</b>
          </label>
          <label className="small mb-1">
            <b className="text-content">{currentProject.solfware}</b>
          </label>
          <label className="">
            <b className="text-title">INFORMATION</b>
          </label>
          <label className="small mb-1">
            <b className="text-content">{currentProject.information}</b>
          </label>
          <label className="">
            <b className="text-title">VERTS</b>
          </label>
          <label className="small mb-1">
            <b className="text-content">{currentProject.verts}</b>
          </label>
          <label className="">
            <b className="text-title">EDGES</b>
          </label>
          <label className="small mb-1">
            <b className="text-content">{currentProject.edges}</b>
          </label>
          <label className="">
            <b className="text-title">FACES</b>
          </label>
          <label className="small mb-1">
            <b className="text-content">{currentProject.faces}</b>
          </label>
          <label className="">
            <b className="text-title">TRIS</b>
          </label>
          <label className="small mb-1">
            <b className="text-content">{currentProject.tris}</b>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Project;
