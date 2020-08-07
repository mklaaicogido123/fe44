import React, { Component } from "react";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      number: 1,
    };
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWullUnmount");
  }
}

// nguyên nhân lỗi giao diện không nhập được:
//     + Khi thay đổi dữ liệu input => setState được gọi => giao diện sẽ render lại (1)
//     + Mặc khác value của các input trên giao diện đang được lấy từ redux (2)
//     + Theo life cycle react component thì khi setState được gọi render sẽ chạy lại,nhưng render đang theo dỗi props từ
//     redux(nguoiDungEdit) (3)
//     1,2,3=> vòng lặp được sinh ra => người dùng gõ phím => setState được gọi => render chạy lại => render lấy lại
//     dữ liệu từ redux qua props (nguoiDung) edit => luôn load lại dữ liệu cũ.

// Khắc phục :
//     props: nguoiDungEdit => Mỗi khi click chỉnh sửa thì nó thay đổi
//     state.values : dữ liệu của người dùng LifeCycle cũ:
//     Bằng 1 cách nào đó trước khi giao diện gọi hàm render ta lấy được props gắn vào state => sau đó binding giá trị giao diện
//     ra từ state.values
