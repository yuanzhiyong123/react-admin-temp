import React, { Component } from "react";
import MyForm from "@components/MyForm/example";

class DataQueryPage extends Component {
  render() {
    return (
      <div className="order_detail_con">
        <MyForm />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props);
    // window.open("http://localhost:3000/console/data/data-manage", "_blank");
    // this.props.history.push("/console/data/data-manage");
  }
}
export default DataQueryPage;
