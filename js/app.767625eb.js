(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1471:function(t,e,n){"use strict";var r=n("61e6"),o=n.n(r);o.a},1893:function(t,e,n){},3262:function(t,e,n){"use strict";var r=n("3586"),o=n.n(r);o.a},3586:function(t,e,n){},"61e6":function(t,e,n){},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FSEvent"),n("FSCursor"),n("FS2DCanvas")],1)},i=[],a=n("d4ec"),s=n("262e"),u=n("2caf"),c=n("9ab4"),l=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},f=[],h=function(t){Object(s["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(l["b"]);h=Object(c["a"])([l["a"]],h);var v=h,d=v,y=n("2877"),b=Object(y["a"])(d,p,f,!1,null,"05481006",null),x=b.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canContainer"}},t._l(2,(function(t,e){return n("canvas",{key:e,ref:"can",refInFor:!0})})),0)},j=[],m=(n("cb29"),n("4160"),n("fb6a"),n("159b"),n("bee2")),w=new r["a"]({data:function(){return{menuHover:!1,touch:!1}}}),g=w,$=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(a["a"])(this,t),this.x=0,this.y=0,this.x=Math.floor(e),this.y=Math.floor(n)}return Object(m["a"])(t,[{key:"snap",value:function(t){var e=Math.floor(this.x/t)*t,n=Math.floor(this.y/t)*t;this.setPoint(e,n)}},{key:"setPoint",value:function(t,e){this.x=Math.floor(t),this.y=Math.floor(e)}},{key:"offset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,r=this.x+e.x*n,o=this.y+e.y*n;return new t(r,o)}},{key:"toDeg",value:function(t){return Math.abs(Math.ceil(t*(180/Math.PI)))}},{key:"to",value:function(t){var e=[this,t],n={run:e[1].x-e[0].x,rise:e[1].y-e[0].y,slopeX:1,slopeY:1,max:0,time:0,dist:0,vel:0,hyp:0};return n.hyp=Math.sqrt(Math.pow(n.run,2)+Math.pow(n.rise,2)),n.dist=Math.sqrt(Math.abs(n.run)+Math.abs(n.rise)),Math.abs(n.run)>Math.abs(n.rise)?(n.max=n.run,n.slopeX=1,n.slopeY=n.rise/n.run):(n.max=n.rise,n.slopeX=n.run/n.rise,n.slopeY=1),n}}]),t}(),M=function(t){Object(s["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.point=new $,t.eraser=!1,t}return Object(m["a"])(n,[{key:"pointChange",value:function(t,e){this.pnts.push(t);var n=4;t&&e&&this.pnts.length>=n+1&&this.renderer(this.pnts.slice(-n-1,-1))}},{key:"destroyed",value:function(){g.$off("pIn"),g.$off("pOut"),g.$off("pUp"),g.$off("pDn"),g.$off("pMv")}},{key:"test",value:function(t){var e=this,n=new $(t[0].x,t[0].y),r=new $(t[t.length-1].x,t[t.length-1].y),o=0;n.to(r).rise>o||n.to(r).rise,n.to(r).run>o||n.to(r).run,this.$refs.can.forEach((function(t,n){var o=t.getContext("2d");1==n?(o.clearRect(0,0,window.innerWidth,window.innerHeight),o.fillStyle="#F00",o.beginPath(),o.lineTo(e.pnts[0].x,r.y),o.lineTo(e.pnts[0].x,r.y),o.closePath(),o.stroke(),o.beginPath(),o.moveTo(e.pnts[0].x,e.pnts[0].y),o.lineTo(r.x,r.y),o.moveTo(e.pnts[0].x,e.pnts[0].y),o.lineTo(r.x,e.pnts[0].y),o.moveTo(e.pnts[0].x,e.pnts[0].y),o.lineTo(e.pnts[0].x,r.y),o.moveTo(e.pnts[0].x,e.pnts[0].y),o.lineTo(e.pnts[0].x+3,(r.y-e.pnts[0].to(r).dist)/2),o.closePath(),o.stroke()):o.fillStyle="#000"}))}},{key:"renderer",value:function(t){var e=this.$refs.can[0].getContext("2d"),n=new $(t[0].x,t[0].y),r=new $(t[t.length-1].x,t[t.length-1].y),o=8*this.pressure/10,i=n.to(r).dist*o,a=0;n.to(r).rise>a||n.to(r).rise,e.moveTo(n.x+i,n.y+i);for(var s=0;s<=t.length-1;s++){var u=new $(t[s].x,t[s].y);e.lineTo(u.x+i,u.y+i)}e.lineTo(r.x+i,r.y+i),e.lineTo(r.x-i,r.y-i);for(var c=0;c<=t.length-1;c++){var l=new $(t[c].x,t[c].y);e.lineTo(l.x-i,l.y-i)}e.lineTo(n.x-i,n.y-i),e.closePath(),e.fill(),e.strokeStyle="#F00"}},{key:"mounted",value:function(){var t=this;this.$refs.can.forEach((function(t){t.width=window.innerWidth,t.height=window.innerHeight})),document.addEventListener("keyup",(function(e){82==e.which&&(t.eraser=!t.eraser)})),g.$on("pIn",(function(t){})),g.$on("pOut",(function(e){t.pnts.push(new $(e.offsetX,e.offsetY)),t.pnts=[],t.point=null})),g.$on("pUp",(function(e){t.pnts=[],t.point=null})),g.$on("pMv",(function(e){e.pressure?(t.point=new $(e.offsetX,e.offsetY),t.pressure=e.pressure,t.point=new $(Math.floor(e.clientX),Math.floor(e.clientY))):(t.pnts=[],t.point=null)})),this.$nextTick((function(){}))}}]),n}(l["b"]);Object(c["a"])([Object(l["c"])("point",{deep:!0})],M.prototype,"pointChange",null),M=Object(c["a"])([Object(l["a"])({})],M);var T=M,k=T,E=(n("3262"),Object(y["a"])(k,O,j,!1,null,"10a20085",null)),_=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"capture",attrs:{id:"capture"}})},C=[],S=function(t){Object(s["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(m["a"])(n,[{key:"mounted",value:function(){var t=this.$refs.capture;window.addEventListener("resize",(function(t){return g.$emit("resize",t)})),t.addEventListener("pointerup",(function(t){return g.$emit("pUp",t)})),t.addEventListener("pointerout",(function(t){return g.$emit("pOut",t)})),t.addEventListener("pointerenter",(function(t){return g.$emit("pIn",t)})),t.addEventListener("pointermove",(function(t){return g.$emit("pMv",t)})),t.addEventListener("pointerdown",(function(t){return g.$emit("pDn",t)})),t.addEventListener("dblclick",(function(t){g.$emit("dbl",t)})),t.addEventListener("contextmenu",(function(t){t.preventDefault(),g.$emit("context",t)}))}}]),n}(l["b"]);S=Object(c["a"])([Object(l["a"])({})],S);var F=S,L=F,I=(n("fd3a"),Object(y["a"])(L,P,C,!1,null,null,null)),X=I.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cursorContainer"}},t._l(1,(function(t,e){return n("canvas",{key:e,ref:"cur",refInFor:!0})})),0)},D=[],R=n("b85c"),U=function(t){Object(s["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.pos=new $,t}return Object(m["a"])(n,[{key:"onPosChange",value:function(t){this.el&&(this.el.style.left=t.x+"px",this.el.style.top=t.y+"px")}},{key:"mounted",value:function(){var t,e=this,n=Object(R["a"])(this.$refs.cur);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.width=21,r.height=21}}catch(o){n.e(o)}finally{n.f()}this.draw(0),this.$nextTick((function(){e.el=document.getElementById("cursorContainer"),e.el.style.height="21px",e.el.style.width="21px"})),g.$on("pMv",this.moveCursor),g.$on("pUp",(function(t){e.type=t.pointerType}))}},{key:"destroyed",value:function(){g.$off("pUp"),g.$off("pMv")}},{key:"draw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.$refs.cur[t],r=n.getContext("2d"),o=Math.round(4*e);r.clearRect(0,0,20,20),r.fillRect(0,10,21,1),r.fillRect(10,0,1,21),r.clearRect(8-o,8-o,5+2*o,5+2*o),r.fillRect(10-o,10-o,1+2*o,1+2*o)}},{key:"moveCursor",value:function(t){this.type||(this.type=t.pointerType),this.tempType!=t.pointerType?this.tempType=t.pointerType:this.type=this.tempType,t.pointerType===this.type&&(this.pos=new $(t.offsetX-10,t.offsetY-10)),t.pressure&&this.draw(0,t.pressure)}}]),n}(l["b"]);Object(c["a"])([Object(l["c"])("pos",{immediate:!0,deep:!0})],U.prototype,"onPosChange",null),U=Object(c["a"])([l["a"]],U);var H=U,q=H,z=(n("1471"),Object(y["a"])(q,Y,D,!1,null,null,null)),B=z.exports,J=function(t){Object(s["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(l["b"]);J=Object(c["a"])([Object(l["a"])({components:{FSBase:x,FSCursor:B,FS2DCanvas:_,FSEvent:X}})],J);var W=J,A=W,G=(n("034f"),Object(y["a"])(A,o,i,!1,null,null,null)),K=G.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(K)}}).$mount("#app")},fd3a:function(t,e,n){"use strict";var r=n("1893"),o=n.n(r);o.a}});
//# sourceMappingURL=app.767625eb.js.map