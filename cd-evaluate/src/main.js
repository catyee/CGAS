import Vue from 'vue';

import './plugins/element';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'lib-flexible/flexible';
import { HappyScroll } from 'vue-happy-scroll';
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css';
import store from './store/index';
import router from './router/index';

import './permission'; // permission control
import App from './App.vue';

Vue.component('happy-scroll', HappyScroll);
Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'success' });
};

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'error' });
};

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
};
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
