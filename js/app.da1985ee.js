(function(t){function e(e){for(var i,o,c=e[0],s=e[1],u=e[2],l=0,h=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);f&&f(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"02e6":function(t,e,n){},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"0a77":function(t,e,n){},"3e8f":function(t,e,n){"use strict";var i=n("02e6"),r=n.n(i);r.a},"4b3a":function(t,e,n){"use strict";var i=n("4e37"),r=n.n(i);r.a},"4e37":function(t,e,n){},"50f2":function(t,e,n){"use strict";var i=n("f771"),r=n.n(i);r.a},6443:function(t,e,n){"use strict";var i=n("a7f4"),r=n.n(i);r.a},"7d1c":function(t,e,n){},"85ec":function(t,e,n){},a196:function(t,e,n){"use strict";var i=n("7d1c"),r=n.n(i);r.a},a7f4:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FSEvent"),n("FSCursor"),n("FS2DCanvas"),n("FSMenu",{attrs:{FSObject:t.t}})],1)},a=[],o=n("d4ec"),c=n("bee2"),s=n("2caf"),u=n("262e"),f=n("9ab4"),l=n("60a3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"capture",attrs:{id:"capture"}})},v=[],p=new i["a"]({data:function(){return{menuHover:!1,touch:!1}}}),d=p,b=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"mounted",value:function(){var t=this.$refs.capture;window.addEventListener("resize",(function(){d.$emit("resize")})),t.addEventListener("contextmenu",(function(t){t.preventDefault(),d.$emit("context",t)})),d.touch&&(t.addEventListener("touchstart",(function(t){d.$emit("pUp",t)})),t.addEventListener("touchmove",(function(t){d.$emit("pMv",t)})),t.addEventListener("touchend",(function(t){d.$emit("pDn",t)}))),t.addEventListener("mousedown",(function(t){d.$emit("mDn",t)})),t.addEventListener("mouseup",(function(t){d.$emit("mUp",t)})),t.addEventListener("mousemove",(function(t){d.$emit("mMv",t)})),t.addEventListener("pointerdown",(function(t){d.$emit("pDn",t)})),t.addEventListener("pointerup",(function(t){d.$emit("pUp",t)})),t.addEventListener("pointermove",(function(t){d.$emit("pMv",t)}))}}]),n}(l["c"]);b=Object(f["a"])([Object(l["a"])({})],b);var y=b,O=y,j=(n("50f2"),n("2877")),w=Object(j["a"])(O,h,v,!1,null,null,null),x=w.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cursorContainer"}},[n("canvas",{ref:"cur"})])},k=[],$=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"draw",value:function(){var t=this.ctx;t.fillRect(0,10,21,1),t.fillRect(10,0,1,21),t.clearRect(8,8,5,5),t.fillRect(10,10,1,1)}},{key:"mounted",value:function(){var t=this.$refs.cur;t.width=21,t.height=21,this.ctx=t.getContext("2d"),this.draw(),this.$nextTick((function(){var t=document.getElementById("cursorContainer");d.$on("pMv",(function(e){t&&(t.style.left=e.offsetX-10+"px",t.style.top=e.offsetY-10+"px")}))}))}}]),n}(l["c"]);$=Object(f["a"])([l["a"]],$);var g=$,M=g,S=(n("6443"),Object(j["a"])(M,m,k,!1,null,null,null)),E=S.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canContainer"}},t._l(2,(function(t,e){return n("canvas",{key:e,ref:"can",refInFor:!0})})),0)},F=[],P=(n("cb29"),n("4160"),n("159b"),n("b85c")),C=(n("4057"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(o["a"])(this,t),this.x=0,this.y=0,this.x=Math.floor(e),this.y=Math.floor(n)}return Object(c["a"])(t,[{key:"snap",value:function(t){var e=Math.floor(this.x/t)*t,n=Math.floor(this.y/t)*t;this.setPoint(e,n)}},{key:"setPoint",value:function(t,e){this.x=Math.floor(t),this.y=Math.floor(e)}},{key:"offset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=this.x+e.x*n,r=this.y+e.y*n;return new t(i,r)}},{key:"toDeg",value:function(t){return Math.abs(Math.ceil(t*(180/Math.PI)))}},{key:"to",value:function(t){var e=[this,t],n={run:e[1].x-e[0].x,rise:e[1].y-e[0].y,slopeX:1,slopeY:1,max:0,time:0,dist:0,vel:0,hyp:0};return n.hyp=Math.hypot(n.run,n.rise),n.dist=Math.sqrt(Math.abs(n.run)+Math.abs(n.rise)),Math.abs(n.run)>Math.abs(n.rise)?(n.max=n.run,n.slopeX=1,n.slopeY=n.rise/n.run):(n.max=n.rise,n.slopeX=n.run/n.rise,n.slopeY=1),n}}]),t}()),T=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.pts=[],t.stroke=[],t.strokes=[],t.eraser=!1,t}return Object(c["a"])(n,[{key:"clear",value:function(t){var e=this.$refs.can[t],n=e.getContext("2d");n.clearRect(0,0,e.width,e.height)}},{key:"draw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.strokes[this.strokes.length-1],n=this.$refs.can[t],i=n.getContext("2d");this.eraser?i.globalCompositeOperation="destination-out":i.globalCompositeOperation="source-over",i.beginPath(),i.moveTo(e[0].x,e[0].y),e.forEach((function(t,e){i.lineTo(t.x,t.y)})),i.fill(),i.closePath()}},{key:"mounted",value:function(){var t=this;document.addEventListener("keyup",(function(e){32==e.which&&(t.eraser=!t.eraser)})),this.$nextTick((function(){var e,n=Object(P["a"])(t.$refs.can);try{for(n.s();!(e=n.n()).done;){var i=e.value;i.width=t.wh.x,i.height=t.wh.y}}catch(r){n.e(r)}finally{n.f()}})),d.$on("pDn",(function(e){t.stroke.push(new C(e.offsetX,e.offsetY))})),d.$on("pMv",(function(e){e.pressure&&!d.menuHover&&(t.stroke.push(new C(e.offsetX,e.offsetY)),t.clear(0),t.draw(t.eraser?1:0,t.stroke))})),d.$on("pUp",(function(){t.strokes.push(t.stroke),t.stroke=[],t.clear(0),t.draw(1)}))}}]),n}(l["c"]);Object(f["a"])([Object(l["b"])({default:function(){return new C(window.innerWidth,window.innerHeight)}})],T.prototype,"wh",void 0),T=Object(f["a"])([Object(l["a"])({})],T);var L=T,z=L,D=(n("d8da"),Object(j["a"])(z,_,F,!1,null,"8721a518",null)),X=D.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},H=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{ref:"render"})},I=[],R=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"save",value:function(){}},{key:"saveIMG",value:function(){}},{key:"saveGIF",value:function(){}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.renderCan=t.$refs.render}))}}]),n}(l["c"]);R=Object(f["a"])([Object(l["a"])({})],R);var W=R,G=W,J=(n("3e8f"),Object(j["a"])(G,U,I,!1,null,"0b0478ac",null)),q=J.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"})},A=[],K=(n("b64b"),function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o["a"])(this,t),this.xy=new C,this.wh=new C(100,100),this.size=1,this.pts=[],this.hidden=!1,Object.keys(this).forEach((function(t){e[t]!==n[t]&&(e[t]=n[t]||e[t])})),null==this.pivot&&(this.pivot=new C(this.wh.x/2,this.wh.y/2))}return Object(c["a"])(t,[{key:"snap",value:function(t){if(this.size){var e=Math.floor(t.x/this.size)*this.size,n=Math.floor(t.y/this.size)*this.size;return new C(e,n)}return t}},{key:"setPivot",value:function(t){this.pivot=t}}]),t}()),N=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"setPivot",value:function(t){this.FSObject.setPivot(t)}},{key:"setWH",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new C;this.$nextTick((function(){var e=this.FSObject.snap(t);if(void 0!==e){var n=this.$el;n.style.width=e.x+"px",n.style.height=e.y+"px"}}))}},{key:"setXY",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new C,e=t.offset(this.FSObject.pivot,-1),n=new C,i=new C,r=new C(window.innerWidth,window.innerHeight).offset(this.FSObject.wh,-1);this.locked?(e.y<=r.y&&e.y>=i.y?n.y=e.y:n.y=e.y>=i.y?r.y:i.x,e.x<=r.x&&e.x>=i.x?n.x=e.x:n.x=e.x>=i.x?r.x:i.x):n=e,this.snapped&&(n=this.FSObject.snap(n)),this.$nextTick((function(){var t=this.$el;t.style.top=n.y+"px",t.style.left=n.x+"px"}))}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.setWH(t.FSObject.wh)}))}},{key:"fsUpdate",value:function(t){this.setXY(t.xy),this.setWH(t.wh),this.setPivot(t.pivot)}}]),n}(l["c"]);Object(f["a"])([Object(l["b"])({default:function(){return new K}})],N.prototype,"FSObject",void 0),Object(f["a"])([Object(l["b"])({default:!0})],N.prototype,"locked",void 0),Object(f["a"])([Object(l["b"])({default:!0})],N.prototype,"snapped",void 0),Object(f["a"])([Object(l["d"])("FSObject",{immediate:!0,deep:!0})],N.prototype,"fsUpdate",null),N=Object(f["a"])([l["a"]],N);var Q=N,V=Q,Z=(n("4b3a"),Object(j["a"])(V,B,A,!1,null,null,null)),tt=Z.exports,et=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(tt);et=Object(f["a"])([Object(l["a"])({components:{FSSave:q}})],et);var nt=et,it=nt,rt=(n("a196"),Object(j["a"])(it,Y,H,!1,null,null,null)),at=rt.exports,ot=function(t){Object(u["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.t=new K({wh:new C(10,10)}),t}return Object(c["a"])(n,[{key:"mounted",value:function(){var t=this;setTimeout((function(){t.t.wh=new C(200,200)}),1e3),d.touch="ontouchstart"in window||!!navigator.msMaxTouchPoints}}]),n}(l["c"]);ot=Object(f["a"])([Object(l["a"])({components:{FSEvent:x,FS2DCanvas:X,FSCursor:E,FSMenu:at}})],ot);var ct=ot,st=ct,ut=(n("034f"),Object(j["a"])(st,r,a,!1,null,null,null)),ft=ut.exports,lt=n("2f62");i["a"].use(lt["a"]);var ht=new lt["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:ht,render:function(t){return t(ft)}}).$mount("#app")},d8da:function(t,e,n){"use strict";var i=n("0a77"),r=n.n(i);r.a},f771:function(t,e,n){}});
//# sourceMappingURL=app.da1985ee.js.map