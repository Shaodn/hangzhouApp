(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"40c4":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(o("4b97"));function s(t){return t&&t.__esModule?t:{default:t}}var r=function(){return o.e("components/product-item/product-item").then(o.bind(null,"6803"))},a=function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"a403"))},c={components:{productItem:r,uniLoadMore:a},data:function(){return{historyList:[],isHistory:!0,products:[],loadmore:12,loading:!1,searchtext:"",status:"",loadingcolor:"#006B69",contentText:{contentrefresh:"加载中...",contentnomore:"没有更多产品"}}},onBackPress:function(t){return"navigateBack"!==t.from&&(this.back(),!0)},methods:{back:function(){this.isHistory?t.navigateBack({delta:1}):this.isHistory=!0},clearSearch:function(){var e=this;t.showModal({title:"提示",content:"是否清理全部搜索历史？该操作不可逆。",success:function(o){if(o.confirm){try{t.removeStorageSync("searchhistory")}catch(n){}e.historyList=[]}}})},searchhistory:function(e){var o=t.getStorageSync("searchhistory");""==o?this.historyList.push(e):(this.historyList=o,this.historyList.unshift(e)),this.historyList=Array.from(new Set(this.historyList)),this.historyList.length>=20&&(this.historyList=this.historyList.slice(0,19)),t.setStorage({key:"searchhistory",data:this.historyList,success:function(){console.log(n("success"," at pages\\search\\search.vue:110"))}}),this.isHistory=!1,this.products=i.default.searchkey(e)}},onReachBottom:function(){var t=this;this.loadmore<this.products.length?(this.loading=!0,this.status="loading",setTimeout(function(){t.loadmore+=12,t.loading=!1},700)):(this.loading=!0,this.status="nomore",this.loadingcolor="#777777")},onLoad:function(){this.isHistory=!0;var e=t.getStorageSync("searchhistory");""!=e&&(this.historyList=t.getStorageSync("searchhistory"))},onShow:function(){t.setStorageSync("productlevel",0)},onNavigationBarSearchInputConfirmed:function(e){var o=e.text.trim().replace(/[`~!@#$%^&*()_+<>?:"{},.;[\]]/im,"");o?(this.searchhistory(o),t.setStorageSync("productlevel",0)):t.showModal({title:"提示",content:"请输入内容。",success:function(t){t.confirm}})},onNavigationBarSearchInputChanged:function(t){this.isHistory=!0,this.searchtext=t.text},onNavigationBarButtonTap:function(e){if(0==e.index){if(""==this.searchtext)return void t.showModal({title:"提示",content:"请输入内容。",success:function(t){t.confirm}});t.hideKeyboard(),this.searchhistory(this.searchtext),t.setStorageSync("productlevel",0)}}};e.default=c}).call(this,o("6e42")["default"],o("0de9")["default"])},"4e1c":function(t,e,o){"use strict";o.r(e);var n=o("d321"),i=o("9f23");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("e201");var r=o("2877"),a=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},"9f23":function(t,e,o){"use strict";o.r(e);var n=o("40c4"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},d321:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.products,function(e,o){var n=parseInt(e.productid);return{$orig:t.__get_orig(e),m0:n}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},e201:function(t,e,o){"use strict";var n=o("f713"),i=o.n(n);i.a},ea3a:function(t,e,o){"use strict";(function(t){o("e6c0"),o("921b");n(o("66fd"));var e=n(o("4e1c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},f713:function(t,e,o){}},[["ea3a","common/runtime","common/vendor"]]]);