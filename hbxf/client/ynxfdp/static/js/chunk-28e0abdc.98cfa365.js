(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e0abdc"],{6875:function(t,a,e){},a173:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper child-wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"w-left"},[e("ctitle",{staticClass:"w-l-title",attrs:{title:"区域年度受理量排行"}}),e("div",{staticClass:"echarts"},[e("horizontal-bar",{attrs:{params:t.xfbmBarParams}})],1)],1),e("div",{staticClass:"w-right"},[e("div",{staticClass:"c-top"},[e("div",{staticClass:"part ct-left"},[e("ctitle",{attrs:{title:"办理方式"}}),e("div",{staticClass:"inner"},[e("blfsList",{attrs:{data:t.blfsListData}})],1)],1),e("div",{staticClass:"part ct-right"},[e("ctitle",{attrs:{title:"受理量走势"}}),e("div",{staticClass:"inner"},[e("timeChange",{staticClass:"timeChange",on:{change:t.zsTimeClick}}),e("LineMonth",{attrs:{params:t.zsLineParams}})],1)],1)]),e("div",{staticClass:"c-bottom"},[e("div",{staticClass:"part cb-left"},[e("ctitle",{attrs:{title:"信访来源"}}),e("div",{staticClass:"inner"},[e("funnel",{staticStyle:{"margin-left":"1rem"},attrs:{params:t.xfxsFinParams}})],1)],1),e("div",{staticClass:"part cb-center"},[e("ctitle",{attrs:{title:"投诉问题分布"}}),e("div",{staticClass:"inner"},[e("loopPie",{attrs:{params:t.tswtzbPieParams}})],1)],1),e("div",{staticClass:"part cb-right"},[e("ctitle",{attrs:{title:"信访评价"}}),e("div",{staticClass:"inner"},[e("timeChange",{staticClass:"timeChange",on:{change:t.xfpjTimeClick}}),e("LinesR",{attrs:{params:t.xfpjLineParams}})],1)],1)])])])])},n=[],o=(e("d81d"),e("365c")),s=e("164e"),r=e("9539"),l=e("6f12"),c=e("ee15"),d=e("5903"),h=e("840a"),f=(e("f40f"),e("6362")),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"cahrtEl",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},m=[],g=e("313e"),b={name:"funnel",data:function(){return{myChart:null}},props:{params:{type:Object,default:function(){return{canvasStyle:{width:"500px",height:"500px"},options:{title:"",sort:""}}}}},mounted:function(){this.init()},methods:{init:function(){var t=this;if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){var a=this.params.data,e=this.params.options;this.myChart=g["init"](this.$refs.cahrtEl),this.myChart.setOption({title:{text:e.title?e.title:"",textStyle:{color:"#13f0ff",fontSize:"20%"},x:"center",y:"bottom"},tooltip:{show:e.tooltipShow,trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:"{b} : {d}%"},series:[{name:"",type:"funnel",left:"10%",top:e.top?e.top:"19%",right:"10%",bottom:e.bottom?e.bottom:"5%",width:"66%",height:"76%",sort:e.sort?e.sort:"",silent:!0,gap:0,label:{normal:{show:!0,formatter:"{c}",position:"center",fontSize:"16%",color:"#fff",textShadowColor:"#000",textShadowBlur:5,textShadowOffsetY:5},emphasis:{color:"#fff"}},itemStyle:{normal:{borderColor:"rgba(14,149,210,.2)",borderWidth:2,color:"transparent"}},data:a},{name:"漏斗图",type:"funnel",left:"13%",top:e.borderTop?e.borderTop:"20%",bottom:e.borderBot?e.borderBot:"5%",width:"60%",height:"73%",sort:e.sort?e.sort:"",gap:8,label:{normal:{show:!0,formatter:"{b}",position:"right",fontSize:"16%",color:"#fff"},emphasis:{}},labelLine:{normal:{length:e.labelLineLen?e.labelLineLen:60,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderColor:"transparent",borderWidth:0,color:function(t){return{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:e.colors[t.dataIndex][0]},{offset:1,color:e.colors[t.dataIndex][1]}],global:!1}}}},data:a}]}),this.params.options.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",(function(a){t.params.options.rollFlag=!1,a.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex})})),this.myChart.on("mouseout",(function(a){t.params.options.rollFlag=!0})))}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){if(0!==t.params.data.length){var a=t.params.data.length;t.params.options.rollFlag&&(t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%a,t.myChart.dispatchAction({type:"highlight",dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}}),2e3)}},watch:{"params.data":{handler:function(t,a){this.init()},deep:!0}}},u=b,x=e("2877"),w=Object(x["a"])(u,p,m,!1,null,"5e3a04f1",null),y=w.exports,v=e("caee"),C={name:"xfbm",components:{horizontalBar:s["a"],ctitle:r["a"],blfsList:l["a"],timeChange:c["a"],LinesR:f["a"],loopPie:d["a"],PieChart3D:h["a"],funnel:y,LineMonth:v["a"]},data:function(){return{xfxsFinParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.gradientColors,tooltipShow:!1,sort:"none",top:"10%",borderTop:"11%",rollFlag:!0}},year:2020,xfbmBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"}},blfsListData:[],zsLineParams:{data:[],colors:[{line:{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#6356fb"},{offset:.4,color:"#ed9fcc"},{offset:1,color:"#9f75e7"}]},start:"rgba(181, 127, 182, 0.3)",end:"rgba(181, 127, 182, 0)"}],option:{splitLineShow:!0,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"年",axisYName:"",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"15%",top:"15%",bottom:"18%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{value:"数量"},xName:"name"},tswtzbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:["#4eed99","#d93e75","#ccbe51","#eb9002","#1ba1ff","#563ad2","#f89e67","#13f0ff"],radius:["38%","47%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.18),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"24%",rollFlag:!0,threeLevel:!0}},xfpjLineParams:{data:[],colors:[{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{showSymbol:!0,splitLineShow:!0,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisYName:"",axisCategoryName:"年",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"15%",top:"15%",bottom:"18%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{},xName:"name"}}},mounted:function(){this.getAPI(this.year)},methods:{zsTimeClick:function(t){this.getZsLineAPI(this.year,this.curName,t)},xfpjTimeClick:function(t){this.getXfpjLineAPI(this.year,this.curName,t)},getAPI:function(t){var a=this;Object(o["a"])("xfgzxspdZrdwNdsllpm",{year:t}).then((function(t){a.xfbmBarParams.data=t.data.data.sort((function(t,a){return t.value-a.value}))})).catch((function(t){console.log(t)})),Object(o["a"])("xfgzxspdZrdwBlfs",{year:t}).then((function(t){a.blfsListData=t.data.data})).catch((function(t){console.log(t)})),this.getZsLineAPI(),Object(o["a"])("xfgzxspdZrdwXfxsFin",{year:t,shij_02:name}).then((function(t){a.xfxsFinParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(o["a"])("xfgzxspdZrdwTswtzbPie",{year:t,shij_02:name}).then((function(t){a.tswtzbPieParams.data=t.data.data})).catch((function(t){console.log(t)})),this.getXfpjLineAPI(t,name,"年度")},getZsLineAPI:function(t,a,e){var i=this;"年度"===e?"cy":"cm",Object(o["a"])("xfgzxspdZrdwSllzs").then((function(t){i.zsLineParams.option.axisCategoryName="年度"===e?"年":"月",i.zsLineParams.data=t.data.data})).catch((function(t){console.log(t)}))},getXfpjLineAPI:function(t,a,e){var i=this,n="",s="";"年度"===e?(n="cy",s="[now-4, now]"):(n="cm",s=t),Object(o["a"])("xfgzxspdZrdwXfpjLine",{year:s,shij_02:a,timetype:n}).then((function(t){i.xfpjLineParams.option.axisCategoryName="年度"===e?"年":"月",i.xfpjLineParams.map=t.data.map,i.xfpjLineParams.data=t.data.data})).catch((function(t){console.log(t)}))},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}}},S=C,L=(e("f397"),Object(x["a"])(S,i,n,!1,null,"237e71d6",null));a["default"]=L.exports},f397:function(t,a,e){"use strict";var i=e("6875"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-28e0abdc.98cfa365.js.map