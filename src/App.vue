<template>
  <div id="app">
      <headerblog></headerblog>
      <router-view></router-view>

  </div>
</template>

<script>
import addblog from './components/AddBlog.vue'
import showblog from './components/ShowBlog.vue'
import headerblog from './components/HeaderBlog.vue'
import singleblog from './components/SingleBlog.vue'

export default {
  name: 'App',
  components: {
    'addblog':addblog,
    'showblog':showblog,
    'headerblog':headerblog,
    'singleblog':singleblog
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
