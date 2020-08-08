import Vue from 'vue'
import Router from 'vue-router'
import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
Vue.use(Router);
export default new Router({
  routes:[
    {path:'/show',component:ShowBlog},
    {path:'/add',component:AddBlog},
    {path:'/show/:id',component:SingleBlog}
  ],
  mode:"history"
})
