
<template>
    <div>

         <div class="documents" >
        
        <div class="mulu">
            <router-link v-bind:to="{ path:'#base' }" tag="h4">基础</router-link>          
                <router-link v-bind:to="{ path:'#kaishi' }" tag="h5">开始</router-link>
                <router-link v-bind:to="{ path:'#dongtai' }" tag="h5">动态路由</router-link>
                <router-link v-bind:to="{ path:'#qiantao' }" tag="h5">嵌套路由</router-link>
                <router-link v-bind:to="{ path:'#bangding' }" tag="h5">绑定路由</router-link>
            <!-- <h4>基础</h4>    
                <h5>开始</h5>                
                <h5>动态路由</h5>
                <h5>嵌套路由</h5>
                <h5>绑定路由</h5> -->
            <router-link v-bind:to="{ path:'#jinjie' }" tag="h4">进阶</router-link>
                <router-link v-bind:to="{ path:'#gouzi' }" tag="h5">导航钩子</router-link>
                <router-link v-bind:to="{ path:'#luyouyuan' }" tag="h5">路由元信息</router-link>
                <router-link v-bind:to="{ path:'#chajian' }" tag="h5">插件绑定</router-link>
                <router-link v-bind:to="{ path:'#lujing' }" tag="h5">路径动画</router-link>
            <!-- <h4>进阶</h4>
                <h5>导航钩子</h5>
                <h5>路由元信息</h5>
                <h5>插件绑定</h5>
                <h5>路径动画</h5> -->
            
        </div>
        <div class="detail">
            <h4 id="base" >基础</h4>
            <hr>
                <h5 id="kaishi" >开始</h5>
                <div >开始的内容</div>
                <h5 id="dongtai" >动态路由</h5>
                <div>动态路由的内容</div>
                <h5 id="qiantao" >嵌套路由</h5>
                <div>嵌套路由的内容</div>
                <h5 id="bangding" >绑定路由</h5>
                <div>绑定路由的内容</div>
            <h4 id="jinjie" >进阶</h4>
            <hr>
                <h5 id="gouzi" >导航钩子</h5>
                <div>导航钩子的内容</div>
                <h5 id="luyouyuan" >路由元信息</h5>
                <div>路由元信息的内容</div>
                <h5 id="chajian" >插件绑定</h5>
                <div>插件绑定的内容</div>
                <h5 id="lujing" >路径动画</h5>
                <div>路径动画的内容</div>
            </div>
        </div>
    </div>
</template>
<script>
    import TWEEN from 'Tween.js';
    export default {
        name:"document",

        beforeRouteEnter(to,from,next){
            next((vm)=>{
                vm.move(to);
            })
        },
        beforeRouteUpdate(to, from, next){
            this.move(to)
            next();
        },

        methods:{
            move(to){
                
                function animatefun(time){
                    requestAnimationFrame(animatefun);
                    TWEEN.update(time);
                }

                if(to.hash){

                    let el = document.getElementById(to.hash.slice(1) );
                    let doc = document.getElementsByClassName('detail')[0];

                    if(el){
                        animatefun();
                        new TWEEN.Tween({
                            number: doc.scrollTop
                        }).to({
                            number:el.offsetTop
                        },500).onUpdate(
                            function () {
                                doc.scrollTop = this.number;
                            }
                        ).start()
                    }

                }
                
            }
        }
    }
</script>
<style>

</style>