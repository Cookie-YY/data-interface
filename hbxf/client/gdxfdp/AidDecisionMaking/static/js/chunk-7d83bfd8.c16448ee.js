(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d83bfd8"],{"5a35":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"content"},[i("div",{staticClass:"w-left"},[i("div",{staticClass:"charts"},["440000"!==t.mapParams.options.JSON?i("div",{staticClass:"map-back",on:{click:t.mapBack}}):t._e(),i("transition",{attrs:{name:"fade"}},[t.mapFlag?i("Map",{attrs:{params:t.mapParams},on:{change:t.handleMap}}):t._e()],1)],1)]),i("div",{staticClass:"w-right"},[i("div",{staticClass:"part ct-top"},[t.yjztData.length?i("yjzt",{attrs:{data:t.yjztData}}):t._e()],1),i("div",{staticClass:"part ct-bottom"},[i("ctitle",{attrs:{title:""+t.shej_02+("invalid"===t.shij_02?"":t.shij_02)+("invalid"===t.xj_02?"":t.xj_02)+"信访量走势"}}),i("div",{staticClass:"chart"},[i("LinesR",{attrs:{params:t.zsLineParams}})],1)],1)])])])},e=[],n=i("365c"),h=i("ee15"),o=i("9539"),c=i("441f"),l=i("abd2"),j=i("5eb8"),m={name:"xstz",components:{ctitle:o["a"],LinesR:c["a"],timeChange:h["a"],Map:l["a"],yjzt:j["a"]},data:function(){return{curCity:"广东省",shijCity:"",shej_02:"invalid",shij_02:"invalid",xj_02:"invalid",nameP:"",mapJson:{"广东省":"440000","广州市":"440100","韶关市":"440200","深圳市":"440300","珠海市":"440400","汕头市":"440500","佛山市":"440600","江门市":"440700","湛江市":"440800","茂名市":"440900","肇庆市":"441200","惠州市":"441300","梅州市":"441400","汕尾市":"441500","河源市":"441600","阳江市":"441700","清远市":"441800","东莞市":"441900","中山市":"442000","潮州市":"445100","揭阳市":"445200","云浮市":"445300"},mapFlag:!1,mapParams:{canvasStyle:{width:"100%",height:"100%"},data:[],options:{isHome:!1,JSON:"440000",xName:"name",yName:"value",map:{value:"信访量"},carousel:!1}},yjztData:[],zsLineParams:{data:[],colors:[{line:"rgba(220, 150, 209, 1)",start:"rgba(220, 150, 209, 0.3)",end:"rgba(220, 150, 209, 0)"}],option:{showSymbol:!0,splitLineShow:!0,legendShow:!1,legenditemWidth:22,legenditemHeight:4,axisLabelShow:!0,axisTickShow:!1,axisCategoryName:"日",axisYName:"",axisLabelSize:14,scales:!0,axisLabelFontSize:16,yaxisLabelFontSize:14,Tofixed:!1,smooth:!1,areaShow:1,smoothMonotone:"none",dataZoomshow:!1,legendIcon:"rect",left:"8%",right:"10%",top:"15%",bottom:"10%",legendTop:"2%",legendRight:"10%"},canvasStyle:{width:"100%",height:"100%"},map:{value:"数量"},xName:"name"}}},mounted:function(){this.getMapAPI()},methods:{getMapAPI:function(){var t=this;"广东省"===this.curCity?(this.shej_02=this.curCity,this.shij_02="invalid",this.xj_02="invalid",this.nameP="shij_02"):this.shijCity?(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02="invalid",this.nameP="xj_02"):(this.shej_02="广东省",this.shij_02=this.shijCity,this.xj_02=this.curCity,this.nameP="invalid"),Object(n["a"])("mdfxyjypYjycMap",{shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02,name:this.nameP}).then((function(a){t.mapParams.data=a.data.data,t.mapFlag=!0,t.getAPI()})).catch((function(t){console.log(t)}))},getAPI:function(){console.log("shej_02:"+this.shej_02),console.log("shij_02:"+this.shij_02),console.log("xj_02:"+this.xj_02),this.getYjztAPI(),this.getZsLineAPI()},getYjztAPI:function(){var t=this;Object(n["a"])("mdfxyjypYjycYjzt",{shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(a){t.yjztData=a.data.data})).catch((function(t){console.log(t)}))},getZsLineAPI:function(){var t=this;Object(n["a"])("mdfxyjypYjyczsLine",{shej_02:this.shej_02,shij_02:this.shij_02,xj_02:this.xj_02}).then((function(a){t.zsLineParams.data=a.data.data})).catch((function(t){console.log(t)}))},handleMap:function(t){for(var a in this.curCity=t,this.mapJson)this.curCity===a&&(this.mapFlag=!1,this.mapParams.options.JSON=this.mapJson[t])},mapBack:function(){this.mapFlag=!1,this.curCity="广东省",this.mapParams.options.JSON="440000"}},watch:{curCity:function(t,a){if("广东省"===t)this.getMapAPI();else{var i="";for(var s in this.mapJson)t===s&&(this.shijCity=t,i=t,this.getMapAPI());i||(this.xj_02=t,this.getAPI())}}}},r=m,d=(i("69e7"),i("2877")),p=Object(d["a"])(r,s,e,!1,null,"cee4ea08",null);a["default"]=p.exports},"69e7":function(t,a,i){"use strict";var s=i("a076"),e=i.n(s);e.a},a076:function(t,a,i){}}]);
//# sourceMappingURL=chunk-7d83bfd8.c16448ee.js.map