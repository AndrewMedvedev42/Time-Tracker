(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(9),o=n.n(r),s=(n(8),n(7)),i=n(3),l=n(2),u=n(0);var j=function(t){var e=t.name,n=t.child,a=t.count,r=Object(c.useState)(a),o=Object(i.a)(r,2),s=o[0],j=o[1],b=Object(c.useState)(!1),d=Object(i.a)(b,2),O=d[0],f=d[1],h=Object(c.useState)(!1),m=Object(i.a)(h,2),x=m[0],v=m[1],p=Object(c.useRef)(null);return localStorage.setItem(e,s),Object(u.jsxs)("div",{className:"timerSection",children:[Object(u.jsx)("h3",{children:e}),Object(u.jsxs)("div",{className:"timerSecMinHour",children:[Object(u.jsx)("p",{children:function(){var t="0".concat(s%60).slice(-2),e="".concat(Math.floor(s/60)),n="0".concat(e%60).slice(-2),c="0".concat(Math.floor(s/3600)).slice(-2);return"".concat(c," : ").concat(n," : ").concat(t)}()}),Object(u.jsxs)("div",{className:"buttonsSection",children:[O||x?x?Object(u.jsx)("button",{class:"btn pauseBtn",onClick:function(){clearInterval(p.current),v(!1)},children:Object(u.jsx)(l.a,{})}):Object(u.jsx)("button",{class:"btn btnPlay",onClick:function(){v(!0),p.current=setInterval((function(){j((function(t){return t+1}))}),1e3)},children:Object(u.jsx)(l.b,{})}):Object(u.jsx)("button",{class:"btn btnPlay",onClick:function(){f(!0),v(!0),p.current=setInterval((function(){j((function(t){return t+1}))}),1e3)},children:Object(u.jsx)(l.b,{})}),Object(u.jsx)("button",{class:"btn btnReset",onClick:function(){clearInterval(p.current),f(!1),v(!1),j(0)},disabled:!O,children:Object(u.jsx)(l.c,{})}),n]})]})]})};var b=function(){var t=a.a.useState(""),e=Object(i.a)(t,2),n=e[0],c=e[1],r=a.a.useState([]),o=Object(i.a)(r,2),b=o[0],d=o[1],O=a.a.useCallback((function(){""===n?alert("Input field is empty!"):b.some((function(t){return t===n}))?alert("Name: ".concat(n," already exists!")):(d((function(t){return[n].concat(Object(s.a)(t))})),localStorage.setItem(n,0))}),[n,b]);function f(t){return 0!==localStorage.getItem(t)?parseInt(localStorage.getItem(t)):0}return Object(u.jsxs)("section",{children:[Object(u.jsx)("button",{className:"deployButton",onClick:function(){for(var t=function(t){var e=localStorage.key(t);b.some((function(t){return t===e}))?alert("Sorry,".concat(e," already deployed!")):d((function(t){return[e].concat(Object(s.a)(t))}))},e=0;e<localStorage.length;e++)t(e)},children:"Show Existing Timers"}),Object(u.jsxs)("div",{className:"mainSection",children:[Object(u.jsx)("h1",{children:"Tracker"}),Object(u.jsxs)("div",{className:"inputSection",children:[Object(u.jsx)("input",{className:"inputField",value:n,onChange:function(t){c(t.target.value)}}),Object(u.jsx)("button",{className:"deployButton",onClick:O,children:"Craete"})]})]}),Object(u.jsx)("div",{className:"deployedTimers",children:b.map((function(t){return Object(u.jsx)(j,{name:t,count:f(t),child:Object(u.jsx)("button",{class:"btn btnClose",onClick:function(){return function(t){var e=b.filter((function(e){return e!==t}));localStorage.removeItem(t),d(e)}(t)},children:Object(u.jsx)(l.d,{size:16})})},t)}))})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),d()},8:function(t,e,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.5ea87f98.chunk.js.map