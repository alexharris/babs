(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{352:function(e,t,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("bad8e090",content,!0,{sourceMap:!1})},353:function(e,t,n){"use strict";n(352)},354:function(e,t,n){var o=n(38)((function(i){return i[1]}));o.push([e.i,"",""]),e.exports=o},356:function(e,t,n){"use strict";n.r(t);var o=n(140),l=n.n(o),r=n(139),c=(new l.a("l74e03ri8jei"),{components:{RegionSelector:r.default},data:function(){return{selectedRegion:this.$route.query.region}},mounted:function(){},methods:{onSelectedRegion:function(e){this.selectedRegion=e,this.$router.push({query:{region:e}}),this.view="region"}}}),d=(n(353),n(11)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full"},[n("h1",{staticClass:"logo mb-8"},[e._v(e._s(e.$t("title")))]),e._v(" "),n("RegionSelector",{on:{"selected-region":e.onSelectedRegion}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RegionSelector:n(139).default})}}]);