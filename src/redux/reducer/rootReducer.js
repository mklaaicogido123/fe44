import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameBauCuaReducer from "./BaiTapGameBauCuaReducer";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";
import BaiTapQuanLyNguoiDungReducer from "./BaiTapQuanLyNguoiDungReducer";
import QuanLiPhimReducer from "./QuanLiPhimReducer";

//rootReducer quản lý state của toàn ứng dụng
const rootReducer = combineReducers({
  //Nơi khai báo các state (reducer) theo từng nghiệp vụ
  //GioHangReducer chứa stateGioHang
  GioHangReducer: BaiTapGioHangReducer,
  BaiTapGameBauCuaReducer,
  BaiTapXucXacReducer,
  BaiTapQuanLyNguoiDungReducer,
  QuanLiPhimReducer,
});

export default rootReducer;
