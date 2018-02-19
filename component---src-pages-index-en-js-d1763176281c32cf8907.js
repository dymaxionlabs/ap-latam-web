webpackJsonp([0x9e280d50957e],{389:function(e,t,a){e.exports=a.p+"static/mapbox-logo-color.b96e838c.png"},207:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),c=l(n),s=a(74),i=l(s),r=function(e){return c.default.createElement("ul",null,e.items.map(function(t){return c.default.createElement(u,{key:t.internalId,prefix:e.prefix,item:t})}))},u=function(e){var t=e.prefix+"/map?id="+e.item.internalId,a=e.item.name+", "+e.item.country;return c.default.createElement("li",null,c.default.createElement(i.default,{to:t},a))};t.default={CityList:r,CityListItem:u},e.exports=t.default},210:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),c=l(n),s=function(e){return c.default.createElement("table",{className:"table is-fullwidth"},e.items.map(function(e){return c.default.createElement(i,{key:e.url,item:e})}))},i=function(e){return c.default.createElement("tr",null,c.default.createElement("th",null,e.item.name),c.default.createElement("td",null,c.default.createElement("a",{href:e.item.url,target:"_blank"},e.item.title)))};t.default={NewsList:s,NewsListItem:i},e.exports=t.default},575:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(2),c=l(n),s=a(74),i=l(s),r=a(166),u=l(r),m=a(207),d=a(210),o=a(389),f=l(o),E=function(e){var t=e.data,a=t.allCitiesJson.edges.map(function(e){return e.node});return c.default.createElement("div",null,c.default.createElement("section",{className:"hero is-medium is-primary is-bold"},c.default.createElement("div",{className:"logo hero-body"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title is-1"},t.site.siteMetadata.name),c.default.createElement("h2",{className:"subtitle is-4"},"Monitor of potential slums and informal settlements."),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"This map is based on the application of"," ",c.default.createElement("em",null,"machine learning")," techniques on satellite images and other georeferenced data."))))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Explore"),c.default.createElement("h2",{className:"subtitle"},"Click on the name of a city to explore the map."),c.default.createElement(m.CityList,{prefix:"/en",items:a}))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Data"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"You can access the data presented on the map, both the vector layer of the detected settlements, as well as other analytical data generated, grouped by city and by last updated time."),c.default.createElement(i.default,{className:"button is-primary",to:"/en/data"},"Download Data")))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Publications"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"You can download and read publications about the detection methodology."),c.default.createElement(i.default,{className:"button is-primary",to:"/en/publications"},"See Publications")))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"On Press"),c.default.createElement("div",{className:"content"},c.default.createElement(d.NewsList,{items:t.site.siteMetadata.press})))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"With support of"),c.default.createElement("div",{className:"has-text-centered"},c.default.createElement("ul",{className:"sponsors"},c.default.createElement("li",null,c.default.createElement("a",{href:"https://www.mapbox.com"},c.default.createElement("img",{src:f.default,alt:"Mapbox"}))))))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"License"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"Data is made available made available under the"," ",c.default.createElement("strong",null,"Public Domain Dedication and License version 1.0"),", from Open Data Commons.",c.default.createElement("br",null)," You are free to copy, distribute and use the data, produce new publications based on them, and modify and transform it."),c.default.createElement("a",{className:"button is-primary",href:"https://opendatacommons.org/licenses/pddl/",target:"_blank"},"Read License")))),c.default.createElement("section",{className:"section"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"title"},"Contact"),c.default.createElement("div",{className:"content"},c.default.createElement("p",null,"If you have any question about our methodology or data, contact us via ",c.default.createElement("a",{href:"mailto:contacto@dymaxionalabs.com"},"e-mail"))))),c.default.createElement(u.default,null))};t.query="** extracted graphql fragment **";t.default=E}});
//# sourceMappingURL=component---src-pages-index-en-js-d1763176281c32cf8907.js.map