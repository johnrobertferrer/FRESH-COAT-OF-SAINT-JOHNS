(function(e){function t(t){for(var o,l,i=t[0],u=t[1],c=t[2],b=0,p=[];b<i.length;b++)l=i[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"190c":function(e,t,n){"use strict";var o=n("a54f"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MainComponent",{attrs:{title:"Fresh Coat of NW San Antonio","sub-title":"Project Budget Versus Actual Expense"}})],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",[n("b-col",[e._v(e._s(e.title))]),n("b-col",[e._v(e._s(e.subTitle))])],1),n("br"),n("br"),n("br"),n("b-row",[n("b-col",[e._v(" Job Name ")]),n("b-col",[e._v(" Mobley #2/Training ")])],1),n("b-row",[n("b-col",[e._v(" Estimate Date ")]),n("b-col",[e._v(" "+e._s(e.division.first.estimated_date)+" ")])],1),n("b-row",[n("b-col",[e._v(" Project Completion Date ")]),n("b-col",[e._v(" "+e._s(e.division.first.project_completion_date)+" ")])],1),n("br"),n("br"),n("br"),n("b-row",[n("b-col",[n("b-jumbotron",[e._v(" EPIC eBid Sanity Check ")])],1)],1),n("b-row",[n("b-col",[n("label",[e._v(" Avg Hrly Rate ")])]),n("b-col",[n("CustomInput",{model:{value:e.division.second.average_hourly_rate,callback:function(t){e.$set(e.division.second,"average_hourly_rate",t)},expression:"division.second.average_hourly_rate"}})],1)],1),n("b-row",[n("b-col",[n("label",[e._v(" Burden % ")])]),n("b-col",[n("CustomInput",{model:{value:e.division.second.burden_percent,callback:function(t){e.$set(e.division.second,"burden_percent",t)},expression:"division.second.burden_percent"}})],1)],1),n("b-row",[n("b-col",[n("label",[e._v(" Total Avg Rate ")])]),n("b-col",[n("CustomInput",{attrs:{disabled:!0},model:{value:e.totalAverageRate,callback:function(t){e.totalAverageRate=t},expression:"totalAverageRate"}})],1)],1),n("b-row",[n("b-col",[n("label",[e._v(" 'Labor Traget % ")])]),n("b-col",[n("CustomInput",{model:{value:e.division.second.labor_target_percent,callback:function(t){e.$set(e.division.second,"labor_target_percent",t)},expression:"division.second.labor_target_percent"}})],1)],1),n("b-row",[n("b-col",[n("label",[e._v(" Billable Hrly Rate ")])]),n("b-col",[n("CustomInput",{attrs:{disabled:!0},model:{value:e.billableHourlyRate,callback:function(t){e.billableHourlyRate=t},expression:"billableHourlyRate"}})],1)],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form-input",{attrs:{type:"text",disabled:e.disabled},on:{blur:function(t){e.isInputActive=!1},focus:function(t){e.isInputActive=!0}},model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}})],1)},c=[],s=(n("d3b7"),n("ac1f"),n("25f0"),n("5319"),{name:"CustomInput",props:["value","disabled"],data:function(){return{isInputActive:!1}},computed:{displayValue:{get:function(){return this.isInputActive?this.value.toString():"$ "+this.value},set:function(e){var t=parseFloat(e.replace(/[^\d\.]/g,""));isNaN(t)&&(t=0),this.$emit("input",t)}}}}),b=s,p=n("2877"),d=Object(p["a"])(b,u,c,!1,null,"41a6d53e",null),v=d.exports,f={name:"MainComponent",components:{CustomInput:v},props:{title:String,subTitle:String},data:function(){return{division:{first:{estimated_date:"07/02/2019",project_completion_date:"07/02/2019"},second:{average_hourly_rate:0,burden_percent:0,total_average_rate:0,labor_target_percent:1,billable_hourly_rate:0}}}},computed:{totalAverageRate:function(){return this.division.second.average_hourly_rate*(1+parseFloat(this.division.second.burden_percent))},billableHourlyRate:function(){return parseInt(this.totalAverageRate)/parseInt(this.division.second.labor_target_percent)}}},_=f,m=(n("190c"),Object(p["a"])(_,l,i,!1,null,"780b560a",null)),g=m.exports,y={name:"app",components:{MainComponent:g}},h=y,w=(n("034f"),Object(p["a"])(h,r,a,!1,null,null,null)),j=w.exports,x=n("5f5b");n("f9e3"),n("2dd8");o["default"].use(x["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){},a54f:function(e,t,n){}});
//# sourceMappingURL=app.b65ade45.js.map