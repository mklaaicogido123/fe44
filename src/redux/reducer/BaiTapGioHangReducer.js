//Cài đặt state reducer
const stateDefault = {
  stateGioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      hinhAnh: "./imgvideo5/vsphone.jpg",
      gia: 5700000,
      soLuong: 1,
    },
  ],
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGH);
      }
      return { ...state, stateGioHang: gioHangCapNhat };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }
      state.stateGioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong--;
          } else {
            alert("so luong toi thieu la 1");
          }
        }
      }
      return { ...state, stateGioHang: gioHangCapNhat };
    }
    default:
      return { ...state };
  }
};
export default BaiTapGioHangReducer;
