import React, { Component, useState, useEffect } from "react";
import { qlPhimService } from "../Services/QuanLyPhimService";

export default function Home(props) {
  let [dsPhim, setDSPhim] = useState([]);
  useEffect(() => {
    //call api
    qlPhimService
      .layDanhSachPhim()
      .then((res) => {
        console.log("dsPhim", res.data);
        setDSPhim(res.data);
      })
      .catch((arr) => {
        //console.log(err.response.data);
      });
  }, []);
  return (
    <div className="container">
      <h3 classNam="text-center">Danh sách phim</h3>
      <div className="row">
        {dsPhim.map((phim, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card text-left">
                <img className="card-img-top" src={phim.hinhAnh} alt="123" />
                <div className="card-body">
                  <h4 className="card-title">{phim.tenPhim}</h4>
                  <p className="card-text">{phim.moTa}</p>

                  <button
                    //   ${phim.maPhim}
                    onClick={() => {
                      props.history.push(`/detail/`);
                    }}
                    className="btn btn-success"
                  >
                    Xem chi tiet
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
