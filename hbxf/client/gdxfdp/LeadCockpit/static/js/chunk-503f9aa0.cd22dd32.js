(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-503f9aa0"],{"034e":function(t,e,a){},"089d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"typeChange"},t._l(t.arr,(function(e,i){return a("li",{key:i,class:t.curType===e.name?"active":"",on:{click:function(a){return t.changeType(e)}}},[t._v(t._s(e.name)+" ")])})),0)},o=[],n=(a("b0c0"),{name:"index",data:function(){return{arr:[{name:"信访量",id:"信访量"},{name:"满意率-信访部门",id:"满意率-信访部门"},{name:"满意率-责任部门",id:"满意率-责任部门"},{name:"化解率",id:"化解率"}],curType:"信访量",curTypeId:"信访量"}},methods:{changeType:function(t){this.curType=t.name,this.curTypeId=t.id,this.$emit("change",this.curTypeId)}}}),r=n,s=(a("a956"),a("2877")),l=Object(s["a"])(r,i,o,!1,null,"f58469d4",null);e["a"]=l.exports},"13d5":function(t,e,a){"use strict";var i=a("23e7"),o=a("d58f").left,n=a("a640"),r=a("ae40"),s=n("reduce"),l=r("reduce",{1:0});i({target:"Array",proto:!0,forced:!s||!l},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"4c1e":function(t,e,a){},5903:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[i("div",{ref:"chartEl",style:{width:t.canvasStyle.width,height:t.canvasStyle.height}}),t.params.data.length&&t.params.options.bgSize?i("img",{staticClass:"bg",style:{left:t.params.options.center[0],top:t.params.options.center[1],width:t.params.options.bgSize+"px",height:t.params.options.bgSize+"px"},attrs:{src:a("c68a"),alt:""}}):t._e()])},o=[],n=(a("99af"),a("4160"),a("fb6a"),a("b0c0"),a("a9e3"),a("159b"),a("3eba"));a("c037"),a("007d"),a("627c"),a("d28f");var r={name:"PieW",data:function(){return{interval:null,rollFlag:!1,myChart:null}},props:{animateFlag:Boolean,defaultHigh:{type:Number},params:{type:Object,default:function(){return{data:[],canvasStyle:{width:"500px",height:"500px"},options:{radius:["30%","60%"],center:["50%","50%"],length:60,length2:60,bRichPadding:[30,-50,0,-50],roseType:"area",labelSize:14,borderWidth:10,borderColor:"#fff",legend:{show:!0,left:10,top:240,itemidth:14,itemHeight:14,orient:"vertical",fontSize:14},tooltip:{show:!0},rich:{bfontsize:16,perfontsize:24},colors:[],rollFlag:!1,itemLabelShow:!0,itemEmphasisLabelShow:!0,defaultHigh:0}}}}},created:function(){var t=this;this.$nextTick((function(){t.init()}))},mounted:function(){var t=this;this.init(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{init:function(){var t=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var e=this.params.data,a=this.params.options,i=[],o=0,r=0;if(r=Number(a.radius[0].substring(0,a.radius[0].length-1))-4,o=r-1,i=[o+"%",r+"%"],this.myChart=n.init(this.$refs.chartEl),this.myChart.setOption({title:{text:a.title?a.title:"",textStyle:{color:"#fff",fontSize:"18%"},x:"center",y:"bottom"},tooltip:{show:!a.tooltip||(void 0===a.tooltip.show||a.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],textStyle:{color:this.$STANDARD.tooltipColor},position:!1===a.labelShow?["33%","35%"]:null,formatter:function(t){return t.name?"".concat(t.marker).concat(t.name," : ").concat(t.value):""}},legend:{show:!!a.legend&&a.legend.show,selectedMode:void 0===a.legend.selectedMode||a.legend.selectedMode,left:a.legend&&a.legend.left?a.legend.left:"left",top:a.legend&&a.legend.top?a.legend.top:"top",itemWidth:a.legend.itemWidth?a.legend.itemWidth:14,itemHeight:a.legend.itemHeight?a.legend.itemHeight:14,textStyle:{fontSize:a.legend.fontSize?a.legend.fontSize:this.$STANDARD.h4.fontSize,color:a.legend?a.legend.color:this.$STANDARD.legendColor},icon:"circle",itemGap:15,orient:a.legend&&a.legend.orient?a.legend.orient:"vertical"},series:[{name:"分析",type:"pie",center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:void 0===a.radius?["0%","60%"]:a.radius,minAngle:6,label:{normal:{show:!1,position:"center",formatter:function(t){if(t.name.length>7)return"{b|".concat(t.name.slice(0,6),"\n").concat(t.name.slice(6,t.name.length),"}\n{d|").concat(t.percent,"%}");var e="";return e=a.threeLevel?"{b|".concat(t.value,"}\n{b|").concat(t.name,"}\n{d|").concat(t.percent,"%}"):"{b|".concat(t.name,"}\n{d|").concat(t.percent,"%}"),e},rich:{d:{fontSize:a.labelRich&&a.labelRich.d?a.labelRich.d:this.fontSize(.22),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.dHeight?a.labelRich.dHeight:this.fontSize(.4),color:"#e03562"},b:{fontSize:a.labelRich&&a.labelRich.b?a.labelRich.b:this.fontSize(.2),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.bHeight?a.labelRich.bHeight:this.fontSize(.4),color:function(t){return Array.isArray(a.colors[t.dataIndex])?a.colors[t.dataIndex][0]:a.colors[t.dataIndex]}}}},emphasis:{show:!0}},itemStyle:{borderColor:a.borderColor?a.borderColor:"transparent",borderWidth:a.borderWidth?a.borderWidth:0,color:function(t){return Array.isArray(a.colors[t.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[t.dataIndex][0]},{offset:1,color:a.colors[t.dataIndex][1]}],global:!1}:a.colors[t.dataIndex]}},labelLine:{length:a.length?a.length:10,length2:a.length2?a.length2:10},data:e},{type:"pie",hoverAnimation:!1,center:a.center||["50%","50%"],radius:i,data:[100],label:{show:!1},itemStyle:{normal:{color:"#0e90cc"},emphasis:{show:!1}}}]}),this.rollFlag=this.params.options.rollFlag,this.myChart.on("click",(function(e){"series"===e.componentType?(t.$emit("departmentClick",e.name),e.allData={data:t.params.data,params:e},t.$emit("canvasClick",e.allData)):t.$emit("departmentClick",e.value)})),this.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(e){1!==e.seriesIndex&&(t.rollFlag=!1,e.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}))})),this.myChart.on("mouseout",(function(e){t.rollFlag=!0}));else{var s=this.defaultHigh;if(""!==s&&void 0!==s){this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s});var l=this;l.myChart.on("mouseover",(function(t){for(var a=e.length,i=0;i<a;i++)i!=t.dataIndex&&l.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:i})})),l.myChart.on("mouseout",(function(t){l.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s})}))}}}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var e=t.params.data.length;t.rollFlag&&(t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%e,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)},fontSize:function(t){document.documentElement;var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var a=e/1920*100;return t*a}}},computed:{sum:function(){var t=0;return this.params.data.forEach((function(e){t+=e.value})),t},ishow:function(){return!1!==this.params.options.labelShow&&!1!==this.params.options.showsum},canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"100%",height:this.params.canvasStyle?this.params.canvasStyle.height:"100%"}}},watch:{"params.data":{handler:function(t,e){this.init()},deep:!0}}},s=r,l=(a("7e59"),a("2877")),c=Object(l["a"])(s,i,o,!1,null,"5d89441e",null);e["a"]=c.exports},"5eb8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.data.length,expression:"!data.length"}],staticClass:"yjzt-wrapper",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[a("div",{staticClass:"part part1"},[a("p",{staticClass:"label"},[t._v(t._s(t.data[0].name))]),a("div",{class:["btn",t.btnColor]},[t._v(t._s(t.data[0].value))])]),a("div",{staticClass:"part part2"},[a("p",{staticClass:"label"},[t._v(t._s(t.data[1].name))]),a("allCount",{staticClass:"all-count",attrs:{count:t.data[1].value}})],1),a("div",{staticClass:"part part3"},[a("p",{staticClass:"label"},[t._v(t._s(t.data[2].name))]),a("div",{staticClass:"inner"},[a("span",{staticClass:"per"},[t._v(t._s((100*t.data[2].value).toFixed(2))+"%")]),a("i",{class:["icon",t.data[2].value>0?"up-icon":"down-icon"]})])]),a("div",{staticClass:"part part4"},[a("p",{staticClass:"label"},[t._v(t._s(t.data[3].name))]),a("div",{staticClass:"inner"},[a("span",{staticClass:"per"},[t._v(t._s((100*t.data[3].value).toFixed(2))+"%")]),a("i",{class:["icon",t.data[3].value>0?"up-icon":"down-icon"]})])])])},o=[],n=a("8d3a"),r={name:"index",components:{allCount:n["a"]},props:{data:{type:Array,default:[{name:"预警状态",value:"告警"},{name:"未来一周信访量",value:-1},{name:"同比",value:0},{name:"环比",value:0}]}},computed:{btnColor:function(){return"平稳"===this.data[0].value?"btn-blue":"异常"===this.data[0].value?"btn-yellow":"告警"===this.data[0].value?"btn-red":void 0}}},s=r,l=(a("800b"),a("2877")),c=Object(l["a"])(s,i,o,!1,null,"110abd66",null);e["a"]=c.exports},"7a77":function(t,e,a){},"7e59":function(t,e,a){"use strict";var i=a("a721"),o=a.n(i);o.a},"800b":function(t,e,a){"use strict";var i=a("034e"),o=a.n(i);o.a},"8d3a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[t.count>=0?a("div",{staticClass:"inner"},[a("incNumber",{staticClass:"number",attrs:{incNumber:t.count}}),a("span",{staticClass:"unit"},[t._v("件 次")])],1):t._e()])},o=[],n=(a("a9e3"),a("d3b7"),a("25f0"),a("ad97")),r={name:"allCount",components:{incNumber:n["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:1}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},s=r,l=(a("b1b2"),a("2877")),c=Object(l["a"])(s,i,o,!1,null,"a3ea9bf4",null);e["a"]=c.exports},"992d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},o=[],n=(a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("13d5"),a("b0c0"),a("b64b"),a("07ac"),a("ac1f"),a("8a79"),a("2532"),a("1276"),a("159b"),a("53ca")),r=a("b85c"),s=a("2909"),l=a("313e"),c=a("dd01"),h={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var t=this;this.init(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{init:function(){var t=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var e=Object(s["a"])(this.params.data),i=[],o=this.params.options,n=o.isVertical?[0,1,1,0]:[0,0,0,1],h=Object.keys(o.map),d=!!o.line&&o.line.length===h.length;if(this.legendData=Object.values(o.map),"overlap"===o.mode&&o.legendBgSrc){var m=o.legendBgSrc.active,p=o.legendBgSrc.inActive;this.activeLegendBg=a("9e01")("./".concat(m,".png")),this.inActiveLegendBg=a("9e01")("./".concat(p,".png")),this.legendData.forEach((function(e,a){o.map[o.overlap]===e&&(t.legendData[a]={name:e,icon:void 0===t.params.legendActive||t.params.legendActive[e]?"image://".concat(t.activeLegendBg):"image://".concat(t.inActiveLegendBg)})}))}var u=[],f=0,g={};o.tooltipPercent&&e.forEach((function(t){g[t[o.xName]]=[]})),o.tooltipPercent&&e.forEach((function(t,e){var a=t[o.xName];for(var i in t)"name"!==i&&"genre"!==i&&g[a].push(t[i].split("|")[1])}));var b=0,v=0,x=1;h.forEach((function(a,i){var r=[],s=o.map;e.forEach((function(t){o.tooltipPercent?r.push(t[a].split("|")[0]):r.push(t[a])})),f=o.isAverage?r.reduce((function(t,e){return+t+ +e}))/e.length:0;var c={};o.line&&o.line.includes(a)?(t.isRightAxis=s[a].endsWith("比")||s[a].endsWith("度")||s[a].endsWith("率"),c={name:s[a],type:"line",yAxisIndex:d?0:t.isRightAxis?1:0,label:{show:!1},symbolSize:o.symbolSize?o.symbolSize:5,symbol:"circle",showSymbol:void 0!==o.showSymbol&&o.showSymbol,smooth:void 0!==o.smooth&&o.smooth,itemStyle:{normal:{label:{show:void 0===o.lineLabelShow||o.lineLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20,formatter:t.isRightAxis?"{c}%":"{c}"},color:o.colors&&o.colors.line?t.$STANDARD.getColor(o.colors.line[b],[0,1,1,0],l):""},emphasis:{label:{show:!0,fontSize:o.axisLabelSize?o.axisLabelSize:20},borderColor:o.colors&&o.colors.line?t.$STANDARD.colorToRgba(o.colors.line[b],.3):"rgba(255,255,255,.3)",borderWidth:20}},lineStyle:{color:o.colors&&o.colors.line?t.$STANDARD.getColor(o.colors.line[b++],[0,0,0,1],l):"",width:o.lineWidth?o.lineWidth:3,shadowBlur:o.lineShadowBlur?o.lineShadowBlur:0,shadowColor:o.lineShadowColor?o.lineShadowColor:"none",shadowOffsetY:o.lineShadowOffsetY?o.lineShadowOffsetY:0,opacity:o.lineOpacity?o.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:o.isAverage?"6.7%":"",yAxis:f},{symbol:"line",symbolSize:"0",x:"95%",yAxis:f}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:e}):c={name:s[a],type:"bar",stack:"stack"===o.mode?x:x++,yAxisIndex:0,xAxisIndex:"overlap"===o.mode&&a===o.overlap?1:0,barWidth:o.barWidth?o.barWidth:"auto",barGap:o.barGaps?o.barGaps:"50%",label:{show:void 0===o.barLabelShow||o.barLabelShow,position:o.barLabelOptions?o.barLabelOptions:o.isVertical?o.categoryInverse?"left":"right":"",fontSize:o.axisLabelSize?o.axisLabelSize:20,textStyle:{color:o.itemLabelColor?o.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===o.barBorderRadius?0:o.barBorderRadius,color:"overlap"!==o.mode||o.overlap!==a?o.colors&&o.colors.bar?o.colorisarry?function(t){var e=o.colors.bar?o.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return e[t.dataIndex]}:t.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderColor:"overlap"===o.mode&&o.overlap===a?o.colors&&o.colors.bar?t.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===o.barLabelShow||o.barLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20},itemStyle:{color:"#fefa82",borderColor:"#000",borderWidth:0,borderType:"solid",shadowOffsetX:0,shadowOffsetY:0,opacity:1}},data:t.params.data},u.push(c)}));var y,S=[{show:o.axisValueShow,type:"value",name:o.axis1Name?o.axis1Name:"",nameLocation:o.nameLocation?"start":"end",nameTextStyle:{color:o.YaxisNameColor?o.YaxisNameColor:"#ff517f",fontSize:o.axisLabelSize?o.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:o.splitNumber?o.splitNumber:5,position:o.isVertical&&o.axisValuePosition?"top":"bottom",inverse:o.categoryInverse,scale:!!o.isLeftScale,axisTick:{show:!1},axisLabel:{show:!o.isVertical||!o.axisLabel,margin:10,fontSize:14,color:function(t,e){var a=[],i=o.splitNumber?o.splitNumber:5;if(e<i){for(var n=0;n<i;n++)a.push(0);var r=Object(c["a"])(a,"#fdc48d","#ff517f");return r(e)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!o.isVertical||!o.splitLine)&&(void 0===o.splitLineShow?o.axisValueShow:o.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:o.axisValueShow,type:"value",name:o.axis2Name?o.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!o.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(r["a"])(e);try{for(w.s();!(y=w.n()).done;){var C=y.value;C.code?i.push({value:C[o.xName],id:C.code}):i.push(C[o.xName])}}catch(z){w.e(z)}finally{w.f()}var A=i.length>=100;o.isVertical&&(A=!1);var L=[{type:"category",data:i,inverse:!!o.isVertical,axisTick:{show:!1},position:o.categoryInverse?"right":"left",triggerEvent:!0,name:o.axisCategoryName?o.axisCategoryName:"",nameLocation:o.isVertical&&o.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:o.axisLabelSize?o.axisLabelSize:20},axisLabel:{interval:0,rotate:o.rotate?o.rotate:0,color:"#fff",inside:void 0!==o.XasisLabelInside&&o.XasisLabelInside,padding:o.XasisLabelPad?o.XasisLabelPad:0,fontSize:o.axisLabelSize?o.axisLabelSize:20,lineHeight:o.XaxisLabelLH?o.XaxisLabelLH:14,height:o.XaxisLabelH?o.XaxisLabelH:30,margin:15,formatter:function(t){var e="",a="";if(o.categoryBr){a="";for(var i=o.brNum?o.brNum:1,n=0;n<t.length;n++)a+=t[n],n%i==i-1&&(a+="\n");e=a}else e=t;return e}},axisLine:{show:!!o.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],j=[{show:A,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=l["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===o.tooltipShow||o.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:o.tooltipType?o.tooltipType:"shadow"},formatter:function(t){var a=t[0].name+"<br/>";if("overlap"===o.mode&&t.unshift(t.pop()),o.addTooltip){var i=t[0].name,n=e.filter((function(t){return t[o.xName]===i}))[0];for(var r in o.addTooltip)o.addTooltip.hasOwnProperty(r)&&t.push({seriesName:o.addTooltip[r],value:n[r]})}return t.forEach((function(t,e){t.seriesName.charAt(t.seriesName.length-1);a+="".concat(t.marker).concat(t.seriesName," : ").concat(t.value,"%</br>")})),a}},legend:{show:o.legendShow,data:this.legendData,itemGap:o.legendGap?o.legendGap:10,top:o.legendPos?o.legendPos.top:"3%",right:o.legendPos?o.legendPos.right:"5%",itemWidth:o.legendW?o.legendW:25,itemHeight:o.legendH?o.legendH:14,icon:"undefined"===o.legendIcon?"rect":o.legendIcon,borderRadius:o.borderRadius?o.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:o.legendSize?o.legendSize:20,color:o.legendColor?o.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:o.left?o.left:"5%",right:o.right?o.right:"5%",top:o.top?o.top:"5%",bottom:A?"6%":o.bottom?o.bottom:"5%",containLabel:!0},label:{show:!0,position:o.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:o.isVertical?S:L,yAxis:o.isVertical?L:S,series:u,dataZoom:j,animation:this.animation,animationDelay:function(t){return 50*t}},this.myChart.setOption(this.option),this.myChart.on("click",(function(a){var o=t;"series"===a.componentType&&(a.allData={data:e,params:a},o.$emit("canvasClick",a.allData),o.$emit("departmentClick",a.name)),"yAxis"===a.componentType&&(a.name=a.value,i.filter((function(t){t.value==a.name&&(a.id=t.id)})),a.allData={data:e,params:a},o.$emit("canvasClick",a.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var t=this;this.myChart.on("legendselectchanged",(function(e){var a=t.params.options,i=e.selected;t.$emit("changeLegend",i),"overlap"===a.mode&&(e.name===a.map[a.overlap]&&t.legendActive?(t.legendActive=!t.legendActive,t.legendData.forEach((function(e,a){"object"===Object(n["a"])(e)&&(t.legendData[a].icon="image://".concat(t.inActiveLegendBg))})),t.myChart.setOption({legend:{data:t.legendData}})):e.name!==a.map[a.overlap]||t.legendActive||(t.legendActive=!t.legendActive,t.legendData.forEach((function(e,a){"object"===Object(n["a"])(e)&&(t.legendData[a].icon="image://".concat(t.activeLegendBg))})),t.myChart.setOption({legend:{data:t.legendData}})))}))}},watch:{animateFlag:{handler:function(t,e){this.init()},deep:!0},"params.data":{handler:function(t,e){this.init()},deep:!0}}},d=h,m=a("2877"),p=Object(m["a"])(d,i,o,!1,null,"bef7584a",null);e["a"]=p.exports},a721:function(t,e,a){},a956:function(t,e,a){"use strict";var i=a("dc7e"),o=a.n(i);o.a},aca2:function(t,e,a){"use strict";var i=a("4c1e"),o=a.n(i);o.a},ad97:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"incNumber"},[t._v(t._s(t.number))])},o=[],n=(a("a9e3"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(t){var e=this;t=t||{};var a,i,o=t.time||10,n=void 0===t.num?0:t.num,r=t.regulator||100,s=n/(o/r),l=0,c=0;n%1!==0&&(a=String(n).split("."),i=a[1].length);var h=setInterval((function(){l+=s,l>=n&&(clearInterval(h),l=n);var t=0;t=n%1===0?Math.floor(l):l.toFixed(i),t!==c&&(c=t,e.number=c)}),50)},formatMoney:function(t,e){if(/[^0-9\.]/.test(t))return"0.00";if(null==t||"null"==t||""==t)return"0.00";t=t.toString().replace(/^(\d*)$/,"$1."),t=(t+"00").replace(/(\d*\.\d\d)\d*/,"$1"),t=t.replace(".",",");var a=/(\d)(\d{3},)/;while(a.test(t))t=t.replace(a,"$1,$2");if(t=t.replace(/,(\d\d)$/,".$1"),0==e){var i=t.split(".");"00"==i[1]&&(t=i[0])}return t}},watch:{incNumber:{handler:function(t,e){this.number=t,this.init()},deep:!0}}}),r=n,s=(a("aca2"),a("2877")),l=Object(s["a"])(r,i,o,!1,null,"28b38ba0",null);e["a"]=l.exports},ade3:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return i}))},b1b2:function(t,e,a){"use strict";var i=a("7a77"),o=a.n(i);o.a},b25c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"content"},[a("div",{staticClass:"c-top"},[a("div",{staticClass:"w-left w-charts"},[a("ctitle",{attrs:{title:"区划排名"}}),a("div",{staticClass:"w-left-bt"},[a("div",{staticClass:"charts-leftBar"},[a("qhpmBtn",{on:{change:t.changeType}})],1),t.countyBackShow?a("div",{staticClass:"map-back",on:{click:t.mapBack}}):t._e(),a("div",{staticClass:"charts"},[a("barline",{attrs:{params:t.xflphBarParams},on:{departmentClick:t.openCounty}})],1)])],1),a("div",{staticClass:"w-right"},[a("div",{staticClass:"w-right-data"},[t.yjztData.length?a("yjzt",{attrs:{data:t.yjztData}}):t._e()],1)])]),a("div",{staticClass:"c-bottom"},[a("div",{staticClass:"w-left"},[a("ctitle",{attrs:{title:"信坊量走势"}}),a("lineMonth",{attrs:{params:t.zsLineParams}})],1),a("div",{staticClass:"w-right"},[a("div",{staticClass:"w-right-l"},[a("ctitle",{attrs:{title:"内容分类分布"}}),a("div",{staticClass:"inner"},[a("loopPie",{staticClass:"chart",attrs:{params:t.tswtPieParams}})],1)],1),a("div",{staticClass:"w-right-r"},[a("ctitle",{attrs:{title:"信访目的分布"}}),a("div",{staticClass:"inner"},[a("pie-chart3D",{staticClass:"chart",attrs:{params:t.xfmdzbPieParams}})],1)],1)])])])])},o=[],n=(a("99af"),a("4160"),a("b0c0"),a("159b"),a("ade3")),r=a("365c"),s=a("9539"),l=a("5903"),c=a("992d"),h=a("840a"),d=a("caee"),m=a("5eb8"),p=a("089d"),u={name:"jjf",components:{qhpmBtn:p["a"],ctitle:s["a"],loopPie:l["a"],PieChart3D:h["a"],barline:c["a"],lineMonth:d["a"],yjzt:m["a"]},data:function(){var t;return t={countyBackShow:!1,curCity:"广东省",shijCity:"",curName:"drop",yjzt:"告警",yjztData:[],percentage:21,listScroll:null,shij_02:"invalid",xj_02:"invalid",xflphBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,categoryBr:!0,axis1Name:"人次",axisLabelSize:14,left:"0%",right:"5%",top:"5%",bottom:"0%",barLabelOptions:"top",barWidth:"40%",barBorderRadius:5,splitLineShow:!1,barLabelShow:!1,axisLabelColor:"rgba(0, 176, 255, .8)",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#fa71cd","#c471f5"]]},map:{value:"数量"}}},day:"",xfjc:"",zsLineParams:{data:[],colors:[{line:"rgba(220, 150, 209, 0.3)",start:"rgba(220, 150, 209, 0.3)",end:"rgba(220, 150, 209, 0.1)"}],option:{splitLineShow:!0,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"月",axisYName:"",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"8%",right:"15%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{value:"数量"},xName:"name"},yjnr:""},Object(n["a"])(t,"xfjc",""),Object(n["a"])(t,"tswtPieParams",{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.pieColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.18),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"24%",rollFlag:!0,threeLevel:!0}}),Object(n["a"])(t,"xfmd",""),Object(n["a"])(t,"xfmdzbPieParams",{data:[],color:this.$STANDARD.pieColors,angle:20,radius:"30%",labelRadius:30,styleObj:{width:"100%",height:"100%"},isBr:!0,labelPer:!0}),Object(n["a"])(t,"mapJson",{"广东省":"440000","广州市":"440100","韶关市":"440200","深圳市":"440300","珠海市":"440400","汕头市":"440500","佛山市":"440600","江门市":"440700","湛江市":"440800","茂名市":"440900","肇庆市":"441200","惠州市":"441300","梅州市":"441400","汕尾市":"441500","河源市":"441600","阳江市":"441700","清远市":"441800","东莞市":"441900","中山市":"442000","潮州市":"445100","揭阳市":"445200","云浮市":"445300"}),t},mounted:function(){this.getAPIAndMap(this.date)},methods:{getAPIAndMap:function(t){this.getColumnCharts(t),this.getAPI(t)},changeType:function(t){this.curTypeId=t,this.getColumnCharts(this.curTypeId)},getColumnCharts:function(t,e){var a=this;"广东省"===this.curCity?(this.shej_02=this.curCity,this.shij_02="invalid",this.xj_02="invalid",this.nameP="shij_02"):this.shijCity?(this.shej_02="广东省",this.shij_02=this.shijCity,this.nameP="xj_02","invalid"!==this.xj_02?(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02=this.curCity):(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02="invalid")):(this.shej_02="广东省",this.shijCity="invalid",this.xj_02="invalid",this.nameP="invalid"),Object(r["a"])("xfsxyjjtfqhpm",{shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,name:this.nameP,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){var e={color:"#fefa82"};t.data.data.forEach((function(i,o){a.curCity===i.name?(a.countyBackShow=!0,t.data.data[o].itemStyle=e):a.xflphBarParams.data=t.data.data}))})).catch((function(t){console.log(t)}))},openCounty:function(t){var e=this;this.curCity=t;var a={color:"#fefa82"};this.xflphBarParams.data.forEach((function(t,i){e.curCity==t.name?(e.countyBackShow=!0,e.$set(t,"itemStyle",a)):e.$delete(t,"itemStyle")}))},mapBack:function(){this.countyBackShow=!1,this.curCity="广东省"},getAPI:function(t){var e=this;Object(r["a"])("xfsxyjjjfyjzt",{shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.yjztData=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("xfsxyjjjfxxlzs",{name:this.day,xfjc:this.xfjc,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.zsLineParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("xfsxyjjjfnrflfb",{yjnr:this.yjnr,xfjc:this.xfjc,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.tswtPieParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("xfsxyjjjfxfmdfb",{xfmd:this.xfmd,xfjc:this.xfjc,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.xfmdzbPieParams.data=t.data.data})).catch((function(t){console.log(t)}))},fontSize:function(t){document.documentElement;var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var a=e/1920*100;return t*a}}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(t){this.getAPIAndMap(this.date)},curCity:function(t,e){if("广东省"===t)this.getAPIAndMap(this.date);else{var a="";for(var i in this.mapJson)t===i&&(this.shijCity=t,a=t,this.getAPIAndMap(this.date));a||(this.xj_02=t,console.log("this.xj_02 ",this.xj_02),this.getAPI(this.date))}}}},f=u,g=(a("d2ab"),a("2877")),b=Object(g["a"])(f,i,o,!1,null,"7e88bd44",null);e["default"]=b.exports},caee:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},o=[],n=(a("99af"),a("4160"),a("a15b"),a("d81d"),a("b0c0"),a("b680"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("1276"),a("159b"),a("ddb0"),a("3835")),r=a("b85c"),s=a("313e"),l=a("dd01"),c={name:"lineMonth",props:{animateFlag:Boolean,maps:Object,params:{type:Object,dafault:function(){return{canvasStyle:{width:"100%",height:"100%"},data:[],option:{legendShow:!0,legendfontSize:14,XaxisLineShow:!1,xaxisLineColor:"rgba(255,255,255,0.1)",axisLabelShow:!1,axisLabelFontSize:12,yaxisLabelFontSize:14,yaxisLabelColor:"#fff",axisLabelColor:"#fff",boundaryGap:!0,xAxisBr:!1,YaxisLineShow:!0,yaxisLineColor:"rgba(255,255,255,0.1)",YaxisaxisLabelShow:!0,scales:!0,lineWidth:2,Lcolor:"red",splitLineShow:!0,axisTickShow:!0,showK:!0,legenditemWidth:100,dataZoomshow:!1,dataZoomstart:0,dataZoomend:100,legendTop:"5%",showSymbol:!0,axisCategoryName:"",nameLocation:"start",XaxisNameColor:"#fff",axisLabelSize:16,legendItemgap:20},colors:[]}}}},data:function(){return{colors:[{line:"rgba(209, 48, 20, 1)",start:"rgba(62, 73, 67, .3)",end:"rgba(78, 173, 254, 0)"},{line:"rgba(29, 209, 200, 1)",start:"rgba(242, 104, 210, .3)",end:"rgba(188, 60, 113, 0)"},{line:"rgba(208, 45, 222, 1)",start:"rgba(208, 45, 222, .3)",end:"rgba(101, 30, 206, 0)"},{line:"rgba(162, 227, 105, 1)",start:"rgba(162, 227, 105, .3)",end:"rgba(60, 234, 166, 0)"},{line:"rgba(240, 151, 26, 1)",start:"rgba(240, 151, 26, .3)",end:"rgba(255, 88, 88, 0)"}]}},mounted:function(){this.init()},methods:{init:function(){var t=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var e=this.params.option,a=this.params.data,i={};i=this.maps?this.maps:this.params.map;var o=Object.keys(i),c=Object.values(i),h=[],d=[],m=[],p=[];o.forEach((function(t){d[t]=[]}));var u,f=Object(r["a"])(a.entries());try{var g=function(){var e=Object(n["a"])(u.value,2),a=(e[0],e[1]);h.push(a[t.params.xName]),o.forEach((function(t){p.push(a[t]),d[t].push(a[t])}))};for(f.s();!(u=f.n()).done;)g()}catch(v){f.e(v)}finally{f.f()}Math.max.apply(Math,p);var b=Math.min.apply(Math,p)-100;b<0&&(b=0),o.forEach((function(a,o){var n={name:i[a],type:"line",smooth:void 0!==e.smooth&&e.smooth,smoothMonotone:e.smooth&&e.smoothMonotone?e.smoothMonotone:"none",symbolSize:10,symbol:"circle",hoverAnimation:!1,showSymbol:void 0===e.showSymbol||e.showSymbol,itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:t.params.colors[o].line},emphasis:{color:t.params.colors[o].line,borderColor:t.params.colors[o].start,borderWidth:12}},lineStyle:{width:void 0===e.lineWidth?3:e.lineWidth,color:t.params.colors[o].line},areaStyle:{normal:{opacity:void 0===e.areaShow||e.areaShow,color:new s["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:t.params.colors[o].start},{offset:1,color:t.params.colors[o].end}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},data:d[a]};m.push(n)})),this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:function(t){var a=t[0].name+e.axisCategoryName+"<br/>";return t.forEach((function(t,i){t.seriesName.charAt(t.seriesName.length-1);"%"===e.axisYName?a+="".concat(t.marker," ").concat(t.seriesName," : ").concat((100*t.value).toFixed(2),"%</br>"):a+="".concat(t.marker," ").concat(t.seriesName," : ").concat(t.value,"</br>")})),a}},grid:{left:e.left?e.left:"6%",right:e.right?e.right:"6%",bottom:e.bottom?e.bottom:"6%",top:e.top?e.top:"6%",containLabel:!0},label:{show:!1,position:"top",color:"#fff",fontSize:14,zlevel:10},emphasis:{label:{show:!1,formatter:function(t){var e=t.seriesName.charAt(t.seriesName.length-1);return"比"==e||"率"==e?t.value.toFixed(2)+"%":t.value.toLocaleString()}}},legend:{icon:e.legendIcon?e.legendIcon:"roundRect",show:void 0===e.legendShow||e.legendShow,itemWidth:20,itemHeight:5,color:"#fff",itemGap:e.legendItemgap?e.legendItemgap:20,right:e.legendRight?e.legendRight:"5%",top:e.legendTop?e.legendTop:"2%",textStyle:{color:"#fff",fontSize:e.legendfontSize?e.legendfontSize:18},data:c},xAxis:[{type:"category",boundaryGap:void 0!==e.boundaryGap&&e.boundaryGap,triggerEvent:!0,interval:1,data:h,name:e.axisCategoryName?e.axisCategoryName:"",nameLocation:e.nameLocation?"start":"end",nameTextStyle:{color:e.XaxisNameColor?e.XaxisNameColor:"#fff",fontSize:e.axisLabelSize?e.axisLabelSize:20},axisLabel:{show:!!e.axisLabelShow,margin:10,fontSize:16,color:this.$STANDARD.xAxisColor,formatter:function(t){return e.xAxisBr?t.split("").join("\n"):t}},axisLine:{show:!0,lineStyle:{width:2,color:this.$STANDARD.xAxisLineColor}},axisTick:{alignWithLabel:!0,show:!!e.axisTickShow,inside:!0}}],yAxis:[{type:"value",name:e.axisYName?e.axisYName:"",nameLocation:e.nameLocation?"start":"end",nameTextStyle:{color:e.YaxisNameColor?e.YaxisNameColor:"#ff517f",fontSize:e.axisLabelSize?e.axisLabelSize:20,fontWeight:"bold",padding:[0,45,0,0]},scale:!e.scales,max:void 0===this.params.axisMax?null:this.params.axisMax,min:void 0===this.params.axisMin?null:this.params.axisMin,splitNumber:e.splitNumber?e.splitNumber:5,axisLabel:{show:!e.YaxisaxisLabelShow,margin:10,fontSize:14,color:function(t,a){var i=[],o=e.splitNumber?e.splitNumber:10;if(a<o){for(var n=0;n<o;n++)i.push(0);var r=Object(l["a"])(i,"#85DEFF","#85DEFF");return r(a)}return"#ff517f"},formatter:function(t){return"%"===e.axisYName?100*t:t}},axisLine:{show:!!e.YaxisLineShow,width:2,type:"dotted",color:this.$STANDARD.yAxisSplitLineColor},axisTick:{show:!1},splitLine:{show:!!e.splitLineShow,lineStyle:{type:"dashed",color:"#2c344c"}}}],dataZoom:{show:!!e.dataZoomshow,realtime:!0,fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",showDetail:!1,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"100%",bottom:0,height:20,start:e.dataZoomstart?e.dataZoomstart:0,end:e.dataZoomend?e.dataZoomend:100},series:m},this.myChart.setOption(this.option),this.params.option.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",(function(e){t.params.option.rollFlag=!1,e.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex})})),this.myChart.on("mouseout",(function(e){t.params.option.rollFlag=!0}))),this.myChart.on("click",(function(e){"series"===e.componentType?t.$emit("departmentClick",e.name):t.$emit("departmentClick",e.value)}))}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var e=t.params.data.length;t.params.option.rollFlag&&(t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%e,t.myChart.dispatchAction({type:"highlight",dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)}},computed:{},watch:{animateFlag:{handler:function(t,e){this.init()},deep:!0},"params.data":{handler:function(t,e){this.init()},deep:!0}}},h=c,d=a("2877"),m=Object(d["a"])(h,i,o,!1,null,"6d0704a0",null);e["a"]=m.exports},d2ab:function(t,e,a){"use strict";var i=a("d533"),o=a.n(i);o.a},d533:function(t,e,a){},d58f:function(t,e,a){var i=a("1c0b"),o=a("7b0b"),n=a("44ad"),r=a("50c4"),s=function(t){return function(e,a,s,l){i(a);var c=o(e),h=n(c),d=r(c.length),m=t?d-1:0,p=t?-1:1;if(s<2)while(1){if(m in h){l=h[m],m+=p;break}if(m+=p,t?m<0:d<=m)throw TypeError("Reduce of empty array with no initial value")}for(;t?m>=0:d>m;m+=p)m in h&&(l=a(l,h[m],m,c));return l}};t.exports={left:s(!1),right:s(!0)}},dc7e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-503f9aa0.cd22dd32.js.map