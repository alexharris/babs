(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{357:function(t,o,n){"use strict";n.r(o);var e=n(140),c=new(n.n(e).a)("l74e03ri8jei"),r={data:function(){return{hotspotInfo:[],mapLoading:!0}},mounted:function(){this.getHotspotInfo(this.$route.query.hotspot)},computed:{selectedHotspot:function(){return this.$store.state.hotspot}},methods:{getHotspotInfo:function(t){var o=this;c.hotspotInfo({locId:t}).then((function(data){o.hotspotInfo=data}))}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"h-full"},[n("h2",[t._v(t._s(t.hotspotInfo.name))]),t._v(" "),n("RecentObservationsInARegion")],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{RecentObservationsInARegion:n(141).default})}}]);