//import Vue from 'vue'
//import Router from 'vue-router'
import {createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Forgot from './components/Forgot.vue'
import Reset from './components/Reset.vue'

//Vue.use(Router)

//export default new Router({

   // mode:'history',
    //routes:[
      //  {path:'/',component:Home},
       // {path:'/login', component:Login},
       // {path:'/register', component:Register},
        //{path:'/forgot', component:Forgot},
       // {path:'/reset/:token',component:Reset}
   // ]
//})

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},

    {
		path: '/login',
		name: 'Login',
		component: Login
	},
    {
		path: '/register',
		name: 'Register',
		component: Register
	},
    {
		path: '/forgot',
		name: 'Forgot',
		component: Forgot,
	},
    {
		path: '/reset/:token',
		name: 'Reset',
		component: Reset
	},

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;