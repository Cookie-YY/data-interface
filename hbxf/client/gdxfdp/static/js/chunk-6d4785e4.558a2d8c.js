(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d4785e4","chunk-dd6c2b7c"],{"13d5":function(a,e,t){"use strict";var i=t("23e7"),o=t("d58f").left,r=t("a640"),n=t("ae40"),l=r("reduce"),s=n("reduce",{1:0});i({target:"Array",proto:!0,forced:!l||!s},{reduce:function(a){return o(this,a,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"164e":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:a.params.canvasStyle.width,height:a.params.canvasStyle.height},attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}})},o=[],r=(t("4160"),t("fb6a"),t("b0c0"),t("159b"),t("2909")),n=t("313e"),l={name:"HorizontalBar",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"100%",height:"100%"},options:{rollFlag:!1},data:[{name:"石家庄市",value:1067},{name:"唐山市",value:47},{name:"秦皇岛市",value:11},{name:"邯郸市",value:7},{name:"邢台市",value:197},{name:"保定市",value:371},{name:"张家口市",value:134},{name:"承德市",value:156},{name:"沧州市",value:30},{name:"廊坊市",value:210},{name:"衡水市",value:67}]}}}},data:function(){return{myChart:null,rollFlag:!1}},mounted:function(){this.init()},methods:{init:function(){var a=this;if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){this.myChart=n["init"](this.$refs.chartEl);var e=JSON.parse(JSON.stringify(this.params.data)),t=[],i=[],o=[],l=[],s=0,c=0;e.forEach((function(a){c+=a.value})),0===c&&(e=Object(r["a"])(e).reverse()),e.forEach((function(a){l.push(a.name),o.push(a.value),s=a.value>s?a.value:s,c+=a.value})),e.forEach((function(a){var e={name:a.name,value:1.1*s,itemStyle:{borderColor:"#117cbb"}};t.push(e);var o={name:a.name,value:0};i.push(o)}));var h=this.params.options&&this.params.options.highlightIndex;(h||0===h)&&(e[h].itemStyle={color:"#f5e752"},t[h].itemStyle={borderColor:"#f5e752"},i[h].itemStyle={color:"#f5e752"}),this.option={grid:{left:"16%",top:"0%",right:"10%",bottom:"0%",containLabel:!0},xAxis:[{show:!1}],yAxis:[{axisTick:"none",axisLine:"none",offset:"20",axisLabel:{color:"#fff",fontSize:16,formatter:function(a){return a.length>4?a.slice(0,4)+"...":a}},data:l},{axisTick:"none",axisLine:"none",axisLabel:{textStyle:{color:"#ffffff",fontSize:"16"}},data:o},{name:"",nameGap:"50",nameTextStyle:{color:"#ffffff",fontSize:"16"},axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},data:[]}],series:[{name:"条",type:"bar",yAxisIndex:0,data:e,label:{normal:{show:!1,position:"right",textStyle:{color:"#ffffff",fontSize:"16"}}},barWidth:8,itemStyle:{color:new n["graphic"].LinearGradient(0,0,1,0,[{offset:0,color:"#4cbfef"},{offset:1,color:"#fdaa33"}]),barBorderRadius:20},z:2},{name:"bar背景",type:"bar",yAxisIndex:1,barGap:"-100%",barWidth:12,itemStyle:{color:"transparent",borderWidth:2,barBorderRadius:5},data:t,z:1},{name:"圆点",type:"scatter",hoverAnimation:!1,data:i,yAxisIndex:2,symbolSize:24,itemStyle:{color:"#4cbfef",opacity:1},z:2}]},this.myChart.setOption(this.option);var d="";this.myChart.on("click",(function(e){a.params.options&&a.params.options.click&&(d=d===e.name?"":e.name,a.option.series[0].data.forEach((function(a){a.itemStyle={},a.name===d?a.itemStyle.color="#f5e752":a.itemStyle.color=new n["graphic"].LinearGradient(0,0,1,0,[{offset:0,color:"#4cbfef"},{offset:1,color:"#fdaa33"}])})),a.option.series[1].data.forEach((function(a){a.itemStyle={},a.name===d?a.itemStyle.borderColor="#f5e752":a.itemStyle.borderColor="#117cbb"})),a.option.series[2].data.forEach((function(a){a.itemStyle={},a.name===d?a.itemStyle.color="#f5e752":a.itemStyle.color="#4cbfef"})),a.myChart.setOption(a.option),a.$emit("departmentClick",d))}))}}},computed:{styleType:function(){return this.$store.state.styleType},realData:function(){return this.params.data}},watch:{realData:{handler:function(a,e){this.init()},deep:!0}}},s=l,c=t("2877"),h=Object(c["a"])(s,i,o,!1,null,"5cad3fae",null);e["a"]=h.exports},"3b4b":function(a,e,t){"use strict";var i=t("9763"),o=t.n(i);o.a},9763:function(a,e,t){},"9a42":function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:a.params.canvasStyle.width,height:a.params.canvasStyle.height},attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}})},o=[],r=(t("99af"),t("4de4"),t("4160"),t("caad"),t("d81d"),t("13d5"),t("b0c0"),t("b64b"),t("07ac"),t("ac1f"),t("8a79"),t("2532"),t("1276"),t("159b"),t("53ca")),n=t("b85c"),l=t("2909"),s=t("313e"),c=t("dd01"),h={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var a=this;this.init(),this.$once("hook:beforeDestroy",(function(){a.interval&&clearInterval(a.interval),a.myChart&&a.myChart.dispose()}))},methods:{init:function(){var a=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var e=Object(l["a"])(this.params.data),i=[],o=this.params.options,r=o.isVertical?[0,1,1,0]:[0,0,0,1],h=Object.keys(o.map),d=!!o.line&&o.line.length===h.length;if(this.legendData=Object.values(o.map),"overlap"===o.mode&&o.legendBgSrc){var m=o.legendBgSrc.active,f=o.legendBgSrc.inActive;this.activeLegendBg=t("9e01")("./".concat(m,".png")),this.inActiveLegendBg=t("9e01")("./".concat(f,".png")),this.legendData.forEach((function(e,t){o.map[o.overlap]===e&&(a.legendData[t]={name:e,icon:void 0===a.params.legendActive||a.params.legendActive[e]?"image://".concat(a.activeLegendBg):"image://".concat(a.inActiveLegendBg)})}))}var p=[],u=0,b={};o.tooltipPercent&&e.forEach((function(a){b[a[o.xName]]=[]})),o.tooltipPercent&&e.forEach((function(a,e){var t=a[o.xName];for(var i in a)"name"!==i&&"genre"!==i&&b[t].push(a[i].split("|")[1])}));var g=0,v=0,y=1;h.forEach((function(t,i){var n=[],l=o.map;e.forEach((function(a){o.tooltipPercent?n.push(a[t].split("|")[0]):n.push(a[t])})),u=o.isAverage?n.reduce((function(a,e){return+a+ +e}))/e.length:0;var c={};o.line&&o.line.includes(t)?(a.isRightAxis=l[t].endsWith("比")||l[t].endsWith("度")||l[t].endsWith("率"),c={name:l[t],type:"line",yAxisIndex:d?0:a.isRightAxis?1:0,label:{show:!1},symbolSize:o.symbolSize?o.symbolSize:5,symbol:"circle",showSymbol:void 0!==o.showSymbol&&o.showSymbol,smooth:void 0!==o.smooth&&o.smooth,itemStyle:{normal:{label:{show:void 0===o.lineLabelShow||o.lineLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20,formatter:a.isRightAxis?"{c}%":"{c}"},color:o.colors&&o.colors.line?a.$STANDARD.getColor(o.colors.line[g],[0,1,1,0],s):""},emphasis:{label:{show:!0,fontSize:o.axisLabelSize?o.axisLabelSize:20},borderColor:o.colors&&o.colors.line?a.$STANDARD.colorToRgba(o.colors.line[g],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:o.colors&&o.colors.line?a.$STANDARD.getColor(o.colors.line[g++],[0,0,0,1],s):"",width:o.lineWidth?o.lineWidth:3,shadowBlur:o.lineShadowBlur?o.lineShadowBlur:0,shadowColor:o.lineShadowColor?o.lineShadowColor:"none",shadowOffsetY:o.lineShadowOffsetY?o.lineShadowOffsetY:0,opacity:o.lineOpacity?o.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:o.isAverage?"6.7%":"",yAxis:u},{symbol:"line",symbolSize:"0",x:"95%",yAxis:u}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:n}):(console.log("barGap",o.barGaps),c={name:l[t],type:"bar",stack:"stack"===o.mode?y:y++,yAxisIndex:0,xAxisIndex:"overlap"===o.mode&&t===o.overlap?1:0,barWidth:o.barWidth?o.barWidth:"auto",barGap:o.barGaps?o.barGaps:"50%",label:{show:void 0===o.barLabelShow||o.barLabelShow,position:o.barLabelOptions?o.barLabelOptions:o.isVertical?o.categoryInverse?"left":"right":"",fontSize:o.axisLabelSize?o.axisLabelSize:20,textStyle:{color:o.itemLabelColor?o.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===o.barBorderRadius?0:o.barBorderRadius,color:"overlap"!==o.mode||o.overlap!==t?o.colors&&o.colors.bar?o.colorisarry?function(a){var e=o.colors.bar?o.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return e[a.dataIndex]}:a.$STANDARD.getColor(o.colors.bar[v++],r,s):"":"transparent",borderColor:"overlap"===o.mode&&o.overlap===t?o.colors&&o.colors.bar?a.$STANDARD.getColor(o.colors.bar[v++],r,s):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===o.barLabelShow||o.barLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20}},data:n}),p.push(c)}));var x,S=[{show:o.axisValueShow,type:"value",name:o.axis1Name?o.axis1Name:"",nameLocation:o.nameLocation?"start":"end",nameTextStyle:{color:o.YaxisNameColor?o.YaxisNameColor:"#ff517f",fontSize:o.axisLabelSize?o.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:o.splitNumber?o.splitNumber:5,position:o.isVertical&&o.axisValuePosition?"top":"bottom",inverse:o.categoryInverse,scale:!!o.isLeftScale,axisTick:{show:!1},axisLabel:{show:!o.isVertical||!o.axisLabel,margin:10,fontSize:14,color:function(a,e){var t=[],i=o.splitNumber?o.splitNumber:5;if(e<i){for(var r=0;r<i;r++)t.push(0);var n=Object(c["a"])(t,"#fdc48d","#ff517f");return n(e)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!o.isVertical||!o.splitLine)&&(void 0===o.splitLineShow?o.axisValueShow:o.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:o.axisValueShow,type:"value",name:o.axis2Name?o.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!o.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(n["a"])(e);try{for(w.s();!(x=w.n()).done;){var C=x.value;C.code?i.push({value:C[o.xName],id:C.code}):i.push(C[o.xName])}}catch(D){w.e(D)}finally{w.f()}var A=i.length>=100;o.isVertical&&(A=!1);var L=[{type:"category",data:i,inverse:!!o.isVertical,axisTick:{show:!1},position:o.categoryInverse?"right":"left",triggerEvent:!0,name:o.axisCategoryName?o.axisCategoryName:"",nameLocation:o.isVertical&&o.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:o.axisLabelSize?o.axisLabelSize:20},axisLabel:{interval:0,rotate:o.rotate?o.rotate:0,color:"#fff",inside:void 0!==o.XasisLabelInside&&o.XasisLabelInside,padding:o.XasisLabelPad?o.XasisLabelPad:0,fontSize:o.axisLabelSize?o.axisLabelSize:20,lineHeight:o.XaxisLabelLH?o.XaxisLabelLH:14,height:o.XaxisLabelH?o.XaxisLabelH:30,margin:15,formatter:function(a){var e="",t="";if(o.categoryBr){t="";for(var i=o.brNum?o.brNum:1,r=0;r<a.length;r++)t+=a[r],r%i==i-1&&(t+="\n");e=t}else e=a;return e}},axisLine:{show:!!o.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],z=[{show:A,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===o.tooltipShow||o.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:o.tooltipType?o.tooltipType:"shadow"},formatter:function(a){var t=a[0].name+"<br/>";if("overlap"===o.mode&&a.unshift(a.pop()),o.addTooltip){var i=a[0].name,r=e.filter((function(a){return a[o.xName]===i}))[0];for(var n in o.addTooltip)o.addTooltip.hasOwnProperty(n)&&a.push({seriesName:o.addTooltip[n],value:r[n]})}return a.forEach((function(a,e){var i=a.seriesName.charAt(a.seriesName.length-1);t+="率"!==i&&"度"!==i&&"比"!==i?"".concat(a.marker).concat(a.seriesName," : ").concat(a.value,"</br>"):"".concat(a.marker).concat(a.seriesName," : ").concat(a.value,"%</br>")})),t}},legend:{show:o.legendShow,data:this.legendData,itemGap:o.legendGap?o.legendGap:10,top:o.legendPos?o.legendPos.top:"3%",right:o.legendPos?o.legendPos.right:"5%",itemWidth:o.legendW?o.legendW:25,itemHeight:o.legendH?o.legendH:14,icon:"undefined"===o.legendIcon?"rect":o.legendIcon,borderRadius:o.borderRadius?o.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:o.legendSize?o.legendSize:20,color:o.legendColor?o.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:o.left?o.left:"5%",right:o.right?o.right:"5%",top:o.top?o.top:"5%",bottom:A?"6%":o.bottom?o.bottom:"5%",containLabel:!0},label:{show:!0,position:o.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:o.isVertical?S:L,yAxis:o.isVertical?L:S,series:p,dataZoom:z,animation:this.animation,animationDelay:function(a){return 50*a}},this.myChart.setOption(this.option),this.myChart.on("click",(function(t){var o=a;"series"===t.componentType&&(t.allData={data:e,params:t},o.$emit("canvasClick",t.allData),o.$emit("departmentClick",t.name)),"yAxis"===t.componentType&&(t.name=t.value,i.filter((function(a){a.value==t.name&&(t.id=a.id)})),t.allData={data:e,params:t},o.$emit("canvasClick",t.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var a=this;this.myChart.on("legendselectchanged",(function(e){var t=a.params.options,i=e.selected;a.$emit("changeLegend",i),"overlap"===t.mode&&(e.name===t.map[t.overlap]&&a.legendActive?(a.legendActive=!a.legendActive,a.legendData.forEach((function(e,t){"object"===Object(r["a"])(e)&&(a.legendData[t].icon="image://".concat(a.inActiveLegendBg))})),a.myChart.setOption({legend:{data:a.legendData}})):e.name!==t.map[t.overlap]||a.legendActive||(a.legendActive=!a.legendActive,a.legendData.forEach((function(e,t){"object"===Object(r["a"])(e)&&(a.legendData[t].icon="image://".concat(a.activeLegendBg))})),a.myChart.setOption({legend:{data:a.legendData}})))}))}},watch:{animateFlag:{handler:function(a,e){this.init()},deep:!0},"params.data":{handler:function(a,e){this.init()},deep:!0}}},d=h,m=t("2877"),f=Object(m["a"])(d,i,o,!1,null,"c4233072",null);e["a"]=f.exports},c017:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:a.params.canvasStyle.width,height:a.params.canvasStyle.height},attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}})},o=[],r=(t("b0c0"),t("b680"),t("d3b7"),t("ddb0"),t("b85c")),n=t("2909"),l=t("313e"),s={name:"Radar",props:{params:{type:Object,default:function(){return{canvasStyle:{width:"410px",height:"360px"},labelMaxShow:!0,data:[{name:"硕士",value:.45},{name:"本科",value:.45},{name:"专科",value:.45},{name:"中专",value:.45},{name:"其他",value:.45}]}}},animateFlag:Boolean},data:function(){return{myChart:null}},mounted:function(){this.init()},methods:{init:function(){if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null),this.myChart=l["init"](this.$refs.chartEl);var a,e=Object(n["a"])(this.params.data),t=this.params.options,i=[],o=[],s=Object(r["a"])(e.values());try{for(s.s();!(a=s.n()).done;){var c=a.value,h={text:c.name,value:c.value,max:1};i.push(h),o.push(c.value)}}catch(f){s.e(f)}finally{s.f()}var d=[{value:o,label:{normal:{show:!1,fontSize:12,color:"#fff",formatter:function(a){return(100*a.value).toFixed(0)+"%"}}},itemStyle:{normal:{fontSize:12,color:"#fff",lineStyle:{color:"#4A99FF"},shadowColor:"#4A99FF",shadowBlur:10}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"rgba(196,113,245,0.4)"},{offset:1,color:"rgba(250,113,205,0.4)"}],globalCoord:!1},opacity:1}}}],m={grid:{top:0,left:0,right:0,bottom:0},legend:{show:!1},radar:{center:t.center?t.center:["50%","50%"],radius:t.radius?t.radius:"75%",name:{textStyle:{color:"#fff",fontSize:12,lineHeight:16},formatter:function(a,e){return a+"\n"+(100*e.value).toFixed(0)+"%"}},indicator:i,splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0)","rgba(255,255,255,0)"]}},axisLine:{lineStyle:{color:"#5762b8"}},splitLine:{lineStyle:{color:"#5762b8",width:1}}},series:[{type:"radar",symbolSize:8,data:d}]};this.myChart.setOption(m)}}},watch:{"params.data":{handler:function(a,e){this.init()},deep:!0}}},c=s,h=t("2877"),d=Object(h["a"])(c,i,o,!1,null,"08936354",null);e["a"]=d.exports},cd15:function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"label"},[a._v("统计单位：人次")]),t("div",{staticClass:"content"},[t("div",{staticClass:"w-left"},[t("ctitle",{attrs:{title:"区域受理量动态"}}),t("div",{staticClass:"w-echart",attrs:{id:"w-echart"}},[t("div",{ref:"barEl"},[t("horizontalBar",{attrs:{params:a.leftBarParams}})],1)])],1),t("div",{staticClass:"w-right"},[t("div",{staticClass:"container"},[t("ctitle",{attrs:{title:"信访人特征"}}),t("div",{staticClass:"part"},[t("div",{staticClass:"inner"},[t("radar",{staticClass:"chart",attrs:{params:a.zyzbRadarParams}}),t("p",{staticClass:"label"},[a._v("职业占比")])],1),t("div",{staticClass:"inner"},[t("barline",{staticClass:"chart",attrs:{params:a.nlzbBarParams}}),t("p",{staticClass:"label"},[a._v("年龄统计")])],1),t("div",{staticClass:"inner"},[t("pie-chart3D",{staticClass:"chart",attrs:{params:a.xfmdzbPieParams}}),t("p",{staticClass:"label"},[a._v("信访目的占比")])],1),t("div",{staticClass:"inner"},[t("loopPie",{staticClass:"chart",attrs:{params:a.tswtPieParams}}),t("p",{staticClass:"label"},[a._v("投诉问题占比")])],1)])],1),t("div",{staticClass:"container"},[t("ctitle",{attrs:{title:"信访人行为"}}),t("div",{staticClass:"part"},[t("div",{staticClass:"inner"},[t("pie-chart3D",{staticClass:"chart",attrs:{params:a.xfxszbPieParams}}),t("p",{staticClass:"label"},[a._v("信访形式占比")])],1),t("div",{staticClass:"inner"},[t("barline",{staticClass:"chart",attrs:{params:a.cffzbPieParams}}),t("p",{staticClass:"label"},[a._v("重复访次数占比")])],1),t("div",{staticClass:"inner"},[t("loopPie",{staticClass:"chart",attrs:{params:a.gfjtfzbPieParams}}),t("p",{staticClass:"label"},[a._v("个访集体访占比")])],1),t("div",{staticClass:"inner"},[t("barline",{staticClass:"chart",attrs:{params:a.xfxwBarParams}}),t("p",{staticClass:"label"},[a._v("信访行为统计")])],1)])],1)])])])},o=[],r=t("365c"),n=(t("dd01"),t("9539")),l=t("5903"),s=t("840a"),c=t("164e"),h=t("d70f"),d=t("f203"),m=t("9a42"),f=t("c017"),p={name:"sxr",components:{ctitle:n["a"],loopPie:l["a"],PieChart3D:s["a"],horizontalBar:c["a"],BasicPie:h["a"],pictorialBar:d["a"],barline:m["a"],radar:f["a"]},data:function(){return{listScroll:null,leftBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"}},zyzbRadarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{center:["50%","50%"],radius:"50%"}},nlzbBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!0,splitLineShow:!1,axis1Name:"人次",axisLabelSize:12,left:"10%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,colors:{bar:[["#d2f69d","#79cc7a"]]},map:{value:"数量"}}},xfmdzbPieParams:{data:[],color:this.$STANDARD.pieColors,angle:20,radius:"30%",labelRadius:30,styleObj:{width:"100%",height:"100%"},isBr:!0,labelPer:!0},tswtPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.pieColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.18),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"24%",rollFlag:!0,threeLevel:!0}},xfxszbPieParams:{data:[],color:["#5166c1","#32b1e0","#15bbc2"],angle:20,radius:"30%",labelRadius:20,styleObj:{width:"100%",height:"100%"},isBr:!0,labelPer:!0},cffzbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{xName:"name",axisValueShow:!0,splitLineShow:!1,axis1Name:"人次",axisLabelSize:12,left:"5%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,colors:{bar:[["#ffa8c5","#5850ff"]]},map:{value:"数量"}}},gfjtfzbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.gradientColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.18),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"24%",rollFlag:!0,threeLevel:!0}},xfxwBarParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{xName:"name",axisValueShow:!0,splitLineShow:!1,axis1Name:"人次",axisLabelSize:12,left:"10%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,colors:{bar:[["#ffe97d","#ff957c"]]},map:{value:"数量"}}}}},mounted:function(){this.getLeftAPI(this.year)},methods:{getLeftAPI:function(a){var e=this;Object(r["a"])("xfrhxZhhxLeftBar",{year:a}).then((function(t){e.leftBarParams.data=t.data.data.sort((function(a,e){return a.value-e.value})),e.leftBarParams.data.length>14&&e.computation(),e.getRightAPI(a)})).catch((function(a){console.log(a)}))},getRightAPI:function(a){var e=this;Object(r["a"])("xfrhxZhhxZyzbRadar",{year:a}).then((function(a){e.zyzbRadarParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(r["a"])("xfrhxZhhxNlzbBar",{year:a}).then((function(a){e.nlzbBarParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(r["a"])("xfrhxZhhxXfmdzbPie",{year:a}).then((function(a){e.xfmdzbPieParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(r["a"])("xfrhxZhhxTswtzbPie",{year:a}).then((function(a){e.tswtPieParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(r["a"])("xfrhxZhhxXfxszbPie",{year:a}).then((function(a){e.xfxszbPieParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(r["a"])("xfrhxZhhxCffZbPie",{year:a}).then((function(a){e.cffzbPieParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(r["a"])("xfrhxZhhxGfjtfzbPie",{year:a}).then((function(a){e.gfjtfzbPieParams.data=a.data.data})).catch((function(a){console.log(a)})),Object(r["a"])("xfrhxZhhxXfxwzbBar",{year:a}).then((function(a){e.xfxwBarParams.data=a.data.data})).catch((function(a){console.log(a)}))},computation:function(a){var e=60*this.leftBarParams.data.length/100+"rem";$(this.$refs.barEl).css("height",e),this.initScroll()},initScroll:function(){var a=document.getElementById("w-echart");this.scrollFunc(this.listScroll,a),$(".bscroll-vertical-scrollbar").css({width:".1rem",background:"rgba(2, 144, 213, .2)"}),$(".bscroll-vertical-scrollbar .bscroll-indicator").css({backgroundImage:"linear-gradient(to bottom, rgba(14, 149, 210, 0.8) , rgba(19, 240, 255, 0.8))",border:"none"}),$(".bscroll-horizontal-scrollbar .bscroll-indicator").css({backgroundImage:"linear-gradient(to right, rgba(14, 149, 210, 0.8) , rgba(19, 240, 255, 0.8))",border:"none"})},scrollFunc:function(a,e){a?a.refresh():a=new BScroll(e,{bounce:!1,momentumLimitDistance:5,scrollX:!0,scrollbar:{fade:!1,interactive:!1},mouseWheel:!0})},fontSize:function(a){document.documentElement;var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var t=e/1920*100;return a*t}}},computed:{year:function(){return this.$store.state.year}},watch:{year:function(a){this.getLeftAPI(a)}}},u=p,b=(t("3b4b"),t("2877")),g=Object(b["a"])(u,i,o,!1,null,"4139d9ce",null);e["default"]=g.exports},d58f:function(a,e,t){var i=t("1c0b"),o=t("7b0b"),r=t("44ad"),n=t("50c4"),l=function(a){return function(e,t,l,s){i(t);var c=o(e),h=r(c),d=n(c.length),m=a?d-1:0,f=a?-1:1;if(l<2)while(1){if(m in h){s=h[m],m+=f;break}if(m+=f,a?m<0:d<=m)throw TypeError("Reduce of empty array with no initial value")}for(;a?m>=0:d>m;m+=f)m in h&&(s=t(s,h[m],m,c));return s}};a.exports={left:l(!1),right:l(!0)}},d70f:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:a.canvasStyle.width,height:a.canvasStyle.height},attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}})},o=[],r=(t("99af"),t("4160"),t("b0c0"),t("159b"),t("2909")),n=t("313e"),l=t.n(n),s={name:"PieProgress",props:{params:{type:Object,default:function(){return{canvasStyle:{width:"500px",height:"500px"},options:{placeHolder:!0,titleShow:!0,clockwise:!0,labelCut:!0,roseType:"area",legend:{show:!0,left:10,top:240,orient:"vertical"},radius:["30%","60%"],center:["50%","50%"],insidePercent:!1,unit:"条"},data:[{name:"A",value:10},{name:"B",value:30},{name:"C",value:70}]}}},animateFlag:Boolean},data:function(){return{myChart:null}},mounted:function(){var a=this;this.initChart(),this.$once("hook:beforeDestroy",(function(){a.interval&&clearInterval(a.interval),a.myChart&&a.myChart.dispose()}))},methods:{initChart:function(){var a=this;if(this.myChart&&this.myChart.dispose(),this.myChart=l.a.init(this.$refs.chartEl),0!==this.params.data.length){var e=this.params.options,t=Object(r["a"])(this.params.data),i=0,o=0;t.forEach((function(a){i+=a.value})),o=.015*i;for(var n={text:{color:"#fff",fontSize:16,align:"center"},value:{color:"#fff",fontSize:20,fontWeight:"bold",align:"center",lineHeight:20},percent:{color:"#e03562",fontSize:e.labelInnerSize?e.labelInnerSize:16,fontWeight:"bold",lineHeight:30,align:"center",padding:[3,0]},total:{color:this.$STANDARD.mainColor}},s={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},c=[],h={},d={},m=(e.colors,0),f=t.length;m<f;m++)h={value:t[m].value,name:t[m].name},d={value:o,name:"",itemStyle:s},e.placeHolder?c.push(h,d):c.push(h);var p={name:"外部扇区",hoverAnimation:!1,type:"pie",center:e.center||["50%","50%"],roseType:!!e.roseType&&e.roseType,radius:e.radius?e.radius:["0%","60%"],label:{show:!0,position:"outside",fontSize:e.labelFontSize?e.labelFontSize:16,align:"center",color:"#fff"},labelLine:{show:!0,lineStyle:{color:this.$STANDARD.labelLineColor}},itemStyle:{color:function(a){return Array.isArray(e.colors[a.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:e.colors[a.dataIndex][0]},{offset:1,color:e.colors[a.dataIndex][1]}],global:!1}:e.colors[a.dataIndex]}},data:c,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(a){return 80*a}},u={name:"内部扇区",type:"pie",center:e.center||["50%","50%"],roseType:e.roseType?e.roseType:"",radius:e.radius?e.radius:["0%","60%"],itemStyle:{color:function(a){return Array.isArray(e.colors[a.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:e.colors[a.dataIndex][0]},{offset:1,color:e.colors[a.dataIndex][1]}],global:!1}:e.colors[a.dataIndex]}},label:{normal:{show:!1,position:"center",formatter:"{percent|{d}%}",rich:n},emphasis:{show:!0}},labelLine:{normal:{show:!1}},data:c,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(a){return 80*a}},b=e.insidePercent?[u,p]:[p];this.myChart.setOption({tooltip:{show:!e.tooltip||(void 0===e.tooltip.show||e.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,textStyle:{color:this.$STANDARD.tooltipColor},position:!1===e.labelShow?["33%","35%"]:null,formatter:function(a){return a.name?"".concat(a.marker).concat(a.name," : ").concat(a.value):""}},title:{show:!!e.titleShow,text:"{total|"+i+"}\n总数",left:"center",top:"center",padding:[12,0],textStyle:{color:this.$STANDARD.titleColor,align:"center",rich:n}},legend:{show:!!e.legend&&e.legend.show,left:e.legend&&e.legend.left?e.legend.left:"left",top:e.legend&&e.legend.top?e.legend.top:"top",textStyle:{color:this.$STANDARD.legendColor},orient:e.legend&&e.legend.orient?e.legend.orient:"vertical"},series:b});var g=-1;if(this.myChart.on("click",(function(e){for(var i="",o=t.length,r=0;r<o;r++)a.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:r});g===e.dataIndex?(g=-1,i=""):(g=e.dataIndex,a.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex}),i=e.name),a.$emit("change",i)})),this.params.options.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(e){0!==e.seriesIndex&&(a.params.options.rollFlag=!1,e.dataIndex!==a.app.currentIndex&&a.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:a.app.currentIndex}))})),this.myChart.on("mouseout",(function(e){a.params.options.rollFlag=!0}));else{var v=this.params.options.defaultHigh;""!==v&&void 0!==v&&this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:v})}}},chartMove:function(){var a=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var e=a.params.data.length;a.params.options.rollFlag&&(a.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:a.app.currentIndex}),a.app.currentIndex=(a.app.currentIndex+1)%e,a.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:a.app.currentIndex}),a.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:a.app.currentIndex}))}),2e3)}},computed:{canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"500px",height:this.params.canvasStyle?this.params.canvasStyle.height:"500px"}}},watch:{animateFlag:{handler:function(a,e){this.initChart()}},"params.data":{handler:function(a,e){this.initChart()},deep:!0}}},c=s,h=t("2877"),d=Object(h["a"])(c,i,o,!1,null,"425e3e62",null);e["a"]=d.exports},f203:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!a.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:a.params.canvasStyle.width,height:a.params.canvasStyle.height},attrs:{"element-loading-background":a.$STANDARD.loadingBgColor}})},o=[],r=(t("4160"),t("b0c0"),t("159b"),t("313e")),n=t("dd01"),l={name:"pictorialBar",props:{animateFlag:!1,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},options:{barColors:this.$STANDARD.barColors,labelCut:!0},data:[]}}}},data:function(){return{myChart:null}},mounted:function(){var a=this;this.init(),this.$once("hook:beforeDestroy",(function(){a.interval&&clearInterval(a.interval),a.myChart&&a.myChart.dispose()}))},methods:{init:function(){var a=this;if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){this.myChart=r["init"](this.$refs.chartEl);var e=this.params.options,t=[],i=[];this.params.data.forEach((function(e){t.push(e.name),i.push(e[a.params.options.valueKey?a.params.options.valueKey:"value"])}));var o={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],axisPointer:{type:"shadow"},formatter:function(a){return e.axisCategoryName?a[0].name+e.axisCategoryName+"<br/>"+a[0].value.toLocaleString():a[0].name+" : "+a[0].value.toLocaleString()}},grid:{top:e.top?e.top:"5%",bottom:e.bottom?e.bottom:"5%",left:e.left?e.left:"5%",right:e.right?e.right:"5%"},xAxis:{type:"category",name:e.axisCategoryName?e.axisCategoryName:"",nameLocation:e.nameLocation?"start":"end",nameTextStyle:{color:e.XaxisNameColor?e.XaxisNameColor:"#fff",fontSize:e.axisLabelSize?e.axisLabelSize:20},data:t,axisLine:{show:!0,lineStyle:{width:2,color:this.$STANDARD.xAxisLineColor}},axisTick:{alignWithLabel:!0,show:!!e.axisTickShow,inside:!0},axisLabel:{interval:0,margin:10,fontSize:16,color:this.$STANDARD.xAxisColor},splitLine:{show:!1}},yAxis:{type:"value",name:e.axisYName?e.axisYName:"",nameLocation:e.nameLocation?"start":"end",nameTextStyle:{color:e.YaxisNameColor?e.YaxisNameColor:"#ff517f",fontSize:e.axisLabelSize?e.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:e.splitNumber?e.splitNumber:5,axisLabel:{show:!e.YaxisaxisLabelShow,margin:10,fontSize:14,color:function(a,t){var i=[],o=e.splitNumber?e.splitNumber:5;if(t<o){for(var r=0;r<o;r++)i.push(0);var l=Object(n["a"])(i,"#fdc48d","#ff517f");return l(t)}return"#ff517f"}},axisLine:{show:!!e.YaxisLineShow,width:2,type:"dotted",color:this.$STANDARD.yAxisSplitLineColor},axisTick:{show:!1},splitLine:{show:!!e.splitLineShow,lineStyle:{type:"dashed",color:"#2c344c"}}},series:[{name:"数量",type:"pictorialBar",symbol:this.params.options.symbol,symbolSize:this.params.options.symbolSize,itemStyle:{color:this.params.options.gradient?new r["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:this.params.options.gradient[0]},{offset:1,color:this.params.options.gradient[1]}]):this.params.options.barColor},data:i},{name:"圆圈",type:"pictorialBar",symbolSize:this.params.options.circleShow?[30,30]:[0,0],symbolOffset:[0,-10],z:12,symbolPosition:"end",itemStyle:{color:this.params.options.barColor},data:i}]};this.myChart.setOption(o)}}},watch:{animateFlag:{handler:function(a,e){this.init()},deep:!0},"params.data":{handler:function(a,e){this.init()},deep:!0}}},s=l,c=t("2877"),h=Object(c["a"])(s,i,o,!1,null,"c1e30822",null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-6d4785e4.558a2d8c.js.map