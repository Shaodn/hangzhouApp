(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/product-item/product-item"],{"0cf2":function(t,e,u){"use strict";u.r(e);var r=u("cacf"),n=u.n(r);for(var c in r)"default"!==c&&function(t){u.d(e,t,function(){return r[t]})}(c);e["default"]=n.a},1248:function(t,e,u){"use strict";var r=u("893d"),n=u.n(r);n.a},6803:function(t,e,u){"use strict";u.r(e);var r=u("f6a4"),n=u("0cf2");for(var c in n)"default"!==c&&function(t){u.d(e,t,function(){return n[t]})}(c);u("1248");var o=u("2877"),a=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},"893d":function(t,e,u){},cacf:function(t,e,u){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"productItem",props:{imgurl:{type:String,default:"http://placehold.it/50x50"},productname:{type:String,default:""},producturl:{type:String,default:""},productid:{type:Number,default:0},level2id:{type:String,default:""},CatchPhrase:{type:String,default:""}},methods:{gotoproduct:function(){var e={subcategory:this.level2id,productid:this.productid};try{var u=t.getStorageSync("productlevel")+1;t.setStorageSync("productlevel",u)}catch(r){}t.navigateTo({url:"../product/product?product="+encodeURIComponent(JSON.stringify(e))})}}};e.default=u}).call(this,u("6e42")["default"])},f6a4:function(t,e,u){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},n=[];u.d(e,"a",function(){return r}),u.d(e,"b",function(){return n})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/product-item/product-item-create-component',
    {
        'components/product-item/product-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("6803"))
        })
    },
    [['components/product-item/product-item-create-component']]
]);                
