import { DataService } from "@service";
const CHANGE_DATA_MANAGE_DATA_LIST = "CHANGE_DATA_MANAGE_DATA_LIST";

const states = {
  dataList: [
    {
      key: "1",
      name: "胡彦斌",
      age: 36,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ],
  pagination: {
    current: 1,
    pageSize: 10,
  },
};

export default {
  reducer(state = states, { type, payload }) {
    switch (type) {
      case CHANGE_DATA_MANAGE_DATA_LIST:
        return { ...state, dataList: payload };
      default:
        return state;
    }
  },

  action: {
    CHANGE_DATA_MANAGE_DATA_LIST(payload) {
      return (dispatch) => {
        DataService.data_manage_table_list(payload).then((res) => {
          dispatch({ type: CHANGE_DATA_MANAGE_DATA_LIST, payload: res.data });
        });
      };
    },
  },
};
