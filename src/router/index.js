

import Vue from 'vue';

import Router from 'vue-router';

import home from '@/components/home';
import layout from '@/components/layout';
import login from '@/components/login';
import project from '@/components/project';
import coding from '@/components/coding';
import document from '@/components/document';

Vue.use(Router);

var router = new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes:[
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/admin',
            name: 'admin',
            component: layout,
            children:[
                {
                    path: '/project',
                    name: 'project',
                    component: project,
                    meta:{
                        requirelogin:true
                    }
                },
                {
                    path: '/coding',
                    name: 'coding',
                    component: coding,
                    meta:{
                        requirelogin:true
                    }
                },
                {
                    path: '/document',
                    name: 'document',
                    component: document
                }
            ]
        },
        {
            path:'/login',
            name: 'login',
            component: login
        },
        {
            path: '*',
            redirect: '/'
        }

    ]
})

router.beforeEach( (to,from,next) =>{
    if(to.matched.some( (item) => item.meta.requirelogin ) ){
        let logininfo = router.app.$localsave.fetch('logininfo');
        if( logininfo.islogin ){
            next();
        }else{
            router.push({
                path:'/login',
                query:{
                    redirect : to.path.slice(1)
                }
            });
            alert('查看项目和工作台需要先登录！');
        }
    }else{
        next();
    }
} )

export default router;