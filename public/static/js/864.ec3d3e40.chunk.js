"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[864],{480:(e,s,r)=>{r.d(s,{c:()=>t});r(60);var n=r(496);const t=e=>(0,n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},712:(e,s,r)=>{r.d(s,{c:()=>a});r(60);var n=r(228),t=r(572),c=r(496);const a=function(e){return(0,c.jsx)(n.c,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,c.jsx)(t.c,{onClick:e.onClear,children:"Okay"}),children:(0,c.jsx)("p",{children:e.error})})}},256:(e,s,r)=>{r.d(s,{a:()=>t});var n=r(60);function t(){const[e,s]=(0,n.useState)(!1),[r,t]=(0,n.useState)(),c=(0,n.useRef)([]),a=(0,n.useCallback)((async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};s(!0);const l=new AbortController;c.current.push(l);try{const t=await fetch(e,{method:r,body:n,headers:a,signal:l.signal}),o=await t.json();if(c.current=c.current.filter((e=>e!==l)),!t.ok)throw new Error(o.message);return s(!1),o}catch(o){throw t(o.message),s(!1),o}}),[]);return(0,n.useEffect)((()=>()=>{c.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:r,sendRequest:a,clearError:function(){t(null)}}}},864:(e,s,r)=>{r.r(s),r.d(s,{default:()=>m});var n=r(60),t=r(880),c=r(496);const a=function(e){return(0,c.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:(0,c.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})};var l=r(480);const o=function(e){return(0,c.jsx)("li",{className:"user-item",children:(0,c.jsx)(l.c,{className:"user-item__content",children:(0,c.jsxs)(t.cH,{to:"/".concat(e.id,"/places"),children:[(0,c.jsx)("div",{className:"user-item__image",children:(0,c.jsx)(a,{image:"".concat("https://mern-7uth.onrender.com","/").concat(e.image),alt:e.name})}),(0,c.jsxs)("div",{className:"user-item__info",children:[(0,c.jsx)("h2",{children:e.name}),(0,c.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})};const i=function(e){return 0===e.items.length?(0,c.jsx)("div",{className:"center",children:(0,c.jsx)(l.c,{children:(0,c.jsx)("h2",{children:"Could Not Find Users!"})})}):(0,c.jsx)("ul",{className:"users-list",children:e.items.map((e=>(0,c.jsx)(o,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)))})};var d=r(712),u=r(392),h=r(256);const m=function(){const{isLoading:e,error:s,sendRequest:r,clearError:t}=(0,h.a)(),[a,l]=(0,n.useState)();return(0,n.useEffect)((()=>{(async()=>{try{const e=await r("".concat("https://mern-7uth.onrender.com","/api/users"));l(e.users)}catch(s){console.log(s)}})()}),[r]),(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(d.c,{show:s,error:s,onClear:t}),e&&(0,c.jsx)(u.c,{asOverlay:!0}),!e&&a&&(0,c.jsx)(i,{items:a})]})}}}]);
//# sourceMappingURL=864.ec3d3e40.chunk.js.map