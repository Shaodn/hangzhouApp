(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wheretobuy/wheretobuy"],{"1bba":function(t,n,e){"use strict";var u=e("dce1"),i=e.n(u);i.a},"2be5":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},"41d6":function(t,n,e){"use strict";e.r(n);var u=e("8d9f"),i=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);n["default"]=i.a},7802:function(t,n,e){"use strict";(function(t){e("e6c0"),e("921b");u(e("66fd"));var n=u(e("a542"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"8d9f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{rindex:0,menu:["天猫旗舰店","京东旗舰店"],buyContent:{},tryList:{},link:"",tip:""}},onLoad:function(){this.buyContent=this.$buyList[0].buyContent},methods:{choose:function(t){this.rindex=t,this.buyContent=this.$buyList[t].buyContent},gotoApp:function(n,e){var u=this,i=n.currentTarget.dataset.relink;u.link=i;var o=n.currentTarget.dataset.apptip;u.tip=o,plus.runtime.openURL(e,function(n){t.showModal({content:"本机未检测到"+u.tip+"客户端，是否打开浏览器访问"+u.tip+"？",success:function(t){t.confirm&&plus.runtime.openURL(u.link)}})})}}};n.default=e}).call(this,e("6e42")["default"])},a542:function(t,n,e){"use strict";e.r(n);var u=e("2be5"),i=e("41d6");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("1bba");var r=e("2877"),a=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=a.exports},dce1:function(t,n,e){}},[["7802","common/runtime","common/vendor"]]]);