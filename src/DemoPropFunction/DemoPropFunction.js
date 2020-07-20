import React, { Component } from "react";
import SanPhamProp from "./SanPhamProp";

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

  state = {
    sanPhamChiTiet: {
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
  };

  renderSP = () => {
    return this.danhSachMobile.map((mobile, index) => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4" key={index}>
            <SanPhamProp mobile={mobile} detail={this.xemChiTiet}></SanPhamProp>
          {/* <div className="" style={{ width: 300 }}>
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
            <button
              className="btn btn-primary"
              onClick={() => this.xemChiTiet(mobile)}
            >
              Detail
            </button>
          </div> */}
        </div>
      );
    });
  };
  xemChiTiet = (spClick) => {
      this.setState({
          sanPhamChiTiet:spClick
      })
  };
  render() {
    return (
      <div>
        <h3 className="text-center m-5">Danh sách sản phẩm</h3>
        <div className="container">
          <div className="row">{this.renderSP()}</div>
        </div>
        <div className="row m-5 ">
          <div className="col-4">
            <h3 className="text-center">{this.state.sanPhamChiTiet.tenSP}</h3>
            <img
              className="card-img-top"
              src={this.state.sanPhamChiTiet.hinhAnh}
              alt="Card image"
              style={{  Width: "100%", height: 400 }}
            />
          </div>
          <div className="mt-5 col-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.state.sanPhamChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trươc</td>
                  <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{this.state.sanPhamChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{this.state.sanPhamChiTiet.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
