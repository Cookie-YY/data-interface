(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c8d6763"],{"034e":function(t,a,e){},"089d":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"typeChange"},t._l(t.arr,(function(a,i){return e("li",{key:i,class:t.curType===a.name?"active":"",on:{click:function(e){return t.changeType(a)}}},[t._v(t._s(a.name)+" ")])})),0)},n=[],r=(e("b0c0"),{name:"index",data:function(){return{arr:[{name:"信访量",id:"信访量"},{name:"满意率-信访部门",id:"满意率-信访部门"},{name:"满意率-责任单位",id:"满意率-责任单位"}],curType:"信访量",curTypeId:"信访量"}},methods:{changeType:function(t){this.curType=t.name,this.curTypeId=t.id,this.$emit("change",this.curTypeId)}}}),o=r,s=(e("2ae6"),e("2877")),l=Object(s["a"])(o,i,n,!1,null,"6cc5c85e",null);a["a"]=l.exports},"2ae6":function(t,a,e){"use strict";var i=e("ee58"),n=e.n(i);n.a},"4c1e":function(t,a,e){},5903:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[i("div",{ref:"chartEl",style:{width:t.canvasStyle.width,height:t.canvasStyle.height}}),t.params.data.length&&t.params.options.bgSize?i("img",{staticClass:"bg",style:{left:t.params.options.center[0],top:t.params.options.center[1],width:t.params.options.bgSize+"px",height:t.params.options.bgSize+"px"},attrs:{src:e("c68a"),alt:""}}):t._e()])},n=[],r=(e("99af"),e("4160"),e("fb6a"),e("b0c0"),e("a9e3"),e("159b"),e("3eba"));e("c037"),e("007d"),e("627c"),e("d28f");var o={name:"PieW",data:function(){return{interval:null,rollFlag:!1,myChart:null}},props:{animateFlag:Boolean,defaultHigh:{type:Number},params:{type:Object,default:function(){return{data:[],canvasStyle:{width:"500px",height:"500px"},options:{radius:["30%","60%"],center:["50%","50%"],length:60,length2:60,bRichPadding:[30,-50,0,-50],roseType:"area",labelSize:14,borderWidth:10,borderColor:"#fff",legend:{show:!0,left:10,top:240,itemidth:14,itemHeight:14,orient:"vertical",fontSize:14},tooltip:{show:!0},rich:{bfontsize:16,perfontsize:24},colors:[],rollFlag:!1,itemLabelShow:!0,itemEmphasisLabelShow:!0,defaultHigh:0}}}}},created:function(){var t=this;this.$nextTick((function(){t.init()}))},mounted:function(){var t=this;this.init(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{init:function(){var t=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var a=this.params.data,e=this.params.options,i=[],n=0,o=0;if(o=Number(e.radius[0].substring(0,e.radius[0].length-1))-4,n=o-1,i=[n+"%",o+"%"],this.myChart=r.init(this.$refs.chartEl),this.myChart.setOption({title:{text:e.title?e.title:"",textStyle:{color:"#fff",fontSize:"18%"},x:"center",y:"bottom"},tooltip:{show:!e.tooltip||(void 0===e.tooltip.show||e.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],textStyle:{color:this.$STANDARD.tooltipColor},position:!1===e.labelShow?["33%","35%"]:null,formatter:function(t){return t.name?"".concat(t.marker).concat(t.name," : ").concat(t.value):""}},legend:{show:!!e.legend&&e.legend.show,selectedMode:void 0===e.legend.selectedMode||e.legend.selectedMode,left:e.legend&&e.legend.left?e.legend.left:"left",top:e.legend&&e.legend.top?e.legend.top:"top",itemWidth:e.legend.itemWidth?e.legend.itemWidth:14,itemHeight:e.legend.itemHeight?e.legend.itemHeight:14,textStyle:{fontSize:e.legend.fontSize?e.legend.fontSize:this.$STANDARD.h4.fontSize,color:e.legend?e.legend.color:this.$STANDARD.legendColor},icon:"circle",itemGap:15,orient:e.legend&&e.legend.orient?e.legend.orient:"vertical"},series:[{name:"分析",type:"pie",center:e.center||["50%","50%"],roseType:e.roseType?e.roseType:"",radius:void 0===e.radius?["0%","60%"]:e.radius,minAngle:6,label:{normal:{show:!1,position:"center",formatter:function(t){if(t.name.length>7)return"{b|".concat(t.name.slice(0,6),"\n").concat(t.name.slice(6,t.name.length),"}\n{d|").concat(t.percent,"%}");var a="";return a=e.threeLevel?"{b|".concat(t.value,"}\n{b|").concat(t.name,"}\n{d|").concat(t.percent,"%}"):"{b|".concat(t.name,"}\n{d|").concat(t.percent,"%}"),a},rich:{d:{fontSize:e.labelRich&&e.labelRich.d?e.labelRich.d:this.fontSize(.22),fontWeight:"bold",lineHeight:e.labelRich&&e.labelRich.dHeight?e.labelRich.dHeight:this.fontSize(.4),color:"#e03562"},b:{fontSize:e.labelRich&&e.labelRich.b?e.labelRich.b:this.fontSize(.2),fontWeight:"bold",lineHeight:e.labelRich&&e.labelRich.bHeight?e.labelRich.bHeight:this.fontSize(.4),color:function(t){return Array.isArray(e.colors[t.dataIndex])?e.colors[t.dataIndex][0]:e.colors[t.dataIndex]}}}},emphasis:{show:!0}},itemStyle:{borderColor:e.borderColor?e.borderColor:"transparent",borderWidth:e.borderWidth?e.borderWidth:0,color:function(t){return Array.isArray(e.colors[t.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:e.colors[t.dataIndex][0]},{offset:1,color:e.colors[t.dataIndex][1]}],global:!1}:e.colors[t.dataIndex]}},labelLine:{length:e.length?e.length:10,length2:e.length2?e.length2:10},data:a},{type:"pie",hoverAnimation:!1,center:e.center||["50%","50%"],radius:i,data:[100],label:{show:!1},itemStyle:{normal:{color:"#0e90cc"},emphasis:{show:!1}}}]}),this.rollFlag=this.params.options.rollFlag,this.myChart.on("click",(function(a){"series"===a.componentType?(t.$emit("departmentClick",a.name),a.allData={data:t.params.data,params:a},t.$emit("canvasClick",a.allData)):t.$emit("departmentClick",a.value)})),this.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(a){1!==a.seriesIndex&&(t.rollFlag=!1,a.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}))})),this.myChart.on("mouseout",(function(a){t.rollFlag=!0}));else{var s=this.defaultHigh;if(""!==s&&void 0!==s){this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s});var l=this;l.myChart.on("mouseover",(function(t){for(var e=a.length,i=0;i<e;i++)i!=t.dataIndex&&l.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:i})})),l.myChart.on("mouseout",(function(t){l.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s})}))}}}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=t.params.data.length;t.rollFlag&&(t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%a,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{sum:function(){var t=0;return this.params.data.forEach((function(a){t+=a.value})),t},ishow:function(){return!1!==this.params.options.labelShow&&!1!==this.params.options.showsum},canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"100%",height:this.params.canvasStyle?this.params.canvasStyle.height:"100%"}}},watch:{"params.data":{handler:function(t,a){this.init()},deep:!0}}},s=o,l=(e("7e59"),e("2877")),c=Object(l["a"])(s,i,n,!1,null,"5d89441e",null);a["a"]=c.exports},"5eb8":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.data.length,expression:"!data.length"}],staticClass:"yjzt-wrapper",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[e("div",{staticClass:"part part1"},[e("p",{staticClass:"label"},[t._v(t._s(t.data[0].name))]),e("div",{class:["btn",t.btnColor]},[t._v(t._s(t.data[0].value))])]),e("div",{staticClass:"part part2"},[e("p",{staticClass:"label"},[t._v(t._s(t.data[1].name))]),e("allCount",{staticClass:"all-count",attrs:{count:t.data[1].value}})],1),e("div",{staticClass:"part part3"},[e("p",{staticClass:"label"},[t._v(t._s(t.data[2].name))]),e("div",{staticClass:"inner"},[e("span",{staticClass:"per"},[t._v(t._s((100*t.data[2].value).toFixed(2))+"%")]),e("i",{class:["icon",t.data[2].value>0?"up-icon":"down-icon"]})])]),e("div",{staticClass:"part part4"},[e("p",{staticClass:"label"},[t._v(t._s(t.data[3].name))]),e("div",{staticClass:"inner"},[e("span",{staticClass:"per"},[t._v(t._s((100*t.data[3].value).toFixed(2))+"%")]),e("i",{class:["icon",t.data[3].value>0?"up-icon":"down-icon"]})])])])},n=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[t.count>=0?e("div",{staticClass:"inner"},[e("incNumber",{staticClass:"number",attrs:{incNumber:t.count}}),e("span",{staticClass:"unit"},[t._v("件 次")])],1):t._e()])},o=[],s=(e("a9e3"),e("d3b7"),e("25f0"),e("ad97")),l={name:"allCount",components:{incNumber:s["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:1}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},c=l,h=(e("b1b2"),e("2877")),d=Object(h["a"])(c,r,o,!1,null,"a3ea9bf4",null),m=d.exports,u={name:"index",components:{allCount:m},props:{data:{type:Array,default:[{name:"预警状态",value:"告警"},{name:"未来一周信访量",value:-1},{name:"同比",value:0},{name:"环比",value:0}]}},computed:{btnColor:function(){return"平稳"===this.data[0].value?"btn-blue":"异常"===this.data[0].value?"btn-yellow":"告警"===this.data[0].value?"btn-red":void 0}}},p=u,f=(e("800b"),Object(h["a"])(p,i,n,!1,null,"110abd66",null));a["a"]=f.exports},"7a77":function(t,a,e){},"7e59":function(t,a,e){"use strict";var i=e("a721"),n=e.n(i);n.a},"800b":function(t,a,e){"use strict";var i=e("034e"),n=e.n(i);n.a},"840a":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],style:{width:t.params.styleObj.width,height:t.params.styleObj.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor,id:t.randomID}})},n=[],r=(e("99af"),e("fb6a"),e("a9e3"),e("b680"),e("d3b7"),e("25f0"),e("ddb0"),e("3835")),o=e("b85c"),s=e("cf45"),l=(e("5e73"),e("0d41"),{name:"PieChart3D",props:{animateFlag:Boolean,defaultHigh:Number,params:{type:Object,default:function(){return{id:"amcharts",data:[],styleObj:{width:"100%",height:"100%"},angle:45}}}},data:function(){return{mychart:null,chartData:[]}},mounted:function(){this.initChart(!1)},methods:{initChart:function(t){var a=this,e=void 0===this.params.color?this.$STANDARD.pieMoreColors:this.params.color;this.mychart=new AmCharts.AmPieChart;var i=JSON.parse(JSON.stringify(this.params.data));if(this.mychart.dataProvider=Object(s["a"])(i),0!==this.mychart.dataProvider.length){this.mychart.numberFormatter={precision:1,decimalSeparator:".",thousandsSeparator:""},this.mychart.percentPrecision=0,this.mychart.pullOutOnlyOne=!0,this.mychart.pullOutRadius=0,this.mychart.depth3D=this.params.depth3D?this.params.depth3D:10,this.mychart.angle=this.params.angle?this.params.angle:40,this.mychart.radius=this.params.radius?this.params.radius:"35%",this.mychart.innerRadius=0,this.mychart.labelRadius=this.params.labelRadius?this.params.labelRadius:35,t?(this.mychart.sequencedAnimation=!0,this.mychart.startEffect="easeOutSine",this.mychart.startDuration=.5):(this.mychart.sequencedAnimation=!1,this.mychart.startDuration=0),this.mychart.titleField="name",this.mychart.valueField="value",this.mychart.colors=e,this.mychart.color="#fff",this.mychart.fontSize=this.params.fontSize?this.params.fontSize:16;var n,l=0,c=Object(o["a"])(this.params.data.entries());try{for(c.s();!(n=c.n()).done;){var h=Object(r["a"])(n.value,2),d=(h[0],h[1]);l+=d.value}}catch(m){c.e(m)}finally{c.f()}this.mychart.balloonFunction=function(t){return 0===parseInt(l)?"".concat(t.title,": 0% (0)"):"".concat(t.title,": ").concat(t.percents.toFixed(2),"% (").concat(t.value.toFixed(0),")")},this.mychart.labelFunction=function(t){return 0===parseInt(l)?"".concat(t.title," \n 0%"):a.params.isBr?a.params.labelPer?"".concat(t.title," \n ").concat(t.percents.toFixed(2),"%"):"".concat(t.title," \n ").concat(t.value):"".concat(t.title)},this.mychart.labelTickAlpha=.7,this.mychart.labelTickColor="#fff",this.mychart.precision=0,this.mychart.write(this.randomID),void 0!==this.defaultHigh&&this.mychart.clickSlice(this.defaultHigh),this.mychart.addListener("clickSlice",(function(t){t.allData={data:t.chart.dataProvider,params:{name:t.dataItem.title}},a.$emit("canvasClick",t.allData)}))}}},computed:{randomID:function(){return Math.random().toString(16).slice(2,10)},styleType:function(){return this.$store.state.styleType}},watch:{animateFlag:{handler:function(t,a){this.initChart(!0),this.mychart.clickSlice(1)}},"params.data":{handler:function(t,a){this.initChart(!0)},deep:!0}}}),c=l,h=e("2877"),d=Object(h["a"])(c,i,n,!1,null,"4c57430d",null);a["a"]=d.exports},a721:function(t,a,e){},aca2:function(t,a,e){"use strict";var i=e("4c1e"),n=e.n(i);n.a},ad97:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"incNumber"},[t._v(t._s(t.number))])},n=[],r=(e("a9e3"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(t){var a=this;t=t||{};var e,i,n=t.time||10,r=void 0===t.num?0:t.num,o=t.regulator||100,s=r/(n/o),l=0,c=0;r%1!==0&&(e=String(r).split("."),i=e[1].length);var h=setInterval((function(){l+=s,l>=r&&(clearInterval(h),l=r);var t=0;t=r%1===0?Math.floor(l):l.toFixed(i),t!==c&&(c=t,a.number=c)}),50)},formatMoney:function(t,a){if(/[^0-9\.]/.test(t))return"0.00";if(null==t||"null"==t||""==t)return"0.00";t=t.toString().replace(/^(\d*)$/,"$1."),t=(t+"00").replace(/(\d*\.\d\d)\d*/,"$1"),t=t.replace(".",",");var e=/(\d)(\d{3},)/;while(e.test(t))t=t.replace(e,"$1,$2");if(t=t.replace(/,(\d\d)$/,".$1"),0==a){var i=t.split(".");"00"==i[1]&&(t=i[0])}return t}},watch:{incNumber:{handler:function(t,a){this.number=t,this.init()},deep:!0}}}),o=r,s=(e("aca2"),e("2877")),l=Object(s["a"])(o,i,n,!1,null,"28b38ba0",null);a["a"]=l.exports},b1b2:function(t,a,e){"use strict";var i=e("7a77"),n=e.n(i);n.a},caee:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},n=[],r=(e("99af"),e("4160"),e("a15b"),e("d81d"),e("b0c0"),e("b680"),e("b64b"),e("d3b7"),e("07ac"),e("ac1f"),e("1276"),e("159b"),e("ddb0"),e("3835")),o=e("b85c"),s=e("313e"),l=e("dd01"),c={name:"lineMonth",props:{animateFlag:Boolean,maps:Object,params:{type:Object,dafault:function(){return{canvasStyle:{width:"100%",height:"100%"},data:[],option:{legendShow:!0,legendfontSize:14,XaxisLineShow:!1,xaxisLineColor:"rgba(255,255,255,0.1)",axisLabelShow:!1,axisLabelFontSize:12,yaxisLabelFontSize:14,yaxisLabelColor:"#fff",axisLabelColor:"#fff",boundaryGap:!0,xAxisBr:!1,YaxisLineShow:!0,yaxisLineColor:"rgba(255,255,255,0.1)",YaxisaxisLabelShow:!0,scales:!0,lineWidth:2,Lcolor:"red",splitLineShow:!0,axisTickShow:!0,showK:!0,legenditemWidth:100,dataZoomshow:!1,dataZoomstart:0,dataZoomend:100,legendTop:"5%",showSymbol:!0,axisCategoryName:"",nameLocation:"start",XaxisNameColor:"#fff",axisLabelSize:16,legendItemgap:20},colors:[]}}}},data:function(){return{colors:[{line:"rgba(209, 48, 20, 1)",start:"rgba(62, 73, 67, .3)",end:"rgba(78, 173, 254, 0)"},{line:"rgba(29, 209, 200, 1)",start:"rgba(242, 104, 210, .3)",end:"rgba(188, 60, 113, 0)"},{line:"rgba(208, 45, 222, 1)",start:"rgba(208, 45, 222, .3)",end:"rgba(101, 30, 206, 0)"},{line:"rgba(162, 227, 105, 1)",start:"rgba(162, 227, 105, .3)",end:"rgba(60, 234, 166, 0)"},{line:"rgba(240, 151, 26, 1)",start:"rgba(240, 151, 26, .3)",end:"rgba(255, 88, 88, 0)"}]}},mounted:function(){this.init()},methods:{init:function(){var t=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var a=this.params.option,e=this.params.data,i={};i=this.maps?this.maps:this.params.map;var n=Object.keys(i),c=Object.values(i),h=[],d=[],m=[],u=[];n.forEach((function(t){d[t]=[]}));var p,f=Object(o["a"])(e.entries());try{var g=function(){var a=Object(r["a"])(p.value,2),e=(a[0],a[1]);h.push(e[t.params.xName]),n.forEach((function(t){u.push(e[t]),d[t].push(e[t])}))};for(f.s();!(p=f.n()).done;)g()}catch(v){f.e(v)}finally{f.f()}Math.max.apply(Math,u);var b=Math.min.apply(Math,u)-100;b<0&&(b=0),n.forEach((function(e,n){var r={name:i[e],type:"line",smooth:void 0!==a.smooth&&a.smooth,smoothMonotone:a.smooth&&a.smoothMonotone?a.smoothMonotone:"none",symbolSize:10,symbol:"circle",hoverAnimation:!1,showSymbol:void 0===a.showSymbol||a.showSymbol,itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:t.params.colors[n].line},emphasis:{color:t.params.colors[n].line,borderColor:t.params.colors[n].start,borderWidth:12}},lineStyle:{width:void 0===a.lineWidth?3:a.lineWidth,color:t.params.colors[n].line},areaStyle:{normal:{opacity:void 0===a.areaShow||a.areaShow,color:new s["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:t.params.colors[n].start},{offset:1,color:t.params.colors[n].end}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},data:d[e]};m.push(r)})),this.myChart=s["init"](this.$refs.chartEl),this.option={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:function(t){var e=t[0].name+a.axisCategoryName+"<br/>";return t.forEach((function(t,i){t.seriesName.charAt(t.seriesName.length-1);"%"===a.axisYName?e+="".concat(t.marker," ").concat(t.seriesName," : ").concat((100*t.value).toFixed(2),"%</br>"):e+="".concat(t.marker," ").concat(t.seriesName," : ").concat(t.value,"</br>")})),e}},grid:{left:a.left?a.left:"6%",right:a.right?a.right:"6%",bottom:a.bottom?a.bottom:"6%",top:a.top?a.top:"6%",containLabel:!0},label:{show:!1,position:"top",color:"#fff",fontSize:14,zlevel:10},emphasis:{label:{show:!1,formatter:function(t){var a=t.seriesName.charAt(t.seriesName.length-1);return"比"==a||"率"==a?t.value.toFixed(2)+"%":t.value.toLocaleString()}}},legend:{icon:a.legendIcon?a.legendIcon:"roundRect",show:void 0===a.legendShow||a.legendShow,itemWidth:20,itemHeight:5,color:"#fff",itemGap:a.legendItemgap?a.legendItemgap:20,right:a.legendRight?a.legendRight:"5%",top:a.legendTop?a.legendTop:"2%",textStyle:{color:"#fff",fontSize:a.legendfontSize?a.legendfontSize:18},data:c},xAxis:[{type:"category",boundaryGap:void 0!==a.boundaryGap&&a.boundaryGap,triggerEvent:!0,interval:1,data:h,name:a.axisCategoryName?a.axisCategoryName:"",nameLocation:a.nameLocation?"start":"end",nameTextStyle:{color:a.XaxisNameColor?a.XaxisNameColor:"#fff",fontSize:a.axisLabelSize?a.axisLabelSize:20},axisLabel:{show:!!a.axisLabelShow,margin:10,fontSize:16,color:this.$STANDARD.xAxisColor,formatter:function(t){return a.xAxisBr?t.split("").join("\n"):t}},axisLine:{show:!0,lineStyle:{width:2,color:this.$STANDARD.xAxisLineColor}},axisTick:{alignWithLabel:!0,show:!!a.axisTickShow,inside:!0}}],yAxis:[{type:"value",name:a.axisYName?a.axisYName:"",nameLocation:a.nameLocation?"start":"end",nameTextStyle:{color:a.YaxisNameColor?a.YaxisNameColor:"#ff517f",fontSize:a.axisLabelSize?a.axisLabelSize:20,fontWeight:"bold",padding:[0,45,0,0]},scale:!a.scales,max:void 0===this.params.axisMax?null:this.params.axisMax,min:void 0===this.params.axisMin?null:this.params.axisMin,splitNumber:a.splitNumber?a.splitNumber:5,axisLabel:{show:!a.YaxisaxisLabelShow,margin:10,fontSize:14,color:function(t,e){var i=[],n=a.splitNumber?a.splitNumber:10;if(e<n){for(var r=0;r<n;r++)i.push(0);var o=Object(l["a"])(i,"#85DEFF","#85DEFF");return o(e)}return"#ff517f"},formatter:function(t){return"%"===a.axisYName?100*t:t}},axisLine:{show:!!a.YaxisLineShow,width:2,type:"dotted",color:this.$STANDARD.yAxisSplitLineColor},axisTick:{show:!1},splitLine:{show:!!a.splitLineShow,lineStyle:{type:"dashed",color:"#2c344c"}}}],dataZoom:{show:!!a.dataZoomshow,realtime:!0,fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",showDetail:!1,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"100%",bottom:0,height:20,start:a.dataZoomstart?a.dataZoomstart:0,end:a.dataZoomend?a.dataZoomend:100},series:m},this.myChart.setOption(this.option),this.params.option.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",(function(a){t.params.option.rollFlag=!1,a.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex})})),this.myChart.on("mouseout",(function(a){t.params.option.rollFlag=!0}))),this.myChart.on("click",(function(a){"series"===a.componentType?t.$emit("departmentClick",a.name):t.$emit("departmentClick",a.value)}))}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=t.params.data.length;t.params.option.rollFlag&&(t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%a,t.myChart.dispatchAction({type:"highlight",dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)}},computed:{},watch:{animateFlag:{handler:function(t,a){this.init()},deep:!0},"params.data":{handler:function(t,a){this.init()},deep:!0}}},h=c,d=e("2877"),m=Object(d["a"])(h,i,n,!1,null,"6d0704a0",null);a["a"]=m.exports},ee58:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5c8d6763.e5bac75e.js.map