import{c as d}from"./tslib.es6-9d30b114.js";import{i as w}from"./ResizeObserver.es-0f9f8adb.js";import{r as u}from"./index-09a01088.js";var E=function(e){return typeof e=="function"},T=!1;const y=T;function m(e,t){if(e===t)return!0;for(var r=0;r<e.length;r++)if(!Object.is(e[r],t[r]))return!1;return!0}function S(e){var t=u.useRef(e);return t.current=e,t}var _=function(e){y&&(E(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=S(e);u.useEffect(function(){return function(){t.current()}},[])};const g=_;var $=!!(typeof window<"u"&&window.document&&window.document.createElement);const R=$;function h(e,t){if(R){if(!e)return t;var r;return E(e)?r=e():"current"in e?r=e.current:r=e,r}}var A=function(e){var t=function(r,o,n){var a=u.useRef(!1),f=u.useRef([]),s=u.useRef([]),c=u.useRef();e(function(){var i,l=Array.isArray(n)?n:[n],v=l.map(function(p){return h(p)});if(!a.current){a.current=!0,f.current=v,s.current=o,c.current=r();return}(v.length!==f.current.length||!m(v,f.current)||!m(o,s.current))&&((i=c.current)===null||i===void 0||i.call(c),f.current=v,s.current=o,c.current=r())}),g(function(){var i;(i=c.current)===null||i===void 0||i.call(c),a.current=!1})};return t};const W=A;var L=W(u.useEffect);const b=L;function x(e){var t=u.useRef(0),r=d(u.useState(e),2),o=r[0],n=r[1],a=u.useCallback(function(f){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){n(f)})},[]);return g(function(){cancelAnimationFrame(t.current)}),[o,a]}var F=W(u.useLayoutEffect);const H=F;var I=R?H:b;const U=I;function j(e){var t=d(x(function(){var n=h(e);return n?{width:n.clientWidth,height:n.clientHeight}:void 0}),2),r=t[0],o=t[1];return U(function(){var n=h(e);if(n){var a=new w(function(f){f.forEach(function(s){var c=s.target,i=c.clientWidth,l=c.clientHeight;o({width:i,height:l})})});return a.observe(n),function(){a.disconnect()}}},[],e),r}export{j as u};
