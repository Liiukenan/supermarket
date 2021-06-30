import { createRouter,createWebHistory} from "vue-router";

// 路由信息
const routes = [
    {
        path: "/",
        name: "首页",
        component:  () => import('../views/ShoppingMall.vue'),
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;