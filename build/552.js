"use strict";(self.webpackChunkhost=self.webpackChunkhost||[]).push([[171,552],{552:(e,t,a)=>{a.r(t),a.d(t,{CheckmarkIcon:()=>U,ErrorIcon:()=>F,LoaderIcon:()=>L,ToastBar:()=>W,ToastIcon:()=>Z,Toaster:()=>te,default:()=>ae,resolveValue:()=>v,toast:()=>I,useToaster:()=>A,useToasterStore:()=>O});var r=a(4914);let o={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let a="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+s+";":r+="f"==i[1]?d(s,i):i+"{"+d(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=d(s,t?t.replace(/([^,])+/g,(e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=d.p?d.p(i,s):i+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},c={},p=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+p(e[a]);return t}return e},u=(e,t,a,r,o)=>{let i=p(e),u=c[i]||(c[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!c[u]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=s.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);c[u]=d(o?{["@keyframes "+u]:t}:t,a?"":"."+u)}let m=a&&c.g?c.g:null;return a&&(c.g=c[u]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(c[u],t,r,m),u};function m(e){let t=this||{},a=e.call?e(t.p):e;return u(a.unshift?a.raw?((e,t,a)=>e.reduce(((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),""))(a,[].slice.call(arguments,1),t.p):a.reduce(((e,a)=>Object.assign(e,a&&a.call?a(t.p):a)),{}):a,i(t.target),t.g,t.o,t.k)}m.bind({g:1});let f,y,g,h=m.bind({k:1});function b(e,t){let a=this||{};return function(){let r=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=m.apply(a,r)+(l?" "+l:""),t&&(n.ref=s);let d=e;return e[0]&&(d=n.as||e,delete n.as),g&&d[0]&&g(n),f(d,n)}return t?t(o):o}}var v=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,x=(()=>{let e=0;return()=>(++e).toString()})(),w=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),E=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:a}=t;return E(e,{type:e.toasts.find((e=>e.id===a.id))?1:0,toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},k=[],$={toasts:[],pausedAt:void 0},C=e=>{$=E($,e),k.forEach((e=>{e($)}))},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={})=>{let[t,a]=(0,r.useState)($);(0,r.useEffect)((()=>(k.push(a),()=>{let e=k.indexOf(a);e>-1&&k.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var a,r,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}}));return{...t,toasts:o}},j=e=>(t,a)=>{let r=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||x()}))(t,e,a);return C({type:2,toast:r}),r.id},I=(e,t)=>j("blank")(e,t);I.error=j("error"),I.success=j("success"),I.loading=j("loading"),I.custom=j("custom"),I.dismiss=e=>{C({type:3,toastId:e})},I.remove=e=>C({type:4,toastId:e}),I.promise=(e,t,a)=>{let r=I.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then((e=>{let o=t.success?v(t.success,e):void 0;return o?I.success(o,{id:r,...a,...null==a?void 0:a.success}):I.dismiss(r),e})).catch((e=>{let o=t.error?v(t.error,e):void 0;o?I.error(o,{id:r,...a,...null==a?void 0:a.error}):I.dismiss(r)})),e};var N=(e,t)=>{C({type:1,toast:{id:e,height:t}})},T=()=>{C({type:5,time:Date.now()})},z=new Map,A=e=>{let{toasts:t,pausedAt:a}=O(e);(0,r.useEffect)((()=>{if(a)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(a<0))return setTimeout((()=>I.dismiss(t.id)),a);t.visible&&I.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,a]);let o=(0,r.useCallback)((()=>{a&&C({type:6,time:Date.now()})}),[a]),i=(0,r.useCallback)(((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},s=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),n=s.findIndex((t=>t.id===e.id)),l=s.filter(((e,t)=>t<n&&e.visible)).length;return s.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+o),0)}),[t]);return(0,r.useEffect)((()=>{t.forEach((e=>{if(e.dismissed)((e,t=1e3)=>{if(z.has(e))return;let a=setTimeout((()=>{z.delete(e),C({type:4,toastId:e})}),t);z.set(e,a)})(e.id,e.removeDelay);else{let t=z.get(e.id);t&&(clearTimeout(t),z.delete(e.id))}}))}),[t]),{toasts:t,handlers:{updateHeight:N,startPause:T,endPause:o,calculateOffset:i}}},P=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,S=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${S} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,_=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=b("div")`
  position: absolute;
`,R=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return void 0!==t?"string"==typeof t?r.createElement(Y,null,t):t:"blank"===a?null:r.createElement(R,null,r.createElement(L,{...o}),"loading"!==a&&r.createElement(q,null,"error"===a?r.createElement(F,{...o}):r.createElement(U,{...o})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,J=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,K=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=r.memo((({toast:e,position:t,style:a,children:o})=>{let i=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,o]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),J(a)];return{animation:t?`${h(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=r.createElement(Z,{toast:e}),n=r.createElement(Q,{...e.ariaProps},v(e.message,e));return r.createElement(K,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof o?o({icon:s,message:n}):r.createElement(r.Fragment,null,s,n))}));!function(e){d.p=void 0,f=e,y=void 0,g=void 0}(r.createElement);var X=({id:e,className:t,style:a,onHeightUpdate:o,children:i})=>{let s=r.useCallback((t=>{if(t){let a=()=>{let a=t.getBoundingClientRect().height;o(e,a)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,o]);return r.createElement("div",{ref:s,className:t,style:a},i)},ee=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,te=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=A(a);return r.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map((a=>{let s=a.position||t,n=((e,t)=>{let a=e.includes("top"),r=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...r,...o}})(s,d.calculateOffset(a,{reverseOrder:e,gutter:o,defaultPosition:t}));return r.createElement(X,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?ee:"",style:n},"custom"===a.type?v(a.message,a):i?i(a):r.createElement(W,{toast:a,position:s}))})))},ae=I}}]);