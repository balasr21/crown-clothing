(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[4],{122:function(t,e,n){},123:function(t,e,n){},128:function(t,e,n){"use strict";n.r(e);var r=n(85),c=n(3),o=n(6),a=n(84),i=n(7),u=n(39),s=n(0),l=n.n(s),f=n(1),p=n(87),h=(n(122),Object(f.g)((function(t){var e=t.title,n=t.items,r=t.history,c=t.match,o=t.routeName;return l.a.createElement("div",{className:"collection-preview"},l.a.createElement("h1",{className:"title",onClick:function(){return r.push("".concat(c.path,"/").concat(o))}},e.toUpperCase()),l.a.createElement("div",{className:"preview"},n.filter((function(t,e){return e<4})).map((function(t){return l.a.createElement(p.a,{key:t.id,item:t})}))))}))),_=(n(123),Object(c.b)({collections:a.c})),d=Object(i.b)(_)((function(t){var e=t.collections;return console.log("Collections list "+e),l.a.createElement("div",{className:"collection-overview"},e.map((function(t){var e=t.id,n=Object(u.a)(t,["id"]);return l.a.createElement(h,Object.assign({key:e},n))})))})),v=Object(c.b)({isloading:function(t){return!Object(a.a)(t)}}),m=Object(o.d)(Object(i.b)(v),r.a)(d);e.default=m},84:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n(3),c=n(86),o=n.n(c),a=function(t){return t.shop},i=Object(r.a)([a],(function(t){return t.collections})),u=o()((function(t){return Object(r.a)([i],(function(e){return e?e[t]:null}))})),s=Object(r.a)([i],(function(t){return t?Object.keys(t).map((function(e){return t[e]})):null})),l=(Object(r.a)([a],(function(t){return t.isFetching})),Object(r.a)([a],(function(t){return!!t.collections})))},85:function(t,e,n){"use strict";var r=n(39),c=n(0),o=n.n(c),a=n(41);e.a=function(t){return function(e){var n=e.isloading,c=Object(r.a)(e,["isloading"]);return n?o.a.createElement(a.a,null):o.a.createElement(t,c)}}},86:function(t,e,n){(function(e){var n=/^\[object .+?Constructor\]$/,r="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,o=r||c||Function("return this")();var a=Array.prototype,i=Function.prototype,u=Object.prototype,s=o["__core-js_shared__"],l=function(){var t=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),f=i.toString,p=u.hasOwnProperty,h=u.toString,_=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),d=a.splice,v=w(o,"Map"),m=w(Object,"create");function y(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function b(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function g(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t,e){for(var n,r,c=t.length;c--;)if((n=t[c][0])===(r=e)||n!==n&&r!==r)return c;return-1}function O(t){return!(!N(t)||(e=t,l&&l in e))&&(function(t){var e=N(t)?h.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?_:n).test(function(t){if(null!=t){try{return f.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t));var e}function E(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function w(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return O(n)?n:void 0}function k(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,c=e?e.apply(this,r):r[0],o=n.cache;if(o.has(c))return o.get(c);var a=t.apply(this,r);return n.cache=o.set(c,a),a};return n.cache=new(k.Cache||g),n}function N(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}y.prototype.clear=function(){this.__data__=m?m(null):{}},y.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},y.prototype.get=function(t){var e=this.__data__;if(m){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return p.call(e,t)?e[t]:void 0},y.prototype.has=function(t){var e=this.__data__;return m?void 0!==e[t]:p.call(e,t)},y.prototype.set=function(t,e){return this.__data__[t]=m&&void 0===e?"__lodash_hash_undefined__":e,this},b.prototype.clear=function(){this.__data__=[]},b.prototype.delete=function(t){var e=this.__data__,n=j(e,t);return!(n<0)&&(n==e.length-1?e.pop():d.call(e,n,1),!0)},b.prototype.get=function(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]},b.prototype.has=function(t){return j(this.__data__,t)>-1},b.prototype.set=function(t,e){var n=this.__data__,r=j(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},g.prototype.clear=function(){this.__data__={hash:new y,map:new(v||b),string:new y}},g.prototype.delete=function(t){return E(this,t).delete(t)},g.prototype.get=function(t){return E(this,t).get(t)},g.prototype.has=function(t){return E(this,t).has(t)},g.prototype.set=function(t,e){return E(this,t).set(t,e),this},k.Cache=g,t.exports=k}).call(this,n(16))},87:function(t,e,n){"use strict";var r=n(0),c=n.n(r),o=n(40),a=n(7),i=n(22);n(88);e.a=Object(a.b)(null,(function(t){return{addItem:function(e){return t(Object(i.a)(e))}}}))((function(t){var e=t.item,n=t.addItem,r=e.name,a=e.price,i=e.imageUrl;return console.log(e),c.a.createElement("div",{className:"collection-item"},c.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),c.a.createElement("div",{className:"collection-footer"},c.a.createElement("span",{className:"name"},r),c.a.createElement("span",{className:"price"},a)),c.a.createElement(o.a,{onClick:function(){return n(e)},inverted:!0},"ADD TO CART"))}))},88:function(t,e,n){}}]);
//# sourceMappingURL=4.bd031849.chunk.js.map