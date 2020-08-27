import React, { useState, useEffect, Fragment } from "react";
import { qlPhimService } from "../Services/QuanLyPhimService";
import "./VeXemPhim.css";

export default function BookingTicket(props) {
  let [thongTinPhongVe, setThongTinPhongVe] = useState([]);

  useEffect(() => {
    qlPhimService
      //   .layChiTietPhongVe(props.match.params.maLichChieu)
      .layChiTietPhongVe()
      .then((res) => {
        console.log(res.data);
        setThongTinPhongVe(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center">Đặt vé xem phim</h2>
      <div className="container">
        <div className="col-8">
          <h3 className="text-center">Màn hình </h3>
          <div className="screen"></div>
          <div className="text-center">
            {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
              let classLoaiGhe = ghe.loaiGhe === "Vip" ? "gheVip" : "";
              let daDat = ghe.loaiGhe ? "gheDuocChon" : "";
              return (
                <Fragment>
                  <button className={`ghe m-2 ${classLoaiGhe} ${daDat}`}>
                    {ghe.stt}
                  </button>
                  {(index + 1) % 10 === 0 ? <br /> : ""}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="col-4">
          <h3>Thông tin phim</h3>
          <div>{thongTinPhongVe.thongTinPhim?.tennPhim}</div>
        </div>
      </div>
    </div>
  );
}
