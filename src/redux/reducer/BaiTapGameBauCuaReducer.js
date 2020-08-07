import BaiTapGameBauCua from "../../ReduxDemo/BaiTapGameBauCua/BaiTapGameBauCua";

const stateDefault = {
  danhSachCuoc: [
    { ma: "cua", hinhAnh: "./gameBauCua/cua.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./gameBauCua/bau.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./gameBauCua/ca.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./gameBauCua/ga.png", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./gameBauCua/nai.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./gameBauCua/tom.png", diemCuoc: 0 },
  ],
  diemThuong: 500,
  xucXac: [
    { ma: "cua", hinhAnh: "./gameBauCua/cua.png" },
    { ma: "bau", hinhAnh: "./gameBauCua/bau.png" },
    { ma: "nai", hinhAnh: "./gameBauCua/nai.png" },
  ],
};

const BaiTapBauCuaReducer = (state = stateDefault, action) => {
  return { ...state };
};

export default BaiTapBauCuaReducer;
