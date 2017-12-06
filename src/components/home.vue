<template>
    <div class="home">
    <div class="home-header">
      <i class="fa fa-home fa-4x" ></i>
      <div class="userinfo">
        <router-link v-show="!islogin" class="loginbtn" to="/login" tag="div">
            登录
        </router-link>
        <div>
          <i v-show="islogin" class="fa fa-user "></i> 
          <span>{{username}}</span>
        </div>
      </div>

    </div>
    <h2 class="nav">
      一起学习Vue-router
    </h2>
    <div class="options" >
        <router-link to="/project" tag="span">
            我的项目
        </router-link>
        <router-link to="/coding" tag="span">
            工作台
        </router-link>
        <router-link to="/document" tag="span">
            我的文档
        </router-link>
    </div>
  </div>
</template>
<script>
    export default {
      name:"home",
        data(){
          return{
            islogin:false,
            username:''
          }
        },
        created(){
          let haslogin = this.$localsave.fetch('logininfo').islogin;
          let username = this.$localsave.fetch('logininfo').username;
          this.islogin=haslogin;
          this.username=username;
        }
        
    }
</script>
<style>

</style>
