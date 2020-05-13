let URL = "";
if (process.env.REACT_APP_ENV === "development") {
  //开发环境
  URL = "";
} else if (process.env.REACT_APP_ENV === "test") {
  //测试环境
  URL = "";
} else if (process.env.REACT_APP_ENV === "production") {
  //正式环境
  URL = "";
}
export default {
  data_manage_table_query: `${URL}/getAllTableAndDesc`,
  data_manage_table_list: `${URL}/findAllTabelBypageIndex`,
  data_manage_table_info: `${URL}/getTableBynameOrdesc`,
};
