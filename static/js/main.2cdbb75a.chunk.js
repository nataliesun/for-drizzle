(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/undraw_startled.c9622e9c.svg"},29:function(e,t,a){e.exports=a.p+"static/media/undraw_Firmware_jw6u.25329256.svg"},32:function(e,t,a){e.exports=a(53)},40:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),l=a.n(r),o=a(14),i=a(18),s=(a(40),a(3)),m=a(4),u=a(6),p=a(5),d=a(7),E=a(13),h=(a(41),a(11)),g=(a(44),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.hidden?"side-bar hidden":"side-bar";return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:e},c.a.createElement("span",{onClick:this.props.handleNavClose},c.a.createElement(h.a,{icon:"times"})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/learn"},c.a.createElement(h.a,{icon:"chalkboard"})," Learn")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/nataliesun/for-drizzle",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(h.a,{icon:"code-branch"})," Github")))))}}]),t}(n.Component)),f=a(31),v=(a(47),a(22)),b={getPolygon:function(e){var t=this;return fetch("https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?apiKey=ad7ae12b6267452bb43785a9d63ff348&version=4.01&zip=".concat(e,"&format=json")).then(function(e){return e.json()}).then(function(e){if("Success"!==e.FeatureMatchingResultType)throw new Error("Invalid Address!");var t=parseFloat(e.OutputGeocodes[0].OutputGeocode.Latitude);return[parseFloat(e.OutputGeocodes[0].OutputGeocode.Longitude),t]}).then(function(e){return Promise.all([t.makePolygon(e),t.getLocationKey(e),t.getLocationImg(e)])}).then(function(e){var a=Object(v.a)(e,3),n=a[0],c=a[1],r=a[2];return Promise.all([t.getPolygonId(n).then(function(e){return t.getMoisture(e)}),t.getRainForecast(c),r]).then(function(e){var t=Object(v.a)(e,3);return{moisture:t[0],forecast:t[1],img:t[2]}})})},makePolygon:function(e){return[[e[0],e[1]],[e[0]+.00957,e[1]-137e-6],[e[0]+.0139,e[1]-.005551],[e[0]+15e-5,e[1]-.005679],[e[0],e[1]]]},getPolygonId:function(e){var t={name:"Polygon Sample",geo_json:{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[e]}}},a={method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(t)};return fetch("https://cors-anywhere.herokuapp.com/https://api.agromonitoring.com/agro/1.0/polygons?appid=aab65eca5bf8aebc54f670d83d9ec0d9",a).then(function(e){return e.json()}).then(function(e){return e.id})},getMoisture:function(e){var t="https://api.agromonitoring.com/agro/1.0/soil?polyid=".concat(e,"&appid=aab65eca5bf8aebc54f670d83d9ec0d9");return fetch(t).then(function(e){return e.json()}).then(function(e){return e.moisture})},getLocationKey:function(e){var t="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=IwQXmAT1yzTn2WpTPEVm61ktKK5XkNow&q=".concat(e[1],",").concat(e[0]);return fetch(t).then(function(e){return e.json()}).then(function(e){return e.Key})},getRainForecast:function(e){var t=this,a="https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/".concat(e,"?apikey=IwQXmAT1yzTn2WpTPEVm61ktKK5XkNow&details=true");return fetch(a).then(function(e){return e.json()}).then(function(e){return t.determineRainProbability(e)})},determineRainProbability:function(e){for(var t=!1,a=[],n=0;n<e.length;n++){var c=e[n].RainProbability;a.push(c),c>=50&&(t=!0)}return{probability:t,hourlyProbability:a}},getLocationImg:function(e){return"https://maps.googleapis.com/maps/api/staticmap?size=400x400&markers=color:blue%7C".concat(e[1],",").concat(e[0],"&key=AIzaSyB1CRKX58WoY0erbMTwbYTW_U9Quq74QYQ")}},w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"WaterMeter"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",style:{display:"none"}},c.a.createElement("symbol",{id:"wave"},c.a.createElement("path",{d:"M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"}),c.a.createElement("path",{d:"M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"}),c.a.createElement("path",{d:"M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"}),c.a.createElement("path",{d:"M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"}))),c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"percent"},c.a.createElement("div",{className:"percentNum",id:"count"},"0"),c.a.createElement("div",{className:"percentB"},"%")),c.a.createElement("p",{id:"moisture-caption"},"Soil Moisture"),c.a.createElement("div",{id:"water",className:"water"},c.a.createElement("svg",{viewBox:"0 0 560 20",className:"water_wave water_wave_back"},c.a.createElement("use",{href:"#wave"})),c.a.createElement("svg",{viewBox:"0 0 560 20",className:"water_wave water_wave_front"},c.a.createElement("use",{href:"#wave"})))))}}]),t}(n.Component),y=(a(48),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.moisture,a=e.forecast,n=e.img,r=t>=.3||a.probability?"Don't water":"Water",l="Water"===r?"dowater":"dont";return c.a.createElement("section",{className:"Forecast"},c.a.createElement("div",{className:"forecast-prediction"},c.a.createElement("div",{className:"tooltip"},c.a.createElement("h2",null,"Moisture content of soil"),c.a.createElement("p",null,"Greater than 30% generally means there is enough moisture for plants to not water")),c.a.createElement(w,null),!!n&&c.a.createElement("p",{className:l},r)),n&&c.a.createElement("img",{src:n,alt:"map"}))}}]),t}(n.Component));y.defaultProps={moisture:0,forecast:{},img:""};var C=y,O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={foreCastHidden:!0,moisture:0,forecast:{},img:"",loading:!1},a.handleSubmit=function(e){e.preventDefault();var t=e.target.zipcode.value;a.setState({loading:!0}),b.getPolygon(t).then(function(e){a.setState(Object(f.a)({},e,{loading:!1}));var t=document.getElementById("count");t.innerText=0;var n,c=document.getElementById("water"),r=t.innerText;n=setInterval(function(){r++,t.innerHTML=r,c.style.transform="translate(0,"+(100-r)+"%)",r===Math.round(100*e.moisture)&&clearInterval(n)},60)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.moisture,n=t.forecast,r=t.img,l=t.loading?c.a.createElement(h.a,{icon:"spinner",className:"fa-icon",pulse:!0}):c.a.createElement(h.a,{icon:["far","arrow-alt-circle-right"],className:"fa-icon"});return c.a.createElement("div",{className:"LandingPage"},c.a.createElement("h2",null,"Accurate weather and soil monitoring"),c.a.createElement("p",null,"Check if you need to water your plants"),c.a.createElement("section",{className:"form-section"},c.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},c.a.createElement("input",{type:"zipcode",placeholder:"Zip code",id:"zipcode",required:!0}),c.a.createElement("button",{type:"submit"},l))),c.a.createElement(C,{moisture:a,forecast:n,img:r}))}}]),t}(n.Component),j=a(17);a(49);function z(e){var t=e.className,a=e.list,n=Object(j.a)(e,["className","list"]),r=["Section",a&&"Section--list",t].filter(Boolean).join(" ");return c.a.createElement("section",Object.assign({className:r},n))}var N=a(28),k=a.n(N),x=(a(50),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(z,{className:"NotFoundPage"},c.a.createElement("img",{src:k.a,alt:"startled"}),c.a.createElement("h2",null,"404 - Page not found"),c.a.createElement("p",null,"Try going back to your previous page."))}}]),t}(n.Component)),M=(a(51),function(e){return c.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M363.639,262.267c-0.883-3.016-3.15-5.479-6.163-6.581c-0.608-0.222-5.537-1.966-13.193-3.086 c32.708-34.803,21.909-75.464,19.356-83.405c-0.883-3.017-3.15-5.48-6.163-6.582c-1.404-0.514-25.885-9.146-53.777,0.561 c1.575-6.461,2.496-13.564,2.496-21.358c0-49.867-37.763-71.785-45.341-75.676c-2.757-1.51-6.104-1.648-9.012-0.296 c-1.875,0.871-45.929,21.954-45.929,75.972c0,7.81,0.925,14.928,2.506,21.399c-27.941-9.772-52.488-1.117-53.894-0.602 c-3.013,1.102-5.28,3.565-6.163,6.582c-2.553,7.941-13.352,48.602,19.356,83.405c-7.656,1.12-12.585,2.864-13.193,3.086 c-3.013,1.102-5.281,3.566-6.164,6.582c-2.606,8.107-13.812,50.311,21.45,85.573c20.406,20.406,43.054,25.274,60.022,25.274 c6.282,0,11.773-0.669,16.096-1.463v65.433c0,5.522,4.477,10,10,10c5.523,0,10-4.478,10-10v-65.458 c4.343,0.804,9.888,1.487,16.238,1.487c16.967,0,39.618-4.87,60.022-25.274C377.451,312.577,366.245,270.374,363.639,262.267z M245.929,340.479c-0.222,4.539-0.859,8.354-1.468,11.097c-10.689,2.375-37.433,5.197-60.507-17.878 c-22.727-22.725-20.345-49.026-17.829-60.502c6.721-1.461,19.836-3.089,34.356,1.623c0.956,0.358,1.909,0.696,2.857,1.011 c7.69,2.916,15.674,7.676,23.241,15.242c14.419,14.419,18.725,30.269,19.35,42.735V340.479z M245.929,247.408 c-0.222,4.539-0.859,8.354-1.468,11.096c-6.623,1.473-19.409,3.108-33.666-1.342c-1.445-0.557-2.882-1.064-4.309-1.523 c-7.458-2.946-15.181-7.662-22.533-15.013c-22.726-22.726-20.344-49.026-17.828-60.501c10.679-2.322,37.498-5.08,60.454,17.876 c0.146,0.146,0.278,0.293,0.421,0.438c0.877,0.984,1.757,1.925,2.636,2.829c11.969,13.511,15.715,27.937,16.293,39.468V247.408z M256.07,197.234c-3.134-2.01-7.65-5.323-12.237-10.112c-0.468-0.513-0.941-1.026-1.427-1.537 c-8.355-9.281-16.494-23.518-16.494-43.769c0-32.597,20.86-49.51,30.091-55.398c9.886,6.326,30.191,23.239,30.191,55.398 c0,19.11-7.171,32.822-14.963,42.09c-1.62,1.622-3.136,3.26-4.565,4.906C262.668,192.699,258.839,195.47,256.07,197.234z M265.991,244.167c-0.014-11.74,3.023-27.276,15.457-41.866c1.473-1.464,2.954-3.039,4.422-4.732 c22.947-22.571,49.379-19.814,60.001-17.464c2.517,11.465,4.915,37.782-17.825,60.521c-7.338,7.339-15.046,12.051-22.491,14.999 c-1.451,0.466-2.912,0.981-4.382,1.548c-14.255,4.443-27.033,2.802-33.63,1.334c-0.74-3.333-1.524-8.228-1.553-14.085 C265.99,244.337,265.991,244.252,265.991,244.167z M328.046,333.698c-23.078,23.079-49.823,20.252-60.487,17.886 c-2.325-10.638-5.136-37.514,17.862-60.512c7.358-7.358,15.087-12.075,22.551-15.021c1.424-0.458,2.857-0.962,4.298-1.518 c14.226-4.44,26.983-2.82,33.601-1.357C348.388,284.642,350.786,310.959,328.046,333.698z"}))),c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M309.356,5.571C291.925,1.875,273.973,0,256,0C187.62,0,123.333,26.628,74.981,74.981C26.629,123.333,0,187.62,0,256 c0,56.978,19.17,112.597,54.096,157.381c-3.929,6.078-6.044,13.158-6.044,20.568c0,10.15,3.953,19.692,11.13,26.87 c7.177,7.177,16.72,11.13,26.87,11.13s19.693-3.953,26.87-11.13c7.178-7.178,11.13-16.72,11.13-26.87 c0-10.15-3.953-19.692-11.13-26.87s-16.72-11.131-26.87-11.131c-6.016,0-11.815,1.399-17.038,4.025 C37.362,358.885,20,308.061,20,256C20,125.869,125.869,20,256,20c16.582,0,33.137,1.728,49.207,5.136 c5.406,1.145,10.711-2.306,11.857-7.708C318.21,12.025,314.759,6.717,309.356,5.571z M73.324,421.22 c3.509-3.51,8.118-5.264,12.728-5.264s9.219,1.755,12.728,5.264c3.4,3.399,5.272,7.92,5.272,12.728s-1.872,9.328-5.272,12.728 c-7.018,7.02-18.438,7.018-25.456,0c-3.4-3.399-5.272-7.92-5.272-12.728S69.924,424.62,73.324,421.22z"}))),c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M457.904,98.619c3.929-6.078,6.044-13.158,6.044-20.568c0-10.15-3.953-19.693-11.13-26.87 c-7.177-7.178-16.72-11.13-26.87-11.13c-10.15,0-19.693,3.953-26.87,11.13s-11.13,16.72-11.13,26.87 c0,10.15,3.953,19.693,11.13,26.87c7.177,7.178,16.72,11.13,26.87,11.13c6.017,0,11.815-1.399,17.039-4.025 C474.638,153.115,492,203.939,492,256c0,130.131-105.869,236-236,236c-13.999,0-28.025-1.234-41.688-3.669 c-5.434-0.967-10.631,2.652-11.599,8.091c-0.969,5.437,2.653,10.63,8.09,11.599C225.622,510.661,240.828,512,256,512 c68.38,0,132.667-26.629,181.02-74.98S512,324.38,512,256C512,199.022,492.83,143.403,457.904,98.619z M438.677,90.779 c-3.399,3.4-7.92,5.272-12.728,5.272s-9.329-1.871-12.728-5.272c-7.019-7.018-7.019-18.437,0-25.456 c3.399-3.4,7.92-5.272,12.728-5.272s9.328,1.872,12.728,5.272c3.4,3.399,5.272,7.92,5.272,12.728 C443.949,82.859,442.077,87.379,438.677,90.779z"}))),c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M168.134,475.102l-3.776,9.26l3.748-9.271c-5.123-2.068-10.949,0.403-13.019,5.523c-2.07,5.12,0.403,10.949,5.523,13.02 l0.309,0.122c1.179,0.451,2.393,0.665,3.587,0.665c4.028,0,7.835-2.438,9.359-6.415 C175.841,482.847,173.292,477.077,168.134,475.102z"}))),c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M351.824,18.543l-0.178-0.071c-5.127-2.052-10.947,0.443-12.999,5.571c-2.052,5.128,0.443,10.946,5.571,12.998 l0.114,0.046c1.228,0.496,2.495,0.73,3.743,0.73c3.956,0,7.702-2.363,9.275-6.256C359.419,26.44,356.945,20.612,351.824,18.543z"}))),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("linearGradient",{id:"my-cool-gradient",x2:"1",y2:"1"},c.a.createElement("stop",{offset:"0%",stopColor:"#447799"}),c.a.createElement("stop",{offset:"50%",stopColor:"#224488"}),c.a.createElement("stop",{offset:"100%",stopColor:"#112266"})))}),P=function(e){return c.a.createElement("svg",{id:"orbit",enableBackground:"new 0 0 300 300",height:"512",viewBox:"0 0 300 300",width:"512",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"m244.918 206.243c9.867-17.207 15.082-36.847 15.082-56.797 0-12.433-1.984-24.662-5.897-36.347-.001-.002 0-.005-.001-.007-.871-2.59-1.852-5.197-2.918-7.752-.852-2.041-3.203-3-5.234-2.15-2.035.852-3 3.193-2.148 5.232.992 2.379 1.906 4.807 2.715 7.217 0 .002.002.003.002.005 3.639 10.864 5.482 22.237 5.482 33.802 0 18.555-4.848 36.818-14.02 52.816v.001c-.002.003-.005.005-.007.008-1.27 2.211-2.637 4.412-4.07 6.541-1.234 1.834-.75 4.318 1.082 5.553.688.461 1.461.682 2.23.682 1.285 0 2.551-.619 3.32-1.766 1.542-2.288 3.015-4.653 4.374-7.027.002-.003.006-.006.008-.011z"}),c.a.createElement("path",{d:"m83.961 61.944c.77 0 1.547-.221 2.234-.684 2.126-1.436 4.326-2.806 6.53-4.076.003-.002.006-.002.009-.004 16.027-9.211 34.324-14.08 52.918-14.08 11.556 0 22.917 1.84 33.762 5.469.001 0 .002.002.004.002 2.418.807 4.84 1.717 7.207 2.707.504.211 1.027.312 1.543.312 1.562 0 3.047-.924 3.691-2.457.852-2.037-.109-4.381-2.148-5.234-2.538-1.064-5.147-2.043-7.748-2.913-.001 0-.001-.001-.002-.001-.002-.001-.004-.001-.006-.002s-.004-.001-.006-.002c-.001 0-.002 0-.003 0-11.664-3.901-23.873-5.88-36.294-5.88-19.988 0-39.668 5.236-56.902 15.143-.003.002-.004.005-.008.007-2.372 1.364-4.737 2.837-7.024 4.378-1.828 1.234-2.312 3.721-1.078 5.553.774 1.145 2.036 1.762 3.321 1.762z"}),c.a.createElement("path",{d:"m221.223 103.935c16.574 0 30.059-13.482 30.059-30.057s-13.484-30.059-30.059-30.059-30.059 13.484-30.059 30.059 13.484 30.057 30.059 30.057zm0-52.116c7.769 0 14.598 4.047 18.529 10.133h-8.107c-2.211 0-4 1.791-4 4s1.789 4 4 4h11.267c.23 1.276.37 2.584.37 3.926 0 12.162-9.895 22.057-22.059 22.057-5.552 0-10.617-2.077-14.499-5.475h9.288c2.211 0 4-1.791 4-4s-1.789-4-4-4h-14.25c-.278 0-.521.104-.783.158-1.163-2.682-1.815-5.635-1.815-8.74 0-12.164 9.895-22.059 22.059-22.059z"}),c.a.createElement("path",{d:"m223.645 83.089h5.215c2.211 0 4-1.791 4-4s-1.789-4-4-4h-5.215c-2.211 0-4 1.791-4 4s1.789 4 4 4z"}),c.a.createElement("path",{d:"m211.437 146.22c0-.003 0-.006 0-.008-1.126-19.007-10.134-35.904-23.857-47.298-.064-.06-.138-.1-.205-.155-11.342-9.344-25.808-14.966-41.558-14.966-36.293 0-65.816 29.787-65.816 66.4s29.523 66.4 65.816 66.4 65.82-29.787 65.82-66.4c0-1.342-.122-2.652-.2-3.973zm-8.212-2.732c-.691.228-1.001.3-.968.304h-22.257c-2.211 0-4 1.791-4 4 0 2.205-1.793 4-4 4-2.211 0-4 1.791-4 4v18c0 3.309-2.691 6-6 6s-6-2.691-6-6v-10c0-2.209-1.789-4-4-4h-6c-1.102 0-2-.896-2-2s.898-2 2-2h12c5.516 0 10-4.486 10-10s-4.484-10-10-10h-16c-1.102 0-2-.896-2-2s.898-2 2-2h14c2.211 0 4-1.791 4-4 0-2.154 1.754-3.908 3.93-3.908 2.211 0 4-1.791 4-4 0-2.944 8.162-9.051 16.268-13.249 10.334 9.301 17.365 22.248 19.027 36.853zm-49.954-51.154c-1.756 1.357-3.926 2.156-6.251 2.156-2.404 0-4.638-.929-6.44-2.429 1.728-.158 3.469-.268 5.237-.268 2.531-.001 5.007.22 7.454.541zm-45.271 13.785v18.63c0 3.883-3.562 7.043-7.938 7.043h-9.076c3.316-10.05 9.26-18.875 17.014-25.673zm-19.719 49.673h12.555c1.715 0 3.164 1.83 3.164 3.996v7.672c0 1.014-.309 1.984-.871 2.734l-7.126 9.496c-4.166-7.148-6.902-15.235-7.722-23.898zm49.674 52.196c1.701-3.382 5.159-5.659 9.065-5.659 3.844 0 7.201 2.099 8.942 5.306-3.3.594-6.679.958-10.146.958-2.673 0-5.284-.249-7.861-.605zm25.854-2.328c-2.738-6.745-9.208-11.331-16.789-11.331-7.697 0-14.459 4.902-17.052 11.978-11.656-3.365-21.813-10.312-29.215-19.619l8.779-11.695c1.59-2.127 2.469-4.803 2.469-7.533v-7.672c0-6.615-5.008-11.996-11.164-11.996h-12.717c.11-2.718.384-5.39.851-8h11.091c8.789 0 15.938-6.748 15.938-15.043v-24.416c0-.026-.009-.05-.009-.075 4.768-2.917 9.973-5.146 15.507-6.579 3.302 5.44 9.16 8.81 15.522 8.81 6.243 0 11.899-3.169 15.231-8.26 5.379 1.615 10.424 4.002 15.027 7.032-6.139 3.456-14.206 8.957-16.629 15.078-3.699 1.055-6.672 3.857-7.957 7.453h-10.692c-5.516 0-10 4.486-10 10s4.484 10 10 10h16c1.102 0 2 .896 2 2s-.898 2-2 2h-12c-5.516 0-10 4.486-10 10s4.484 10 10 10h2v6c0 7.719 6.281 14 14 14s14-6.281 14-14v-14.686c3.406-1.207 6.109-3.91 7.316-7.314h18.961c.334 0 .747-.032 1.286-.13-.626 25.208-17.105 46.483-39.754 53.998z"}),c.a.createElement("path",{d:"m145.914 243.899c-1.562-1.562-4.094-1.562-5.656 0l-4.258 4.258-4.258-4.258c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656l4.258 4.258-4.258 4.258c-1.562 1.562-1.562 4.094 0 5.656.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l4.258-4.257 4.258 4.258c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-4.258-4.258 4.258-4.258c1.563-1.563 1.563-4.094 0-5.657z"}),c.a.createElement("path",{d:"m57.914 51.899c-1.562-1.562-4.094-1.562-5.656 0l-4.258 4.258-4.258-4.258c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656l4.258 4.258-4.258 4.258c-1.562 1.562-1.562 4.094 0 5.656.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l4.258-4.257 4.258 4.258c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-4.258-4.258 4.258-4.258c1.563-1.563 1.563-4.094 0-5.657z"}),c.a.createElement("path",{d:"m57.914 159.899c-1.562-1.562-4.094-1.562-5.656 0l-4.258 4.258-4.258-4.258c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656l4.258 4.258-4.258 4.258c-1.562 1.562-1.562 4.094 0 5.656.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l4.258-4.257 4.258 4.258c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656l-4.258-4.258 4.258-4.258c1.563-1.563 1.563-4.094 0-5.657z"}),c.a.createElement("path",{d:"m257.656 233.813 4.258-4.258c1.562-1.562 1.562-4.094 0-5.656s-4.094-1.562-5.656 0l-4.258 4.258-4.258-4.258c-1.562-1.562-4.094-1.562-5.656 0s-1.562 4.094 0 5.656l4.258 4.258-4.258 4.258c-1.562 1.562-1.562 4.094 0 5.656.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l4.258-4.257 4.258 4.258c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172c1.562-1.562 1.562-4.094 0-5.656z"}),c.a.createElement("circle",{cx:"48",cy:"259.792",r:"4"}),c.a.createElement("circle",{cx:"212",cy:"255.792",r:"4"}),c.a.createElement("circle",{cx:"188",cy:"219.792",r:"4"}),c.a.createElement("circle",{cx:"48",cy:"111.792",r:"4"}),c.a.createElement("circle",{cx:"224",cy:"171.792",r:"4"}),c.a.createElement("circle",{cx:"164",cy:"59.792",r:"4"}),c.a.createElement("circle",{cx:"88",cy:"227.792",r:"4"}),c.a.createElement("linearGradient",{id:"my-cool-gradient",x2:"1",y2:"1"},c.a.createElement("stop",{offset:"0%",stopColor:"#447799"}),c.a.createElement("stop",{offset:"50%",stopColor:"#224488"}),c.a.createElement("stop",{offset:"100%",stopColor:"#112266"})))},S=function(e){return c.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M191.326,129.347h-32.337c-4.465,0-8.084,3.62-8.084,8.084c0,4.465,3.62,8.084,8.084,8.084H182.3 c-3.658,15.432-17.555,26.947-34.09,26.947c-19.316,0-35.032-15.716-35.032-35.032S128.895,102.4,148.21,102.4 c8.54,0,16.766,3.108,23.162,8.749c3.35,2.954,8.458,2.633,11.411-0.715c2.953-3.348,2.633-8.457-0.715-11.411 c-9.352-8.249-21.376-12.792-33.858-12.792c-28.231,0-51.2,22.969-51.2,51.2s22.969,51.2,51.2,51.2 c28.231,0,51.2-22.969,51.2-51.2C199.411,132.967,195.791,129.347,191.326,129.347z"}))),c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M385.347,43.116c-28.231,0-51.2,22.969-51.2,51.2s22.969,51.2,51.2,51.2s51.2-22.969,51.2-51.2 S413.578,43.116,385.347,43.116z M385.347,129.347c-19.316,0-35.032-15.716-35.032-35.032s15.716-35.032,35.032-35.032 c19.316,0,35.032,15.716,35.032,35.032S404.663,129.347,385.347,129.347z"}))),c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("path",{d:"M482.827,137.256c4.751-11.462,7.615-22.413,7.615-32.161C490.442,47.145,443.297,0,385.347,0 c-18.027,0-35.006,4.564-49.847,12.594C309.911,4.242,283.169,0,256,0C187.621,0,123.333,26.628,74.981,74.981 C26.628,123.333,0,187.621,0,256s26.628,132.667,74.981,181.019C123.333,485.372,187.621,512,256,512 s132.667-26.628,181.019-74.981S512,324.379,512,256C512,214.65,501.904,173.641,482.827,137.256z M385.347,16.168 c49.035,0,88.926,39.892,88.926,88.926c0,38.466-59.61,108.698-88.927,139.329c-29.318-30.62-88.925-100.836-88.925-139.329 C296.421,56.06,336.313,16.168,385.347,16.168z M16.168,256C16.168,123.756,123.756,16.168,256,16.168 c21.143,0,42.004,2.74,62.197,8.147c-23.169,19.294-37.944,48.342-37.944,80.78c0,9.332,2.633,19.77,7.026,30.7L24.276,317.872 C18.998,298.125,16.168,277.389,16.168,256z M256,495.832c-84.643,0-159.183-44.077-201.88-110.482l69.756-50.976 c3.964-2.897,4.41-8.649,0.937-12.121c-0.039-0.039-0.078-0.078-0.115-0.115c-2.79-2.79-7.196-3.13-10.381-0.803l-68.503,50.061 c-6.536-11.858-12.097-24.324-16.576-37.291L294.154,150.7c4.676,9.064,10.246,18.274,16.281,27.317l-164.074,119.9 c-3.964,2.897-4.41,8.649-0.937,12.122c0.039,0.039,0.078,0.078,0.115,0.115c2.79,2.79,7.196,3.13,10.381,0.803l32.363-23.649 l138.502,197.858C304.402,492.094,280.63,495.832,256,495.832z M342.644,479.63L201.34,277.766l30.443-22.247l145.228,207.469 C366.076,469.406,354.592,474.985,342.644,479.63z M390.69,454.337L244.839,245.978l74.839-54.69 c26.752,36.915,57.669,68.139,59.943,70.42c1.517,1.522,3.578,2.378,5.726,2.378s4.209-0.855,5.726-2.378 c2.985-2.994,55.336-55.869,82.819-106.019c14.38,31.26,21.939,65.657,21.939,100.311 C495.832,338.351,454.105,411.134,390.69,454.337z"}))),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("linearGradient",{id:"my-cool-gradient",x2:"1",y2:"1"},c.a.createElement("stop",{offset:"0%",stopColor:"#447799"}),c.a.createElement("stop",{offset:"50%",stopColor:"#224488"}),c.a.createElement("stop",{offset:"100%",stopColor:"#112266"})))},_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).handleCardClick=function(e){console.log("hi")},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"AboutPage"},c.a.createElement("div",{className:"flip-card",onClick:this.handleCardClick},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement(S,null),c.a.createElement("figcaption",null,"Google Maps")),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("p",null,c.a.createElement("a",{href:"https://developers.google.com/maps/documentation/maps-static/intro",target:"_blank",rel:"noopener noreferrer"},"Google maps")," API for map image")))),c.a.createElement("div",{className:"flip-card"},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement(M,null),c.a.createElement("figcaption",null,"Agromonitoring")),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("p",null,c.a.createElement("a",{href:"https://agromonitoring.com/",target:"_blank",rel:"noopener noreferrer"},"Agromonitoring")," API for soil moisture and rain data")))),c.a.createElement("div",{className:"flip-card"},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement(P,null),c.a.createElement("figcaption",null,"Geoservices")),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("p",null,c.a.createElement("a",{href:"https://geoservices.tamu.edu/",target:"_blank",rel:"noopener noreferrer"},"Geoservices")," API for location coordinates")))))}}]),t}(n.Component),A=a(29),I=a.n(A),B=(a(52),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"LearnPage"},c.a.createElement("img",{src:I.a,alt:"firmware"}),c.a.createElement("figcaption",null,"Coming soon!"))}}]),t}(n.Component)),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={error:null,navOpen:!1},a.onNavClick=function(e){a.setState({navOpen:!a.state.navOpen})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.navOpen,a=t?"main-nav-shift":"";return c.a.createElement("div",{className:"App"},c.a.createElement(g,{hidden:!t,handleNavClose:this.onNavClick}),c.a.createElement("main",{className:a},c.a.createElement("header",{className:"App__header"},c.a.createElement("h1",null,c.a.createElement(h.a,{icon:"tint",className:"fa-tint"})," ForDrizzle"),c.a.createElement(h.a,{icon:"bars",className:"fa-bars",onClick:function(t){return e.onNavClick(t)}})),this.state.hasError&&c.a.createElement("p",{className:"red"},"There was an error! Oh no!"),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",component:O}),c.a.createElement(E.a,{path:"/about",component:_}),c.a.createElement(E.a,{path:"/learn",component:B}),c.a.createElement(E.a,{component:x}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(15),T=a(30);i.b.add(L.a,T.a,L.f,L.d,L.b,L.c,L.e),l.a.render(c.a.createElement(o.a,{basename:"/for-drizzle/"},c.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.2cdbb75a.chunk.js.map