<template>
  <div class='showblog' v-changeWidth:width="'width'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索博客">

    <div v-for="item in filterBlogs" class="signal-blog">
      <router-link :to="'/show/'+item.id">
        <h3 v-changColor>{{item.title | toUpperCase}}</h3>
        <p>{{item.body}}</p>
      </router-link>

    </div>
  </div>
</template>
<script>
export default{
  name:"showblog",
  data(){
    return{
      blogs:[],
      search:""
    }
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(response=>{
      this.blogs=response.body.slice(0,10);
      // console.log(this.blogs)
    })
  },
  computed:{
    filterBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    },
  }
  // filters:{
  //   toUpperCase(value){
  //     return value.toUpperCase();
  //   }
  // }
}
</script>

<style scoped>
  .showblog{
    max-width: 800px;
    margin: 0 auto;
  }
  .showblog input{
    width: 100%;
    height: 30px;
    outline: none;
    border-radius: 4px;
    border:1px solid #42B983;
    padding-left: 10px;

  }
  .signal-blog{
    padding:20px;
    margin: 20px 0;
    background-color: #ccc;
    border: 1px dished #42B983;
  }
  .signal-blog a{
    text-decoration: none;
  }
</style>
