(this.webpackJsonpvisualise_fundamentals=this.webpackJsonpvisualise_fundamentals||[]).push([[0],{407:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(21),r=n(24),s=n(20),o=n(441),d=n(442),j=n(228),l=n(229),h=n(56),b=n(100),u=n(240),x=window.location.origin;function O(t,e,n){return fetch("".concat(x,"/data/").concat(t,"/").concat(n,"/").concat(e,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}function p(t,e){return O(t,e,"info").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))}var m=n(23),f=n(3);var g=n(462);var v=n(92),y=n(124),w=n(231),k=n(11),S=n(451),B=n(452),D=n(460),N=n(453),E=n(454),C=n(457),I=n(132),K=n(456),R=n(455),F=n(458),H=n(459),P=n(409),G=n(237),T=n.n(G),L=n(238),$=n.n(L),z=n(446),J=n(449),W=n(450),_=n(232),A=n.n(_),X=n(233),q=n.n(X),M=n(234),Q=n.n(M),U=n(235),V=n.n(U),Y=n(236),Z=n.n(Y),tt=Object(f.jsxs)("div",{children:[Object(f.jsxs)(z.a,{button:!0,children:[Object(f.jsx)(J.a,{children:Object(f.jsx)(A.a,{})}),Object(f.jsx)(W.a,{primary:"Dashboard"})]}),Object(f.jsxs)(z.a,{button:!0,children:[Object(f.jsx)(J.a,{children:Object(f.jsx)(q.a,{})}),Object(f.jsx)(W.a,{primary:"Orders"})]}),Object(f.jsxs)(z.a,{button:!0,children:[Object(f.jsx)(J.a,{children:Object(f.jsx)(Q.a,{})}),Object(f.jsx)(W.a,{primary:"Customers"})]}),Object(f.jsxs)(z.a,{button:!0,children:[Object(f.jsx)(J.a,{children:Object(f.jsx)(V.a,{})}),Object(f.jsx)(W.a,{primary:"Reports"})]}),Object(f.jsxs)(z.a,{button:!0,children:[Object(f.jsx)(J.a,{children:Object(f.jsx)(Z.a,{})}),Object(f.jsx)(W.a,{primary:"Integrations"})]})]}),et=n(82),nt=n(43);function at(t){return Object(f.jsx)(I.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:t.children})}function ct(t,e){return{time:t,amount:e}}var it=[ct("00:00",0),ct("03:00",300),ct("06:00",600),ct("09:00",800),ct("12:00",1500),ct("15:00",2e3),ct("18:00",2400),ct("21:00",2400),ct("24:00",void 0)];function rt(){var t=Object(et.a)();return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(at,{children:"Today"}),Object(f.jsx)(o.a,{children:Object(f.jsxs)(d.a,{data:it,margin:{top:16,right:16,bottom:0,left:24},children:[Object(f.jsx)(j.a,{dataKey:"time",stroke:t.palette.text.secondary}),Object(f.jsx)(l.a,{stroke:t.palette.text.secondary,children:Object(f.jsx)(nt.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:t.palette.text.primary},children:"Sales ($)"})}),Object(f.jsx)(u.a,{type:"monotone",dataKey:"amount",stroke:t.palette.primary.main,dot:!1})]})})]})}var st=Object(S.a)((function(t){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(w.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerPaperClose:Object(y.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}),appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)},paper:{padding:t.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ot(t){var e=st(),n=c.a.useState(!0),a=Object(s.a)(n,2),i=a[0],r=a[1],o=Object(k.a)(e.paper,e.fixedHeight);return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(B.a,{}),Object(f.jsx)(N.a,{position:"absolute",className:Object(k.a)(e.appBar,i&&e.appBarShift),children:Object(f.jsxs)(E.a,{className:e.toolbar,children:[Object(f.jsx)(R.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},className:Object(k.a)(e.menuButton,i&&e.menuButtonHidden),children:Object(f.jsx)(T.a,{})}),Object(f.jsx)(I.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Dashboard"})]})}),Object(f.jsxs)(D.a,{variant:"permanent",classes:{paper:Object(k.a)(e.drawerPaper,!i&&e.drawerPaperClose)},open:i,children:[Object(f.jsx)("div",{className:e.toolbarIcon,children:Object(f.jsx)(R.a,{onClick:function(){r(!1)},children:Object(f.jsx)($.a,{})})}),Object(f.jsx)(K.a,{}),Object(f.jsx)(C.a,{children:tt})]}),Object(f.jsxs)("main",{className:e.content,children:[Object(f.jsx)("div",{className:e.appBarSpacer}),Object(f.jsx)(F.a,{maxWidth:"lg",className:e.container,children:Object(f.jsx)(H.a,{container:!0,spacing:3,children:Object(f.jsx)(H.a,{item:!0,xs:12,md:8,lg:9,children:Object(f.jsx)(P.a,{className:o,children:Object(f.jsx)(rt,{})})})})})]})]})}Object(i.render)(Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)(ot,{children:Object(f.jsx)(v.a,{children:Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{exact:!0,path:"/dividends/:market/:id",component:function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("$"),x=Object(s.a)(i,2),g=x[0],v=x[1],y=Object(m.f)();return Object(a.useEffect)((function(){var t,e;(t=y.market,e=y.id,O(t,e,"dividends").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,a=[],i=Object(r.a)(n);try{for(i.s();!(e=i.n()).done;){var s=e.value,o=new Date(s.Date);a.push({x:o.toLocaleDateString(),y:s.Dividends})}}catch(d){i.e(d)}finally{i.f()}c(a)})),p(y.market,y.id).then((function(t){v(t.currency)}))}),[y.id,y.market]),Object(f.jsx)("div",{style:{width:800,height:600},children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(d.a,{width:500,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(f.jsx)(j.a,{dataKey:"x"}),Object(f.jsx)(l.a,{tickFormatter:function(t){return"".concat(g," ").concat(t)}}),Object(f.jsx)(h.a,{}),Object(f.jsx)(b.a,{}),Object(f.jsx)(u.a,{type:"monotone",dataKey:"y",name:"Dividends",stroke:"#8884d8",dot:!1})]})})})}}),Object(f.jsx)(m.a,{exact:!0,path:"/price/:market/:id",component:function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("$"),x=Object(s.a)(i,2),g=x[0],v=x[1],y=Object(m.f)();return Object(a.useEffect)((function(){var t,e;(t=y.market,e=y.id,O(t,e,"prices").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,a=[],i=Object(r.a)(n);try{for(i.s();!(e=i.n()).done;){var s=e.value,o=new Date(s.Date);a.push({x:o.toLocaleDateString(),y:s.Close})}}catch(d){i.e(d)}finally{i.f()}c(a)})),p(y.market,y.id).then((function(t){v(t.currency)}))}),[y.id,y.market]),Object(f.jsx)("div",{style:{width:800,height:600},children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(d.a,{width:800,height:600,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(f.jsx)(j.a,{dataKey:"x"}),Object(f.jsx)(l.a,{tickFormatter:function(t){return"".concat(g," ").concat(t)}}),Object(f.jsx)(h.a,{}),Object(f.jsx)(b.a,{}),Object(f.jsx)(u.a,{type:"monotone",dataKey:"y",name:"Historical Price",stroke:"#8884d8",dot:!1})]})})})}}),Object(f.jsx)(m.a,{exact:!0,path:"/market/:market",component:function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(m.f)();return Object(a.useEffect)((function(){var t;(t=i.market,fetch("".concat(x,"/data/").concat(t,"/dividendsRate"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))).then((function(t){var e=t.map((function(t){var e=Number((100*t.dividendRate).toFixed(2));return{name:"".concat(t.ticker," ").concat(e,"%"),dividends:e}}));c(e.sort((function(t,e){var n=t.dividends,a=e.dividends;return n>a?-1:n<a?1:0})))}))}),[i.market]),Object(f.jsx)("div",{style:{width:800,height:600},children:Object(f.jsx)(o.a,{width:"100%",height:"100%",children:Object(f.jsx)(g.a,{width:400,height:200,data:n,dataKey:"dividends",aspectRatio:4/3,stroke:"#fff",fill:"#8884d8"})})})}})]})})})}),document.getElementById("root"))}},[[407,1,2]]]);
//# sourceMappingURL=main.6be23564.chunk.js.map