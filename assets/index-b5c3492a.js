import{s as p,b as d,B as x,r as m,a4 as f,R as o,$ as g,j as u}from"./index-09a01088.js";const b=p(d(x))(({theme:e})=>({backgroundColor:"#445260",borderRadius:"20px",padding:"20px",height:"100%"})),Y=({delay:e=3e3,direction:t="left",children:n,...l})=>{const{dialogOpen:a}=f(i=>i),[s,r]=o.useState(!1);o.useEffect(()=>{r(a)},[a]);const c=g({opacity:s?1:0,transform:s?`${t==="left"?"translateX(0px) scale(1) rotateY(0deg)":"translateY(0px) scale(1) rotateY(0deg)"}`:`${t==="left"?"translateX(100px) scale(0.9) rotateY(10deg)":"translateY(200px) scale(0.9) rotateY(10deg)"}`,delay:e,config:{tension:100,friction:30}});return u.jsx(b,{style:c,...l,children:n})},G=m.memo(Y);export{G};
