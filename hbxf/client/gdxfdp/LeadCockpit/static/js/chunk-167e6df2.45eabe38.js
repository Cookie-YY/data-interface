(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-167e6df2"],{"034e":function(e,t,a){},"089d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"typeChange"},e._l(e.arr,(function(t,i){return a("li",{key:i,class:e.curType===t.name?"active":"",on:{click:function(a){return e.changeType(t)}}},[e._v(e._s(t.name)+" ")])})),0)},o=[],n=(a("b0c0"),{name:"index",data:function(){return{arr:[{name:"信访量",id:"信访量"},{name:"满意率",id:"满意率"},{name:"化解率",id:"化解率"}],curType:"信访量",curTypeId:"信访量"}},methods:{changeType:function(e){this.curType=e.name,this.curTypeId=e.id,this.$emit("change",this.curTypeId)}}}),r=n,s=(a("263e"),a("2877")),l=Object(s["a"])(r,i,o,!1,null,"6a29280a",null);t["a"]=l.exports},"13d5":function(e,t,a){"use strict";var i=a("23e7"),o=a("d58f").left,n=a("a640"),r=a("ae40"),s=n("reduce"),l=r("reduce",{1:0});i({target:"Array",proto:!0,forced:!s||!l},{reduce:function(e){return o(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"24d8":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"content"},[a("div",{staticClass:"c-top"},[a("div",{staticClass:"w-left w-charts"},[a("ctitle",{attrs:{title:"区划排名"}}),a("div",{staticClass:"w-left-bt"},[a("div",{staticClass:"charts-leftBar"},[a("qhpmBtn",{on:{change:e.changeType}})],1),a("div",{staticClass:"charts"},[a("barline",{attrs:{params:e.xflphBarParams}})],1)])],1),a("div",{staticClass:"w-right"},[a("div",{staticClass:"w-right-data"},[e.yjztData.length?a("yjzt",{attrs:{data:e.yjztData}}):e._e()],1)])]),a("div",{staticClass:"c-bottom"},[a("div",{staticClass:"w-left"},[a("ctitle",{attrs:{title:"信坊量走势"}}),a("lineMonth",{attrs:{params:e.zsLineParams}})],1),a("div",{staticClass:"w-right"},[a("div",{staticClass:"w-right-l"},[a("ctitle",{attrs:{title:"内容分类分布"}}),a("div",{staticClass:"inner"},[a("loopPie",{staticClass:"chart",attrs:{params:e.tswtPieParams}})],1)],1),a("div",{staticClass:"w-right-r"},[a("ctitle",{attrs:{title:"信访目的分布"}}),a("div",{staticClass:"inner"},[a("pie-chart3D",{staticClass:"chart",attrs:{params:e.xfmdzbPieParams}})],1)],1)])])])])},o=[],n=(a("99af"),a("ade3")),r=a("365c"),s=a("9539"),l=a("5903"),c=a("9a42"),d=a("840a"),h=a("caee"),m=a("5eb8"),p=a("089d"),u={name:"jtf",components:{qhpmBtn:p["a"],ctitle:s["a"],loopPie:l["a"],PieChart3D:d["a"],barline:c["a"],lineMonth:h["a"],yjzt:m["a"]},data:function(){var e;return e={curName:"drop",yjzt:"告警",yjztData:[],percentage:21,listScroll:null,xflphBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,categoryBr:!0,axis1Name:"人次",axisLabelSize:14,left:"0%",right:"5%",top:"5%",bottom:"0%",barLabelOptions:"top",barWidth:"30%",barBorderRadius:5,splitLineShow:!1,barLabelShow:!1,axisLabelColor:"rgba(0, 176, 255, .8)",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#fa71cd","#c471f5"]]},map:{value:"数量"}}},day:"",xfjc:"",zsLineParams:{data:[],colors:[{line:"rgba(220, 150, 209, 0.3)",start:"rgba(220, 150, 209, 0.3)",end:"rgba(220, 150, 209, 0.1)"}],option:{splitLineShow:!0,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"月",axisYName:"",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"8%",right:"15%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{value:"数量"},xName:"name"},yjnr:""},Object(n["a"])(e,"xfjc",""),Object(n["a"])(e,"tswtPieParams",{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.pieColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.18),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"24%",rollFlag:!0,threeLevel:!0}}),Object(n["a"])(e,"xfmd",""),Object(n["a"])(e,"xfmdzbPieParams",{data:[],color:this.$STANDARD.pieColors,angle:20,radius:"30%",labelRadius:30,styleObj:{width:"100%",height:"100%"},isBr:!0,labelPer:!0}),e},mounted:function(){this.init(this.date)},methods:{init:function(e){this.getColumnCharts(e),this.getRightAPI(e),this.getYjztAPI(e),this.getZsLineAPI(e)},changeType:function(e){this.curTypeId=e,this.getColumnCharts(this.curTypeId)},getColumnCharts:function(e,t){var a=this;Object(r["a"])("xfsxyjfsfqhpm",{day:"[".concat(e.startDate,",").concat(e.endDate,"]"),shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,id:this.curTypeId}).then((function(e){a.xflphBarParams.data=e.data.data})).catch((function(e){console.log(e)}))},getYjztAPI:function(e){var t=this;Object(r["a"])("xfsxyjfsfyjzt",{shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.yjztData=e.data.data})).catch((function(e){console.log(e)}))},getZsLineAPI:function(e){var t=this;Object(r["a"])("xfsxyjfsfxxlzs",{name:this.day,xfjc:this.xfjc,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.zsLineParams.data=e.data.data})).catch((function(e){console.log(e)}))},getRightAPI:function(e){var t=this;Object(r["a"])("xfsxyjfsfnrflfb",{yjnr:this.yjnr,xfjc:this.xfjc,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.tswtPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(r["a"])("xfsxyjfsfxfmdfb",{xfmd:this.xfmd,xfjc:this.xfjc,day:"[".concat(e.startDate,",").concat(e.endDate,"]")}).then((function(e){t.xfmdzbPieParams.data=e.data.data})).catch((function(e){console.log(e)}))},fontSize:function(e){document.documentElement;var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t){var a=t/1920*100;return e*a}}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(e){this.getYjztAPI(e),this.getRightAPI(e),this.getZsLineAPI(e),this.getColumnCharts(e)}}},f=u,g=(a("66b5"),a("2877")),b=Object(g["a"])(f,i,o,!1,null,"c7b809ec",null);t["default"]=b.exports},"263e":function(e,t,a){"use strict";var i=a("947d"),o=a.n(i);o.a},"4c1e":function(e,t,a){},5903:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[i("div",{ref:"chartEl",style:{width:e.canvasStyle.width,height:e.canvasStyle.height}}),e.params.data.length&&e.params.options.bgSize?i("img",{staticClass:"bg",style:{left:e.params.options.center[0],top:e.params.options.center[1],width:e.params.options.bgSize+"px",height:e.params.options.bgSize+"px"},attrs:{src:a("c68a"),alt:""}}):e._e()])},o=[],n=(a("99af"),a("4160"),a("fb6a"),a("b0c0"),a("a9e3"),a("159b"),a("3eba"));a("c037"),a("007d"),a("627c"),a("d28f");var r={name:"PieW",data:function(){return{interval:null,rollFlag:!1,myChart:null}},props:{animateFlag:Boolean,defaultHigh:{type:Number},params:{type:Object,default:function(){return{data:[],canvasStyle:{width:"500px",height:"500px"},options:{radius:["30%","60%"],center:["50%","50%"],length:60,length2:60,bRichPadding:[30,-50,0,-50],roseType:"area",labelSize:14,borderWidth:10,borderColor:"#fff",legend:{show:!0,left:10,top:240,itemidth:14,itemHeight:14,orient:"vertical",fontSize:14},tooltip:{show:!0},rich:{bfontsize:16,perfontsize:24},colors:[],rollFlag:!1,itemLabelShow:!0,itemEmphasisLabelShow:!0,defaultHigh:0}}}}},created:function(){var e=this;this.$nextTick((function(){e.init()}))},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var t=this.params.data,a=this.params.options,i=[],o=0,r=0;if(r=Number(a.radius[0].substring(0,a.radius[0].length-1))-4,o=r-1,i=[o+"%",r+"%"],this.myChart=n.init(this.$refs.chartEl),this.myChart.setOption({title:{text:a.title?a.title:"",textStyle:{color:"#fff",fontSize:"18%"},x:"center",y:"bottom"},tooltip:{show:!a.tooltip||(void 0===a.tooltip.show||a.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],textStyle:{color:this.$STANDARD.tooltipColor},position:!1===a.labelShow?["33%","35%"]:null,formatter:function(e){return e.name?"".concat(e.marker).concat(e.name," : ").concat(e.value):""}},legend:{show:!!a.legend&&a.legend.show,selectedMode:void 0===a.legend.selectedMode||a.legend.selectedMode,left:a.legend&&a.legend.left?a.legend.left:"left",top:a.legend&&a.legend.top?a.legend.top:"top",itemWidth:a.legend.itemWidth?a.legend.itemWidth:14,itemHeight:a.legend.itemHeight?a.legend.itemHeight:14,textStyle:{fontSize:a.legend.fontSize?a.legend.fontSize:this.$STANDARD.h4.fontSize,color:a.legend?a.legend.color:this.$STANDARD.legendColor},icon:"circle",itemGap:15,orient:a.legend&&a.legend.orient?a.legend.orient:"vertical"},series:[{name:"分析",type:"pie",center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:void 0===a.radius?["0%","60%"]:a.radius,minAngle:6,label:{normal:{show:!1,position:"center",formatter:function(e){if(e.name.length>7)return"{b|".concat(e.name.slice(0,6),"\n").concat(e.name.slice(6,e.name.length),"}\n{d|").concat(e.percent,"%}");var t="";return t=a.threeLevel?"{b|".concat(e.value,"}\n{b|").concat(e.name,"}\n{d|").concat(e.percent,"%}"):"{b|".concat(e.name,"}\n{d|").concat(e.percent,"%}"),t},rich:{d:{fontSize:a.labelRich&&a.labelRich.d?a.labelRich.d:this.fontSize(.22),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.dHeight?a.labelRich.dHeight:this.fontSize(.4),color:"#e03562"},b:{fontSize:a.labelRich&&a.labelRich.b?a.labelRich.b:this.fontSize(.2),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.bHeight?a.labelRich.bHeight:this.fontSize(.4),color:function(e){return Array.isArray(a.colors[e.dataIndex])?a.colors[e.dataIndex][0]:a.colors[e.dataIndex]}}}},emphasis:{show:!0}},itemStyle:{borderColor:a.borderColor?a.borderColor:"transparent",borderWidth:a.borderWidth?a.borderWidth:0,color:function(e){return Array.isArray(a.colors[e.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[e.dataIndex][0]},{offset:1,color:a.colors[e.dataIndex][1]}],global:!1}:a.colors[e.dataIndex]}},labelLine:{length:a.length?a.length:10,length2:a.length2?a.length2:10},data:t},{type:"pie",hoverAnimation:!1,center:a.center||["50%","50%"],radius:i,data:[100],label:{show:!1},itemStyle:{normal:{color:"#0e90cc"},emphasis:{show:!1}}}]}),this.rollFlag=this.params.options.rollFlag,this.myChart.on("click",(function(t){"series"===t.componentType?(e.$emit("departmentClick",t.name),t.allData={data:e.params.data,params:t},e.$emit("canvasClick",t.allData)):e.$emit("departmentClick",t.value)})),this.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(t){1!==t.seriesIndex&&(e.rollFlag=!1,t.dataIndex!==e.app.currentIndex&&e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex}))})),this.myChart.on("mouseout",(function(t){e.rollFlag=!0}));else{var s=this.defaultHigh;if(""!==s&&void 0!==s){this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s});var l=this;l.myChart.on("mouseover",(function(e){for(var a=t.length,i=0;i<a;i++)i!=e.dataIndex&&l.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:i})})),l.myChart.on("mouseout",(function(e){l.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s})}))}}}},chartMove:function(){var e=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var t=e.params.data.length;e.rollFlag&&(e.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:e.app.currentIndex}),e.app.currentIndex=(e.app.currentIndex+1)%t,e.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.app.currentIndex}),e.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.app.currentIndex}))}),2e3)},fontSize:function(e){document.documentElement;var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t){var a=t/1920*100;return e*a}}},computed:{sum:function(){var e=0;return this.params.data.forEach((function(t){e+=t.value})),e},ishow:function(){return!1!==this.params.options.labelShow&&!1!==this.params.options.showsum},canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"100%",height:this.params.canvasStyle?this.params.canvasStyle.height:"100%"}}},watch:{"params.data":{handler:function(e,t){this.init()},deep:!0}}},s=r,l=(a("7e59"),a("2877")),c=Object(l["a"])(s,i,o,!1,null,"5d89441e",null);t["a"]=c.exports},"5eb8":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.data.length,expression:"!data.length"}],staticClass:"yjzt-wrapper",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[a("div",{staticClass:"part part1"},[a("p",{staticClass:"label"},[e._v(e._s(e.data[0].name))]),a("div",{class:["btn",e.btnColor]},[e._v(e._s(e.data[0].value))])]),a("div",{staticClass:"part part2"},[a("p",{staticClass:"label"},[e._v(e._s(e.data[1].name))]),a("allCount",{staticClass:"all-count",attrs:{count:e.data[1].value}})],1),a("div",{staticClass:"part part3"},[a("p",{staticClass:"label"},[e._v(e._s(e.data[2].name))]),a("div",{staticClass:"inner"},[a("span",{staticClass:"per"},[e._v(e._s((100*e.data[2].value).toFixed(2))+"%")]),a("i",{class:["icon",e.data[2].value>0?"up-icon":"down-icon"]})])]),a("div",{staticClass:"part part4"},[a("p",{staticClass:"label"},[e._v(e._s(e.data[3].name))]),a("div",{staticClass:"inner"},[a("span",{staticClass:"per"},[e._v(e._s((100*e.data[3].value).toFixed(2))+"%")]),a("i",{class:["icon",e.data[3].value>0?"up-icon":"down-icon"]})])])])},o=[],n=a("8d3a"),r={name:"index",components:{allCount:n["a"]},props:{data:{type:Array,default:[{name:"预警状态",value:"告警"},{name:"未来一周信访量",value:-1},{name:"同比",value:0},{name:"环比",value:0}]}},computed:{btnColor:function(){return"平稳"===this.data[0].value?"btn-blue":"异常"===this.data[0].value?"btn-yellow":"告警"===this.data[0].value?"btn-red":void 0}}},s=r,l=(a("800b"),a("2877")),c=Object(l["a"])(s,i,o,!1,null,"110abd66",null);t["a"]=c.exports},"66b5":function(e,t,a){"use strict";var i=a("732a"),o=a.n(i);o.a},"732a":function(e,t,a){},"7a77":function(e,t,a){},"7e59":function(e,t,a){"use strict";var i=a("a721"),o=a.n(i);o.a},"800b":function(e,t,a){"use strict";var i=a("034e"),o=a.n(i);o.a},"8d3a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[e.count>=0?a("div",{staticClass:"inner"},[a("incNumber",{staticClass:"number",attrs:{incNumber:e.count}}),a("span",{staticClass:"unit"},[e._v("件 次")])],1):e._e()])},o=[],n=(a("a9e3"),a("d3b7"),a("25f0"),a("ad97")),r={name:"allCount",components:{incNumber:n["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:1}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},s=r,l=(a("b1b2"),a("2877")),c=Object(l["a"])(s,i,o,!1,null,"a3ea9bf4",null);t["a"]=c.exports},"947d":function(e,t,a){},"9a42":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("13d5"),a("b0c0"),a("b64b"),a("07ac"),a("ac1f"),a("8a79"),a("2532"),a("1276"),a("159b"),a("53ca")),r=a("b85c"),s=a("2909"),l=a("313e"),c=a("dd01"),d={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var t=Object(s["a"])(this.params.data),i=[],o=this.params.options,n=o.isVertical?[0,1,1,0]:[0,0,0,1],d=Object.keys(o.map),h=!!o.line&&o.line.length===d.length;if(this.legendData=Object.values(o.map),"overlap"===o.mode&&o.legendBgSrc){var m=o.legendBgSrc.active,p=o.legendBgSrc.inActive;this.activeLegendBg=a("9e01")("./".concat(m,".png")),this.inActiveLegendBg=a("9e01")("./".concat(p,".png")),this.legendData.forEach((function(t,a){o.map[o.overlap]===t&&(e.legendData[a]={name:t,icon:void 0===e.params.legendActive||e.params.legendActive[t]?"image://".concat(e.activeLegendBg):"image://".concat(e.inActiveLegendBg)})}))}var u=[],f=0,g={};o.tooltipPercent&&t.forEach((function(e){g[e[o.xName]]=[]})),o.tooltipPercent&&t.forEach((function(e,t){var a=e[o.xName];for(var i in e)"name"!==i&&"genre"!==i&&g[a].push(e[i].split("|")[1])}));var b=0,v=0,x=1;d.forEach((function(a,i){var r=[],s=o.map;t.forEach((function(e){o.tooltipPercent?r.push(e[a].split("|")[0]):r.push(e[a])})),f=o.isAverage?r.reduce((function(e,t){return+e+ +t}))/t.length:0;var c={};o.line&&o.line.includes(a)?(e.isRightAxis=s[a].endsWith("比")||s[a].endsWith("度")||s[a].endsWith("率"),c={name:s[a],type:"line",yAxisIndex:h?0:e.isRightAxis?1:0,label:{show:!1},symbolSize:o.symbolSize?o.symbolSize:5,symbol:"circle",showSymbol:void 0!==o.showSymbol&&o.showSymbol,smooth:void 0!==o.smooth&&o.smooth,itemStyle:{normal:{label:{show:void 0===o.lineLabelShow||o.lineLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20,formatter:e.isRightAxis?"{c}%":"{c}"},color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[b],[0,1,1,0],l):""},emphasis:{label:{show:!0,fontSize:o.axisLabelSize?o.axisLabelSize:20},borderColor:o.colors&&o.colors.line?e.$STANDARD.colorToRgba(o.colors.line[b],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[b++],[0,0,0,1],l):"",width:o.lineWidth?o.lineWidth:3,shadowBlur:o.lineShadowBlur?o.lineShadowBlur:0,shadowColor:o.lineShadowColor?o.lineShadowColor:"none",shadowOffsetY:o.lineShadowOffsetY?o.lineShadowOffsetY:0,opacity:o.lineOpacity?o.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:o.isAverage?"6.7%":"",yAxis:f},{symbol:"line",symbolSize:"0",x:"95%",yAxis:f}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:r}):c={name:s[a],type:"bar",stack:"stack"===o.mode?x:x++,yAxisIndex:0,xAxisIndex:"overlap"===o.mode&&a===o.overlap?1:0,barWidth:o.barWidth?o.barWidth:"auto",barGap:o.barGaps?o.barGaps:"50%",label:{show:void 0===o.barLabelShow||o.barLabelShow,position:o.barLabelOptions?o.barLabelOptions:o.isVertical?o.categoryInverse?"left":"right":"",fontSize:o.axisLabelSize?o.axisLabelSize:20,textStyle:{color:o.itemLabelColor?o.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===o.barBorderRadius?0:o.barBorderRadius,color:"overlap"!==o.mode||o.overlap!==a?o.colors&&o.colors.bar?o.colorisarry?function(e){var t=o.colors.bar?o.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return t[e.dataIndex]}:e.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderColor:"overlap"===o.mode&&o.overlap===a?o.colors&&o.colors.bar?e.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===o.barLabelShow||o.barLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20}},data:r},u.push(c)}));var y,S=[{show:o.axisValueShow,type:"value",name:o.axis1Name?o.axis1Name:"",nameLocation:o.nameLocation?"start":"end",nameTextStyle:{color:o.YaxisNameColor?o.YaxisNameColor:"#ff517f",fontSize:o.axisLabelSize?o.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:o.splitNumber?o.splitNumber:5,position:o.isVertical&&o.axisValuePosition?"top":"bottom",inverse:o.categoryInverse,scale:!!o.isLeftScale,axisTick:{show:!1},axisLabel:{show:!o.isVertical||!o.axisLabel,margin:10,fontSize:14,color:function(e,t){var a=[],i=o.splitNumber?o.splitNumber:5;if(t<i){for(var n=0;n<i;n++)a.push(0);var r=Object(c["a"])(a,"#fdc48d","#ff517f");return r(t)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!o.isVertical||!o.splitLine)&&(void 0===o.splitLineShow?o.axisValueShow:o.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:o.axisValueShow,type:"value",name:o.axis2Name?o.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!o.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(r["a"])(t);try{for(w.s();!(y=w.n()).done;){var C=y.value;C.code?i.push({value:C[o.xName],id:C.code}):i.push(C[o.xName])}}catch(N){w.e(N)}finally{w.f()}var A=i.length>=100;o.isVertical&&(A=!1);var L=[{type:"category",data:i,inverse:!!o.isVertical,axisTick:{show:!1},position:o.categoryInverse?"right":"left",triggerEvent:!0,name:o.axisCategoryName?o.axisCategoryName:"",nameLocation:o.isVertical&&o.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:o.axisLabelSize?o.axisLabelSize:20},axisLabel:{interval:0,rotate:o.rotate?o.rotate:0,color:"#fff",inside:void 0!==o.XasisLabelInside&&o.XasisLabelInside,padding:o.XasisLabelPad?o.XasisLabelPad:0,fontSize:o.axisLabelSize?o.axisLabelSize:20,lineHeight:o.XaxisLabelLH?o.XaxisLabelLH:14,height:o.XaxisLabelH?o.XaxisLabelH:30,margin:15,formatter:function(e){var t="",a="";if(o.categoryBr){a="";for(var i=o.brNum?o.brNum:1,n=0;n<e.length;n++)a+=e[n],n%i==i-1&&(a+="\n");t=a}else t=e;return t}},axisLine:{show:!!o.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],z=[{show:A,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=l["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===o.tooltipShow||o.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:o.tooltipType?o.tooltipType:"shadow"},formatter:function(e){var a=e[0].name+"<br/>";if("overlap"===o.mode&&e.unshift(e.pop()),o.addTooltip){var i=e[0].name,n=t.filter((function(e){return e[o.xName]===i}))[0];for(var r in o.addTooltip)o.addTooltip.hasOwnProperty(r)&&e.push({seriesName:o.addTooltip[r],value:n[r]})}return e.forEach((function(e,t){var i=e.seriesName.charAt(e.seriesName.length-1);a+="率"!==i&&"度"!==i&&"比"!==i?"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"</br>"):"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"%</br>")})),a}},legend:{show:o.legendShow,data:this.legendData,itemGap:o.legendGap?o.legendGap:10,top:o.legendPos?o.legendPos.top:"3%",right:o.legendPos?o.legendPos.right:"5%",itemWidth:o.legendW?o.legendW:25,itemHeight:o.legendH?o.legendH:14,icon:"undefined"===o.legendIcon?"rect":o.legendIcon,borderRadius:o.borderRadius?o.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:o.legendSize?o.legendSize:20,color:o.legendColor?o.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:o.left?o.left:"5%",right:o.right?o.right:"5%",top:o.top?o.top:"5%",bottom:A?"6%":o.bottom?o.bottom:"5%",containLabel:!0},label:{show:!0,position:o.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:o.isVertical?S:L,yAxis:o.isVertical?L:S,series:u,dataZoom:z,animation:this.animation,animationDelay:function(e){return 50*e}},this.myChart.setOption(this.option),this.myChart.on("click",(function(a){var o=e;"series"===a.componentType&&(a.allData={data:t,params:a},o.$emit("canvasClick",a.allData),o.$emit("departmentClick",a.name)),"yAxis"===a.componentType&&(a.name=a.value,i.filter((function(e){e.value==a.name&&(a.id=e.id)})),a.allData={data:t,params:a},o.$emit("canvasClick",a.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var e=this;this.myChart.on("legendselectchanged",(function(t){var a=e.params.options,i=t.selected;e.$emit("changeLegend",i),"overlap"===a.mode&&(t.name===a.map[a.overlap]&&e.legendActive?(e.legendActive=!e.legendActive,e.legendData.forEach((function(t,a){"object"===Object(n["a"])(t)&&(e.legendData[a].icon="image://".concat(e.inActiveLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})):t.name!==a.map[a.overlap]||e.legendActive||(e.legendActive=!e.legendActive,e.legendData.forEach((function(t,a){"object"===Object(n["a"])(t)&&(e.legendData[a].icon="image://".concat(e.activeLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})))}))}},watch:{animateFlag:{handler:function(e,t){this.init()},deep:!0},"params.data":{handler:function(e,t){this.init()},deep:!0}}},h=d,m=a("2877"),p=Object(m["a"])(h,i,o,!1,null,"09c9dc8b",null);t["a"]=p.exports},a721:function(e,t,a){},aca2:function(e,t,a){"use strict";var i=a("4c1e"),o=a.n(i);o.a},ad97:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"incNumber"},[e._v(e._s(e.number))])},o=[],n=(a("a9e3"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(e){var t=this;e=e||{};var a,i,o=e.time||10,n=void 0===e.num?0:e.num,r=e.regulator||100,s=n/(o/r),l=0,c=0;n%1!==0&&(a=String(n).split("."),i=a[1].length);var d=setInterval((function(){l+=s,l>=n&&(clearInterval(d),l=n);var e=0;e=n%1===0?Math.floor(l):l.toFixed(i),e!==c&&(c=e,t.number=c)}),50)},formatMoney:function(e,t){if(/[^0-9\.]/.test(e))return"0.00";if(null==e||"null"==e||""==e)return"0.00";e=e.toString().replace(/^(\d*)$/,"$1."),e=(e+"00").replace(/(\d*\.\d\d)\d*/,"$1"),e=e.replace(".",",");var a=/(\d)(\d{3},)/;while(a.test(e))e=e.replace(a,"$1,$2");if(e=e.replace(/,(\d\d)$/,".$1"),0==t){var i=e.split(".");"00"==i[1]&&(e=i[0])}return e}},watch:{incNumber:{handler:function(e,t){this.number=e,this.init()},deep:!0}}}),r=n,s=(a("aca2"),a("2877")),l=Object(s["a"])(r,i,o,!1,null,"28b38ba0",null);t["a"]=l.exports},ade3:function(e,t,a){"use strict";function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return i}))},b1b2:function(e,t,a){"use strict";var i=a("7a77"),o=a.n(i);o.a},caee:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(a("99af"),a("4160"),a("a15b"),a("d81d"),a("b0c0"),a("b680"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("1276"),a("159b"),a("ddb0"),a("3835")),r=a("b85c"),s=a("313e"),l=a("dd01"),c={name:"lineMonth",props:{animateFlag:Boolean,maps:Object,params:{type:Object,dafault:function(){return{canvasStyle:{width:"100%",height:"100%"},data:[],option:{legendShow:!0,legendfontSize:14,XaxisLineShow:!1,xaxisLineColor:"rgba(255,255,255,0.1)",axisLabelShow:!1,axisLabelFontSize:12,yaxisLabelFontSize:14,yaxisLabelColor:"#fff",axisLabelColor:"#fff",boundaryGap:!0,xAxisBr:!1,YaxisLineShow:!0,yaxisLineColor:"rgba(255,255,255,0.1)",YaxisaxisLabelShow:!0,scales:!0,lineWidth:2,Lcolor:"red",splitLineShow:!0,axisTickShow:!0,showK:!0,legenditemWidth:100,dataZoomshow:!1,dataZoomstart:0,dataZoomend:100,legendTop:"5%",showSymbol:!0,axisCategoryName:"",nameLocation:"start",XaxisNameColor:"#fff",axisLabelSize:16,legendItemgap:20},colors:[]}}}},data:function(){return{colors:[{line:"rgba(209, 48, 20, 1)",start:"rgba(62, 73, 67, .3)",end:"rgba(78, 173, 254, 0)"},{line:"rgba(29, 209, 200, 1)",start:"rgba(242, 104, 210, .3)",end:"rgba(188, 60, 113, 0)"},{line:"rgba(208, 45, 222, 1)",start:"rgba(208, 45, 222, .3)",end:"rgba(101, 30, 206, 0)"},{line:"rgba(162, 227, 105, 1)",start:"rgba(162, 227, 105, .3)",end:"rgba(60, 234, 166, 0)"},{line:"rgba(240, 151, 26, 1)",start:"rgba(240, 151, 26, .3)",end:"rgba(255, 88, 88, 0)"}]}},mounted:function(){this.init()},methods:{init:function(){var e=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var t=this.params.option,a=this.params.data,i={};i=this.maps?this.maps:this.params.map;var o=Object.keys(i),c=Object.values(i),d=[],h=[],m=[],p=[];o.forEach((function(e){h[e]=[]}));var u,f=Object(r["a"])(a.entries());try{var g=function(){var t=Object(n["a"])(u.value,2),a=(t[0],t[1]);d.push(a[e.params.xName]),o.forEach((function(e){p.push(a[e]),h[e].push(a[e])}))};for(f.s();!(u=f.n()).done;)g()}catch(v){f.e(v)}finally{f.f()}Math.max.apply(Math,p);var b=Math.min.apply(Math,p)-100;b<0&&(b=0),o.forEach((function(a,o){var n={name:i[a],type:"line",smooth:void 0!==t.smooth&&t.smooth,smoothMonotone:t.smooth&&t.smoothMonotone?t.smoothMonotone:"none",symbolSize:10,symbol:"circle",hoverAnimation:!1,showSymbol:void 0===t.showSymbol||t.showSymbol,itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:e.params.colors[o].line},emphasis:{color:e.params.colors[o].line,borderColor:e.params.colors[o].start,borderWidth:12}},lineStyle:{width:void 0===t.lineWidth?3:t.lineWidth,color:e.params.colors[o].line},areaStyle:{normal:{opacity:void 0===t.areaShow||t.areaShow,color:new s["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:e.params.colors[o].start},{offset:1,color:e.params.colors[o].end}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},data:h[a]};m.push(n)})),this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:function(e){var a=e[0].name+t.axisCategoryName+"<br/>";return e.forEach((function(e,i){e.seriesName.charAt(e.seriesName.length-1);"%"===t.axisYName?a+="".concat(e.marker," ").concat(e.seriesName," : ").concat((100*e.value).toFixed(2),"%</br>"):a+="".concat(e.marker," ").concat(e.seriesName," : ").concat(e.value,"</br>")})),a}},grid:{left:t.left?t.left:"6%",right:t.right?t.right:"6%",bottom:t.bottom?t.bottom:"6%",top:t.top?t.top:"6%",containLabel:!0},label:{show:!1,position:"top",color:"#fff",fontSize:14,zlevel:10},emphasis:{label:{show:!1,formatter:function(e){var t=e.seriesName.charAt(e.seriesName.length-1);return"比"==t||"率"==t?e.value.toFixed(2)+"%":e.value.toLocaleString()}}},legend:{icon:t.legendIcon?t.legendIcon:"roundRect",show:void 0===t.legendShow||t.legendShow,itemWidth:20,itemHeight:5,color:"#fff",itemGap:t.legendItemgap?t.legendItemgap:20,right:t.legendRight?t.legendRight:"5%",top:t.legendTop?t.legendTop:"2%",textStyle:{color:"#fff",fontSize:t.legendfontSize?t.legendfontSize:18},data:c},xAxis:[{type:"category",boundaryGap:void 0!==t.boundaryGap&&t.boundaryGap,triggerEvent:!0,interval:1,data:d,name:t.axisCategoryName?t.axisCategoryName:"",nameLocation:t.nameLocation?"start":"end",nameTextStyle:{color:t.XaxisNameColor?t.XaxisNameColor:"#fff",fontSize:t.axisLabelSize?t.axisLabelSize:20},axisLabel:{show:!!t.axisLabelShow,margin:10,fontSize:16,color:this.$STANDARD.xAxisColor,formatter:function(e){return t.xAxisBr?e.split("").join("\n"):e}},axisLine:{show:!0,lineStyle:{width:2,color:this.$STANDARD.xAxisLineColor}},axisTick:{alignWithLabel:!0,show:!!t.axisTickShow,inside:!0}}],yAxis:[{type:"value",name:t.axisYName?t.axisYName:"",nameLocation:t.nameLocation?"start":"end",nameTextStyle:{color:t.YaxisNameColor?t.YaxisNameColor:"#ff517f",fontSize:t.axisLabelSize?t.axisLabelSize:20,fontWeight:"bold",padding:[0,45,0,0]},scale:!t.scales,max:void 0===this.params.axisMax?null:this.params.axisMax,min:void 0===this.params.axisMin?null:this.params.axisMin,splitNumber:t.splitNumber?t.splitNumber:5,axisLabel:{show:!t.YaxisaxisLabelShow,margin:10,fontSize:14,color:function(e,a){var i=[],o=t.splitNumber?t.splitNumber:10;if(a<o){for(var n=0;n<o;n++)i.push(0);var r=Object(l["a"])(i,"#85DEFF","#85DEFF");return r(a)}return"#ff517f"},formatter:function(e){return"%"===t.axisYName?100*e:e}},axisLine:{show:!!t.YaxisLineShow,width:2,type:"dotted",color:this.$STANDARD.yAxisSplitLineColor},axisTick:{show:!1},splitLine:{show:!!t.splitLineShow,lineStyle:{type:"dashed",color:"#2c344c"}}}],dataZoom:{show:!!t.dataZoomshow,realtime:!0,fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",showDetail:!1,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"100%",bottom:0,height:20,start:t.dataZoomstart?t.dataZoomstart:0,end:t.dataZoomend?t.dataZoomend:100},series:m},this.myChart.setOption(this.option),this.params.option.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",(function(t){e.params.option.rollFlag=!1,t.dataIndex!==e.app.currentIndex&&e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex})})),this.myChart.on("mouseout",(function(t){e.params.option.rollFlag=!0}))),this.myChart.on("click",(function(t){"series"===t.componentType?e.$emit("departmentClick",t.name):e.$emit("departmentClick",t.value)}))}},chartMove:function(){var e=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var t=e.params.data.length;e.params.option.rollFlag&&(e.myChart.dispatchAction({type:"downplay",dataIndex:e.app.currentIndex}),e.app.currentIndex=(e.app.currentIndex+1)%t,e.myChart.dispatchAction({type:"highlight",dataIndex:e.app.currentIndex}),e.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.app.currentIndex}))}),2e3)}},computed:{},watch:{animateFlag:{handler:function(e,t){this.init()},deep:!0},"params.data":{handler:function(e,t){this.init()},deep:!0}}},d=c,h=a("2877"),m=Object(h["a"])(d,i,o,!1,null,"6d0704a0",null);t["a"]=m.exports},d58f:function(e,t,a){var i=a("1c0b"),o=a("7b0b"),n=a("44ad"),r=a("50c4"),s=function(e){return function(t,a,s,l){i(a);var c=o(t),d=n(c),h=r(c.length),m=e?h-1:0,p=e?-1:1;if(s<2)while(1){if(m in d){l=d[m],m+=p;break}if(m+=p,e?m<0:h<=m)throw TypeError("Reduce of empty array with no initial value")}for(;e?m>=0:h>m;m+=p)m in d&&(l=a(l,d[m],m,c));return l}};e.exports={left:s(!1),right:s(!0)}}}]);
//# sourceMappingURL=chunk-167e6df2.45eabe38.js.map