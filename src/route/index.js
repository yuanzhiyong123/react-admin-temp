export default [
  {
    key: "/",
    title: "首页",
    redirect: "/console/data/data-manage",
  },
  {
    key: "/login",
    title: "登陆",
    component: "LoginPage",
    meta: {
      requireAuth: false,
    },
  },
  {
    key: "/console",
    title: "数据管理",
    component: "LayoutPage",
    meta: {
      requireAuth: false,
    },
    subs: [
      {
        key: "/console/data", //如何有二级列表的话 一级列表的key 必须于二级key的前部分保持一致  目的是菜单栏的默认选中
        icon: "profile",
        title: "数据管理",
        meta: {
          requireAuth: false,
        },
        subs: [
          {
            key: "/console/data/data-manage",
            title: "数据管理",
            component: "DataManagePage",
            meta: {
              requireAuth: false,
              hide: false,
            },
          },
          {
            key: "/console/data/data-detail",
            title: "数据详情",
            component: "DataManagePage",
            meta: {
              requireAuth: false,
              hide: true,
            },
          },
        ],
      },
      {
        key: "/console/query-editor",
        title: "查询编辑器",
        icon: "profile",
        component: "DataQueryPage",
        meta: {
          requireAuth: false,
        },
      },
    ],
  },
];
