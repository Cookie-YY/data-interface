(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83acc7f0","chunk-dd6c2b7c"],{"0ae1":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"c-top"},[e("div",{staticClass:"ct-left"},[e("div",{staticClass:"ct-l-l"},[e("ctitle",{attrs:{title:"重件占比"}}),e("allCount",{staticClass:"all-count",attrs:{count:a.allcount}}),e("ring",{staticClass:"zb-ring",attrs:{params:a.zbRingParams}})],1),e("div",{staticClass:"ct-l-r"},[e("ctitle",{attrs:{title:"区划分布"}}),e("div",{staticClass:"charts"},[e("barline",{attrs:{params:a.qvfbBarParams}})],1)],1)]),e("div",{staticClass:"ct-right"},[e("div",{staticClass:"echartPie"},[e("ctitle",{attrs:{title:"四级登记机构分布"}}),e("div",{staticClass:"charts"},[e("loopPie",{attrs:{params:a.dqfbPieParams}})],1)],1)])]),e("div",{staticClass:"c-bottom"},[e("div",{staticClass:"w-charts"},[e("ctitle",{attrs:{title:"信访人群年龄分布"}}),e("div",{staticClass:"charts"},[e("barline",{attrs:{params:a.rqnlBarParams}})],1)],1),e("div",{staticClass:"w-charts w-center"},[e("ctitle",{attrs:{title:"信访目的分布"}}),e("div",{staticClass:"charts chart-pie"},[e("pie-chart3D",{attrs:{params:a.xfmdPieParams}})],1)],1),e("div",{staticClass:"w-charts"},[e("ctitle",{attrs:{title:"投诉问题分布"}}),e("div",{staticClass:"charts chart-loop"},[e("loopPie",{attrs:{params:a.tswtPieParams}})],1)],1)])])])},n=[],o=(e("99af"),e("b0c0"),e("b680"),e("365c")),s=e("9539"),r=e("ad97"),l=e("840a"),c=e("5903"),d=e("9a42"),h=e("8d3a"),m=e("910f"),u=e("1006"),b={name:"cjcj",components:{ctitle:s["a"],incNumber:r["a"],PieChart3D:l["a"],loopPie:c["a"],barline:d["a"],allCount:h["a"],detailList:m["a"],ring:u["a"]},data:function(){return{allcount:-1,detailList:null,dqfbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.pieMoreColors,radius:["43%","60%"],center:["40%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.22),bHeight:this.fontSize(.3)},length:20,length2:50,tooltip:{show:!0},bRichPadding:[30,-50,0,-50],borderWidth:5,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"32%",rollFlag:!0}},zbRingParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:165,radius:["54%","65%"],bgRadius:["59%","60%"],center:["50%","50%"],colors:[["#fee89f","#eea570"]]}},xfcsBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,axisLabelSize:"12%",left:"10%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#ffe97d","#ff957c"]]},map:{value:"次数"}}},qvfbBarParams:{data:[],canvasStyle:{width:"100%",height:"85%"},options:{xName:"name",axisValueShow:!1,categoryBr:!0,axis1Name:"人次",axisLabelSize:"12%",left:"5%",right:"5%",top:"0%",bottom:"0%",barLabelOptions:"top",barWidth:"35%",barBorderRadius:5,splitLineShow:!1,barLabelShow:!1,axisLabelColor:"rgba(0, 176, 255, .8)",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#fa71cd","#c471f5"]]},map:{value:"数量"}}},rqnlBarParams:{data:[],canvasStyle:{width:"90%",height:"95%"},options:{xName:"name",axisValueShow:!0,axis1Name:"",axisLabelSize:"12%",left:"10%",right:"10%",top:"10%",bottom:"10%",barLabelOptions:"top",barWidth:"35%",splitLineShow:!1,barLabelShow:!0,colors:{bar:[["#D5FA9E","#9ADE72"]]},map:{value:"人数"}}},xfmdPieParams:{data:[],angle:20,radius:"35%",labelRadius:25,fontSize:this.fontSize(.16),color:this.$STANDARD.pieColors,styleObj:{width:"100%",height:"100%"}},tswtPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.pieColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.15),d:this.fontSize(.18),bHeight:this.fontSize(.2)},length:20,length2:50,bRichPadding:[30,-50,0,-50],borderWidth:0,borderColor:"#0B2244",itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"10%"},labelSize:"22%",threeLevel:!0,rollFlag:!0}},dqxfcsBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,axisLabelSize:"12%",left:"10%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#d2f69d","#79cc7a"]]},map:{value:"次数"}}}}},mounted:function(){this.getAPI(this.date)},methods:{getAPI:function(a){var t=this;Object(o["a"])("qjywjkCfxfjkZbTotal",{day:"[".concat(a.startDate,",").concat(a.endDate,"]"),shej_02:"invalid",shij_02:"invalid",xi_02:"invalid"}).then((function(a){for(var e=a.data.data,i=t.sum(e),n={},o=0;o<e.length;o++)"重件"===e[o].name&&(t.allcount=e[o].value,n=e[o],n.percent=(t.allcount/i).toFixed(2));t.zbRingParams.data=[n]})).catch((function(a){console.log(a)})),Object(o["a"])("qjywjkCfxfjkQyfbBar",{day:"[".concat(a.startDate,",").concat(a.endDate,"]"),shej_02:"invalid",shij_02:"invalid",xi_02:"invalid"}).then((function(a){t.qvfbBarParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(o["a"])("qjywjkCfxfjkSjjgfbRing",{day:"[".concat(a.startDate,",").concat(a.endDate,"]"),shej_02:"invalid",shij_02:"invalid",xi_02:"invalid"}).then((function(a){t.dqfbPieParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(o["a"])("qjywjkCfxfjkRqnlfb",{day:"[".concat(a.startDate,",").concat(a.endDate,"]"),shej_02:"invalid",shij_02:"invalid",xi_02:"invalid"}).then((function(a){t.rqnlBarParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(o["a"])("qjywjkCfxfjkMdfb",{day:"[".concat(a.startDate,",").concat(a.endDate,"]"),shej_02:"invalid",shij_02:"invalid",xi_02:"invalid"}).then((function(a){t.xfmdPieParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(o["a"])("qjywjkCfxfjkTswtfb",{day:"[".concat(a.startDate,",").concat(a.endDate,"]"),shej_02:"invalid",shij_02:"invalid",xi_02:"invalid"}).then((function(a){t.tswtPieParams.data=a.data.data})).catch((function(a){console.log(a)}))},fontSize:function(a){document.documentElement;var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t){var e=t/1920*100;return a*e}},sum:function(a){for(var t=0,e=0;e<a.length;e++)t+=a[e].value;return t}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(a){this.getAPI(a)}}},p=b,f=(e("8fa3"),e("2877")),g=Object(f["a"])(p,i,n,!1,null,"40ec482a",null);t["default"]=g.exports},"0b27":function(a,t,e){},1006:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}},[e("div",{ref:"chartEl",style:{width:a.params.canvasStyle.width,height:a.params.canvasStyle.height}}),a.params.data.length?e("div",{staticClass:"circle",style:{left:a.params.options.center[0],top:a.params.options.center[1],width:a.params.options.bgSize+"px",height:a.params.options.bgSize+"px"}}):a._e()])},n=[],o=(e("b0c0"),e("b680"),e("313e")),s={name:"ring",props:{params:Object},data:function(){return{myChart:null}},mounted:function(){this.init()},methods:{init:function(){if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){this.myChart=o["init"](this.$refs.chartEl);var a=this.params.options,t=JSON.parse(JSON.stringify(this.params.data)),e=(100*t[0].percent).toFixed(2);this.myChart.setOption({title:{text:this.params.data[0].value+"\n"+this.params.data[0].name+"\n"+e+"%",x:"center",y:"center",textStyle:{color:"#f1b178",fontWeight:"bold",lineHeight:32,fontSize:18}},series:[{type:"pie",radius:a.bgRadius,center:a.center,silent:!0,label:{normal:{show:!1}},data:[{value:1,itemStyle:{normal:{color:"#fff"}}}],animation:!1},{name:"main",type:"pie",radius:a.radius,center:a.center,label:{normal:{show:!1}},data:i(),animationEasingUpdate:"cubicInOut",animationDurationUpdate:500}]})}function i(){return[{value:e,itemStyle:{normal:{borderWidth:22,color:{colorStops:[{offset:0,color:a.colors[0][0]},{offset:1,color:a.colors[0][1]}],globalCoord:!1}}}},{value:100-e,itemStyle:{normal:{color:"transparent"}}}]}}},watch:{"params.data":{handler:function(a,t){this.init()},deep:!0}}},r=s,l=(e("f266"),e("2877")),c=Object(l["a"])(r,i,n,!1,null,"c0bb61dc",null);t["a"]=c.exports},"13d5":function(a,t,e){"use strict";var i=e("23e7"),n=e("d58f").left,o=e("a640"),s=e("ae40"),r=o("reduce"),l=s("reduce",{1:0});i({target:"Array",proto:!0,forced:!r||!l},{reduce:function(a){return n(this,a,arguments.length,arguments.length>1?arguments[1]:void 0)}})},1646:function(a,t,e){"use strict";var i=e("7923"),n=e.n(i);n.a},"368e":function(a,t,e){},"4c1e":function(a,t,e){},7707:function(a,t,e){},7923:function(a,t,e){},"8d3a":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}},[a.count>=0?e("div",{staticClass:"inner"},[e("incNumber",{staticClass:"number",style:{width:32*a.numMaxLength+"px"},attrs:{incNumber:a.count}}),e("span",{staticClass:"unit"},[a._v("件 次")])],1):a._e()])},n=[],o=(e("a9e3"),e("d3b7"),e("25f0"),e("ad97")),s={name:"allCount",components:{incNumber:o["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:this.count.toString().length}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},r=s,l=(e("1646"),e("2877")),c=Object(l["a"])(r,i,n,!1,null,"a7f7c144",null);t["a"]=c.exports},"8fa3":function(a,t,e){"use strict";var i=e("0b27"),n=e.n(i);n.a},"910f":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.listData.length,expression:"!listData.length"}],staticClass:"detail-list",attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}},[e("div",{staticClass:"inner"},[e("ul",a._l(a.listData.slice(0,a.breakNumber),(function(t,i){return e("li",{key:i,staticClass:"item"},[e("p",{staticClass:"label",attrs:{title:t.name}},[a._v(a._s(t.name))]),e("div",{staticClass:"item-detail"},[e("p",{staticClass:"jc"},[e("incNumber",{staticClass:"number",style:{width:15*a.numMaxLength+"px"},attrs:{incNumber:t[a.mapKey[a.getArrayIndex("信访件次")]]}}),e("span",{staticClass:"number-unit"},[a._v("件次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*t[a.mapKey[a.getArrayIndex("件次占比")]]).toFixed(2)}}),e("span",[a._v(a._s(t[a.mapKey[a.getArrayIndex("件次占比")]]))]),e("span",{staticClass:"per-unit"},[a._v("%")])],1),e("div"),e("p",{staticClass:"rc"},[e("incNumber",{staticClass:"number",style:{width:15*a.numMaxLength+"px"},attrs:{incNumber:t[a.mapKey[a.getArrayIndex("信访人次")]]}}),e("span",{staticClass:"number-unit"},[a._v("人次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*t[a.mapKey[a.getArrayIndex("人次占比")]]).toFixed(2)}}),e("span",{staticClass:"per-unit"},[a._v("%")])],1)])])})),0),100!==a.breakNumber&&a.listData.length>a.breakNumber?e("ul",a._l(a.listData.slice(a.breakNumber),(function(t,i){return e("li",{key:i,staticClass:"item"},[e("p",{staticClass:"label",attrs:{title:t.name}},[a._v(a._s(t.name))]),e("div",{staticClass:"item-detail"},[e("p",{staticClass:"jc"},[e("incNumber",{staticClass:"number",style:{width:15*a.numMaxLength+"px"},attrs:{incNumber:t[a.mapKey[a.getArrayIndex("信访件次")]]}}),e("span",{staticClass:"number-unit"},[a._v("件次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*t[a.mapKey[a.getArrayIndex("件次占比")]]).toFixed(2)}}),e("span",{staticClass:"per-unit"},[a._v("%")])],1),e("div"),e("p",{staticClass:"rc"},[e("incNumber",{staticClass:"number",style:{width:15*a.numMaxLength+"px"},attrs:{incNumber:t[a.mapKey[a.getArrayIndex("信访人次")]]}}),e("span",{staticClass:"number-unit"},[a._v("人次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*t[a.mapKey[a.getArrayIndex("人次占比")]]).toFixed(2)}}),e("span",{staticClass:"per-unit"},[a._v("%")])],1)])])})),0):a._e()])])},n=[],o=(e("4de4"),e("d81d"),e("a9e3"),e("b64b"),e("d3b7"),e("07ac"),e("25f0"),e("ad97")),s={name:"detailList",components:{incNumber:o["a"]},props:{params:{type:[Object,Array],default:null},breakNumber:{type:Number,default:100}},data:function(){return{mapKey:[],mapValue:[],numMaxLength:0,listData:[]}},mounted:function(){},methods:{setLength:function(){this.mapKey=Object.keys(this.params.map),this.mapValue=Object.values(this.params.map);var a=[];this.params instanceof Array?this.listData=this.params:this.listData=this.params.data,this.listData.filter((function(t){a.push(Math.max(t.value_g0_1,t.value_g2_1).toString().length)})),this.numMaxLength=Math.max.apply(null,a)},getArrayIndex:function(a){var t=this.mapValue.length;while(t--)if(this.mapValue[t]===a)return t;return-1}},computed:{styleType:function(){return this.$store.state.styleType}},watch:{params:function(){this.setLength()}}},r=s,l=(e("eeab"),e("2877")),c=Object(l["a"])(r,i,n,!1,null,"d90025a6",null);t["a"]=c.exports},"9a42":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:a.params.canvasStyle.width,height:a.params.canvasStyle.height},attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}})},n=[],o=(e("99af"),e("4de4"),e("4160"),e("caad"),e("d81d"),e("13d5"),e("b0c0"),e("b64b"),e("07ac"),e("ac1f"),e("8a79"),e("2532"),e("1276"),e("159b"),e("53ca")),s=e("b85c"),r=e("2909"),l=e("313e"),c=e("dd01"),d={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var a=this;this.init(),this.$once("hook:beforeDestroy",(function(){a.interval&&clearInterval(a.interval),a.myChart&&a.myChart.dispose()}))},methods:{init:function(){var a=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var t=Object(r["a"])(this.params.data),i=[],n=this.params.options,o=n.isVertical?[0,1,1,0]:[0,0,0,1],d=Object.keys(n.map),h=!!n.line&&n.line.length===d.length;if(this.legendData=Object.values(n.map),"overlap"===n.mode&&n.legendBgSrc){var m=n.legendBgSrc.active,u=n.legendBgSrc.inActive;this.activeLegendBg=e("9e01")("./".concat(m,".png")),this.inActiveLegendBg=e("9e01")("./".concat(u,".png")),this.legendData.forEach((function(t,e){n.map[n.overlap]===t&&(a.legendData[e]={name:t,icon:void 0===a.params.legendActive||a.params.legendActive[t]?"image://".concat(a.activeLegendBg):"image://".concat(a.inActiveLegendBg)})}))}var b=[],p=0,f={};n.tooltipPercent&&t.forEach((function(a){f[a[n.xName]]=[]})),n.tooltipPercent&&t.forEach((function(a,t){var e=a[n.xName];for(var i in a)"name"!==i&&"genre"!==i&&f[e].push(a[i].split("|")[1])}));var g=0,v=0,S=1;d.forEach((function(e,i){var s=[],r=n.map;t.forEach((function(a){n.tooltipPercent?s.push(a[e].split("|")[0]):s.push(a[e])})),p=n.isAverage?s.reduce((function(a,t){return+a+ +t}))/t.length:0;var c={};n.line&&n.line.includes(e)?(a.isRightAxis=r[e].endsWith("比")||r[e].endsWith("度")||r[e].endsWith("率"),c={name:r[e],type:"line",yAxisIndex:h?0:a.isRightAxis?1:0,label:{show:!1},symbolSize:n.symbolSize?n.symbolSize:5,symbol:"circle",showSymbol:void 0!==n.showSymbol&&n.showSymbol,smooth:void 0!==n.smooth&&n.smooth,itemStyle:{normal:{label:{show:void 0===n.lineLabelShow||n.lineLabelShow,fontSize:n.axisLabelSize?n.axisLabelSize:20,formatter:a.isRightAxis?"{c}%":"{c}"},color:n.colors&&n.colors.line?a.$STANDARD.getColor(n.colors.line[g],[0,1,1,0],l):""},emphasis:{label:{show:!0,fontSize:n.axisLabelSize?n.axisLabelSize:20},borderColor:n.colors&&n.colors.line?a.$STANDARD.colorToRgba(n.colors.line[g],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:n.colors&&n.colors.line?a.$STANDARD.getColor(n.colors.line[g++],[0,0,0,1],l):"",width:n.lineWidth?n.lineWidth:3,shadowBlur:n.lineShadowBlur?n.lineShadowBlur:0,shadowColor:n.lineShadowColor?n.lineShadowColor:"none",shadowOffsetY:n.lineShadowOffsetY?n.lineShadowOffsetY:0,opacity:n.lineOpacity?n.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:n.isAverage?"6.7%":"",yAxis:p},{symbol:"line",symbolSize:"0",x:"95%",yAxis:p}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:s}):(console.log("barGap",n.barGaps),c={name:r[e],type:"bar",stack:"stack"===n.mode?S:S++,yAxisIndex:0,xAxisIndex:"overlap"===n.mode&&e===n.overlap?1:0,barWidth:n.barWidth?n.barWidth:"auto",barGap:n.barGaps?n.barGaps:"50%",label:{show:void 0===n.barLabelShow||n.barLabelShow,position:n.barLabelOptions?n.barLabelOptions:n.isVertical?n.categoryInverse?"left":"right":"",fontSize:n.axisLabelSize?n.axisLabelSize:20,textStyle:{color:n.itemLabelColor?n.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===n.barBorderRadius?0:n.barBorderRadius,color:"overlap"!==n.mode||n.overlap!==e?n.colors&&n.colors.bar?n.colorisarry?function(a){var t=n.colors.bar?n.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return t[a.dataIndex]}:a.$STANDARD.getColor(n.colors.bar[v++],o,l):"":"transparent",borderColor:"overlap"===n.mode&&n.overlap===e?n.colors&&n.colors.bar?a.$STANDARD.getColor(n.colors.bar[v++],o,l):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===n.barLabelShow||n.barLabelShow,fontSize:n.axisLabelSize?n.axisLabelSize:20}},data:s}),b.push(c)}));var x,y=[{show:n.axisValueShow,type:"value",name:n.axis1Name?n.axis1Name:"",nameLocation:n.nameLocation?"start":"end",nameTextStyle:{color:n.YaxisNameColor?n.YaxisNameColor:"#ff517f",fontSize:n.axisLabelSize?n.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:n.splitNumber?n.splitNumber:5,position:n.isVertical&&n.axisValuePosition?"top":"bottom",inverse:n.categoryInverse,scale:!!n.isLeftScale,axisTick:{show:!1},axisLabel:{show:!n.isVertical||!n.axisLabel,margin:10,fontSize:14,color:function(a,t){var e=[],i=n.splitNumber?n.splitNumber:5;if(t<i){for(var o=0;o<i;o++)e.push(0);var s=Object(c["a"])(e,"#fdc48d","#ff517f");return s(t)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!n.isVertical||!n.splitLine)&&(void 0===n.splitLineShow?n.axisValueShow:n.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:n.axisValueShow,type:"value",name:n.axis2Name?n.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!n.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(s["a"])(t);try{for(w.s();!(x=w.n()).done;){var C=x.value;C.code?i.push({value:C[n.xName],id:C.code}):i.push(C[n.xName])}}catch(D){w.e(D)}finally{w.f()}var L=i.length>=100;n.isVertical&&(L=!1);var A=[{type:"category",data:i,inverse:!!n.isVertical,axisTick:{show:!1},position:n.categoryInverse?"right":"left",triggerEvent:!0,name:n.axisCategoryName?n.axisCategoryName:"",nameLocation:n.isVertical&&n.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:n.axisLabelSize?n.axisLabelSize:20},axisLabel:{interval:0,rotate:n.rotate?n.rotate:0,color:"#fff",inside:void 0!==n.XasisLabelInside&&n.XasisLabelInside,padding:n.XasisLabelPad?n.XasisLabelPad:0,fontSize:n.axisLabelSize?n.axisLabelSize:20,lineHeight:n.XaxisLabelLH?n.XaxisLabelLH:14,height:n.XaxisLabelH?n.XaxisLabelH:30,margin:15,formatter:function(a){var t="",e="";if(n.categoryBr){e="";for(var i=n.brNum?n.brNum:1,o=0;o<a.length;o++)e+=a[o],o%i==i-1&&(e+="\n");t=e}else t=a;return t}},axisLine:{show:!!n.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],N=[{show:L,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=l["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===n.tooltipShow||n.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:n.tooltipType?n.tooltipType:"shadow"},formatter:function(a){var e=a[0].name+"<br/>";if("overlap"===n.mode&&a.unshift(a.pop()),n.addTooltip){var i=a[0].name,o=t.filter((function(a){return a[n.xName]===i}))[0];for(var s in n.addTooltip)n.addTooltip.hasOwnProperty(s)&&a.push({seriesName:n.addTooltip[s],value:o[s]})}return a.forEach((function(a,t){var i=a.seriesName.charAt(a.seriesName.length-1);e+="率"!==i&&"度"!==i&&"比"!==i?"".concat(a.marker).concat(a.seriesName," : ").concat(a.value,"</br>"):"".concat(a.marker).concat(a.seriesName," : ").concat(a.value,"%</br>")})),e}},legend:{show:n.legendShow,data:this.legendData,itemGap:n.legendGap?n.legendGap:10,top:n.legendPos?n.legendPos.top:"3%",right:n.legendPos?n.legendPos.right:"5%",itemWidth:n.legendW?n.legendW:25,itemHeight:n.legendH?n.legendH:14,icon:"undefined"===n.legendIcon?"rect":n.legendIcon,borderRadius:n.borderRadius?n.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:n.legendSize?n.legendSize:20,color:n.legendColor?n.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:n.left?n.left:"5%",right:n.right?n.right:"5%",top:n.top?n.top:"5%",bottom:L?"6%":n.bottom?n.bottom:"5%",containLabel:!0},label:{show:!0,position:n.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:n.isVertical?y:A,yAxis:n.isVertical?A:y,series:b,dataZoom:N,animation:this.animation,animationDelay:function(a){return 50*a}},this.myChart.setOption(this.option),this.myChart.on("click",(function(e){var n=a;"series"===e.componentType&&(e.allData={data:t,params:e},n.$emit("canvasClick",e.allData),n.$emit("departmentClick",e.name)),"yAxis"===e.componentType&&(e.name=e.value,i.filter((function(a){a.value==e.name&&(e.id=a.id)})),e.allData={data:t,params:e},n.$emit("canvasClick",e.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var a=this;this.myChart.on("legendselectchanged",(function(t){var e=a.params.options,i=t.selected;a.$emit("changeLegend",i),"overlap"===e.mode&&(t.name===e.map[e.overlap]&&a.legendActive?(a.legendActive=!a.legendActive,a.legendData.forEach((function(t,e){"object"===Object(o["a"])(t)&&(a.legendData[e].icon="image://".concat(a.inActiveLegendBg))})),a.myChart.setOption({legend:{data:a.legendData}})):t.name!==e.map[e.overlap]||a.legendActive||(a.legendActive=!a.legendActive,a.legendData.forEach((function(t,e){"object"===Object(o["a"])(t)&&(a.legendData[e].icon="image://".concat(a.activeLegendBg))})),a.myChart.setOption({legend:{data:a.legendData}})))}))}},watch:{animateFlag:{handler:function(a,t){this.init()},deep:!0},"params.data":{handler:function(a,t){this.init()},deep:!0}}},h=d,m=e("2877"),u=Object(m["a"])(h,i,n,!1,null,"c4233072",null);t["a"]=u.exports},aca2:function(a,t,e){"use strict";var i=e("4c1e"),n=e.n(i);n.a},ad97:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"incNumber"},[a._v(a._s(a.number))])},n=[],o=(e("a9e3"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(a){var t=this;a=a||{};var e,i,n=a.time||10,o=void 0===a.num?0:a.num,s=a.regulator||100,r=o/(n/s),l=0,c=0;o%1!==0&&(e=String(o).split("."),i=e[1].length);var d=setInterval((function(){l+=r,l>=o&&(clearInterval(d),l=o);var a=0;a=o%1===0?Math.floor(l):l.toFixed(i),a!==c&&(c=a,t.number=c)}),50)},formatMoney:function(a,t){if(/[^0-9\.]/.test(a))return"0.00";if(null==a||"null"==a||""==a)return"0.00";a=a.toString().replace(/^(\d*)$/,"$1."),a=(a+"00").replace(/(\d*\.\d\d)\d*/,"$1"),a=a.replace(".",",");var e=/(\d)(\d{3},)/;while(e.test(a))a=a.replace(e,"$1,$2");if(a=a.replace(/,(\d\d)$/,".$1"),0==t){var i=a.split(".");"00"==i[1]&&(a=i[0])}return a}},watch:{incNumber:{handler:function(a,t){this.number=a,this.init()},deep:!0}}}),s=o,r=(e("aca2"),e("2877")),l=Object(r["a"])(s,i,n,!1,null,"28b38ba0",null);t["a"]=l.exports},d58f:function(a,t,e){var i=e("1c0b"),n=e("7b0b"),o=e("44ad"),s=e("50c4"),r=function(a){return function(t,e,r,l){i(e);var c=n(t),d=o(c),h=s(c.length),m=a?h-1:0,u=a?-1:1;if(r<2)while(1){if(m in d){l=d[m],m+=u;break}if(m+=u,a?m<0:h<=m)throw TypeError("Reduce of empty array with no initial value")}for(;a?m>=0:h>m;m+=u)m in d&&(l=e(l,d[m],m,c));return l}};a.exports={left:r(!1),right:r(!0)}},eeab:function(a,t,e){"use strict";var i=e("7707"),n=e.n(i);n.a},f266:function(a,t,e){"use strict";var i=e("368e"),n=e.n(i);n.a}}]);
//# sourceMappingURL=chunk-83acc7f0.34eb5829.js.map