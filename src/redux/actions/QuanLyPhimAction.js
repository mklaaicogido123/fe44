import axios from "axios";
import { layDanhSachPhim } from "./type/QuanLyPhimType";

export const LayDanhSachPhimAction = () => {
  return (dispatch) => {
    axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        console.log("dataPhim", result.data);
        dispatch({
          type: layDanhSachPhim,
          danhSachPhim: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};
