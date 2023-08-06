"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{946:function(n,t,e){e.r(t),e.d(t,{default:function(){return D}});var r,i,a,o,s,c,u,p,f,h=e(861),d=e(439),l=e(687),x=e.n(l),m=e(820),w=e(791),v=e(689),g=e(258),Z=e(168),b=e(686),k=e(87),y=b.Z.section(r||(r=(0,Z.Z)(["\n  margin-top: 30px;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n  }\n"]))),j=b.Z.ul(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px 16px;\n\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]))),I=b.Z.li(a||(a=(0,Z.Z)(["\n  display: block;\n  width: 267px;\n  height: 379px;\n\n  border-radius: 8px;\n  overflow: hidden;\n\n  position: relative;\n\n  &:hover section {\n    transform: translateY(-100%);\n  }\n\n  @media screen and (min-width: 1024px) and (max-width: 1199px) {\n    width: 236px;\n    height: 335px;\n  }\n"]))),z=(0,b.Z)(k.rU)(o||(o=(0,Z.Z)(["\n  display: inline-block;\n  padding: 5px 24px;\n  border-radius: 20px;\n  background-color: #053ba3;\n\n  position: relative;\n  left: 130px;\n"]))),N=b.Z.img(s||(s=(0,Z.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),J=b.Z.section(c||(c=(0,Z.Z)(["\n  width: 100%;\n  padding: 5px;\n\n  background: rgba(16, 16, 16, 0.29);\n  backdrop-filter: blur(2px);\n\n  transform: translateY(-100%);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  @media screen and (min-width: 769px) {\n    transform: translateY(0);\n  }\n\n  svg {\n    position: absolute;\n    left: 225px;\n    display: block;\n    width: 27px;\n    height: 27px;\n  }\n"]))),Y=b.Z.h2(u||(u=(0,Z.Z)(["\n  font-family: Righteous;\n  font-size: 25px;\n  line-height: 1.24;\n  font-weight: 400;\n  text-transform: uppercase;\n\n  width: 220px;\n"]))),_=b.Z.p(p||(p=(0,Z.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.389;\n"]))),C=b.Z.h2(f||(f=(0,Z.Z)(["\n  font-family: Nunito;\n  font-size: 30px;\n  font-weight: 500;\n\n  svg {\n    position: relative;\n    top: -8px;\n    left: -6px;\n\n    display: none;\n\n    @media screen and (min-width: 400px) {\n      display: inline-block;\n    }\n  }\n"]))),M=e(184),D=function(){var n=(0,w.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],i=(0,v.TH)();return(0,w.useEffect)((function(){function n(){return(n=(0,h.Z)(x().mark((function n(){var t,e,i,a;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.Hg)();case 3:t=n.sent,e=t.data,i=function(n){return n.slice(0,4)},a=e.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path,a=n.release_date;return{id:t,title:e,poster_path:r,date:i(a)}})),r(a),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),alert("error");case 13:return n.prev=13,n.finish(13);case 15:case"end":return n.stop()}}),n,null,[[0,10,13,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,M.jsxs)(y,{children:[(0,M.jsxs)(C,{children:["The Most Trending Now"," ",(0,M.jsx)("svg",{width:"32",height:"25",viewBox:"0 0 32 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,M.jsx)("path",{id:"Ellipse 3",d:"M32 1.78619C32 5.92832 11.6421 24.7862 7.5 24.7862C3.35786 24.7862 0 21.4283 0 17.2862C0 13.1441 7.85786 6.78619 12 6.78619C21.5 1.28618 32 -2.35595 32 1.78619Z",fill:"#053BA3"})})]}),(0,M.jsx)(j,{children:e.map((function(n){var t=n.id,e=n.title,r=n.poster_path,a=n.date;return(0,M.jsxs)(I,{children:[(0,M.jsx)(N,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:""}),(0,M.jsxs)(J,{children:[(0,M.jsx)(m.M_L,{}),(0,M.jsx)(Y,{children:e}),(0,M.jsx)(_,{children:a}),(0,M.jsx)(z,{to:"movies/".concat(t),state:{from:i},children:"More info"})]})]},t)}))})]})}},258:function(n,t,e){e.d(t,{HI:function(){return c},Hg:function(){return s},TP:function(){return u},tx:function(){return f},zv:function(){return p}});var r=e(861),i=e(687),a=e.n(i),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDI3NDZkZGQwNzIzZTk5YzYyNDVmZDkwM2JlZCIsInN1YiI6IjY0YmQyNTNhMGVkMmFiMDBlMmRhYjY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.usFVKO1fi_bibknfzjxz84ON7pNr7gg38J8efPhFlyU";var s=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?query=".concat(t,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=946.7b2b9214.chunk.js.map