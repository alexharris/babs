(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(n,e,t){"use strict";t.r(e);var o={data:function(){return{visibleTab:"tab1"}},methods:{}},r=t(6),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex-grow mb-12 pb-4"},["tab1"==n.visibleTab?n._t("tab1"):n._e(),n._v(" "),"tab2"==n.visibleTab?n._t("tab2"):n._e(),n._v(" "),t("div",{staticClass:"fixed bottom-0 left-0 bg-white w-full h-12 border-t border-black flex flex-row items-center justify-around"},[t("span",{staticClass:"cursor-pointer",on:{click:function(e){n.visibleTab="tab1"}}},[n._v("List")]),n._v(" "),t("span",{staticClass:"cursor-pointer",on:{click:function(e){n.visibleTab="tab2"}}},[n._v("Map")])])],2)}),[],!1,null,null,null);e.default=component.exports},132:function(n,e,t){"use strict";t.r(e);var o={methods:{goBack:function(){console.log(this.$route.path),"/region"==this.$route.path?this.$router.push({path:"/"}):"/region/hotspot"==this.$route.path?this.$router.push({path:"/region",query:{region:this.$route.query.region}}):"/region/hotspot/species"==this.$route.path&&this.$router.push({path:"/region/hotspot",query:{region:this.$route.query.region,hotspot:this.$route.query.hotspot}})}}},r=t(6),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"cursor-pointer",on:{click:function(e){return n.goBack()}}},[n._v("\n    Back\n")])}),[],!1,null,null,null);e.default=component.exports},133:function(n,e,t){"use strict";t.r(e);t(30);var o={data:function(){return{currentLocale:this.$i18n.locale}},computed:{availableLocales:function(){var n=this;return this.$i18n.locales.filter((function(i){return i.code!==n.$i18n.locale}))}},methods:{localeSelected:function(n){this.$i18n.setLocale(n.code)}}},r=(t(258),t(6)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"border border-black"},[t("v-select",{staticClass:"style-chooser",attrs:{options:n.availableLocales,label:"name",clearable:!1,value:n.currentLocale},on:{input:n.localeSelected},scopedSlots:n._u([{key:"option",fn:function(e){e.code;var t=e.name;return[n._v("\n        "+n._s(t)+"\n      ")]}}])})],1)}),[],!1,null,null,null);e.default=component.exports},138:function(n,e,t){"use strict";var o=t(1),r=t(102),l=t.n(r),c={install:function(n,e){n.component("v-select",l.a)}};o.a.use(c),e.a=c},139:function(n,e,t){"use strict";e.a=function(n){var e=n.$axios;n.env;e.onRequest((function(n){n.headers.common["X-eBirdApiToken"]="l74e03ri8jei"}))}},140:function(n,e,t){"use strict";t.r(e);var o={props:["regioninfo"],data:function(){return{sort:"hotAsc",sortTitle:"titleAsc",selectedRegion:this.$route.query.region,title:"name",hotspotsInARegion:[],filteredHotspots:[],hotspotInfo:[],loading:!0}},mounted:function(){this.getHotspotsInARegion(this.selectedRegion)},computed:{resultQuery:function(){return this.hotspotsInARegion}},methods:{getHotspotsInARegion:function(n){var e=this;this.$axios.get("https://api.ebird.org/v2/ref/hotspot/"+this.$route.query.region,{params:{back:30,fmt:"json"}}).then((function(n){e.hotspotsInARegion=n.data,e.filteredHotspots=n.data,e.loading=!1}),(function(n){console.log(n)}))},determineHotness:function(n){return n>300?"🔥🔥🔥":n>200?"🔥🔥":n>100?"🔥":""},sortByQuantity:function(){"hotAsc"!==this.sort?(this.hotspotsInARegion=this.hotspotsInARegion.sort((function(a,b){return a.numSpeciesAllTime-b.numSpeciesAllTime})),this.sort="hotAsc"):(this.hotspotsInARegion=this.hotspotsInARegion.sort((function(a,b){return b.numSpeciesAllTime-a.numSpeciesAllTime})),this.sort="hotDesc")},sortByTitle:function(){"titleAsc"!==this.sortTitle?(this.hotspotsInARegion=this.hotspotsInARegion.sort((function(a,b){return a.locName.toLowerCase()>b.locName.toLowerCase()})),this.sortTitle="titleAsc"):(this.hotspotsInARegion=this.hotspotsInARegion.sort((function(a,b){return b.locName.toLowerCase()>a.locName.toLowerCase()})),this.sortTitle="titleDesc")},hotspotSelected:function(n){this.$store.commit("setHotspot",n),this.$router.push({path:"/region/hotspot",query:{region:this.selectedRegion,hotspot:n}})}}},r=t(6),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"h-full flex flex-col"},[n.loading?[t("LoadingAnimation")]:[t("SearchList",{attrs:{list:n.hotspotsInARegion,titleProp:"locName"},on:{"filter-query":function(e){n.filteredHotspots=e}}}),n._v(" "),t("Tabs",{scopedSlots:n._u([{key:"tab1",fn:function(){return[t("table",{staticClass:" w-full mb-12"},[t("thead",{staticClass:"text-left"},[t("tr",[t("th",{on:{click:function(e){return n.sortByTitle()}}},[n._v("Hotspot")]),n._v(" "),t("th",{on:{click:function(e){return n.sortByQuantity()}}},[n._v("#")])])]),n._v(" "),t("tbody",n._l(n.filteredHotspots,(function(e){return t("tr",[t("td",{staticClass:"border-t border-gray-100 py-2"},[t("span",{on:{click:function(t){return n.hotspotSelected(e.locId)}}},[n._v(n._s(n.determineHotness(e.numSpeciesAllTime))+" "+n._s(e.locName))])]),n._v(" "),t("td",{staticClass:"border-t border-gray-100 py-2"},[n._v(n._s(e.numSpeciesAllTime))])])})),0)])]},proxy:!0},{key:"tab2",fn:function(){return[t("div",{directives:[{name:"show",rawName:"v-show",value:n.hotspotsInARegion,expression:"hotspotsInARegion"}],staticClass:"w-full h-full z-30",attrs:{id:"map-wrap"}},[t("client-only",[t("l-map",{attrs:{zoom:9,center:[n.hotspotsInARegion[0].lat,n.hotspotsInARegion[0].lng]}},[t("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),n._v(" "),n._l(n.filteredHotspots,(function(e){return[t("l-marker",{attrs:{"lat-lng":[e.lat,e.lng]},on:{click:function(t){return n.hotspotSelected(e.locId)}}})]}))],2)],1)],1)]},proxy:!0}])})]],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingAnimation:t(52).default,SearchList:t(77).default,Tabs:t(100).default})},141:function(n,e,t){"use strict";t.r(e);var o={mounted:function(){},data:function(){return{regions:[{code:"US-CA-001",name:"Alameda"},{code:"US-CA-003",name:"Alpine"},{code:"US-CA-005",name:"Amador"},{code:"US-CA-007",name:"Butte"},{code:"US-CA-009",name:"Calaveras"},{code:"US-CA-011",name:"Colusa"},{code:"US-CA-013",name:"Contra Costa"},{code:"US-CA-015",name:"Del Norte"},{code:"US-CA-017",name:"El Dorado"},{code:"US-CA-019",name:"Fresno"},{code:"US-CA-021",name:"Glenn"},{code:"US-CA-023",name:"Humboldt"},{code:"US-CA-025",name:"Imperial"},{code:"US-CA-027",name:"Inyo"},{code:"US-CA-029",name:"Kern"},{code:"US-CA-031",name:"Kings"},{code:"US-CA-033",name:"Lake"},{code:"US-CA-035",name:"Lassen"},{code:"US-CA-037",name:"Los Angeles"},{code:"US-CA-039",name:"Madera"},{code:"US-CA-041",name:"Marin"},{code:"US-CA-043",name:"Mariposa"},{code:"US-CA-045",name:"Mendocino"},{code:"US-CA-047",name:"Merced"},{code:"US-CA-049",name:"Modoc"},{code:"US-CA-051",name:"Mono"},{code:"US-CA-053",name:"Monterey"},{code:"US-CA-055",name:"Napa"},{code:"US-CA-057",name:"Nevada"},{code:"US-CA-059",name:"Orange"},{code:"US-CA-061",name:"Placer"},{code:"US-CA-063",name:"Plumas"},{code:"US-CA-065",name:"Riverside"},{code:"US-CA-067",name:"Sacramento"},{code:"US-CA-069",name:"San Benito"},{code:"US-CA-071",name:"San Bernardino"},{code:"US-CA-073",name:"San Diego"},{code:"US-CA-075",name:"San Francisco"},{code:"US-CA-077",name:"San Joaquin"},{code:"US-CA-079",name:"San Luis Obispo"},{code:"US-CA-081",name:"San Mateo"},{code:"US-CA-083",name:"Santa Barbara"},{code:"US-CA-085",name:"Santa Clara"},{code:"US-CA-087",name:"Santa Cruz"},{code:"US-CA-089",name:"Shasta"},{code:"US-CA-091",name:"Sierra"},{code:"US-CA-093",name:"Siskiyou"},{code:"US-CA-095",name:"Solano"},{code:"US-CA-097",name:"Sonoma"},{code:"US-CA-099",name:"Stanislaus"},{code:"US-CA-101",name:"Sutter"},{code:"US-CA-103",name:"Tehama"},{code:"US-CA-105",name:"Trinity"},{code:"US-CA-107",name:"Tulare"},{code:"US-CA-109",name:"Tuolumne"},{code:"US-CA-111",name:"Ventura"},{code:"US-CA-113",name:"Yolo"},{code:"US-CA-115",name:"Yuba"}],allRegionInfo:[],filteredRegions:[{code:"US-CA-001",name:"Alameda"},{code:"US-CA-003",name:"Alpine"},{code:"US-CA-005",name:"Amador"},{code:"US-CA-007",name:"Butte"},{code:"US-CA-009",name:"Calaveras"},{code:"US-CA-011",name:"Colusa"},{code:"US-CA-013",name:"Contra Costa"},{code:"US-CA-015",name:"Del Norte"},{code:"US-CA-017",name:"El Dorado"},{code:"US-CA-019",name:"Fresno"},{code:"US-CA-021",name:"Glenn"},{code:"US-CA-023",name:"Humboldt"},{code:"US-CA-025",name:"Imperial"},{code:"US-CA-027",name:"Inyo"},{code:"US-CA-029",name:"Kern"},{code:"US-CA-031",name:"Kings"},{code:"US-CA-033",name:"Lake"},{code:"US-CA-035",name:"Lassen"},{code:"US-CA-037",name:"Los Angeles"},{code:"US-CA-039",name:"Madera"},{code:"US-CA-041",name:"Marin"},{code:"US-CA-043",name:"Mariposa"},{code:"US-CA-045",name:"Mendocino"},{code:"US-CA-047",name:"Merced"},{code:"US-CA-049",name:"Modoc"},{code:"US-CA-051",name:"Mono"},{code:"US-CA-053",name:"Monterey"},{code:"US-CA-055",name:"Napa"},{code:"US-CA-057",name:"Nevada"},{code:"US-CA-059",name:"Orange"},{code:"US-CA-061",name:"Placer"},{code:"US-CA-063",name:"Plumas"},{code:"US-CA-065",name:"Riverside"},{code:"US-CA-067",name:"Sacramento"},{code:"US-CA-069",name:"San Benito"},{code:"US-CA-071",name:"San Bernardino"},{code:"US-CA-073",name:"San Diego"},{code:"US-CA-075",name:"San Francisco"},{code:"US-CA-077",name:"San Joaquin"},{code:"US-CA-079",name:"San Luis Obispo"},{code:"US-CA-081",name:"San Mateo"},{code:"US-CA-083",name:"Santa Barbara"},{code:"US-CA-085",name:"Santa Clara"},{code:"US-CA-087",name:"Santa Cruz"},{code:"US-CA-089",name:"Shasta"},{code:"US-CA-091",name:"Sierra"},{code:"US-CA-093",name:"Siskiyou"},{code:"US-CA-095",name:"Solano"},{code:"US-CA-097",name:"Sonoma"},{code:"US-CA-099",name:"Stanislaus"},{code:"US-CA-101",name:"Sutter"},{code:"US-CA-103",name:"Tehama"},{code:"US-CA-105",name:"Trinity"},{code:"US-CA-107",name:"Tulare"},{code:"US-CA-109",name:"Tuolumne"},{code:"US-CA-111",name:"Ventura"},{code:"US-CA-113",name:"Yolo"},{code:"US-CA-115",name:"Yuba"}]}},computed:{selectedRegion:function(){return this.$store.state.region}},methods:{regionSelected:function(n){this.$store.commit("setRegion",n),this.$router.push({path:"region",query:{region:this.selectedRegion.code}})}}},r=(t(262),t(6)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("SearchList",{attrs:{list:n.regions,titleProp:"name"},on:{"filter-query":function(e){n.filteredRegions=e}}}),n._v(" "),t("table",{staticClass:"w-full"},[t("tbody",n._l(n.filteredRegions,(function(e){return t("tr",[t("td",{staticClass:"border-t border-gray-100 py-2 px-2 cursor-pointer hover:bg-gray-100"},[t("span",{on:{click:function(t){return n.regionSelected(e)}}},[n._v(n._s(e.name))])])])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SearchList:t(77).default})},143:function(n,e,t){"use strict";t.r(e);var o={components:{LoadingAnimation:t(52).default},data:function(){return{selectedHotspot:this.$route.query.hotspot,recentObservationsInARegion:[],filteredSpecies:[],hotspotInfo:"",loading:!0,sort:"hotAsc"}},mounted:function(){this.getRecentObservationsInARegion(this.$route.query.hotspot)},methods:{getRecentObservationsInARegion:function(n){var e=this;console.log(n),this.$axios.get("https://api.ebird.org/v2/data/obs/"+this.$route.query.hotspot+"/recent",{params:{back:30,sppLocale:this.$i18n.locale}}).then((function(t){console.log(t.data),t.data.sort((function(a,b){var n=a.comName.toUpperCase(),e=b.comName.toUpperCase();return n<e?-1:n>e?1:0})),e.recentObservationsInARegion=t.data,e.filteredSpecies=t.data,e.getHotspotInfo(n)}),(function(n){console.log(n)}))},getHotspotInfo:function(n){var e=this;this.$axios.get("https://api.ebird.org/v2/ref/hotspot/info/"+n,{}).then((function(n){e.hotspotInfo=n.data,e.loading=!1}),(function(n){console.log(n)}))},sortByQuantity:function(){"hotAsc"!==this.sort?(this.recentObservationsInARegion=this.recentObservationsInARegion.sort((function(a,b){return a.howMany-b.howMany})),this.sort="hotAsc"):(this.recentObservationsInARegion=this.recentObservationsInARegion.sort((function(a,b){return b.howMany-a.howMany})),this.sort="hotDesc")},howMany:function(n){return n||"?"},speciesSelected:function(code){this.$router.push({path:"/region/hotspot/species",query:{region:this.$route.query.region,hotspot:this.$route.query.hotspot,species:code}})}}},r=t(6),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"h-full flex flex-col"},[n.loading?[t("LoadingAnimation")]:[t("SearchList",{attrs:{list:n.recentObservationsInARegion,titleProp:"comName"},on:{"filter-query":function(e){n.filteredSpecies=e}}}),n._v(" "),t("Tabs",{scopedSlots:n._u([{key:"tab1",fn:function(){return[t("table",{staticClass:"w-full border-t border-gray-100"},[t("thead",{staticClass:"text-left"},[t("tr",[t("th",{staticClass:"py-2"},[n._v("Bird")]),n._v(" "),t("th",{on:{click:function(e){return n.sortByQuantity()}}},[n._v("#")])])]),n._v(" "),t("tbody",n._l(n.filteredSpecies,(function(e){return t("tr",[t("td",{staticClass:"border-t border-gray-100 py-2"},[t("span",{on:{click:function(t){return n.speciesSelected(e.speciesCode)}}},[n._v(n._s(e.comName))])]),n._v(" "),t("td",{staticClass:"border-t border-gray-100 py-2"},[n._v(n._s(n.howMany(e.howMany))+"  ")])])})),0)])]},proxy:!0},{key:"tab2",fn:function(){return[t("div",{staticClass:"w-full h-full z-30",attrs:{id:"map-wrap"}},[t("client-only",[t("l-map",{attrs:{zoom:11,center:[n.hotspotInfo.latitude,n.hotspotInfo.longitude]}},[t("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),n._v(" "),t("l-marker",{attrs:{"lat-lng":[n.hotspotInfo.latitude,n.hotspotInfo.longitude]}})],1)],1)],1)]},proxy:!0}])})]],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingAnimation:t(52).default,SearchList:t(77).default,Tabs:t(100).default})},180:function(n,e,t){var content=t(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(39).default)("40faf728",content,!0,{sourceMap:!1})},181:function(n,e,t){var content=t(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(39).default)("40b95742",content,!0,{sourceMap:!1})},182:function(n,e,t){var content=t(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(39).default)("bc0f4dfc",content,!0,{sourceMap:!1})},183:function(n,e,t){var content=t(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(39).default)("a7d7d0fc",content,!0,{sourceMap:!1})},199:function(n,e,t){"use strict";t.r(e);var o={data:function(){return{menu:!1}}},r=t(6),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex flex-col justify-end"},[t("div",{staticClass:"z-50 cursor-pointer",on:{click:function(e){n.menu=!n.menu}}},[n.menu?t("span",[n._v("Close")]):t("span",[n._v("Menu")])]),n._v(" "),n.menu?t("div",{staticClass:"fixed w-full h-screen top-0 left-0 bg-white z-40 flex flex-col p-4 pt-16"},[t("p",[n._v("Menu stuff")]),n._v(" "),t("LocaleSelector")],1):n._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LocaleSelector:t(133).default})},200:function(n,e,t){"use strict";t.r(e);var o=t(142),r=t.n(o),l=t(52),c=new r.a("l74e03ri8jei"),d={components:{LoadingAnimation:l.default},data:function(){return{recentObservationsOfASpecies:[],selectedSpecies:this.$route.query.species,loading:!1}},mounted:function(){this.getRecentObservationsOfASpecies()},methods:{getRecentObservationsOfASpecies:function(n){var e=this;this.loading=!0,c.recentObservationsOfASpeciesInARegion({regionCode:this.$route.query.region,speciesCode:this.$route.query.species}).then((function(data){console.log("hello"),e.recentObservationsOfASpecies=data,e.loading=!1}))}}},m=t(6),component=Object(m.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.loading?[t("LoadingAnimation")]:[t("h1",[n._v(n._s(n.recentObservationsOfASpecies[0].comName))]),n._v(" "),t("h2",[n._v(n._s(n.recentObservationsOfASpecies[0].sciName))]),n._v(" "),t("table",{staticClass:" w-full my-2"},[n._m(0),n._v(" "),t("tbody",n._l(n.recentObservationsOfASpecies,(function(e){return t("tr",[t("pre",[n._v(n._s(e))]),n._v(" "),t("td",{staticClass:"border-t border-gray-400 py-2"},[n._v(n._s(e.locName))]),n._v(" "),t("td",{staticClass:"border-t border-gray-400 py-2"},[n._v(n._s(e.howMany))])])})),0)])]],2)}),[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("thead",{staticClass:"text-left"},[t("tr",[t("th",[n._v("Bird")]),n._v(" "),t("th",[n._v("#")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingAnimation:t(52).default})},201:function(n,e,t){"use strict";t.r(e);t(260);var o=t(6),component=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),n._v(" "),t("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),n._v(" "),t("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},208:function(n,e,t){"use strict";var o={data:function(){return{}},mounted:function(){console.log(this.$route.path)}},r=t(6),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex flex-col h-screen"},[t("div",{staticClass:"py-2 px-4 justify-between w-full z-50 "},[t("div",["/"!==this.$route.path?t("GoBack"):n._e()],1)]),n._v(" "),t("div",{staticClass:"px-4 h-full"},[t("Nuxt",{attrs:{"keep-alive":""}})],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{GoBack:t(132).default})},211:function(n,e,t){t(212),n.exports=t(213)},246:function(n,e,t){var content=t(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(39).default)("22066bb8",content,!0,{sourceMap:!1})},247:function(n,e,t){var o=t(38)((function(i){return i[1]}));o.push([n.i,"/*! tailwindcss v2.0.4 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-100:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.border-black{\n  --tw-border-opacity:1;\n  border-color:rgba(0, 0, 0, var(--tw-border-opacity));\n}\n\n.border-gray-100{\n  --tw-border-opacity:1;\n  border-color:rgba(243, 244, 246, var(--tw-border-opacity));\n}\n\n.border-gray-400{\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-dashed{\n  border-style:dashed;\n}\n\n.border-2{\n  border-width:2px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-t{\n  border-top-width:1px;\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.flex-row{\n  flex-direction:row;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-end{\n  justify-content:flex-end;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.justify-around{\n  justify-content:space-around;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-16{\n  height:4rem;\n}\n\n.h-64{\n  height:16rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.h-screen{\n  height:100vh;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.my-2{\n  margin-top:0.5rem;\n  margin-bottom:0.5rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-12{\n  margin-bottom:3rem;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.pb-4{\n  padding-bottom:1rem;\n}\n\n.pt-16{\n  padding-top:4rem;\n}\n\n.static{\n  position:static;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.top-0{\n  top:0px;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.left-0{\n  left:0px;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.text-left{\n  text-align:left;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-black{\n  --tw-text-opacity:1;\n  color:rgba(0, 0, 0, var(--tw-text-opacity));\n}\n\n.w-16{\n  width:4rem;\n}\n\n.w-full{\n  width:100%;\n}\n\n.z-30{\n  z-index:30;\n}\n\n.z-40{\n  z-index:40;\n}\n\n.z-50{\n  z-index:50;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.logo{\n  font-size:3rem;\n  line-height:1;\n  line-height:1.25;\n  text-align:justify;\n  max-width:800px\n}\n\nh1{\n  font-size:1.5rem;\n  line-height:2rem;\n  padding-bottom:0.5rem\n}\n\nh1,h2{\n  font-family:\"times new roman\"\n}\n\nh2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n\np{\n  margin-bottom:1rem\n}\n\n.fixedSearch{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding:0.5rem;\n  position:fixed;\n  top:0px;\n  left:0px;\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),n.exports=o},255:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return o})),t.d(e,"mutations",(function(){return r}));var o=function(){return{region:"",hotspot:""}},r={setRegion:function(n,e){n.region=e},setHotspot:function(n,e){n.hotspot=e}}},256:function(n,e,t){"use strict";t(180)},257:function(n,e,t){var o=t(38)((function(i){return i[1]}));o.push([n.i,".rotate-center[data-v-3de285ec]{\n  -webkit-animation:rotate-center-data-v-3de285ec 5s linear infinite both;\n  animation:rotate-center-data-v-3de285ec 5s linear infinite both\n}\n@-webkit-keyframes rotate-center-data-v-3de285ec{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes rotate-center-data-v-3de285ec{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}",""]),n.exports=o},258:function(n,e,t){"use strict";t(181)},259:function(n,e,t){var o=t(38)((function(i){return i[1]}));o.push([n.i,".style-chooser .vs__search::-moz-placeholder{\n  border:none;\n  text-transform:lowercase;\n  font-variant:small-caps\n}.style-chooser .vs__search:-ms-input-placeholder{\n  border:none;\n  text-transform:lowercase;\n  font-variant:small-caps\n}.style-chooser .vs__dropdown-menu,.style-chooser .vs__dropdown-toggle,.style-chooser .vs__search::placeholder{\n  border:none;\n  text-transform:lowercase;\n  font-variant:small-caps\n}",""]),n.exports=o},260:function(n,e,t){"use strict";t(182)},261:function(n,e,t){var o=t(38)((function(i){return i[1]}));o.push([n.i,".NuxtLogo{\n  -webkit-animation:appear 1s;\n          animation:appear 1s;\n  margin:auto\n}\n@-webkit-keyframes appear{\n0%{\n    opacity:0\n}\n}\n@keyframes appear{\n0%{\n    opacity:0\n}\n}",""]),n.exports=o},262:function(n,e,t){"use strict";t(183)},263:function(n,e,t){var o=t(38)((function(i){return i[1]}));o.push([n.i,"",""]),n.exports=o},52:function(n,e,t){"use strict";t.r(e);t(256);var o=t(6),component=Object(o.a)({},(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"rotate-center border-dashed border-2 border-black w-16 h-16 rounded-full"})}),[],!1,null,"3de285ec",null);e.default=component.exports},77:function(n,e,t){"use strict";t.r(e);t(30),t(76),t(45),t(49),t(50);var o={props:["list","titleProp"],mounted:function(){window.addEventListener("scroll",this.updateScroll)},data:function(){return{searchQuery:null,scrollPosition:null}},methods:{filterList:function(){var n=this;if(null!==this.searchQuery){var e=this.list.filter((function(e){return n.searchQuery.toLowerCase().split(" ").every((function(t){return e[n.titleProp].toLowerCase().includes(t)}))}));this.$emit("filter-query",e)}else this.$emit(this.list)},updateScroll:function(){this.$refs.thing&&(this.scrollPosition=this.$refs.thing.getBoundingClientRect().y)}}},r=t(6),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("span",{ref:"thing"}),n._v(" "),t("div",{staticClass:"w-full mb-4 ",class:{fixedSearch:n.scrollPosition<0}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.searchQuery,expression:"searchQuery"}],ref:"search",staticClass:"search-field p-2 text-lg w-full bg-gray-100 rounded text-black",attrs:{type:"text",placeholder:"Search"},domProps:{value:n.searchQuery},on:{input:[function(e){e.target.composing||(n.searchQuery=e.target.value)},function(e){return n.filterList()}]}})])])}),[],!1,null,null,null);e.default=component.exports}},[[211,6,1,7]]]);