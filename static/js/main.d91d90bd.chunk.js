(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(69)},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(29),c=n.n(r),l=n(17),o=n(6),s=n(7),u=n(9),p=n(8),h=n(10),d=n(13),m=n(11);var f={background:"#169BD7",color:"#fff",padding:"10px"},g={color:"#fff"},b=function(){return i.a.createElement("header",{style:f},i.a.createElement("h1",null,"Travel Packing List"),i.a.createElement(d.b,{style:g,to:"https://caseygirlyn.github.io/firstreact/"},"Home")," | ",i.a.createElement(d.b,{style:g,to:"https://caseygirlyn.github.io/firstreact/about"},"About"))},k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.packinglist.isdeleted?"line-through":"none"}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.packinglist,t=e.id,n=e.item;return i.a.createElement("div",{style:this.getStyle()},i.a.createElement("p",null,i.a.createElement("input",{type:"checkbox",onChange:this.props.markDelete.bind(this,t)})," "," ",n," "," ",i.a.createElement("button",{onClick:this.props.delPackinglist.bind(this,t),style:v},"x")))}}]),t}(a.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"6px 10px",borderRadius:"50%",cursor:"pointer",float:"right",outline:"none"},y=k,E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.packinglist.map(function(t){return i.a.createElement(y,{key:t.id,packinglist:t,markDelete:e.props.markDelete,delPackinglist:e.props.delPackinglist})})}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={item:""},n.onSubmit=function(e){e.preventDefault(),n.props.addPackinglist(n.state.item),n.setState({item:""})},n.onChange=function(e){return n.setState({item:e.target.value})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",padding:"5px"}},i.a.createElement("input",{type:"text",name:"item",style:{flex:"10",padding:"5px",outline:"none"},placeholder:"Add Packing List...",value:this.state.item,onChange:this.onChange}),i.a.createElement("input",{type:"submit",value:"+",className:"btn"}))}}]),t}(a.Component);var O=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"About"),i.a.createElement("p",null,"This is a simple Travel Packing List App built with ReactJS"))},w=n(32),x=n.n(w),P=n(33),S=n.n(P),D=(n(68),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={health:[]},n.markDelete=function(e){n.setState({health:n.state.health.map(function(t){return t.id===e&&(t.isdeleted=!t.isdeleted),t})})},n.delPackinglist=function(e){n.setState({health:Object(l.a)(n.state.health.filter(function(t){return t.id!==e}))})},n.addPackinglist=function(e){var t={id:x.a.v4(),item:e,isdeleted:!1};n.setState({health:[].concat(Object(l.a)(n.state.health),[t])})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("http://girlyn.com/packinglist.json").then(function(t){return e.setState({health:t.data})})}},{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement(b,null),i.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{packinglist:e.state.health,markDelete:e.markDelete,delPackinglist:e.delPackinglist}),i.a.createElement(j,{addPackinglist:e.addPackinglist}))}}),i.a.createElement(m.a,{path:"/about",component:O}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.d91d90bd.chunk.js.map