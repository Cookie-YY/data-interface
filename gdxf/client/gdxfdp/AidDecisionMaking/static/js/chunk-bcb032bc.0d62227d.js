(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcb032bc"],{1520:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper wrapper-bg"},[a("div",{staticClass:"w-menu"},[0!==t.navIndex?a("div",{staticClass:"btn btn-l",on:{click:function(e){return t.handleMenuChange("left")}}}):t._e(),2!==t.navIndex?a("div",{staticClass:"btn btn-r",on:{click:function(e){return t.handleMenuChange("right")}}}):t._e(),a("div",{staticClass:"navbar"},[a("ul",{staticClass:"ulbar",style:{width:200*t.routeWrapperParam.length+"px",marginLeft:280*-t.navIndex+"px"}},t._l(this.routeWrapperParam,(function(e,n){return a("router-link",{key:n,class:t.routerIndex===n?"item active":"item",attrs:{to:e.link,tag:"li"},nativeOn:{click:function(a){return t.routerChange(n,e)}}},[t._v(t._s(e.eachName)+" ")])})),1)])]),a("ul",{staticClass:"btnUl"},[a("li",{staticClass:"btnLi"},[a("router-link",{attrs:{to:{path:"/zdyztfx/scfxbg",query:{eachName:t.eachName}},tag:"span","active-class":"active"}},[t._v("生成分析报告 ")])],1)]),a("transition",[a("router-view",{attrs:{params:t.eachName}})],1)],1)},r=[],i=(a("365c"),{name:"lf",components:{},data:function(){return{eachName:"",navIndex:0,routerIndex:0,routeWrapperParam:[{link:"/zdyztfx/szxjjaj",eachName:"涉众型经济案件"},{link:"/zdyztfx/zfbzyfdc",eachName:"住房保障与房地产"},{link:"/zdyztfx/ldsb",eachName:"劳动社保"},{link:"/zdyztfx/nctdzy",eachName:"农村土地征用"},{link:"/zdyztfx/shce",eachName:"扫黑除恶"}]}},watch:{"$route.path":{handler:function(t,e){"/zdyztfx/szxjjaj"===t?this.routerIndex=0:"/zdyztfx/zfbzyfdc"===t?this.routerIndex=1:"/zdyztfx/ldsb"===t?this.routerIndex=2:"/zdyztfx/nctdzy"===t?this.routerIndex=3:"/zdyztfx/shce"===t&&(this.routerIndex=4),this.eachName=this.routeWrapperParam[this.routerIndex].eachName},immediate:!0}},methods:{handleMenuChange:function(t){"left"===t?this.navIndex--:this.navIndex++},routerChange:function(t,e){this.routerIndex=t,this.eachName=e.eachName}},beforeRouteUpdate:function(t,e,a){var n=t.path;console.log(t),"/zdyztfx/szxjjaj"===n?this.routerIndex=0:"/zdyztfx/zfbzyfdc"===n?this.routerIndex=1:"/zdyztfx/ldsb"===n?this.routerIndex=2:"/zdyztfx/nctdzy"===n?this.routerIndex=3:"/zdyztfx/shce"===n&&(this.routerIndex=4),this.eachName=this.routeWrapperParam[this.routerIndex].eachName,a()}}),s=i,c=(a("6def"),a("2877")),d=Object(c["a"])(s,n,r,!1,null,"3b095eb2",null);e["default"]=d.exports},"6def":function(t,e,a){"use strict";var n=a("977c"),r=a.n(n);r.a},"977c":function(t,e,a){}}]);
//# sourceMappingURL=chunk-bcb032bc.0d62227d.js.map