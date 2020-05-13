import React, { Component } from "react";
import { Menu } from "antd";
import { Icon } from "@ant-design/compatible";
import { Link, withRouter } from "react-router-dom";
import route from "@route";
import Logo from "@common/img/logo.svg";
import { connect } from "react-redux";
import * as basicAction from "@store/basic";

import "./index.scss";

const { SubMenu } = Menu;
class SliderBar extends Component {
  componentDidMount() {
    let selectKey = this.props.location.pathname;
    let openKey = selectKey.substr(0, selectKey.lastIndexOf("/"));
    this.props.changeOpenKeyAction([openKey]);
    this.props.changeSelectKeyAction(selectKey);
  }
  menuClick(e) {
    if (e.keyPath.length === 1) {
      this.props.changeOpenKeyAction([]);
      this.props.changeOpenKeyAction2([]);
    } else {
      this.props.changeOpenKeyAction2([e.keyPath[1]]);
    }
    const key = e.key;
    this.props.changeSelectKeyAction(key);
  }
  menuOpenClick(e) {
    let openKey = [];
    if (e && e.length !== 0) {
      const key = e.pop();
      openKey.push(key);
    }
    this.props.changeOpenKeyAction(openKey);
  }
  render() {
    const consoleRoutes = route.find((item) => item.key === "/console");
    const routes =
      consoleRoutes && consoleRoutes.subs ? consoleRoutes.subs : [];
    const { openKey, selectKey } = this.props;
    return (
      <div className="sliderbar_con_c">
        <div className="logo_con">
          <img
            src={Logo}
            className="log_img"
            style={this.props.collapse ? { marginRight: 0 } : null}
            alt=""
          />
          <span
            className={`logo_title ${
              this.props.collapse ? "logo_title_none" : "logo_title_show"
            }`}
          >
            数据查询平台
          </span>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectKey]}
          openKeys={openKey}
          onClick={(e) => this.menuClick(e)}
          onOpenChange={(e) => this.menuOpenClick(e)}
        >
          {routes.map((item) => {
            if (!item.subs) {
              return item.meta && !item.meta.hide ? (
                <Menu.Item key={item.key}>
                  <Link to={item.key}>
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
              ) : null;
            } else {
              return (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.subs.map((subItem) =>
                    subItem.meta && !subItem.meta.hide ? (
                      <Menu.Item key={subItem.key}>
                        <Link to={subItem.key}>{subItem.title}</Link>
                      </Menu.Item>
                    ) : null
                  )}
                </SubMenu>
              );
            }
          })}
        </Menu>
      </div>
    );
  }
}
export default connect((state) => state.basicReducer, {
  ...basicAction,
})(withRouter(SliderBar));
