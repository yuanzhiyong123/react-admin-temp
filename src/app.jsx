import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop.jsx";
import AllComponent from "@pages/index";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import route from "@route";
import { LoadingOutlined } from "@ant-design/icons";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <ScrollToTop /> {/*路由切换控制页面回到顶部 */}
        <Suspense
          fallback={
            <div>
              <LoadingOutlined style={{ fontSize: "20px" }} />
            </div>
          }
        >
          {route.map(({ subs, key, redirect, component, ...rest }) => {
            if (key === "/") {
              return (
                <Route
                  key={key}
                  path={key}
                  exact
                  render={() => <Redirect to={{ pathname: `${redirect}` }} />}
                />
              );
            } else {
              return (
                <PrivateRoute
                  key={key}
                  path={key}
                  component={AllComponent[component]}
                  {...rest}
                />
              );
            }
          })}
        </Suspense>
      </Router>
    );
  }
}

export default App;
