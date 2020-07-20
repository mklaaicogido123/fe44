import React, { Component } from "react";
import DSSP from "./DSSP";
import ModalGH from "./ModalGH";

export default class BTGH extends Component {
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
    gioHang: [
      {
        maSP: 1,
        tenSP: "iphone",
        hinhAnh: "./imgvideo5/applephone.jpg",
        gia: 1000,
        soLuong: 1,
      },
    ],
  };
  themGioHang = (SanPhamClick) => {
    console.log(SanPhamClick);

    let spGioHang = {
      maSP: SanPhamClick.maSP,
      tenSP: SanPhamClick.tenSP,
      hinhAnh: SanPhamClick.hinhAnh,
      gia: SanPhamClick.giaBan,
      soLuong: 1,
    };

    let gioHangCapNhat = [...this.state.gioHang, spGioHang];

    let index = gioHangCapNhat.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
      return;
    }

    this.setState({ gioHang: gioHangCapNhat });
  };
  render() {
    return (
      <div>
        <DSSP
          danhSachMobile={this.danhSachMobile}
          themGioHang={this.themGioHang}
        ></DSSP>
        <ModalGH gioHang={this.state.gioHang}></ModalGH>
      </div>
    );
  }
}
