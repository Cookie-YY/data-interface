(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40cf8799"],{"05ae":function(t,a,e){},"06c4":function(t,a,e){},"0b49":function(t,a,e){"use strict";var n=e("6e30"),i=e.n(n);i.a},"10a8":function(t,a,e){"use strict";var n=e("8f01"),i=e.n(n);i.a},1148:function(t,a,e){"use strict";var n=e("a691"),i=e("1d80");t.exports="".repeat||function(t){var a=String(i(this)),e="",r=n(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(a+=a))1&r&&(e+=a);return e}},"1bd3":function(t,a,e){"use strict";var n=e("e999"),i=e.n(n);i.a},"408a":function(t,a,e){var n=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},4446:function(t,a,e){},"4c1e":function(t,a,e){},"4de4":function(t,a,e){"use strict";var n=e("23e7"),i=e("b727").filter,r=e("1dde"),s=e("ae40"),o=r("filter"),l=s("filter");n({target:"Array",proto:!0,forced:!o||!l},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},6043:function(t,a,e){"use strict";var n=e("7757"),i=e.n(n);i.a},"6e30":function(t,a,e){},7757:function(t,a,e){},"7a77":function(t,a,e){},"7b01":function(t,a,e){"use strict";var n=e("05ae"),i=e.n(n);i.a},"7f726":function(t,a,e){"use strict";var n=e("4446"),i=e.n(n);i.a},"8d3a":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.count<0,expression:"count<0"}],staticClass:"all-count",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[t.count>=0?e("div",{staticClass:"inner"},[e("incNumber",{staticClass:"number",attrs:{incNumber:t.count}}),e("span",{staticClass:"unit"},[t._v("件 次")])],1):t._e()])},i=[],r=(e("a9e3"),e("d3b7"),e("25f0"),e("ad97")),s={name:"allCount",components:{incNumber:r["a"]},props:{count:{type:Number,default:-1}},data:function(){return{numMaxLength:1}},watch:{count:function(){this.count&&(this.numMaxLength=this.count.toString().length)}}},o=s,l=(e("b1b2"),e("2877")),c=Object(l["a"])(o,n,i,!1,null,"a3ea9bf4",null);a["a"]=c.exports},"8f01":function(t,a,e){},"910f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.listData.length,expression:"!listData.length"}],staticClass:"detail-list",attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}},[e("div",{staticClass:"inner"},[e("ul",t._l(t.listData.slice(0,t.breakNumber),(function(a,n){return e("li",{key:n,staticClass:"item"},[e("p",{staticClass:"label",attrs:{title:a.name}},[t._v(t._s(a.name))]),e("div",{staticClass:"item-detail"},[e("p",{staticClass:"jc"},[e("incNumber",{staticClass:"number",style:{width:15*t.numMaxLength+"px"},attrs:{incNumber:a[t.mapKey[t.getArrayIndex("信访件次")]]}}),e("span",{staticClass:"number-unit"},[t._v("件次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[t.mapKey[t.getArrayIndex("件次占比")]]).toFixed(2)}}),e("span",[t._v(t._s(a[t.mapKey[t.getArrayIndex("件次占比")]]))]),e("span",{staticClass:"per-unit"},[t._v("%")])],1),e("div"),e("p",{staticClass:"rc"},[e("incNumber",{staticClass:"number",style:{width:15*t.numMaxLength+"px"},attrs:{incNumber:a[t.mapKey[t.getArrayIndex("信访人次")]]}}),e("span",{staticClass:"number-unit"},[t._v("人次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[t.mapKey[t.getArrayIndex("人次占比")]]).toFixed(2)}}),e("span",{staticClass:"per-unit"},[t._v("%")])],1)])])})),0),100!==t.breakNumber&&t.listData.length>t.breakNumber?e("ul",t._l(t.listData.slice(t.breakNumber),(function(a,n){return e("li",{key:n,staticClass:"item"},[e("p",{staticClass:"label",attrs:{title:a.name}},[t._v(t._s(a.name))]),e("div",{staticClass:"item-detail"},[e("p",{staticClass:"jc"},[e("incNumber",{staticClass:"number",style:{width:15*t.numMaxLength+"px"},attrs:{incNumber:a[t.mapKey[t.getArrayIndex("信访件次")]]}}),e("span",{staticClass:"number-unit"},[t._v("件次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[t.mapKey[t.getArrayIndex("件次占比")]]).toFixed(2)}}),e("span",{staticClass:"per-unit"},[t._v("%")])],1),e("div"),e("p",{staticClass:"rc"},[e("incNumber",{staticClass:"number",style:{width:15*t.numMaxLength+"px"},attrs:{incNumber:a[t.mapKey[t.getArrayIndex("信访人次")]]}}),e("span",{staticClass:"number-unit"},[t._v("人次")]),e("incNumber",{staticClass:"percent",attrs:{incNumber:(100*a[t.mapKey[t.getArrayIndex("人次占比")]]).toFixed(2)}}),e("span",{staticClass:"per-unit"},[t._v("%")])],1)])])})),0):t._e()])])},i=[],r=(e("4de4"),e("d81d"),e("a9e3"),e("b64b"),e("d3b7"),e("07ac"),e("25f0"),e("ad97")),s={name:"detailList",components:{incNumber:r["a"]},props:{params:{type:[Object,Array],default:null},breakNumber:{type:Number,default:100}},data:function(){return{mapKey:[],mapValue:[],numMaxLength:0,listData:[]}},mounted:function(){},methods:{setLength:function(){this.mapKey=Object.keys(this.params.map),this.mapValue=Object.values(this.params.map);var t=[];this.params instanceof Array?this.listData=this.params:this.listData=this.params.data,this.listData.filter((function(a){t.push(Math.max(a.value_g0_1,a.value_g2_1).toString().length)})),this.numMaxLength=Math.max.apply(null,t)},getArrayIndex:function(t){var a=this.mapValue.length;while(a--)if(this.mapValue[a]===t)return a;return-1}},computed:{styleType:function(){return this.$store.state.styleType}},watch:{params:function(){this.setLength()}}},o=s,l=(e("10a8"),e("2877")),c=Object(l["a"])(o,n,i,!1,null,"3a503068",null);a["a"]=c.exports},9539:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-title"},[t._m(0),e("h4",[t._v(t._s(t.title))])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"line"},[e("i",{staticClass:"l-1",staticStyle:{"animation-delay":"0.2s"}}),e("i",{staticClass:"l-2",staticStyle:{"animation-delay":"0.4s"}}),e("i",{staticClass:"l-3",staticStyle:{"animation-delay":"0.6s"}})])}],r={name:"index",props:{title:{type:String,default:"标题"}}},s=r,o=(e("1bd3"),e("2877")),l=Object(o["a"])(s,n,i,!1,null,"3949477d",null);a["a"]=l.exports},aca2:function(t,a,e){"use strict";var n=e("4c1e"),i=e.n(n);i.a},ad97:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"incNumber"},[t._v(t._s(t.number))])},i=[],r=(e("a9e3"),e("b680"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("1276"),{name:"index",props:{incNumber:{type:[Number,String],default:function(){return 0}}},data:function(){return{number:0}},created:function(){this.init()},methods:{init:function(){this.NumAutoPlusAnimation({time:3e3,num:this.incNumber,regulator:100})},NumAutoPlusAnimation:function(t){var a=this;t=t||{};var e,n,i=t.time||10,r=void 0===t.num?0:t.num,s=t.regulator||100,o=r/(i/s),l=0,c=0;r%1!==0&&(e=String(r).split("."),n=e[1].length);var u=setInterval((function(){l+=o,l>=r&&(clearInterval(u),l=r);var t=0;t=r%1===0?Math.floor(l):l.toFixed(n),t!==c&&(c=t,a.number=c)}),50)},formatMoney:function(t,a){if(/[^0-9\.]/.test(t))return"0.00";if(null==t||"null"==t||""==t)return"0.00";t=t.toString().replace(/^(\d*)$/,"$1."),t=(t+"00").replace(/(\d*\.\d\d)\d*/,"$1"),t=t.replace(".",",");var e=/(\d)(\d{3},)/;while(e.test(t))t=t.replace(e,"$1,$2");if(t=t.replace(/,(\d\d)$/,".$1"),0==a){var n=t.split(".");"00"==n[1]&&(t=n[0])}return t}},watch:{incNumber:{handler:function(t,a){this.number=t,this.init()},deep:!0}}}),s=r,o=(e("aca2"),e("2877")),l=Object(o["a"])(s,n,i,!1,null,"28b38ba0",null);a["a"]=l.exports},b1b2:function(t,a,e){"use strict";var n=e("7a77"),i=e.n(n);i.a},b680:function(t,a,e){"use strict";var n=e("23e7"),i=e("a691"),r=e("408a"),s=e("1148"),o=e("d039"),l=1..toFixed,c=Math.floor,u=function(t,a,e){return 0===a?e:a%2===1?u(t,a-1,e*t):u(t*t,a/2,e)},d=function(t){var a=0,e=t;while(e>=4096)a+=12,e/=4096;while(e>=2)a+=1,e/=2;return a},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var a,e,n,o,l=r(this),h=i(t),p=[0,0,0,0,0,0],m="",f="0",b=function(t,a){var e=-1,n=a;while(++e<6)n+=t*p[e],p[e]=n%1e7,n=c(n/1e7)},v=function(t){var a=6,e=0;while(--a>=0)e+=p[a],p[a]=c(e/t),e=e%t*1e7},g=function(){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==p[t]){var e=String(p[t]);a=""===a?e:a+s.call("0",7-e.length)+e}return a};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(a=d(l*u(2,69,1))-69,e=a<0?l*u(2,-a,1):l/u(2,a,1),e*=4503599627370496,a=52-a,a>0){b(0,e),n=h;while(n>=7)b(1e7,0),n-=7;b(u(10,n,1),0),n=a-1;while(n>=23)v(1<<23),n-=23;v(1<<n),b(1,1),v(2),f=g()}else b(0,e),b(1<<-a,0),f=g()+s.call("0",h);return h>0?(o=f.length,f=m+(o<=h?"0."+s.call("0",h-o)+f:f.slice(0,o-h)+"."+f.slice(o-h))):f=m+f,f}})},b85c:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0");var n=e("06c5");function i(t,a){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=Object(n["a"])(t))||a&&t&&"number"===typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){l=!0,s=t},f:function(){try{o||null==e["return"]||e["return"]()}finally{if(l)throw s}}}}},bb1c:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"c-left"},[e("ctitle",{attrs:{title:"一级内容信访量占比"}}),e("div",{staticClass:"inner"},[e("div",{staticClass:"c-l-t"},[e("allCount",{staticClass:"part",attrs:{count:t.allcount}}),e("detailList",{staticClass:"part",attrs:{params:t.detailList}})],1),e("div",{staticClass:"c-l-b"},[e("BasicPie",{attrs:{params:t.pieParams},on:{change:t.handlePieClick}})],1)])],1),e("div",{staticClass:"c-right"},[e("ctitle",{attrs:{title:t.curName+"信访量分布"}}),e("div",{staticClass:"inner"},[e("btn1",{staticClass:"btn1",on:{change:t.btn1Click}}),e("btn2",{staticClass:"btn2",on:{change:t.btn2Click}}),e("btn3",{directives:[{name:"show",rawName:"v-show",value:t.btn3Show,expression:"btn3Show"}],staticClass:"btn3",on:{change:t.btn3Click}}),"hebei"!==t.mapParams.options.JSON?e("div",{staticClass:"map-back",on:{click:t.mapBack}}):t._e(),e("Map",{staticClass:"map",attrs:{params:t.mapParams},on:{change:t.handleMap}})],1)],1)])])},i=[],r=e("365c"),s=e("9539"),o=e("8d3a"),l=e("910f"),c=e("840a"),u=e("d540"),d=e("d70f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btn1"},[e("ul",t._l(t.arr,(function(a,n){return e("li",{key:n,class:[0===n||2===n||4===n?"item":"line",t.curName===a?"active":""],on:{click:function(e){return t.handleClick(a)}}},[t._v(" "+t._s(a)+" ")])})),0)])},p=[],m={name:"btn1",data:function(){return{arr:["全部","","进京访","","赴省访"],curName:"全部"}},methods:{handleClick:function(t){this.curName=t,this.$emit("change",this.curName)}}},f=m,b=(e("dc6e"),e("2877")),v=Object(b["a"])(f,h,p,!1,null,"a5b802ce",null),g=v.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btn2"},[e("ul",t._l(t.arr,(function(a,n){return e("li",{key:n,class:t.curName===a?"active":"",on:{click:function(e){return t.handleClick(a)}}},[e("p",[t._v(t._s(a))])])})),0)])},C=[],x={name:"btn2",data:function(){return{arr:["件次","人次"],curName:"件次"}},methods:{handleClick:function(t){this.curName=t,this.$emit("change",this.curName)}}},w=x,I=(e("0b49"),Object(b["a"])(w,y,C,!1,null,"1bba5614",null)),S=I.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btn3"},[e("ul",t._l(t.arr,(function(a,n){return e("li",{key:n,class:t.curName===a?"active":"",on:{click:function(e){return t.handleClick(a)}}},[e("i",{staticClass:"icon"}),t._v(" "+t._s(a)+" ")])})),0)])},A=[],_={name:"btn3",data:function(){return{arr:["问题属地","常住地"],curName:"invalid"}},methods:{handleClick:function(t){this.curName=t,this.$emit("change",this.curName)}}},k=_,D=(e("7b01"),Object(b["a"])(k,N,A,!1,null,"dbfbd296",null)),j=D.exports,$={name:"dyfb",components:{ctitle:s["a"],allCount:o["a"],detailList:l["a"],PieChart3D:c["a"],Map:u["a"],BasicPie:d["a"],btn1:g,btn2:S,btn3:j},data:function(){return{curName:"",curCity:"河北省",btn3Show:!1,mapJson:{"河北省":"hebei","石家庄市":"shijiazhuang","保定市":"baoding","唐山市":"tangshan","秦皇岛市":"qinhuangdao","邯郸市":"handan","邢台市":"xingtai","张家口市":"zhangjiakou","承德市":"chengde","沧州市":"cangzhou","廊坊市":"langfang","衡水市":"hengshui","定州市":"dingzhou","辛集市":"xinji","雄安新区":"xionganxinqu"},allcount:-1,detailList:null,pieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{defaultHigh:-1,colors:this.$STANDARD.pieMiddleColors,title:"",insidePercent:!0,radius:["35%","60%"],center:["50%","50%"],labelShow:!0,labelRich:{b:this.fontSize(.18),d:this.fontSize(.24),bHeight:this.fontSize(.3)},length:20,length2:50,borderColor:"#0B2244",bRichPadding:[30,-50,0,-50],borderWidth:0,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"12%"},labelSize:"20%",rollFlag:!1}},mapParams:{canvasStyle:{width:"90%",height:"100%"},data:[],options:{mockData:!1,JSON:"hebei",xName:"name",yName:"value",map:{value:"信访量"},carousel:!0}}}},mounted:function(){this.getAPI(this.year)},methods:{getAPI:function(t){var a=this;Object(r["a"])("gjzlSdgjDyfbZbTotal",{year:t}).then((function(t){a.allcount=t.data.data[0].value})).catch((function(t){console.log(t)})),Object(r["a"])("gjzlSdgjDyfbZbList",{year:t}).then((function(t){a.detailList=t.data})).catch((function(t){console.log(t)})),Object(r["a"])("gjzlSdgjDyfbZbPie",{year:t}).then((function(t){a.pieParams.data=t.data.data})).catch((function(t){console.log(t)})),this.getMapAPI()},getMapAPI:function(t){var a=this;Object(r["a"])("gjzlSdgjDyfbFbMap",{year:t}).then((function(t){a.mapParams.data=t.data.data})).catch((function(t){console.log(t)}))},handlePieClick:function(t){this.curName=t,this.getMapAPI()},handleMap:function(t){for(var a in this.curCity=t,this.mapJson)this.curCity===a&&(this.mapParams.options.JSON=this.mapJson[t])},mapBack:function(){this.curCity="河北省",this.mapParams.options.JSON="hebei"},btn1Click:function(t){this.getMapAPI()},btn2Click:function(t){this.btn3Show=!("件次"===t),this.getMapAPI()},btn3Click:function(t){this.getMapAPI()},fontSize:function(t){var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{year:function(){return this.$store.state.year}},watch:{year:function(t){this.getAPI(t,this.curTypeId)}}},O=$,M=(e("7f726"),Object(b["a"])(O,n,i,!1,null,"1667a1fe",null));a["default"]=M.exports},d540:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.loadFlag,expression:"!loadFlag"}],ref:"chartEl",staticClass:"map-chart",style:{width:t.params.canvasStyle.width,height:t.params.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},i=[],r=(e("99af"),e("4160"),e("d81d"),e("b0c0"),e("b64b"),e("d3b7"),e("07ac"),e("159b"),e("ddb0"),e("b85c")),s=e("313e"),o=e("365c"),l={name:"yunnan",props:{params:Object},data:function(){return{myChart:null,rollFlag:!0,loadFlag:!1}},mounted:function(){var t=this;this.init(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{init:function(){var t=this;if(this.myChart&&(this.myChart.dispose(),this.myChart=null),0!==this.params.data.length){var a=this.params.options;Object(o["b"])("".concat(this.params.options.JSON,".json")).then((function(e){t.loadFlag=!0,s["registerMap"]("guangdong",e.data),t.myChart=s["init"](t.$refs.chartEl);var n=0,i=[],o=Object.keys(a.map),l=Object.values(a.map);if(a.mockData){var c,u=Object(r["a"])(e.data.features.values());try{for(u.s();!(c=u.n()).done;){var d=c.value;function h(t,a){return Math.floor(Math.random()*(a-t+1))+t}var p={name:d.properties.name,value:h(1,100)};i.push(p);var m,f=Object(r["a"])(i.values());try{for(f.s();!(m=f.n()).done;){var b=m.value;n=n>b.value?n:b.value}}catch(x){f.e(x)}finally{f.f()}}}catch(x){u.e(x)}finally{u.f()}}else{var v,g=Object(r["a"])(t.params.data.values());try{var y=function(){var t=v.value;n=n>t[a.yName]?n:t[a.yName];var e={name:t[a.xName],value:t[a.yName],zlevel:1};o.forEach((function(a,n){e[a]=t[a]})),i.push(e)};for(g.s();!(v=g.n()).done;)y()}catch(x){g.e(x)}finally{g.f()}}t.option={tooltip:{backgroundColor:"rgba(9, 39, 109, 0.8)",padding:[10,20],formatter:function(t){return a.isHome?'\n                  <div class="tooltips">\n                    <p><span class="number">'.concat(t.data[o[0]],'</span>件次</p>\n                    <p><span class="name">').concat(l[1],'</span><span class="number">').concat(t.data[o[1]],'</span></p>\n                    <p><span class="name">').concat(l[2],'</span><span class="number">').concat(t.data[o[2]],'</span></p>\n                    <p><span class="name">').concat(l[3],'</span><span class="number">').concat(t.data[o[3]],"</span></p>\n                  </div>"):t.name+" : "+t.value}},geo:[{show:!0,map:"guangdong",aspectScale:.75,zoom:1,label:{normal:{show:!0,formatter:function(t){if(t.value)return t.name},position:"bottom",textStyle:{color:"#000",fontSize:16}},emphasis:{textStyle:{color:"#fff"}}},roam:!1,itemStyle:{normal:{areaColor:"#fff",shadowColor:"#122773",shadowOffsetX:15,shadowOffsetY:10},emphasis:{areaColor:"#fefa82",borderWidth:0,color:"green",label:{show:!1}}},z:2}],visualMap:{show:!1,min:0,max:n,text:["高","低"],calculable:!0,itemWidth:"12%",itemHeight:"110%",textStyle:{color:"#fff",fontSize:"14%"},bottom:"10%",left:"5%",inRange:{color:["#fff","#ffad83","#f2684f"]}},series:[{type:"map",map:"guangdong",aspectScale:.75,zoom:1,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1,areaColor:"#12235c"},emphasis:{areaColor:"#fefa82"}},data:i}]},t.myChart.setOption(t.option),a.carousel&&t.chartMove();var C=-1;t.myChart.on("click",(function(a){var e=a.name;if("440000"!==t.params.options.JSON){if(C===a.dataIndex)return;t.myChart.dispatchAction({type:"downplay",dataIndex:C}),t.myChart.dispatchAction({type:"highlight",dataIndex:a.dataIndex}),C=a.dataIndex,e=a.name}t.$emit("change",e)})),t.myChart.on("mouseover",(function(e){if(a.carousel){if(t.rollFlag=!1,e.dataIndex===t.app.currentIndex)return;t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex})}})),t.myChart.on("mouseout",(function(a){t.rollFlag=!0}))}))}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=t.option.series[0].data.length;t.rollFlag&&(t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%a,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)}},computed:{styleType:function(){return this.$store.state.styleType},realData:function(){return this.params.data}},watch:{realData:{handler:function(t,a){this.init()},deep:!0}}},c=l,u=(e("6043"),e("2877")),d=Object(u["a"])(c,n,i,!1,null,null,null);a["a"]=d.exports},d70f:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.params.data.length,expression:"!params.data.length"}],ref:"chartEl",style:{width:t.canvasStyle.width,height:t.canvasStyle.height},attrs:{"element-loading-background":t.$STANDARD.loadingBgColor}})},i=[],r=(e("99af"),e("4160"),e("b0c0"),e("159b"),e("2909")),s=e("313e"),o=e.n(s),l={name:"PieProgress",props:{params:{type:Object,default:function(){return{canvasStyle:{width:"500px",height:"500px"},options:{placeHolder:!0,titleShow:!0,clockwise:!0,labelCut:!0,roseType:"area",legend:{show:!0,left:10,top:240,orient:"vertical"},radius:["30%","60%"],center:["50%","50%"],insidePercent:!1,unit:"条"},data:[{name:"A",value:10},{name:"B",value:30},{name:"C",value:70}]}}},animateFlag:Boolean},data:function(){return{myChart:null}},mounted:function(){var t=this;this.initChart(),this.$once("hook:beforeDestroy",(function(){t.interval&&clearInterval(t.interval),t.myChart&&t.myChart.dispose()}))},methods:{initChart:function(){var t=this;if(this.myChart&&this.myChart.dispose(),this.myChart=o.a.init(this.$refs.chartEl),0!==this.params.data.length){var a=this.params.options,e=Object(r["a"])(this.params.data),n=0,i=0;e.forEach((function(t){n+=t.value})),i=.015*n;for(var s={text:{color:"#fff",fontSize:16,align:"center"},value:{color:"#fff",fontSize:20,fontWeight:"bold",align:"center",lineHeight:20},percent:{color:"#e03562",fontSize:a.labelInnerSize?a.labelInnerSize:16,fontWeight:"bold",lineHeight:30,align:"center",padding:[3,0]},total:{color:this.$STANDARD.mainColor}},l={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},c=[],u={},d={},h=(a.colors,0),p=e.length;h<p;h++)u={value:e[h].value,name:e[h].name},d={value:i,name:"",itemStyle:l},a.placeHolder?c.push(u,d):c.push(u);var m={name:"外部扇区",hoverAnimation:!1,type:"pie",center:a.center||["50%","50%"],roseType:!!a.roseType&&a.roseType,radius:a.radius?a.radius:["0%","60%"],label:{show:!0,position:"outside",fontSize:a.labelFontSize?a.labelFontSize:16,align:"center",color:"#fff"},labelLine:{show:!0,lineStyle:{color:this.$STANDARD.labelLineColor}},itemStyle:{color:function(t){return Array.isArray(a.colors[t.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[t.dataIndex][0]},{offset:1,color:a.colors[t.dataIndex][1]}],global:!1}:a.colors[t.dataIndex]}},data:c,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 80*t}},f={name:"内部扇区",type:"pie",center:a.center||["50%","50%"],roseType:a.roseType?a.roseType:"",radius:a.radius?a.radius:["0%","60%"],itemStyle:{color:function(t){return Array.isArray(a.colors[t.dataIndex])?{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:a.colors[t.dataIndex][0]},{offset:1,color:a.colors[t.dataIndex][1]}],global:!1}:a.colors[t.dataIndex]}},label:{normal:{show:!1,position:"center",formatter:"{percent|{d}%}",rich:s},emphasis:{show:!0}},labelLine:{normal:{show:!1}},data:c,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 80*t}},b=a.insidePercent?[f,m]:[m];this.myChart.setOption({tooltip:{show:!a.tooltip||(void 0===a.tooltip.show||a.tooltip.show),trigger:"item",backgroundColor:this.$STANDARD.tooltipBackgroundColor,textStyle:{color:this.$STANDARD.tooltipColor},position:!1===a.labelShow?["33%","35%"]:null,formatter:function(t){return t.name?"".concat(t.marker).concat(t.name," : ").concat(t.value):""}},title:{show:!!a.titleShow,text:"{total|"+n+"}\n总数",left:"center",top:"center",padding:[12,0],textStyle:{color:this.$STANDARD.titleColor,align:"center",rich:s}},legend:{show:!!a.legend&&a.legend.show,left:a.legend&&a.legend.left?a.legend.left:"left",top:a.legend&&a.legend.top?a.legend.top:"top",textStyle:{color:this.$STANDARD.legendColor},orient:a.legend&&a.legend.orient?a.legend.orient:"vertical"},series:b});var v=-1;if(this.myChart.on("click",(function(a){for(var n="",i=e.length,r=0;r<i;r++)t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:r});v===a.dataIndex?(v=-1,n=""):(v=a.dataIndex,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:a.dataIndex}),n=a.name),t.$emit("change",n)})),this.params.options.rollFlag)this.chartMove(),this.myChart.on("mouseover",(function(a){0!==a.seriesIndex&&(t.params.options.rollFlag=!1,a.dataIndex!==t.app.currentIndex&&t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}))})),this.myChart.on("mouseout",(function(a){t.params.options.rollFlag=!0}));else{var g=this.params.options.defaultHigh;""!==g&&void 0!==g&&this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:g})}}},chartMove:function(){var t=this;this.app={},this.app.currentIndex=-1,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){var a=t.params.data.length;t.params.options.rollFlag&&(t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:t.app.currentIndex}),t.app.currentIndex=(t.app.currentIndex+1)%a,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t.app.currentIndex}),t.myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t.app.currentIndex}))}),2e3)}},computed:{canvasStyle:function(){return{width:this.params.canvasStyle?this.params.canvasStyle.width:"500px",height:this.params.canvasStyle?this.params.canvasStyle.height:"500px"}}},watch:{animateFlag:{handler:function(t,a){this.initChart()}},"params.data":{handler:function(t,a){this.initChart()},deep:!0}}},c=l,u=e("2877"),d=Object(u["a"])(c,n,i,!1,null,"425e3e62",null);a["a"]=d.exports},d81d:function(t,a,e){"use strict";var n=e("23e7"),i=e("b727").map,r=e("1dde"),s=e("ae40"),o=r("map"),l=s("map");n({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dc6e:function(t,a,e){"use strict";var n=e("06c4"),i=e.n(n);i.a},e999:function(t,a,e){}}]);
//# sourceMappingURL=chunk-40cf8799.f2f9205d.js.map