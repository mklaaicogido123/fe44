import React, { Component } from "react";

export default class EXRenderWithMap extends Component {
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
  renderMobile = () => {
    return this.danhSachMobile.map((mobile, index) => {
      return (
        // <section id="smartphone" className="container-fluid pt-5 pb-5">
        //   <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src={mobile.hinhAnh}
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                </div>
              </div>
              <div className="card-body text-center">
                <h4 className="card-title text-center">{mobile.tenSP}</h4>
                <p className="card-text">{mobile.heDieuHanh}</p>
              </div>
            </div>
            /*{ </div>
          </section> }*/
      );
    });
  };
  render() {
    return <div>{this.renderMobile()}</div>;
  }
}
