webpackJsonp([34],{QfTD:function(e,t){},"Tm9+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("gyMJ");var r={name:"mdgj",components:{},data:function(){return{msg:null,timer:null,routeWrapperParam:[{link:"/gjzl/ldbl",eachName:"领导包联"},{link:"/gjzl/sdgj",eachName:"四大攻坚"}]}},mounted:function(){var e=this;this.timer=setTimeout(function(){e.msg=e.$message({message:"系统正在建设中，敬请期待。。。",type:"warning",duration:0,offset:200})},1e3)},beforeDestroy:function(){this.msg.close(),this.timer&&clearTimeout(this.timer)}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"wrapper wrapper-bg"})},staticRenderFns:[]};var s=n("C7Lr")(r,a,!1,function(e){n("QfTD")},"data-v-3f8567a2",null);t.default=s.exports}});