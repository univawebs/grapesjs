(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{241:function(t,e,n){},242:function(t,e,n){"use strict";n(241)},271:function(t,e,n){"use strict";n.r(e);var a={render:t=>t("div",{class:"carbon-ads",attrs:{id:"native-carbon"}}),mounted(){window.BSANativeCallback=t=>{if(!t.ads.length){const t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?serve=CEAIVK77&placement=grapesjscom",t.setAttribute("id","_carbonads_js");const e=document.getElementById("native-carbon");e&&e.appendChild(t)}},this.load()},watch:{$route(t,e){t.path!==e.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},methods:{initCarbon(){const{_bsa:t}=window;void 0!==t&&t&&t.init("default","CK7I62QJ","placement:grapesjscomdocs",{target:"#native-carbon"})},load(){const t=document.createElement("script");t.src="//m.servedby-buysellads.com/monetization.js",t.onload=()=>this.initCarbon(),this.$el.appendChild(t)}}},o=(n(242),n(14)),s=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.default=s.exports}}]);