(function(t){function e(e){for(var i,a,s=e[0],c=e[1],u=e[2],l=0,h=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"14e6":function(t,e,n){"use strict";var i=n("97c3"),r=n.n(i);r.a},"249b":function(t,e,n){},"4b3a":function(t,e,n){"use strict";var i=n("4e37"),r=n.n(i);r.a},"4e37":function(t,e,n){},"50f2":function(t,e,n){"use strict";var i=n("f771"),r=n.n(i);r.a},"56d0":function(t,e,n){t.exports=function(){return new Worker(n.p+"5e963f8bd67edb8d1bfc.worker.js")}},6443:function(t,e,n){"use strict";var i=n("a7f4"),r=n.n(i);r.a},"7ade":function(t,e,n){"use strict";var i=n("249b"),r=n.n(i);r.a},"85ec":function(t,e,n){},"97c3":function(t,e,n){},a7f4:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.debug?n("FSDebug"):t._e(),n("FSEvent"),n("FSCursor"),n("FS2DCanvas",{ref:"canvas"})],1)},o=[],a=n("d4ec"),s=n("bee2"),c=n("262e"),u=n("2caf"),f=n("9ab4"),l=n("60a3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"capture",attrs:{id:"capture"}})},p=[],v=new i["a"]({data:function(){return{menuHover:!1,touch:!1}}}),d=v,b=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this.$refs.capture;window.addEventListener("resize",(function(t){return d.$emit("resize",t)})),t.addEventListener("pointerup",(function(t){return d.$emit("pUp",t)})),t.addEventListener("pointermove",(function(t){return d.$emit("pMv",t)})),t.addEventListener("pointerdown",(function(t){return d.$emit("pDn",t)})),t.addEventListener("dblclick",(function(t){d.$emit("dbl",t)})),t.addEventListener("contextmenu",(function(t){t.preventDefault(),d.$emit("context",t)}))}}]),n}(l["c"]);b=Object(f["a"])([Object(l["a"])({})],b);var y=b,O=y,j=(n("50f2"),n("2877")),w=Object(j["a"])(O,h,p,!1,null,null,null),x=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cursorContainer"}},t._l(1,(function(t,e){return n("canvas",{key:e,ref:"cur",refInFor:!0})})),0)},g=[],m=n("b85c"),M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(a["a"])(this,t),this.x=0,this.y=0,this.x=Math.floor(e),this.y=Math.floor(n)}return Object(s["a"])(t,[{key:"snap",value:function(t){var e=Math.floor(this.x/t)*t,n=Math.floor(this.y/t)*t;this.setPoint(e,n)}},{key:"setPoint",value:function(t,e){this.x=Math.floor(t),this.y=Math.floor(e)}},{key:"offset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=this.x+e.x*n,r=this.y+e.y*n;return new t(i,r)}},{key:"toDeg",value:function(t){return Math.abs(Math.ceil(t*(180/Math.PI)))}},{key:"to",value:function(t){var e=[this,t],n={run:e[1].x-e[0].x,rise:e[1].y-e[0].y,slopeX:1,slopeY:1,max:0,time:0,dist:0,vel:0,hyp:0};return n.hyp=Math.sqrt(Math.pow(n.run,2)+Math.pow(n.rise,2)),n.dist=Math.sqrt(Math.abs(n.run)+Math.abs(n.rise)),Math.abs(n.run)>Math.abs(n.rise)?(n.max=n.run,n.slopeX=1,n.slopeY=n.rise/n.run):(n.max=n.rise,n.slopeX=n.run/n.rise,n.slopeY=1),n}}]),t}(),$=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.pos=new M,t}return Object(s["a"])(n,[{key:"onPosChange",value:function(t){this.el&&(this.el.style.left=t.x+"px",this.el.style.top=t.y+"px")}},{key:"mounted",value:function(){var t,e=this,n=Object(m["a"])(this.$refs.cur);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.width=21,i.height=21}}catch(r){n.e(r)}finally{n.f()}this.draw(0),this.$nextTick((function(){e.el=document.getElementById("cursorContainer"),e.el.style.height="21px",e.el.style.width="21px"})),d.$on("pMv",this.moveCursor)}},{key:"destroyed",value:function(){d.$off("pMv")}},{key:"draw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.$refs.cur[t],i=n.getContext("2d"),r=Math.round(4*e);i.clearRect(0,0,20,20),i.fillRect(0,10,21,1),i.fillRect(10,0,1,21),i.clearRect(8-r,8-r,5+2*r,5+2*r),i.fillRect(10-r,10-r,1+2*r,1+2*r)}},{key:"moveCursor",value:function(t){this.pos=new M(t.offsetX-10,t.offsetY-10),t.pressure&&this.draw(0,t.pressure)}}]),n}(l["c"]);Object(f["a"])([Object(l["d"])("pos",{immediate:!0,deep:!0})],$.prototype,"onPosChange",null),$=Object(f["a"])([l["a"]],$);var _=$,S=_,F=(n("6443"),Object(j["a"])(S,k,g,!1,null,null,null)),E=F.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"debug"}},[n("div",{attrs:{id:"type"}},[t._v(t._s(t.pointerType))])])},P=[],T=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.pointerType="",t}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;d.$on("pMv",(function(e){t.pointerType=e.pointerType}))}},{key:"destroyed",value:function(){d.$off("pMv")}}]),n}(l["c"]);T=Object(f["a"])([l["a"]],T);var X=T,Y=X,z=(n("7ade"),Object(j["a"])(Y,C,P,!1,null,null,null)),D=z.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"})},L=[],W=(n("4160"),n("b64b"),n("159b"),function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(a["a"])(this,t),this.xy=new M,this.wh=new M(100,100),this.size=1,this.pts=[],this.hidden=!1,Object.keys(this).forEach((function(t){e[t]!==n[t]&&(e[t]=n[t]||e[t])})),null==this.pivot&&(this.pivot=new M(this.wh.x/2,this.wh.y/2))}return Object(s["a"])(t,[{key:"snap",value:function(t){if(this.size){var e=Math.floor(t.x/this.size)*this.size,n=Math.floor(t.y/this.size)*this.size;return new M(e,n)}return t}},{key:"setPivot",value:function(t){this.pivot=t}}]),t}()),R=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"setPivot",value:function(t){this.FSObject.setPivot(t)}},{key:"setWH",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new M;this.$nextTick((function(){var e=this.FSObject.snap(t);if(void 0!==e){var n=this.$el;n.style.width=e.x+"px",n.style.height=e.y+"px"}}))}},{key:"setXY",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new M,e=t.offset(this.FSObject.pivot,-1),n=new M,i=new M,r=new M(window.innerWidth,window.innerHeight).offset(this.FSObject.wh,-1);this.locked?(e.y<=r.y&&e.y>=i.y?n.y=e.y:n.y=e.y>=i.y?r.y:i.x,e.x<=r.x&&e.x>=i.x?n.x=e.x:n.x=e.x>=i.x?r.x:i.x):n=e,this.snapped&&(n=this.FSObject.snap(n)),this.$nextTick((function(){var t=this.$el;t.style.top=n.y+"px",t.style.left=n.x+"px"}))}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.setWH(t.FSObject.wh)}))}},{key:"fsUpdate",value:function(t){this.setXY(t.xy),this.setWH(t.wh),this.setPivot(t.pivot)}}]),n}(l["c"]);Object(f["a"])([Object(l["b"])({default:function(){return new W}})],R.prototype,"FSObject",void 0),Object(f["a"])([Object(l["b"])({default:!0})],R.prototype,"locked",void 0),Object(f["a"])([Object(l["b"])({default:!0})],R.prototype,"snapped",void 0),Object(f["a"])([Object(l["d"])("FSObject",{immediate:!0,deep:!0})],R.prototype,"fsUpdate",null),R=Object(f["a"])([l["a"]],R);var I=R,U=I,q=(n("4b3a"),Object(j["a"])(U,H,L,!1,null,null,null)),B=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canContainer"}},t._l(2,(function(t,e){return n("canvas",{key:e,ref:"can",refInFor:!0})})),0)},A=[],G=n("56d0"),K=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.point=new M,t}return Object(s["a"])(n,[{key:"pointChange",value:function(t,e){this.pnts.push(t),this.pnts.length>9&&this.worker.postMessage({pnts:[this.pnts[this.pnts.length-9],this.pnts[this.pnts.length-1]]})}},{key:"destroyed",value:function(){d.$off("pMv")}},{key:"mounted",value:function(){var t=this;this.$refs.can.forEach((function(t){t.width=window.innerWidth,t.height=window.innerHeight})),this.offscreen=this.$refs.can[0].transferControlToOffscreen(),this.worker=G(),this.worker.postMessage({canvas:this.offscreen},[this.offscreen]),d.$on("pMv",(function(e){e.pressure?t.point=new M(Math.floor(e.clientX),Math.floor(e.clientY)):(t.pnts=[],t.point=null)})),this.$nextTick((function(){}))}}]),n}(l["c"]);Object(f["a"])([Object(l["d"])("point",{deep:!0})],K.prototype,"pointChange",null),K=Object(f["a"])([Object(l["a"])({})],K);var N=K,Q=N,V=(n("14e6"),Object(j["a"])(Q,J,A,!1,null,"a08fd2f0",null)),Z=V.exports,tt=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.touchType="",t.debug=!1,t.test=new W,t}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;d.$on("pMv",(function(e){e.pressure?t.test.wh=new M(e.offsetX,e.offsetY).offset(new M(100,0)):t.test.xy=new M(e.offsetX,e.offsetY),t.touchType=e.pointerType}))}},{key:"destroyed",value:function(){d.$off("pMv")}}]),n}(l["c"]);tt=Object(f["a"])([Object(l["a"])({components:{FSDebug:D,FSEvent:x,FS2DCanvas:Z,FSCursor:E,FSBase:B}})],tt);var et=tt,nt=et,it=(n("034f"),Object(j["a"])(nt,r,o,!1,null,null,null)),rt=it.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(rt)}}).$mount("#app")},f771:function(t,e,n){}});
//# sourceMappingURL=app.ad217294.js.map