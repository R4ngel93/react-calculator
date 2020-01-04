(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),c=a.n(l);var r=function(){return i.a.createElement("div",{className:"container text-center"},i.a.createElement("h3",{id:"title"},"Calculator ",i.a.createElement("i",{className:"fab fa-free-code-camp"})))},s=a(1),u=a(2),o=a(4),m=a(3),b=a(5),d=[],h="",p="",f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).setTheState=function(){a.setState({display:h})},a.clearDisplay=function(){a.setState({display:"0"}),d=[],h="",console.log("Display cleared")},a.inputNumber=function(e){h+=e.target.value,a.setTheState()},a.inputZero=function(){""!==h&&(h+="0",a.setTheState())},a.inputDot=function(){h.includes(".")||(""===h&&(h="0"),h+=".",a.setTheState())},a.switchSign=function(){h.includes("-")?((h=h.split("")).shift(),h=h.join("")):((h=h.split("")).unshift("-"),h=h.join("")),a.setTheState()},a.inputOperator=function(e){p=e.target.value,d.push(h),d.push(p),d=d.filter((function(e){return""!==e})),h="",a.setState({display:a.state.display})},a.equalsTo=function(){var e=0;if(""!==h){d.push(h),d=d.map((function(e){return"+"!==e&&"-"!==e&&"x"!==e&&"/"!==e?parseFloat(e):e}));for(var t=0;t<d.length;t++)!Number.isFinite(d[t])&&"-"===d[t+1]&&Number.isFinite(d[t+2])&&(d[t+2]=-1*d[t+2],d.splice(t+1,1)),Number.isFinite(d[t])||Number.isFinite(d[t+1])||(d[t]=d[t+1],d.splice(t+1,1),t--);console.log(d);for(var n=0;n<d.length;n++)switch(d[n]){case"+":d[n+1]=d[n-1]+d[n+1];break;case"-":d[n+1]=d[n-1]-d[n+1];break;case"x":d[n+1]=d[n-1]*d[n+1];break;case"/":d[n+1]=d[n-1]/d[n+1]}e=d[d.length-1],h=e,a.setTheState()}},a.state={display:"0"},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("main",{id:"calculator",className:"container"},i.a.createElement("section",{id:"display"},this.state.display),i.a.createElement("section",{id:"pad"},i.a.createElement("div",null,i.a.createElement("button",{id:"clear",className:"btn  btn-danger",onClick:this.clearDisplay},"AC"),i.a.createElement("button",{id:"toggle",className:"btn btn-primary",onClick:this.switchSign},"+/-"),i.a.createElement("button",{id:"divide",className:"btn  btn-info",value:"/",onClick:this.inputOperator},"/")),i.a.createElement("div",null,i.a.createElement("button",{id:"seven",className:"btn  btn-dark",value:"7",onClick:this.inputNumber},"7"),i.a.createElement("button",{id:"eight",className:"btn btn-dark",value:"8",onClick:this.inputNumber},"8"),i.a.createElement("button",{id:"nine",className:"btn btn-dark",value:"9",onClick:this.inputNumber},"9"),i.a.createElement("button",{id:"multiply",className:"btn  btn-info",value:"x",onClick:this.inputOperator},"x")),i.a.createElement("div",null,i.a.createElement("button",{id:"four",className:"btn  btn-dark",value:"4",onClick:this.inputNumber},"4"),i.a.createElement("button",{id:"five",className:"btn  btn-dark",value:"5",onClick:this.inputNumber},"5"),i.a.createElement("button",{id:"six",className:"btn  btn-dark",value:"6",onClick:this.inputNumber},"6"),i.a.createElement("button",{id:"subtract",className:"btn  btn-info",value:"-",onClick:this.inputOperator},"-")),i.a.createElement("div",null,i.a.createElement("button",{id:"one",className:"btn  btn-dark",value:"1",onClick:this.inputNumber},"1"),i.a.createElement("button",{id:"two",className:"btn  btn-dark",value:"2",onClick:this.inputNumber},"2"),i.a.createElement("button",{id:"three",className:"btn  btn-dark",value:"3",onClick:this.inputNumber},"3"),i.a.createElement("button",{id:"add",className:"btn  btn-info",value:"+",onClick:this.inputOperator},"+")),i.a.createElement("div",null,i.a.createElement("button",{id:"zero",className:"btn  btn-dark",value:"0",onClick:this.inputZero},"0"),i.a.createElement("button",{id:"decimal",className:"btn  btn-primary",onClick:this.inputDot},"."),i.a.createElement("button",{id:"equals",className:"btn  btn-success",value:"=",onClick:this.equalsTo},"="))))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={target:"_blank"},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"author",className:"container text-center"},i.a.createElement("div",{className:"contact small mt-3 text-white"},"Coded by ",i.a.createElement("code",null,"r4ngel93")),i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/R4ngel93",target:this.state.target},i.a.createElement("i",{className:" fab fa-github mx-1"})),i.a.createElement("a",{href:"https://www.freecodecamp.org/r4ngel93",target:this.state.target},i.a.createElement("i",{className:"fab fa-free-code-camp mx-1"})),i.a.createElement("a",{href:"https://twitter.com/OscarRa65705186",target:this.state.target},i.a.createElement("i",{className:"fab fa-twitter mx-1"}))))}}]),t}(i.a.Component);a(13);var v=function(){return i.a.createElement("div",null,i.a.createElement(r,null),i.a.createElement(f,null),i.a.createElement(E,null))};c.a.render(i.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3f6d0519.chunk.js.map