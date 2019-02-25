/**
 * Created by 蘑菇太狂 on 2019/2/20.
 */
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import {Button} from 'mint-ui'
Vue.component(Button.name,Button);
Vue.use(VueResource);
new Vue({
  el:"#app",
  components:{
    App
  },
  template:'<App/>',
});
