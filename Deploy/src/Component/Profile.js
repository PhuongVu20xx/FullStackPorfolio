import React from "react";
import avatar from "../Image/avatar.jpg";
const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <div className="card-body">
            <img src={avatar} id="profile-avatar" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body profile-body">
            <h3>Vũ Xuân Phương</h3>
            <span className="profile-lable">
              <b>Date of Birth: </b>
            </span>{" "}
            <span>12/01/1991.</span>
            <span className="profile-lable">
              <b>Gender: </b>
            </span>{" "}
            <span>Male.</span>
            <span className="profile-lable">
              <b>Contact: </b>
            </span>{" "}
            <span>0377965901.</span>
            <span className="profile-lable">
              <b>Email: </b>
            </span>{" "}
            <span>vxp20xx@gmail.com.</span>
            <span className="profile-lable">
              <b>Address: </b>
            </span>{" "}
            <span>51/12 Lý Phục Man Quận 7 Hồ Chí Minh.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
