import { get } from "./http";
import Api from "./api";

export default {
  data_manage_table_list: data =>
    get({
      url: Api.data_manage_table_list,
      data
    }),
  data_manage_table_query: data =>
    get({
      url: Api.data_manage_table_query,
      data
    }),
  data_manage_table_info: data =>
    get({
      url: Api.data_manage_table_info,
      data
    })
};
