(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],p=0,f=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"47ba":function(e,t,n){},"48b0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"cell cell-map"},[n("MapContainer",{attrs:{geojson:e.geojson},on:{select:function(t){e.selected=t}}})],1),n("div",{staticClass:"cell cell-edit"},[n("Edit",{attrs:{geojson:e.geojson},on:{change:function(t){e.geojson=t}}})],1),n("div",{staticClass:"cell cell-inspect"},[n("Inspect",{attrs:{feature:e.selected}})],1)])},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ol-map"}})},c=[],i=n("a2c7"),s=n("5eee"),l=n("480c"),p=n("d0e9"),f=n("3e6b"),d=n("5831"),v=n("a2e1"),g=(n("5bc0"),{name:"MapContainer",components:{},props:{geojson:Object},data:function(){return{olMap:null,vectorLayer:null,selectedFeature:null}},mounted:function(){var e=this;this.vectorLayer=new f["a"]({source:new d["a"]({features:[]})}),this.olMap=new s["a"]({target:"ol-map",layers:[new l["a"]({source:new p["a"]}),this.vectorLayer],view:new i["a"]({zoom:0,center:[0,0],constrainResolution:!0})}),this.olMap.on("pointermove",(function(t){var n=e.olMap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));n!==e.selectedFeature&&e.$set(e,"selectedFeature",n)})),this.updateSource(this.geojson)},watch:{geojson:function(e){this.updateSource(e)},selectedFeature:function(e){this.$emit("select",e)}},methods:{updateSource:function(e){var t=this.olMap.getView(),n=this.vectorLayer.getSource(),r=new v["a"]({featureProjection:"EPSG:3857"}).readFeatures(e);n.clear(),n.addFeatures(r),t.fit(n.getExtent())}}}),h=g,b=(n("b7de"),n("2877")),m=Object(b["a"])(h,u,c,!1,null,null,null),j=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.geojsonEdit,expression:"geojsonEdit"}],domProps:{value:e.geojsonEdit},on:{input:function(t){t.target.composing||(e.geojsonEdit=t.target.value)}}})},w=[],O={name:"Edit",props:{geojson:Object},computed:{geojsonEdit:{set:function(e){this.$emit("change",JSON.parse(e))},get:function(){return JSON.stringify(this.geojson,null," ")}}}},_=O,x=(n("a678"),Object(b["a"])(_,y,w,!1,null,"a96f935c",null)),E=x.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.props,(function(t){return n("li",{key:t},[n("b",[e._v(e._s(t)+":")]),e._v(" "+e._s(e.feature.get(t))+" ")])})),0)},P=[],S=(n("4de4"),n("4cdf")),F={name:"Inspect",props:{feature:S["a"]},computed:{props:function(){var e=this;return this.feature?this.feature.getKeys().filter((function(t){return t!==e.feature.getGeometryName()})):[]}}},$=F,C=(n("edd4"),Object(b["a"])($,M,P,!1,null,"8df426f6",null)),k=C.exports,J={name:"App",components:{Inspect:k,Edit:E,MapContainer:j},data:function(){return{selected:void 0,geojson:{type:"Feature",properties:{name:"default object",quality:"top"},geometry:{type:"Polygon",coordinates:[[[-27.0703125,43.58039085560784],[-28.125,23.563987128451217],[-10.8984375,32.84267363195431],[-27.0703125,43.58039085560784]]]}}}}},L=J,N=(n("034f"),Object(b["a"])(L,o,a,!1,null,null,null)),I=N.exports;n("ba2b");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(I)}}).$mount("#app")},"85ec":function(e,t,n){},"98e9":function(e,t,n){},a678:function(e,t,n){"use strict";var r=n("98e9"),o=n.n(r);o.a},b7de:function(e,t,n){"use strict";var r=n("47ba"),o=n.n(r);o.a},ba2b:function(e,t){},edd4:function(e,t,n){"use strict";var r=n("48b0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.48661cf3.js.map