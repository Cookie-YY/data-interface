webpackJsonp([39],{ASF6:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("gyMJ"),s=e("6cNN"),n=e("05XX"),o=e("76NS"),r=e("2PJi"),l=e("+RfQ"),c=e("rhyF"),d={name:"jjf",components:{ctitle:s.a,LinesR:n.a,loopPie:o.a,PieChart3D:r.a,barline:l.a,BasicPie:c.a},data:function(){return{curCity:"drop",qhfbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD(this.styleType).pieMoreColors,title:"",insidePercent:!0,radius:["45%","60%"],center:["50%","50%"],labelShow:!0,labelRich:{b:this.fontSize(.18),d:this.fontSize(.24),bHeight:this.fontSize(.3)},length:20,length2:50,borderColor:"#0B2244",bRichPadding:[30,-50,0,-50],borderWidth:0,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"20%",labelInnerSize:"26%",rollFlag:!0}},zsLineParams:{data:[],colors:[{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{rollFlag:!1,axisLabelColor:"#fff",yaxisLabelColor:"#82d8ff",legendShow:!0,splitLineShow:!0,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"",axisYName:"件次",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"5%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"5%"},canvasStyle:{width:"100%",height:"100%"},map:{},xName:"name"},cffPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD(this.styleType).gradientColors,radius:["55%","65%"],center:["50%","50%"],centerRadius:["39%","40%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.2)},borderWidth:0,length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"22%",rollFlag:!0}},rsgmPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD(this.styleType).gradientColors,radius:["50%","65%"],center:["50%","50%"],centerRadius:["39%","40%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.2)},borderWidth:0,length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"22%",rollFlag:!0}},nlBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{title:"年龄统计",xName:"name",axisValueShow:!0,splitLineShow:!1,axis1Name:"人次",axisLabelSize:14,left:"7%",right:"5%",top:"15%",bottom:"15%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,axisLabelColor:"#82d8ff",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#d2f69d","#79cc7a"]]},map:{value:"人数"}}},xfmdPieParams:{data:[],angle:20,radius:"30%",labelRadius:25,fontSize:this.fontSize(.16),color:this.$STANDARD(this.styleType).pieColors,styleObj:{width:"100%",height:"100%"}},tswtPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD(this.styleType).pieColors,title:"",radius:["45%","55%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:50,borderColor:"#0B2244",bRichPadding:[30,-50,0,-50],borderWidth:0,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"20%",threeLevel:!0,rollFlag:!0}}}},mounted:function(){this.getAPI(this.date)},methods:{getAPI:function(t){var a=this;Object(i.a)("xfxsLfJjfQhPie",{day:"["+t.startDate+","+t.endDate+"]"}).then(function(e){a.qhfbPieParams.data=e.data.data,a.getOtherAPI(t,a.curCity)}).catch(function(t){console.log(t)})},getOtherAPI:function(t,a){var e=this;Object(i.a)("xfxsLfJjfZsLine",{day:"["+t.startDate+","+t.endDate+"]"}).then(function(t){e.zsLineParams.map=t.data.map,e.zsLineParams.data=t.data.data}).catch(function(t){console.log(t)}),Object(i.a)("xfxsLfJjfCffPie",{day:"["+t.startDate+","+t.endDate+"]"}).then(function(t){e.cffPieParams.data=t.data.data}).catch(function(t){console.log(t)}),Object(i.a)("xfxsLfJjfRsgmPie",{day:"["+t.startDate+","+t.endDate+"]"}).then(function(t){e.rsgmPieParams.data=t.data.data}).catch(function(t){console.log(t)}),Object(i.a)("xfxsLfJjfNlBar",{day:"["+t.startDate+","+t.endDate+"]"}).then(function(t){e.nlBarParams.data=t.data.data}).catch(function(t){console.log(t)}),Object(i.a)("xfxsLfJjfXfmdPie",{day:"["+t.startDate+","+t.endDate+"]"}).then(function(t){e.xfmdPieParams.data=t.data.data}).catch(function(t){console.log(t)}),Object(i.a)("xfxsLfJjfTswtPie",{day:"["+t.startDate+","+t.endDate+"]"}).then(function(t){e.tswtPieParams.data=t.data.data}).catch(function(t){console.log(t)})},pieClick:function(t){this.curCity=t||"drop",this.getOtherAPI(this.date,this.curCity)},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(t){this.getAPI(t)}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"c-top"},[e("div",{staticClass:"ct-left"},[e("ctitle",{attrs:{title:"区划分布"}}),t._v(" "),e("div",{staticClass:"chart"},[e("BasicPie",{attrs:{params:t.qhfbPieParams}})],1)],1),t._v(" "),e("div",{staticClass:"ct-center"},[e("ctitle",{attrs:{title:"进京访信访量人数规模走势"}}),t._v(" "),e("div",{staticClass:"chart"},[e("LinesR",{attrs:{params:t.zsLineParams}})],1)],1),t._v(" "),e("div",{staticClass:"ct-right"},[e("ctitle",{attrs:{title:"重复访次数占比"}}),t._v(" "),e("div",{staticClass:"chart"},[e("loopPie",{attrs:{params:t.cffPieParams}})],1)],1)]),t._v(" "),e("div",{staticClass:"c-bottom"},[e("div",{staticClass:"cb-left"},[e("ctitle",{attrs:{title:"人数规模占比"}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"chart"},[e("loopPie",{attrs:{params:t.rsgmPieParams}})],1)])],1),t._v(" "),e("div",{staticClass:"cb-center"},[e("ctitle",{attrs:{title:"信访群体"}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"chart"},[e("barline",{attrs:{params:t.nlBarParams}}),t._v(" "),e("p",{staticClass:"chartTitle"},[t._v("年龄统计")])],1)])],1),t._v(" "),e("div",{staticClass:"cb-right"},[e("ctitle",{attrs:{title:"信访诉求"}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"chart"},[e("pie-chart3D",{attrs:{params:t.xfmdPieParams}}),t._v(" "),e("p",{staticClass:"chartTitle"},[t._v("信访目的占比")])],1),t._v(" "),e("div",{staticClass:"chart"},[e("loopPie",{attrs:{params:t.tswtPieParams}}),t._v(" "),e("p",{staticClass:"chartTitle"},[t._v("投诉问题占比")])],1)])],1)])])])},staticRenderFns:[]};var f=e("C7Lr")(d,h,!1,function(t){e("xw+H")},"data-v-2dc57598",null);a.default=f.exports},"xw+H":function(t,a){}});