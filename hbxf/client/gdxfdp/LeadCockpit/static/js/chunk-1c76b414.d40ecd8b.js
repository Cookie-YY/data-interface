(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c76b414"],{"1cda":function(t,a,e){"use strict";var i=e("26a2"),n=e.n(i);n.a},"26a2":function(t,a,e){},"2c3c":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.loadingFlag,expression:"!loadingFlag"}],staticClass:"w-depSeach",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor},on:{click:function(a){return t.popClose(a)}}},[e("div",{staticClass:"outer"},[e("div",{staticClass:"letterList"},[e("ul",t._l(t.letterArr,(function(a,i){return e("li",{key:i,class:[t.curLetter===a.name?"active":"",a.disable?"disable":""],on:{click:function(e){return t.letterClick(a)}}},[t._v(t._s(a.name)+" ")])})),0)]),e("div",{staticClass:"tab"},[e("ul",{staticClass:"clearfloat"},t._l(t.tabArr[t.permissions],(function(a,i){return e("li",{key:i,class:t.curtab===a?"active":"",on:{click:function(e){return t.tabClick(a)}}},[t._v(t._s(a)+" ")])})),0)]),e("div",{staticClass:"container"},[e("el-scrollbar",{ref:"myScrollbar",staticStyle:{height:"100%"}},[e("div",{staticClass:"inner"},[e("ul",{staticClass:"ul-letter"},t._l(t.allData,(function(a,i){return e("li",{key:i,ref:a.name,refInFor:!0,staticClass:"li-letter"},[e("p",{staticClass:"letter"},[t._v(t._s(a.name))]),e("ul",{staticClass:"ul-name"},t._l(a.value,(function(a,i){return e("li",{key:i,class:["li-name",t.curName===a?"active":""],attrs:{title:a},on:{click:function(e){return t.changeClick(a)}}},[t._v(t._s(a)+" ")])})),0)])})),0)])])],1),e("div",{staticClass:"btn",on:{click:t.confirm}},[t._v("确认")])])])},n=[],s=(e("b0c0"),e("d3b7"),e("ddb0"),e("b85c")),r=e("a78e"),c=e.n(r),l=e("365c"),o={name:"depSeach",props:{name:[String]},data:function(){return{loadingFlag:!1,JB:0,permissions:"",allData:[],letterList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],realLetterList:[],letterArr:[],curLetter:"A",tabArr:{"省级":["省级","市级","县级"],"市级":["市级","县级"],"县级":["县级"]},curtab:"省级",curName:"广东省",mapJson:{"广州市":"440100","韶关市":"440200","深圳市":"440300","珠海市":"440400","汕头市":"440500","佛山市":"440600","江门市":"440700","湛江市":"440800","茂名市":"440900","肇庆市":"441200","惠州市":"441300","梅州市":"441400","汕尾市":"441500","河源市":"441600","阳江市":"441700","清远市":"441800","东莞市":"441900","中山市":"442000","潮州市":"445100","揭阳市":"445200","云浮市":"445300"}}},mounted:function(){for(var t in"440000"===this.cookieCity&&(this.permissions="省级",this.JB=1),this.mapJson)this.cookieCity===this.mapJson[t]&&(this.permissions="市级",this.JB=2);this.permissions||(this.permissions="县级",this.JB=3),this.curtab=this.tabArr[this.permissions][0],this.curName=this.name,this.getAPI(this.JB)},methods:{getAPI:function(t){var a=this;this.loadingFlag=!1,this.allData=[],Object(l["a"])("depSeach",{jb:t}).then((function(t){a.loadingFlag=!0,a.allData=t.data.data,a.handleData()})).catch((function(t){console.log(t)}))},handleData:function(){this.letterArr=[],this.realLetterList=[];var t,a=Object(s["a"])(this.letterList.values());try{for(a.s();!(t=a.n()).done;){var e=t.value,i={name:e,disable:!0};this.letterArr.push(i)}}catch(m){a.e(m)}finally{a.f()}var n,r=Object(s["a"])(this.allData.values());try{for(r.s();!(n=r.n()).done;){var c=n.value;this.realLetterList.push(c.name)}}catch(m){r.e(m)}finally{r.f()}var l,o=Object(s["a"])(this.letterArr.values());try{for(o.s();!(l=o.n()).done;){var h,u=l.value,d=Object(s["a"])(this.realLetterList.values());try{for(d.s();!(h=d.n()).done;){var f=h.value;u.name===f&&(u.disable=!1)}}catch(m){d.e(m)}finally{d.f()}}}catch(m){o.e(m)}finally{o.f()}this.curLetter=this.allData[0].name},letterClick:function(t){t.disable||(this.curLetter=t.name,this.$refs["myScrollbar"].wrap.scrollTop=this.$refs[t.name][0].offsetTop)},tabClick:function(t){this.curtab=t,"省级"===this.curtab?this.JB=1:"市级"===this.curtab?this.JB=2:"县级"===this.curtab&&(this.JB=3),this.$refs["myScrollbar"].wrap.scrollTop=0,this.getAPI(this.JB)},changeClick:function(t){this.curName=this.curName===t?"":t},confirm:function(){this.$emit("changepop",this.curName),this.$parent.popShow=!1},popClose:function(t){var a=t.target;(a.classList.contains("w-depSeach")||a.classList.contains("close"))&&(this.$emit("changepop",""),this.$parent.popShow=!1)}},computed:{cookieCity:function(){return c.a.get("xzqhdm")}}},h=o,u=(e("1cda"),e("2877")),d=Object(u["a"])(h,i,n,!1,null,"502a80f4",null);a["a"]=d.exports},"348e":function(t,a,e){},"49dd":function(t,a,e){"use strict";var i=e("9dfe"),n=e.n(i);n.a},"5c74":function(t,a,e){"use strict";var i=e("c71a"),n=e.n(i);n.a},"9bf29":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"chartCP",style:{width:t.canvasStyle.width,height:t.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},n=[],s=(e("b0c0"),e("2909")),r=e("313e"),c=e.n(r),l={name:"CustomizedPie",data:function(){return{myChart:null}},props:{animateFlag:Boolean,params:{type:Object,default:function(){return{canvasStyle:{width:"500px",height:"500px"},options:{colors:[],radius:"80%",labelColor:"#fff",labelFontSize:12,unti:"件",labelLineHeight:20,itemStyle:{}},data:[{name:"A",value:20},{name:"B",value:30},{name:"C",value:50}]}}}},mounted:function(){var t=this;this.initChart(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{initChart:function(){if(this.myChart&&this.myChart.dispose(),this.myChart=c.a.init(this.$refs.chartCP),0!==this.params.data.length){var t,a=this.params.options,e=Object(s["a"])(this.params.data);e.sort((function(t,a){return t.value-a.value})),t={title:{text:this.params.wxbfb+"%",left:"13%",top:"5%",textStyle:{color:this.$STANDARD.titleColor,align:"center"}},color:a.colors,series:[{name:a.name?a.name:"",type:"pie",center:a.center?a.center:["50%","50%"],data:e,roseType:"radius",label:{position:a.position?a.position:"outside",formatter:"{b}\n {c}"+(a.unti?a.unti:"件"),color:a.labelColor?a.labelColor:"#fff",fontSize:a.labelFontSize,align:"left",lineHeight:a.labelLineHeight},labelLine:{normal:{lineStyle:{color:a.labelLineColor?a.labelLineColor:null},smooth:a.labelLineSmooth?a.labelLineSmooth:0,length:5,length2:5}},itemStyle:a.itemStyle,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 1e3*Math.random()}},{type:"pie",radius:a.radius?a.radius:"70%",data:e,roseType:"radius",label:{position:"inner",formatter:"{d}%",color:a.labelColor?a.labelColor:"#fff",fontSize:a.labelFontSize}}]},this.myChart.setOption(t)}}},computed:{canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"500px",height:this.params.canvasStyle?this.params.canvasStyle.height:"500px"}}},watch:{animateFlag:{handler:function(t,a){this.initChart()}},"params.data":{handler:function(t,a){this.initChart()},deep:!0}}},o=l,h=e("2877"),u=Object(h["a"])(o,i,n,!1,null,"1af52b42",null);a["a"]=u.exports},"9dfe":function(t,a,e){},a077:function(t,a,e){"use strict";var i=e("348e"),n=e.n(i);n.a},b534:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"typeChange"},t._l(t.arr,(function(a,i){return e("li",{key:i,class:t.curType===a.name?"active":"",on:{click:function(e){return t.changeType(a)}}},[t._v(t._s(a.name)+" ")])})),0)},n=[],s=(e("b0c0"),{name:"index",data:function(){return{arr:[{name:"参评率",id:"参评率"},{name:"满意率",id:"满意率"},{name:"及时受理率",id:"及时受理率"},{name:"网信占比",id:"网信占比"}],curType:"参评率",curTypeId:"参评率"}},methods:{changeType:function(t){this.curType=t.name,this.curTypeId=t.id,this.$emit("change",this.curTypeId)}}}),r=s,c=(e("5c74"),e("2877")),l=Object(c["a"])(r,i,n,!1,null,"17639b14",null);a["a"]=l.exports},c71a:function(t,a,e){},ce2b:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"w-seach",on:{click:t.handlePopShow}},[e("p",{attrs:{title:t.curName.length>6?t.curName:""}},[t._v(t._s(t.curName))])]),e("transition",{attrs:{name:"fade"}},[t.popShow?e("depSeach",{attrs:{name:t.curName},on:{changepop:t.popClick}}):t._e()],1),e("div",{staticClass:"content"},[e("div",{staticClass:"c-top"},[e("div",{staticClass:"w-charts"},[e("ctitle",{attrs:{title:"参评率"}}),e("div",{staticClass:"charts"},[e("meiguiPie",{attrs:{params:t.cplParams}})],1)],1),e("div",{staticClass:"w-charts"},[e("ctitle",{attrs:{title:"满意率"}}),e("div",{staticClass:"charts"},[e("meiguiPie",{attrs:{params:t.mylParams}})],1)],1),e("div",{staticClass:"w-charts"},[e("ctitle",{attrs:{title:"及时受理率"}}),e("div",{staticClass:"charts"},[e("meiguiPie",{attrs:{params:t.jssllParams}})],1)],1),e("div",{staticClass:"w-charts"},[e("ctitle",{attrs:{title:"网信占比"}}),e("div",{staticClass:"charts"},[e("meiguiPie",{attrs:{params:t.wxzbParams}})],1)],1)]),e("div",{staticClass:"c-bottom"},[e("div",{staticClass:"c-t-right"},[e("ctitle",{attrs:{title:"信访部门排名"}}),e("div",{staticClass:"w-charts"},[e("div",{staticClass:"btn"},[e("blzlBtn",{on:{change:t.changeBar}})],1),e("div",{staticClass:"chart"},[e("barline",{attrs:{params:t.xflphBarParams}})],1)])],1)])])],1)},n=[],s=(e("99af"),e("b680"),e("365c")),r=e("9539"),c=e("9bf29"),l=e("fcd1"),o=e("b534"),h=e("2c3c"),u=e("992d"),d={name:"allxfbm",components:{ctitle:r["a"],gcgcjkDiv:l["a"],meiguiPie:c["a"],blzlBtn:o["a"],depSeach:h["a"],barline:u["a"]},data:function(){return{popShow:!1,curName:"广东省信访局",curBmjb:"省级",curTypeId:"drop",gzgcjkData:[],zrdwBarBtn:"参评率",xflphBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{xName:"name",axisValueShow:!1,categoryBr:!0,axis1Name:"人次",axisLabelSize:14,left:"0%",right:"5%",top:"5%",bottom:"0%",barLabelOptions:"top",barWidth:"25%",barBorderRadius:10,splitLineShow:!1,barLabelShow:!1,axisLabelColor:"rgba(0, 176, 255, .8)",itemLabelColor:"rgba(0, 176, 255, .8)",colors:{bar:[["#7EE0FF","#036CF5"]]},map:{value:"数量"}}},cplParams:{wxbfb:"",canvasStyle:{width:"100%",height:"100%"},options:{colors:["rgb( 154, 5, 245 )","rgb( 235, 131, 124 )","rgb( 68, 240, 233 )","rgb( 12, 129, 254 )"],unti:"件",labelColor:"#fff",labelFontSize:16,labelLineSmooth:0,labelLineHeight:23},data:[]},mylParams:{wxbfb:"",wxbfbAll:"",canvasStyle:{width:"100%",height:"100%"},options:{colors:["rgb( 154, 5, 245 )","rgb( 235, 131, 124 )","rgb( 68, 240, 233 )","rgb( 12, 129, 254 )"],unti:"件",labelColor:"#fff",labelFontSize:16,labelLineSmooth:0,labelLineHeight:23},data:[]},jssllParams:{wxbfb:"",wxbfbAll:"",canvasStyle:{width:"100%",height:"100%"},options:{colors:["rgb( 154, 5, 245 )","rgb( 235, 131, 124 )","rgb( 68, 240, 233 )","rgb( 12, 129, 254 )"],unti:"件",labelColor:"#fff",labelFontSize:16,labelLineSmooth:0,labelLineHeight:23},data:[]},wxzbParams:{wxbfb:"",wxbfbAll:"",canvasStyle:{width:"100%",height:"100%"},options:{colors:["rgb( 154, 5, 245 )","rgb( 68, 240, 233 )","rgb( 12, 129, 254 )","rgb( 235, 131, 124 )"],unti:"件",labelColor:"#fff",labelFontSize:16,labelLineSmooth:0,labelLineHeight:23},data:[]}}},mounted:function(){this.getAPI(this.date,this.curName)},methods:{handlePopShow:function(){this.popShow=!0},popClick:function(t,a){this.curName=""===t?"部门索引":t,this.curBmjb=a,this.getAPI(this.date,this.curName)},changeBar:function(t){this.zrdwBarBtn=t,this.getBarAPI(this.date,this.curName)},getAPI:function(t,a){var e=this,i="部门索引"===a?"drop":a;Object(s["a"])("xfjxkhxfbm",{gd_id3:"参评饼图",xfbm:i,xfxs:this.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(a){e.cplParams.data=a.data.data,Object(s["a"])("xfjxkhxfbm",{gd_id3:"参评率",xfbm:i,xfxs:e.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.cplParams.wxbfb=(100*t.data.data[0].value).toFixed(2)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)})),Object(s["a"])("xfjxkhxfbm",{gd_id3:"满意饼图",xfbm:i,xfxs:this.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(a){e.mylParams.data=a.data.data,Object(s["a"])("xfjxkhxfbm",{gd_id3:"满意率",xfbm:i,xfxs:e.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.mylParams.wxbfb=(100*t.data.data[0].value).toFixed(2)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)})),Object(s["a"])("xfjxkhxfbm",{gd_id3:"及时受理饼图",xfbm:i,xfxs:this.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(a){e.jssllParams.data=a.data.data,Object(s["a"])("xfjxkhxfbm",{gd_id3:"及时受理率",xfbm:i,xfxs:e.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.jssllParams.wxbfb=(100*t.data.data[0].value).toFixed(2)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)})),Object(s["a"])("xfjxkhxfbm",{gd_id3:"网信占比饼图",xfbm:i,xfxs:this.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(a){e.wxzbParams.data=a.data.data,Object(s["a"])("xfjxkhxfbm",{gd_id3:"网信占比率",xfbm:i,xfxs:e.curTypeId,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.wxzbParams.wxbfb=(100*t.data.data[0].value).toFixed(2)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)})),this.getBarAPI(t,i)},getBarAPI:function(t,a){var e=this;Object(s["a"])("xfjxkhxfbm",{gd_id3:"排名",gd_id4:this.zrdwBarBtn,xfxs:this.curTypeId,bmjb:this.curBmjb,day:"[".concat(t.startDate,",").concat(t.endDate,"]")}).then((function(t){e.xflphBarParams.data=t.data.data})).catch((function(t){console.log(t)}))}},computed:{date:function(){return this.$store.state.date}},watch:{date:function(t){this.getAPI(t,this.curName)}}},f=d,m=(e("49dd"),e("2877")),b=Object(m["a"])(f,i,n,!1,null,"336a2f06",null);a["default"]=b.exports},fcd1:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"qh-wrapper"},t._l(t.data,(function(a,i){return e("div",{key:i,staticClass:"item"},[e("span",[t._v(t._s(a.name))]),e("div",{staticClass:"num"},[t._v(t._s(a.value))])])})),0)},n=[],s={name:"index",props:{data:{type:Array}}},r=s,c=(e("a077"),e("2877")),l=Object(c["a"])(r,i,n,!1,null,"5690ac08",null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-1c76b414.d40ecd8b.js.map