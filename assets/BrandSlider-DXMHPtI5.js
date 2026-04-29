import{r as h}from"./rolldown-runtime-CvE4vn4U.js";import{w as f}from"./vendor-eAOYfWaj.js";import{t as g}from"./vendor-react-IX9OWz7_.js";import{n as u}from"./vendor-router-DmY7G1l_.js";/* empty css                   */import{n as v,r as w,t as y}from"./partner-BAa5AvRW.js";var b="/assets/SUMITOMOupdated-B0Pv7KdH.webp",x=h(f()),t=g(),L=`
  .partners-section {
    padding: 20px 0;
    background: transparent !important;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .partner-card {
    border: 1px solid rgba(171, 167, 167, 0.83);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .partner-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .section-header {
    margin-bottom: 20px;
    background: transparent !important;
  }
  
  .section-header h2 {
    font-size: 2rem;
    color: #000000;
    margin: 0;
    background: transparent !important;
    padding: 0;
  }
  
  .section-header p {
    font-size: 1.1rem;
    max-width: 100vh;
    margin: 0 auto;
  }
  
  /* Partners Slider - Desktop */
  .partners-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  
  .partners-slider .partner-card {
    min-width: 220px;
    max-width: 260px;
  }
  
  /* Mobile Styles - Horizontal Scroll with Peek */
  @media (max-width: 768px) {
    .partners-section {
      padding: 10px 0;
      overflow: visible;
    }
    
    .partners-slider {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: stretch;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      padding: 15px 20px;
      padding-right: 40px;
      margin: 0;
      width: 100%;
      gap: 15px;
      
      /* Hide scrollbar */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    
    .partners-slider::-webkit-scrollbar {
      display: none;
    }
    
    .partners-slider .partner-card {
      flex: 0 0 calc(75% - 10px);
      min-width: calc(75% - 10px);
      max-width: calc(75% - 10px);
      scroll-snap-align: start;
      padding: 15px;
      box-sizing: border-box;
    }
    
    .partner-card h3 {
      font-size: 1rem;
      margin: 8px 0 4px;
    }
    
    .partner-card p {
      font-size: 0.85rem;
      margin: 0;
    }
    
    .partner-logo {
      height: 50px !important;
    }
    
    .partner-logo img {
      max-height: 40px !important;
      width: auto !important;
    }
  }
  
  /* Tablet Styles */
  @media (min-width: 769px) and (max-width: 1024px) {
    .partners-slider {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      padding: 15px 30px;
      padding-right: 60px;
      width: 100%;
      gap: 20px;
      
      /* Hide scrollbar */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    
    .partners-slider::-webkit-scrollbar {
      display: none;
    }
    
    .partners-slider .partner-card {
      flex: 0 0 calc(45% - 10px);
      min-width: calc(45% - 10px);
      max-width: calc(45% - 10px);
      scroll-snap-align: start;
    }
  }
  
  /* Small Mobile Styles */
  @media (max-width: 480px) {
    .partners-slider .partner-card {
      flex: 0 0 calc(80% - 10px);
      min-width: calc(80% - 10px);
      max-width: calc(80% - 10px);
    }
    
    .partners-slider {
      padding-left: 15px;
      padding-right: 30px;
      gap: 12px;
    }
  }
`,C=()=>((0,x.useEffect)(()=>{const e=document.getElementById("partnersSlider");if(!e)return;let n=!1,a,s;const i=r=>{n=!0,e.classList.add("active"),a=r.pageX-e.offsetLeft,s=e.scrollLeft},l=()=>{n=!1},d=()=>{n=!1},c=r=>{if(!n)return;r.preventDefault();const o=(r.pageX-e.offsetLeft-a)*1.5;e.scrollLeft=s-o},p=r=>{a=r.touches[0].pageX-e.offsetLeft,s=e.scrollLeft},m=r=>{const o=(r.touches[0].pageX-e.offsetLeft-a)*1.5;e.scrollLeft=s-o};return e.addEventListener("mousedown",i),e.addEventListener("mouseleave",l),e.addEventListener("mouseup",d),e.addEventListener("mousemove",c),e.addEventListener("touchstart",p),e.addEventListener("touchmove",m),()=>{e.removeEventListener("mousedown",i),e.removeEventListener("mouseleave",l),e.removeEventListener("mouseup",d),e.removeEventListener("mousemove",c),e.removeEventListener("touchstart",p),e.removeEventListener("touchmove",m)}},[]),(0,x.useEffect)(()=>{const e=document.createElement("style");return e.textContent=L,document.head.appendChild(e),()=>document.head.removeChild(e)},[]),(0,t.jsx)("div",{className:"import-wrapper",style:{background:"transparent"},children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",width:"100%",padding:"20px 0"},children:[(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",textAlign:"center",marginBottom:"20px"},children:(0,t.jsx)(u,{to:"/partners",style:{textDecoration:"none",color:"black"},children:(0,t.jsx)("h3",{className:"heading-underline",style:{fontSize:"clamp(1.5rem, 2.5vw, 2rem)",textAlign:"center",margin:"0 auto",display:"block"},children:"Our Partners"})})}),(0,t.jsx)("section",{className:"partners-section",style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)("div",{className:"partners-slider",id:"partnersSlider",children:[{name:"Sumitomo Electric",desc:"Connect with Innovation",logo:b,link:"https://global-sei.com/"},{name:"Deviser",desc:"Over 30 Years of Experience",logo:w,link:"https://deviserinstruments.com/"},{name:"SPEC Technology",desc:"CATV Product",logo:v,link:"https://spectechnology.com/"},{name:"Invas Technologies",desc:"Complete Telecom Solution",logo:y,link:"https://invas.in/"}].map((e,n)=>(0,t.jsxs)("a",{className:"partner-card",href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)("div",{className:"partner-logo",children:(0,t.jsx)("img",{src:e.logo,loading:"lazy",decoding:"async",alt:e.name})}),(0,t.jsx)("h3",{children:e.name}),(0,t.jsx)("p",{children:e.desc})]},n))})})]})}));export{C as default};
