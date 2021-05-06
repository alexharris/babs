(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1057:function(e,t,o){"use strict";o.r(t);var n=o(299),r=o.n(n),c=o(138),l=(new r.a("l74e03ri8jei"),{components:{RegionSelector:c.default},data:function(){return{selectedRegion:this.$route.query.region,allBirdCodes:[]}},mounted:function(){this.getAllBirdCodes()},methods:{getAllBirdCodes:function(){var e=this;this.$axios.get("https://api.ebird.org/v2/product/spplist/US-CA",{params:{}}).then((function(t){console.log(t),e.allBirdCodes=t.data}),(function(e){console.log(e)}))},onSelectedRegion:function(e){this.selectedRegion=e,this.$router.push({query:{region:e}}),this.view="region"}}}),d=(o(355),o(6)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-full"},[o("h1",{staticClass:"logo"},[e._v(e._s(e.$t("title")))]),e._v(" "),o("p",[e._v("Select a county to get started")]),e._v(" "),o("RegionSelector",{on:{"selected-region":e.onSelectedRegion}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RegionSelector:o(138).default})},298:function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,c){function l(e){try{f(n.next(e))}catch(e){c(e)}}function d(e){try{f(n.throw(e))}catch(e){c(e)}}function f(e){e.done?r(e.value):new o((function(t){t(e.value)})).then(l,d)}f((n=n.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=r(o(331)),l=o(301),d=o(302),f=o(303),m=o(304),O=o(305),v=o(306),R=o(307),h=o(308),P=o(309),y=o(310),_=o(311),A=o(312),U=o(313),S=o(314),C=o(315),N=o(316),I=o(317),$=o(318),j=o(319),x=o(320),M=o(321),T=o(322),k=o(323);t.EbirdClient=class{constructor(e){this.ebirdHttp=c.default.create({baseURL:"https://ebird.org/ws2.0",headers:{"x-ebirdapitoken":e}})}adjacentRegions(e){return this.get(l.AdjacentRegionsUrl,l.AdjacentRegionsParams,e)}checklistFeedOnADate(e){return this.get(d.ChecklistFeedOnADateUrl,d.ChecklistFeedOnADateParams,e)}historicObservationsOnADate(e){return this.get(f.HistoricObservationsOnADateUrl,f.HistoricObservationsOnADateParams,e)}hotspotsInARegion(e){return this.get(O.HotspotsInARegionUrl,O.HotspotsInARegionParams,e)}hotspotInfo(e){return this.get(m.HotspotInfoUrl,m.HotspotInfoParams,e)}nearbyHotspots(e){return this.get(v.NearbyHotspotsUrl,v.NearbyHotspotsParams,e)}nearestObservationsOfASpecies(e){return this.get(R.NearestObservationsOfASpeciesUrl,R.NearestObservationsOfASpeciesParams,e)}recentChecklistsFeed(e){return this.get(h.RecentChecklistsFeedUrl,h.RecentChecklistsFeedParams,e)}recentNearbyNotableObservations(e){return this.get(P.RecentNearbyNotableObservationsUrl,P.RecentNearbyNotableObservationsParams,e)}recentNearbyObservations(e){return this.get(y.RecentNearbyObservationsUrl,y.RecentNearbyObservationsParams,e)}recentNearbyObservationsOfASpecies(e){return this.get(_.RecentNearbyObservationsOfASpeciesUrl,_.RecentNearbyObservationsOfASpeciesParams,e)}recentNotableObservationsInARegion(e){return this.get(A.RecentNotableObservationsInARegionUrl,A.RecentNotableObservationsInARegionParams,e)}recentObservationsInARegion(e){return this.get(U.RecentObservationsInARegionUrl,U.RecentObservationsInARegionParams,e)}recentObservationsOfASpeciesInARegion(e){return this.get(S.RecentObservationsOfASpeciesInARegionUrl,S.RecentObservationsOfASpeciesInARegionParams,e)}regionalStatisticsOnADate(e){return this.get(C.RegionalStatisticsOnADateUrl,C.RegionalStatisticsOnADateParams,e)}regionInfo(e){return this.get(N.RegionInfoUrl,N.RegionInfoParams,e)}subRegionList(e){return this.get(I.SubRegionListUrl,I.SubRegionListParams,e)}taxonomicForms(e){return this.get($.TaxonomicFormsUrl,$.TaxonomicFormsParams,e)}taxonomicGroups(e){return this.get(j.TaxonomicGroupsUrl,j.TaxonomicGroupsParams,e)}taxonomy(e){return this.get(x.TaxonomyUrl,x.TaxonomyParams,e)}taxonomyVersions(e){return this.get(M.TaxonomyVersionsUrl,M.TaxonomyVersionsParams,e)}top100(e){return this.get(T.Top100Url,T.Top100Params,e)}viewChecklist(e){return this.get(k.ViewChecklistUrl,k.ViewChecklistParams,e)}get(e,t,o){return n(this,void 0,void 0,(function*(){const n=this.generateQueryString(t,o);return(yield this.ebirdHttp.get(`${e(o)}?${n}`)).data}))}generateQueryString(e,t){const o=[];for(const n of e)if(t.hasOwnProperty(n)){const e=t[n];if(void 0===e)continue;e instanceof Array?o.push(`${n}=${e.join(",")}`):o.push(`${n}=${e.toString()}`)}return o.join("&")}}},299:function(e,t,o){"use strict";function n(e){for(var p in e)t.hasOwnProperty(p)||(t[p]=e[p])}Object.defineProperty(t,"__esModule",{value:!0});const r=o(298);t.default=r.EbirdClient,n(o(298)),n(o(324)),n(o(325)),n(o(326)),n(o(327)),n(o(328)),n(o(329)),n(o(330))},301:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdjacentRegionsParams=[],t.AdjacentRegionsUrl=e=>`/ref/adjacent/${e.regionCode}`},302:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChecklistFeedOnADateParams=["sortKey","maxResults"],t.ChecklistFeedOnADateUrl=e=>`/product/lists/${e.regionCode}/${e.y}/${e.m}/${e.d}`},303:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HistoricObservationsOnADateParams=["rank","cat","maxResults","detail","includeProvisional","hotspot","r"],t.HistoricObservationsOnADateUrl=e=>`/data/obs/${e.regionCode}/historic/${e.y}/${e.m}/${e.d}`},304:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HotspotInfoParams=[],t.HotspotInfoUrl=e=>`ref/hotspot/info/${e.locId}`},305:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HotspotsInARegionParams=["back","fmt"],t.HotspotsInARegionUrl=e=>`/ref/hotspot/${e.regionCode}`},306:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NearbyHotspotsParams=["lat","lng","dist","back","fmt"],t.NearbyHotspotsUrl=e=>"/ref/hotspot/geo"},307:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NearestObservationsOfASpeciesParams=["lat","lng","dist","back","maxResults","includeProvisional","hotspot"],t.NearestObservationsOfASpeciesUrl=e=>`/data/nearest/geo/recent/${e.speciesCode}`},308:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentChecklistsFeedParams=["maxResults"],t.RecentChecklistsFeedUrl=e=>`/product/lists/${e.regionCode}`},309:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNearbyNotableObservationsParams=["lat","lng","dist","back","maxResults","detail","hotspot"],t.RecentNearbyNotableObservationsUrl=e=>"/data/obs/geo/recent/notable"},310:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNearbyObservationsParams=["lat","lng","dist","back","cat","maxResults","includeProvisional","hotspot","sort","sppLocale"],t.RecentNearbyObservationsUrl=e=>"/data/obs/geo/recent"},311:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNearbyObservationsOfASpeciesParams=["lat","lng","dist","back","maxResults","includeProvisional","hotspot","sppLocale"],t.RecentNearbyObservationsOfASpeciesUrl=e=>`/data/obs/geo/recent/${e.speciesCode}`},312:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNotableObservationsInARegionParams=["back","maxResults","detail","hotspot","r"],t.RecentNotableObservationsInARegionUrl=e=>`/data/obs/${e.regionCode}/recent/notable`},313:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentObservationsInARegionParams=["back","cat","maxResults","includeProvisional","hotspot","r"],t.RecentObservationsInARegionUrl=e=>`/data/obs/${e.regionCode}/recent`},314:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentObservationsOfASpeciesInARegionParams=["back","maxResults","includeProvisional","hotspot","r"],t.RecentObservationsOfASpeciesInARegionUrl=e=>`/data/obs/${e.regionCode}/recent/${e.speciesCode}`},315:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RegionalStatisticsOnADateParams=[],t.RegionalStatisticsOnADateUrl=e=>`/product/stats/${e.regionCode}/${e.y}/${e.m}/${e.d}`},316:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RegionInfoParams=["regionNameFormat","delim"],t.RegionInfoUrl=e=>`/ref/region/info/${e.regionCode}`},317:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubRegionListParams=[],t.SubRegionListUrl=e=>`/ref/region/list/${e.regionType}/${e.parentRegionCode}.${e.fmt}}`},318:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomicFormsParams=[],t.TaxonomicFormsUrl=e=>`/ref/taxon/forms/${e.speciesCode}`},319:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomicGroupsParams=[],t.TaxonomicGroupsUrl=e=>`/ref/sppgroup/${e.speciesGrouping}`},320:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomyParams=["cat","locale","fmt","version","species"],t.TaxonomyUrl=e=>"/ref/taxonomy/ebird"},321:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomyVersionsParams=[],t.TaxonomyVersionsUrl=e=>"/ref/taxonomy/versions"},322:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Top100Params=["checklistSort","maxResults"],t.Top100Url=e=>`/product/top100/${e.regionCode}/${e.y}/${e.m}/${e.d}`},323:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ViewChecklistParams=[],t.ViewChecklistUrl=e=>`/product/checklist/view/${e.subId}`},324:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ALL="all",e.DOMESTIC="domestic",e.FORM="form",e.HYBRID="hybrid",e.INTERGRADE="intergrade",e.ISSF="issf",e.SLASH="slash",e.SPECIES="species",e.SPUH="spuh"}(t.Category||(t.Category={}))},325:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SIMPLE="simple",e.FULL="full"}(t.DetailEnum||(t.DetailEnum={}))},326:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CSV="csv",e.JSON="json"}(t.Format||(t.Format={}))},327:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CREATE="create",e.MREC="mrec"}(t.Rank||(t.Rank={}))},328:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.NAME_ONLY="nameonly",e.NAME_QUAL="namequal",e.DETAILED="detailed",e.DETAILED_NO_QUAL="detailednoqual",e.REV_DETAILED="revdetailed",e.FULL="full"}(t.RegionNameFormat||(t.RegionNameFormat={}))},329:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SUB_NATIONAL_1="subnational1",e.SUB_NATIONAL_2="subnational2",e.COUNTRY="country"}(t.RegionType||(t.RegionType={}))},330:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.DATE="date",e.SPECIES="species"}(t.Sort||(t.Sort={}))},337:function(e,t,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(38).default)("bad8e090",content,!0,{sourceMap:!1})},355:function(e,t,o){"use strict";o(337)},356:function(e,t,o){var n=o(37)((function(i){return i[1]}));n.push([e.i,"",""]),e.exports=n}}]);