import React, { Component, Suspense } from "react";
import { Layout } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Slider from "@components/SliderBar/SliderBar";
import MHeader from "@components/Header/Header";
import route from "@route";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import AllComponent from "@pages/index";

import "./index.scss";

const { Header, Sider, Content } = Layout;
class LayoutPage extends Component {
  render() {
    const consoleRoutes = route.find((item) => item.key === "/console");
    const routes =
      consoleRoutes && consoleRoutes.subs ? consoleRoutes.subs : [];
    const { collapse } = this.props;
    return (
      <Layout className="layout_con_c">
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapse}
          className={`sliderbar_con ${collapse ? "sliderbar_collapse" : ""}`}
        >
          <Slider />
        </Sider>
        <Layout className={`page_con ${collapse ? "page_con_collapse" : ""}`}>
          <Header
            style={{ background: "#fff", padding: 0 }}
            className="page_con_header"
          >
            <MHeader></MHeader>
          </Header>
          <Content className="page_container">
            <Suspense
              fallback={
                <div>
                  <LoadingOutlined style={{ fontSize: "20px" }} />
                </div>
              }
            >
              {routes.map(({ subs, key, component, ...rest }) => {
                if (subs) {
                  return subs.map(
                    ({ key: subKey, component: subComponent, ...rest2 }) => (
                      <PrivateRoute
                        exact
                        key={subKey}
                        path={subKey}
                        component={AllComponent[subComponent]}
                        {...rest2}
                      />
                    )
                  );
                } else {
                  return (
                    <PrivateRoute
                      exact
                      key={key}
                      path={key}
                      component={AllComponent[component]}
                      {...rest}
                    />
                  );
                }
              })}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect((state) => state.basicReducer, {})(LayoutPage);
