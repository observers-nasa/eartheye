(this.webpackJsonpeartheye=this.webpackJsonpeartheye||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},29:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),l=a(5),o=a.n(l),n=(a(28),a(15)),i=a.n(n),c=(a(29),a(16)),y=a(17),g=a(21),m=a(18),b=a(22),p=a(6),u=a(3),h=a(7),d=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(g.a)(this,Object(m.a)(t).call(this,e))).state={lat:23.54,lon:46.74,alt:1e7,globe:null},a.globeRef=s.a.createRef(),a.layersRef=s.a.createRef(),a.markersRef=s.a.createRef(),a.settingsRef=s.a.createRef(),a}return Object(b.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.setState({globe:this.globeRef.current})}},{key:"render",value:function(){var e=this.globeRef.current,t=[s.a.createElement(h.d,{key:"lyr",title:"Layers",icon:"list",collapse:this.layersRef.current}),s.a.createElement(h.d,{key:"mkr",title:"Markers",icon:"map-marker",collapse:this.markersRef.current}),s.a.createElement(h.d,{key:"set",title:"Settings",icon:"cog",collapse:this.settingsRef.current}),s.a.createElement(u.s,{title:"Go to HeatMap view",href:"https://observers-nasa.github.io/eartheye/heatmap.html"}," Go to HeatMap")],a=s.a.createElement(h.e,{title:"Buscar",globe:e,mapQuestApiKey:"RGjBGWTuNwyYrQTsCZJZvZVoFanFizt5"});return s.a.createElement("div",null,s.a.createElement(h.c,{logo:"https://observers-nasa.github.io/eartheye/images/earth_eye_logo.png",title:"",href:"https://observers-nasa.github.io/eartheye",items:t,search:a}),s.a.createElement(u.i,{fluid:!0,className:"p-0"},s.a.createElement("div",{className:"globe"},s.a.createElement(p.a,{ref:this.globeRef,layers:[{layer:"blue-marble",options:{category:"base",enabled:!1}},{layer:"blue-marble-landsat",options:{category:"base",enabled:!1}},{layer:"blue-marble-lowres",options:{category:"base",enabled:!1}},{layer:"eox-openstreetmap",options:{category:"overlay",enabled:!1,opacity:.8}},{layer:"usgs-topo",options:{category:"overlay",enabled:!1,opacity:.8}},{layer:"usgs-imagery-topo",options:{category:"overlay",enabled:!1,opacity:.8}},{layer:"renderables",options:{category:"data",enabled:!0,displayName:"Markers"}},{layer:"compass",options:{category:"setting",enabled:!1}},{layer:"coordinates",options:{category:"setting",enabled:!0}},{layer:"view-controls",options:{category:"setting",enabled:!0}},{layer:"stars",options:{category:"setting",enabled:!0}},{layer:"atmosphere-day-night",options:{category:"setting",enabled:!0}},{layer:"tessellation",options:{category:"setting",enabled:!1}}],latitude:-23.5411354,longitude:-46.7361999,altitude:3e3})),s.a.createElement("div",{className:"overlayTools noninteractive"},s.a.createElement(h.g,{globe:e,markers:this.markersRef.current,markersLayerName:"Markers"})),s.a.createElement("div",{className:"overlayCards noninteractive"},s.a.createElement(u.f,null,s.a.createElement(h.a,{ref:this.layersRef,categories:["overlay","base"],globe:e}),s.a.createElement(h.b,{ref:this.markersRef,globe:e,markersLayerName:"Markers"}),s.a.createElement(h.f,{ref:this.settingsRef,categories:["setting"],globe:e})))))}}]),t}(r.Component));o.a.render(s.a.createElement("div",null,s.a.createElement(i.a,{url:"https://observers-nasa.github.io/eartheye/images/earth_eye.ico"}),s.a.createElement(d,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5b77cc66.chunk.js.map