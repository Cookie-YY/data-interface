webpackJsonp([43],{CYRH:function(t,a){},OOXc:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("BO1k"),s=e.n(i),n=e("gyMJ"),o=e("6cNN"),r=e("Es1k"),l=e("JgS+"),c=e("76NS"),d=e("2PJi"),h=e("05XX"),m=e("3UrB"),u=e("dD3/"),f={name:"xfxs",components:{ctitle:o.a,timeChange:r.a,incNumber:l.a,loopPie:c.a,PieChart3D:d.a,LinesR:h.a,allCount:m.a,detailList:u.a},data:function(){return{allcount:-1,detailList:null,zbPieParams:{data:[],color:this.$STANDARD(this.styleType).pieThreeColors,angle:20,radius:"40%",labelRadius:15,styleObj:{width:"100%",height:"100%"},isBr:!0,labelPer:!0},xfxszsList:[],zsLineParams:{data:[],colors:[{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{splitNumber:4,splitLineShow:!0,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"年",axisYName:"件次",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"8%",right:"10%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"10%"},canvasStyle:{width:"100%",height:"100%"},map:{},xName:"name"},djjgArr:[{name:"国家",params:{data:[],options:{}}},{name:"省级",params:{data:[],options:{}}},{name:"市级",params:{data:[],options:{}}},{name:"县级",params:{data:[],options:{}}}],djjgPieParams:{options:{colors:this.$STANDARD(this.styleType).gradientColors,radius:["58%","78%"],center:["50%","50%"],centerRadius:["45%","46%"],labelRich:{b:this.fontSize(.26),d:this.fontSize(.28),bHeight:this.fontSize(.4)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rollFlag:!0}}}},mounted:function(){this.getAPI(this.year)},methods:{getAPI:function(t){var a=this;Object(n.a)("zlfxXfxsZbtotal",{year:t}).then(function(t){a.allcount=t.data.data[0].value}).catch(function(t){console.log(t)}),Object(n.a)("zlfxXfxsZbType",{year:t}).then(function(t){a.detailList=t.data}).catch(function(t){console.log(t)}),Object(n.a)("zlfxXfxsZbPie",{year:t}).then(function(t){a.zbPieParams.data=t.data.data}).catch(function(t){console.log(t)}),this.getZsLineAPI(t,"年度"),this.getDjjgZbPieAPI(t)},getDjjgZbPieAPI:function(t){var a=this,e=function(e){e.params.options=a.djjgPieParams.options,Object(n.a)("zlfxXfxsJgPie",{year:t,djjg:e.name}).then(function(t){e.params.data=t.data.data}).catch(function(t){console.log(t)})},i=!0,o=!1,r=void 0;try{for(var l,c=s()(this.djjgArr.values());!(i=(l=c.next()).done);i=!0){e(l.value)}}catch(t){o=!0,r=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw r}}},getZsLineAPI:function(t,a){var e=this,i="",s="";"年度"===a?(i="cy",s="[now-4, now]"):(i="cm",s=t),Object(n.a)("zlfxXfxsZsLine",{year:s,timetype:i}).then(function(t){e.zsLineParams.option.axisCategoryName="年度"===a?"年":"月",e.zsLineParams.map=t.data.map,e.zsLineParams.data=t.data.data}).catch(function(t){console.log(t)})},zsTimeClick:function(t){this.getZsLineAPI(this.year,t)},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{styleType:function(){return this.$store.state.styleType},year:function(){return this.$store.state.year}},watch:{year:function(t){this.getAPI(t)}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"c-top"},[e("div",{staticClass:"ct-left clearfloat"},[e("ctitle",{attrs:{title:"信访量信访形式占比"}}),t._v(" "),e("allCount",{staticClass:"all-count",attrs:{count:t.allcount}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"detail"},[e("detailList",{attrs:{params:t.detailList}})],1),t._v(" "),e("div",{staticClass:"chart"},[e("pie-chart3D",{attrs:{params:t.zbPieParams}})],1)])],1),t._v(" "),e("div",{staticClass:"ct-right"},[e("ctitle",{attrs:{title:"信访量信访形式走势"}}),t._v(" "),e("div",{staticClass:"inner"},[e("timeChange",{staticClass:"timeChange",on:{change:t.zsTimeClick}}),t._v(" "),e("LinesR",{staticClass:"chart",attrs:{params:t.zsLineParams}})],1)],1)]),t._v(" "),e("div",{staticClass:"c-bottom"},[e("ctitle",{attrs:{title:"信访量四级登记机构-信访形式占比"}}),t._v(" "),e("div",{staticClass:"inner"},t._l(t.djjgArr,function(a,i){return e("div",{key:i,staticClass:"chart"},[e("loopPie",{attrs:{params:a.params}}),t._v(" "),e("p",{staticClass:"label"},[t._v(t._s(a.name))])],1)}),0)],1)])])},staticRenderFns:[]};var p=e("VU/8")(f,g,!1,function(t){e("CYRH")},"data-v-0c0a210a",null);a.default=p.exports}});