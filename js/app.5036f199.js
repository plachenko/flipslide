(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,h=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"249b":function(t,e,n){},"4b3a":function(t,e,n){"use strict";var r=n("4e37"),i=n.n(r);i.a},"4e37":function(t,e,n){},"50f2":function(t,e,n){"use strict";var r=n("f771"),i=n.n(r);i.a},"56d0":function(t,e,n){t.exports=function(){return new Worker(n.p+"feaf6ce4b3c82cfbd2c8.worker.js")}},6443:function(t,e,n){"use strict";var r=n("a7f4"),i=n.n(r);i.a},"7ade":function(t,e,n){"use strict";var r=n("249b"),i=n.n(r);i.a},"85ec":function(t,e,n){},"8bb3":function(t,e,n){},a7f4:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("22e2"),o=n.n(i),a=(n("bb11"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FSEvent"),n("FSCursor"),n("FS2DCanvas",{ref:"canvas"})],1)}),s=[],u=n("d4ec"),c=n("bee2"),f=n("262e"),l=n("2caf"),h=n("9ab4"),p=n("60a3"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"capture",attrs:{id:"capture"}})},d=[],b=new r["default"]({data:function(){return{menuHover:!1,touch:!1}}}),y=b,O=function(t){Object(f["a"])(n,t);var e=Object(l["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"mounted",value:function(){var t=this.$refs.capture;window.addEventListener("resize",(function(t){return y.$emit("resize",t)})),t.addEventListener("pointerup",(function(t){return y.$emit("pUp",t)})),t.addEventListener("pointermove",(function(t){return y.$emit("pMv",t)})),t.addEventListener("pointerdown",(function(t){return y.$emit("pDn",t)})),t.addEventListener("dblclick",(function(t){y.$emit("dbl",t)})),t.addEventListener("contextmenu",(function(t){t.preventDefault(),y.$emit("context",t)}))}}]),n}(p["Vue"]);O=Object(h["a"])([Object(p["Component"])({})],O);var j=O,x=j,w=(n("50f2"),n("2877")),m=Object(w["a"])(x,v,d,!1,null,null,null),k=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cursorContainer"}},t._l(1,(function(t,e){return n("canvas",{key:e,ref:"cur",refInFor:!0})})),0)},M=[],$=n("b85c"),C=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(u["a"])(this,t),this.x=0,this.y=0,this.x=Math.floor(e),this.y=Math.floor(n)}return Object(c["a"])(t,[{key:"snap",value:function(t){var e=Math.floor(this.x/t)*t,n=Math.floor(this.y/t)*t;this.setPoint(e,n)}},{key:"setPoint",value:function(t,e){this.x=Math.floor(t),this.y=Math.floor(e)}},{key:"offset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,r=this.x+e.x*n,i=this.y+e.y*n;return new t(r,i)}},{key:"toDeg",value:function(t){return Math.abs(Math.ceil(t*(180/Math.PI)))}},{key:"to",value:function(t){var e=[this,t],n={run:e[1].x-e[0].x,rise:e[1].y-e[0].y,slopeX:1,slopeY:1,max:0,time:0,dist:0,vel:0,hyp:0};return n.hyp=Math.sqrt(Math.pow(n.run,2)+Math.pow(n.rise,2)),n.dist=Math.sqrt(Math.abs(n.run)+Math.abs(n.rise)),Math.abs(n.run)>Math.abs(n.rise)?(n.max=n.run,n.slopeX=1,n.slopeY=n.rise/n.run):(n.max=n.rise,n.slopeX=n.run/n.rise,n.slopeY=1),n}}]),t}(),_=function(t){Object(f["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.pos=new C,t}return Object(c["a"])(n,[{key:"onPosChange",value:function(t){this.el&&(this.el.style.left=t.x+"px",this.el.style.top=t.y+"px")}},{key:"mounted",value:function(){var t,e=this,n=Object($["a"])(this.$refs.cur);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.width=21,r.height=21}}catch(i){n.e(i)}finally{n.f()}this.draw(0),this.$nextTick((function(){e.el=document.getElementById("cursorContainer"),e.el.style.height="21px",e.el.style.width="21px"})),y.$on("pMv",this.moveCursor)}},{key:"destroyed",value:function(){y.$off("pMv")}},{key:"draw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.$refs.cur[t],r=n.getContext("2d"),i=Math.round(4*e);r.clearRect(0,0,20,20),r.fillRect(0,10,21,1),r.fillRect(10,0,1,21),r.clearRect(8-i,8-i,5+2*i,5+2*i),r.fillRect(10-i,10-i,1+2*i,1+2*i)}},{key:"moveCursor",value:function(t){this.pos=new C(t.offsetX-10,t.offsetY-10),t.pressure&&this.draw(0,t.pressure)}}]),n}(p["Vue"]);Object(h["a"])([Object(p["Watch"])("pos",{immediate:!0,deep:!0})],_.prototype,"onPosChange",null),_=Object(h["a"])([p["Component"]],_);var P=_,S=P,T=(n("6443"),Object(w["a"])(S,g,M,!1,null,null,null)),F=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"debug"}},[n("div",{attrs:{id:"type"}},[t._v(t._s(t.pointerType))])])},W=[],X=function(t){Object(f["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.pointerType="",t}return Object(c["a"])(n,[{key:"mounted",value:function(){var t=this;y.$on("pMv",(function(e){t.pointerType=e.pointerType}))}},{key:"destroyed",value:function(){y.$off("pMv")}}]),n}(p["Vue"]);X=Object(h["a"])([p["Component"]],X);var Y=X,z=Y,D=(n("7ade"),Object(w["a"])(z,E,W,!1,null,null,null)),H=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"})},V=[],R=(n("4160"),n("b64b"),n("159b"),function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(u["a"])(this,t),this.xy=new C,this.wh=new C(100,100),this.size=1,this.pts=[],this.hidden=!1,Object.keys(this).forEach((function(t){e[t]!==n[t]&&(e[t]=n[t]||e[t])})),null==this.pivot&&(this.pivot=new C(this.wh.x/2,this.wh.y/2))}return Object(c["a"])(t,[{key:"snap",value:function(t){if(this.size){var e=Math.floor(t.x/this.size)*this.size,n=Math.floor(t.y/this.size)*this.size;return new C(e,n)}return t}},{key:"setPivot",value:function(t){this.pivot=t}}]),t}()),I=function(t){Object(f["a"])(n,t);var e=Object(l["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return Object(c["a"])(n,[{key:"setPivot",value:function(t){this.FSObject.setPivot(t)}},{key:"setWH",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new C;this.$nextTick((function(){var e=this.FSObject.snap(t);if(void 0!==e){var n=this.$el;n.style.width=e.x+"px",n.style.height=e.y+"px"}}))}},{key:"setXY",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new C,e=t.offset(this.FSObject.pivot,-1),n=new C,r=new C,i=new C(window.innerWidth,window.innerHeight).offset(this.FSObject.wh,-1);this.locked?(e.y<=i.y&&e.y>=r.y?n.y=e.y:n.y=e.y>=r.y?i.y:r.x,e.x<=i.x&&e.x>=r.x?n.x=e.x:n.x=e.x>=r.x?i.x:r.x):n=e,this.snapped&&(n=this.FSObject.snap(n)),this.$nextTick((function(){var t=this.$el;t.style.top=n.y+"px",t.style.left=n.x+"px"}))}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.setWH(t.FSObject.wh)}))}},{key:"fsUpdate",value:function(t){this.setXY(t.xy),this.setWH(t.wh),this.setPivot(t.pivot)}}]),n}(p["Vue"]);Object(h["a"])([Object(p["Prop"])({default:function(){return new R}})],I.prototype,"FSObject",void 0),Object(h["a"])([Object(p["Prop"])({default:!0})],I.prototype,"locked",void 0),Object(h["a"])([Object(p["Prop"])({default:!0})],I.prototype,"snapped",void 0),Object(h["a"])([Object(p["Watch"])("FSObject",{immediate:!0,deep:!0})],I.prototype,"fsUpdate",null),I=Object(h["a"])([p["Component"]],I);var U=I,q=U,B=(n("4b3a"),Object(w["a"])(q,L,V,!1,null,null,null)),J=B.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canContainer"}},t._l(2,(function(t,e){return n("canvas",{key:e,ref:"can",refInFor:!0})})),0)},G=[],K=(n("cb29"),n("fb6a"),n("56d0"),function(t){Object(f["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.point=new C,t}return Object(c["a"])(n,[{key:"pointChange",value:function(t,e){this.pnts.push(t);var n=7;t&&e&&this.pnts.length>n&&this.renderer(this.pnts.slice(-n,-1))}},{key:"destroyed",value:function(){y.$off("pMv")}},{key:"renderer",value:function(t){var e=this.$refs.can[0].getContext("2d"),n=new C(t[0].x,t[0].y),r=new C(t[t.length-1].x,t[t.length-1].y),i=7*this.pressure/10,o=[n.to(r).dist*i];e.beginPath(),e.moveTo(n.x+o[0],n.y+o[0]),e.lineTo(r.x+o[0],r.y+o[0]),e.lineTo(r.x+o[0],r.y+o[0]),e.lineTo(r.x-o[0],r.y-o[0]),e.lineTo(n.x-o[0],n.y-o[0]),e.closePath(),e.fill()}},{key:"mounted",value:function(){var t=this;this.$refs.can.forEach((function(t){t.width=window.innerWidth,t.height=window.innerHeight})),this.$refs.can[0].transferControlToOffscreen,y.$on("pUp",(function(t){})),y.$on("pMv",(function(e){e.pressure?(t.pressure=e.pressure,t.point=new C(Math.floor(e.clientX),Math.floor(e.clientY))):(t.pnts=[],t.point=null)})),this.$nextTick((function(){}))}}]),n}(p["Vue"]));Object(h["a"])([Object(p["Watch"])("point",{deep:!0})],K.prototype,"pointChange",null),K=Object(h["a"])([Object(p["Component"])({})],K);var N=K,Q=N,Z=(n("dc43"),Object(w["a"])(Q,A,G,!1,null,"d5c89820",null)),tt=Z.exports,et=function(t){Object(f["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(u["a"])(this,n),t=e.apply(this,arguments),t.touchType="",t.debug=!1,t.test=new R,t}return Object(c["a"])(n,[{key:"mounted",value:function(){var t=this;y.$on("pMv",(function(e){e.pressure?t.test.wh=new C(e.offsetX,e.offsetY).offset(new C(100,0)):t.test.xy=new C(e.offsetX,e.offsetY),t.touchType=e.pointerType}))}},{key:"destroyed",value:function(){y.$off("pMv")}}]),n}(p["Vue"]);et=Object(h["a"])([Object(p["Component"])({components:{FSDebug:H,FSEvent:k,FS2DCanvas:tt,FSCursor:F,FSBase:J}})],et);var nt=et,rt=nt,it=(n("034f"),Object(w["a"])(rt,a,s,!1,null,null,null)),ot=it.exports;r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(ot)}}).$mount("#app")},dc43:function(t,e,n){"use strict";var r=n("8bb3"),i=n.n(r);i.a},f771:function(t,e,n){}});
//# sourceMappingURL=app.5036f199.js.map