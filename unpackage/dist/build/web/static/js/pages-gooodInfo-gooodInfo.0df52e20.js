(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gooodInfo-gooodInfo"],{3764:function(t,n,o){var i=o("e3dd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=o("4f06").default;e("29c1b526",i,!0,{sourceMap:!1,shadowMode:!1})},"3a38":function(t,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{nows:"<a style='color:red'>阿斯拉达稍大</a>",goodInfo:{},BASE_URL:""}},onLoad:function(){this.BASE_URL=this.$paths.BASE_IMG,this.goodInfo=uni.getStorageSync("goodInfo"),this.goodInfo.banners=this.goodInfo.banners.split(",")},methods:{showimg:function(t){wx.previewImage({current:t,urls:[t]})},tolianwi:function(){uni.switchTab({url:"/pages/wode/wode"})}}};n.default=i},"6a29":function(t,n,o){"use strict";o.r(n);var i=o("3a38"),e=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(a);n["default"]=e.a},b111:function(t,n,o){"use strict";var i=o("3764"),e=o.n(i);e.a},b4fd:function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return e})),o.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",[o("v-uni-view",{staticClass:"colonn"},[o("v-uni-swiper",{staticClass:"w-750 h-450",attrs:{autoplay:!0}},[o("v-uni-swiper-item",{staticClass:"w-750 h-450"},[o("v-uni-image",{staticClass:"w-750 h-450",attrs:{src:t.BASE_URL+t.goodInfo.img,mode:"aspectFill"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showimg(t.BASE_URL+t.goodInfo.img)}}})],1)],1),o("v-uni-view",{staticClass:"p-all-20"},[o("v-uni-view",{staticClass:"fw-600 m-bottom-20"},[t._v(t._s(t.goodInfo.name))]),o("v-uni-view",{staticClass:"roww fs-30  duiqi "},[o("v-uni-view",{staticClass:"fw-600 color2_r"},[t._v("优惠价:"+t._s(t.goodInfo.xPrice))]),o("v-uni-view",{staticClass:"huadiao  fs-20 ",staticStyle:{color:"black","margin-left":"15rpx"}},[t._v("原价:"+t._s(t.goodInfo.yPrice))]),o("v-uni-view",{staticClass:"allline"}),o("v-uni-view",[t._v("销量："+t._s(t.goodInfo.sale))])],1),t.goodInfo.content?o("v-uni-view",{staticClass:"colonn center_center m-top-30"},[o("v-uni-view",{staticClass:"m-bottom-20"},[t._v("商品简介")]),o("v-uni-rich-text",{attrs:{nodes:t.goodInfo.content}})],1):t._e()],1)],1),o("v-uni-view",{staticStyle:{height:"90rpx"}}),o("v-uni-view",{staticClass:"roww center_center",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tolianwi.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"lianxiwomen"},[t._v("联系我们")])],1)],1)},e=[]},e054:function(t,n,o){"use strict";o.r(n);var i=o("b4fd"),e=o("6a29");for(var a in e)["default"].indexOf(a)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(a);o("b111");var s=o("f0c5"),c=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"76a6362c",null,!1,i["a"],void 0);n["default"]=c.exports},e3dd:function(t,n,o){var i=o("24fb");n=i(!1),n.push([t.i,".lianxiwomen[data-v-76a6362c]{width:%?750?%;height:%?90?%;background-color:red;text-align:center;line-height:%?90?%;color:#fff;position:fixed;bottom:%?0?%}",""]),t.exports=n}}]);