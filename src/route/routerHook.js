// import testAction from "store/test.js";//

//路由钩子函数
//可在此定义函数处理登陆校验、鉴权等操作

/**
 * 处理每个页面的title
 * @param {页面包含的所有属性} nextState
 * @param {redux数据相关} store
 */
const titleInterceptor = (nextState, store) => {
  const { title } = nextState;
  window.document.title = title;
};

/**
 * 登陆
 * @param {页面包含的所有属性} nextState
 * @param {redux数据相关} store
 */
const requireAuthInterceptor = (nextState, store) => {
  // console.log(store);
  // const { dispatch, getState } = store;
  // console.log(getState());
  // dispatch(testAction.action.COLLAPSE_CHANGE("ccc"));
  // console.log(nextState);
  const { meta, history } = nextState;
  const requireAuth = meta && meta.requireAuth;
  // console.log(requireAuth);
  if (requireAuth) {
    //需要登陆访问  判断token
    const token = window.localStorage.getItem("token");
    // console.log(token);
    if (!token) {
      history.replace("/login");
    }
  }
};

export default [titleInterceptor, requireAuthInterceptor];
