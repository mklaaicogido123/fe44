import axios from "axios";
//import { domain, groupID } from "../config/setting";

export class QuanLyPhimService {
  constructor() {}

  layDanhSachPhim = () => {
    return axios({
      // url: `${domain}/api/quanlyphim/laydanhsachphim?manhom=${groupID}`,
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
  };
  layChiTietPhim = () => {
    return axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1314`,
      method: "GET",
    });
  };

  layChiTietPhongVe = () => {
    return axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16099`,
      method: "GET",
    });
  };
}

export const qlPhimService = new QuanLyPhimService();
