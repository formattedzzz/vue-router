/**
 * Vue的插件，用来获取和设置localStorage存储
 **/

var localsave={
  save(key,val){
    localStorage.setItem(key,JSON.stringify(val));
  },
  fetch(key){
    return JSON.parse(localStorage.getItem(key))||{};
  }
}

export default {
  install:function(vm){
    vm.prototype.$localsave=localsave;
  }
}