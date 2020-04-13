import Vue from 'vue'
import App from './App'
import productlist from './common/productlist3.json'
import buylist from './common/buyList.json'
Vue.config.productionTip = false
Vue.prototype.$productlist= productlist
App.mpType = 'app'
Vue.prototype.$buyList = buylist
const app = new Vue({
    ...App
})
app.$mount()
