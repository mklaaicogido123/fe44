import React, { Component } from "react";
import style from "./BaiTapGameBauCua.module.css";
import DiemThuong from "./DiemThuong";
import XucXac from "./XucXac";
import DanhSachCuoc from "./DanhSachCuoc";

export default class BaiTapGameBauCua extends Component {
  render() {
    return (
      <div className={`container ${style.gameBauCua}`}>
        <div className="display-4 text-center text-danger">BẦU CUA</div>
        <div className="row">
          <div className="col-12 text-center">
            <DiemThuong></DiemThuong>
          </div>
        </div>
        <div className="row">
          <div className="col-8 ">
            <DanhSachCuoc />
          </div>
          <div className="col-4 ">
            <XucXac />
          </div>
        </div>
      </div>
    );
  }
}
