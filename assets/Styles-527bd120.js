import{s as o,B as n,y as i,b as a}from"./index-37af907f.js";const p=o(n)(({theme:e})=>({textAlign:"center",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column",height:"100%","& div":{width:"100%"},"& .speed-box":{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"& .speed":{fontSize:e.spacing(8),whiteSpace:"nowrap",letterSpacing:"-2px",padding:"0px",margin:"0px",fontFamily:"serif","& span":{fontSize:"26px",opacity:.8}},"& .speed-control":{fontSize:e.spacing(3),whiteSpace:"nowrap",lineHeight:"28px",padding:"0px",margin:"0px",fontFamily:"serif","& span":{opacity:.8}}})),l=o(n)(({theme:e,delay:t=0})=>({width:"200px !important",height:"200px",left:"50%",top:"10%",marginLeft:"-100px",borderRadius:"50%",position:"absolute","&:before, &:after":{content:"''",position:"absolute",left:"50%",top:"50%",marginLeft:"-60px",marginTop:"-60px",width:"120px",height:"120px",borderRadius:"50%",border:"1px solid #fff",animation:`${r} 4s linear infinite`,animationDelay:`${t}s`},"&:after":{animationDelay:`${t-1}s`}})),r=i`
    0% {
      transform: scale(1);
      transformOrigin: 50% 50%;
      opacity: 1;
    }
    100% {
      transform: scale(2.5);
      transformOrigin: 50% 50%;
      opacity: 0;
    }
  `,f=o(n)(({theme:e})=>({...e.typography.body2,padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})),c=o(a(n))(({theme:e})=>({position:"relative",flex:1,display:"flex",scale:"1.3",alignItems:"flex-start",justifyContent:"space-around",transform:"perspective(400px) rotateX(45deg) rotateY(0deg) rotateZ(0deg)"})),d=o(n)(({theme:e,active:t})=>({width:"100%",height:"85px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:t?"white":"",borderRadius:"5px",border:t?"none":"1px solid #fff",color:t?"black":"white",fontSize:"16px",flexDirection:"column",animation:t?"bg 2s ease-in-out infinite":"none","@keyframes bg":{"0%":{backgroundColor:"rgba(255, 255, 255, 1)"},"50%":{backgroundColor:"rgba(255, 255, 255, 0.6)"},"100%":{backgroundColor:"rgba(255, 255, 255, 1)"}}}));export{c as AnimateBox,f as Item,d as RadioBox,p as StyleBox,l as WaveBox,r as wave};
