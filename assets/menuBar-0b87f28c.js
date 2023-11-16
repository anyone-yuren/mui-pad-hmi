import{j as l,S as v,r as f}from"./index-09a01088.js";import{MenuBarStyleComponents as k}from"./menuBar.styled-591f5363.js";import{u as Q}from"./map-6e2f008f.js";import"./Button-7dc9e1b1.js";function h({isActive:r=!1,fontSize:i=60}){return l.jsx(v,{sx:{fontSize:i},children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"60",height:"47.755126953125",viewBox:"0 0 60 47.755126953125",children:l.jsx("g",{children:l.jsx("path",{d:"M22.0664,6.16543L29.573,13.6734L33.0357,10.2107L27.7229,4.89797L36.1225,4.89797Q39.9832,4.89797,43.5101,6.38983Q46.9162,7.83057,49.5428,10.4572Q52.1694,13.0838,53.6102,16.4899Q55.102,20.0168,55.102,23.8773Q55.1042,28.8953,52.625,33.2582Q50.3402,37.2788,46.4987,39.7737L50.0212,43.2961Q54.5228,40.0749,57.1565,35.1875Q60,29.9107,60,23.8776Q60,19.019,58.1239,14.5832Q56.3117,10.2983,53.0067,6.99333Q49.7017,3.68836,45.4168,1.87609Q40.981,0.0000139475,36.1225,0.0000139475L23.8799,0.0000139475L23.8776,0.0000312328L23.4971,0.00290489L23.1944,0.0100272L23.0858,0.0134783Q19.9345,0.113618,16.9342,1.02546L22.071,6.16233L22.0664,6.16543ZM1.87607,33.1719Q0.0000025034,28.7361,0.0000025034,23.8776Q0.0000025034,17.8445,2.8435,12.5677Q5.47722,7.6802,9.97886,4.459L13.5013,7.98142Q9.65984,10.4763,7.37505,14.4969Q4.89578,18.8598,4.89796,23.8778Q4.89796,27.679,6.3458,31.1601Q7.74402,34.522,10.2997,37.1382Q12.8524,39.7515,16.1769,41.2292Q19.6129,42.7564,23.3954,42.8508L23.8695,42.8571L32.2771,42.8572L26.9628,37.5429L30.4255,34.0801L31.4371,35.0917L31.4325,35.0979L43.0662,46.7301Q40.0734,47.6408,36.9141,47.7417L36.8078,47.745L36.5015,47.7522L36.1177,47.7551L23.8776,47.7551Q19.019,47.7551,14.5832,45.879Q10.2983,44.0668,6.99332,40.7618Q3.68835,37.4568,1.87607,33.1719Z",fillRule:"evenodd",fill:"#FFFFFF",fillOpacity:"1"})})})})}const{TabsButton:s,TabsButtonContainer:g,MenuBarContainer:x,SwitchAngleView:m,MenuIconList:b,MenuIconItem:w}=k,S=r=>{const{lockAgvView:i,setLockAgvView:p,setMapPopupActionConfig:c,activePanel:t,setActivePanel:a}=Q(e=>({lockAgvView:e.lockAgvView,setLockAgvView:e.setLockAgvView,setMapPopupActionConfig:e.setMapPopupActionConfig,activePanel:e.activePanel,setActivePanel:e.setActivePanel})),u=f.useMemo(()=>t==="Reflector",[t]);function L(){var e=document.createElement("input");e.type="file",e.style.display="none",document.body.appendChild(e),e.click(),e.onchange=function(n){const d=this.files;console.log("onchange",d)},e.oncancel=function(){console.log("cancel")}}const o={Reflector:[{title:"拓展地图",callback:()=>{console.log("测试拓展地图"),c({visible:!0,type:"ReflectorUpdateMap"})}},{title:"新建地图",callback:()=>{c({visible:!0,type:"ReflectorAddMap"})}},{title:"导入地图",callback:()=>{L()}},{title:"导出地图",callback:()=>{}},{title:"重新定位",callback:()=>{}}],Slam:[{title:"新建",callback:()=>{}},{title:"拓展地图",callback:()=>{}},{title:"地图校正",callback:()=>{}},{title:"智能重定位",callback:()=>{}},{title:"导出地图",callback:()=>{}},{title:"导入地图",callback:()=>{}},{title:"地图列表",callback:()=>{c({visible:!0,type:"SlamMapList"})}}]};return l.jsxs(x,{children:[l.jsxs(g,{variant:"outlined",children:[l.jsx(s,{active:t,name:"Reflector",onClick:()=>{a("Reflector")},children:"反光板"}),l.jsx(s,{active:t,name:"Slam",onClick:()=>{a("Slam")},children:"SLAM"})]}),l.jsx(b,{children:o[t].map((e,n)=>l.jsx(w,{hideLine:n===o[t].length-1,onClick:e.callback,children:e.title},e.title+n))}),u&&l.jsxs(m,{isLock:i,onClick:()=>{p(!i)},children:[l.jsx(h,{}),l.jsx("span",{}),l.jsx("div",{children:"切换视角"}),l.jsx("div",{children:i?"小车视角":"地图视角"})]})]})};export{S as default};
