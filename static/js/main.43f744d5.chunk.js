(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),r=a.n(l),i=(a(16),a(1)),c=a(2),s=a(4),u=a(3),m=a(5),p=a(9),v=(a(7),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={streetAddress:"",city:"",state:"",zip:""},a.change=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state),a.setState({streetAddress:"",city:"",state:"",zip:""})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:"myForm"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputAddress"},"Address"),o.a.createElement("input",{id:"inputAddress",type:"text",className:"form-control",name:"streetAddress",placeholder:"111 Main St",value:this.state.streetAddress,onChange:function(t){return e.change(t)}})),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"form-group col-md-6"},o.a.createElement("label",{htmlFor:"inputCity"},"City"),o.a.createElement("input",{id:"inputCity",type:"text",className:"form-control",name:"city",placeholder:"City",value:this.state.city,onChange:function(t){return e.change(t)}})),o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("label",{htmlFor:"inputState"},"State"),o.a.createElement("select",{id:"inputState",className:"form-control",name:"state",value:this.state.state,onChange:function(t){return e.change(t)}},o.a.createElement("option",{defaultValue:!0},"Choose..."),o.a.createElement("option",{value:"AL"},"Alabama"),o.a.createElement("option",{value:"AK"},"Alaska"),o.a.createElement("option",{value:"AZ"},"Arizona"),o.a.createElement("option",{value:"AR"},"Arkansas"),o.a.createElement("option",{value:"CA"},"California"),o.a.createElement("option",{value:"CO"},"Colorado"),o.a.createElement("option",{value:"CT"},"Connecticut"),o.a.createElement("option",{value:"DE"},"Delaware"),o.a.createElement("option",{value:"DC"},"District of Columbia"),o.a.createElement("option",{value:"FL"},"Florida"),o.a.createElement("option",{value:"GA"},"Georgia"),o.a.createElement("option",{value:"HI"},"Hawaii"),o.a.createElement("option",{value:"ID"},"Idaho"),o.a.createElement("option",{value:"IL"},"Illinois"),o.a.createElement("option",{value:"IN"},"Indiana"),o.a.createElement("option",{value:"IA"},"Iowa"),o.a.createElement("option",{value:"KS"},"Kansas"),o.a.createElement("option",{value:"KY"},"Kentucky"),o.a.createElement("option",{value:"LA"},"Louisiana"),o.a.createElement("option",{value:"ME"},"Maine"),o.a.createElement("option",{value:"MD"},"Maryland"),o.a.createElement("option",{value:"MA"},"Massachusetts"),o.a.createElement("option",{value:"MI"},"Michigan"),o.a.createElement("option",{value:"MN"},"Minnesota"),o.a.createElement("option",{value:"MS"},"Mississippi"),o.a.createElement("option",{value:"MO"},"Missouri"),o.a.createElement("option",{value:"MT"},"Montana"),o.a.createElement("option",{value:"NE"},"Nebraska"),o.a.createElement("option",{value:"NV"},"Nevada"),o.a.createElement("option",{value:"NH"},"New Hampshire"),o.a.createElement("option",{value:"NJ"},"New Jersey"),o.a.createElement("option",{value:"NM"},"New Mexico"),o.a.createElement("option",{value:"NY"},"New York"),o.a.createElement("option",{value:"NC"},"North Carolina"),o.a.createElement("option",{value:"ND"},"North Dakota"),o.a.createElement("option",{value:"OH"},"Ohio"),o.a.createElement("option",{value:"OK"},"Oklahoma"),o.a.createElement("option",{value:"OR"},"Oregon"),o.a.createElement("option",{value:"PA"},"Pennsylvania"),o.a.createElement("option",{value:"RI"},"Rhode Island"),o.a.createElement("option",{value:"SC"},"South Carolina"),o.a.createElement("option",{value:"SD"},"South Dakota"),o.a.createElement("option",{value:"TN"},"Tennessee"),o.a.createElement("option",{value:"TX"},"Texas"),o.a.createElement("option",{value:"UT"},"Utah"),o.a.createElement("option",{value:"VT"},"Vermont"),o.a.createElement("option",{value:"VA"},"Virginia"),o.a.createElement("option",{value:"WA"},"Washington"),o.a.createElement("option",{value:"WV"},"West Virginia"),o.a.createElement("option",{value:"WI"},"Wisconsin"),o.a.createElement("option",{value:"WY"},"Wyoming"),o.a.createElement("option",{value:"WY"},"Other"))),o.a.createElement("div",{className:"form-group col-md-2"},o.a.createElement("label",{htmlFor:"inputZip"},"Zip"),o.a.createElement("input",{id:"inputZip",type:"text",className:"form-control",name:"zip",placeholder:"ZIP",value:this.state.zip,onChange:function(t){return e.change(t)}}))),o.a.createElement("div",{className:"col text-center"},o.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:function(t){return e.onSubmit(t)}},"Submit Your Address")))}}]),t}(o.a.Component)),E=(a(17),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={fields:{streetAddress:"123 Main Street",city:"Crouse",state:"NC",zip:"28021"},apiData:{}},a.onSubmit=function(e){a.setState({fields:e});fetch("https://api.estated.com/property/v3?token=cqgXnRvmevXw6LU3DQswQrv3ExcmL4&address="+e.streetAddress.split(" ").join("+")+"&city="+e.city+"&state="+e.state+"&zipcode="+e.zip).then(function(e){return e.json()}).then(function(e){a.setState({apiData:e.properties})})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("h3",null,"Please Submit Address: "),o.a.createElement("div",null),o.a.createElement(v,{onSubmit:function(t){return e.onSubmit(t)},className:"form"}),o.a.createElement("h4",null,"Your Submitted Address: "),o.a.createElement("div",{className:"subAddress"},o.a.createElement("p",null,this.state.fields.streetAddress),o.a.createElement("p",null,this.state.fields.city+", "+this.state.fields.state+" "+this.state.fields.zip)),o.a.createElement("h4",null,"Your Property Response: "),o.a.createElement("div",{className:"propertyResponse"},o.a.createElement("p",null,JSON.stringify(this.state.apiData,null,2))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.43f744d5.chunk.js.map