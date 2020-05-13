import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Menu } from "antd";
import {
  CaretDownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import * as basicAction from "@store/basic";

import "./index.scss";

class Header extends Component {
  toggle() {
    this.props.collapseChange();
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <div className="header_con_c">
        {this.props.collapse ? (
          <MenuUnfoldOutlined
            className="trigger"
            onClick={this.toggle.bind(this)}
          />
        ) : (
          <MenuFoldOutlined
            className="trigger"
            onClick={this.toggle.bind(this)}
          />
        )}
        <div className="user_con">
          <Dropdown overlay={menu}>
            <div>
              {/* <Avatar icon="user" /> */}
              <span className="username">袁志勇，欢迎你</span>
              <CaretDownOutlined className="user_arro_down" />
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default connect((state) => state.basicReducer, { ...basicAction })(
  Header
);
