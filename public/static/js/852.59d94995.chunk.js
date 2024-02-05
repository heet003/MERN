"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[852],{852:(e,c,n)=>{n.r(c),n.d(c,{default:()=>x});var r=n(60),s=n(763),t=n(480),a=n(572),o=n(228),i=n(712),l=n(392),d=n(908),h=n(256),u=n(496);const m=function(e){const{isLoading:c,error:n,sendRequest:s,clearError:m}=(0,h.a)(),j=(0,r.useContext)(d.w),[x,f]=(0,r.useState)(!1),[p,C]=(0,r.useState)(!1);function g(){f(!1)}function E(){C(!1)}return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(i.c,{error:n,onClear:m}),(0,u.jsx)(o.c,{show:x,onCancel:g,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,u.jsx)(a.c,{onClick:g,children:"CLOSE"}),children:(0,u.jsx)("p",{children:"The Map!"})}),(0,u.jsx)(o.c,{show:p,onCancel:E,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(a.c,{inverse:!0,onClick:E,children:"CANCEL"}),(0,u.jsx)(a.c,{danger:!0,onClick:async function(){try{await s("".concat("https://mern-7uth.onrender.com","/api/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+j.token}),e.onDelete(e.id)}catch(c){console.log(c)}C(!1)},children:"DELETE"})]}),children:(0,u.jsx)("p",{children:"Do you want to proceed and delete this place?"})}),(0,u.jsx)("li",{className:"place-item",children:(0,u.jsxs)(t.c,{className:"place-item__content",children:[c&&(0,u.jsx)(l.c,{asOverlay:!0}),(0,u.jsx)("div",{className:"place-item__image",children:(0,u.jsx)("img",{src:"".concat("https://mern-7uth.onrender.com","/").concat(e.image),alt:e.title})}),(0,u.jsxs)("div",{className:"place-item__info",children:[(0,u.jsx)("h2",{children:e.title}),(0,u.jsx)("h3",{children:e.address}),(0,u.jsx)("p",{children:e.description})]}),(0,u.jsxs)("div",{className:"place-item__actions",children:[(0,u.jsx)(a.c,{inverse:!0,onClick:function(){f(!0)},children:"VIEW ON MAP"}),j.userId===e.creatorId&&(0,u.jsx)(a.c,{to:"/places/".concat(e.id),children:"EDIT"}),j.userId===e.creatorId&&(0,u.jsx)(a.c,{danger:!0,onClick:function(){C(!0)},children:"DELETE"})]})]})})]})};const j=function(e){return 0===e.items.length?(0,u.jsx)("div",{className:"place-list center",children:(0,u.jsxs)(t.c,{children:[(0,u.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,u.jsx)(a.c,{to:"/places/new",children:"Share Place"})]})}):(0,u.jsx)("ul",{className:"place-list",children:e.items.map((c=>(0,u.jsx)(m,{id:c.id,image:c.image,title:c.title,description:c.description,address:c.address,creatorId:c.creator,coordinates:c.location,onDelete:e.onDeletePlace},c.id)))})};const x=function(){const[e,c]=(0,r.useState)(),{isLoading:n,error:t,sendRequest:a,clearError:o}=(0,h.a)(),d=(0,s.W4)().userId;return(0,r.useEffect)((()=>{!async function(){try{const e=await a("".concat("https://mern-7uth.onrender.com","/api/places/user/").concat(d));c(e.places)}catch(e){}}()}),[a,d]),(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(i.c,{show:t,error:t,onClear:o}),n&&(0,u.jsx)("div",{className:"center",children:(0,u.jsx)(l.c,{})}),!n&&e&&(0,u.jsx)(j,{items:e,onDeletePlace:function(e){c((c=>c.filter((c=>c.id!==e))))}})]})}},480:(e,c,n)=>{n.d(c,{c:()=>s});n(60);var r=n(496);const s=e=>(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},712:(e,c,n)=>{n.d(c,{c:()=>a});n(60);var r=n(228),s=n(572),t=n(496);const a=function(e){return(0,t.jsx)(r.c,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,t.jsx)(s.c,{onClick:e.onClear,children:"Okay"}),children:(0,t.jsx)("p",{children:e.error})})}},256:(e,c,n)=>{n.d(c,{a:()=>s});var r=n(60);function s(){const[e,c]=(0,r.useState)(!1),[n,s]=(0,r.useState)(),t=(0,r.useRef)([]),a=(0,r.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};c(!0);const o=new AbortController;t.current.push(o);try{const s=await fetch(e,{method:n,body:r,headers:a,signal:o.signal}),i=await s.json();if(t.current=t.current.filter((e=>e!==o)),!s.ok)throw new Error(i.message);return c(!1),i}catch(i){throw s(i.message),c(!1),i}}),[]);return(0,r.useEffect)((()=>()=>{t.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:n,sendRequest:a,clearError:function(){s(null)}}}}}]);
//# sourceMappingURL=852.59d94995.chunk.js.map