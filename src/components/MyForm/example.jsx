import React from "react";
import Form from "./index";
import { connect } from "react-redux";
// import DataManageAction from "@store/data";
import moment from "moment";

import { Input, Select, Button } from "antd";
import { DatePicker } from "antd";
import { handleArrayInParams } from "@common/js/util";

const { RangePicker } = DatePicker;

const TextForm = (props) => {
  const filterFormRender = () => {
    return {
      type: "form",
      //初始化数据
      initialValues: {
        comment_tendency: "这是初始化",
        question_type_level1: "哈哈哈",
        time: [moment().subtract(7, "days"), moment().subtract(1, "days")],
      },
      //提交回调函数
      onFinish: (v) => {
        // console.log(v);
        console.log(handleArrayInParams(props.filter));
        console.log(props.filter);
      },
      //字段改变回调函数
      onValuesChange: (c, v) => {
        console.log(c, v);
        // props.CHANGE_DATA_MANAGE_DATA_LIST2(Object.assign({}, props.filter, v));
      },
      children: [
        {
          type: "row",
          gutter: 8,
          children: [
            {
              type: "col",
              span: 6,
              children: [
                {
                  type: "customize",
                  name: "time2",
                  render: () => {
                    return <DatePicker />;
                  },
                },
              ],
            },
            {
              type: "col",
              span: 6,
              children: [
                {
                  type: "customize",
                  name: "question_type_level1",
                  render: () => {
                    return <Input />;
                  },
                },
              ],
            },
            {
              type: "col",
              span: 6,
              children: [
                {
                  type: "customize",
                  name: "question_type_level2",
                  render: () => {
                    return <Input />;
                  },
                },
              ],
            },
            {
              type: "col",
              span: 6,
              children: [
                {
                  type: "customize",
                  render: () => {
                    return (
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    );
                  },
                },
              ],
            },
          ],
        },
        {
          type: "row",
          gutter: 8,
          children: [
            {
              type: "col",
              span: 6,
              children: [
                {
                  type: "customize",
                  name: "comment_tendency",
                  render: () => {
                    return <Input />;
                  },
                },
              ],
            },
            {
              type: "col",
              span: 6,
              children: [
                {
                  type: "customize",
                  name: "question_type_level1",
                  render: () => {
                    return <Input />;
                  },
                },
              ],
            },
            {
              type: "col",
              span: 6,
              children: [
                {
                  type: "customize",
                  name: "question_type_level2",
                  label: "",
                  render: () => {
                    return <Select />;
                  },
                },
              ],
            },
          ],
        },
        {
          type: "customize",
          name: "time",
          label: "",
          render: () => {
            return <RangePicker />;
          },
        },
        {
          type: "customize",
          name: "question_type_level2",
          label: "测试",
          labelCol: { span: 4 },
          wrapperCol: { span: 8 },
          render: () => {
            return <Select />;
          },
        },
      ],
    };
  };
  return <Form render={filterFormRender} />;
};
export default connect()(TextForm);
// (state) => ({
//   filter: state.DataManageModule.filter,
//   dataList: state.DataManageModule.dataList,
// }),
// { ...DataManageAction.action }
