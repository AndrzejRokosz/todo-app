(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),s=n.n(c),l=(n(104),n(96)),i=n(88),r=n(89),u=n(97),d=n(90),h=n(98),f=n(91),m=n.n(f),k=n(92),p=n.n(k),y=n(56),b=n(93),E=n.n(b),C=n(94),j=n.n(C),g=n(55),v=n.n(g),w="https://moj-firebase.firebaseio.com",D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[],taskName:""},n.handleChange=function(e){n.setState({taskName:e.target.value})},n.addTask=function(){if(""!==n.state.taskName){var e=n.state.tasks,t={taskName:n.state.taskName,completed:!1};fetch("".concat(w,"/tasks.json"),{method:"POST",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(a){t.id=a.name,e.push(t),n.setState({tasks:e,taskName:""})})}},n.handleClick=function(){n.addTask()},n.loadData=function(){fetch("".concat(w,"/tasks.json")).then(function(e){return e.json()}).then(function(e){if(e){var t=Object.entries(e).map(function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return a.id=n,a});n.setState({tasks:t}),console.log("data",t)}else n.setState({tasks:[]})})},n.componentWillMount=function(){n.loadData()},n.handleKeyDown=function(e){console.log(e.keyDown),13===e.keyCode&&n.addTask()},n.handleDelete=function(e){fetch("".concat(w,"/tasks/").concat(e,".json"),{method:"DELETE"}).then(function(){n.loadData()})},n.handleCheck=function(e){e.completed=!e.completed,fetch("".concat(w,"/tasks/").concat(e.id,".json"),{method:"PATCH",body:JSON.stringify(e)}).then(function(){n.loadData()})},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement(m.a,{onChange:this.handleChange,onKeyDown:this.handleKeyDown,value:this.state.taskName,fullWidth:!0,floatingLabelText:"Enter your task here"}),o.a.createElement(p.a,{label:"Add",primary:!0,fullWidth:!0,onClick:this.handleClick})),o.a.createElement(y.List,null,this.state.tasks.map(function(t){return o.a.createElement(y.ListItem,{key:t.id,primaryText:t.taskName,leftCheckbox:o.a.createElement(E.a,{defaultChecked:t.completed,onCheck:function(){return e.handleCheck(t)}}),rightIconButton:o.a.createElement(v.a,null,o.a.createElement(j.a,{onClick:function(){return e.handleDelete(t.id)}}))})})))}}]),t}(a.Component),N=n(95),O=n.n(N);s.a.render(o.a.createElement(O.a,null,o.a.createElement(D,null)),document.getElementById("root"))},99:function(e,t,n){e.exports=n(241)}},[[99,2,1]]]);
//# sourceMappingURL=main.b7ec2a28.chunk.js.map