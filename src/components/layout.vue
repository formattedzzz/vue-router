<template>
    <div>
        <div class="navhead">
        <router-link to="/" exact tag="span">
            <i class="fa fa-home" ></i>
            首页
        </router-link>
        <router-link to="/project" tag="span">
            <i class="fa fa-tasks" ></i>
            我的项目
        </router-link>
        <router-link to="/coding" tag="span">
            <i class="fa fa-code" ></i>
            工作台
        </router-link>
        <router-link to="/document" tag="span">
            <i class="fa fa-file" ></i>
            我的文档
        </router-link>
        
        <span class="logout" 
            v-if="islogin" 
            @click="logout"
        >
            退出
        </span>
        <span class="userinfo" >
            <i class="fa fa-user" 
                v-if="islogin" 
            >{{username}}</i>
        </span>
        <h2 class="subnav">
            <i>首页</i>
                /
            <i>{{navname}}</i>
        </h2>
        
    </div>
    <transition mode='out-in'>
        <router-view></router-view>
    </transition>
   
    </div>
</template>
<script>
    let navnames={
        'project':'我的项目',
        'coding':'工作台',
        'document':'我的文档'
    }
    export default {
        name:"layout",
        data(){
          return{
            islogin:false,
            username:'',
            navname:''
          }
        },
        watch:{
            $route(){
                this.navname = navnames[this.$route.path.slice(1)];
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next( (vm)=>{
                vm.navname = navnames[to.path.slice(1)];
            } )
        },
        created(){
          let haslogin = this.$localsave.fetch('logininfo').islogin;
          let username = this.$localsave.fetch('logininfo').username;
          this.islogin=haslogin;
          this.username=username;
        },
        methods:{
            logout(){
                this.$localsave.save('logininfo',null);
                this.$router.push('/login');
                alert('您已退出登录，为您重定向到登录页面');
            }
        }
        
    }
</script>
<style>

</style>
