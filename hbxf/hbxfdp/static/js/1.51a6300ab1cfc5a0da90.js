webpackJsonp([1],{"5IOt":function(t,a,e){var i={"./bg2.png":"Dpz7","./hjl-active.png":"GIqW","./zlhjl-bg.png":"yVh9","./zlhjl.png":"JXN0"};function n(t){return e(l(t))}function l(t){var a=i[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}n.keys=function(){return Object.keys(i)},n.resolve=l,t.exports=n,n.id="5IOt"},Dpz7:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAADXCAMAAACJQTn2AAAAmVBMVEVHcEyM0oCv3Yx+znx6zHrA4pF7zXt5zHrC45LB45K94ZB/zny84ZCDz321346q3Iq2346E0H6o24qR1IKU1IOS1IK44I+T1IKEz36F0H634I6q24qn24mG0H6p24q3346R04KL0oCx3oyAznyj2YiZ1oSY1oSh2Yei2Yix3o2w3Yyh2Ieg2IeK0X+a1oW74ZCa14Wb14WK0YAQToGcAAAAAXRSTlMAQObYZgAAAM1JREFUaN7t0jUOA0EABMExMzMzs///OH9gN+ngpLOm8s5aZUb/3lmYf/Ev/sW/+Bf/4l/8S9pUmMS7AoM7C6syuKszuHsxHiNiyGjKaMWozajJeIyIC6MtoyujLIM7C2sxmjFaMuoymjMeI2LP6MzoxOjG6M54jIgPozejJ6MDoyPjMSL6jEaMBox6jNaMx4jIMLjbMPoyejAeI2LBaMKow2jMqMF4jIgdoxqDuxyDOwsrMrjLM4l3FlZi/r4z/+Jf/It/8S/+xb+krPsBsA9vqY5FepgAAAAASUVORK5CYII="},GIqW:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAAAUAQMAAACOKat5AAAAA1BMVEUUndWOA+R6AAAADklEQVQYGWMYBaNgmAMAAuQAAWAVCZ0AAAAASUVORK5CYII="},JXN0:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAADXCAMAAACJQTn2AAAAsVBMVEVHcEwQtuIS2/UR0fAOl9MT7v4T6PsT8P8OldIOndYQtOEPotgPqt0Qs+EPpNkR0O8Po9kRz+8PotkPq90S2PMPqtwPpdoS4/kS4fgQsuEQteIPrN0S4PcS2fQS4/gPrd4S2vQS2/QS4vgR0vAR0/AOmNMT6fsT7f4T6fwQvuYOm9UQwOcRyOsOltMRxuoQv+cT7/4T6vwOnNYOltIQvOUOnNURx+sRyewRxeoT7/8QvebKTLJPAAAAAXRSTlMAQObYZgAAAN1JREFUaN7t0jdWAgAUBdFBMWFAUREjmAAjiNn9L8wN8Jvp4LzbTzdsOCx7F/Pll/ySX/JLfskv+SW/LJpfh6nDmqO7kZMxCm8OY4ehw7qju5jvxOHK4cah53DhZIzCisO1w8Dh0uHIyRiFO4dbh1WHtsOBkzEK3w7PDl8Orw4/TsYoPDlMHB4c/hw+nIxRaDicObQcdh1OnYxR6DucOxw67DgcOxmj0HXYc9h36DhsOxmjsOXobubw6fDoZIzCvUPT0d2Lw7uTMQqbztJ3kV/yS37JL/klv+SXBev+AcfGwilTK/vRAAAAAElFTkSuQmCC"},PMQp:function(t,a){},Sfxl:function(t,a){},ZRYK:function(t,a){},dUyZ:function(t,a,e){"use strict";var i=e("gytX");e("3uVm"),e("uFka"),e("9Wka"),e("EaeP");var n={name:"PetalPie",data:function(){return{myChart:null}},props:{animateFlag:Boolean,data:Object,params:{type:Object,default:function(){return{canvasStyle:{width:"500px",height:"500px"},options:{radius:["30%","60%"],center:["50%","50%"],color:["rgba(19,240,255,.2)","rgba(19,240,255,1)"],labelColor:"#4eed99",labelFontSize:"16%"}}}}},mounted:function(){this.init()},methods:{init:function(){this.myChart&&this.myChart.dispose();var t=this.data;if(void 0!==t){var a,e=this.params.options,n=[];t.value=Math.floor(t.competeCount/t.allCount*100),a=t.value;for(var l=e.color,s=[],o=Math.floor(a/2),r=0;r<50;r++)r<o?s.push(l[1]):s.push(l[0]);for(var c=0;c<50;c++)n.push({value:0,name:"aa",itemStyle:{normal:{label:{show:!1},borderWidth:2,borderColor:s[c]}}},{value:a,name:"bb",itemStyle:{normal:{label:!1,color:"transparent",borderColor:"transparent",borderWidth:0}}});var h=[{name:"",type:"pie",radius:e.radius?e.radius:[170,200],hoverAnimation:!1,label:{show:!0,position:"center",color:e.labelColor?e.labelColor:"#fff",fontSize:e.labelFontSize?e.labelFontSize:16,formatter:function(t){return t.value+"%"}},itemStyle:{normal:{color:"transparent",borderColor:"transparent",borderWidth:0}},data:[t]},{name:"",type:"pie",radius:e.radius?e.radius:[170,200],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data:n}];this.myChart=i.init(document.getElementById(this.UUID)),this.myChart.setOption({series:h})}}},computed:{canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"500px",height:this.params.canvasStyle?this.params.canvasStyle.height:"500px"}},UUID:function(){return this.$UUID.uuid()},styleType:function(){return this.$store.state.styleType},curData:function(){return this.data}},watch:{styleType:function(t){this.init()},curData:{handler:function(t,a){this.init()},deep:!0}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{width:this.canvasStyle.width,height:this.canvasStyle.height},attrs:{id:this.UUID}})},staticRenderFns:[]};var s=e("C7Lr")(n,l,!1,function(t){e("PMQp")},"data-v-8272a71a",null);a.a=s.exports},jiju:function(t,a,e){"use strict";var i=e("WCPx"),n={name:"pictorialBar",props:{animateFlag:Boolean,data:{type:Array,default:function(){return[]}},params:{type:Object,default:function(){return{options:{spiritImg:"",spiritBgImg:"",top:"5%",left:"5%",right:"5%",bottom:"5%",yAxisLabelShow:!0,muchItem:!0,yAxisLabelSize:"14%",xAxisLabelSize:"16%",labelColor:"#4eed99",labelSize:"14%",xAxisLabelColor:"#fff",categoryBr:!0,brNum:0}}}}},data:function(){return{animation:!0}},mounted:function(){this.init()},methods:{init:function(){if(0!==this.data.length){this.myChart&&(this.myChart.dispose(),this.myChart=null);var t=this.params.options,a=e("5IOt")("./"+t.spiritImg),n=e("5IOt")("./"+t.spiritBgImg),l=[],s=this.data;s.forEach(function(t,a){t.value=Math.floor(t.competeCount/t.allCount*100)});s.forEach(function(t,a){l.push({name:t.name,value:100})});var o,r={white:{color:t.labelColor?t.labelColor:"#fff",align:"left",fontSize:t.labelSize?t.labelSize:18,padding:[0,0]}};this.myChart=i.init(document.getElementById(this.randomID)),this.option={grid:{left:t.left?t.left:"10%",right:t.right?t.right:"10%",bottom:t.bottom?t.bottom:"8%",top:t.top?t.top:"11%",containLabel:!0},xAxis:[{type:"category",data:(o=[],s.forEach(function(t){o.push(t.name+t.competeCount+"件")}),o),boundaryGap:["20%","20%"],splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:15,formatter:function(a){var e="",i="";if(t.categoryBr){i="";for(var n=t.brNum?t.brNum:1,l=0;l<a.length;l++)i+=a[l],l%n==n-1&&(i+="\n");e=i}else e=a;return e},textStyle:{fontSize:t.xAxisLabelSize?t.xAxisLabelSize:18,color:t.xAxisLabelColor?t.xAxisLabelColor:"#fff",lineHeight:20}}}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],series:[{name:"bg",type:"pictorialBar",barWidth:"45%",silent:!0,label:{normal:{show:!0,position:"top",distance:20,formatter:function(t){var a=0;return s.forEach(function(e,i,n){t.name==e.name&&(a=e.value)}),a+"{white| %}"},textStyle:{color:t.labelColor?t.labelColor:"#fff",fontSize:t.labelSize?t.labelSize:18},rich:r}},symbol:"image://"+n,symbolClip:!1,symbolBoundingData:100,symbolSize:[52,"100%"],data:l},{name:"数据",type:"pictorialBar",barWidth:"45%",barGap:"-100%",data:s,z:3,symbol:"image://"+a,symbolClip:!0,symbolBoundingData:100,symbolSize:[52,"100%"]}]},this.myChart.setOption(this.option)}}},computed:{randomID:function(){return Math.random().toString(16).slice(2,10)},styleType:function(){return this.$store.state.styleType}},watch:{styleType:function(t){this.animation=!1,this.init()},animateFlag:{handler:function(t,a){this.init()},deep:!0},params:{handler:function(t,a){this.init()},deep:!0},data:{handler:function(t,a){this.init()},deep:!0}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{width:this.params.canvasStyle.width,height:this.params.canvasStyle.height},attrs:{id:this.randomID}})},staticRenderFns:[]};var s=e("C7Lr")(n,l,!1,function(t){e("ZRYK")},"data-v-4368cefb",null);a.a=s.exports},oGkR:function(t,a,e){"use strict";(function(t){var i=e("gyMJ"),n=e("6cNN"),l=e("JgS+"),s=e("dUyZ"),o=e("jiju");a.a={name:"mdfl",components:{ctitle:n.a,incNumber:l.a,petalpie:s.a,pictorialBar:o.a},props:{selectYear:{type:Number}},data:function(){return{loadFlag:!1,allcount:0,yetcount:0,depList:[],zdzsDetail:[],gjhjlData:[],gjhjlParams:{canvasStyle:{width:"100%",height:"100%"},options:{radius:["70%","95%"],color:["#ffbf7c","rgba(19,240,255,0.3)"],labelColor:"#ffbf7c",labelFontSize:"16%"}},zlhjlData:[],zlhjlParams:{canvasStyle:{width:"100%",height:"100%"},options:{spiritImg:"bg2.png",spiritBgImg:"zlhjl-bg.png",yAxisLabelSize:22,yAxisLabelShow:!0,bottom:"10%",top:"15%",labelColor:"#4eed99",labelSize:16,xAxisLabelSize:"16%",xAxisLabelColor:"#fefefe",categoryBr:!0,brNum:4}}}},mounted:function(){this.getInitApi(this.selectYear)},methods:{getInitApi:function(t){var a=this;Object(i.a)("mdgjMdfl",{year:t}).then(function(t){a.data=t.data,a.initData(a.data),a.loadFlag=!0}).catch(function(t){console.log(t)})},initData:function(a){var e=this;this.depList=a.xflhjlDetail.data.length?a.xflhjlDetail.data:[],this.$nextTick(function(){var a=[];e.depList.filter(function(t){a.push(Math.max(t.jc,t.rc).toString().length)}),t(".itemCount").width(.2*Math.max.apply(null,a)+"rem")}),this.allcount=a.xflhjlDetail.allcount?a.xflhjlDetail.allcount:0,this.yetcount=a.xflhjlDetail.yetcount?a.xflhjlDetail.yetcount:0,this.gjhjlData=a.gjhjl.length?a.gjhjl:[],this.zlhjlData=a.zlhjl.length?a.zlhjl:[]}},watch:{selectYear:{handler:function(t,a){this.getInitApi(this.selectYear)}}}}}).call(a,e("exq/"))},yVh9:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAADhAQMAAABWcr83AAAAA1BMVEUOldLJD913AAAAAXRSTlMz/za5cAAAABVJREFUGBljGAWjYBSMglEwCkYwAAAHCAABSEogkAAAAABJRU5ErkJggg=="},z9qv:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("oGkR"),n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"c-left"},[e("ctitle",{attrs:{title:"信访矛盾化解攻坚信访量化解率"}}),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"w-allCount"},[e("p",[t._v("\n            化解\n            "),t.loadFlag?e("incNumber",{staticClass:"number yetCount",attrs:{incNumber:t.yetcount}}):t._e(),t._v("\n            件次\n          ")],1),t._v(" "),e("p",[t._v("\n            共\n            "),t.loadFlag?e("incNumber",{staticClass:"number allCount",attrs:{incNumber:t.allcount}}):t._e(),t._v("\n            件次\n          ")],1)]),t._v(" "),e("div",{staticClass:"w-listItem"},t._l(t.depList,function(a,i){return e("div",{key:i,staticClass:"listItem"},[e("label",[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"listItemRight"},[e("p",[t.loadFlag?e("incNumber",{staticClass:"number itemCount",attrs:{incNumber:a.jc}}):t._e(),t._v("\n                件次\n                "),e("span",{staticClass:"perCount"},[t.loadFlag?e("incNumber",{staticClass:"number",attrs:{incNumber:a.jcPer}}):t._e(),t._v("%\n                ")],1)],1)])])}),0)]),t._v(" "),e("div",{staticClass:"chart"},[t.loadFlag?e("pictorialBar",{attrs:{params:t.zlhjlParams,data:t.zlhjlData}}):t._e()],1)],1),t._v(" "),e("div",{staticClass:"c-right"},[e("ctitle",{attrs:{title:"信访矛盾化解攻坚信访量各级化解率"}}),t._v(" "),e("div",{staticClass:"r-cont"},[e("div",{staticClass:"r-top"},t._l(t.gjhjlData.slice(0,2),function(a,i){return e("div",{key:i,staticClass:"rc-cont"},[e("h4",{staticClass:"chartTitle"},[t._v(t._s(a.area))]),t._v(" "),e("div",{staticClass:"echart-wrapper"},t._l(a.data,function(a,i){return e("div",{key:i,staticClass:"echart-cont"},[t.loadFlag?e("petalpie",{staticClass:"petalpie",attrs:{params:t.gjhjlParams,data:a}}):t._e(),t._v(" "),e("p",[t._v(t._s(a.name))]),t._v(" "),e("p",[t._v(t._s(a.competeCount)+"件")])],1)}),0)])}),0),t._v(" "),e("div",{staticClass:"r-bottom"},t._l(t.gjhjlData.slice(2,4),function(a,i){return e("div",{key:i,staticClass:"rc-cont"},[e("h4",{staticClass:"chartTitle"},[t._v(t._s(a.area))]),t._v(" "),e("div",{staticClass:"echart-wrapper"},t._l(a.data,function(a,i){return e("div",{key:i,staticClass:"echart-cont"},[t.loadFlag?e("petalpie",{staticClass:"petalpie",attrs:{params:t.gjhjlParams,data:a}}):t._e(),t._v(" "),e("p",[t._v(t._s(a.name))]),t._v(" "),e("p",[t._v(t._s(a.competeCount)+"件")])],1)}),0)])}),0)])],1)])])},staticRenderFns:[]};var l=function(t){e("Sfxl")},s=e("C7Lr")(i.a,n,!1,l,"data-v-fb5215a0",null);a.default=s.exports}});