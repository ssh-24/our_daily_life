"use strict";(self.webpackChunkour_daily_life=self.webpackChunkour_daily_life||[]).push([[444],{3444:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(9439),o=t(2791),r=t(6849),i=t(1542),s=t(2969),l=t(9434),c=t(7689),u=t(4942),d=t(1413),f=t(8277),p=t(9693),m=t(67),g=t(276),h=t(77),v=t(6152),y=t(184);var x=function(e){var n=(0,r.E)().user,t=(0,i.e)("FeedData",["UID","==",n.uid]).documents,s=(0,i.e)("UserData",["UID","==",n.uid]).documents,c=(0,f.C)("FeedData").editDocument,x=(0,f.C)("UserData").editDocument,j=(0,l.v9)((function(e){return e.profileState.pfVisible})),w=(0,l.I0)(),D=(0,o.useState)(""),N=(0,a.Z)(D,2),I=N[0],k=N[1],U=(0,o.useState)(""),b=(0,a.Z)(U,2),E=b[0],F=b[1],S=(0,o.useState)(""),C=(0,a.Z)(S,2),P=C[0],_=C[1],J=(0,o.useState)({displayName:"",profileImage:"",profileIntro:""}),L=(0,a.Z)(J,2),M=L[0],T=L[1],q=(0,o.useState)(!1),B=(0,a.Z)(q,2),R=B[0],O=B[1],H=(0,o.useState)(""),Y=(0,a.Z)(H,2),A=Y[0],V=Y[1],z=(0,o.useState)(!1),X=(0,a.Z)(z,2),G=X[0],K=X[1],Q=(0,o.useState)(!1),W=(0,a.Z)(Q,2),$=W[0],ee=W[1],ne=M.displayName,te=M.profileImage,ae=M.profileIntro,oe=function(e){var n=e.target,t=n.value,a=n.name;"text"===e.target.type?T((0,d.Z)((0,d.Z)({},M),{},(0,u.Z)({},a,t))):re(e)},re=function(e){console.log("\ubcc0\uacbd\ud560 \ud30c\uc77c --\x3e",e.target.files[0]);var n=new FileReader;n.onload=function(e){k(e.target.result)},n.readAsDataURL(e.target.files[0]),F(e.target.files[0])};return(0,o.useEffect)((function(){""!==A&&void 0!==A&&(T((0,d.Z)((0,d.Z)({},M),{},{profileImage:A})),console.log("\ucd5c\uc885 URL --\x3e ",A),K(!0))}),[A]),(0,o.useEffect)((function(){G&&(console.log("\ud504\ub85c\ud544 \ubcc0\uacbd ( \uc0ac\uc9c4 O ) --\x3e ",M),0!==t.length&&t.map((function(e,n){c({displayName:ne,profileImage:te},e.id)})),x({profileIntro:ae,displayName:ne,profileImage:te},s[0].id).then((function(){w((0,p.n)(!1))})))}),[G]),(0,o.useEffect)((function(){return document.body.style.overflow="hidden",_("transition-end"),k(""),O(!1),K(!1),ee(!1),function(){document.body.style.overflow=""}}),[]),(0,o.useEffect)((function(){null!=t&&null!=s&&(console.log("\uac8c\uc2dc\uae00 : ",t),console.log("\uc0ac\uc6a9\uc790 : ",s),T({displayName:s[0].displayName,profileImage:s[0].profileImage,profileIntro:s[0].profileIntro}))}),[s,t]),(0,o.useEffect)((function(){T((0,d.Z)((0,d.Z)({},M),{},{profileImage:E})),O(!0)}),[E]),(0,o.useEffect)((function(){O(!1),K(!1),ee(!1)}),[j]),window.onkeydown=function(e){"Escape"===e.key&&console.log("\uafb8")},window.onkeyup=function(e){"Escape"===e.key&&(console.log("\uc6b1"),w((0,p.n)(!1)))},(0,y.jsxs)(y.Fragment,{children:[$?(0,y.jsx)(v.Z,{}):null,(0,y.jsx)("div",{className:"dimmed-layer ".concat(P)}),(0,y.jsx)("div",{className:"input-area transition-start ".concat(P),children:(0,y.jsx)("div",{className:"form-container",children:(0,y.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),ee(!0),console.log("\uc0ac\uc9c4 \ubcc0\uacbd \uc5ec\ubd80 --\x3e ",R),R){var n=(0,g.iH)(h.tO,"images/"+te.name),a=(0,g.B0)(n,te);setTimeout((function(){(0,g.Jt)(a.snapshot.ref).then((function(e){console.log("downloadURL --\x3e ",e),V(e)})).catch((function(e){alert("\uc11c\ubc84\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc5b4\uc694\ud83d\ude25 \n \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694!"),w((0,p.n)(!1))}))}),3e3)}else 0!==t.length&&t.map((function(e,n){c({displayName:ne},e.id)})),x({profileIntro:ae,displayName:ne},s[0].id).then((function(){w((0,p.n)(!1))}))},children:[(0,y.jsx)("h3",{children:"\ub0b4 \ud504\ub85c\ud544"}),(0,y.jsxs)("div",{className:"form-group profile-input",children:[(0,y.jsx)(m.Z,{}),(0,y.jsx)("input",{accept:"image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime",className:"img-input profile-text-input",multiple:"",type:"file",onChange:oe})]}),I.length>0&&(0,y.jsx)("img",{src:I,alt:"",style:{marginBottom:"13px",width:"80%",maxHeight:"200px"}}),(0,y.jsxs)("div",{className:"form-group profile-input",children:[(0,y.jsx)(m.Z,{}),(0,y.jsx)("input",{type:"text",name:"displayName",value:ne,onChange:oe,className:"form-control profile-text-input",placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694!",required:!0})]}),(0,y.jsxs)("div",{className:"form-group profile-input",children:[(0,y.jsx)(m.Z,{}),(0,y.jsx)("input",{type:"text",name:"profileIntro",value:ae,onChange:oe,className:"form-control profile-text-input",placeholder:"\uc18c\uac1c\uae00\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694!",required:!0})]}),(0,y.jsx)("input",{type:"submit",className:"post-btn",value:"\uc800\uc7a5\ud558\uae30"}),(0,y.jsx)("div",{className:"close-btn",children:(0,y.jsx)(Z,{onClick:function(e){e.preventDefault(),w((0,p.n)(!1))}})})]})})})]})},Z=function(e){return(0,y.jsxs)("svg",(0,d.Z)((0,d.Z)({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none"},e),{},{children:[(0,y.jsx)("title",{children:"close"}),(0,y.jsx)("path",{fill:"#FFFFFF",d:"M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"})]}))};var j=function(e){var n=(0,r.E)().user,t=(0,c.UO)().uid,u=(0,i.e)("FeedData",["UID","==",t]).documents,d=(0,i.e)("UserData",["UID","==",t]).documents,f=(0,o.useState)(!1),m=(0,a.Z)(f,2),g=m[0],h=m[1],v=(0,l.v9)((function(e){return e.loginUserInfo})),Z=(0,o.useState)(""),j=(0,a.Z)(Z,2),w=j[0],D=j[1],N=(0,l.v9)((function(e){return e.profileState.pfVisible})),I=(0,l.I0)(),k=(0,c.s0)();return(0,o.useEffect)((function(){h(!1),n.uid===t&&(console.log("user :",n),console.log("\uc774\uba54\uc77c :",n.email),console.log("\ucd5c\ucd08\uac00\uc785 \uc2dc \ub2c9\ub124\uc784 (user.displayName) :",n.displayName))}),[]),(0,o.useEffect)((function(){h(!0),n.uid===t?console.log("\ub0b4 \uae00 :",u):console.log("\uac80\uc0c9 :",u)}),[u]),(0,o.useEffect)((function(){D(g?"transition-end":"")}),[g]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("section",{children:[(0,y.jsx)("div",{className:"container transition-start ".concat(w),children:(0,y.jsxs)("div",{className:"container-wrap",children:[(0,y.jsx)("img",{className:"profile-img",src:n.uid===t?v.profileImage:g&&null!=d&&0!==d.length?d[0].profileImage:"/assets/profile_default.png",alt:"\ud504\ub85c\ud544 \uc0ac\uc9c4"}),(0,y.jsxs)("div",{className:"profile-info",children:[(0,y.jsx)("h3",{className:"profile-email",children:n.uid===t?n.email:g&&null!=u&&0!==u.length?u[0].userEmail:"\ub370\uc774\ud130\uac00 \uc5c6\uc5b4\uc694!"}),(0,y.jsxs)("h4",{className:"profile-displayname",children:["@",n.uid===t?v.displayName:g&&null!=u&&0!==u.length?u[0].displayName:"\ub370\uc774\ud130\uac00 \uc5c6\uc5b4\uc694!"]}),(0,y.jsx)("p",{className:"profile-intro",children:g&&null!=d&&0!==d.length?d[0].profileIntro:"\ub370\uc774\ud130\uac00 \uc5c6\uc5b4\uc694!"}),n.uid===t?(0,y.jsx)("button",{onClick:function(){I((0,p.n)(!0))},children:"\ud504\ub85c\ud544 \ubcc0\uacbd"}):null]})]})}),(0,y.jsxs)("div",{className:"content-list transition-start ".concat(w),children:[(0,y.jsx)("div",{className:g&&null!=u&&u.length>2?"content-wrap":g&&null!=u&&u.length>1?"content-wrap-two":"content-wrap-one",children:g&&null!=u&&0!==u.length?u.map((function(e,n){return(0,y.jsx)("img",{className:"my-img",src:e.downloadURL,alt:"#",onClick:function(n){return function(e){k("/detail/"+e.id)}(e)}},e.createdUqe)})):(0,y.jsxs)("div",{className:"no-post",children:[(0,y.jsx)("p",{children:"\uc791\uc131\ub41c \uac8c\uc2dc\ubb3c\uc774 \uc5c6\uc5b4\uc694!"}),(0,y.jsx)("button",{className:"upload-btn-profile",onClick:function(){I((0,s.yx)(!0))},children:"\uac8c\uc2dc\ubb3c \uc791\uc131\ud558\uae30"})]})}),(0,y.jsx)("div",{className:"profile-go-main-btn-area",children:(0,y.jsx)("button",{className:"go-main-btn",onClick:function(){k("/"),window.scrollTo({top:0,behavior:"smooth"})},children:"\ub3cc\uc544\uac00\uae30"})})]})]}),N?(0,y.jsx)(x,{}):null]})}},1542:function(e,n,t){t.d(n,{e:function(){return c}});var a=t(1413),o=t(3433),r=t(9439),i=t(77),s=t(2791),l=t(7799),c=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=(0,s.useState)(null),u=(0,r.Z)(c,2),d=u[0],f=u[1],p=(0,s.useState)(null),m=(0,r.Z)(p,2),g=m[0],h=m[1];return(0,s.useEffect)((function(){var r;r=t.length>0?(0,l.IO)((0,l.hJ)(i.d_,e),l.ar.apply(void 0,(0,o.Z)(n)),(0,l.Xo)("createdTime","desc")):(0,l.IO)((0,l.hJ)(i.d_,e),l.ar.apply(void 0,(0,o.Z)(n)));var s=(0,l.cf)(n?r:(0,l.hJ)(i.d_,e),(function(e){var n=[];e.docs.forEach((function(e){n.push((0,a.Z)((0,a.Z)({},e.data()),{},{id:e.id}))})),f(n),h(null)}),(function(e){h(e.message)}));return s}),[l.hJ]),{documents:d,error:g}}},8277:function(e,n,t){t.d(n,{C:function(){return g}});var a=t(4165),o=t(1413),r=t(5861),i=t(9439),s=t(2791),l=t(77),c=t(7799),u=t(276);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=new Date,r=o.getFullYear(),i=o.getMonth(),s=o.getDate(),l=o.getHours(),c=o.getMinutes(),u=o.getMilliseconds();return 0!==n&&o.setMonth(o.getMonth()+n),0!==t&&o.setDate(o.getDate()+t),0!==r&&o.setFullYear(o.getFullYear()+a),i=("0"+(1+o.getMonth())).slice(-2),s=("0"+o.getDate()).slice(-2),(r=o.getFullYear())+e+i+e+s+l+c+u}function f(e,n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",t=arguments.length>2?arguments[2]:void 0,a=t.getFullYear(),o=t.getMonth()+1,r=t.getDate(),i=t.getHours(),s=t.getMinutes();1===(""+o).length&&(o="0"+o);1===(""+r).length&&(r="0"+r);1===(""+i).length&&(i="0"+i);1===(""+s).length&&(s="0"+s);return""+a+e+o+e+r+" "+i+n+s}(e,n,new Date)}var p={document:null,isPending:!1,error:null,success:!1},m=function(e,n){switch(n.type){case"isPending":return{isPending:!0,document:null,success:!1,error:null};case"addDoc":case"editDoc":case"deleteDoc":return{isPending:!1,document:n.payload,success:!0,error:null};case"error":return{isPending:!1,document:null,success:!1,error:n.payload};default:return e}},g=function(e){var n=(0,s.useReducer)(m,p),t=(0,i.Z)(n,2),g=t[0],h=t[1],v=(0,s.useState)([]),y=(0,i.Z)(v,2),x=(y[0],y[1],(0,c.hJ)(l.d_,e)),Z=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n,t){var r,i,s,p,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=l.AB.fromDate(new Date),i=f("/",":"),s=d(),p=(0,u.iH)(l.tO,"images/"+t.name),m=(0,u.B0)(p,t),h({type:"isPending"});try{m.on("state_changed",(function(e){}),(function(e){console.error("\uc2e4\ud328\uc0ac\uc720\ub294",e)}),(function(){(0,u.Jt)(m.snapshot.ref).then((function(e){console.log("\uc5c5\ub85c\ub4dc\ub41c \uacbd\ub85c\ub294",e);var t=(0,c.ET)(x,(0,o.Z)((0,o.Z)({},n),{},{createdTime:r,createdDate:i,createdUqe:s,downloadURL:e}));console.log(t),h({type:"addDoc",payload:t}),console.log("\uc800\uc7a5\uc644\ub8cc")}))}))}catch(a){h({type:"error",payload:a.message})}case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r,i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.AB.fromDate(new Date),r=f("/",":"),i=d(),h({type:"isPending"});try{s=(0,c.ET)(x,(0,o.Z)((0,o.Z)({},n),{},{createdTime:t,createdDate:r,createdUqe:i})),console.log(s),h({type:"addDoc",payload:s}),console.log("\uc800\uc7a5\uc644\ub8cc")}catch(a){h({type:"error",payload:a.message})}case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h({type:"isPending"}),e.prev=1,e.next=4,(0,c.r7)((0,c.JU)(x,t),(0,o.Z)({},n));case 4:r=e.sent,h({type:"editDoc",payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h({type:"error",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t){return e.apply(this,arguments)}}(),D=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h({type:"isPending"}),e.prev=1,e.next=4,(0,c.oe)((0,c.JU)(x,n));case 4:t=e.sent,h({type:"deleteDoc",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),h({type:"error",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),N=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r,i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.AB.fromDate(new Date),r=f("/",":"),i=d(),h({type:"isPending"});try{s=(0,c.ET)(x,(0,o.Z)((0,o.Z)({},n),{},{createdTime:t,createdDate:r,createdUqe:i})),console.log(s),h({type:"addDoc",payload:s}),console.log("\uc800\uc7a5\uc644\ub8cc")}catch(a){h({type:"error",payload:a.message})}case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{addDocument:Z,addComment:j,editDocument:w,deleteDocument:D,addUser:N,response:g}}}}]);
//# sourceMappingURL=444.4655d4d5.chunk.js.map