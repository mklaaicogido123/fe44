import React, { Component } from "react";

export default class RenderWithMap extends Component {
  danhSachSP = [
    { maSP: 1, TenSP: "iphone X", hinhAnh: "https://picsum.photos/200/200" },
    { maSP: 2, TenSP: "iphone XS", hinhAnh: "https://picsum.photos/200/200" },
    { maSP: 3, TenSP: "iphone XR", hinhAnh: "https://picsum.photos/200/200" },
  ];
  renderTable=()=>{

    return this.danhSachSP.map((sanPham,index)=>{
        return <tr key={index}>
                   <td>{sanPham.maSP}</td>
                   <td>{sanPham.TenSP}</td>
                   <td><img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={100} height={100}></img></td>
                   <td><button className="bg-danger btn">Xoa</button></td>
                 </tr>;
    });;
    // return arrSPJXS;
  }
//   renderTable = () => {
//     let arrSPJXS = [];
//     for (let i = 0; i < this.danhSachSP.length; i++) {
//       //mỗi lần duyệt lấy ra 1 sản phẩm
//       let sanPham = this.danhSachSP[i];
//       //Từ sản phẩm tạo ra 1 object jsx (thẻ <tr><tr>)
//       let trJSX = (
//         <tr key={i}>
//           <td>{sanPham.maSP}</td>
//           <td>{sanPham.TenSP}</td>
//           <td><img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={100} height={100}></img></td>
//           <td><button className="bg-danger btn">Xoa</button></td>
//         </tr>
//       );
//       arrSPJXS.push(trJSX);
//     }
//     return arrSPJXS;
//   };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã sp</th>
              <th>Tên sp</th>
              <th>Hình ảnh</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
