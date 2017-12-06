<template>
    <div class="login">
      <h2>登录面板</h2>
      <div class="input">

          <input type="text" name="" placeholder="登录由localstorage简单模拟"
          ref="username"
          >
      </div>
      <div class="input">

          <input type="text" name="" placeholder="点击登录即可">
      </div>
      <div class="input">
          <input type="button" name="" value="一键登入"
            
            @click="login"
          >
      </div>
      <div class="input">
          <router-link to='/' tag="input" type="button" value="返回首页"></router-link>
      </div>
  </div>
</template>
<script>
    export default {
        name:"login",
        data(){
            return{

            }
        },
        methods:{
            login(){
                let username = this.$refs.username.value;

                if(username===""){alert('输入用户名'); return;}
                this.$localsave.save('logininfo',{
                    islogin:true,
                    username:username
                })
                let next = this.$route.query.redirect;
                this.$router.push({
                    path:'/'+next
                });
            }
        }
    }
</script>
<style>

</style>
