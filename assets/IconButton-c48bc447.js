import{l as z,m as R,s as y,a6 as C,z as r,_ as t,N as u,r as x,u as B,n as $,j as m,p as I,q as h}from"./index-0c00848c.js";function k(o){return R("MuiIconButton",o)}const M=z("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),_=M,j=["edge","children","className","color","disabled","disableFocusRipple","size"],E=o=>{const{classes:a,disabled:e,color:s,edge:n,size:i}=o,l={root:["root",e&&"disabled",s!=="default"&&`color${r(s)}`,n&&`edge${r(n)}`,`size${r(i)}`]};return h(l,k,a)},N=y(C,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.color!=="default"&&a[`color${r(e.color)}`],e.edge&&a[`edge${r(e.edge)}`],a[`size${r(e.size)}`]]}})(({theme:o,ownerState:a})=>t({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:o,ownerState:a})=>{var e;const s=(e=(o.vars||o).palette)==null?void 0:e[a.color];return t({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&t({color:s==null?void 0:s.main},!a.disableRipple&&{"&:hover":t({},s&&{backgroundColor:o.vars?`rgba(${s.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(s.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${_.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),O=x.forwardRef(function(a,e){const s=B({props:a,name:"MuiIconButton"}),{edge:n=!1,children:i,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:v="medium"}=s,b=$(s,j),p=t({},s,{edge:n,color:g,disabled:c,disableFocusRipple:d,size:v}),f=E(p);return m.jsx(N,t({className:I(f.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:e,ownerState:p},b,{children:i}))}),U=O;export{U as I};
