(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1066:function(e,t,o){"use strict";o.r(t);var n={watchQuery:function(e,t){this.loading=!0,this.selectedRegion=e.region,this.getRegionInfo()},components:{HotspotSelector:o(141).default},mounted:function(){this.getRegionInfo(),null==this.$route.query.region&&this.$router.push({path:"/"})},data:function(){return{selectedRegion:this.$route.query.region,regionInfo:{},loading:!0}},methods:{getRegionInfo:function(){var e=this;this.$route.query.region,this.$axios.get("https://api.ebird.org/v2/ref/region/info/"+this.selectedRegion,{params:{regionNameFormat:"nameonly"}}).then((function(t){e.regionInfo=t,e.loading=!1}),(function(e){console.log(e)}))}}},r=o(5),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.loading?o("div"):o("div",{staticClass:"h-full flex flex-col"},[o("h1",{staticClass:"mt-2"},[e._v(" "+e._s(e.regionInfo.data.result)+" County Hotspots")]),e._v(" "),o("p",[e._v("A list of birding hotspots in  "+e._s(e.regionInfo.data.result)+" and how many species have ever been recorded there")]),e._v(" "),o("HotspotSelector",{attrs:{regioninfo:e.regionInfo}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HotspotSelector:o(141).default})}}]);