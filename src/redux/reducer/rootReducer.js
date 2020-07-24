import { combineReducers } from "redux";
import BTGioHangReducer from "./BTGioHangReducer";
import BaiTapGioHangReducer from "./BTGioHangReducer";
const rootReducer = combineReducers({
  BTGioHangReducer: BaiTapGioHangReducer,
});

export default rootReducer;
