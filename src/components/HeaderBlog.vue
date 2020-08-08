<template>
  <nav>
    <ul>
    	<li>
        <router-link to='/show'>博客首页</router-link>
        <router-link to='/add'>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default{
  name:"HeaderBlog"
}
</script>

<style scoped>
  nav{
    background-color: red;
    padding: 40px 0;
    margin-bottom: 20px;
  }
  ul{
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;

  }
  li{
    display: inline-block;
    margin:0 10px;


  }
  a{
    text-decoration: none;
    color: white;
    padding:12px;
    border-radius: 5px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }
</style>
