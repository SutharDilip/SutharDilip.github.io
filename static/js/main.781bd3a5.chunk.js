(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(e,s,c){},121:function(e,s,c){},141:function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),i=c(33),n=c.n(i),l=(c(114),c(56)),j=c(16),r=c(0),d=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"max-width",children:[Object(r.jsxs)("div",{className:"logo",children:[" ",Object(r.jsxs)("a",{href:!0,children:["Dilip",Object(r.jsx)("span",{children:"Suthar"})]})]}),Object(r.jsx)("ul",{className:"menu",children:Object(r.jsxs)("li",{children:[" ",Object(r.jsx)(l.b,{to:"/",className:"menu-btn"})]})})]})})})},h=(c(121),c(13)),o=c(37),b=c(95),x=c.n(b),m=c(94),O=c.n(m),u=c(93),v=c.n(u),p=c(5),N=c(197),f=c(188),g=c(92),w=c.n(g),y=c(58),S=c.n(y),C=c(187),D=c(191),k=c(189),I=t.a.forwardRef((function(e,s){return Object(r.jsx)(k.a,Object(o.a)({elevation:6,ref:s,variant:"filled"},e))})),F=function(){var e=Object(a.useState)(""),s=Object(h.a)(e,2),c=s[0],i=s[1],n=t.a.useState(!1),l=Object(h.a)(n,2),j=l[0],d=l[1],b=function(e){i(Object(o.a)(Object(o.a)({},c),{},Object(p.a)({},e.target.name,e.target.value))),console.log(c)},x=function(e){e.preventDefault(),S.a.post("http://localhost:3005/api/message",Object(o.a)({},c)).then((function(e){i(e.data),d(!0)}))},m=function(e,s){"clickaway"!==s&&d(!1)};return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"text fas fa-paint",children:Object(r.jsxs)("h2",{children:[Object(r.jsx)(w.a,{})," You can contact me here"]})}),Object(r.jsx)("form",{onSubmit:x,children:Object(r.jsxs)(N.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(r.jsx)(f.a,{id:"username",name:"username",className:"my-2",label:"FullName",variant:"standard",onChange:b,required:!0}),Object(r.jsx)(f.a,{id:"email",name:"email",type:"email",className:"my-4",label:"Email ID",variant:"standard",onChange:b,required:!0}),Object(r.jsx)(f.a,{id:"contact",name:"contact",type:"number",className:"my-4",label:"Contact",variant:"standard",onChange:b,required:!0}),Object(r.jsx)(f.a,{label:"Description",name:"desc",className:"my-4",placeholder:"Describe your Project or Reason to Contact",id:"desc",onChange:b,required:!0})]})}),Object(r.jsx)("div",{className:"btn",children:Object(r.jsx)("button",{className:"btn btn-success",disabled:!c,onClick:x,children:"Send Message"})}),Object(r.jsx)(C.a,{spacing:2,sx:{width:"100%"},children:Object(r.jsx)(D.a,{open:j,autoHideDuration:6e3,onClose:m,children:Object(r.jsx)(I,{onClose:m,severity:"success",sx:{width:"100%"},children:"Your message has been sent successfully"})})})]})},M=c(193),L=c(195),A=c(194),B=c(198),E=t.a.forwardRef((function(e,s){return Object(r.jsx)(k.a,Object(o.a)({elevation:6,ref:s,variant:"filled"},e))})),J=function(){var e=t.a.useState(!1),s=Object(h.a)(e,2),c=s[0],a=s[1],i=function(e,s){"clickaway"!==s&&a(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:{width:"100%"},children:[Object(r.jsx)("div",{className:"head",style:{display:"flex",position:"absolute",top:"35%",left:"3%",margin:"15px"},children:Object(r.jsxs)("div",{className:"headtitle",children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)(v.a,{})," I'm Dilip Suthar"]}),Object(r.jsxs)("h2",{style:{color:"darkolivegreen",margin:"5px"},children:[Object(r.jsx)(O.a,{})," FullStack Developer"]}),Object(r.jsxs)("h4",{className:"number text-success",children:[Object(r.jsx)(x.a,{})," Let discuss in Deep :-",Object(r.jsx)("a",{href:"tel:704-329-9326",children:"704-329-9326"})]})]})}),Object(r.jsx)("div",{className:"main",children:Object(r.jsx)("img",{src:"..\\Img\\leone-venter-VieM9BdZKFo-unsplash.jpg",alt:"",srcset:"",style:{width:"100%",height:"100vh"}})})]}),Object(r.jsx)("div",{children:Object(r.jsx)("section",{className:"about ",id:"about ",children:Object(r.jsxs)("div",{className:"max-width ",children:[Object(r.jsx)(C.a,{spacing:2,sx:{width:"100%"},children:Object(r.jsx)(D.a,{open:c,autoHideDuration:6e3,onClose:i,children:Object(r.jsx)(E,{onClose:i,severity:"success",sx:{width:"100%"},children:"CV Dawnloaded Succesfully"})})}),Object(r.jsx)("h2",{className:"title ",children:"About me"}),Object(r.jsxs)("div",{className:"about-content ",children:[Object(r.jsx)("div",{className:"column left ",children:Object(r.jsx)("img",{src:"/Img/PicsArt_02-10-05.36.24.jpg",alt:" ",style:{objectFit:"fill",borderRadius:"50%"}})}),Object(r.jsxs)("div",{className:"cloumn right ",children:[Object(r.jsx)(M.a,{sx:{maxWidth:600,Height:300},children:Object(r.jsxs)(A.a,{children:[Object(r.jsxs)(L.a,{gutterBottom:!0,variant:"h5",component:"div",children:["I'm Dilip and Working as a"," ",Object(r.jsx)("span",{className:"text-danger",children:"FullStack Developer"})]}),Object(r.jsx)(L.a,{variant:"body2",color:"text.secondary",children:"Currently I'm pursing my B.Tech _Software Engineering in final year. I had experience in Sales and Marketing (IT Consultansy).I'm good in HTML , CSS and JS , React JS . I have experience in Node JS - Express Js , MongoDB , Bootstrap , Matarial UI. Currently working as FullStack Developer(MERN) at Stack Summation in Ahmedabad , Gujarat."})]})}),Object(r.jsx)("a",{onClick:function(){a(!0)},href:"..\\Img\\CURRICULUM  VITAE  - Dilip Suthar.docx",download:"Dilip Suthar",children:"Dawnload CV"})]})]})]})})}),Object(r.jsx)("div",{className:"main",children:Object(r.jsx)("section",{className:"services",id:"services",children:Object(r.jsxs)("div",{className:"max-width ",children:[Object(r.jsx)("h2",{className:"title ",children:"My Services"}),Object(r.jsxs)("div",{className:"serv-content ",children:[Object(r.jsx)("div",{className:"card ",children:Object(r.jsx)("div",{className:"box ",children:Object(r.jsx)(M.a,{sx:{maxWidth:400},className:"p-2",children:Object(r.jsxs)(B.a,{children:[Object(r.jsx)("i",{className:"fas fa-chart-line text-success"}),Object(r.jsxs)(A.a,{children:[Object(r.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Web Development (Mern)"}),Object(r.jsx)(L.a,{variant:"body2",color:"text.secondary",children:"Let's discuss in deep about project and Grow together !"})]})]})})})}),Object(r.jsx)("div",{className:"card ",children:Object(r.jsx)("div",{className:"box ",children:Object(r.jsx)(M.a,{sx:{maxWidth:400},className:"p-2",children:Object(r.jsxs)(B.a,{children:[Object(r.jsx)("i",{className:"fas fa-chart-line text-success"}),Object(r.jsxs)(A.a,{children:[Object(r.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Web Design"}),Object(r.jsx)(L.a,{variant:"body2",color:"text.secondary",children:"Let's Build amazing and fabulous looking website ! Let's contact and Discuss."})]})]})})})}),Object(r.jsx)("div",{className:"card ",children:Object(r.jsx)("div",{className:"box ",children:Object(r.jsx)(M.a,{sx:{maxWidth:400},className:"p-2",children:Object(r.jsxs)(B.a,{children:[Object(r.jsx)("i",{className:"fas fa-chart-line text-success"}),Object(r.jsxs)(A.a,{children:[Object(r.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"div",children:"App Development"}),Object(r.jsx)(L.a,{variant:"body2",color:"text.secondary",children:"Let's build growing and Amazing application ! Let's discuss futher and Grow together."})]})]})})})})]})]})})}),Object(r.jsx)("div",{children:Object(r.jsx)("section",{className:"skills",id:"skills",children:Object(r.jsxs)("div",{className:"max-width ",children:[Object(r.jsx)("h2",{className:"title ",children:"My Skills & Introduction"}),Object(r.jsxs)("div",{className:"skills-content ",children:[Object(r.jsxs)("div",{className:"column left ",children:[Object(r.jsx)("div",{className:"text ",children:"Personal Information"}),Object(r.jsxs)("div",{className:"Personal ",id:"Personal ",children:[Object(r.jsx)("p",{}),Object(r.jsxs)("h6",{children:["First Name :",Object(r.jsx)("span",{children:" Dilip "})]}),Object(r.jsxs)("h6",{children:["Last Name : ",Object(r.jsx)("span",{children:" Suthar"})]}),Object(r.jsxs)("h6",{children:["Age ",Object(r.jsx)("span",{children:": 21"})]}),Object(r.jsxs)("h6",{children:["Freelance ",Object(r.jsx)("span",{children:": Available"})]}),Object(r.jsxs)("h6",{children:["Email ID ",Object(r.jsx)("span",{children:": suthardips123000@gmail.co"})]}),Object(r.jsxs)("h6",{children:["Nationality ",Object(r.jsx)("span",{children:": Indian"})]}),Object(r.jsxs)("h6",{children:["Langueges ",Object(r.jsx)("span",{children:": English , Hindi , Gujarati"})]}),Object(r.jsx)("p",{})]})]}),Object(r.jsxs)("div",{className:"column right ",children:[Object(r.jsxs)("div",{className:"bars ",children:[Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("span",{children:"HTML"}),Object(r.jsx)("span",{children:"70%"})]}),Object(r.jsx)("div",{className:"line html "})]}),Object(r.jsxs)("div",{className:"bars ",children:[Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("span",{children:"CSS"}),Object(r.jsx)("span",{children:"65%"})]}),Object(r.jsx)("div",{className:"line CSS "})]}),Object(r.jsxs)("div",{className:"bars ",children:[Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("span",{children:"JavaScript"}),Object(r.jsx)("span",{children:"50%"})]}),Object(r.jsx)("div",{className:"line JS "})]}),Object(r.jsxs)("div",{className:"bars ",children:[Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("span",{children:"React JS"}),Object(r.jsx)("span",{children:"45%"})]}),Object(r.jsx)("div",{className:"line JS "})]}),Object(r.jsxs)("div",{className:"bars ",children:[Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("span",{children:"Node Js"}),Object(r.jsx)("span",{children:"35%"})]}),Object(r.jsx)("div",{className:"line NodeJs "})]}),Object(r.jsxs)("div",{className:"bars ",children:[Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("span",{children:"MongoDB"}),Object(r.jsx)("span",{children:"30%"})]}),Object(r.jsx)("div",{className:"line MySQL "})]})]})]})]})})}),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"details d-flex justify-content-center",style:{position:"relative",height:"100vh"},children:[Object(r.jsx)("div",{className:"main"}),Object(r.jsx)("section",{className:"contact container",id:"contact",style:{position:"absolute",top:"-10px"},children:Object(r.jsxs)("div",{className:"max-width",children:[Object(r.jsx)("h2",{className:"title",children:"Contact Me"}),Object(r.jsx)("div",{className:"details d-flex",children:Object(r.jsxs)("div",{className:"contact-content",children:[Object(r.jsxs)("div",{className:"column left",children:[Object(r.jsx)("div",{className:"text fas fa-paint ",children:"Let's Connect and Grow"}),Object(r.jsx)("div",{className:"d-flex flex-wrap",style:{wordWrap:"normal"},children:Object(r.jsx)("p",{children:"Feel free to get in touch with me.I am always open to discussing new project , creative ideas or opportunity to be part of your vision !"})}),Object(r.jsxs)("div",{className:"icons d-flex flex-wrap",children:[Object(r.jsx)("i",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/dilip-suthar-a741520/ ",children:"LinkedIn"})}),Object(r.jsx)("i",{children:Object(r.jsx)("a",{href:"https://www.instagram.com/sthr__denny_741/ ",children:"Instagram"})}),Object(r.jsx)("i",{children:Object(r.jsx)("a",{href:"https://twitter.com/ ",children:"Twitter"})}),Object(r.jsx)("i",{children:Object(r.jsx)("a",{href:"https://en-gb.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=100 ",children:"Facebook"})})]}),Object(r.jsxs)("div",{className:"icon ",children:[Object(r.jsx)("div",{className:"row ",children:Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("div",{className:"head ",children:"Name"}),Object(r.jsx)("div",{className:"sub-title ",children:"Dilip Suthar"})]})}),Object(r.jsxs)("div",{className:"row ",children:[Object(r.jsx)("i",{className:"fas fa-map-marker-alt "}),Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("div",{className:"head ",children:"Address"}),Object(r.jsx)("div",{className:"sub-title ",children:"Gujarat ,Ahmedabad"})]})]}),Object(r.jsxs)("div",{className:"row ",children:[Object(r.jsx)("i",{className:"fas fa-envelope "}),Object(r.jsxs)("div",{className:"info ",children:[Object(r.jsx)("div",{className:"head ",children:" Email Id"}),Object(r.jsx)("div",{className:"sub-title ",children:"suthardips123000@gmail.com"})]})]})]})]}),Object(r.jsx)("div",{className:"column right my-5",children:Object(r.jsx)(F,{})})]})})]})})]})})]})},R=function(e){return t.a.useEffect((function(){S.a.get("http://localhost:8080/api/messages/list",{username:e.match.params.username,password:e.match.params.password}).then((function(e){console.log(e.data)}))})),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Messages"}),Object(r.jsxs)("p",{children:["USERNAME: ",e.match.params.username]}),Object(r.jsxs)("p",{children:["PASSWORD: ",e.match.params.password]})]})};var W=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/messages/:username/:password",component:R}),Object(r.jsx)(j.a,{exact:!0,path:"/",component:J})]})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,199)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,i=s.getLCP,n=s.getTTFB;c(e),a(e),t(e),i(e),n(e)}))};n.a.render(Object(r.jsx)(W,{}),document.getElementById("root")),P()}},[[141,1,2]]]);
//# sourceMappingURL=main.781bd3a5.chunk.js.map