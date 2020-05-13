import DataManageModule from "./data-manage.module";
export default {
  reducer: {
    DataManageModule: DataManageModule.reducer,
  },
  action: {
    ...DataManageModule.action,
  },
};
