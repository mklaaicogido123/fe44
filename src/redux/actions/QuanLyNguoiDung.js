//Tạo ra 1 action sử dụng cho nhiều component muốn dispatch lên reducer nếu giống nhau về chức năng
import { them_nguoi_dung } from "./type/QuanLyNguoiDungType";
export const themNguoiDungAction = (nguoiDung) => {
  return { type: them_nguoi_dung, nguoiDung: nguoiDung };
};
