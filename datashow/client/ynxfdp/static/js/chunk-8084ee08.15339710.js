(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8084ee08"],{"040f":function(t,e,a){"use strict";var i=a("233e"),n=a.n(i);n.a},"134a":function(t,e,a){"use strict";var i=a("770f"),n=a.n(i);n.a},"233e":function(t,e,a){},"2de2":function(t,e,a){"use strict";var i=a("66e3"),n=a.n(i);n.a},3835:function(t,e,a){"use strict";function i(t){if(Array.isArray(t))return t}a.d(e,"a",(function(){return s}));a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");function n(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],i=!0,n=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done);i=!0)if(a.push(r.value),e&&a.length===e)break}catch(l){n=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(n)throw o}}return a}}var o=a("06c5");function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return i(t)||n(t,e)||Object(o["a"])(t,e)||r()}},5903:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[i("div",{ref:"chartEl",style:{width:t.canvasStyle.width,height:t.canvasStyle.height}}),t.params.data.length&&t.params.options.bgSize?i("img",{staticClass:"bg",style:{left:t.params.options.center[0],top:t.params.options.center[1],width:t.params.options.bgSize+"px",height:t.params.options.bgSize+"px"},attrs:{src:a("c68a"),alt:""}}):t._e()])},n=[],o=(a("99af"),a("4160"),a("fb6a"),a("b0c0"),a("a9e3"),a("159b"),a("3eba"));a("c037"),a("007d"),a("627c"),a("d28f");var r={name:"PieW",data:function(){return{interval:null,rollFlag:!1,myChart:null}},props:{animateFlag:Boolean,defaultHigh:{type:Number},params:{type:Object,default:function(){return{data:[],canvasStyle:{width:"500px",height:"500px"},options:{twoLevel:!1,unit:"",radius:["30%","60%"],center:["50%","50%"],length:60,length2:60,bRichPadding:[30,-50,0,-50],roseType:"area",labelSize:14,borderWidth:10,borderColor:"#fff",legend:{show:!0,left:10,top:240,itemidth:14,itemHeight:14,orient:"vertical",fontSize:14},tooltip:{show:!0},rich:{bfontsize:16,perfontsize:24},colors:[],rollFlag:!1,itemLabelShow:!0,itemEmphasisLabelShow:!0,defaultHigh:0}}}}},created:function(){var t=this;this.$nextTick((function(){t.init()}))},mounted:function(){var t=this;this.init(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{init:function(){var t=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var e=this.params.data,a=this.params.options,i=[],n=0,r=0;if(r=Number(a.radius[0].substring(0,a.radius[0].length-1))-4,n=r-1,i=[n+"%",r+"%"],this.myChart=o.init(this.$refs.chartEl),this.myChart.setOption({title:{text:a.title?a.title:"",textStyle:{color:"#fff",fontSize:"18%"},x:"center",y:"bottom"},tooltip:{show:!a.tooltip||(void 0===a.tooltip.show||a.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],textStyle:{color:this.$STANDARD.tooltipColor},position:!1===a.labelShow?["33%","35%"]:null,formatter:function(t){return t.name?"".concat(t.marker).concat(t.name," : ").concat(t.value):""}},legend:{show:!!a.legend&&a.legend.show,selectedMode:void 0===a.legend.selectedMode||a.legend.selectedMode,left:a.legend&&a.legend.left?a.legend.left:"left",top:a.legend&&a.legend.top?a.legend.top:"top",itemWidth:a.legend.itemWidth?a.legend.itemWidth:14,itemHeight:a.legend.itemHeight?a.legend.itemHeight:14,textStyle:{fontSize:a.legend.fontSize?a.legend.fontSize:this.$STANDARD.h4.fontSize,color:a.legend?a.legend.color:this.$STANDARD.legendColor},icon:"circle",itemGap:15,orient:a.legend&&a.legend.orient?a.legend.orient:"vertical"},series:[{name:"分析",type:"pie",center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:void 0===a.radius?["0%","60%"]:a.radius,minAngle:6,label:{normal:{show:!1,position:"center",formatter:function(t){if(t.name.length>7)return"{b|".concat(t.name.slice(0,6),"\n").concat(t.name.slice(6,t.name.length),"}\n{d|").concat(t.percent,"%}");var e="";return e=a.twoLevel?"{b|".concat(t.name,"}\n{b|").concat(t.value).concat(a.unit,"}"):a.threeLevel?"{b|".concat(t.value,"}\n{b|").concat(t.name,"}\n{d|").concat(t.percent,"%}"):"{b|".concat(t.name,"}\n{d|").concat(t.percent,"%}"),e},rich:{d:{fontSize:a.labelRich&&a.labelRich.d?a.labelRich.d:this.fontSize(.22),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.dHeight?a.labelRich.dHeight:this.fontSize(.4),color:"#e03562"},b:{fontSize:a.labelRich&&a.labelRich.b?a.labelRich.b:this.fontSize(.2),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.bHeight?a.labelRich.bHeight:this.fontSize(.4),color:function(t){return Array.isArray(a.colors[t.dataIndex])?a.colors[t.dataIndex][0]:a.colors[t.dataIndex]}}}},emphasis:{show:!0}},itemStyle:{borderColor:a.borderColor?a.borderColor:"transparent",borderWidth:a.borderWidth?a.borderWidth:0,color:function(t){return Array.isArray(a.colors[t.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[t.dataIndex][0]},{offset:1,color:a.colors[t.dataIndex][1]}],global:!1}:a.colors[t.dataIndex]}},labelLine:{length:a.length?a.length:10,length2:a.length2?a.length2:10},data:e},{type:"pie",hoverAnimation:!1,center:a.center||["50%","50%"],radius:i,data:[100],label:{show:!1},itemStyle:{normal:{color:"#0e90cc"},emphasis:{show:!1}}}]}),this.rollFlag=this.params.options.rollFlag,this.myChart.on("click",(function(e){"series"===e.componentType?(t.$emit("departmentClick",e.name),e.allData={data:t.params.data,params:e},t.$emit("canvasClick",e.allData)):t.$emit("departmentClick",e.value)})),this.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(e){1!==e.seriesIndex&&(t.rollFlag=!1,e.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}))})),this.myChart.on("mouseout",(function(e){t.rollFlag=!0}));else{var s=this.defaultHigh;if(""!==s&&void 0!==s){this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s});var l=this;l.myChart.on("mouseover",(function(t){for(var a=e.length,i=0;i<a;i++)i!=t.dataIndex&&l.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:i})})),l.myChart.on("mouseout",(function(t){l.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s})}))}}}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var e=t.params.data.length;t.rollFlag&&(t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%e,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)},fontSize:function(t){document.documentElement;var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var a=e/1920*100;return t*a}}},computed:{sum:function(){var t=0;return this.params.data.forEach((function(e){t+=e.value})),t},ishow:function(){return!1!==this.params.options.labelShow&&!1!==this.params.options.showsum},canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"100%",height:this.params.canvasStyle?this.params.canvasStyle.height:"100%"}}},watch:{"params.data":{handler:function(t,e){this.init()},deep:!0}}},s=r,l=(a("2de2"),a("2877")),c=Object(l["a"])(s,i,n,!1,null,"36b3dfc0",null);e["a"]=c.exports},6362:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},n=[],o=(a("99af"),a("4160"),a("a15b"),a("d81d"),a("b0c0"),a("b680"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("1276"),a("159b"),a("ddb0"),a("3835")),r=a("b85c"),s=a("313e"),l=(a("dd01"),{name:"lines",props:{animateFlag:Boolean,maps:Object,params:{type:Object,dafault:function(){return{option:{legendShow:!0,legendfontSize:14,XaxisLineShow:!1,xaxisLineColor:"rgba(255,255,255,0.1)",axisLabelShow:!1,axisLabelFontSize:12,yaxisLabelFontSize:14,yaxisLabelColor:"#fff",axisLabelColor:"#fff",boundaryGap:!0,xAxisBr:!1,YaxisLineShow:!0,yaxisLineColor:"rgba(255,255,255,0.1)",YaxisaxisLabelShow:!0,scales:!0,lineWidth:2,Lcolor:"red",splitLineShow:!0,axisTickShow:!0,showK:!0,legenditemWidth:100,dataZoomshow:!1,dataZoomstart:0,dataZoomend:100,legendTop:"5%",showSymbol:!1,axisCategoryName:"",nameLocation:"start",XaxisNameColor:"#fff",axisLabelSize:16,legendItemgap:20,splitXLineShow:!1},colors:[]}}}},data:function(){return{colors:[{line:"rgba(209, 48, 20, 1)",start:"rgba(62, 73, 67, .3)",end:"rgba(78, 173, 254, 0)"},{line:"rgba(29, 209, 200, 1)",start:"rgba(242, 104, 210, .3)",end:"rgba(188, 60, 113, 0)"},{line:"rgba(208, 45, 222, 1)",start:"rgba(208, 45, 222, .3)",end:"rgba(101, 30, 206, 0)"},{line:"rgba(162, 227, 105, 1)",start:"rgba(162, 227, 105, .3)",end:"rgba(60, 234, 166, 0)"},{line:"rgba(240, 151, 26, 1)",start:"rgba(240, 151, 26, .3)",end:"rgba(255, 88, 88, 0)"}]}},mounted:function(){this.init()},methods:{init:function(){var t=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var e=this.params.option,a=this.params.data,i={};i=this.maps?this.maps:this.params.map;var n=Object.keys(i),l=Object.values(i),c=[],h=[],d=[],p=[];n.forEach((function(t){h[t]=[]}));var m,f=Object(r["a"])(a.entries());try{var u=function(){var e=Object(o["a"])(m.value,2),a=(e[0],e[1]);c.push(a[t.params.xName]),n.forEach((function(t){p.push(a[t]),h[t].push(a[t])}))};for(f.s();!(m=f.n()).done;)u()}catch(b){f.e(b)}finally{f.f()}Math.max.apply(Math,p);var g=Math.min.apply(Math,p)-100;g<0&&(g=0),console.log("lineDataArr",h),n.forEach((function(n,o){var r={name:i[n],type:"line",smooth:void 0!==e.smooth&&e.smooth,smoothMonotone:e.smooth&&e.smoothMonotone?e.smoothMonotone:"none",symbolSize:function(t,e){return 0===e.dataIndex||e.dataIndex===a.length-1?10:0},symbol:"circle",hoverAnimation:!1,showSymbol:void 0!==e.showSymbol&&e.showSymbol,itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:t.params.colors[o].line},emphasis:{color:t.params.colors[o].line,borderColor:t.params.colors[o].start,borderWidth:12}},lineStyle:{type:e.type&&i[n]===e.dashKey?"dashed":"solid",width:e.lineWidth?e.lineWidth:3,color:t.params.colors[o].line,shadowColor:"#fff",shadowOffsetX:0,shadowOffsetY:0,opacity:1,shadowBlur:1},areaStyle:{normal:{opacity:void 0===e.areaShow||e.areaShow,color:new s["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:t.params.colors[o].start},{offset:1,color:t.params.colors[o].end}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},data:h[n]};d.push(r)})),this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:function(t){var a=t[0].name+e.axisCategoryName+"<br/>";return t.forEach((function(t,i){t.seriesName.charAt(t.seriesName.length-1);"%"===e.axisYName?a+="".concat(t.marker," ").concat(t.seriesName," : ").concat((100*t.value).toFixed(2),"%</br>"):a+="".concat(t.marker," ").concat(t.seriesName," : ").concat(t.value,"</br>")})),a}},grid:{left:e.left?e.left:"6%",right:e.right?e.right:"6%",bottom:e.bottom?e.bottom:"6%",top:e.top?e.top:"6%",containLabel:!0},legend:{icon:e.legendIcon?e.legendIcon:"roundRect",show:void 0===e.legendShow||e.legendShow,itemWidth:20,itemHeight:5,color:"#fff",itemGap:e.legendItemgap?e.legendItemgap:20,right:e.legendRight?e.legendRight:"5%",top:e.legendTop?e.legendTop:"2%",textStyle:{color:"#fff",fontSize:e.legendfontSize?e.legendfontSize:18},data:l},xAxis:[{type:"category",boundaryGap:void 0!==e.boundaryGap&&e.boundaryGap,triggerEvent:!0,interval:1,data:c,name:e.axisCategoryName?e.axisCategoryName:"",nameLocation:e.nameLocation?"start":"end",nameTextStyle:{color:e.XaxisNameColor?e.XaxisNameColor:"#fff",fontSize:e.axisLabelSize?e.axisLabelSize:20},axisLabel:{show:!!e.axisLabelShow,margin:10,fontSize:16,color:this.$STANDARD.xAxisColor,formatter:function(t){return e.xAxisBr?t.split("").join("\n"):t}},axisLine:{show:!0,lineStyle:{width:2,color:this.$STANDARD.xAxisLineColor}},axisTick:{alignWithLabel:!0,show:!!e.axisTickShow,inside:!0},splitLine:{show:!!e.splitXLineShow,lineStyle:{color:"#1d2741"}}}],yAxis:[{type:"value",name:e.axisYName?e.axisYName:"",nameLocation:e.nameLocation?"start":"end",nameTextStyle:{color:e.YaxisNameColor?e.YaxisNameColor:"#ff517f",fontSize:e.axisLabelSize?e.axisLabelSize:20,fontWeight:"bold",padding:[0,45,0,0]},scale:!e.scales,max:void 0===this.params.axisMax?null:this.params.axisMax,min:void 0===this.params.axisMin?null:this.params.axisMin,splitNumber:e.splitNumber?e.splitNumber:5,axisLabel:{show:!e.YaxisaxisLabelShow,margin:10,fontSize:14,color:"#fff",formatter:function(t){return"%"===e.axisYName?100*t:t}},axisLine:{show:!!e.YaxisLineShow,width:2,type:"dotted",color:this.$STANDARD.yAxisSplitLineColor},axisTick:{show:!1},splitLine:{show:!!e.splitLineShow,lineStyle:{type:"dashed",color:"#2c344c"}}}],dataZoom:{show:!!e.dataZoomshow,realtime:!0,fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",showDetail:!1,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"100%",bottom:0,height:20,start:e.dataZoomstart?e.dataZoomstart:0,end:e.dataZoomend?e.dataZoomend:100},series:d},this.myChart.setOption(this.option),this.params.option.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",(function(e){t.params.option.rollFlag=!1,e.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex})})),this.myChart.on("mouseout",(function(e){t.params.option.rollFlag=!0}))),this.myChart.on("click",(function(e){"series"===e.componentType?t.$emit("departmentClick",e.name):t.$emit("departmentClick",e.value)}))}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var e=t.params.data.length;t.params.option.rollFlag&&(t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%e,t.myChart.dispatchAction({type:"highlight",dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)}},computed:{},watch:{animateFlag:{handler:function(t,e){this.init()},deep:!0},"params.data":{handler:function(t,e){this.init()},deep:!0}}}),c=l,h=a("2877"),d=Object(h["a"])(c,i,n,!1,null,"5eff9b4b",null);e["a"]=d.exports},"66e3":function(t,e,a){},"770f":function(t,e,a){},"840a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],style:{width:t.params.styleObj.width,height:t.params.styleObj.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor,id:t.randomID}})},n=[],o=(a("99af"),a("fb6a"),a("a9e3"),a("b680"),a("d3b7"),a("25f0"),a("ddb0"),a("3835")),r=a("b85c"),s=1e-5;function l(t){var e,a=0,i=Object(r["a"])(t.entries());try{for(i.s();!(e=i.n()).done;){var n=Object(o["a"])(e.value,2),l=(n[0],n[1]);a+=l.value}}catch(m){i.e(m)}finally{i.f()}if(0===a){var c,h=Object(r["a"])(t.entries());try{for(h.s();!(c=h.n()).done;){var d=Object(o["a"])(c.value,2),p=(d[0],d[1]);p.value=s}}catch(m){h.e(m)}finally{h.f()}}return t}a("5e73"),a("0d41");var c={name:"PieChart3D",props:{animateFlag:Boolean,defaultHigh:Number,params:{type:Object,default:function(){return{id:"amcharts",data:[],styleObj:{width:"100%",height:"100%"},angle:45}}}},data:function(){return{mychart:null,chartData:[]}},mounted:function(){this.initChart(!1)},methods:{initChart:function(t){var e=this,a=void 0===this.params.color?this.$STANDARD.pieColorsA:this.params.color;this.mychart=new AmCharts.AmPieChart;var i=JSON.parse(JSON.stringify(this.params.data));if(this.mychart.dataProvider=l(i),0!==this.mychart.dataProvider.length){this.mychart.numberFormatter={precision:1,decimalSeparator:".",thousandsSeparator:""},this.mychart.percentPrecision=0,this.mychart.pullOutOnlyOne=!0,this.mychart.pullOutRadius=this.params.pullOutRadius?this.params.pullOutRadius:0,this.mychart.depth3D=this.params.depth3D?this.params.depth3D:10,this.mychart.angle=this.params.angle?this.params.angle:40,this.mychart.radius=this.params.radius?this.params.radius:"35%",this.mychart.innerRadius=0,this.mychart.labelRadius=this.params.labelRadius?this.params.labelRadius:35,t?(this.mychart.sequencedAnimation=!0,this.mychart.startEffect="easeOutSine",this.mychart.startDuration=.5):(this.mychart.sequencedAnimation=!1,this.mychart.startDuration=0),this.mychart.titleField="name",this.mychart.valueField="value",this.mychart.colors=a,this.mychart.color="#fff",this.mychart.fontSize=this.params.fontSize?this.params.fontSize:16;var n,s=0,c=Object(r["a"])(this.params.data.entries());try{for(c.s();!(n=c.n()).done;){var h=Object(o["a"])(n.value,2),d=(h[0],h[1]);s+=d.value}}catch(p){c.e(p)}finally{c.f()}this.mychart.balloonFunction=function(t){return 0===parseInt(s)?"".concat(t.title,": 0% (0)"):"".concat(t.title,": ").concat(t.percents.toFixed(2),"% (").concat(t.value.toFixed(0),")")},this.mychart.labelFunction=function(t){return 0===parseInt(s)?"".concat(t.title," \n 0%"):e.params.isBr?e.params.labelPer?"".concat(t.title," \n ").concat(t.percents.toFixed(2),"%"):"".concat(t.title," \n ").concat(t.value):"".concat(t.title)},this.mychart.labelTickAlpha=.7,this.mychart.labelTickColor="#fff",this.mychart.precision=0,this.mychart.write(this.randomID),void 0!==this.defaultHigh&&this.mychart.clickSlice(this.defaultHigh),this.params.defaultStatus&&this.mychart.chartData.length>0&&(this.mychart.chartData[0].pulled=!0),this.mychart.addListener("clickSlice",(function(t){var a={name:t.dataItem.title,id:t.dataItem.dataContext.value_id};e.$emit("change",a)}))}}},computed:{randomID:function(){return Math.random().toString(16).slice(2,10)},styleType:function(){return this.$store.state.styleType}},watch:{animateFlag:{handler:function(t,e){this.initChart(!0),this.mychart.clickSlice(1)}},"params.data":{handler:function(t,e){this.initChart(!0)},deep:!0}}},h=c,d=a("2877"),p=Object(d["a"])(h,i,n,!1,null,"36788b00",null);e["a"]=p.exports},"84e5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[i("div",{ref:"chartEl",style:{width:t.canvasStyle.width,height:t.canvasStyle.height}}),t.params.data.length&&t.params.options.bgSize?i("img",{staticClass:"bg",style:{left:t.params.options.center[0],top:t.params.options.center[1],width:t.params.options.bgSize+"px",height:t.params.options.bgSize+"px"},attrs:{src:a("c68a"),alt:""}}):t._e()])},n=[],o=(a("99af"),a("4160"),a("b0c0"),a("a9e3"),a("159b"),a("5e73"),a("0d41"),a("3eba"));a("c037"),a("007d"),a("627c"),a("d28f");var r={name:"PieW",data:function(){return{interval:null,rollFlag:!1,myChart:null}},props:{animateFlag:Boolean,defaultHigh:{type:Number},params:{type:Object,default:function(){return{id:"amcharts",data:[],canvasStyle:{width:"500px",height:"500px"},options:{labelType:!1,unit:"",radius:["30%","60%"],center:["50%","50%"],length:60,length2:60,bRichPadding:[30,-50,0,-50],roseType:"area",labelSize:14,borderWidth:10,borderColor:"#fff",legend:{show:!0,left:10,top:240,itemidth:14,itemHeight:14,orient:"vertical",fontSize:14},tooltip:{show:!0},rich:{bfontsize:16,perfontsize:24},colors:[],rollFlag:!1,itemLabelShow:!0,itemEmphasisLabelShow:!0,defaultHigh:0},angle:45}}}},created:function(){var t=this;this.$nextTick((function(){t.init()}))},mounted:function(){var t=this;this.init(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{init:function(){var t=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var e=this.params.data,a=this.params.options,i=[],n=0,r=0;if(r=Number(a.radius[0].substring(0,a.radius[0].length-1))-4,n=r-1,i=[n+"%",r+"%"],this.myChart=o.init(this.$refs.chartEl),this.myChart.setOption({title:{text:a.title?a.title:"",textStyle:{color:"#fff",fontSize:"18%"},x:"center",y:"bottom"},tooltip:{show:!a.tooltip||(void 0===a.tooltip.show||a.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],textStyle:{color:this.$STANDARD.tooltipColor},position:!1===a.labelShow?["33%","35%"]:null,formatter:function(t){return t.name?"".concat(t.marker).concat(t.name," : ").concat(t.value):""}},legend:{show:!!a.legend&&a.legend.show,selectedMode:void 0===a.legend.selectedMode||a.legend.selectedMode,left:a.legend&&a.legend.left?a.legend.left:"left",top:a.legend&&a.legend.top?a.legend.top:"top",itemWidth:a.legend.itemWidth?a.legend.itemWidth:14,itemHeight:a.legend.itemHeight?a.legend.itemHeight:14,textStyle:{fontSize:a.legend.fontSize?a.legend.fontSize:this.$STANDARD.h4.fontSize,color:a.legend?a.legend.color:this.$STANDARD.legendColor},icon:"circle",itemGap:15,orient:a.legend&&a.legend.orient?a.legend.orient:"vertical"},series:[{name:"",type:"pie",center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:void 0===a.radius?["0%","60%"]:a.radius,minAngle:a.minAngle?a.minAngle:6,label:{normal:{show:!1,position:"center",formatter:function(t){return a.labelType?"{d|".concat(t.value).concat(a.unit,"}"):a.centerMsg?"{d|".concat(t.percent,"%\n").concat(a.centerMsg,"}"):"{d|".concat(t.percent,"%}")},rich:{d:{fontSize:a.labelRich&&a.labelRich.d?a.labelRich.d:this.fontSize(.22),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.dHeight?a.labelRich.dHeight:this.fontSize(.4),color:"#fff"}}},emphasis:{show:!0}},itemStyle:{borderColor:a.borderColor?a.borderColor:"transparent",borderWidth:a.borderWidth?a.borderWidth:0,color:function(t){return Array.isArray(a.colors[t.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[t.dataIndex][0]},{offset:1,color:a.colors[t.dataIndex][1]}],global:!1}:a.colors[t.dataIndex]}},data:e},{name:"分析",type:"pie",center:a.center||["50%","50%"],radius:void 0===a.radius?["0%","60%"]:a.radius,minAngle:a.minAngle?a.minAngle:6,label:{show:!0,color:"#fff",distanceToLabelLine:0,fontWeight:"bold",formatter:function(t){return"{name|"+t.name+"}\n{hr|————}"},rich:{name:{color:"#FFF",fontSize:15,padding:[10,0,-24,0],fontWeight:"400",align:"left"},hr:{width:"100%",height:0}}},labelLine:{show:!0},data:e},{type:"pie",hoverAnimation:!1,center:a.center||["50%","50%"],radius:i,data:[100],label:{show:!1},labelLine:{length:a.length?a.length:10,length2:a.length2?a.length2:10},itemStyle:{normal:{color:"#0e90cc"},emphasis:{show:!1}}},{name:"分析",type:"pie",minAngle:a.minAngle?a.minAngle:6,center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:void 0===a.radius?["0%","60%"]:a.radius,label:{normal:{width:20,show:!1,position:"center"},emphasis:{show:void 0===a.itemEmphasisLabelShow||a.itemEmphasisLabelShow,color:"#fff",fontWeight:"bold",fontSize:a.labelSize?a.labelSize:14,formatter:function(t){return a.labelType?"{d|".concat(t.value).concat(a.unit,"}"):a.centerMsg?"{d|".concat(t.percent,"%\n").concat(a.centerMsg,"}"):"{d|".concat(t.percent,"%}")},rich:{d:{fontSize:a.labelRich&&a.labelRich.d?a.labelRich.d:this.fontSize(.22),fontWeight:"bold",lineHeight:a.labelRich&&a.labelRich.dHeight?a.labelRich.dHeight:this.fontSize(.4),color:"#fff"}}}},itemStyle:{borderColor:a.borderColor?a.borderColor:"transparent",borderWidth:a.borderWidth?a.borderWidth:0,color:function(t){return Array.isArray(a.colors[t.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[t.dataIndex][0]},{offset:1,color:a.colors[t.dataIndex][1]}],global:!1}:a.colors[t.dataIndex]}},labelLine:{length:a.length?a.length:10,length2:a.length2?a.length2:10},data:e}]}),this.rollFlag=this.params.options.rollFlag,this.myChart.on("click",(function(e){if("series"===e.componentType){t.$emit("departmentClick",e.name),e.allData={data:t.params.data,params:e},t.$emit("canvasClick",e.allData);var a={name:e.name,id:e.value};t.$emit("change",a)}else t.$emit("departmentClick",e.value)})),this.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(e){1!==e.seriesIndex&&(t.rollFlag=!1,e.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}))})),this.myChart.on("mouseout",(function(e){t.rollFlag=!0}));else{var s=this.defaultHigh;if(""!==s&&void 0!==s){this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s});var l=this;l.myChart.on("mouseover",(function(t){for(var a=e.length,i=0;i<a;i++)i!=t.dataIndex&&l.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:i})})),l.myChart.on("mouseout",(function(t){l.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s})}))}}}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var e=t.params.data.length;t.rollFlag&&(t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%e,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)},fontSize:function(t){document.documentElement;var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var a=e/1920*100;return t*a}}},computed:{sum:function(){var t=0;return this.params.data.forEach((function(e){t+=e.value})),t},ishow:function(){return!1!==this.params.options.labelShow&&!1!==this.params.options.showsum},canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"100%",height:this.params.canvasStyle?this.params.canvasStyle.height:"100%"}}},watch:{animateFlag:{handler:function(t,e){this.initChart(!0),this.mychart.clickSlice(1)}},"params.data":{handler:function(t,e){this.init()},deep:!0}}},s=r,l=(a("134a"),a("2877")),c=Object(l["a"])(s,i,n,!1,null,"4d2728cd",null);e["a"]=c.exports},"852e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.popListsShow?a("div",{staticClass:"pop",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.popListsShow=!1}}},[a("div",{staticClass:"pop-wrapper",style:{marginTop:t.popMarginTop+"px"}},[a("div",{staticClass:"inner"},[a("ul",{staticClass:"list-ul list-title clearfloat"},t._l(Object.values(t.data.map),(function(e,i){return a("li",{key:i,style:{width:t.columnW[i]+"px"}},[t._v(" "+t._s(e)+" ")])})),0),a("el-scrollbar",{style:{height:t.list.length>t.singlePageNum?t.liItemH*t.singlePageNum+"px":t.list.length*t.liItemH+"px"}},[t.list.length?a("div",{staticClass:"lists-container",style:{height:t.data.length*t.liItemH+"px"}},t._l(t.list,(function(e){return a("ul",{key:e.a,staticClass:"list-ul clearfloat"},t._l(Object.keys(t.data.map),(function(i,n){return a("li",{key:i,style:{width:t.columnW[n]+"px"}},[t._v(" "+t._s(e[i])+" ")])})),0)})),0):t._e()])],1)])]):t._e()])},n=[],o={name:"index",props:{data:{type:Object,default:{}}},data:function(){return{popListsShow:!1,singlePageNum:10,popMarginTop:0,liItemH:70,columnW:[220,130,130,130,230,150,140,130,130,210]}},mounted:function(){var t=this.list.length>this.singlePageNum?this.singlePageNum:this.list.length;this.popMarginTop=(1080-(t+1)*this.liItemH-56)/2},computed:{list:function(){return this.data.data}}},r=o,s=(a("a09d"),a("2877")),l=Object(s["a"])(r,i,n,!1,null,"a05a1a8e",null);e["a"]=l.exports},"8fc7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper-bg"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"content"},[a("div",{staticClass:"c-top"},[a("div",{staticClass:"c-t-left flex-2"},[a("ctitle",{attrs:{title:"区划分布"}}),a("div",{staticClass:"charts"},[a("barline",{attrs:{params:t.xflphBarParams}})],1)],1),a("div",{staticClass:"c-t-left flex-2"},[a("ctitle",{attrs:{title:"信访量人数规模"}}),a("div",{staticClass:"charts"},[a("LinesR",{attrs:{params:t.zsLineParams}})],1)],1),a("div",{staticClass:"c-t-left"},[a("ctitle",{attrs:{title:"重复访次数分布"}}),a("div",{staticClass:"charts"},[a("loopPieNew",{attrs:{params:t.dqfbPieParams},on:{change:t.popShow}})],1)],1)]),a("div",{staticClass:"c-bottom"},[a("div",{staticClass:"c-b-left"},[a("ctitle",{attrs:{title:"人数规模分布"}}),a("div",{staticClass:"charts"},[a("loopPieNew",{attrs:{params:t.peoplePieParams},on:{change:t.poprsShow}})],1)],1),a("div",{staticClass:"c-b-left"},[a("ctitle",{attrs:{title:"信访群体"}}),a("div",{staticClass:"charts"},[a("barline",{attrs:{params:t.rqnlBarParams}})],1)],1),a("div",{staticClass:"c-b-left"},[a("ctitle",{attrs:{title:"信访诉求"}}),a("div",{staticClass:"charts chart-pie"},[a("pie-chart3D",{attrs:{params:t.xfmdPieParams}})],1),a("p",[t._v("信访问题分布")])],1),a("div",{staticClass:"c-b-left"},[a("div",{staticClass:"charts"},[a("loopPie",{attrs:{params:t.tswtPieParams}})],1),a("p",[t._v("内容分类")])])])]),t.popLists?a("popLists",{ref:"popLists",attrs:{data:t.popLists}}):t._e()],1)])},n=[],o=(a("99af"),a("d81d"),a("b0c0"),a("ade3")),r=a("365c"),s=(a("dd01"),a("9539")),l=a("9a42"),c=a("6362"),h=a("5903"),d=a("84e5"),p=a("840a"),m=a("852e"),f={name:"dsf",components:{ctitle:s["a"],barline:l["a"],LinesR:c["a"],loopPie:h["a"],PieChart3D:p["a"],popLists:m["a"],loopPieNew:d["a"]},data:function(){var t,e;return{xjName:[],xflphBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,categoryBr:!0,axis1Name:"人次",axisLabelSize:14,left:"10%",right:"10%",top:"5%",bottom:"5%",barLabelOptions:"top",barWidth:"25%",barBorderRadius:5,splitLineShow:!1,barLabelShow:!1,axisLabelColor:"rgba(0, 176, 255, .8)",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#fa71cd","#c471f5"]]},map:{value:"数量"}}},zsLineParams:{data:[],colors:[{line:"#e11770"},{line:"#1a82f7"}],option:{showSymbol:!0,splitNumber:4,splitXLineShow:!0,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"月",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"11%",right:"15%",top:"19%",bottom:"10%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{value_g0_1:"去年",value_g1_1:"今年"},xName:"name"},dqfbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:(t={borderColor:"#050e27",borderWidth:5,minAngle:15,colors:this.$STANDARD.gradientColors,radius:["40%","55%"],center:["45%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.22),bHeight:this.fontSize(.3)},length:20,length2:50,tooltip:{show:!0},bRichPadding:[30,-50,0,-50]},Object(o["a"])(t,"borderWidth",5),Object(o["a"])(t,"itemLabelShow",!0),Object(o["a"])(t,"legend",{show:!1}),Object(o["a"])(t,"rich",{bfontsize:"12%"}),Object(o["a"])(t,"labelSize","22%"),Object(o["a"])(t,"rollFlag",!0),t)},peoplePieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:(e={borderColor:"#050e27",borderWidth:7,minAngle:15,colors:["#ffc833","#eb9002","#1ba1ff","#4eed99","#13f0ff"],radius:["35%","51%"],center:["50%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.22),bHeight:this.fontSize(.3)},length:20,length2:50,tooltip:{show:!0},bRichPadding:[30,-50,0,-50]},Object(o["a"])(e,"borderWidth",5),Object(o["a"])(e,"itemLabelShow",!0),Object(o["a"])(e,"legend",{show:!1}),Object(o["a"])(e,"rich",{bfontsize:"12%"}),Object(o["a"])(e,"labelSize","22%"),Object(o["a"])(e,"rollFlag",!0),e)},rqnlBarParams:{data:[],canvasStyle:{width:"100%",height:"95%"},options:{yAxisColor:"#fff",xName:"name",axisValueShow:!0,axis1Name:"",axisLabelSize:"12%",left:"10%",right:"10%",top:"10%",bottom:"15%",barLabelOptions:"top",barWidth:"45%",splitLineShow:!1,barLabelShow:!0,colors:{bar:[["#D5FA9E","#9ADE72"]]},map:{value:"人数"}}},xfmdPieParams:{data:[],angle:30,radius:"28%",labelRadius:30,depth3D:25,fontSize:this.fontSize(.16),color:["#d93e75","#ffc833","#4eed99","#13f0ff","#1ba1ff"],styleObj:{width:"100%",height:"100%"}},tswtPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:["#4eed99","#d93e75","#ccbe51","#eb9002","#1ba1ff","#563ad2","#f89e67","#13f0ff"],radius:["36%","45%"],center:["50%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.15),d:this.fontSize(.18),bHeight:this.fontSize(.2)},length:20,length2:50,bRichPadding:[30,-50,0,-50],borderWidth:2,borderColor:"#050e27",itemLabelShow:!0,legend:{show:!1},tooltip:{show:!1},rich:{bfontsize:"10%"},labelSize:"22%",threeLevel:!0,rollFlag:!0}},popLists:null}},mounted:function(){this.getAPI(this.date)},methods:{popShow:function(t){var e=this,a=t.id;a&&Object(r["a"])("popLists",{value_id:a,name:t.name}).then((function(t){e.popLists=t.data,e.$nextTick((function(){e.$refs.popLists.popListsShow=!0}))})).catch((function(t){console.log(t)}))},poprsShow:function(t){var e=this,a=t.id;a&&Object(r["a"])("poprsLists",{value_id:a,name:t.name}).then((function(t){e.popLists=t.data,e.$nextTick((function(){e.$refs.popLists.popListsShow=!0}))})).catch((function(t){console.log(t)}))},getAPI:function(t){var e=this;Object(r["a"])("rdmxfxqtjjfxfldqfb",{day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.xflphBarParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("rdmxfxdsffbzs",{day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.zsLineParams.map=t.data.map,e.zsLineParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("rdmxfxdsfzffcsfb",{day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.dqfbPieParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("rdmxfxdsfrsgmfb",{day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.peoplePieParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("rdmxfxdsfxfqt",{day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.rqnlBarParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("rdmxfxdsfxfsq",{day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.xfmdPieParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(r["a"])("rdmxfxdsftswtfb",{day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.tswtPieParams.data=t.data.data})).catch((function(t){console.log(t)}))},fontSize:function(t){document.documentElement;var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var a=e/1920*100;return t*a}}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(t,e){(e.startDate||e.endDate)&&this.getAPI(t)}}},u=f,g=(a("040f"),a("2877")),b=Object(g["a"])(u,i,n,!1,null,"54072116",null);e["default"]=b.exports},a09d:function(t,e,a){"use strict";var i=a("e5ed"),n=a.n(i);n.a},ade3:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return i}))},e5ed:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8084ee08.15339710.js.map