"use strict";(self.webpackChunkour_daily_life=self.webpackChunkour_daily_life||[]).push([[762],{3762:function(n,e,t){t.r(e);var o=t(1413),s=t(9439),l=t(2791),r=t(8011),a=t(6849),u=t(1542),i=t(9434),c=t(7689),d=t(184);e.default=function(n){var e=(0,a.E)().user,t=(0,c.s0)(),f=(0,i.v9)((function(n){return n.loginUserInfo})),h=(0,u.e)("FeedData",["peopleWhoSave","array-contains",e.uid]),m=h.documents,g=(h.error,(0,l.useState)(!1)),v=(0,s.Z)(g,2),p=v[0],b=v[1],Z=(0,l.useState)(""),j=(0,s.Z)(Z,2),k=j[0],x=j[1],N=function(){t("/"),window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)((function(){b(!1),console.log("user :",e),console.log("\uc774\uba54\uc77c :",e.email),console.log("\ub2c9\ub124\uc784 :",f.displayName)}),[]),(0,l.useEffect)((function(){b(!0),console.log("\uc800\uc7a5\ud55c \uae00 :",m)}),[m]),(0,l.useEffect)((function(){x(p?"transition-end":"")}),[p]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"liked-feeds transition-start ".concat(k),children:[p&&null!=m&&0!==m.length?(0,d.jsx)("h2",{className:"menu-header",children:"\ubcf4\uad00\ud568"}):null,p&&null!=m&&0!==m.length?m.sort((function(n,e){return e.createdUqe.substring(0,10)-n.createdUqe.substring(0,10)})).map((function(n,e){var t=(0,o.Z)({},n);return(0,d.jsx)(r.Z,{post:t},e)})):(0,d.jsxs)("div",{className:"no-like",children:[(0,d.jsx)("p",{children:"\uc800\uc7a5\ud55c \uac8c\uc2dc\ubb3c\uc774 \uc5c6\uc5b4\uc694!"}),(0,d.jsx)("button",{className:"lookaround-btn",onClick:N,children:"\ud53c\ub4dc \ub458\ub7ec\ubcf4\uae30"})]}),p&&null!=m&&0!==m.length?(0,d.jsx)("div",{className:"log-go-main-btn-area",children:(0,d.jsx)("button",{className:"go-main-btn",onClick:N,children:"\ub3cc\uc544\uac00\uae30"})}):null]})})}},1542:function(n,e,t){t.d(e,{e:function(){return i}});var o=t(1413),s=t(3433),l=t(9439),r=t(77),a=t(2791),u=t(7799),i=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=(0,a.useState)(null),c=(0,l.Z)(i,2),d=c[0],f=c[1],h=(0,a.useState)(null),m=(0,l.Z)(h,2),g=m[0],v=m[1];return(0,a.useEffect)((function(){var l;l=t.length>0?(0,u.IO)((0,u.hJ)(r.d_,n),u.ar.apply(void 0,(0,s.Z)(e)),(0,u.Xo)("createdTime","desc")):(0,u.IO)((0,u.hJ)(r.d_,n),u.ar.apply(void 0,(0,s.Z)(e)));var a=(0,u.cf)(e?l:(0,u.hJ)(r.d_,n),(function(n){var e=[];n.docs.forEach((function(n){e.push((0,o.Z)((0,o.Z)({},n.data()),{},{id:n.id}))})),f(e),v(null)}),(function(n){v(n.message)}));return a}),[u.hJ]),{documents:d,error:g}}}}]);
//# sourceMappingURL=762.de6f4f0a.chunk.js.map