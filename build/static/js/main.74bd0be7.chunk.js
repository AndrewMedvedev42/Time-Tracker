(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(9),s=n.n(o),r=(n(8),n(7)),i=n(3),l=n(2),u=n(0);var j=function(t){var e=t.name,n=t.child,a=t.count,o=Object(c.useState)(a),s=Object(i.a)(o,2),r=s[0],j=s[1],b=Object(c.useState)(!1),m=Object(i.a)(b,2),f=m[0],d=m[1],O=Object(c.useState)(!1),h=Object(i.a)(O,2),x=h[0],p=h[1],g=Object(c.useRef)(null);return localStorage.setItem(e,r),Object(u.jsxs)("article",{className:"timer-container",children:[Object(u.jsx)("h2",{className:"timer-name",children:e}),Object(u.jsx)("p",{className:"timer-time",children:function(){var t="0".concat(r%60).slice(-2),e="".concat(Math.floor(r/60)),n="0".concat(e%60).slice(-2),c="0".concat(Math.floor(r/3600)).slice(-2);return"".concat(c," : ").concat(n," : ").concat(t)}()}),Object(u.jsxs)("section",{className:"button-section",children:[f||x?x?Object(u.jsx)("button",{class:"button pause-button",onClick:function(){clearInterval(g.current),p(!1)},children:Object(u.jsx)(l.a,{})}):Object(u.jsx)("button",{className:"button button-play",onClick:function(){p(!0),g.current=setInterval((function(){j((function(t){return t+1}))}),1e3)},children:Object(u.jsx)(l.b,{})}):Object(u.jsx)("button",{className:"button button-play",onClick:function(){d(!0),p(!0),g.current=setInterval((function(){j((function(t){return t+1}))}),1e3)},children:Object(u.jsx)(l.b,{})}),Object(u.jsx)("button",{className:"button button-reset",onClick:function(){clearInterval(g.current),d(!1),p(!1),j(0)},disabled:!f,children:Object(u.jsx)(l.e,{})}),n]})]})},b=n(10),m=n.n(b);var f=function(){var t=a.a.useState(""),e=Object(i.a)(t,2),n=e[0],o=e[1],s=a.a.useState([]),b=Object(i.a)(s,2),f=b[0],d=b[1],O=a.a.useCallback((function(){""===n?alert("Input field is empty!"):f.some((function(t){return t===n}))?alert("Name: ".concat(n," already exists!")):(d((function(t){return[n].concat(Object(r.a)(t))})),localStorage.setItem(n,0))}),[n,f]);function h(t){return 0!==localStorage.getItem(t)?parseInt(localStorage.getItem(t)):0}return Object(c.useEffect)((function(){for(var t=function(t){var e=localStorage.key(t);f.some((function(t){return t===e}))?console.log("".concat(e," already deployed!")):d((function(t){return[e].concat(Object(r.a)(t))}))},e=0;e<localStorage.length;e++)t(e)})),Object(u.jsxs)("section",{children:[Object(u.jsxs)("section",{className:"main-section",children:[Object(u.jsx)("p",{className:"notice",children:"Type a name of your timer, in the input field and submit it to create a timer"}),Object(u.jsxs)("h1",{children:["Stop",Object(u.jsx)(l.d,{size:42}),"Watch"]}),Object(u.jsx)("div",{className:"input-section",children:Object(u.jsxs)("div",{className:"form",children:[Object(u.jsx)("input",{className:"input-field",value:n,onChange:function(t){o(t.target.value)}}),Object(u.jsx)("button",{className:"deploy-button",onClick:O,children:Object(u.jsx)(l.c,{size:13})})]})})]}),Object(u.jsx)("section",{className:"timer-list",children:Object(u.jsx)(m.a,{children:f.map((function(t){return Object(u.jsx)(j,{name:t,count:h(t),child:Object(u.jsx)("button",{className:"button button-delete",onClick:function(){return function(t){var e=f.filter((function(e){return e!==t}));localStorage.removeItem(t),d(e)}(t)},children:Object(u.jsx)(l.f,{size:16})})},t)}))})})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),d()},8:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.74bd0be7.chunk.js.map