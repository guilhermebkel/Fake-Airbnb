(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/camera.6a6f4b6e.svg"},35:function(e,t,a){e.exports=a.p+"static/media/logo.74052802.svg"},36:function(e,t,a){e.exports=a(67)},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),s=a(16),u=a(7),o=a(5),i=a.n(o),p=a(8),m=a(10),h=a(11),b=a(13),d=a(12),f=a(14),E=a(31),v=a.n(E).a.create({baseURL:"https://fakeairbnbapp.herokuapp.com"}),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={email:""},a.handleSubmit=function(){var e=Object(p.a)(i.a.mark((function e(t){var n,r,c,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.post("/sessions",{email:a.state.email});case 3:if(n=e.sent,r=n.data,c=r.success,l=r.error,s=r.data,!c){e.next=10;break}return e.abrupt("return",localStorage.setItem("user",s._id));case 10:return e.abrupt("return",alert(l));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Show ",r.a.createElement("strong",null,"spots")," for developers and find ",r.a.createElement("strong",null,"talents")," for your brand."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"email"},"E-MAIL *"),r.a.createElement("input",{type:"email",id:"email",placeholder:"Type your email...",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("button",{stype:"submit",className:"btn"},"Login")))}}]),t}(n.Component),y=(a(59),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={spots:[]},a.loadSpots=Object(p.a)(i.a.mark((function e(){var t,n,r,c,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("user"),e.next=3,v.get("/dashboard",{headers:{user_id:t}});case 3:if(n=e.sent,r=n.data,c=r.success,l=r.error,s=r.data,!c){e.next=10;break}return e.abrupt("return",a.setState({spots:s}));case 10:return e.abrupt("return",alert(l));case 11:case"end":return e.stop()}}),e)}))),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadSpots()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"spot-list"},this.state.spots.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("img",{src:e.thumbnail_url,alt:""}),r.a.createElement("strong",null,e.company),r.a.createElement("span",null,e.price?"R$".concat(e.price,"/dia"):"FREE"))}))),r.a.createElement(s.b,{to:"/new"},r.a.createElement("button",{className:"btn"},"Create new spot")))}}]),t}(n.Component)),O=a(34),w=a.n(O),j=(a(65),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={company:"",techs:"",price:"",thumbnail:null,preview:""},a.handleChange=function(){var e=Object(p.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({thumbnail:t,preview:t?URL.createObjectURL(t):null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(){var e=Object(p.a)(i.a.mark((function e(t){var n,r,c,l,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=localStorage.getItem("user"),(r=new FormData).append("thumbnail",a.state.thumbnail),r.append("company",a.state.company),r.append("techs",a.state.techs),r.append("price",a.state.price),e.next=9,v.post("/spots",r,{headers:{user_id:n}});case 9:if(c=e.sent,l=c.data,s=l.success,u=l.error,!s){e.next=15;break}return e.abrupt("return",a.props.history.push("/dashboard"));case 15:return e.abrupt("return",alert(u));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{id:"thumbnail",style:{backgroundImage:"url(".concat(this.state.preview,")")},className:this.state.thumbnail?"has-thumbnail":""},r.a.createElement("input",{type:"file",onChange:function(t){return e.handleChange(t.target.files[0])}}),r.a.createElement("img",{src:w.a,alt:""})),r.a.createElement("label",{htmlFor:"company"},"BRAND *"),r.a.createElement("input",{id:"company",placeholder:"Your brand name...",value:this.state.company,onChange:function(t){return e.setState({company:t.target.value})}}),r.a.createElement("label",{htmlFor:"techs"},"TECHNOLOGIES * ",r.a.createElement("span",null,"(comma separated)")),r.a.createElement("input",{id:"techs",placeholder:"Used technologies ...",value:this.state.techs,onChange:function(t){return e.setState({techs:t.target.value})}}),r.a.createElement("label",{htmlFor:"price"},"DIARY INCOME * ",r.a.createElement("span",null,"(blank for free income)")),r.a.createElement("input",{id:"price",placeholder:"Diary income ...",value:this.state.price,onChange:function(t){return e.setState({price:t.target.value})}}),r.a.createElement("button",{type:"submit",className:"btn"},"Create"))}}]),t}(n.Component));function k(){return r.a.createElement(s.a,{basename:"/Fake-Airbnb"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:g}),r.a.createElement(u.a,{path:"/dashboard",component:y}),r.a.createElement(u.a,{path:"/new",component:j})))}a(66);var S=a(35),x=a.n(S);var C=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:x.a,alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement(k,null)))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.76aa18e4.chunk.js.map