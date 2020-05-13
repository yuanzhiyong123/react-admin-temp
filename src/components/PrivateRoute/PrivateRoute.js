import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import routerHook from "@route/routerHook";
import store from "@store";

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, title, ...rest } = this.props;
    //判断是当前路由
    if (
      this.props.path.replace(/\//g, "") ===
      this.props.location.pathname.replace(/\//g, "")
    ) {
      //执行路由钩子函数
      routerHook.forEach((fn) => {
        typeof fn == "function" && fn(this.props, store);
      });
    }
    // console.log(this.props);
    return (
      <Route
        {...rest}
        render={(props) =>
          true ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname },
              }}
            />
          )
        }
      ></Route>
    );
  }
}
export default withRouter(PrivateRoute);
