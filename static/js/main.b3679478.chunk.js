(this.webpackJsonpvisualise_fundamentals=this.webpackJsonpvisualise_fundamentals||[]).push([[0],{331:function(t,n,e){},332:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e(225),o=e(136),r=e(14),i=e(20),s=e(17),u=e(192),j=e(338),f=e(340),l=e(341),d=e(339),h=e(15),b=window.location.origin;function O(t,n){return function(t,n){return fetch("".concat(b,"/data/").concat(t,"/").concat(n,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}(t,n).then((function(t){if(null!=t)return t.dividends})).catch((function(t){console.log(t)}))}var x=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],a=n[1],b=Object(s.f)();Object(c.useEffect)((function(){O(b.market,b.id).then((function(t){var n,e=t,c=[],o=Object(r.a)(e);try{for(o.s();!(n=o.n()).done;){var i=n.value,s=new Date(i.Date);c.push({x:s.toLocaleDateString(),y:i.Dividends})}}catch(u){o.e(u)}finally{o.f()}a(c)}))}));return Object(h.jsxs)(j.a,{height:300,xScale:{type:"band"},yScale:{type:"linear"},children:[Object(h.jsx)(u.a,{verticalAnchor:"start",children:b.id}),Object(h.jsx)(f.a,{orientation:"bottom"}),Object(h.jsx)(f.a,{orientation:"left",tickFormat:function(t){return"$".concat(t)}}),Object(h.jsx)(l.a,{columns:!1,numTicks:3}),Object(h.jsx)(d.a,Object(o.a)({dataKey:"Line 1",data:e},{xAccessor:function(t){return t.x},yAccessor:function(t){return t.y}}))]})},m=window.location.origin;function v(t,n){return fetch("".concat(m,"/data/").concat(t,"/").concat(n,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}var y=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],a=n[1],b=Object(s.f)();Object(c.useEffect)((function(){var t,n;(t=b.market,n=b.id,v(t,n).then((function(t){if(null!=t)return t.historical_price})).catch((function(t){console.log(t)}))).then((function(t){var n,e=t,c=[],o=Object(r.a)(e);try{for(o.s();!(n=o.n()).done;){var i=n.value,s=new Date(i.Date);c.push({x:s.toLocaleDateString(),y:i.Close})}}catch(u){o.e(u)}finally{o.f()}a(c)}))}));return Object(h.jsxs)(j.a,{height:300,xScale:{type:"band"},yScale:{type:"linear"},children:[Object(h.jsx)(u.a,{verticalAnchor:"start",children:b.id}),Object(h.jsx)(f.a,{orientation:"bottom"}),Object(h.jsx)(f.a,{orientation:"left",tickFormat:function(t){return"$".concat(t)}}),Object(h.jsx)(l.a,{columns:!1,numTicks:3}),Object(h.jsx)(d.a,Object(o.a)({dataKey:"Line 1",data:e},{xAccessor:function(t){return t.x},yAccessor:function(t){return t.y}}))]})},p=(e(331),e(134));Object(a.render)(Object(h.jsx)(p.a,{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/dividends/:market/:id",component:x}),Object(h.jsx)(s.a,{exact:!0,path:"/price/:market/:id",component:y})]})}),document.getElementById("root"))}},[[332,1,2]]]);
//# sourceMappingURL=main.b3679478.chunk.js.map