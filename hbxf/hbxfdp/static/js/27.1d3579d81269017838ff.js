webpackJsonp([27],{V1qJ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("HzJ8"),n=e.n(i),s=e("gyMJ"),r=e("6cNN"),l=e("JgS+"),c=e("2PJi"),o=e("76NS"),d=e("05XX"),h=e("3tkN"),u=e("3UrB"),g={name:"mdgjDjqy",components:{ctitle:r.a,incNumber:l.a,PieChart3D:c.a,loopPie:o.a,LinesR:d.a,cirCircle:h.a,allCount:u.a},data:function(){return{loadFlag:!1,depList:[],hjvValue:-1,qsLineParams:{data:[],colors:[{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{axisLabelColor:"#fff",yaxisLabelColor:"#82d8ff",legendfontSize:18,splitLineShow:!0,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"年",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"8%",right:"10%",top:"20%",bottom:"5%",legendTop:"5%",legendRight:"10%"},canvasStyle:{width:"100%",height:"100%"},map:{},xName:"name"},allcount:-1,hjType:[],jbdbArr:[{name:"交办",params:{data:[],styleObj:{width:"100%",height:"90%"}}},{name:"督办",params:{data:[],styleObj:{width:"100%",height:"90%"}}}],jbdbPieParams:{data:[],angle:20,radius:"30%",labelRadius:15,fontSize:this.fontSize(.16),color:["#5166c1","#32b1e0","#15bbc2"],styleObj:{width:"100%",height:"90%"}},hjArr:[{name:"省级",params:{data:[]}},{name:"市级",params:{data:[]}},{name:"县级",params:{data:[]}}],hjPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{colors:[["#ffa8c5","#5850ff"],["#ff957c","#ffe97d"],["#dfffb1","#79cc7a"]],radius:["55%","70%"],center:["50%","50%"],centerRadius:["42%","43%"],labelRich:{b:this.fontSize(.2),d:this.fontSize(.2),bHeight:this.fontSize(.3)},borderWidth:5,length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"22%",rollFlag:!0}}}},mounted:function(){this.getAPI(this.year)},methods:{getAPI:function(t){var a=this;Object(s.a)("gjzlSdgjDjjgHjvValue",{year:t}).then(function(t){a.hjvValue=(100*t.data.data[0].value).toFixed(0)}).catch(function(t){console.log(t)}),Object(s.a)("gjzlSdgjDjjgQsLine",{year:t}).then(function(t){a.qsLineParams.map=t.data.map,a.qsLineParams.data=t.data.data}).catch(function(t){console.log(t)}),Object(s.a)("gjzlSdgjDjjgHjtotal",{year:t}).then(function(t){a.allcount=t.data.data[0].value}).catch(function(t){console.log(t)}),Object(s.a)("gjzlSdgjDjjgHjType",{year:t}).then(function(t){a.hjType=t.data.data}).catch(function(t){console.log(t)}),this.getJbdbPieAPI(t),this.getHjPieAPI(t)},getJbdbPieAPI:function(t){var a=this,e=function(e){e.params=a.jbdbPieParams,Object(s.a)("gjzlSdgjDjjgJbdbHhjjPie",{year:t,djjg:e.name}).then(function(t){e.params.data=t.data.data}).catch(function(t){console.log(t)})},i=!0,r=!1,l=void 0;try{for(var c,o=n()(this.jbdbArr.values());!(i=(c=o.next()).done);i=!0){e(c.value)}}catch(t){r=!0,l=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw l}}},getHjPieAPI:function(t){var a=this,e=function(e){e.params=a.hjPieParams,Object(s.a)("gjzlSdgjDjjgSsxhjPie",{year:t,djjg:e.name}).then(function(t){e.params.data=t.data.data}).catch(function(t){console.log(t)})},i=!0,r=!1,l=void 0;try{for(var c,o=n()(this.hjArr.values());!(i=(c=o.next()).done);i=!0){e(c.value)}}catch(t){r=!0,l=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw l}}},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{styleType:function(){return this.$store.state.styleType},year:function(){return this.$store.state.year}},watch:{year:function(t){this.getAPI(t)}}},f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"c-left"},[e("div",{staticClass:"c-l-t"},[e("ctitle",{attrs:{title:"整体化解率"}}),t._v(" "),e("div",{staticClass:"inner"},[e("cir-circle",{attrs:{count:t.hjvValue}})],1)],1),t._v(" "),e("div",{staticClass:"c-l-b"},[e("ctitle",{attrs:{title:"信访件总量、办结、化解趋势"}}),t._v(" "),e("div",{staticClass:"charts"},[e("LinesR",{attrs:{params:t.qsLineParams}})],1)],1)]),t._v(" "),e("div",{staticClass:"c-right"},[e("div",{staticClass:"c-r-t"},[e("ctitle",{attrs:{title:"国家交办、督办矛盾化解信访件"}}),t._v(" "),e("div",{staticClass:"inner"},[e("div",{staticClass:"detail"},[e("allCount",{staticClass:"all-count",attrs:{count:t.allcount}}),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.hjType.length,expression:"!hjType.length"}],staticClass:"inner",attrs:{"element-loading-background":t.$STANDARD(t.styleType).loadingBgColor}},t._l(t.hjType,function(a,i){return e("div",{key:i,staticClass:"detail-item"},[e("label",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),e("incNumber",{staticClass:"number",attrs:{incNumber:a.jc}}),t._v(" "),e("span",{staticClass:"unit"},[t._v("件次")]),t._v(" "),e("incNumber",{staticClass:"per-number",attrs:{incNumber:a.jcPer}}),t._v(" "),e("span",{staticClass:"per-unit"},[t._v("%")])],1)}),0)],1),t._v(" "),t._l(t.jbdbArr,function(a,i){return e("div",{key:i,staticClass:"chart"},[e("pie-chart3D",{attrs:{params:a.params}}),t._v(" "),e("p",{staticClass:"label"},[t._v(t._s(a.name))])],1)})],2)],1),t._v(" "),e("div",{staticClass:"c-r-b"},[e("ctitle",{attrs:{title:"省、市、县登记矛盾化解信访件"}}),t._v(" "),e("div",{staticClass:"inner"},t._l(t.hjArr,function(a,i){return e("div",{key:i,staticClass:"chart"},[e("loopPie",{attrs:{params:a.params}}),t._v(" "),e("p",{staticClass:"label"},[t._v(t._s(a.name))])],1)}),0)],1)])])])},staticRenderFns:[]};var b=e("C7Lr")(g,f,!1,function(t){e("iQ8s")},"data-v-53ba8766",null);a.default=b.exports},iQ8s:function(t,a){}});