(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0c42":function(t,e,n){"use strict";var r=n("d5f2"),i=n.n(r);i.a},"249b":function(t,e,n){},"43c3":function(t,e,n){},"50f2":function(t,e,n){"use strict";var r=n("f771"),i=n.n(r);i.a},6443:function(t,e,n){"use strict";var r=n("a7f4"),i=n.n(r);i.a},"7ade":function(t,e,n){"use strict";var r=n("249b"),i=n.n(r);i.a},"85ec":function(t,e,n){},a7f4:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{position:"absolute",left:"0px",top:"0px","z-index":"9999"}},[n("span",{staticStyle:{display:"inline-block",padding:"5px 5px",margin:"0px 5px"},style:{backgroundColor:"2d"==t.ctx||"both"==t.ctx?"#F00":"#FCC"},on:{click:function(e){t.ctx="2d"}}},[t._v("2d")]),n("span",{staticStyle:{display:"inline-block",padding:"5px 5px",margin:"0px 5px"},style:{backgroundColor:"webgl"==t.ctx||"both"==t.ctx?"#F00":"#FCC"},on:{click:function(e){t.ctx="webgl"}}},[t._v("webGL")]),n("span",{staticStyle:{display:"inline-block",padding:"5px 5px",margin:"0px 5px"},style:{backgroundColor:"#FCC"},on:{click:function(e){t.ctx="both"}}},[t._v("both")])]),t.debug?n("FSDebug"):t._e(),n("FSEvent"),"webgl"==t.ctx||"both"==t.ctx?n("FSCanvasWebGL",{staticStyle:{"z-index":"9997"}}):t._e(),"2d"==t.ctx||"both"==t.ctx?n("FS2DCanvas",{attrs:{color:t.colors}}):t._e()],1)},o=[],a=n("d4ec"),s=n("bee2"),c=n("262e"),u=n("2caf"),l=n("9ab4"),f=n("60a3"),p=new r["a"]({data:function(){return{menuHover:!1,touch:!1,debug:!1}}}),h=p,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"debug"}},[n("div",{attrs:{id:"type"}},[t._v(t._s(t.pointerType))])])},v=[],b=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.pointerType="",t}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;h.$on("pMv",(function(e){t.pointerType=e.pointerType}))}},{key:"destroyed",value:function(){h.$off("pMv")}}]),n}(f["c"]);b=Object(l["a"])([f["a"]],b);var y=b,g=y,m=(n("7ade"),n("2877")),x=Object(m["a"])(g,d,v,!1,null,null,null),w=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"capture",attrs:{id:"capture"}})},_=[],j=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this.$refs.capture;window.addEventListener("resize",(function(t){return h.$emit("resize",t)})),t.addEventListener("pointerup",(function(t){return h.$emit("pUp",t)})),t.addEventListener("pointerout",(function(t){return h.$emit("pOut",t)})),t.addEventListener("pointerenter",(function(t){return h.$emit("pIn",t)})),t.addEventListener("pointermove",(function(t){return h.$emit("pMv",t)})),t.addEventListener("pointerdown",(function(t){return h.$emit("pDn",t)})),t.addEventListener("dblclick",(function(t){h.$emit("dbl",t)})),t.addEventListener("contextmenu",(function(t){t.preventDefault(),h.$emit("context",t)}))}}]),n}(f["c"]);j=Object(l["a"])([Object(f["a"])({})],j);var $=j,k=$,S=(n("50f2"),Object(m["a"])(k,O,_,!1,null,null,null)),C=S.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cursorContainer"},t._l(1,(function(e,r){return n("div",{key:r,ref:"disp",refInFor:!0,staticClass:"cursorDisplay"},t._l(1,(function(t,e){return n("canvas",{key:e,ref:"cur",refInFor:!0})})),0)})),0)},E=[],T=n("b85c"),F=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(a["a"])(this,t),this.x=0,this.y=0,this.x=e,this.y=n}return Object(s["a"])(t,[{key:"snap",value:function(t){var e=Math.floor(this.x/t)*t,n=Math.floor(this.y/t)*t;this.setPoint(e,n)}},{key:"setPoint",value:function(t,e){this.x=Math.floor(t),this.y=Math.floor(e)}},{key:"offset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,r=this.x+e.x*n,i=this.y+e.y*n;return new t(r,i)}},{key:"toDeg",value:function(t){return Math.abs(Math.ceil(t*(180/Math.PI)))}},{key:"to",value:function(t){var e=[this,t],n={run:e[1].x-e[0].x,rise:e[1].y-e[0].y,slopeX:1,slopeY:1,max:0,time:0,dist:0,vel:0,hyp:0};return n.hyp=Math.sqrt(Math.pow(n.run,2)+Math.pow(n.rise,2)),n.dist=Math.sqrt(Math.abs(n.run)+Math.abs(n.rise)),Math.abs(n.run)>Math.abs(n.rise)?(n.max=n.run,n.slopeX=1,n.slopeY=n.rise/n.run):(n.max=n.rise,n.slopeX=n.run/n.rise,n.slopeY=1),n}}]),t}(),L=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.pos=new F,t}return Object(s["a"])(n,[{key:"onPosChange",value:function(t){this.$refs.disp[0].style.left=t.x+"px",this.$refs.disp[0].style.top=t.y+"px"}},{key:"mounted",value:function(){var t,e=this,n=Object(T["a"])(this.$refs.cur);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.width=21,r.height=21}}catch(s){n.e(s)}finally{n.f()}var i,o=Object(T["a"])(this.$refs.disp);try{for(o.s();!(i=o.n()).done;){var a=i.value;a.style.height="21px",a.style.width="21px"}}catch(s){o.e(s)}finally{o.f()}this.draw(0),h.$on("pMv",this.moveCursor),h.$on("pOut",(function(t){e.$refs.disp[0].style.left=t.offsetX-10+"px",e.$refs.disp[0].style.top=t.offsetY-10+"px"})),h.$on("pUp",(function(t){e.type=t.pointerType}))}},{key:"destroyed",value:function(){h.$off("pDn"),h.$off("pUp"),h.$off("pMv")}},{key:"draw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.$refs.cur[t],r=n.getContext("2d"),i=Math.round(4*e);r.clearRect(0,0,20,20),r.fillRect(0,10,21,1),r.fillRect(10,0,1,21),r.clearRect(8-i,8-i,5+2*i,5+2*i),r.fillRect(10-i,10-i,1+2*i,1+2*i)}},{key:"moveCursor",value:function(t){this.type||(this.type=t.pointerType),this.tempType!=t.pointerType?this.tempType=t.pointerType:this.type=this.tempType,t.pointerType===this.type&&(this.pos=new F(t.offsetX-10,t.offsetY-10)),t.pressure&&this.draw(0,t.pressure)}}]),n}(f["c"]);Object(l["a"])([Object(f["d"])("pos",{deep:!0})],L.prototype,"onPosChange",null),L=Object(l["a"])([f["a"]],L);var M=L,P=M,I=(n("6443"),Object(m["a"])(P,D,E,!1,null,null,null)),R=I.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(2,(function(t,e){return n("canvas",{key:e,ref:"can",refInFor:!0})})),0)},U=[],Y=(n("4160"),n("fb6a"),n("d3b7"),n("cfc3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),X=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"})},G=[],H=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){}}]),n}(f["c"]);H=Object(l["a"])([f["a"]],H);var V=H,W=V,q=(n("e7c0"),Object(m["a"])(W,B,G,!1,null,"401ddaf0",null)),z=q.exports,N=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){}}]),n}(z);N=Object(l["a"])([f["a"]],N);var J=N,K=J,Q=Object(m["a"])(K,Y,X,!1,null,"617c4738",null),Z=Q.exports,tt="#version 300 es\n\nprecision highp float;\n\nuniform vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = v_color;\n}\n",et="#version 300 es\n\nin vec2 a_position;\n\nuniform vec2 u_lastPosition;\nuniform mat3 u_matrix;\nuniform float u_distance;\nuniform float u_lastDistance;\n\nvoid main() {\n  vec2 pos;\n  if(gl_VertexID == 0){\n    pos = a_position - u_distance;\n  }else if(gl_VertexID == 1){\n    pos = a_position + u_distance;\n  }else if(gl_VertexID == 2){\n    pos = u_lastPosition - u_lastDistance;\n  }else if(gl_VertexID == 3){\n    pos = u_lastPosition + u_lastDistance;\n  }\n\n  gl_Position = vec4((u_matrix * vec3(pos, 1)).xy, 0, 1);\n}\n",nt={multiply:function(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],c=t[6],u=t[7],l=t[8],f=e[0],p=e[1],h=e[2],d=e[3],v=e[4],b=e[5],y=e[6],g=e[7],m=e[8];return[f*n+p*o+h*c,f*r+p*a+h*u,f*i+p*s+h*l,d*n+v*o+b*c,d*r+v*a+b*u,d*i+v*s+b*l,y*n+g*o+m*c,y*r+g*a+m*u,y*i+g*s+m*l]},translation:function(t,e){return[1,0,0,0,1,0,t,e,1]},rotation:function(t,e){return[t,-e,0,e,t,0,0,0,1]},scaling:function(t,e){return[t,0,0,0,e,0,0,0,1]},identity:function(){return[1,0,0,0,1,0,0,0,1]},projection:function(t,e){return[2/t,0,0,0,-2/e,0,-1,1,1]},translate:function(t,e,n){return nt.multiply(t,nt.translation(e,n))},rotate:function(t,e,n){return nt.multiply(t,nt.rotation(e,n))},scale:function(t,e,n){return nt.multiply(t,nt.scaling(e,n))}};function rt(t,e,n){var r=t.createShader(n);t.shaderSource(r,e),t.compileShader(r);var i=t.getShaderParameter(r,t.COMPILE_STATUS);return i||console.error(t.getShaderInfoLog(r)),r}function it(t,e,n){var r=t.createProgram();t.attachShader(r,e),t.attachShader(r,n),t.linkProgram(r);var i=t.getProgramParameter(r,t.LINK_STATUS);return i||console.error(t.getProgramInfoLog(r)),r}var ot=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.bufferArr=[],t.pressure=0,t.color={r:255,g:0,b:0,a:1},t.lineBuffer=9,t.mult=1,t.md=!1,t.lD=0,t}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;this.points=[],this.sPoints=[];var e=this.$refs.can[1].getContext("webgl2",{alpha:1});this.gl=e,this.$refs.can.forEach((function(t){t.width=window.innerWidth,t.height=window.innerHeight})),this.point=new F(window.innerWidth/2,window.innerHeight/2),this.setupGL(),this.setGeometry(),h.$on("colorUpdate",(function(e){t.color.r=e.rgba.r/255,t.color.g=e.rgba.g/255,t.color.b=e.rgba.b/255,t.color.a=e.rgba.a})),h.$on("pUp",(function(e){t.draw();var n=t.$refs.can[0].getContext("2d");n.drawImage(t.$refs.can[1],0,0),t.point=new F(e.offsetX,e.offsetY),t.points.push(new F(e.offsetX,e.offsetY)),t.md=!1,t.points=[],t.p2=null})),h.$on("pDn",(function(e){t.points.push(new F(e.offsetX,e.offsetY)),t.point=new F(e.offsetX,e.offsetY),t.md=!0,requestAnimationFrame(t.update)})),h.$on("pMv",(function(e){e.pressure&&(t.point=new F(e.offsetX,e.offsetY),t.mDelta=new F(e.movementX,e.movementY),t.points.push(t.point),t.pressure=e.pressure)}))}},{key:"update",value:function(){if(this.md){this.draw();var t=this.$refs.can[0].getContext("2d");t.drawImage(this.$refs.can[1],0,0),requestAnimationFrame(this.update)}}},{key:"setupGL",value:function(){var t=this.gl,e=rt(t,et,t.VERTEX_SHADER),n=rt(t,tt,t.FRAGMENT_SHADER),r=it(t,e,n);this.col=t.getUniformLocation(r,"v_color");var i=t.getAttribLocation(r,"a_position");this.res=t.getUniformLocation(r,"u_resolution"),this.matrix=t.getUniformLocation(r,"u_matrix"),this.translationLocation=t.getUniformLocation(r,"u_translation"),this.rotation=t.getUniformLocation(r,"u_rotation"),this.pos2u=t.getUniformLocation(r,"u_lastPosition"),this.dist=t.getUniformLocation(r,"u_distance"),this.lastDist=t.getUniformLocation(r,"u_lastDistance"),this.program=r;var o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0)}},{key:"setGeometry",value:function(){var t=this.gl,e=new Float32Array([0,0,0,0,0,0,0,0]);t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW)}},{key:"drawQuad",value:function(){var t=this.point;this.p2||(this.p2=t);var e=Math.floor(t.to(this.p2).hyp),n=t.to(this.p2).run,r=(t.to(this.p2).rise,0),i=0;e?(r=n/e,i=t.to(this.p2).rise/e):(r=0,i=0);var o=this.gl,a=[t.x,t.y],s=[r,i],c=nt.identity();o.uniform4fv(this.col,[this.color.r,this.color.g,this.color.b,this.color.a]),o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT),o.useProgram(this.program),o.uniform2f(this.res,o.canvas.width,o.canvas.height);var u=8*this.pressure/7,l=t.to(this.p2).dist*u;o.uniform1f(this.dist,l),o.uniform1f(this.lastDist,this.lD),o.uniform2f(this.pos2u,this.p2.x-t.x,this.p2.y-t.y),c=nt.rotate(c,s[1],s[0]),c=nt.projection(o.canvas.width,o.canvas.height),c=nt.translate(c,a[0],a[1]),o.uniformMatrix3fv(this.matrix,!1,c),o.drawArrays(o.TRIANGLE_STRIP,0,4),this.p2=t,this.lD=l}},{key:"glDraw",value:function(t,e){e||(e=t);var n=this.gl,r=[t.x,t.y],i=(this.pressure,1.5*t.to(e).dist),o=nt.identity();n.uniform4fv(this.col,[this.color.r,this.color.g,this.color.b,this.color.a]),n.viewport(0,0,n.canvas.width,n.canvas.height),n.useProgram(this.program),n.uniform2f(this.res,n.canvas.width,n.canvas.height),n.uniform1f(this.dist,i),n.uniform1f(this.lastDist,this.lD),n.uniform2f(this.pos2u,e.x-t.x,e.y-t.y),o=nt.projection(n.canvas.width,n.canvas.height),o=nt.translate(o,r[0],r[1]),n.uniformMatrix3fv(this.matrix,!1,o),n.drawArrays(n.TRIANGLE_STRIP,0,4),this.lD=i}},{key:"draw",value:function(){var t=this;this.gl.clear(this.gl.COLOR_BUFFER_BIT);var e=this.points.slice(-9,-1);e.length>1&&e.forEach((function(n,r){t.glDraw(e[r],e[r-1])}))}}]),n}(Z);ot=Object(l["a"])([f["a"]],ot);var at=ot,st=at,ct=Object(m["a"])(st,A,U,!1,null,"4ad5337a",null),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canContainer"}},t._l(2,(function(t,e){return n("canvas",{key:e,ref:"can",refInFor:!0})})),0)},ft=[],pt=(n("cb29"),function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.point=new F,t.eraser=!1,t.lineBuffer=5,t}return Object(s["a"])(n,[{key:"pointChange",value:function(t,e){this.pnts.push(t),t&&e&&this.pnts.length>=this.lineBuffer+1&&this.draw(this.pnts.slice(-this.lineBuffer-1,-1),1)}},{key:"destroyed",value:function(){h.$off("pIn"),h.$off("pOut"),h.$off("pUp"),h.$off("pDn"),h.$off("pMv")}},{key:"draw",value:function(t,e){var n=this.$refs.can[1].getContext("2d");this.color.rgba?n.fillStyle="rgba("+this.color.rgba.r+","+this.color.rgba.g+","+this.color.rgba.b+","+this.color.rgba.a+")":n.fillStyle="#000";var r=new F(t[0].x,t[0].y),i=new F(t[t.length-1].x,t[t.length-1].y),o=8*this.pressure/7,a=r.to(i).dist*o;n.moveTo(r.x+a,r.y+a),n.lineTo(i.x+a,i.y+a),n.lineTo(i.x-a,i.y-a),n.lineTo(r.x-a,r.y-a),n.closePath(),n.fill()}},{key:"clear",value:function(t){var e=this.$refs.can[t],n=e.getContext("2d");n.clearRect(0,0,e.width,e.height)}},{key:"mounted",value:function(){var t=this;this.$refs.can.forEach((function(t){t.width=window.innerWidth,t.height=window.innerHeight})),document.addEventListener("keyup",(function(e){82==e.which&&(t.eraser=!t.eraser)})),h.$on("pIn",(function(t){})),h.$on("pOut",(function(e){t.pnts.push(new F(e.offsetX,e.offsetY)),t.pnts=[],t.point=null})),h.$on("pDn",(function(e){t.pnts=[]})),h.$on("pUp",(function(e){t.$refs.can[0].getContext("2d").drawImage(t.$refs.can[1],0,0),t.clear(1),t.pnts=[],t.point=null})),h.$on("pMv",(function(e){e.pressure&&(t.pressure=e.pressure,t.point=new F(e.offsetX,e.offsetY))}))}}]),n}(f["c"]));Object(l["a"])([Object(f["b"])({default:function(){return null}})],pt.prototype,"color",void 0),Object(l["a"])([Object(f["d"])("point",{deep:!0})],pt.prototype,"pointChange",null),pt=Object(l["a"])([Object(f["a"])({})],pt);var ht=pt,dt=ht,vt=(n("0c42"),Object(m["a"])(dt,lt,ft,!1,null,"3a5d0ab0",null)),bt=vt.exports,yt=n("c345"),gt=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.debug=!1,t.colors="#FF0000",t.ctx="webgl",t}return Object(s["a"])(n,[{key:"mounted",value:function(){this.debug=h.debug}},{key:"colorUpdate",value:function(t){h.$emit("colorUpdate",t)}}]),n}(f["c"]);gt=Object(l["a"])([Object(f["a"])({components:{FSDebug:w,FSEvent:C,FSCursor:R,FSCanvasWebGL:ut,Sketch:yt["Sketch"],FS2DCanvas:bt}})],gt);var mt=gt,xt=mt,wt=(n("034f"),Object(m["a"])(xt,i,o,!1,null,null,null)),Ot=wt.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Ot)}}).$mount("#app")},d5f2:function(t,e,n){},e7c0:function(t,e,n){"use strict";var r=n("43c3"),i=n.n(r);i.a},f771:function(t,e,n){}});
//# sourceMappingURL=app.2825f320.js.map