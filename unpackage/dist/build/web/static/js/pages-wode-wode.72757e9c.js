(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wode-wode"],{2795:function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{info:{},BASE_URL:""}},onLoad:function(){this.BASE_URL=this.$paths.BASE_IMG,this.getgsInfo()},methods:{tel:function(t){window.location.href="tel://"+t},getgsInfo:function(){var t=this;this.$axios.axios("POST",this.$paths.getGsInfo,{}).then((function(n){console.log("轮播图颜色",n),t.info=n.data})).catch((function(t){console.log("错误回调",t)}))}}};n.default=o},"373c":function(t,n,i){"use strict";var o=i("f5fd"),e=i.n(o);e.a},"6a27":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){}));var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticClass:"colonn center_center w-750",staticStyle:{height:"70vh"}},[i("v-uni-image",{staticClass:"logo",attrs:{src:t.BASE_URL+t.info.icon}}),i("v-uni-view",[t._v(t._s(t.info.gsm))]),i("v-uni-view",{staticClass:"roww w-750 border_bottom p-all-20 fs-30",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.tel(t.info.phone)}}},[i("v-uni-view",[t._v("联系电话")]),i("v-uni-view",{staticClass:"allline"}),i("v-uni-view",[t._v(t._s(t.info.phone))]),i("v-uni-view",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("(拨打电话)")])],1),i("v-uni-view",{staticClass:"roww w-750 border_bottom p-all-20 fs-30"},[i("v-uni-view",[t._v("营业时间")]),i("v-uni-view",{staticClass:"allline"}),i("v-uni-view",[t._v(t._s(t.info.yysjTime))])],1)],1)],1)},e=[]},"91cb":function(t,n,i){var o=i("24fb");n=o(!1),n.push([t.i,".logo[data-v-7b459a29]{width:%?150?%;height:%?150?%;border-radius:50%;margin-bottom:%?50?%}",""]),t.exports=n},a7ad:function(t,n,i){"use strict";i.r(n);var o=i("2795"),e=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);n["default"]=e.a},d7d8:function(t,n,i){"use strict";i.r(n);var o=i("6a27"),e=i("a7ad");for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);i("373c");var s=i("f0c5"),u=Object(s["a"])(e["default"],o["b"],o["c"],!1,null,"7b459a29",null,!1,o["a"],void 0);n["default"]=u.exports},f5fd:function(t,n,i){var o=i("91cb");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=i("4f06").default;e("ad7925ba",o,!0,{sourceMap:!1,shadowMode:!1})}}]);