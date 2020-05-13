import React, { Component } from "react";
import { Card, Row, Col, Select, Button } from "antd";
import Table from "@components/table";
import { connect } from "react-redux";
import DataManageAction from "@store/data";

import "./data-manage.sass";

@connect(
  (state) => ({
    dataList: state.DataManageModule.dataList,
  }),
  { ...DataManageAction.action }
)
class DataManagePage extends Component {
  render() {
    return (
      <div className="order_detail_con">
        <div className="card_box">
          <h1>筛选维度</h1>
          <Row>
            <Col span="6">
              <Select
                style={{ width: "100%" }}
                placeholder="表名"
                allowClear
                showSearch
              ></Select>
            </Col>
            <Col span="6" offset="2">
              <Button type="primary">提交</Button>
            </Col>
          </Row>
        </div>
        <div className="card_box">
          <h1>数据概览</h1>
          <Card>
            <h1>数据详情</h1>
            <Table render={this.tableRender} />
          </Card>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props);
  }
  tableRender = () => {
    const { dataList } = this.props;
    const columns = [
      {
        title: "名称",
        dataIndex: "table_name",
        align: "center",
      },
      {
        title: "描述",
        dataIndex: "age",
        align: "center",
      },
      {
        title: "创建人",
        dataIndex: "address",
        align: "center",
      },
      {
        title: "创建时间",
        dataIndex: "address",
        align: "center",
      },
      {
        title: "类型",
        dataIndex: "address",
        align: "center",
      },
      {
        title: "操作",
        dataIndex: "c",
        align: "center",
        render: (i, v) => {
          console.log(v);
          return <Button size="small">详情</Button>;
        },
      },
    ];
    return {
      dataSource: dataList,
      columns: columns,
      loading: false,
      pagination: {},
      onChange: ({ current, pageSize }) => {
        console.log(current, pageSize);
        this.props.CHANGE_DATA_MANAGE_DATA_LIST();
      },
      rowClassName: (v, i) => (i % 2 === 0 ? "" : "dark_table_row"),
    };
  };
}
export default DataManagePage;
