import React from "react";
import { Form, Row, Col } from "antd";

export const renderTransfer = (item) => {
  switch (item.type) {
    case "form":
      return renderFormHandler(item);
    case "row":
      return renderRowHandler(item);
    case "col":
      return renderColHandler(item);
    case "customize":
      return renderFormItemHandler(item);
    default:
      return null;
  }
};

//遍历children渲染
export const renderChildrenHandler = (children) => {
  return (
    children &&
    Array.isArray(children) &&
    children.map((childrenItem, index) => {
      return renderTransfer(childrenItem);
    })
  );
};
/**
 * 渲染根Form
 * @param {*} item
 */
const renderFormHandler = (item) => {
  const { children, ...rest } = item;
  return <Form {...rest}>{renderChildrenHandler(children)}</Form>;
};
/**
 * 渲染Row
 * @param {*} item
 */
const renderRowHandler = (item) => {
  const { children, ...rest } = item;
  return (
    <Row {...rest} key={JSON.stringify(children)}>
      {renderChildrenHandler(children)}
    </Row>
  );
};
/**
 * 渲染Col
 * @param {} item
 */
const renderColHandler = (item) => {
  const { children, ...rest } = item;
  return (
    <Col {...rest} key={JSON.stringify(children)}>
      {renderChildrenHandler(children)}
    </Col>
  );
};
/**
 * 渲染Form.Item
 * @param {*} item
 */
const renderFormItemHandler = (item) => {
  const { render, ...rest } = item;
  return (
    <Form.Item {...rest} key={render}>
      {render()}
    </Form.Item>
  );
};
