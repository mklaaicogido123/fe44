import { layDanhSachPhim } from "../actions/type/QuanLyPhimType";

const initialState = {
  danhSachPhim: [],
};
export default (state = initialState, action) => {
  state = {
    danhSachPhim: [],
  };
  switch (action.type) {
    case layDanhSachPhim: {
      state.danhSachPhim = action.danhSachPhim;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
