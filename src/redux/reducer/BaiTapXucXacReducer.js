const dsXucXac = [
  { ma: 1, hinhAnh: "./gameXucXac/1.png", soDiem: 1 },
  { ma: 2, hinhAnh: "./gameXucXac/2.png", soDiem: 2 },
  { ma: 3, hinhAnh: "./gameXucXac/3.png", soDiem: 3 },
  { ma: 4, hinhAnh: "./gameXucXac/4.png", soDiem: 4 },
  { ma: 5, hinhAnh: "./gameXucXac/5.png", soDiem: 5 },
  { ma: 6, hinhAnh: "./gameXucXac/6.png", soDiem: 6 },
];
const stateDefault = {
  banChon: "TÀI",
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { ma: 1, hinhAnh: "./gameXucXac/1.png", soDiem: 1 },
    { ma: 2, hinhAnh: "./gameXucXac/2.png", soDiem: 2 },
    { ma: 3, hinhAnh: "./gameXucXac/3.png", soDiem: 3 },
  ],
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC_XUC_XAC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "RANDOM_XI_NGAU": {
      let mangXiNgau = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math(Math.random() * 6);
        mangXiNgau.push(dsXucXac[soNgauNhien]);
      }
      state.mangXucXac = action.mangXiNgau;
      return { ...state };
    }
    case "TINH_DIEM": {
      let tongDiem = state.mangXucXac.reduce((tongDiem_x, xiNgau, index) => {
        return (tongDiem += xiNgau.soDiem);
      }, 0);
      if (
        (tongDiem > 10 && state.banChon === "Tài") ||
        (tongDiem < 10 && state.banChon === "Xỉu")
      ) {
        state.soBanThang++;
      }
      state.soBanChoi++;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGameXucXacReducer;
