(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{21:function(e,s,t){},24:function(e,s,t){},44:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(14),n=t.n(a),i=(t(21),t(3)),r=t(4),l=t(6),j=t(5),o=t(11),d=t(15),h=t.n(d),b=(t(24),t(2)),m=t.n(b),O=t(0),u=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsxs)("li",{className:"dropdown current",children:[Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"}),Object(O.jsxs)("div",{class:"dropdown-content-home",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#specification",children:"Insight"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#benefits",children:"Certification Benefits"})})]})]}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#ourexpertise",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#consulting",children:"Consulting Service"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#service",children:"Our Services"})}),Object(O.jsx)("li",{children:Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("span",{children:"consulting Process"}),Object(O.jsxs)("div",{class:"dropdown-content",children:[Object(O.jsx)("p",{children:"GAP ANALYSIS"}),Object(O.jsx)("p",{children:"Awarness Training"}),Object(O.jsx)("p",{children:"Documentation Support"}),Object(O.jsx)("p",{children:"Internal Audit Training"}),Object(O.jsx)("p",{children:"Internal Audit"}),Object(O.jsx)("p",{children:"Exnternal Audit"})]})]})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:e})}),Object(O.jsx)(m.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[s,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.a,{bottom:!0,duration:2e3,children:Object(O.jsx)("ul",{className:"social"})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(m.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"}),Object(O.jsxs)("li",{children:["Design by"," ",Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Saji"})]})]})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),p=(c.Component,{}),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(i.a)(this,t);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=s.call.apply(s,[this].concat(a))).handleSubmit=function(e){e.preventDefault(),window.emailjs.send("service_b6ed0lx","template_9vohlof",p).then((function(e){alert("Thanks for Your The Query...!"),document.getElementById("contactForm").reset(),console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))},e.Name=function(e){console.log(p),p.name=e.target.value},e.email=function(e){console.log(p),p.to_email=e.target.value},e.subject=function(e){console.log(p),p.subject=e.target.value},e.message=function(e){console.log(p),p.message=e.target.value},e}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone,i=this.props.data.contactmessage;return Object(O.jsxs)("section",{id:"contact",children:[Object(O.jsx)(b.Fade,{bottom:!0,duration:1e3,children:Object(O.jsx)("div",{className:"row section-head",children:Object(O.jsx)("div",{className:"ten columns",children:Object(O.jsx)("h2",{className:"lead",children:i})})})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(b.Slide,{left:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"eight columns",children:[Object(O.jsx)("form",{id:"contactForm",name:"contactForm",children:Object(O.jsxs)("fieldset",{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.Name})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.email})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.subject})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage",onChange:this.message})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"submit",onClick:this.handleSubmit,children:"Submit"}),Object(O.jsx)("span",{id:"image-loader",children:Object(O.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(O.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(O.jsxs)("div",{id:"message-success",children:[Object(O.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(O.jsx)("br",{})]})]})}),Object(O.jsx)(b.Slide,{right:!0,duration:1e3,children:Object(O.jsx)("aside",{className:"four columns footer-widgets",children:Object(O.jsxs)("div",{className:"widget widget_contact",children:[Object(O.jsx)("h4",{children:"Address and Phone"}),Object(O.jsxs)("p",{className:"address",children:[e,Object(O.jsx)("br",{}),s," ",Object(O.jsx)("br",{}),t,", ",c," ",a,Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:n})]})]})})})]})]})}}]),t}(c.Component),v=t(16),N=t.n(v),g=0,y=(c.Component,function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.bio,s=this.props.data.subBio;return Object(O.jsx)("section",{id:"ourexpertise",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"Our Expertise"}),Object(O.jsx)("p",{children:e}),Object(O.jsx)("p",{children:s}),Object(O.jsx)("div",{className:"row"})]}),Object(O.jsxs)("div",{className:"three columns main-col",children:[Object(O.jsx)("h2",{children:"OUR SKILLS"}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"ISO Certification"]}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"CE Mark"]}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"HACCP"]}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"GDPR"]}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"HIPAA"]}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"CMMI"]}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"SOC 1 & SOC 2"]}),Object(O.jsxs)("p",{className:"skills",children:[Object(O.jsxs)("strong",{children:[Object(O.jsx)("b",{className:"bold",children:"."})," "]}),"SMETA"]})]})]})})}}]),t}(c.Component)),k=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.consulting,s=this.props.data.subConsulting,t=this.props.data.training,c=this.props.data.Documentation,a=this.props.data.Support,n=this.props.data.Guaranted;return Object(O.jsx)("section",{id:"consulting",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"six columns main-col pad",children:[Object(O.jsx)("h2",{children:"Consulting Services"}),Object(O.jsx)("p",{children:e}),Object(O.jsx)("p",{children:s})]}),Object(O.jsxs)("div",{className:"six columns main-col",children:[Object(O.jsx)("div",{className:"six columns main-col pop ",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"training",children:"Training"}),Object(O.jsx)("p",{className:"textpage",children:t})]})}),Object(O.jsx)("div",{className:"six columns main-col pop",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"documentation",children:"Documentation"}),Object(O.jsx)("p",{className:"textpage",children:c})]})}),Object(O.jsx)("div",{className:"six columns main-col pop ",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"support",children:"Support"}),Object(O.jsx)("p",{className:"textpage",children:a})]})}),Object(O.jsx)("div",{className:"six columns main-col pop",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:"guaranted",children:"Guaranted"}),Object(O.jsx)("p",{className:"textpage",children:n})]})})]})]})})}}]),t}(c.Component),C=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"loopName",value:function(){return this.props.data.standards.map((function(e,s){return Object(O.jsxs)("div",{className:"four columns main-col blocks",children:[Object(O.jsx)("h4",{children:Object(O.jsx)("a",{href:"iso-9001-certification.html",children:e.name})}),Object(O.jsxs)("p",{children:[e.tag," "]})]})}))}},{key:"render",value:function(){return this.props.data?Object(O.jsx)("section",{id:"service",children:Object(O.jsxs)("div",{className:" serviceBox",children:[Object(O.jsxs)(m.a,{bottom:!0,children:[Object(O.jsx)("h5",{children:"OUR SERVICES"}),Object(O.jsxs)("h2",{className:"responsive-headline",children:[Object(O.jsx)("span",{children:"What We"}),"Do Best"]})]}),this.loopName()]})}):null}}]),t}(c.Component),S=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"loopName",value:function(){return this.props.data.Specification.map((function(e,s){return Object(O.jsxs)("div",{className:"three columns main-col blocks",children:[Object(O.jsx)("h1",{className:e.image,children:" "}),Object(O.jsx)("h1",{children:e.number}),Object(O.jsxs)("h4",{children:[e.name," "]})]})}))}},{key:"render",value:function(){return this.props.data?Object(O.jsx)("section",{id:"specification",children:Object(O.jsx)("div",{className:" specificationBox",children:this.loopName()})}):null}}]),t}(c.Component),w=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"loopName",value:function(){return this.props.data.Benefits.map((function(e,s){return Object(O.jsxs)("div",{className:"four columns main-col blocks",children:[Object(O.jsx)("h1",{className:e.image,children:" "}),Object(O.jsx)("h1",{children:e.number}),Object(O.jsxs)("h4",{children:[e.name," "]})]})}))}},{key:"render",value:function(){return this.props.data?Object(O.jsx)("section",{id:"benefits",children:Object(O.jsxs)("div",{className:" benefitsBox",children:[Object(O.jsxs)(m.a,{bottom:!0,children:[Object(O.jsx)("h5",{children:"CERTIFICATION BENEFITS"}),Object(O.jsxs)("h2",{className:"responsive-headline",children:[Object(O.jsx)("span",{children:"Some Of "}),"The Advantages"]}),Object(O.jsx)("hr",{})]}),this.loopName()]})}):null}}]),t}(c.Component),D=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"networks",value:function(e){return this.props.data.social.map((function(s,t){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:s.url+e.social[t],children:Object(O.jsx)("i",{className:s.className})})},s.name)}))}},{key:"loopName",value:function(){var e=this;return this.props.data.team.map((function(s,t){return Object(O.jsxs)("div",{className:"four columns main-col blocks",children:[Object(O.jsx)("img",{className:"profile-pic",src:"images/"+s.image+".jpg",alt:"Pic"}),Object(O.jsx)("h5",{children:s.name}),Object(O.jsx)("h6",{children:s.designation}),Object(O.jsx)("p",{children:s.content}),Object(O.jsx)("div",{children:Object(O.jsx)("ul",{className:"social-links",children:e.networks(s)})})]})}))}},{key:"render",value:function(){return this.props.data?Object(O.jsx)("section",{id:"team",children:Object(O.jsxs)("div",{className:" teamBox",children:[Object(O.jsxs)(m.a,{bottom:!0,children:[Object(O.jsx)("h5",{children:"OUR TEAM"}),Object(O.jsx)("h2",{className:"responsive-headline",children:"Who We Are"}),Object(O.jsx)("hr",{})]}),this.loopName()]})}):null}}]),t}(c.Component),A=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return this.props.data?Object(O.jsx)("section",{id:"testimonial",children:Object(O.jsx)("div",{className:"testimonialBox",children:Object(O.jsxs)(m.a,{bottom:!0,children:[Object(O.jsx)("h5",{children:"FEEDBACKS"}),Object(O.jsx)("h1",{children:"People Say Nicest Thing"}),Object(O.jsx)("hr",{})]})})}):null}}]),t}(c.Component),E=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(u,{data:this.state.resumeData.main}),Object(O.jsx)(y,{data:this.state.resumeData.main}),Object(O.jsx)(k,{data:this.state.resumeData.main}),Object(O.jsx)(C,{data:this.state.resumeData.main}),Object(O.jsx)(S,{data:this.state.resumeData.main}),Object(O.jsx)(w,{data:this.state.resumeData.main}),Object(O.jsx)(D,{data:this.state.resumeData.main}),Object(O.jsx)(A,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(x,{data:this.state.resumeData.main})]})}}]),t}(c.Component),I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(E,{}),document.getElementById("root")),I()}},[[44,1,2]]]);
//# sourceMappingURL=main.fb1387ce.chunk.js.map