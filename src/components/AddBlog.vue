<template>
  <div class="addblog">
    <h1>添加博客</h1>
    <form action="" v-show="show">
      <label for="">博客标题</label>
      <input type="text" v-model="title">
      <label for="">博客内容</label>
      <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
      <div class="checkbox">
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="checkboxlist">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js"v-model="checkboxlist">
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="checkboxlist">
      </div>
      <label for="">作者</label>
      <select name="" id="" v-model="checkedauthor">
        <option v-for="item in author">{{item}}</option>
      </select>
      <button class="submit" @click.prevent="show=!show">添加博客</button>
    </form>

    <div v-show="!show">您的博客发布成功</div>
    <div class='perview'>
      <h2>博客总览</h2>
      <div>博客标题：{{title}}</div>
      <p>博客内容：{{content}}</p>
      <ul>
        <div>分类：</div>
      	<li v-for="item in checkboxlist">{{item}}</li>
      </ul>
      <div>作者:{{checkedauthor}}</div>

    </div>
  </div>
</template>

<script>
export default {
  name:'addblog',
  data(){
    return{
      title:"",
      content:"",
      checkedauthor:"",
      show:true,
      checkboxlist:[],
      author:['qq','dd','gg']


    }
  }
}

</script>

<style scoped>
  .addblog{
    max-width: 600px;
    box-sizing: border-box;
    margin: 20px auto;
    padding: 20px;


  }
  .addblog form label{
    display: block;
    margin:20px 0 10px;
  }
  .addblog input[type="text"],textarea,select{
    width: 100%;
    padding: 8px;
  }
  .addblog .checkbox label{
    display: inline-block;
    margin-top: 10px;
  }
  .addblog .checkbox input{
    display: inline-block;
    margin-right: 10px;
  }
  button{
    display: block;
    margin: 20px 0;
    padding: 14px;
    background-color: darkred;
    color: aliceblue;
    border-radius: 4px;
    font-size: 18px;
    border: none;



  }
  .addblog .perview{
    border: 1px dotted #ccc;
    margin: 30px 0;
    padding: 10px 20px;

  }
  .addblog .perview ul{
    list-style: none;
    width: 100%;
    height: 20px;
    padding: 0;
  }
  .addblog .perview li{
    margin-right: 10px;
  }
  .addblog .perview ul div,li{
    float: left;
  }
</style>
