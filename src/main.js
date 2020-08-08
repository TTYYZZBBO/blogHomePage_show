import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import vuerouter from './router.js'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(vuerouter);
// 自定义指令
Vue.directive('changColor',{
  bind:function(el,binding,vnode){
    el.style.color="red";
  }
});
Vue.directive('changeWidth',{
  bind:function(el,binding,vnode){
    if(binding.value=='narrow'){
      el.style.maxWidth='300px';
    }else{
      el.style.maxWidth='800px';
    }
  }
})
// 自定义全局过滤器
Vue.filter("toUpperCase",function(value){
  return value.toUpperCase();
})


var vue=new Vue({
  render: h => h(App),
  router:vuerouter
}).$mount('#app')
