"use strict";(self.webpackChunkour_daily_life=self.webpackChunkour_daily_life||[]).push([[266],{1266:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(3433),s=n(9439),o=n(2791),a=n(9434),i=n(8277),l=n(6849),c=n(8229),d=n(7689),u=n(4942),p=n(1413),h=n(6625),f=n(184);var m=function(e){var t=(0,i.C)("FeedData"),n=t.editDocument,r=(t.response,(0,a.I0)()),l=(0,a.v9)((function(e){return e.loginUserInfo})),c=(0,o.useState)(""),d=(0,s.Z)(c,2),m=d[0],v=d[1],x=(0,o.useState)({displayName:l.displayName,UID:l.UID,replyText:""}),y=(0,s.Z)(x,2),j=y[0],k=y[1],w=(j.displayName,j.replyText);return(0,o.useEffect)((function(){return document.body.style.overflow="hidden",v("transition-end"),console.log("props",e.post),console.log("\ub313\uae00 \ub204\uac00 \uc368??",l.displayName),function(){document.body.style.overflow=""}}),[]),window.onkeydown=function(e){"Escape"===e.key&&console.log("\uafb8")},window.onkeyup=function(e){"Escape"===e.key&&(console.log("\uc6b1"),r((0,h.G)(!1)))},(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"dimmed-layer ".concat(m)}),(0,f.jsx)("div",{className:"input-area transition-start ".concat(m),children:(0,f.jsx)("div",{className:"form-container",children:(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s=j,o=e.post.peopleWhoReply,a=e.post.replies;console.log("\uc2e0\uaddc \ub313\uae00 --\x3e ",s),o.push(s),a++,n({peopleWhoReply:o,replies:a},e.post.id).then((function(){r((0,h.G)(!1))}))},children:[(0,f.jsx)("div",{className:"form-group",children:(0,f.jsx)("input",{type:"text",name:"replyText",value:w,onChange:function(e){var t=e.target,n=t.value,r=t.name;k((0,p.Z)((0,p.Z)({},j),{},(0,u.Z)({},r,n)))},className:"form-control reply-text-input",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694!",required:!0})}),(0,f.jsx)("input",{type:"submit",className:"post-btn",value:"\ub313\uae00 \ub2ec\uae30"}),(0,f.jsx)("div",{className:"close-btn",children:(0,f.jsx)(g,{onClick:function(e){e.preventDefault(),r((0,h.G)(!1))}})})]})})})]})},g=function(e){return(0,f.jsxs)("svg",(0,p.Z)((0,p.Z)({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none"},e),{},{children:[(0,f.jsx)("title",{children:"close"}),(0,f.jsx)("path",{fill:"#FFFFFF",d:"M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"})]}))};var v=function(e){var t,n,u=(0,i.C)("FeedData"),p=u.editDocument,g=(u.response,(0,c.K)("FeedData")),v=g.documents,x=(g.error,(0,l.E)()),y=(x.isAuthReady,x.user),j=(0,o.useState)(""),k=(0,s.Z)(j,2),w=k[0],D=k[1],b=(0,d.UO)().uid,N=(0,o.useState)([]),Z=(0,s.Z)(N,2),P=Z[0],C=Z[1],F=(0,o.useState)(!1),L=(0,s.Z)(F,2),W=L[0],T=L[1],U=(0,d.s0)(),M=(0,a.I0)(),S=(0,a.v9)((function(e){return e.replyState.rmVisible})),B=(new Date).getFullYear(),E=function(e){U("/profile/".concat(e)),window.scrollTo({top:0,behavior:"smooth"}),window.location.reload()};return(0,o.useEffect)((function(){var e=setTimeout((function(){D("transition-end")}),100);return function(){clearTimeout(e),D(""),T(!1)}}),[]),(0,o.useEffect)((function(){C(null===v||void 0===v?void 0:v.filter((function(e,t){return e.id===b})))}),[v]),(0,o.useEffect)((function(){void 0!=P&&0!==P.length?T(!0):T(!1)}),[P]),W?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"all-feeds transition-start ".concat(w),children:[(0,f.jsx)("article",{className:"Post transition-start ".concat(w),children:(0,f.jsxs)("div",{className:"Post-area",children:[(0,f.jsxs)("div",{className:"Post-user-area",onClick:function(){return E(P[0].UID)},children:[(0,f.jsx)("div",{className:"Post-user-profileImage",children:(0,f.jsx)("img",{src:P[0].profileImage,alt:"\ud504\ub85c\ud544\uc0ac\uc9c4"})}),(0,f.jsx)("span",{className:"Post-user-id",children:P[0].displayName})]}),(0,f.jsx)("div",{className:"Post-img",children:(0,f.jsx)("div",{className:"Post-img-bg",children:(0,f.jsx)("img",{src:P[0].downloadURL,alt:"\uac8c\uc2dc\ubb3c\uc0ac\uc9c4"})})}),(0,f.jsxs)("div",{className:"Post-icon-btn-area",children:[(0,f.jsxs)("div",{className:"three-btn-area",children:[(0,f.jsx)("button",{className:"like-btn",onClick:function(e){var t=P[0].likes,n=P[0].peopleWhoLike.includes(y.uid),s=(0,r.Z)(P[0].peopleWhoLike);s.includes(y.uid)?s=s.filter((function(e){return e!=y.uid})):s.push(y.uid),n?console.log("\uc88b\uc544\uc694 \ucde8\uc18c"):console.log("\uc88b\uc544\uc694"),console.log("\uc88b\uc544\ud558\ub294 \uc0ac\ub78c\ub4e4",s),n?(t--,p({peopleWhoLike:s,likes:t},P[0].id)):(t++,p({peopleWhoLike:s,likes:t},P[0].id))},children:(n=P[0].peopleWhoLike.includes(y.uid),n?(0,f.jsx)("svg",{"aria-label":"\uc88b\uc544\uc694 \ucde8\uc18c",color:"#ed4956",fill:"#ed4956",height:"24",role:"img",viewBox:"0 0 48 48",width:"24",children:(0,f.jsx)("path",{d:"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 \r 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 \r 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 \r 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 \r 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,f.jsx)("svg",{"aria-label":"\uc88b\uc544\uc694",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,f.jsx)("path",{d:"M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197\r 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141\r 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675\r 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04\r 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61\r 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018\r 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774\r 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"})}))}),(0,f.jsx)("button",{className:"reply-btn",onClick:function(e){M((0,h.G)(!0))},children:(0,f.jsx)("svg",{"aria-label":"\ub313\uae00\uc4f0\uae30",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,f.jsx)("path",{d:"M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})})}),(0,f.jsx)("button",{className:"share-btn",onClick:function(e){alert("\ubcf4\ub0b4\uae30 \uad6c\ud604\uc911.. ^.^")},children:(0,f.jsxs)("svg",{"aria-label":"\ubcf4\ub0b4\uae30",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[(0,f.jsx)("line",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",x1:"22",x2:"9.218",y1:"3",y2:"10.083"}),(0,f.jsx)("polygon",{fill:"none",points:"11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})]})})]}),(0,f.jsx)("div",{className:"one-btn-area",children:(0,f.jsx)("button",{className:"save-btn",onClick:function(e){var t=P[0].peopleWhoSave.includes(y.uid),n=(0,r.Z)(P[0].peopleWhoSave);n.includes(y.uid)?n=n.filter((function(e){return e!=y.uid})):n.push(y.uid),t?alert("\uac8c\uc2dc\ubb3c\uc744 \ubcf4\uad00\ud568\uc5d0\uc11c \uc0ad\uc81c\ud560\uac8c\uc694!"):alert("\uac8c\uc2dc\ubb3c\uc744 \ubcf4\uad00\ud568\uc5d0 \ucd94\uac00\ud560\uac8c\uc694!"),console.log("\uc800\uc7a5\ud55c \uc0ac\ub78c\ub4e4",n),p({peopleWhoSave:n},P[0].id)},children:(t=P[0].peopleWhoSave.includes(y.uid),t?(0,f.jsx)("svg",{"aria-label":"\uc800\uc7a5 \ucde8\uc18c",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,f.jsx)("polygon",{points:"20 21 12 13.44 4 21 4 3 20 3 20 21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}):(0,f.jsx)("svg",{"aria-label":"\uc800\uc7a5",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,f.jsx)("polygon",{fill:"none",points:"20 21 12 13.44 4 21 4 3 20 3 20 21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}))})})]}),(0,f.jsx)("div",{className:"Post-like-area",children:(0,f.jsx)("p",{className:"Post-like-count",children:(0,f.jsx)("b",{children:P[0].likes})})}),(0,f.jsx)("div",{className:"Post-text-area",children:(0,f.jsxs)("div",{className:"Post-text",children:[(0,f.jsx)("div",{className:"Post-writer-name",onClick:function(){E(P[0].UID)},children:(0,f.jsx)("b",{children:P[0].displayName})}),(0,f.jsx)("div",{className:"Post-text-postText",children:P[0].postText})]})}),P[0].replies>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"Post-reply-border"}),(0,f.jsx)("div",{className:"Post-reply-area",children:P[0].peopleWhoReply.map((function(e,t){return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"Post-reply",children:[(0,f.jsx)("span",{className:"Post-reply-nickname",onClick:function(){E(e.UID)},children:(0,f.jsx)("b",{children:e.displayName})}),(0,f.jsx)("span",{className:"Post-reply-text",children:e.replyText})]},t)})}))})]}):null,(0,f.jsx)("div",{className:"post-date",children:B===1*P[0].createdDate.substring(0,4)?P[0].createdDate.substring(5,7)+"\uc6d4 "+P[0].createdDate.substring(8,10)+"\uc77c "+P[0].createdDate.substring(11):P[0].createdDate.substring(0,4)+"\ub144 "+P[0].createdDate.substring(5,7)+"\uc6d4 "+P[0].createdDate.substring(8,10)+"\uc77c "+P[0].createdDate.substring(11)})]})}),(0,f.jsx)("div",{className:"detail-btn-area",children:(0,f.jsx)("button",{className:"go-main-btn",onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),window.history.back()},children:"\ub3cc\uc544\uac00\uae30"})})]}),S?(0,f.jsx)(m,{post:P[0]}):null]}):null}},8277:function(e,t,n){n.d(t,{C:function(){return m}});var r=n(4165),s=n(1413),o=n(5861),a=n(9439),i=n(2791),l=n(77),c=n(7799),d=n(276);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=new Date,o=s.getFullYear(),a=s.getMonth(),i=s.getDate(),l=s.getHours(),c=s.getMinutes(),d=s.getMilliseconds();return 0!==t&&s.setMonth(s.getMonth()+t),0!==n&&s.setDate(s.getDate()+n),0!==o&&s.setFullYear(s.getFullYear()+r),a=("0"+(1+s.getMonth())).slice(-2),i=("0"+s.getDate()).slice(-2),(o=s.getFullYear())+e+a+e+i+l+c+d}function p(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2?arguments[2]:void 0,r=n.getFullYear(),s=n.getMonth()+1,o=n.getDate(),a=n.getHours(),i=n.getMinutes();1===(""+s).length&&(s="0"+s);1===(""+o).length&&(o="0"+o);1===(""+a).length&&(a="0"+a);1===(""+i).length&&(i="0"+i);return""+r+e+s+e+o+" "+a+t+i}(e,t,new Date)}var h={document:null,isPending:!1,error:null,success:!1},f=function(e,t){switch(t.type){case"isPending":return{isPending:!0,document:null,success:!1,error:null};case"addDoc":case"editDoc":case"deleteDoc":return{isPending:!1,document:t.payload,success:!0,error:null};case"error":return{isPending:!1,document:null,success:!1,error:t.payload};default:return e}},m=function(e){var t=(0,i.useReducer)(f,h),n=(0,a.Z)(t,2),m=n[0],g=n[1],v=(0,i.useState)([]),x=(0,a.Z)(v,2),y=(x[0],x[1],(0,c.hJ)(l.d_,e)),j=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,a,i,h,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=l.AB.fromDate(new Date),a=p("/",":"),i=u(),h=(0,d.iH)(l.tO,"images/"+n.name),f=(0,d.B0)(h,n),g({type:"isPending"});try{f.on("state_changed",(function(e){}),(function(e){console.error("\uc2e4\ud328\uc0ac\uc720\ub294",e)}),(function(){(0,d.Jt)(f.snapshot.ref).then((function(e){console.log("\uc5c5\ub85c\ub4dc\ub41c \uacbd\ub85c\ub294",e);var n=(0,c.ET)(y,(0,s.Z)((0,s.Z)({},t),{},{createdTime:o,createdDate:a,createdUqe:i,downloadURL:e}));console.log(n),g({type:"addDoc",payload:n}),console.log("\uc800\uc7a5\uc644\ub8cc")}))}))}catch(r){g({type:"error",payload:r.message})}case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.AB.fromDate(new Date),o=p("/",":"),a=u(),g({type:"isPending"});try{i=(0,c.ET)(y,(0,s.Z)((0,s.Z)({},t),{},{createdTime:n,createdDate:o,createdUqe:a})),console.log(i),g({type:"addDoc",payload:i}),console.log("\uc800\uc7a5\uc644\ub8cc")}catch(r){g({type:"error",payload:r.message})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({type:"isPending"}),e.prev=1,e.next=4,(0,c.r7)((0,c.JU)(y,n),(0,s.Z)({},t));case 4:o=e.sent,g({type:"editDoc",payload:o}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g({type:"error",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({type:"isPending"}),e.prev=1,e.next=4,(0,c.oe)((0,c.JU)(y,t));case 4:n=e.sent,g({type:"deleteDoc",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g({type:"error",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.AB.fromDate(new Date),o=p("/",":"),a=u(),g({type:"isPending"});try{i=(0,c.ET)(y,(0,s.Z)((0,s.Z)({},t),{},{createdTime:n,createdDate:o,createdUqe:a})),console.log(i),g({type:"addDoc",payload:i}),console.log("\uc800\uc7a5\uc644\ub8cc")}catch(r){g({type:"error",payload:r.message})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{addDocument:j,addComment:k,editDocument:w,deleteDocument:D,addUser:b,response:m}}}}]);
//# sourceMappingURL=266.3f317048.chunk.js.map