(function(t){function e(e){for(var n,c,i=e[0],r=e[1],o=e[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(n=!1)}n&&(l.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},l=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/crypto/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var u=r;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0640":function(t,e,a){},"175a":function(t,e,a){"use strict";a("d1a4")},"1fb6":function(t,e,a){"use strict";a("a67f")},"34ef":function(t,e,a){"use strict";a("bc8f")},"412e":function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=l(t);return a(e)}function l(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=l,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,s,l=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"content-wrapper"},[a("nav",{staticClass:"nav",attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("Конвертер криптовалют")]),a("router-link",{staticClass:"nav-item",attrs:{to:"/wallet"}},[t._v("Кошелек")])],1),a("router-view")],1)])},i=[],r=(a("cf25"),a("2877")),o={},u=Object(r["a"])(o,c,i,!1,null,null,null),d=u.exports,f=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"main-container__column wallet-numbers-column"},[a("WalletSum"),a("WalletCoins")],1),a("div",{staticClass:"main-container__column"},[a("WalletChart"),a("WalletBuy")],1)])},b=[],_=a("5530"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallet-sum"},[a("h1",{staticClass:"small-title"},[t._v("Текущая стоимость потфеля")]),0!=t.walletSum&&Object.keys(t.walletCoins).length>0?a("div",{staticClass:"wallet-sum__sum"},[t._v(t._s(t.walletSum.toFixed(2))+" "),a("span",[t._v("USD")])]):a("div",{staticClass:"wallet-sum__sum"},[t._v("Загрузка...")]),a("div",{staticClass:"smallLabel"},[t._v("По курсу на "+t._s(t.walletWereUpdatedAt))])])},m=[],j=a("2f62"),v={name:"WalletSum",computed:Object(_["a"])({},Object(j["c"])(["walletSum","walletWereUpdatedAt","walletCoins"]))},C=v,g=(a("34ef"),Object(r["a"])(C,h,m,!1,null,null,null)),y=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallet-chart"},[0==t.walletChartData.length?a("div",{staticClass:"wallet-chart__loading"},[t._v("Обновление...")]):t._e(),a("vc-donut",{attrs:{background:"#313131",foreground:"grey",size:300,unit:"px",thickness:50,"has-legend":"","legend-placement":"top",sections:t.walletChartData,"start-angle":0,"auto-adjust-text-size":!0}})],1)},k=[],O={data:function(){return{}},computed:Object(_["a"])({},Object(j["c"])(["walletSum","walletChartData"])),mounted:function(){}},L=O,x=(a("175a"),Object(r["a"])(L,w,k,!1,null,null,null)),S=x.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"wallet-coins"},t._l(t.walletCoins,(function(e,n){return a("li",{key:n},[a("div",{staticClass:"wallet-coins__symbol"},[t._v(" "+t._s(e.symbol)+" ")]),a("div",{staticClass:"wallet-coins__in-usd"},[t._v(" "+t._s((1*e.price).toFixed(2))+" $ "),"usd"!=e.symbol?a("span",{staticClass:"smallLabel"},[t._v(" "+t._s(e.rate)+"$ по курсу на "+t._s(t.walletWereUpdatedAt))]):t._e()])])})),0)},E=[],T={name:"WalletCoins",computed:Object(_["a"])({},Object(j["c"])(["walletCoins","walletWereUpdatedAt"]))},I=T,W=(a("6da8"),Object(r["a"])(I,A,E,!1,null,null,null)),V=W.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallet-form"},[a("h2",{staticClass:"small-title"},[t._v("Пополнить кошелек")]),a("div",{staticClass:"smallLabel"},[t._v("Выберите валюту")]),t.allCoins?a("CoinsButtuns",{attrs:{clickHandler:t.coinRate_1,classHandler:t.coinClass_1}}):t._e(),a("div",{staticClass:"smallLabel"},[t._v("Введите сумму")]),a("InputField",{attrs:{inputChange:t.changeInputValue_1,inputValue:t.inputValue_1}}),a("div",{staticClass:"smallLabel"},[t._v("В USD по курсу на "+t._s(t.ratesWereUpdatedAt))]),a("InputField",{attrs:{inputChange:t.changeInputValue_2,inputValue:t.inputValue_2}}),t.inputValue_2>0?a("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.makeTransaction}},[t._v(" Купить ")]):t._e(),t.inputValue_2<=0?a("button",{staticClass:"button",attrs:{disabled:!0}},[t._v(" Введите сумму ")]):t._e()],1)},R=[],z=(a("b680"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coins-buttons"},[a("ul",t._l(t.allCoins,(function(e,n){return a("li",{key:n,class:[t.classHandler(e.id)],on:{click:function(a){return t.clickHandler(e)}}},[t._v(" "+t._s(e.symbol)+" ")])})),0)])}),H=[],N={name:"CoinsButtuns",props:{clickHandler:{type:Function},classHandler:{type:Function}},computed:Object(_["a"])({},Object(j["c"])(["allCoins"]))},F=N,U=(a("f9c7"),Object(r["a"])(F,z,H,!1,null,null,null)),M=U.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{staticClass:"input",domProps:{value:t.inputValue},on:{keyup:t.inputChange}})},P=[],B=(a("a9e3"),{name:"InputField",props:{inputValue:{type:[String,Number]},inputChange:{type:Function}}}),G=B,q=(a("70ac"),Object(r["a"])(G,$,P,!1,null,null,null)),J=q.exports,K={name:"WalletBuy",data:function(){return{inputValue_1:"",inputValue_2:"",rate_1:1,rate_2:1,firstInputSelected:!0,selectedCoin_1:"dollar",selectedCoin_2:"dollar"}},components:{CoinsButtuns:M,InputField:J},mounted:function(){this.getCoins()},computed:Object(_["a"])({},Object(j["c"])(["allCoins","ratesWereUpdatedAt"])),methods:Object(_["a"])(Object(_["a"])({},Object(j["b"])(["getCoins","addToWallet","getWalletCoins"])),{},{makeTransaction:function(){this.addToWallet({id:this.selectedCoin_1,amount:this.inputValue_1}),this.inputValue_1="",this.inputValue_2="",this.getWalletCoins()},coinClass_1:function(t){return t==this.selectedCoin_1?"selected":""},coinRate_1:function(t){this.rate_1=t.price,this.selectedCoin_1=t.id,this.calculate(this.inputValue_1)},changeInputValue_1:function(t){this.firstInputSelected=!0,this.calculate(t)},changeInputValue_2:function(t){this.firstInputSelected=!1,this.calculate(t)},calculate:function(t){var e=0;if(t.target?e+=parseFloat(t.target.value):e+=parseFloat(t),isNaN(e))return this.inputValue_2="",void(this.inputValue_1="");this.firstInputSelected?(this.inputValue_1=e,this.inputValue_2=(e*this.rate_1/this.rate_2).toFixed(6)):(this.inputValue_2=e,this.inputValue_1=(e*this.rate_2/this.rate_1).toFixed(6))}})},Q=K,X=(a("abb5"),Object(r["a"])(Q,D,R,!1,null,null,null)),Y=X.exports,Z={name:"Wallet",components:{WalletSum:y,WalletChart:S,WalletCoins:V,WalletBuy:Y},mounted:function(){this.getWallet()},methods:Object(_["a"])(Object(_["a"])({},Object(j["b"])(["getWalletCoins"])),{},{getWallet:function(){console.log("SET_WALLET_PRICE"),this.getWalletCoins()}})},tt=Z,et=(a("b125"),Object(r["a"])(tt,p,b,!1,null,null,null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calculator-wrapper"},[a("div",{staticClass:"calculator"},[a("ConverterCalculator")],1),a("div",{staticClass:"calculator__chart"},[a("ConverterChartContainer")],1)])},st=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"main-container__column"},[a("div",{staticClass:"smallLabel"},[t._v("Выберите валюту для обмена")]),t.allCoins?a("CoinsButtuns",{attrs:{clickHandler:t.coinRate_1,classHandler:t.coinClass_1}}):t._e(),a("div",{staticClass:"smallLabel"},[t._v("Введите сумму")]),a("InputField",{attrs:{inputChange:t.changeInputValue_1,inputValue:t.inputValue_1}})],1),a("div",{staticClass:"main-container__column"},[a("div",{staticClass:"smallLabel"},[t._v("Курс обновлен в "+t._s(t.ratesWereUpdatedAt))]),t.allCoins?a("CoinsButtuns",{attrs:{clickHandler:t.coinRate_2,classHandler:t.coinClass_2}}):t._e(),a("div",{staticClass:"smallLabel"},[t._v("Сумма после перевода")]),a("InputField",{attrs:{inputChange:t.changeInputValue_2,inputValue:t.inputValue_2}})],1)])},ct=[],it=(a("7db0"),{name:"ConverterCalculator",components:{CoinsButtuns:M,InputField:J},data:function(){return{inputValue_1:"",inputValue_2:"",rate_1:1,rate_2:1,firstInputSelected:!0,selectedCoin_1:"dollar",selectedCoin_2:"dollar"}},mounted:function(){this.getCoins()},computed:Object(_["a"])({},Object(j["c"])(["currenciesIds","allCoins","ratesWereUpdatedAt"])),methods:Object(_["a"])(Object(_["a"])({},Object(j["b"])(["updateLineChart","getCoins"])),{},{coinClass_1:function(t){return t==this.selectedCoin_1?"selected":""},coinClass_2:function(t){return t==this.selectedCoin_2?"selected":""},coinRate_1:function(t){var e=this;this.firstInputSelected=!0;var a=this.allCoins.find((function(t){return t.id==e.selectedCoin_2})).symbol;this.updateLineChart({id:t.id,vs_currencie:a}),this.rate_1=t.price,this.selectedCoin_1=t.id,this.calculate(this.inputValue_1)},coinRate_2:function(t){this.firstInputSelected=!0,this.rate_2=t.price,this.updateLineChart({id:this.selectedCoin_1,vs_currencie:t.symbol}),this.selectedCoin_2=t.id,this.calculate(this.inputValue_1)},changeInputValue_1:function(t){this.firstInputSelected=!0,this.calculate(t)},changeInputValue_2:function(t){this.firstInputSelected=!1,this.calculate(t)},calculate:function(t){var e=0;if(t.target?e+=parseFloat(t.target.value):e+=parseFloat(t),isNaN(e))return this.inputValue_2="",void(this.inputValue_1="");this.firstInputSelected?(this.inputValue_1=e,this.inputValue_2=(e*this.rate_1/this.rate_2).toFixed(5)):(this.inputValue_2=e,this.inputValue_1=(e*this.rate_2/this.rate_1).toFixed(5))}})}),rt=it,ot=Object(r["a"])(rt,lt,ct,!1,null,null,null),ut=ot.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container chart"},[0==t.loaded?a("div",{staticClass:"chart__loding"},[t._v("Загрузка...")]):t._e(),t.loaded?a("line-chart",{attrs:{chartdata:t.chartdata,options:t.options}}):t._e()],1)},ft=[],pt=a("1fca"),bt={extends:pt["a"],props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},_t=bt,ht=Object(r["a"])(_t,n,s,!1,null,null,null),mt=ht.exports,jt=a("c1df"),vt=a.n(jt),Ct={name:"ConverterChartContainer",components:{LineChart:mt},data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:800},scales:{xAxes:[{type:"time",distribution:"series",offset:!0,gridLines:{color:"#A0A0A0"},ticks:{major:{enabled:!0,fontStyle:"bold"},source:"data",autoSkip:!0,autoSkipPadding:75,maxRotation:0,sampleSize:100},afterBuildTicks:function(t,e){var a,n,s,l,c,i,r=t._majorUnit,o=e[0];for(s=vt()(e[0].value),"minute"===r&&0===s.second()||"hour"===r&&0===s.minute()||"day"===r&&9===s.hour()||"month"===r&&s.date()<=3&&1===s.isoWeekday()||"year"===r&&0===s.month()?o.major=!0:o.major=!1,i=s.get(r),a=1,n=e.length;a<n;a++)l=e[a],s=vt()(l.value),c=s.get(r),l.major=c!==i,i=c;return e}}],yAxes:[{gridLines:{drawBorder:!1,color:"#A0A0A0"},scaleLabel:{display:!0,labelString:"Стоимость"}}]},tooltips:{intersect:!1,mode:"index",callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a&&(a+=": "),a+=parseFloat(t.value).toFixed(2),a}}}}}},mounted:function(){this.updateLineChart({id:"dollar",vs_currencie:"usd"})},computed:Object(_["a"])({},Object(j["c"])(["chartdata","loaded"])),methods:Object(_["a"])({},Object(j["b"])(["updateLineChart"]))},gt=Ct,yt=(a("e81f"),Object(r["a"])(gt,dt,ft,!1,null,null,null)),wt=yt.exports,kt={name:"App",components:{ConverterCalculator:ut,ConverterChartContainer:wt}},Ot=kt,Lt=(a("1fb6"),Object(r["a"])(Ot,nt,st,!1,null,null,null)),xt=Lt.exports;l["a"].use(f["a"]);var St=[{path:"/",name:"Конвертер",component:xt},{path:"/wallet",name:"Wallet",component:at}],At=new f["a"]({mode:"history",base:"/crypto/",routes:St}),Et=At,Tt=(a("99af"),["bitcoin","ethereum"]),It=[{id:"dollar",symbol:"usd",price:1}],Wt="".concat((new Date).getHours(),":").concat((new Date).getMinutes(),":").concat((new Date).getSeconds()),Vt={labels:[],datasets:[{label:"Загрузка",pointRadius:0,borderWidth:2,borderColor:"#7eb6ea",backgroundColor:"#3f3289",data:[]}]},Dt=!1,Rt="".concat((new Date).getHours(),":").concat((new Date).getMinutes(),":").concat((new Date).getSeconds()),zt=0,Ht=[],Nt={dollar:{symbol:"usd",amount:"100",price:"Загрузка..."},bitcoin:{symbol:"btc",amount:"10",price:"Загрузка..."},ethereum:{symbol:"eth",amount:"5",price:"Загрузка..."}},Ft={chartdata:Vt,loaded:Dt,ratesWereUpdatedAt:Wt,allCoins:It,currenciesIds:Tt,walletCoins:Nt,walletChartData:Ht,walletSum:zt,walletWereUpdatedAt:Rt},Ut=(a("b64b"),a("2909")),Mt=function(t){t.ratesWereUpdatedAt="".concat((new Date).getHours(),":").concat((new Date).getMinutes(),":").concat((new Date).getSeconds())},$t=function(t,e){t.loaded=e.state},Pt=function(t){t.chartdata.labels=[],t.chartdata.datasets[0].data=[]},Bt=function(t,e){t.chartdata.labels.push(e.labels),t.chartdata.datasets[0].label=e.label,t.chartdata.datasets[0].data.push(e.data)},Gt=function(t,e){t.allCoins=[].concat(Object(Ut["a"])(t.allCoins),[{id:e.id,symbol:e.symbol,price:e.price}])},qt=function(t){t.allCoins=[{id:"dollar",symbol:"usd",price:1}]},Jt=function(t){t.walletWereUpdatedAt="".concat((new Date).getHours(),":").concat((new Date).getMinutes(),":").concat((new Date).getSeconds())},Kt=function(t,e){var a=t.walletCoins[e.id].amount;t.walletCoins[e.id].price=a*e.price},Qt=function(t){t.walletSum=0;for(var e=0,a=Object.keys(t.walletCoins);e<a.length;e++){var n=a[e];t.walletSum+=t.walletCoins[n].price}},Xt=function(t){t.walletChartData=[];for(var e=0,a=Object.keys(t.walletCoins);e<a.length;e++){var n=a[e];t.walletChartData=[].concat(Object(Ut["a"])(t.walletChartData),[{label:t.walletCoins[n].symbol,value:t.walletCoins[n].price/t.walletSum*100}])}},Yt=function(t,e){t.walletCoins[e.id].amount=1*t.walletCoins[e.id].amount+e.amount},Zt={SET_LINE_CHART:Bt,LOADING_LINE_CHART:$t,CLEAR_LINE_CHART:Pt,ADD_TO_ALL_COINS:Gt,CLEAR_ALL_COINS:qt,SET_ALL_COINS_TIME:Mt,SET_WALLET_TIME:Jt,ADD_TO_WALLET:Yt,SET_WALLET_SUM:Qt,SET_WALLET_CHART:Xt,SET_WALLET_PRICE:Kt},te=(a("d3b7"),a("b85c")),ee=(a("96cf"),a("1da1")),ae=function(t){var e=t.commit,a=t.state;function n(){return s.apply(this,arguments)}function s(){return s=Object(ee["a"])(regeneratorRuntime.mark((function t(){var n,s,l,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e("CLEAR_ALL_COINS"),n=Object(te["a"])(a.currenciesIds),t.prev=2,n.s();case 4:if((s=n.n()).done){t.next=21;break}return l=s.value,t.prev=6,t.next=9,fetch("https://api.coingecko.com/api/v3/coins/".concat(l,"?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false"));case 9:return c=t.sent,t.next=12,c.json();case 12:i=t.sent,e("ADD_TO_ALL_COINS",{id:i["id"],symbol:i["symbol"],price:+i["market_data"]["current_price"]["usd"]}),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](6),console.error(t.t0);case 19:t.next=4;break;case 21:t.next=26;break;case 23:t.prev=23,t.t1=t["catch"](2),n.e(t.t1);case 26:return t.prev=26,n.f(),t.finish(26);case 29:e("SET_ALL_COINS_TIME");case 30:case"end":return t.stop()}}),t,null,[[2,23,26,29],[6,16]])}))),s.apply(this,arguments)}n()},ne=function(t,e){var a=t.commit,n=t.state;function s(t,e){return l.apply(this,arguments)}function l(){return l=Object(ee["a"])(regeneratorRuntime.mark((function t(e,s){var l,c,i,r,o,u,d,f,p,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e,s),a("CLEAR_LINE_CHART"),l=n.allCoins.find((function(t){return t.symbol===s})).id,c=n.allCoins.find((function(t){return t.id==e})).symbol,t.prev=4,i=null,r=null,"dollar"!==e||"usd"===s){t.next=18;break}return t.next=10,fetch("https://api.coingecko.com/api/v3/coins/".concat(l,"/market_chart?vs_currency=usd&days=14"));case 10:return i=t.sent,t.next=13,i.json();case 13:r=t.sent,o=Object(te["a"])(r["prices"]);try{for(o.s();!(u=o.n()).done;)d=u.value,a("SET_LINE_CHART",{labels:d[0],label:"".concat(c," в ").concat(s),data:1/d[1]})}catch(_){o.e(_)}finally{o.f()}t.next=32;break;case 18:if("dollar"!==e||"usd"!=s){t.next=24;break}return t.next=21,fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=btc&days=14");case 21:i=t.sent,t.next=27;break;case 24:return t.next=26,fetch("https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(s,"&days=14"));case 26:i=t.sent;case 27:return t.next=29,i.json();case 29:r=t.sent,f=Object(te["a"])(r["prices"]);try{for(f.s();!(p=f.n()).done;)b=p.value,a("SET_LINE_CHART",{labels:b[0],label:"".concat(c," в ").concat(s),data:b[1]})}catch(_){f.e(_)}finally{f.f()}case 32:t.next=37;break;case 34:t.prev=34,t.t0=t["catch"](4),console.error(t.t0);case 37:a("LOADING_LINE_CHART",{state:!0});case 38:case"end":return t.stop()}}),t,null,[[4,34]])}))),l.apply(this,arguments)}a("LOADING_LINE_CHART",{state:!1}),s(e.id,e.vs_currencie)},se=function(t,e){var a=t.commit;a("ADD_TO_WALLET",{id:e.id,amount:e.amount})},le=function(t){var e=t.commit,a=t.state;function n(){return s.apply(this,arguments)}function s(){return s=Object(ee["a"])(regeneratorRuntime.mark((function t(){var n,s,l,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("update"),n=0,s=Object.keys(a.walletCoins);case 2:if(!(n<s.length)){t.next=24;break}if(l=s[n],t.prev=4,"dollar"!==l){t.next=9;break}e("SET_WALLET_PRICE",{id:"dollar",price:1}),t.next=16;break;case 9:return t.next=11,fetch("https://api.coingecko.com/api/v3/coins/".concat(l,"?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false"));case 11:return c=t.sent,t.next=14,c.json();case 14:i=t.sent,e("SET_WALLET_PRICE",{id:i["id"],price:+i["market_data"]["current_price"]["usd"]});case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](4),console.error(t.t0);case 21:n++,t.next=2;break;case 24:e("SET_WALLET_TIME"),e("SET_WALLET_SUM"),e("SET_WALLET_CHART");case 27:case"end":return t.stop()}}),t,null,[[4,18]])}))),s.apply(this,arguments)}n()},ce={updateLineChart:ne,getCoins:ae,addToWallet:se,getWalletCoins:le};l["a"].use(j["a"]);var ie=new j["a"].Store({state:Ft,mutations:Zt,actions:ce}),re=a("b4b3"),oe=a.n(re);a("3a93");l["a"].use(oe.a),l["a"].config.productionTip=!1,new l["a"]({router:Et,store:ie,render:function(t){return t(d)}}).$mount("#app")},6430:function(t,e,a){},"6da8":function(t,e,a){"use strict";a("99f1")},"70ac":function(t,e,a){"use strict";a("f28f")},"99f1":function(t,e,a){},a67f:function(t,e,a){},abb5:function(t,e,a){"use strict";a("e92c")},b125:function(t,e,a){"use strict";a("412e")},bc8f:function(t,e,a){},cf25:function(t,e,a){"use strict";a("fea6")},d1a4:function(t,e,a){},e81f:function(t,e,a){"use strict";a("6430")},e92c:function(t,e,a){},f28f:function(t,e,a){},f9c7:function(t,e,a){"use strict";a("0640")},fea6:function(t,e,a){}});
//# sourceMappingURL=app.1d3b77d9.js.map