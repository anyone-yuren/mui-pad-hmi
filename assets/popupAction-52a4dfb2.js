import{j as e}from"./index-0c00848c.js";import{PopupActionStyleComponents as m}from"./popupAction.styled-e60586cb.js";import{MenuBarStyleComponents as h}from"./menuBar.styled-6bd164b4.js";import{u as j}from"./map-910ebae8.js";import{r,i as o}from"./createSvgIcon-00fa23dc.js";import{I as g}from"./IconButton-c48bc447.js";import"./Button-7b2d5861.js";import"./useId-e8604f24.js";import"./useControlled-fba358da.js";var i={},M=o;Object.defineProperty(i,"__esModule",{value:!0});var c=i.default=void 0,y=M(r()),_=e,b=(0,y.default)((0,_.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");c=i.default=b;var n={},C=o;Object.defineProperty(n,"__esModule",{value:!0});var p=n.default=void 0,I=C(r()),S=e,R=(0,I.default)((0,S.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");p=n.default=R;var l={},A=o;Object.defineProperty(l,"__esModule",{value:!0});var u=l.default=void 0,z=A(r()),P=e,$=(0,z.default)((0,P.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");u=l.default=$;const{MapActionPopup:k,MapActionPopupTitle:L}=m,{MenuIconItem:t,MenuIconList:D}=h,H=f=>{const{type:a}=f,{setMapPopupActionConfig:s}=j(x=>({setMapPopupActionConfig:x.setMapPopupActionConfig})),d=()=>e.jsxs(k,{children:[e.jsx(L,{children:"操作列表"}),e.jsxs(D,{style:{width:200},children:[e.jsx(t,{children:"镇定"}),e.jsx(t,{children:"添加"}),e.jsx(t,{children:"保存地图"}),e.jsx(t,{hideLine:!0,onClick:()=>{s({visible:!1,type:void 0})},children:"结束构图"})]}),e.jsx("div",{style:{width:300,height:220,borderRadius:20,background:"#445260",border:"1px solid black",textAlign:"center",paddingBlock:10},children:e.jsx("div",{children:"新观测到的反光板的坐标"})})]}),v={ReflectorAddMap:d,ReflectorUpdateMap:d,SlamMapList:()=>e.jsxs("div",{style:{width:400,height:"100%",position:"absolute",right:219,top:0,background:"#3F4E5C",zIndex:1,borderRadius:20},children:[e.jsxs("div",{style:{height:76,display:"flex",alignItems:"center",marginInline:20,borderBottom:"1px solid #8f9192"},children:[e.jsx("div",{style:{fontSize:24,color:"white"},children:"地图列表"}),e.jsx("div",{style:{flex:1,fontSize:14,color:"#fffff",paddingLeft:10},children:"点击尾部icon更多操作"}),e.jsx(c,{style:{color:"white"},fontSize:"large",onClick:()=>{s({visible:!1,type:void 0})}})]}),e.jsxs("div",{style:{height:76,display:"flex",alignItems:"center",marginInline:20,borderBottom:"1px solid #8f9192"},children:[e.jsx(p,{style:{color:"#00D1D1"}}),e.jsx("div",{style:{flex:1,fontSize:20,marginLeft:12},children:"map139754"}),e.jsx(g,{"aria-label":"Example",style:{outline:"none"},children:e.jsx(u,{})})]})]})};return e.jsx(e.Fragment,{children:a&&v[a]()})};export{H as default};
