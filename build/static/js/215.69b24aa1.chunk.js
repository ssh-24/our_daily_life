"use strict";(self.webpackChunkour_daily_life=self.webpackChunkour_daily_life||[]).push([[215],{215:function(e,t,n){n.r(t);var r=n(3433),s=n(9439),a=n(2791),o=n(8277),i=n(6849),l=n(8229),c=n(7689),d=n(184);t.default=function(e){var t,n=(0,o.C)("FeedData"),u=n.editDocument,h=(n.response,(0,l.K)("FeedData")),p=h.documents,g=(h.error,(0,i.E)()),m=(g.isAuthReady,g.user),f=(0,a.useState)(""),x=(0,s.Z)(f,2),v=x[0],y=x[1],j=(0,c.UO)().uid,k=(0,a.useState)([]),w=(0,s.Z)(k,2),N=w[0],b=w[1],D=(0,a.useState)(!1),P=(0,s.Z)(D,2),Z=P[0],C=P[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){y("transition-end")}),100);return function(){clearTimeout(e),y(""),C(!1)}}),[]),(0,a.useEffect)((function(){b(null===p||void 0===p?void 0:p.filter((function(e,t){return e.id===j})))}),[p]),(0,a.useEffect)((function(){void 0!=N&&0!==N.length?C(!0):C(!1)}),[N]),Z?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"all-feeds transition-start ".concat(v),children:[(0,d.jsx)("article",{className:"Post transition-start ".concat(v),children:(0,d.jsxs)("div",{className:"Post-area",children:[(0,d.jsxs)("div",{className:"Post-user-area",children:[(0,d.jsx)("div",{className:"Post-user-profileImage",children:(0,d.jsx)("img",{src:N[0].profileImage,alt:"\ud504\ub85c\ud544\uc0ac\uc9c4"})}),(0,d.jsx)("span",{className:"Post-user-id",children:N[0].displayName})]}),(0,d.jsx)("div",{className:"Post-img",children:(0,d.jsx)("div",{className:"Post-img-bg",children:(0,d.jsx)("img",{src:N[0].downloadURL,alt:"\uac8c\uc2dc\ubb3c\uc0ac\uc9c4"})})}),(0,d.jsxs)("div",{className:"Post-icon-btn-area",children:[(0,d.jsxs)("div",{className:"three-btn-area",children:[(0,d.jsx)("button",{className:"like-btn",onClick:function(e){var t=N[0].likes,n=N[0].peopleWhoLike.includes(m.uid),s=(0,r.Z)(N[0].peopleWhoLike);s.includes(m.uid)?s=s.filter((function(e){return e!=m.uid})):s.push(m.uid),n?console.log("\uc88b\uc544\uc694 \ucde8\uc18c"):console.log("\uc88b\uc544\uc694"),console.log("\uc88b\uc544\ud558\ub294 \uc0ac\ub78c\ub4e4",s),n?(t--,u({peopleWhoLike:s,likes:t},N[0].id)):(t++,u({peopleWhoLike:s,likes:t},N[0].id))},children:(t=N[0].peopleWhoLike.includes(m.uid),t?(0,d.jsx)("svg",{"aria-label":"\uc88b\uc544\uc694 \ucde8\uc18c",color:"#ed4956",fill:"#ed4956",height:"24",role:"img",viewBox:"0 0 48 48",width:"24",children:(0,d.jsx)("path",{d:"M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 \r 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 \r 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 \r 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 \r 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,d.jsx)("svg",{"aria-label":"\uc88b\uc544\uc694",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,d.jsx)("path",{d:"M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197\r 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141\r 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675\r 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04\r 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61\r 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018\r 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774\r 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"})}))}),(0,d.jsx)("button",{className:"reply-btn",onClick:function(e){alert("\ub313\uae00\uc4f0\uae30 \uad6c\ud604\uc911.. ^.^")},children:(0,d.jsx)("svg",{"aria-label":"\ub313\uae00\uc4f0\uae30",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,d.jsx)("path",{d:"M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})})}),(0,d.jsx)("button",{className:"share-btn",onClick:function(e){alert("\ubcf4\ub0b4\uae30 \uad6c\ud604\uc911.. ^.^")},children:(0,d.jsxs)("svg",{"aria-label":"\ubcf4\ub0b4\uae30",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:[(0,d.jsx)("line",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",x1:"22",x2:"9.218",y1:"3",y2:"10.083"}),(0,d.jsx)("polygon",{fill:"none",points:"11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})]})})]}),(0,d.jsx)("div",{className:"one-btn-area",children:(0,d.jsx)("button",{className:"save-btn",onClick:function(e){alert("\uc800\uc7a5")},children:(0,d.jsx)("svg",{"aria-label":"\uc800\uc7a5",color:"#262626",fill:"#262626",height:"24",role:"img",viewBox:"0 0 24 24",width:"24",children:(0,d.jsx)("polygon",{fill:"none",points:"20 21 12 13.44 4 21 4 3 20 3 20 21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})})})]}),(0,d.jsx)("div",{className:"Post-like-area",children:(0,d.jsx)("p",{className:"Post-like-count",children:(0,d.jsx)("b",{children:N[0].likes})})}),(0,d.jsx)("div",{className:"Post-text-area",children:(0,d.jsxs)("div",{className:"Post-text",children:[(0,d.jsx)("div",{className:"Post-writer-name",children:(0,d.jsx)("b",{children:N[0].displayName})}),(0,d.jsx)("div",{className:"Post-text-postText",children:N[0].postText})]})}),N[0].replies>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"Post-reply-border"}),(0,d.jsx)("div",{className:"Post-reply-area",children:N[0].peopleWhoReply.map((function(e,t){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"Post-reply",children:[(0,d.jsx)("span",{className:"Post-reply-nickname",children:(0,d.jsx)("b",{children:e.displayName})}),(0,d.jsx)("span",{className:"Post-reply-text",children:e.replyText})]},t)})}))})]}):null]})}),(0,d.jsx)("div",{className:"detail-btn-area",children:(0,d.jsx)("button",{className:"go-main-btn",onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),window.history.back()},children:"\ub3cc\uc544\uac00\uae30"})})]})}):null}},8277:function(e,t,n){n.d(t,{C:function(){return m}});var r=n(4165),s=n(1413),a=n(5861),o=n(9439),i=n(2791),l=n(77),c=n(7799),d=n(276);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=new Date,a=s.getFullYear(),o=s.getMonth(),i=s.getDate(),l=s.getHours(),c=s.getMinutes(),d=s.getMilliseconds();return 0!==t&&s.setMonth(s.getMonth()+t),0!==n&&s.setDate(s.getDate()+n),0!==a&&s.setFullYear(s.getFullYear()+r),o=("0"+(1+s.getMonth())).slice(-2),i=("0"+s.getDate()).slice(-2),(a=s.getFullYear())+e+o+e+i+l+c+d}function h(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2?arguments[2]:void 0,r=n.getFullYear(),s=n.getMonth()+1,a=n.getDate(),o=n.getHours(),i=n.getMinutes();1===(""+s).length&&(s="0"+s);1===(""+a).length&&(a="0"+a);1===(""+o).length&&(o="0"+o);1===(""+i).length&&(i="0"+i);return""+r+e+s+e+a+" "+o+t+i}(e,t,new Date)}var p={document:null,isPending:!1,error:null,success:!1},g=function(e,t){switch(t.type){case"isPending":return{isPending:!0,document:null,success:!1,error:null};case"addDoc":case"editDoc":case"deleteDoc":return{isPending:!1,document:t.payload,success:!0,error:null};case"error":return{isPending:!1,document:null,success:!1,error:t.payload};default:return e}},m=function(e){var t=(0,i.useReducer)(g,p),n=(0,o.Z)(t,2),m=n[0],f=n[1],x=(0,i.useState)([]),v=(0,o.Z)(x,2),y=(v[0],v[1],(0,c.hJ)(l.d_,e)),j=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o,i,p,g;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=l.AB.fromDate(new Date),o=h("/",":"),i=u(),p=(0,d.iH)(l.tO,"images/"+n.name),g=(0,d.B0)(p,n),f({type:"isPending"});try{g.on("state_changed",(function(e){}),(function(e){console.error("\uc2e4\ud328\uc0ac\uc720\ub294",e)}),(function(){(0,d.Jt)(g.snapshot.ref).then((function(e){console.log("\uc5c5\ub85c\ub4dc\ub41c \uacbd\ub85c\ub294",e);var n=(0,c.ET)(y,(0,s.Z)((0,s.Z)({},t),{},{createdTime:a,createdDate:o,createdUqe:i,downloadURL:e}));console.log(n),f({type:"addDoc",payload:n}),console.log("\uc800\uc7a5\uc644\ub8cc")}))}))}catch(r){f({type:"error",payload:r.message})}case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.AB.fromDate(new Date),a=h("/",":"),o=u(),f({type:"isPending"});try{i=(0,c.ET)(y,(0,s.Z)((0,s.Z)({},t),{},{createdTime:n,createdDate:a,createdUqe:o})),console.log(i),f({type:"addDoc",payload:i}),console.log("\uc800\uc7a5\uc644\ub8cc")}catch(r){f({type:"error",payload:r.message})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({type:"isPending"}),e.prev=1,e.next=4,(0,c.r7)((0,c.JU)(y,n),(0,s.Z)({},t));case 4:a=e.sent,f({type:"editDoc",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f({type:"error",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({type:"isPending"}),e.prev=1,e.next=4,(0,c.oe)((0,c.JU)(y,t));case 4:n=e.sent,f({type:"deleteDoc",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f({type:"error",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.AB.fromDate(new Date),a=h("/",":"),o=u(),f({type:"isPending"});try{i=(0,c.ET)(y,(0,s.Z)((0,s.Z)({},t),{},{createdTime:n,createdDate:a,createdUqe:o})),console.log(i),f({type:"addDoc",payload:i}),console.log("\uc800\uc7a5\uc644\ub8cc")}catch(r){f({type:"error",payload:r.message})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{addDocument:j,addComment:k,editDocument:w,deleteDocument:N,addUser:b,response:m}}}}]);
//# sourceMappingURL=215.69b24aa1.chunk.js.map