import React, { Component } from "react";

export default class DemoPropFunction extends Component {
  danhSachMobile = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./imgvideo5/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./imgvideo5/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./imgvideo5/applephone.jpg",
    },
  ];
  renderSP = () => {
    return this.danhSachMobile.map((mobile, index) => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4">
          <div className="" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={mobile.hinhAnh}
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title text-center">{mobile.tenSP}</h4>
            <p className="card-text">{mobile.heDieuHanh}</p>
            <button className="btn btn-primary">Detail</button>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center m-5">Danh sách sản phẩm</h3>
        <div className="container">
          <div className="row">{this.renderSP()}</div>
        </div>
      </div>
    );
  }
}
