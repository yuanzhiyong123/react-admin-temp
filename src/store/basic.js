const COLLAPSE_CHANGE = "COLLAPSE_CHANGE";
const CHANGE_GLOBAL_LOADING = "CHANGE_GLOBAL_LOADING";
const CHANGE_SELECTKEY = "CHANGE_SELECTKEY";
const CHANGE_OPENKEY = "CHANGE_OPENKEY";
const _CHANGE_OPENKEY = "_CHANGE_OPENKEY";

const defaultState = {
  collapse: false, //侧边菜单栏默认折叠状态
  globalLoading: false, //全局loading状态
  selectKey: "", //选中的菜单key
  openKey: [], //打开的二级菜单
  _openKey: [], //打开的二级菜单
};

export const basicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case COLLAPSE_CHANGE: //菜单栏折叠展开
      let openKey = !state.collapse ? [] : [...state._openKey];
      return { ...state, collapse: !state.collapse, openKey };
    case CHANGE_GLOBAL_LOADING: //全局loadind状态
      return { ...state, globalLoading: action.flag };
    case CHANGE_SELECTKEY: //选中的菜单key
      return { ...state, selectKey: action.payload };
    case CHANGE_OPENKEY: //选中的菜单key
      return { ...state, openKey: action.payload };
    case _CHANGE_OPENKEY: //选中的菜单key
      return { ...state, _openKey: action.payload };
    default:
      return state;
  }
};

//菜单栏折叠展开
export const collapseChange = () => {
  return {
    type: COLLAPSE_CHANGE,
  };
};
//全局loadind状态
export const globalLoadingChange = (flag) => {
  return {
    type: CHANGE_GLOBAL_LOADING,
    flag,
  };
};

//改变菜单选中
export const changeSelectKeyAction = (payload) => {
  return {
    type: CHANGE_SELECTKEY,
    payload,
  };
};

//改变菜单打开
export const changeOpenKeyAction = (payload) => {
  return {
    type: CHANGE_OPENKEY,
    payload,
  };
};

//改变菜单打开
export const changeOpenKeyAction2 = (payload) => {
  return {
    type: _CHANGE_OPENKEY,
    payload,
  };
};
