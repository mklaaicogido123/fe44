//Cài đặt state reducer
const stateDefault = {
  stateGioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      hinhAnh: "./img/vsphone.jpg",
      gia: 1000,
      soLuong: 1,
    },
  ],
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  return { ...state };
};
export default BaiTapGioHangReducer;
