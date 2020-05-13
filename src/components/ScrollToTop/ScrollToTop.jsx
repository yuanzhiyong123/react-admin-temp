import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { changeOpenKeyAction, changeSelectKeyAction } from "store/basic";
import * as baseAction from "@store/basic";

//解决路由切换 页面滚动条不回到顶部的问题 以及同时解决浏览器后退back后 menu菜单选中不更新的问题
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const el = document.getElementsByClassName("page_container")[0];
      if (el) {
        el.scrollTop = 0;
      }

      //同时处理后退菜单menu不选中的问题
      let selectKey = this.props.location.pathname;
      let openKey = selectKey.substr(0, selectKey.lastIndexOf("/"));
      this.props.changeOpenKeyAction([openKey]);
      this.props.changeSelectKeyAction(selectKey);
    }
  }

  render() {
    return null;
  }
}
export default connect((state) => state.basicReducer, {
  ...baseAction,
})(withRouter(ScrollToTop));
