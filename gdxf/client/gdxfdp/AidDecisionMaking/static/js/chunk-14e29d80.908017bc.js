(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14e29d80","chunk-6f7538a1"],{"0ae1":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("div",{staticClass:"c-top"},[t("div",{staticClass:"ct-left"},[t("div",{staticClass:"ct-l-l"},[t("ctitle",{attrs:{title:"重件占比"}}),t("allCount",{staticClass:"all-count",attrs:{count:e.allcount}}),t("ring",{staticClass:"zb-ring",attrs:{params:e.zbRingParams}})],1),t("div",{staticClass:"ct-l-r"},[t("ctitle",{attrs:{title:"区划分布"}}),t("div",{staticClass:"charts"},[e.barBackStatus?t("div",{staticClass:"map-back",on:{click:e.barBack}}):e._e(),t("barlineHight",{attrs:{params:e.qvfbBarParams},on:{canvasClick:e.canvasClick}})],1)],1)]),t("div",{staticClass:"ct-right"},[t("div",{staticClass:"echartPie"},[t("ctitle",{attrs:{title:"四级登记机构分布"}}),t("div",{staticClass:"charts"},[t("loopPie",{attrs:{params:e.dqfbPieParams}})],1)],1)])]),t("div",{staticClass:"c-bottom"},[t("div",{staticClass:"w-charts"},[t("ctitle",{attrs:{title:"信访人群年龄分布"}}),t("div",{staticClass:"charts"},[t("barline",{attrs:{params:e.rqnlBarParams}})],1)],1),t("div",{staticClass:"w-charts w-center"},[t("ctitle",{attrs:{title:"信访目的分布"}}),t("div",{staticClass:"charts chart-pie"},[t("pie-chart3D",{attrs:{params:e.xfmdPieParams}})],1)],1),t("div",{staticClass:"w-charts"},[t("ctitle",{attrs:{title:"投诉问题分布"}}),t("div",{staticClass:"charts chart-loop"},[t("loopPie",{attrs:{params:e.tswtPieParams}})],1)],1)])])])},o=[],n=(t("99af"),t("4160"),t("b0c0"),t("b680"),t("159b"),t("365c")),s=t("9539"),r=t("ad97"),l=t("840a"),c=t("5903"),d=t("9a42"),h=t("2b3e"),m=t("8d3a"),u=t("910f"),p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],staticClass:"wrap",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[t("div",{ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height}}),e.params.data.length?t("div",{staticClass:"circle",style:{left:e.params.options.center[0],top:e.params.options.center[1],width:e.params.options.bgSize+"px",height:e.params.options.bgSize+"px"}}):e._e()])},b=[],g=t("313e"),f={name:"ring",props:{params:Object},data:function(){return{myChart:null}},mounted:function(){this.init()},methods:{init:function(){if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){this.myChart=g["init"](this.$refs.chartEl);var e=this.params.options,a=JSON.parse(JSON.stringify(this.params.data)),t=(100*a[0].percent).toFixed(2);this.myChart.setOption({title:{text:this.params.data[0].value+"\n"+this.params.data[0].name+"\n"+t+"%",x:"center",y:"center",textStyle:{color:"#f1b178",fontWeight:"bold",lineHeight:32,fontSize:18}},series:[{type:"pie",radius:e.bgRadius,center:e.center,silent:!0,label:{normal:{show:!1}},data:[{value:1,itemStyle:{normal:{color:"#fff"}}}],animation:!1},{name:"main",type:"pie",radius:e.radius,center:e.center,label:{normal:{show:!1}},data:i(),animationEasingUpdate:"cubicInOut",animationDurationUpdate:500}]})}function i(){return[{value:t,itemStyle:{normal:{borderWidth:22,color:{colorStops:[{offset:0,color:e.colors[0][0]},{offset:1,color:e.colors[0][1]}],globalCoord:!1}}}},{value:100-t,itemStyle:{normal:{color:"transparent"}}}]}}},watch:{"params.data":{handler:function(e,a){this.init()},deep:!0}}},v=f,S=(t("8ca4"),t("2877")),x=Object(S["a"])(v,p,b,!1,null,"d74a8be8",null),y=x.exports,w={name:"cjcj",components:{ctitle:s["a"],incNumber:r["a"],PieChart3D:l["a"],loopPie:c["a"],barline:d["a"],allCount:m["a"],detailList:u["a"],ring:y,barlineHight:h["a"]},data:function(){return{mapJson:{"广东省":"440000","广州市":"440100","韶关市":"440200","深圳市":"440300","珠海市":"440400","汕头市":"440500","佛山市":"440600","江门市":"440700","湛江市":"440800","茂名市":"440900","肇庆市":"441200","惠州市":"441300","梅州市":"441400","汕尾市":"441500","河源市":"441600","阳江市":"441700","清远市":"441800","东莞市":"441900","中山市":"442000","潮州市":"445100","揭阳市":"445200","云浮市":"445300"},barBackStatus:!1,curCity:"广东省",shijCity:"",shej_02:"invalid",shij_02:"invalid",xj_02:"invalid",allcount:-1,detailList:null,dqfbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:this.$STANDARD.pieMoreColors,radius:["43%","60%"],center:["40%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.22),bHeight:this.fontSize(.3)},length:20,length2:50,tooltip:{show:!0},bRichPadding:[30,-50,0,-50],borderWidth:5,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"32%",rollFlag:!0}},zbRingParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:165,radius:["54%","65%"],bgRadius:["59%","60%"],center:["50%","50%"],colors:[["#fee89f","#eea570"]]}},xfcsBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,axisLabelSize:"12%",left:"10%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#ffe97d","#ff957c"]]},map:{value:"次数"}}},qvfbBarParams:{data:[],canvasStyle:{width:"100%",height:"85%"},componentType:"series",options:{xName:"name",axisValueShow:!1,categoryBr:!0,axis1Name:"人次",axisLabelSize:"12%",left:"5%",right:"5%",top:"0%",bottom:"0%",barLabelOptions:"top",barWidth:"35%",barBorderRadius:5,splitLineShow:!1,barLabelShow:!1,axisLabelColor:"rgba(0, 176, 255, .8)",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#fa71cd","#c471f5"]]},map:{value:"数量"}}},rqnlBarParams:{data:[],canvasStyle:{width:"90%",height:"95%"},options:{xName:"name",axisValueShow:!0,axis1Name:"",axisLabelSize:"12%",left:"10%",right:"10%",top:"10%",bottom:"10%",barLabelOptions:"top",barWidth:"35%",splitLineShow:!1,barLabelShow:!0,colors:{bar:[["#D5FA9E","#9ADE72"]]},map:{value:"人数"}}},xfmdPieParams:{data:[],angle:20,radius:"35%",labelRadius:25,fontSize:this.fontSize(.16),color:this.$STANDARD.pieColors,styleObj:{width:"100%",height:"100%"}},tswtPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD.pieColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.15),d:this.fontSize(.18),bHeight:this.fontSize(.2)},length:20,length2:50,bRichPadding:[30,-50,0,-50],borderWidth:0,borderColor:"#0B2244",itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"10%"},labelSize:"22%",threeLevel:!0,rollFlag:!0}},dqxfcsBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,axisLabelSize:"12%",left:"10%",right:"5%",top:"5%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#d2f69d","#79cc7a"]]},map:{value:"次数"}}}}},mounted:function(){this.getAPIAndMap(this.date)},methods:{canvasClick:function(e){var a=this;this.barBackStatus=!0,this.curCity=e.params.name;var t={color:"#fefa82"},i="";for(var o in this.mapJson)o===e.params.name&&(i=o);i||this.qvfbBarParams.data.forEach((function(e,i){a.curCity==e.name?a.$set(e,"itemStyle",t):a.$delete(e,"itemStyle")}))},getQyfbAPI:function(e){var a=this;"广东省"===this.curCity?(this.shej_02=this.curCity,this.shij_02="invalid",this.xj_02="invalid",this.nameP="shij_02"):this.shijCity?(this.shej_02="广东省",this.shij_02=this.shijCity,this.nameP="xj_02","invalid"!==this.xj_02?(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02=this.curCity):(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02="invalid")):(this.shej_02="广东省",this.shijCity="invalid",this.xj_02="invalid",this.nameP="invalid"),Object(n["a"])("qjywjkCfxfjkQyfbBar",{day:"[".concat(e.startDate,",").concat(e.endDate,"]"),shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,name:this.nameP}).then((function(e){console.log("市级",e.data),a.qvfbBarParams.data=e.data.data})).catch((function(e){console.log(e)}))},getAPIAndMap:function(e){this.getQyfbAPI(e),this.getAPI(e)},getAPI:function(e){var a=this;Object(n["a"])("qjywjkCfxfjkZbTotal",{day:"[".concat(e.startDate,",").concat(e.endDate,"]"),shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(e){for(var t=e.data.data,i=a.sum(t),o={},n=0;n<t.length;n++)"重件"===t[n].name&&(a.allcount=t[n].value,o=t[n],o.percent=(a.allcount/i).toFixed(2));a.zbRingParams.data=[o]})).catch((function(e){console.log(e)})),Object(n["a"])("qjywjkCfxfjkSjjgfbRing",{day:"[".concat(e.startDate,",").concat(e.endDate,"]"),shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(e){a.dqfbPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("qjywjkCfxfjkRqnlfb",{day:"[".concat(e.startDate,",").concat(e.endDate,"]"),shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(e){a.rqnlBarParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("qjywjkCfxfjkMdfb",{day:"[".concat(e.startDate,",").concat(e.endDate,"]"),shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(e){a.xfmdPieParams.data=e.data.data})).catch((function(e){console.log(e)})),Object(n["a"])("qjywjkCfxfjkTswtfb",{day:"[".concat(e.startDate,",").concat(e.endDate,"]"),shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(e){a.tswtPieParams.data=e.data.data})).catch((function(e){console.log(e)}))},fontSize:function(e){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var t=a/1920*100;return e*t}},sum:function(e){for(var a=0,t=0;t<e.length;t++)a+=e[t].value;return a},barBack:function(){this.barBackStatus=!1,this.curCity="广东省"}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(e){this.getAPIAndMap(e)},curCity:function(e,a){if("广东省"===e)this.getAPIAndMap(this.date);else{var t="";for(var i in this.mapJson)e===i&&(this.shijCity=e,t=e,this.getAPIAndMap(this.date));t||(this.xj_02=e,console.log("this.xj_02 ",this.xj_02),this.getAPI(this.date))}}}},C=w,A=(t("14c6"),Object(S["a"])(C,i,o,!1,null,"55596ef7",null));a["default"]=A.exports},"14c6":function(e,a,t){"use strict";var i=t("cd0d"),o=t.n(i);o.a},"2b3e":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(t("99af"),t("4de4"),t("4160"),t("caad"),t("d81d"),t("13d5"),t("b0c0"),t("b64b"),t("07ac"),t("ac1f"),t("8a79"),t("2532"),t("1276"),t("159b"),t("53ca")),s=t("b85c"),r=t("2909"),l=t("313e"),c=t("dd01"),d={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var a=Object(r["a"])(this.params.data),i=[],o=this.params.options,n=o.isVertical?[0,1,1,0]:[0,0,0,1],d=Object.keys(o.map),h=!!o.line&&o.line.length===d.length;if(this.legendData=Object.values(o.map),"overlap"===o.mode&&o.legendBgSrc){var m=o.legendBgSrc.active,u=o.legendBgSrc.inActive;this.activeLegendBg=t("9e01")("./".concat(m,".png")),this.inActiveLegendBg=t("9e01")("./".concat(u,".png")),this.legendData.forEach((function(a,t){o.map[o.overlap]===a&&(e.legendData[t]={name:a,icon:void 0===e.params.legendActive||e.params.legendActive[a]?"image://".concat(e.activeLegendBg):"image://".concat(e.inActiveLegendBg)})}))}var p=[],b=0,g={};o.tooltipPercent&&a.forEach((function(e){g[e[o.xName]]=[]})),o.tooltipPercent&&a.forEach((function(e,a){var t=e[o.xName];for(var i in e)"name"!==i&&"genre"!==i&&g[t].push(e[i].split("|")[1])}));var f=0,v=0,S=1;d.forEach((function(t,i){var s=[],r=o.map;a.forEach((function(e){o.tooltipPercent?s.push(e[t].split("|")[0]):s.push(e[t])})),b=o.isAverage?s.reduce((function(e,a){return+e+ +a}))/a.length:0;var c={};o.line&&o.line.includes(t)?(e.isRightAxis=r[t].endsWith("比")||r[t].endsWith("度")||r[t].endsWith("率"),c={name:r[t],type:"line",yAxisIndex:h?0:e.isRightAxis?1:0,label:{show:!1},symbolSize:o.symbolSize?o.symbolSize:5,symbol:"circle",showSymbol:void 0!==o.showSymbol&&o.showSymbol,smooth:void 0!==o.smooth&&o.smooth,itemStyle:{normal:{label:{show:void 0===o.lineLabelShow||o.lineLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20,formatter:e.isRightAxis?"{c}%":"{c}"},color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[f],[0,1,1,0],l):""},emphasis:{label:{show:!0,fontSize:o.axisLabelSize?o.axisLabelSize:20},borderColor:o.colors&&o.colors.line?e.$STANDARD.colorToRgba(o.colors.line[f],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[f++],[0,0,0,1],l):"",width:o.lineWidth?o.lineWidth:3,shadowBlur:o.lineShadowBlur?o.lineShadowBlur:0,shadowColor:o.lineShadowColor?o.lineShadowColor:"none",shadowOffsetY:o.lineShadowOffsetY?o.lineShadowOffsetY:0,opacity:o.lineOpacity?o.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:o.isAverage?"6.7%":"",yAxis:b},{symbol:"line",symbolSize:"0",x:"95%",yAxis:b}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:a}):c={name:r[t],type:"bar",stack:"stack"===o.mode?S:S++,yAxisIndex:0,xAxisIndex:"overlap"===o.mode&&t===o.overlap?1:0,barWidth:o.barWidth?o.barWidth:"auto",barGap:o.barGaps?o.barGaps:"50%",label:{show:void 0===o.barLabelShow||o.barLabelShow,position:o.barLabelOptions?o.barLabelOptions:o.isVertical?o.categoryInverse?"left":"right":"",fontSize:o.axisLabelSize?o.axisLabelSize:20,textStyle:{color:o.itemLabelColor?o.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===o.barBorderRadius?0:o.barBorderRadius,color:"overlap"!==o.mode||o.overlap!==t?o.colors&&o.colors.bar?o.colorisarry?function(e){var a=o.colors.bar?o.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return a[e.dataIndex]}:e.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderColor:"overlap"===o.mode&&o.overlap===t?o.colors&&o.colors.bar?e.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===o.barLabelShow||o.barLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20}},data:a},p.push(c)}));var x,y=[{show:o.axisValueShow,type:"value",name:o.axis1Name?o.axis1Name:"",nameLocation:o.nameLocation?"start":"end",nameTextStyle:{color:o.YaxisNameColor?o.YaxisNameColor:"#ff517f",fontSize:o.axisLabelSize?o.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:o.splitNumber?o.splitNumber:5,position:o.isVertical&&o.axisValuePosition?"top":"bottom",inverse:o.categoryInverse,scale:!!o.isLeftScale,axisTick:{show:!1},axisLabel:{show:!o.isVertical||!o.axisLabel,margin:10,fontSize:14,color:function(e,a){var t=[],i=o.splitNumber?o.splitNumber:5;if(a<i){for(var n=0;n<i;n++)t.push(0);var s=Object(c["a"])(t,"#fdc48d","#ff517f");return s(a)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!o.isVertical||!o.splitLine)&&(void 0===o.splitLineShow?o.axisValueShow:o.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:o.axisValueShow,type:"value",name:o.axis2Name?o.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!o.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(s["a"])(a);try{for(w.s();!(x=w.n()).done;){var C=x.value;C.code?i.push({value:C[o.xName],id:C.code}):i.push(C[o.xName])}}catch(D){w.e(D)}finally{w.f()}var A=i.length>=100;o.isVertical&&(A=!1);var L=[{type:"category",data:i,inverse:!!o.isVertical,axisTick:{show:!1},position:o.categoryInverse?"right":"left",triggerEvent:!0,name:o.axisCategoryName?o.axisCategoryName:"",nameLocation:o.isVertical&&o.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:o.axisLabelSize?o.axisLabelSize:20},axisLabel:{interval:0,rotate:o.rotate?o.rotate:0,color:"#fff",inside:void 0!==o.XasisLabelInside&&o.XasisLabelInside,padding:o.XasisLabelPad?o.XasisLabelPad:0,fontSize:o.axisLabelSize?o.axisLabelSize:20,lineHeight:o.XaxisLabelLH?o.XaxisLabelLH:14,height:o.XaxisLabelH?o.XaxisLabelH:30,margin:15,formatter:function(e){var a="",t="";if(o.categoryBr){t="";for(var i=o.brNum?o.brNum:1,n=0;n<e.length;n++)t+=e[n],n%i==i-1&&(t+="\n");a=t}else a=e;return a}},axisLine:{show:!!o.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],N=[{show:A,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=l["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===o.tooltipShow||o.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:o.tooltipType?o.tooltipType:"shadow"},formatter:function(e){var t=e[0].name+"<br/>";if("overlap"===o.mode&&e.unshift(e.pop()),o.addTooltip){var i=e[0].name,n=a.filter((function(e){return e[o.xName]===i}))[0];for(var s in o.addTooltip)o.addTooltip.hasOwnProperty(s)&&e.push({seriesName:o.addTooltip[s],value:n[s]})}return e.forEach((function(e,a){var i=e.seriesName.charAt(e.seriesName.length-1);t+="率"!==i&&"度"!==i&&"比"!==i?"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"</br>"):"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"%</br>")})),t}},legend:{show:o.legendShow,data:this.legendData,itemGap:o.legendGap?o.legendGap:10,top:o.legendPos?o.legendPos.top:"3%",right:o.legendPos?o.legendPos.right:"5%",itemWidth:o.legendW?o.legendW:25,itemHeight:o.legendH?o.legendH:14,icon:"undefined"===o.legendIcon?"rect":o.legendIcon,borderRadius:o.borderRadius?o.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:o.legendSize?o.legendSize:20,color:o.legendColor?o.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:o.left?o.left:"5%",right:o.right?o.right:"5%",top:o.top?o.top:"5%",bottom:A?"6%":o.bottom?o.bottom:"5%",containLabel:!0},label:{show:!0,position:o.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:o.isVertical?y:L,yAxis:o.isVertical?L:y,series:p,dataZoom:N,animation:this.animation,animationDelay:function(e){return 50*e}},this.myChart.setOption(this.option),this.myChart.on("click",(function(t){var o=e;"series"===t.componentType&&(t.allData={data:a,params:t},o.$emit("canvasClick",t.allData),o.$emit("departmentClick",t.name)),"yAxis"===t.componentType&&(t.name=t.value,i.filter((function(e){e.value==t.name&&(t.id=e.id)})),t.allData={data:a,params:t},o.$emit("canvasClick",t.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var e=this;this.myChart.on("legendselectchanged",(function(a){var t=e.params.options,i=a.selected;e.$emit("changeLegend",i),"overlap"===t.mode&&(a.name===t.map[t.overlap]&&e.legendActive?(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,t){"object"===Object(n["a"])(a)&&(e.legendData[t].icon="image://".concat(e.inActiveLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})):a.name!==t.map[t.overlap]||e.legendActive||(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,t){"object"===Object(n["a"])(a)&&(e.legendData[t].icon="image://".concat(e.activeLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})))}))}},watch:{animateFlag:{handler:function(e,a){this.init()},deep:!0},"params.data":{handler:function(e,a){this.init()},deep:!0}}},h=d,m=t("2877"),u=Object(m["a"])(h,i,o,!1,null,"00e7203e",null);a["a"]=u.exports},"35df":function(e,a,t){"use strict";var i=t("819c"),o=t.n(i);o.a},4248:function(e,a,t){},"429f":function(e,a,t){"use strict";var i=t("a9ef"),o=t.n(i);o.a},6267:function(e,a,t){"use strict";var i=t("6b78"),o=t.n(i);o.a},"6b78":function(e,a,t){},"819c":function(e,a,t){},"8ca4":function(e,a,t){"use strict";var i=t("4248"),o=t.n(i);o.a},"8d3a":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[e.count>=0?t("div",{staticClass:"inner"},[t("incNumber",{staticClass:"number",style:{width:32*e.numMaxLength+"px"},attrs:{incNumber:e.count}}),t("span",{staticClass:"unit"},[e._v("件 次")])],1):e._e()])},o=[],n=(t("a9e3"),t("d3b7"),t("25f0"),t("ad97")),s={name:"allCount",components:{incNumber:n["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:this.count.toString().length}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},r=s,l=(t("429f"),t("2877")),c=Object(l["a"])(r,i,o,!1,null,"4544284a",null);a["a"]=c.exports},"910f":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.listData.length,expression:"!listData.length"}],staticClass:"detail-list",attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}},[t("div",{staticClass:"inner"},[t("ul",e._l(e.listData.slice(0,e.breakNumber),(function(a,i){return t("li",{key:i,staticClass:"item"},[t("p",{staticClass:"label",attrs:{title:a.name}},[e._v(e._s(a.name))]),t("div",{staticClass:"item-detail"},[t("p",{staticClass:"jc"},[t("incNumber",{staticClass:"number",style:{width:15*e.numMaxLength+"px"},attrs:{incNumber:a[e.mapKey[e.getArrayIndex("信访件次")]]}}),t("span",{staticClass:"number-unit"},[e._v("件次")]),t("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[e.mapKey[e.getArrayIndex("件次占比")]]).toFixed(2)}}),t("span",[e._v(e._s(a[e.mapKey[e.getArrayIndex("件次占比")]]))]),t("span",{staticClass:"per-unit"},[e._v("%")])],1),t("div"),t("p",{staticClass:"rc"},[t("incNumber",{staticClass:"number",style:{width:15*e.numMaxLength+"px"},attrs:{incNumber:a[e.mapKey[e.getArrayIndex("信访人次")]]}}),t("span",{staticClass:"number-unit"},[e._v("人次")]),t("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[e.mapKey[e.getArrayIndex("人次占比")]]).toFixed(2)}}),t("span",{staticClass:"per-unit"},[e._v("%")])],1)])])})),0),100!==e.breakNumber&&e.listData.length>e.breakNumber?t("ul",e._l(e.listData.slice(e.breakNumber),(function(a,i){return t("li",{key:i,staticClass:"item"},[t("p",{staticClass:"label",attrs:{title:a.name}},[e._v(e._s(a.name))]),t("div",{staticClass:"item-detail"},[t("p",{staticClass:"jc"},[t("incNumber",{staticClass:"number",style:{width:15*e.numMaxLength+"px"},attrs:{incNumber:a[e.mapKey[e.getArrayIndex("信访件次")]]}}),t("span",{staticClass:"number-unit"},[e._v("件次")]),t("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[e.mapKey[e.getArrayIndex("件次占比")]]).toFixed(2)}}),t("span",{staticClass:"per-unit"},[e._v("%")])],1),t("div"),t("p",{staticClass:"rc"},[t("incNumber",{staticClass:"number",style:{width:15*e.numMaxLength+"px"},attrs:{incNumber:a[e.mapKey[e.getArrayIndex("信访人次")]]}}),t("span",{staticClass:"number-unit"},[e._v("人次")]),t("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[e.mapKey[e.getArrayIndex("人次占比")]]).toFixed(2)}}),t("span",{staticClass:"per-unit"},[e._v("%")])],1)])])})),0):e._e()])])},o=[],n=(t("4de4"),t("d81d"),t("a9e3"),t("b64b"),t("d3b7"),t("07ac"),t("25f0"),t("ad97")),s={name:"detailList",components:{incNumber:n["a"]},props:{params:{type:[Object,Array],default:null},breakNumber:{type:Number,default:100}},data:function(){return{mapKey:[],mapValue:[],numMaxLength:0,listData:[]}},mounted:function(){},methods:{setLength:function(){this.mapKey=Object.keys(this.params.map),this.mapValue=Object.values(this.params.map);var e=[];this.params instanceof Array?this.listData=this.params:this.listData=this.params.data,this.listData.filter((function(a){e.push(Math.max(a.value_g0_1,a.value_g2_1).toString().length)})),this.numMaxLength=Math.max.apply(null,e)},getArrayIndex:function(e){var a=this.mapValue.length;while(a--)if(this.mapValue[a]===e)return a;return-1}},computed:{styleType:function(){return this.$store.state.styleType}},watch:{params:function(){this.setLength()}}},r=s,l=(t("35df"),t("2877")),c=Object(l["a"])(r,i,o,!1,null,"d22c1808",null);a["a"]=c.exports},"9a42":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:e.params.canvasStyle.width,height:e.params.canvasStyle.height},attrs:{"element-loading-background":e.$STANDARD.loadingBgColor}})},o=[],n=(t("99af"),t("4de4"),t("4160"),t("caad"),t("d81d"),t("13d5"),t("b0c0"),t("b64b"),t("07ac"),t("ac1f"),t("8a79"),t("2532"),t("1276"),t("159b"),t("53ca")),s=t("b85c"),r=t("2909"),l=t("313e"),c=t("dd01"),d={name:"barline",props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"1000px",height:"600px"},data:[],options:{mode:"abreast",overlap:"investigators",legendBgSrc:{active:"legendActive",inActive:"legendInactive"},colors:{bar:this.$STANDARD.gradientColors,line:this.$STANDARD.gradientColors},itemLabelColor:"#fff",rotate:20,colorisarry:!1,xName:"name",isVertical:!0,nameLocation:!0,splitLine:!0,axisLabel:!0,axisValuePosition:!0,categoryInverse:!0,axisValueShow:!0,axisLineShow:!0,axisLabelColor:" #fff",categoryBr:!0,categoryCut:!0,brNum:2,barBorderRadius:!0,legendShow:!0,legendCut:!0,barLabelShow:!0,barWidth:10,top:"5%",left:"5%",right:"5%",bottom:"5%",legendPos:{right:"5%",top:"5%"},legendW:10,legendH:10,legendGap:10,legendIcon:"rect",borderRadius:"50%",map:{num:"班子人数",age:"平均年龄"},addTooltip:{add_holder:"持证人员"},isLeftScale:!0,isRightScale:!0,axis1Name:"（人）",axis2Name:"（岁）",splitLineShow:!1,line:["age","num"],isAverage:!0,lineWidth:2,tooltipPercent:!0,tooltipShow:!0,iscolor:!0,axisCategoryName:"政府部门",smooth:!0,showSymbol:!0,lineLabelShow:!1,symbolSize:5,lineShadowBlur:20,lineShadowColor:options.colors.line[1],lineShadowOffsetY:15,lineOpacity:.5,tooltipType:"shadow",axisLabelSize:20,legendSize:20}}}}},data:function(){return{myChart:null,legendActive:!0,animation:!0}},mounted:function(){var e=this;this.init(),this.$once("hook:beforeDestroy",(function(){e.interval&&clearInterval(e.interval),e.myChart&&e.myChart.dispose()}))},methods:{init:function(){var e=this;if(0!==this.params.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var a=Object(r["a"])(this.params.data),i=[],o=this.params.options,n=o.isVertical?[0,1,1,0]:[0,0,0,1],d=Object.keys(o.map),h=!!o.line&&o.line.length===d.length;if(this.legendData=Object.values(o.map),"overlap"===o.mode&&o.legendBgSrc){var m=o.legendBgSrc.active,u=o.legendBgSrc.inActive;this.activeLegendBg=t("9e01")("./".concat(m,".png")),this.inActiveLegendBg=t("9e01")("./".concat(u,".png")),this.legendData.forEach((function(a,t){o.map[o.overlap]===a&&(e.legendData[t]={name:a,icon:void 0===e.params.legendActive||e.params.legendActive[a]?"image://".concat(e.activeLegendBg):"image://".concat(e.inActiveLegendBg)})}))}var p=[],b=0,g={};o.tooltipPercent&&a.forEach((function(e){g[e[o.xName]]=[]})),o.tooltipPercent&&a.forEach((function(e,a){var t=e[o.xName];for(var i in e)"name"!==i&&"genre"!==i&&g[t].push(e[i].split("|")[1])}));var f=0,v=0,S=1;d.forEach((function(t,i){var s=[],r=o.map;a.forEach((function(e){o.tooltipPercent?s.push(e[t].split("|")[0]):s.push(e[t])})),b=o.isAverage?s.reduce((function(e,a){return+e+ +a}))/a.length:0;var c={};o.line&&o.line.includes(t)?(e.isRightAxis=r[t].endsWith("比")||r[t].endsWith("度")||r[t].endsWith("率"),c={name:r[t],type:"line",yAxisIndex:h?0:e.isRightAxis?1:0,label:{show:!1},symbolSize:o.symbolSize?o.symbolSize:5,symbol:"circle",showSymbol:void 0!==o.showSymbol&&o.showSymbol,smooth:void 0!==o.smooth&&o.smooth,itemStyle:{normal:{label:{show:void 0===o.lineLabelShow||o.lineLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20,formatter:e.isRightAxis?"{c}%":"{c}"},color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[f],[0,1,1,0],l):""},emphasis:{label:{show:!0,fontSize:o.axisLabelSize?o.axisLabelSize:20},borderColor:o.colors&&o.colors.line?e.$STANDARD.colorToRgba(o.colors.line[f],.3):"rgba(255,255,255,.3)",borderWidth:10}},lineStyle:{color:o.colors&&o.colors.line?e.$STANDARD.getColor(o.colors.line[f++],[0,0,0,1],l):"",width:o.lineWidth?o.lineWidth:3,shadowBlur:o.lineShadowBlur?o.lineShadowBlur:0,shadowColor:o.lineShadowColor?o.lineShadowColor:"none",shadowOffsetY:o.lineShadowOffsetY?o.lineShadowOffsetY:0,opacity:o.lineOpacity?o.lineOpacity:1},markLine:{symbolSize:10,label:{normal:{show:!0,color:"#fff",fontSize:20}},data:[[{symbol:"line",symbolSize:"0",x:o.isAverage?"6.7%":"",yAxis:b},{symbol:"line",symbolSize:"0",x:"95%",yAxis:b}]],lineStyle:{normal:{width:2,type:"solid",color:"#FF507B"}}},data:s}):c={name:r[t],type:"bar",stack:"stack"===o.mode?S:S++,yAxisIndex:0,xAxisIndex:"overlap"===o.mode&&t===o.overlap?1:0,barWidth:o.barWidth?o.barWidth:"auto",barGap:o.barGaps?o.barGaps:"50%",label:{show:void 0===o.barLabelShow||o.barLabelShow,position:o.barLabelOptions?o.barLabelOptions:o.isVertical?o.categoryInverse?"left":"right":"",fontSize:o.axisLabelSize?o.axisLabelSize:20,textStyle:{color:o.itemLabelColor?o.itemLabelColor:"#fff"}},itemStyle:{normal:{barBorderRadius:void 0===o.barBorderRadius?0:o.barBorderRadius,color:"overlap"!==o.mode||o.overlap!==t?o.colors&&o.colors.bar?o.colorisarry?function(e){var a=o.colors.bar?o.colors.bar:["#fa2b7d","#ff5463","#ff874a","#f1825f","#c64aa7","#9a23e6","#7537fb","#5660fe","#4ac0ff","#4ae6ff"];return a[e.dataIndex]}:e.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderColor:"overlap"===o.mode&&o.overlap===t?o.colors&&o.colors.bar?e.$STANDARD.getColor(o.colors.bar[v++],n,l):"":"transparent",borderWidth:2}},emphasis:{label:{show:void 0===o.barLabelShow||o.barLabelShow,fontSize:o.axisLabelSize?o.axisLabelSize:20}},data:s},p.push(c)}));var x,y=[{show:o.axisValueShow,type:"value",name:o.axis1Name?o.axis1Name:"",nameLocation:o.nameLocation?"start":"end",nameTextStyle:{color:o.YaxisNameColor?o.YaxisNameColor:"#ff517f",fontSize:o.axisLabelSize?o.axisLabelSize:14,fontWeight:"bold",padding:[0,45,0,0]},splitNumber:o.splitNumber?o.splitNumber:5,position:o.isVertical&&o.axisValuePosition?"top":"bottom",inverse:o.categoryInverse,scale:!!o.isLeftScale,axisTick:{show:!1},axisLabel:{show:!o.isVertical||!o.axisLabel,margin:10,fontSize:14,color:function(e,a){var t=[],i=o.splitNumber?o.splitNumber:5;if(a<i){for(var n=0;n<i;n++)t.push(0);var s=Object(c["a"])(t,"#fdc48d","#ff517f");return s(a)}return"#ff517f"}},axisLine:{show:!1},splitLine:{show:(!o.isVertical||!o.splitLine)&&(void 0===o.splitLineShow?o.axisValueShow:o.splitLineShow),lineStyle:{type:"dashed",color:"#2c344c"}}},{show:o.axisValueShow,type:"value",name:o.axis2Name?o.axis2Name:"",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:20},scale:!!o.isRightScale,axisTick:{show:!1},axisLabel:{color:this.$STANDARD.xAxisColor,margin:15,fontSize:20,formatter:this.isRightAxis?"{value}%":"{value}"},axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}}],w=Object(s["a"])(a);try{for(w.s();!(x=w.n()).done;){var C=x.value;C.code?i.push({value:C[o.xName],id:C.code}):i.push(C[o.xName])}}catch(D){w.e(D)}finally{w.f()}var A=i.length>=100;o.isVertical&&(A=!1);var L=[{type:"category",data:i,inverse:!!o.isVertical,axisTick:{show:!1},position:o.categoryInverse?"right":"left",triggerEvent:!0,name:o.axisCategoryName?o.axisCategoryName:"",nameLocation:o.isVertical&&o.nameLocation?"start":"end",nameTextStyle:{color:this.$STANDARD.xAxisColor,fontSize:o.axisLabelSize?o.axisLabelSize:20},axisLabel:{interval:0,rotate:o.rotate?o.rotate:0,color:"#fff",inside:void 0!==o.XasisLabelInside&&o.XasisLabelInside,padding:o.XasisLabelPad?o.XasisLabelPad:0,fontSize:o.axisLabelSize?o.axisLabelSize:20,lineHeight:o.XaxisLabelLH?o.XaxisLabelLH:14,height:o.XaxisLabelH?o.XaxisLabelH:30,margin:15,formatter:function(e){var a="",t="";if(o.categoryBr){t="";for(var i=o.brNum?o.brNum:1,n=0;n<e.length;n++)t+=e[n],n%i==i-1&&(t+="\n");a=t}else a=e;return a}},axisLine:{show:!!o.axisLineShow,lineStyle:{color:"#a1a1b4"}},splitLine:{show:!1,lineStyle:{color:this.$STANDARD.splitLineColor}}},{show:!1,type:"category",data:i}],N=[{show:A,type:"slider",backgroundColor:"rgba(70,235,255,0.1)",fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",xAxisIndex:[0,1],filterMode:"filter",start:0,end:100,textStyle:{color:"#fff"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}];this.myChart=l["init"](this.$refs.chartEl),this.option={tooltip:{show:void 0===o.tooltipShow||o.tooltipShow,trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,borderColor:this.$STANDARD.tooltipBorderColor,padding:12,axisPointer:{type:o.tooltipType?o.tooltipType:"shadow"},formatter:function(e){var t=e[0].name+"<br/>";if("overlap"===o.mode&&e.unshift(e.pop()),o.addTooltip){var i=e[0].name,n=a.filter((function(e){return e[o.xName]===i}))[0];for(var s in o.addTooltip)o.addTooltip.hasOwnProperty(s)&&e.push({seriesName:o.addTooltip[s],value:n[s]})}return e.forEach((function(e,a){var i=e.seriesName.charAt(e.seriesName.length-1);t+="率"!==i&&"度"!==i&&"比"!==i?"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"</br>"):"".concat(e.marker).concat(e.seriesName," : ").concat(e.value,"%</br>")})),t}},legend:{show:o.legendShow,data:this.legendData,itemGap:o.legendGap?o.legendGap:10,top:o.legendPos?o.legendPos.top:"3%",right:o.legendPos?o.legendPos.right:"5%",itemWidth:o.legendW?o.legendW:25,itemHeight:o.legendH?o.legendH:14,icon:"undefined"===o.legendIcon?"rect":o.legendIcon,borderRadius:o.borderRadius?o.borderRadius:0,selected:this.params.legendActive?this.params.legendActive:{},textStyle:{fontSize:o.legendSize?o.legendSize:20,color:o.legendColor?o.legendColor:this.$STANDARD.legendColor,rich:{title:{width:233,fontSize:20,color:this.$STANDARD.legendColor}}}},grid:{left:o.left?o.left:"5%",right:o.right?o.right:"5%",top:o.top?o.top:"5%",bottom:A?"6%":o.bottom?o.bottom:"5%",containLabel:!0},label:{show:!0,position:o.isVertical?"right":"top",distance:10,color:this.$STANDARD.xAxisColor,fontSize:20,zlevel:10},xAxis:o.isVertical?y:L,yAxis:o.isVertical?L:y,series:p,dataZoom:N,animation:this.animation,animationDelay:function(e){return 50*e}},this.myChart.setOption(this.option),this.myChart.on("click",(function(t){var o=e;"series"===t.componentType&&(t.allData={data:a,params:t},o.$emit("canvasClick",t.allData),o.$emit("departmentClick",t.name)),"yAxis"===t.componentType&&(t.name=t.value,i.filter((function(e){e.value==t.name&&(t.id=e.id)})),t.allData={data:a,params:t},o.$emit("canvasClick",t.allData))})),this.legendselectchanged()}},legendselectchanged:function(){var e=this;this.myChart.on("legendselectchanged",(function(a){var t=e.params.options,i=a.selected;e.$emit("changeLegend",i),"overlap"===t.mode&&(a.name===t.map[t.overlap]&&e.legendActive?(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,t){"object"===Object(n["a"])(a)&&(e.legendData[t].icon="image://".concat(e.inActiveLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})):a.name!==t.map[t.overlap]||e.legendActive||(e.legendActive=!e.legendActive,e.legendData.forEach((function(a,t){"object"===Object(n["a"])(a)&&(e.legendData[t].icon="image://".concat(e.activeLegendBg))})),e.myChart.setOption({legend:{data:e.legendData}})))}))}},watch:{animateFlag:{handler:function(e,a){this.init()},deep:!0},"params.data":{handler:function(e,a){this.init()},deep:!0}}},h=d,m=t("2877"),u=Object(m["a"])(h,i,o,!1,null,"095b8c83",null);a["a"]=u.exports},a9ef:function(e,a,t){},ad97:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"incNumber"},[e._v(e._s(e.number))])},o=[],n=(t("a9e3"),t("b680"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(e){var a=this;e=e||{};var t,i,o=e.time||10,n=void 0===e.num?0:e.num,s=e.regulator||100,r=n/(o/s),l=0,c=0;n%1!==0&&(t=String(n).split("."),i=t[1].length);var d=setInterval((function(){l+=r,l>=n&&(clearInterval(d),l=n);var e=0;e=n%1===0?Math.floor(l):l.toFixed(i),e!==c&&(c=e,a.number=c)}),50)},formatMoney:function(e,a){if(/[^0-9\.]/.test(e))return"0.00";if(null==e||"null"==e||""==e)return"0.00";e=e.toString().replace(/^(\d*)$/,"$1."),e=(e+"00").replace(/(\d*\.\d\d)\d*/,"$1"),e=e.replace(".",",");var t=/(\d)(\d{3},)/;while(t.test(e))e=e.replace(t,"$1,$2");if(e=e.replace(/,(\d\d)$/,".$1"),0==a){var i=e.split(".");"00"==i[1]&&(e=i[0])}return e}},watch:{incNumber:{handler:function(e,a){this.number=e,this.init()},deep:!0}}}),s=n,r=(t("6267"),t("2877")),l=Object(r["a"])(s,i,o,!1,null,"cfc5ad0e",null);a["a"]=l.exports},cd0d:function(e,a,t){}}]);
//# sourceMappingURL=chunk-14e29d80.908017bc.js.map