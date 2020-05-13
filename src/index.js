import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import App from "./app.jsx";
import store from "./store";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
