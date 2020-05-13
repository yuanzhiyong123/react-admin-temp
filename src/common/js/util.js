import { notification } from "antd";
import moment from "moment";

/**
 * 获取当前页面url
 */
export const getLocationHref = () => window.location.href;

/**
 * 消息提示
 * @param {string 消息类型} type  success info warning error
 * @param {string 提示消息内容} msg
 */
export const msgTip = (type, msg) => {
  notification[type]({
    message: "提示",
    description: msg,
  });
};

/**
 * 从url中获取参数
 * @param {string 参数名称} name
 */
export const getUrlParams = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

/**
 * 处理 params 的 array
 * 转换 [1,2,3] -> '1,2,3', 并且把moment对象转换成时间戳
 * @param {*} params
 *
 * @return newParams
 */
export const handleArrayInParams = (params) => {
  const nextParams = JSON.parse(JSON.stringify(params));
  Object.keys(params).forEach((key) => {
    const value = params[key];
    // const value2 = nextParams[key];
    if (moment.isMoment(value)) {
      //判断是moment对象
      nextParams[key] = momentToTimestamp(value);
    }
    if (Array.isArray(value)) {
      const newArray = value.map((i) => {
        if (moment.isMoment(i)) {
          //判断是moment对象
          return momentToTimestamp(i);
        }
        return i;
      });
      nextParams[key] = newArray.join(",");
    }
  });
  return nextParams;
};

/**
 * moment对象转换时间戳
 * @param {*} moment
 */
export const momentToTimestamp = (moment) => moment.format("x");
