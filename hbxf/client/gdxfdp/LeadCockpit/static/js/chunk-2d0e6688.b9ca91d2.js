(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6688"],{"992d":function(e,a,o){"use strict";var i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},t=[],l=(o("99af"),o("4de4"),o("4160"),o("caad"),o("d81d"),o("13d5"),o("b0c0"),o("b64b"),o("07ac"),o("ac1f"),o("8a79"),o("2532"),o("1276"),o("159b"),o("53ca")),r=o("b85c"),n=o("2909"),s=o("313e"),d=o("dd01"),c={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var a=Object(n["a"])(this.params.data),i=[],t=this.params.options,l=t.isVertical?[0,1,1,0]:[0,0,0,1],c=Object.keys(t.map),h=!!t.line&&t.line.length===c.length;if(this.legendData=Object.values(t.map),"overlap"===t.mode&&t.legendBgSrc){var g=t.legendBgSrc.active,m=t.legendBgSrc.inActive;this.activeLegendBg=o("9e01")("./".concat(g,".png")),this.inActiveLegendBg=o("9e01")("./".concat(m,".png")),this.legendData.forEach((function(a,o){t.map[t.overlap]===a&&(e.legendData[o]={name:a,icon:void 0===e.params.legendActive||e.params.legendActive[a]?"image://".concat(e.activeLegendBg):"image://".concat(e.inActiveLegendBg)})}))}var p=[],b=0,f={};t.tooltipPercent&&a.forEach((function(e){f[e[t.xName]]=[]})),t.tooltipPercent&&a.forEach((function(e,a){var o=e[t.xName];for(var i in e)"name"!==i&&"genre"!==i&&f[o].push(e[i].split("|")[1])}));var S=0,v=0,u=1;c.forEach((function(o,i){var r=[],n=t.map;a.forEach((function(e){t.tooltipPercent?r.push(e[o].split("|")[0]):r.push(e[o])})),b=t.isAverage?r.reduce((function(e,a){return+e+ +a}))/a.length:0;var d={};t.line&&t.line.includes(o)?(e.isRightAxis=n[o].endsWith("比")||n[o].endsWith("度")||n[o].endsWith("率"),d={name:n[o],type:"line",yAxisIndex:h?0:e.isRightAxis?1:0,label:{show:!1},symbolSize:t.symbolSize?t.symbolSize:5,symbol:"circle",showSymbol:void 0!==t.showSymbol&&t.showSymbol,smooth:void 0!==t.smooth&&t.smooth,itemStyle:{normal:{label:{show:void 0===t.lineLabelShow||t.lineLabelShow,fontSize:t.axisLabelSize?t.axisLabelSize:20,formatter:e.isRightAxis?"{c}%":"{c}"},color:t.colors&&t.colors.line?e.$STANDARD.getColor(t.colors.line[S],[0,1,1,0],s):""},emphasis:{label:{show:!0,fontSize:t.axisLabelSize?t.axisLabelSize:20},borderColor:t.colors&&t.colors.line?e.$STANDARD.colorToRgba(t.colors.line[S],.3):"rgba(255,255,255,.3)",borderWidth:20}},lineStyle:{color:t.colors&&t.colors.line?e.$STANDARD.getColor(t.colors.line[S++],[0,0,0,1],s):"",width:t.lineWidth?t.lineWidth:3,shadowBlur:t.lineShadowBlur?t.lineShadowBlur:0,shadowColor:t.lineShadowColor?t.lineShadowColor:"none",shadowOffsetY:t.lineShadowOffsetY?t.lineShadowOffsetY:0,opacity:t.lineOpacity?t.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:t.isAverage?"6.7%":"",yAxis:b},{symbol:"line",symbolSize:"0",x:"95%",yAxis:b}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:a}):d={name:n[o],type:"bar",stack:"stack"===t.mode?u:u++,yAxisIndex:0,xAxisIndex:"overlap"===t.mode&&o===t.overlap?1:0,barWidth:t.barWidth?t.barWidth:"auto",barGap:t.barGaps?t.barGaps:"50%",label:{show:void 0===t.barLabelShow||t.barLabelShow,position:t.barLabelOptions?t.barLabelOptions:t.isVertical?t.categoryInverse?"left":"right":"",fontSize:t.axisLabelSize?t.axisLabelSize:20,textStyle:{color:t.itemLabelColor?t.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===t.barBorderRadius?0:t.barBorderRadius,color:"overlap"!==t.mode||t.overlap!==o?t.colors&&t.colors.bar?t.colorisarry?function(e){var a=t.colors.bar?t.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return a[e.dataIndex]}:e.$STANDARD.getColor(t.colors.bar[v++],l,s):"":"transparent",borderColor:"overlap"===t.mode&&t.overlap===o?t.colors&&t.colors.bar?e.$STANDARD.getColor(t.colors.bar[v++],l,s):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===t.barLabelShow||t.barLabelShow,fontSize:t.axisLabelSize?t.axisLabelSize:20},itemStyle:{color:"#fefa82",borderColor:"#000",borderWidth:0,borderType:"solid",shadowOffsetX:0,shadowOffsetY:0,opacity:1}},data:e.params.data},p.push(d)}));var x,y=[{show:t.axisValueShow,type:"value",name:t.axis1Name?t.axis1Name:"",nameLocation:t.nameLocation?"start":"end",nameTextStyle:{color:t.YaxisNameColor?t.YaxisNameColor:"#ff517f",fontSize:t.axisLabelSize?t.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:t.splitNumber?t.splitNumber:5,position:t.isVertical&&t.axisValuePosition?"top":"bottom",inverse:t.categoryInverse,scale:!!t.isLeftScale,axisTick:{show:!1},axisLabel:{show:!t.isVertical||!t.axisLabel,margin:10,fontSize:14,color:function(e,a){var o=[],i=t.splitNumber?t.splitNumber:5;if(a<i){for(var l=0;l<i;l++)o.push(0);var r=Object(d["a"])(o,"#fdc48d","#ff517f");return r(a)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!t.isVertical||!t.splitLine)&&(void 0===t.splitLineShow?t.axisValueShow:t.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:t.axisValueShow,type:"value",name:t.axis2Name?t.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!t.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(r["a"])(a);try{for(w.s();!(x=w.n()).done;){var L=x.value;L.code?i.push({value:L[t.xName],id:L.code}):i.push(L[t.xName])}}catch(N){w.e(N)}finally{w.f()}var A=i.length>=100;t.isVertical&&(A=!1);var C=[{type:"category",data:i,inverse:!!t.isVertical,axisTick:{show:!1},position:t.categoryInverse?"right":"left",triggerEvent:!0,name:t.axisCategoryName?t.axisCategoryName:"",nameLocation:t.isVertical&&t.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:t.axisLabelSize?t.axisLabelSize:20},axisLabel:{interval:0,rotate:t.rotate?t.rotate:0,color:"#fff",inside:void 0!==t.XasisLabelInside&&t.XasisLabelInside,padding:t.XasisLabelPad?t.XasisLabelPad:0,fontSize:t.axisLabelSize?t.axisLabelSize:20,lineHeight:t.XaxisLabelLH?t.XaxisLabelLH:14,height:t.XaxisLabelH?t.XaxisLabelH:30,margin:15,formatter:function(e){var a="",o="";if(t.categoryBr){o="";for(var i=t.brNum?t.brNum:1,l=0;l<e.length;l++)o+=e[l],l%i==i-1&&(o+="\n");a=o}else a=e;return a}},axisLine:{show:!!t.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],D=[{show:A,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===t.tooltipShow||t.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:t.tooltipType?t.tooltipType:"shadow"},formatter:function(e){var o=e[0].name+"<br/>";if("overlap"===t.mode&&e.unshift(e.pop()),t.addTooltip){var i=e[0].name,l=a.filter((function(e){return e[t.xName]===i}))[0];for(var r in t.addTooltip)t.addTooltip.hasOwnProperty(r)&&e.push({seriesName:t.addTooltip[r],value:l[r]})}return e.forEach((function(e,a){e.seriesName.charAt(e.seriesName.length-1);o+="".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"%</br>")})),o}},legend:{show:t.legendShow,data:this.legendData,itemGap:t.legendGap?t.legendGap:10,top:t.legendPos?t.legendPos.top:"3%",right:t.legendPos?t.legendPos.right:"5%",itemWidth:t.legendW?t.legendW:25,itemHeight:t.legendH?t.legendH:14,icon:"undefined"===t.legendIcon?"rect":t.legendIcon,borderRadius:t.borderRadius?t.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:t.legendSize?t.legendSize:20,color:t.legendColor?t.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:t.left?t.left:"5%",right:t.right?t.right:"5%",top:t.top?t.top:"5%",bottom:A?"6%":t.bottom?t.bottom:"5%",containLabel:!0},label:{show:!0,position:t.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:t.isVertical?y:C,yAxis:t.isVertical?C:y,series:p,dataZoom:D,animation:this.animation,animationDelay:function(e){return 50*e}},this.myChart.setOption(this.option),this.myChart.on("click",(function(o){var t=e;"series"===o.componentType&&(o.allData={data:a,params:o},t.$emit("canvasClick",o.allData),t.$emit("departmentClick",o.name)),"yAxis"===o.componentType&&(o.name=o.value,i.filter((function(e){e.value==o.name&&(o.id=e.id)})),o.allData={data:a,params:o},t.$emit("canvasClick",o.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var e=this;this.myChart.on("legendselectchanged",(function(a){var o=e.params.options,i=a.selected;e.$emit("changeLegend",i),"overlap"===o.mode&&(a.name===o.map[o.overlap]&&e.legendActive?(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,o){"object"===Object(l["a"])(a)&&(e.legendData[o].icon="image://".concat(e.inActiveLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})):a.name!==o.map[o.overlap]||e.legendActive||(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,o){"object"===Object(l["a"])(a)&&(e.legendData[o].icon="image://".concat(e.activeLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})))}))}},watch:{animateFlag:{handler:function(e,a){this.init()},deep:!0},"params.data":{handler:function(e,a){this.init()},deep:!0}}},h=c,g=o("2877"),m=Object(g["a"])(h,i,t,!1,null,"bef7584a",null);a["a"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0e6688.b9ca91d2.js.map