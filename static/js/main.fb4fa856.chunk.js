(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/undraw_startled.c9622e9c.svg"},31:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),i=a(17),l=a(18),s=(a(39),a(4)),u=a(5),m=a(7),p=a(6),d=a(8),h=a(13),f=(a(40),a(11)),b=(a(43),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.hidden?"side-bar hidden":"side-bar";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(f.a,{icon:"chalkboard"})," Learn"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/nataliesun/for-drizzle",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{icon:"code-branch"})," Github")))))}}]),t}(n.Component)),v=a(30),g=(a(46),a(22)),y={getPolygon:function(e){var t=this;return fetch("https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?apiKey=ad7ae12b6267452bb43785a9d63ff348&version=4.01&zip=".concat(e,"&format=json")).then(function(e){return e.json()}).then(function(e){if("Success"!==e.FeatureMatchingResultType)throw new Error("Invalid Address!");var t=parseFloat(e.OutputGeocodes[0].OutputGeocode.Latitude);return[parseFloat(e.OutputGeocodes[0].OutputGeocode.Longitude),t]}).then(function(e){return Promise.all([t.makePolygon(e),t.getLocationKey(e),t.getLocationImg(e)])}).then(function(e){var a=Object(g.a)(e,3),n=a[0],r=a[1],c=a[2];return Promise.all([t.getPolygonId(n).then(function(e){return t.getMoisture(e)}),t.getRainForecast(r),c]).then(function(e){var t=Object(g.a)(e,3);return{moisture:t[0],forecast:t[1],img:t[2]}})})},makePolygon:function(e){return[[e[0],e[1]],[e[0]+.00957,e[1]-137e-6],[e[0]+.0139,e[1]-.005551],[e[0]+15e-5,e[1]-.005679],[e[0],e[1]]]},getPolygonId:function(e){var t={name:"Polygon Sample",geo_json:{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[e]}}},a={method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(t)};return fetch("https://cors-anywhere.herokuapp.com/https://api.agromonitoring.com/agro/1.0/polygons?appid=aab65eca5bf8aebc54f670d83d9ec0d9",a).then(function(e){return e.json()}).then(function(e){return e.id})},getMoisture:function(e){var t="https://api.agromonitoring.com/agro/1.0/soil?polyid=".concat(e,"&appid=aab65eca5bf8aebc54f670d83d9ec0d9");return fetch(t).then(function(e){return e.json()}).then(function(e){return e.moisture})},getLocationKey:function(e){var t="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=IwQXmAT1yzTn2WpTPEVm61ktKK5XkNow&q=".concat(e[1],",").concat(e[0]);return fetch(t).then(function(e){return e.json()}).then(function(e){return e.Key})},getRainForecast:function(e){var t=this,a="https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/".concat(e,"?apikey=IwQXmAT1yzTn2WpTPEVm61ktKK5XkNow&details=true");return fetch(a).then(function(e){return e.json()}).then(function(e){return t.determineRainProbability(e)})},determineRainProbability:function(e){for(var t=!1,a=[],n=0;n<e.length;n++){var r=e[n].RainProbability;a.push(r),r>=50&&(t=!0)}return{probability:t,hourlyProbability:a}},getLocationImg:function(e){return"https://maps.googleapis.com/maps/api/staticmap?size=400x400&markers=color:blue%7C".concat(e[1],",").concat(e[0],"&key=AIzaSyB1CRKX58WoY0erbMTwbYTW_U9Quq74QYQ")}},E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"WaterMeter"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",style:{display:"none"}},r.a.createElement("symbol",{id:"wave"},r.a.createElement("path",{d:"M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"}),r.a.createElement("path",{d:"M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"}),r.a.createElement("path",{d:"M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"}),r.a.createElement("path",{d:"M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"}))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"percent"},r.a.createElement("div",{className:"percentNum",id:"count"},"0"),r.a.createElement("div",{className:"percentB"},"%")),r.a.createElement("div",{id:"water",className:"water"},r.a.createElement("svg",{viewBox:"0 0 560 20",className:"water_wave water_wave_back"},r.a.createElement("use",{href:"#wave"})),r.a.createElement("svg",{viewBox:"0 0 560 20",className:"water_wave water_wave_front"},r.a.createElement("use",{href:"#wave"})))))}}]),t}(n.Component),w=(a(47),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.moisture,a=e.forecast,n=e.img,c=t>=.3||a.probability?"Don't water":"Water";return r.a.createElement("section",{className:"Forecast"},r.a.createElement("div",{className:"forecast-prediction"},r.a.createElement(E,null),r.a.createElement("p",null,c)),n&&r.a.createElement("img",{src:n,alt:"map"}))}}]),t}(n.Component));w.defaultProps={moisture:0,forecast:{},img:""};var O=w,j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={foreCastHidden:!0,moisture:0,forecast:{},img:"",loading:!1},a.handleSubmit=function(e){e.preventDefault();var t=e.target.zipcode.value;a.setState({loading:!0}),y.getPolygon(t).then(function(e){a.setState(Object(v.a)({},e,{loading:!1}));var t,n=document.getElementById("count"),r=document.getElementById("water"),c=n.innerText;t=setInterval(function(){c++,n.innerHTML=c,r.style.transform="translate(0,"+(100-c)+"%)",c===Math.round(100*e.moisture)&&clearInterval(t)},60)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.moisture,n=t.forecast,c=t.img,o=t.loading?r.a.createElement(f.a,{icon:"spinner",className:"fa-icon",pulse:!0}):r.a.createElement(f.a,{icon:["far","arrow-alt-circle-right"],className:"fa-icon"});return r.a.createElement("div",{className:"LandingPage"},r.a.createElement("h2",null,"Accurate weather and soil data monitoring"),r.a.createElement("p",null,"Check if you need to water your plants"),r.a.createElement("section",{className:"form-section"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"zipcode",placeholder:"Zip code",id:"zipcode",required:!0}),r.a.createElement("button",{type:"submit"},o))),r.a.createElement(O,{moisture:a,forecast:n,img:c}))}}]),t}(n.Component),N=a(15);a(48);function k(e){var t=e.className,a=e.list,n=Object(N.a)(e,["className","list"]),c=["Section",a&&"Section--list",t].filter(Boolean).join(" ");return r.a.createElement("section",Object.assign({className:c},n))}var P=a(28),C=a.n(P),z=(a(49),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(k,{className:"NotFoundPage"},r.a.createElement("img",{src:C.a,alt:"startled"}),r.a.createElement("h2",null,"404 - Page not found"),r.a.createElement("p",null,"Try going back to your previous page."))}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,navOpen:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"onNavClick",value:function(e){this.setState({navOpen:!this.state.navOpen})}},{key:"render",value:function(){var e=this,t=this.state.navOpen,a=t?"main-nav-shift":"";return r.a.createElement("div",{className:"App"},r.a.createElement(b,{hidden:!t}),r.a.createElement("main",{className:a},r.a.createElement("header",{className:"App__header"},r.a.createElement("h1",null,r.a.createElement(f.a,{icon:"tint",className:"fa-tint"})," ForDrizzle"),r.a.createElement(f.a,{icon:"bars",className:"fa-bars",onClick:function(t){return e.onNavClick(t)}})),this.state.hasError&&r.a.createElement("p",{className:"red"},"There was an error! Oh no!"),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{component:z}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(16),T=a(29);l.b.add(x.a,T.a,x.e,x.d,x.b,x.c),o.a.render(r.a.createElement(i.a,{basename:"/for-drizzle/"},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.fb4fa856.chunk.js.map