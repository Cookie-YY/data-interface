webpackJsonp([7],{"7re8":function(e,t){},DF2r:function(e,t){},GOie:function(e,t,a){"use strict";var i=a("XLwt"),o={name:"funnel",data:function(){return{myChart:null}},props:{params:{type:Object,default:function(){return{canvasStyle:{width:"500px",height:"500px"},options:{title:"",sort:""}}}}},mounted:function(){this.init()},methods:{init:function(){var e=this;if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){var t=this.params.data,a=this.params.options;this.myChart=i.init(this.$refs.cahrtEl),this.myChart.setOption({title:{text:a.title?a.title:"",textStyle:{color:"#13f0ff",fontSize:"20%"},x:"center",y:"bottom"},tooltip:{show:a.tooltipShow,trigger:"item",backgroundColor:this.$STANDARD(this.styleType).tooltipBackgroundColor,padding:[10,20],formatter:"{b} : {d}%"},series:[{name:"",type:"funnel",left:"10%",top:a.top?a.top:"19%",right:"10%",bottom:a.bottom?a.bottom:"5%",width:"66%",height:"76%",sort:a.sort?a.sort:"",silent:!0,gap:0,label:{normal:{show:!0,formatter:"{c}",position:"center",fontSize:"16%",color:"#fff",textShadowColor:"#000",textShadowBlur:5,textShadowOffsetY:5},emphasis:{color:"#fff"}},itemStyle:{normal:{borderColor:"rgba(14,149,210,.2)",borderWidth:2,color:"transparent"}},data:t},{name:"漏斗图",type:"funnel",left:"13%",top:a.borderTop?a.borderTop:"20%",bottom:a.borderBot?a.borderBot:"5%",width:"60%",height:"73%",sort:a.sort?a.sort:"",gap:8,label:{normal:{show:!0,formatter:"{b}",position:"right",fontSize:"16%",color:"#fff"},emphasis:{}},labelLine:{normal:{length:a.labelLineLen?a.labelLineLen:60,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderColor:"transparent",borderWidth:0,color:function(e){return{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[e.dataIndex][0]},{offset:1,color:a.colors[e.dataIndex][1]}],global:!1}}}},data:t}]}),this.params.options.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",function(t){e.params.options.rollFlag=!1,t.dataIndex!==e.app.currentIndex&&e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex})}),this.myChart.on("mouseout",function(t){e.params.options.rollFlag=!0}))}},chartMove:function(){var e=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){if(0!==e.params.data.length){var t=e.params.data.length;e.params.options.rollFlag&&(e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex}),e.app.currentIndex=(e.app.currentIndex+1)%t,e.myChart.dispatchAction({type:"highlight",dataIndex:e.app.currentIndex}),e.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.app.currentIndex}))}},2e3)}},computed:{randomID:function(){return Math.random().toString(16).slice(2,10)},styleType:function(){return this.$store.state.styleType},curData:function(){return this.params.data}},watch:{curData:{handler:function(e,t){this.init()},deep:!0},styleType:function(e){this.init()}}},n={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"loading",rawName:"v-loading",value:!this.params.data.length,expression:"!params.data.length"}],ref:"cahrtEl",style:{width:this.params.canvasStyle.width,height:this.params.canvasStyle.height},attrs:{"element-loading-background":this.$STANDARD(this.styleType).loadingBgColor}})},staticRenderFns:[]};var r=a("VU/8")(o,n,!1,function(e){a("mBI/")},"data-v-3c07854f",null);t.a=r.exports},VqrI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("BO1k"),o=a.n(i),n=a("gyMJ"),r=a("6cNN"),s=a("QlLh"),l=a("Es1k"),h=a("JgS+"),c=a("GOie"),d=a("pFYg"),p=a.n(d),g=a("gRE1"),m=a.n(g),f=a("fZjL"),u=a.n(f),y=a("Gu7T"),b=a.n(y),v=a("XLwt"),S=a("+Era"),x={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD(this.styleType).gradientColors,line:this.$STANDARD(this.styleType).gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,xsplitLineShow:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20},data:[{department:"汉族",value:6719},{department:"少数民族",value:3345}]}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()})},methods:{init:function(){var e=this;if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){var t=[].concat(b()(this.params.data)),i=[],n=this.params.options,r=n.isVertical?[0,1,1,0]:[0,0,0,1],s=u()(n.map),l=!!n.line&&n.line.length===s.length;if(this.legendData=m()(n.map),"overlap"===n.mode&&n.legendBgSrc){var h=n.legendBgSrc.active,c=n.legendBgSrc.inActive;this.activeLegendBg=a("32Qh")("./"+h+".png"),this.inActiveLegendBg=a("32Qh")("./"+c+".png"),this.legendData.forEach(function(t,a){n.map[n.overlap]===t&&(e.legendData[a]={name:t,icon:void 0===e.params.legendActive?"image://"+e.activeLegendBg:e.params.legendActive[t]?"image://"+e.activeLegendBg:"image://"+e.inActiveLegendBg})})}var d=[],p={};n.tooltipPercent&&t.forEach(function(e){p[e[n.xName]]=[]}),n.tooltipPercent&&t.forEach(function(e,t){var a=e[n.xName];for(var i in e)"name"!==i&&"genre"!==i&&p[a].push(e[i].split("|")[1])});var g=0,f=0,y=1,x=[];t.forEach(function(e,t){var a=0;s.forEach(function(t,i){a+=e[t]}),s.forEach(function(t,i){0===a?x.push(0):x.push((e[t]/a*100).toFixed(2))})});for(var w=s.length,C=[],A=0;A<x.length;A+=w)C.push(x.slice(A,A+w));var L=[];C[0].forEach(function(e){L.push([])}),C.forEach(function(e,t){e.forEach(function(t,a){e[a]}),e[e.length-1]}),C.forEach(function(e,t){e.forEach(function(e,t){L[t].push(e)})}),s.forEach(function(t,a){var i,o=n.map;i=L[a];var s={};n.line&&n.line.includes(t)?(e.isRightAxis=o[t].endsWith("比")||o[t].endsWith("度")||o[t].endsWith("率"),s={name:o[t],type:"line",yAxisIndex:l?0:e.isRightAxis?1:0,label:{show:!1},symbolSize:n.symbolSize?n.symbolSize:5,symbol:"circle",showSymbol:void 0!==n.showSymbol&&n.showSymbol,smooth:void 0!==n.smooth&&n.smooth,itemStyle:{normal:{label:{show:void 0===n.lineLabelShow||n.lineLabelShow,fontSize:n.axisLabelSize?n.axisLabelSize:20,formatter:e.isRightAxis?"{c}%":"{c}"},color:n.colors&&n.colors.line?e.$STANDARD(e.styleType).getColor(n.colors.line[g],[0,1,1,0],v):""},emphasis:{label:{show:!0,fontSize:n.axisLabelSize?n.axisLabelSize:20},borderColor:n.colors&&n.colors.line?e.$STANDARD(e.styleType).colorToRgba(n.colors.line[g],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:n.colors&&n.colors.line?e.$STANDARD(e.styleType).getColor(n.colors.line[g++],[0,0,0,1],v):"",width:n.lineWidth?n.lineWidth:3,shadowBlur:n.lineShadowBlur?n.lineShadowBlur:0,shadowColor:n.lineShadowColor?n.lineShadowColor:"none",shadowOffsetY:n.lineShadowOffsetY?n.lineShadowOffsetY:0,opacity:n.lineOpacity?n.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:n.isAverage?"6.7%":"",yAxis:0},{symbol:"line",symbolSize:"0",x:"95%",yAxis:0}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:i}):s={name:o[t],type:"bar",stack:"stack"===n.mode?y:y++,yAxisIndex:0,xAxisIndex:"overlap"===n.mode&&t===n.overlap?1:0,barWidth:n.barWidth?n.barWidth:"auto",barGap:n.barGaps?n.barGaps:"50%",barCategoryGap:"50%",label:{show:void 0===n.barLabelShow||n.barLabelShow,position:n.barLabelOptions?n.barLabelOptions:n.isVertical?n.categoryInverse?"left":"right":"",fontSize:n.axisLabelSize?n.axisLabelSize:20,textStyle:{color:n.itemLabelColor?n.itemLabelColor:""}},itemStyle:{normal:{barBorderRadius:void 0===n.barBorderRadius?0:n.barBorderRadius,color:"overlap"!==n.mode||n.overlap!==t?n.colors&&n.colors.bar?n.colorisarry?function(e){return(n.colors.bar?n.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"])[e.dataIndex]}:e.$STANDARD(e.styleType).getColor(n.colors.bar[f++],r,v):"":"transparent",borderColor:"overlap"===n.mode&&n.overlap===t?n.colors&&n.colors.bar?e.$STANDARD(e.styleType).getColor(n.colors.bar[f++],r,v):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===n.barLabelShow||n.barLabelShow,fontSize:n.axisLabelSize?n.axisLabelSize:20}},data:i},d.push(s)});var T=[{show:n.axisValueShow,type:"value",name:n.axis1Name?n.axis1Name:"%",position:n.isVertical&&n.axisValuePosition?"top":"bottom",inverse:n.categoryInverse,nameTextStyle:{color:"#ff517f",fontSize:n.axisLabelSize?n.axisLabelSize:20,fontWeight:"bold",padding:[0,30,0,0]},scale:!!n.isLeftScale,splitNumber:n.splitNumber?n.splitNumber:5,axisTick:{show:!1},axisLabel:{show:!n.isVertical||!n.axisLabel,color:function(e,t){var a=[],i=n.splitNumber?n.splitNumber:5;if(t<i){for(var o=0;o<i;o++)a.push(0);return Object(S.a)(a,"#fdc48d","#ff517f")(t)}return"#ff517f"},margin:10,fontSize:14,formatter:"{value}"},axisLine:{show:!1},splitLine:{show:void 0===n.xsplitLineShow||n.xsplitLineShow,lineStyle:{color:n.xsplitLineColor?n.xsplitLineColor:this.$STANDARD(this.styleType).splitLineColor}}},{show:n.axisValueShow,type:"value",name:n.axis2Name?n.axis2Name:"",nameTextStyle:{color:this.$STANDARD(this.styleType).xAxisColor,fontSize:20},scale:!!n.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD(this.styleType).xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD(this.styleType).splitLineColor}}}],D=!0,z=!1,N=void 0;try{for(var I,B=o()(t);!(D=(I=B.next()).done);D=!0){var R=I.value;i.push(R[n.xName])}}catch(e){z=!0,N=e}finally{try{!D&&B.return&&B.return()}finally{if(z)throw N}}var P=i.length>=100;n.isVertical&&(P=!1);var j=[{type:"category",data:i,inverse:!!n.isVertical,axisTick:{show:!1},position:n.categoryInverse?"right":"left",triggerEvent:!0,name:n.axisCategoryName?n.axisCategoryName:"",nameLocation:n.isVertical&&n.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD(this.styleType).xAxisColor,fontSize:n.axisLabelSize?n.axisLabelSize:20},axisLabel:{rotate:n.rotate?n.rotate:0,color:"#fefefe",fontSize:n.axisLabelSize?n.axisLabelSize:20,lineHeight:24,height:30,margin:15,formatter:function(e){var t="",a="";if(n.categoryBr){a="";for(var i=n.brNum?n.brNum:1,o=0;o<e.length;o++)a+=e[o],o%i==i-1&&(a+="\n");t=a}else t=e;return n.islineHeight?"{value|"+t+"}":t},rich:{value:{lineHeight:26,fontSize:20}}},axisLine:{show:!!n.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD(this.styleType).splitLineColor}}},{show:!1,type:"category",data:i}],$=[{show:P,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=v.init(this.$refs.chartEl),this.option={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD(this.styleType).tooltipBackgroundColor,borderColor:this.$STANDARD(this.styleType).tooltipBorderColor,padding:12,axisPointer:{type:n.tooltipType?n.tooltipType:"shadow"},formatter:function(e){var t=e[0].name+n.axisCategoryName+"<br/>";return e.forEach(function(e,a){var i="";i="string"==typeof n.colors.bar[a]?e.marker:'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+n.colors.bar[a][0]+';"></span>',t+=""+i+e.seriesName+" : "+e.value+"%</br>"}),t}},legend:{show:n.legendShow,data:this.legendData,itemGap:n.legendGap?n.legendGap:10,top:n.legendPos?n.legendPos.top:"3%",right:n.legendPos?n.legendPos.right:"5%",itemWidth:n.legendW?n.legendW:25,itemHeight:n.legendH?n.legendH:14,icon:"undefined"===n.legendIcon?"rect":n.legendIcon,borderRadius:n.borderRadius?n.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:n.legendSize?n.legendSize:20,color:n.legendColor?n.legendColor:this.$STANDARD(this.styleType).legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD(this.styleType).legendColor}}}},grid:{left:n.left?n.left:"5%",right:n.right?n.right:"5%",top:n.top?n.top:"5%",bottom:P?"6%":n.bottom?n.bottom:"5%",containLabel:!0},label:{show:!0,position:n.isVertical?"right":"top",distance:10,color:this.$STANDARD(this.styleType).xAxisColor,fontSize:20,zlevel:10},xAxis:n.isVertical?T:j,yAxis:n.isVertical?j:T,series:d,dataZoom:$,animation:this.animation,animationDelay:function(e){return 50*e}},this.myChart.setOption(this.option),this.myChart.on("click",function(t){"series"===t.componentType?e.$emit("departmentClick",t.name):e.$emit("departmentClick",t.value)}),this.legendselectchanged()}},legendselectchanged:function(){var e=this;this.myChart.on("legendselectchanged",function(t){var a=e.params.options,i=t.selected;e.$emit("changeLegend",i),"overlap"===a.mode&&(t.name===a.map[a.overlap]&&e.legendActive?(e.legendActive=!e.legendActive,e.legendData.forEach(function(t,a){"object"===(void 0===t?"undefined":p()(t))&&(e.legendData[a].icon="image://"+e.inActiveLegendBg)}),e.myChart.setOption({legend:{data:e.legendData}})):t.name!==a.map[a.overlap]||e.legendActive||(e.legendActive=!e.legendActive,e.legendData.forEach(function(t,a){"object"===(void 0===t?"undefined":p()(t))&&(e.legendData[a].icon="image://"+e.activeLegendBg)}),e.myChart.setOption({legend:{data:e.legendData}})))})}},computed:{randomID:function(){return Math.random().toString(16).slice(2,10)},styleType:function(){return this.$store.state.styleType},realData:function(){return this.params.data}},watch:{styleType:function(e){this.animation=!1,this.init()},animateFlag:{handler:function(e,t){this.init()},deep:!0},realData:{handler:function(e,t){this.init()},deep:!0}}},w={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"loading",rawName:"v-loading",value:!this.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:this.params.canvasStyle.width,height:this.params.canvasStyle.height},attrs:{"element-loading-background":this.$STANDARD(this.styleType).loadingBgColor}})},staticRenderFns:[]};var C=a("VU/8")(x,w,!1,function(e){a("7re8")},"data-v-7c75f7ab",null).exports,A=a("76NS"),L=a("3UrB"),T=a("dD3/"),D={name:"djqy",components:{ctitle:r.a,typeChange:s.a,timeChange:l.a,incNumber:h.a,funnel:c.a,PerBar:C,loopPie:A.a,allCount:L.a,detailList:T.a},data:function(){return{curTypeId:"drop",allcount:-1,detailList:null,zbFunnelParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD(this.styleType).gradientColors,tooltipShow:!1,sort:"none",top:"10%",borderTop:"11%",rollFlag:!0}},zsBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{mode:"stack",legendShow:!0,legendPos:{right:"10%",top:"8%"},legendSize:14,legendIcon:"rect",legendW:12,legendH:12,legendColor:"#fff",xName:"name",axisCategoryName:"年",axisValueShow:!0,barLabelShow:!1,perBar:!0,xsplitLineShow:!1,left:"12%",right:"10%",top:"15%",bottom:"5%",axisLabelSize:"14%",colors:{bar:this.$STANDARD(this.styleType).gradientColors},map:{}}},djjgArr:[{name:"国家",params:{data:[],options:{}}},{name:"省级",params:{data:[],options:{}}},{name:"市级",params:{data:[],options:{}}},{name:"县级",params:{data:[],options:{}}}],djjgPieParams:{options:{colors:this.$STANDARD(this.styleType).gradientColors,radius:["58%","78%"],center:["50%","50%"],centerRadius:["45%","46%"],labelRich:{b:this.fontSize(.16),d:this.fontSize(.18),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"22%",rollFlag:!0}}}},mounted:function(){this.getAPI(this.year,this.curTypeId)},methods:{changeType:function(e){this.curTypeId=e,this.getAPI(this.year,this.curTypeId)},getAPI:function(e,t){var a=this;Object(n.a)("zlfxDjjgZbtotal",{year:e,xfxs:t}).then(function(e){a.allcount=e.data.data[0].value}).catch(function(e){console.log(e)}),Object(n.a)("zlfxDjjgZbType",{year:e,xfxs:t}).then(function(e){a.detailList=e.data}).catch(function(e){console.log(e)}),Object(n.a)("zlfxDjjgZbFunnel",{year:e,xfxs:t}).then(function(e){a.zbFunnelParams.data=e.data.data}).catch(function(e){console.log(e)}),this.getZsLineAPI(e,t,"年度"),this.getDjjgZbPieAPI(e,t)},getDjjgZbPieAPI:function(e,t){var a=this,i=function(i){i.params.options=a.djjgPieParams.options,Object(n.a)("zlfxDjjgJgPie",{year:e,djjg:i.name,xfxs:t}).then(function(e){i.params.data=e.data.data}).catch(function(e){console.log(e)})},r=!0,s=!1,l=void 0;try{for(var h,c=o()(this.djjgArr.values());!(r=(h=c.next()).done);r=!0){i(h.value)}}catch(e){s=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(s)throw l}}},getZsLineAPI:function(e,t,a){var i=this,o="",r="";"年度"===a?(o="cy",r="[now-4, now]"):(o="cm",r=e),Object(n.a)("zlfxDjjgZsBar",{year:r,timetype:o,xfxs:t}).then(function(e){i.zsBarParams.options.axisCategoryName="年度"===a?"年":"月",i.zsBarParams.options.map=e.data.map,i.zsBarParams.data=e.data.data}).catch(function(e){console.log(e)})},zsTimeClick:function(e){this.getZsLineAPI(this.year,this.curTypeId,e)},fontSize:function(e){document.documentElement;var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t){var a=t/1920*100;return e*a}}},computed:{year:function(){return this.$store.state.year}},watch:{year:function(e){this.getAPI(e,this.curTypeId)}}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("typeChange",{on:{change:e.changeType}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"c-top"},[a("div",{staticClass:"ct-left"},[a("ctitle",{attrs:{title:"信访量四级登记机构占比"}}),e._v(" "),a("div",{staticClass:"inner"},[a("div",{staticClass:"part part1"},[a("allCount",{attrs:{count:e.allcount}})],1),e._v(" "),a("div",{staticClass:"part part2"},[a("detailList",{attrs:{params:e.detailList}})],1),e._v(" "),a("div",{staticClass:"part part3"},[a("funnel",{attrs:{params:e.zbFunnelParams}})],1)])],1),e._v(" "),a("div",{staticClass:"ct-right"},[a("ctitle",{attrs:{title:"信访量四级登记机构占比走势"}}),e._v(" "),a("div",{staticClass:"inner"},[a("timeChange",{key:e.curTypeId,staticClass:"timeChange",on:{change:e.zsTimeClick}}),e._v(" "),a("PerBar",{attrs:{params:e.zsBarParams}})],1)],1)]),e._v(" "),a("div",{staticClass:"c-bottom"},[a("ctitle",{attrs:{title:"信访量四级登记机构-机构类别占比"}}),e._v(" "),a("div",{staticClass:"inner"},e._l(e.djjgArr,function(t,i){return a("div",{key:i,staticClass:"chart"},[a("loopPie",{attrs:{params:t.params}}),e._v(" "),a("p",{staticClass:"label"},[e._v(e._s(t.name))])],1)}),0)],1)])],1)},staticRenderFns:[]};var N=a("VU/8")(D,z,!1,function(e){a("DF2r")},"data-v-3829f9d3",null);t.default=N.exports},"mBI/":function(e,t){}});