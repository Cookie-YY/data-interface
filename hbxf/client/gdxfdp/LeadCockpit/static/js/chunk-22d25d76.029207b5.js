(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22d25d76"],{"13d5":function(e,t,a){"use strict";var i=a("23e7"),o=a("d58f").left,n=a("a640"),r=a("ae40"),l=n("reduce"),s=r("reduce",{1:0});i({target:"Array",proto:!0,forced:!l||!s},{reduce:function(e){return o(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"21a0":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"typeChange"},e._l(e.arr,(function(t,i){return a("li",{key:i,class:e.curType===t.name?"active":"",on:{click:function(a){return e.changeType(t)}}},[e._v(e._s(t.name)+" ")])})),0)},o=[],n=(a("b0c0"),{name:"index",data:function(){return{arr:[{name:"全部",id:"drop"},{name:"来信",id:"来信"},{name:"来访",id:"来访"},{name:"网信",id:"网信"}],curType:"全部",curTypeId:"drop"}},methods:{changeType:function(e){this.curType=e.name,this.curTypeId=e.id,this.$emit("change",this.curTypeId)}}}),r=n,l=(a("2c1e"),a("2877")),s=Object(l["a"])(r,i,o,!1,null,"6e163f34",null);t["a"]=s.exports},"25f8":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"label"},[e._v("本年度全系统纯案数")]),a("typeChange",{on:{change:e.changeType}}),a("div",{staticClass:"content"},[a("div",{staticClass:"c-top"},[a("div",{staticClass:"ct-left"},[a("div",{staticClass:"ct-l-l"},[a("ctitle",{attrs:{title:"纯案占比"}}),a("div",{staticClass:"detail"},[a("allCount",{staticClass:"all-count",attrs:{count:e.allcount}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.cazbPieParams.data.length,expression:"!cazbPieParams.data.length"}],staticClass:"zbPie",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[e._m(0),a("div",{staticClass:"chart"},[e.cazbPieParams.data[0]?a("div",{staticClass:"pie-percent"},[e._v(" "+e._s((100*e.cazbPieParams.data[0].value).toFixed(2))+"% ")]):e._e(),a("percentPie",{attrs:{params:e.cazbPieParams}})],1)])],1)],1),a("div",{staticClass:"ct-l-r"},[a("ctitle",{attrs:{title:"四级登记机构占比"}}),a("div",{staticClass:"charts"},[a("loopPie",{attrs:{params:e.djjgPieParams}})],1)],1)]),a("div",{staticClass:"ct-right"},[a("div",{staticClass:"echartPie"},[a("ctitle",{attrs:{title:"地区分布"}}),a("div",{staticClass:"charts"},[a("loopPie",{attrs:{params:e.dqfbPieParams}})],1)],1)])]),a("div",{staticClass:"c-bottom"},[a("div",{staticClass:"menu"},[a("div",{staticClass:"curitem",on:{click:function(t){e.menuShow=!0}}},[e._v(e._s(e.menuName))]),e.menuShow?a("ul",{staticClass:"menu-list clearfloat"},e._l(e.menuArr,(function(t,i){return a("li",{key:i,staticClass:"item",class:e.menuIndex===i?"active":"",on:{click:function(t){return e.menuChange(i)}}},[e._v(" "+e._s(t)+" ")])})),0):e._e()]),a("div",{staticClass:"w-charts"},[a("ctitle",{attrs:{title:"地区人群年龄统计"}}),a("div",{staticClass:"charts"},[a("barline",{attrs:{params:e.rqnlBarParams}})],1)],1),a("div",{staticClass:"w-charts"},[a("ctitle",{attrs:{title:"地区信访目的占比"}}),a("div",{staticClass:"charts"},[a("pie-chart3D",{attrs:{params:e.xfmdPieParams}})],1)],1),a("div",{staticClass:"w-charts"},[a("ctitle",{attrs:{title:"地区投诉问题占比"}}),a("div",{staticClass:"charts"},[a("loopPie",{attrs:{params:e.tswtPieParams}})],1)],1)])])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pie-label"},[a("p",[e._v("纯案数")]),a("p",[e._v("信访件总数")])])}],n=a("365c"),r=a("9539"),l=a("21a0"),s=a("ad97"),c=a("840a"),d=a("5903"),h=a("9a42"),u=a("f0dc"),m=a("8d3a"),p={name:"cjcj",components:{ctitle:r["a"],incNumber:s["a"],typeChange:l["a"],PieChart3D:c["a"],loopPie:d["a"],barline:h["a"],allCount:m["a"],percentPie:u["a"]},data:function(){return{loadFlag:!1,curTypeId:"drop",menuShow:!1,menuIndex:0,menuName:"石家庄市",menuArr:["石家庄市","张家口市","保定市","秦皇岛市","廊坊市","衡水市","邯郸市","承德市","邢台市","唐山市","沧州市","定州市","辛集市","雄安新区"],allcount:-1,cazbPieParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{bgColor:{start:"rgba(255,255,255,0.7)",end:"rgba(255,255,255,0.1)"},GradientColor:{start:"#5cd8ff",end:"#5cd8ff"}},realRadius:["55%","65%"],placeHolderRadius:["55%","65%"]},djjgPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.gradientColors,radius:["60%","75%"],center:["50%","50%"],centerRadius:["52%","53%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.22),bHeight:this.fontSize(.3)},length:20,length2:45,borderWidth:this.fontSize(.05),bRichPadding:[30,-45,0,-45],tooltip:{show:!0},itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"14%"},labelSize:"22%",rollFlag:!0}},dqfbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.pieMoreColors,radius:["60%","75%"],center:["50%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.22),bHeight:this.fontSize(.3)},length:20,length2:50,tooltip:{show:!0},bRichPadding:[30,-50,0,-50],borderWidth:5,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"22%",rollFlag:!0}},xfcsBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!0,splitLineShow:!1,axisLabelSize:"12%",left:"10%",right:"15%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#ffe97d","#ff957c"]]},map:{value:"次数"}}},rqnlBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!0,axis1Name:"人次",axisLabelSize:"12%",left:"10%",right:"0%",top:"5%",bottom:"10%",barLabelOptions:"top",barWidth:30,splitLineShow:!1,barLabelShow:!0,axisLabelColor:"rgba(0, 176, 255, .8)",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#ffa8c5","#5850ff"]]},map:{value:"人数"}}},xfmdPieParams:{data:[],angle:20,radius:"35%",labelRadius:25,fontSize:this.fontSize(.16),color:this.$STANDARD.pieColors,styleObj:{width:"100%",height:"100%"}},tswtPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.pieColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.22),bHeight:this.fontSize(.3)},length:20,length2:50,bRichPadding:[30,-50,0,-50],borderWidth:0,borderColor:"#0B2244",itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"22%",threeLevel:!0,rollFlag:!0}},dqxfcsBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!0,splitLineShow:!1,axisLabelSize:"12%",left:"16%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#d2f69d","#79cc7a"]]},map:{value:"次数"}}}}},mounted:function(){this.getAPI(this.year,this.curTypeId)},methods:{changeType:function(e){this.curTypeId=e,this.getAPI(this.year,this.curTypeId)},menuChange:function(e){this.menuIndex=e,this.menuName=this.menuArr[this.menuIndex],this.menuShow=!1,this.getBtmAPI(this.year,this.curTypeId,this.menuName)},getAPI:function(e,t){var a=this;Object(n["a"])("cjcjcaChunaZbTotal",{year:e,xfxs:t}).then((function(e){a.allcount=e.data.data[0].value})).catch((function(e){console.log(e)})),Object(n["a"])("cjcjcaChunaZbPie",{year:e,xfxs:t}).then((function(e){a.cazbPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("cjcjcaChunaDjjgPie",{year:e,xfxs:t}).then((function(e){a.djjgPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("cjcjcaChunaDqfbPie",{year:e,xfxs:t}).then((function(e){a.dqfbPieParams.data=e.data.data})).catch((function(e){console.log(e)})),this.getBtmAPI(e,t,this.menuName)},getBtmAPI:function(e,t,a){var i=this;Object(n["a"])("cjcjcaChunaRqnlBar",{year:e,xfxs:t,shij_02:a}).then((function(e){i.rqnlBarParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("cjcjcaChunaXfmdPie",{year:e,xfxs:t,shij_02:a}).then((function(e){i.xfmdPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("cjcjcaChunaTswtPie",{year:e,xfxs:t,shij_02:a}).then((function(e){i.tswtPieParams.data=e.data.data})).catch((function(e){console.log(e)}))},fontSize:function(e){document.documentElement;var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t){var a=t/1920*100;return e*a}}},computed:{year:function(){return this.$store.state.year}},watch:{year:function(e){this.getAPI(e,this.curTypeId)}}},f=p,g=(a("c80c"),a("2877")),b=Object(g["a"])(f,i,o,!1,null,"46511656",null);t["default"]=b.exports},"2c1e":function(e,t,a){"use strict";var i=a("3bd0"),o=a.n(i);o.a},"335c":function(e,t,a){},"3bd0":function(e,t,a){},"4c1e":function(e,t,a){},5903:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[i("div",{ref:"chartEl",style:{width:e.canvasStyle.width,height:e.canvasStyle.height}}),e.params.data.length&&e.params.options.bgSize?i("img",{staticClass:"bg",style:{left:e.params.options.center[0],top:e.params.options.center[1],width:e.params.options.bgSize+"px",height:e.params.options.bgSize+"px"},attrs:{src:a("c68a"),alt:""}}):e._e()])},o=[],n=(a("99af"),a("4160"),a("fb6a"),a("b0c0"),a("a9e3"),a("159b"),a("3eba"));a("c037"),a("007d"),a("627c"),a("d28f");var r={name:"PieW",data:function(){return{interval:null,rollFlag:!1,myChart:null}},props:{animateFlag:Boolean,defaultHigh:{type:Number},params:{type:Object,default:function(){return{data:[],canvasStyle:{width:"500px",height:"500px"},options:{radius:["30%","60%"],center:["50%","50%"],length:60,length2:60,bRichPadding:[30,-50,0,-50],roseType:"area",labelSize:14,borderWidth:10,borderColor:"#fff",legend:{show:!0,left:10,top:240,itemidth:14,itemHeight:14,orient:"vertical",fontSize:14},tooltip:{show:!0},rich:{bfontsize:16,perfontsize:24},colors:[],rollFlag:!1,itemLabelShow:!0,itemEmphasisLabelShow:!0,defaultHigh:0}}}}},created:function(){var e=this;this.$nextTick((function(){e.init()}))},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var t=this.params.data,a=this.params.options,i=[],o=0,r=0;if(r=Number(a.radius[0].substring(0,a.radius[0].length-1))-4,o=r-1,i=[o+"%",r+"%"],this.myChart=n.init(this.$refs.chartEl),this.myChart.setOption({title:{text:a.title?a.title:"",textStyle:{color:"#fff",fontSize:"18%"},x:"center",y:"bottom"},tooltip:{show:!a.tooltip||(void 0===a.tooltip.show||a.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],textStyle:{color:this.$STANDARD.tooltipColor},position:!1===a.labelShow?["33%","35%"]:null,formatter:function(e){return e.name?"".concat(e.marker).concat(e.name," : ").concat(e.value):""}},legend:{show:!!a.legend&&a.legend.show,selectedMode:void 0===a.legend.selectedMode||a.legend.selectedMode,left:a.legend&&a.legend.left?a.legend.left:"left",top:a.legend&&a.legend.top?a.legend.top:"top",itemWidth:a.legend.itemWidth?a.legend.itemWidth:14,itemHeight:a.legend.itemHeight?a.legend.itemHeight:14,textStyle:{fontSize:a.legend.fontSize?a.legend.fontSize:this.$STANDARD.h4.fontSize,color:a.legend?a.legend.color:this.$STANDARD.legendColor},icon:"circle",itemGap:15,orient:a.legend&&a.legend.orient?a.legend.orient:"vertical"},series:[{name:"分析",type:"pie",center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:void 0===a.radius?["0%","60%"]:a.radius,minAngle:6,label:{normal:{show:!1,position:"center",formatter:function(e){if(e.name.length>7)return"{b|".concat(e.name.slice(0,6),"\n").concat(e.name.slice(6,e.name.length),"}\n{d|").concat(e.percent,"%}");var t="";return t=a.threeLevel?"{b|".concat(e.value,"}\n{b|").concat(e.name,"}\n{d|").concat(e.percent,"%}"):"{b|".concat(e.name,"}\n{d|").concat(e.percent,"%}"),t},rich:{d:{fontSize:a.labelRich&&a.labelRich.d?a.labelRich.d:this.fontSize(.22),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.dHeight?a.labelRich.dHeight:this.fontSize(.4),color:"#e03562"},b:{fontSize:a.labelRich&&a.labelRich.b?a.labelRich.b:this.fontSize(.2),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.bHeight?a.labelRich.bHeight:this.fontSize(.4),color:function(e){return Array.isArray(a.colors[e.dataIndex])?a.colors[e.dataIndex][0]:a.colors[e.dataIndex]}}}},emphasis:{show:!0}},itemStyle:{borderColor:a.borderColor?a.borderColor:"transparent",borderWidth:a.borderWidth?a.borderWidth:0,color:function(e){return Array.isArray(a.colors[e.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[e.dataIndex][0]},{offset:1,color:a.colors[e.dataIndex][1]}],global:!1}:a.colors[e.dataIndex]}},labelLine:{length:a.length?a.length:10,length2:a.length2?a.length2:10},data:t},{type:"pie",hoverAnimation:!1,center:a.center||["50%","50%"],radius:i,data:[100],label:{show:!1},itemStyle:{normal:{color:"#0e90cc"},emphasis:{show:!1}}}]}),this.rollFlag=this.params.options.rollFlag,this.myChart.on("click",(function(t){"series"===t.componentType?(e.$emit("departmentClick",t.name),t.allData={data:e.params.data,params:t},e.$emit("canvasClick",t.allData)):e.$emit("departmentClick",t.value)})),this.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(t){1!==t.seriesIndex&&(e.rollFlag=!1,t.dataIndex!==e.app.currentIndex&&e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex}))})),this.myChart.on("mouseout",(function(t){e.rollFlag=!0}));else{var l=this.defaultHigh;if(""!==l&&void 0!==l){this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:l});var s=this;s.myChart.on("mouseover",(function(e){for(var a=t.length,i=0;i<a;i++)i!=e.dataIndex&&s.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:i})})),s.myChart.on("mouseout",(function(e){s.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:l})}))}}}},chartMove:function(){var e=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var t=e.params.data.length;e.rollFlag&&(e.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:e.app.currentIndex}),e.app.currentIndex=(e.app.currentIndex+1)%t,e.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.app.currentIndex}),e.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.app.currentIndex}))}),2e3)},fontSize:function(e){document.documentElement;var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t){var a=t/1920*100;return e*a}}},computed:{sum:function(){var e=0;return this.params.data.forEach((function(t){e+=t.value})),e},ishow:function(){return!1!==this.params.options.labelShow&&!1!==this.params.options.showsum},canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"100%",height:this.params.canvasStyle?this.params.canvasStyle.height:"100%"}}},watch:{"params.data":{handler:function(e,t){this.init()},deep:!0}}},l=r,s=(a("7e59"),a("2877")),c=Object(s["a"])(l,i,o,!1,null,"5d89441e",null);t["a"]=c.exports},"7a77":function(e,t,a){},"7e59":function(e,t,a){"use strict";var i=a("a721"),o=a.n(i);o.a},"8d3a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[e.count>=0?a("div",{staticClass:"inner"},[a("incNumber",{staticClass:"number",attrs:{incNumber:e.count}}),a("span",{staticClass:"unit"},[e._v("件 次")])],1):e._e()])},o=[],n=(a("a9e3"),a("d3b7"),a("25f0"),a("ad97")),r={name:"allCount",components:{incNumber:n["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:1}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},l=r,s=(a("b1b2"),a("2877")),c=Object(s["a"])(l,i,o,!1,null,"a3ea9bf4",null);t["a"]=c.exports},"9a42":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("13d5"),a("b0c0"),a("b64b"),a("07ac"),a("ac1f"),a("8a79"),a("2532"),a("1276"),a("159b"),a("53ca")),r=a("b85c"),l=a("2909"),s=a("313e"),c=a("dd01"),d={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var t=Object(l["a"])(this.params.data),i=[],o=this.params.options,n=o.isVertical?[0,1,1,0]:[0,0,0,1],d=Object.keys(o.map),h=!!o.line&&o.line.length===d.length;if(this.legendData=Object.values(o.map),"overlap"===o.mode&&o.legendBgSrc){var u=o.legendBgSrc.active,m=o.legendBgSrc.inActive;this.activeLegendBg=a("9e01")("./".concat(u,".png")),this.inActiveLegendBg=a("9e01")("./".concat(m,".png")),this.legendData.forEach((function(t,a){o.map[o.overlap]===t&&(e.legendData[a]={name:t,icon:void 0===e.params.legendActive||e.params.legendActive[t]?"image://".concat(e.activeLegendBg):"image://".concat(e.inActiveLegendBg)})}))}var p=[],f=0,g={};o.tooltipPercent&&t.forEach((function(e){g[e[o.xName]]=[]})),o.tooltipPercent&&t.forEach((function(e,t){var a=e[o.xName];for(var i in e)"name"!==i&&"genre"!==i&&g[a].push(e[i].split("|")[1])}));var b=0,v=0,S=1;d.forEach((function(a,i){var r=[],l=o.map;t.forEach((function(e){o.tooltipPercent?r.push(e[a].split("|")[0]):r.push(e[a])})),f=o.isAverage?r.reduce((function(e,t){return+e+ +t}))/t.length:0;var c={};o.line&&o.line.includes(a)?(e.isRightAxis=l[a].endsWith("比")||l[a].endsWith("度")||l[a].endsWith("率"),c={name:l[a],type:"line",yAxisIndex:h?0:e.isRightAxis?1:0,label:{show:!1},symbolSize:o.symbolSize?o.symbolSize:5,symbol:"circle",showSymbol:void 0!==o.showSymbol&&o.showSymbol,smooth:void 0!==o.smooth&&o.smooth,itemStyle:{normal:{label:{show:void 0===o.lineLabelShow||o.lineLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20,formatter:e.isRightAxis?"{c}%":"{c}"},color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[b],[0,1,1,0],s):""},emphasis:{label:{show:!0,fontSize:o.axisLabelSize?o.axisLabelSize:20},borderColor:o.colors&&o.colors.line?e.$STANDARD.colorToRgba(o.colors.line[b],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[b++],[0,0,0,1],s):"",width:o.lineWidth?o.lineWidth:3,shadowBlur:o.lineShadowBlur?o.lineShadowBlur:0,shadowColor:o.lineShadowColor?o.lineShadowColor:"none",shadowOffsetY:o.lineShadowOffsetY?o.lineShadowOffsetY:0,opacity:o.lineOpacity?o.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:o.isAverage?"6.7%":"",yAxis:f},{symbol:"line",symbolSize:"0",x:"95%",yAxis:f}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:r}):c={name:l[a],type:"bar",stack:"stack"===o.mode?S:S++,yAxisIndex:0,xAxisIndex:"overlap"===o.mode&&a===o.overlap?1:0,barWidth:o.barWidth?o.barWidth:"auto",barGap:o.barGaps?o.barGaps:"50%",label:{show:void 0===o.barLabelShow||o.barLabelShow,position:o.barLabelOptions?o.barLabelOptions:o.isVertical?o.categoryInverse?"left":"right":"",fontSize:o.axisLabelSize?o.axisLabelSize:20,textStyle:{color:o.itemLabelColor?o.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===o.barBorderRadius?0:o.barBorderRadius,color:"overlap"!==o.mode||o.overlap!==a?o.colors&&o.colors.bar?o.colorisarry?function(e){var t=o.colors.bar?o.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return t[e.dataIndex]}:e.$STANDARD.getColor(o.colors.bar[v++],n,s):"":"transparent",borderColor:"overlap"===o.mode&&o.overlap===a?o.colors&&o.colors.bar?e.$STANDARD.getColor(o.colors.bar[v++],n,s):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===o.barLabelShow||o.barLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20}},data:r},p.push(c)}));var y,x=[{show:o.axisValueShow,type:"value",name:o.axis1Name?o.axis1Name:"",nameLocation:o.nameLocation?"start":"end",nameTextStyle:{color:o.YaxisNameColor?o.YaxisNameColor:"#ff517f",fontSize:o.axisLabelSize?o.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:o.splitNumber?o.splitNumber:5,position:o.isVertical&&o.axisValuePosition?"top":"bottom",inverse:o.categoryInverse,scale:!!o.isLeftScale,axisTick:{show:!1},axisLabel:{show:!o.isVertical||!o.axisLabel,margin:10,fontSize:14,color:function(e,t){var a=[],i=o.splitNumber?o.splitNumber:5;if(t<i){for(var n=0;n<i;n++)a.push(0);var r=Object(c["a"])(a,"#fdc48d","#ff517f");return r(t)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!o.isVertical||!o.splitLine)&&(void 0===o.splitLineShow?o.axisValueShow:o.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:o.axisValueShow,type:"value",name:o.axis2Name?o.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!o.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(r["a"])(t);try{for(w.s();!(y=w.n()).done;){var C=y.value;C.code?i.push({value:C[o.xName],id:C.code}):i.push(C[o.xName])}}catch(P){w.e(P)}finally{w.f()}var A=i.length>=100;o.isVertical&&(A=!1);var L=[{type:"category",data:i,inverse:!!o.isVertical,axisTick:{show:!1},position:o.categoryInverse?"right":"left",triggerEvent:!0,name:o.axisCategoryName?o.axisCategoryName:"",nameLocation:o.isVertical&&o.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:o.axisLabelSize?o.axisLabelSize:20},axisLabel:{interval:0,rotate:o.rotate?o.rotate:0,color:"#fff",inside:void 0!==o.XasisLabelInside&&o.XasisLabelInside,padding:o.XasisLabelPad?o.XasisLabelPad:0,fontSize:o.axisLabelSize?o.axisLabelSize:20,lineHeight:o.XaxisLabelLH?o.XaxisLabelLH:14,height:o.XaxisLabelH?o.XaxisLabelH:30,margin:15,formatter:function(e){var t="",a="";if(o.categoryBr){a="";for(var i=o.brNum?o.brNum:1,n=0;n<e.length;n++)a+=e[n],n%i==i-1&&(a+="\n");t=a}else t=e;return t}},axisLine:{show:!!o.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],z=[{show:A,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===o.tooltipShow||o.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:o.tooltipType?o.tooltipType:"shadow"},formatter:function(e){var a=e[0].name+"<br/>";if("overlap"===o.mode&&e.unshift(e.pop()),o.addTooltip){var i=e[0].name,n=t.filter((function(e){return e[o.xName]===i}))[0];for(var r in o.addTooltip)o.addTooltip.hasOwnProperty(r)&&e.push({seriesName:o.addTooltip[r],value:n[r]})}return e.forEach((function(e,t){var i=e.seriesName.charAt(e.seriesName.length-1);a+="率"!==i&&"度"!==i&&"比"!==i?"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"</br>"):"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"%</br>")})),a}},legend:{show:o.legendShow,data:this.legendData,itemGap:o.legendGap?o.legendGap:10,top:o.legendPos?o.legendPos.top:"3%",right:o.legendPos?o.legendPos.right:"5%",itemWidth:o.legendW?o.legendW:25,itemHeight:o.legendH?o.legendH:14,icon:"undefined"===o.legendIcon?"rect":o.legendIcon,borderRadius:o.borderRadius?o.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:o.legendSize?o.legendSize:20,color:o.legendColor?o.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:o.left?o.left:"5%",right:o.right?o.right:"5%",top:o.top?o.top:"5%",bottom:A?"6%":o.bottom?o.bottom:"5%",containLabel:!0},label:{show:!0,position:o.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:o.isVertical?x:L,yAxis:o.isVertical?L:x,series:p,dataZoom:z,animation:this.animation,animationDelay:function(e){return 50*e}},this.myChart.setOption(this.option),this.myChart.on("click",(function(a){var o=e;"series"===a.componentType&&(a.allData={data:t,params:a},o.$emit("canvasClick",a.allData),o.$emit("departmentClick",a.name)),"yAxis"===a.componentType&&(a.name=a.value,i.filter((function(e){e.value==a.name&&(a.id=e.id)})),a.allData={data:t,params:a},o.$emit("canvasClick",a.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var e=this;this.myChart.on("legendselectchanged",(function(t){var a=e.params.options,i=t.selected;e.$emit("changeLegend",i),"overlap"===a.mode&&(t.name===a.map[a.overlap]&&e.legendActive?(e.legendActive=!e.legendActive,e.legendData.forEach((function(t,a){"object"===Object(n["a"])(t)&&(e.legendData[a].icon="image://".concat(e.inActiveLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})):t.name!==a.map[a.overlap]||e.legendActive||(e.legendActive=!e.legendActive,e.legendData.forEach((function(t,a){"object"===Object(n["a"])(t)&&(e.legendData[a].icon="image://".concat(e.activeLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})))}))}},watch:{animateFlag:{handler:function(e,t){this.init()},deep:!0},"params.data":{handler:function(e,t){this.init()},deep:!0}}},h=d,u=a("2877"),m=Object(u["a"])(h,i,o,!1,null,"09c9dc8b",null);t["a"]=m.exports},a721:function(e,t,a){},aca2:function(e,t,a){"use strict";var i=a("4c1e"),o=a.n(i);o.a},ad97:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"incNumber"},[e._v(e._s(e.number))])},o=[],n=(a("a9e3"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(e){var t=this;e=e||{};var a,i,o=e.time||10,n=void 0===e.num?0:e.num,r=e.regulator||100,l=n/(o/r),s=0,c=0;n%1!==0&&(a=String(n).split("."),i=a[1].length);var d=setInterval((function(){s+=l,s>=n&&(clearInterval(d),s=n);var e=0;e=n%1===0?Math.floor(s):s.toFixed(i),e!==c&&(c=e,t.number=c)}),50)},formatMoney:function(e,t){if(/[^0-9\.]/.test(e))return"0.00";if(null==e||"null"==e||""==e)return"0.00";e=e.toString().replace(/^(\d*)$/,"$1."),e=(e+"00").replace(/(\d*\.\d\d)\d*/,"$1"),e=e.replace(".",",");var a=/(\d)(\d{3},)/;while(a.test(e))e=e.replace(a,"$1,$2");if(e=e.replace(/,(\d\d)$/,".$1"),0==t){var i=e.split(".");"00"==i[1]&&(e=i[0])}return e}},watch:{incNumber:{handler:function(e,t){this.number=e,this.init()},deep:!0}}}),r=n,l=(a("aca2"),a("2877")),s=Object(l["a"])(r,i,o,!1,null,"28b38ba0",null);t["a"]=s.exports},b1b2:function(e,t,a){"use strict";var i=a("7a77"),o=a.n(i);o.a},c80c:function(e,t,a){"use strict";var i=a("335c"),o=a.n(i);o.a},d58f:function(e,t,a){var i=a("1c0b"),o=a("7b0b"),n=a("44ad"),r=a("50c4"),l=function(e){return function(t,a,l,s){i(a);var c=o(t),d=n(c),h=r(c.length),u=e?h-1:0,m=e?-1:1;if(l<2)while(1){if(u in d){s=d[u],u+=m;break}if(u+=m,e?u<0:h<=u)throw TypeError("Reduce of empty array with no initial value")}for(;e?u>=0:h>u;u+=m)u in d&&(s=a(s,d[u],u,c));return s}};e.exports={left:l(!1),right:l(!0)}},f0dc:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height}})},o=[],n=(a("b680"),a("313e")),r=a.n(n),l={name:"PieProgress",props:{data:{type:Object,default:function(){return{value:0,total:100}}},params:{type:Object,default:function(){return{id:"pie",canvasStyle:{width:"200px",height:"200px"},options:{bgColor:"rgba(13,69,113,0.5)",GradientColor:{start:"rgba(60, 234, 166, 1)",end:"rgba(162, 227, 105, 1)"}},data:{value:50}}}},animateFlag:Boolean},data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){if(this.chart&&(this.chart.dispose(),this.chart=null),0!==this.params.data.length){this.chart=r.a.init(this.$refs.chartEl);var e=(100*this.params.data[0].value).toFixed(2);this.chart.setOption({tooltip:{show:!1,trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:function(){return(100*this.params.data[0].value).toFixed(2)+"%"}},series:[{type:"pie",radius:this.params.placeHolderRadius,hoverAnimation:!1,startAngle:0,clockwise:!1,label:{normal:{position:"center"}},data:[{value:e,tooltip:{show:!1},itemStyle:{normal:{color:new r.a.graphic.LinearGradient(0,0,1,1,[{offset:0,color:this.params.options.bgColor.start||"rgba(60, 234, 166, 1)"},{offset:1,color:this.params.options.bgColor.end||"rgba(162, 227, 105, 1)"}])}},label:{normal:{show:!0,textStyle:{fontSize:20,color:"#fff"}}}}]},{type:"pie",radius:this.params.realRadius,hoverAnimation:!1,startAngle:0,clockwise:!1,label:{normal:{position:"center"}},data:[{value:e,itemStyle:{normal:{color:new r.a.graphic.LinearGradient(0,0,1,1,[{offset:0,color:this.params.options.GradientColor.start||"rgba(60, 234, 166, 1)"},{offset:1,color:this.params.options.GradientColor.end||"rgba(162, 227, 105, 1)"}])}}},{value:100-e,tooltip:{show:!1},radius:["55","60"],itemStyle:{normal:{color:"transparent"}},label:{normal:{show:!1,textStyle:{fontSize:20,color:"#fff"}}}}]}]})}}},watch:{animateFlag:{handler:function(e,t){this.initChart()},deep:!0},"params.data":{handler:function(e,t){this.initChart()},deep:!0}}},s=l,c=a("2877"),d=Object(c["a"])(s,i,o,!1,null,"501e07b9",null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-22d25d76.029207b5.js.map