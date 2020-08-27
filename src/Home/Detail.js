import React, { Component, useState, useEffect } from "react";
import { qlPhimService } from "../Services/QuanLyPhimService";
import { NavLink } from "react-router-dom";
export default function Detail() {
  let [chiTietPhim, setThongTinPhim] = useState([]);
  useEffect(() => {
    qlPhimService
      .layChiTietPhim()
      .then((res) => {
        console.log("dsPhim", res.data);
        setThongTinPhim(res.data);
      })
      .catch((arr) => {
        //console.log(err.response.data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img src={chiTietPhim.hinhAnh} />
        </div>
        <div className="col-8">
          <table>
            <thead>
              <tr>
                <th>Tên phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô tả phim</th>
                <th>{chiTietPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {/*Load hệ thông rap, lịch chiếu */}
      <h3 className="mt-3 mb-3"> LỊCH CHIẾU </h3>
      <div className="row">
        <div
          className="col-4 nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
            return (
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href={`#${heThongRap}`}
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <img src={heThongRap.logo} width={50} height={50} />
                {heThongRap.tenHeThongRap}
              </a>
            );
          })}
          {/* <a
            className="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Home
          </a>
          <a
            className="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Profile
          </a>
          <a
            className="nav-link"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Messages
          </a>
          <a
            className="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Settings
          </a> */}
        </div>
        <div className="col-8 tab-content" id="v-pills-tabContent">
          {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
            return (
              <div
                key={index}
                className="tab-pane fade show "
                id={`${heThongRap.maHeThongRap}`}
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                {heThongRap.tenHeThongRap}
              </div>
            );
          })}
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            {/* {heThongRap.cumRapChieu?.map((cumRap, index) => {
              return (
                <div key={index}>
                  <h3>{cumRap.tenRap}</h3>
                </div>
              );
            })} */}
            {/* {chiTietPhim.heThongRapChieu[1]?.map((cumRap, index) => {
              return (
                
                  <h3>{cumRap.tenRap}</h3>
                
              );
            })} */}
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              console.log(heThongRap);
              return heThongRap.cumRapChieu?.map((cumRap, index) => {
                return (
                  <div key={index}>
                    <h3>{cumRap.tenCumRap}</h3>
                    {/* <NavLink to={`/BookingTicket`}></NavLink> */}
                  </div>
                );
              });
            })}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}
