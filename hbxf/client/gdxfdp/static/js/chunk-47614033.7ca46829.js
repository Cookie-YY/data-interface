(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47614033","chunk-dd6c2b7c"],{"13d5":function(e,a,t){"use strict";var i=t("23e7"),o=t("d58f").left,n=t("a640"),r=t("ae40"),s=n("reduce"),l=r("reduce",{1:0});i({target:"Array",proto:!0,forced:!s||!l},{reduce:function(e){return o(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"441f":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(t("99af"),t("4160"),t("a15b"),t("d81d"),t("b0c0"),t("b680"),t("b64b"),t("d3b7"),t("07ac"),t("ac1f"),t("1276"),t("159b"),t("ddb0"),t("3835")),r=t("b85c"),s=t("313e"),l=t("dd01"),c={name:"lines",props:{animateFlag:Boolean,maps:Object,params:{type:Object,dafault:function(){return{option:{legendShow:!0,legendfontSize:14,XaxisLineShow:!1,xaxisLineColor:"rgba(255,255,255,0.1)",axisLabelShow:!1,axisLabelFontSize:12,yaxisLabelFontSize:14,yaxisLabelColor:"#fff",axisLabelColor:"#fff",boundaryGap:!0,xAxisBr:!1,YaxisLineShow:!0,yaxisLineColor:"rgba(255,255,255,0.1)",YaxisaxisLabelShow:!0,scales:!0,lineWidth:2,Lcolor:"red",splitLineShow:!0,axisTickShow:!0,showK:!0,legenditemWidth:100,dataZoomshow:!1,dataZoomstart:0,dataZoomend:100,legendTop:"5%",showSymbol:!1,axisCategoryName:"",nameLocation:"start",XaxisNameColor:"#fff",axisLabelSize:16,legendItemgap:20},colors:[]}}}},data:function(){return{colors:[{line:"rgba(209, 48, 20, 1)",start:"rgba(62, 73, 67, .3)",end:"rgba(78, 173, 254, 0)"},{line:"rgba(29, 209, 200, 1)",start:"rgba(242, 104, 210, .3)",end:"rgba(188, 60, 113, 0)"},{line:"rgba(208, 45, 222, 1)",start:"rgba(208, 45, 222, .3)",end:"rgba(101, 30, 206, 0)"},{line:"rgba(162, 227, 105, 1)",start:"rgba(162, 227, 105, .3)",end:"rgba(60, 234, 166, 0)"},{line:"rgba(240, 151, 26, 1)",start:"rgba(240, 151, 26, .3)",end:"rgba(255, 88, 88, 0)"}]}},mounted:function(){this.init()},methods:{init:function(){var e=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var a=this.params.option,t=this.params.data,i={};i=this.maps?this.maps:this.params.map;var o=Object.keys(i),c=Object.values(i),d=[],h=[],m=[],p=[];o.forEach((function(e){h[e]=[]}));var f,g=Object(r["a"])(t.entries());try{var b=function(){var a=Object(n["a"])(f.value,2),t=(a[0],a[1]);d.push(t[e.params.xName]),o.forEach((function(e){p.push(t[e]),h[e].push(t[e])}))};for(g.s();!(f=g.n()).done;)b()}catch(x){g.e(x)}finally{g.f()}Math.max.apply(Math,p);var u=Math.min.apply(Math,p)-100;u<0&&(u=0),o.forEach((function(t,o){var n={name:i[t],type:"line",smooth:void 0!==a.smooth&&a.smooth,smoothMonotone:a.smooth&&a.smoothMonotone?a.smoothMonotone:"none",symbolSize:10,symbol:"circle",hoverAnimation:!1,showSymbol:void 0!==a.showSymbol&&a.showSymbol,itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:e.params.colors[o].line},emphasis:{color:e.params.colors[o].line,borderColor:e.params.colors[o].start,borderWidth:12}},lineStyle:{width:void 0===a.lineWidth?3:a.lineWidth,color:e.params.colors[o].line},areaStyle:{normal:{opacity:void 0===a.areaShow||a.areaShow,color:new s["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:e.params.colors[o].start},{offset:1,color:e.params.colors[o].end}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},data:h[t]};m.push(n)})),this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:function(e){var t=e[0].name+a.axisCategoryName+"<br/>";return e.forEach((function(e,i){e.seriesName.charAt(e.seriesName.length-1);"%"===a.axisYName?t+="".concat(e.marker," ").concat(e.seriesName," : ").concat((100*e.value).toFixed(2),"%</br>"):t+="".concat(e.marker," ").concat(e.seriesName," : ").concat(e.value,"</br>")})),t}},grid:{left:a.left?a.left:"6%",right:a.right?a.right:"6%",bottom:a.bottom?a.bottom:"6%",top:a.top?a.top:"6%",containLabel:!0},legend:{icon:a.legendIcon?a.legendIcon:"roundRect",show:void 0===a.legendShow||a.legendShow,itemWidth:20,itemHeight:5,color:"#fff",itemGap:a.legendItemgap?a.legendItemgap:20,right:a.legendRight?a.legendRight:"5%",top:a.legendTop?a.legendTop:"2%",textStyle:{color:"#fff",fontSize:a.legendfontSize?a.legendfontSize:18},data:c},xAxis:[{type:"category",boundaryGap:void 0!==a.boundaryGap&&a.boundaryGap,triggerEvent:!0,interval:1,data:d,name:a.axisCategoryName?a.axisCategoryName:"",nameLocation:a.nameLocation?"start":"end",nameTextStyle:{color:a.XaxisNameColor?a.XaxisNameColor:"#fff",fontSize:a.axisLabelSize?a.axisLabelSize:20},axisLabel:{show:!!a.axisLabelShow,margin:10,fontSize:16,color:this.$STANDARD.xAxisColor,formatter:function(e){return a.xAxisBr?e.split("").join("\n"):e}},axisLine:{show:!0,lineStyle:{width:2,color:this.$STANDARD.xAxisLineColor}},axisTick:{alignWithLabel:!0,show:!!a.axisTickShow,inside:!0}}],yAxis:[{type:"value",name:a.axisYName?a.axisYName:"",nameLocation:a.nameLocation?"start":"end",nameTextStyle:{color:a.YaxisNameColor?a.YaxisNameColor:"#ff517f",fontSize:a.axisLabelSize?a.axisLabelSize:20,fontWeight:"bold",padding:[0,45,0,0]},scale:!a.scales,max:void 0===this.params.axisMax?null:this.params.axisMax,min:void 0===this.params.axisMin?null:this.params.axisMin,splitNumber:a.splitNumber?a.splitNumber:5,axisLabel:{show:!a.YaxisaxisLabelShow,margin:10,fontSize:14,color:function(e,t){var i=[],o=a.splitNumber?a.splitNumber:5;if(t<o){for(var n=0;n<o;n++)i.push(0);var r=Object(l["a"])(i,"#fdc48d","#ff517f");return r(t)}return"#ff517f"},formatter:function(e){return"%"===a.axisYName?100*e:e}},axisLine:{show:!!a.YaxisLineShow,width:2,type:"dotted",color:this.$STANDARD.yAxisSplitLineColor},axisTick:{show:!1},splitLine:{show:!!a.splitLineShow,lineStyle:{type:"dashed",color:"#2c344c"}}}],dataZoom:{show:!!a.dataZoomshow,realtime:!0,fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",showDetail:!1,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"100%",bottom:0,height:20,start:a.dataZoomstart?a.dataZoomstart:0,end:a.dataZoomend?a.dataZoomend:100},series:m},this.myChart.setOption(this.option),this.params.option.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",(function(a){e.params.option.rollFlag=!1,a.dataIndex!==e.app.currentIndex&&e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex})})),this.myChart.on("mouseout",(function(a){e.params.option.rollFlag=!0}))),this.myChart.on("click",(function(a){"series"===a.componentType?e.$emit("departmentClick",a.name):e.$emit("departmentClick",a.value)}))}},chartMove:function(){var e=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=e.params.data.length;e.params.option.rollFlag&&(e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex}),e.app.currentIndex=(e.app.currentIndex+1)%a,e.myChart.dispatchAction({type:"highlight",dataIndex:e.app.currentIndex}),e.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.app.currentIndex}))}),2e3)}},computed:{},watch:{animateFlag:{handler:function(e,a){this.init()},deep:!0},"params.data":{handler:function(e,a){this.init()},deep:!0}}},d=c,h=t("2877"),m=Object(h["a"])(d,i,o,!1,null,"3d0b102f",null);a["a"]=m.exports},"7d03":function(e,a,t){},"954b":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("div",{staticClass:"c-top"},[t("div",{staticClass:"ct-left"},[t("ctitle",{attrs:{title:"区划分布"}}),t("div",{staticClass:"chart"},[t("BasicPie",{attrs:{params:e.qhfbPieParams},on:{change:e.pieClick}})],1)],1),t("div",{staticClass:"ct-center"},[t("ctitle",{attrs:{title:"赴省访信访量人数规模走势"}}),t("div",{staticClass:"chart"},[t("LinesR",{attrs:{params:e.zsLineParams}})],1)],1),t("div",{staticClass:"ct-right"},[t("ctitle",{attrs:{title:"重复访次数占比"}}),t("div",{staticClass:"chart"},[t("loopPie",{attrs:{params:e.cffPieParams}})],1)],1)]),t("div",{staticClass:"c-bottom"},[t("div",{staticClass:"cb-left"},[t("ctitle",{attrs:{title:"人数规模占比"}}),t("div",{staticClass:"inner"},[t("div",{staticClass:"chart"},[t("loopPie",{attrs:{params:e.rsgmPieParams}})],1)])],1),t("div",{staticClass:"cb-center"},[t("ctitle",{attrs:{title:"信访群体"}}),t("div",{staticClass:"inner"},[t("div",{staticClass:"chart"},[t("barline",{attrs:{params:e.nlBarParams}}),t("p",{staticClass:"chartTitle"},[e._v("年龄统计")])],1)])],1),t("div",{staticClass:"cb-right"},[t("ctitle",{attrs:{title:"信访诉求"}}),t("div",{staticClass:"inner"},[t("div",{staticClass:"chart"},[t("pie-chart3D",{attrs:{params:e.xfmdPieParams}}),t("p",{staticClass:"chartTitle"},[e._v("信访目的占比")])],1),t("div",{staticClass:"chart"},[t("loopPie",{attrs:{params:e.tswtPieParams}}),t("p",{staticClass:"chartTitle"},[e._v("投诉问题占比")])],1)])],1)])])])},o=[],n=(t("99af"),t("d81d"),t("365c")),r=t("9539"),s=t("441f"),l=t("5903"),c=t("840a"),d=t("9a42"),h=t("d70f"),m={name:"Fsf",components:{ctitle:r["a"],LinesR:s["a"],loopPie:l["a"],PieChart3D:c["a"],barline:d["a"],BasicPie:h["a"]},data:function(){return{curCity:"drop",qhfbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.pieMoreColors,title:"",insidePercent:!0,radius:["45%","60%"],center:["50%","50%"],labelShow:!0,labelRich:{b:this.fontSize(.18),d:this.fontSize(.24),bHeight:this.fontSize(.3)},length:20,length2:50,borderColor:"#0B2244",bRichPadding:[30,-50,0,-50],borderWidth:0,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"20%",rollFlag:!1}},zsLineParams:{data:[],colors:[{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{rollFlag:!1,axisLabelColor:"#fff",yaxisLabelColor:"#82d8ff",legendShow:!0,splitLineShow:!0,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"",axisYName:"件次",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"5%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"5%"},canvasStyle:{width:"100%",height:"100%"},map:{},xName:"name"},cffPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.gradientColors,radius:["55%","65%"],center:["50%","50%"],centerRadius:["39%","40%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.2)},borderWidth:0,length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"22%",rollFlag:!0}},rsgmPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.gradientColors,radius:["50%","65%"],center:["50%","50%"],centerRadius:["39%","40%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.2)},borderWidth:0,length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"22%",rollFlag:!0}},nlBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{title:"年龄统计",xName:"name",axisValueShow:!0,splitLineShow:!1,axis1Name:"人次",axisLabelSize:14,left:"7%",right:"5%",top:"15%",bottom:"15%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,axisLabelColor:"#82d8ff",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#d2f69d","#79cc7a"]]},map:{value:"人数"}}},xfmdPieParams:{data:[],angle:20,radius:"30%",labelRadius:25,fontSize:this.fontSize(.16),color:this.$STANDARD.pieColors,styleObj:{width:"100%",height:"100%"}},tswtPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.pieColors,title:"",radius:["45%","55%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:50,borderColor:"#0B2244",bRichPadding:[30,-50,0,-50],borderWidth:0,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"20%",threeLevel:!0,rollFlag:!0}}}},mounted:function(){this.getAPI(this.date)},methods:{getAPI:function(e){var a=this;Object(n["a"])("xfxsLfFsfQhPie",{day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(t){a.qhfbPieParams.data=t.data.data,a.getOtherAPI(e,a.curCity)})).catch((function(e){console.log(e)}))},getOtherAPI:function(e,a){var t=this;Object(n["a"])("xfxsLfFsfZsLine",{shij_02:a,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.zsLineParams.map=e.data.map,t.zsLineParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("xfxsLfFsfCffPie",{shij_02:a,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.cffPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("xfxsLfFsfRsgmPie",{shij_02:a,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.rsgmPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("xfxsLfFsfNlBar",{shij_02:a,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.nlBarParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("xfxsLfFsfXfmdPie",{shij_02:a,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.xfmdPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("xfxsLfFsfTswtPie",{shij_02:a,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.tswtPieParams.data=e.data.data})).catch((function(e){console.log(e)}))},pieClick:function(e){this.curCity=e||"drop",this.getOtherAPI(this.date,this.curCity)},fontSize:function(e){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var t=a/1920*100;return e*t}}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(e){this.getAPI(e)}}},p=m,f=(t("993b"),t("2877")),g=Object(f["a"])(p,i,o,!1,null,"1bb44ec2",null);a["default"]=g.exports},"993b":function(e,a,t){"use strict";var i=t("7d03"),o=t.n(i);o.a},"9a42":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(t("99af"),t("4de4"),t("4160"),t("caad"),t("d81d"),t("13d5"),t("b0c0"),t("b64b"),t("07ac"),t("ac1f"),t("8a79"),t("2532"),t("1276"),t("159b"),t("53ca")),r=t("b85c"),s=t("2909"),l=t("313e"),c=t("dd01"),d={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var a=Object(s["a"])(this.params.data),i=[],o=this.params.options,n=o.isVertical?[0,1,1,0]:[0,0,0,1],d=Object.keys(o.map),h=!!o.line&&o.line.length===d.length;if(this.legendData=Object.values(o.map),"overlap"===o.mode&&o.legendBgSrc){var m=o.legendBgSrc.active,p=o.legendBgSrc.inActive;this.activeLegendBg=t("9e01")("./".concat(m,".png")),this.inActiveLegendBg=t("9e01")("./".concat(p,".png")),this.legendData.forEach((function(a,t){o.map[o.overlap]===a&&(e.legendData[t]={name:a,icon:void 0===e.params.legendActive||e.params.legendActive[a]?"image://".concat(e.activeLegendBg):"image://".concat(e.inActiveLegendBg)})}))}var f=[],g=0,b={};o.tooltipPercent&&a.forEach((function(e){b[e[o.xName]]=[]})),o.tooltipPercent&&a.forEach((function(e,a){var t=e[o.xName];for(var i in e)"name"!==i&&"genre"!==i&&b[t].push(e[i].split("|")[1])}));var u=0,x=0,v=1;d.forEach((function(t,i){var r=[],s=o.map;a.forEach((function(e){o.tooltipPercent?r.push(e[t].split("|")[0]):r.push(e[t])})),g=o.isAverage?r.reduce((function(e,a){return+e+ +a}))/a.length:0;var c={};o.line&&o.line.includes(t)?(e.isRightAxis=s[t].endsWith("比")||s[t].endsWith("度")||s[t].endsWith("率"),c={name:s[t],type:"line",yAxisIndex:h?0:e.isRightAxis?1:0,label:{show:!1},symbolSize:o.symbolSize?o.symbolSize:5,symbol:"circle",showSymbol:void 0!==o.showSymbol&&o.showSymbol,smooth:void 0!==o.smooth&&o.smooth,itemStyle:{normal:{label:{show:void 0===o.lineLabelShow||o.lineLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20,formatter:e.isRightAxis?"{c}%":"{c}"},color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[u],[0,1,1,0],l):""},emphasis:{label:{show:!0,fontSize:o.axisLabelSize?o.axisLabelSize:20},borderColor:o.colors&&o.colors.line?e.$STANDARD.colorToRgba(o.colors.line[u],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[u++],[0,0,0,1],l):"",width:o.lineWidth?o.lineWidth:3,shadowBlur:o.lineShadowBlur?o.lineShadowBlur:0,shadowColor:o.lineShadowColor?o.lineShadowColor:"none",shadowOffsetY:o.lineShadowOffsetY?o.lineShadowOffsetY:0,opacity:o.lineOpacity?o.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:o.isAverage?"6.7%":"",yAxis:g},{symbol:"line",symbolSize:"0",x:"95%",yAxis:g}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:r}):(console.log("barGap",o.barGaps),c={name:s[t],type:"bar",stack:"stack"===o.mode?v:v++,yAxisIndex:0,xAxisIndex:"overlap"===o.mode&&t===o.overlap?1:0,barWidth:o.barWidth?o.barWidth:"auto",barGap:o.barGaps?o.barGaps:"50%",label:{show:void 0===o.barLabelShow||o.barLabelShow,position:o.barLabelOptions?o.barLabelOptions:o.isVertical?o.categoryInverse?"left":"right":"",fontSize:o.axisLabelSize?o.axisLabelSize:20,textStyle:{color:o.itemLabelColor?o.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===o.barBorderRadius?0:o.barBorderRadius,color:"overlap"!==o.mode||o.overlap!==t?o.colors&&o.colors.bar?o.colorisarry?function(e){var a=o.colors.bar?o.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return a[e.dataIndex]}:e.$STANDARD.getColor(o.colors.bar[x++],n,l):"":"transparent",borderColor:"overlap"===o.mode&&o.overlap===t?o.colors&&o.colors.bar?e.$STANDARD.getColor(o.colors.bar[x++],n,l):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===o.barLabelShow||o.barLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20}},data:r}),f.push(c)}));var S,y=[{show:o.axisValueShow,type:"value",name:o.axis1Name?o.axis1Name:"",nameLocation:o.nameLocation?"start":"end",nameTextStyle:{color:o.YaxisNameColor?o.YaxisNameColor:"#ff517f",fontSize:o.axisLabelSize?o.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:o.splitNumber?o.splitNumber:5,position:o.isVertical&&o.axisValuePosition?"top":"bottom",inverse:o.categoryInverse,scale:!!o.isLeftScale,axisTick:{show:!1},axisLabel:{show:!o.isVertical||!o.axisLabel,margin:10,fontSize:14,color:function(e,a){var t=[],i=o.splitNumber?o.splitNumber:5;if(a<i){for(var n=0;n<i;n++)t.push(0);var r=Object(c["a"])(t,"#fdc48d","#ff517f");return r(a)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!o.isVertical||!o.splitLine)&&(void 0===o.splitLineShow?o.axisValueShow:o.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:o.axisValueShow,type:"value",name:o.axis2Name?o.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!o.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(r["a"])(a);try{for(w.s();!(S=w.n()).done;){var C=S.value;C.code?i.push({value:C[o.xName],id:C.code}):i.push(C[o.xName])}}catch(z){w.e(z)}finally{w.f()}var L=i.length>=100;o.isVertical&&(L=!1);var A=[{type:"category",data:i,inverse:!!o.isVertical,axisTick:{show:!1},position:o.categoryInverse?"right":"left",triggerEvent:!0,name:o.axisCategoryName?o.axisCategoryName:"",nameLocation:o.isVertical&&o.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:o.axisLabelSize?o.axisLabelSize:20},axisLabel:{interval:0,rotate:o.rotate?o.rotate:0,color:"#fff",inside:void 0!==o.XasisLabelInside&&o.XasisLabelInside,padding:o.XasisLabelPad?o.XasisLabelPad:0,fontSize:o.axisLabelSize?o.axisLabelSize:20,lineHeight:o.XaxisLabelLH?o.XaxisLabelLH:14,height:o.XaxisLabelH?o.XaxisLabelH:30,margin:15,formatter:function(e){var a="",t="";if(o.categoryBr){t="";for(var i=o.brNum?o.brNum:1,n=0;n<e.length;n++)t+=e[n],n%i==i-1&&(t+="\n");a=t}else a=e;return a}},axisLine:{show:!!o.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],D=[{show:L,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=l["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===o.tooltipShow||o.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:o.tooltipType?o.tooltipType:"shadow"},formatter:function(e){var t=e[0].name+"<br/>";if("overlap"===o.mode&&e.unshift(e.pop()),o.addTooltip){var i=e[0].name,n=a.filter((function(e){return e[o.xName]===i}))[0];for(var r in o.addTooltip)o.addTooltip.hasOwnProperty(r)&&e.push({seriesName:o.addTooltip[r],value:n[r]})}return e.forEach((function(e,a){var i=e.seriesName.charAt(e.seriesName.length-1);t+="率"!==i&&"度"!==i&&"比"!==i?"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"</br>"):"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"%</br>")})),t}},legend:{show:o.legendShow,data:this.legendData,itemGap:o.legendGap?o.legendGap:10,top:o.legendPos?o.legendPos.top:"3%",right:o.legendPos?o.legendPos.right:"5%",itemWidth:o.legendW?o.legendW:25,itemHeight:o.legendH?o.legendH:14,icon:"undefined"===o.legendIcon?"rect":o.legendIcon,borderRadius:o.borderRadius?o.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:o.legendSize?o.legendSize:20,color:o.legendColor?o.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:o.left?o.left:"5%",right:o.right?o.right:"5%",top:o.top?o.top:"5%",bottom:L?"6%":o.bottom?o.bottom:"5%",containLabel:!0},label:{show:!0,position:o.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:o.isVertical?y:A,yAxis:o.isVertical?A:y,series:f,dataZoom:D,animation:this.animation,animationDelay:function(e){return 50*e}},this.myChart.setOption(this.option),this.myChart.on("click",(function(t){var o=e;"series"===t.componentType&&(t.allData={data:a,params:t},o.$emit("canvasClick",t.allData),o.$emit("departmentClick",t.name)),"yAxis"===t.componentType&&(t.name=t.value,i.filter((function(e){e.value==t.name&&(t.id=e.id)})),t.allData={data:a,params:t},o.$emit("canvasClick",t.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var e=this;this.myChart.on("legendselectchanged",(function(a){var t=e.params.options,i=a.selected;e.$emit("changeLegend",i),"overlap"===t.mode&&(a.name===t.map[t.overlap]&&e.legendActive?(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,t){"object"===Object(n["a"])(a)&&(e.legendData[t].icon="image://".concat(e.inActiveLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})):a.name!==t.map[t.overlap]||e.legendActive||(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,t){"object"===Object(n["a"])(a)&&(e.legendData[t].icon="image://".concat(e.activeLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})))}))}},watch:{animateFlag:{handler:function(e,a){this.init()},deep:!0},"params.data":{handler:function(e,a){this.init()},deep:!0}}},h=d,m=t("2877"),p=Object(m["a"])(h,i,o,!1,null,"c4233072",null);a["a"]=p.exports},d58f:function(e,a,t){var i=t("1c0b"),o=t("7b0b"),n=t("44ad"),r=t("50c4"),s=function(e){return function(a,t,s,l){i(t);var c=o(a),d=n(c),h=r(c.length),m=e?h-1:0,p=e?-1:1;if(s<2)while(1){if(m in d){l=d[m],m+=p;break}if(m+=p,e?m<0:h<=m)throw TypeError("Reduce of empty array with no initial value")}for(;e?m>=0:h>m;m+=p)m in d&&(l=t(l,d[m],m,c));return l}};e.exports={left:s(!1),right:s(!0)}},d70f:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.canvasStyle.width,height:e.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(t("99af"),t("4160"),t("b0c0"),t("159b"),t("2909")),r=t("313e"),s=t.n(r),l={name:"PieProgress",props:{params:{type:Object,default:function(){return{canvasStyle:{width:"500px",height:"500px"},options:{placeHolder:!0,titleShow:!0,clockwise:!0,labelCut:!0,roseType:"area",legend:{show:!0,left:10,top:240,orient:"vertical"},radius:["30%","60%"],center:["50%","50%"],insidePercent:!1,unit:"条"},data:[{name:"A",value:10},{name:"B",value:30},{name:"C",value:70}]}}},animateFlag:Boolean},data:function(){return{myChart:null}},mounted:function(){var e=this;this.initChart(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{initChart:function(){var e=this;if(this.myChart&&this.myChart.dispose(),this.myChart=s.a.init(this.$refs.chartEl),0!==this.params.data.length){var a=this.params.options,t=Object(n["a"])(this.params.data),i=0,o=0;t.forEach((function(e){i+=e.value})),o=.015*i;for(var r={text:{color:"#fff",fontSize:16,align:"center"},value:{color:"#fff",fontSize:20,fontWeight:"bold",align:"center",lineHeight:20},percent:{color:"#e03562",fontSize:a.labelInnerSize?a.labelInnerSize:16,fontWeight:"bold",lineHeight:30,align:"center",padding:[3,0]},total:{color:this.$STANDARD.mainColor}},l={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},c=[],d={},h={},m=(a.colors,0),p=t.length;m<p;m++)d={value:t[m].value,name:t[m].name},h={value:o,name:"",itemStyle:l},a.placeHolder?c.push(d,h):c.push(d);var f={name:"外部扇区",hoverAnimation:!1,type:"pie",center:a.center||["50%","50%"],roseType:!!a.roseType&&a.roseType,radius:a.radius?a.radius:["0%","60%"],label:{show:!0,position:"outside",fontSize:a.labelFontSize?a.labelFontSize:16,align:"center",color:"#fff"},labelLine:{show:!0,lineStyle:{color:this.$STANDARD.labelLineColor}},itemStyle:{color:function(e){return Array.isArray(a.colors[e.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[e.dataIndex][0]},{offset:1,color:a.colors[e.dataIndex][1]}],global:!1}:a.colors[e.dataIndex]}},data:c,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(e){return 80*e}},g={name:"内部扇区",type:"pie",center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:a.radius?a.radius:["0%","60%"],itemStyle:{color:function(e){return Array.isArray(a.colors[e.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[e.dataIndex][0]},{offset:1,color:a.colors[e.dataIndex][1]}],global:!1}:a.colors[e.dataIndex]}},label:{normal:{show:!1,position:"center",formatter:"{percent|{d}%}",rich:r},emphasis:{show:!0}},labelLine:{normal:{show:!1}},data:c,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(e){return 80*e}},b=a.insidePercent?[g,f]:[f];this.myChart.setOption({tooltip:{show:!a.tooltip||(void 0===a.tooltip.show||a.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,textStyle:{color:this.$STANDARD.tooltipColor},position:!1===a.labelShow?["33%","35%"]:null,formatter:function(e){return e.name?"".concat(e.marker).concat(e.name," : ").concat(e.value):""}},title:{show:!!a.titleShow,text:"{total|"+i+"}\n总数",left:"center",top:"center",padding:[12,0],textStyle:{color:this.$STANDARD.titleColor,align:"center",rich:r}},legend:{show:!!a.legend&&a.legend.show,left:a.legend&&a.legend.left?a.legend.left:"left",top:a.legend&&a.legend.top?a.legend.top:"top",textStyle:{color:this.$STANDARD.legendColor},orient:a.legend&&a.legend.orient?a.legend.orient:"vertical"},series:b});var u=-1;if(this.myChart.on("click",(function(a){for(var i="",o=t.length,n=0;n<o;n++)e.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:n});u===a.dataIndex?(u=-1,i=""):(u=a.dataIndex,e.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:a.dataIndex}),i=a.name),e.$emit("change",i)})),this.params.options.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(a){0!==a.seriesIndex&&(e.params.options.rollFlag=!1,a.dataIndex!==e.app.currentIndex&&e.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:e.app.currentIndex}))})),this.myChart.on("mouseout",(function(a){e.params.options.rollFlag=!0}));else{var x=this.params.options.defaultHigh;""!==x&&void 0!==x&&this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:x})}}},chartMove:function(){var e=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=e.params.data.length;e.params.options.rollFlag&&(e.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:e.app.currentIndex}),e.app.currentIndex=(e.app.currentIndex+1)%a,e.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.app.currentIndex}),e.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.app.currentIndex}))}),2e3)}},computed:{canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"500px",height:this.params.canvasStyle?this.params.canvasStyle.height:"500px"}}},watch:{animateFlag:{handler:function(e,a){this.initChart()}},"params.data":{handler:function(e,a){this.initChart()},deep:!0}}},c=l,d=t("2877"),h=Object(d["a"])(c,i,o,!1,null,"425e3e62",null);a["a"]=h.exports}}]);
//# sourceMappingURL=chunk-47614033.7ca46829.js.map