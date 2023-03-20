import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/apiCall/home.vue'
import Login from './components/dymaic routing/Login.vue'
import Profile from './components/dymaic routing/Profile.vue'


const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'login',
        path:'/login',
        component:Login
    },
    {
        name:'profile',
        path:'/profile/:name',
        component:Profile
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router