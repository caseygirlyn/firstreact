(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(69)},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(29),l=a.n(r),c=a(17),o=a(6),s=a(7),u=a(9),d=a(8),p=a(10),m=a(13),h=a(11);var f={background:"#169BD7",color:"#fff",padding:"10px"},b={color:"#fff"},g=function(){return i.a.createElement("header",{style:f},i.a.createElement("h1",null,"Travel Packing List"),i.a.createElement(m.b,{style:b,to:"/firstreact/"},"Home")," | ",i.a.createElement(m.b,{style:b,to:"/firstreact/about"},"About"))},k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.packinglist.isdeleted?"line-through":"none"}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.packinglist,t=e.id,a=e.item;return i.a.createElement("div",{style:this.getStyle()},i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",onChange:this.props.markDelete.bind(this,t)})," "," ",a," "," ",i.a.createElement("button",{onClick:this.props.delPackinglist.bind(this,t),style:v},"x")))}}]),t}(n.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"6px 10px",borderRadius:"50%",cursor:"pointer",float:"right",outline:"none"},y=k,E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.packinglist.map(function(t){return i.a.createElement(y,{key:t.id,packinglist:t,markDelete:e.props.markDelete,delPackinglist:e.props.delPackinglist})})}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={item:""},a.onSubmit=function(e){e.preventDefault(),a.props.addPackinglist(a.state.item),a.setState({item:""})},a.onChange=function(e){return a.setState({item:e.target.value})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",padding:"5px"}},i.a.createElement("input",{type:"text",name:"item",style:{flex:"10",padding:"5px",outline:"none"},placeholder:"Add Packing List...",value:this.state.item,onChange:this.onChange}),i.a.createElement("input",{type:"submit",value:"+",className:"btn"}))}}]),t}(n.Component);var O=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"About"),i.a.createElement("p",null,"This is a simple Travel Packing List App built with ReactJS"))},w=a(32),x=a.n(w),P=(a(48),a(68),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={health:[{id:1,item:"band-aids",isdeleted:!1},{id:2,item:"pain killers",isdeleted:!1},{id:3,item:"allergy medication",isdeleted:!1},{id:4,item:"insect repellent",isdeleted:!1},{id:5,item:"reading glasses",isdeleted:!1}]},a.markDelete=function(e){a.setState({health:a.state.health.map(function(t){return t.id===e&&(t.isdeleted=!t.isdeleted),t})})},a.delPackinglist=function(e){a.setState({health:Object(c.a)(a.state.health.filter(function(t){return t.id!==e}))})},a.addPackinglist=function(e){var t={id:x.a.v4(),item:e,isdeleted:!1};a.setState({health:[].concat(Object(c.a)(a.state.health),[t])})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(m.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement(g,null),i.a.createElement(h.a,{exact:!0,path:"/firstreact/",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{packinglist:e.state.health,markDelete:e.markDelete,delPackinglist:e.delPackinglist}),i.a.createElement(j,{addPackinglist:e.addPackinglist}))}}),i.a.createElement(h.a,{path:"/firstreact/about",component:O}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.623e65f2.chunk.js.map