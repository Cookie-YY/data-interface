(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65dced98"],{"07ac":function(t,a,e){var n=e("23e7"),i=e("6f53").values;n({target:"Object",stat:!0},{values:function(t){return i(t)}})},1276:function(t,a,e){"use strict";var n=e("d784"),i=e("44e7"),s=e("825a"),o=e("1d80"),r=e("4840"),l=e("8aa5"),c=e("50c4"),h=e("14c3"),d=e("9263"),u=e("d039"),p=[].push,m=Math.min,f=4294967295,g=!u((function(){return!RegExp(f,"y")}));n("split",2,(function(t,a,e){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n=String(o(this)),s=void 0===e?f:e>>>0;if(0===s)return[];if(void 0===t)return[n];if(!i(t))return a.call(n,t,s);var r,l,c,h=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=new RegExp(t.source,u+"g");while(r=d.call(g,n)){if(l=g.lastIndex,l>m&&(h.push(n.slice(m,r.index)),r.length>1&&r.index<n.length&&p.apply(h,r.slice(1)),c=r[0].length,m=l,h.length>=s))break;g.lastIndex===r.index&&g.lastIndex++}return m===n.length?!c&&g.test("")||h.push(""):h.push(n.slice(m)),h.length>s?h.slice(0,s):h}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,e){var i=o(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,i,e):n.call(String(i),a,e)},function(t,i){var o=e(n,t,this,i,n!==a);if(o.done)return o.value;var d=s(t),u=String(this),p=r(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new p(g?d:"^(?:"+d.source+")",v),x=void 0===i?f:i>>>0;if(0===x)return[];if(0===u.length)return null===h(y,u)?[u]:[];var S=0,w=0,C=[];while(w<u.length){y.lastIndex=g?w:0;var j,_=h(y,g?u:u.slice(w));if(null===_||(j=m(c(y.lastIndex+(g?0:w)),u.length))===S)w=l(u,w,b);else{if(C.push(u.slice(S,w)),C.length===x)return C;for(var I=1;I<=_.length-1;I++)if(C.push(_[I]),C.length===x)return C;w=S=j}}return C.push(u.slice(S)),C}]}),!g)},1646:function(t,a,e){"use strict";var n=e("7923"),i=e.n(n);i.a},"1ab2":function(t,a,e){"use strict";var n=e("d9bc"),i=e.n(n);i.a},"21a0":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"typeChange"},t._l(t.arr,(function(a,n){return e("li",{key:n,class:t.curType===a.name?"active":"",on:{click:function(e){return t.changeType(a)}}},[t._v(t._s(a.name)+" ")])})),0)},i=[],s=(e("b0c0"),{name:"index",data:function(){return{arr:[{name:"全部",id:"drop"},{name:"来信",id:"来信"},{name:"来访",id:"来访"},{name:"网信",id:"网信"}],curType:"全部",curTypeId:"drop"}},methods:{changeType:function(t){this.curType=t.name,this.curTypeId=t.id,this.$emit("change",this.curTypeId)}}}),o=s,r=(e("2c1e"),e("2877")),l=Object(r["a"])(o,n,i,!1,null,"6e163f34",null);a["a"]=l.exports},"285b":function(t,a,e){"use strict";var n=e("e7b3"),i=e.n(n);i.a},"2c1e":function(t,a,e){"use strict";var n=e("3bd0"),i=e.n(n);i.a},"34e4":function(t,a,e){},3835:function(t,a,e){"use strict";function n(t){if(Array.isArray(t))return t}e.d(a,"a",(function(){return r}));e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0");function i(t,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,i=!1,s=void 0;try{for(var o,r=t[Symbol.iterator]();!(n=(o=r.next()).done);n=!0)if(e.push(o.value),a&&e.length===a)break}catch(l){i=!0,s=l}finally{try{n||null==r["return"]||r["return"]()}finally{if(i)throw s}}return e}}var s=e("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,a){return n(t)||i(t,a)||Object(s["a"])(t,a)||o()}},"3bd0":function(t,a,e){},"441f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},i=[],s=(e("99af"),e("4160"),e("a15b"),e("d81d"),e("b0c0"),e("b680"),e("b64b"),e("d3b7"),e("07ac"),e("ac1f"),e("1276"),e("159b"),e("ddb0"),e("3835")),o=e("b85c"),r=e("313e"),l=(e("dd01"),{name:"lines",props:{animateFlag:Boolean,maps:Object,params:{type:Object,dafault:function(){return{option:{legendShow:!0,legendfontSize:14,XaxisLineShow:!1,xaxisLineColor:"rgba(255,255,255,0.1)",axisLabelShow:!1,axisLabelFontSize:12,yaxisLabelFontSize:14,yaxisLabelColor:"#fff",axisLabelColor:"#fff",boundaryGap:!0,xAxisBr:!1,YaxisLineShow:!0,yaxisLineColor:"rgba(255,255,255,0.1)",YaxisaxisLabelShow:!0,scales:!0,lineWidth:2,Lcolor:"red",splitLineShow:!0,axisTickShow:!0,showK:!0,legenditemWidth:100,dataZoomshow:!1,dataZoomstart:0,dataZoomend:100,legendTop:"5%",showSymbol:!1,axisCategoryName:"",nameLocation:"start",XaxisNameColor:"#fff",axisLabelSize:16,legendItemgap:20},colors:[]}}}},data:function(){return{colors:[{line:"rgba(209, 48, 20, 1)",start:"rgba(62, 73, 67, .3)",end:"rgba(78, 173, 254, 0)"},{line:"rgba(29, 209, 200, 1)",start:"rgba(242, 104, 210, .3)",end:"rgba(188, 60, 113, 0)"},{line:"rgba(208, 45, 222, 1)",start:"rgba(208, 45, 222, .3)",end:"rgba(101, 30, 206, 0)"},{line:"rgba(162, 227, 105, 1)",start:"rgba(162, 227, 105, .3)",end:"rgba(60, 234, 166, 0)"},{line:"rgba(240, 151, 26, 1)",start:"rgba(240, 151, 26, .3)",end:"rgba(255, 88, 88, 0)"}]}},mounted:function(){this.init()},methods:{init:function(){var t=this;if(this.myChart&&this.myChart.dispose(),0!==this.params.data.length){var a=this.params.option,e=this.params.data,n={};n=this.maps?this.maps:this.params.map;var i=Object.keys(n),l=Object.values(n),c=[],h=[],d=[],u=[];i.forEach((function(t){h[t]=[]}));var p,m=Object(o["a"])(e.entries());try{var f=function(){var a=Object(s["a"])(p.value,2),e=(a[0],a[1]);c.push(e[t.params.xName]),i.forEach((function(t){u.push(e[t]),h[t].push(e[t])}))};for(m.s();!(p=m.n()).done;)f()}catch(b){m.e(b)}finally{m.f()}Math.max.apply(Math,u);var g=Math.min.apply(Math,u)-100;g<0&&(g=0),i.forEach((function(e,i){var s={name:n[e],type:"line",smooth:void 0!==a.smooth&&a.smooth,smoothMonotone:a.smooth&&a.smoothMonotone?a.smoothMonotone:"none",symbolSize:10,symbol:"circle",hoverAnimation:!1,showSymbol:void 0!==a.showSymbol&&a.showSymbol,itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:t.params.colors[i].line},emphasis:{color:t.params.colors[i].line,borderColor:t.params.colors[i].start,borderWidth:12}},lineStyle:{type:a.type&&n[e]===a.dashKey?"dashed":"solid",width:a.lineWidth?a.lineWidth:3,color:t.params.colors[i].line},areaStyle:{normal:{opacity:void 0===a.areaShow||a.areaShow,color:new r["graphic"].LinearGradient(0,0,0,1,[{offset:0,color:t.params.colors[i].start},{offset:1,color:t.params.colors[i].end}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},data:h[e]};d.push(s)})),this.myChart=r["init"](this.$refs.chartEl),this.option={tooltip:{trigger:"axis",backgroundColor:this.$STANDARD.tooltipBackgroundColor,padding:[10,20],formatter:function(t){var e=t[0].name+a.axisCategoryName+"<br/>";return t.forEach((function(t,n){t.seriesName.charAt(t.seriesName.length-1);"%"===a.axisYName?e+="".concat(t.marker," ").concat(t.seriesName," : ").concat((100*t.value).toFixed(2),"%</br>"):e+="".concat(t.marker," ").concat(t.seriesName," : ").concat(t.value,"</br>")})),e}},grid:{left:a.left?a.left:"6%",right:a.right?a.right:"6%",bottom:a.bottom?a.bottom:"6%",top:a.top?a.top:"6%",containLabel:!0},legend:{icon:a.legendIcon?a.legendIcon:"roundRect",show:void 0===a.legendShow||a.legendShow,itemWidth:20,itemHeight:5,color:"#fff",itemGap:a.legendItemgap?a.legendItemgap:20,right:a.legendRight?a.legendRight:"5%",top:a.legendTop?a.legendTop:"2%",textStyle:{color:"#fff",fontSize:a.legendfontSize?a.legendfontSize:18},data:l},xAxis:[{type:"category",boundaryGap:void 0!==a.boundaryGap&&a.boundaryGap,triggerEvent:!0,interval:1,data:c,name:a.axisCategoryName?a.axisCategoryName:"",nameLocation:a.nameLocation?"start":"end",nameTextStyle:{color:a.XaxisNameColor?a.XaxisNameColor:"#fff",fontSize:a.axisLabelSize?a.axisLabelSize:20},axisLabel:{show:!!a.axisLabelShow,margin:10,fontSize:16,color:this.$STANDARD.xAxisColor,formatter:function(t){return a.xAxisBr?t.split("").join("\n"):t}},axisLine:{show:!0,lineStyle:{width:2,color:this.$STANDARD.xAxisLineColor}},axisTick:{alignWithLabel:!0,show:!!a.axisTickShow,inside:!0}}],yAxis:[{type:"value",name:a.axisYName?a.axisYName:"",nameLocation:a.nameLocation?"start":"end",nameTextStyle:{color:a.YaxisNameColor?a.YaxisNameColor:"#ff517f",fontSize:a.axisLabelSize?a.axisLabelSize:20,fontWeight:"bold",padding:[0,45,0,0]},scale:!a.scales,max:void 0===this.params.axisMax?null:this.params.axisMax,min:void 0===this.params.axisMin?null:this.params.axisMin,splitNumber:a.splitNumber?a.splitNumber:5,axisLabel:{show:!a.YaxisaxisLabelShow,margin:10,fontSize:14,color:"#fff",formatter:function(t){return"%"===a.axisYName?100*t:t}},axisLine:{show:!!a.YaxisLineShow,width:2,type:"dotted",color:this.$STANDARD.yAxisSplitLineColor},axisTick:{show:!1},splitLine:{show:!!a.splitLineShow,lineStyle:{type:"dashed",color:"#2c344c"}}}],dataZoom:{show:!!a.dataZoomshow,realtime:!0,fillerColor:"rgba(70,235,255,0.3)",borderColor:"rgba(70,235,255,0.6)",showDetail:!1,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"100%",bottom:0,height:20,start:a.dataZoomstart?a.dataZoomstart:0,end:a.dataZoomend?a.dataZoomend:100},series:d},this.myChart.setOption(this.option),this.params.option.rollFlag&&(this.chartMove(),this.myChart.on("mouseover",(function(a){t.params.option.rollFlag=!1,a.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex})})),this.myChart.on("mouseout",(function(a){t.params.option.rollFlag=!0}))),this.myChart.on("click",(function(a){"series"===a.componentType?t.$emit("departmentClick",a.name):t.$emit("departmentClick",a.value)}))}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=t.params.data.length;t.params.option.rollFlag&&(t.myChart.dispatchAction({type:"downplay",dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%a,t.myChart.dispatchAction({type:"highlight",dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)}},computed:{},watch:{animateFlag:{handler:function(t,a){this.init()},deep:!0},"params.data":{handler:function(t,a){this.init()},deep:!0}}}),c=l,h=e("2877"),d=Object(h["a"])(c,n,i,!1,null,"65feea5e",null);a["a"]=d.exports},4837:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"c-left"},[e("ctitle",{attrs:{title:"信访量分布"}}),e("div",{staticClass:"detail"},[e("allCount",{staticClass:"all-count",attrs:{count:t.jctotal}})],1),"440000"!==t.mapParams.options.JSON?e("div",{staticClass:"map-back",on:{click:t.mapBack}}):t._e(),e("transition",{attrs:{name:"fade"}},[t.mapFlag?e("Map",{attrs:{params:t.mapParams},on:{change:t.handleMap,showPopup:t.popShow}}):t._e()],1)],1),e("div",{staticClass:"c-right"},[e("div",{staticClass:"c-r-t"},[e("ctitle",{attrs:{title:"信访量走势"}}),e("div",{staticClass:"inner"},[e("LinesR",{attrs:{params:t.xflzsLineParams}})],1)],1),e("div",{staticClass:"c-r-c"},[e("ctitle",{attrs:{title:"信访人群"}}),e("div",{staticClass:"c-r-b"},[e("div",{staticClass:"inner"},[e("barline",{staticClass:"chart",attrs:{params:t.nlzbBarParams}}),e("p",{staticClass:"label"},[t._v(" 年龄分布 ")])],1),e("div",{staticClass:"inner"},[e("loopPie",{attrs:{params:t.xbfbPieParams}}),e("p",{staticClass:"label"},[t._v(" 性别分布 ")])],1)])],1)])]),t.popLists?e("popLists",{ref:"popLists",attrs:{data:t.popLists}}):t._e()],1)},i=[],s=(e("99af"),e("b0c0"),e("365c")),o=e("9539"),r=e("21a0"),l=e("ee15"),c=e("441f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart",attrs:{id:"chart"}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.loadFlag,expression:"!loadFlag"}],ref:"chartEl",staticClass:"map-chart",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor},on:{click:t.closeMenu}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.menuStatus,expression:"menuStatus"}],attrs:{id:"menu"}},[e("p",{on:{click:t.popShow}},[t._v("信访件明细")]),e("p",{on:{click:t.mapBtn}},[t._v("地图下钻")])])])},d=[],u=(e("4160"),e("d81d"),e("b64b"),e("d3b7"),e("07ac"),e("159b"),e("ddb0"),e("b85c")),p=e("313e"),m={name:"yunnan",props:{params:Object},data:function(){return{menuStatus:!1,myChart:null,rollFlag:!0,loadFlag:!1,choiceIndex:null,name:"",id:0}},mounted:function(){var t=this;this.init(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{closeMenu:function(){this.menuStatus=!1},popShow:function(t){this.choiceIndex=t;var a={name:this.name,id:this.id};this.$emit("showPopup",a),this.menuStatus=!1},mapBtn:function(){this.$emit("change",this.name)},init:function(){var t=this;if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){var a=this.params.options;Object(s["b"])("".concat(this.params.options.JSON,".json")).then((function(e){t.loadFlag=!0,p["registerMap"]("guangdong",e.data),t.myChart=p["init"](t.$refs.chartEl);var n=0,i=[],s=Object.keys(a.map),o=Object.values(a.map);if(a.mockData){var r,l=Object(u["a"])(e.data.features.values());try{for(l.s();!(r=l.n()).done;){var c=r.value;function h(t,a){return Math.floor(Math.random()*(a-t+1))+t}var d={name:c.properties.name,value:h(1,100)};i.push(d);var m,f=Object(u["a"])(i.values());try{for(f.s();!(m=f.n()).done;){var g=m.value;n=n>g.value?n:g.value}}catch(C){f.e(C)}finally{f.f()}}}catch(C){l.e(C)}finally{l.f()}}else{var b,v=Object(u["a"])(t.params.data.values());try{var y=function(){var t=b.value;n=n>t[a.yName]?n:t[a.yName];var e={name:t[a.xName],value:t[a.yName],zlevel:1};s.forEach((function(a,n){e[a]=t[a]})),i.push(e)};for(v.s();!(b=v.n()).done;)y()}catch(C){v.e(C)}finally{v.f()}}t.option={tooltip:{backgroundColor:"rgba(9, 39, 109, 0.8)",padding:[10,20],formatter:function(t){return a.isHome?'\n                  <div class="tooltips">\n                    <p><span class="number">'.concat(t.data[s[0]],'</span>件次</p>\n                    <p><span class="name">').concat(o[1],'</span><span class="number">').concat(t.data[s[1]],'</span></p>\n                    <p><span class="name">').concat(o[2],'</span><span class="number">').concat(t.data[s[2]],'</span></p>\n                    <p><span class="name">').concat(o[3],'</span><span class="number">').concat(t.data[s[3]],"</span></p>\n                  </div>"):t.name+" : "+t.value}},geo:[{show:!0,map:"guangdong",aspectScale:.75,zoom:1,label:{normal:{show:!0,formatter:function(t){if(t.value)return t.name},position:"bottom",textStyle:{color:"#000",fontSize:16}},emphasis:{textStyle:{color:"#fff"}}},roam:!1,itemStyle:{normal:{areaColor:"#fff",shadowColor:"#122773",shadowOffsetX:15,shadowOffsetY:10},emphasis:{areaColor:"#fefa82",borderWidth:0,color:"green",label:{show:!1}}},z:2}],visualMap:{show:!1,min:0,max:n,text:["高","低"],calculable:!0,itemWidth:"12%",itemHeight:"110%",textStyle:{color:"#fff",fontSize:"14%"},bottom:"10%",left:"5%",inRange:{color:["#fff","#ffad83","#f2684f"]}},series:[{type:"map",map:"guangdong",aspectScale:.75,zoom:1,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1,areaColor:"#12235c"},emphasis:{areaColor:"#fefa82"}},data:i}]},t.myChart.setOption(t.option),a.carousel&&t.chartMove();var x=document.getElementById("chart");if(x.oncontextmenu=function(t){t.preventDefault()},"440000"===t.params.options.JSON){var S=-1;t.myChart.on("contextmenu",(function(a){var e=document.getElementById("menu");t.menuStatus=!0,t.name=a.name,t.id=a.id;var n=a.event,i=n.offsetX,s=n.offsetY;e.style.position="absolute",e.style.left=i+"px",e.style.top=s+"px",S!==a.dataIndex&&(t.myChart.dispatchAction({type:"downplay",dataIndex:S}),t.myChart.dispatchAction({type:"highlight",dataIndex:a.dataIndex}),S=a.dataIndex,t.name=a.name)}))}else{var w=-1;t.myChart.on("click",(function(a){var e=a.name;if("440000"!==t.params.options.JSON){if(w===a.dataIndex)return;t.myChart.dispatchAction({type:"downplay",dataIndex:w}),t.myChart.dispatchAction({type:"highlight",dataIndex:a.dataIndex}),w=a.dataIndex,e=a.name}t.$emit("change",e)}))}t.myChart.on("mouseover",(function(e){if(a.carousel){if(t.rollFlag=!1,e.dataIndex===t.app.currentIndex)return;t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex})}})),t.myChart.on("mouseout",(function(a){t.rollFlag=!0}))}))}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=t.option.series[0].data.length;t.rollFlag&&(t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%a,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)}},computed:{styleType:function(){return this.$store.state.styleType},realData:function(){return this.params.data}},watch:{realData:{handler:function(t,a){this.init()},deep:!0}}},f=m,g=(e("1ab2"),e("2877")),b=Object(g["a"])(f,h,d,!1,null,null,null),v=b.exports,y=e("9a42"),x=e("5903"),S=e("8d3a"),w=e("852e"),C={name:"wtsd",props:{btnStatus:{type:String}},components:{ctitle:o["a"],typeChange:r["a"],timeChange:l["a"],LinesR:c["a"],Map:v,barline:y["a"],loopPie:x["a"],allCount:S["a"],popLists:w["a"]},data:function(){return{popLists:null,curCity:"广东省",shijCity:"",shej_02:"invalid",shij_02:"invalid",xj_02:"invalid",nameP:"",mapJson:{"广东省":"440000","广州市":"440100","韶关市":"440200","深圳市":"440300","珠海市":"440400","汕头市":"440500","佛山市":"440600","江门市":"440700","湛江市":"440800","茂名市":"440900","肇庆市":"441200","惠州市":"441300","梅州市":"441400","汕尾市":"441500","河源市":"441600","阳江市":"441700","清远市":"441800","东莞市":"441900","中山市":"442000","潮州市":"445100","揭阳市":"445200","云浮市":"445300"},xbfbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:210,colors:this.$STANDARD.pieColors,radius:["45%","60%"],center:["50%","50%"],centerRadius:["50%","50%"],labelRich:{b:this.fontSize(.15),d:this.fontSize(.18),bHeight:this.fontSize(.2)},length:20,length2:50,bRichPadding:[30,-50,0,-50],borderWidth:0,borderColor:"#0B2244",itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"10%"},labelSize:"22%",threeLevel:!0,rollFlag:!0}},mapParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{isHome:!1,JSON:"440000",xName:"name",yName:"value",carousel:!0,map:{}}},mapFlag:!1,nlzbBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!0,splitLineShow:!1,axis1Name:"人次",axisLabelSize:12,left:"10%",right:"10%",top:"15%",bottom:"10%",barWidth:30,barLabelOptions:"top",barLabelShow:!0,colors:{bar:[["#d2f69d","#79cc7a"]]},map:{value:"数量"}}},curTypeId:"drop",jctotal:0,xflzsLineParams:{data:[],colors:[{line:"#69418d",start:"#69418d",end:"#69418d"}],option:{YaxisLineShow:!0,splitNumber:4,splitLineShow:!1,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"日",axisYName:"件次",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"10%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"10%"},canvasStyle:{width:"96%",height:"90%"},map:{value:"数量"},xName:"name"}}},mounted:function(){this.getMapAPI(this.date)},methods:{popShow:function(t){var a=this,e=t.id;console.log(e),e&&Object(s["a"])("popLists",{value_id:e,name:t.name}).then((function(t){a.popLists=t.data,a.$nextTick((function(){a.$refs.popLists.popListsShow=!0}))})).catch((function(t){console.log(t)}))},getMapAPI:function(t){var a=this;console.log(this.curCity),"广东省"===this.curCity?(this.shej_02=this.curCity,this.shij_02="invalid",this.xj_02="invalid",this.nameP="shij_02"):this.shijCity?(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02="invalid",this.nameP="xj_02"):(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02=this.curCity,this.nameP="invalid"),Object(s["a"])("qjywjkWtsdXfbMap",{day:"[".concat(t.startDate,",").concat(t.endDate,"]"),gd_id3:this.btnStatus,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,name:this.nameP}).then((function(e){a.mapParams.data=e.data.data,a.mapFlag=!0,a.getAPI(t)})).catch((function(t){console.log(t)}))},getAPI:function(t){var a=this;console.log("shej_02:"+this.shej_02),console.log("shij_02:"+this.shij_02),console.log("xj_02:"+this.xj_02),Object(s["a"])("qjywjkWtsdXfbTotal",{day:"[".concat(t.startDate,",").concat(t.endDate,"]"),gd_id3:this.btnStatus,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,full:!0}).then((function(t){a.jctotal=t.data.data[0].value})).catch((function(t){console.log(t)})),Object(s["a"])("qjywjkWtsdXflzsLine",{day:"[".concat(t.startDate,",").concat(t.endDate,"]"),gd_id3:this.btnStatus,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(t){a.xflzsLineParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(s["a"])("qjywjkWtsdNlzbPie",{day:"[".concat(t.startDate,",").concat(t.endDate,"]"),gd_id3:this.btnStatus,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(t){a.nlzbBarParams.data=t.data.data})).catch((function(t){console.log(t)})),Object(s["a"])("qjywjkWtsdZbPie",{day:"[".concat(t.startDate,",").concat(t.endDate,"]"),gd_id3:this.btnStatus,shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(t){a.xbfbPieParams.data=t.data.data})).catch((function(t){console.log(t)}))},handleMap:function(t){for(var a in this.curCity=t,this.mapJson)this.curCity===a&&(this.mapFlag=!1,this.mapParams.options.JSON=this.mapJson[t])},mapBack:function(){this.mapFlag=!1,this.curCity="广东省",this.mapParams.options.JSON="440000"},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{date:function(){return this.$store.state.date}},watch:{curCity:function(t,a){if("广东省"===t)this.getMapAPI(this.date);else{var e="";for(var n in this.mapJson)t===n&&(this.shijCity=t,e=t,this.getMapAPI(this.date));e||(this.xj_02=t,this.getAPI(this.date))}},date:function(t){this.getMapAPI(t)},btnStatus:function(){this.getMapAPI(this.date)}}},j=C,_=(e("7267"),Object(g["a"])(j,n,i,!1,null,"5da0f162",null));a["default"]=_.exports},"4c1e":function(t,a,e){},"69e9":function(t,a,e){"use strict";var n=e("34e4"),i=e.n(n);i.a},"6f53":function(t,a,e){var n=e("83ab"),i=e("df75"),s=e("fc6a"),o=e("d1e7").f,r=function(t){return function(a){var e,r=s(a),l=i(r),c=l.length,h=0,d=[];while(c>h)e=l[h++],n&&!o.call(r,e)||d.push(t?[e,r[e]]:r[e]);return d}};t.exports={entries:r(!0),values:r(!1)}},7267:function(t,a,e){"use strict";var n=e("e62c"),i=e.n(n);i.a},7923:function(t,a,e){},"852e":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[t.popListsShow?e("div",{staticClass:"pop",on:{click:function(a){return a.target!==a.currentTarget?null:t.closePop(a)}}},[e("div",{staticClass:"pop-wrapper",style:{marginTop:t.popMarginTop+"px"}},[e("div",{staticClass:"inner"},[e("ul",{staticClass:"list-ul list-title clearfloat"},t._l(Object.values(t.data.map),(function(a,n){return e("li",{key:n,style:{width:t.columnW[n]+"px"}},[t._v(" "+t._s(a)+" ")])})),0),e("el-scrollbar",{ref:"myScrollbar",style:{height:t.list.length>t.singlePageNum?t.liItemH*t.singlePageNum+"px":t.list.length*t.liItemH+"px"}},[e("div",{staticClass:"lists-container",style:{height:t.data.length*t.liItemH+"px"}},[t._l(t.list,(function(a,n){return t.list.length?e("ul",{key:n+"list",staticClass:"list-ul clearfloat"},t._l(Object.keys(t.data.map),(function(i,s){return e("li",{key:i,class:{number:0===s},style:{width:t.columnW[s]+"px"},on:{click:function(e){return t.handlePop(e,s,n,a[i])}}},[t._v(" "+t._s(a[i])+" ")])})),0):t._e()})),e("transition",{attrs:{name:"fade"}},[t.popShow?e("div",{staticClass:"detail-pop",style:{left:t.popX+"px",top:t.popY+"px"}},[t.detailData?e("ul",{staticClass:"pop-ul clearfloat"},t._l(Object.keys(t.detailData.map),(function(a,n){return e("li",{key:n,staticClass:"pop-li"},[e("p",{staticClass:"name"},[t._v(t._s(t.detailData.map[a])+" : ")]),e("p",{staticClass:"value",attrs:{title:a.value}},[t._v(t._s(t.detailData.data[0][a]))])])})),0):t._e()]):t._e()])],2)])],1)])]):t._e()])},i=[],s=e("365c"),o={name:"index",props:{data:{type:Object,default:{}}},data:function(){return{popListsShow:!1,singlePageNum:10,popMarginTop:0,liItemH:70,columnW:[210,120,120,130,210,150,130,90,110,110,110,110],detailData:null,popShow:!1,numberId:0,popX:0,popY:0}},mounted:function(){var t=this.list.length>this.singlePageNum?this.singlePageNum:this.list.length;this.popMarginTop=(1080-(t+1)*this.liItemH-56)/2},methods:{handlePop:function(t,a,e,n){this.popX=t.clientX-150,this.popY=e<3?t.clientY-this.popMarginTop+this.$refs["myScrollbar"].wrap.scrollTop-50:t.clientY-this.popMarginTop+this.$refs["myScrollbar"].wrap.scrollTop-300,console.log(a),0===a&&(this.numberId===n?(this.popShow=!1,this.numberId=0):(this.popShow=!0,this.numberId=n,this.getDetailAPI(this.numberId)))},getDetailAPI:function(t){var a=this;Object(s["a"])("popListsDetail",{xfjid:t}).then((function(t){a.detailData=t.data})).catch((function(t){console.log(t)}))},closePop:function(){this.popShow=!1,this.popListsShow=!1}},computed:{list:function(){return this.data.data}}},r=o,l=(e("69e9"),e("2877")),c=Object(l["a"])(r,n,i,!1,null,"7051a494",null);a["a"]=c.exports},"8d3a":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[t.count>=0?e("div",{staticClass:"inner"},[e("incNumber",{staticClass:"number",style:{width:32*t.numMaxLength+"px"},attrs:{incNumber:t.count}}),e("span",{staticClass:"unit"},[t._v("件 次")])],1):t._e()])},i=[],s=(e("a9e3"),e("d3b7"),e("25f0"),e("ad97")),o={name:"allCount",components:{incNumber:s["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:this.count.toString().length}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},r=o,l=(e("1646"),e("2877")),c=Object(l["a"])(r,n,i,!1,null,"a7f7c144",null);a["a"]=c.exports},aca2:function(t,a,e){"use strict";var n=e("4c1e"),i=e.n(n);i.a},ad97:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"incNumber"},[t._v(t._s(t.number))])},i=[],s=(e("a9e3"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(t){var a=this;t=t||{};var e,n,i=t.time||10,s=void 0===t.num?0:t.num,o=t.regulator||100,r=s/(i/o),l=0,c=0;s%1!==0&&(e=String(s).split("."),n=e[1].length);var h=setInterval((function(){l+=r,l>=s&&(clearInterval(h),l=s);var t=0;t=s%1===0?Math.floor(l):l.toFixed(n),t!==c&&(c=t,a.number=c)}),50)},formatMoney:function(t,a){if(/[^0-9\.]/.test(t))return"0.00";if(null==t||"null"==t||""==t)return"0.00";t=t.toString().replace(/^(\d*)$/,"$1."),t=(t+"00").replace(/(\d*\.\d\d)\d*/,"$1"),t=t.replace(".",",");var e=/(\d)(\d{3},)/;while(e.test(t))t=t.replace(e,"$1,$2");if(t=t.replace(/,(\d\d)$/,".$1"),0==a){var n=t.split(".");"00"==n[1]&&(t=n[0])}return t}},watch:{incNumber:{handler:function(t,a){this.number=t,this.init()},deep:!0}}}),o=s,r=(e("aca2"),e("2877")),l=Object(r["a"])(o,n,i,!1,null,"28b38ba0",null);a["a"]=l.exports},d81d:function(t,a,e){"use strict";var n=e("23e7"),i=e("b727").map,s=e("1dde"),o=e("ae40"),r=s("map"),l=o("map");n({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d9bc:function(t,a,e){},e62c:function(t,a,e){},e7b3:function(t,a,e){},ee15:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"timeChange"},t._l(t.arr,(function(a,n){return e("li",{key:n,class:t.curTime===a?"active":"",on:{click:function(e){return t.changeTime(a)}}},[t._v(t._s(a)+" ")])})),0)},i=[],s={name:"index",data:function(){return{arr:["年度","月度"],curTime:"年度"}},methods:{changeTime:function(t){this.curTime=t,this.$emit("change",this.curTime)}}},o=s,r=(e("285b"),e("2877")),l=Object(r["a"])(o,n,i,!1,null,"d7176114",null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-65dced98.b875bc9e.js.map