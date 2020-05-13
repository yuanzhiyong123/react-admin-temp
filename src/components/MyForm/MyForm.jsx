import React from "react";
import { renderTransfer } from "./lib/render";

import "./index.scss";

const MyForm = (props) => {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const { render } = props;
  const nextConfig = render();
  return <div className="myform_con_c">{renderTransfer(nextConfig)}</div>;
};
export default MyForm;
