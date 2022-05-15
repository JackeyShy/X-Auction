import Vue from 'vue'
//对应你要跳转的组件
import MainPage from "../components/MainPage"; 
import Auction from "../components/Auction";
import Bidding from "../components/Bidding";
import Selling from "../components/Selling";
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/',name:'hello',component:MainPage},
        {path:'/home',component:MainPage},
        {path:'/auction',component:Auction},
        {path:'/bidding',component:Bidding},
        {path:'/selling',component:Selling}
    ]
})