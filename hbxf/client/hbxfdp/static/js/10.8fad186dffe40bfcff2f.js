webpackJsonp([10],{EfB4:function(t,a){},PZIY:function(t,a,e){"use strict";var i={props:{data:{type:Array}},data:function(){return{aniName:"spin",aniDuration:.5}},computed:{styleType:function(){return this.$store.state.styleType}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.data.length,expression:"!data.length"}],staticClass:"star-move",attrs:{"element-loading-background":t.$STANDARD(t.styleType).loadingBgColor}},[t.data.length?e("div",{staticClass:"link-line"},[t._m(0),t._v(" "),t._l(t.data,function(a,i){return e("div",{key:i,staticClass:"item-circle",class:[{circle1:0===i},{circle2:1===i},{circle3:2===i},{circle4:3===i},{circle5:4===i}],style:{animationDuration:t.aniDuration+"s"}},[e("div",{staticClass:"anti-direction"},[e("p",{staticClass:"item-value"},[t._v(t._s(a.value))]),t._v(" "),e("p",{staticClass:"item-name"},[t._v(t._s(a.name))])])])})],2):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"star-center"},[a("p",{staticClass:"star-center-title"},[this._v("信访来源")])])}]};var n=e("VU/8")(i,s,!1,function(t){e("Ti8K")},"data-v-966d2156",null);a.a=n.exports},Ti8K:function(t,a){},UbKE:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("v+jk"),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"w-left"},[e("ctitle",{attrs:{title:"区域办理量动态"}}),t._v(" "),e("div",{staticClass:"w-echart",attrs:{id:"w-echart"}},[e("div",{ref:"barEl"},[e("horizontalBar",{attrs:{params:t.leftBarParams},on:{departmentClick:t.changeType}})],1)])],1),t._v(" "),e("div",{staticClass:"w-right"},[e("div",{staticClass:"c-top"},[e("div",{staticClass:"part ct-left"},[e("ctitle",{attrs:{title:"办理方式"}}),t._v(" "),e("div",{staticClass:"inner"},[e("blfsList",{attrs:{data:t.blfsListData}})],1)],1),t._v(" "),e("div",{staticClass:"part ct-right"},[e("ctitle",{attrs:{title:"办理量走势"}}),t._v(" "),e("div",{staticClass:"inner"},[e("timeChange",{staticClass:"timeChange",on:{change:t.zsTimeClick}}),t._v(" "),e("LinesR",{attrs:{params:t.zsLineParams}})],1)],1)]),t._v(" "),e("div",{staticClass:"c-bottom"},[e("div",{staticClass:"part cb-center"},[e("ctitle",{attrs:{title:"投诉问题占比"}}),t._v(" "),e("div",{staticClass:"inner"},[e("loopPie",{attrs:{params:t.tswtzbPieParams}})],1)],1),t._v(" "),e("div",{staticClass:"part cb-right"},[e("ctitle",{attrs:{title:"信访评价"}}),t._v(" "),e("div",{staticClass:"inner"},[e("timeChange",{staticClass:"timeChange",on:{change:t.xfpjTimeClick}}),t._v(" "),e("LinesR",{attrs:{params:t.xfpjLineParams}})],1)],1)])])])])},staticRenderFns:[]};var n=function(t){e("EfB4")},r=e("VU/8")(i.a,s,!1,n,"data-v-97b25990",null);a.default=r.exports},"v+jk":function(t,a,e){"use strict";(function(t){var i=e("gyMJ"),s=(e("+Era"),e("Es1k")),n=e("6cNN"),r=e("76NS"),o=e("GQaK"),c=e("uwd8"),l=e("05XX"),h=e("Te0a"),d=e("PZIY");a.a={name:"sxr",components:{ctitle:n.a,loopPie:r.a,horizontalBar:c.a,LinesR:l.a,timeChange:s.a,blfsList:h.a,circleMoveChart:d.a},data:function(){return{curName:"drop",listScroll:null,leftBarParams:{data:[],canvasStyle:{width:"100%",height:"100%"},options:{click:!0}},blfsListData:[],zsLineParams:{data:[],colors:[{line:"rgba(220, 150, 209, 1)",start:"rgba(220, 150, 209, 0.3)",end:"rgba(220, 150, 209, 0)"}],option:{splitLineShow:!0,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"年",axisYName:"件次",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"8%",right:"15%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{value:"数量"},xName:"name"},tswtzbPieParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{bgSize:220,colors:this.$STANDARD(this.styleType).pieColors,radius:["45%","55%"],center:["50%","50%"],centerRadius:["40%","41%"],labelRich:{b:this.fontSize(.18),d:this.fontSize(.2),bHeight:this.fontSize(.3)},length:20,length2:70,itemLabelShow:!0,legend:{show:!1},rich:{bfontsize:"16%"},labelSize:"24%",rollFlag:!0,threeLevel:!0}},xflyData:[],xfpjLineParams:{data:[],colors:[{line:"#e11770",start:"rgba(225, 23, 112, .5)",end:"rgba(225, 23, 112, .5)"},{line:"#ffb435",start:"rgba(255, 180, 53, .5)",end:"rgba(255, 180, 53, .5)"},{line:"#1a82f7",start:"rgba(26, 130, 247, .5)",end:"rgba(26, 130, 247, .5)"},{line:"#a1d871",start:"rgba(161, 216, 113, .5)",end:"rgba(161, 216, 113, .5)"},{line:"#ff825b",start:"rgba(255, 130, 91, .5)",end:"rgba(255, 130, 91, .5)"}],option:{splitLineShow:!0,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisYName:"%",axisCategoryName:"年",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!0,areaShow:0,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"8%",right:"15%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"15%"},canvasStyle:{width:"100%",height:"100%"},map:{},xName:"name"}}},mounted:function(){this.getLeftAPI(this.year)},methods:{getLeftAPI:function(t){var a=this;Object(i.a)("jghxZrdwAqhLeftBar",{year:t}).then(function(e){a.leftBarParams.data=e.data.data.sort(function(t,a){return t.value-a.value}),a.leftBarParams.data.length>14&&a.computation(),a.getRightAPI(t,a.curName)}).catch(function(t){console.log(t)})},getRightAPI:function(t,a){var e=this;Object(i.a)("jghxZrdwAqhBlfsList",{year:t,shij_02:a}).then(function(t){e.blfsListData=t.data.data}).catch(function(t){console.log(t)}),this.getZsLineAPI(t,a,"年度"),Object(i.a)("jghxZrdwAqhTswtzbPie",{year:t,shij_02:a}).then(function(t){e.tswtzbPieParams.data=t.data.data}).catch(function(t){console.log(t)}),this.getXfpjLineAPI(t,a,"年度")},getZsLineAPI:function(t,a,e){var s=this,n="",r="";"年度"===e?(n="cy",r="[now-4, now]"):(n="cm",r=t),Object(i.a)("jghxZrdwAqhZsLine",{year:r,shij_02:a,timetype:n}).then(function(t){s.zsLineParams.option.axisCategoryName="年度"===e?"年":"月",s.zsLineParams.data=t.data.data}).catch(function(t){console.log(t)})},getXfpjLineAPI:function(t,a,e){var s=this,n="",r="";"年度"===e?(n="cy",r="[now-4, now]"):(n="cm",r=t),Object(i.a)("jghxZrdwAqhXfpjLine",{year:r,shij_02:a,timetype:n}).then(function(t){s.xfpjLineParams.option.axisCategoryName="年度"===e?"年":"月",s.xfpjLineParams.map=t.data.map,s.xfpjLineParams.data=t.data.data}).catch(function(t){console.log(t)})},zsTimeClick:function(t){this.getZsLineAPI(this.year,this.curName,t)},xfpjTimeClick:function(t){this.getXfpjLineAPI(this.year,this.curName,t)},changeType:function(t){this.curName=""===t?"drop":t,this.getRightAPI(this.year,this.curName)},computation:function(){var a=60*this.leftBarParams.data.length/100+"rem";t(this.$refs.barEl).css("height",a),this.initScroll()},initScroll:function(){var a=document.getElementById("w-echart");this.scrollFunc(this.listScroll,a),t(".bscroll-vertical-scrollbar").css({width:".1rem",background:"rgba(2, 144, 213, .2)"}),t(".bscroll-vertical-scrollbar .bscroll-indicator").css({backgroundImage:"linear-gradient(to bottom, rgba(14, 149, 210, 0.8) , rgba(19, 240, 255, 0.8))",border:"none"}),t(".bscroll-horizontal-scrollbar .bscroll-indicator").css({backgroundImage:"linear-gradient(to right, rgba(14, 149, 210, 0.8) , rgba(19, 240, 255, 0.8))",border:"none"})},scrollFunc:function(t,a){t?t.refresh():t=new o.a(a,{bounce:!1,momentumLimitDistance:5,scrollX:!0,scrollbar:{fade:!1,interactive:!1},mouseWheel:!0})},fontSize:function(t){document.documentElement;var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(a){var e=a/1920*100;return t*e}}},computed:{year:function(){return this.$store.state.year}},watch:{year:function(t){this.getLeftAPI(t)}}}}).call(a,e("4kSj"))}});