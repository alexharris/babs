(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{362:function(t,e,n){"use strict";n.r(e);var o={mounted:function(){this.getSpeciesInfo()},data:function(){return{filteredSpecies:[],speciesInfo:{},loading:!0}},methods:{getSpeciesInfo:function(){var t=this;this.$axios.get("https://api.ebird.org/v2/data/obs/"+this.$route.query.region+"/recent/"+this.$route.query.species,{}).then((function(e){t.speciesInfo=e,t.filteredSpecies=e,t.loading=!1,console.log(e.data)}),(function(t){console.log(t)}))}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.loading?o("div",[o("LoadingAnimation")],1):o("div",[o("SearchList",{attrs:{list:t.speciesInfo.data,titleProp:"comName"},on:{"filter-query":function(e){t.filteredHotspots=e}}}),t._v(" "),o("img",{attrs:{src:n(210)}}),t._v(" "),o("h1",[t._v(t._s(t.speciesInfo.data[0].comName))]),t._v(" "),o("p",[t._v(t._s(t.speciesInfo.data[0].sciName))]),t._v(" "),o("div",{staticClass:"w-full h-64 rounded-full",attrs:{id:"map-wrap"}},[o("client-only",[o("l-map",{attrs:{zoom:11,center:[t.speciesInfo.data[0].lat,t.speciesInfo.data[0].lng]}},[o("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),t._l(t.speciesInfo.data,(function(e){return[o("l-marker",{attrs:{"lat-lng":[e.lat,e.lng]},on:{click:function(n){return t.hotspotSelected(e.locId)}}})]}))],2)],1)],1),t._v(" "),o("table",{staticClass:" w-full my-2"},[t._m(0),t._v(" "),o("tbody",t._l(t.filteredSpecies.data,(function(e){return o("tr",[o("td",{staticClass:"border-t border-gray-400 py-2"},[t._v(t._s(e.locName))]),t._v(" "),o("td",{staticClass:"border-t border-gray-400 py-2"},[t._v(t._s(e.howMany))]),t._v(" "),o("td",{staticClass:"border-t border-gray-400 py-2"},[t._v(t._s(e.obsDate))])])})),0)])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"text-left"},[n("tr",[n("th",[t._v("Location")]),t._v(" "),n("th",[t._v("#")]),t._v(" "),n("th",[t._v("Date")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SearchList:n(65).default,LoadingAnimation:n(57).default})}}]);