(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(20),s=a.n(c),i=a(106),l=(a(54),a(56),a(9)),o=a(10),m=a(12),u=a(11),d=a(13),p=a(108),h=a(105),E=(a(58),a(60),a(16)),b=a(4),v=(a(66),document.getElementById("portal")),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).el=document.createElement("div"),a.el.classList.add("portal-wrapper"),a.elin=document.createElement("div"),a.elin.classList.add("portal"),a.el.appendChild(a.elin),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){v.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){v.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return s.a.createPortal(e,this.el)}}]),t}(n.Component),y=(a(68),"DB_FETCH"),k="DB_FETCH_SUCCESS",O="DB_FETCH_FAILED",j="DB_ADD_NEW_ENTRY",g="DB_ADD_NEW_ENTRY_SUCCESS",C="DB_ADD_NEW_ENTRY_FAILED",w="DB_EDIT_ITEM",N="DB_EDIT_ITEM_SUCCESS",D="DB_EDIT_ITEM_FAILED",S="SET_LOADING",I="ON_FIND_TICKETS";function T(e){return{type:w,payload:e}}var _,x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).submitForm=function(e){e.preventDefault();var t={},n=a.props.onCancel;for(var r in e.target)if(e.target.hasOwnProperty(r))switch(e.target[r].name){case"summary":t.summary=e.target[r].value;break;case"description":t.description=e.target[r].value;break;case"severity":t.severity=e.target[r].value}t.status="open",t.updated="",t.created=(new Date).toISOString(),a.props.addEntry(t),n()},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.onCancel;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"newissue-header"},"New Issue"),r.a.createElement(b.k,{onSubmit:this.submitForm},r.a.createElement(b.m,{row:!0},r.a.createElement(b.q,{for:"summary",sm:2},"Summary"),r.a.createElement(b.h,{sm:10},r.a.createElement(b.n,{className:"ml-2",type:"text",name:"summary",id:"summary",placeholder:"Summary...",required:!0}))),r.a.createElement(b.m,{row:!0},r.a.createElement(b.q,{for:"description",sm:2},"Description"),r.a.createElement(b.h,{sm:10},r.a.createElement(b.n,{className:"ml-2",type:"textarea",name:"description",id:"description",placeholder:"Description ...",required:!0}))),r.a.createElement(b.m,{row:!0},r.a.createElement(b.q,{for:"severity",sm:2},"Severity"),r.a.createElement(b.h,{sm:10},r.a.createElement(b.n,{className:"ml-2",type:"select",name:"severity",id:"severity"},r.a.createElement("option",null,"High"),r.a.createElement("option",null,"Medium"),r.a.createElement("option",null,"Low")))),r.a.createElement(b.b,{className:"mr-2",type:"submit",color:"primary"},"Save"),r.a.createElement(b.b,{onClick:e},"Cancel"))))}}]),t}(n.Component),F=Object(E.b)(null,function(e){return{addEntry:function(t){return e(function(e){return{type:j,payload:e}}(t))}}})(x),P=(a(70),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.clickHandler=function(){a.setState({isPortal:!0})},a.onCancelHandler=function(){a.setState({isPortal:!1})},a.onChangeHandler=function(e){a.setState({search:e.target.value})},a.onFindHandler=function(){a.props.onFind(a.state.search)},a.state={isOpen:!1,isPortal:!1,search:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(b.u,{light:!0,expand:"md",className:"navbaradd"},r.a.createElement(b.v,{href:"/"},r.a.createElement("h1",null,"Like-Jira")),r.a.createElement(b.w,{onClick:this.toggle}),r.a.createElement(b.i,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.r,{className:"ml-auto",navbar:!0},r.a.createElement(b.s,null,r.a.createElement(b.t,{color:"link",href:"https://github.com/vadimled/like-jira"},"GitHub")),r.a.createElement(b.s,{className:"ml-3"},r.a.createElement(b.b,{color:"success",onClick:this.clickHandler},"Create")),r.a.createElement(b.s,{className:"ml-3"},r.a.createElement(b.o,null,r.a.createElement(b.p,{addonType:"prepend"},r.a.createElement(b.b,{onClick:this.onFindHandler},"Find")),r.a.createElement(b.n,{placeholder:"Search...",onChange:this.onChangeHandler})))))),this.state.isPortal&&r.a.createElement(f,null,r.a.createElement(F,{onCancel:this.onCancelHandler})))}}]),t}(r.a.Component)),H=Object(E.b)(null,function(e){return{onFind:function(t){return e(function(e){return{type:I,payload:e}}(t))}}})(P),A=(a(72),function(){return r.a.createElement("div",{className:"sk-circle"},r.a.createElement("div",{className:"sk-circle1 sk-child"}),r.a.createElement("div",{className:"sk-circle2 sk-child"}),r.a.createElement("div",{className:"sk-circle3 sk-child"}),r.a.createElement("div",{className:"sk-circle4 sk-child"}),r.a.createElement("div",{className:"sk-circle5 sk-child"}),r.a.createElement("div",{className:"sk-circle6 sk-child"}),r.a.createElement("div",{className:"sk-circle7 sk-child"}),r.a.createElement("div",{className:"sk-circle8 sk-child"}),r.a.createElement("div",{className:"sk-circle9 sk-child"}),r.a.createElement("div",{className:"sk-circle10 sk-child"}),r.a.createElement("div",{className:"sk-circle11 sk-child"}),r.a.createElement("div",{className:"sk-circle12 sk-child"}))}),L=(a(74),a(76),function(e){var t=e.summary,a=e.description,c=e.id,s=e.onClickHandler;return r.a.createElement(n.Fragment,null,r.a.createElement(b.j,{className:"card-wrapper",onClick:function(e){return s(e,c)}},r.a.createElement(b.c,null,r.a.createElement(b.d,null,r.a.createElement(b.g,null,t),r.a.createElement(b.f,null,a),r.a.createElement(b.e,null,r.a.createElement("span",null,"ID"),c)))))}),B=a(17),M=(a(78),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getTicket=function(){var e=a.props,t=e.dbTickets,n=e.id;for(var r in t)if(r===n)return t[r]},a.onChangeModel=function(e){""!==e.target.value&&a.setState(Object(B.a)({},e.target.name,e.target.value))},a.submitForm=function(e){e.preventDefault();var t=a.props,n=t.onCancel,r=t.id,c=(new Date).toISOString(),s=a.state,i={status:s.status?s.status:a.ticket.status,severity:s.severity?s.severity:a.ticket.severity,summary:s.summary?s.summary:a.ticket.summary,description:s.description?s.description:a.ticket.description,updated:c,created:a.ticket.created};a.props.editTicket({edited:i,id:r}),n()},a.ticket=a.getTicket(),a.state={status:null,severity:null,summary:null,description:null,created:null,updated:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onCancel,a=e.id;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",{className:"edit-header"},"Edit Ticket",r.a.createElement(b.a,{className:"ml-4",color:"secondary"},"ID",a)),r.a.createElement(b.k,{onSubmit:this.submitForm},r.a.createElement("p",null,"Created ",r.a.createElement(b.a,{color:"secondary"},this.ticket.created)),r.a.createElement("p",null,"Updated ",r.a.createElement(b.a,{color:"secondary",className:"mb-2"},this.ticket.updated)),r.a.createElement(b.m,{row:!0},r.a.createElement(b.q,{for:"summary",sm:2},"Summary"),r.a.createElement(b.h,{sm:10},r.a.createElement(b.n,{className:"ml-2",type:"text",name:"summary",id:"summary",value:this.state.summary||this.ticket.summary,onChange:this.onChangeModel,placeholder:"Summary..."}))),r.a.createElement(b.m,{row:!0},r.a.createElement(b.q,{for:"description",sm:2},"Description"),r.a.createElement(b.h,{sm:10},r.a.createElement(b.n,{className:"ml-2",type:"textarea",name:"description",id:"description",value:this.state.description||this.ticket.description,onChange:this.onChangeModel,placeholder:"Description ..."}))),r.a.createElement(b.m,{row:!0},r.a.createElement(b.q,{for:"severity",sm:2},"Severity"),r.a.createElement(b.h,{sm:10},r.a.createElement(b.n,{className:"ml-2",type:"select",name:"severity",id:"severity",onChange:this.onChangeModel,value:this.state.severity||this.ticket.severity},r.a.createElement("option",{value:"high"},"High"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"low"},"Low")))),r.a.createElement(b.m,{row:!0},r.a.createElement(b.q,{for:"status",sm:2},"Status"),r.a.createElement(b.h,{sm:10},r.a.createElement(b.n,{className:"ml-2",type:"select",name:"status",id:"status",onChange:this.onChangeModel,value:this.state.status||this.ticket.status},r.a.createElement("option",{value:"open"},"Open"),r.a.createElement("option",{value:"progress"},"In-Progress"),r.a.createElement("option",{value:"done"},"Done")))),r.a.createElement(b.b,{className:"mr-2 mt-2",type:"submit",color:"primary"},"Save"),r.a.createElement(b.b,{className:"mr-2 mt-2",onClick:t},"Cancel"))))}}]),t}(n.Component)),R=Object(E.b)(function(e){return{dbTickets:e.db.tickets}},function(e){return{editTicket:function(t){return e(T(t))}}})(M),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isPortal:!1,openedId:""},a.onCancelHandler=function(){a.setState({isPortal:!1})},a.onClickTicket=function(e,t){a.setState({isPortal:!0,openedId:t})},a.getTickets=function(){var e=[],t=a.props,n=t.tks,c=t.ticketsIds;for(var s in n)c.includes(s)&&e.push(r.a.createElement(L,{key:s,id:s,onClickHandler:a.onClickTicket,summary:n[s].summary,description:n[s].description}));return e},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.title,t=this.getTickets();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"bucket"},r.a.createElement("h5",{className:"title"},e),r.a.createElement("div",{className:"tickets-container"},t))),this.state.isPortal&&r.a.createElement(f,null,r.a.createElement(R,{id:this.state.openedId,onCancel:this.onCancelHandler})))}}]),t}(n.Component),U=Object(E.b)(function(e,t){return{tks:e.db.tickets,ticketsIds:e.db.buckets[t.id]}})(q),J=function(e){function t(e){var a;return Object(l.a)(this,t),"POP"===(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).props.history.action?a.props.history.push("/"):a.props.fetchDb(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(H,null),this.props.isLoading?r.a.createElement(A,null):r.a.createElement(b.x,null,r.a.createElement(b.h,null,r.a.createElement(U,{id:"open",title:"Open"})),r.a.createElement(b.h,null,r.a.createElement(U,{id:"progress",title:"In-Progress"})),r.a.createElement(b.h,null,r.a.createElement(U,{id:"done",title:"Done"}))))}}]),t}(n.Component),W=Object(E.b)(function(e){return{isLoading:e.db.loading}},function(e){return{fetchDb:function(){return e({type:y})}}})(J),G=(a(80),a(107)),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).submitForm=function(e){e.preventDefault();for(var t=a.emailInput.current.value,n=a.passwordInput.current.value,r=Object.keys(a.state.users),c=0;c<r.length;c++){var s=r[c];s===t&&a.state.users[s]===n&&a.props.history.push("/tickets")}a.setState({emailInvalid:!0,passwordInvalid:!0}),a.passwordInput.current.value=null},a.state={users:{"username1@gmail.com":"12345678","username2@gmail.com":"12345678"},emailInvalid:!1,passwordInvalid:!1},a.emailInput=r.a.createRef(),a.passwordInput=r.a.createRef(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login-header"},"Like Jira"),r.a.createElement(b.k,{onSubmit:this.submitForm},r.a.createElement(b.m,null,r.a.createElement(b.q,{for:"email"},"Email"),r.a.createElement(b.n,{type:"email",name:"email",id:"email",placeholder:"Enter email...",innerRef:this.emailInput,invalid:this.state.emailInvalid})),r.a.createElement(b.m,null,r.a.createElement(b.q,{for:"password"},"Password"),r.a.createElement(b.n,{type:"password",name:"password",id:"password",placeholder:"Enter password...",innerRef:this.passwordInput,invalid:this.state.passwordInvalid}),r.a.createElement(b.l,{className:"mb-4"},"The credentials you supplied were not correct")),r.a.createElement(b.b,{className:"mt-2",type:"submit",color:"primary"},"Login"))))}}]),t}(n.Component),X=Object(G.a)(Object(E.b)(function(e){return{dbTickets:e.db.tickets}},function(e){return{editTicket:function(t){return e(T(t))}}})(Y)),K=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:X}),r.a.createElement(h.a,{path:"/tickets",exact:!0,component:W}))}}]),t}(n.Component),V=a(24),z=a(15);function Q(e){var t={open:[],progress:[],done:[]};for(var a in e)if(e.hasOwnProperty(a))switch(e[a].status){case"open":t.open.push(a);break;case"progress":t.progress.push(a);break;case"done":t.done.push(a)}return t}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a={open:[],progress:[],done:[]};if(!e)return a;var n={};if(t&&t.length>0)for(var r in e)e.hasOwnProperty(r)&&(-1===e[r].description.indexOf(t)&&-1===e[r].summary.indexOf(t)||(n[r]=e[r]));return a=0!==Object.keys(n).length?Q(n):Q(e)}var $=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(n.type)?t[n.type](a,n):a}}({tickets:{},buckets:{open:[],progress:[],done:[]},loading:!1,dbError:{}},(_={},Object(B.a)(_,k,function(e,t){t.type;var a=t.payload,n=Z(a);return Object(z.a)({},e,{tickets:Object(z.a)({},a),buckets:Object(z.a)({},n),loading:!1})}),Object(B.a)(_,g,function(e,t){t.type;var a=t.payload,n=Object(z.a)({},e.tickets,Object(B.a)({},a.id,a.data)),r=Z(n);return Object(z.a)({},e,{tickets:n,buckets:Object(z.a)({},r)})}),Object(B.a)(_,"DB_SET_ERROR",function(e,t){t.type;var a=t.payload;return Object(z.a)({},e,{dbError:Object(z.a)({},e.dbError,Object(B.a)({},a,a))})}),Object(B.a)(_,S,function(e,t){t.type;var a=t.payload;return Object(z.a)({},e,{loading:a})}),Object(B.a)(_,I,function(e,t){t.type;var a=t.payload,n=Z(e.tickets,a);return Object(z.a)({},e,{buckets:Object(z.a)({},n)})}),Object(B.a)(_,N,function(e,t){t.type;var a=t.payload,n=Object(z.a)({},e.tickets,Object(B.a)({},a.id,a.edited)),r=Z(n);return Object(z.a)({},e,{tickets:n,buckets:Object(z.a)({},r)})}),_)),ee=Object(V.c)({db:$}),te=a(48),ae=a(21),ne=a.n(ae),re=a(8),ce=a(47),se=a.n(ce).a.create({baseURL:"https://like-jira.firebaseio.com/"}),ie=function(){return se("/db.json",{method:"GET",mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},withCredentials:!1})},le=function(e){return se("/db.json",{method:"POST",data:e,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},oe=function(e){return se("/db/".concat(e.id,".json"),{method:"PUT",data:e.edited,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}})},me=ne.a.mark(pe),ue=ne.a.mark(he),de=ne.a.mark(Ee);function pe(){var e;return ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(re.b)({type:S,payload:!0});case 3:return t.next=5,Object(re.a)(ie);case 5:return e=t.sent,t.next=8,Object(re.b)((a=e.data,{type:k,payload:a}));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(re.b)({type:O,payload:t.t0.message});case 14:case"end":return t.stop()}var a},me,this,[[0,10]])}function he(e){var t,a;return ne.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(re.a)(le,e.payload);case 3:return t=n.sent,a=t.data.name,n.next=7,Object(re.b)((r={id:a,data:e.payload},{type:g,payload:r}));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(re.b)({type:C,payload:n.t0.message});case 13:case"end":return n.stop()}var r},ue,this,[[0,9]])}function Ee(e){return ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(re.a)(oe,e.payload);case 3:return t.next=5,Object(re.b)((a=e.payload,{type:N,payload:a}));case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(re.b)({type:D,payload:t.t0.message});case 11:case"end":return t.stop()}var a},de,this,[[0,7]])}var be=ne.a.mark(ve);function ve(){return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.c)(y,pe);case 2:return e.next=4,Object(re.d)(j,he);case 4:return e.next=6,Object(re.d)(w,Ee);case 6:case"end":return e.stop()}},be,this)}var fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,ye=Object(te.a)(),ke=Object(V.e)(ee,fe(Object(V.a)(ye)));ye.run(ve),s.a.render(r.a.createElement(E.a,{store:ke},r.a.createElement(i.a,{basename:"/like-jira"},r.a.createElement(K,null))),document.getElementById("root"))},49:function(e,t,a){e.exports=a(104)},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){}},[[49,2,1]]]);
//# sourceMappingURL=main.5474369d.chunk.js.map