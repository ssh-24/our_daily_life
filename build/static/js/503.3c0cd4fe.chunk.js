"use strict";(self.webpackChunkour_daily_life=self.webpackChunkour_daily_life||[]).push([[503],{7503:function(e,n,l){l.r(n),l.d(n,{default:function(){return g}});var s=l(1413),t=l(2791),i=l(4427),r=l(6849),o=l(9439),c=l(9460),a=l(77),h=l(9434),x=l(2969),u=l(3433),d=l(7799),v=l(184);var g=function(e){var n=function(){var e=(0,t.useState)(null),n=(0,o.Z)(e,2),l=n[0],s=n[1],i=(0,t.useState)(!1),h=(0,o.Z)(i,2),x=h[0],u=h[1],d=(0,r.E)().dispatch;return{error:l,isPending:x,logout:function(){s(null),u(!0),(0,c.w7)(a.s7).then((function(){d({type:"logout"}),s(null),u(!1)})).catch((function(e){s(e.message),u(!1)}))}}}().logout,l=(0,r.E)().user,g=function(e,n){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=(0,t.useState)(null),r=(0,o.Z)(i,2),c=r[0],h=r[1],x=(0,t.useState)(null),v=(0,o.Z)(x,2),g=v[0],j=v[1];return(0,t.useEffect)((function(){var t;t=l.length>0?(0,d.IO)((0,d.hJ)(a.d_,e),d.ar.apply(void 0,(0,u.Z)(n)),(0,d.Xo)("createdTime","desc")):(0,d.IO)((0,d.hJ)(a.d_,e),d.ar.apply(void 0,(0,u.Z)(n))),console.log(t);var i=(0,d.cf)(n?t:(0,d.hJ)(a.d_,e),(function(e){var n=[];e.docs.forEach((function(e){n.push((0,s.Z)((0,s.Z)({},e.data()),{},{id:e.id}))})),console.log(n),h(n),j(null)}),(function(e){j(e.message)}));return i}),[d.hJ]),{documents:c,error:g}}("FeedData",["UID","==",l.uid]),m=g.documents,V=(g.error,(0,h.I0)());(0,t.useEffect)((function(){console.log("documents :",m),console.log("user :",l),console.log("\uc774\uba54\uc77c :",l.email),console.log("\ub2c9\ub124\uc784 :",l.displayName)}),[]);var C=function(){window.scrollTo({top:0,behavior:"smooth"})};return(0,v.jsx)("nav",{className:"nav-area",children:(0,v.jsxs)("div",{className:"navigation",children:[(0,v.jsx)("div",{className:"refresh",children:(0,v.jsx)("a",{href:"/renew",tabIndex:"0",onClick:function(e){e.preventDefault(),C()},children:(0,v.jsx)("div",{className:"logo_div",children:(0,v.jsx)("img",{alt:"Our Daily Life",className:"logo_img",src:i})})})}),(0,v.jsxs)("div",{className:"user-search",children:[(0,v.jsx)(j,{className:"search-btn"}),(0,v.jsx)("input",{"aria-label":"\uac80\uc0c9",autoCapitalize:"none",className:"search_input",placeholder:"\uac80\uc0c9",type:"text",onChange:function(e){var n;n=e.target.value,console.log(n)}})]}),(0,v.jsxs)("div",{className:"btn-list",children:[(0,v.jsx)("div",{className:"btn-item",children:(0,v.jsx)(w,{onClick:function(e){e.preventDefault(),C()}})}),(0,v.jsx)("div",{className:"btn-item",children:(0,v.jsx)(p,{onClick:function(e){e.preventDefault(),V((0,x.yx)(!0))}})}),(0,v.jsx)("div",{className:"btn-item",children:(0,v.jsx)(A,{onClick:function(e){e.preventDefault(),console.log("\uc870\uc544\uc694 \ub9ac\uc2a4\ud2b8======="),console.log(m)}})}),(0,v.jsx)("div",{className:"btn-item",children:(0,v.jsx)(Z,{onClick:function(e){e.preventDefault(),console.log("\ub0b4\uac00\uc4f4\uae00?",m)}})}),(0,v.jsx)("div",{className:"btn-item",children:(0,v.jsx)(f,{onClick:n})})]})]})})},j=function(e){return(0,v.jsx)("svg",(0,s.Z)((0,s.Z)({fill:"#000000",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:(0,v.jsx)("path",{d:"M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"})}))},w=function(e){return(0,v.jsxs)("svg",(0,s.Z)((0,s.Z)({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,v.jsx)("title",{children:"home"}),(0,v.jsx)("path",{d:"M7.5 0.5L7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L7.5 0.5ZM0.5 6.5L0.174604 6.12037L0 6.27003V6.5H0.5ZM5.5 14.5V15C5.77614 15 6 14.7761 6 14.5H5.5ZM9.5 14.5H9C9 14.7761 9.22386 15 9.5 15V14.5ZM14.5 6.5H15V6.27003L14.8254 6.12037L14.5 6.5ZM1.5 15H5.5V14H1.5V15ZM14.8254 6.12037L7.8254 0.120372L7.1746 0.879628L14.1746 6.87963L14.8254 6.12037ZM7.1746 0.120372L0.174604 6.12037L0.825396 6.87963L7.8254 0.879628L7.1746 0.120372ZM6 14.5V11.5H5V14.5H6ZM9 11.5V14.5H10V11.5H9ZM9.5 15H13.5V14H9.5V15ZM15 13.5V6.5H14V13.5H15ZM0 6.5V13.5H1V6.5H0ZM7.5 10C8.32843 10 9 10.6716 9 11.5H10C10 10.1193 8.88071 9 7.5 9V10ZM7.5 9C6.11929 9 5 10.1193 5 11.5H6C6 10.6716 6.67157 10 7.5 10V9ZM13.5 15C14.3284 15 15 14.3284 15 13.5H14C14 13.7761 13.7761 14 13.5 14V15ZM1.5 14C1.22386 14 1 13.7761 1 13.5H0C0 14.3284 0.671573 15 1.5 15V14Z",fill:"#000000"})]}))},p=function(e){return(0,v.jsxs)("svg",(0,s.Z)((0,s.Z)({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 489.8 489.8",style:{enableBackground:"new 0 0 489.8 489.8"},xmlSpace:"preserve"},e),{},{children:[(0,v.jsx)("title",{children:"new post"}),(0,v.jsx)("g",{children:(0,v.jsxs)("g",{children:[(0,v.jsx)("path",{d:"M438.2,0H51.6C23.1,0,0,23.2,0,51.6v386.6c0,28.5,23.2,51.6,51.6,51.6h386.6c28.5,0,51.6-23.2,51.6-51.6V51.6 C489.8,23.2,466.6,0,438.2,0z M465.3,438.2c0,14.9-12.2,27.1-27.1,27.1H51.6c-14.9,0-27.1-12.2-27.1-27.1V51.6 c0-14.9,12.2-27.1,27.1-27.1h386.6c14.9,0,27.1,12.2,27.1,27.1V438.2z"}),(0,v.jsx)("path",{d:"M337.4,232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v80.3h-80.3c-6.8,0-12.3,5.5-12.3,12.2 c0,6.8,5.5,12.3,12.3,12.3h80.3v80.3c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-80.3h80.3c6.8,0,12.3-5.5,12.3-12.3 C349.7,238.1,344.2,232.7,337.4,232.7z"})]})})]}))},A=function(e){return(0,v.jsxs)("svg",(0,s.Z)((0,s.Z)({fill:"#000000",viewBox:"0 0 36 36",preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),{},{children:[(0,v.jsx)("title",{children:"log"}),(0,v.jsx)("path",{d:"M18,32.43a1,1,0,0,1-.61-.21C11.83,27.9,8,24.18,5.32,20.51,1.9,15.82,1.12,11.49,3,7.64c1.34-2.75,5.19-5,9.69-3.69A9.87,9.87,0,0,1,18,7.72a9.87,9.87,0,0,1,5.31-3.77c4.49-1.29,8.35.94,9.69,3.69,1.88,3.85,1.1,8.18-2.32,12.87C28,24.18,24.17,27.9,18.61,32.22A1,1,0,0,1,18,32.43ZM10.13,5.58A5.9,5.9,0,0,0,4.8,8.51c-1.55,3.18-.85,6.72,2.14,10.81A57.13,57.13,0,0,0,18,30.16,57.13,57.13,0,0,0,29.06,19.33c3-4.1,3.69-7.64,2.14-10.81-1-2-4-3.59-7.34-2.65a8,8,0,0,0-4.94,4.2,1,1,0,0,1-1.85,0,7.93,7.93,0,0,0-4.94-4.2A7.31,7.31,0,0,0,10.13,5.58Z",className:"clr-i-outline clr-i-outline-path-1"}),(0,v.jsx)("rect",{x:0,y:0,width:36,height:36,fillOpacity:0})]}))},Z=function(e){return(0,v.jsxs)("svg",(0,s.Z)((0,s.Z)({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,v.jsx)("circle",{cx:12,cy:7,r:4,stroke:"#000000",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("title",{children:"profile"}),(0,v.jsx)("path",{d:"M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21",stroke:"#000000",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"})]}))},f=function(e){return(0,v.jsxs)("svg",(0,s.Z)((0,s.Z)({fill:"#000000",viewBox:"0 0 36 36",preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),{},{children:[(0,v.jsx)("title",{children:"logout"}),(0,v.jsx)("path",{d:"M7,6H23v9.8h2V6a2,2,0,0,0-2-2H7A2,2,0,0,0,5,6V30a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2H7Z",className:"clr-i-outline clr-i-outline-path-1"}),(0,v.jsx)("path",{d:"M28.16,17.28a1,1,0,0,0-1.41,1.41L30.13,22H15.63a1,1,0,0,0-1,1,1,1,0,0,0,1,1h14.5l-3.38,3.46a1,1,0,1,0,1.41,1.41L34,23.07Z",className:"clr-i-outline clr-i-outline-path-2"}),(0,v.jsx)("rect",{x:0,y:0,width:36,height:36,fillOpacity:0})]}))}},4427:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=503.3c0cd4fe.chunk.js.map