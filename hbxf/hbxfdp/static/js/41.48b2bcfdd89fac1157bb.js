webpackJsonp([41],{"16VP":function(t,a){},dOzb:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("gyMJ"),s=e("6cNN"),n=e("JgS+"),o=e("QlLh"),l=e("Es1k"),r=e("05XX"),c=e("t1kT"),h={name:"lmwsts",components:{ctitle:s.a,incNumber:n.a,typeChange:o.a,timeChange:l.a,LinesR:r.a,Map:c.a},data:function(){return{curTypeId:"drop",curCity:"drop",jctotal:0,jcTop3:[],mapParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{JSON:"hebei",xName:"name",yName:"value",map:{value:"信访量"},carousel:!1}},xflzsLineParams:{data:[],colors:[{line:"rgba(220, 150, 209, 1)",start:"rgba(220, 150, 209, 0.3)",end:"rgba(220, 150, 209, 0)"}],option:{splitLineShow:!0,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"年",axisYName:"件次",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"10%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"10%"},canvasStyle:{width:"100%",height:"100%"},map:{value:"数量"},xName:"name"},linesParams:{canvasStyle:{width:"100%",height:"100%"},data:[],colors:[{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{splitNumber:5,axisLabelColor:"#fff",yaxisLabelColor:"#82d8ff",legendfontSize:18,splitLineShow:!0,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisYName:"%",axisCategoryName:"月",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,left:"5%",right:"10%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"10%"},map:{},xName:"name"},wrbzsLineParams:{data:[],colors:[{line:"rgba(220, 150, 209, 1)",start:"rgba(220, 150, 209, 0.3)",end:"rgba(220, 150, 209, 0)"}],option:{splitLineShow:!0,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"年",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"5%",right:"10%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{value:"数量"},xName:"name"}}},mounted:function(){this.getAPI(this.year,this.curTypeId)},methods:{changeType:function(t){this.curTypeId=t,this.getAPI(this.year,this.curTypeId)},handleMapClick:function(t){this.curCity="全省"===t?"drop":t,this.getOtherAPI(this.year,this.curTypeId)},getAPI:function(t,a){var e=this;Object(i.a)("zlfxWtsdFbTotal",{year:t,xfxs:a}).then(function(t){e.jctotal=t.data.data[0].value}).catch(function(t){console.log(t)}),Object(i.a)("zlfxWtsdFbMap",{year:t,xfxs:a}).then(function(t){e.mapParams.data=t.data.data,e.jcTop3=t.data.data.sort(function(t,a){return a.value-t.value}).slice(0,3)}).catch(function(t){console.log(t)}),this.getOtherAPI(t,a)},getOtherAPI:function(t,a){var e=this;this.getXflzsLineAPI(t,a,"年度"),Object(i.a)("zlfxWtsdThbzsLine",{year:2020,shij_02:this.curCity,xfxs:a}).then(function(t){e.linesParams.map=t.data.map,e.linesParams.data=t.data.data}).catch(function(t){console.log(t)})},getXflzsLineAPI:function(t,a,e){var s=this,n="",o="";"年度"===e?(n="cy",o="[now-4, now]"):(n="cm",o=t),Object(i.a)("zlfxWtsdXflzsLine",{year:o,xfxs:a,shij_02:this.curCity,timetype:n}).then(function(t){s.xflzsLineParams.option.axisCategoryName="年度"===e?"年":"月",s.xflzsLineParams.data=t.data.data}).catch(function(t){console.log(t)})},getWrbzsLineAPI:function(t,a,e){var s,n=this;s="年度"===e?"cy":"cm",Object(i.a)("zlfxWtsdWrbzsLine",{year:t,xfxs:a,timetype:s}).then(function(t){n.wrbzsLineParams.option.axisCategoryName="年度"===e?"年":"月",n.wrbzsLineParams.data=t.data.data}).catch(function(t){console.log(t)})},xflzsTimeClick:function(t){this.getXflzsLineAPI(this.year,this.curTypeId,t)},wrbzsTimeClick:function(t){this.getWrbzsLineAPI(this.year,this.curTypeId,t)}},computed:{year:function(){return this.$store.state.year}},watch:{year:function(t){this.getAPI(t,this.curTypeId)}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("typeChange",{on:{change:t.changeType}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"c-left"},[e("ctitle",{attrs:{title:"信访量分布"}}),t._v(" "),e("div",{staticClass:"detail"},[e("p",{staticClass:"allNumber"},[e("span",[e("incNumber",{staticClass:"number",attrs:{incNumber:t.jctotal}})],1),t._v("件次\n        ")]),t._v(" "),e("div",{staticClass:"top3"},[e("div",{staticClass:"label"},[t._v("TOP")]),t._v(" "),e("ul",{staticClass:"list"},t._l(t.jcTop3,function(a,i){return e("li",{key:i,staticClass:"item"},[e("span",{staticClass:"order"},[t._v(t._s(i+1))]),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),e("incNumber",{staticClass:"number",attrs:{incNumber:a.value}}),t._v(" "),e("span",{staticClass:"unit"},[t._v("件次")])],1)}),0)])]),t._v(" "),e("Map",{staticClass:"map",attrs:{params:t.mapParams},on:{change:t.handleMapClick}})],1),t._v(" "),e("div",{staticClass:"c-right"},[e("div",{staticClass:"c-r-t"},[e("ctitle",{attrs:{title:"信访量走势"}}),t._v(" "),e("div",{staticClass:"inner"},[e("timeChange",{key:t.curTypeId+t.curCity,staticClass:"timeChange",on:{change:t.xflzsTimeClick}}),t._v(" "),e("LinesR",{attrs:{params:t.xflzsLineParams}})],1)],1),t._v(" "),e("div",{staticClass:"c-r-c"},[e("ctitle",{attrs:{title:"信访量同比、环比走势"}}),t._v(" "),e("div",{staticClass:"inner"},[e("LinesR",{attrs:{params:t.linesParams}})],1)],1)])])],1)},staticRenderFns:[]};var m=e("C7Lr")(h,d,!1,function(t){e("16VP")},"data-v-1a6dcb4e",null);a.default=m.exports}});