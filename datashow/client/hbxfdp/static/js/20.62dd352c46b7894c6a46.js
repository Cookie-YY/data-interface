webpackJsonp([20],{Sn2R:function(t,a){},"k7H/":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("HzJ8"),n=e.n(i),s=e("gyMJ"),r=e("6cNN"),o=e("QlLh"),c=e("Es1k"),l=e("JgS+"),d=e("76NS"),h=e("2PJi"),m=e("05XX"),g={name:"xfxs",components:{ctitle:r.a,typeChange:o.a,timeChange:c.a,incNumber:l.a,loopPie:d.a,PieChart3D:h.a,LinesR:m.a},data:function(){return{loadFlag:!1,curTypeId:"drop",zbPieParams:{data:[],color:this.$STANDARD(this.styleType).pieColors,angle:20,radius:"35%",labelRadius:30,styleObj:{width:"100%",height:"100%"},isBr:!0,labelPer:!0},zsLineParams:{data:[],colors:[{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{splitNumber:4,splitLineShow:!0,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"年",axisYName:"件次",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"8%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"8%"},canvasStyle:{width:"100%",height:"100%"},map:{},xName:"name"},djjgArr:[{name:"国家",params:{data:[],options:{}}},{name:"省级",params:{data:[],options:{}}},{name:"市级",params:{data:[],options:{}}},{name:"县级",params:{data:[],options:{}}}],djjgPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD(this.styleType).gradientColors,radius:["58%","78%"],center:["50%","50%"],centerRadius:["45%","46%"],labelRich:{b:this.fontSize(.16),d:this.fontSize(.18),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"22%",rollFlag:!0}}}},mounted:function(){this.getAPI(this.year,this.curTypeId)},methods:{changeType:function(t){this.curTypeId=t,this.getAPI(this.year,this.curTypeId)},getAPI:function(t,a){var e=this;Object(s.a)("zlfxXfmdZbPie",{year:t,xfxs:a}).then(function(t){e.zbPieParams.data=t.data.data}).catch(function(t){console.log(t)}),this.getZsLineAPI(t,a,"年度"),this.getDjjgZbPieAPI(t,a)},getZsLineAPI:function(t,a,e){var i=this,n="",r="";"年度"===e?(n="cy",r="[now-4, now]"):(n="cm",r=t),Object(s.a)("zlfxXfmdZsLine",{year:r,timetype:n,xfxs:a}).then(function(t){i.zsLineParams.option.axisCategoryName="年度"===e?"年":"月",i.zsLineParams.map=t.data.map,i.zsLineParams.data=t.data.data}).catch(function(t){console.log(t)})},getDjjgZbPieAPI:function(t,a){var e=this,i=function(i){i.params.options=e.djjgPieParams.options,Object(s.a)("zlfxXfmdJgPie",{year:t,djjg:i.name,xfxs:a}).then(function(t){i.params.data=t.data.data}).catch(function(t){console.log(t)})},r=!0,o=!1,c=void 0;try{for(var l,d=n()(this.djjgArr.values());!(r=(l=d.next()).done);r=!0){i(l.value)}}catch(t){o=!0,c=t}finally{try{!r&&d.return&&d.return()}finally{if(o)throw c}}},zsTimeClick:function(t){this.getZsLineAPI(this.year,this.curTypeId,t)},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{year:function(){return this.$store.state.year}},watch:{year:function(t){this.getAPI(t,this.curTypeId)}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("typeChange",{on:{change:t.changeType}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"c-top"},[e("div",{staticClass:"ct-left clearfloat"},[e("ctitle",{attrs:{title:"信访量信访目的占比"}}),t._v(" "),e("div",{staticClass:"inner"},[e("pie-chart3D",{attrs:{params:t.zbPieParams}})],1)],1),t._v(" "),e("div",{staticClass:"ct-right"},[e("ctitle",{attrs:{title:"信访量信访目的走势"}}),t._v(" "),e("div",{staticClass:"inner"},[e("timeChange",{key:t.curTypeId,staticClass:"timeChange",on:{change:t.zsTimeClick}}),t._v(" "),e("LinesR",{attrs:{params:t.zsLineParams}})],1)],1)]),t._v(" "),e("div",{staticClass:"c-bottom"},[e("ctitle",{attrs:{title:"信访量四级登记机构-信访目的占比"}}),t._v(" "),e("div",{staticClass:"inner"},t._l(t.djjgArr,function(a,i){return e("div",{key:i,staticClass:"chart"},[e("loopPie",{attrs:{params:a.params}}),t._v(" "),e("p",{staticClass:"label"},[t._v(t._s(a.name))])],1)}),0)],1)])],1)},staticRenderFns:[]};var p=e("C7Lr")(g,u,!1,function(t){e("Sn2R")},"data-v-8a5c64c6",null);a.default=p.exports}});