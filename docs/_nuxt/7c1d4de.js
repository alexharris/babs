(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1064:function(e,t,o){"use strict";o.r(t);var n=o(313),r=o.n(n),c=o(142),l=(new r.a("l74e03ri8jei"),{components:{RegionSelector:c.default},data:function(){return{selectedRegion:this.$route.query.region,allBirdCodes:[]}},mounted:function(){this.getAllBirdCodes()},methods:{getAllBirdCodes:function(){var e=this;this.$axios.get("https://api.ebird.org/v2/product/spplist/US-CA",{params:{}}).then((function(t){e.allBirdCodes=t.data}),(function(e){console.log(e)}))},onSelectedRegion:function(e){this.selectedRegion=e,this.$router.push({query:{region:e}}),this.view="region"}}}),d=(o(362),o(5)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-full h-full"},[o("RegionSelector",{on:{"selected-region":e.onSelectedRegion}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RegionSelector:o(142).default})},306:function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,c){function l(e){try{f(n.next(e))}catch(e){c(e)}}function d(e){try{f(n.throw(e))}catch(e){c(e)}}function f(e){e.done?r(e.value):new o((function(t){t(e.value)})).then(l,d)}f((n=n.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=r(o(314)),l=o(332),d=o(333),f=o(334),m=o(335),O=o(336),R=o(337),v=o(338),h=o(339),P=o(340),y=o(341),_=o(342),A=o(343),U=o(344),S=o(345),C=o(346),N=o(347),I=o(348),j=o(349),$=o(350),x=o(351),M=o(352),T=o(353),k=o(354);t.EbirdClient=class{constructor(e){this.ebirdHttp=c.default.create({baseURL:"https://ebird.org/ws2.0",headers:{"x-ebirdapitoken":e}})}adjacentRegions(e){return this.get(l.AdjacentRegionsUrl,l.AdjacentRegionsParams,e)}checklistFeedOnADate(e){return this.get(d.ChecklistFeedOnADateUrl,d.ChecklistFeedOnADateParams,e)}historicObservationsOnADate(e){return this.get(f.HistoricObservationsOnADateUrl,f.HistoricObservationsOnADateParams,e)}hotspotsInARegion(e){return this.get(O.HotspotsInARegionUrl,O.HotspotsInARegionParams,e)}hotspotInfo(e){return this.get(m.HotspotInfoUrl,m.HotspotInfoParams,e)}nearbyHotspots(e){return this.get(R.NearbyHotspotsUrl,R.NearbyHotspotsParams,e)}nearestObservationsOfASpecies(e){return this.get(v.NearestObservationsOfASpeciesUrl,v.NearestObservationsOfASpeciesParams,e)}recentChecklistsFeed(e){return this.get(h.RecentChecklistsFeedUrl,h.RecentChecklistsFeedParams,e)}recentNearbyNotableObservations(e){return this.get(P.RecentNearbyNotableObservationsUrl,P.RecentNearbyNotableObservationsParams,e)}recentNearbyObservations(e){return this.get(y.RecentNearbyObservationsUrl,y.RecentNearbyObservationsParams,e)}recentNearbyObservationsOfASpecies(e){return this.get(_.RecentNearbyObservationsOfASpeciesUrl,_.RecentNearbyObservationsOfASpeciesParams,e)}recentNotableObservationsInARegion(e){return this.get(A.RecentNotableObservationsInARegionUrl,A.RecentNotableObservationsInARegionParams,e)}recentObservationsInARegion(e){return this.get(U.RecentObservationsInARegionUrl,U.RecentObservationsInARegionParams,e)}recentObservationsOfASpeciesInARegion(e){return this.get(S.RecentObservationsOfASpeciesInARegionUrl,S.RecentObservationsOfASpeciesInARegionParams,e)}regionalStatisticsOnADate(e){return this.get(C.RegionalStatisticsOnADateUrl,C.RegionalStatisticsOnADateParams,e)}regionInfo(e){return this.get(N.RegionInfoUrl,N.RegionInfoParams,e)}subRegionList(e){return this.get(I.SubRegionListUrl,I.SubRegionListParams,e)}taxonomicForms(e){return this.get(j.TaxonomicFormsUrl,j.TaxonomicFormsParams,e)}taxonomicGroups(e){return this.get($.TaxonomicGroupsUrl,$.TaxonomicGroupsParams,e)}taxonomy(e){return this.get(x.TaxonomyUrl,x.TaxonomyParams,e)}taxonomyVersions(e){return this.get(M.TaxonomyVersionsUrl,M.TaxonomyVersionsParams,e)}top100(e){return this.get(T.Top100Url,T.Top100Params,e)}viewChecklist(e){return this.get(k.ViewChecklistUrl,k.ViewChecklistParams,e)}get(e,t,o){return n(this,void 0,void 0,(function*(){const n=this.generateQueryString(t,o);return(yield this.ebirdHttp.get(`${e(o)}?${n}`)).data}))}generateQueryString(e,t){const o=[];for(const n of e)if(t.hasOwnProperty(n)){const e=t[n];if(void 0===e)continue;e instanceof Array?o.push(`${n}=${e.join(",")}`):o.push(`${n}=${e.toString()}`)}return o.join("&")}}},312:function(e,t,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("42230c74",content,!0,{sourceMap:!1})},313:function(e,t,o){"use strict";function n(e){for(var p in e)t.hasOwnProperty(p)||(t[p]=e[p])}Object.defineProperty(t,"__esModule",{value:!0});const r=o(306);t.default=r.EbirdClient,n(o(306)),n(o(355)),n(o(356)),n(o(357)),n(o(358)),n(o(359)),n(o(360)),n(o(361))},332:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdjacentRegionsParams=[],t.AdjacentRegionsUrl=e=>`/ref/adjacent/${e.regionCode}`},333:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChecklistFeedOnADateParams=["sortKey","maxResults"],t.ChecklistFeedOnADateUrl=e=>`/product/lists/${e.regionCode}/${e.y}/${e.m}/${e.d}`},334:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HistoricObservationsOnADateParams=["rank","cat","maxResults","detail","includeProvisional","hotspot","r"],t.HistoricObservationsOnADateUrl=e=>`/data/obs/${e.regionCode}/historic/${e.y}/${e.m}/${e.d}`},335:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HotspotInfoParams=[],t.HotspotInfoUrl=e=>`ref/hotspot/info/${e.locId}`},336:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HotspotsInARegionParams=["back","fmt"],t.HotspotsInARegionUrl=e=>`/ref/hotspot/${e.regionCode}`},337:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NearbyHotspotsParams=["lat","lng","dist","back","fmt"],t.NearbyHotspotsUrl=e=>"/ref/hotspot/geo"},338:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NearestObservationsOfASpeciesParams=["lat","lng","dist","back","maxResults","includeProvisional","hotspot"],t.NearestObservationsOfASpeciesUrl=e=>`/data/nearest/geo/recent/${e.speciesCode}`},339:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentChecklistsFeedParams=["maxResults"],t.RecentChecklistsFeedUrl=e=>`/product/lists/${e.regionCode}`},340:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNearbyNotableObservationsParams=["lat","lng","dist","back","maxResults","detail","hotspot"],t.RecentNearbyNotableObservationsUrl=e=>"/data/obs/geo/recent/notable"},341:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNearbyObservationsParams=["lat","lng","dist","back","cat","maxResults","includeProvisional","hotspot","sort","sppLocale"],t.RecentNearbyObservationsUrl=e=>"/data/obs/geo/recent"},342:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNearbyObservationsOfASpeciesParams=["lat","lng","dist","back","maxResults","includeProvisional","hotspot","sppLocale"],t.RecentNearbyObservationsOfASpeciesUrl=e=>`/data/obs/geo/recent/${e.speciesCode}`},343:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentNotableObservationsInARegionParams=["back","maxResults","detail","hotspot","r"],t.RecentNotableObservationsInARegionUrl=e=>`/data/obs/${e.regionCode}/recent/notable`},344:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentObservationsInARegionParams=["back","cat","maxResults","includeProvisional","hotspot","r","sppLocale"],t.RecentObservationsInARegionUrl=e=>`/data/obs/${e.regionCode}/recent`},345:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RecentObservationsOfASpeciesInARegionParams=["back","maxResults","includeProvisional","hotspot","r"],t.RecentObservationsOfASpeciesInARegionUrl=e=>`/data/obs/${e.regionCode}/recent/${e.speciesCode}`},346:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RegionalStatisticsOnADateParams=[],t.RegionalStatisticsOnADateUrl=e=>`/product/stats/${e.regionCode}/${e.y}/${e.m}/${e.d}`},347:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RegionInfoParams=["regionNameFormat","delim"],t.RegionInfoUrl=e=>`/ref/region/info/${e.regionCode}`},348:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubRegionListParams=[],t.SubRegionListUrl=e=>`/ref/region/list/${e.regionType}/${e.parentRegionCode}.${e.fmt}}`},349:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomicFormsParams=[],t.TaxonomicFormsUrl=e=>`/ref/taxon/forms/${e.speciesCode}`},350:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomicGroupsParams=[],t.TaxonomicGroupsUrl=e=>`/ref/sppgroup/${e.speciesGrouping}`},351:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomyParams=["cat","locale","fmt","version","species"],t.TaxonomyUrl=e=>"/ref/taxonomy/ebird"},352:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomyVersionsParams=[],t.TaxonomyVersionsUrl=e=>"/ref/taxonomy/versions"},353:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Top100Params=["checklistSort","maxResults"],t.Top100Url=e=>`/product/top100/${e.regionCode}/${e.y}/${e.m}/${e.d}`},354:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ViewChecklistParams=[],t.ViewChecklistUrl=e=>`/product/checklist/view/${e.subId}`},355:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ALL="all",e.DOMESTIC="domestic",e.FORM="form",e.HYBRID="hybrid",e.INTERGRADE="intergrade",e.ISSF="issf",e.SLASH="slash",e.SPECIES="species",e.SPUH="spuh"}(t.Category||(t.Category={}))},356:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SIMPLE="simple",e.FULL="full"}(t.DetailEnum||(t.DetailEnum={}))},357:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CSV="csv",e.JSON="json"}(t.Format||(t.Format={}))},358:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CREATE="create",e.MREC="mrec"}(t.Rank||(t.Rank={}))},359:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.NAME_ONLY="nameonly",e.NAME_QUAL="namequal",e.DETAILED="detailed",e.DETAILED_NO_QUAL="detailednoqual",e.REV_DETAILED="revdetailed",e.FULL="full"}(t.RegionNameFormat||(t.RegionNameFormat={}))},360:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SUB_NATIONAL_1="subnational1",e.SUB_NATIONAL_2="subnational2",e.COUNTRY="country"}(t.RegionType||(t.RegionType={}))},361:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.DATE="date",e.SPECIES="species"}(t.Sort||(t.Sort={}))},362:function(e,t,o){"use strict";o(312)},363:function(e,t,o){var n=o(31)((function(i){return i[1]}));n.push([e.i,"",""]),e.exports=n}}]);