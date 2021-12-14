import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Login from "./components/Login";
import Register from "./components/Register";


Vue.use(Router)
export  default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Home,
            name:"Home",
        },
        {
            path:'/login',
            component: Login,
            name:"Login"
        },
        {
            path:'/register',
            component: Register,
            name:"Register"
        },
    ]
})

