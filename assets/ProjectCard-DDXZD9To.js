import{r as a,P as c,j as e,a as n}from"./index-BUtf8mP9.js";const x=t=>{var r;const{projectPopupOnOff:s,setProjectPopupOnOff:o}=a.useContext(c);return e.jsx(a.Fragment,{children:e.jsxs("div",{onClick:()=>o(!s),className:" border p-4 my-3 w-[100%] lg:w-[30%] lg:mx-2 lg:overflow-auto bg-white lg:cursor-pointer hover:shadow-lg trnasition duration-300 hover:backdrop-shadow-2xl",children:[e.jsx("img",{src:t.img,className:"my-2",alt:t.projName}),e.jsxs("div",{className:"projectCardContent",children:[e.jsx("h2",{className:"text-[18px] text-gray-700",children:t.projName}),e.jsx("p",{className:"text-gray-700 text-[13px]",children:t.projDescription})]}),e.jsx("div",{className:"btns mt-2",children:e.jsx(n,{to:t.codeLink,target:"_blank",className:"px-2 py-1 bg-gray-600 text-white text-[15px] rounded-[5px]",children:((r=t.codeLink)==null?void 0:r.split("/")[2])==="github.com"?"Code":"Show"})})]})})};export{x as default};
