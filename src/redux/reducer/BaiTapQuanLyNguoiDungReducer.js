const initialState = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      matKhau: 123,
      hoTen: "Nguyễn Văn a",
      email: "nguyenvana@gmail.com",
      soDt: "0123456789",
      maLoaiNguoiDung: "Khách hàng",
    },
    {
      taiKhoan: "nguyenvanb",
      matKhau: 123,
      hoTen: "Nguyễn Văn b",
      email: "nguyenvanb@gmail.com",
      soDt: "0123456789",
      maLoaiNguoiDung: "Quản trị",
    },
  ],
  nguoiDungEdit: {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "them_nguoi_dung": {
      let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    case "chinh_sua": {
      state.nguoiDungEdit = action.nguoiDungChinhSua;
      return { ...state };
    }
    default:
      return state;
  }
};
