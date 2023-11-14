import{c as u,b as h,s as p,P as j,r as C,u as m,d as f,_ as l,j as g,e as v,f as b,A as S,U as A,D as x}from"./index-0032d6f0.js";function P(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function B(t){return u("MuiCard",t)}h("MuiCard",["root"]);const E=["className","raised"],F=t=>{const{classes:e}=t;return b({root:["root"]},B,e)},K=p(j,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),T=C.forwardRef(function(e,o){const s=m({props:e,name:"MuiCard"}),{className:a,raised:n=!1}=s,r=f(s,E),i=l({},s,{raised:n}),d=F(i);return g.jsx(K,l({className:v(d.root,a),elevation:n?8:void 0,ref:o,ownerState:i},r))}),Z=T;function W(t){return u("MuiCardContent",t)}h("MuiCardContent",["root"]);const D=["className","component"],L=t=>{const{classes:e}=t;return b({root:["root"]},W,e)},O=p("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),V=C.forwardRef(function(e,o){const s=m({props:e,name:"MuiCardContent"}),{className:a,component:n="div"}=s,r=f(s,D),i=l({},s,{component:n}),d=L(i);return g.jsx(O,l({as:n,className:v(d.root,a),ownerState:i,ref:o},r))}),tt=V;function q(t){return u("MuiSkeleton",t)}h("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const z=["animation","className","component","height","style","variant","width"];let c=t=>t,y,R,$,M;const G=t=>{const{classes:e,variant:o,animation:s,hasChildren:a,width:n,height:r}=t;return b({root:["root",o,s,a&&"withChildren",a&&!n&&"fitContent",a&&!r&&"heightAuto"]},q,e)},H=S(y||(y=c`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),I=S(R||(R=c`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),J=p("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],o.animation!==!1&&e[o.animation],o.hasChildren&&e.withChildren,o.hasChildren&&!o.width&&e.fitContent,o.hasChildren&&!o.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const o=P(t.shape.borderRadius)||"px",s=X(t.shape.borderRadius);return l({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:A(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${o}/${Math.round(s/.6*10)/10}${o}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&x($||($=c`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),H),({ownerState:t,theme:e})=>t.animation==="wave"&&x(M||(M=c`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),I,(e.vars||e).palette.action.hover)),Q=C.forwardRef(function(e,o){const s=m({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:n,component:r="span",height:i,style:d,variant:U="text",width:_}=s,w=f(s,z),k=l({},s,{animation:a,component:r,variant:U,hasChildren:!!w.children}),N=G(k);return g.jsx(J,l({as:r,ref:o,className:v(N.root,n),ownerState:k},w,{style:l({width:_,height:i},d)}))}),et=Q;export{Z as C,et as S,tt as a};
