<template>
  <div class="signal-blog" v-changeWidth:width="'width'">
     <h3 v-changColor>{{blog.title}}</h3>
     <p>{{blog.body}}</p>
  </div>
</template>

<script>
export default{
  name:"singleblog",
  data(){
    return {
      id:this.$route.params.id,
      url:"http://jsonplaceholder.typicode.com/posts/"+this.$route.params.id,
      blog:{}
    }
  },
  created(){

    this.$http.get(this.url).then(function(data){
      this.blog=data.body;
    })
  }
}
</script>

<style scoped>
  
  .signal-blog{
    padding:20px;
    margin: 0 auto;
    background-color: #ccc;
    border: 1px dished #42B983;
  }
</style>
