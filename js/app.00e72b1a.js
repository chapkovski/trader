(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/trader/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09af":function(t,e,a){"use strict";a("cd22")},"269f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"#6A76AB",dark:"",app:"",height:"95"}},[a("v-app-bar-nav-icon"),a("account-info"),a("days-left",{attrs:{day:t.day}}),a("time-left",{on:{dayDone:function(e){t.day++}}}),a("v-spacer"),t.inTrade?a("div",{class:{"d-flex":!0}},[a("div",{staticClass:"m-3"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("div",t._g(t._b({},"div",r,!1),n),[a("v-badge",{attrs:{avatar:"",bordered:"",overlap:"",color:"error"},scopedSlots:t._u([{key:"badge",fn:function(){return[a("v-avatar",[t._v(" 2 ")])]},proxy:!0}],null,!0)},[a("v-avatar",{attrs:{size:"60"}},[a("v-img",{attrs:{src:"https://cdn1.iconfinder.com/data/icons/web-design-18/50/86-512.png"}})],1)],1)],1)]}}],null,!1,4204611117)},[a("span",[t._v("Amount of trade > 1000")])])],1),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("div",t._g(t._b({},"div",r,!1),n),[a("v-badge",{attrs:{avatar:"",bordered:"",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[a("v-avatar",[t._v(" 2 ")])]},proxy:!0}],null,!0)},[a("v-avatar",{attrs:{size:"60"}},[a("v-img",{attrs:{src:"https://previews.123rf.com/images/pikepicture/pikepicture1807/pikepicture180700221/104970298-best-worker-employee-vector-european-woman-award-of-the-year-gold-wreath-leader-business-cartoon-ill.jpg"}})],1)],1)],1)]}}],null,!1,1190921518)},[a("span",[t._v("Best trader of the day")])])],1):t._e()],1),a("v-navigation-drawer",{attrs:{permanent:"","expand-on-hover":"",app:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("Jane Smith")]),a("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.to}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{app:"",height:"50"}},[t.inTrade?a("trade-footer"):t._e()],1)],1)},i=[],o=(a("b0c0"),a("5530")),s=function(){var t=this,e=t.$createElement;t._self._c;return t._e()},c=[],l=a("0f40"),u=a.n(l),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"red lighten-2",dark:""}},"v-btn",r,!1),n),[t._v(" Margin account ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2"},[t._v(" Do you want to borrow some money? ")]),a("v-card-text",[a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title"),a("v-sheet",[t._v("Current rate: "+t._s((100*t.rate).toFixed(2))+"%")])],1)],1),a("v-divider"),a("v-list-item",[a("v-list-item-icon",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title"),a("v-sheet",[t._v("Total borrowed so far: "+t._s(t.currentDebt))])],1)],1),a("v-divider"),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{type:"number",label:"Type amount to borrow"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Borrow ")])],1)],1)],1)],1)},v=[],m={props:["rate","currentDebt"],data:function(){return{dialog:!1}}},f=m,p=a("2877"),h=a("6544"),b=a.n(h),_=a("8336"),g=a("b0af"),y=a("99d9"),k=a("169a"),C=a("ce7e"),T=a("132d"),x=a("8860"),V=a("da13"),w=a("5d23"),O=a("34c3"),S=a("8dd9"),j=a("2fa4"),E=a("8654"),I=Object(p["a"])(f,d,v,!1,null,null,null),N=I.exports;b()(I,{VBtn:_["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDialog:k["a"],VDivider:C["a"],VIcon:T["a"],VList:x["a"],VListItem:V["a"],VListItemContent:w["a"],VListItemIcon:O["a"],VListItemTitle:w["c"],VSheet:S["a"],VSpacer:j["a"],VTextField:E["a"]});var A={components:{MarginDialog:N},data:function(){return{rate:.05,currentDebt:100,accrued:0}},created:function(){this.updDebt()},methods:{updDebt:function(){var t=this;this.intervalid1=setInterval((function(){t.currentDebt++,t.rate=t.rate+u()(-1,1,!0)/100,t.accrued+=t.currentDebt*t.rate}),2e3)}}},B=A,L=(a("642c"),a("0798")),R=Object(p["a"])(B,s,c,!1,null,"1b9aec82",null),D=R.exports;b()(R,{VAlert:L["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{raised:""}},[a("v-card-text",[t._v(" Bank account balance: "),a("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[t._v(" "+t._s(t.getCashBalance())+" ")])],1)],1)},F=[],P=a("2f62"),q={data:function(){return{icons:["mdi-home","mdi-email","mdi-calendar","mdi-delete"],items:["default","absolute","fixed"],padless:!1,variant:"default"}},computed:Object(o["a"])(Object(o["a"])({},Object(P["c"])(["getCashBalance"])),{},{localAttrs:function(){var t={};return"default"===this.variant?(t.absolute=!1,t.fixed=!1):t[this.variant]=!0,t}})},U=q,K=a("cc20"),H=Object(p["a"])(U,$,F,!1,null,"66f1cf1d",null),M=H.exports;b()(H,{VCard:g["a"],VCardText:y["b"],VChip:K["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-3",attrs:{raised:""}},[a("v-card-text",[t._v(" Day: "),a("transition",{attrs:{mode:"out-in",name:"custom-classes-transition","enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutUp"}},[a("v-chip",{key:t.day,staticClass:"ma-2",attrs:{color:"primary"}},[t._v(" "+t._s(t.day)+" ")])],1)],1)],1)},G=[],J={props:["day"],data:function(){return{}},computed:{}},Q=J,Y=Object(p["a"])(Q,W,G,!1,null,"4a5d9dd8",null),z=Y.exports;b()(Y,{VCard:g["a"],VCardText:y["b"],VChip:K["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{raised:"",color:"red"}},[a("v-card-text",[t._v(" Time left till the end of the day: "),a("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[a("countdown",{ref:"timer",attrs:{"left-time":t.timeLeft},on:{finish:t.restartTimer},scopedSlots:t._u([{key:"process",fn:function(e){return[a("span",[t._v(t._s(" "+e.timeObj.ceil.s))])]}}])})],1)],1)],1)},Z=[],tt={data:function(){return{timeLeft:6e3,endTime:(new Date).getTime()+4e3}},computed:{},methods:{restartTimer:function(){this.$refs.timer.startCountdown(!0),this.$emit("dayDone")}}},et=tt,at=Object(p["a"])(et,X,Z,!1,null,"57694773",null),nt=at.exports;b()(at,{VCard:g["a"],VCardText:y["b"],VChip:K["a"]});var rt=a("e9ee"),it={components:{TradeFooter:D,AccountInfo:M,DaysLeft:z,TimeLeft:nt},data:function(){return{day:1,items:[{title:"Trading",icon:"mdi-bank",to:{name:"Trade"}},{title:"Work",icon:"mdi-account-hard-hat",to:{name:"Work"}}]}},created:function(){this.addRecord(),this.updShares()},computed:{inTrade:function(){return"Trade"==this.$route.name}},watch:{$route:function(t,e){t.name&&this.setTab(t.name)}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(P["b"])(["setTab","requestPriceUpdate"])),Object(P["d"])(["INC_TICK"])),{},{newDay:function(){console.debug("NEW DAY!!!")},updShares:function(){var t=this;this.intervalid1=setInterval((function(){t.addRecord()}),1e3*rt["a"].tickFrequency)},addRecord:function(){this.requestPriceUpdate("a"),this.requestPriceUpdate("b"),this.INC_TICK()}})},ot=it,st=(a("5c0b"),a("7496")),ct=a("40dc"),lt=a("5bc1"),ut=a("8212"),dt=a("4ca6"),vt=a("a523"),mt=a("553a"),ft=a("adda"),pt=a("8270"),ht=a("f6c4"),bt=a("f774"),_t=a("3a2f"),gt=Object(p["a"])(ot,r,i,!1,null,null,null),yt=gt.exports;b()(gt,{VApp:st["a"],VAppBar:ct["a"],VAppBarNavIcon:lt["a"],VAvatar:ut["a"],VBadge:dt["a"],VContainer:vt["a"],VDivider:C["a"],VFooter:mt["a"],VIcon:T["a"],VImg:ft["a"],VList:x["a"],VListItem:V["a"],VListItemAvatar:pt["a"],VListItemContent:w["a"],VListItemIcon:O["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMain:ht["a"],VNavigationDrawer:bt["a"],VSpacer:j["a"],VTooltip:_t["a"]});var kt=a("f309");n["a"].use(kt["a"]);var Ct=new kt["a"]({}),Tt=a("4452"),xt=a.n(Tt),Vt=a("ea7f"),wt=a.n(Vt),Ot=a("668e"),St=a.n(Ot),jt=(a("d3b7"),a("8c4f")),Et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("Bank here")])])}],Nt={},At=Object(p["a"])(Nt,Et,It,!1,null,null,null),Bt=At.exports,Lt=(a("f126"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("transition",{attrs:{name:"fade"}},[a("v-row",{key:t.successfulTrade,attrs:{if:"successfulTrade"}},[a("v-col",{attrs:{cols:"12"}},[a("v-alert",{attrs:{border:"left","close-text":"Close Alert",color:"deep-purple accent-4",dark:"",dismissible:""},model:{value:t.successfulTrade,callback:function(e){t.successfulTrade=e},expression:"successfulTrade"}},[t._v(" Hurray, you achieved new heights in trading! ")])],1)],1)],1),a("v-row",{attrs:{flex:""}},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("action-bar")],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("holdings")],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("charts")],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("history")],1)],1)],1)}),Rt=[],Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{height:"100%"}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Stock name ")]),a("th",{staticClass:"text-left"},[t._v(" Price ")]),a("th",{staticClass:"text-left"})])]),a("tbody",t._l(t.stocksForActions,(function(e){return a("stock-row",t._b({key:e.innerName},"stock-row",e,!1))})),1)]},proxy:!0}])})],1)},$t=[],Ft=a("dd61"),Pt=a.n(Ft),qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v(t._s(t.name))]),a("td",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{key:t.price,staticClass:"d-flex "},[a("div",{staticClass:"mr-3",style:{color:t.color}},[t._v(" "+t._s(t.price)+" ")]),a("div",[a("span",{style:{color:"red"}},[a("v-icon",{attrs:{color:t.color}},[t._v(t._s(t.icon))])],1)])])])],1),a("td",[a("div",{staticClass:"d-flex"},[a("buy-sell-dialog",{attrs:{action:"buy",stockName:t.name,name:t.innerName,actionIcon:"mdi-cart-arrow-down"}}),a("buy-sell-dialog",{attrs:{action:"sell",stockName:t.name,name:t.innerName,actionIcon:"mdi-trash-can-outline"}})],1)])])},Ut=[],Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"my-3",attrs:{color:t.actionColor,outlined:"",disabled:!t.passInitialCheck}},"v-btn",r,!1),n),[a("v-icon",[t._v(t._s(t.actionIcon))]),t._v(" "+t._s(t.action)+" ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",class:t.actionColor},[t._v(" "+t._s(t.capAction)+" "+t._s(t.stockName)+" ")]),a("v-card-text",[a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title"),a("v-sheet",[t._v("Current price per share: "+t._s(t.getCurrentPrice))]),a("v-sheet",[t._v("You currently owns: "+t._s(t.getAvailableQuantity))])],1)],1),a("v-divider"),a("v-list-item",[a("v-list-item-content",[a("v-text-field",{attrs:{type:"number",rules:[t.rules.amountValidated],label:"How many shares you would like to "+t.action+"?",autofocus:""},on:{change:t.validate,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.processingTransaction(e)}},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:"",disabled:!t.valid},on:{click:t.processingTransaction}},[t._v(" "+t._s(t.action)+" ")])],1)],1)],1)],1)])},Ht=[],Mt=a("e9a7"),Wt=a.n(Mt),Gt={props:["action","stockName","actionIcon","name"],data:function(){var t=this;return{dialog:!1,q:null,valid:!0,rules:{amountValidated:function(e){return t.validateTransaction(e)}}}},created:function(){},computed:Object(o["a"])(Object(o["a"])({},Object(P["c"])(["getStockByName","getCashBalance"])),{},{passInitialCheck:function(){switch(this.action){case"buy":return this.getCashBalance()>0;case"sell":return this.getAvailableQuantity>0;default:return!0}},getAvailableQuantity:function(){var t=this.getStockByName(this.name);return t.quantity},getCurrentPrice:function(){var t=this.getStockByName(this.name);return t.price},capAction:function(){return Wt()(this.action)},actionColor:function(){return"buy"===this.action?"green":"red"},actionSign:function(){return"buy"===this.action?1:-1}}),watch:{dialog:function(){this.q=null},getCurrentPrice:function(){this.validate()}},methods:Object(o["a"])(Object(o["a"])({},Object(P["b"])(["makeTransaction"])),{},{validate:function(){this.$refs.form.validate()},processingTransaction:function(){this.valid&&(this.makeTransaction({stock:this.name,quantity:this.actionSign*this.q}),this.dialog=!1)},validateTransaction:function(t){switch(this.action){case"buy":return t*this.getCurrentPrice<=this.getCashBalance()||"Not enough funds";case"sell":return t<=this.getAvailableQuantity||"Not enough items to sell"}}})},Jt=Gt,Qt=a("4bd4"),Yt=Object(p["a"])(Jt,Kt,Ht,!1,null,null,null),zt=Yt.exports;b()(Yt,{VBtn:_["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VDialog:k["a"],VDivider:C["a"],VForm:Qt["a"],VIcon:T["a"],VList:x["a"],VListItem:V["a"],VListItemContent:w["a"],VListItemIcon:O["a"],VListItemTitle:w["c"],VSheet:S["a"],VSpacer:j["a"],VTextField:E["a"]});var Xt={components:{BuySellDialog:zt},props:["name","color","icon","innerName","price"],data:function(){return{}},computed:{},watch:{},methods:{}},Zt=Xt,te=(a("09af"),Object(p["a"])(Zt,qt,Ut,!1,null,"6231a7d0",null)),ee=te.exports;b()(te,{VIcon:T["a"]});var ae={color:"red",icon:"mdi-arrow-down-bold-outline"},ne={color:"blue",icon:"mdi-arrow-up-bold-outline"},re={components:{StockRow:ee},data:function(){return{stocksForActions:[]}},created:function(){},computed:Object(o["a"])({},Object(P["e"])(["stocks"])),watch:{stocks:function(t,e){this.stocksForActions=Pt()(t,(function(t){var e=t.price>=t.previous?ne:ae;return Object(o["a"])(Object(o["a"])({name:t.publicName,innerName:t.innerName},e),{},{price:t.price})}))}},methods:{}},ie=re,oe=(a("6223"),a("1f4f")),se=Object(p["a"])(ie,Dt,$t,!1,null,"1360df6e",null),ce=se.exports;b()(se,{VCard:g["a"],VSimpleTable:oe["a"]});var le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto "},[a("v-card-title",[t._v("Current holdings")]),a("v-card-text",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Stock name ")]),a("th",{staticClass:"text-left"},[t._v(" Value ")]),a("th",{staticClass:"text-left"},[t._v(" Items ")]),a("th",{staticClass:"text-left"},[t._v(" Return ")])])]),a("tbody",t._l(t.stocksForHoldings,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.publicName))]),a("td",[t._v(t._s(e.value))]),a("td",[t._v(t._s(e.units))]),a("td",[t._v(t._s(e.rate_return))])])})),0)]},proxy:!0}])})],1)],1)},ue=[],de={data:function(){return{selection:1,stocksForHoldings:[]}},computed:Object(o["a"])({},Object(P["e"])(["stocks"])),watch:{stocks:function(t,e){this.stocksForHoldings=Pt()(t,(function(t){return{publicName:t.publicName,value:t.quantity*t.price,units:t.quantity,rate_return:t.rate_return}}))}},methods:{}},ve=de,me=Object(p["a"])(ve,le,ue,!1,null,null,null),fe=me.exports;b()(me,{VCard:g["a"],VCardText:y["b"],VCardTitle:y["c"],VSimpleTable:oe["a"]});var pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{},[a("v-card-title",[t._v("Current market situation")]),a("v-card-text",[a("highcharts",{staticClass:"chart",attrs:{options:t.chartOptions,updateArgs:[!0,!0,!0]}})],1)],1)},he=[],be=a("5a3a"),_e=a.n(be),ge={components:{highcharts:Tt["Chart"]},data:function(){return{hcInstance:Tt["Chart"],chartOptions:{height:300,chart:{height:300,type:"spline"},series:[],xAxis:{categories:_e()(rt["a"].numTicks),labels:{enabled:!0}},legend:{enabled:!0},yAxis:{labels:{formatter:function(){return this.axis.defaultLabelFormatter.call(this)}}},title:{text:""}}}},created:function(){},computed:Object(o["a"])({},Object(P["e"])(["currentTick","stocks"])),watch:{stocks:function(t,e){this.chartOptions.series=Pt()(t,(function(t){return{name:t.publicName,data:t.history}}))}},methods:{}},ye=ge,ke=Object(p["a"])(ye,pe,he,!1,null,null,null),Ce=ke.exports;b()(ke,{VCard:g["a"],VCardText:y["b"],VCardTitle:y["c"]});var Te,xe,Ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:" "},[a("v-card-title",[t._v("Historical data")]),a("v-card-text",[a("v-sparkline",{attrs:{height:"172",fill:t.fill,radius:25,value:t.value,smooth:25,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})],1)],1)},we=[],Oe=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],Se={data:function(){return{fill:!0,width:2,radius:10,padding:8,lineCap:"round",gradient:Oe[5],value:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradientDirection:"top",gradients:Oe,type:"trend",autoLineWidth:!1}}},je=Se,Ee=a("7f2e"),Ie=Object(p["a"])(je,Ve,we,!1,null,null,null),Ne=Ie.exports;b()(Ie,{VCard:g["a"],VCardText:y["b"],VCardTitle:y["c"],VSparkline:Ee["a"]});var Ae={},Be=Object(p["a"])(Ae,Te,xe,!1,null,null,null),Le=(Be.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Information")])}),Re=[],De={data:function(){return{}}},$e=De,Fe=Object(p["a"])($e,Le,Re,!1,null,null,null),Pe=Fe.exports,qe={name:"Trade",components:{ActionBar:ce,Holdings:fe,Charts:Ce,History:Ne,Information:Pe},data:function(){return{successfulTrade:!1}},created:function(){},methods:{congratulate:function(){var t=this;this.intervalid1=setInterval((function(){t.$confetti.start(),t.successfulTrade=!0;var e=t;setTimeout((function(){e.$confetti.stop(),e.successfulTrade=!1}),2e3)}),15e3)}}},Ue=qe,Ke=(a("6770"),a("62ad")),He=a("0fd9"),Me=Object(p["a"])(Ue,Lt,Rt,!1,null,null,null),We=Me.exports;b()(Me,{VAlert:L["a"],VCol:Ke["a"],VContainer:vt["a"],VRow:He["a"]}),n["a"].use(jt["a"]);var Ge=[{path:"/",redirect:"/trade"},{path:"/bank",name:"Bank",component:Bt},{path:"/trade",name:"Trade",component:We},{path:"/work",name:"Work",component:function(){return Promise.resolve().then(a.bind(null,"f126"))}}],Je=new jt["a"]({mode:"hash",base:"/trader/",routes:Ge}),Qe=Je,Ye=a("890b"),ze=a.n(Ye),Xe=(a("99af"),a("7db0"),a("a434"),a("2909")),Ze=a("4416"),ta=a.n(Ze),ea=a("51f5"),aa=a.n(ea),na=a("abdd"),ra=a.n(na);a("b408");n["a"].use(P["a"]);var ia=function(){var t=Pt()(_e()(100),(function(){return u()(50,999)})),e=Pt()(_e()(100),(function(){return u()(50,999)}));return{matrix1:t,matrix2:e}},oa=function(t,e){var a=ra()(t.matrix1),n=ra()(t.matrix2);return parseInt(a+n)===parseInt(e)},sa=new P["a"].Store({state:Object(o["a"])(Object(o["a"])({},rt["b"]),{},{cashBalance:0,tasksSubmitted:0,correctTasksSubmitted:0,currentTask:ia(),currentTab:null,transactions:[],stocks:[{innerName:"a",publicName:"Stock A",price:0,previous:0,quantity:10,history:[],rate_return:0},{innerName:"b",publicName:"Stock B",price:0,previous:0,quantity:2,history:[],rate_return:0}],socket:{isConnected:!1,message:"",reconnectError:!1}}),getters:{getCashBalance:function(t){return function(){return t.cashBalance}},getStockByName:function(t){return function(e){return t.stocks.find((function(t){return t.innerName===e}))}},getStockIndexByName:function(t){return function(e){return aa()(t.stocks,(function(t){return t.innerName===e}))}}},mutations:{STOCK_UPDATE:function(t,e){var a=e.ind,n=e.obj;t.stocks.splice(a,1,n)},CHANGE_CASH:function(t,e){t.cashBalance+=e},SET_CURRENT_TASK:function(t,e){t.currentTask=e},INCREASE_TOT_TASKS_NUM:function(t){t.tasksSubmitted++},INCREASE_CORRECT_TASKS_NUM:function(t){t.correctTasksSubmitted++},SET_TAB:function(t,e){t.currentTab=e},INC_TICK:function(t){return t.currentTick++},SOCKET_ONOPEN:function(t,e){n["a"].prototype.$socket=e.currentTarget,t.socket.isConnected=!0},SOCKET_ONCLOSE:function(t,e){t.socket.isConnected=!1},SOCKET_ONERROR:function(t,e){console.error(t,e)},SOCKET_ONMESSAGE:function(t,e){},SOCKET_RECONNECT:function(t,e){console.info("Reconnecting....",t,e)},SOCKET_RECONNECT_ERROR:function(t){t.socket.reconnectError=!0}},actions:{setTab:function(t,e){t.commit("SET_TAB",e)},processTaskAnswer:function(t,e){var a=t.state.currentTask;oa(a,e)&&(t.commit("INCREASE_CORRECT_TASKS_NUM"),t.commit("CHANGE_CASH",rt["a"].taskFee)),t.commit("INCREASE_TOT_TASKS_NUM"),t.commit("SET_CURRENT_TASK",ia())},makeTransaction:function(t,e){var a=e.stock,n=e.quantity,r=t.getters.getStockByName(a),i=r.price;r.quantity+=n;var o=-i*n,s=t.getters.getStockIndexByName(a);t.commit("STOCK_UPDATE",{ind:s,obj:r}),t.commit("CHANGE_CASH",o)},requestPriceUpdate:function(t,e){var a=Math.random(),n=t.getters.getStockByName(e);n.price=a,n.previous=ta()(n.history),n.history=[].concat(Object(Xe["a"])(n.history),[a]);var r=t.getters.getStockIndexByName(e);t.commit("STOCK_UPDATE",{ind:r,obj:n})}}}),ca="https:"===window.location.protocol?"wss":"ws",la=(window.location.host,window.socket_path,sa),ua=a("9955"),da=a.n(ua),va=a("c986"),ma=a.n(va);St()(wt.a),n["a"].use(ze.a),n["a"].use(xt.a),n["a"].use(da.a,{lodash:n["a"].use.placeholder}),n["a"].use(ma.a,"vac"),n["a"].config.productionTip=!1,new n["a"]({vuetify:Ct,router:Qe,store:la,render:function(t){return t(yt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},6223:function(t,e,a){"use strict";a("269f")},"642c":function(t,e,a){"use strict";a("e941")},6770:function(t,e,a){"use strict";a("fd62")},"9c0c":function(t,e,a){},cd22:function(t,e,a){},e941:function(t,e,a){},e9ee:function(t,e,a){"use strict";a.d(e,"b",(function(){return r}));var n={dayLength:30,tickFrequency:3,numTicks:30,taskFee:10},r={currentTick:0};e["a"]=n},f126:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{md:"4",sm:"12"}},[a("info-card",{attrs:{title:"Total tasks",value:t.tasksSubmitted,img:"https://image.freepik.com/free-icon/todo-list_318-10185.jpg"}})],1),a("v-col",{attrs:{md:"4",sm:"12"}},[a("info-card",{attrs:{title:"Correctly done",value:t.correctTasksSubmitted,img:"https://broughtonprimary.files.wordpress.com/2016/06/well-done.jpg"}})],1),a("v-col",{attrs:{md:"4",sm:"12"}},[a("info-card",{attrs:{title:"Fee per correct task",value:t.fee,img:"https://broughtonprimary.files.wordpress.com/2016/06/well-done.jpg"}})],1)],1),a("v-row",{staticClass:"m-0"},[a("v-col",{attrs:{cols:"12"}},[a("v-alert",{staticClass:"lead text-center m-0 p-0",style:{padding:"0px",margin:"0px"},attrs:{outlined:"",color:"primary"}},[t._v(" First: find in each section below a maximum number; "),a("br"),t._v("Second: provide a sum of these two numbers in the field below"),a("br"),t._v("JUST FOR OUR EYES ONLY: CORRECT ANSWER: "+t._s(t.correctAnswer)+" ")])],1)],1),a("v-row",{staticClass:"m-0"},[a("v-col",{attrs:{sm:"12",md:"6"}},[a("v-card",[a("v-card-text",[a("matrix",{attrs:{data:t.currentTask.matrix1}})],1)],1)],1),a("v-col",{attrs:{sm:"12",md:"6"}},[a("v-card",[a("v-card-text",[a("matrix",{attrs:{data:t.currentTask.matrix2}})],1)],1)],1)],1),a("v-row",{staticClass:"m-0"},[a("v-col",{attrs:{cols:"12"}},[t._v(' Submit your answer here and press "Enter" '),a("v-text-field",{attrs:{"hide-details":"","single-line":"",type:"number",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1)],1)],1)},r=[],i=a("5530"),o=a("abdd"),s=a.n(o),c=a("e9ee"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{color:"grey lighten-3",outlined:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"d-none d-md-block"},[a("v-img",{attrs:{src:t.img,width:"50px"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.title))]),a("v-list-item-subtitle",[a("transition",{attrs:{mode:"out-in",name:"custom-classes-transition","enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutUp"}},[a("v-chip",{key:t.value,staticClass:"ma-2",attrs:{color:"secondary"}},[t._v(" "+t._s(t.value)+" ")])],1)],1)],1)],1)],1)},u=[],d=(a("77ed"),{props:["title","value","img"],data:function(){return{}},computed:{}}),v=d,m=a("2877"),f=a("6544"),p=a.n(f),h=a("cc20"),b=a("adda"),_=a("da13"),g=a("5d23"),y=a("34c3"),k=a("8dd9"),C=Object(m["a"])(v,l,u,!1,null,"075006cc",null),T=C.exports;p()(C,{VChip:h["a"],VImg:b["a"],VListItem:_["a"],VListItemContent:g["a"],VListItemIcon:y["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VSheet:k["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{color:"grey lighten-3",outlined:""}},[t._v(" "+t._s(t.data)+" ")])},V=[],w={props:["data"],data:function(){return{}},computed:{}},O=w,S=Object(m["a"])(O,x,V,!1,null,"5fbad117",null),j=S.exports;p()(S,{VSheet:k["a"]});var E=a("2f62"),I={name:"Home",components:{infoCard:T,Matrix:j},data:function(){return{answer:null,fee:c["a"].taskFee}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(E["e"])(["tasksSubmitted","correctTasksSubmitted","currentTask"])),Object(E["c"])([])),{},{correctAnswer:function(){return s()(this.currentTask.matrix1)+s()(this.currentTask.matrix2)}}),methods:Object(i["a"])(Object(i["a"])({},Object(E["b"])(["processTaskAnswer"])),{},{submit:function(){this.processTaskAnswer(this.answer),this.answer=null}})},N=I,A=a("0798"),B=a("b0af"),L=a("99d9"),R=a("62ad"),D=a("a523"),$=a("0fd9"),F=a("8654"),P=Object(m["a"])(N,n,r,!1,null,null,null);e["default"]=P.exports;p()(P,{VAlert:A["a"],VCard:B["a"],VCardText:L["b"],VCol:R["a"],VContainer:D["a"],VRow:$["a"],VTextField:F["a"]})},fd62:function(t,e,a){}});
//# sourceMappingURL=app.00e72b1a.js.map