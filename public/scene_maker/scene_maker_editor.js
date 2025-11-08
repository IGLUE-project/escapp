var SceneMaker = SceneMaker || {};

SceneMaker.VERSION = '1.0.0';

SceneMaker.getOptions = function(){
	try {
		if(window.parent.SCENE_MAKER_OPTIONS_PREVIEW){
			return window.parent.SCENE_MAKER_OPTIONS_PREVIEW;
		}
		if(window.SCENE_MAKER_OPTIONS){
			return window.SCENE_MAKER_OPTIONS;
		}
		if(window.parent.SCENE_MAKER_OPTIONS){
			return window.parent.SCENE_MAKER_OPTIONS;
		}
	} catch (e){}
	return;
};

/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*! jQuery UI - v1.9.2 - 2012-12-10
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.menu.js, jquery.ui.slider.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){e.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,n=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];for(var n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t=="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]==this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current;if(!r||(r.currentItem||r.element)[0]==this.element[0])return!1;var i=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope==r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(t,n,r){if(!n.offset)return!1;var i=(t.positionAbs||t.position.absolute).left,s=i+t.helperProportions.width,o=(t.positionAbs||t.position.absolute).top,u=o+t.helperProportions.height,a=n.offset.left,f=a+n.proportions.width,l=n.offset.top,c=l+n.proportions.height;switch(r){case"fit":return a<=i&&s<=f&&l<=o&&u<=c;case"intersect":return a<i+t.helperProportions.width/2&&s-t.helperProportions.width/2<f&&l<o+t.helperProportions.height/2&&u-t.helperProportions.height/2<c;case"pointer":var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,d=e.ui.isOver(p,h,l,a,n.proportions.height,n.proportions.width);return d;case"touch":return(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c)&&(i>=a&&i<=f||s>=a&&s<=f||i<a&&s>f);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r=e.ui.ddmanager.droppables[t.options.scope]||[],i=n?n.type:null,s=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var o=0;o<r.length;o++){if(r[o].options.disabled||t&&!r[o].accept.call(r[o].element[0],t.currentItem||t.element))continue;for(var u=0;u<s.length;u++)if(s[u]==r[o].element[0]){r[o].proportions.height=0;continue e}r[o].visible=r[o].element.css("display")!="none";if(!r[o].visible)continue;i=="mousedown"&&r[o]._activate.call(r[o],n),r[o].offset=r[o].element.offset(),r[o].proportions={width:r[o].element[0].offsetWidth,height:r[o].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r=e.ui.intersect(t,this,this.options.tolerance),i=!r&&this.isover==1?"isout":r&&this.isover==0?"isover":null;if(!i)return;var s;if(this.options.greedy){var o=this.options.scope,u=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===o});u.length&&(s=e.data(u[0],"droppable"),s.greedyChild=i=="isover"?1:0)}s&&i=="isover"&&(s.isover=0,s.isout=1,s._out.call(s,n)),this[i]=1,this[i=="isout"?"isover":"isout"]=0,this[i=="isover"?"_over":"_out"].call(this,n),s&&i=="isout"&&(s.isout=0,s.isover=1,s._over.call(s,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);(function(e,t){e.widget("ui.sortable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(t);var i=null,s=e(t.target).parents().each(function(){if(e.data(this,r.widgetName+"-item")==r)return i=e(this),!1});e.data(t.target,r.widgetName+"-item")==r&&(i=e(t.target));if(!i)return!1;if(this.options.handle&&!n){var o=!1;e(this.options.handle,i).find("*").andSelf().each(function(){this==t.target&&(o=!0)});if(!o)return!1}return this.currentItem=i,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),i.containment&&this._setContainment(),i.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",i.cursor)),i.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",i.opacity)),i.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",i.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(var s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var n=this.options,r=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var i=this.items.length-1;i>=0;i--){var s=this.items[i],o=s.item[0],u=this._intersectsWithPointer(s);if(!u)continue;if(s.instance!==this.currentContainer)continue;if(o!=this.currentItem[0]&&this.placeholder[u==1?"next":"prev"]()[0]!=o&&!e.contains(this.placeholder[0],o)&&(this.options.type=="semi-dynamic"?!e.contains(this.element[0],o):!0)){this.direction=u==1?"down":"up";if(this.options.tolerance!="pointer"&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(t){var n=this.options.axis==="x"||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),r=this.options.axis==="y"||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),i=n&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o=="right"||s=="down"?2:1:s&&(s=="down"?2:1):!1},_intersectsWithSides:function(t){var n=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),r=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s=="right"&&r||s=="left"&&!r:i&&(i=="down"&&n||i=="up"&&!n)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!=0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!=0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n=[],r=[],i=this._connectWith();if(i&&t)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&r.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])}}r.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var s=r.length-1;s>=0;s--)r[s][0].each(function(){n.push(this)});return e(n)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]==e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n=this.items,r=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],i=this._connectWith();if(i&&this.ready)for(var s=i.length-1;s>=0;s--){var o=e(i[s]);for(var u=o.length-1;u>=0;u--){var a=e.data(o[u],this.widgetName);a&&a!=this&&!a.options.disabled&&(r.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a))}}for(var s=r.length-1;s>=0;s--){var f=r[s][1],l=r[s][0];for(var u=0,c=l.length;u<c;u++){var h=e(l[u]);h.data(this.widgetName+"-item",f),n.push({item:h,instance:f,width:0,height:0,left:0,top:0})}}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var n=this.items.length-1;n>=0;n--){var r=this.items[n];if(r.instance!=this.currentContainer&&this.currentContainer&&r.item[0]!=this.currentItem[0])continue;var i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item;t||(r.width=i.outerWidth(),r.height=i.outerHeight());var s=i.offset();r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var n=this.containers.length-1;n>=0;n--){var s=this.containers[n].element.offset();this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}return this},_createPlaceholder:function(t){t=t||this;var n=t.options;if(!n.placeholder||n.placeholder.constructor==String){var r=n.placeholder;n.placeholder={element:function(){var n=e(document.createElement(t.currentItem[0].nodeName)).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return r||(n.style.visibility="hidden"),n},update:function(e,i){if(r&&!n.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}}}t.placeholder=e(n.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),n.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n=null,r=null;for(var i=this.containers.length-1;i>=0;i--){if(e.contains(this.currentItem[0],this.containers[i].element[0]))continue;if(this._intersectsWith(this.containers[i].containerCache)){if(n&&e.contains(this.containers[i].element[0],n.element[0]))continue;n=this.containers[i],r=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0)}if(!n)return;if(this.containers.length===1)this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1;else{var s=1e4,o=null,u=this.containers[r].floating?"left":"top",a=this.containers[r].floating?"width":"height",f=this.positionAbs[u]+this.offset.click[u];for(var l=this.items.length-1;l>=0;l--){if(!e.contains(this.containers[r].element[0],this.items[l].item[0]))continue;if(this.items[l].item[0]==this.currentItem[0])continue;var c=this.items[l].item.offset()[u],h=!1;Math.abs(c-f)>Math.abs(c+this.items[l][a]-f)&&(h=!0,c+=this.items[l][a]),Math.abs(c-f)<s&&(s=Math.abs(c-f),o=this.items[l],this.direction=h?"up":"down")}if(!o&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[r],o?this._rearrange(t,o,null,!0):this._rearrange(t,null,this.containers[r].element,!0),this._trigger("change",t,this._uiHash()),this.containers[r]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[r]._trigger("over",t,this._uiHash(this)),this.containers[r].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper=="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(r[0].style.width==""||n.forceHelperSize)&&r.width(this.currentItem.width()),(r[0].style.height==""||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)){var n=e(t.containment)[0],r=e(t.containment).offset(),i=e(n).css("overflow")!="hidden";this.containment=[r.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0)-this.margins.top,r.left+(i?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(i?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var s=t.pageX,o=t.pageY;if(this.originalPosition){this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top));if(n.grid){var u=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1];o=this.containment?u-this.offset.click.top<this.containment[1]||u-this.offset.click.top>this.containment[3]?u-this.offset.click.top<this.containment[1]?u+n.grid[1]:u-n.grid[1]:u:u;var a=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0];s=this.containment?a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2]?a-this.offset.click.left<this.containment[0]?a+n.grid[0]:a-n.grid[0]:a:a}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i==this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS)if(this._storedCSS[i]=="auto"||this._storedCSS[i]=="static")this._storedCSS[i]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&r.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!n&&r.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(r.push(function(e){this._trigger("remove",e,this._uiHash())}),r.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(var i=this.containers.length-1;i>=0;i--)n||r.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(var i=0;i<r.length;i++)r[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item")||n.item.data("item.autocomplete");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item")||t.item.data("item.autocomplete"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),e.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this.document.find(t||"body")[0]),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n=!1;e.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var r=e(t.target).closest(".ui-menu-item");!n&&r.not(".ui-state-disabled").length&&(n=!0,this.select(t),r.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),n=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var t,r,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",u=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(i.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),i.range&&(i.range===!0&&(i.values||(i.values=[this._valueMin(),this._valueMin()]),i.values.length&&i.values.length!==2&&(i.values=[i.values[0],i.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))),r=i.values&&i.values.length||1;for(t=s.length;t<r;t++)u.push(o);this.handles=s.add(e(u.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){i.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){i.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));i>n&&(i=n,s=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,s=e(this.handles[o])),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))}})})(jQuery);

/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License.
*
* Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
* Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
* Thanks to: Seamus Leahy for adding deltaX and deltaY
*
* Version: 3.0.4
*
* Requires: 1.2.2+
*/

(function(d){function g(a){var b=a||window.event,i=[].slice.call(arguments,1),c=0,h=0,e=0;a=d.event.fix(b);a.type="mousewheel";if(a.wheelDelta)c=a.wheelDelta/120;if(a.detail)c=-a.detail/3;e=c;if(b.axis!==undefined&&b.axis===b.HORIZONTAL_AXIS){e=0;h=-1*c}if(b.wheelDeltaY!==undefined)e=b.wheelDeltaY/120;if(b.wheelDeltaX!==undefined)h=-1*b.wheelDeltaX/120;i.unshift(a,c,h,e);return d.event.handle.apply(this,i)}var f=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
f.length;a;)this.addEventListener(f[--a],g,false);else this.onmousewheel=g},teardown:function(){if(this.removeEventListener)for(var a=f.length;a;)this.removeEventListener(f[--a],g,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

/*
 *	jQuery carouFredSel 6.2.0
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(D($){8($.1s.1v){H}$.1s.6i=$.1s.1v=D(u,w){8(1l.S==0){18(J,\'6j 55 6k 1j "\'+1l.4o+\'".\');H 1l}8(1l.S>1){H 1l.1W(D(){$(1l).1v(u,w)})}F y=1l,$12=1l[0],56=L;8(y.1q(\'57\')){56=y.1P(\'3o\',\'4p\');y.T(\'3o\',[\'4q\',J])}F z={};z.59=D(o,a,b){o=3S($12,o);o.E=6l($12,o.E);o.1K=6m($12,o.1K);o.N=6n($12,o.N);o.14=5a($12,o.14);o.16=5a($12,o.16);o.1b=6o($12,o.1b);o.1r=6p($12,o.1r);o.1Q=6q($12,o.1Q);8(a){31=$.1L(J,{},$.1s.1v.5b,o)}7=$.1L(J,{},$.1s.1v.5b,o);7.d=6r(7);A.2l=(7.2l==\'5c\'||7.2l==\'1m\')?\'16\':\'14\';F c=y.13(),2m=5d($1n,7,\'P\');8(3p(7.25)){7.25=\'7Q\'+G.3T}7.3U=5e(7,2m);7.E=6s(7.E,7,c,b);7[7.d[\'P\']]=6t(7[7.d[\'P\']],7,c);7[7.d[\'1e\']]=6u(7[7.d[\'1e\']],7,c);8(7.2H){8(!3V(7[7.d[\'P\']])){7[7.d[\'P\']]=\'2I%\'}}8(3V(7[7.d[\'P\']])){A.6v=J;A.4r=7[7.d[\'P\']];7[7.d[\'P\']]=4s(2m,A.4r);8(!7.E.M){7.E.U.1d=J}}8(7.2H){7.1R=L;7.1i=[0,0,0,0];7.1B=L;7.E.U.1d=L}O{8(!7.E.M){7=6w(7,2m)}8(!7[7.d[\'P\']]){8(!7.E.U.1d&&Y(7.E[7.d[\'P\']])&&7.E.1t==\'*\'){7[7.d[\'P\']]=7.E.M*7.E[7.d[\'P\']];7.1B=L}O{7[7.d[\'P\']]=\'1d\'}}8(1z(7.1B)){7.1B=(Y(7[7.d[\'P\']]))?\'5f\':L}8(7.E.U.1d){7.E.M=32(c,7,0)}}8(7.E.1t!=\'*\'&&!7.E.U.1d){7.E.U.4t=7.E.M;7.E.M=3W(c,7,0)}7.E.M=2x(7.E.M,7,7.E.U.2c,$12);7.E.U.20=7.E.M;8(7.2H){8(!7.E.U.34){7.E.U.34=7.E.M}8(!7.E.U.1X){7.E.U.1X=7.E.M}7=5g(7,c,2m)}O{7.1i=6x(7.1i);8(7.1B==\'3q\'){7.1B=\'1m\'}O 8(7.1B==\'5h\'){7.1B=\'35\'}1F(7.1B){R\'5f\':R\'1m\':R\'35\':8(7[7.d[\'P\']]!=\'1d\'){7=5i(7,c);7.1R=J}17;2J:7.1B=L;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?L:J;17}}8(!Y(7.1K.1M)){7.1K.1M=6y}8(1z(7.1K.E)){7.1K.E=(7.2H||7.E.U.1d||7.E.1t!=\'*\')?\'M\':7.E.M}7.N=$.1L(J,{},7.1K,7.N);7.14=$.1L(J,{},7.1K,7.14);7.16=$.1L(J,{},7.1K,7.16);7.1b=$.1L(J,{},7.1K,7.1b);7.N=6z($12,7.N);7.14=5j($12,7.14);7.16=5j($12,7.16);7.1b=6A($12,7.1b);7.1r=6B($12,7.1r);7.1Q=6C($12,7.1Q);8(7.2n){7.2n=5k(7.2n)}8(7.N.5l){7.N.4u=7.N.5l;3X(\'N.5l\',\'N.4u\')}8(7.N.5m){7.N.4v=7.N.5m;3X(\'N.5m\',\'N.4v\')}8(7.N.5n){7.N.4w=7.N.5n;3X(\'N.5n\',\'N.4w\')}8(7.N.5o){7.N.2K=7.N.5o;3X(\'N.5o\',\'N.2K\')}};z.6D=D(){y.1q(\'57\',J);F a=y.13(),3Y=6E(y,[\'6F\',\'6G\',\'3r\',\'3q\',\'35\',\'5h\',\'1m\',\'3Z\',\'P\',\'1e\',\'6H\',\'1S\',\'5p\',\'6I\']),5q=\'7R\';1F(3Y.3r){R\'6J\':R\'7S\':5q=3Y.3r;17}8(G.3s==\'36\'){41($1n)}O{$1n.Z(3Y)}$1n.Z({\'7T\':\'3t\',\'3r\':5q});41(y);y.1q(\'6K\',3Y.3Z);y.Z({\'6F\':\'1m\',\'6G\':\'42\',\'3r\':\'6J\',\'3q\':0,\'35\':\'N\',\'5h\':\'N\',\'1m\':0,\'6H\':0,\'1S\':0,\'5p\':0,\'6I\':0});4x(a,7);41(a);8(7.2H){5r(7,a)}};z.6L=D(){z.5s();y.11(I(\'6M\',G),D(e,a){e.1g();8(!A.2d){8(7.N.W){7.N.W.3a(2y(\'4y\',G))}}A.2d=J;8(7.N.1G){7.N.1G=L;y.T(I(\'3b\',G),a)}H J});y.11(I(\'5t\',G),D(e){e.1g();8(A.26){43(V)}H J});y.11(I(\'3b\',G),D(e,a,b){e.1g();1u=3u(1u);8(a&&A.26){V.2d=J;F c=2o()-V.2L;V.1M-=c;8(V.4z){V.4z.1M-=c}8(V.4A){V.4A.1M-=c}43(V,L)}8(!A.27&&!A.26){8(b){1u.3v+=2o()-1u.2L}}8(!A.27){8(7.N.W){7.N.W.3a(2y(\'6N\',G))}}A.27=J;8(7.N.4v){F d=7.N.2K-1u.3v,3c=2I-1H.2z(d*2I/7.N.2K);7.N.4v.1h($12,3c,d)}H J});y.11(I(\'1G\',G),D(e,b,c,d){e.1g();1u=3u(1u);F v=[b,c,d],t=[\'2M\',\'28\',\'3d\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'14\'&&b!=\'16\'){b=A.2l}8(!Y(c)){c=0}8(!1k(d)){d=L}8(d){A.2d=L;7.N.1G=J}8(!7.N.1G){e.2e();H 18(G,\'3w 4y: 2p 3f.\')}8(A.27){8(7.N.W){7.N.W.2N(2y(\'4y\',G));7.N.W.2N(2y(\'6N\',G))}}A.27=L;1u.2L=2o();F f=7.N.2K+c;44=f-1u.3v;3c=2I-1H.2z(44*2I/f);8(7.N.1f){1u.1f=7U(D(){F a=2o()-1u.2L+1u.3v,3c=1H.2z(a*2I/f);7.N.1f.4B.1h(7.N.1f.2q[0],3c)},7.N.1f.5u)}1u.N=7V(D(){8(7.N.1f){7.N.1f.4B.1h(7.N.1f.2q[0],2I)}8(7.N.4w){7.N.4w.1h($12,3c,44)}8(A.26){y.T(I(\'1G\',G),b)}O{y.T(I(b,G),7.N)}},44);8(7.N.4u){7.N.4u.1h($12,3c,44)}H J});y.11(I(\'3g\',G),D(e){e.1g();8(V.2d){V.2d=L;A.27=L;A.26=J;V.2L=2o();3x(V,G)}O{y.T(I(\'1G\',G))}H J});y.11(I(\'14\',G)+\' \'+I(\'16\',G),D(e,b,f,g,h){e.1g();8(A.2d||y.2f(\':3t\')){e.2e();H 18(G,\'3w 4y 7W 3t: 2p 3f.\')}F i=(Y(7.E.4C))?7.E.4C:7.E.M+1;8(i>K.Q){e.2e();H 18(G,\'2p 6O E (\'+K.Q+\' Q, \'+i+\' 6P): 2p 3f.\')}F v=[b,f,g,h],t=[\'2A\',\'28/2M\',\'D\',\'3d\'],a=3e(v,t);b=a[0];f=a[1];g=a[2];h=a[3];F k=e.5v.19(G.3y.45.S);8(!1T(b)){b={}}8(1o(g)){b.3h=g}8(1k(h)){b.2O=h}b=$.1L(J,{},7[k],b);8(b.5w&&!b.5w.1h($12,k)){e.2e();H 18(G,\'7X "5w" 7Y L.\')}8(!Y(f)){8(7.E.1t!=\'*\'){f=\'M\'}O{F m=[f,b.E,7[k].E];1j(F a=0,l=m.S;a<l;a++){8(Y(m[a])||m[a]==\'6Q\'||m[a]==\'M\'){f=m[a];17}}}1F(f){R\'6Q\':e.2e();H y.1P(I(k+\'7Z\',G),[b,g]);17;R\'M\':8(!7.E.U.1d&&7.E.1t==\'*\'){f=7.E.M}17}}8(V.2d){y.T(I(\'3g\',G));y.T(I(\'2O\',G),[k,[b,f,g]]);e.2e();H 18(G,\'3w 80 3f.\')}8(b.1M>0){8(A.26){8(b.2O){8(b.2O==\'2P\'){2g=[]}8(b.2O!=\'X\'||2g.S==0){y.T(I(\'2O\',G),[k,[b,f,g]])}}e.2e();H 18(G,\'3w 81 3f.\')}}1u.3v=0;y.T(I(\'6R\'+k,G),[b,f]);8(7.2n){F s=7.2n,c=[b,f];1j(F j=0,l=s.S;j<l;j++){F d=k;8(!s[j][2]){d=(d==\'14\')?\'16\':\'14\'}8(!s[j][1]){c[0]=s[j][0].1P(\'3o\',[\'6S\',d])}c[1]=f+s[j][3];s[j][0].T(\'3o\',[\'6R\'+d,c])}}H J});y.11(I(\'82\',G),D(e,b,c){e.1g();F d=y.13();8(!7.1U){8(K.X==0){8(7.3z){y.T(I(\'16\',G),K.Q-1)}H e.2e()}}1Y(d,7);8(!Y(c)){8(7.E.U.1d){c=4D(d,7,K.Q-1)}O 8(7.E.1t!=\'*\'){F f=(Y(b.E))?b.E:5x(y,7);c=6T(d,7,K.Q-1,f)}O{c=7.E.M}c=4E(c,7,b.E,$12)}8(!7.1U){8(K.Q-c<K.X){c=K.Q-K.X}}7.E.U.20=7.E.M;8(7.E.U.1d){F g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12);8(7.E.M+c<=g&&c<K.Q){c++;g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12)}7.E.M=g}O 8(7.E.1t!=\'*\'){F g=3W(d,7,K.Q-c);7.E.M=2x(g,7,7.E.U.2c,$12)}1Y(d,7,J);8(c==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+c+\' E 5y.\');K.X+=c;2h(K.X>=K.Q){K.X-=K.Q}8(!7.1U){8(K.X==0&&b.4F){b.4F.1h($12,\'14\')}8(!7.3z){3A(7,K.X,G)}}y.13().19(K.Q-c,K.Q).83(y);8(K.Q<7.E.M+c){y.13().19(0,(7.E.M+c)-K.Q).4G(J).47(y)}F d=y.13(),3i=6V(d,7,c),2i=6W(d,7),1Z=d.1N(c-1),21=3i.2P(),2r=2i.2P();1Y(d,7);F h=0,2B=0;8(7.1B){F p=4H(2i,7);h=p[0];2B=p[1]}F i=(h<0)?7.1i[7.d[3]]:0;F j=L,2Q=$();8(7.E.M<c){2Q=d.19(7.E.U.20,c);8(b.1V==\'6X\'){F k=7.E[7.d[\'P\']];j=2Q;1Z=2r;5z(j);7.E[7.d[\'P\']]=\'1d\'}}F l=L,3B=2R(d.19(0,c),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4K={},2s={},2S={},4L={},2T={},5A={},2U=5B(b,7,c,3B);1F(b.1V){R\'1I\':R\'1I-1w\':3C=2R(d.19(0,7.E.M),7,\'P\');17}8(j){7.E[7.d[\'P\']]=k}1Y(d,7,J);8(2B>=0){1Y(21,7,7.1i[7.d[1]])}8(h>=0){1Y(1Z,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=h}2T[7.d[\'1m\']]=-(3B-i);5A[7.d[\'1m\']]=-(3C-i);4K[7.d[\'1m\']]=2j[7.d[\'P\']];F m=D(){},1O=D(){},1C=D(){},3D=D(){},2C=D(){},5C=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(b.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':l=y.4G(J).47($1n);17}1F(b.1V){R\'3j\':R\'22\':R\'22-1w\':l.13().19(0,c).2t();l.13().19(7.E.U.20).2t();17;R\'1I\':R\'1I-1w\':l.13().19(7.E.M).2t();l.Z(5A);17}y.Z(2T);V=48(2U,b.2u,G);29[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){m=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){8(2r.4M(1Z).S){2s[7.d[\'1S\']]=1Z.1q(\'2a\');8(h<0){1Z.Z(2s)}O{1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}}1F(b.1V){R\'1I\':R\'1I-1w\':l.13().1N(c-1).Z(2s);17}8(2r.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\');1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])}}8(2B>=0){4L[7.d[\'1S\']]=2r.1q(\'2a\')+7.1i[7.d[1]];2C=D(){2r.Z(4L)};5C=D(){V.1a.1c([2r,4L])}}}1J=D(){y.Z(29)};F n=7.E.M+c-K.Q;1y=D(){8(n>0){y.13().19(K.Q).2t();3i=$(y.13().19(K.Q-(7.E.M-n)).3F().6Y(y.13().19(0,n).3F()))}5D(j);8(7.1R){F a=y.13().1N(7.E.M+c-1);a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F o=5E(3i,2Q,2i,c,\'14\',2U,2j);1x=D(){5F(y,l,b);A.26=L;2b.3h=4a($12,b,\'3h\',o,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,b,\'3G\',o,2b);1F(b.1V){R\'42\':y.Z(29);m();1C();2C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){m();1C();2C();1D();1J();1y();V=48(2U,b.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([l,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();2C();1D();1J();1y();17;R\'1I\':V.1a.1c([l,29,D(){1C();2C();1D();1J();1y();1x()}]);1O();17;R\'1I-1w\':V.1a.1c([y,{\'1E\':0}]);V.1a.1c([l,29,D(){y.Z({\'1E\':1});1C();2C();1D();1J();1y();1x()}]);1O();17;R\'22\':V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1y();1x()}]);1O();3D();5C();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'84\',G),D(e,c,d){e.1g();F f=y.13();8(!7.1U){8(K.X==7.E.M){8(7.3z){y.T(I(\'14\',G),K.Q-1)}H e.2e()}}1Y(f,7);8(!Y(d)){8(7.E.1t!=\'*\'){F g=(Y(c.E))?c.E:5x(y,7);d=6Z(f,7,0,g)}O{d=7.E.M}d=4E(d,7,c.E,$12)}F h=(K.X==0)?K.Q:K.X;8(!7.1U){8(7.E.U.1d){F i=32(f,7,d),g=4D(f,7,h-1)}O{F i=7.E.M,g=7.E.M}8(d+i>h){d=h-g}}7.E.U.20=7.E.M;8(7.E.U.1d){F i=2x(5I(f,7,d,h),7,7.E.U.2c,$12);2h(7.E.M-d>=i&&d<K.Q){d++;i=2x(5I(f,7,d,h),7,7.E.U.2c,$12)}7.E.M=i}O 8(7.E.1t!=\'*\'){F i=3W(f,7,d);7.E.M=2x(i,7,7.E.U.2c,$12)}1Y(f,7,J);8(d==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+d+\' E 70.\');K.X-=d;2h(K.X<0){K.X+=K.Q}8(!7.1U){8(K.X==7.E.M&&c.4F){c.4F.1h($12,\'16\')}8(!7.3z){3A(7,K.X,G)}}8(K.Q<7.E.M+d){y.13().19(0,(7.E.M+d)-K.Q).4G(J).47(y)}F f=y.13(),3i=71(f,7),2i=72(f,7,d),1Z=f.1N(d-1),21=3i.2P(),2r=2i.2P();1Y(f,7);F j=0,2B=0;8(7.1B){F p=4H(2i,7);j=p[0];2B=p[1]}F k=L,2Q=$();8(7.E.U.20<d){2Q=f.19(7.E.U.20,d);8(c.1V==\'6X\'){F l=7.E[7.d[\'P\']];k=2Q;1Z=21;5z(k);7.E[7.d[\'P\']]=\'1d\'}}F m=L,3B=2R(f.19(0,d),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4N={},2s={},2S={},2T={},2U=5B(c,7,d,3B);1F(c.1V){R\'22\':R\'22-1w\':3C=2R(f.19(0,7.E.U.20),7,\'P\');17}8(k){7.E[7.d[\'P\']]=l}8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1Y(f,7,J);1Y(21,7,7.1i[7.d[1]]);8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=j}2T[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;F n=D(){},1O=D(){},1C=D(){},3D=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':m=y.4G(J).47($1n);m.13().19(7.E.U.20).2t();17}1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':y.Z(\'3Z\',1);m.Z(\'3Z\',0);17}V=48(2U,c.2u,G);29[7.d[\'1m\']]=-3B;4N[7.d[\'1m\']]=-3C;8(j<0){29[7.d[\'1m\']]+=j}8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){n=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){F o=2r.1q(\'2a\');8(2B>=0){o+=7.1i[7.d[1]]}2r.Z(7.d[\'1S\'],o);8(1Z.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\')}1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])};F q=1Z.1q(\'2a\');8(j>0){q+=7.1i[7.d[3]]}2s[7.d[\'1S\']]=q;1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}1J=D(){y.Z(2T)};F r=7.E.M+d-K.Q;1y=D(){8(r>0){y.13().19(K.Q).2t()}F a=y.13().19(0,d).47(y).2P();8(r>0){2i=3I(f,7)}5D(k);8(7.1R){8(K.Q<7.E.M+d){F b=y.13().1N(7.E.M-1);b.Z(7.d[\'1S\'],b.1q(\'2a\')+7.1i[7.d[1]])}a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F s=5E(3i,2Q,2i,d,\'16\',2U,2j);1x=D(){y.Z(\'3Z\',y.1q(\'6K\'));5F(y,m,c);A.26=L;2b.3h=4a($12,c,\'3h\',s,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,c,\'3G\',s,2b);1F(c.1V){R\'42\':y.Z(29);n();1C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){n();1C();1D();1J();1y();V=48(2U,c.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();1D();1J();1y();17;R\'1I\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'1I-1w\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'22\':V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1J();1y();1x()}]);1O();3D();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'3k\',G),D(e,b,c,d,f,g,h){e.1g();F v=[b,c,d,f,g,h],t=[\'2M/28/2A\',\'28\',\'3d\',\'2A\',\'2M\',\'D\'],a=3e(v,t);f=a[3];g=a[4];h=a[5];b=3J(a[0],a[1],a[2],K,y);8(b==0){H L}8(!1T(f)){f=L}8(g!=\'14\'&&g!=\'16\'){8(7.1U){g=(b<=K.Q/2)?\'16\':\'14\'}O{g=(K.X==0||K.X>b)?\'16\':\'14\'}}8(g==\'14\'){b=K.Q-b}y.T(I(g,G),[f,b,h]);H J});y.11(I(\'85\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c-1,a,\'14\',b])});y.11(I(\'86\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c+1,a,\'16\',b])});y.11(I(\'5J\',G),D(e,a,b,c,d){e.1g();8(!Y(a)){a=y.1P(I(\'4b\',G))}F f=7.1b.E||7.E.M,1X=1H.2z(K.Q/f)-1;8(a<0){a=1X}8(a>1X){a=0}H y.1P(I(\'3k\',G),[a*f,0,J,b,c,d])});y.11(I(\'73\',G),D(e,s){e.1g();8(s){s=3J(s,0,J,K,y)}O{s=0}s+=K.X;8(s!=0){8(K.Q>0){2h(s>K.Q){s-=K.Q}}y.87(y.13().19(s,K.Q))}H J});y.11(I(\'2n\',G),D(e,s){e.1g();8(s){s=5k(s)}O 8(7.2n){s=7.2n}O{H 18(G,\'6j 88 46 2n.\')}F n=y.1P(I(\'4p\',G)),x=J;1j(F j=0,l=s.S;j<l;j++){8(!s[j][0].1P(I(\'3k\',G),[n,s[j][3],J])){x=L}}H x});y.11(I(\'2O\',G),D(e,a,b){e.1g();8(1o(a)){a.1h($12,2g)}O 8(2V(a)){2g=a}O 8(!1z(a)){2g.1c([a,b])}H 2g});y.11(I(\'89\',G),D(e,b,c,d,f){e.1g();F v=[b,c,d,f],t=[\'2M/2A\',\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1T(b)&&!2v(b)){b=$(b)}O 8(1p(b)){b=$(b)}8(!2v(b)||b.S==0){H 18(G,\'2p a 5K 2A.\')}8(1z(c)){c=\'4c\'}4x(b,7);41(b);F g=c,4d=\'4d\';8(c==\'4c\'){8(d){8(K.X==0){c=K.Q-1;4d=\'74\'}O{c=K.X;K.X+=b.S}8(c<0){c=0}}O{c=K.Q-1;4d=\'74\'}}O{c=3J(c,f,d,K,y)}F h=y.13().1N(c);8(h.S){h[4d](b)}O{18(G,\'8a 8b-3r 4M 6k! 8c 8d 46 75 4c.\');y.76(b)}8(g!=\'4c\'&&!d){8(c<K.X){K.X+=b.S}}K.Q=y.13().S;8(K.X>=K.Q){K.X-=K.Q}y.T(I(\'4O\',G));y.T(I(\'5L\',G));H J});y.11(I(\'77\',G),D(e,c,d,f){e.1g();F v=[c,d,f],t=[\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);c=a[0];d=a[1];f=a[2];F g=L;8(c 2W $&&c.S>1){h=$();c.1W(D(i,a){F b=y.T(I(\'77\',G),[$(1l),d,f]);8(b){h=h.8e(b)}});H h}8(1z(c)||c==\'4c\'){h=y.13().2P()}O{c=3J(c,f,d,K,y);F h=y.13().1N(c);8(h.S){8(c<K.X){K.X-=h.S}}}8(h&&h.S){h.8f();K.Q=y.13().S;y.T(I(\'4O\',G))}H h});y.11(I(\'3G\',G)+\' \'+I(\'3h\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S);8(2V(a)){2b[b]=a}8(1o(a)){2b[b].1c(a)}H 2b[b]});y.11(I(\'4p\',G),D(e,a){e.1g();8(K.X==0){F b=0}O{F b=K.Q-K.X}8(1o(a)){a.1h($12,b)}H b});y.11(I(\'4b\',G),D(e,a){e.1g();F b=7.1b.E||7.E.M,1X=1H.2z(K.Q/b-1),2k;8(K.X==0){2k=0}O 8(K.X<K.Q%b){2k=0}O 8(K.X==b&&!7.1U){2k=1X}O{2k=1H.78((K.Q-K.X)/b)}8(2k<0){2k=0}8(2k>1X){2k=1X}8(1o(a)){a.1h($12,2k)}H 2k});y.11(I(\'8g\',G),D(e,a){e.1g();F b=3I(y.13(),7);8(1o(a)){a.1h($12,b)}H b});y.11(I(\'19\',G),D(e,f,l,b){e.1g();8(K.Q==0){H L}F v=[f,l,b],t=[\'28\',\'28\',\'D\'],a=3e(v,t);f=(Y(a[0]))?a[0]:0;l=(Y(a[1]))?a[1]:K.Q;b=a[2];f+=K.X;l+=K.X;8(E.Q>0){2h(f>K.Q){f-=K.Q}2h(l>K.Q){l-=K.Q}2h(f<0){f+=K.Q}2h(l<0){l+=K.Q}}F c=y.13(),$i;8(l>f){$i=c.19(f,l)}O{$i=$(c.19(f,K.Q).3F().6Y(c.19(0,l).3F()))}8(1o(b)){b.1h($12,$i)}H $i});y.11(I(\'27\',G)+\' \'+I(\'2d\',G)+\' \'+I(\'26\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S),5M=A[b];8(1o(a)){a.1h($12,5M)}H 5M});y.11(I(\'6S\',G),D(e,a,b,c){e.1g();F d=L;8(1o(a)){a.1h($12,7)}O 8(1T(a)){31=$.1L(J,{},31,a);8(b!==L)d=J;O 7=$.1L(J,{},7,a)}O 8(!1z(a)){8(1o(b)){F f=4P(\'7.\'+a);8(1z(f)){f=\'\'}b.1h($12,f)}O 8(!1z(b)){8(2X c!==\'3d\')c=J;4P(\'31.\'+a+\' = b\');8(c!==L)d=J;O 4P(\'7.\'+a+\' = b\')}O{H 4P(\'7.\'+a)}}8(d){1Y(y.13(),7);z.59(31);z.5N();F g=4Q(y,7);y.T(I(\'3H\',G),[J,g])}H 7});y.11(I(\'5L\',G),D(e,a,b){e.1g();8(1z(a)){a=$(\'8h\')}O 8(1p(a)){a=$(a)}8(!2v(a)||a.S==0){H 18(G,\'2p a 5K 2A.\')}8(!1p(b)){b=\'a.6i\'}a.8i(b).1W(D(){F h=1l.79||\'\';8(h.S>0&&y.13().7a($(h))!=-1){$(1l).23(\'5O\').5O(D(e){e.2D();y.T(I(\'3k\',G),h)})}});H J});y.11(I(\'3H\',G),D(e,b,c){e.1g();8(!7.1b.1A){H}F d=7.1b.E||7.E.M,4R=1H.2z(K.Q/d);8(b){8(7.1b.3K){7.1b.1A.13().2t();7.1b.1A.1W(D(){1j(F a=0;a<4R;a++){F i=y.13().1N(3J(a*d,0,J,K,y));$(1l).76(7.1b.3K.1h(i[0],a+1))}})}7.1b.1A.1W(D(){$(1l).13().23(7.1b.3L).1W(D(a){$(1l).11(7.1b.3L,D(e){e.2D();y.T(I(\'3k\',G),[a*d,-7.1b.4S,J,7.1b])})})})}F f=y.1P(I(\'4b\',G))+7.1b.4S;8(f>=4R){f=0}8(f<0){f=4R-1}7.1b.1A.1W(D(){$(1l).13().2N(2y(\'7b\',G)).1N(f).3a(2y(\'7b\',G))});H J});y.11(I(\'4O\',G),D(e){F a=7.E.M,2E=y.13(),2m=5d($1n,7,\'P\');K.Q=2E.S;8(A.4r){7.3U=2m;7[7.d[\'P\']]=4s(2m,A.4r)}O{7.3U=5e(7,2m)}8(7.2H){7.E.P=7.E.3M.P;7.E.1e=7.E.3M.1e;7=5g(7,2E,2m);a=7.E.M;5r(7,2E)}O 8(7.E.U.1d){a=32(2E,7,0)}O 8(7.E.1t!=\'*\'){a=3W(2E,7,0)}8(!7.1U&&K.X!=0&&a>K.X){8(7.E.U.1d){F b=4D(2E,7,K.X)-K.X}O 8(7.E.1t!=\'*\'){F b=7c(2E,7,K.X)-K.X}O{F b=7.E.M-K.X}18(G,\'8j 8k-1U: 8l \'+b+\' E 5y.\');y.T(I(\'14\',G),b)}7.E.M=2x(a,7,7.E.U.2c,$12);7.E.U.20=7.E.M;7=5i(7,2E);F c=4Q(y,7);y.T(I(\'3H\',G),[J,c]);4T(7,K.Q,G);3A(7,K.X,G);H c});y.11(I(\'4q\',G),D(e,a){e.1g();1u=3u(1u);y.1q(\'57\',L);y.T(I(\'5t\',G));8(a){y.T(I(\'73\',G))}4U(y.13());4U(y);z.5s();z.5P();8(G.3s==\'36\'){4U($1n)}O{$1n.8m(y)}H J});y.11(I(\'18\',G),D(e){18(G,\'3w P: \'+7.P);18(G,\'3w 1e: \'+7.1e);18(G,\'7d 8n: \'+7.E.P);18(G,\'7d 8o: \'+7.E.1e);18(G,\'4e 4f E M: \'+7.E.M);8(7.N.1G){18(G,\'4e 4f E 5Q 8p: \'+7.N.E)}8(7.14.W){18(G,\'4e 4f E 5Q 5y: \'+7.14.E)}8(7.16.W){18(G,\'4e 4f E 5Q 70: \'+7.16.E)}H G.18});y.11(\'3o\',D(e,n,o){e.1g();H y.1P(I(n,G),o)})};z.5s=D(){y.23(I(\'\',G));y.23(I(\'\',G,L));y.23(\'3o\')};z.5N=D(){z.5P();4T(7,K.Q,G);3A(7,K.X,G);8(7.N.2F){F b=3N(7.N.2F);$1n.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}8(7.N.W){7.N.W.11(I(7.N.3L,G,L),D(e){e.2D();F a=L,b=3O;8(A.27){a=\'1G\'}O 8(7.N.4X){a=\'3b\';b=3N(7.N.4X)}8(a){y.T(I(a,G),b)}})}8(7.14.W){7.14.W.11(I(7.14.3L,G,L),D(e){e.2D();y.T(I(\'14\',G))});8(7.14.2F){F b=3N(7.14.2F);7.14.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.16.W){7.16.W.11(I(7.16.3L,G,L),D(e){e.2D();y.T(I(\'16\',G))});8(7.16.2F){F b=3N(7.16.2F);7.16.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.1b.1A){8(7.1b.2F){F b=3N(7.1b.2F);7.1b.1A.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.14.2Y||7.16.2Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k==7.16.2Y){e.2D();y.T(I(\'16\',G))}8(k==7.14.2Y){e.2D();y.T(I(\'14\',G))}})}8(7.1b.4Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k>=49&&k<58){k=(k-49)*7.E.M;8(k<=K.Q){e.2D();y.T(I(\'3k\',G),[k,0,J,7.1b])}}})}8($.1s.1r){F c=\'8q\'8r 3l;8((c&&7.1r.4h)||(!c&&7.1r.5R)){F d=$.1L(J,{},7.14,7.1r),7g=$.1L(J,{},7.16,7.1r),5S=D(){y.T(I(\'14\',G),[d])},5T=D(){y.T(I(\'16\',G),[7g])};1F(7.2l){R\'5c\':R\'7h\':7.1r.2G.8s=5T;7.1r.2G.8t=5S;17;2J:7.1r.2G.8u=5T;7.1r.2G.8v=5S}8(A.1r){y.1r(\'4q\')}$1n.1r(7.1r.2G);$1n.Z(\'7i\',\'8w\');A.1r=J}}8($.1s.1Q){8(7.1Q){F f=$.1L(J,{},7.14,7.1Q),7j=$.1L(J,{},7.16,7.1Q);8(A.1Q){$1n.23(I(\'1Q\',G,L))}$1n.11(I(\'1Q\',G,L),D(e,a){e.2D();8(a>0){y.T(I(\'14\',G),[f])}O{y.T(I(\'16\',G),[7j])}});A.1Q=J}}8(7.N.1G){y.T(I(\'1G\',G),7.N.5U)}8(A.6v){F g=D(e){y.T(I(\'5t\',G));8(7.N.5V&&!A.27){y.T(I(\'1G\',G))}1Y(y.13(),7);y.T(I(\'4O\',G))};F h=$(3l),4i=3O;8($.5W&&G.5X==\'5W\'){4i=$.5W(8x,g)}O 8($.4Z&&G.5X==\'4Z\'){4i=$.4Z(8y,g)}O{F i=0,5Y=0;4i=D(){F a=h.P(),5Z=h.1e();8(a!=i||5Z!=5Y){g();i=a;5Y=5Z}}}h.11(I(\'8z\',G,L,J,J),4i)}};z.5P=D(){F a=I(\'\',G),3P=I(\'\',G,L);61=I(\'\',G,L,J,J);$(4g).23(61);$(3l).23(61);$1n.23(3P);8(7.N.W){7.N.W.23(3P)}8(7.14.W){7.14.W.23(3P)}8(7.16.W){7.16.W.23(3P)}8(7.1b.1A){7.1b.1A.23(3P);8(7.1b.3K){7.1b.1A.13().2t()}}8(A.1r){y.1r(\'4q\');$1n.Z(\'7i\',\'2J\');A.1r=L}8(A.1Q){A.1Q=L}4T(7,\'4j\',G);3A(7,\'2N\',G)};8(1k(w)){w={\'18\':w}}F A={\'2l\':\'16\',\'27\':J,\'26\':L,\'2d\':L,\'1Q\':L,\'1r\':L},K={\'Q\':y.13().S,\'X\':0},1u={\'N\':3O,\'1f\':3O,\'2L\':2o(),\'3v\':0},V={\'2d\':L,\'1M\':0,\'2L\':0,\'2u\':\'\',\'1a\':[]},2b={\'3G\':[],\'3h\':[]},2g=[],G=$.1L(J,{},$.1s.1v.7k,w),7={},31=$.1L(J,{},u),$1n=(G.3s==\'36\')?y.36():y.8A(\'<\'+G.3s.55+\' 8B="\'+G.3s.7l+\'" />\').36();G.4o=y.4o;G.3T=$.1s.1v.3T++;G.2Z=(G.2Z&&$.1s.2Z)?\'2Z\':\'8C\';z.59(31,J,56);z.6D();z.6L();z.5N();8(2V(7.E.3m)){F B=7.E.3m}O{F B=[];8(7.E.3m!=0){B.1c(7.E.3m)}}8(7.25){B.8D(4k(7m(7.25),10))}8(B.S>0){1j(F a=0,l=B.S;a<l;a++){F s=B[a];8(s==0){62}8(s===J){s=3l.8E.79;8(s.S<1){62}}O 8(s===\'7n\'){s=1H.4l(1H.7n()*K.Q)}8(y.1P(I(\'3k\',G),[s,0,J,{1V:\'42\'}])){17}}}F C=4Q(y,7),7o=3I(y.13(),7);8(7.7p){7.7p.1h($12,{\'P\':C.P,\'1e\':C.1e,\'E\':7o})}y.T(I(\'3H\',G),[J,C]);y.T(I(\'5L\',G));8(G.18){y.T(I(\'18\',G))}H y};$.1s.1v.3T=1;$.1s.1v.5b={\'2n\':L,\'3z\':J,\'1U\':J,\'2H\':L,\'2l\':\'1m\',\'E\':{\'3m\':0},\'1K\':{\'2u\':\'7q\',\'1M\':6y,\'2F\':L,\'3L\':\'5O\',\'2O\':L}};$.1s.1v.7k={\'18\':L,\'2Z\':L,\'5X\':\'4Z\',\'3y\':{\'45\':\'\',\'7r\':\'8F\'},\'3s\':{\'55\':\'8G\',\'7l\':\'8H\'},\'63\':{}};$.1s.1v.7s=D(a){H\'<a 8I="#"><7t>\'+a+\'</7t></a>\'};$.1s.1v.7u=D(a){$(1l).Z(\'P\',a+\'%\')};$.1s.1v.25={3F:D(n){n+=\'=\';F b=4g.25.3Q(\';\');1j(F a=0,l=b.S;a<l;a++){F c=b[a];2h(c.8J(0)==\' \'){c=c.19(1)}8(c.3R(n)==0){H c.19(n.S)}}H 0},64:D(n,v,d){F e="";8(d){F a=7v 7w();a.8K(a.2o()+(d*24*60*60*8L));e="; 8M="+a.8N()}4g.25=n+\'=\'+v+e+\'; 8O=/\'},2t:D(n){$.1s.1v.25.64(n,"",-1)}};D 48(d,e,c){8(c.2Z==\'2Z\'){8(e==\'7q\'){e=\'8P\'}}H{1a:[],1M:d,8Q:d,2u:e,2L:2o()}}D 3x(s,c){1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];8(!b){62}b[0][c.2Z](b[1],s.1M,s.2u,b[2])}}D 43(s,c){8(!1k(c)){c=J}8(1T(s.4z)){43(s.4z,c)}1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];b[0].6M(J);8(c){b[0].Z(b[1]);8(1o(b[2])){b[2]()}}}8(1T(s.4A)){43(s.4A,c)}}D 5F(a,b,o){8(b){b.2t()}1F(o.1V){R\'1w\':R\'3j\':R\'1I-1w\':R\'22-1w\':a.Z(\'1t\',\'\');a.Z(\'1E\',1);17}}D 4a(d,o,b,a,c){8(o[b]){o[b].1h(d,a)}8(c[b].S){1j(F i=0,l=c[b].S;i<l;i++){c[b][i].1h(d,a)}}H[]}D 5G(a,q,c){8(q.S){a.T(I(q[0][0],c),q[0][1]);q.8R()}H q}D 5z(b){b.1W(D(){F a=$(1l);a.1q(\'7x\',a.2f(\':3t\')).4j()})}D 5D(b){8(b){b.1W(D(){F a=$(1l);8(!a.1q(\'7x\')){a.4m()}})}}D 3u(t){8(t.N){8S(t.N)}8(t.1f){8T(t.1f)}H t}D 5E(a,b,c,d,e,f,g){H{\'P\':g.P,\'1e\':g.1e,\'E\':{\'20\':a,\'8U\':b,\'M\':c},\'1K\':{\'E\':d,\'2l\':e,\'1M\':f}}}D 5B(a,o,b,c){F d=a.1M;8(a.1V==\'42\'){H 0}8(d==\'N\'){d=o.1K.1M/o.1K.E*b}O 8(d<10){d=c/d}8(d<1){H 0}8(a.1V==\'1w\'){d=d/2}H 1H.78(d)}D 4T(o,t,c){F a=(Y(o.E.4C))?o.E.4C:o.E.M+1;8(t==\'4m\'||t==\'4j\'){F f=t}O 8(a>t){18(c,\'2p 6O E (\'+t+\' Q, \'+a+\' 6P): 8V 8W.\');F f=\'4j\'}O{F f=\'4m\'}F s=(f==\'4m\')?\'2N\':\'3a\',h=2y(\'3t\',c);8(o.N.W){o.N.W[f]()[s](h)}8(o.14.W){o.14.W[f]()[s](h)}8(o.16.W){o.16.W[f]()[s](h)}8(o.1b.1A){o.1b.1A[f]()[s](h)}}D 3A(o,f,c){8(o.1U||o.3z)H;F a=(f==\'2N\'||f==\'3a\')?f:L,51=2y(\'8X\',c);8(o.N.W&&a){o.N.W[a](51)}8(o.14.W){F b=a||(f==0)?\'3a\':\'2N\';o.14.W[b](51)}8(o.16.W){F b=a||(f==o.E.M)?\'3a\':\'2N\';o.16.W[b](51)}}D 3S(a,b){8(1o(b)){b=b.1h(a)}O 8(1z(b)){b={}}H b}D 6l(a,b){b=3S(a,b);8(Y(b)){b={\'M\':b}}O 8(b==\'1d\'){b={\'M\':b,\'P\':b,\'1e\':b}}O 8(!1T(b)){b={}}H b}D 6m(a,b){b=3S(a,b);8(Y(b)){8(b<=50){b={\'E\':b}}O{b={\'1M\':b}}}O 8(1p(b)){b={\'2u\':b}}O 8(!1T(b)){b={}}H b}D 52(a,b){b=3S(a,b);8(1p(b)){F c=65(b);8(c==-1){b=$(b)}O{b=c}}H b}D 6n(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(1k(b)){b={\'1G\':b}}O 8(Y(b)){b={\'2K\':b}}8(b.1f){8(1p(b.1f)||2v(b.1f)){b.1f={\'2q\':b.1f}}}H b}D 6z(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(!1k(b.1G)){b.1G=J}8(!Y(b.5U)){b.5U=0}8(1z(b.4X)){b.4X=J}8(!1k(b.5V)){b.5V=J}8(!Y(b.2K)){b.2K=(b.1M<10)?8Y:b.1M*5}8(b.1f){8(1o(b.1f.2q)){b.1f.2q=b.1f.2q.1h(a)}8(1p(b.1f.2q)){b.1f.2q=$(b.1f.2q)}8(b.1f.2q){8(!1o(b.1f.4B)){b.1f.4B=$.1s.1v.7u}8(!Y(b.1f.5u)){b.1f.5u=50}}O{b.1f=L}}H b}D 5a(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(Y(b)){b={\'2Y\':b}}H b}D 5j(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(1p(b.2Y)){b.2Y=65(b.2Y)}H b}D 6o(a,b){b=52(a,b);8(2v(b)){b={\'1A\':b}}O 8(1k(b)){b={\'4Y\':b}}H b}D 6A(a,b){8(1o(b.1A)){b.1A=b.1A.1h(a)}8(1p(b.1A)){b.1A=$(b.1A)}8(!Y(b.E)){b.E=L}8(!1k(b.4Y)){b.4Y=L}8(!1o(b.3K)&&!53(b.3K)){b.3K=$.1s.1v.7s}8(!Y(b.4S)){b.4S=0}H b}D 6p(a,b){8(1o(b)){b=b.1h(a)}8(1z(b)){b={\'4h\':L}}8(3p(b)){b={\'4h\':b}}O 8(Y(b)){b={\'E\':b}}H b}D 6B(a,b){8(!1k(b.4h)){b.4h=J}8(!1k(b.5R)){b.5R=L}8(!1T(b.2G)){b.2G={}}8(!1k(b.2G.7y)){b.2G.7y=L}H b}D 6q(a,b){8(1o(b)){b=b.1h(a)}8(3p(b)){b={}}O 8(Y(b)){b={\'E\':b}}O 8(1z(b)){b=L}H b}D 6C(a,b){H b}D 3J(a,b,c,d,e){8(1p(a)){a=$(a,e)}8(1T(a)){a=$(a,e)}8(2v(a)){a=e.13().7a(a);8(!1k(c)){c=L}}O{8(!1k(c)){c=J}}8(!Y(a)){a=0}8(!Y(b)){b=0}8(c){a+=d.X}a+=b;8(d.Q>0){2h(a>=d.Q){a-=d.Q}2h(a<0){a+=d.Q}}H a}D 4D(i,o,s){F t=0,x=0;1j(F a=s;a>=0;a--){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}8(a==0){a=i.S}x++}}D 7c(i,o,s){H 66(i,o.E.1t,o.E.U.4t,s)}D 6T(i,o,s,m){H 66(i,o.E.1t,m,s)}D 66(i,f,m,s){F t=0,x=0;1j(F a=s,l=i.S;a>=0;a--){x++;8(x==l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==0){a=l}}}D 5x(a,o){H o.E.U.4t||a.13().19(0,o.E.M).1t(o.E.1t).S}D 32(i,o,s){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}x++;8(x==l+1){H x}8(a==l){a=-1}}}D 5I(i,o,s,l){F v=32(i,o,s);8(!o.1U){8(s+v>l){v=l-s}}H v}D 3W(i,o,s){H 68(i,o.E.1t,o.E.U.4t,s,o.1U)}D 6Z(i,o,s,m){H 68(i,o.E.1t,m+1,s,o.1U)-1}D 68(i,f,m,s,c){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){x++;8(x>=l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==l){a=-1}}}D 3I(i,o){H i.19(0,o.E.M)}D 6V(i,o,n){H i.19(n,o.E.U.20+n)}D 6W(i,o){H i.19(0,o.E.M)}D 71(i,o){H i.19(0,o.E.U.20)}D 72(i,o,n){H i.19(n,o.E.M+n)}D 4x(i,o,d){8(o.1R){8(!1p(d)){d=\'2a\'}i.1W(D(){F j=$(1l),m=4k(j.Z(o.d[\'1S\']),10);8(!Y(m)){m=0}j.1q(d,m)})}}D 1Y(i,o,m){8(o.1R){F x=(1k(m))?m:L;8(!Y(m)){m=0}4x(i,o,\'7z\');i.1W(D(){F j=$(1l);j.Z(o.d[\'1S\'],((x)?j.1q(\'7z\'):m+j.1q(\'2a\')))})}}D 41(i){i.1W(D(){F j=$(1l);j.1q(\'7A\',j.7B(\'7C\')||\'\')})}D 4U(i){i.1W(D(){F j=$(1l);j.7B(\'7C\',j.1q(\'7A\')||\'\')})}D 5r(o,b){F c=o.E.M,7D=o.E[o.d[\'P\']],69=o[o.d[\'1e\']],7E=3V(69);b.1W(D(){F a=$(1l),6a=7D-7F(a,o,\'8Z\');a[o.d[\'P\']](6a);8(7E){a[o.d[\'1e\']](4s(6a,69))}})}D 4Q(a,o){F b=a.36(),$i=a.13(),$v=3I($i,o),54=4I(4J($v,o,J),o,L);b.Z(54);8(o.1R){F p=o.1i,r=p[o.d[1]];8(o.1B&&r<0){r=0}F c=$v.2P();c.Z(o.d[\'1S\'],c.1q(\'2a\')+r);a.Z(o.d[\'3q\'],p[o.d[0]]);a.Z(o.d[\'1m\'],p[o.d[3]])}a.Z(o.d[\'P\'],54[o.d[\'P\']]+(2R($i,o,\'P\')*2));a.Z(o.d[\'1e\'],6b($i,o,\'1e\'));H 54}D 4J(i,o,a){H[2R(i,o,\'P\',a),6b(i,o,\'1e\',a)]}D 6b(i,o,a,b){8(!1k(b)){b=L}8(Y(o[o.d[a]])&&b){H o[o.d[a]]}8(Y(o.E[o.d[a]])){H o.E[o.d[a]]}a=(a.6c().3R(\'P\')>-1)?\'2w\':\'3n\';H 4n(i,o,a)}D 4n(i,o,b){F s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F m=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s<m){s=m}}H s}D 2R(i,o,b,c){8(!1k(c)){c=L}8(Y(o[o.d[b]])&&c){H o[o.d[b]]}8(Y(o.E[o.d[b]])){H o.E[o.d[b]]*i.S}F d=(b.6c().3R(\'P\')>-1)?\'2w\':\'3n\',s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);s+=(j.2f(\':M\'))?j[o.d[d]](J):0}H s}D 5d(a,o,d){F b=a.2f(\':M\');8(b){a.4j()}F s=a.36()[o.d[d]]();8(b){a.4m()}H s}D 5e(o,a){H(Y(o[o.d[\'P\']]))?o[o.d[\'P\']]:a}D 6d(i,o,b){F s=L,v=L;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F c=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s===L){s=c}O 8(s!=c){v=J}8(s==0){v=J}}H v}D 7F(i,o,d){H i[o.d[\'90\'+d]](J)-i[o.d[d.6c()]]()}D 4s(s,o){8(3V(o)){o=4k(o.19(0,-1),10);8(!Y(o)){H s}s*=o/2I}H s}D I(n,c,a,b,d){8(!1k(a)){a=J}8(!1k(b)){b=J}8(!1k(d)){d=L}8(a){n=c.3y.45+n}8(b){n=n+\'.\'+c.3y.7r}8(b&&d){n+=c.3T}H n}D 2y(n,c){H(1p(c.63[n]))?c.63[n]:n}D 4I(a,o,p){8(!1k(p)){p=J}F b=(o.1R&&p)?o.1i:[0,0,0,0];F c={};c[o.d[\'P\']]=a[0]+b[1]+b[3];c[o.d[\'1e\']]=a[1]+b[0]+b[2];H c}D 3e(c,d){F e=[];1j(F a=0,7G=c.S;a<7G;a++){1j(F b=0,7H=d.S;b<7H;b++){8(d[b].3R(2X c[a])>-1&&1z(e[b])){e[b]=c[a];17}}}H e}D 6x(p){8(1z(p)){H[0,0,0,0]}8(Y(p)){H[p,p,p,p]}8(1p(p)){p=p.3Q(\'91\').7I(\'\').3Q(\'92\').7I(\'\').3Q(\' \')}8(!2V(p)){H[0,0,0,0]}1j(F i=0;i<4;i++){p[i]=4k(p[i],10)}1F(p.S){R 0:H[0,0,0,0];R 1:H[p[0],p[0],p[0],p[0]];R 2:H[p[0],p[1],p[0],p[1]];R 3:H[p[0],p[1],p[2],p[1]];2J:H[p[0],p[1],p[2],p[3]]}}D 4H(a,o){F x=(Y(o[o.d[\'P\']]))?1H.2z(o[o.d[\'P\']]-2R(a,o,\'P\')):0;1F(o.1B){R\'1m\':H[0,x];R\'35\':H[x,0];R\'5f\':2J:H[1H.2z(x/2),1H.4l(x/2)]}}D 6r(o){F a=[[\'P\',\'7J\',\'2w\',\'1e\',\'7K\',\'3n\',\'1m\',\'3q\',\'1S\',0,1,2,3],[\'1e\',\'7K\',\'3n\',\'P\',\'7J\',\'2w\',\'3q\',\'1m\',\'5p\',3,2,1,0]];F b=a[0].S,7L=(o.2l==\'35\'||o.2l==\'1m\')?0:1;F c={};1j(F d=0;d<b;d++){c[a[0][d]]=a[7L][d]}H c}D 4E(x,o,a,b){F v=x;8(1o(a)){v=a.1h(b,v)}O 8(1p(a)){F p=a.3Q(\'+\'),m=a.3Q(\'-\');8(m.S>p.S){F c=J,6e=m[0],30=m[1]}O{F c=L,6e=p[0],30=p[1]}1F(6e){R\'93\':v=(x%2==1)?x-1:x;17;R\'94\':v=(x%2==0)?x-1:x;17;2J:v=x;17}30=4k(30,10);8(Y(30)){8(c){30=-30}v+=30}}8(!Y(v)||v<1){v=1}H v}D 2x(x,o,a,b){H 6f(4E(x,o,a,b),o.E.U)}D 6f(v,i){8(Y(i.34)&&v<i.34){v=i.34}8(Y(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}H v}D 5k(s){8(!2V(s)){s=[[s]]}8(!2V(s[0])){s=[s]}1j(F j=0,l=s.S;j<l;j++){8(1p(s[j][0])){s[j][0]=$(s[j][0])}8(!1k(s[j][1])){s[j][1]=J}8(!1k(s[j][2])){s[j][2]=J}8(!Y(s[j][3])){s[j][3]=0}}H s}D 65(k){8(k==\'35\'){H 39}8(k==\'1m\'){H 37}8(k==\'5c\'){H 38}8(k==\'7h\'){H 40}H-1}D 5H(n,a,c){8(n){F v=a.1P(I(\'4p\',c));$.1s.1v.25.64(n,v)}}D 7m(n){F c=$.1s.1v.25.3F(n);H(c==\'\')?0:c}D 6E(a,b){F c={};1j(F p=0,l=b.S;p<l;p++){c[b[p]]=a.Z(b[p])}H c}D 6s(a,b,c,d){8(!1T(a.U)){a.U={}}8(!1T(a.3M)){a.3M={}}8(a.3m==0&&Y(d)){a.3m=d}8(1T(a.M)){a.U.34=a.M.34;a.U.1X=a.M.1X;a.M=L}O 8(1p(a.M)){8(a.M==\'1d\'){a.U.1d=J}O{a.U.2c=a.M}a.M=L}O 8(1o(a.M)){a.U.2c=a.M;a.M=L}8(!1p(a.1t)){a.1t=(c.1t(\':3t\').S>0)?\':M\':\'*\'}8(!a[b.d[\'P\']]){8(b.2H){18(J,\'7M a \'+b.d[\'P\']+\' 1j 75 E!\');a[b.d[\'P\']]=4n(c,b,\'2w\')}O{a[b.d[\'P\']]=(6d(c,b,\'2w\'))?\'1d\':c[b.d[\'2w\']](J)}}8(!a[b.d[\'1e\']]){a[b.d[\'1e\']]=(6d(c,b,\'3n\'))?\'1d\':c[b.d[\'3n\']](J)}a.3M.P=a.P;a.3M.1e=a.1e;H a}D 6w(a,b){8(a.E[a.d[\'P\']]==\'1d\'){a.E.U.1d=J}8(!a.E.U.1d){8(Y(a[a.d[\'P\']])){a.E.M=1H.4l(a[a.d[\'P\']]/a.E[a.d[\'P\']])}O{a.E.M=1H.4l(b/a.E[a.d[\'P\']]);a[a.d[\'P\']]=a.E.M*a.E[a.d[\'P\']];8(!a.E.U.2c){a.1B=L}}8(a.E.M==\'95\'||a.E.M<1){18(J,\'2p a 5K 28 4f M E: 7M 46 "1d".\');a.E.U.1d=J}}H a}D 6t(a,b,c){8(a==\'N\'){a=4n(c,b,\'2w\')}H a}D 6u(a,b,c){8(a==\'N\'){a=4n(c,b,\'3n\')}8(!a){a=b.E[b.d[\'1e\']]}H a}D 5i(o,a){F p=4H(3I(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];H o}D 5g(o,a,b){F c=6f(1H.2z(o[o.d[\'P\']]/o.E[o.d[\'P\']]),o.E.U);8(c>a.S){c=a.S}F d=1H.4l(o[o.d[\'P\']]/c);o.E.M=c;o.E[o.d[\'P\']]=d;o[o.d[\'P\']]=c*d;H o}D 3N(p){8(1p(p)){F i=(p.3R(\'96\')>-1)?J:L,r=(p.3R(\'3g\')>-1)?J:L}O{F i=r=L}H[i,r]}D 97(a){H(Y(a))?a:3O}D 6g(a){H(a===3O)}D 1z(a){H(6g(a)||2X a==\'7N\'||a===\'\'||a===\'7N\')}D 2V(a){H(a 2W 98)}D 2v(a){H(a 2W 7O)}D 1T(a){H((a 2W 99||2X a==\'2A\')&&!6g(a)&&!2v(a)&&!2V(a))}D Y(a){H((a 2W 4e||2X a==\'28\')&&!9a(a))}D 1p(a){H((a 2W 9b||2X a==\'2M\')&&!1z(a)&&!3p(a)&&!53(a))}D 1o(a){H(a 2W 9c||2X a==\'D\')}D 1k(a){H(a 2W 9d||2X a==\'3d\'||3p(a)||53(a))}D 3p(a){H(a===J||a===\'J\')}D 53(a){H(a===L||a===\'L\')}D 3V(x){H(1p(x)&&x.19(-1)==\'%\')}D 2o(){H 7v 7w().2o()}D 3X(o,n){18(J,o+\' 2f 9e, 9f 1j 9g 9h 9i 9j. 9k \'+n+\' 9l.\')}D 18(d,m){8(!1z(3l.6h)&&!1z(3l.6h.7P)){8(1T(d)){F s=\' (\'+d.4o+\')\';d=d.18}O{F s=\'\'}8(!d){H L}8(1p(m)){m=\'1v\'+s+\': \'+m}O{m=[\'1v\'+s+\':\',m]}3l.6h.7P(m)}H L}$.1L($.2u,{\'9m\':D(t){F a=t*t;H t*(-a*t+4*a-6*t+4)},\'9n\':D(t){H t*(4*t*t-9*t+6)},\'9o\':D(t){F a=t*t;H t*(33*a*a-9p*a*t+9q*a-67*t+15)}})})(7O);',62,585,'|||||||opts|if|||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|else|width|total|case|length|trigger|visibleConf|scrl|button|first|is_number|css||bind|tt0|children|prev||next|break|debug|slice|anims|pagination|push|variable|height|progress|stopPropagation|call|padding|for|is_boolean|this|left|wrp|is_function|is_string|data|swipe|fn|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|is_undefined|container|align|_s_paddingold|_s_paddingcur|opacity|switch|play|Math|cover|_position|scroll|extend|duration|eq|_a_wrapper|triggerHandler|mousewheel|usePadding|marginRight|is_object|circular|fx|each|max|sz_resetMargin|i_cur_l|old|i_old_l|uncover|unbind||cookie|isScrolling|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|adjust|isStopped|stopImmediatePropagation|is|queu|while|i_new|w_siz|nr|direction|avail_primary|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|easing|is_jquery|outerWidth|cf_getItemsAdjust|cf_c|ceil|object|pR|_s_paddingnew|preventDefault|a_itm|pauseOnHover|options|responsive|100|default|timeoutDuration|startTime|string|removeClass|queue|last|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof|key|transition|adj|opts_orig|gn_getVisibleItemsNext||min|right|parent||||addClass|pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|position|wrapper|hidden|sc_clearTimers|timePassed|Carousel|sc_startScroll|events|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|null|ns2|split|indexOf|go_getObject|serialNumber|maxDimension|is_percentage|gn_getVisibleItemsNextFilter|deprecated|orgCSS|zIndex||sz_storeOrigCss|none|sc_stopScroll|dur2|prefix|to|appendTo|sc_setScroll||sc_fireCallbacks|currentPage|end|before|Number|of|document|onTouch|onResize|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|pre|post|updater|minimum|gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|not|a_cfs_vis|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|sz_restoreOrigCss|mouseenter|mouseleave|pauseOnEvent|keys|throttle||di|go_getNaviObject|is_false|sz|element|starting_position|_cfs_isCarousel||_cfs_init|go_getPrevNextObject|defaults|up|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|marginBottom|newPosition|sz_setResponsiveSizes|_cfs_unbind_events|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|onMouse|swP|swN|delay|pauseOnResize|debounce|onWindowResize|_windowHeight|nh||ns3|continue|classnames|set|cf_getKeyCode|gn_getItemsPrevFilter||gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|found|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|in_mapCss|textAlign|float|marginTop|marginLeft|absolute|_cfs_origCssZindex|_cfs_bind_events|stop|paused|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|the|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|Item|keyup|keyCode|scN|down|cursor|mcN|configs|classname|cf_getCookie|random|itm|onCreate|swing|namespace|pageAnchorBuilder|span|progressbarUpdater|new|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|_cfs_origCss|attr|style|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|Correct|insert|Appending|item|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|200|300|resize|wrap|class|animate|unshift|location|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|ease|orgDuration|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|bt_mousesheelNumber|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'),0,{}))

/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function($) {
	var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right,

		selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [],

		ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i,

		loadingTimer, loadingFrame = 1,

		titleHeight = 0, titleStr = '', start_pos, final_pos, busy = false, fx = $.extend($('<div/>')[0], { prop: 0 }),

		isIE6 = $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest,

		/*
		 * Private methods 
		 */

		_abort = function() {
			loading.hide();

			imgPreloader.onerror = imgPreloader.onload = null;

			if (ajaxLoader) {
				ajaxLoader.abort();
			}

			tmp.empty();
		},

		_error = function() {
			if (false === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts)) {
				loading.hide();
				busy = false;
				return;
			}

			selectedOpts.titleShow = false;

			selectedOpts.width = 'auto';
			selectedOpts.height = 'auto';

			tmp.html( '<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>' );

			_process_inline();
		},

		_start = function() {
			var obj = selectedArray[ selectedIndex ],
				href, 
				type, 
				title,
				str,
				emb,
				ret;

			_abort();

			selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data('fancybox') == 'undefined' ? selectedOpts : $(obj).data('fancybox')));

			ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts);

			if (ret === false) {
				busy = false;
				return;
			} else if (typeof ret == 'object') {
				selectedOpts = $.extend(selectedOpts, ret);
			}

			title = selectedOpts.title || (obj.nodeName ? $(obj).attr('title') : obj.title) || '';

			if (obj.nodeName && !selectedOpts.orig) {
				selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
			}

			if (title === '' && selectedOpts.orig && selectedOpts.titleFromAlt) {
				title = selectedOpts.orig.attr('alt');
			}

			href = selectedOpts.href || (obj.nodeName ? $(obj).attr('href') : obj.href) || null;

			if ((/^(?:javascript)/i).test(href) || href == '#') {
				href = null;
			}

			if (selectedOpts.type) {
				type = selectedOpts.type;

				if (!href) {
					href = selectedOpts.content;
				}

			} else if (selectedOpts.content) {
				type = 'html';

			} else if (href) {
				if (href.match(imgRegExp)) {
					type = 'image';

				} else if (href.match(swfRegExp)) {
					type = 'swf';

				} else if ($(obj).hasClass("iframe")) {
					type = 'iframe';

				} else if (href.indexOf("#") === 0) {
					type = 'inline';

				} else {
					type = 'ajax';
				}
			}

			if (!type) {
				_error();
				return;
			}

			if (type == 'inline') {
				obj	= href.substr(href.indexOf("#"));
				type = $(obj).length > 0 ? 'inline' : 'ajax';
			}

			selectedOpts.type = type;
			selectedOpts.href = href;
			selectedOpts.title = title;

			if (selectedOpts.autoDimensions) {
				if (selectedOpts.type == 'html' || selectedOpts.type == 'inline' || selectedOpts.type == 'ajax') {
					selectedOpts.width = 'auto';
					selectedOpts.height = 'auto';
				} else {
					selectedOpts.autoDimensions = false;	
				}
			}

			if (selectedOpts.modal) {
				selectedOpts.overlayShow = true;
				selectedOpts.hideOnOverlayClick = false;
				selectedOpts.hideOnContentClick = false;
				selectedOpts.enableEscapeButton = false;
				selectedOpts.showCloseButton = false;
			}

			selectedOpts.padding = parseInt(selectedOpts.padding, 10);
			selectedOpts.margin = parseInt(selectedOpts.margin, 10);

			tmp.css('padding', (selectedOpts.padding + selectedOpts.margin));

			$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
				$(this).replaceWith(content.children());				
			});

			switch (type) {
				case 'html' :
					tmp.html( selectedOpts.content );
					_process_inline();
				break;

				case 'inline' :
					if ( $(obj).parent().is('#fancybox-content') === true) {
						busy = false;
						return;
					}

					$('<div class="fancybox-inline-tmp" />')
						.hide()
						.insertBefore( $(obj) )
						.bind('fancybox-cleanup', function() {
							$(this).replaceWith(content.children());
						}).bind('fancybox-cancel', function() {
							$(this).replaceWith(tmp.children());
						});

					$(obj).appendTo(tmp);

					_process_inline();
				break;

				case 'image':
					busy = false;

					$.fancybox.showActivity();

					imgPreloader = new Image();

					imgPreloader.onerror = function() {
						_error();
					};

					imgPreloader.onload = function() {
						busy = true;

						imgPreloader.onerror = imgPreloader.onload = null;

						_process_image();
					};

					imgPreloader.src = href;
				break;

				case 'swf':
					selectedOpts.scrolling = 'no';

					str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
					emb = '';

					$.each(selectedOpts.swf, function(name, val) {
						str += '<param name="' + name + '" value="' + val + '"></param>';
						emb += ' ' + name + '="' + val + '"';
					});

					str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';

					tmp.html(str);

					_process_inline();
				break;

				case 'ajax':
					busy = false;

					$.fancybox.showActivity();

					selectedOpts.ajax.win = selectedOpts.ajax.success;

					ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {
						url	: href,
						data : selectedOpts.ajax.data || {},
						error : function(XMLHttpRequest, textStatus, errorThrown) {
							if ( XMLHttpRequest.status > 0 ) {
								_error();
							}
						},
						success : function(data, textStatus, XMLHttpRequest) {
							var o = typeof XMLHttpRequest == 'object' ? XMLHttpRequest : ajaxLoader;
							if (o.status == 200) {
								if ( typeof selectedOpts.ajax.win == 'function' ) {
									ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest);

									if (ret === false) {
										loading.hide();
										return;
									} else if (typeof ret == 'string' || typeof ret == 'object') {
										data = ret;
									}
								}

								tmp.html( data );
								_process_inline();
							}
						}
					}));

				break;

				case 'iframe':
					_show();
				break;
			}
		},

		_process_inline = function() {
			var
				w = selectedOpts.width,
				h = selectedOpts.height;

			if (w.toString().indexOf('%') > -1) {
				w = parseInt( ($(window).width() - (selectedOpts.margin * 2)) * parseFloat(w) / 100, 10) + 'px';

			} else {
				w = w == 'auto' ? 'auto' : w + 'px';	
			}

			if (h.toString().indexOf('%') > -1) {
				h = parseInt( ($(window).height() - (selectedOpts.margin * 2)) * parseFloat(h) / 100, 10) + 'px';

			} else {
				h = h == 'auto' ? 'auto' : h + 'px';	
			}

			tmp.wrapInner('<div style="width:' + w + ';height:' + h + ';overflow: ' + (selectedOpts.scrolling == 'auto' ? 'auto' : (selectedOpts.scrolling == 'yes' ? 'scroll' : 'hidden')) + ';position:relative;"></div>');

			selectedOpts.width = tmp.width();
			selectedOpts.height = tmp.height();

			_show();
		},

		_process_image = function() {
			selectedOpts.width = imgPreloader.width;
			selectedOpts.height = imgPreloader.height;

			$("<img />").attr({
				'id' : 'fancybox-img',
				'src' : imgPreloader.src,
				'alt' : selectedOpts.title
			}).appendTo( tmp );

			_show();
		},

		_show = function() {
			//onShow fancybox is called before show a fancybox
			//Clean Fancybox
			$("#fancybox-outer").css("background", "white");

  			//Original code
			var pos, equal;

			loading.hide();

			if (wrap.is(":visible") && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
				$.event.trigger('fancybox-cancel');

				busy = false;
				return;
			}

			busy = true;

			$(content.add( overlay )).unbind();

			$(window).unbind("resize.fb scroll.fb");
			$(document).unbind('keydown.fb');

			if (wrap.is(":visible") && currentOpts.titlePosition !== 'outside') {
				wrap.css('height', wrap.height());
			}

			currentArray = selectedArray;
			currentIndex = selectedIndex;
			currentOpts = selectedOpts;

			if (currentOpts.overlayShow) {
				overlay.css({
					'background-color' : currentOpts.overlayColor,
					'opacity' : currentOpts.overlayOpacity,
					'cursor' : currentOpts.hideOnOverlayClick ? 'pointer' : 'auto',
					'height' : $(document).height()
				});

				if (!overlay.is(':visible')) {
					if (isIE6) {
						$('select:not(#fancybox-tmp select)').filter(function() {
							return this.style.visibility !== 'hidden';
						}).css({'visibility' : 'hidden'}).one('fancybox-cleanup', function() {
							this.style.visibility = 'inherit';
						});
					}

					overlay.show();
				}
			} else {
				overlay.hide();
			}

			final_pos = _get_zoom_to();

			_process_title();

			if (wrap.is(":visible")) {
				$( close.add( nav_left ).add( nav_right ) ).hide();

				pos = wrap.position(),

				start_pos = {
					top	 : pos.top,
					left : pos.left,
					width : wrap.width(),
					height : wrap.height()
				};

				equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);

				content.fadeTo(currentOpts.changeFade, 0.3, function() {
					var finish_resizing = function() {
						content.html( tmp.contents() ).fadeTo(currentOpts.changeFade, 1, _finish);
					};

					$.event.trigger('fancybox-change');

					content
						.empty()
						.removeAttr('filter')
						.css({
							'border-width' : currentOpts.padding,
							'width'	: final_pos.width - currentOpts.padding * 2,
							'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
						});

					if (equal) {
						finish_resizing();

					} else {
						fx.prop = 0;

						$(fx).animate({prop: 1}, {
							 duration : currentOpts.changeSpeed,
							 easing : currentOpts.easingChange,
							 step : _draw,
							 complete : finish_resizing
						});
					}
				});

				return;
			}

			wrap.removeAttr("style");

			content.css('border-width', currentOpts.padding);

			if (currentOpts.transitionIn == 'elastic') {
				start_pos = _get_zoom_from();

				content.html( tmp.contents() );

				wrap.show();

				if (currentOpts.opacity) {
					final_pos.opacity = 0;
				}

				fx.prop = 0;

				$(fx).animate({prop: 1}, {
					 duration : currentOpts.speedIn,
					 easing : currentOpts.easingIn,
					 step : _draw,
					 complete : _finish
				});

				return;
			}

			if (currentOpts.titlePosition == 'inside' && titleHeight > 0) {	
				title.show();	
			}

			content
				.css({
					'width' : final_pos.width - currentOpts.padding * 2,
					'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
				})
				.html( tmp.contents() );

			wrap
				.css(final_pos)
				.fadeIn( currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish );
		},

		_format_title = function(title) {
			if (title && title.length) {
				if (currentOpts.titlePosition == 'float') {
					return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>';
				}

				return '<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + '</div>';
			}

			return false;
		},

		_process_title = function() {
			titleStr = currentOpts.title || '';
			titleHeight = 0;

			title
				.empty()
				.removeAttr('style')
				.removeClass();

			if (currentOpts.titleShow === false) {
				title.hide();
				return;
			}

			titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr);

			if (!titleStr || titleStr === '') {
				title.hide();
				return;
			}

			title
				.addClass('fancybox-title-' + currentOpts.titlePosition)
				.html( titleStr )
				.appendTo( 'body' )
				.show();

			switch (currentOpts.titlePosition) {
				case 'inside':
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'marginLeft' : currentOpts.padding,
							'marginRight' : currentOpts.padding
						});

					titleHeight = title.outerHeight(true);

					title.appendTo( outer );

					final_pos.height += titleHeight;
				break;

				case 'over':
					title
						.css({
							'marginLeft' : currentOpts.padding,
							'width'	: final_pos.width - (currentOpts.padding * 2),
							'bottom' : currentOpts.padding
						})
						.appendTo( outer );
				break;

				case 'float':
					title
						.css('left', parseInt((title.width() - final_pos.width - 40)/ 2, 10) * -1)
						.appendTo( wrap );
				break;

				default:
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'paddingLeft' : currentOpts.padding,
							'paddingRight' : currentOpts.padding
						})
						.appendTo( wrap );
				break;
			}

			title.hide();
		},

		_set_navigation = function() {
			if (currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) {
				$(document).bind('keydown.fb', function(e) {
					if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
						e.preventDefault();
						$.fancybox.close();

					} else if ((e.keyCode == 37 || e.keyCode == 39) && currentOpts.enableKeyboardNav && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {
						e.preventDefault();
						$.fancybox[ e.keyCode == 37 ? 'prev' : 'next']();
					}
				});
			}

			if (!currentOpts.showNavArrows) { 
				nav_left.hide();
				nav_right.hide();
				return;
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex !== 0) {
				nav_left.show();
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length -1)) {
				nav_right.show();
			}
		},

		_finish = function () {
			if (!$.support.opacity) {
				content.get(0).style.removeAttribute('filter');
				wrap.get(0).style.removeAttribute('filter');
			}

			if (selectedOpts.autoDimensions) {
				content.css('height', 'auto');
			}

			wrap.css('height', 'auto');

			if (titleStr && titleStr.length) {
				title.show();
			}

			if (currentOpts.showCloseButton) {
				close.show();
			}

			_set_navigation();
	
			if (currentOpts.hideOnContentClick)	{
				content.bind('click', $.fancybox.close);
			}

			if (currentOpts.hideOnOverlayClick)	{
				overlay.bind('click', $.fancybox.close);
			}

			$(window).bind("resize.fb", $.fancybox.resize);

			if (currentOpts.centerOnScroll) {
				$(window).bind("scroll.fb", $.fancybox.center);
			}

			if (currentOpts.type == 'iframe') {
				$('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + ' scrolling="' + selectedOpts.scrolling + '" src="' + currentOpts.href + '"></iframe>').appendTo(content);
			}

			wrap.show();

			busy = false;

			$.fancybox.center();

			currentOpts.onComplete(currentArray, currentIndex, currentOpts);

			_preload_images();
		},

		_preload_images = function() {
			var href, 
				objNext;

			if ((currentArray.length -1) > currentIndex) {
				href = currentArray[ currentIndex + 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}

			if (currentIndex > 0) {
				href = currentArray[ currentIndex - 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}
		},

		_draw = function(pos) {
			var dim = {
				width : parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10),
				height : parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10),

				top : parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10),
				left : parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)
			};

			if (typeof final_pos.opacity !== 'undefined') {
				dim.opacity = pos < 0.5 ? 0.5 : pos;
			}

			wrap.css(dim);

			content.css({
				'width' : dim.width - currentOpts.padding * 2,
				'height' : dim.height - (titleHeight * pos) - currentOpts.padding * 2
			});
		},

		_get_viewport = function() {
			return [
				$(window).width() - (currentOpts.margin * 2),
				$(window).height() - (currentOpts.margin * 2),
				$(document).scrollLeft() + currentOpts.margin,
				$(document).scrollTop() + currentOpts.margin
			];
		},

		_get_zoom_to = function () {
			var view = _get_viewport(),
				to = {},
				resize = currentOpts.autoScale,
				double_padding = currentOpts.padding * 2,
				ratio;

			if (currentOpts.width.toString().indexOf('%') > -1) {
				to.width = parseInt((view[0] * parseFloat(currentOpts.width)) / 100, 10);
			} else {
				to.width = currentOpts.width + double_padding;
			}

			if (currentOpts.height.toString().indexOf('%') > -1) {
				to.height = parseInt((view[1] * parseFloat(currentOpts.height)) / 100, 10);
			} else {
				to.height = currentOpts.height + double_padding;
			}

			if (resize && (to.width > view[0] || to.height > view[1])) {
				if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
					ratio = (currentOpts.width ) / (currentOpts.height );

					if ((to.width ) > view[0]) {
						to.width = view[0];
						to.height = parseInt(((to.width - double_padding) / ratio) + double_padding, 10);
					}

					if ((to.height) > view[1]) {
						to.height = view[1];
						to.width = parseInt(((to.height - double_padding) * ratio) + double_padding, 10);
					}

				} else {
					to.width = Math.min(to.width, view[0]);
					to.height = Math.min(to.height, view[1]);
				}
			}

			to.top = parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - to.height - 40) * 0.5)), 10);
			to.left = parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - to.width - 40) * 0.5)), 10);

			return to;
		},

		_get_obj_pos = function(obj) {
			var pos = obj.offset();

			pos.top += parseInt( obj.css('paddingTop'), 10 ) || 0;
			pos.left += parseInt( obj.css('paddingLeft'), 10 ) || 0;

			pos.top += parseInt( obj.css('border-top-width'), 10 ) || 0;
			pos.left += parseInt( obj.css('border-left-width'), 10 ) || 0;

			pos.width = obj.width();
			pos.height = obj.height();

			return pos;
		},

		_get_zoom_from = function() {
			var orig = selectedOpts.orig ? $(selectedOpts.orig) : false,
				from = {},
				pos,
				view;

			if (orig && orig.length) {
				pos = _get_obj_pos(orig);

				from = {
					width : pos.width + (currentOpts.padding * 2),
					height : pos.height + (currentOpts.padding * 2),
					top	: pos.top - currentOpts.padding - 20,
					left : pos.left - currentOpts.padding - 20
				};

			} else {
				view = _get_viewport();

				from = {
					width : currentOpts.padding * 2,
					height : currentOpts.padding * 2,
					top	: parseInt(view[3] + view[1] * 0.5, 10),
					left : parseInt(view[2] + view[0] * 0.5, 10)
				};
			}

			return from;
		},

		_animate_loading = function() {
			if (!loading.is(':visible')){
				clearInterval(loadingTimer);
				return;
			}

			$('div', loading).css('top', (loadingFrame * -40) + 'px');

			loadingFrame = (loadingFrame + 1) % 12;
		};

	/*
	 * Public methods 
	 */

	$.fn.fancybox = function(options) {
		if (!$(this).length) {
			return this;
		}

		$(this)
			.data('fancybox', $.extend({}, options, ($.metadata ? $(this).metadata() : {})))
			.unbind('click.fb')
			.bind('click.fb', function(e) {
				e.preventDefault();

				if (busy) {
					return;
				}

				busy = true;

				$(this).blur();

				selectedArray = [];
				selectedIndex = 0;

				var rel = $(this).attr('rel') || '';

				if (!rel || rel == '' || rel === 'nofollow') {
					selectedArray.push(this);

				} else {
					selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "]");
					selectedIndex = selectedArray.index( this );
				}

				_start();

				return;
			});

		return this;
	};

	$.fancybox = function(obj) {
		var opts;

		if (busy) {
			return;
		}

		busy = true;
		opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};

		selectedArray = [];
		selectedIndex = parseInt(opts.index, 10) || 0;

		if ($.isArray(obj)) {
			for (var i = 0, j = obj.length; i < j; i++) {
				if (typeof obj[i] == 'object') {
					$(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
				} else {
					obj[i] = $({}).data('fancybox', $.extend({content : obj[i]}, opts));
				}
			}

			selectedArray = jQuery.merge(selectedArray, obj);

		} else {
			if (typeof obj == 'object') {
				$(obj).data('fancybox', $.extend({}, opts, obj));
			} else {
				obj = $({}).data('fancybox', $.extend({content : obj}, opts));
			}

			selectedArray.push(obj);
		}

		if (selectedIndex > selectedArray.length || selectedIndex < 0) {
			selectedIndex = 0;
		}

		_start();
	};

	$.fancybox.showActivity = function() {
		clearInterval(loadingTimer);

		loading.show();
		loadingTimer = setInterval(_animate_loading, 66);
	};

	$.fancybox.hideActivity = function() {
		loading.hide();
	};

	$.fancybox.next = function() {
		return $.fancybox.pos( currentIndex + 1);
	};

	$.fancybox.prev = function() {
		return $.fancybox.pos( currentIndex - 1);
	};

	$.fancybox.pos = function(pos) {
		if (busy) {
			return;
		}

		pos = parseInt(pos);

		selectedArray = currentArray;

		if (pos > -1 && pos < currentArray.length) {
			selectedIndex = pos;
			_start();

		} else if (currentOpts.cyclic && currentArray.length > 1) {
			selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1;
			_start();
		}

		return;
	};

	$.fancybox.cancel = function() {
		if (busy) {
			return;
		}

		busy = true;

		$.event.trigger('fancybox-cancel');

		_abort();

		selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);

		busy = false;
	};

	// Note: within an iframe use - parent.$.fancybox.close();
	$.fancybox.close = function() {
		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		if (currentOpts && ((typeof currentOpts.onCleanup !== "function")||(false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)))) {
			busy = false;
			return;
		}

		_abort();

		$(close.add( nav_left ).add( nav_right )).hide();

		$(content.add( overlay )).unbind();

		$(window).unbind("resize.fb scroll.fb");
		$(document).unbind('keydown.fb');

		content.find('iframe').attr('src', isIE6 && /^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank');

		if (currentOpts.titlePosition !== 'inside') {
			title.empty();
		}

		wrap.stop();

		function _cleanup() {
			overlay.fadeOut('fast');

			title.empty().hide();
			wrap.hide();

			$.event.trigger('fancybox-cleanup');

			content.empty();

			currentOpts.onClosed(currentArray, currentIndex, currentOpts);

			currentArray = selectedOpts	= [];
			currentIndex = selectedIndex = 0;
			currentOpts = selectedOpts	= {};

			busy = false;
		}

		if (currentOpts.transitionOut == 'elastic') {
			start_pos = _get_zoom_from();

			var pos = wrap.position();

			final_pos = {
				top	 : pos.top ,
				left : pos.left,
				width :	wrap.width(),
				height : wrap.height()
			};

			if (currentOpts.opacity) {
				final_pos.opacity = 1;
			}

			title.empty().hide();

			fx.prop = 1;

			$(fx).animate({ prop: 0 }, {
				 duration : currentOpts.speedOut,
				 easing : currentOpts.easingOut,
				 step : _draw,
				 complete : _cleanup
			});

		} else {
			wrap.fadeOut( currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
		}
	};

	$.fancybox.resize = function() {
		if (overlay.is(':visible')) {
			overlay.css('height', $(document).height());
		}

		$.fancybox.center(true);
	};

	$.fancybox.center = function() {

		if(currentOpts && currentOpts.center === false){
			return;
		}

		var view, align;

		if (busy) {
			return;	
		}

		align = arguments[0] === true ? 1 : 0;
		view = _get_viewport();

		if (!align && (wrap.width() > view[0] || wrap.height() > view[1])) {
			return;	
		}

		wrap
			.stop()
			.animate({
				'top' : parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - content.height() - 40) * 0.5) - currentOpts.padding)),
				'left' : parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - content.width() - 40) * 0.5) - currentOpts.padding))
			}, typeof arguments[0] == 'number' ? arguments[0] : 200);
	};

	$.fancybox.init = function() {
		if ($("#fancybox-wrap").length) {
			return;
		}

		$('body').append(
			tmp	= $('<div id="fancybox-tmp"></div>'),
			loading	= $('<div id="fancybox-loading"><div></div></div>'),
			overlay	= $('<div id="fancybox-overlay"></div>'),
			wrap = $('<div id="fancybox-wrap"></div>')
		);

		outer = $('<div id="fancybox-outer"></div>')
			.append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>')
			.appendTo( wrap );

		outer.append(
			content = $('<div id="fancybox-content"></div>'),
			close = $('<a id="fancybox-close"></a>'),
			title = $('<div id="fancybox-title"></div>'),

			nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
			nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
		);

		close.click($.fancybox.close);
		loading.click($.fancybox.cancel);

		nav_left.click(function(e) {
			e.preventDefault();
			$.fancybox.prev();
		});

		nav_right.click(function(e) {
			e.preventDefault();
			$.fancybox.next();
		});

		if ($.fn.mousewheel) {
			wrap.bind('mousewheel.fb', function(e, delta) {
				if (busy) {
					e.preventDefault();

				} else if ($(e.target).get(0).clientHeight == 0 || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) {
					e.preventDefault();
					$.fancybox[ delta > 0 ? 'prev' : 'next']();
				}
			});
		}

		if (!$.support.opacity) {
			wrap.addClass('fancybox-ie');
		}

		if (isIE6) {
			loading.addClass('fancybox-ie6');
			wrap.addClass('fancybox-ie6');

			$('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank' ) + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer);
		}
	};

	$.fn.fancybox.defaults = {
		padding : 10,
		margin : 40,
		opacity : false,
		modal : false,
		cyclic : false,
		scrolling : 'auto',	// 'auto', 'yes' or 'no'

		width : 560,
		height : 340,

		autoScale : true,
		autoDimensions : true,
		centerOnScroll : false,

		ajax : {},
		swf : { wmode: 'transparent' },

		hideOnOverlayClick : true,
		hideOnContentClick : false,

		overlayShow : true,
		overlayOpacity : 0.7,
		overlayColor : '#777',

		titleShow : true,
		titlePosition : 'float', // 'float', 'outside', 'inside' or 'over'
		titleFormat : null,
		titleFromAlt : false,

		transitionIn : 'fade', // 'elastic', 'fade' or 'none'
		transitionOut : 'fade', // 'elastic', 'fade' or 'none'

		speedIn : 300,
		speedOut : 300,

		changeSpeed : 300,
		changeFade : 'fast',

		easingIn : 'swing',
		easingOut : 'swing',

		showCloseButton	 : true,
		showNavArrows : true,
		enableEscapeButton : true,
		enableKeyboardNav : true,

		center: true,

		onStart : function(){},
		onCancel : function(){},
		onComplete : function(){},
		onCleanup : function(){},
		onClosed : function(){},
		onError : function(){}
	};

	$(document).ready(function() {
		$.fancybox.init();
	});

})(jQuery);

/*custom scrollbar - MIT LICENSE */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
(function(c){var b={init:function(e){var f={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:950,mouseWheel:true,mouseWheelPixels:"auto",autoDraggerLength:true,autoHideScrollbar:false,snapAmount:null,snapOffset:0,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false,autoScrollOnFocus:true,normalizeMouseWheelDelta:false},contentTouchScroll:true,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"light"},e=c.extend(true,f,e);return this.each(function(){var m=c(this);if(e.set_width){m.css("width",e.set_width)}if(e.set_height){m.css("height",e.set_height)}if(!c(document).data("mCustomScrollbar-index")){c(document).data("mCustomScrollbar-index","1")}else{var t=parseInt(c(document).data("mCustomScrollbar-index"));c(document).data("mCustomScrollbar-index",t+1)}m.wrapInner("<div class='mCustomScrollBox mCS-"+e.theme+"' id='mCSB_"+c(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+c(document).data("mCustomScrollbar-index"));var g=m.children(".mCustomScrollBox");if(e.horizontalScroll){g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var k=g.children(".mCSB_h_wrapper");k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:k.children().outerWidth(),position:"relative"}).unwrap()}else{g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")}var o=g.children(".mCSB_container");if(c.support.touch){o.addClass("mCS_touch")}o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var l=g.children(".mCSB_scrollTools"),h=l.children(".mCSB_draggerContainer"),q=h.children(".mCSB_dragger");if(e.horizontalScroll){q.data("minDraggerWidth",q.width())}else{q.data("minDraggerHeight",q.height())}if(e.scrollButtons.enable){if(e.horizontalScroll){l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")}else{l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")}}g.bind("scroll",function(){if(!m.is(".mCS_disabled")){g.scrollTop(0).scrollLeft(0)}});m.data({mCS_Init:true,mCustomScrollbarIndex:c(document).data("mCustomScrollbar-index"),horizontalScroll:e.horizontalScroll,scrollInertia:e.scrollInertia,scrollEasing:"mcsEaseOut",mouseWheel:e.mouseWheel,mouseWheelPixels:e.mouseWheelPixels,autoDraggerLength:e.autoDraggerLength,autoHideScrollbar:e.autoHideScrollbar,snapAmount:e.snapAmount,snapOffset:e.snapOffset,scrollButtons_enable:e.scrollButtons.enable,scrollButtons_scrollType:e.scrollButtons.scrollType,scrollButtons_scrollSpeed:e.scrollButtons.scrollSpeed,scrollButtons_scrollAmount:e.scrollButtons.scrollAmount,autoExpandHorizontalScroll:e.advanced.autoExpandHorizontalScroll,autoScrollOnFocus:e.advanced.autoScrollOnFocus,normalizeMouseWheelDelta:e.advanced.normalizeMouseWheelDelta,contentTouchScroll:e.contentTouchScroll,onScrollStart_Callback:e.callbacks.onScrollStart,onScroll_Callback:e.callbacks.onScroll,onTotalScroll_Callback:e.callbacks.onTotalScroll,onTotalScrollBack_Callback:e.callbacks.onTotalScrollBack,onTotalScroll_Offset:e.callbacks.onTotalScrollOffset,onTotalScrollBack_Offset:e.callbacks.onTotalScrollBackOffset,whileScrolling_Callback:e.callbacks.whileScrolling,bindEvent_scrollbar_drag:false,bindEvent_content_touch:false,bindEvent_scrollbar_click:false,bindEvent_mousewheel:false,bindEvent_buttonsContinuous_y:false,bindEvent_buttonsContinuous_x:false,bindEvent_buttonsPixels_y:false,bindEvent_buttonsPixels_x:false,bindEvent_focusin:false,bindEvent_autoHideScrollbar:false,mCSB_buttonScrollRight:false,mCSB_buttonScrollLeft:false,mCSB_buttonScrollDown:false,mCSB_buttonScrollUp:false});if(e.horizontalScroll){if(m.css("max-width")!=="none"){if(!e.advanced.updateOnContentResize){e.advanced.updateOnContentResize=true}}}else{if(m.css("max-height")!=="none"){var s=false,r=parseInt(m.css("max-height"));if(m.css("max-height").indexOf("%")>=0){s=r,r=m.parent().height()*s/100}m.css("overflow","hidden");g.css("max-height",r)}}m.mCustomScrollbar("update");if(e.advanced.updateOnBrowserResize){var i,j=c(window).width(),u=c(window).height();c(window).bind("resize."+m.data("mCustomScrollbarIndex"),function(){if(i){clearTimeout(i)}i=setTimeout(function(){if(!m.is(".mCS_disabled")&&!m.is(".mCS_destroyed")){var w=c(window).width(),v=c(window).height();if(j!==w||u!==v){if(m.css("max-height")!=="none"&&s){g.css("max-height",m.parent().height()*s/100)}m.mCustomScrollbar("update");j=w;u=v}}},150)})}if(e.advanced.updateOnContentResize){var p;if(e.horizontalScroll){var n=o.outerWidth()}else{var n=o.outerHeight()}p=setInterval(function(){if(e.horizontalScroll){if(e.advanced.autoExpandHorizontalScroll){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var v=o.outerWidth()}else{var v=o.outerHeight()}if(v!=n){m.mCustomScrollbar("update");n=v}},300)}})},update:function(){var n=c(this),k=n.children(".mCustomScrollBox"),q=k.children(".mCSB_container");q.removeClass("mCS_no_scrollbar");n.removeClass("mCS_disabled mCS_destroyed");k.scrollTop(0).scrollLeft(0);var y=k.children(".mCSB_scrollTools"),o=y.children(".mCSB_draggerContainer"),m=o.children(".mCSB_dragger");if(n.data("horizontalScroll")){var A=y.children(".mCSB_buttonLeft"),t=y.children(".mCSB_buttonRight"),f=k.width();if(n.data("autoExpandHorizontalScroll")){q.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:q.outerWidth(),position:"relative"}).unwrap()}var z=q.outerWidth()}else{var w=y.children(".mCSB_buttonUp"),g=y.children(".mCSB_buttonDown"),r=k.height(),i=q.outerHeight()}if(i>r&&!n.data("horizontalScroll")){y.css("display","block");var s=o.height();if(n.data("autoDraggerLength")){var u=Math.round(r/i*s),l=m.data("minDraggerHeight");if(u<=l){m.css({height:l})}else{if(u>=s-10){var p=s-10;m.css({height:p})}else{m.css({height:u})}}m.children(".mCSB_dragger_bar").css({"line-height":m.height()+"px"})}var B=m.height(),x=(i-r)/(s-B);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().top);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{if(z>f&&n.data("horizontalScroll")){y.css("display","block");var h=o.width();if(n.data("autoDraggerLength")){var j=Math.round(f/z*h),C=m.data("minDraggerWidth");if(j<=C){m.css({width:C})}else{if(j>=h-10){var e=h-10;m.css({width:e})}else{m.css({width:j})}}}var v=m.width(),x=(z-f)/(h-v);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().left);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{k.unbind("mousewheel focusin");if(n.data("horizontalScroll")){m.add(q).css("left",0)}else{m.add(q).css("top",0)}y.css("display","none");q.addClass("mCS_no_scrollbar");n.data({bindEvent_mousewheel:false,bindEvent_focusin:false})}}},scrolling:function(h,p,m,j,w,e,A,v){var k=c(this);if(!k.data("bindEvent_scrollbar_drag")){var n,o;if(c.support.msPointer){j.bind("MSPointerDown",function(H){H.preventDefault();k.data({on_drag:true});j.addClass("mCSB_dragger_onDrag");var G=c(this),J=G.offset(),F=H.originalEvent.pageX-J.left,I=H.originalEvent.pageY-J.top;if(F<G.width()&&F>0&&I<G.height()&&I>0){n=I;o=F}});c(document).bind("MSPointerMove."+k.data("mCustomScrollbarIndex"),function(H){H.preventDefault();if(k.data("on_drag")){var G=j,J=G.offset(),F=H.originalEvent.pageX-J.left,I=H.originalEvent.pageY-J.top;D(n,o,I,F)}}).bind("MSPointerUp."+k.data("mCustomScrollbarIndex"),function(x){k.data({on_drag:false});j.removeClass("mCSB_dragger_onDrag")})}else{j.bind("mousedown touchstart",function(H){H.preventDefault();H.stopImmediatePropagation();var G=c(this),K=G.offset(),F,J;if(H.type==="touchstart"){var I=H.originalEvent.touches[0]||H.originalEvent.changedTouches[0];F=I.pageX-K.left;J=I.pageY-K.top}else{k.data({on_drag:true});j.addClass("mCSB_dragger_onDrag");F=H.pageX-K.left;J=H.pageY-K.top}if(F<G.width()&&F>0&&J<G.height()&&J>0){n=J;o=F}}).bind("touchmove",function(H){H.preventDefault();H.stopImmediatePropagation();var K=H.originalEvent.touches[0]||H.originalEvent.changedTouches[0],G=c(this),J=G.offset(),F=K.pageX-J.left,I=K.pageY-J.top;D(n,o,I,F)});c(document).bind("mousemove."+k.data("mCustomScrollbarIndex"),function(H){if(k.data("on_drag")){var G=j,J=G.offset(),F=H.pageX-J.left,I=H.pageY-J.top;D(n,o,I,F)}}).bind("mouseup."+k.data("mCustomScrollbarIndex"),function(x){k.data({on_drag:false});j.removeClass("mCSB_dragger_onDrag")})}k.data({bindEvent_scrollbar_drag:true})}function D(G,H,I,F){if(k.data("horizontalScroll")){k.mCustomScrollbar("scrollTo",(j.position().left-(H))+F,{moveDragger:true,trigger:"internal"})}else{k.mCustomScrollbar("scrollTo",(j.position().top-(G))+I,{moveDragger:true,trigger:"internal"})}}if(c.support.touch&&k.data("contentTouchScroll")){if(!k.data("bindEvent_content_touch")){var l,B,r,s,u,C,E;p.bind("touchstart",function(x){x.stopImmediatePropagation();l=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];B=c(this);r=B.offset();u=l.pageX-r.left;s=l.pageY-r.top;C=s;E=u});p.bind("touchmove",function(x){x.preventDefault();x.stopImmediatePropagation();l=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];B=c(this).parent();r=B.offset();u=l.pageX-r.left;s=l.pageY-r.top;if(k.data("horizontalScroll")){k.mCustomScrollbar("scrollTo",E-u,{trigger:"internal"})}else{k.mCustomScrollbar("scrollTo",C-s,{trigger:"internal"})}})}}if(!k.data("bindEvent_scrollbar_click")){m.bind("click",function(F){var x=(F.pageY-m.offset().top)*k.data("scrollAmount"),y=c(F.target);if(k.data("horizontalScroll")){x=(F.pageX-m.offset().left)*k.data("scrollAmount")}if(y.hasClass("mCSB_draggerContainer")||y.hasClass("mCSB_draggerRail")){k.mCustomScrollbar("scrollTo",x,{trigger:"internal",scrollEasing:"draggerRailEase"})}});k.data({bindEvent_scrollbar_click:true})}if(k.data("mouseWheel")){if(!k.data("bindEvent_mousewheel")){h.bind("mousewheel",function(H,J){var G,F=k.data("mouseWheelPixels"),x=Math.abs(p.position().top),I=j.position().top,y=m.height()-j.height();if(k.data("normalizeMouseWheelDelta")){if(J<0){J=-1}else{J=1}}if(F==="auto"){F=100+Math.round(k.data("scrollAmount")/2)}if(k.data("horizontalScroll")){I=j.position().left;y=m.width()-j.width();x=Math.abs(p.position().left)}if((J>0&&I!==0)||(J<0&&I!==y)){H.preventDefault();H.stopImmediatePropagation()}G=x-(J*F);k.mCustomScrollbar("scrollTo",G,{trigger:"internal"})});k.data({bindEvent_mousewheel:true})}}if(k.data("scrollButtons_enable")){if(k.data("scrollButtons_scrollType")==="pixels"){if(k.data("horizontalScroll")){v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",i,g);k.data({bindEvent_buttonsContinuous_x:false});if(!k.data("bindEvent_buttonsPixels_x")){v.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().left)+k.data("scrollButtons_scrollAmount"))});A.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().left)-k.data("scrollButtons_scrollAmount"))});k.data({bindEvent_buttonsPixels_x:true})}}else{e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",i,g);k.data({bindEvent_buttonsContinuous_y:false});if(!k.data("bindEvent_buttonsPixels_y")){e.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().top)+k.data("scrollButtons_scrollAmount"))});w.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().top)-k.data("scrollButtons_scrollAmount"))});k.data({bindEvent_buttonsPixels_y:true})}}function q(x){if(!j.data("preventAction")){j.data("preventAction",true);k.mCustomScrollbar("scrollTo",x,{trigger:"internal"})}}}else{if(k.data("horizontalScroll")){v.add(A).unbind("click");k.data({bindEvent_buttonsPixels_x:false});if(!k.data("bindEvent_buttonsContinuous_x")){v.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollRight:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().left)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var i=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollRight"))};v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",i);A.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollLeft:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().left)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var g=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollLeft"))};A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",g);k.data({bindEvent_buttonsContinuous_x:true})}}else{e.add(w).unbind("click");k.data({bindEvent_buttonsPixels_y:false});if(!k.data("bindEvent_buttonsContinuous_y")){e.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollDown:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().top)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var t=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollDown"))};e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",t);w.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollUp:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().top)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var f=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollUp"))};w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",f);k.data({bindEvent_buttonsContinuous_y:true})}}function z(){var x=k.data("scrollButtons_scrollSpeed");if(k.data("scrollButtons_scrollSpeed")==="auto"){x=Math.round((k.data("scrollInertia")+100)/40)}return x}}}if(k.data("autoScrollOnFocus")){if(!k.data("bindEvent_focusin")){h.bind("focusin",function(){h.scrollTop(0).scrollLeft(0);var x=c(document.activeElement);if(x.is("input,textarea,select,button,a[tabindex],area,object")){var G=p.position().top,y=x.position().top,F=h.height()-x.outerHeight();if(k.data("horizontalScroll")){G=p.position().left;y=x.position().left;F=h.width()-x.outerWidth()}if(G+y<0||G+y>F){k.mCustomScrollbar("scrollTo",y,{trigger:"internal"})}}});k.data({bindEvent_focusin:true})}}if(k.data("autoHideScrollbar")){if(!k.data("bindEvent_autoHideScrollbar")){h.bind("mouseenter",function(x){h.addClass("mCS-mouse-over");d.showScrollbar.call(h.children(".mCSB_scrollTools"))}).bind("mouseleave touchend",function(x){h.removeClass("mCS-mouse-over");if(x.type==="mouseleave"){d.hideScrollbar.call(h.children(".mCSB_scrollTools"))}});k.data({bindEvent_autoHideScrollbar:true})}}},scrollTo:function(e,f){var i=c(this),o={moveDragger:false,trigger:"external",callbacks:true,scrollInertia:i.data("scrollInertia"),scrollEasing:i.data("scrollEasing")},f=c.extend(o,f),p,g=i.children(".mCustomScrollBox"),k=g.children(".mCSB_container"),r=g.children(".mCSB_scrollTools"),j=r.children(".mCSB_draggerContainer"),h=j.children(".mCSB_dragger"),t=draggerSpeed=f.scrollInertia,q,s,m,l;if(!k.hasClass("mCS_no_scrollbar")){i.data({mCS_trigger:f.trigger});if(i.data("mCS_Init")){f.callbacks=false}if(e||e===0){if(typeof(e)==="number"){if(f.moveDragger){p=e;if(i.data("horizontalScroll")){e=h.position().left*i.data("scrollAmount")}else{e=h.position().top*i.data("scrollAmount")}draggerSpeed=0}else{p=e/i.data("scrollAmount")}}else{if(typeof(e)==="string"){var v;if(e==="top"){v=0}else{if(e==="bottom"&&!i.data("horizontalScroll")){v=k.outerHeight()-g.height()}else{if(e==="left"){v=0}else{if(e==="right"&&i.data("horizontalScroll")){v=k.outerWidth()-g.width()}else{if(e==="first"){v=i.find(".mCSB_container").find(":first")}else{if(e==="last"){v=i.find(".mCSB_container").find(":last")}else{v=i.find(e)}}}}}}if(v.length===1){if(i.data("horizontalScroll")){e=v.position().left}else{e=v.position().top}p=e/i.data("scrollAmount")}else{p=e=v}}}if(i.data("horizontalScroll")){if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.width()-k.outerWidth()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollLeft"));if(!s){q=true}}else{if(p>=j.width()-h.width()){p=j.width()-h.width();e=g.width()-k.outerWidth();clearInterval(i.data("mCSB_buttonScrollRight"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"left",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"left",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().left>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().left<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}else{if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.height()-k.outerHeight()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollUp"));if(!s){q=true}}else{if(p>=j.height()-h.height()){p=j.height()-h.height();e=g.height()-k.outerHeight();clearInterval(i.data("mCSB_buttonScrollDown"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"top",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"top",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().top>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().top<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}if(i.data("mCS_Init")){i.data({mCS_Init:false})}}}function u(w){this.mcs={top:k.position().top,left:k.position().left,draggerTop:h.position().top,draggerLeft:h.position().left,topPct:Math.round((100*Math.abs(k.position().top))/Math.abs(k.outerHeight()-g.height())),leftPct:Math.round((100*Math.abs(k.position().left))/Math.abs(k.outerWidth()-g.width()))};switch(w){case"onScrollStart":i.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call(i,this.mcs);break;case"whileScrolling":i.data("whileScrolling_Callback").call(i,this.mcs);break;case"onScroll":i.data("onScroll_Callback").call(i,this.mcs);break;case"onTotalScrollBack":i.data("onTotalScrollBack_Callback").call(i,this.mcs);break;case"onTotalScroll":i.data("onTotalScroll_Callback").call(i,this.mcs);break}}},stop:function(){var g=c(this),e=g.children().children(".mCSB_container"),f=g.children().children().children().children(".mCSB_dragger");d.mTweenAxisStop.call(this,e[0]);d.mTweenAxisStop.call(this,f[0])},disable:function(e){var j=c(this),f=j.children(".mCustomScrollBox"),h=f.children(".mCSB_container"),g=f.children(".mCSB_scrollTools"),i=g.children().children(".mCSB_dragger");f.unbind("mousewheel focusin mouseenter mouseleave touchend");h.unbind("touchstart touchmove");if(e){if(j.data("horizontalScroll")){i.add(h).css("left",0)}else{i.add(h).css("top",0)}}g.css("display","none");h.addClass("mCS_no_scrollbar");j.data({bindEvent_mousewheel:false,bindEvent_focusin:false,bindEvent_content_touch:false,bindEvent_autoHideScrollbar:false}).addClass("mCS_disabled")},destroy:function(){var e=c(this);e.removeClass("mCustomScrollbar _mCS_"+e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();c(document).unbind("mousemove."+e.data("mCustomScrollbarIndex")+" mouseup."+e.data("mCustomScrollbarIndex")+" MSPointerMove."+e.data("mCustomScrollbarIndex")+" MSPointerUp."+e.data("mCustomScrollbarIndex"));c(window).unbind("resize."+e.data("mCustomScrollbarIndex"))}},d={showScrollbar:function(){this.stop().animate({opacity:1},"fast")},hideScrollbar:function(){this.stop().animate({opacity:0},"fast")},mTweenAxis:function(g,i,h,f,o,y){var y=y||{},v=y.onStart||function(){},p=y.onUpdate||function(){},w=y.onComplete||function(){};var n=t(),l,j=0,r=g.offsetTop,s=g.style;if(i==="left"){r=g.offsetLeft}var m=h-r;q();e();function t(){if(window.performance&&window.performance.now){return window.performance.now()}else{if(window.performance&&window.performance.webkitNow){return window.performance.webkitNow()}else{if(Date.now){return Date.now()}else{return new Date().getTime()}}}}function x(){if(!j){v.call()}j=t()-n;u();if(j>=g._time){g._time=(j>g._time)?j+l-(j-g._time):j+l-1;if(g._time<j+1){g._time=j+1}}if(g._time<f){g._id=_request(x)}else{w.call()}}function u(){if(f>0){g.currVal=k(g._time,r,m,f,o);s[i]=Math.round(g.currVal)+"px"}else{s[i]=h+"px"}p.call()}function e(){l=1000/60;g._time=j+l;_request=(!window.requestAnimationFrame)?function(z){u();return setTimeout(z,0.01)}:window.requestAnimationFrame;g._id=_request(x)}function q(){if(g._id==null){return}if(!window.requestAnimationFrame){clearTimeout(g._id)}else{window.cancelAnimationFrame(g._id)}g._id=null}function k(B,A,F,E,C){switch(C){case"linear":return F*B/E+A;break;case"easeOutQuad":B/=E;return -F*B*(B-2)+A;break;case"easeInOutQuad":B/=E/2;if(B<1){return F/2*B*B+A}B--;return -F/2*(B*(B-2)-1)+A;break;case"easeOutCubic":B/=E;B--;return F*(B*B*B+1)+A;break;case"easeOutQuart":B/=E;B--;return -F*(B*B*B*B-1)+A;break;case"easeOutQuint":B/=E;B--;return F*(B*B*B*B*B+1)+A;break;case"easeOutCirc":B/=E;B--;return F*Math.sqrt(1-B*B)+A;break;case"easeOutSine":return F*Math.sin(B/E*(Math.PI/2))+A;break;case"easeOutExpo":return F*(-Math.pow(2,-10*B/E)+1)+A;break;case"mcsEaseOut":var D=(B/=E)*B,z=D*B;return A+F*(0.499999999999997*z*D+-2.5*D*D+5.5*z+-6.5*D+4*B);break;case"draggerRailEase":B/=E/2;if(B<1){return F/2*B*B*B+A}B-=2;return F/2*(B*B*B+2)+A;break}}},mTweenAxisStop:function(e){if(e._id==null){return}if(!window.requestAnimationFrame){clearTimeout(e._id)}else{window.cancelAnimationFrame(e._id)}e._id=null},rafPolyfill:function(){var f=["ms","moz","webkit","o"],e=f.length;while(--e>-1&&!window.requestAnimationFrame){window.requestAnimationFrame=window[f[e]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[f[e]+"CancelAnimationFrame"]||window[f[e]+"CancelRequestAnimationFrame"]}}};d.rafPolyfill.call();c.support.touch=!!("ontouchstart" in window);c.support.msPointer=window.navigator.msPointerEnabled;var a=("https:"==document.location.protocol)?"https:":"http:";c.event.special.mousewheel||document.write('<script src="'+a+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');c.fn.mCustomScrollbar=function(e){if(b[e]){return b[e].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof e==="object"||!e){return b.init.apply(this,arguments)}else{c.error("Method "+e+" does not exist")}}}})(jQuery);

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    console.log("dispatch simulated event: " + simulatedType);
    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {
    console.log("mouseProto._touchStart");
    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {
    console.log("mouseProto._touchMove");
    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);

(function(O,j){typeof exports=="object"&&typeof module<"u"?j(exports):typeof define=="function"&&define.amd?define(["exports"],j):(O=typeof globalThis<"u"?globalThis:O||self,j(O.Annotorious={}))})(this,function(O){"use strict";var Yr=Object.defineProperty;var Br=(O,j,Ie)=>j in O?Yr(O,j,{enumerable:!0,configurable:!0,writable:!0,value:Ie}):O[j]=Ie;var on=(O,j,Ie)=>Br(O,typeof j!="symbol"?j+"":j,Ie);function j(){}function Ie(e,t){for(const n in t)e[n]=t[n];return e}function sn(e){return e()}function rn(){return Object.create(null)}function Ae(e){e.forEach(sn)}function ie(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function jo(e){return Object.keys(e).length===0}function ln(e,...t){if(e==null){for(const o of t)o(void 0);return j}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function At(e,t,n){e.$$.on_destroy.push(ln(t,n))}function zo(e,t,n,o){if(e){const i=an(e,t,n,o);return e[0](i)}}function an(e,t,n,o){return e[1]&&o?Ie(n.ctx.slice(),e[1](o(t))):n.ctx}function Fo(e,t,n,o){if(e[2]&&o){const i=e[2](o(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const s=[],r=Math.max(t.dirty.length,i.length);for(let l=0;l<r;l+=1)s[l]=t.dirty[l]|i[l];return s}return t.dirty|i}return t.dirty}function qo(e,t,n,o,i,s){if(i){const r=an(t,n,o,s);e.p(r,i)}}function Ko(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function cn(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function He(e){return e??""}function F(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function Ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function un(e){return document.createTextNode(e)}function we(){return un(" ")}function ke(){return un("")}function J(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Wo(e){return Array.from(e.childNodes)}function Te(e,t,n){e.classList.toggle(t,!!n)}function Zo(e,t,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:o})}let Je;function Qe(e){Je=e}function fn(){if(!Je)throw new Error("Function called outside component initialization");return Je}function Ue(e){fn().$$.on_mount.push(e)}function Ce(){const e=fn();return(t,n,{cancelable:o=!1}={})=>{const i=e.$$.callbacks[t];if(i){const s=Zo(t,n,{cancelable:o});return i.slice().forEach(r=>{r.call(e,s)}),!s.defaultPrevented}return!0}}function ue(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(o=>o.call(this,t))}const Ge=[],ut=[];let je=[];const dn=[],hn=Promise.resolve();let kt=!1;function gn(){kt||(kt=!0,hn.then(pn))}function mn(){return gn(),hn}function Mt(e){je.push(e)}const Tt=new Set;let ze=0;function pn(){if(ze!==0)return;const e=Je;do{try{for(;ze<Ge.length;){const t=Ge[ze];ze++,Qe(t),Jo(t.$$)}}catch(t){throw Ge.length=0,ze=0,t}for(Qe(null),Ge.length=0,ze=0;ut.length;)ut.pop()();for(let t=0;t<je.length;t+=1){const n=je[t];Tt.has(n)||(Tt.add(n),n())}je.length=0}while(Ge.length);for(;dn.length;)dn.pop()();kt=!1,Tt.clear(),Qe(e)}function Jo(e){if(e.fragment!==null){e.update(),Ae(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Mt)}}function Qo(e){const t=[],n=[];je.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),je=t}const ft=new Set;let Ye;function be(){Ye={r:0,c:[],p:Ye}}function Ee(){Ye.r||Ae(Ye.c),Ye=Ye.p}function B(e,t){e&&e.i&&(ft.delete(e),e.i(t))}function G(e,t,n,o){if(e&&e.o){if(ft.has(e))return;ft.add(e),Ye.c.push(()=>{ft.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function ve(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ce(e){e&&e.c()}function le(e,t,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),Mt(()=>{const s=e.$$.on_mount.map(sn).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...s):Ae(s),e.$$.on_mount=[]}),i.forEach(Mt)}function ae(e,t){const n=e.$$;n.fragment!==null&&(Qo(n.after_update),Ae(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function xo(e,t){e.$$.dirty[0]===-1&&(Ge.push(e),gn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,o,i,s,r=null,l=[-1]){const a=Je;Qe(e);const u=e.$$={fragment:null,ctx:[],props:s,update:j,not_equal:i,bound:rn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:rn(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};r&&r(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(f,h,...p)=>{const m=p.length?p[0]:h;return u.ctx&&i(u.ctx[f],u.ctx[f]=m)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](m),d&&xo(e,f)),h}):[],u.update(),d=!0,Ae(u.before_update),u.fragment=o?o(u.ctx):!1,t.target){if(t.hydrate){const f=Wo(t.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();t.intro&&B(e.$$.fragment),le(e,t.target,t.anchor),pn()}Qe(a)}class ge{constructor(){on(this,"$$");on(this,"$$set")}$destroy(){ae(this,1),this.$destroy=j}$on(t,n){if(!ie(n))return j;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(t){this.$$set&&!jo(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const $o="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($o);var Q=(e=>(e.ELLIPSE="ELLIPSE",e.MULTIPOLYGON="MULTIPOLYGON",e.POLYGON="POLYGON",e.POLYLINE="POLYLINE",e.RECTANGLE="RECTANGLE",e.LINE="LINE",e))(Q||{});function ei(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yn={exports:{}};(function(e){(function(){function t(l,a){var u=l.x-a.x,d=l.y-a.y;return u*u+d*d}function n(l,a,u){var d=a.x,f=a.y,h=u.x-d,p=u.y-f;if(h!==0||p!==0){var m=((l.x-d)*h+(l.y-f)*p)/(h*h+p*p);m>1?(d=u.x,f=u.y):m>0&&(d+=h*m,f+=p*m)}return h=l.x-d,p=l.y-f,h*h+p*p}function o(l,a){for(var u=l[0],d=[u],f,h=1,p=l.length;h<p;h++)f=l[h],t(f,u)>a&&(d.push(f),u=f);return u!==f&&d.push(f),d}function i(l,a,u,d,f){for(var h=d,p,m=a+1;m<u;m++){var g=n(l[m],l[a],l[u]);g>h&&(p=m,h=g)}h>d&&(p-a>1&&i(l,a,p,d,f),f.push(l[p]),u-p>1&&i(l,p,u,d,f))}function s(l,a){var u=l.length-1,d=[l[0]];return i(l,0,u,a,d),d.push(l[u]),d}function r(l,a,u){if(l.length<=2)return l;var d=a!==void 0?a*a:1;return l=u?l:o(l,d),l=s(l,d),l}e.exports=r,e.exports.default=r})()})(yn);var ti=yn.exports;const ni=ei(ti),Pt={},Be=(e,t)=>Pt[e]=t,dt=e=>Pt[e.type].area(e),_n=(e,t,n,o)=>Pt[e.type].intersects(e,t,n,o),fe=e=>{let t=1/0,n=1/0,o=-1/0,i=-1/0;return e.forEach(([s,r])=>{t=Math.min(t,s),n=Math.min(n,r),o=Math.max(o,s),i=Math.max(i,r)}),{minX:t,minY:n,maxX:o,maxY:i}},xe=e=>{let t=0,n=e.length-1;for(let o=0;o<e.length;o++)t+=(e[n][0]+e[o][0])*(e[n][1]-e[o][1]),n=o;return Math.abs(.5*t)},$e=(e,t,n)=>{let o=!1;for(let i=0,s=e.length-1;i<e.length;s=i++){const r=e[i][0],l=e[i][1],a=e[s][0],u=e[s][1];l>n!=u>n&&t<(a-r)*(n-l)/(u-l)+r&&(o=!o)}return o},wn=(e,t=!0)=>{let n="M ";return e.forEach(([o,i],s)=>{s===0?n+=`${o},${i}`:n+=` L ${o},${i}`}),t&&(n+=" Z"),n},Lt=(e,t=1)=>{const n=e.map(([o,i])=>({x:o,y:i}));return ni(n,t,!0).map(o=>[o.x,o.y])},et=(e,t)=>{const n=Math.abs(t[0]-e[0]),o=Math.abs(t[1]-e[1]);return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))},oi={area:e=>Math.PI*e.geometry.rx*e.geometry.ry,intersects:(e,t,n)=>{const{cx:o,cy:i,rx:s,ry:r}=e.geometry,l=0,a=Math.cos(l),u=Math.sin(l),d=t-o,f=n-i,h=a*d+u*f,p=u*d-a*f;return h*h/(s*s)+p*p/(r*r)<=1}};Be(Q.ELLIPSE,oi);const ii={area:e=>0,intersects:(e,t,n,o=2)=>{const[[i,s],[r,l]]=e.geometry.points,a=Math.abs((l-s)*t-(r-i)*n+r*s-l*i),u=et([i,s],[r,l]);return a/u<=o}};Be(Q.LINE,ii);const si={area:e=>{const{polygons:t}=e.geometry;return t.reduce((n,o)=>{const[i,...s]=o.rings,r=xe(i.points),l=s.reduce((a,u)=>a+xe(u.points),0);return n+r-l},0)},intersects:(e,t,n)=>{const{polygons:o}=e.geometry;for(const i of o){const[s,...r]=i.rings;if($e(s.points,t,n)){let l=!1;for(const a of r)if($e(a.points,t,n)){l=!0;break}if(!l)return!0}}return!1}},tt=e=>{const t=e.reduce((n,o)=>[...n,...o.rings[0].points],[]);return fe(t)},Pe=e=>e.rings.map(n=>wn(n.points)).join(" "),bn=e=>e.polygons.reduce((t,n)=>[...t,...n.rings.reduce((o,i)=>[...o,...i.points],[])],[]),ri=(e,t=1)=>{const n=e.geometry.polygons.map(i=>{const s=i.rings.map(l=>{const a=Lt(l.points,t);return{...l,points:a}}),r=fe(s[0].points);return{...i,rings:s,bounds:r}}),o=tt(n);return{...e,geometry:{...e.geometry,polygons:n,bounds:o}}};Be(Q.MULTIPOLYGON,si);const li={area:e=>{const t=e.geometry.points;return xe(t)},intersects:(e,t,n)=>{const o=e.geometry.points;return $e(o,t,n)}},ai=(e,t=1)=>{const n=Lt(e.geometry.points,t),o=fe(n);return{...e,geometry:{...e.geometry,bounds:o,points:n}}};Be(Q.POLYGON,li);const ci={area:e=>{const t=e.geometry;if(!t.closed||t.points.length<3)return 0;const n=ht(t.points,t.closed);return xe(n)},intersects:(e,t,n,o=2)=>{const i=e.geometry;if(i.closed){const s=ht(i.points,i.closed);return $e(s,t,n)}else return ui(i,[t,n],o)}},ht=(e,t=!1)=>{const n=[];for(let o=0;o<e.length;o++){const i=e[o],s=e[(o+1)%e.length];if(n.push(i.point),(o<e.length-1||t)&&(i.type==="CURVE"||s.type=="CURVE")){const l=En(i.point,i.type==="CURVE"&&i.outHandle||i.point,s.type==="CURVE"&&s.inHandle||s.point,s.point,10);n.push(...l.slice(1))}}return n},En=(e,t,n,o,i=10)=>{const s=[];for(let r=0;r<=i;r++){const l=r/i,a=Math.pow(1-l,3)*e[0]+3*Math.pow(1-l,2)*l*t[0]+3*(1-l)*Math.pow(l,2)*n[0]+Math.pow(l,3)*o[0],u=Math.pow(1-l,3)*e[1]+3*Math.pow(1-l,2)*l*t[1]+3*(1-l)*Math.pow(l,2)*n[1]+Math.pow(l,3)*o[1];s.push([a,u])}return s},ui=(e,t,n)=>{for(let o=0;o<e.points.length-1;o++){const i=e.points[o],s=e.points[o+1];if(i.type==="CURVE"||s.type==="CURVE"){const l=En(i.point,i.type==="CURVE"&&i.outHandle||i.point,s.type==="CURVE"&&s.inHandle||s.point,s.point,20);for(let a=0;a<l.length-1;a++)if(vn(t,l[a],l[a+1])<=n)return!0}else if(vn(t,i.point,s.point)<=n)return!0}return!1},vn=(e,t,n)=>{const[o,i]=e,[s,r]=t,[l,a]=n,u=l-s,d=a-r,f=Math.sqrt(u*u+d*d);if(f===0)return Math.sqrt((o-s)*(o-s)+(i-r)*(i-r));const h=((o-s)*u+(i-r)*d)/(f*f);return h<=0?Math.sqrt((o-s)*(o-s)+(i-r)*(i-r)):h>=1?Math.sqrt((o-l)*(o-l)+(i-a)*(i-a)):Math.abs((a-r)*o-(l-s)*i+l*r-a*s)/f},It=e=>{if(!e.points||e.points.length===0)return"";const t=[],n=e.points[0];t.push(`M ${n.point[0]} ${n.point[1]}`);for(let o=1;o<e.points.length;o++){const i=e.points[o],s=e.points[o-1];if(i.type==="CURVE"||s.type==="CURVE"){const r=s.type==="CURVE"&&s.outHandle||s.point,l=i.type==="CURVE"&&i.inHandle||i.point,a=i.point;t.push(`C ${r[0]} ${r[1]} ${l[0]} ${l[1]} ${a[0]} ${a[1]}`)}else t.push(`L ${i.point[0]} ${i.point[1]}`)}if(e.closed){const o=e.points[e.points.length-1],i=e.points[0];if(o.type==="CURVE"||i.type==="CURVE"){const r=o.outHandle||o.point,l=i.inHandle||i.point,a=i.point;t.push(`C ${r[0]} ${r[1]} ${l[0]} ${l[1]} ${a[0]} ${a[1]}`)}t.push("Z")}return t.join(" ")};Be(Q.POLYLINE,ci);const Sn={area:e=>e.geometry.w*e.geometry.h,intersects:(e,t,n)=>t>=e.geometry.x&&t<=e.geometry.x+e.geometry.w&&n>=e.geometry.y&&n<=e.geometry.y+e.geometry.h};Be(Q.RECTANGLE,Sn);const nt=e=>ot(e.target),ot=e=>{var t,n;return(e==null?void 0:e.annotation)!==void 0&&((n=(t=e==null?void 0:e.selector)==null?void 0:t.geometry)==null?void 0:n.bounds)!==void 0},An=(e,t=!1)=>{const n=typeof e=="string"?e:e.value,o=/(xywh)=(pixel|percent)?:?(.+?),(.+?),(.+?),(.+)*/g,i=[...n.matchAll(o)][0],[s,r,l,a,u,d,f]=i;if(r!=="xywh")throw new Error("Unsupported MediaFragment: "+n);if(l&&l!=="pixel")throw new Error(`Unsupported MediaFragment unit: ${l}`);const[h,p,m,g]=[a,u,d,f].map(parseFloat);return{type:Q.RECTANGLE,geometry:{x:h,y:p,w:m,h:g,bounds:{minX:h,minY:t?p-g:p,maxX:h+m,maxY:t?p:p+g}}}},kn=e=>{const{x:t,y:n,w:o,h:i}=e;return{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=pixel:${t},${n},${o},${i}`}},Mn="http://www.w3.org/2000/svg",Tn=e=>{const t=o=>{Array.from(o.attributes).forEach(i=>{i.name.startsWith("on")&&o.removeAttribute(i.name)})},n=e.getElementsByTagName("script");return Array.from(n).reverse().forEach(o=>o.parentNode.removeChild(o)),Array.from(e.querySelectorAll("*")).forEach(t),e},fi=e=>{const o=new XMLSerializer().serializeToString(e.documentElement).replace("<svg>",`<svg xmlns="${Mn}">`);return new DOMParser().parseFromString(o,"image/svg+xml").documentElement},gt=e=>{const n=new DOMParser().parseFromString(e,"image/svg+xml"),o=n.lookupPrefix(Mn),i=n.lookupNamespaceURI(null);return o||i?Tn(n).firstChild:Tn(fi(n)).firstChild},di=e=>{const t=Pn(e),n=[];let o=[],i=[0,0];for(const s of t)switch(s.type.toUpperCase()){case"M":o.length>0&&(n.push({points:o}),o=[]),i=[s.args[0],s.args[1]],o.push([...i]);break;case"L":i=[s.args[0],s.args[1]],o.push([...i]);break;case"H":i=[s.args[0],i[1]],o.push([...i]);break;case"V":i=[i[0],s.args[0]],o.push([...i]);break;case"C":i=[s.args[4],s.args[5]],o.push([...i]);break;case"Z":break;default:console.warn(`Unsupported SVG path command: ${s.type}`);break}if(o.length>2&&n.push({points:o}),n.length>0){const s=fe(n[0].points);return{rings:n,bounds:s}}},hi=e=>{const{point:t,inHandle:n,outHandle:o}=e;if(!n||!o)return!1;const i=n[0]-t[0],s=n[1]-t[1],r=o[0]-t[0],l=o[1]-t[1],a=i*l-s*r;return Math.abs(a)<.01},gi=e=>{const t=Pn(e);let n=[],o=[0,0],i=!1;for(let r=0;r<t.length;r++){const l=t[r];switch(l.type.toUpperCase()){case"M":o=[l.args[0],l.args[1]],n.push({type:"CORNER",point:[...o]});break;case"L":o=[l.args[0],l.args[1]],n.push({type:"CORNER",point:[...o]});break;case"C":const a=[l.args[0],l.args[1]],u=[l.args[2],l.args[3]],d=[l.args[4],l.args[5]];if(n.length>0){const h=n[n.length-1];(a[0]!==h.point[0]||a[1]!==h.point[1])&&(h.type="CURVE",h.outHandle=a)}const f={type:u[0]!==d[0]||u[1]!==d[1]?"CURVE":"CORNER",point:d};f.type==="CURVE"&&(f.inHandle=u),n.push(f),o=d;break;case"Z":i=!0;break;default:console.warn(`Unsupported SVG path command: ${l.type}`);break}}n=n.map(r=>hi(r)?{...r,locked:!0}:r);const s=fe(ht(n,i));return{points:n,closed:i,bounds:s}},Pn=e=>{const t=[],n=e.replace(/,/g," ").trim(),o=/([MmLlHhVvCcZz])\s*([^MmLlHhVvCcZz]*)/g;let i;for(;(i=o.exec(n))!==null;){const[,s,r]=i,l=r.trim()===""?[]:r.trim().split(/\s+/).map(Number).filter(a=>!isNaN(a));t.push({type:s,args:l})}return t},mi=e=>{const[t,n,o]=e.match(/(<polygon points=["|'])([^("|')]*)/)||[],i=o.split(" ").map(s=>s.split(",").map(parseFloat));return{type:Q.POLYGON,geometry:{points:i,bounds:fe(i)}}},pi=e=>{const t=gt(e),n=parseFloat(t.getAttribute("cx")),o=parseFloat(t.getAttribute("cy")),i=parseFloat(t.getAttribute("rx")),s=parseFloat(t.getAttribute("ry")),r={minX:n-i,minY:o-s,maxX:n+i,maxY:o+s};return{type:Q.ELLIPSE,geometry:{cx:n,cy:o,rx:i,ry:s,bounds:r}}},yi=e=>{const t=gt(e),n=parseFloat(t.getAttribute("x1")),o=parseFloat(t.getAttribute("x2")),i=parseFloat(t.getAttribute("y1")),s=parseFloat(t.getAttribute("y2")),r={minX:Math.min(n,o),minY:Math.min(i,s),maxX:Math.max(n,o),maxY:Math.max(i,s)};return{type:Q.LINE,geometry:{points:[[n,i],[o,s]],bounds:r}}},_i=e=>{const t=gt(e),n=t.nodeName==="path"?t:Array.from(t.querySelectorAll("path"))[0],o=n==null?void 0:n.getAttribute("d");if(!o)throw new Error("Could not parse SVG path");const i=gi(o);if(!i)throw new Error("Could not parse SVG path");return{type:Q.POLYLINE,geometry:i}},wi=e=>{const t=gt(e),i=(t.nodeName==="path"?[t]:Array.from(t.querySelectorAll("path"))).map(a=>a.getAttribute("d")||"").map(a=>di(a)).filter(Boolean),s=i.reduce((a,u)=>[...a,...u.rings[0].points],[]),r=fe(s);return i.length===1&&i[0].rings.length===1?{type:Q.POLYGON,geometry:{points:s,bounds:r}}:{type:Q.MULTIPOLYGON,geometry:{polygons:i,bounds:r}}},Ln=e=>{const t=typeof e=="string"?e:e.value;if(t.includes("<polygon points="))return mi(t);if(t.includes("<path ")&&(t.includes(" C ")||!t.includes("Z")))return _i(t);if(t.includes("<path "))return wi(t);if(t.includes("<ellipse "))return pi(t);if(t.includes("<line "))return yi(t);throw"Unsupported SVG shape: "+t},bi=e=>`<g>${e.polygons.map(n=>`<path fill-rule="evenodd" d="${Pe(n)}" />`).join("")}</g>`,In=e=>{let t;switch(e.type){case Q.POLYGON:{const n=e.geometry,{points:o}=n;t=`<svg><polygon points="${o.map(i=>i.join(",")).join(" ")}" /></svg>`;break}case Q.ELLIPSE:{const n=e.geometry;t=`<svg><ellipse cx="${n.cx}" cy="${n.cy}" rx="${n.rx}" ry="${n.ry}" /></svg>`;break}case Q.MULTIPOLYGON:{const n=e.geometry;t=`<svg>${bi(n)}</svg>`;break}case Q.LINE:{const n=e.geometry,[[o,i],[s,r]]=n.points;t=`<svg><line x1="${o}" y1="${i}" x2="${s}" y2="${r}" /></svg>`;break}case Q.POLYLINE:t=`<svg><path d="${It(e.geometry)}" /></svg>`}if(t)return{type:"SvgSelector",value:t};throw`Unsupported shape type: ${e.type}`},me=[];for(let e=0;e<256;++e)me.push((e+256).toString(16).slice(1));function Ei(e,t=0){return(me[e[t+0]]+me[e[t+1]]+me[e[t+2]]+me[e[t+3]]+"-"+me[e[t+4]]+me[e[t+5]]+"-"+me[e[t+6]]+me[e[t+7]]+"-"+me[e[t+8]]+me[e[t+9]]+"-"+me[e[t+10]]+me[e[t+11]]+me[e[t+12]]+me[e[t+13]]+me[e[t+14]]+me[e[t+15]]).toLowerCase()}let Ct;const vi=new Uint8Array(16);function Si(){if(!Ct){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ct=crypto.getRandomValues.bind(crypto)}return Ct(vi)}const Cn={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Ai(e,t,n){var i;e=e||{};const o=e.random??((i=e.rng)==null?void 0:i.call(e))??Si();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,Ei(o)}function On(e,t,n){return Cn.randomUUID&&!e?Cn.randomUUID():Ai(e)}var Dn=Object.prototype.hasOwnProperty;function Oe(e,t){var n,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((o=e.length)===t.length)for(;o--&&Oe(e[o],t[o]););return o===-1}if(!n||typeof e=="object"){o=0;for(n in e)if(Dn.call(e,n)&&++o&&!Dn.call(t,n)||!(n in t)||!Oe(e[n],t[n]))return!1;return Object.keys(t).length===o}}return e!==e&&t!==t}function Ot(){}function ki(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}const Fe=[];function Dt(e,t=Ot){let n;const o=new Set;function i(l){if(ki(e,l)&&(e=l,n)){const a=!Fe.length;for(const u of o)u[1](),Fe.push(u,e);if(a){for(let u=0;u<Fe.length;u+=2)Fe[u][0](Fe[u+1]);Fe.length=0}}}function s(l){i(l(e))}function r(l,a=Ot){const u=[l,a];return o.add(u),o.size===1&&(n=t(i,s)||Ot),l(e),()=>{o.delete(u),o.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:r}}const Mi=e=>{const{subscribe:t,set:n}=Dt();let o;return t(i=>o=i),e.observe(({changes:i})=>{if(o){(i.deleted||[]).some(r=>r.id===o)&&n(void 0);const s=(i.updated||[]).find(({oldValue:r})=>r.id===o);s&&n(s.newValue.id)}}),{get current(){return o},subscribe:t,set:n}};var Rt=(e=>(e.EDIT="EDIT",e.SELECT="SELECT",e.NONE="NONE",e))(Rt||{});const mt={selected:[]},Ti=(e,t,n)=>{const{subscribe:o,set:i}=Dt(mt);let s=t,r=mt;o(g=>r=g);const l=()=>{Oe(r,mt)||i(mt)},a=()=>{var g;return((g=r.selected)==null?void 0:g.length)===0},u=g=>{if(a())return!1;const k=typeof g=="string"?g:g.id;return r.selected.some(E=>E.id===k)},d=(g,k)=>{let E;if(Array.isArray(g)){if(E=g.map(_=>e.getAnnotation(_)).filter(Boolean),E.length<g.length){console.warn("Invalid selection: "+g.filter(_=>!E.some(A=>A.id===_)));return}}else{const _=e.getAnnotation(g);if(!_){console.warn("Invalid selection: "+g);return}E=[_]}const S=E.reduce((_,A)=>{const M=m(A);return M==="EDIT"?[..._,{id:A.id,editable:!0}]:M==="SELECT"?[..._,{id:A.id}]:_},[]);i({selected:S,event:k})},f=(g,k)=>{const E=Array.isArray(g)?g:[g],S=E.map(_=>e.getAnnotation(_)).filter(_=>!!_);i({selected:S.map(_=>{const A=k===void 0?m(_)==="EDIT":k;return{id:_.id,editable:A}})}),S.length!==E.length&&console.warn("Invalid selection",g)},h=g=>{if(a())return!1;const{selected:k}=r;k.some(({id:E})=>g.includes(E))&&i({selected:k.filter(({id:E})=>!g.includes(E))})},p=g=>{s=g,f(r.selected.map(({id:k})=>k))},m=g=>Pi(g,s,n);return e.observe(({changes:g})=>h((g.deleted||[]).map(k=>k.id))),{get event(){return r?r.event:null},get selected(){return r?[...r.selected]:null},get userSelectAction(){return s},clear:l,evalSelectAction:m,isEmpty:a,isSelected:u,setSelected:f,setUserSelectAction:p,subscribe:o,userSelect:d}},Pi=(e,t,n)=>{const o=n?n.serialize(e):e;return typeof t=="function"?t(o):t||"EDIT"},pe=[];for(let e=0;e<256;++e)pe.push((e+256).toString(16).slice(1));function Li(e,t=0){return(pe[e[t+0]]+pe[e[t+1]]+pe[e[t+2]]+pe[e[t+3]]+"-"+pe[e[t+4]]+pe[e[t+5]]+"-"+pe[e[t+6]]+pe[e[t+7]]+"-"+pe[e[t+8]]+pe[e[t+9]]+"-"+pe[e[t+10]]+pe[e[t+11]]+pe[e[t+12]]+pe[e[t+13]]+pe[e[t+14]]+pe[e[t+15]]).toLowerCase()}let Nt;const Ii=new Uint8Array(16);function Ci(){if(!Nt){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Nt=crypto.getRandomValues.bind(crypto)}return Nt(Ii)}const Oi=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Rn={randomUUID:Oi};function Di(e,t,n){var o;e=e||{};const i=e.random??((o=e.rng)==null?void 0:o.call(e))??Ci();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Li(i)}function Nn(e,t,n){return Rn.randomUUID&&!e?Rn.randomUUID():Di(e)}const Ut=e=>{const t=n=>{const o={...n};return n.created&&typeof n.created=="string"&&(o.created=new Date(n.created)),n.updated&&typeof n.updated=="string"&&(o.updated=new Date(n.updated)),o};return{...e,bodies:(e.bodies||[]).map(t),target:t(e.target)}},Ri=(e,t,n,o)=>({id:Nn(),annotation:typeof e=="string"?e:e.id,created:n||new Date,creator:o,...t}),Ni=(e,t)=>{const n=new Set(e.bodies.map(o=>o.id));return t.bodies.filter(o=>!n.has(o.id))},Ui=(e,t)=>{const n=new Set(t.bodies.map(o=>o.id));return e.bodies.filter(o=>!n.has(o.id))},Yi=(e,t)=>t.bodies.map(n=>{const o=e.bodies.find(i=>i.id===n.id);return{newBody:n,oldBody:o&&!Oe(o,n)?o:void 0}}).filter(({oldBody:n})=>n).map(({oldBody:n,newBody:o})=>({oldBody:n,newBody:o})),Bi=(e,t)=>!Oe(e.target,t.target),Un=(e,t)=>{const n=Ni(e,t),o=Ui(e,t),i=Yi(e,t);return{oldValue:e,newValue:t,bodiesCreated:n.length>0?n:void 0,bodiesDeleted:o.length>0?o:void 0,bodiesUpdated:i.length>0?i:void 0,targetUpdated:Bi(e,t)?{oldTarget:e.target,newTarget:t.target}:void 0}};var ne=(e=>(e.LOCAL="LOCAL",e.REMOTE="REMOTE",e.SILENT="SILENT",e))(ne||{});const Vi=(e,t)=>{var n,o;const{changes:i,origin:s}=t;if(!(e.options.origin?e.options.origin===s:s!=="SILENT"))return!1;if(e.options.ignore){const{ignore:r}=e.options,l=a=>a&&a.length>0;if(!(l(i.created)||l(i.deleted))){const a=(n=i.updated)==null?void 0:n.some(d=>l(d.bodiesCreated)||l(d.bodiesDeleted)||l(d.bodiesUpdated)),u=(o=i.updated)==null?void 0:o.some(d=>d.targetUpdated);if(r==="BODY_ONLY"&&a&&!u||r==="TARGET_ONLY"&&u&&!a)return!1}}if(e.options.annotations){const r=new Set([...(i.created||[]).map(l=>l.id),...(i.deleted||[]).map(l=>l.id),...(i.updated||[]).map(({oldValue:l})=>l.id)]);return!!(Array.isArray(e.options.annotations)?e.options.annotations:[e.options.annotations]).find(l=>r.has(l))}else return!0},Xi=(e,t)=>{const n=new Set((e.created||[]).map(f=>f.id)),o=new Set((e.updated||[]).map(({newValue:f})=>f.id)),i=new Set((t.created||[]).map(f=>f.id)),s=new Set((t.deleted||[]).map(f=>f.id)),r=new Set((t.updated||[]).map(({oldValue:f})=>f.id)),l=new Set((t.updated||[]).filter(({oldValue:f})=>n.has(f.id)||o.has(f.id)).map(({oldValue:f})=>f.id)),a=[...(e.created||[]).filter(f=>!s.has(f.id)).map(f=>r.has(f.id)?t.updated.find(({oldValue:h})=>h.id===f.id).newValue:f),...t.created||[]],u=[...(e.deleted||[]).filter(f=>!i.has(f.id)),...(t.deleted||[]).filter(f=>!n.has(f.id))],d=[...(e.updated||[]).filter(({newValue:f})=>!s.has(f.id)).map(f=>{const{oldValue:h,newValue:p}=f;if(r.has(p.id)){const m=t.updated.find(g=>g.oldValue.id===p.id).newValue;return Un(h,m)}else return f}),...(t.updated||[]).filter(({oldValue:f})=>!l.has(f.id))];return{created:a,deleted:u,updated:d}},pt=e=>{const t=e.id===void 0?Nn():e.id;return{...e,id:t,bodies:e.bodies===void 0?[]:e.bodies.map(n=>({...n,annotation:t})),target:{...e.target,annotation:t}}},Hi=e=>e.id!==void 0,Gi=()=>{const e=new Map,t=new Map,n=[],o=(w,v={})=>{n.push({onChange:w,options:v})},i=w=>{const v=n.findIndex(y=>y.onChange==w);v>-1&&n.splice(v,1)},s=(w,v)=>{const y={origin:w,changes:{created:v.created||[],updated:v.updated||[],deleted:v.deleted||[]},state:[...e.values()]};n.forEach(b=>{Vi(b,y)&&b.onChange(y)})},r=(w,v=ne.LOCAL)=>{if(w.id&&e.get(w.id))throw Error(`Cannot add annotation ${w.id} - exists already`);{const y=pt(w);e.set(y.id,y),y.bodies.forEach(b=>t.set(b.id,y.id)),s(v,{created:[y]})}},l=(w,v)=>{const y=pt(typeof w=="string"?v:w),b=typeof w=="string"?w:w.id,I=b&&e.get(b);if(I){const P=Un(I,y);return b===y.id?e.set(b,y):(e.delete(b),e.set(y.id,y)),I.bodies.forEach(D=>t.delete(D.id)),y.bodies.forEach(D=>t.set(D.id,y.id)),P}else console.warn(`Cannot update annotation ${b} - does not exist`)},a=(w,v=ne.LOCAL,y=ne.LOCAL)=>{const b=Hi(v)?y:v,I=l(w,v);I&&s(b,{updated:[I]})},u=(w,v=ne.LOCAL)=>{e.get(w.id)?a(w,v):r(w,v)},d=(w,v=ne.LOCAL)=>{const y=w.reduce((b,I)=>{const P=l(I);return P?[...b,P]:b},[]);y.length>0&&s(v,{updated:y})},f=(w,v=ne.LOCAL)=>{const y=w.map(pt),{toAdd:b,toUpdate:I}=y.reduce((D,z)=>e.get(z.id)?{...D,toUpdate:[...D.toUpdate,z]}:{...D,toAdd:[...D.toAdd,z]},{toAdd:[],toUpdate:[]}),P=I.map(D=>l(D,v)).filter(Boolean);b.forEach(D=>{e.set(D.id,D),D.bodies.forEach(z=>t.set(z.id,D.id))}),s(v,{created:b,updated:P})},h=(w,v=ne.LOCAL)=>{const y=e.get(w.annotation);if(y){const b={...y,bodies:[...y.bodies,w]};e.set(y.id,b),t.set(w.id,b.id),s(v,{updated:[{oldValue:y,newValue:b,bodiesCreated:[w]}]})}else console.warn(`Attempt to add body to missing annotation: ${w.annotation}`)},p=()=>[...e.values()],m=(w=ne.LOCAL)=>{const v=[...e.values()];e.clear(),t.clear(),s(w,{deleted:v})},g=(w,v=!0,y=ne.LOCAL)=>{const b=w.map(pt);if(v){const I=[...e.values()];e.clear(),t.clear(),b.forEach(P=>{e.set(P.id,P),P.bodies.forEach(D=>t.set(D.id,P.id))}),s(y,{created:b,deleted:I})}else{const I=w.reduce((P,D)=>{const z=D.id&&e.get(D.id);return z?[...P,z]:P},[]);if(I.length>0)throw Error(`Bulk insert would overwrite the following annotations: ${I.map(P=>P.id).join(", ")}`);b.forEach(P=>{e.set(P.id,P),P.bodies.forEach(D=>t.set(D.id,P.id))}),s(y,{created:b})}},k=w=>{const v=typeof w=="string"?w:w.id,y=e.get(v);if(y)return e.delete(v),y.bodies.forEach(b=>t.delete(b.id)),y;console.warn(`Attempt to delete missing annotation: ${v}`)},E=(w,v=ne.LOCAL)=>{const y=k(w);y&&s(v,{deleted:[y]})},S=(w,v=ne.LOCAL)=>{const y=w.reduce((b,I)=>{const P=k(I);return P?[...b,P]:b},[]);y.length>0&&s(v,{deleted:y})},_=w=>{const v=e.get(w.annotation);if(v){const y=v.bodies.find(b=>b.id===w.id);if(y){t.delete(y.id);const b={...v,bodies:v.bodies.filter(I=>I.id!==w.id)};return e.set(v.id,b),{oldValue:v,newValue:b,bodiesDeleted:[y]}}else console.warn(`Attempt to delete missing body ${w.id} from annotation ${w.annotation}`)}else console.warn(`Attempt to delete body from missing annotation ${w.annotation}`)},A=(w,v=ne.LOCAL)=>{const y=_(w);y&&s(v,{updated:[y]})},M=(w,v=ne.LOCAL)=>{const y=w.map(b=>_(b)).filter(Boolean);y.length>0&&s(v,{updated:y})},C=w=>{const v=e.get(w);return v?{...v}:void 0},T=w=>{const v=t.get(w);if(v){const y=C(v).bodies.find(b=>b.id===w);if(y)return y;console.error(`Store integrity error: body ${w} in index, but not in annotation`)}else console.warn(`Attempt to retrieve missing body: ${w}`)},V=(w,v)=>{if(w.annotation!==v.annotation)throw"Annotation integrity violation: annotation ID must be the same when updating bodies";const y=e.get(w.annotation);if(y){const b=y.bodies.find(P=>P.id===w.id),I={...y,bodies:y.bodies.map(P=>P.id===b.id?v:P)};return e.set(y.id,I),b.id!==v.id&&(t.delete(b.id),t.set(v.id,I.id)),{oldValue:y,newValue:I,bodiesUpdated:[{oldBody:b,newBody:v}]}}else console.warn(`Attempt to add body to missing annotation ${w.annotation}`)},U=(w,v,y=ne.LOCAL)=>{const b=V(w,v);b&&s(y,{updated:[b]})},W=(w,v=ne.LOCAL)=>{const y=w.map(b=>V({id:b.id,annotation:b.annotation},b)).filter(Boolean);s(v,{updated:y})},q=w=>{const v=e.get(w.annotation);if(v){const y={...v,target:{...v.target,...w}};return e.set(v.id,y),{oldValue:v,newValue:y,targetUpdated:{oldTarget:v.target,newTarget:w}}}else console.warn(`Attempt to update target on missing annotation: ${w.annotation}`)};return{addAnnotation:r,addBody:h,all:p,bulkAddAnnotations:g,bulkDeleteAnnotations:S,bulkDeleteBodies:M,bulkUpdateAnnotations:d,bulkUpdateBodies:W,bulkUpdateTargets:(w,v=ne.LOCAL)=>{const y=w.map(b=>q(b)).filter(Boolean);y.length>0&&s(v,{updated:y})},bulkUpsertAnnotations:f,clear:m,deleteAnnotation:E,deleteBody:A,getAnnotation:C,getBody:T,observe:o,unobserve:i,updateAnnotation:a,updateBody:U,updateTarget:(w,v=ne.LOCAL)=>{const y=q(w);y&&s(v,{updated:[y]})},upsertAnnotation:u}},ji=e=>({...e,subscribe:t=>{const n=o=>t(o.state);return e.observe(n),t(e.all()),()=>e.unobserve(n)}});let zi=()=>({emit(e,...t){for(let n=this.events[e]||[],o=0,i=n.length;o<i;o++)n[o](...t)},events:{},on(e,t){var n;return((n=this.events)[e]||(n[e]=[])).push(t),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(i=>t!==i)}}});const Fi=250,qi=(e,t)=>{const n=zi(),o=(t==null?void 0:t.changes)||[];let i=t?t.pointer:-1,s=!1,r=0;const l=m=>{if(!s){const{changes:g}=m,k=performance.now();if(k-r>Fi)o.splice(i+1),o.push(g),i=o.length-1;else{const E=o.length-1;o[E]=Xi(o[E],g)}r=k}s=!1};e.observe(l,{origin:ne.LOCAL});const a=m=>m&&m.length>0&&e.bulkDeleteAnnotations(m),u=m=>m&&m.length>0&&e.bulkAddAnnotations(m,!1),d=m=>m&&m.length>0&&e.bulkUpdateAnnotations(m.map(({oldValue:g})=>g)),f=m=>m&&m.length>0&&e.bulkUpdateAnnotations(m.map(({newValue:g})=>g)),h=m=>m&&m.length>0&&e.bulkAddAnnotations(m,!1),p=m=>m&&m.length>0&&e.bulkDeleteAnnotations(m);return{canRedo:()=>o.length-1>i,canUndo:()=>i>-1,destroy:()=>e.unobserve(l),getHistory:()=>({changes:[...o],pointer:i}),on:(m,g)=>n.on(m,g),redo:()=>{if(o.length-1>i){s=!0;const{created:m,updated:g,deleted:k}=o[i+1];u(m),f(g),p(k),n.emit("redo",o[i+1]),i+=1}},undo:()=>{if(i>-1){s=!0;const{created:m,updated:g,deleted:k}=o[i];a(m),d(g),h(k),n.emit("undo",o[i]),i-=1}}}},Ki=()=>{const{subscribe:e,set:t}=Dt([]);return{subscribe:e,set:t}},Wi=(e,t,n,o)=>{const{hover:i,selection:s,store:r,viewport:l}=e,a=new Map;let u=[],d,f;const h=(E,S)=>{a.has(E)?a.get(E).push(S):a.set(E,[S])},p=(E,S)=>{const _=a.get(E);if(_){const A=_.indexOf(S);A!==-1&&_.splice(A,1)}},m=(E,S,_)=>{a.has(E)&&setTimeout(()=>{a.get(E).forEach(A=>{if(n){const M=Array.isArray(S)?S.map(T=>n.serialize(T)):n.serialize(S),C=_?_ instanceof PointerEvent?_:n.serialize(_):void 0;A(M,C)}else A(S,_)})},1)},g=()=>{const{selected:E}=s,S=(E||[]).map(({id:_})=>r.getAnnotation(_));S.forEach(_=>{const A=u.find(M=>M.id===_.id);(!A||!Oe(A,_))&&m("updateAnnotation",_,A)}),u=u.map(_=>S.find(({id:M})=>M===_.id)||_)};s.subscribe(({selected:E})=>{if(!(u.length===0&&E.length===0)){if(u.length===0&&E.length>0)u=E.map(({id:S})=>r.getAnnotation(S));else if(u.length>0&&E.length===0)u.forEach(S=>{const _=r.getAnnotation(S.id);_&&!Oe(_,S)&&m("updateAnnotation",_,S)}),u=[];else{const S=new Set(u.map(A=>A.id)),_=new Set(E.map(({id:A})=>A));u.filter(A=>!_.has(A.id)).forEach(A=>{const M=r.getAnnotation(A.id);M&&!Oe(M,A)&&m("updateAnnotation",M,A)}),u=[...u.filter(A=>_.has(A.id)),...E.filter(({id:A})=>!S.has(A)).map(({id:A})=>r.getAnnotation(A))]}m("selectionChanged",u)}}),i.subscribe(E=>{!d&&E?m("mouseEnterAnnotation",r.getAnnotation(E)):d&&!E?m("mouseLeaveAnnotation",r.getAnnotation(d)):d&&E&&(m("mouseLeaveAnnotation",r.getAnnotation(d)),m("mouseEnterAnnotation",r.getAnnotation(E))),d=E}),l==null||l.subscribe(E=>m("viewportIntersect",E.map(S=>r.getAnnotation(S)))),r.observe(E=>{o&&(f&&clearTimeout(f),f=setTimeout(g,1e3));const{created:S,deleted:_}=E.changes;(S||[]).forEach(A=>m("createAnnotation",A)),(_||[]).forEach(A=>m("deleteAnnotation",A)),(E.changes.updated||[]).filter(A=>[...A.bodiesCreated||[],...A.bodiesDeleted||[],...A.bodiesUpdated||[]].length>0).forEach(({oldValue:A,newValue:M})=>{const C=u.find(T=>T.id===A.id)||A;u=u.map(T=>T.id===A.id?M:T),m("updateAnnotation",M,C)})},{origin:ne.LOCAL}),r.observe(E=>{if(u){const S=new Set(u.map(A=>A.id)),_=(E.changes.updated||[]).filter(({newValue:A})=>S.has(A.id)).map(({newValue:A})=>A);_.length>0&&(u=u.map(A=>_.find(C=>C.id===A.id)||A))}},{origin:ne.REMOTE});const k=E=>S=>{const{updated:_}=S;E?(_||[]).forEach(A=>m("updateAnnotation",A.oldValue,A.newValue)):(_||[]).forEach(A=>m("updateAnnotation",A.newValue,A.oldValue))};return t.on("undo",k(!0)),t.on("redo",k(!1)),{on:h,off:p,emit:m}},Zi=e=>t=>t.reduce((n,o)=>{const{parsed:i,error:s}=e.parse(o);return s?{parsed:n.parsed,failed:[...n.failed,o]}:i?{parsed:[...n.parsed,i],failed:n.failed}:{...n}},{parsed:[],failed:[]}),Ji=(e,t,n)=>{const{store:o,selection:i}=e,s=E=>{if(n){const{parsed:S,error:_}=n.parse(E);S?o.addAnnotation(S,ne.REMOTE):console.error(_)}else o.addAnnotation(Ut(E),ne.REMOTE)},r=()=>i.clear(),l=()=>o.clear(),a=E=>{const S=o.getAnnotation(E);return n&&S?n.serialize(S):S},u=()=>n?o.all().map(n.serialize):o.all(),d=()=>{var E;const S=(((E=i.selected)==null?void 0:E.map(_=>_.id))||[]).map(_=>o.getAnnotation(_)).filter(Boolean);return n?S.map(n.serialize):S},f=(E,S=!0)=>fetch(E).then(_=>_.json()).then(_=>(p(_,S),_)),h=E=>{if(typeof E=="string"){const S=o.getAnnotation(E);if(o.deleteAnnotation(E),S)return n?n.serialize(S):S}else{const S=n?n.parse(E).parsed:E;if(S)return o.deleteAnnotation(S),E}},p=(E,S=!0)=>{if(n){const _=n.parseAll||Zi(n),{parsed:A,failed:M}=_(E);M.length>0&&console.warn(`Discarded ${M.length} invalid annotations`,M),o.bulkAddAnnotations(A,S,ne.REMOTE)}else o.bulkAddAnnotations(E.map(Ut),S,ne.REMOTE)},m=(E,S)=>{E?i.setSelected(E,S):i.clear()},g=E=>{i.clear(),i.setUserSelectAction(E)},k=E=>{if(n){const S=n.parse(E).parsed,_=n.serialize(o.getAnnotation(S.id));return o.updateAnnotation(S),_}else{const S=o.getAnnotation(E.id);return o.updateAnnotation(Ut(E)),S}};return{addAnnotation:s,cancelSelected:r,canRedo:t.canRedo,canUndo:t.canUndo,clearAnnotations:l,getAnnotationById:a,getAnnotations:u,getHistory:t.getHistory,getSelected:d,loadAnnotations:f,redo:t.redo,removeAnnotation:h,setAnnotations:p,setSelected:m,setUserSelectAction:g,undo:t.undo,updateAnnotation:k}},Qi=(e,t,n)=>typeof t=="function"?t(e,n):t,xi=(e,t)=>typeof e!="function"&&typeof t!="function"?{...e||{},...t||{}}:(n,o)=>{const i=typeof e=="function"?e(n,o):e,s=typeof t=="function"?t(n,o):t;return{...i||{},...s||{}}},$i="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let es=e=>crypto.getRandomValues(new Uint8Array(e)),ts=(e,t,n)=>{let o=(2<<Math.log2(e.length-1))-1,i=-~(1.6*o*t/e.length);return(s=t)=>{let r="";for(;;){let l=n(i),a=i|0;for(;a--;)if(r+=e[l[a]&o]||"",r.length>=s)return r}}},ns=(e,t=21)=>ts(e,t|0,es),os=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=$i[n[e]&63];return t};const is=()=>({isGuest:!0,id:ns("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_",20)()}),ss=e=>{const t=JSON.stringify(e);let n=0;for(let o=0,i=t.length;o<i;o++){let s=t.charCodeAt(o);n=(n<<5)-n+s,n|=0}return`${n}`},Yn=e=>e?typeof e=="object"?{...e}:e:void 0,rs=(e,t)=>(Array.isArray(e)?e:[e]).map(n=>{const{id:o,type:i,purpose:s,value:r,created:l,modified:a,creator:u,...d}=n;return{id:o||`temp-${ss(n)}`,annotation:t,type:i,purpose:s,value:r,creator:Yn(u),created:l?new Date(l):void 0,updated:a?new Date(a):void 0,...d}}),ls=e=>e.map(t=>{var n;const{annotation:o,created:i,updated:s,...r}=t,l={...r,created:i==null?void 0:i.toISOString(),modified:s==null?void 0:s.toISOString()};return(n=l.id)!=null&&n.startsWith("temp-")&&delete l.id,l}),as=["#ff7c00","#1ac938","#e8000b","#8b2be2","#9f4800","#f14cc1","#ffc400","#00d7ff","#023eff"],cs=()=>{const e=[...as];return{assignRandomColor:()=>{const t=Math.floor(Math.random()*e.length),n=e[t];return e.splice(t,1),n},releaseColor:t=>e.push(t)}};os();const us=(e,t={strict:!0,invertY:!1})=>({parse:i=>Bn(i,t),serialize:i=>Vn(i,e,t)}),Bn=(e,t={strict:!0,invertY:!1})=>{const n=e.id||On(),{creator:o,created:i,modified:s,body:r,...l}=e,a=rs(r||[],n),u=Array.isArray(e.target)?e.target[0]:e.target,d=typeof u=="string"?u:Array.isArray(u.selector)?u.selector[0]:u.selector,f=typeof d=="string"||(d==null?void 0:d.type)==="FragmentSelector"?An(d,t.invertY):(d==null?void 0:d.type)==="SvgSelector"?Ln(d):void 0,h=Array.isArray(l.target)?l.target[0]:l.targret;return f||!t.strict?{parsed:{...l,id:n,bodies:a,target:{created:i?new Date(i):void 0,creator:Yn(o),updated:s?new Date(s):void 0,...typeof h=="string"?{}:h,annotation:n,selector:f||d}}}:{error:Error(`Invalid selector: ${JSON.stringify(d)}`)}},Vn=(e,t,n={strict:!0,invertY:!1})=>{const{selector:o,creator:i,created:s,updated:r,updatedBy:l,...a}=e.target;let u;try{u=o.type==Q.RECTANGLE?kn(o.geometry):In(o)}catch(f){if(n.strict)throw f;u=o}const d={...e,"@context":"http://www.w3.org/ns/anno.jsonld",id:e.id,type:"Annotation",body:ls(e.bodies),created:s==null?void 0:s.toISOString(),creator:i,modified:r==null?void 0:r.toISOString(),target:{...a,source:t,type:"SpecificResource",selector:u}};return delete d.bodies,"annotation"in d.target&&delete d.target.annotation,d},qe=[];function fs(e,t=j){let n;const o=new Set;function i(l){if(re(e,l)&&(e=l,n)){const a=!qe.length;for(const u of o)u[1](),qe.push(u,e);if(a){for(let u=0;u<qe.length;u+=2)qe[u][0](qe[u+1]);qe.length=0}}}function s(l){i(l(e))}function r(l,a=j){const u=[l,a];return o.add(u),o.size===1&&(n=t(i,s)||j),l(e),()=>{o.delete(u),o.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:r}}const ds=(e,t)=>{const{naturalWidth:n,naturalHeight:o}=e;if(!n&&!o){const{width:i,height:s}=e;t.setAttribute("viewBox",`0 0 ${i} ${s}`),e.addEventListener("load",r=>{const l=r.target;t.setAttribute("viewBox",`0 0 ${l.naturalWidth} ${l.naturalHeight}`)})}else t.setAttribute("viewBox",`0 0 ${n} ${o}`)},Xn=(e,t)=>{ds(e,t);const{subscribe:n,set:o}=fs(1);let i;return window.ResizeObserver&&(i=new ResizeObserver(()=>{const r=t.getBoundingClientRect(),{width:l,height:a}=t.viewBox.baseVal,u=Math.max(r.width/l,r.height/a);o(u)}),i.observe(t.parentElement)),{destroy:()=>{i&&i.disconnect()},subscribe:n}},Ve=(e,t)=>{const n=typeof t=="function"?t(e):t;if(n){const{fill:o,fillOpacity:i,stroke:s,strokeWidth:r,strokeOpacity:l}=n;let a="";return o&&(a+=`fill:${o};`),i||i===0?a+=`fill-opacity:${i};`:o&&(a+="fill-opacity:0.25;"),s&&(a+=`stroke:${s};`,a+=`stroke-width:${r||"1"};`,a+=`stroke-opacity:${l||"1"};`),a}},it=(e,t=0)=>{const{minX:n,minY:o,maxX:i,maxY:s}=e;return{x:n-t,y:o-t,w:i-n+2*t,h:s-o+2*t}},Le=typeof window>"u"||typeof navigator>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,hs=e=>({}),Hn=e=>({grab:e[0]});function gs(e){let t,n,o,i;const s=e[8].default,r=zo(s,e,e[7],Hn);return{c(){t=L("g"),r&&r.c(),c(t,"class","a9s-annotation selected")},m(l,a){N(l,t,a),r&&r.m(t,null),n=!0,o||(i=[J(t,"pointerup",e[2]),J(t,"pointermove",e[1])],o=!0)},p(l,[a]){r&&r.p&&(!n||a&128)&&qo(r,s,l,l[7],n?Fo(s,l[7],a,hs):Ko(l[7]),Hn)},i(l){n||(B(r,l),n=!0)},o(l){G(r,l),n=!1},d(l){l&&R(t),r&&r.d(l),o=!1,Ae(i)}}}function ms(e,t,n){let{$$slots:o={},$$scope:i}=t;const s=Ce();let{shape:r}=t,{editor:l}=t,{transform:a}=t,{svgEl:u}=t,d,f,h;const p=k=>E=>{if(d=k,u){const{left:_,top:A}=u.getBoundingClientRect(),M=E.clientX-_,C=E.clientY-A;f=a.elementToImage(M,C)}else{const{offsetX:_,offsetY:A}=E;f=a.elementToImage(_,A)}h=r,E.target.setPointerCapture(E.pointerId),s("grab",E)},m=k=>{if(d){const[E,S]=a.elementToImage(k.offsetX,k.offsetY),_=[E-f[0],S-f[1]];n(3,r=l(h,d,_)),s("change",r)}},g=k=>{k.target.releasePointerCapture(k.pointerId),d=void 0,h=r,s("release",k)};return e.$$set=k=>{"shape"in k&&n(3,r=k.shape),"editor"in k&&n(4,l=k.editor),"transform"in k&&n(5,a=k.transform),"svgEl"in k&&n(6,u=k.svgEl),"$$scope"in k&&n(7,i=k.$$scope)},[p,m,g,r,l,a,u,i,o]}class yt extends ge{constructor(t){super(),he(this,t,ms,gs,re,{shape:3,editor:4,transform:5,svgEl:6})}}function ps(e){let t,n,o,i,s,r,l,a,u=e[3]&&Gn(e);return{c(){t=L("g"),n=L("circle"),u&&u.c(),i=L("circle"),c(n,"class","a9s-handle-buffer svelte-qtyc7s"),c(n,"cx",e[0]),c(n,"cy",e[1]),c(n,"r",o=e[5]+6/e[2]),c(n,"role","button"),c(n,"tabindex","0"),c(i,"class",s=He(`a9s-handle-dot${e[3]?" selected":""}`)+" svelte-qtyc7s"),c(i,"cx",e[0]),c(i,"cy",e[1]),c(i,"r",e[5]),c(t,"class",r=`a9s-handle ${e[8].class||""}`.trim())},m(d,f){N(d,t,f),F(t,n),u&&u.m(t,null),F(t,i),l||(a=[J(n,"dblclick",e[12]),J(n,"pointerenter",e[13]),J(n,"pointerleave",e[14]),J(n,"pointerdown",e[15]),J(n,"pointerdown",e[6]),J(n,"pointerup",e[16]),J(n,"pointerup",e[7])],l=!0)},p(d,f){f&1&&c(n,"cx",d[0]),f&2&&c(n,"cy",d[1]),f&36&&o!==(o=d[5]+6/d[2])&&c(n,"r",o),d[3]?u?u.p(d,f):(u=Gn(d),u.c(),u.m(t,i)):u&&(u.d(1),u=null),f&8&&s!==(s=He(`a9s-handle-dot${d[3]?" selected":""}`)+" svelte-qtyc7s")&&c(i,"class",s),f&1&&c(i,"cx",d[0]),f&2&&c(i,"cy",d[1]),f&32&&c(i,"r",d[5]),f&256&&r!==(r=`a9s-handle ${d[8].class||""}`.trim())&&c(t,"class",r)},d(d){d&&R(t),u&&u.d(),l=!1,Ae(a)}}}function ys(e){let t,n,o,i,s,r,l,a,u;return{c(){t=L("g"),n=L("circle"),i=L("circle"),r=L("circle"),c(n,"cx",e[0]),c(n,"cy",e[1]),c(n,"r",o=e[5]*10),c(n,"class","a9s-touch-halo"),Te(n,"touched",e[4]),c(i,"cx",e[0]),c(i,"cy",e[1]),c(i,"r",s=e[5]+10/e[2]),c(i,"class","a9s-handle-buffer svelte-qtyc7s"),c(i,"role","button"),c(i,"tabindex","0"),c(r,"class","a9s-handle-dot"),c(r,"cx",e[0]),c(r,"cy",e[1]),c(r,"r",l=e[5]+2/e[2]),c(t,"class","a9s-touch-handle")},m(d,f){N(d,t,f),F(t,n),F(t,i),F(t,r),a||(u=[J(i,"dblclick",e[9]),J(i,"pointerdown",e[10]),J(i,"pointerdown",e[6]),J(i,"pointerup",e[11]),J(i,"pointerup",e[7])],a=!0)},p(d,f){f&1&&c(n,"cx",d[0]),f&2&&c(n,"cy",d[1]),f&32&&o!==(o=d[5]*10)&&c(n,"r",o),f&16&&Te(n,"touched",d[4]),f&1&&c(i,"cx",d[0]),f&2&&c(i,"cy",d[1]),f&36&&s!==(s=d[5]+10/d[2])&&c(i,"r",s),f&1&&c(r,"cx",d[0]),f&2&&c(r,"cy",d[1]),f&36&&l!==(l=d[5]+2/d[2])&&c(r,"r",l)},d(d){d&&R(t),a=!1,Ae(u)}}}function Gn(e){let t,n;return{c(){t=L("circle"),c(t,"class","a9s-handle-selected"),c(t,"cx",e[0]),c(t,"cy",e[1]),c(t,"r",n=e[5]+8/e[2])},m(o,i){N(o,t,i)},p(o,i){i&1&&c(t,"cx",o[0]),i&2&&c(t,"cy",o[1]),i&36&&n!==(n=o[5]+8/o[2])&&c(t,"r",n)},d(o){o&&R(t)}}}function _s(e){let t;function n(s,r){return Le?ys:ps}let i=n()(e);return{c(){i.c(),t=ke()},m(s,r){i.m(s,r),N(s,t,r)},p(s,[r]){i.p(s,r)},i:j,o:j,d(s){s&&R(t),i.d(s)}}}function ws(e,t,n){let o,{x:i}=t,{y:s}=t,{scale:r}=t,{selected:l=void 0}=t,a=!1;const u=_=>{_.pointerType==="touch"&&n(4,a=!0)},d=()=>n(4,a=!1);function f(_){ue.call(this,e,_)}function h(_){ue.call(this,e,_)}function p(_){ue.call(this,e,_)}function m(_){ue.call(this,e,_)}function g(_){ue.call(this,e,_)}function k(_){ue.call(this,e,_)}function E(_){ue.call(this,e,_)}function S(_){ue.call(this,e,_)}return e.$$set=_=>{n(8,t=Ie(Ie({},t),cn(_))),"x"in _&&n(0,i=_.x),"y"in _&&n(1,s=_.y),"scale"in _&&n(2,r=_.scale),"selected"in _&&n(3,l=_.selected)},e.$$.update=()=>{e.$$.dirty&4&&n(5,o=4/r)},t=cn(t),[i,s,r,l,a,o,u,d,t,f,h,p,m,g,k,E,S]}class Xe extends ge{constructor(t){super(),he(this,t,ws,_s,re,{x:0,y:1,scale:2,selected:3})}}function bs(e){let t,n,o,i,s,r,l;return{c(){t=L("g"),n=L("circle"),i=L("circle"),s=L("circle"),c(n,"class","a9s-polygon-midpoint-buffer svelte-12ykj76"),c(n,"cx",e[0]),c(n,"cy",e[1]),c(n,"r",o=1.75*e[2]),c(i,"class","a9s-polygon-midpoint-outer svelte-12ykj76"),c(i,"cx",e[0]),c(i,"cy",e[1]),c(i,"r",e[2]),c(s,"class","a9s-polygon-midpoint-inner svelte-12ykj76"),c(s,"cx",e[0]),c(s,"cy",e[1]),c(s,"r",e[2]),c(t,"class","a9s-polygon-midpoint svelte-12ykj76")},m(a,u){N(a,t,u),F(t,n),F(t,i),F(t,s),r||(l=[J(n,"pointerdown",e[5]),J(n,"pointerdown",e[3])],r=!0)},p(a,u){u&1&&c(n,"cx",a[0]),u&2&&c(n,"cy",a[1]),u&4&&o!==(o=1.75*a[2])&&c(n,"r",o),u&1&&c(i,"cx",a[0]),u&2&&c(i,"cy",a[1]),u&4&&c(i,"r",a[2]),u&1&&c(s,"cx",a[0]),u&2&&c(s,"cy",a[1]),u&4&&c(s,"r",a[2])},d(a){a&&R(t),r=!1,Ae(l)}}}function Es(e){let t;return{c(){t=L("circle"),c(t,"cx",e[0]),c(t,"cy",e[1]),c(t,"r",e[2])},m(n,o){N(n,t,o)},p(n,o){o&1&&c(t,"cx",n[0]),o&2&&c(t,"cy",n[1]),o&4&&c(t,"r",n[2])},d(n){n&&R(t)}}}function vs(e){let t;function n(s,r){return Le?Es:bs}let i=n()(e);return{c(){i.c(),t=ke()},m(s,r){i.m(s,r),N(s,t,r)},p(s,[r]){i.p(s,r)},i:j,o:j,d(s){s&&R(t),i.d(s)}}}function Ss(e,t,n){let o,{x:i}=t,{y:s}=t,{scale:r}=t;const l=u=>{u.pointerType};function a(u){ue.call(this,e,u)}return e.$$set=u=>{"x"in u&&n(0,i=u.x),"y"in u&&n(1,s=u.y),"scale"in u&&n(4,r=u.scale)},e.$$.update=()=>{e.$$.dirty&16&&n(2,o=4/r)},[i,s,o,l,r,a]}class Yt extends ge{constructor(t){super(),he(this,t,Ss,vs,re,{x:0,y:1,scale:4})}}function Bt(e){const t=e.slice(),n=t[10][t[6]];return t[28]=n.point,t}function jn(e,t,n){const o=e.slice();return o[28]=t[n],o[30]=n,o}function Vt(e){const t=e.slice(),n=t[10][t[6]];return t[28]=n.point,t}function Xt(e){const t=e.slice(),n=t[10][t[6]];return t[28]=n.point,t}function zn(e){let t,n,o,i;return{c(){t=L("circle"),c(t,"cx",n=e[28][0]),c(t,"cy",o=e[28][1]),c(t,"r",i=st/e[3]),c(t,"class","svelte-1h2slbm")},m(s,r){N(s,t,r)},p(s,r){r[0]&1088&&n!==(n=s[28][0])&&c(t,"cx",n),r[0]&1088&&o!==(o=s[28][1])&&c(t,"cy",o),r[0]&8&&i!==(i=st/s[3])&&c(t,"r",i)},d(s){s&&R(t)}}}function Fn(e){let t,n,o,i,s,r,l,a,u,d;return{c(){t=L("mask"),n=L("rect"),l=L("circle"),c(n,"x",o=e[9].x),c(n,"y",i=e[9].y),c(n,"width",s=e[9].w),c(n,"height",r=e[9].h),c(n,"class","svelte-1h2slbm"),c(l,"cx",a=e[28][0]),c(l,"cy",u=e[28][1]),c(l,"r",d=st/e[3]),c(l,"class","svelte-1h2slbm"),c(t,"id",`${e[19]}-inner`),c(t,"class","a9s-polygon-editor-mask svelte-1h2slbm")},m(f,h){N(f,t,h),F(t,n),F(t,l)},p(f,h){h[0]&512&&o!==(o=f[9].x)&&c(n,"x",o),h[0]&512&&i!==(i=f[9].y)&&c(n,"y",i),h[0]&512&&s!==(s=f[9].w)&&c(n,"width",s),h[0]&512&&r!==(r=f[9].h)&&c(n,"height",r),h[0]&1088&&a!==(a=f[28][0])&&c(l,"cx",a),h[0]&1088&&u!==(u=f[28][1])&&c(l,"cy",u),h[0]&8&&d!==(d=st/f[3])&&c(l,"r",d)},d(f){f&&R(t)}}}function qn(e){let t,n;return t=new Xe({props:{class:"a9s-corner-handle",x:e[28][0],y:e[28][1],scale:e[3],selected:e[8].includes(e[30])}}),t.$on("pointerenter",e[11]),t.$on("pointerleave",e[12]),t.$on("pointerdown",e[15]),t.$on("pointerdown",function(){ie(e[27](`HANDLE-${e[30]}`))&&e[27](`HANDLE-${e[30]}`).apply(this,arguments)}),t.$on("pointerup",e[16](e[30])),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){e=o;const s={};i[0]&32&&(s.x=e[28][0]),i[0]&32&&(s.y=e[28][1]),i[0]&8&&(s.scale=e[3]),i[0]&256&&(s.selected=e[8].includes(e[30])),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function Kn(e){let t,n;return t=new Yt({props:{x:e[28][0],y:e[28][1],scale:e[3]}}),t.$on("pointerdown",function(){ie(e[18](e[6]))&&e[18](e[6]).apply(this,arguments)}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){e=o;const s={};i[0]&1088&&(s.x=e[28][0]),i[0]&1088&&(s.y=e[28][1]),i[0]&8&&(s.scale=e[3]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function As(e){let t,n,o,i,s,r,l,a,u,d,f,h,p,m,g,k,E,S,_,A,M,C=e[6]!==void 0&&!e[7]&&zn(Xt(e)),T=e[6]!==void 0&&!e[7]&&Fn(Vt(e)),V=ve(e[5].points),U=[];for(let w=0;w<V.length;w+=1)U[w]=qn(jn(e,V,w));const W=w=>G(U[w],1,1,()=>{U[w]=null});let q=e[6]!==void 0&&!e[7]&&Kn(Bt(e));return{c(){t=L("defs"),n=L("mask"),o=L("rect"),a=L("polygon"),C&&C.c(),T&&T.c(),d=we(),f=L("polygon"),p=we(),m=L("polygon"),k=we();for(let w=0;w<U.length;w+=1)U[w].c();E=we(),q&&q.c(),S=ke(),c(o,"x",i=e[9].x),c(o,"y",s=e[9].y),c(o,"width",r=e[9].w),c(o,"height",l=e[9].h),c(o,"class","svelte-1h2slbm"),c(a,"points",u=e[5].points.map(Wn).join(" ")),c(a,"class","svelte-1h2slbm"),c(n,"id",`${e[19]}-outer`),c(n,"class","a9s-polygon-editor-mask svelte-1h2slbm"),c(f,"class","a9s-outer"),c(f,"mask",`url(#${e[19]}-outer)`),c(f,"points",h=e[5].points.map(Zn).join(" ")),c(m,"class","a9s-inner a9s-shape-handle"),c(m,"mask",`url(#${e[19]}-inner)`),c(m,"style",e[1]),c(m,"points",g=e[5].points.map(Jn).join(" "))},m(w,v){N(w,t,v),F(t,n),F(n,o),F(n,a),C&&C.m(n,null),T&&T.m(t,null),N(w,d,v),N(w,f,v),N(w,p,v),N(w,m,v),N(w,k,v);for(let y=0;y<U.length;y+=1)U[y]&&U[y].m(w,v);N(w,E,v),q&&q.m(w,v),N(w,S,v),_=!0,A||(M=[J(f,"pointerup",e[14]),J(f,"pointerdown",function(){ie(e[27]("SHAPE"))&&e[27]("SHAPE").apply(this,arguments)}),J(m,"pointermove",e[13]),J(m,"pointerup",e[14]),J(m,"pointerdown",function(){ie(e[27]("SHAPE"))&&e[27]("SHAPE").apply(this,arguments)})],A=!0)},p(w,v){if(e=w,(!_||v[0]&512&&i!==(i=e[9].x))&&c(o,"x",i),(!_||v[0]&512&&s!==(s=e[9].y))&&c(o,"y",s),(!_||v[0]&512&&r!==(r=e[9].w))&&c(o,"width",r),(!_||v[0]&512&&l!==(l=e[9].h))&&c(o,"height",l),(!_||v[0]&32&&u!==(u=e[5].points.map(Wn).join(" ")))&&c(a,"points",u),e[6]!==void 0&&!e[7]?C?C.p(Xt(e),v):(C=zn(Xt(e)),C.c(),C.m(n,null)):C&&(C.d(1),C=null),e[6]!==void 0&&!e[7]?T?T.p(Vt(e),v):(T=Fn(Vt(e)),T.c(),T.m(t,null)):T&&(T.d(1),T=null),(!_||v[0]&32&&h!==(h=e[5].points.map(Zn).join(" ")))&&c(f,"points",h),(!_||v[0]&2)&&c(m,"style",e[1]),(!_||v[0]&32&&g!==(g=e[5].points.map(Jn).join(" ")))&&c(m,"points",g),v[0]&134322472){V=ve(e[5].points);let y;for(y=0;y<V.length;y+=1){const b=jn(e,V,y);U[y]?(U[y].p(b,v),B(U[y],1)):(U[y]=qn(b),U[y].c(),B(U[y],1),U[y].m(E.parentNode,E))}for(be(),y=V.length;y<U.length;y+=1)W(y);Ee()}e[6]!==void 0&&!e[7]?q?(q.p(Bt(e),v),v[0]&192&&B(q,1)):(q=Kn(Bt(e)),q.c(),B(q,1),q.m(S.parentNode,S)):q&&(be(),G(q,1,1,()=>{q=null}),Ee())},i(w){if(!_){for(let v=0;v<V.length;v+=1)B(U[v]);B(q),_=!0}},o(w){U=U.filter(Boolean);for(let v=0;v<U.length;v+=1)G(U[v]);G(q),_=!1},d(w){w&&(R(t),R(d),R(f),R(p),R(m),R(k),R(E),R(S)),C&&C.d(),T&&T.d(),Ne(U,w),q&&q.d(w),A=!1,Ae(M)}}}function ks(e){let t,n;return t=new yt({props:{shape:e[0],transform:e[2],editor:e[17],svgEl:e[4],$$slots:{default:[As,({grab:o})=>({27:o}),({grab:o})=>[o?134217728:0]]},$$scope:{ctx:e}}}),t.$on("change",e[20]),t.$on("grab",e[21]),t.$on("release",e[22]),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&1&&(s.shape=o[0]),i[0]&4&&(s.transform=o[2]),i[0]&16&&(s.svgEl=o[4]),i[0]&134219754|i[1]&1&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}const Ms=250,Ts=1e3,Ps=12,st=4.5,Wn=e=>e.join(","),Zn=e=>e.join(","),Jn=e=>e.join(",");function Ls(e,t,n){let o,i,s;const r=Ce();let{shape:l}=t,{computedStyle:a}=t,{transform:u}=t,{viewportScale:d=1}=t,{svgEl:f}=t,h,p=!1,m,g=[];const k=()=>n(7,p=!0),E=()=>n(7,p=!1),S=y=>{if(g.length>0||!i.some(Z=>Z.visible)){n(6,h=void 0);return}const[b,I]=u.elementToImage(y.offsetX,y.offsetY),P=Z=>Math.pow(Z[0]-b,2)+Math.pow(Z[1]-I,2),D=o.points.reduce((Z,$)=>P($)<P(Z)?$:Z),z=i.filter(Z=>Z.visible).reduce((Z,$)=>P($.point)<P(Z.point)?$:Z),H=Math.pow(Ts/d,2);P(D)<H||P(z.point)<H?n(6,h=i.indexOf(z)):n(6,h=void 0)},_=()=>{document.activeElement!==f&&f.focus()},A=()=>{n(8,g=[]),_()},M=y=>{n(7,p=!0),y.preventDefault(),y.stopPropagation(),m=performance.now()},C=y=>b=>{if(!m||Le||performance.now()-m>Ms)return;const I=g.includes(y);b.metaKey||b.ctrlKey||b.shiftKey?I?n(8,g=g.filter(P=>P!==y)):n(8,g=[...g,y]):I&&g.length>1?n(8,g=[y]):I?n(8,g=[]):n(8,g=[y]),_()},T=(y,b,I)=>{_();let P;const D=y.geometry;g.length>1?P=D.points.map(([H,x],Z)=>g.includes(Z)?[H+I[0],x+I[1]]:[H,x]):b==="SHAPE"?P=D.points.map(([H,x])=>[H+I[0],x+I[1]]):P=D.points.map(([H,x],Z)=>b===`HANDLE-${Z}`?[H+I[0],x+I[1]]:[H,x]);const z=fe(P);return{...y,geometry:{points:P,bounds:z}}},V=y=>async b=>{b.stopPropagation();const I=[...o.points.slice(0,y+1),i[y].point,...o.points.slice(y+1)],P=fe(I);r("change",{...l,geometry:{points:I,bounds:P}}),await mn();const D=[...document.querySelectorAll(".a9s-handle")][y+1];if(D!=null&&D.firstChild){const z=new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,clientX:b.clientX,clientY:b.clientY,pointerId:b.pointerId,pointerType:b.pointerType,isPrimary:b.isPrimary,buttons:b.buttons});D.firstChild.dispatchEvent(z)}},U=()=>{if(o.points.length-g.length<3)return;const y=o.points.filter((I,P)=>!g.includes(P)),b=fe(y);r("change",{...l,geometry:{points:y,bounds:b}}),n(8,g=[])};Ue(()=>{if(Le)return;const y=b=>{(b.key==="Delete"||b.key==="Backspace")&&(b.preventDefault(),U())};return f.addEventListener("pointermove",S),f.addEventListener("keydown",y),()=>{f.removeEventListener("pointermove",S),f.removeEventListener("keydown",y)}});const W=`polygon-mask-${Math.random().toString(36).substring(2,12)}`;function q(y){ue.call(this,e,y)}function w(y){ue.call(this,e,y)}function v(y){ue.call(this,e,y)}return e.$$set=y=>{"shape"in y&&n(0,l=y.shape),"computedStyle"in y&&n(1,a=y.computedStyle),"transform"in y&&n(2,u=y.transform),"viewportScale"in y&&n(3,d=y.viewportScale),"svgEl"in y&&n(4,f=y.svgEl)},e.$$.update=()=>{e.$$.dirty[0]&1&&n(5,o=l.geometry),e.$$.dirty[0]&40&&n(10,i=Le?[]:o.points.map((y,b)=>{const I=b===o.points.length-1?o.points[0]:o.points[b+1],P=(y[0]+I[0])/2,D=(y[1]+I[1])/2,H=Math.sqrt(Math.pow(I[0]-P,2)+Math.pow(I[1]-D,2))>Ps/d;return{point:[P,D],visible:H}})),e.$$.dirty[0]&40&&n(9,s=it(o.bounds,st/d))},[l,a,u,d,f,o,h,p,g,s,i,k,E,S,A,M,C,T,V,W,q,w,v]}class Qn extends ge{constructor(t){super(),he(this,t,Ls,ks,re,{shape:0,computedStyle:1,transform:2,viewportScale:3,svgEl:4},null,[-1,-1])}}function Is(e){let t,n,o,i,s,r,l,a,u,d,f,h,p,m,g,k,E,S,_,A,M,C,T,V,U,W,q,w,v,y,b,I,P,D,z,H,x,Z,$,oe,se,Se,Me,X,de,te,ye,_e,Ze,De,tn,Re,ee,nn,Go;return te=new Xe({props:{class:"a9s-corner-handle-topleft",x:e[5].x,y:e[5].y,scale:e[3]}}),te.$on("pointerdown",function(){ie(e[12]("TOP_LEFT"))&&e[12]("TOP_LEFT").apply(this,arguments)}),_e=new Xe({props:{class:"a9s-corner-handle-topright",x:e[5].x+e[5].w,y:e[5].y,scale:e[3]}}),_e.$on("pointerdown",function(){ie(e[12]("TOP_RIGHT"))&&e[12]("TOP_RIGHT").apply(this,arguments)}),De=new Xe({props:{class:"a9s-corner-handle-bottomright",x:e[5].x+e[5].w,y:e[5].y+e[5].h,scale:e[3]}}),De.$on("pointerdown",function(){ie(e[12]("BOTTOM_RIGHT"))&&e[12]("BOTTOM_RIGHT").apply(this,arguments)}),Re=new Xe({props:{class:"a9s-corner-handle-bottomleft",x:e[5].x,y:e[5].y+e[5].h,scale:e[3]}}),Re.$on("pointerdown",function(){ie(e[12]("BOTTOM_LEFT"))&&e[12]("BOTTOM_LEFT").apply(this,arguments)}),{c(){t=L("defs"),n=L("mask"),o=L("rect"),a=L("rect"),p=we(),m=L("rect"),_=we(),A=L("rect"),U=we(),W=L("rect"),y=we(),b=L("rect"),z=we(),H=L("rect"),oe=we(),se=L("rect"),de=we(),ce(te.$$.fragment),ye=we(),ce(_e.$$.fragment),Ze=we(),ce(De.$$.fragment),tn=we(),ce(Re.$$.fragment),c(o,"class","rect-mask-bg svelte-1njczvj"),c(o,"x",i=e[6].x),c(o,"y",s=e[6].y),c(o,"width",r=e[6].w),c(o,"height",l=e[6].h),c(a,"class","rect-mask-fg svelte-1njczvj"),c(a,"x",u=e[5].x),c(a,"y",d=e[5].y),c(a,"width",f=e[5].w),c(a,"height",h=e[5].h),c(n,"id",e[8]),c(n,"class","a9s-rectangle-editor-mask svelte-1njczvj"),c(m,"class","a9s-outer"),c(m,"mask",`url(#${e[8]})`),c(m,"x",g=e[5].x),c(m,"y",k=e[5].y),c(m,"width",E=e[5].w),c(m,"height",S=e[5].h),c(A,"class","a9s-inner a9s-shape-handle"),c(A,"style",e[1]),c(A,"x",M=e[5].x),c(A,"y",C=e[5].y),c(A,"width",T=e[5].w),c(A,"height",V=e[5].h),c(W,"class","a9s-edge-handle a9s-edge-handle-top"),c(W,"x",q=e[5].x),c(W,"y",w=e[5].y),c(W,"height",1),c(W,"width",v=e[5].w),c(b,"class","a9s-edge-handle a9s-edge-handle-right"),c(b,"x",I=e[5].x+e[5].w),c(b,"y",P=e[5].y),c(b,"height",D=e[5].h),c(b,"width",1),c(H,"class","a9s-edge-handle a9s-edge-handle-bottom"),c(H,"x",x=e[5].x),c(H,"y",Z=e[5].y+e[5].h),c(H,"height",1),c(H,"width",$=e[5].w),c(se,"class","a9s-edge-handle a9s-edge-handle-left"),c(se,"x",Se=e[5].x),c(se,"y",Me=e[5].y),c(se,"height",X=e[5].h),c(se,"width",1)},m(K,Y){N(K,t,Y),F(t,n),F(n,o),F(n,a),N(K,p,Y),N(K,m,Y),N(K,_,Y),N(K,A,Y),N(K,U,Y),N(K,W,Y),N(K,y,Y),N(K,b,Y),N(K,z,Y),N(K,H,Y),N(K,oe,Y),N(K,se,Y),N(K,de,Y),le(te,K,Y),N(K,ye,Y),le(_e,K,Y),N(K,Ze,Y),le(De,K,Y),N(K,tn,Y),le(Re,K,Y),ee=!0,nn||(Go=[J(m,"pointerdown",function(){ie(e[12]("SHAPE"))&&e[12]("SHAPE").apply(this,arguments)}),J(A,"pointerdown",function(){ie(e[12]("SHAPE"))&&e[12]("SHAPE").apply(this,arguments)}),J(W,"pointerdown",function(){ie(e[12]("TOP"))&&e[12]("TOP").apply(this,arguments)}),J(b,"pointerdown",function(){ie(e[12]("RIGHT"))&&e[12]("RIGHT").apply(this,arguments)}),J(H,"pointerdown",function(){ie(e[12]("BOTTOM"))&&e[12]("BOTTOM").apply(this,arguments)}),J(se,"pointerdown",function(){ie(e[12]("LEFT"))&&e[12]("LEFT").apply(this,arguments)})],nn=!0)},p(K,Y){e=K,(!ee||Y&64&&i!==(i=e[6].x))&&c(o,"x",i),(!ee||Y&64&&s!==(s=e[6].y))&&c(o,"y",s),(!ee||Y&64&&r!==(r=e[6].w))&&c(o,"width",r),(!ee||Y&64&&l!==(l=e[6].h))&&c(o,"height",l),(!ee||Y&32&&u!==(u=e[5].x))&&c(a,"x",u),(!ee||Y&32&&d!==(d=e[5].y))&&c(a,"y",d),(!ee||Y&32&&f!==(f=e[5].w))&&c(a,"width",f),(!ee||Y&32&&h!==(h=e[5].h))&&c(a,"height",h),(!ee||Y&32&&g!==(g=e[5].x))&&c(m,"x",g),(!ee||Y&32&&k!==(k=e[5].y))&&c(m,"y",k),(!ee||Y&32&&E!==(E=e[5].w))&&c(m,"width",E),(!ee||Y&32&&S!==(S=e[5].h))&&c(m,"height",S),(!ee||Y&2)&&c(A,"style",e[1]),(!ee||Y&32&&M!==(M=e[5].x))&&c(A,"x",M),(!ee||Y&32&&C!==(C=e[5].y))&&c(A,"y",C),(!ee||Y&32&&T!==(T=e[5].w))&&c(A,"width",T),(!ee||Y&32&&V!==(V=e[5].h))&&c(A,"height",V),(!ee||Y&32&&q!==(q=e[5].x))&&c(W,"x",q),(!ee||Y&32&&w!==(w=e[5].y))&&c(W,"y",w),(!ee||Y&32&&v!==(v=e[5].w))&&c(W,"width",v),(!ee||Y&32&&I!==(I=e[5].x+e[5].w))&&c(b,"x",I),(!ee||Y&32&&P!==(P=e[5].y))&&c(b,"y",P),(!ee||Y&32&&D!==(D=e[5].h))&&c(b,"height",D),(!ee||Y&32&&x!==(x=e[5].x))&&c(H,"x",x),(!ee||Y&32&&Z!==(Z=e[5].y+e[5].h))&&c(H,"y",Z),(!ee||Y&32&&$!==($=e[5].w))&&c(H,"width",$),(!ee||Y&32&&Se!==(Se=e[5].x))&&c(se,"x",Se),(!ee||Y&32&&Me!==(Me=e[5].y))&&c(se,"y",Me),(!ee||Y&32&&X!==(X=e[5].h))&&c(se,"height",X);const bt={};Y&32&&(bt.x=e[5].x),Y&32&&(bt.y=e[5].y),Y&8&&(bt.scale=e[3]),te.$set(bt);const Et={};Y&32&&(Et.x=e[5].x+e[5].w),Y&32&&(Et.y=e[5].y),Y&8&&(Et.scale=e[3]),_e.$set(Et);const vt={};Y&32&&(vt.x=e[5].x+e[5].w),Y&32&&(vt.y=e[5].y+e[5].h),Y&8&&(vt.scale=e[3]),De.$set(vt);const St={};Y&32&&(St.x=e[5].x),Y&32&&(St.y=e[5].y+e[5].h),Y&8&&(St.scale=e[3]),Re.$set(St)},i(K){ee||(B(te.$$.fragment,K),B(_e.$$.fragment,K),B(De.$$.fragment,K),B(Re.$$.fragment,K),ee=!0)},o(K){G(te.$$.fragment,K),G(_e.$$.fragment,K),G(De.$$.fragment,K),G(Re.$$.fragment,K),ee=!1},d(K){K&&(R(t),R(p),R(m),R(_),R(A),R(U),R(W),R(y),R(b),R(z),R(H),R(oe),R(se),R(de),R(ye),R(Ze),R(tn)),ae(te,K),ae(_e,K),ae(De,K),ae(Re,K),nn=!1,Ae(Go)}}}function Cs(e){let t,n;return t=new yt({props:{shape:e[0],transform:e[2],editor:e[7],svgEl:e[4],$$slots:{default:[Is,({grab:o})=>({12:o}),({grab:o})=>o?4096:0]},$$scope:{ctx:e}}}),t.$on("grab",e[9]),t.$on("change",e[10]),t.$on("release",e[11]),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,[i]){const s={};i&1&&(s.shape=o[0]),i&4&&(s.transform=o[2]),i&16&&(s.svgEl=o[4]),i&12394&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function Os(e,t,n){let o,i,{shape:s}=t,{computedStyle:r}=t,{transform:l}=t,{viewportScale:a=1}=t,{svgEl:u}=t;const d=(g,k,E)=>{const S=g.geometry.bounds;let[_,A]=[S.minX,S.minY],[M,C]=[S.maxX,S.maxY];const[T,V]=E;if(k==="SHAPE")_+=T,M+=T,A+=V,C+=V;else{switch(k){case"TOP":case"TOP_LEFT":case"TOP_RIGHT":{A+=V;break}case"BOTTOM":case"BOTTOM_LEFT":case"BOTTOM_RIGHT":{C+=V;break}}switch(k){case"LEFT":case"TOP_LEFT":case"BOTTOM_LEFT":{_+=T;break}case"RIGHT":case"TOP_RIGHT":case"BOTTOM_RIGHT":{M+=T;break}}}const U=Math.min(_,M),W=Math.min(A,C),q=Math.abs(M-_),w=Math.abs(C-A);return{...g,geometry:{x:U,y:W,w:q,h:w,bounds:{minX:U,minY:W,maxX:U+q,maxY:W+w}}}},f=`rect-mask-${Math.random().toString(36).substring(2,12)}`;function h(g){ue.call(this,e,g)}function p(g){ue.call(this,e,g)}function m(g){ue.call(this,e,g)}return e.$$set=g=>{"shape"in g&&n(0,s=g.shape),"computedStyle"in g&&n(1,r=g.computedStyle),"transform"in g&&n(2,l=g.transform),"viewportScale"in g&&n(3,a=g.viewportScale),"svgEl"in g&&n(4,u=g.svgEl)},e.$$.update=()=>{e.$$.dirty&1&&n(5,o=s.geometry),e.$$.dirty&40&&n(6,i=it(o.bounds,2/a))},[s,r,l,a,u,o,i,d,f,h,p,m]}class xn extends ge{constructor(t){super(),he(this,t,Os,Cs,re,{shape:0,computedStyle:1,transform:2,viewportScale:3,svgEl:4})}}var $n=Object.prototype.hasOwnProperty;function Ht(e,t){var n,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((o=e.length)===t.length)for(;o--&&Ht(e[o],t[o]););return o===-1}if(!n||typeof e=="object"){o=0;for(n in e)if($n.call(e,n)&&++o&&!$n.call(t,n)||!(n in t)||!Ht(e[n],t[n]))return!1;return Object.keys(t).length===o}}return e!==e&&t!==t}const Ds=12,Rs=(e,t)=>e.polygons.reduce((n,o,i)=>{const s=o.rings.reduce((r,l,a)=>{const u=l.points.map((d,f)=>{const h=f===l.points.length-1?l.points[0]:l.points[f+1],p=(d[0]+h[0])/2,m=(d[1]+h[1])/2,k=Math.sqrt(Math.pow(h[0]-p,2)+Math.pow(h[1]-m,2))>Ds/t;return{point:[p,m],visible:k,elementIdx:i,ringIdx:a,pointIdx:f}});return[...r,...u]},[]);return[...n,...s]},[]);function Gt(e){const t=e.slice(),n=t[10][t[6]];return t[29]=n.point,t}function eo(e,t,n){const o=e.slice();return o[30]=t[n],o[32]=n,o}function to(e,t,n){const o=e.slice();return o[33]=t[n],o[35]=n,o}function no(e,t,n){const o=e.slice();return o[29]=t[n],o[37]=n,o}function jt(e){const t=e.slice(),n=t[10][t[6]];return t[29]=n.point,t}function zt(e){const t=e.slice(),n=t[10][t[6]];return t[29]=n.point,t}function oo(e){let t,n,o,i;return{c(){t=L("circle"),c(t,"cx",n=e[29][0]),c(t,"cy",o=e[29][1]),c(t,"r",i=rt/e[3]),c(t,"class","svelte-1vxo6dc")},m(s,r){N(s,t,r)},p(s,r){r[0]&1088&&n!==(n=s[29][0])&&c(t,"cx",n),r[0]&1088&&o!==(o=s[29][1])&&c(t,"cy",o),r[0]&8&&i!==(i=rt/s[3])&&c(t,"r",i)},d(s){s&&R(t)}}}function io(e){let t,n,o,i,s,r,l,a,u,d;return{c(){t=L("mask"),n=L("rect"),l=L("circle"),c(n,"x",o=e[9].x),c(n,"y",i=e[9].y),c(n,"width",s=e[9].w),c(n,"height",r=e[9].h),c(n,"class","svelte-1vxo6dc"),c(l,"cx",a=e[29][0]),c(l,"cy",u=e[29][1]),c(l,"r",d=rt/e[3]),c(l,"class","svelte-1vxo6dc"),c(t,"id",`${e[18]}-${e[32]}-inner`),c(t,"class","a9s-multipolygon-editor-mask svelte-1vxo6dc")},m(f,h){N(f,t,h),F(t,n),F(t,l)},p(f,h){h[0]&512&&o!==(o=f[9].x)&&c(n,"x",o),h[0]&512&&i!==(i=f[9].y)&&c(n,"y",i),h[0]&512&&s!==(s=f[9].w)&&c(n,"width",s),h[0]&512&&r!==(r=f[9].h)&&c(n,"height",r),h[0]&1088&&a!==(a=f[29][0])&&c(l,"cx",a),h[0]&1088&&u!==(u=f[29][1])&&c(l,"cy",u),h[0]&8&&d!==(d=rt/f[3])&&c(l,"r",d)},d(f){f&&R(t)}}}function so(e){let t,n;function o(...i){return e[19](e[32],e[35],e[37],...i)}return t=new Xe({props:{class:"a9s-corner-handle",x:e[29][0],y:e[29][1],scale:e[3],selected:e[8].some(o)}}),t.$on("pointerenter",e[11]),t.$on("pointerleave",e[12]),t.$on("pointerdown",e[14]),t.$on("pointerdown",function(){ie(e[28](`HANDLE-${e[32]}-${e[35]}-${e[37]}`))&&e[28](`HANDLE-${e[32]}-${e[35]}-${e[37]}`).apply(this,arguments)}),t.$on("pointerup",e[15](e[32],e[35],e[37])),{c(){ce(t.$$.fragment)},m(i,s){le(t,i,s),n=!0},p(i,s){e=i;const r={};s[0]&32&&(r.x=e[29][0]),s[0]&32&&(r.y=e[29][1]),s[0]&8&&(r.scale=e[3]),s[0]&256&&(r.selected=e[8].some(o)),t.$set(r)},i(i){n||(B(t.$$.fragment,i),n=!0)},o(i){G(t.$$.fragment,i),n=!1},d(i){ae(t,i)}}}function ro(e){let t,n,o=ve(e[33].points),i=[];for(let r=0;r<o.length;r+=1)i[r]=so(no(e,o,r));const s=r=>G(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();t=ke()},m(r,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,l);N(r,t,l),n=!0},p(r,l){if(l[0]&268491048){o=ve(r[33].points);let a;for(a=0;a<o.length;a+=1){const u=no(r,o,a);i[a]?(i[a].p(u,l),B(i[a],1)):(i[a]=so(u),i[a].c(),B(i[a],1),i[a].m(t.parentNode,t))}for(be(),a=o.length;a<i.length;a+=1)s(a);Ee()}},i(r){if(!n){for(let l=0;l<o.length;l+=1)B(i[l]);n=!0}},o(r){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)G(i[l]);n=!1},d(r){r&&R(t),Ne(i,r)}}}function lo(e){let t,n,o,i,s,r,l,a,u,d,f,h,p,m,g,k,E,S=e[6]!==void 0&&!e[7]&&oo(zt(e)),_=e[6]!==void 0&&!e[7]&&io(jt(e)),A=ve(e[30].rings),M=[];for(let T=0;T<A.length;T+=1)M[T]=ro(to(e,A,T));const C=T=>G(M[T],1,1,()=>{M[T]=null});return{c(){t=L("g"),n=L("defs"),o=L("mask"),i=L("rect"),u=L("path"),S&&S.c(),_&&_.c(),f=L("path"),p=L("path");for(let T=0;T<M.length;T+=1)M[T].c();c(i,"x",s=e[9].x),c(i,"y",r=e[9].y),c(i,"width",l=e[9].w),c(i,"height",a=e[9].h),c(i,"class","svelte-1vxo6dc"),c(u,"d",d=Pe(e[30])),c(u,"class","svelte-1vxo6dc"),c(o,"id",`${e[18]}-${e[32]}-outer`),c(o,"class","a9s-multipolygon-editor-mask svelte-1vxo6dc"),c(f,"class","a9s-outer"),c(f,"mask",`url(#${e[18]}-${e[32]}-outer)`),c(f,"fill-rule","evenodd"),c(f,"d",h=Pe(e[30])),c(p,"class","a9s-inner"),c(p,"mask",`url(#${e[18]}-${e[32]}-inner)`),c(p,"style",e[1]),c(p,"fill-rule","evenodd"),c(p,"d",m=Pe(e[30]))},m(T,V){N(T,t,V),F(t,n),F(n,o),F(o,i),F(o,u),S&&S.m(o,null),_&&_.m(n,null),F(t,f),F(t,p);for(let U=0;U<M.length;U+=1)M[U]&&M[U].m(t,null);g=!0,k||(E=[J(f,"pointerup",e[13]),J(f,"pointerdown",function(){ie(e[28]("SHAPE"))&&e[28]("SHAPE").apply(this,arguments)}),J(p,"pointerup",e[13]),J(p,"pointerdown",function(){ie(e[28]("SHAPE"))&&e[28]("SHAPE").apply(this,arguments)})],k=!0)},p(T,V){if(e=T,(!g||V[0]&512&&s!==(s=e[9].x))&&c(i,"x",s),(!g||V[0]&512&&r!==(r=e[9].y))&&c(i,"y",r),(!g||V[0]&512&&l!==(l=e[9].w))&&c(i,"width",l),(!g||V[0]&512&&a!==(a=e[9].h))&&c(i,"height",a),(!g||V[0]&32&&d!==(d=Pe(e[30])))&&c(u,"d",d),e[6]!==void 0&&!e[7]?S?S.p(zt(e),V):(S=oo(zt(e)),S.c(),S.m(o,null)):S&&(S.d(1),S=null),e[6]!==void 0&&!e[7]?_?_.p(jt(e),V):(_=io(jt(e)),_.c(),_.m(n,null)):_&&(_.d(1),_=null),(!g||V[0]&32&&h!==(h=Pe(e[30])))&&c(f,"d",h),(!g||V[0]&2)&&c(p,"style",e[1]),(!g||V[0]&32&&m!==(m=Pe(e[30])))&&c(p,"d",m),V[0]&268491048){A=ve(e[30].rings);let U;for(U=0;U<A.length;U+=1){const W=to(e,A,U);M[U]?(M[U].p(W,V),B(M[U],1)):(M[U]=ro(W),M[U].c(),B(M[U],1),M[U].m(t,null))}for(be(),U=A.length;U<M.length;U+=1)C(U);Ee()}},i(T){if(!g){for(let V=0;V<A.length;V+=1)B(M[V]);g=!0}},o(T){M=M.filter(Boolean);for(let V=0;V<M.length;V+=1)G(M[V]);g=!1},d(T){T&&R(t),S&&S.d(),_&&_.d(),Ne(M,T),k=!1,Ae(E)}}}function ao(e){let t,n;return t=new Yt({props:{x:e[29][0],y:e[29][1],scale:e[3]}}),t.$on("pointerdown",function(){ie(e[17](e[6]))&&e[17](e[6]).apply(this,arguments)}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){e=o;const s={};i[0]&1088&&(s.x=e[29][0]),i[0]&1088&&(s.y=e[29][1]),i[0]&8&&(s.scale=e[3]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function Ns(e){let t,n,o,i=ve(e[5].polygons),s=[];for(let a=0;a<i.length;a+=1)s[a]=lo(eo(e,i,a));const r=a=>G(s[a],1,1,()=>{s[a]=null});let l=e[6]!==void 0&&!e[7]&&ao(Gt(e));return{c(){for(let a=0;a<s.length;a+=1)s[a].c();t=we(),l&&l.c(),n=ke()},m(a,u){for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(a,u);N(a,t,u),l&&l.m(a,u),N(a,n,u),o=!0},p(a,u){if(u[0]&268763114){i=ve(a[5].polygons);let d;for(d=0;d<i.length;d+=1){const f=eo(a,i,d);s[d]?(s[d].p(f,u),B(s[d],1)):(s[d]=lo(f),s[d].c(),B(s[d],1),s[d].m(t.parentNode,t))}for(be(),d=i.length;d<s.length;d+=1)r(d);Ee()}a[6]!==void 0&&!a[7]?l?(l.p(Gt(a),u),u[0]&192&&B(l,1)):(l=ao(Gt(a)),l.c(),B(l,1),l.m(n.parentNode,n)):l&&(be(),G(l,1,1,()=>{l=null}),Ee())},i(a){if(!o){for(let u=0;u<i.length;u+=1)B(s[u]);B(l),o=!0}},o(a){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)G(s[u]);G(l),o=!1},d(a){a&&(R(t),R(n)),Ne(s,a),l&&l.d(a)}}}function Us(e){let t,n;return t=new yt({props:{shape:e[0],transform:e[2],editor:e[16],svgEl:e[4],$$slots:{default:[Ns,({grab:o})=>({28:o}),({grab:o})=>[o?268435456:0]]},$$scope:{ctx:e}}}),t.$on("change",e[20]),t.$on("grab",e[21]),t.$on("release",e[22]),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&1&&(s.shape=o[0]),i[0]&4&&(s.transform=o[2]),i[0]&16&&(s.svgEl=o[4]),i[0]&268437482|i[1]&128&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}const Ys=250,Bs=1e3,rt=4.5;function Vs(e,t,n){let o,i,s;const r=Ce();let{shape:l}=t,{computedStyle:a}=t,{transform:u}=t,{viewportScale:d=1}=t,{svgEl:f}=t,h,p=!1,m,g=[];const k=()=>n(7,p=!0),E=()=>n(7,p=!1),S=b=>{if(g.length>0||!i.some($=>$.visible)){n(6,h=void 0);return}const[I,P]=u.elementToImage(b.offsetX,b.offsetY),D=$=>Math.pow($[0]-I,2)+Math.pow($[1]-P,2),z=bn(o).reduce(($,oe)=>D(oe)<D($)?oe:$),H=i.filter($=>$.visible).reduce(($,oe)=>D(oe.point)<D($.point)?oe:$),x=Math.pow(Bs/d,2);D(z)<x||D(H.point)<x?n(6,h=i.indexOf(H)):n(6,h=void 0)},_=()=>{document.activeElement!==f&&f.focus()},A=()=>{n(8,g=[]),_()},M=b=>{n(7,p=!0),b.preventDefault(),b.stopPropagation(),m=performance.now()},C=(b,I,P)=>D=>{if(!m||Le||performance.now()-m>Ys)return;const z=x=>x.polygon===b&&x.ring===I&&x.point===P,H=g.some(z);D.metaKey||D.ctrlKey||D.shiftKey?H?n(8,g=g.filter(x=>!z(x))):n(8,g=[...g,{polygon:b,ring:I,point:P}]):H&&g.length>1?n(8,g=[{polygon:b,ring:I,point:P}]):H?n(8,g=[]):n(8,g=[{polygon:b,ring:I,point:P}]),_()},T=(b,I,P)=>{_();const D=b.geometry.polygons;let z;if(I==="SHAPE")z=D.map(H=>{const x=H.rings.map(($,oe)=>({points:$.points.map((Se,Me)=>[Se[0]+P[0],Se[1]+P[1]])})),Z=fe(x[0].points);return{rings:x,bounds:Z}});else{const[H,x,Z,$]=I.split("-").map(oe=>parseInt(oe));z=D.map((oe,se)=>{if(se===x){const Se=oe.rings.map((X,de)=>de===Z?{points:X.points.map((ye,_e)=>_e===$?[ye[0]+P[0],ye[1]+P[1]]:ye)}:X),Me=fe(Se[0].points);return{rings:Se,bounds:Me}}else return oe})}return{...b,geometry:{polygons:z,bounds:tt(z)}}},V=b=>async I=>{I.stopPropagation();const P=i[b],D=o.polygons.map((H,x)=>{if(x===P.elementIdx){const Z=H.rings.map((oe,se)=>se===P.ringIdx?{points:[...oe.points.slice(0,P.pointIdx+1),P.point,...oe.points.slice(P.pointIdx+1)]}:oe),$=fe(Z[0].points);return{rings:Z,bounds:$}}else return H});r("change",{...l,geometry:{polygons:D,bounds:tt(D)}}),await mn();const z=[...document.querySelectorAll(".a9s-handle")][b+1];if(z!=null&&z.firstChild){const H=new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,clientX:I.clientX,clientY:I.clientY,pointerId:I.pointerId,pointerType:I.pointerType,isPrimary:I.isPrimary,buttons:I.buttons});z.firstChild.dispatchEvent(H)}},U=()=>{const b=o.polygons.map((P,D)=>{if(g.some(H=>H.polygon===D)){const H=P.rings.map((Z,$)=>{const oe=g.filter(se=>se.polygon===D&&se.ring===$);return oe.length&&Z.points.length-oe.length>=3?{points:Z.points.filter((Se,Me)=>!oe.some(X=>X.point===Me))}:Z}),x=fe(H[0].points);return{rings:H,bounds:x}}else return P});!Ht(o.polygons,b)&&(r("change",{...l,geometry:{polygons:b,bounds:tt(b)}}),n(8,g=[]))};Ue(()=>{if(Le)return;const b=I=>{(I.key==="Delete"||I.key==="Backspace")&&(I.preventDefault(),U())};return f.addEventListener("pointermove",S),f.addEventListener("keydown",b),()=>{f.removeEventListener("pointermove",S),f.removeEventListener("keydown",b)}});const W=`polygon-mask-${Math.random().toString(36).substring(2,12)}`,q=(b,I,P,{polygon:D,ring:z,point:H})=>D===b&&z===I&&H===P;function w(b){ue.call(this,e,b)}function v(b){ue.call(this,e,b)}function y(b){ue.call(this,e,b)}return e.$$set=b=>{"shape"in b&&n(0,l=b.shape),"computedStyle"in b&&n(1,a=b.computedStyle),"transform"in b&&n(2,u=b.transform),"viewportScale"in b&&n(3,d=b.viewportScale),"svgEl"in b&&n(4,f=b.svgEl)},e.$$.update=()=>{e.$$.dirty[0]&1&&n(5,o=l.geometry),e.$$.dirty[0]&40&&n(10,i=Le?[]:Rs(o,d)),e.$$.dirty[0]&40&&n(9,s=it(o.bounds,rt/d))},[l,a,u,d,f,o,h,p,g,s,i,k,E,A,M,C,T,V,W,q,w,v,y]}class Xs extends ge{constructor(t){super(),he(this,t,Vs,Us,re,{shape:0,computedStyle:1,transform:2,viewportScale:3,svgEl:4},null,[-1,-1])}}const co=new Map([[Q.RECTANGLE,xn],[Q.POLYGON,Qn],[Q.MULTIPOLYGON,Xs]]),uo=e=>co.get(e.type),fo=(e,t)=>co.set(e,t);function Hs(e,t,n){let o;const i=Ce();let{annotation:s}=t,{editor:r}=t,{style:l}=t,{target:a}=t,{transform:u}=t,{viewportScale:d}=t,f;return Ue(()=>(n(6,f=new r({target:a,props:{shape:s.target.selector,computedStyle:o,transform:u,viewportScale:d,svgEl:a.closest("svg")}})),f.$on("change",h=>{f.$$set({shape:h.detail}),i("change",h.detail)}),f.$on("grab",h=>i("grab",h.detail)),f.$on("release",h=>i("release",h.detail)),()=>{f.$destroy()})),e.$$set=h=>{"annotation"in h&&n(0,s=h.annotation),"editor"in h&&n(1,r=h.editor),"style"in h&&n(2,l=h.style),"target"in h&&n(3,a=h.target),"transform"in h&&n(4,u=h.transform),"viewportScale"in h&&n(5,d=h.viewportScale)},e.$$.update=()=>{e.$$.dirty&5&&n(7,o=Ve(s,l)),e.$$.dirty&65&&s&&(f==null||f.$set({shape:s.target.selector})),e.$$.dirty&80&&f&&f.$set({transform:u}),e.$$.dirty&96&&f&&f.$set({viewportScale:d}),e.$$.dirty&192&&f&&o&&f.$set({computedStyle:o})},[s,r,l,a,u,d,f,o]}class ho extends ge{constructor(t){super(),he(this,t,Hs,null,re,{annotation:0,editor:1,style:2,target:3,transform:4,viewportScale:5})}}function Gs(e,t,n){const o=Ce();let{drawingMode:i}=t,{target:s}=t,{tool:r}=t,{transform:l}=t,{viewportScale:a}=t,u;return Ue(()=>{const d=s.closest("svg"),f=[],h=(p,m,g)=>{d==null||d.addEventListener(p,m,g),f.push(()=>d==null?void 0:d.removeEventListener(p,m,g))};return n(5,u=new r({target:s,props:{addEventListener:h,drawingMode:i,transform:l,viewportScale:a}})),u.$on("create",p=>o("create",p.detail)),()=>{f.forEach(p=>p()),u.$destroy()}}),e.$$set=d=>{"drawingMode"in d&&n(0,i=d.drawingMode),"target"in d&&n(1,s=d.target),"tool"in d&&n(2,r=d.tool),"transform"in d&&n(3,l=d.transform),"viewportScale"in d&&n(4,a=d.viewportScale)},e.$$.update=()=>{e.$$.dirty&40&&u&&u.$set({transform:l}),e.$$.dirty&48&&u&&u.$set({viewportScale:a})},[i,s,r,l,a,u]}class go extends ge{constructor(t){super(),he(this,t,Gs,null,re,{drawingMode:0,target:1,tool:2,transform:3,viewportScale:4})}}function mo(e){let t,n,o,i,s,r,l,a,u,d;return{c(){t=L("defs"),n=L("mask"),o=L("rect"),a=L("rect"),u=L("rect"),d=L("rect"),c(o,"class","rect-mask-bg svelte-1a76qe7"),c(o,"x",i=e[1]-e[5]),c(o,"y",s=e[2]-e[5]),c(o,"width",r=e[3]+2*e[5]),c(o,"height",l=e[4]+2*e[5]),c(a,"class","rect-mask-fg svelte-1a76qe7"),c(a,"x",e[1]),c(a,"y",e[2]),c(a,"width",e[3]),c(a,"height",e[4]),c(n,"id",e[6]),c(n,"class","a9s-rubberband-rectangle-mask svelte-1a76qe7"),c(u,"class","a9s-outer"),c(u,"mask",`url(#${e[6]})`),c(u,"x",e[1]),c(u,"y",e[2]),c(u,"width",e[3]),c(u,"height",e[4]),c(d,"class","a9s-inner"),c(d,"x",e[1]),c(d,"y",e[2]),c(d,"width",e[3]),c(d,"height",e[4])},m(f,h){N(f,t,h),F(t,n),F(n,o),F(n,a),N(f,u,h),N(f,d,h)},p(f,h){h&34&&i!==(i=f[1]-f[5])&&c(o,"x",i),h&36&&s!==(s=f[2]-f[5])&&c(o,"y",s),h&40&&r!==(r=f[3]+2*f[5])&&c(o,"width",r),h&48&&l!==(l=f[4]+2*f[5])&&c(o,"height",l),h&2&&c(a,"x",f[1]),h&4&&c(a,"y",f[2]),h&8&&c(a,"width",f[3]),h&16&&c(a,"height",f[4]),h&2&&c(u,"x",f[1]),h&4&&c(u,"y",f[2]),h&8&&c(u,"width",f[3]),h&16&&c(u,"height",f[4]),h&2&&c(d,"x",f[1]),h&4&&c(d,"y",f[2]),h&8&&c(d,"width",f[3]),h&16&&c(d,"height",f[4])},d(f){f&&(R(t),R(u),R(d))}}}function js(e){let t,n=e[0]&&mo(e);return{c(){t=L("g"),n&&n.c(),c(t,"class","a9s-annotation a9s-rubberband")},m(o,i){N(o,t,i),n&&n.m(t,null)},p(o,[i]){o[0]?n?n.p(o,i):(n=mo(o),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i:j,o:j,d(o){o&&R(t),n&&n.d()}}}function zs(e,t,n){let o;const i=Ce();let{addEventListener:s}=t,{drawingMode:r}=t,{transform:l}=t,{viewportScale:a=1}=t,u,d,f,h,p,m,g;const k=M=>{const C=M;u=performance.now(),r==="drag"&&(n(0,d=l.elementToImage(C.offsetX,C.offsetY)),f=d,n(1,h=d[0]),n(2,p=d[1]),n(3,m=1),n(4,g=1))},E=M=>{const C=M;d&&(f=l.elementToImage(C.offsetX,C.offsetY),n(1,h=Math.min(f[0],d[0])),n(2,p=Math.min(f[1],d[1])),n(3,m=Math.abs(f[0]-d[0])),n(4,g=Math.abs(f[1]-d[1])))},S=M=>{const C=M,T=performance.now()-u;if(r==="click"){if(T>300)return;d?_():(n(0,d=l.elementToImage(C.offsetX,C.offsetY)),f=d,n(1,h=d[0]),n(2,p=d[1]),n(3,m=1),n(4,g=1))}else d&&(T>300||m*g>100?(C.stopPropagation(),_()):(n(0,d=void 0),f=void 0))},_=()=>{if(m*g>15){const M={type:Q.RECTANGLE,geometry:{bounds:{minX:h,minY:p,maxX:h+m,maxY:p+g},x:h,y:p,w:m,h:g}};i("create",M)}n(0,d=void 0),f=void 0};Ue(()=>{s("pointerdown",k),s("pointermove",E),s("pointerup",S,!0)});const A=`rect-mask-${Math.random().toString(36).substring(2,12)}`;return e.$$set=M=>{"addEventListener"in M&&n(7,s=M.addEventListener),"drawingMode"in M&&n(8,r=M.drawingMode),"transform"in M&&n(9,l=M.transform),"viewportScale"in M&&n(10,a=M.viewportScale)},e.$$.update=()=>{e.$$.dirty&1024&&n(5,o=2/a)},[d,h,p,m,g,o,A,s,r,l,a]}class po extends ge{constructor(t){super(),he(this,t,zs,js,re,{addEventListener:7,drawingMode:8,transform:9,viewportScale:10})}}function Ft(e){const t=e.slice(),n=t[2].map(o=>o.join(",")).join(" ");return t[19]=n,t}function yo(e){let t,n,o,i,s,r,l,a,u,d,f,h,p,m,g=e[1]&&_o(e);return{c(){t=L("defs"),n=L("mask"),o=L("rect"),a=L("polygon"),d=L("polygon"),h=L("polygon"),g&&g.c(),m=ke(),c(o,"x",i=e[3].x),c(o,"y",s=e[3].y),c(o,"width",r=e[3].w),c(o,"height",l=e[3].h),c(o,"class","svelte-18wrg3t"),c(a,"points",u=e[19]),c(a,"class","svelte-18wrg3t"),c(n,"id",e[5]),c(n,"class","a9s-rubberband-polygon-mask svelte-18wrg3t"),c(d,"class","a9s-outer"),c(d,"mask",`url(#${e[5]})`),c(d,"points",f=e[19]),c(h,"class","a9s-inner"),c(h,"points",p=e[19])},m(k,E){N(k,t,E),F(t,n),F(n,o),F(n,a),N(k,d,E),N(k,h,E),g&&g.m(k,E),N(k,m,E)},p(k,E){E&8&&i!==(i=k[3].x)&&c(o,"x",i),E&8&&s!==(s=k[3].y)&&c(o,"y",s),E&8&&r!==(r=k[3].w)&&c(o,"width",r),E&8&&l!==(l=k[3].h)&&c(o,"height",l),E&4&&u!==(u=k[19])&&c(a,"points",u),E&4&&f!==(f=k[19])&&c(d,"points",f),E&4&&p!==(p=k[19])&&c(h,"points",p),k[1]?g?g.p(k,E):(g=_o(k),g.c(),g.m(m.parentNode,m)):g&&(g.d(1),g=null)},d(k){k&&(R(t),R(d),R(h),R(m)),g&&g.d(k)}}}function _o(e){let t,n,o;return{c(){t=L("circle"),c(t,"class","a9s-handle svelte-18wrg3t"),c(t,"cx",n=e[0][0][0]),c(t,"cy",o=e[0][0][1]),c(t,"r",e[4])},m(i,s){N(i,t,s)},p(i,s){s&1&&n!==(n=i[0][0][0])&&c(t,"cx",n),s&1&&o!==(o=i[0][0][1])&&c(t,"cy",o),s&16&&c(t,"r",i[4])},d(i){i&&R(t)}}}function Fs(e){let t,n=e[3]&&yo(Ft(e));return{c(){t=L("g"),n&&n.c(),c(t,"class","a9s-annotation a9s-rubberband")},m(o,i){N(o,t,i),n&&n.m(t,null)},p(o,[i]){o[3]?n?n.p(Ft(o),i):(n=yo(Ft(o)),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i:j,o:j,d(o){o&&R(t),n&&n.d()}}}const qs=20,Ks=1500;function Ws(e,t,n){let o,i,s;const r=Ce();let{addEventListener:l}=t,{drawingMode:a}=t,{transform:u}=t,{viewportScale:d=1}=t,f,h=[],p,m,g=!1;const k=C=>{const T=C,{timeStamp:V,offsetX:U,offsetY:W}=T;if(f={timeStamp:V,offsetX:U,offsetY:W},a==="drag"&&h.length===0){const q=u.elementToImage(T.offsetX,T.offsetY);h.push(q),n(10,p=q)}},E=C=>{const T=C;if(m&&clearTimeout(m),h.length>0){if(n(10,p=u.elementToImage(T.offsetX,T.offsetY)),h.length>2){const V=et(p,h[0])*d;n(1,g=V<qs)}T.pointerType==="touch"&&(m=setTimeout(()=>{_()},Ks))}},S=C=>{const T=C;if(m&&clearTimeout(m),a==="click"){const V=T.timeStamp-f.timeStamp,U=et([f.offsetX,f.offsetY],[T.offsetX,T.offsetY]);if(V>300||U>15)return;if(g)A();else if(h.length===0){const W=u.elementToImage(T.offsetX,T.offsetY);h.push(W),n(10,p=W)}else h.push(p)}else{if(h.length===1&&et(h[0],p)<=4){n(0,h=[]),n(10,p=void 0);return}T.stopImmediatePropagation(),g?A():h.push(p)}},_=()=>{if(!p)return;const C=h.slice(0,-1);if(C.length<3)return;const T={type:Q.POLYGON,geometry:{bounds:fe(h),points:C}};dt(T)>4&&(n(0,h=[]),n(10,p=void 0),r("create",T))},A=()=>{const C={type:Q.POLYGON,geometry:{bounds:fe(h),points:[...h]}};n(0,h=[]),n(10,p=void 0),r("create",C)};Ue(()=>{l("pointerdown",k,!0),l("pointermove",E),l("pointerup",S,!0),l("dblclick",_,!0)});const M=`polygon-mask-${Math.random().toString(36).substring(2,12)}`;return e.$$set=C=>{"addEventListener"in C&&n(6,l=C.addEventListener),"drawingMode"in C&&n(7,a=C.drawingMode),"transform"in C&&n(8,u=C.transform),"viewportScale"in C&&n(9,d=C.viewportScale)},e.$$.update=()=>{e.$$.dirty&512&&n(4,o=4/d),e.$$.dirty&1027&&n(2,i=p?g?h:[...h,p]:[]),e.$$.dirty&516&&n(3,s=i.length>0?it(fe(i),2/d):void 0)},[h,g,i,s,o,M,l,a,u,d,p]}class Zs extends ge{constructor(t){super(),he(this,t,Ws,Fs,re,{addEventListener:6,drawingMode:7,transform:8,viewportScale:9})}}const qt=new Map([["rectangle",{tool:po}],["polygon",{tool:Zs}]]),Kt=()=>[...qt.keys()],Wt=e=>qt.get(e),wo=(e,t,n={})=>qt.set(e,{tool:t,opts:n});function Js(e){let t,n,o,i,s;return{c(){t=L("g"),n=L("ellipse"),i=L("ellipse"),c(n,"class","a9s-outer"),c(n,"style",o=e[1]?"display:none;":void 0),c(n,"cx",e[2]),c(n,"cy",e[3]),c(n,"rx",e[4]),c(n,"ry",e[5]),c(i,"class","a9s-inner"),c(i,"style",e[1]),c(i,"cx",e[2]),c(i,"cy",e[3]),c(i,"rx",e[4]),c(i,"ry",e[5]),c(t,"class","a9s-annotation"),c(t,"data-id",s=e[0].id)},m(r,l){N(r,t,l),F(t,n),F(t,i)},p(r,[l]){l&2&&o!==(o=r[1]?"display:none;":void 0)&&c(n,"style",o),l&2&&c(i,"style",r[1]),l&1&&s!==(s=r[0].id)&&c(t,"data-id",s)},i:j,o:j,d(r){r&&R(t)}}}function Qs(e,t,n){let o,{annotation:i}=t,{geom:s}=t,{style:r}=t;const{cx:l,cy:a,rx:u,ry:d}=s;return e.$$set=f=>{"annotation"in f&&n(0,i=f.annotation),"geom"in f&&n(6,s=f.geom),"style"in f&&n(7,r=f.style)},e.$$.update=()=>{e.$$.dirty&129&&n(1,o=Ve(i,r))},[i,o,l,a,u,d,s,r]}class xs extends ge{constructor(t){super(),he(this,t,Qs,Js,re,{annotation:0,geom:6,style:7})}}function $s(e){let t,n,o,i,s;return{c(){t=L("g"),n=L("line"),i=L("line"),c(n,"class","a9s-outer"),c(n,"style",o=e[1]?"display:none;":void 0),c(n,"x1",e[2]),c(n,"y1",e[3]),c(n,"x2",e[4]),c(n,"y2",e[5]),c(i,"class","a9s-inner"),c(i,"style",e[1]),c(i,"x1",e[2]),c(i,"y1",e[3]),c(i,"x2",e[4]),c(i,"y2",e[5]),c(t,"class","a9s-annotation"),c(t,"data-id",s=e[0].id)},m(r,l){N(r,t,l),F(t,n),F(t,i)},p(r,[l]){l&2&&o!==(o=r[1]?"display:none;":void 0)&&c(n,"style",o),l&2&&c(i,"style",r[1]),l&1&&s!==(s=r[0].id)&&c(t,"data-id",s)},i:j,o:j,d(r){r&&R(t)}}}function er(e,t,n){let o,{annotation:i}=t,{geom:s}=t,{style:r}=t;const{points:l}=s,[[a,u],[d,f]]=l;return e.$$set=h=>{"annotation"in h&&n(0,i=h.annotation),"geom"in h&&n(6,s=h.geom),"style"in h&&n(7,r=h.style)},e.$$.update=()=>{e.$$.dirty&129&&n(1,o=Ve(i,r))},[i,o,a,u,d,f,s,r]}class tr extends ge{constructor(t){super(),he(this,t,er,$s,re,{annotation:0,geom:6,style:7})}}function bo(e,t,n){const o=e.slice();return o[5]=t[n],o}function Eo(e){let t,n,o;return{c(){t=L("path"),o=L("path"),c(t,"class","a9s-outer"),c(t,"style",n=e[1]?"display:none;":void 0),c(t,"fill-rule","evenodd"),c(t,"d",Pe(e[5])),c(o,"class","a9s-inner"),c(o,"style",e[1]),c(o,"fill-rule","evenodd"),c(o,"d",Pe(e[5]))},m(i,s){N(i,t,s),N(i,o,s)},p(i,s){s&2&&n!==(n=i[1]?"display:none;":void 0)&&c(t,"style",n),s&2&&c(o,"style",i[1])},d(i){i&&(R(t),R(o))}}}function nr(e){let t,n,o=ve(e[2]),i=[];for(let s=0;s<o.length;s+=1)i[s]=Eo(bo(e,o,s));return{c(){t=L("g");for(let s=0;s<i.length;s+=1)i[s].c();c(t,"class","a9s-annotation"),c(t,"data-id",n=e[0].id)},m(s,r){N(s,t,r);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(t,null)},p(s,[r]){if(r&6){o=ve(s[2]);let l;for(l=0;l<o.length;l+=1){const a=bo(s,o,l);i[l]?i[l].p(a,r):(i[l]=Eo(a),i[l].c(),i[l].m(t,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=o.length}r&1&&n!==(n=s[0].id)&&c(t,"data-id",n)},i:j,o:j,d(s){s&&R(t),Ne(i,s)}}}function or(e,t,n){let o,{annotation:i}=t,{geom:s}=t,{style:r}=t;const{polygons:l}=s;return e.$$set=a=>{"annotation"in a&&n(0,i=a.annotation),"geom"in a&&n(3,s=a.geom),"style"in a&&n(4,r=a.style)},e.$$.update=()=>{e.$$.dirty&17&&n(1,o=Ve(i,r))},[i,o,l,s,r]}class ir extends ge{constructor(t){super(),he(this,t,or,nr,re,{annotation:0,geom:3,style:4})}}function sr(e){let t,n,o,i,s;return{c(){t=L("g"),n=L("polygon"),i=L("polygon"),c(n,"class","a9s-outer"),c(n,"style",o=e[1]?"display:none;":void 0),c(n,"points",e[2].map(rr).join(" ")),c(i,"class","a9s-inner"),c(i,"style",e[1]),c(i,"points",e[2].map(lr).join(" ")),c(t,"class","a9s-annotation"),c(t,"data-id",s=e[0].id)},m(r,l){N(r,t,l),F(t,n),F(t,i)},p(r,[l]){l&2&&o!==(o=r[1]?"display:none;":void 0)&&c(n,"style",o),l&2&&c(i,"style",r[1]),l&1&&s!==(s=r[0].id)&&c(t,"data-id",s)},i:j,o:j,d(r){r&&R(t)}}}const rr=e=>e.join(","),lr=e=>e.join(",");function ar(e,t,n){let o,{annotation:i}=t,{geom:s}=t,{style:r}=t;const{points:l}=s;return e.$$set=a=>{"annotation"in a&&n(0,i=a.annotation),"geom"in a&&n(3,s=a.geom),"style"in a&&n(4,r=a.style)},e.$$.update=()=>{e.$$.dirty&17&&n(1,o=Ve(i,r))},[i,o,l,s,r]}class cr extends ge{constructor(t){super(),he(this,t,ar,sr,re,{annotation:0,geom:3,style:4})}}function ur(e){let t,n,o,i,s,r,l;return{c(){t=L("g"),n=L("path"),s=L("path"),c(n,"class",o=He(`a9s-outer ${e[1]}`)+" svelte-1w0132l"),c(n,"style",i=e[3]?"display:none;":void 0),c(n,"d",e[2]),c(s,"class",r=He(`a9s-inner ${e[1]}`)+" svelte-1w0132l"),c(s,"style",e[3]),c(s,"d",e[2]),c(t,"class","a9s-annotation"),c(t,"data-id",l=e[0].id)},m(a,u){N(a,t,u),F(t,n),F(t,s)},p(a,[u]){u&2&&o!==(o=He(`a9s-outer ${a[1]}`)+" svelte-1w0132l")&&c(n,"class",o),u&8&&i!==(i=a[3]?"display:none;":void 0)&&c(n,"style",i),u&4&&c(n,"d",a[2]),u&2&&r!==(r=He(`a9s-inner ${a[1]}`)+" svelte-1w0132l")&&c(s,"class",r),u&8&&c(s,"style",a[3]),u&4&&c(s,"d",a[2]),u&1&&l!==(l=a[0].id)&&c(t,"data-id",l)},i:j,o:j,d(a){a&&R(t)}}}function fr(e,t,n){let o,i,s,{annotation:r}=t,{geom:l}=t,{style:a}=t;return e.$$set=u=>{"annotation"in u&&n(0,r=u.annotation),"geom"in u&&n(4,l=u.geom),"style"in u&&n(5,a=u.style)},e.$$.update=()=>{e.$$.dirty&33&&n(3,o=Ve(r,a)),e.$$.dirty&16&&n(2,i=It(l)),e.$$.dirty&16&&n(1,s=l.closed?"closed":"open")},[r,s,i,o,l,a]}class dr extends ge{constructor(t){super(),he(this,t,fr,ur,re,{annotation:0,geom:4,style:5})}}function hr(e){let t,n,o,i,s;return{c(){t=L("g"),n=L("rect"),i=L("rect"),c(n,"class","a9s-outer"),c(n,"style",o=e[5]?"display:none;":void 0),c(n,"x",e[4]),c(n,"y",e[3]),c(n,"width",e[2]),c(n,"height",e[1]),c(i,"class","a9s-inner"),c(i,"style",e[5]),c(i,"x",e[4]),c(i,"y",e[3]),c(i,"width",e[2]),c(i,"height",e[1]),c(t,"class","a9s-annotation"),c(t,"data-id",s=e[0].id)},m(r,l){N(r,t,l),F(t,n),F(t,i)},p(r,[l]){l&32&&o!==(o=r[5]?"display:none;":void 0)&&c(n,"style",o),l&16&&c(n,"x",r[4]),l&8&&c(n,"y",r[3]),l&4&&c(n,"width",r[2]),l&2&&c(n,"height",r[1]),l&32&&c(i,"style",r[5]),l&16&&c(i,"x",r[4]),l&8&&c(i,"y",r[3]),l&4&&c(i,"width",r[2]),l&2&&c(i,"height",r[1]),l&1&&s!==(s=r[0].id)&&c(t,"data-id",s)},i:j,o:j,d(r){r&&R(t)}}}function gr(e,t,n){let o,i,s,r,l,{annotation:a}=t,{geom:u}=t,{style:d}=t;return e.$$set=f=>{"annotation"in f&&n(0,a=f.annotation),"geom"in f&&n(6,u=f.geom),"style"in f&&n(7,d=f.style)},e.$$.update=()=>{e.$$.dirty&129&&n(5,o=Ve(a,d)),e.$$.dirty&64&&n(4,{x:i,y:s,w:r,h:l}=u,i,(n(3,s),n(6,u)),(n(2,r),n(6,u)),(n(1,l),n(6,u)))},[a,l,r,s,i,o,u,d]}class mr extends ge{constructor(t){super(),he(this,t,gr,hr,re,{annotation:0,geom:6,style:7})}}const pr={elementToImage:(e,t)=>[e,t]},vo=e=>({elementToImage:(t,n)=>{const o=e.getBoundingClientRect(),i=e.createSVGPoint();i.x=t+o.x,i.y=n+o.y;const{x:s,y:r}=i.matrixTransform(e.getScreenCTM().inverse());return[s,r]}}),yr=250,So=(e,t)=>{const n=Ce();let o;return{onPointerDown:()=>o=performance.now(),onPointerUp:r=>{if(performance.now()-o<yr){const{x:a,y:u}=Zt(r,e),d=Le?10:2,f=t.getAt(a,u,void 0,d);f?n("click",{originalEvent:r,annotation:f}):n("click",{originalEvent:r})}}}},Zt=(e,t)=>{const n=t.createSVGPoint(),o=t.getBoundingClientRect(),i=e.clientX-o.x,s=e.clientY-o.y,{left:r,top:l}=t.getBoundingClientRect();return n.x=i+r,n.y=s+l,n.matrixTransform(t.getScreenCTM().inverse())};function Ao(e,t,n){const o=e.slice();return o[39]=t[n],o}function ko(e,t,n){const o=e.slice();return o[42]=t[n],o}function Jt(e){const t=e.slice(),n=t[42].target.selector;return t[45]=n,t}function Mo(e){let t=e[42],n,o,i=To(e);return{c(){i.c(),n=ke()},m(s,r){i.m(s,r),N(s,n,r),o=!0},p(s,r){r[0]&131072&&re(t,t=s[42])?(be(),G(i,1,1,j),Ee(),i=To(s),i.c(),B(i,1),i.m(n.parentNode,n)):i.p(s,r)},i(s){o||(B(i),o=!0)},o(s){G(i),o=!1},d(s){s&&R(n),i.d(s)}}}function _r(e){let t,n;return t=new tr({props:{annotation:e[42],geom:e[45].geometry,style:e[1]}}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&131072&&(s.annotation=o[42]),i[0]&131072&&(s.geom=o[45].geometry),i[0]&2&&(s.style=o[1]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function wr(e){let t,n;return t=new dr({props:{annotation:e[42],geom:e[45].geometry,style:e[1]}}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&131072&&(s.annotation=o[42]),i[0]&131072&&(s.geom=o[45].geometry),i[0]&2&&(s.style=o[1]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function br(e){let t,n;return t=new ir({props:{annotation:e[42],geom:e[45].geometry,style:e[1]}}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&131072&&(s.annotation=o[42]),i[0]&131072&&(s.geom=o[45].geometry),i[0]&2&&(s.style=o[1]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function Er(e){let t,n;return t=new cr({props:{annotation:e[42],geom:e[45].geometry,style:e[1]}}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&131072&&(s.annotation=o[42]),i[0]&131072&&(s.geom=o[45].geometry),i[0]&2&&(s.style=o[1]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function vr(e){let t,n;return t=new mr({props:{annotation:e[42],geom:e[45].geometry,style:e[1]}}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&131072&&(s.annotation=o[42]),i[0]&131072&&(s.geom=o[45].geometry),i[0]&2&&(s.style=o[1]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function Sr(e){var o;let t,n;return t=new xs({props:{annotation:e[42],geom:(o=e[45])==null?void 0:o.geometry,style:e[1]}}),{c(){ce(t.$$.fragment)},m(i,s){le(t,i,s),n=!0},p(i,s){var l;const r={};s[0]&131072&&(r.annotation=i[42]),s[0]&131072&&(r.geom=(l=i[45])==null?void 0:l.geometry),s[0]&2&&(r.style=i[1]),t.$set(r)},i(i){n||(B(t.$$.fragment,i),n=!0)},o(i){G(t.$$.fragment,i),n=!1},d(i){ae(t,i)}}}function To(e){let t,n,o,i;const s=[Sr,vr,Er,br,wr,_r],r=[];function l(a,u){var d,f,h,p,m,g;return((d=a[45])==null?void 0:d.type)===Q.ELLIPSE?0:((f=a[45])==null?void 0:f.type)===Q.RECTANGLE?1:((h=a[45])==null?void 0:h.type)===Q.POLYGON?2:((p=a[45])==null?void 0:p.type)===Q.MULTIPOLYGON?3:((m=a[45])==null?void 0:m.type)===Q.POLYLINE?4:((g=a[45])==null?void 0:g.type)===Q.LINE?5:-1}return~(t=l(e))&&(n=r[t]=s[t](e)),{c(){n&&n.c(),o=ke()},m(a,u){~t&&r[t].m(a,u),N(a,o,u),i=!0},p(a,u){let d=t;t=l(a),t===d?~t&&r[t].p(a,u):(n&&(be(),G(r[d],1,1,()=>{r[d]=null}),Ee()),~t?(n=r[t],n?n.p(a,u):(n=r[t]=s[t](a),n.c()),B(n,1),n.m(o.parentNode,o)):n=null)},i(a){i||(B(n),i=!0)},o(a){G(n),i=!1},d(a){a&&R(o),~t&&r[t].d(a)}}}function Po(e){let t=nt(e[42])&&!e[10](e[42]),n,o,i=t&&Mo(Jt(e));return{c(){i&&i.c(),n=ke()},m(s,r){i&&i.m(s,r),N(s,n,r),o=!0},p(s,r){r[0]&132096&&(t=nt(s[42])&&!s[10](s[42])),t?i?(i.p(Jt(s),r),r[0]&132096&&B(i,1)):(i=Mo(Jt(s)),i.c(),B(i,1),i.m(n.parentNode,n)):i&&(be(),G(i,1,1,()=>{i=null}),Ee())},i(s){o||(B(i),o=!0)},o(s){G(i),o=!1},d(s){s&&R(n),i&&i.d(s)}}}function Lo(e){let t,n,o,i;const s=[kr,Ar],r=[];function l(a,u){return a[6]?0:a[15]&&a[0]?1:-1}return~(t=l(e))&&(n=r[t]=s[t](e)),{c(){n&&n.c(),o=ke()},m(a,u){~t&&r[t].m(a,u),N(a,o,u),i=!0},p(a,u){let d=t;t=l(a),t===d?~t&&r[t].p(a,u):(n&&(be(),G(r[d],1,1,()=>{r[d]=null}),Ee()),~t?(n=r[t],n?n.p(a,u):(n=r[t]=s[t](a),n.c()),B(n,1),n.m(o.parentNode,o)):n=null)},i(a){i||(B(n),i=!0)},o(a){G(n),i=!1},d(a){a&&R(o),~t&&r[t].d(a)}}}function Ar(e){let t=`${e[2]}-${e[7]}`,n,o,i=Io(e);return{c(){i.c(),n=ke()},m(s,r){i.m(s,r),N(s,n,r),o=!0},p(s,r){r[0]&132&&re(t,t=`${s[2]}-${s[7]}`)?(be(),G(i,1,1,j),Ee(),i=Io(s),i.c(),B(i,1),i.m(n.parentNode,n)):i.p(s,r)},i(s){o||(B(i),o=!0)},o(s){G(i),o=!1},d(s){s&&R(n),i.d(s)}}}function kr(e){let t,n,o=ve(e[6]),i=[];for(let r=0;r<o.length;r+=1)i[r]=Oo(Ao(e,o,r));const s=r=>G(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();t=ke()},m(r,l){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,l);N(r,t,l),n=!0},p(r,l){if(l[0]&8659266){o=ve(r[6]);let a;for(a=0;a<o.length;a+=1){const u=Ao(r,o,a);i[a]?(i[a].p(u,l),B(i[a],1)):(i[a]=Oo(u),i[a].c(),B(i[a],1),i[a].m(t.parentNode,t))}for(be(),a=o.length;a<i.length;a+=1)s(a);Ee()}},i(r){if(!n){for(let l=0;l<o.length;l+=1)B(i[l]);n=!0}},o(r){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)G(i[l]);n=!1},d(r){r&&R(t),Ne(i,r)}}}function Io(e){let t,n;return t=new go({props:{target:e[8],tool:e[15],drawingMode:e[14],transform:e[13],viewportScale:e[18]}}),t.$on("create",e[22]),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){const s={};i[0]&256&&(s.target=o[8]),i[0]&32768&&(s.tool=o[15]),i[0]&16384&&(s.drawingMode=o[14]),i[0]&8192&&(s.transform=o[13]),i[0]&262144&&(s.viewportScale=o[18]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function Co(e){let t,n;return t=new ho({props:{target:e[8],editor:e[39].editor,annotation:e[39].annotation,style:e[1],transform:e[13],viewportScale:e[18]}}),t.$on("change",function(){ie(e[23](e[39].annotation))&&e[23](e[39].annotation).apply(this,arguments)}),{c(){ce(t.$$.fragment)},m(o,i){le(t,o,i),n=!0},p(o,i){e=o;const s={};i[0]&256&&(s.target=e[8]),i[0]&64&&(s.editor=e[39].editor),i[0]&64&&(s.annotation=e[39].annotation),i[0]&2&&(s.style=e[1]),i[0]&8192&&(s.transform=e[13]),i[0]&262144&&(s.viewportScale=e[18]),t.$set(s)},i(o){n||(B(t.$$.fragment,o),n=!0)},o(o){G(t.$$.fragment,o),n=!1},d(o){ae(t,o)}}}function Oo(e){let t=e[39].annotation.id,n,o,i=Co(e);return{c(){i.c(),n=ke()},m(s,r){i.m(s,r),N(s,n,r),o=!0},p(s,r){r[0]&64&&re(t,t=s[39].annotation.id)?(be(),G(i,1,1,j),Ee(),i=Co(s),i.c(),B(i,1),i.m(n.parentNode,n)):i.p(s,r)},i(s){o||(B(i),o=!0)},o(s){G(i),o=!1},d(s){s&&R(n),i.d(s)}}}function Mr(e){let t,n,o,i,s,r,l=ve(e[17].filter(e[34])),a=[];for(let f=0;f<l.length;f+=1)a[f]=Po(ko(e,l,f));const u=f=>G(a[f],1,1,()=>{a[f]=null});let d=e[8]&&Lo(e);return{c(){t=L("svg"),n=L("g");for(let f=0;f<a.length;f+=1)a[f].c();o=L("g"),d&&d.c(),c(o,"class","drawing"),c(t,"role","application"),c(t,"tabindex",0),c(t,"class","a9s-annotationlayer"),Te(t,"drawing",e[15]),Te(t,"editing",e[5]),Te(t,"hidden",!e[3]),Te(t,"hover",e[16])},m(f,h){N(f,t,h),F(t,n);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(n,null);F(t,o),d&&d.m(o,null),e[35](o),e[36](t),i=!0,s||(r=[J(t,"pointerup",function(){ie(e[11])&&e[11].apply(this,arguments)}),J(t,"pointerdown",function(){ie(e[12])&&e[12].apply(this,arguments)}),J(t,"pointermove",e[24])],s=!0)},p(f,h){if(e=f,h[0]&132098){l=ve(e[17].filter(e[34]));let p;for(p=0;p<l.length;p+=1){const m=ko(e,l,p);a[p]?(a[p].p(m,h),B(a[p],1)):(a[p]=Po(m),a[p].c(),B(a[p],1),a[p].m(n,null))}for(be(),p=l.length;p<a.length;p+=1)u(p);Ee()}e[8]?d?(d.p(e,h),h[0]&256&&B(d,1)):(d=Lo(e),d.c(),B(d,1),d.m(o,null)):d&&(be(),G(d,1,1,()=>{d=null}),Ee()),(!i||h[0]&32768)&&Te(t,"drawing",e[15]),(!i||h[0]&32)&&Te(t,"editing",e[5]),(!i||h[0]&8)&&Te(t,"hidden",!e[3]),(!i||h[0]&65536)&&Te(t,"hover",e[16])},i(f){if(!i){for(let h=0;h<l.length;h+=1)B(a[h]);B(d),i=!0}},o(f){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)G(a[h]);G(d),i=!1},d(f){f&&R(t),Ne(a,f),d&&d.d(),e[35](null),e[36](null),s=!1,Ae(r)}}}function Tr(e,t,n){let o,i,s,r,l,a,u,d,f,h,p,m,g=j,k=()=>(g(),g=ln(b,X=>n(18,m=X)),b);e.$$.on_destroy.push(()=>g());let{drawingEnabled:E}=t,{image:S}=t,{preferredDrawingMode:_}=t,{state:A}=t,{style:M=void 0}=t,{toolName:C=Kt()[0]}=t,{user:T}=t,{visible:V=!0}=t,U=0;const W=()=>n(7,U+=1),q=()=>C,w=()=>E;let v,y,b;Ue(()=>k(n(9,b=Xn(S,y))));const{hover:I,selection:P,store:D}=A;At(e,I,X=>n(16,f=X)),At(e,P,X=>n(33,h=X)),At(e,D,X=>n(17,p=X));let z,H;const x=X=>{z&&D.unobserve(z);const de=X.filter(({editable:te})=>te).map(({id:te})=>te);de.length>0?(n(5,H=de.map(te=>D.getAnnotation(te)).filter(te=>te&&nt(te))),z=te=>{const{updated:ye}=te.changes;n(5,H=ye==null?void 0:ye.map(_e=>_e.newValue))},D.observe(z,{annotations:de})):n(5,H=void 0)},Z=X=>{const de=On(),te={id:de,bodies:[],target:{annotation:de,selector:X.detail,creator:T,created:new Date}};D.addAnnotation(te),P.setSelected(te.id)},$=X=>de=>{var Ze;const{target:te}=X,ye=10*60*1e3,_e=((Ze=te.creator)==null?void 0:Ze.id)!==T.id||!te.created||new Date().getTime()-te.created.getTime()>ye;D.updateTarget({...te,selector:de.detail,created:_e?te.created:new Date,updated:_e?new Date:void 0,updatedBy:_e?T:void 0})},oe=X=>{const{x:de,y:te}=Zt(X,y),ye=D.getAt(de,te,void 0,2);ye?f!==ye.id&&I.set(ye.id):I.set(void 0)},se=X=>nt(X);function Se(X){ut[X?"unshift":"push"](()=>{v=X,n(8,v)})}function Me(X){ut[X?"unshift":"push"](()=>{y=X,n(4,y)})}return e.$$set=X=>{"drawingEnabled"in X&&n(0,E=X.drawingEnabled),"image"in X&&n(25,S=X.image),"preferredDrawingMode"in X&&n(26,_=X.preferredDrawingMode),"state"in X&&n(27,A=X.state),"style"in X&&n(1,M=X.style),"toolName"in X&&n(2,C=X.toolName),"user"in X&&n(28,T=X.user),"visible"in X&&n(3,V=X.visible)},e.$$.update=()=>{e.$$.dirty[0]&4&&n(15,{tool:o,opts:i}=Wt(C)||{tool:void 0,opts:void 0},o,(n(32,i),n(2,C))),e.$$.dirty[0]&67108864|e.$$.dirty[1]&2&&n(14,s=(i==null?void 0:i.drawingMode)||_),e.$$.dirty[0]&16&&n(13,r=vo(y)),e.$$.dirty[0]&16&&n(12,{onPointerDown:l,onPointerUp:a}=So(y,D),l,(n(11,a),n(4,y))),e.$$.dirty[1]&4&&x(h.selected),e.$$.dirty[0]&32&&n(6,u=H?H.map(X=>({annotation:X,editor:uo(X.target.selector)})).filter(X=>X.editor):void 0),e.$$.dirty[0]&64&&n(10,d=X=>u&&u.some(de=>de.annotation.id===X.id))},[E,M,C,V,y,H,u,U,v,b,d,a,l,r,s,o,f,p,m,I,P,D,Z,$,oe,S,_,A,T,W,q,w,i,h,se,Se,Me]}class Do extends ge{constructor(t){super(),he(this,t,Tr,Mr,re,{drawingEnabled:0,image:25,preferredDrawingMode:26,state:27,style:1,toolName:2,user:28,visible:3,cancelDrawing:29,getDrawingTool:30,isDrawingEnabled:31},null,[-1,-1])}get cancelDrawing(){return this.$$.ctx[29]}get getDrawingTool(){return this.$$.ctx[30]}get isDrawingEnabled(){return this.$$.ctx[31]}}function Ro(e,t,n=0,o=e.length-1,i=Pr){for(;o>n;){if(o-n>600){const a=o-n+1,u=t-n+1,d=Math.log(a),f=.5*Math.exp(2*d/3),h=.5*Math.sqrt(d*f*(a-f)/a)*(u-a/2<0?-1:1),p=Math.max(n,Math.floor(t-u*f/a+h)),m=Math.min(o,Math.floor(t+(a-u)*f/a+h));Ro(e,t,p,m,i)}const s=e[t];let r=n,l=o;for(lt(e,n,t),i(e[o],s)>0&&lt(e,n,o);r<l;){for(lt(e,r,l),r++,l--;i(e[r],s)<0;)r++;for(;i(e[l],s)>0;)l--}i(e[n],s)===0?lt(e,n,l):(l++,lt(e,l,o)),l<=t&&(n=l+1),t<=l&&(o=l-1)}}function lt(e,t,n){const o=e[t];e[t]=e[n],e[n]=o}function Pr(e,t){return e<t?-1:e>t?1:0}class Lr{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let n=this.data;const o=[];if(!wt(t,n))return o;const i=this.toBBox,s=[];for(;n;){for(let r=0;r<n.children.length;r++){const l=n.children[r],a=n.leaf?i(l):l;wt(t,a)&&(n.leaf?o.push(l):xt(t,a)?this._all(l,o):s.push(l))}n=s.pop()}return o}collides(t){let n=this.data;if(!wt(t,n))return!1;const o=[];for(;n;){for(let i=0;i<n.children.length;i++){const s=n.children[i],r=n.leaf?this.toBBox(s):s;if(wt(t,r)){if(n.leaf||xt(t,r))return!0;o.push(s)}}n=o.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let o=0;o<t.length;o++)this.insert(t[o]);return this}let n=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const o=this.data;this.data=n,n=o}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=We([]),this}remove(t,n){if(!t)return this;let o=this.data;const i=this.toBBox(t),s=[],r=[];let l,a,u;for(;o||s.length;){if(o||(o=s.pop(),a=s[s.length-1],l=r.pop(),u=!0),o.leaf){const d=Ir(t,o.children,n);if(d!==-1)return o.children.splice(d,1),s.push(o),this._condense(s),this}!u&&!o.leaf&&xt(o,i)?(s.push(o),r.push(l),l=0,a=o,o=o.children[0]):a?(l++,o=a.children[l],u=!1):o=null}return this}toBBox(t){return t}compareMinX(t,n){return t.minX-n.minX}compareMinY(t,n){return t.minY-n.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){const o=[];for(;t;)t.leaf?n.push(...t.children):o.push(...t.children),t=o.pop();return n}_build(t,n,o,i){const s=o-n+1;let r=this._maxEntries,l;if(s<=r)return l=We(t.slice(n,o+1)),Ke(l,this.toBBox),l;i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/Math.pow(r,i-1))),l=We([]),l.leaf=!1,l.height=i;const a=Math.ceil(s/r),u=a*Math.ceil(Math.sqrt(r));No(t,n,o,u,this.compareMinX);for(let d=n;d<=o;d+=u){const f=Math.min(d+u-1,o);No(t,d,f,a,this.compareMinY);for(let h=d;h<=f;h+=a){const p=Math.min(h+a-1,f);l.children.push(this._build(t,h,p,i-1))}}return Ke(l,this.toBBox),l}_chooseSubtree(t,n,o,i){for(;i.push(n),!(n.leaf||i.length-1===o);){let s=1/0,r=1/0,l;for(let a=0;a<n.children.length;a++){const u=n.children[a],d=Qt(u),f=Dr(t,u)-d;f<r?(r=f,s=d<s?d:s,l=u):f===r&&d<s&&(s=d,l=u)}n=l||n.children[0]}return n}_insert(t,n,o){const i=o?t:this.toBBox(t),s=[],r=this._chooseSubtree(i,this.data,n,s);for(r.children.push(t),ct(r,i);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(i,s,n)}_split(t,n){const o=t[n],i=o.children.length,s=this._minEntries;this._chooseSplitAxis(o,s,i);const r=this._chooseSplitIndex(o,s,i),l=We(o.children.splice(r,o.children.length-r));l.height=o.height,l.leaf=o.leaf,Ke(o,this.toBBox),Ke(l,this.toBBox),n?t[n-1].children.push(l):this._splitRoot(o,l)}_splitRoot(t,n){this.data=We([t,n]),this.data.height=t.height+1,this.data.leaf=!1,Ke(this.data,this.toBBox)}_chooseSplitIndex(t,n,o){let i,s=1/0,r=1/0;for(let l=n;l<=o-n;l++){const a=at(t,0,l,this.toBBox),u=at(t,l,o,this.toBBox),d=Rr(a,u),f=Qt(a)+Qt(u);d<s?(s=d,i=l,r=f<r?f:r):d===s&&f<r&&(r=f,i=l)}return i||o-n}_chooseSplitAxis(t,n,o){const i=t.leaf?this.compareMinX:Cr,s=t.leaf?this.compareMinY:Or,r=this._allDistMargin(t,n,o,i),l=this._allDistMargin(t,n,o,s);r<l&&t.children.sort(i)}_allDistMargin(t,n,o,i){t.children.sort(i);const s=this.toBBox,r=at(t,0,n,s),l=at(t,o-n,o,s);let a=_t(r)+_t(l);for(let u=n;u<o-n;u++){const d=t.children[u];ct(r,t.leaf?s(d):d),a+=_t(r)}for(let u=o-n-1;u>=n;u--){const d=t.children[u];ct(l,t.leaf?s(d):d),a+=_t(l)}return a}_adjustParentBBoxes(t,n,o){for(let i=o;i>=0;i--)ct(n[i],t)}_condense(t){for(let n=t.length-1,o;n>=0;n--)t[n].children.length===0?n>0?(o=t[n-1].children,o.splice(o.indexOf(t[n]),1)):this.clear():Ke(t[n],this.toBBox)}}function Ir(e,t,n){if(!n)return t.indexOf(e);for(let o=0;o<t.length;o++)if(n(e,t[o]))return o;return-1}function Ke(e,t){at(e,0,e.children.length,t,e)}function at(e,t,n,o,i){i||(i=We(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s=t;s<n;s++){const r=e.children[s];ct(i,e.leaf?o(r):r)}return i}function ct(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function Cr(e,t){return e.minX-t.minX}function Or(e,t){return e.minY-t.minY}function Qt(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function _t(e){return e.maxX-e.minX+(e.maxY-e.minY)}function Dr(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function Rr(e,t){const n=Math.max(e.minX,t.minX),o=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,s-o)}function xt(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function wt(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function We(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function No(e,t,n,o,i){const s=[t,n];for(;s.length;){if(n=s.pop(),t=s.pop(),n-t<=o)continue;const r=t+Math.ceil((n-t)/o/2)*o;Ro(e,r,t,n,i),s.push(t,r,r,n)}}const Nr=()=>{const e=new Lr,t=new Map,n=()=>[...t.values()],o=()=>{e.clear(),t.clear()},i=f=>{if(!ot(f))return;const{minX:h,minY:p,maxX:m,maxY:g}=f.selector.geometry.bounds,k={minX:h,minY:p,maxX:m,maxY:g,target:f};e.insert(k),t.set(f.annotation,k)},s=f=>{if(!ot(f))return;const h=t.get(f.annotation);h&&e.remove(h),t.delete(f.annotation)};return{all:n,clear:o,getAt:(f,h,p=0)=>{const g=e.search({minX:f-p,minY:h-p,maxX:f+p,maxY:h+p}).map(k=>k.target).filter(k=>k.selector.type===Q.RECTANGLE||_n(k.selector,f,h,p));return g.length>0?(g.sort((k,E)=>dt(k.selector)-dt(E.selector)),g):[]},getIntersecting:(f,h,p,m)=>e.search({minX:f,minY:h,maxX:f+p,maxY:h+m}).map(g=>g.target),insert:i,remove:s,set:(f,h=!0)=>{h&&o();const p=f.reduce((m,g)=>{if(ot(g)){const{minX:k,minY:E,maxX:S,maxY:_}=g.selector.geometry.bounds;return[...m,{minX:k,minY:E,maxX:S,maxY:_,target:g}]}else return m},[]);p.forEach(m=>t.set(m.target.annotation,m)),e.load(p)},size:()=>e.all().length,update:(f,h)=>{s(f),i(h)}}},Uo=e=>{const t=Gi(),n=Nr(),o=Ti(t,e.userSelectAction,e.adapter),i=Mi(t),s=Ki();return t.observe(({changes:a})=>{n.set((a.created||[]).map(u=>u.target),!1),(a.deleted||[]).forEach(u=>n.remove(u.target)),(a.updated||[]).forEach(({oldValue:u,newValue:d})=>n.update(u.target,d.target))}),{store:{...t,getAt:(a,u,d,f)=>{const h=n.getAt(a,u,f);if(d)return h.map(m=>t.getAnnotation(m.annotation)).filter(Boolean).filter(d)[0];{const p=h[0];return p?t.getAnnotation(p.annotation):void 0}},getIntersecting:(a,u,d,f)=>n.getIntersecting(a,u,d,f).map(h=>t.getAnnotation(h.annotation)).filter(Boolean)},selection:o,hover:i,viewport:s}},Yo=e=>{const t=Uo(e);return{...t,store:ji(t.store)}},Bo=e=>{let t,n;if(e.nodeName==="CANVAS")t=e,n=t.getContext("2d",{willReadFrequently:!0});else{const i=e;t=document.createElement("canvas"),t.width=i.width,t.height=i.height,n=t.getContext("2d",{willReadFrequently:!0}),n.drawImage(i,0,0,i.width,i.height)}let o=0;for(let i=1;i<10;i++)for(let s=1;s<10;s++){const r=Math.round(s*t.width/10),l=Math.round(i*t.height/10),a=n.getImageData(r,l,1,1).data,u=(.299*a[0]+.587*a[1]+.114*a[2])/255;o+=u}return o/81},Vo=e=>{const t=Bo(e),n=t>.6?"dark":"light";return console.log(`[Annotorious] Image brightness: ${t.toFixed(1)}. Setting ${n} theme.`),n},$t=(e,t,n)=>t.setAttribute("data-theme",n==="auto"?Vo(e):n),Xo=(e,t)=>({...e,drawingEnabled:e.drawingEnabled===void 0?t.drawingEnabled:e.drawingEnabled,drawingMode:e.drawingMode||t.drawingMode,userSelectAction:e.userSelectAction||t.userSelectAction,theme:e.theme||t.theme}),en=typeof navigator>"u"?!1:navigator.userAgent.indexOf("Mac OS X")!==-1,Ho=(e,t)=>{const n=t||document,o=r=>{const l=r;l.key==="z"&&l.ctrlKey?e.undo():l.key==="y"&&l.ctrlKey&&e.redo()},i=r=>{const l=r;l.key==="z"&&l.metaKey&&(l.shiftKey?e.redo():e.undo())},s=()=>{en?n.removeEventListener("keydown",i):n.removeEventListener("keydown",o)};return en?n.addEventListener("keydown",i):n.addEventListener("keydown",o),{destroy:s}},Ur=(e,t={})=>{if(!e)throw"Missing argument: image";const n=typeof e=="string"?document.getElementById(e):e,o=Xo(t,{drawingEnabled:!0,drawingMode:"drag",userSelectAction:Rt.EDIT,theme:"light"}),i=Yo(o),{selection:s,store:r}=i,l=qi(r,o.initialHistory),a=Wi(i,l,o.adapter,o.autoSave),u=document.createElement("DIV");u.style.position="relative",u.style.display="inline-block",n.style.display="block",n.parentNode.insertBefore(u,n),u.appendChild(n);const d=Ho(l);let f=is();$t(n,u,o.theme);const h=new Do({target:u,props:{drawingEnabled:!!o.drawingEnabled,image:n,preferredDrawingMode:o.drawingMode,state:i,style:o.style,user:f}});h.$on("click",w=>{const{originalEvent:v,annotation:y}=w.detail;y?s.userSelect(y.id,v):s.isEmpty()||s.clear()});const p=Ji(i,l,o.adapter),m=()=>h.cancelDrawing(),g=()=>{h.$destroy(),u.parentNode.insertBefore(n,u),u.parentNode.removeChild(u),d.destroy(),l.destroy()},k=()=>h.getDrawingTool(),E=()=>f,S=()=>h.isDrawingEnabled(),_=(w,v,y)=>wo(w,v,y),A=(w,v)=>fo(w,v),M=w=>{if(!Wt(w))throw`No drawing tool named ${w}`;h.$set({toolName:w})},C=w=>h.$set({drawingEnabled:w}),T=w=>{console.warn("Filter not implemented yet")},V=w=>h.$set({style:w}),U=w=>$t(n,u,w),W=w=>{f=w,h.$set({user:w})},q=w=>h.$set({visible:w});return{...p,cancelDrawing:m,destroy:g,getDrawingTool:k,getUser:E,isDrawingEnabled:S,listDrawingTools:Kt,on:a.on,off:a.off,registerDrawingTool:_,registerShapeEditor:A,setDrawingEnabled:C,setDrawingTool:M,setFilter:T,setStyle:V,setTheme:U,setUser:W,setVisible:q,element:u,state:i}};O.Editor=yt,O.EditorMount=ho,O.Handle=Xe,O.IdentityTransform=pr,O.MidpointHandle=Yt,O.PolygonEditor=Qn,O.RectangleEditor=xn,O.RectangleUtil=Sn,O.RubberbandRectangle=po,O.SVGAnnotationLayer=Do,O.ShapeType=Q,O.ToolMount=go,O.UserSelectAction=Rt,O.W3CImageFormat=us,O.addEventListeners=So,O.approximateAsPolygon=ht,O.boundsFromMultiPolygonElements=tt,O.boundsFromPoints=fe,O.chainStyles=xi,O.computeArea=dt,O.computePolygonArea=xe,O.computeSVGPath=It,O.computeStyle=Qi,O.createBody=Ri,O.createImageAnnotator=Ur,O.createImageAnnotatorState=Uo,O.createSVGTransform=vo,O.createSvelteImageAnnotatorState=Yo,O.defaultColorProvider=cs,O.detectTheme=Vo,O.distance=et,O.enableResponsive=Xn,O.fillDefaults=Xo,O.getAllCorners=bn,O.getEditor=uo,O.getMaskDimensions=it,O.getSVGPoint=Zt,O.getTool=Wt,O.initKeyboardCommands=Ho,O.intersects=_n,O.isImageAnnotation=nt,O.isImageAnnotationTarget=ot,O.isMac=en,O.isPointInPolygon=$e,O.isTouch=Le,O.listDrawingTools=Kt,O.multipolygonElementToPath=Pe,O.parseFragmentSelector=An,O.parseSVGSelector=Ln,O.parseW3CImageAnnotation=Bn,O.pointsToPath=wn,O.registerEditor=fo,O.registerShapeUtil=Be,O.registerTool=wo,O.sampleBrightness=Bo,O.serializeFragmentSelector=kn,O.serializeSVGSelector=In,O.serializeW3CImageAnnotation=Vn,O.setTheme=$t,O.simplifyMultiPolygon=ri,O.simplifyPoints=Lt,O.simplifyPolygon=ai,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=annotorious.js.map


var SceneMaker = SceneMaker || {};

// Translation File

// Instructions to translate this file:
// * Only the words in quotation marks ("") after the colon (:)  should be translated. They should be removed and replaced by the corresponding translation inside the quotation marks, i.e in spanish:
// "i.name": "Name", -> "i.name": "Nombre",

// * Inside the quotation marks sometimes %{example} appears. That should not be translated as it will be substituted by a value, i.e in spanish:
// "i.welcome_message": "Hello %{name}, welcome to Scene Maker.", -> "i.welcome_message": "Hola %{name}, bienvenido a Scene Maker.",
// In the above example, %{name} should not be translated as it will be replaced by the name of the user.

// Some symbols are represented by codes. For instance, "&#8209;" means "-". So, "e-Learning", may be represented as "e&#8209;Learning". Please, keep the symbols.


SceneMaker.Locales = {
	"en": {
		"i.ActionEvent"						: "Triggering event:",
		"i.ActionEventPuzzleSolved"			: "Puzzle solved",
		"i.ActionEventSlideRevealed"		: "Screen or view accessed",
		"i.ActionEventSlideRevealedFirstTime"	: "Screen or view accessed for the first time",
		"i.ActionParamsPuzzle"              : "Puzzle:",
		"i.ActionParamsPuzzleSolution"      : "Puzzle solution:",
		"i.ActionParamsScreen"              : "Screen:",
		"i.ActionParamsScreenReplacement"   : "Replace with:",
		"i.ActionParamsSlide"               : "Screen or view:",
		"i.ActionParamsText"                : "Text:",
		"i.ActionParamsURL"                 : "URL:",
		"i.ActionParamsView"                : "View",
		"i.ActionType"                      : "Action:",
		"i.ActionTypeChangeBackground"      : "Change background of screen or view",
		"i.ActionTypeChangeScreen"          : "Change screen",
		"i.ActionTypeDisableHotzone"        : "Disable zone",
		"i.ActionTypeEnableHotzone"         : "Enable zone",
		"i.ActionTypeGoToScreen"            : "Go to screen",
		"i.ActionTypeHideHotspot"           : "Hide hotspot",
		"i.ActionTypeOpenLink"              : "Open link",
		"i.ActionTypeOpenView"              : "Open view",
		"i.ActionTypePlaySound"             : "Play sound",
		"i.ActionTypeShowHotspot"           : "Show hotspot",
		"i.ActionTypeShowText"              : "Show text",
		"i.ActionTypeSolvePuzzle"           : "Solve escape room puzzle",
		"i.ActionTypeStopSound"             : "Stop sound",
		"i.ActionWarningChangeBackground" 	: "If the new background image has different dimensions from the original, the position of the zones will vary.",
		"i.AddCaption"                      : "Caption",
		"i.AddContent"                      : "Add Content",
		"i.AddHotspot"                      : "Add hotspot",
		"i.AddImageURL"                     : "Add image URL",
		"i.AddMultimediaURL"				: "Add video or audio URL (YouTube or HTML5)",
		"i.AddScreen"                       : "Add Screen",
		"i.AddView"                         : "Add View",
		"i.AddWebURL"               		: "Add web URL",
		"i.AddZone"                         : "Add zone",
		"i.AreYouSure"                      : "Are you sure?",
		"i.AreYouSureContent"               : "Are you sure you want to delete this content?",
		"i.AreYouSureDeleteHotspot"         : "Are you sure you want to delete this hotspot?",
		"i.AreYouSureDeleteHotzone"         : "Are you sure you want to delete this zone?",
		"i.AreYouSureDeleteScreen"          : "Are you sure you want to delete this screen?",
		"i.AreYouSureDeleteView"            : "Are you sure you want to delete this view?",
		"i.AspectRatio"                     : "Aspect ratio",
		"i.Background"                      : "Background",
		"i.cancel"                          : "cancel",
		"i.Continue"                        : "Continue",
		"i.CursorVisibility"				: "Cursor on hover:",
		"i.CursorVisibilityDefault"			: "No change",
		"i.CursorVisibilityPointer"			: "Pointer",
		"i.Delete"                          : "Delete",
		"i.delete"                          : "delete",
		"i.Description"                     : "Description",
		"i.Done"                            : "Done",
		"i.Enabled"							: "Enabled:",
		"i.Exit"                            : "Exit",
		"i.ExitConfirmation"                : "You are about to leave Scene Maker. Any changes not saved will be lost.",
		"i.ExitConfirmationMenu"            : "The scene has been modified. Closing without saving will discard your changes. What would you like to do?",
		"i.exitWSaving"                     : "exit without saving",
		"i.HotspotActions"                  : "Actions to perform when the hotspot is clicked",
		"i.HotspotID"                       : "Hotspot ID:",
		"i.HotzoneActions"                  : "Actions to perform when the zone is clicked",
		"i.HotzoneID"                       : "Zone ID:",
		"i.Image"                           : "Image",
		"i.ImageSource"                     : "Source:",
		"i.ImageSourceGallery"              : "Gallery",
		"i.ImageSourceURL"                  : "URL",
		"i.ImageURL"                        : "URL:",
		"i.LockAspectRatio"                 : "Maintain aspect ratio:",
		"i.Multimedia"						: "Video & audio",
		"i.NewAction"                       : "Add action",
		"i.no"                              : "no",
		"i.No"                              : "No",
		"i.NoSlidesOnSaveNotification"      : "Create at least one screen before saving.",
		"i.Object"                          : "Object",
		"i.Ok"                              : "Ok",
		"i.OSettingsPreview"				: "Include preview param in the URL.",
		"i.OSettingsUnload"					: "Unload the web page when hiding the view.",
		"i.Position"                        : "Position",
		"i.PositionX"                       : "X (px):",
		"i.PositionY"                       : "Y (px):",
		"i.Preview"                         : "Preview",
		"i.Properties"                      : "Properties",
		"i.PuzzleOption"                    : "Puzzle #{number}",
		"i.Rotation"                        : "Rotation angle (°):",
		"i.Save"                            : "Save",
		"i.saveAndExit"                     : "save and exit",
		"i.Saved"                           : "Saved",
		"i.Saving"                          : "Saving",
		"i.SceneActions"					: "Actions",
		"i.SceneCaption"					: "Scene caption",
		"i.SceneCaptionText"				: "Text",
		"i.SceneCaptionMode"				: "Display mode:",
		"i.SceneCaptionModeClosable"		: "Can be closed",
		"i.SceneCaptionModeFixed"			: "Always visible",
		"i.SceneCaptionModeMinimizable"		: "Can be minimized",
		"i.Screen"                          : "Screen",
		"i.ScreenOption"                    : "Screen #{number}",
		"i.Settings"                        : "Settings",
		"i.Size"                            : "Size",
		"i.SizeHeight"                      : "Height (px):",
		"i.SizeWidth"                       : "Width (px):",
		"i.Text"                            : "Text",
		"i.Title"                           : "Scene title",
		"i.Unspecified"                     : "Unspecified",
		"i.Untitled"                        : "Untitled",
		"i.Url"                             : "Url",
		"i.url"                             : "url",
		"i.Video"                           : "Video",
		"i.View"                            : "View",
		"i.ViewOption"                      : "View #{viewNumber} - Screen #{screenNumber}",
		"i.Views"                           : "Views",
		"i.ViewsType"                       : "Choose view type",
		"i.ViewsTypeImage"                  : "Image",
		"i.ViewsTypeOther"                  : "Other content",
		"i.Visibility"                      : "Visibility:",
		"i.VisibilityHidden"                : "Hidden",
		"i.VisibilityVisible"               : "Visible",
		"i.WrongResource"                   : "This resource is corrupted or incompatible with the current version of Scene Maker and cannot be loaded.",
		"i.yes"                             : "yes",
		"i.Yes"                             : "Yes",
		"i.ZoneTooltip"                     : "Click here to add content"
	},
	"es": {
		"i.ActionEvent"						: "Evento desencadenante:",
		"i.ActionEventPuzzleSolved"			: "Reto resuelto",
		"i.ActionEventSlideRevealed"		: "Pantalla o vista accedida",
		"i.ActionEventSlideRevealedFirstTime"	: "Pantalla o vista accedida por primera vez",
		"i.ActionParamsPuzzle"              : "Reto:",
		"i.ActionParamsPuzzleSolution"      : "Solución del reto:",
		"i.ActionParamsScreen"              : "Pantalla:",
		"i.ActionParamsScreenReplacement"   : "Reemplazar con:",
		"i.ActionParamsSlide"               : "Pantalla o vista:",
		"i.ActionParamsText"                : "Texto:",
		"i.ActionParamsURL"                 : "URL:",
		"i.ActionParamsView"                : "Vista",
		"i.ActionType"                      : "Acción:",
		"i.ActionTypeChangeBackground"      : "Cambiar fondo de una pantalla o vista",
		"i.ActionTypeChangeScreen"          : "Cambiar pantalla",
		"i.ActionTypeDisableHotzone"        : "Deshabilitar zona",
		"i.ActionTypeEnableHotzone"         : "Habilitar zona",
		"i.ActionTypeGoToScreen"            : "Ir a la pantalla",
		"i.ActionTypeHideHotspot"           : "Ocultar hotspot",
		"i.ActionTypeOpenLink"              : "Abrir enlace",
		"i.ActionTypeOpenView"              : "Abrir vista",
		"i.ActionTypePlaySound"             : "Reproducir sonido",
		"i.ActionTypeShowHotspot"           : "Mostrar hotspot",
		"i.ActionTypeShowText"              : "Mostrar texto",
		"i.ActionTypeSolvePuzzle"           : "Resolver reto de la escape room",
		"i.ActionTypeStopSound"             : "Detener sonido",
		"i.ActionWarningChangeBackground" 	: "Si la nueva imagen de fondo tiene dimensiones diferentes a la original, la posición de las zonas variará.",
		"i.AddCaption"                      : "Rótulo",
		"i.AddContent"                      : "Añadir contenido",
		"i.AddHotspot"                      : "Añadir hotspot",
		"i.AddImageURL"                     : "Añadir URL de una imagen",
		"i.AddMultimediaURL"				: "Añadir URL de video o audio (YouTube o HTML5)",
		"i.AddScreen"                       : "Añadir pantalla",
		"i.AddView"                         : "Añadir vista",
		"i.AddWebURL"                    	: "Añadir URL de una web",
		"i.AddZone"                         : "Añadir zona",
		"i.AreYouSure"                      : "¿Está seguro?",
		"i.AreYouSureContent"               : "¿Está seguro de que desea eliminar este contenido?",
		"i.AreYouSureDeleteHotspot"         : "¿Está seguro de que desea eliminar este hotspot?",
		"i.AreYouSureDeleteHotzone"         : "¿Está seguro de que desea eliminar esta zona?",
		"i.AreYouSureDeleteScreen"          : "¿Está seguro de que desea eliminar esta pantalla?",
		"i.AreYouSureDeleteView"            : "¿Está seguro de que desea eliminar esta vista?",
		"i.AspectRatio"                     : "Relación de aspecto",
		"i.Background"                      : "Fondo",
		"i.cancel"                          : "cancelar",
		"i.Continue"                        : "Continuar",
		"i.CursorVisibility"				: "Cursor al pasar el ratón:",
		"i.CursorVisibilityDefault"			: "No cambiar",
		"i.CursorVisibilityPointer"			: "Puntero",
		"i.Delete"                          : "Borrar",
		"i.delete"                          : "borrar",
		"i.Description"                     : "Descripción",
		"i.Done"                            : "Hecho",
		"i.Enabled"							: "Habilitado:",
		"i.Exit"                            : "Salir",
		"i.ExitConfirmation"                : "Está a punto de salir de Scene Maker. Los cambios no guardados se perderán.",
		"i.ExitConfirmationMenu"            : "El escenario ha sido modificado. Si cierra sin guardar, se perderán los cambios. ¿Qué desea hacer?",
		"i.exitWSaving"                     : "salir sin guardar",
		"i.HotspotActions"                  : "Acciones al hacer clic en el hotspot",
		"i.HotspotID"                       : "ID del hotspot:",
		"i.HotzoneActions"                  : "Acciones al hacer clic en la zona",
		"i.HotzoneID"                       : "ID de la zona:",
		"i.Image"                           : "Imagen",
		"i.ImageSource"                     : "Fuente:",
		"i.ImageSourceGallery"              : "Galería",
		"i.ImageSourceURL"                  : "URL",
		"i.ImageURL"                        : "URL:",
		"i.LockAspectRatio"                 : "Mantener relación de aspecto:",
		"i.Multimedia"						: "Vídeo & audio",
		"i.NewAction"                       : "Añadir acción",
		"i.no"                              : "no",
		"i.No"                              : "No",
		"i.NoSlidesOnSaveNotification"      : "Cree al menos una pantalla antes de guardar.",
		"i.Object"                          : "Objeto",
		"i.Ok"                              : "Aceptar",
		"i.OSettingsPreview"				: "Incluir parámetro de previsualización en la URL.",
		"i.OSettingsUnload"					: "Cerrar la página web al ocultar la vista.",
		"i.Position"                        : "Posición",
		"i.PositionX"                       : "X (px):",
		"i.PositionY"                       : "Y (px):",
		"i.Preview"                         : "Vista previa",
		"i.Properties"                      : "Propiedades",
		"i.PuzzleOption"                    : "Reto #{number}",
		"i.Rotation"                        : "Ángulo de rotación (°):",
		"i.Save"                            : "Guardar",
		"i.saveAndExit"                     : "guardar y salir",
		"i.Saved"                           : "Guardado",
		"i.Saving"                          : "Guardando",
		"i.SceneActions"					: "Acciones",
		"i.SceneCaption"					: "Rótulo de la escena",
		"i.SceneCaptionText"				: "Texto",
		"i.SceneCaptionMode"				: "Modo de visualización:",
		"i.SceneCaptionModeClosable"		: "Se puede cerrar",
		"i.SceneCaptionModeFixed"			: "Siempre visible",
		"i.SceneCaptionModeMinimizable"		: "Se puede minimizar",
		"i.Screen"                          : "Pantalla",
		"i.ScreenOption"                    : "Pantalla #{number}",
		"i.Settings"                        : "Configuración",
		"i.Size"                            : "Tamaño",
		"i.SizeHeight"                      : "Alto (px):",
		"i.SizeWidth"                       : "Ancho (px):",
		"i.Text"                            : "Texto",
		"i.Title"                           : "Título del escenario",
		"i.Unspecified"                     : "No especificado",
		"i.Untitled"                        : "Sin título",
		"i.Url"                             : "Url",
		"i.url"                             : "url",
		"i.Video"                           : "Video",
		"i.View"                            : "Vista",
		"i.ViewOption"                      : "Vista #{viewNumber} - Pantalla #{screenNumber}",
		"i.Views"                           : "Vistas",
		"i.ViewsType"                       : "Elige tipo de vista",
		"i.ViewsTypeImage"                  : "Imagen",
		"i.ViewsTypeOther"                  : "Otro contenido",
		"i.Visibility"                      : "Visibilidad:",
		"i.VisibilityHidden"                : "Oculto",
		"i.VisibilityVisible"               : "Visible",
		"i.WrongResource"                   : "Este recurso está dañado o es incompatible con la versión actual de Scene Maker y no se puede cargar.",
		"i.yes"                             : "sí",
		"i.Yes"                             : "Sí",
		"i.ZoneTooltip"                     : "Haz clic aquí para añadir contenido"
	}
};

SceneMaker.Constant = SceneMaker.Constant || {};

//General
SceneMaker.Constant.NONE = "none";
SceneMaker.Constant.UNKNOWN = 'Unknown';

//Slide types
SceneMaker.Constant.SCREEN = "screen";
SceneMaker.Constant.VIEW = "view";
SceneMaker.Constant.VIEW_IMAGE = "view_image";
SceneMaker.Constant.VIEW_CONTENT = "view_content";

//Element types
SceneMaker.Constant.TEXT = "text";
SceneMaker.Constant.IMAGE = "image";
SceneMaker.Constant.AUDIO = "audio";
SceneMaker.Constant.VIDEO = "video";
SceneMaker.Constant.OBJECT = "object";

//Web browsers
SceneMaker.Constant.IE = 'Internet Explorer';
SceneMaker.Constant.FIREFOX = 'Mozilla Firefox';
SceneMaker.Constant.CHROME = 'Google Chrome';
SceneMaker.Constant.SAFARI = 'Safari';
SceneMaker.Constant.ANDROID_BROWSER = 'Android Browser';

//Media types
SceneMaker.Constant.MEDIA = {};
SceneMaker.Constant.MEDIA.IMAGE = "image";
SceneMaker.Constant.MEDIA.HTML5_VIDEO = "HTML5_VIDEO";
SceneMaker.Constant.MEDIA.YOUTUBE_VIDEO = "YouTube";
SceneMaker.Constant.MEDIA.HTML5_AUDIO = "HTML5_AUDIO";
SceneMaker.Constant.MEDIA.WEB = "web";
SceneMaker.Constant.MEDIA.REUSABLE_PUZZLE_INSTANCE = "reusable_puzzle_instance";
SceneMaker.Constant.MEDIA.PDF = "pdf";
SceneMaker.Constant.MEDIA.DOC = "doc";
SceneMaker.Constant.MEDIA.PPT = "ppt";
SceneMaker.Constant.MEDIA.JSON = "json";

//Wrapper types
SceneMaker.Constant.WRAPPER = {};
SceneMaker.Constant.WRAPPER.EMBED = "EMBED";
SceneMaker.Constant.WRAPPER.OBJECT = "OBJECT";
SceneMaker.Constant.WRAPPER.IFRAME = "IFRAME";
SceneMaker.Constant.WRAPPER.VIDEO = "VIDEO";
SceneMaker.Constant.WRAPPER.AUDIO = "AUDIO";

SceneMaker.Configuration = (function(SM,$,undefined){
  
  var configuration;
  
  var init = function(_configuration){
    if(typeof _configuration === "undefined"){
      _configuration = {};
    }
    configuration = _configuration;

    SM.ImagesPath = configuration["ImagesPath"];
    SM.StylesheetsPath = configuration["StylesheetsPath"];
    SM.PreviewPath = configuration["PreviewPath"];
    SM.UploadScenePath = configuration["UploadScenePath"];
  };
  
  var getConfiguration = function(){
    if(typeof configuration === "undefined"){
      return {};
    }
    return configuration;
  };
  
  return {
      init                : init,
      getConfiguration    : getConfiguration
    };
  
}) (SceneMaker, jQuery);

SceneMaker.User = (function(SM,$,undefined){

	var _user; //{name: "user_name", id: "id", token: "token"}


	var init = function(options){
		var userOptions = {};
		if(typeof options == "object"){
			userOptions = options['user'];
		}
		setUser(userOptions);
	};

	var getUser = function(){
		if(Object.keys(_user).length > 0){
			return _user;
		} else {
			return undefined;
		}
	};

	var setUser = function(userObject){
		if(typeof userObject == "object"){
			_user = userObject;
		} else {
			_user = {};
		}
	};

	var isLogged = function(){
		return ((_user)&&(typeof _user['token'] == "string")&&(_user['id']));
	};

	var getName = function(){
		return _user['name'];
	};

	var getId = function(){
		return _user['id'];
	};

	var getToken = function(){
		return _user['token'];
	};

	return {
		init: 			init,
		getUser: 		getUser,
		setUser: 		setUser,
		isLogged: 		isLogged,
		getName:  		getName,
		getId: 			getId,
		getToken: 		getToken
	};
	
}) (SceneMaker, jQuery);

SceneMaker.I18n = (function(SM,$,undefined){
	
	var DEFAULT_LANGUAGE = "en";

	//Locales (translation files) available
	var _availableLocales;
	//Environment locales
	var _envLocales;
	//Languages available
	var _availableLanguages;
	//User preferred language
	var _language;

	//Preferred locales (environment locales if defined)
	var _locales;
	//Default locales
	var _defaultLocales;
	

	/**
	 * Init I18n module
	 */
	var init = function(options, scene){
		var configuration = SM.Configuration.getConfiguration();

		_availableLocales = _getAvailableLocales();
		_availableLanguages = _getAvailableLanguages();

		//Set default language from config
		if(_isValidLanguage(configuration["defaultLanguage"])){
			DEFAULT_LANGUAGE = configuration["defaultLanguage"];
		}
		
		//Get language
		//1. Language specified by options
		if(_isValidLanguage(options.lang)){
			_language = options.lang;
		} else {
			//2. Browser language
			var browserLang = (navigator.language || navigator.userLanguage);
			if(_isValidLanguage(browserLang)){
				_language = browserLang;
			} else {
				//3. LO language
				if((typeof scene == "object")&&(_isValidLanguage(scene.language))){
					_language = scene.language;
				} else {
					//4. Default language
					_language = DEFAULT_LANGUAGE;
				}
			}
		}

		_defaultLocales = SM.Locales;
		if(typeof _envLocales == "object"){
			_locales = _envLocales;
		} else {
			_locales = _defaultLocales;
		}
	};

	var _getAvailableLanguages = function(){
		var _availableLanguages = [];
		var _availableLocales = _getAvailableLocales();
		for(var i=0; i<_availableLocales.length; i++){
			var languages = Object.keys(_availableLocales[i]);
			for(var j=0; j<languages.length; j++){
				if(_availableLanguages.indexOf(languages[j])==-1){
					_availableLanguages.push(languages[j]);
				}
			}
		}
		return _availableLanguages;
	};

	var getAvailableLanguages = function(){
		if(_availableLanguages instanceof Array) {
			return _availableLanguages;
		}
		return _getAvailableLanguages();
	};

	var _getAvailableLocales = function(){
		var availableLocales = [];
		var configuration = SM.Configuration.getConfiguration();
		if(typeof SM.Locales == "object"){
			availableLocales.push(SM.Locales);
		}
		if((typeof configuration === "object")&&(typeof configuration["locales"] === "object")){
			availableLocales.push(configuration["locales"]);
			_envLocales = configuration["locales"];
		}
		return availableLocales;
	};

	var getAvailableLocales = function(){
		if(_availableLocales instanceof Array) {
			return _availableLocales;
		}
		return _getAvailableLocales();
	};

	var _isValidLanguage = function(language){
		return ((typeof language == "string")&&(getAvailableLanguages().indexOf(language)!=-1));
	};

	var translateUI = function(){
		$("[i18n-key]").each(function(index, elem){
			var translation = getTrans($(elem).attr("i18n-key"));
			if(typeof translation != "undefined"){
				switch(elem.tagName){
					case "INPUT":
						_translateInput(elem,translation);
						break;
					case "TEXTAREA":
						_translateTextArea(elem,translation);
						break;
					case "DIV":
						_translateDiv(elem,translation);
						break;
					case "LI":
						_translateLI(elem,translation);
						break;
					case "IMG":
						_translateImg(elem,translation);
						break;
					default:
						//Generic translation (for h,p or span elements)
						_genericTranslate(elem,translation);
						break;
				}
			}
		});

		//Translante tooltip attributes
		$("[i18n-key-tooltip]").each(function(index, elem){
			var translation = getTrans($(elem).attr("i18n-key-tooltip"));
			if(typeof translation != "undefined"){
				$(elem).attr("title",translation);
			}
		});

		//Translante hrefs attributes
		$("[i18n-key-href]").each(function(index, elem){
			var translation = getTrans($(elem).attr("i18n-key-href"));
			if(typeof translation != "undefined"){
				$(elem).attr("href",translation);
			}
		});
	};
		
	var _translateInput = function(input,translation){
		if($(input).val()!==""){
			$(input).val(translation);
		}
		if($(input).attr("placeholder")){
			$(input).attr("placeholder", translation);
		}
	};

	var _translateDiv = function(div,translation){
		if($(div).attr("data-text") != undefined){
			$(div).attr("data-text", translation);
		}
		if($(div).attr("title") != undefined){
			$(div).attr("title", translation);
		}
	};

	var _translateTextArea = function(textArea,translation){
		$(textArea).attr("placeholder", translation);
	};

	var _translateLI = function(li,translation){
		if($(li).attr("data-text") != undefined){
			$(li).attr("data-text", translation);
		} else {
			_genericTranslate(li,translation);
		}
	};

	var _translateImg = function(img,translation){
		var attrToChange = "src";
		if(typeof $(img).attr("srctoload") != "undefined"){
			attrToChange = "srctoload";
		}
		$(img).attr(attrToChange,SM.ImagesPath + translation);
	};

	var _genericTranslate = function(elem,translation){
		$(elem).text(translation);
	};

	/**
	 * Function to translate a string
	 */
	var getTrans = function(s,params){
		//Preferred locale
		var trans = _getTransFromLocales(_locales,s,params);
		if(typeof trans == "string"){
			return trans;
		}

		//Default locale
		trans = _getTransFromLocales(_defaultLocales,s,params);
		if(typeof trans == "string"){
			return trans;
		}

		//Don't return s if it is a key.
		var key_pattern =/^i\./g;
		if(key_pattern.exec(s)!=null){
			return undefined;
		} else {
			return s;
		}
	};

	var _getTransFromLocales = function(locales,s,params){
		//First language
		if((typeof locales[_language] != "undefined")&&(typeof locales[_language][s] == "string")) {
			return _getTransWithParams(locales[_language][s],params);
		}
		// SM.Debugging.log("Text without translation: " + s + " for language " + _language);

		//Default language
		if((_language != DEFAULT_LANGUAGE)&&(typeof locales[DEFAULT_LANGUAGE] != "undefined")&&(typeof locales[DEFAULT_LANGUAGE][s] == "string")){
			return _getTransWithParams(locales[DEFAULT_LANGUAGE][s],params);
		}
		// SM.Debugging.log("Text without default translation: " + s);

		return undefined;
	};

	/*
	 * Replace params (if they are provided) in the translations keys. Example:
	 * // "i.dtest"	: "Created by #{name} with Scene Maker",
	 * // SceneMaker.I18n.getTrans("i.dtest", {name: "Aldo"}) -> "Created by Aldo with Scene Maker"
	 */
	var _getTransWithParams = function(trans, params){
		if(typeof params != "object"){
			return trans;
		}

		for(var key in params){
			var stringToReplace = "#{" + key + "}";
			if(trans.indexOf(stringToReplace)!=-1){
				trans = trans.replaceAll(stringToReplace,params[key]);
			}
		};

		return trans;
	};

	/**
	 * Return the current language
	 */
	var getLanguage = function(){
		return _language;
	};


	return {
		init 					: init,
		getAvailableLanguages 	: getAvailableLanguages,
		getAvailableLocales     : getAvailableLocales,
		getLanguage				: getLanguage,
		getTrans 				: getTrans,
		translateUI 			: translateUI
	};

}) (SceneMaker, jQuery);


SceneMaker.Object = (function(SM,$,undefined){
			
	var init = function(){
		SM.Object.PDF.init();
		SM.Object.GoogleDOC.init();
	};

	/*
	 * Wrapper can be: "embed","object, "iframe", "video" or null if the object is a source url without wrapper.
	 * Type is the source type.
	 */
	function objectInfo(wrapper,source,sourceType){
		this.wrapper=wrapper;
		this.source = source;
		this.type=sourceType;
	};
	
	var getObjectInfo = function(object){
		var wrapper = null;
		
		//Determine wrapper
		if(typeof object === "string"){
			var videoPattern = new RegExp("^<video","g");
			if(videoPattern.exec(object) !== null){
				wrapper = "VIDEO";
			}

			var audioPattern = new RegExp("^<audio","g");
			if(audioPattern.exec(object) !== null){
				wrapper = "AUDIO";
			}
		}

		if((wrapper===null)||(typeof wrapper === "undefined")){
			var element = $(object)[0];
			if(typeof element !== 'undefined'){
				wrapper = element.tagName;
			}
		}
		
		//Determine source type
		var source = _getSourceFromObject(object,wrapper);
		
		var type;
		switch (wrapper){
			case "VIDEO":
				type = SM.Constant.MEDIA.HTML5_VIDEO;
				break;
			case "AUDIO":
				type = SM.Constant.MEDIA.HTML5_AUDIO;
				break;
			case "IFRAME":
			default:
				type = _getTypeFromSource(source);
		};

		return new objectInfo(wrapper,source,type);
	};
	
	var _getSourceFromObject = function(object,wrapper){
		var source = null;

		switch (wrapper){
			case null:
				source = object;
				break;
			case SM.Constant.WRAPPER.EMBED:
				source = $(object).attr("src");
				break;
			case SM.Constant.WRAPPER.OBJECT:
				if (typeof $(object).attr("src") != 'undefined'){
					source = $(object).attr("src");
				} else if (typeof $(object).attr("data") != 'undefined'){
					source = $(object).attr("data");
				}
				break;
			case SM.Constant.WRAPPER.IFRAME:
				source = $(object).attr("src");
				break;
			case SM.Constant.WRAPPER.VIDEO:
				return SM.Video.HTML5.getSources(object);
			case SM.Constant.WRAPPER.AUDIO:
				return SM.Audio.HTML5.getSources(object);
			default:
				SM.Debugging.log("Unrecognized object wrapper: " + wrapper);
				break;
		}

		if((wrapper==null)||(wrapper==SM.Constant.WRAPPER.IFRAME)){
			var googledoc_pattern=/(^https?:\/\/docs.google.com\/viewer\?url=)/g
			var googleDocMatch = source.match(googledoc_pattern);
			if((googleDocMatch instanceof Array)&&(googleDocMatch.length === 1)){
				source = source.replace(googleDocMatch[0],"").replace("&embedded=true","");
			}
		}
		
		return source;
	};

	//Patterns
	var http_urls_pattern=/(http(s)?:\/\/)([aA-zZ0-9%=_&+?])+([./-][aA-zZ0-9%=_&+?]+)*[/]?/g
	var www_urls_pattern = /(www[.])([aA-zZ0-9%=_&+?])+([./-][aA-zZ0-9%=_&+?]+)*[/]?/g
	var youtube_video_pattern=/(http(s)?:\/\/)?(((youtu.be\/)([aA-zZ0-9-]+))|((www.youtube.com\/((watch\?v=)|(embed\/)|(v\/)))([aA-z0-9-Z&=.])+))/g
	var reusable_puzzle_instance_pattern = /^https?:\/\/[^\/]+\/escapeRooms\/[A-Za-z0-9]+\/reusablePuzzleInstances\/[A-Za-z0-9]+\/render$/

	var html5VideoFormats = ["mp4","webm","ogg"];
	var imageFormats = ["jpg","jpeg","png","gif","bmp","svg"];
	var audioFormats = ["mp3", "wav","ogg"];

	var _getTypeFromSource = function(source){
		if((typeof source === "object")&&(source !== null)&&(typeof source.length === "number")&&(source.length > 0)){
			source = source[0];
		}
		if(typeof source !== "string"){
			return null;
		}

		if(source.match(reusable_puzzle_instance_pattern)!==null){
			return SM.Constant.MEDIA.REUSABLE_PUZZLE_INSTANCE;
		}

		if(source.match(youtube_video_pattern)!==null){
			return SM.Constant.MEDIA.YOUTUBE_VIDEO;
		}

		//Purge options
		source = source.split('?')[0];

		var extension = getExtensionFromSrc(source);

		if(imageFormats.indexOf(extension)!==-1){
			return SM.Constant.MEDIA.IMAGE;
		}

		if(extension==="pdf"){
			return SM.Constant.MEDIA.PDF;
		}

		if(html5VideoFormats.indexOf(extension)!==-1){
			return SM.Constant.MEDIA.HTML5_VIDEO;
		}

		if(audioFormats.indexOf(extension)!==-1){
			return SM.Constant.MEDIA.HTML5_AUDIO;
		}

		if(extension==="json"){
			return SM.Constant.MEDIA.JSON;
		}

		if((extension==="doc")||(extension==="docx")){
			return SM.Constant.MEDIA.DOC;
		}

		if((extension==="ppt")||(extension==="pptx")||(extension==="odp")){
			return SM.Constant.MEDIA.PPT;
		}

		if((source.match(http_urls_pattern)!==null)||(source.match(www_urls_pattern)!==null)){
			return SM.Constant.MEDIA.WEB;
		}

		return extension;
	};
	
	var getExtensionFromSrc = function(source){
		return (source.split('.').pop().split('&')[0]).toLowerCase();
	};

	return {
		init							: init,
		getExtensionFromSrc 			: getExtensionFromSrc,
		getObjectInfo					: getObjectInfo
	};

}) (SceneMaker, jQuery);

SceneMaker.Object.PDF = (function(SM,$,undefined){

	var _pdfSupport = false;

	var init = function(){
		_pdfSupport = SM.Status.getDevice().features.pdfReader;
	};

	var generateWrapper = function(url){
		url = SM.Utils.checkUrlProtocol(url);
		if(_pdfSupport){
			return "<iframe src='" + url + "'></iframe>";
		} else {
			return SM.Object.GoogleDOC.generateWrapper(url);
		}
	};

	var renderPDFFromJSON = function(pdfJSON,options){
		if ((typeof options != "object") || (typeof options.source != "string")){
			return "";
		}

		var style = (pdfJSON['style'])? pdfJSON['style'] : "";
		var pdfBody = generateWrapper(options.source);
		
		var classes = "objectelement";
		if(options.extraClasses){
			classes = classes + " " + options.extraClasses;
		}
		
		return "<div id='"+pdfJSON['id']+"' class='"+ classes +"' objectStyle='" + style + "' objectWrapper=\"" + pdfBody + "\"></div>";
	};

	return {
		init 				: init,
		generateWrapper		: generateWrapper,
		renderPDFFromJSON	: renderPDFFromJSON
	};

})(SceneMaker,jQuery);

SceneMaker.Object.GoogleDOC = (function(SM,$,undefined){

	var init = function(){
	};

	var generateWrapper = function(url){
		url = SM.Utils.checkUrlProtocol(url);
		return "<iframe src='https://docs.google.com/viewer?url=" + url + "&embedded=true'></iframe>";
	};
		
	return {
		init					: init,
		generateWrapper 		: generateWrapper
	};

}) (SceneMaker, jQuery);


SceneMaker.Renderer = (function(SM,$,undefined){
	
	var init  = function(){
	}

	var renderScreen = function(screenJSON){
		var screenDOM = _renderScreen(screenJSON);
		if(screenDOM){
			$('section.slides').append($(screenDOM));
			SM.Marker.drawSlideWithMarkers(screenJSON);
			//Draw views with type VIEWS_IMAGE
			var viewsL = screenJSON.views.length;
			for(var i=0; i<viewsL; i++){
				var viewJSON = screenJSON.views[i];
				SM.Marker.drawSlideWithMarkers(viewJSON);
			}
		}
	};

	var _renderScreen = function(screenJSON){
		var allViews = "";
		var viewsL = screenJSON.views.length;
		for(var i=0; i<viewsL; i++){
			var view = screenJSON.views[i];
			allViews += _renderView(view);
		}
		return $("<article type='"+screenJSON.type+"' id='"+screenJSON.id+"'>"+allViews+"</article>");
	};

	var _renderView = function(view){
		if(view.type === SM.Constant.VIEW_CONTENT){
			return _renderViewContent(view);
		} else if(view.type === SM.Constant.VIEW_IMAGE){
			return _renderViewImage(view);
		}
	};

	var _renderViewImage = function(view){
		var classes = "hide_in_screen";
		var buttons = "<div class='close_view' id='close"+view.id+"'></div>";
		return "<article class='"+ classes +"' type='"+SM.Constant.VIEW_IMAGE+"' id='"+view.id+"'>"+ buttons +"</article>";
	};

	var _renderViewContent = function(view){
		var content = "";
		var classes = "hide_in_screen";
		var buttons = "<div class='close_view' id='close"+view.id+"'></div>";

		var elL = view.elements.length;
		for(var i=0; i<elL; i++){
			var element = view.elements[i];

			if(element.type === SM.Constant.TEXT){
				content += _renderText(element);
			} else if(element.type === SM.Constant.IMAGE){
				content += _renderImage(element);
			} else if(element.type === SM.Constant.VIDEO){
				content += _renderHTML5Video(element);
			} else if(element.type === SM.Constant.AUDIO){
				content += _renderHTML5Audio(element);
			} else if(element.type === SM.Constant.OBJECT){
				content += _renderObject(element);
				classes += " object";
			} else {
				content += _renderEmpty(element);
			}
		}

		return "<article class='"+ classes +"' type='"+SM.Constant.VIEW_CONTENT+"' id='"+view.id+"'>"+ buttons + content+"</article>";
	};


	/*
	 * Render elements
	 */

	var _renderEmpty = function(element){
		return "<div id='"+element['id']+"' class='view_content_text'></div>";
	};

	var _renderText = function(element){
		return "<div id='"+element['id']+"' class='view_content_text textArea'>"+element['body']+"</div>";
	};
	
	var _renderImage = function(element){
		var div = $("<div id='"+element['id']+"' class='view_content_image_wrapper'></div>");
		var img = $("<img class='view_content_image' src='"+element['body']+"' style='"+element['style']+"' />");

		if(element['hyperlink']){
			var a = $("<a href='" + element['hyperlink'] + "' target='blank_'></a>");
			$(a).append(img);
			$(div).append(a);
		} else {
			$(div).append(img);
		}
		
		return SM.Utils.getOuterHTML(div);
	};
	
	var _renderHTML5Video = function(videoJSON){
		var rendered = "<div id='"+videoJSON['id']+"' class='view_content_video_wrapper'>";
		var video = SM.Video.HTML5.renderVideoFromJSON(videoJSON,{id: SM.Utils.getId(videoJSON['id'] + "_video"),extraClasses: ['view_content_video'], timestamp: true});
		rendered = rendered + video + "</div>";
		return rendered;
	};

	var _renderHTML5Audio = function(audioJSON){
		var rendered = "<div id='"+audioJSON['id']+"' class='view_content_audio_wrapper'>";
		var audio = SM.Audio.HTML5.renderAudioFromJSON(audioJSON,{id: SM.Utils.getId(audioJSON['id'] + "_audio"),extraClasses: ['view_content_audio'], timestamp: true});
		rendered = rendered + audio + "</div>";
		return rendered;
	};
	
	var _renderObject = function(element){
		var objectSettings = element.settings || {};
		var loadingObjectClass = (objectSettings.unloadObject===false) ? "unloadableObject" : "";
		
		var objectInfo = SM.Object.getObjectInfo(element.body);
		switch(objectInfo.type){
			case SM.Constant.MEDIA.YOUTUBE_VIDEO:
				return SM.Video.Youtube.renderVideoFromJSON(element,{extraClasses: "objectelement youtubeelement " + loadingObjectClass});
			case SM.Constant.MEDIA.PDF:
				return SM.Object.PDF.renderPDFFromJSON(element,{extraClasses: loadingObjectClass, source: objectInfo.source});
			default:
				var $body = $(element['body']);
				var bodySrc = $body.attr("src");
				if(typeof bodySrc !== "undefined"){
					bodySrc = SM.Utils.checkWebUrl(bodySrc);
					if((objectInfo.type === SM.Constant.MEDIA.REUSABLE_PUZZLE_INSTANCE)||(objectSettings.addPreviewParamToObject === true)){
						bodySrc = SM.Utils.addParamToUrl(bodySrc,"escapp_preview",(""+SM.Status.isPreview()));
					}
					$body.attr("src",bodySrc);
				}
				if(objectInfo.type === SM.Constant.MEDIA.REUSABLE_PUZZLE_INSTANCE){
					$body.attr("reusablepuzzleinstance","true");
				}
				var body = SM.Utils.getOuterHTML($body);

				var style = (element['style'])? element['style'] : "";

				return "<div id='"+ element['id'] +"' class='objectelement " + loadingObjectClass + "' objectStyle='" + style + "' objectWrapper='" + body + "'>" + "" + "</div>";
		}
	};

	return {
		init        		: init,
		renderScreen 		: renderScreen
	};

}) (SceneMaker,jQuery);



SceneMaker.Scene = (function(SM,undefined){

	var init = function(scene,callback){
		SM.ViewerAdapter.applyAspectRatio(scene.aspectRatio);
		SM.Renderer.init();
		var screens = scene.screens;
		for(var i=0;i<screens.length;i++){
			SM.Renderer.renderScreen(screens[i]);
		}

		if(typeof callback == "function"){
			callback();
		}
	};


	return {
		init: init
	};

}) (SceneMaker);

SceneMaker.ObjectPlayer = (function(SM,$,undefined){
	
	var loadObject = function(slide){
		$.each(slide.children('.objectelement'),function(index,objectWrapper){
			if($(objectWrapper).hasClass('loadedObject')){
				return;
			} else {
				$(objectWrapper).addClass('loadedObject');
			}

			if($(objectWrapper).hasClass('youtubeelement')){
				SM.Video.Youtube.loadYoutubeObject(objectWrapper);
				return;
			}

			var object = $($(objectWrapper).attr("objectWrapper"));
			$(objectWrapper).html("<div style='" + $(objectWrapper).attr("objectStyle") + "'>" + SM.Utils.getOuterHTML(object) + "</div>");

			//Adjust dimensions
			// var objectToAdjust = ($($(objectWrapper).children()[0]).children()[0]);
			// var parent = $(objectToAdjust).parent();
			// var parentHeight = $(parent).height();
			// var parentWidth = $(parent).width();
			// var percentHeight = (parentHeight)/parentHeight*100;
			// var percentWidth = (parentWidth)/parentWidth*100;
			// $(objectToAdjust).height(percentHeight+"%");
			// $(objectToAdjust).width(percentWidth+"%");
		});
	};

	var unloadObject= function(slide){
		$.each($(slide).children('.objectelement:not(".unloadableObject")'),function(index,objectWrapper){
			$(objectWrapper).removeClass('loadedObject');
			$(objectWrapper).html("");
		});
	};
	
	
	var aftersetupSize = function(increase){
		if($(".current").hasClass("object")){
			loadObject($(".current"));
		}
	};
	
	return {
		loadObject 					: loadObject,
		unloadObject 				: unloadObject,
		aftersetupSize 				: aftersetupSize
	};

})(SceneMaker,jQuery);

SceneMaker.Video = (function(SM,$,undefined){
	
	var init = function(){
		SM.Video.HTML5.init();
		SM.Video.Youtube.init();
	};

	return {
		init : init
	};

})(SceneMaker,jQuery);

/*
 * Current version uses the Iframe API based on HTML5
 * Doc: https://developers.google.com/youtube/iframe_api_reference
 */

//Var to store youtube players associated with an iframe
var youtubePlayers = {}; 
//Youtube Constants (also accesible in window['YT'].PlayerState when API is loaded)
var YT = YT || {};
YT.PlayerState = YT.PlayerState || {};
YT.PlayerState.UNSTARTED = -1;
YT.PlayerState.ENDED = 0;
YT.PlayerState.PLAYING = 1;
YT.PlayerState.PAUSED = 2;
YT.PlayerState.BUFFERING = 3;
YT.PlayerState.CUED = 5;

//Callback from Youtube Iframe API
var _youTubeIframeApiReady = false;
function onYouTubeIframeAPIReady(){ _youTubeIframeApiReady = true; }


SceneMaker.Video.Youtube = (function(SM,$,undefined){

	var _waitForLoadYouTubeAPI = true;

	var init = function(){
		_loadYouTubeIframeAPILibrary();
		setTimeout(function(){
			_waitForLoadYouTubeAPI = false;
		},11000);
	};

	var _loadYouTubeIframeAPILibrary = function(){
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	};

	var _isYouTubeIframeAPIReady = function(){
		if((window['YT'])&&(_youTubeIframeApiReady===true)){
			return true;
		} else {
			return false;
		}
	};

	var renderVideoFromJSON = function(videoJSON, options){
		var source = videoJSON['body'] || videoJSON['source'];
		var options = options || {};
		options.id = (videoJSON['id']) ? videoJSON['id'] : SM.Utils.getId();
		options.objectStyle = videoJSON['style'];
		return renderVideoFromSource(source,options);
	};

	var renderVideoFromSource = function(source,options){
		var videoId = ((options)&&(options.id)) ? options.id : SM.Utils.getId();
		var ytContainerId = SM.Utils.getId();
		var videoClasses = "";
		var objectStyle = "";
		if(options){
			if(options.extraClasses){
				videoClasses = videoClasses + " " + options.extraClasses;
			}
			if(options.objectStyle){
				objectStyle = "objectStyle='" + options.objectStyle + "' ";
			} else if(options.style){
				objectStyle = "objectStyle='" + options.style + "' ";
			}
		};
		var video = "<div id='"+ videoId + "' ytContainerId='" + ytContainerId + "' class='" + videoClasses + "' " + objectStyle + " source='" + source + "'>" + "</div>";
		return video;
	};

	var loadYoutubeObject = function(container,options){
		var controls = 1;
		var _onReadyCallback = onPlayerReady;
		var _onPlayerError = onPlayerError;

		if(options){
			if(typeof options.controls == "boolean"){
				controls = (options.controls===true) ? 1 : 0;
			}
			if(typeof options.onReadyCallback == "function"){
				_onReadyCallback = options.onReadyCallback;
			}
			if(typeof options.onPlayerError == "function"){
				_onPlayerError = options.onPlayerError;
			}
		}

		// If Youtube Iframe isn't ready, load nothing
		if(!_isYouTubeIframeAPIReady()){
			if(_waitForLoadYouTubeAPI){
				setTimeout(function(){
					loadYoutubeObject(container,options);
				},1000);
			} else {
				$(container).html("<img src='"+SM.ImagesPath+"adverts/advert_content_unavailable.png'/>");
				$(container).addClass("videoOfflineContainer");
				var nonAvailableImg = $(container).find("img");
				$(nonAvailableImg).load(function(response){
					$(nonAvailableImg).css("margin-top",($(container).height()-$(nonAvailableImg).height())/2 + "px");
				});
				_onPlayerError();
			}
			return;
		}

		var youtubeVideoId = getYoutubeIdFromURL($(container).attr("source")); 
		if(youtubeVideoId===null){
			_onPlayerError();
			return;
		}
		
		var iframeId = $(container).attr("ytContainerId");
		var ytStyle = (typeof $(container).attr("objectStyle") != "undefined") ? ("style='" + $(container).attr("objectStyle") + "' ") : "";
		$(container).html("<div id='" + iframeId + "' videotype='"+ SM.Constant.MEDIA.YOUTUBE_VIDEO + "' " + ytStyle + "'></div>");

		youtubePlayers[iframeId] = new YT.Player(iframeId, {
		  height: '100%',
		  width: '100%',
		  videoId: youtubeVideoId,
		  playerVars: { 'autoplay': 0, 'controls': controls, 'enablejsapi': 1, 'showinfo': 0, wmode: "transparent", 'rel': 0 },
		  events: {
			 'onReady': _onReadyCallback,
			 'onError' : _onPlayerError
		  }
		});

		$("#"+iframeId).attr("wmode","transparent");
	};

	var onPlayerReady = function(event){
	};

	var onPlayerError = function(event){
		// if((typeof event == "object")&&(typeof event.data != "undefined")){
		// 	SM.Debugging.log("onPlayerError with error type " + event.data);
		// }
	};


	/////////
	// Youtube Utils
	/////////

	/*
	 * Returns the youtube video id contained in the url
	 */
	var getYoutubeIdFromURL = function(url){
		var id = null;
		if(!url){
			return id;
		}

		var youtube_video_pattern_1 =/https?:\/\/?youtu.be\/([aA-zZ0-9-]+)/g
		var youtube_video_pattern_2 =/(https?:\/\/)?(www.youtube.com\/watch\?v=|embed\/)([aA-zZ0-9-]+)[&=.]*/g
		var youtube_video_pattern_3 =/(https?:\/\/)?(www.youtube.com\/v\/)([aA-zZ0-9-]+)/g
		var youtube_video_pattern_4 =/(https?:\/\/)?(www.youtube.com\/embed\/)([aA-zZ0-9-]+)/g

		if(url.match(youtube_video_pattern_1)!=null){
			var result = youtube_video_pattern_1.exec(url)
			if((result)&&(result[1])){
				id = result[1];
			}
			return id;
		}

		if(url.match(youtube_video_pattern_2)!=null){
			var result = url.split("&")[0];
			var result = youtube_video_pattern_2.exec(url)
			if((result)&&(result[3])){
				id = result[3];
			}
			return id;
		}

		if(url.match(youtube_video_pattern_3)!=null){
			var result = url.split("&")[0];
			var result = youtube_video_pattern_3.exec(url)
			if((result)&&(result[3])){
				id = result[3];
			}
			return id;
		}

		if(url.match(youtube_video_pattern_4)!=null){
			var result = url.split("&")[0];
			var result = youtube_video_pattern_4.exec(url)
			if((result)&&(result[3])){
				id = result[3];
			}
			return id;
		}

		return id;
	};

	var getEmbedSource = function(youTubeVideoDOM){
		return "https://www.youtube.com/embed/" + SM.Video.Youtube.getYoutubeIdFromURL(SM.Object.getObjectInfo(youTubeVideoDOM).source);
	};

	return {
		init 					: init,
		renderVideoFromJSON		: renderVideoFromJSON,
		renderVideoFromSource	: renderVideoFromSource,
		loadYoutubeObject		: loadYoutubeObject,
		getYoutubeIdFromURL		: getYoutubeIdFromURL,
		getEmbedSource			: getEmbedSource
	};

})(SceneMaker,jQuery);





SceneMaker.Video.HTML5 = (function(SM,$,undefined){
	var init = function(){
	};

	var setMultimediaEvents = function(){
		var multimediaEls = $("video, audio");
		$.each(multimediaEls, function(index, mEl){
			var isVideo = (mEl.tagName==="VIDEO");
			/* Events
			mEl.addEventListener('play', function(){
				// SM.Debugging.log("Play at " + mEl.currentTime);
			}, false);
			mEl.addEventListener('pause', function(){
				// SM.Debugging.log("Pause " + mEl.currentTime);
			}, false);
			mEl.addEventListener('ended', function(){
				// SM.Debugging.log("Ended " + mEl.currentTime);
			}, false);
			mEl.addEventListener("error", function(err){
                // SM.Debugging.log("mEl error: " + err);
            }, false);
			mEl.addEventListener("seeked", function(err){
                // SM.Debugging.log("Seek at " + mEl.currentTime);
            }, false);
            */
            if(isVideo){
				//PREVENT KEYBOARD EVENTS ON FIREFOX
				$(mEl).focus(function(event){
					this.blur();
				});
            }
		});
	};
	
	/**
	 * Function to play all videos and audios of a slide
	 */
	var playMultimedia = function(slide){
		var multimediaEls = $(slide).find("video, audio");
		$.each(multimediaEls, function(index,mEl){
			if ($(mEl).attr("wasplayingonslideleave")=="true"){
				mEl.play();
			} else if ($(mEl).attr("wasplayingonslideleave")=="false"){
				//Do nothing
			} else if (typeof $(mEl).attr("wasplayingonslideleave") == "undefined"){
				//No wasplayingonslideleave attr
				
				//Check autoplayonsliddenter attr
				if ($(mEl).attr("autoplayonslideenter")=="true"){
					mEl.play();
				}
			}
		});
	};
	
	/**
	 * Function to stop all videos and audios of a slide
	 */
	var stopMultimedia = function(slide){
		var multimediaEls = $(slide).find("video, audio");
		$.each(multimediaEls, function(index,mEl){
			var playing = !mEl.paused;
			$(mEl).attr("wasplayingonslideleave",playing);
			if(playing){
				mEl.pause();
			}
		});
	};


	/*
	 * Rendering
	 */

	 var renderVideoFromJSON = function(videoJSON, options){
		var renderOptions = options || {};

		if(typeof renderOptions.id == "undefined"){
			renderOptions.id = ((typeof videoJSON != "undefined")&&(videoJSON['id'])) ? videoJSON['id'] : SM.Utils.getId();
		}
		if(typeof renderOptions.controls == "undefined"){
			renderOptions.controls = videoJSON['controls'];
		}

		renderOptions.style = videoJSON['style'];
		renderOptions.autoplay = videoJSON['autoplay'];
		renderOptions.loop = videoJSON['loop'];
		
		return renderVideoFromSources(getSourcesFromJSON(videoJSON),renderOptions);
	};

	var renderVideoFromSources = function(sources,options){
		var video = $("<video></video>");

		$(video).attr("preload","metadata");

		if((options)&&(options.extraAttrs)){
			for(var key in options.extraAttrs){
				$(video).attr(key,options.extraAttrs[key]);
			}
		}

		if(options){
			if(options['id']){
				$(video).attr("id",options['id']);
			}
			if(typeof options.onVideoReady == "string"){
				//Look for the function
				try {
					var onVideoReadySplit = options.onVideoReady.split(".");
					var onVideoReadyFunction = window[onVideoReadySplit[0]];
					for(var k=1; k<onVideoReadySplit.length; k++){
						onVideoReadyFunction = onVideoReadyFunction[onVideoReadySplit[k]];
					}
					if(typeof onVideoReadyFunction == "function"){
						$(video).attr("onloadeddata",options.onVideoReady + '(this)');
					}
				} catch(e){}
			}
			if(options['extraClasses']){
				var extraClassesLength = options['extraClasses'].length;
				for(var i=0; i<extraClassesLength; i++){
					$(video).addClass(options['extraClasses'][i]);
				}
			}
			if(options.controls !== false){
				$(video).attr("controls","controls");
			}
			if(typeof options.autoplay != "undefined"){
				$(video).attr("autoplayonslideenter",options.autoplay);
			}
			if(typeof options['poster'] === "string"){
				$(video).attr("poster",options['poster']);
			}
			if(options['loop'] === true){
				$(video).attr("loop","loop");
			}
			if(options['style']){
				$(video).attr("style",options['style']);
			}
		}

		//Default callback
		if(typeof $(video).attr("onloadeddata") == "undefined"){
			$(video).attr("onloadeddata",'SceneMaker.Video.HTML5.onVideoReady(this)');
		};

		video = SM.Utils.getOuterHTML(video);
		video = video.split("</video>")[0];

		//Write sources (we can't loaded it to the DOM directly, because then they will start to load, before been actually rendered)
		if((!options)||(options.loadSources !== false)){
			$.each(sources, function(index, source){
				if(typeof source.src == "string"){
					var sourceSrc = source.src;
					if((typeof options != "undefined")&&(options.timestamp === true)){
						sourceSrc = SM.Utils.addParamToUrl(sourceSrc,"timestamp",""+new Date().getTime());
					}
					var mimeType = (source.mimeType)?"type='" + source.mimeType + "' ":"";
					video = video + "<source src='" + sourceSrc + "' " + mimeType + ">";
				}
			});

			if(sources.length>0){
				video = video + "<p>Your browser does not support HTML5 video.</p>";
			}
		}

		video = video + "</video>";

		return video;
	};

	var addSourcesToVideoTag = function(sources,videoTag,options){
		var options = options || {};

		$.each(sources, function(index, source){
			if(typeof source.src == "string"){
				var sourceSrc = source.src;
				if(options.timestamp === true){
					sourceSrc = SM.Utils.addParamToUrl(sourceSrc,"timestamp",""+new Date().getTime());
				}
				var mimeType = (source.mimeType)?"type='" + source.mimeType + "' ":"";
				$(videoTag).append("<source src='"+sourceSrc+"' " + mimeType + ">");
			}
		});
		if(sources.length>0){
			$(videoTag).append("<p>Your browser does not support HTML5 video.</p>");
		}
	};

	var onVideoReady = function(video){
		//Check state (based on http://www.w3schools.com/tags/av_prop_readystate.asp)
		if((typeof video != "undefined")&&((video.readyState == 4)||(video.readyState == 3))){
			$(video).attr("loaded","true");
		}
	};

	/*
	 * Utils
	 */

	var getSources = function(videoDOM){
		if(typeof videoDOM == "string"){
			var sources = [];
			//Prevent video to be rendered in a non appropriate time.
			var srcPattern = new RegExp("src=(\'||\")([a-z-.://0-9]+)","g");

			var found;
			while(found = srcPattern.exec(videoDOM)){
				if(found.length>2){
					sources.push(found[2]);
				}
				srcPattern.lastIndex = found.index+1;
			};

			return sources.map(function(value){ return {"src": value, "mimeType": _getVideoMimeType(value)}});
		}

		try {
			return $(videoDOM).find("source").map(function(){ return {"src": this.src, "mimeType": _getVideoMimeType(this.src)}});
		} catch(e){
			return [];
		}
		
		return [];
	};

	var _getVideoMimeType = function(url){
		var source = (SM.Object.getObjectInfo(url)).source;
		return "video/" + source.split('.').pop().split("?")[0];
	};

	var getSourcesFromJSON = function(videoJSON){
		if(typeof videoJSON != "object"){
			return [];
		}

		if(typeof videoJSON.sources === "string"){
			try {
				var sources = JSON.parse(videoJSON.sources);
			} catch (e){
				return [];
			}
		} else if(typeof videoJSON.sources === "object"){
			var sources = videoJSON.sources;
		}

		return sources;
	};

	var getPoster = function(videoDOM){
		if(typeof videoDOM == "string"){
			//Prevent video to be rendered in a non appropriate time.
			var posterPattern = new RegExp("poster=(\'||\")([a-z.://0-9?=%]+)","g");
			var found = posterPattern.exec(videoDOM);
			if((typeof found != "undefined")&&(found != null)&&(found.length>2)){
				return found[2];
			}
			return undefined;
		}
		return $(videoDOM).attr("poster");
	};

	return {
		init 					: init,
		setMultimediaEvents 	: setMultimediaEvents,
		playMultimedia			: playMultimedia,
		stopMultimedia			: stopMultimedia,
		renderVideoFromJSON		: renderVideoFromJSON,
		renderVideoFromSources	: renderVideoFromSources,
		addSourcesToVideoTag	: addSourcesToVideoTag,
		getSources 				: getSources,
		getSourcesFromJSON		: getSourcesFromJSON,
		getPoster				: getPoster,
		onVideoReady 			: onVideoReady
	};

})(SceneMaker,jQuery);

SceneMaker.Audio = (function(SM,$,undefined){

	var init = function(){
		SM.Audio.HTML5.init();
	};

	return {
		init : init
	};

})(SceneMaker,jQuery);

SceneMaker.Audio.HTML5 = (function(SM,$,undefined){
	
	//For managing sound effects
	var currentAudio;

	var init = function(){
		var player = new Audio();
		currentAudio = {"player": player, "url": undefined};
		player.addEventListener("ended", () => {
			currentAudio.url = undefined;
		});
	};

	var playAudio = function(url){
		if((typeof currentAudio === "undefined")||(typeof currentAudio.player === "undefined")){
			//Not initialized
			return;
		}
		if((typeof url === "string")&&(currentAudio.url === url)){
			//Sound is already playing
			return;
		}
		currentAudio.url = url;
		currentAudio.player.pause();
  		currentAudio.player.currentTime = 0;
  		currentAudio.player.src = url; 
  		currentAudio.player.play().then(() => {
		}).catch(err => {
			currentAudio.url = undefined;
		});
	};

	var stopAudio = function(url){
		if((typeof currentAudio === "undefined")||(typeof currentAudio.player === "undefined")){
			//Not initialized
			return;
		}
		if((typeof url === "string")&&(currentAudio.url === url)){
			currentAudio.player.pause();
			currentAudio.url = undefined;
		}
	};

	/*
	 * Rendering
	 */
	var renderAudioFromJSON = function(audioJSON, options){
		var renderOptions = options || {};

		if(typeof renderOptions.id == "undefined"){
			renderOptions.id = ((typeof audioJSON != "undefined")&&(audioJSON['id'])) ? audioJSON['id'] : SM.Utils.getId();
		}
		if(typeof renderOptions.controls == "undefined"){
			renderOptions.controls = audioJSON['controls'];
		}

		renderOptions.style = audioJSON['style'];
		renderOptions.autoplay = audioJSON['autoplay'];
		renderOptions.loop = audioJSON['loop'];
		
		return renderAudioFromSources(getSourcesFromJSON(audioJSON),renderOptions);
	};

	var renderAudioFromSources = function(sources,options){
		var audio = $("<audio></audio>");

		$(audio).attr("preload","metadata");
		$(audio).addClass("veaudioelement");

		if((options)&&(options.extraAttrs)){
			for(var key in options.extraAttrs){
				$(audio).attr(key,options.extraAttrs[key]);
			}
		}

		if(options){
			if(options['id']){
				$(audio).attr("id",options['id']);
			}
			if(typeof options.onAudioReady == "string"){
				//Look for the function
				try {
					var onAudioReadySplit = options.onAudioReady.split(".");
					var onAudioReadyFunction = window[onAudioReadySplit[0]];
					for(var k=1; k<onAudioReadySplit.length; k++){
						onAudioReadyFunction = onAudioReadyFunction[onAudioReadySplit[k]];
					}
					if(typeof onAudioReadyFunction == "function"){
						$(audio).attr("onloadeddata",options.onAudioReady + '(this)');
					}
				} catch(e){}
			}
			if(options['extraClasses']){
				var extraClassesLength = options['extraClasses'].length;
				for(var i=0; i<extraClassesLength; i++){
					$(audio).addClass(options['extraClasses'][i]);
				}
			}
			if(options.controls !== false){
				$(audio).attr("controls","controls");
			}
			if(typeof options.autoplay != "undefined"){
				$(audio).attr("autoplayonslideenter",options.autoplay);
			}
			if(options['loop'] === true){
				$(audio).attr("loop","loop");
			}
			if(options['style']){
				$(audio).attr("style",options['style']);
			}
		}

		//Default callback
		if(typeof $(audio).attr("onloadeddata") == "undefined"){
			$(audio).attr("onloadeddata",'SceneMaker.Audio.HTML5.onAudioReady(this)');
		};

		audio = SM.Utils.getOuterHTML(audio);
		audio = audio.split("</audio>")[0];

		//Write sources (we can't loaded it to the DOM directly, because then they will start to load, before been actually rendered)
		if((!options)||(options.loadSources !== false)){
			$.each(sources, function(index, source){
				if(typeof source.src == "string"){
					var sourceSrc = source.src;
					if((typeof options != "undefined")&&(options.timestamp === true)){
						sourceSrc = SM.Utils.addParamToUrl(sourceSrc,"timestamp",""+new Date().getTime());
					}
					var mimeType = (source.mimeType)?"type='" + source.mimeType + "' ":"";
					audio = audio + "<source src='" + sourceSrc + "' " + mimeType + ">";
				}
			});

			if(sources.length>0){
				audio = audio + "<p>Your browser does not support HTML5 audio.</p>";
			}
		}

		audio = audio + "</audio>";

		return audio;
	};

	var addSourcesToAudioTag = function(sources,audioTag,options){
		var options = options || {};

		$.each(sources, function(index, source){
			if(typeof source.src == "string"){
				var sourceSrc = source.src;
				if(options.timestamp === true){
					sourceSrc = SM.Utils.addParamToUrl(sourceSrc,"timestamp",""+new Date().getTime());
				}
				var mimeType = (source.mimeType)?"type='" + source.mimeType + "' ":"";
				$(audioTag).append("<source src='"+sourceSrc+"' " + mimeType + ">");
			}
		});
		if(sources.length>0){
			$(audioTag).append("<p>Your browser does not support HTML5 audio.</p>");
		}
	};

	var onAudioReady = function(audio){
		//Check state (based on http://www.w3schools.com/tags/av_prop_readystate.asp)
		if((typeof audio != "undefined")&&((audio.readyState == 4)||(audio.readyState == 3))){
			$(audio).attr("loaded","true");
		}
	};

	/*
	 * Utils
	 */

	var getSources = function(audioDOM){
		if(typeof audioDOM == "string"){
			var sources = SM.Video.HTML5.getSources(audioDOM);
			return sources.map(function(source){ return {"src": source.src, "mimeType": getAudioMimeType(source.src)}});
		}

		try {
			return $(audioDOM).find("source").map(function(){ return {"src": this.src, "mimeType": getAudioMimeType(this.src)}});
		} catch(e){
			return [];
		}

		return [];
	};

	var getSourcesFromJSON = function(audioJSON){
		//We can get the sources in the same way that HTML5 Video Tags
		return SM.Video.HTML5.getSourcesFromJSON(audioJSON);
	};

	var getAudioMimeType = function(url){
		var source = (SM.Object.getObjectInfo(url)).source;
		var extension = source.split('.').pop().split("?")[0];
		var mimeType;
		switch(extension){
			case "ogg":
				mimeType = "ogg";
				break;
			case "mp3":
				mimeType = "mpeg";
				break;
			case "wav":
				mimeType = "wav";
				break;
			default:
				mimeType = extension;
				break;
		}
		return "audio/" + mimeType;
	};

	return {
		init 					: init,
		playAudio				: playAudio,
		stopAudio				: stopAudio,
		renderAudioFromJSON		: renderAudioFromJSON,
		renderAudioFromSources	: renderAudioFromSources,
		addSourcesToAudioTag	: addSourcesToAudioTag,
		onAudioReady 			: onAudioReady,
		getSources 				: getSources,
		getSourcesFromJSON		: getSourcesFromJSON,
		getAudioMimeType		: getAudioMimeType
	};

})(SceneMaker,jQuery);

/*
 * Events for Viewer
 */
SceneMaker.Events = (function(SM,$,undefined){

	var _bindedViewerEventListeners = false;

	var init = function(){
		bindViewerEventListeners();
	};

	var bindViewerEventListeners = function(){
		if(_bindedViewerEventListeners){
			return;
		}

		//Enter and leave events
		$('article').live('slideenter', SM.Viewer.onSlideEnterViewer);
		$('article').live('slideleave', SM.Viewer.onSlideLeaveViewer);

		$(document).on('click','.close_view', SM.View.onCloseViewClicked);
		$(document).on('click','.captionHeaderWrapper img', SM.Caption.onCaptionButtonClicked);

		//Focus
		// $(window).focus(function(){
		// }).blur(function(){
		// });

		//Load onresize event
		//Prevent multiple consecutively calls
		var multipleOnResize = undefined;
		window.onresize = function(){
			if(typeof multipleOnResize == "undefined"){
				multipleOnResize = false;
				setTimeout(function(){
					if(!multipleOnResize){
						multipleOnResize = undefined;
						_onResizeActions();
					} else {
						multipleOnResize = undefined;
						window.onresize();
					}
				},600);
			} else {
				multipleOnResize = true;
			}
		};

		$(window).on('orientationchange',function(){
			$(window).trigger('resize'); //It will call SM.ViewerAdapter.updateInterface();
		});

		window.onbeforeunload = function(){
			SM.EventsNotifier.notifyEvent("EXIT");
		};

		_bindedViewerEventListeners = true;
	};


	var _onResizeActions = function(){
		SM.ViewerAdapter.updateInterface();
	};

	return {
			init 							: init,
			bindViewerEventListeners		: bindViewerEventListeners
	};

}) (SceneMaker,jQuery);

SceneMaker.EventsNotifier = (function(SM,$,undefined){

	var listeners;
	// listeners['event'] = [callback1,callback2,...,callbackn];

	var init = function() {
		listeners = new Array();		
	};

	var registerCallback = function(listenedEvent,callback){
		if(listenedEvent in listeners){
			listeners[listenedEvent].push(callback);
		} else {
			listeners[listenedEvent] = [];
			listeners[listenedEvent].push(callback);
		}
	};

	var unRegisterCallback = function(listenedEvent,callback){
		if((listenedEvent in listeners)){
			if(listeners[listenedEvent].indexOf(callback)!==-1){
				listeners[listenedEvent].splice(listeners[listenedEvent].indexOf(callback),1);
			}
		}
	};

	var notifyEvent = function(triggeredEvent,params,triggeredByUser){
		if(!listeners){
			return;
		}
		params = params || {};
		params.triggeredByUser = !(triggeredByUser===false);
		var eventListeners = listeners[triggeredEvent];
		if(eventListeners){
			for(var i=0; i<eventListeners.length; i++){
				eventListeners[i](params);
			}
		}
	};

	return {
			init 				: init,
			notifyEvent			: notifyEvent,
			registerCallback 	: registerCallback,
			unRegisterCallback 	: unRegisterCallback
	};

}) (SceneMaker,jQuery);


SceneMaker.Viewer = (function(SM,$,undefined){

	//Initial options
	var initOptions;
	//Pointer to the current scene
	var current_scene;

	/**
	 * Function to initialize the Viewer
	 */
	var init = function(){
		_init(SM.getOptions())
	};

	var _init = function(options){
		SM.Editing = false;
		$("body").addClass("SceneMakerViewerBody");
		
		initOptions = (typeof options == "object") ? options : {};

		SM.Debugging.init(options);
		
		if((initOptions["configuration"])&&(SM.Configuration)){
			SM.Configuration.init(initOptions["configuration"]);
		}

		var scene = options.scene;
		SM.Utils.init();
		SM.I18n.init(initOptions,scene);

		SM.Debugging.log("\n\nScene Maker initiated with scene:\n"); 
		SM.Debugging.log(JSON.stringify(scene));

		scene = SM.Utils.fixScene(scene);
		if(scene===null){
			SM.Utils.showPNotValidDialog();
			return;
		}
		current_scene = scene;
		
		SM.Status.init(function(){
			//Status loading finishes
			_initAferStatusLoaded(options,scene);
		});
	};

	var _initAferStatusLoaded = function(options,scene){
		SM.Utils.Loader.loadLanguageCSS();
		SM.EventsNotifier.init();
		SM.Object.init();
		SM.Screen.init();
		SM.View.init();
		SM.Marker.init();
		SM.Actions.init(scene);
		SM.Caption.init();
		SM.Slides.init();
		SM.I18n.translateUI();
		SM.User.init(options);
		SM.Events.init();
		SM.Video.init();
		SM.Audio.init();
		SM.FullScreen.init();
		SM.Scene.init(scene, function(){
			_initAferRenderScene(options,scene);
		});
	};

	var _initAferRenderScene = function(options,scene){
		SM.Video.HTML5.setMultimediaEvents();
		SM.Screen.updateCurrentScreenFromHash();
		SM.Screen.updateScreens();
		SM.ViewerAdapter.init(options);
		SM.Utils.Loader.preloadResources(scene);

		if(SM.Screen.getCurrentScreenNumber()>0){
			SM.Slides.triggerSlideEnterEvent($(SM.Screen.getCurrentScreen()).attr("id"));
		}

		if(!SM.Status.isExternalDomain()){
			//Try to win focus
			window.focus();
		}

		//Init Escapp client
		SM.Escapp.init(options,scene);
	};

	var getOptions = function(){	
		return initOptions;
	};

	var onSlideEnterViewer = function(e){
		var slide = e.target;
		var isView = SM.Slides.isView(slide);
		var cSlide = SM.Slides.getCurrentSlide();

		//Prevent parent to trigger onSlideEnterViewer
		//Use to prevent screens to be called when enter in one of their views
		e.stopPropagation();

		//Load objects
		if(isView){
			setTimeout(function(){
				var $slide = $(slide);
				if($slide.hasClass(SM.Constant.OBJECT)){
					//Prevent objects to load when the view isn't focused
					if($(cSlide).attr("id") === $(SM.Slides.getCurrentSlide()).attr("id")){
						SM.ObjectPlayer.loadObject($slide);
					}
				}
			}, 400);
			SM.Video.HTML5.playMultimedia(slide);
		} else {
			//isScreen
			SM.Screen.onEnterScreen(slide);
		}

		//Check actions
		SM.Actions.checkActionsForSlideEnterEvent(slide.id);
	};

	var onSlideLeaveViewer = function(e){
		var slide = e.target;
		var isView = SM.Slides.isView(slide);

		e.stopPropagation();

		if(isView){
			if($(slide).hasClass(SM.Constant.OBJECT)){
				SM.ObjectPlayer.unloadObject($(slide));
			}
			SM.Video.HTML5.stopMultimedia(slide);
		} else {
			//isScreen
			SM.Screen.onLeaveScreen(slide);
		}
	};
	
	var getCurrentScene = function(){
		return current_scene;
	};

	return {
		init 						: init, 
		getOptions					: getOptions,
		getCurrentScene				: getCurrentScene,
		onSlideEnterViewer			: onSlideEnterViewer,
		onSlideLeaveViewer			: onSlideLeaveViewer
	};

}) (SceneMaker,jQuery);

SceneMaker.Debugging = (function(SM,$,undefined){
	
	var developping = false;
	var settings;

	var init = function(options){
		if((options)&&(typeof options["developping"] == "boolean")){
			developping = options["developping"];
			if(developping){
				if(options["developmentSettings"]){
					settings = options["developmentSettings"];
				}
			}
		} else {
			developping = false;
			settings = null;
		}
	};
	
	var log = function(...args){
		if ((window.console && window.console.log) && (developping)) {
			console.log(...args);
		}
	};
	
	var enableDevelopingMode = function(){
		developping = true;
	};
	
	var disableDevelopingMode = function(){
		developping = false;
	};
	
	var isDevelopping = function(){
		return developping;
	};
	
	var getActionInit = function(){
		if(settings){
			return settings.actionInit;
		} else {
			//Default action
			return "nothing";
		}
	};
	
	var getTestingScene = function(){
		if((settings)&&(settings.testing_scene)){
			return settings.testing_scene;
		} else {
			log("Error: Please specify development settings");
			return null;
		}
	};
	
	return {
		init 						: init,
		log 						: log,
		enableDevelopingMode 		: enableDevelopingMode,
		disableDevelopingMode		: disableDevelopingMode,
		isDevelopping				: isDevelopping,
		getActionInit				: getActionInit,
		getTestingScene				: getTestingScene
	};

}) (SceneMaker, jQuery);


SceneMaker.Validator = (function(SM,$,undefined){
	
	var init = function(){
	};
	
	var validateObject = function(object){
		if(!object){
			return false;
		}
		
		if((typeof object === "string")&&(object.trim()==="")){
			return false;
		}

		var objectInfo = SM.Object.getObjectInfo(object);
		if(!objectInfo){
			return false;
		}
		if((!objectInfo.source)||(!objectInfo.type)){
			return false;
		}
		if(typeof objectInfo.source === "string"){
			if(objectInfo.source.trim()===""){
				return false;
			}
		} else if(typeof objectInfo.source === "object"){
			if(objectInfo.source.length<1){
				return false;
			}
		} else {
			return false;
		}

		return true;
	};
	
	return {
		init            	: init,
		validateObject  	: validateObject
	};

}) (SceneMaker, jQuery);

SceneMaker.Status = (function(SM,$,undefined){
	var _device;
	var _isEmbed;
	var _container;
	var _containerType;
	var _isExternalDomain;
	var _isPreview;
	var _protocol;
	
	var init = function(callback){
		_checkEmbed();
		_checkDomain();
		_checkContainer();
		_checkProtocol();
		_checkPreview();

		SM.Status.Device.init(function(returnedDevice){
			//Device and its viewport loaded
			_device = returnedDevice;

			if(typeof callback === "function"){
				callback();
			}
		});
	};

	var _checkEmbed = function(){
		_isEmbed = ((window.location != window.parent.location) ? true : false);
		return _isEmbed;
	};

	var _checkDomain = function(){
		_isExternalDomain = false;

		if(_checkEmbed()){
			try {
				var parent = window.parent;
				while(parent!=window.top){
					if(typeof parent.location.href === "undefined"){
						_isExternalDomain = true;
						break;
					} else {
						parent = parent.parent;
					}
				}
				if(typeof window.top.location.href === "undefined"){
					_isExternalDomain = true;
				}
			} catch(e) {
				_isExternalDomain = true;
			}
		}

		return _isExternalDomain;
	};

	var _checkContainer = function(){
		_container = undefined;
		_containerType = "undefined";

		if((_isEmbed)&&(!_isExternalDomain)){
			try{
				switch(window.frameElement.tagName){
					case "OBJECT":
					case "IFRAME":
					default:
						_containerType = window.frameElement.tagName;
						_container = window.frameElement;
				}
			} catch (e){}
		}
	};

	var _checkProtocol = function(){
		var protocol;
		try {
			protocol = document.location.protocol;
		} catch(e){}

		if(typeof protocol == "string"){
			var protocolMatch = protocol.match(/[\w]+/);
			if((protocolMatch instanceof Array)&&(typeof protocolMatch[0] == "string")){
				protocol = protocolMatch[0];
			} else {
				protocol = undefined;
			}
		}

		if(typeof protocol == "string"){
			_protocol = protocol;
		} else {
			_protocol = "unknown";
		}
	};

	var _checkPreview = function(){
		var options = SM.Utils.getOptions();
		if(typeof options["preview"] == "boolean"){
			_isPreview = options["preview"];
		} else {
			_isPreview = false;
		}
	};


	//////////////////////////
	// Getters and Setters
	//////////////////////////

	var getDevice = function(){
		return _device;
	};

	var isEmbed = function(){
		return _isEmbed;
	};

	var getContainer = function(){
		return _container;
	};

	var getContainerType = function(){
		return _containerType;
	};

	var isExternalDomain = function(){
		return _isExternalDomain;
	};

	var getProtocol = function(){
		if(typeof _protocol == "undefined"){
			_checkProtocol();
		}
		return _protocol;
	};

	var isPreview = function(){
		return _isPreview;
	};

	return {
		init						: init,
		getDevice					: getDevice,
		isExternalDomain 			: isExternalDomain,
		isEmbed						: isEmbed,
		getContainer				: getContainer,
		getContainerType			: getContainerType,
		getProtocol					: getProtocol,
		isPreview 					: isPreview
	};

}) (SceneMaker, jQuery);


SceneMaker.Status.Device = (function(SM,$,undefined){

	var init = function(callback){
		SM.Status.Device.Browser.init();
		SM.Status.Device.Features.init();
		_fillDevice(callback);
	};

	var _fillDevice = function(callback){
		var device = {};
		device.browser = SM.Status.Device.Browser.fillBrowser();
		device.features = {};
 
		_fillUserAgentBeforeViewport(device);
		_loadViewportForDevice(device,function(){
			//On viewport loaded
			device.features = SM.Status.Device.Features.fillFeatures();

			if(typeof callback === "function"){
				callback(device);
			}
		});
	};

	var _fillUserAgentBeforeViewport = function(device){
		//Apple devices
		device.iPhone = /iPhone/i.test(navigator.userAgent);
		device.iPad = /iPad/i.test(navigator.userAgent);
		device.iOS = device.iPhone || device.iPad;

		//Android devices
		device.android = /android/i.test(navigator.userAgent);
	};

	var _loadViewportForDevice = function(device,callback){
		if((device.iOS)&&(device.browser.name===SM.Constant.SAFARI)){
			_setViewportForSafariForIphone(callback);
		} else if(device.android){
			if(device.browser.name===SM.Constant.CHROME){
				_setViewportForChromeForAndroid(callback);
			} else if(device.browser.name===SM.Constant.ANDROID_BROWSER){
				_setViewportForAndroidBrowser(callback);
			}
		} else {
			if(typeof callback === "function"){
				callback();
			}
		}
	};

	/*
	 * Take a look at meta viewport browser compatibility
	 * http://www.quirksmode.org/mobile/tableViewport.html#metaviewport
	 *
	 * Totally remove viewport is not supported in Safari or Android browsers
	 * Change its content "on fly" fails in some devices.
	 * So, its preferable to load an initial suitable viewport according to the specific device
	 */
	var _setViewport = function(viewportContent,callback){
		var viewport = $("head>meta[name='viewport']");
		if(viewport.length===0){
			//Insert viewport
			$("head").prepend('<meta name="viewport" content="'+viewportContent+'"/>');
		} else {
			//Change viewport
			$(viewport).attr("content",viewportContent);
		}
		setTimeout(function(){
			if(typeof callback === "function"){
				callback();
			}
		},1250);
	};

	var _setViewportForAndroidBrowser = function(callback){
		_setViewport("user-scalable=yes",callback);
	};

	var _setViewportForChromeForAndroid = function(callback){
		_setViewport("width=device-width,height=device-height,user-scalable=yes",callback);
	}

	var _setViewportForSafariForIphone = function(callback){
		_setViewport("user-scalable=yes",callback);
	};

	return {
		init  : init
	};

}) (SceneMaker, jQuery);


SceneMaker.Status.Device.Browser = (function(SM,$,undefined){
	//Constants
	var _UA_IE = 'Microsoft Internet Explorer';
	var _UA_NETSCAPE = 'Netscape';

	var init = function(){
	};

	var fillBrowser = function(){
		var browser = {};

		var _version = _getFirefoxVersion();
		if(_version!==-1){
			browser.name = SM.Constant.FIREFOX;
			browser.version = _version;
			return browser;
		}

		_version = _getGoogleChromeVersion();
		if(_version!==-1){
			browser.name = SM.Constant.CHROME;
			browser.version = _version;
			return browser;
		}

		_version = _getInternetExplorerVersion();
		if(_version!==-1){
			browser.name = SM.Constant.IE;
			browser.version = _version;
			return browser;
		}

		//Look for Safari and Android Native browser
		//They have the same user agent type
		_version = _getSafariVersion();
		if(_version!==-1){
			var _isAndroid = /android/i.test(navigator.userAgent);
			if(_isAndroid){
				browser.name = SM.Constant.ANDROID_BROWSER;
			} else {
				browser.name = SM.Constant.SAFARI;
			}
			browser.version = _version;
			return browser;
		}

		//No browser founded
		browser.name = SM.Constant.UNKNOWN;
		browser.version = -1;

		return browser;
	};

	var _getInternetExplorerVersion = function(){
		var rv = -1; //No explorer
		if (navigator.appName === _UA_IE) {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null){
				rv = parseFloat(RegExp.$1);
			} 
		} else if(navigator.appName === _UA_NETSCAPE){
			//Try to detect IE11
			var ua = navigator.userAgent;
			var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null){
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
	};
			
	var _getFirefoxVersion = function(){
      var rv = -1; //No firefox
      if (navigator.appName === _UA_NETSCAPE) {
          var ua = navigator.userAgent;
          var re = new RegExp(".* Firefox/([0-9.]+)");
          if (re.exec(ua) != null){
           	rv = parseFloat(RegExp.$1);
          } 
      }
      return rv;
    };

	var _getGoogleChromeVersion = function(){
      var rv = -1; //No Google Chrome
      if (navigator.appName === _UA_NETSCAPE) {
          var ua = navigator.userAgent;
          var re = new RegExp(".* Chrome/([0-9.]+)");
           if (re.exec(ua) != null){
           	rv = parseFloat(RegExp.$1);
           }
      }
      return rv;
    };

	var _getSafariVersion = function(){
		var rv = -1; //No Safari
		if (navigator.appName === _UA_NETSCAPE){
			var ua = navigator.userAgent;
			if (ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf("crmo")==-1) {
				var rv = -2; //Safari with unknown version

				//Try to get Safari Version
				var re = new RegExp(".* Version/([0-9.]+)");
				if (re.exec(ua) != null){
					rv = parseFloat(RegExp.$1);
				}
			}
		}
		return rv;
	};
	
	return {
		init            		: init,
		fillBrowser				: fillBrowser
	};

}) (SceneMaker, jQuery);


SceneMaker.Status.Device.Features = (function(SM,$,undefined){
	
	var init = function(){
	};

	var fillFeatures = function(){
		var features = {};

		//Fullscreen support
		features.fullscreen = SM.FullScreen.isFullScreenSupported();
		
		//Touchscreen detection
		features.touchScreen = !!('ontouchstart' in window);

		//LocalStorage detection
		features.localStorage = _checkLocalStorageSupport();

		//Session management
		features.history = ((typeof history === "object")&&(typeof history.back === "function")&&(typeof history.go === "function"));

		if((features.history)&&(typeof history.pushState == "function")){
			features.historypushState = true;
		} else {
			features.historypushState = false;
		}

		//FileReader API
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			features.reader = true;
		} else {
			features.reader = false;
		}

		//PDF native reader
		features.pdfReader = false;
		if((typeof navigator.mimeTypes == "object")&&("application/pdf" in navigator.mimeTypes)){
			features.pdfReader = true;
		}

		return features;
	};

	var _checkLocalStorageSupport = function(){
		var LSSupported = (typeof(Storage)!=="undefined");
		if(LSSupported){
			//Check if there is no security restrictions
			try {
				localStorage.setItem("myKey","myKeyValue");
				localStorage.getItem("myKey");
				localStorage.removeItem("myKey");
				return true;
			} catch(e){
				return false;
			}
		} else {
			return false;
		}
	};
	
	return {
		init            		: init,
		fillFeatures 			: fillFeatures
	};

}) (SceneMaker, jQuery);


SceneMaker.ViewerAdapter = (function(SM,$,undefined){
	var _initialized = false;
	var _fullscreenButton;
	var _lastWidth;
	var _lastHeight;
	var _lastSlideWidth;
	var _lastSlideHeight;
	var _sceneAspectRatioString;
	var _sceneAspectRatio;
	var _referenceSlideWith;
	var _referenceSlideHeight;

	var init = function(options){
		if(_initialized){
			return;
		} 
		_initialized = true;

		_fullscreenButton = SM.FullScreen.canFullScreen();
		//No fs for preview
		_fullscreenButton = _fullscreenButton && (!SM.Status.isPreview());

		$("#viewbar").show();
		
		if(SM.Status.isPreview()){
			$("div#viewerpreview").show();
		}

		//Init fullscreen
		if(_fullscreenButton){
			SM.FullScreen.enableFullScreen();
			$("#page-fullscreen").show();
		} else {
			$("#page-fullscreen").hide();
		}

		//Update interface and init texts
		updateInterface();
		SM.Text.init();
	};

	var applyAspectRatio = function(newAspectRatio){
		if((typeof newAspectRatio !== "string")||(["4:3","16:9"].indexOf(newAspectRatio)===-1)){
			return;
		}
		if(_sceneAspectRatioString === newAspectRatio){
			return;
		}
		_sceneAspectRatioString = newAspectRatio;
		$("body").attr("aspectRatio", newAspectRatio);

		if(newAspectRatio === "16:9"){
			_sceneAspectRatio = 16/9;
			_referenceSlideWidth = 1024;
			_referenceSlideHeight = 576;
		} else {
			_sceneAspectRatio = 4/3;
			_referenceSlideWidth = 800;
			_referenceSlideHeight = 600;
		}
	};

	var getAspectRatio = function(){
		return _sceneAspectRatioString;
	};

	var updateInterface = function(){
		if(typeof _sceneAspectRatio === "undefined"){
			return;
		}
		var cWidth = $(window).width();
		var cHeight = $(window).height();
		if((cWidth===_lastWidth)&&(cHeight===_lastHeight)){
			return;
		}
		_lastWidth = cWidth;
		_lastHeight = cHeight;
		_setupSize();
	};

	var _setupSize = function(){
		var finalSlideWidth;
		var finalSlideHeight;

		//Constants
		var min_margin_height = 25;
		var min_margin_width = 10;

		//Calculations
		var viewbarHeight = _getDesiredVieweBarHeight(_lastHeight);
		var height = _lastHeight - viewbarHeight;
		var width = _lastWidth;

		var aspectRatio = (width-min_margin_width)/(height-min_margin_height);
		if(aspectRatio > _sceneAspectRatio){
			finalSlideHeight = height - min_margin_height;
			finalSlideWidth = finalSlideHeight*_sceneAspectRatio;
			var widthMargin = (width - finalSlideWidth);
			if(widthMargin < min_margin_width){
				var marginWidthToAdd = min_margin_width - widthMargin;
				finalSlideWidth = finalSlideWidth - marginWidthToAdd;
			}
		} else {
			finalSlideWidth = width - min_margin_width;
			finalSlideHeight = finalSlideWidth/_sceneAspectRatio;
			var heightMargin = (height - finalSlideHeight);
			if(heightMargin < min_margin_height){
				var marginHeightToAdd = min_margin_height - heightMargin;
				finalSlideHeight = finalSlideHeight - marginHeightToAdd;
			}
		}

		if(typeof _lastSlideHeight !== "number"){
			_lastSlideHeight = _referenceSlideHeight;
		}
		if(typeof _lastSlideWidth !== "number"){
			_lastSlideWidth = _referenceSlideWidth;
		}
		var increase = finalSlideHeight/_lastSlideHeight;
		//var increaseW = finalSlideWidth/_lastSlideWidth; //increaseW is the same as increase
		_lastSlideHeight = finalSlideHeight;
		_lastSlideWidth = finalSlideWidth;

		//Update UI

		//Viewbar
		$("#viewbar").height(viewbarHeight);
		
		//Resize slides
		var screens = $(".slides > article");
		var views = $(".slides > article > article");
		var allSlides = $(".slides article");
		$(allSlides).css("height", finalSlideHeight);
		$(allSlides).css("width", finalSlideWidth);

		//margin-top and margin-left half of the height and width
		var marginTop = finalSlideHeight/2 + viewbarHeight/2;
		var marginLeft = finalSlideWidth/2;
		$(screens).css("margin-top", "-" + marginTop + "px");
		$(views).css("margin-top", "-" + finalSlideHeight/2 + "px");
		$(allSlides).css("margin-left", "-" + marginLeft + "px");
		
		//Paddings
		var paddingTopAndBottom = 3/100*finalSlideWidth;	//3%
		var paddingLeftAndRight = 5/100*finalSlideWidth;	//5%
		$(allSlides).css("padding-left",paddingLeftAndRight);
		$(allSlides).css("padding-right",paddingLeftAndRight); 
		$(allSlides).css("padding-top",	paddingTopAndBottom);
		$(allSlides).css("padding-bottom",paddingTopAndBottom);

		//Close button for views
		var _closeButtonDimension = 23;
		if(increase <= 1){
			_closeButtonDimension = _closeButtonDimension*_getPonderatedIncrease(increase,0.7);
		} else {
			_closeButtonDimension = _closeButtonDimension*_getPonderatedIncrease(increase,0.2);
		}
		$("div.close_view").css("width",_closeButtonDimension+"px");
		$("div.close_view").css("height",_closeButtonDimension+"px");


		//Fs button
		$("#page-fullscreen").width($("#page-fullscreen").height());

		_updateTooltipsAfterSetupSize(increase);
		_updateFancyboxAfterSetupSize(increase);
		SM.Text.aftersetupSize(increase);
		SM.ObjectPlayer.aftersetupSize(increase);
		SM.Screen.afterSetupSize(increase);
	};

	var _getDesiredVieweBarHeight = function(windowHeight){
		var minimumViewBarHeight = 26;
		var maxViewBarHeight = 40;
		var estimatedIncrease = windowHeight/_referenceSlideHeight;
		var viewBarHeight = 40 * _getPonderatedIncrease(estimatedIncrease,0.7);
		return Math.min(Math.max(viewBarHeight,minimumViewBarHeight),maxViewBarHeight);
	};

	var _updateFancyboxAfterSetupSize = function(increase){
		var fOverlay = $("#fancybox-overlay");
		if(($(fOverlay).length<1)||(!$(fOverlay).is(":visible"))){
			return;
		}

		var fwrap = $("#fancybox-wrap");
		var fcontent = $("#fancybox-content");
		var fccontentDivs = $("#" + $(fcontent).attr("id") + " > div");
		
		var currentSlide = $(".current");
		var paddingTop = $(currentSlide).cssNumber("padding-top");
		var paddingLeft = $(currentSlide).cssNumber("padding-left");
		var paddingRight = $(currentSlide).cssNumber("padding-right");
		var offset = $(currentSlide).offset();
		
		var _closeButtonDimension = 23;
		if(increase <= 1){
			_closeButtonDimension = _closeButtonDimension*_getPonderatedIncrease(increase,0.7);
		} else {
			_closeButtonDimension = _closeButtonDimension*_getPonderatedIncrease(increase,0.2);
		}
		var fcClose = $("#fancybox-close");
		$(fcClose).width(_closeButtonDimension + "px");
		$(fcClose).height(_closeButtonDimension + "px");
		$(fcClose).css("padding","10px");
		$(fcClose).css("padding-left","4px");
		
		$(fwrap).css("margin-top", "0px");
		$(fwrap).css("margin-left", "0px");
		$(fwrap).width($(currentSlide).width()+paddingLeft+paddingRight);
		$(fwrap).height($(currentSlide).height()+2*paddingTop);
		$(fwrap).css("top", offset.top + "px");  
		$(fwrap).css("left", offset.left + "px");

		$(fcontent).width("100%");
		$(fcontent).height("100%");
		$(fccontentDivs).width("100%");
		$(fccontentDivs).height("100%");
	};

	var _updateTooltipsAfterSetupSize = function(increase){
		var $visibleToolTips = $("div[data-tippy-root]:visible");
		if ($visibleToolTips.length > 0) {
			$visibleToolTips.each(function(index, tooltip){
				$("[markertooltipid=" + $(tooltip).attr("id") + "]").each(function(index, hotspot){
					if(typeof hotspot._tippy !== "undefined"){
						hotspot._tippy.hide();
						hotspot._tippy.show();
					}
				});
			});
		}
	};

	var _getPonderatedIncrease = function(increase,pFactor){
		var diff = (increase-1)*pFactor;
		return 1+diff;
	};
	
	return {
		init 							: init,
		getAspectRatio					: getAspectRatio,
		applyAspectRatio				: applyAspectRatio,
		updateInterface 				: updateInterface
	};

}) (SceneMaker, jQuery);

SceneMaker.Text = (function(SM,$,undefined){
	var fontSizeReference = 12;

	/*
	 * Translate font-size params of HTML tags (<p>,<span>,...) from px to rems (http://caniuse.com/rem)
	 * Also convert <font> tags into <span> tags with the font-size param specified in rems
	 */
	var init = function(){
		//Adapt area text fields
		_makeTextResponsive($("article > div.textArea"));

		//Make Tables responsive
		$("article > div.textArea > table").each(function(index,table){
			//Table text
			_makeTextResponsive($(table).find("caption"));

			$(table).find("td").each(function(index,td){
				_makeTextResponsive(td);
			});

			//Table dimensions
			var tableOrgStyle = $(table).attr("style");
			if(tableOrgStyle){
				var tableStyle = "";

				//Original Height: 600, Original width: 800
				//Make table width and height relative (%)
				var tableWidth = SM.Utils.getWidthFromStyle(tableOrgStyle);
				if(tableWidth){
					var percentWidth = (tableWidth*100)/800;
					tableStyle += "width:"+percentWidth+"%;";
				}
				var tableHeight = SM.Utils.getHeightFromStyle(tableOrgStyle);
				if(tableHeight){
					var percentHeight = (tableHeight*100)/600;
					tableStyle += "height:"+percentHeight+"%;";
				}
				if(tableStyle!==""){
					$(table).attr("style",tableStyle);
				}
			}
		});
	};

	var _makeTextResponsive = function(container){
		_adaptFonts($(container).find("font"));
		_setStyleInRem($(container).find("[style]"));
	};

	var _setStyleInRem = function(els){
		$(els).each(function(index,el){

			var oldStyle = $(el).attr("style");
			if(typeof oldStyle !== "string"){
				return;
			}

			var fontSize = SM.Utils.getFontSizeFromStyle(oldStyle);
			if((typeof fontSize != "number")||(isNaN(fontSize))){
				return;
			}

			//Convert to rem (http://pxtoem.com/)
			var rem = (fontSize/fontSizeReference) + "rem";
			var newStyle = SM.Utils.addFontSizeToStyle(oldStyle,rem);
			$(el).attr("style",newStyle);
		});
	};

	var _adaptFonts = function(fonts){
		$(fonts).each(function(index,font){
			//Get font size in px
			var fSize = $(font).attr("size");
			if(!fSize){
				return;
			}
			var fontSize = parseInt(fSize);
			if (isNaN(fontSize)){
				return;
			}
			$(font).hide();

			//Convert to rem
			var pxfontSize = _font_to_px(fontSize);
			var rem = (pxfontSize/fontSizeReference) + "rem";
			var span = $("<span style='font-size:"+rem+"'></span>");
			$(span).html($(font).html());
			$(font).before(span);
			$(font).remove();
		});
	};

    /*
     * Update Text-base size
     */
	var aftersetupSize = function(increase){
		increase = increase*_correctionFactor(increase);
		var reference_font_size = fontSizeReference;
		var texts = $("html");
		$(texts).css("font-size", reference_font_size*increase + "px");
	};

	/*
	 * A correction factor to better adapt text to screens size.
	 * Increase factor is not accuracy enough, specially for small screens.
	 * For increaseFactor=1 and around, the correction factor is 0.
	 * Correction factor is calculated empirically.
	 * @param {number} factor Increase factor.
	 * @return {number} correctionFactor Correction factor to fix increase factor.
	 */
	var _correctionFactor = function(factor){
		if(factor < 0.25) {
			return 0.5;
		} else if(_isInRange(factor,0.25,0.3)){
			return 0.55;
		} else if(_isInRange(factor,0.3,0.35)){
			return 0.65;
		} else if(_isInRange(factor,0.35,0.4)){
			return 0.7;
		} else if(_isInRange(factor,0.4,0.5)){
			return 0.8;
		} else if(_isInRange(factor,0.5,0.6)){
			return 0.85;
		} else if(_isInRange(factor,0.6,0.75)){
			return 0.9;
		} else if(_isInRange(factor,0.75,0.95)){
			return 0.95;
		} else if(_isInRange(factor,0.95,1.5)){
			return 1;
		} else if (factor > 1.5){
			return 1;
		}
		return 1;
	};

	var _isInRange = function(number, min, max){
		return number > min && number <= max;
	};

	/* Convert <font size="x"> tags to <span style="font-size:y px"> tags
	 * Where 'x' is fz and 'y' is px.
	 * Is not exactly, because this conversion depends of the browser.
	 * Anyway, is a good aproximation.
	 * Ideally, Wysiwyg should not generate <font> tags since they are deprecated in HTMl5.
	 * Neverthless, sometimes, it does.
	 */
	var _font_to_px = function(fz){
		switch(fz){
			case 7:
				return 48;
				break;
			case 6:
				return 32;
				break;
			case 5:
				return 24;
				break;
			case 4:
				return 18;
				break;
			case 3:
				return 16;
				break;
			case 2:
				return 14;
				break;
			case 1:
				return 12;
				break;
			default:
				break;
		}
	};

    return {
        init			: init,
		aftersetupSize 	: aftersetupSize
    };
    
})(SceneMaker, jQuery);

SceneMaker.Utils = (function(SM,undefined){
	
	var ids;
	// a list of all used ids
	var domIds;
	// myDomId = domIds['prefix'] returns a unicId for the specified prefix

	var init = function(){
		if(!domIds){
			domIds = new Array();
			ids = [];
		}

		//Extend JQuery functionality
		jQuery.fn.cssNumber = function(prop){
			var v = parseInt(this.css(prop),10);
			return isNaN(v) ? 0 : v;
		};

		jQuery.fn.reverse = [].reverse;

		//Extend primitives
		String.prototype.replaceAll = function(find,replace){
			var str = this;
			return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
		};

		if (!Array.prototype.filter){
			Array.prototype.filter = function(fun /*, thisArg */){
				"use strict";

				if (this === void 0 || this === null)
					throw new TypeError();

				var t = Object(this);
				var len = t.length >>> 0;
				if (typeof fun !== "function")
					throw new TypeError();

				var res = [];
				var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
				for (var i = 0; i < len; i++){
					if (i in t){
						var val = t[i];

						// NOTE: Technically this should Object.defineProperty at
						//       the next index, as push can be affected by
						//       properties on Object.prototype and Array.prototype.
						//       But that method's new, and collisions should be
						//       rare, so use the more-compatible alternative.
						if (fun.call(thisArg, val, i, t))
							res.push(val);
					}
				}

				return res;
			};
		};

		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
		if(!Array.prototype.map){
			Array.prototype.map = function(fun /*, thisArg */){
				"use strict";

				if (this === void 0 || this === null)
					throw new TypeError();

				var t = Object(this);
				var len = t.length >>> 0;
				if (typeof fun !== "function")
					throw new TypeError();

				var res = new Array(len);
				var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
				for (var i = 0; i < len; i++)
				{
					if (i in t)
						res[i] = fun.call(thisArg, t[i], i, t);
				}
				return res;
			};
		};

		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Compatibility
		if (!Array.prototype.indexOf){
			Array.prototype.indexOf = function(elt /*, from*/){
				var len = this.length >>> 0;
				var from = Number(arguments[1]) || 0;
				from = (from < 0)
					? Math.ceil(from)
					: Math.floor(from);
				if (from < 0)
					from += len;

				for (; from < len; from++){
					if (from in this &&	this[from] === elt)
						return from;
				}
				return -1;
			};
		};

		// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
		if (!Object.keys) {
			Object.keys = (function () {
				'use strict';
				var hasOwnProperty = Object.prototype.hasOwnProperty,
					hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
					dontEnums = [
					'toString',
					'toLocaleString',
					'valueOf',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'constructor'
					],
					dontEnumsLength = dontEnums.length;

				return function (obj) {
					if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
						throw new TypeError('Object.keys called on non-object');
					}

					var result = [], prop, i;

					for (prop in obj) {
						if (hasOwnProperty.call(obj, prop)) {
							result.push(prop);
						}
					}

					if (hasDontEnumBug) {
						for (i = 0; i < dontEnumsLength; i++) {
							if (hasOwnProperty.call(obj, dontEnums[i])) {
								result.push(dontEnums[i]);
							}
						}
					}
					return result;
				};
			}());
		};

		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
		if (typeof Array.prototype.forEach !== 'function') {
			Array.prototype.forEach = function(callback){
				for (var i = 0; i < this.length; i++){
					callback.apply(this, [this[i], i, this]);
				}
			};
		};

		//Polifill for trim function
		if(typeof String.prototype.trim !== 'function') {
			String.prototype.trim = function() {
				return this.replace(/^\s+|\s+$/g, ''); 
			}
		};

		SM.Utils.Loader.init();
	};

	var getOptions = function(){
		if(SM.Editing){
			return SM.Editor.getOptions();
		} else {
			return SM.Viewer.getOptions();
		}
	};

   /**
	* Return a unic id.
	* full_id_prefix: Specify a prefix for the id, for example, article to get "article_x" ids.
	* Specify a separator for nested ids.
	* justCheck: only check if the id is really unic, if not generate a new id.
	*/
	var getId = function(full_id_prefix,justCheck,separator){
		if(!justCheck){
			if(typeof full_id_prefix !== "string"){
				//Default prefix
				full_id_prefix = "unicID";
			}

			if(typeof separator !== "string"){
				separator = "";
			}

			if(typeof domIds[full_id_prefix] === "undefined"){
				domIds[full_id_prefix] = 0;
			}
			domIds[full_id_prefix] = domIds[full_id_prefix] + 1;
			var full_id = full_id_prefix + separator + domIds[full_id_prefix];
		} else {
			var full_id = full_id_prefix;
			full_id_prefix = full_id_prefix.replace(full_id_prefix[full_id_prefix.length-1],"");
		}

		//Ensure that the id is unic.
		if(($("#"+full_id).length===0)&&(ids.indexOf(full_id)===-1)){
			ids.push(full_id);
			return full_id;
		} else {
			return getId(full_id_prefix,false,separator);
		}
	};

	var registerId = function(id){
		if (ids.indexOf(id)===-1){
			ids.push(id);
		}
	};

	var deepMerge = function(h1,h2){
		if((typeof h1 === "object")&&(typeof h2 === "object")&&(!(h1 instanceof Array))){
			let keys = Object.keys(Object.assign({},h1,h2));
			let keysL = keys.length;
			for(let i=0; i<keysL; i++){
				h1[keys[i]] = deepMerge(h1[keys[i]],h2[keys[i]]);
			}
			return h1;
		} else {
			if(typeof h2 !== "undefined"){
				return h2;
			} else {
				return h1;
			}
		}
	};

	/**
	 * Fix JSONs with old format
	 * Return null if JSON cannot be loaded
	 */
	var fixScene = function(scene){
		if(typeof scene !== "object"){
			return null;
		}
		return scene;
	};

	var getOuterHTML = function(tag){
		//In some old browsers outerHTML does not work
		if (typeof($(tag)[0].outerHTML)==='undefined'){
			return $(tag).clone().wrap('<div></div>').parent().html();
		} else {
			return $(tag)[0].outerHTML;
		}
	};

	var removeParamFromUrl = function(url,paramName){
		if((typeof url !== "string")||(typeof paramName !== "string")){
			return url;
		}

		//Remove hash
		var splitHash = url.split("#");
		url = splitHash[0];

		var splitParams = url.split("?");
		if (splitParams.length === 2){
			url = splitParams[0];
			var params = splitParams[1];

			var validParams = [];
			var splitParams = params.split("&");
			var sPL = splitParams.length;
			for(var i=0; i<sPL; i++){
				var splitParam = splitParams[i].split("=");
				if(splitParam[0]!=paramName){
					validParams.push({key: splitParam[0], value: splitParam[1]}); 
				}
			}
			//Add valid params
			var vPL = validParams.length;
			for(var j=0; j<vPL; j++){
				var param = validParams[j];
				if(j===0){
					url = url + "?";
				} else {
					url = url + "&";
				}
				url = url + param.key + "=" + param.value;
			}
		}

		//Add hash (if present)
		if(splitHash.length>1){
			url = url + "#" + splitHash[1];
		}

		return url;
	};

	var addParamToUrl = function(url,paramName,paramValue){
		if((typeof url !== "string")||(typeof paramName !== "string")||(typeof paramValue !== "string")){
			return url;
		}

		//Remove param (to overwrite it in case if exists)
		url = removeParamFromUrl(url,paramName);

		//Remove hash
		var splitHash = url.split("#");
		url = splitHash[0];

		var param = paramName+"="+paramValue;
		if (url.indexOf('?') > -1){
			url += '&'+param ;
		}else{
			url += '?'+param ;
		}

		//Add hash (if present)
		if(splitHash.length>1){
			url = url + "#" + splitHash[1];
		}
		
		return url;
	};

	var getParamsFromUrl = function(url){
		var params = {};
		if(typeof url !== "string"){
			return params;
		}
		var split = url.split("?");
		if(split.length<=1){
			return params;
		} else {
			//Remove hash if present
			var urlParams = split[1].split("#")[0].split("&");
			for(var i=0; i<urlParams.length; i++){
				var resultSplit = urlParams[i].split("=");
				if(resultSplit.length===2){
					//key-value pairs
					params[resultSplit[0]] = resultSplit[1];
				}
			}
			return params;
		}
	};

	var getScreenNumberFromHash = function(){
		try {
			var location = window.location;
			if(typeof location == "undefined"){
				return;
			}

			var sNumber = Math.max(1,Math.min(SM.Screen.getScreensQuantity(),parseInt(location.hash.split("?")[0].split("#").pop())));
			if(isNaN(sNumber)){
				return undefined;
			} else {
				return sNumber;
			}
		} catch(err){
			return undefined;
		}
	};

	var removeHashFromUrlString = function(url){
		return url.split("#")[0];
	};

	var getSrcFromCSS = function(css){
		try {
			if((typeof css == "string")&&(css.indexOf("url")===0)&&(css.length>3)){
				var quote = css[4];
				if((quote=="\"")||(quote=="'")){
					return css.substring(5,css.length-2);
				} else {
					return css.substring(4,css.length-1);
				}
			}
		} catch(e){}
		return css;
	};

	var getWidthFromStyle = function(style,area){
		return getPixelDimensionsFromStyle(style,area)[0];
	};

	var getHeightFromStyle = function(style,area){
		return getPixelDimensionsFromStyle(style,area)[1];
	};
	
	var getPixelDimensionsFromStyle = function(style,area){
		var dimensions = [];
		var width=null;
		var height=null;

		$.each(style.split(";"), function(index, property){

			//We need to redefine the var in each iteration (due to Android browser issues)
			var width_percent_pattern = /width:\s?([0-9]+(\.[0-9]+)?)%/g
			var width_px_pattern = /width:\s?([0-9]+(\.?[0-9]+)?)px/g
			var height_percent_pattern = /height:\s?([0-9]+(\.[0-9]+)?)%/g
			var height_px_pattern = /height:\s?([0-9]+(\.?[0-9]+)?)px/g

			//Look for property starting by width
			if(property.indexOf("width") !== -1){

				if(property.match(width_px_pattern)){
					//Width defined in px.
					var result = width_px_pattern.exec(property);
					if(result[1]){
						width = result[1];
					}
				} else if(property.match(width_percent_pattern)){
					//Width defined in %.
					var result = width_percent_pattern.exec(property);
					if(result[1]){
						var percent = result[1];
						if(area){
							width = $(area).width()*percent/100;
						}
					}
				}
			} else  if(property.indexOf("height") !== -1){

				if(property.match(height_px_pattern)){
					//height defined in px.
					var result = height_px_pattern.exec(property);
					if(result[1]){
						height = result[1];
					}
				} else if(property.match(height_percent_pattern)){
					//Width defined in %.
					var result = height_percent_pattern.exec(property);
					if(result[1]){
						var percent = result[1];
						if(area){
							height = $(area).height()*percent/100;
						}
					}
				}
			}
		});

		dimensions.push(width);
		dimensions.push(height);
		return dimensions;
	};

	var getFontSizeFromStyle = function(style){
		if(!style){
			return;
		}
		var ft = null;
		$.each(style.split(";"), function(index, property){
			//We need to redefine the var in each iteration (due to some browsers (e.g. Android browser) issues)
			// var font_style_pattern = /font-size:\s?([0-9]+)px/g;
			var font_style_pattern = /font-size\s*:\s*((\d*\.)?\d+)px/i;
			if(property.match(font_style_pattern) != null){
				var result = font_style_pattern.exec(property);
				if ((result!==null)&&(result[1]!==null)) {
					ft = parseFloat(result[1]);
					return false;
				}
			}
		});
		return ft;
	};

	var addFontSizeToStyle = function(style,fontSize){
		if(typeof style !== "string"){
			return null;
		}

		var filterStyle = "";
		$.each(style.split(";"), function(index, property){
			if ((property.indexOf("font-size") === -1)&&(property!=="")) {
				filterStyle = filterStyle + property + "; ";
			}
		});
				
		if(fontSize){
			filterStyle = filterStyle + "font-size:"+fontSize+";";
		}

		return filterStyle;
	};

	var showPNotValidDialog = function(){
		var options = {};
		options.width = 650;
		options.height = 220;
		options.text = SM.I18n.getTrans("i.WrongResource");
		var button1 = {};
		button1.text = SM.I18n.getTrans("i.Ok");
		button1.callback = function(){
			$.fancybox.close();
		}
		options.buttons = [button1];
		SM.Utils.showDialog(options);
	};

	var showDialog = function(options){
		_cleanDialog();

		var rootTemplate = $("#notification_template");
		if($(rootTemplate).length===0){
			return;
		}

		if((!options)||(!options.text)){
			return;
		}
		
		//*Defaults
		var width = '90%';
		var height; //it will be calculated
		var showCloseButton = false;
		var notificationIconSrc;
		if(SM.Editing){
			notificationIconSrc = SM.ImagesPath + "thumbs/content_fail.png";
		}
		
		if(options.width){
			width = options.width;
		}
		if(options.showCloseButton){
			showCloseButton = options.showCloseButton;
		}
		if(options.notificationIconSrc){
			notificationIconSrc = options.notificationIconSrc;
		}

		//Automatically center text when no image is specified in the notification
		if(!notificationIconSrc){
			options.textWrapperClass = "forceCenter";
		}

		//Transform width to px (if not)
		if((typeof width == "string")&&(width.indexOf("%")!=0)){
			width = width.split("%")[0].trim();
			width = (width*$(window).width())/100;
		}

		//*Calculate Height (use root template)
		var notificationParent = $(rootTemplate).parent();
		$(rootTemplate).width(width);
		
		//Fill template
		var text_wrapper = $(rootTemplate).find(".notification_row1");
		var buttons_wrapper = $(rootTemplate).find(".notification_row2");
		var imgIcon = $(text_wrapper).find(".notificationIcon");

		if(notificationIconSrc){
			$(imgIcon).attr("src",notificationIconSrc);
			$(imgIcon).css("display","inline");
		}
		if(options.notificationIconClass){
			$(imgIcon).addClass(options.notificationIconClass);
		}

		if(options.textWrapperClass){
			$(text_wrapper).addClass(options.textWrapperClass);
		}

		if(options.buttonsWrapperClass){
			$(buttons_wrapper).addClass(options.buttonsWrapperClass);
		}

		$(text_wrapper).find(".notification_text").html(options.text);

		if(options.buttons){
			var obLength = options.buttons.length;
			$(options.buttons).reverse().each(function(index,button){
				var bNumber = obLength-index;
				var buttonDOM = $('<a href="#" buttonNumber="'+bNumber+'" class="button notification_button">'+button.text+'</a>');
				if(button.extraclass){
					$(buttonDOM).addClass(button.extraclass);
				}
				$(buttons_wrapper).append(buttonDOM);
			});
		}

		//Look for additional HTML
		if(options.middlerow){
			var middlerow = document.createElement('div');
			$(middlerow).addClass("notification_middlerow");
			$(middlerow).append(options.middlerow);
			if(options.middlerowExtraClass){
				$(middlerow).addClass(options.middlerowExtraClass);
			}
			$(buttons_wrapper).before(middlerow);
		}

		SM.Utils.addTempShown(notificationParent);
		var adjustedHeight = $(text_wrapper).outerHeight(true)+$(buttons_wrapper).outerHeight(true);
		if(options.middlerow){
			var middlerow = $(rootTemplate).find(".notification_middlerow");
			adjustedHeight = adjustedHeight + $(middlerow).outerHeight(true);
		}
		SM.Utils.removeTempShown(notificationParent);

		//*Clone the root template
		var cloneTemplate = $(rootTemplate).clone();
		$(cloneTemplate).attr("id","notification_template_cloned");
		$(notificationParent).append(cloneTemplate);
		var notification = $("#notification_template_cloned");

		//Replace buttons (we need to add the events)
		if(options.buttons){
			buttons_wrapper = $(notification).find(".notification_row2");
			$(buttons_wrapper).html("");
			var obLength = options.buttons.length;
			$(options.buttons).reverse().each(function(index,button){
				var bNumber = obLength-index;
				var buttonDOM = $('<a href="#" buttonNumber="'+bNumber+'" class="button notification_button">'+button.text+'</a>');
				if(button.extraclass){
					$(buttonDOM).addClass(button.extraclass);
				}
				$(buttons_wrapper).append(buttonDOM);

				//Add buttons callback
				$(buttons_wrapper).find(".button[buttonNumber='"+bNumber+"']").click(function(event){
					event.preventDefault();
					button.callback();
				});
			});
		};

		$("a#link_to_notification_template").fancybox({
			'autoDimensions' 	: false,
			'autoScale' 		: true,
			'scrolling'			: 'no',
			'width'				: width,
			'height'			: adjustedHeight,
			'padding' 			: 0,
			'hideOnOverlayClick': true,
			'hideOnContentClick': false,
			'showCloseButton'	: showCloseButton,
			"onStart"  	: function(data){
			},
			"onComplete"  	: function(data){
			},
			"onClosed" : function(data){
				_cleanDialog();
				if((options)&&(typeof options.onClosedCallback == "function")){
					options.onClosedCallback();
				}
			}
		});
		
		$("a#link_to_notification_template").trigger('click');
	};

	var _cleanDialog = function(){
		var notificationWrapper = $("#notification_template_wrapper");
		$(notificationWrapper).html("");
		
		var notificationTemplate = document.createElement('div');
		$(notificationTemplate).attr("id","notification_template");

		var row1 = document.createElement('div');
		$(row1).addClass("notification_row1");
		var img = document.createElement('img');
		$(img).addClass("notificationIcon");
		$(img).attr("style","display:none");
		var span = document.createElement('span');
		$(span).addClass("notification_text");
		$(row1).append(img);
		$(row1).append(span);
		$(notificationTemplate).append(row1);

		var row2 = document.createElement('div');
		$(row2).addClass("notification_row2");
		$(notificationTemplate).append(row2);

		$(notificationWrapper).append(notificationTemplate);
	};

	var isObseleteVersion = function(version){
		return _getVersionValue(SM.VERSION) > _getVersionValue(version);
	};

	var _getVersionValue = function(version){
		var vValue = 0;
		var coef = [100,10,1];
		try {
			var digits = version.split(".");
			for(var i=0; i<digits.length; i++){
				vValue += parseFloat(digits[i])*coef[i];
			}
		} catch (e){
			return 0;
		}
		return vValue;
	};

	var tempShownCounts = {};
	var addTempShown = function(els){
		$(els).each(function(index,el){
			var elId = $(el).attr("id");
			if(typeof elId == "undefined"){
				elId = SM.Utils.getId("TmpShownId");
				$(el).attr("id",elId);
			}
			var tmpShownCount = (typeof tempShownCounts[elId] != "undefined") ? tempShownCounts[elId] : 0;
			tempShownCounts[elId] = tmpShownCount+1;
			if(tmpShownCount==0){
				$(el).addClass("temp_shown");
			}
		});
	};

	var removeTempShown = function(els){
		$(els).each(function(index,el){
			var elId = $(el).attr("id");
			if(typeof elId == "undefined"){
				elId = SM.Utils.getId("TmpShownId");
				$(el).attr("id",elId);
			}
			var tmpShownCount = (typeof tempShownCounts[elId] != "undefined") ? tempShownCounts[elId] : 0;
			var newTmpShownCount = Math.max(0,tmpShownCount-1);
			tempShownCounts[elId] = newTmpShownCount;
			if(newTmpShownCount==0){
				setTimeout(function(){
					if(tempShownCounts[elId]===0){
						$(el).removeClass("temp_shown");
					}
				},1);
			}
		});
	};

	var checkUrlProtocol = function(url){
		if(typeof url == "string"){
			var protocolMatch = (url).match(/^https?:\/\//);
			if((protocolMatch instanceof Array)&&(protocolMatch.length === 1)){
				var urlProtocol = protocolMatch[0].replace(":\/\/","");
				var documentProtocol = SM.Status.getProtocol();
				if(urlProtocol != documentProtocol){
					switch(documentProtocol){
						case "https":
							//Try to load HTTP url over HTTPs
							url = "https" + url.replace(urlProtocol,""); //replace first
							break;
						case "http":
							//Try to load HTTPs url over HTTP
							//Do nothing
							break;
						default:
							//Document is not loaded over HTTP or HTTPs
							break;
					}
				}
			}
		}
		return url;
	};

	var checkWebUrl = function(url){
		if(typeof url !== "string"){
			return url;
		}
		url = checkUrlProtocol(url);
		return url;
	};

	var checkReusablePuzzleInstanceUrl = function(url){
		if(typeof url !== "string"){
			return url;
		}
		url = checkUrlProtocol(url);

		var options = SM.Utils.getOptions();
		if((typeof options !== "undefined")&&(typeof options.escapp !== "undefined")&&(typeof options.escapp.endpoint === "string")){
			try {
				var endpointDomain = new URL(options.escapp.endpoint).hostname;
				var urlDomain = new URL(url).hostname;
				if (endpointDomain === urlDomain) {
					//Add preview param
					return SM.Utils.addParamToUrl(url,"escapp_preview",(""+SM.Status.isPreview()));
				}
			} catch(e){}
		}
		return url;
	};

	return {
		init 							: init,
		getOptions 						: getOptions,
		getId							: getId,
		registerId						: registerId,
		deepMerge						: deepMerge,
		fixScene						: fixScene,
		getOuterHTML 					: getOuterHTML,
		getSrcFromCSS					: getSrcFromCSS,
		addFontSizeToStyle 				: addFontSizeToStyle,
		getFontSizeFromStyle 			: getFontSizeFromStyle,
		getWidthFromStyle   			: getWidthFromStyle,
		getHeightFromStyle  			: getHeightFromStyle,
		getPixelDimensionsFromStyle 	: getPixelDimensionsFromStyle,
		addParamToUrl					: addParamToUrl,
		removeParamFromUrl				: removeParamFromUrl,
		getParamsFromUrl				: getParamsFromUrl,
		removeHashFromUrlString			: removeHashFromUrlString,
		getScreenNumberFromHash			: getScreenNumberFromHash,
		showDialog 						: showDialog,
		showPNotValidDialog				: showPNotValidDialog,
		isObseleteVersion				: isObseleteVersion,
		addTempShown					: addTempShown,
		removeTempShown					: removeTempShown,
		checkUrlProtocol				: checkUrlProtocol,
		checkWebUrl						: checkWebUrl,
		checkReusablePuzzleInstanceUrl	: checkReusablePuzzleInstanceUrl
	};

}) (SceneMaker);

SceneMaker.Utils.Loader = (function(SM,undefined){

	var init = function(){
	};

	var preloadResources = function(scene){
		if (scene.screens && Array.isArray(scene.screens)) {
			for (let i = 0; i < scene.screens.length; i++) {
				var screen = scene.screens[i];
				if (screen.hotspots && Array.isArray(screen.hotspots)) {
					for (let j = 0; j < screen.hotspots.length; j++) {
						var hotspot = screen.hotspots[j];
						if (hotspot.actions && Array.isArray(hotspot.actions)) {
							for (let k = 0; k < hotspot.actions.length; k++) {
								_preloadResourcesForAction(hotspot.actions[k]);						
							}
						}
					}
				}	
			}
		}
	};

	var _preloadResourcesForAction = function(action){
		if (action.actionType && action.actionParams && (typeof action.actionParams === "object")) {
			switch(action.actionType){
			case "changeBackground":
				if (typeof action.actionParams.url === "string") {
					_preloadImages([action.actionParams.url]);
				}
				break;
			case "playSound":
				if (typeof action.actionParams.url === "string") {
					_preloadAudios([action.actionParams.url]);
				}
				break;
			default:
				break;
			}
		}
	};

	var _preloadImages = function(urls){
		for (let i = 0; i < urls.length; i++) {
			const img = new Image();
			img.src = urls[i];
		}
	};

	var _preloadAudios = function(urls) {
		for (let i = 0; i < urls.length; i++) {
			const audio = new Audio();
			audio.src = urls[i];
			audio.preload = "auto";
		}
	};

	var loadScript = function(scriptSrc,callback){
		if((typeof scriptSrc !== "string")||(typeof callback !== "function")){
			return;
		}

		var head = document.getElementsByTagName('head')[0];
		if(head){
			var script = document.createElement('script');
			script.setAttribute('src',scriptSrc);
			script.setAttribute('type','text/javascript');

			//Only call callback once
			var callbackCalled = false;

			var callCallback = function(){
				if(!callbackCalled){
					if(typeof callback == "function"){
						callbackCalled = true;
						callback();
					}
				}
			};

			var loadFunction = function(){
				if((this.readyState == 'complete')||(this.readyState == 'loaded')){
					callCallback();
				}
			};
			//calling a function after the js is loaded (IE)
			script.onreadystatechange = loadFunction;

			//calling a function after the js is loaded (Firefox & GChrome)
			script.onload = callCallback;

			head.appendChild(script);
		}
	};

	var loadCSS = function(path,callback){
		var url = path;
		if(url.indexOf("http") != 0){
			url = SM.StylesheetsPath + url;
			if(SM.Status.getProtocol()==="file"){
				if(url.indexOf("/") == 0){
					url = url.replace("/","");
				} 
			}
		}
		
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.type = "text/css";
		link.rel = "stylesheet"
		link.href = url;

		//Callback
		if(typeof callback == "function"){

			//Only call callback once
			var callbackCalled = false;

			var callCallback = function(){
				if(!callbackCalled){
					callbackCalled = true;
					callback();
				}
			}

			//calling a function after the css is loaded (Firefox & Google Chrome)
			link.onload = callCallback;
			link.onerror = callCallback;

			var loadFunction = function(){
				if((this.readyState == 'complete')||(this.readyState == 'loaded')){
					callCallback();
				}
			};
			//calling a function after the css is loaded (IE)
			link.onreadystatechange = loadFunction;
		};

		head.appendChild(link);

		if(typeof callback == "function"){
			//Workaround for browsers that don't support LINK onload functions
			var img = document.createElement('img');
			img.onerror = function(){
				callCallback();
			}
			img.src = url;
		}
	};

	var loadLanguageCSS = function(){
		var languagesWithCSS = ["es", "fr", "hu", "nl", "de"];
		var language = SM.I18n.getLanguage();
		if(languagesWithCSS.indexOf(language)!=-1){
			//Load CSS for this language
			loadCSS("language/" + language + ".css");
		}
	};


	/*
	* Loading dialogs
	*/

	///////////////////
	// Full Loading
	///////////////////

	var t1Loading;

	var startLoading = function(){
		if(!_isFullLoadingActive()){
			t1Loading = Date.now();
			$("#fancyLoad").trigger('click');
		}
	};

	var stopLoading = function(callback){
		var diff = Date.now()-t1Loading;

		if(diff < 1250){
			setTimeout(function(){
				stopLoading(callback);
			},Math.max(0,Math.min(1250-diff,1250)));
		} else {
			var closed = false;
			var tWClose = 0;
			if(_isFullLoadingActive()){
				$.fancybox.close();
				closed = true;
				tWClose = 800;
			}
			if(typeof callback == "function"){
				setTimeout(function(){
					callback(closed);
				},tWClose);
			}
		}
	};

	var prepareFancyboxForFullLoading = function(){
		$("#fancybox-outer").css("background", "rgba(255,255,255,0.9)");
		$("#fancybox-wrap").css("margin-top", "20px");
       	$("#fancybox-wrap").css("margin-left", "20px");
	};

	var _isFullLoadingActive = function(){
		return $("#loading_fancy").is(":visible");
	};

	var startLoadingInContainer = function(container,options){
		var loadImg = document.createElement("img");
		$(loadImg).addClass("loading_fancy_img");
		$(loadImg).attr("src", SM.ImagesPath + "lightbox-ico-loading.gif");
		if((options)&&(options.style)){
			$(loadImg).addClass(options.style);
		}
		var loadingBody = document.createElement("div");
		$(loadingBody).addClass("loading_fancy");
		$(loadingBody).append(loadImg);

		$(container).html("");
		$(container).append(loadingBody);
		$(container).addClass("loadingtmpShown");
	};

	var stopLoadingInContainer = function(container){
		$(container).find(".loading_fancy_img").parent().remove();
		$(container).removeClass("loadingtmpShown");
	};


	return {
		init 							: init,
		preloadResources				: preloadResources,
		loadScript						: loadScript,
		loadCSS							: loadCSS,
		loadLanguageCSS					: loadLanguageCSS,
		prepareFancyboxForFullLoading	: prepareFancyboxForFullLoading,
		startLoading					: startLoading,
		stopLoading						: stopLoading,
		startLoadingInContainer			: startLoadingInContainer,
		stopLoadingInContainer			: stopLoadingInContainer
	};

}) (SceneMaker);

SceneMaker.Slides = (function(SM,$,undefined){

	var init = function(){
	};


	/* Getters  */

	var getCurrentSlide = function(){
		var currentView = SM.View.getCurrentView();
		if((typeof currentView === "undefined") || (currentView === null)){
			return SM.Screen.getCurrentScreen();
		} else {
			return currentView;
		}
	};

	var getCurrentSlideNumber = function(){
		var currentViewNumber = SM.View.getCurrentViewNumber();
		if(typeof currentViewNumber !== "undefined"){
			return currentViewNumber;
		} else {
			return SM.Screen.getCurrentScreenNumber();
		}
	};

	/* Background  */

	var getSlideBackgroundImg = function(slide){
		var $slide = $(slide);
		var slideId = $slide.attr("id");
		return $slide.find("img.slide_background#" + slideId + "_background");
	};

	var getSlideBackground = function(slide){
		var $imgBackground = getSlideBackgroundImg(slide);
		if ($imgBackground.length > 0) {
			return $imgBackground.attr("src");
		} else {
			return undefined;
		}
	};

	var changeSlideBackground = function(slide,backgroundURL){
		var $slide = $(slide);
		if($slide.attr("type")!==SM.Constant.VIEW_CONTENT){
			var $imgBackground = getSlideBackgroundImg($slide);
			$imgBackground.attr("src",backgroundURL);
		}
	};


	/* Slide types  */

	var getSlideType = function(slideEl){
		if ((slideEl)&&(slideEl.tagName==="ARTICLE")){
			//slide in DOM element
			return $(slideEl).attr("type");
		} else if ((typeof slideEl == "object")&&(slideEl.length === 1)&&(slideEl[0].tagName==="ARTICLE")){
			//slide in DOM element, passed as a jQuery selector
			return $(slideEl).attr("type");
		} else if ((typeof slideEl == "object")&&(typeof slideEl.type == "string")){
			//slide in JSON
			return slideEl.type;
		} else {
			//slideEl is not a slide
			return null;
		}
	};

	var isScreen = function(obj){
		var type;
		if(typeof obj == "string"){
			type = obj;
		} else {
			type = $(obj).attr("type");
		}
		return (type === SM.Constant.SCREEN);
	};

	var isView = function(obj){
		var type;
		if(typeof obj == "string"){
			type = obj;
		} else {
			type = $(obj).attr("type");
		}
		return ((type === SM.Constant.VIEW_IMAGE)||(type === SM.Constant.VIEW_CONTENT));
	};


	/* Slide events */

	var triggerSlideEnterEvent = function(slideId) {
		var el = $("#" +slideId)[0];
		if(typeof el === "undefined"){
			return
		};
		if(document.createEvent){
			var evt = document.createEvent('Event');
			evt.initEvent('slideenter', true, true); // event type,bubbling,cancelable
			el.dispatchEvent(evt);
		} else if(document.createEventObject){
			//IE 8 and below
			var evt = document.createEventObject();
			el.fireEvent('onslideenter',evt);
		}
	};

	var triggerSlideLeaveEvent = function(slideId) {
		var el = $("#" + slideId)[0];
		if(typeof el === "undefined"){
			return
		};
		if(document.createEvent){
			var evt = document.createEvent('Event');
			evt.initEvent('slideleave', true, true);
			el.dispatchEvent(evt);
		} else if(document.createEventObject){
			//IE 8 and below
			var evt = document.createEventObject();
			el.fireEvent('onslideleave',evt);
		}
	};

	return {
			init          				: init,
			getCurrentSlide				: getCurrentSlide,
			getCurrentSlideNumber		: getCurrentSlideNumber,
			getSlideBackgroundImg		: getSlideBackgroundImg,
			getSlideBackground			: getSlideBackground,
			changeSlideBackground		: changeSlideBackground,
			getSlideType 				: getSlideType,
			isScreen					: isScreen,
			isView						: isView,
			triggerSlideEnterEvent		: triggerSlideEnterEvent,
			triggerSlideLeaveEvent		: triggerSlideLeaveEvent
	};

}) (SceneMaker,jQuery);

SceneMaker.Screen = (function(SM,$,undefined){
	var _sceneScreens;
	var _currentScreenIndex;

	var init = function(){
	};

	var getScreens = function(){
		return _sceneScreens;
	};

	var setScreens = function(newScreens){
		_sceneScreens = newScreens;

		//Update slidenumber param
		$.each(_sceneScreens, function(index, value) {
			$(value).attr("slidenumber",index+1);
		});
	};

	var updateScreens = function(){
		var screens = $('section.slides > article');
		setScreens(screens);
		screens.removeClass("current");
		$(getScreenWithNumber(_currentScreenIndex+1)).addClass('current');
	};

	var getCurrentScreen = function(){
		return _sceneScreens[_currentScreenIndex];
	};

	var getCurrentScreenNumber = function(){
		return _currentScreenIndex+1;
	};

	var setCurrentScreenNumber = function(currentScreenNumber){
		_setCurrentScreenIndex(currentScreenNumber-1);
	};

	var _setCurrentScreenIndex = function(newIndex){
		_currentScreenIndex = newIndex;
	};

	var getScreenWithNumber = function(slideNumber){
		var no = slideNumber-1;
		if ((no < 0) || (no >= _sceneScreens.length)) {
			return null;
		} else {
			return _sceneScreens[no];
		}
	};

	var updateCurrentScreenFromHash = function() {
		var screenNo = SM.Utils.getScreenNumberFromHash();
		if (screenNo) {
			setCurrentScreenNumber(screenNo);
		} else {
			//Start in 1 (first screen)
			setCurrentScreenNumber(1);
		}
	};

	var getScreensQuantity = function(){
		return $('section.slides > article').length;
	};

	var onEnterScreen = function(screen){
		//Look for opened views
		var openedViews = $(screen).children("article.show_in_screen");
		if(openedViews.length===1){
			var openView = openedViews[0];
			var viewId = $(openView).attr("id");
			SM.Slides.triggerSlideEnterEvent(viewId);
		}
	};

	var onLeaveScreen = function(screen){
		//Look for opened views
		var openedViews = $(screen).children("article.show_in_screen");
		if(openedViews.length===1){
			var openView = openedViews[0];
			var viewId = $(openView).attr("id");
			SM.Slides.triggerSlideLeaveEvent(viewId);
		}
	};

	var forwardOneScreen = function(event){
		_moveScreens(1);
	};

	var backwardOneScreen = function(){
		_moveScreens(-1);
	};

	var _moveScreens = function(n){
		var no = _currentScreenIndex+n+1;
		no = Math.min(Math.max(1,no),_sceneScreens.length);
		goToScreenWithNumber(no);
	};

	var goToScreenWithNumber = function(no,ignoreCurrentScreenNumber){
		if((ignoreCurrentScreenNumber!== true && no === getCurrentScreenNumber())||(no > _sceneScreens.length)||(no <= 0)){
			//Do nothing
			return;
		};

		//Close fancybox
		if((!SM.Editing)&&($.fancybox)){
			$.fancybox.close();
		}

		_goToScreenWithNumber(no);
	};

	var _goToScreenWithNumber = function(no){
		var nextScreenIndex = no - 1;
		if ((nextScreenIndex < _sceneScreens.length)&&(nextScreenIndex >= 0)) {
			triggerScreenLeaveEvent(_currentScreenIndex+1);
			_setCurrentScreenIndex(nextScreenIndex);
			updateScreens();
			triggerScreenEnterEvent(_currentScreenIndex+1);
		}
	};
  
	var goToLastScreen = function(){
		goToScreenWithNumber(_sceneScreens.length);
	};

	var afterSetupSize = function(increaseW,increaseH){
	};

	var triggerScreenEnterEvent = function(screenNumber) {
		var screen = SM.Screen.getScreenWithNumber(screenNumber);
		if (screen) {
			SM.Slides.triggerSlideEnterEvent(screen.id);
		}
	};

	var triggerScreenLeaveEvent = function(screenNumber) {
		var screen = SM.Screen.getScreenWithNumber(screenNumber);
		if (screen) {
			SM.Slides.triggerSlideLeaveEvent(screen.id);
		}
	};

	return {
		init                         : init,
		getScreens                   : getScreens,
		setScreens                   : setScreens,
		updateScreens                : updateScreens,
		getCurrentScreen             : getCurrentScreen,
		getCurrentScreenNumber       : getCurrentScreenNumber,
		setCurrentScreenNumber       : setCurrentScreenNumber,
		getScreenWithNumber          : getScreenWithNumber,
		updateCurrentScreenFromHash  : updateCurrentScreenFromHash,
		getScreensQuantity           : getScreensQuantity,
		onEnterScreen                : onEnterScreen,
		onLeaveScreen                : onLeaveScreen,
		forwardOneScreen             : forwardOneScreen,
		backwardOneScreen            : backwardOneScreen,
		goToScreenWithNumber         : goToScreenWithNumber,
		goToLastScreen               : goToLastScreen,
		afterSetupSize               : afterSetupSize,
		triggerScreenEnterEvent		 : triggerScreenEnterEvent,
		triggerScreenLeaveEvent		 : triggerScreenLeaveEvent
	};

}) (SceneMaker, jQuery);

SceneMaker.View = (function(SM,$,undefined){
	var _currentViewId = null;

	var init = function(){
	};

	var getCurrentView = function(){
		if(SM.Editing){
			return SM.Editor.View.getCurrentView();
		}

		if(_currentViewId === null){
			return null;
		} else {
			return $("#"+_currentViewId);
		}
	};

	var getCurrentViewNumber = function(){
		var currentView = getCurrentView();
		if((typeof currentView == "undefined") || (currentView === null)){
			return undefined;
		}
		var currentViewNumber = $(currentView).attr("slidenumber");
		if(typeof currentViewNumber == "string"){
			try {
				return parseInt(currentViewNumber);
			} catch(err) {
				return undefined;
			}
		}
	};

	var getViewWithNumber = function(screen,viewNumber){
		return $(screen).children("article[slidenumber='" + viewNumber + "']");
	};

	var onCloseViewClicked = function(event){
		var viewId = event.target.id.substring(5);
		closeView(viewId);
	};

	var openView = function(viewId){
		var currentView = getCurrentView();
		if((typeof currentView !== "undefined")&&(currentView !== null)){
			var currentViewId = $(currentView).attr("id");
			if(viewId === currentViewId){
				return;
			} else {
				closeView(currentViewId);
			}
		}

		_currentViewId = viewId;
		$("#" + viewId).removeClass("hide_in_screen");
		$("#" + viewId).addClass("show_in_screen");
		SM.Slides.triggerSlideEnterEvent(viewId);	
	};

	var closeView = function(viewId){
		_currentViewId = null;
		$("#" + viewId).removeClass("show_in_screen");
		$("#" + viewId).addClass("hide_in_screen");
		SM.Slides.triggerSlideLeaveEvent(viewId);	
	};

	return {
		init					: init,
		getCurrentView 			: getCurrentView,
		getCurrentViewNumber	: getCurrentViewNumber,
		getViewWithNumber		: getViewWithNumber,
		onCloseViewClicked		: onCloseViewClicked,
		openView				: openView,
		closeView				: closeView
	};

}) (SceneMaker, jQuery);

SceneMaker.Marker = (function(SM,$,undefined){
	var slideData;
	var hotspotData;
	var hotzoneData;
	var defaultHotspotImg;

	var init = function(){
		slideData = {};
		hotspotData = {};
		hotzoneData = {};
		defaultHotspotImg = SM.ImagesPath + "hotspotgallery/hotspot.png";
	};

	var getDefaultHotspotImg = function(){
		return defaultHotspotImg;
	};

	var drawSlideWithMarkers = function(slideJSON){
		var $slide = $("#" + slideJSON.id);

		//Background image
		if(typeof slideJSON.background === "string"){
			var imgBackgroundId = slideJSON.id + "_background";
			var imgBackground = $("<img>", {
				id: imgBackgroundId,
				class: "slide_background",
				src: slideJSON.background
			});
			$slide.append(imgBackground);
		}

		//Hotzones
		if (Array.isArray(slideJSON.hotzones)&&(slideJSON.hotzones.length > 0)){
			for(j in slideJSON.hotzones){
				_drawHotzone($slide, slideJSON.hotzones[j]);
			}
		}

		//Hotspots
		if (Array.isArray(slideJSON.hotspots)&&(slideJSON.hotspots.length > 0)){
			for(i in slideJSON.hotspots){
				_drawHotspot($slide, slideJSON.hotspots[i]);
			}
		}

		//Caption
		if (typeof slideJSON.caption !== "undefined"){
			SM.Caption.drawCaption($slide, slideJSON.caption);
		}
	};

	var _drawHotspot = function($slide, hotspotJSON){
		if((!hotspotJSON)||(!hotspotJSON.id)){
			return;
		}
		var coordinatesMargin = 10;
		if(!hotspotJSON.x){
			return;
		}
		if(!hotspotJSON.y){
			return;
		}
		if((!hotspotJSON.width)||(hotspotJSON.width <= 0)){
			return;
		}
		if((!hotspotJSON.height)||(hotspotJSON.height <= 0)){
			return;
		}
		if(typeof hotspotJSON.image !== "string"){
			hotspotJSON.image = defaultHotspotImg;
		}

		var rotationAngle = parseFloat(hotspotJSON.rotationAngle);
		if (typeof rotationAngle !== "number" || isNaN(rotationAngle) || rotationAngle < 0 || rotationAngle > 360) {
			rotationAngle = 0;
		}

		var extraClasses = "";
		var visible = (hotspotJSON.visibility !== "hidden");
		if(visible === false){
			extraClasses += " hotspot_hidden";
		}
		var cursorVisible = (hotspotJSON.cursorVisibility === "pointer");
		if(cursorVisible === true){
			extraClasses += " hotspot_cursor_pointer";
		}

		var $imgBackground = SM.Slides.getSlideBackgroundImg($slide);
		var $hotspot = $('<img>', {
			src: hotspotJSON.image,
			class: ('hotspot' + extraClasses),
			id: hotspotJSON.id,
			rotationAngle: rotationAngle,
			css: {
				position: 'absolute',
				left: (hotspotJSON.x + "%"),
				top: (hotspotJSON.y + "%"),
				width: (hotspotJSON.width + "%"),
				height: (hotspotJSON.height + "%"),
				transform: "rotate(" + rotationAngle + "deg)"
			}
		}).appendTo($imgBackground.parent());

		if (Array.isArray(hotspotJSON.actions)&&(hotspotJSON.actions.length > 0)) {
			$hotspot.addClass("hotspot_with_actions");
			
			hotspotData[hotspotJSON.id] = hotspotJSON;
			$hotspot.on('click', function(){
				_onClickHotspot(hotspotJSON.id);
			});

			for(i in hotspotJSON.actions){
				SM.Actions.addActionToHotspot($hotspot, hotspotJSON.actions[i]);
			}
		}
	};

	var _drawHotzone = function($slide, hotzoneJSON){
		if((!hotzoneJSON)||(!hotzoneJSON.id)){
			return;
		}
		if(!Array.isArray(hotzoneJSON.points)){
			return;
		}
		var slideId = $slide.attr("id");
		var hotzoneId = hotzoneJSON.id;
		var annotator = _createAnnotatorForSlide(slideId);
		var annotation = createAnnotationFromPointsArray(hotzoneId,hotzoneJSON.points);
		annotator.addAnnotation(annotation);
		
		_waitForAnnotationRendering(annotation.id, function(hotzoneDOM){
			if(hotzoneJSON.cursorVisibility === "pointer"){
				$(hotzoneDOM).attr("hotzone_cursor_visibility",hotzoneJSON.cursorVisibility);
			}
			if(hotzoneJSON.enabled === false){
				$(hotzoneDOM).attr("hotzone_enabled","false");
			} else {
				$(hotzoneDOM).attr("hotzone_enabled","true");
			}
			if (Array.isArray(hotzoneJSON.actions)&&(hotzoneJSON.actions.length > 0)) {
				hotzoneData[hotzoneId] = hotzoneJSON;
				for(i in hotzoneJSON.actions){
					SM.Actions.addActionToHotzone(hotzoneDOM,hotzoneJSON.actions[i]);
				}
			}
		});
	};

	var _waitForAnnotationRendering = function(annotationId, callback) {
		var timer;
		var initTime = Date.now();
		
		function check() {
			var $hotzoneDOM = getHotzoneDOM(annotationId);
			if ($hotzoneDOM.length > 0) {
				clearInterval(timer);
				callback($hotzoneDOM);
				return true;
			} else if (Date.now() - initTime >= 1000) {
				clearInterval(timer);
				return false;
			}
			return false;
		}

		setTimeout(function() {
			if (!check()) {
				timer = setInterval(check, 200);
			}
		}, 0);
	};

	var _createAnnotatorForSlide = function(slideId){
		if(typeof slideData[slideId] === "undefined"){
			slideData[slideId] = {};
		}
		if(typeof slideData[slideId].annotator !== "undefined"){
			return slideData[slideId].annotator; //already created
		}

		var $imgBackground = SM.Slides.getSlideBackgroundImg($("#" + slideId));
		var annotator = Annotorious.createImageAnnotator($imgBackground.attr("id"), {
			drawingEnabled: false,
			userSelectAction: 'SELECT',
			style: {
				fill: '#dddddd00',
				fillOpacity: 0,
				stroke: '#00000000',
				//stroke: '#000000ff', //for testing
				strokeWidth: 1
			}
		});
		annotator.on('selectionChanged', function(annotations){
			if(Array.isArray(annotations)){
				if (annotations.length === 1){
					_onClickHotzone(annotations[0].id);
				}
			}
		});
		
		slideData[slideId].annotator = annotator;
		return annotator;
	};

	var createAnnotationFromPointsArray = function(id, pointsArray){
		var xs = pointsArray.map(([x]) => x);
		var ys = pointsArray.map(([, y]) => y);
		var minX = Math.min(...xs);
		var maxX = Math.max(...xs);
		var minY = Math.min(...ys);
		var maxY = Math.max(...ys);

		var annotation = {
			"id": id,
			"target": {
				"selector": {
					"type": "POLYGON",
					"geometry": {
						"bounds": {
							"minX": minX,
							"minY": minY,
							"maxX": maxX,
							"maxY": maxY
						},
						"points": pointsArray
					}
				}
			}
		};
		return annotation;
	};

	var getHotzoneDOM = function(hotzoneId){
		return $("g.[data-id='" + hotzoneId + "']");
	};

	var _onClickHotspot = function(hotspotId){
		SM.Actions.performActions(hotspotData[hotspotId].actions,hotspotId);
	};

	var _onClickHotzone = function(hotzoneId){
		var hotzoneDOM = getHotzoneDOM(hotzoneId);
		if($(hotzoneDOM).attr("hotzone_enabled") === "false"){
			return;
		}
		SM.Actions.performActions(hotzoneData[hotzoneId].actions,hotzoneData[hotzoneId].idAlias);
	};

	return {
		init 							: init,
		getDefaultHotspotImg			: getDefaultHotspotImg,
		getHotzoneDOM					: getHotzoneDOM,
		drawSlideWithMarkers			: drawSlideWithMarkers,
		createAnnotationFromPointsArray : createAnnotationFromPointsArray
	};

}) (SceneMaker, jQuery);

SceneMaker.FullScreen = (function(SM,$,undefined){

	//Native FS params
	var _currentFSElement;
	var _lastFSElement;
	var _lastFSTimestamp;

	var init = function(){
		_addContainerFSAttributes();
		_updateFsButtons();
	};

	var _addContainerFSAttributes = function(){
		try {
			var container = SM.Status.getContainer();
			if(typeof container !== "undefined"){
				//App is embed, but not in external domain
				if(typeof $(container).attr("allowfullscreen") === "undefined"){
					$(container).attr("allowfullscreen","true");
					$(container).attr("webkitAllowFullScreen","true");
					$(container).attr("mozallowfullscreen","true");
				} else if($(container).attr("allowfullscreen") === "false"){
					//Allow to explicitly disable fs
					$(container).removeAttr("allowfullscreen");
					$(container).removeAttr("webkitAllowFullScreen");
					$(container).removeAttr("mozallowfullscreen");
					return;
				}

				var fsElementTarget = _getFSElementTarget();
				if(SM.Status.getContainerType()==="OBJECT"){
					//Add FS style
					$(container).addClass("ScreenMakerFS");
					$(fsElementTarget).addClass("ScreenMakerFS");
					$(window.parent.document).find("head").append("<style>.ScreenMakerFS:full-screen, :full-screen > object.ScreenMakerFS {width: 100% !important;height: 100% !important;}</style>");
					$(window.parent.document).find("head").append("<style>.ScreenMakerFS:-webkit-full-screen, :-webkit-full-screen > object.ScreenMakerFS {width: 100% !important;height: 100% !important;}</style>");
					$(window.parent.document).find("head").append("<style>.ScreenMakerFS:-moz-full-screen, :-moz-full-screen > object.ScreenMakerFS {width: 100% !important;height: 100% !important;}</style>");
				}
			}
		} catch(e){}
	};

	var _updateFsButtons = function(){
		if(isFullScreen()){
			//enableFsEnterButon
			$("#page-fullscreen").removeClass("fsoff").addClass("fson");
		} else {
			//enableFsLeaveButon
			$("#page-fullscreen").removeClass("fson").addClass("fsoff");
		}
	};

	var isFullScreenSupported = function(){
		var elem = document.createElement('div');
		if(elem && (elem.requestFullScreen || elem.mozRequestFullScreen || elem.webkitRequestFullScreen || elem.msRequestFullscreen)){
			return true;
		} else {
			return false;
		}
	};

	var canFullScreen = function(){
		return ((!SM.Editing)&&(_canUseNativeFs()));
	};

	var _canUseNativeFs = function(){
		return (SM.Status.getDevice().features.fullscreen)&&(_getFsEnabled(_getFSDocumentTarget()));
	};

	var _getFsEnabled = function(myDoc){
		return myDoc.fullscreenEnabled || myDoc.mozFullScreenEnabled || myDoc.webkitFullscreenEnabled || myDoc.msFullscreenEnabled;
	};

	var enableFullScreen = function(){
		$(document).on('click', '#page-fullscreen', _toggleFullScreen);
		$(_getFSDocumentTarget()).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",function(event){
			_lastFSElement = _currentFSElement;
			_currentFSElement = _getFsElement(_getFSDocumentTarget()); //Use the HTML5 FS API Wrapper
			_lastFSTimestamp = new Date();
			_updateFsButtons();
		});
	};

	var _toggleFullScreen = function (){
		var myDoc = _getFSDocumentTarget();
		var myElem = _getFSElementTarget();
		if(isFullScreen()){
			_cancelFullscreenForElement(myDoc);
		} else {
			_launchFullscreenForElement(myDoc,myElem);
		}
	};

	var _launchFullscreenForElement = function(myDoc,element){
		if(element.requestFullscreen) {
			element.requestFullscreen();
		} else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if(element.webkitRequestFullscreen) {
			element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			setTimeout(function(){
				if (!myDoc.webkitCurrentFullScreenElement){
					// Element.ALLOW_KEYBOARD_INPUT does not work, document is not in full screen mode
					//Fix known Safari bug
					element.webkitRequestFullScreen();
				}
			},250);
		} else if(element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
	};

	var _cancelFullscreenForElement = function(elem) {
		if(elem.exitFullscreen) {
			elem.exitFullscreen();
		} else if(elem.cancelFullScreen) {
			elem.cancelFullScreen();
		} else if(elem.mozCancelFullScreen) {
			elem.mozCancelFullScreen();
		} else if(elem.webkitExitFullscreen) {
			elem.webkitExitFullscreen();
		} else if (elem.webkitCancelFullScreen) {
			elem.webkitCancelFullScreen();
		} else if(elem.msExitFullscreen) {
			elem.msExitFullscreen();
		}
	};

	/*
	 * Wrapper for HTML5 FullScreen API. Make it cross-browser
	 */
	var isFullScreen = function(){
		if(SM.Status.getContainerType()==="OBJECT"){
			//Fix for fs in objects
			return _isBrowserInFullScreen();
		}
		return $(_getFsElement(_getFSDocumentTarget())).is("html");
	};

	var _isBrowserInFullScreen = function(){
	 	var fsElement = _getFsElement(_getFSDocumentTarget());
		return ((typeof fsElement !== "undefined")&&(fsElement !== null));
	};

	var _getFsElement = function(myDoc){
		return myDoc.fullscreenElement || myDoc.mozFullScreenElement || myDoc.webkitFullscreenElement || myDoc.msFullscreenElement;
	};

	var _getFSDocumentTarget = function(){
		return (SM.Status.getContainerType()=="OBJECT" ? window.parent.document : document);
	};

	var _getFSElementTarget = function(){
		return (SM.Status.getContainerType()==="OBJECT" ? SM.Status.getContainer().parentElement : document.documentElement);
	};

	return {
		init							: init,
		isFullScreenSupported			: isFullScreenSupported,
		canFullScreen 					: canFullScreen,
		enableFullScreen				: enableFullScreen,
		isFullScreen 					: isFullScreen
	};
    
}) (SceneMaker, jQuery);

SceneMaker.Editor = (function(SM,$,undefined){
	
	var initOptions;
	var initialScene;
	var isInitialScene = false;
	var lastStoredSceneStringify;
	//Pointers to the current and last zone
	var currentZone;
	var lastZone;
	//Pointer to the current draw container
	var currentContainer;
	//Content mode to add slides
	var contentAddModeForSlides = SM.Constant.NONE;

	/**
	 * Scene Maker initializer.
	 */
	var init = function(){
		_init(SM.getOptions())
	};

	var _init = function(options){
		$("#waiting_overlay").show();
		
		$("body").addClass("SceneMakerBody");
		SM.Editing = true;
		SM.Debugging.init(options);

		var scene;
		if(options){
			scene = options.scene;
			initOptions = options;
			if((options.configuration)&&(SM.Configuration)){
				SM.Configuration.init(options.configuration);
			}
		} else {
			initOptions = {};
		}

		if(scene){
			isInitialScene = true;
		}

		SM.Utils.init();
		SM.I18n.init(initOptions,scene);
		SM.Status.init(function(){
			//Status loading finishes
			_initAferStatusLoaded(options,scene);
		});
	};

	var _initAferStatusLoaded = function(options,scene){
		SM.Utils.Loader.loadLanguageCSS();
		SM.I18n.translateUI();
		SM.Object.init();
		SM.Editor.Dummies.init();
		SM.EventsNotifier.init();
		SM.Screen.init();
		SM.Editor.Screen.init();
		SM.View.init();
		SM.Editor.View.init();
		SM.Marker.init();
		SM.Editor.Marker.init();
		SM.Editor.Actions.init();
		SM.Editor.Caption.init();
		SM.Renderer.init();
		SM.Slides.init();
		SM.User.init(options);
		SM.Video.init();
		SM.Audio.init();
		SM.Editor.Settings.init();
		
		if(isInitialScene){
			var scene = SM.Utils.fixScene(scene);
			if(scene===null){
				$("#waiting_overlay").hide();
				SM.Utils.showPNotValidDialog();
				return;
			}
			initialScene = scene;
			SM.Editor.Settings.loadSceneSettings(scene);
			SM.Editor.Renderer.init(scene);
			//remove focus from any zone
			_removeSelectableProperties();
			_initAferSceneLoaded(options,scene);
		} else {
			SM.Editor.Settings.loadSceneSettings();
			_initAferSceneLoaded(options,scene);
		}
	};
	
	var _initAferSceneLoaded = function(options,scene){
		if(isInitialScene){
			//Set current slide
			var slideFromHash = SM.Utils.getScreenNumberFromHash();
			if(slideFromHash){
				SM.Screen.setCurrentScreenNumber(slideFromHash);
			} else {
				SM.Screen.setCurrentScreenNumber(1);
			}
		}
		SM.Screen.updateScreens();
		SM.Editor.Thumbnails.drawScreenThumbnails(function(){
			SM.Editor.Thumbnails.selectThumbnail(SM.Screen.getCurrentScreenNumber());
			SM.Editor.Thumbnails.moveThumbnailsToScreenWithNumber(SM.Screen.getCurrentScreenNumber());
		});
		
		if(isInitialScene){
			//hide objects (the onSlideEnterEditor event will show the objects in the current slide)
			$('.object_wrapper').hide();
		}
		
		//Init submodules
		SM.Editor.Text.init();
		SM.Editor.Image.init();
		SM.Editor.Video.init();
		SM.Editor.Audio.init();
		SM.Editor.Object.init();
		SM.Editor.Thumbnails.init();
		SM.Editor.Preview.init();
		SM.Editor.Tools.init();
		SM.Editor.Clipboard.init();
		SM.Editor.Events.init();
		
		//Unload all objects
		SM.Editor.Utils.Loader.unloadAllObjects();

		//Enter in currentSlide (this will cause that objects will be shown)
		if(SM.Screen.getCurrentScreenNumber()>0){
			SM.Slides.triggerSlideEnterEvent($(SM.Screen.getCurrentScreen()).attr("id"));
		}

		//Add the first slide
		if(!isInitialScene){
			var screen = SM.Editor.Dummies.getDummy(SM.Constant.SCREEN,{slideNumber:1});
			SM.Editor.Screen.addScreen(screen);
			SM.Screen.goToScreenWithNumber(1);
		}

		//Init settings
		if(!isInitialScene){
			SM.Editor.Settings.displaySettings();
		}

		//Try to win focus
		window.focus();

		$("#waiting_overlay").hide();
	};
  

	////////////
	// UI EVENTS
	////////////

	/**
	 * Function called when user clicks on view thumb.
	 * Add a new view to the current screen.
	 */
	var onViewThumbClicked = function(event){
		var screen = SM.Screen.getCurrentScreen();
		if(!SM.Slides.isScreen(screen)){
			return;
		}
		var type = $(event.currentTarget).attr('type');
		var view = SM.Editor.Dummies.getDummy(type, {screenId: $(screen).attr("id"), slideNumber: ($(screen).find("article").length + 1)});
		SM.Editor.View.addView(screen,view);
		$.fancybox.close();
	};


	/**
	 * Function called when user clicks on an editable element
	 * Event launched when an editable element belonging to the slide is clicked
	 */
	var onEditableClicked = function(event){
		//first remove the "editable" class because we are going to add clickable icons there and we don´t want it to be editable any more
		$(this).removeClass("editable");
		setCurrentArea($(this));
				
		//need to clone it, because we need to show it many times, not only the first one
		//so we need to remove its id
		var content = $("#menuselect").clone();
		$(content).removeAttr("id");
		
		$(content).find("a").css("display","none").addClass("thumb_shown");
		
		SM.Editor.Tools.hideZoneToolTip($(this).find(".zone_tooltip"));

		$(this).append(content);

		SM.Editor.Events.addZoneThumbsEvents(this);
	}; 

	/**
	* function called when user clicks on the delete icon of the zone
	*/
	var onDeleteItemClicked = function(){
		setCurrentArea($(this).parent());

		var options = {};
		options.width = 375;
		options.height = 135;
		var areaType = getCurrentArea().attr("type");
		if(areaType === "audio"){
			areaType = "video";
		}
		options.notificationIconSrc = SM.ImagesPath + "thumbs/" + areaType + ".png";
		options.text = SM.I18n.getTrans("i.AreYouSureContent");
		var button1 = {};
		button1.text = SM.I18n.getTrans("i.no");
		button1.callback = function(){
			$.fancybox.close();
		}
		var button2 = {};
		button2.text = SM.I18n.getTrans("i.delete");
		button2.callback = function(){
			var area = getCurrentArea();
			area.html("");
			area.removeAttr("type");
			area.addClass("editable");
			SM.Editor.Tools.addTooltipToZone(area);
			selectContentZone(null);
			SM.Editor.Slides.updateThumbnail(SM.Slides.getCurrentSlide());
			$.fancybox.close();
		}
		options.buttons = [button1,button2];
		SM.Utils.showDialog(options);
	};
  
   /**
	* Function called when user clicks on a content zone with class selectable.
	* Selectable elements are zones which can be selected.
	*/
	var onSelectableClicked = function(event){
		selectContentZone($(this));
		event.stopPropagation();
		event.preventDefault();
	};

	var selectContentZone = function(area){
		setCurrentArea(area);
		_removeSelectableProperties();
		_addSelectableProperties(area);
		SM.Editor.Tools.loadToolsForZone(area);
	};
	
	var _addSelectableProperties = function(zone){
		$(zone).removeClass("zoneUnselected");
		$(zone).addClass("zoneSelected");
	};

	var _removeSelectableProperties = function(zone){
		if(zone){
			$(zone).removeClass("zoneSelected");
			$(zone).addClass("zoneUnselected");
		} else {
			$(".zoneSelected").addClass("zoneUnselected");
			$(".zoneSelected").removeClass("zoneSelected");
		}
	};
  
   /**
	* Function called when user clicks on any element without class selectable
	*/
	var onNoSelectableClicked = function(event){
		var target = $(event.target);
		var targetParent = $(target).parent();

		if(!$(target).hasClass("noSelectableElement")){

			//No hide toolbar when we are working in a fancybox
			if($("#fancybox-content").is(":visible")){
				return;
			}

			//No hide toolbar when dragging annotations
			if ($(target).is("polygon")) {
				return;
			}

			//No hide toolbar for selectable or preventNoselectable childrens
			if($(targetParent).hasClass("selectable") || $(targetParent).hasClass("preventNoselectable")){
				return;
			}

			//Enable toolbar actions
			if (jQuery.contains($("#toolbar_wrapper")[0],event.target)){
				return;
			}
			if(event.target.id==="toolbar_wrapper"){
				return;
			}

			//No hide toolbar when we are working in a wysiwyg fancybox
			var isWysiwygFancyboxEnabled = false;
			$(".cke_dialog").each(function(index,cke_dialog){
				if((cke_dialog)&&(jQuery.contains(cke_dialog,event.target))){
					isWysiwygFancyboxEnabled = true;
					return false;
				}
			});
			if(isWysiwygFancyboxEnabled){
				return;
			}
		}

		cleanArea();
	};

	var cleanArea = function(){
		SM.Editor.Tools.cleanZoneTool(getCurrentArea());
		setCurrentArea(null);
		_removeSelectableProperties();
	};

	var addDeleteButton = function(element){
		element.append("<div class='delete_content'></div>");
	};

	/**
	* Function called when entering slide in editor, we have to show the objects
	*/
	var onSlideEnterEditor = function(e){
		var slide = $(e.target);

		//Prevent parent to trigger onSlideEnterEditor
		//Use to prevent screens to be called when enter in one of their views
		e.stopPropagation();

		if(SM.Slides.isScreen(slide)){
			SM.Editor.Screen.onEnterScreen(slide);
		} else {
			//Views
			SM.Editor.Utils.Loader.loadObjectsInEditorSlide(slide);
			//Show objects
			setTimeout(function(){
				$(slide).find('.object_wrapper').show();
			},500);
		}

		SM.Editor.Thumbnails.selectThumbnail(SM.Screen.getCurrentScreenNumber());
		cleanArea();
		SM.Editor.Tools.loadToolsForSlide(slide);
	};
  
	/**
	* Function called when leaving slide in editor, we have to hide the objects
	*/
	var onSlideLeaveEditor = function(e){
		var slide = $(e.target);
		e.stopPropagation();

		if(SM.Slides.isScreen(slide)){
			SM.Editor.Screen.onLeaveScreen(slide);
		} else {
			//View
			SM.Editor.Utils.Loader.unloadObjectsInEditorSlide(slide);
			//Hide objects
			$('.object_wrapper').hide();
		}
	};
	
	var saveScene = function(){
		//Save the scene in JSON
		var scene = {};

		//Save settings
		scene = SM.Editor.Settings.getSettings();
		scene.screens = [];

		//Load and show all objects
		SM.Editor.Utils.Loader.loadAllObjects();
		$(".object_wrapper").show();

		$('section.slides > article').each(function(index,screenDOM){
			var screen = {};
			if(SM.Slides.isScreen(screenDOM)){
				SM.Utils.addTempShown(screenDOM);
				screen = SM.Editor.Marker.saveSlideWithMarkers(screenDOM);
				screen.views = [];
				//Save views
				$(screenDOM).find("article").each(function(index,viewDOM){
					var view = _saveView(viewDOM,scene,true);
					screen.views.push(view);
				});
				SM.Utils.removeTempShown(screenDOM);
				scene.screens.push(screen);
			}	
		});

		//Unload all objects
		SM.Editor.Utils.Loader.unloadAllObjects();
		//Reload current slide objects
		SM.Editor.Utils.Loader.loadObjectsInEditorSlide(SM.Screen.getCurrentScreen());

		SM.Debugging.log("\n\nScene Maker save the following scene:\n");
		SM.Debugging.log(JSON.stringify(scene));

		return scene;
	};

	var _saveView = function(slideDOM,scene){
		switch($(slideDOM).attr('type')){
			case SM.Constant.VIEW_IMAGE:
				return _saveViewImage(slideDOM,scene);
			case SM.Constant.VIEW_CONTENT:
				return _saveViewContent(slideDOM,scene);
		}
	};

	var _saveViewImage = function(viewDOM){
		SM.Utils.addTempShown(viewDOM);
		var view = SM.Editor.Marker.saveSlideWithMarkers(viewDOM);
		SM.Utils.removeTempShown(viewDOM);
		return view;
	};

	var _saveViewContent = function(slideDOM,scene){
		slide = {};
		slide.id = $(slideDOM).attr('id');
		slide.type = $(slideDOM).attr('type');
		slide.elements = [];

		//important show it (the browser does not know the height and width if it is hidden)
		SM.Utils.addTempShown(slideDOM);

		$(slideDOM).find('div.view_content_zone').each(function(i,div){
			var element = {};
			element.id	= $(div).attr('id');
			element.type = $(div).attr('type');

			//Save element settings
			var elSettings = $(div).attr("elSettings");
			if(typeof elSettings === "string"){
				try {
					element.settings = JSON.parse(elSettings);
				} catch(e){}
			}

			if(element.type==SM.Constant.TEXT){
				var CKEditor = SM.Editor.Text.getCKEditorFromZone(div);
				if(CKEditor!==null){
					element.body = CKEditor.getData();
				} else {
					element.body = "";
				}
			} else if(element.type==SM.Constant.IMAGE){
				element.body   = $(div).find('img').attr('src');
				element.style  = SM.Editor.Utils.getStylesInPercentages($(div),$(div).find('img'));
				if($(div).attr("hyperlink")){
					element.hyperlink = $(div).attr("hyperlink");
				}
			} else if(element.type==SM.Constant.VIDEO){
				var video = $(div).find("video");
				var posterURL = $(video).attr("poster");
				if(typeof posterURL === "string"){
					element.poster = posterURL;
				}
				element.style  = SM.Editor.Utils.getStylesForFitContent();
				//Sources
				var sources= '';		
				$(video).find('source').each(function(index, source) {
					if(index!==0){
						sources = sources + ',';
					}
					var sourceSrc = SM.Utils.removeParamFromUrl($(source).attr("src"),"timestamp");
					var sourceMimeType = (typeof $(source).attr("type") != "undefined")?', "type": "' + $(source).attr("type") + '"':'';
					sources = sources + '{"src":"' + sourceSrc + '"' + sourceMimeType + '}';
				});
				sources = '[' + sources + ']';
				element.sources = sources;
			} else if(element.type==SM.Constant.AUDIO){
				var audio = $(div).find("audio");
				element.style  = SM.Editor.Utils.getStylesForFitContent();
				//Sources
				var sources= '';				
				$(audio).find('source').each(function(index, source) {
					if(index!==0){
						sources = sources + ',';
					}
					var sourceSrc = SM.Utils.removeParamFromUrl($(source).attr("src"),"timestamp");
					var sourceMimeType = (typeof $(source).attr("type") != "undefined")?', "type": "' + $(source).attr("type") + '"':'';
					sources = sources + '{"src":"' + sourceSrc + '"' + sourceMimeType + '}';
				});
				sources = '[' + sources + ']';
				element.sources = sources;
			} else if(element.type===SM.Constant.OBJECT){
				var wrapper = $(div).find(".object_wrapper")[0];
				var object = $(wrapper).children()[0];
				var $myObject = $(object).clone();
				$myObject.removeAttr("style");
				var myObjectSrc = SM.Utils.removeParamFromUrl($myObject.attr("src"),"escapp_preview");
				$myObject.attr("src",myObjectSrc);
				element.body   = SM.Utils.getOuterHTML($myObject);
				element.style  = SM.Editor.Utils.getStylesForFitContent();
				element.subtype = SM.Object.getObjectInfo($myObject).type;
			} else if(typeof element.type == "undefined"){
				//Empty element
			}

			slide.elements.push(element);
			
		});

		SM.Utils.removeTempShown(slideDOM);
		
		return slide;
	};

	var sendScene = function(scene,order,successCallback,failCallback){
		if(SM.Debugging.isDevelopping()){
			lastStoredSceneStringify = JSON.stringify(scene);
			setTimeout(function(){
				successCallback();
			},5000);
			return;
		}

		var createNewScene = ((typeof lastStoredSceneStringify == "undefined")&&(!isInitialScene));
		
		var send_type;
		if(createNewScene){
			send_type = 'POST'; //if it is a new scene
		} else {
			send_type = 'PUT';  //if we are editing an existing prsesentation or resaving a new scene
		}

		var params = {};
		if(typeof SM.User.getToken() != "undefined"){
			params["authenticity_token"] = SM.User.getToken();
		}

		var jsonScene = JSON.stringify(scene);
		params["scene[json]"] = jsonScene;
		
		$.ajax({
			type    : send_type,
			url     : SM.UploadScenePath,
			data    : params,
			success : function(data) {
				lastStoredSceneStringify = jsonScene;
				if((createNewScene)&&(typeof data != "undefined")&&(data.uploadPath)){
					//Update SM.UploadScenePath because the scene exists now
					//Future savings will update the existing scene
					SM.UploadScenePath = SM.Utils.checkUrlProtocol(data.uploadPath);
					if(SM.Status.getDevice().features.historypushState){
						if(data.editPath){
							window.top.history.replaceState("","",SM.Utils.checkUrlProtocol(data.editPath));
						}
					}
				}
				if(typeof successCallback == "function"){
					successCallback(data);
				}
			},
			error: function(xhr, error){
				if(typeof failCallback == "function"){
					failCallback();
				}
			}
		});
	};


	//////////////////
	///  Getters and Setters
	//////////////////

	var getOptions = function(){
		return initOptions;
	};

	var getCurrentElementType = function(){
		var currentArea = getCurrentArea();
		if((typeof currentArea !== "undefined")&&(currentArea !== null)){
			return "ZONE";
		}
		var currentHotspot = SM.Editor.Marker.getCurrentHotspot();
		if((typeof currentHotspot !== "undefined")&&(currentHotspot !== null)){
			return "HOTSPOT";
		}
		var currentHotzoneId = SM.Editor.Marker.getCurrentHotzoneId();
		if((typeof currentHotzoneId !== "undefined")&&(currentHotzoneId !== null)){
			return "HOTZONE";
		}
		return "NONE";
	};
	
	var getCurrentArea = function() {
		if(currentZone){
			return currentZone;
		}
		return null;
	};
	
	var setCurrentArea = function(area){
		if($(area).attr("id")!=$(currentZone).attr("id")){
			lastZone = currentZone;
			currentZone = area;
		}
	};

	var getLastArea = function(){
		if(lastZone){
			return lastZone;
		}
		return null;
	};

	var getCurrentContainer = function(){
		return currentContainer;
	};

	var setCurrentContainer = function(container){
		currentContainer = container;
	};

	var isZoneEmpty = function(zone){
		return ((zone)&&($(zone).find(".delete_content").length===0));
	}

	var getContentAddMode = function(){
		return contentAddModeForSlides;
	}

	var setContentAddMode = function(mode){
		contentAddModeForSlides = mode;
	}

	var hasSceneChanged = function(){
		try {
			var objectToCompare;
			if(typeof lastStoredSceneStringify != "undefined"){
				objectToCompare = lastStoredSceneStringify;
			} else if(typeof initialScene != "undefined"){
				objectToCompare = JSON.stringify(initialScene);
			} else {
				return true;
			}

			var currentScene = SM.Editor.saveScene();
			return !(objectToCompare === JSON.stringify(currentScene));
		} catch (e){
			return true;
		}
	};

	return {
		init					: init,
		getOptions				: getOptions,
		getCurrentElementType 	: getCurrentElementType,
		getCurrentArea			: getCurrentArea,
		setCurrentArea			: setCurrentArea,
		selectContentZone		: selectContentZone,
		getLastArea				: getLastArea,
		cleanArea				: cleanArea,
		getCurrentContainer		: getCurrentContainer,
		setCurrentContainer		: setCurrentContainer,
		getContentAddMode		: getContentAddMode,
		setContentAddMode		: setContentAddMode,
		isZoneEmpty				: isZoneEmpty,
		saveScene				: saveScene,
		sendScene				: sendScene,
		onSlideEnterEditor 		: onSlideEnterEditor,
		onSlideLeaveEditor		: onSlideLeaveEditor,
		onViewThumbClicked		: onViewThumbClicked,
		onEditableClicked		: onEditableClicked,
		onSelectableClicked 	: onSelectableClicked,
		onNoSelectableClicked 	: onNoSelectableClicked,
		onDeleteItemClicked 	: onDeleteItemClicked,
		addDeleteButton			: addDeleteButton,
		hasSceneChanged			: hasSceneChanged
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Slides = (function(SM,$,undefined){

	var removeCurrentSlide = function(){
		var slideToDelete = SM.Slides.getCurrentSlide();
		if(SM.Slides.isView(slideToDelete)){
			SM.Editor.View.removeView(slideToDelete);
		} else {
			SM.Editor.Screen.removeScreen(slideToDelete);
		}
	};

	var updateThumbnail = function(slide){
		var slideThumbnail = SM.Editor.Thumbnails.getThumbnailForSlide(slide);
		var thumbnailURL = SM.Editor.Thumbnails.getThumbnailURLForSlide(slide);

		//Capure load img error
		$(slideThumbnail).error(function(response){
			//Load the default image
			_updateThumbnail(slide,slideThumbnail,SM.Editor.Thumbnails.getDefaultThumbnailURLForSlide(slide));
		});

		_updateThumbnail(slide,slideThumbnail,thumbnailURL);
	};

	var _updateThumbnail = function(slide,slideThumbnail,thumbnailURL){
		if(SM.Slides.isScreen(slide)){
			$("#screen_selected > img").attr("src",thumbnailURL);
		}
		$(slideThumbnail).attr("src",thumbnailURL);
	};

	var isSlideFocused = function(){
		//Wysiwyg is focused.
		if($(".wysiwygInstance").is(":focus")){
			return false;
		}
		
		//Fancybox is showing
		if($("#fancybox-content").is(":visible")){
			return false;
		}

		//Generic input is focused
		if($("input").is(":focus")){
			return false;
		}

		//A content area is focused
		if(SM.Editor && SM.Editor.getCurrentArea()!==null){
			return false;
		}

		return true;
	};

	var setSlideBackground = function(slide,backgroundURL){
		var $slide = $(slide);
		if($slide.attr("type")!==SM.Constant.VIEW_CONTENT){
			var $imgBackground = SM.Slides.getSlideBackgroundImg($slide);
			if ($imgBackground.length === 0) {
				// Create <img> for background
				var imgBackgroundId = $slide.attr("id") + "_background";
				$imgBackground = $("<img>", {
					id: imgBackgroundId,
					class: "slide_background"
				});
				$slide.append($imgBackground);
			}
			$imgBackground.attr("src",backgroundURL);
			$(slide).find("div.change_bg_button").hide();

			SM.Editor.Slides.updateThumbnail(slide);
			SM.Editor.Tools.loadToolsForSlide(slide);
		}

		$.fancybox.close();
	};

	var copyTextAreasOfSlide = function(slide){
		var textAreas = {};
		$(slide).find("div[type='text']").each(function(index,textArea){
			var zoneId = $(textArea).attr("id");
			var ckEditor = SM.Editor.Text.getCKEditorFromZone(textArea);
			if((zoneId)&&(ckEditor!==null)){
				textAreas[zoneId] = ckEditor.getData();
			}
		});
		return textAreas;
	};

	var loadTextAreasOfSlide = function(slide,textAreas,isCopy){
		if(isCopy !== true){
			isCopy = false;
		}
		var views = $(slide).find("article[type='" + SM.Constant.VIEW_CONTENT + "']");
		SM.Utils.addTempShown(slide);
		SM.Utils.addTempShown(views);
		$(slide).find("div[type='text']").each(function(index,textArea){
			var zoneId;
			if(isCopy){
				zoneId = $(textArea).attr("copyid");
			} else {
				zoneId = $(textArea).attr("id");
			}
			if((zoneId)&&(textAreas[zoneId])){
				var data = textAreas[zoneId];
				SM.Editor.Text.launchTextEditor({}, $(textArea), data);
			}
		});
		SM.Utils.removeTempShown(views);
		SM.Utils.removeTempShown(slide);
	};

	var cleanTextAreasOfSlide = function(slide){
		$(slide).find("div[type='text'],div.wysiwygTextArea").each(function(index,textArea){
			$(textArea).html("");
		});
	};


	return {
		removeCurrentSlide			: removeCurrentSlide,
		updateThumbnail				: updateThumbnail,
		isSlideFocused				: isSlideFocused,
		setSlideBackground 			: setSlideBackground,
		copyTextAreasOfSlide		: copyTextAreasOfSlide,
		loadTextAreasOfSlide		: loadTextAreasOfSlide,
		cleanTextAreasOfSlide		: cleanTextAreasOfSlide
	}; 

}) (SceneMaker, jQuery);

SceneMaker.Editor.Dummies = (function(SM,undefined){

	var init = function(){
	};

	var getDummy = function(slideType, options){
		switch(slideType){
			case SM.Constant.SCREEN:
				if(typeof options.screenId === "undefined"){
					options.screenId = SM.Utils.getId("article");
				}
				return _getScreenDummy(options);
			case SM.Constant.VIEW_IMAGE:
				if(typeof options.viewId === "undefined"){
					options.viewId = SM.Utils.getId(options.screenId + "_article");
				}
				return _getViewImageDummy(options);
			case SM.Constant.VIEW_CONTENT:
				if(typeof options.viewId === "undefined"){
					options.viewId = SM.Utils.getId(options.screenId + "_article");
				}
				return _getViewContentDummy(options);
		}
	};

	var _getScreenDummy = function(options){
		var dummy = "<article id='article_id_to_change' type='"+SM.Constant.SCREEN+"' slidenumber='slidenumber_to_change'><div class='change_bg_button'></div></article>";
		return _replaceIds(dummy, options.slideNumber, options.screenId);
	};

	var _getViewImageDummy = function(options){
		var dummy = "<article id='article_id_to_change' type='"+SM.Constant.VIEW_IMAGE+"' slidenumber='slidenumber_to_change'><div class='change_bg_button'></div></article>";
		return _replaceIds(dummy, options.slideNumber, options.viewId);
	};

	var _getViewContentDummy = function(options){
		var dummy = "<article id='article_id_to_change' type='" + SM.Constant.VIEW_CONTENT +"' slidenumber='slidenumber_to_change'><div id='div_id_to_change' class='view_content_zone editable selectable'></div></article>";
		return _replaceIds(dummy, options.slideNumber, options.viewId, options.zoneIds);
	};


	////////////
	// Scaffolds: used to render slides from JSON files
	////////////

	/*
	 * Function to get the scaffold of an existing slide in string format
	 * slide: slide in JSON format
	 */

	var getScaffoldForSlide = function(slideJSON,options){
		switch(slideJSON.type){
			case SM.Constant.SCREEN:
				return _getScaffoldForScreen(slideJSON,options);
			case SM.Constant.VIEW_IMAGE:
				return _getScaffoldForViewImage(slideJSON,options);
			case SM.Constant.VIEW_CONTENT:
				return _getScaffoldForViewContent(slideJSON,options);
		}
	};

	var _getScaffoldForScreen = function(slideJSON,options){
		options.screenId = slideJSON.id;
		return _getScreenDummy(options);	
	};

	var _getScaffoldForViewImage = function(slideJSON,options){
		options.viewId = slideJSON.id;
		return _getViewImageDummy(options);
	};

	var _getScaffoldForViewContent = function(slideJSON,options){
		options.viewId = slideJSON.id;

		var zoneIds = [];
		for(el in slideJSON.elements){
			zoneIds.push(slideJSON.elements[el].id);
		}
		options.zoneIds = zoneIds;

		var dummy = _getViewContentDummy(options);

		//Remove editable
		dummy = dummy.replace(/editable /g,"");

		return dummy;
	};

	/**
	 * Function to replace dummy ids
	 */
	var _replaceIds = function(dummy, slideNumber, slideId, zoneIds){
		var newDummy = dummy;
		var nextZoneId = 0;

		if(typeof slideId !== "undefined"){
			SM.Utils.registerId(slideId);
		} else {
			return;
		}
		
		//SlideId
		if(newDummy.indexOf("article_id_to_change") != -1){
			newDummy = newDummy.replace("article_id_to_change", slideId);			
		}
		
		//Slide number
		if(newDummy.indexOf("slidenumber_to_change") != -1){
			newDummy = newDummy.replace("slidenumber_to_change", slideNumber);
		}

		//Zones
		while(newDummy.indexOf("div_id_to_change") != -1){
			if(zoneIds){
				var newZoneId = zoneIds[nextZoneId];
				nextZoneId++;
				SM.Utils.registerId(newZoneId);
			} else {
				var newZoneId = SM.Utils.getId(slideId + "_zone");
			}
			newDummy = newDummy.replace("div_id_to_change", newZoneId);
		}

		return newDummy;
	};

	return {
		init				: init,
		getDummy			: getDummy,
		getScaffoldForSlide : getScaffoldForSlide
	};

}) (SceneMaker);

SceneMaker.Editor.Renderer = (function(SM,$,undefined){
	
	var _isRendering;

	var init = function(scene){
		_isRendering = false;
		_renderScene(scene);
	};

	var _renderScene = function(scene){
		_isRendering = true;

		var screens = scene.screens;
		for(var i=0;i<screens.length;i++){
			_renderScreen(screens[i]);
		}

		_isRendering = false;
	};

	var _renderScreen = function(screenJSON){
		var options = {};
		options.slideNumber = SM.Screen.getScreensQuantity()+1;
		options.screenId = (screenJSON.id).toString();
		var scaffold = SM.Editor.Dummies.getScaffoldForSlide(screenJSON,options);

		if(scaffold){
			SM.Editor.Screen.appendScreen(scaffold);
			SM.Screen.updateScreens();
			SM.Screen.goToLastScreen();  //important to get the browser to draw everything

			//Get screen in DOM
			var screenId = $(scaffold).attr("id");
			var scaffoldDOM = $("#"+screenId);

			//Draw views
			var views = screenJSON.views;
			if(views){
				var ssL = views.length;
				for(var i=0; i<ssL; i++){
					var viewJSON = views[i];
					_renderView(viewJSON, {screenDOM: scaffoldDOM, slideNumber: i+1});
				}
			}

			//Complete scaffold
			SM.Editor.Marker.drawSlideWithMakers(screenJSON,scaffoldDOM);
		}
	};

	var _renderView = function(view,renderOptions){
		if(view.type === SM.Constant.VIEW_CONTENT){
			_renderViewContent(view,renderOptions);
		} else if(view.type === SM.Constant.VIEW_IMAGE){
			_renderViewImage(view,renderOptions);
		}
	};

	var _renderViewCommon = function(view,renderOptions){
		var scaffold = SM.Editor.Dummies.getScaffoldForSlide(view,{slideNumber: renderOptions.slideNumber});
		SM.Editor.View.appendView(renderOptions.screenDOM,scaffold);
	};

	var _renderViewImage = function(view,renderOptions){
		_renderViewCommon(view,renderOptions);
		var scaffoldDOM = $("#"+view.id);
		SM.Editor.Marker.drawSlideWithMakers(view,scaffoldDOM);
	};

	var _renderViewContent = function(view,renderOptions){
		_renderViewCommon(view,renderOptions);
		var scaffoldDOM = $("#"+view.id);

		//Draw elements
		SM.Utils.addTempShown(scaffoldDOM);
		
		var viewElementsLength = view.elements.length;
		for(var i=0; i<viewElementsLength; i++){
			var element = view.elements[i];
			var zoneId = element.id;
			var area = $("div#" + zoneId);

			if(area.length === 0){
				continue;
			}

			//Save element settings
			if(element.settings){
				var serializedSettings = JSON.stringify(element.settings);
				$(area).attr("elSettings",serializedSettings);
			}

			if(element.type === SM.Constant.TEXT){
				SM.Editor.Text.launchTextEditor({}, area, element.body);  //in this case there is no event, so we pass a new empty object
			} else if(element.type === SM.Constant.IMAGE){
				SM.Editor.Image.drawImage(element.body, area, element.style, element.hyperlink, element.options);
			} else if(element.type === SM.Constant.VIDEO){
				var options = [];
				if(typeof element.poster === "string"){
					options['poster'] = element.poster;
				}
				options['autoplay'] = element.autoplay;
				SM.Editor.Video.HTML5.drawVideo(SM.Video.HTML5.getSourcesFromJSON(element), options, area, element.style);
			} else if(element.type === SM.Constant.AUDIO){
				var options = [];
				options['autoplay'] = element.autoplay;
				SM.Editor.Audio.HTML5.drawAudio(SM.Audio.HTML5.getSourcesFromJSON(element), options, area, element.style);
			} else if(element.type === SM.Constant.OBJECT){
				SM.Editor.Object.drawObject(element.body, {area:area, style:element.style});
			}

			//Add tooltips to area
			var hideTooltip = true;
			if(SM.Editor.isZoneEmpty(area)){
				hideTooltip = false;
				//Give class "editable" to the empty areas
				$(area).addClass("editable");
			}
			SM.Editor.Tools.addTooltipToZone(area,hideTooltip);
		}

		SM.Utils.removeTempShown(scaffoldDOM);
	};

	var isRendering = function(){
		return _isRendering;
	};


	return {
		init				: init,
		isRendering			: isRendering
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Carousel = (function(SM,$,undefined){
	
	//Available Options: rows,callback,rowItems,scrollItems,styleClass
	
	var createCarousel = function(containerId,options){
		//Necessary params
		if(!containerId){
			return;
		}
		
		//Default values
		var rows = 1;
		var rowItems = 5;
		var scrollItems = null;
		var styleClass = "";
		var titleClass = "";
		var callback = null;
		var width = 790;
		var startAtLastElement = false;
		var pagination = true;
		var sortable = false;
		var afterCreateCarruselFunction = null;
		
		//Read options
		if(options){
			if(options['rows']){
				rows = options['rows'];
			}
			if(options['rowItems']){
				rowItems = options['rowItems']
			}
			if(options['scrollItems']){
				scrollItems = options['scrollItems']
			}
			if(options['styleClass']){
				styleClass = options['styleClass']
			}
			if(options['titleClass']){
				titleClass = options['titleClass']
			}
			if(options['callback']){
				callback = options['callback'];
			}
			if(options['width']){
				width = options['width'];
			}
			if(options['startAtLastElement']){
				startAtLastElement = options['startAtLastElement'];
			}
			if(typeof options['pagination'] == 'boolean'){
				pagination = options['pagination'];
			}
			if(typeof options['sortable'] == 'boolean'){
				sortable = options['sortable'];
			}
			if(options['afterCreateCarruselFunction']){
				afterCreateCarruselFunction = options['afterCreateCarruselFunction'];
			}
		}


		//Define intern variables
		var multipleRow = (rows>1);
		
		var carouselClass = "";
		if(styleClass){
			carouselClass = "_" + styleClass;
		}
		
		if(!scrollItems){
			scrollItems = rowItems;
		}
			
		if(multipleRow){
			var rowClass = "multiple_row" + carouselClass;
		} else {
			var rowClass = "single_row" + carouselClass;
		}		
			
		//Wrapper main div with a image carousel class container.
		var wrapperDiv = $("#" + containerId);
		wrapperDiv.attr("class","image_carousel image_carousel_"+rowClass);
		wrapperDiv.removeAttr("id");
		
		var mainDiv = document.createElement('div');
		$(mainDiv).html($(wrapperDiv).html());
		$(wrapperDiv).html("");
		mainDiv.setAttribute('id', containerId);
			
		//Creating elements
		var clearFix = document.createElement('div');
		clearFix.setAttribute('class', "clearfix");
		
		var button_prev = document.createElement('a');
		var button_next = document.createElement('a');
		
		button_prev.setAttribute('class', "prev");
		button_next.setAttribute('class', "next");
		$(button_prev).addClass("prev_" + rowClass);
		$(button_next).addClass("next_" + rowClass);
		button_prev.setAttribute('href', "#");
		button_next.setAttribute('href', "#");
		button_prev.setAttribute('id', "carousel_prev" + containerId);
		button_next.setAttribute('id', "carousel_next" + containerId);
		$(button_prev).html("<span>prev</span>");
		$(button_next).html("<span>next</span>");
		 
		$(wrapperDiv).append(clearFix);
		$(wrapperDiv).append(button_prev);
		$(wrapperDiv).append(button_next);

		if(pagination){
			var paginationDiv = document.createElement('div');
			paginationDiv.setAttribute('class','pagination pagination_' + rowClass);
			paginationDiv.setAttribute('id','carousel_pag' + containerId);
			$(wrapperDiv).append(paginationDiv);
		}
		 
		//Element stylesheet
		$(mainDiv).children().addClass("carousel_element_" + rowClass);
		
		$(mainDiv).children().each(function(index,value){
			$(value).children().addClass("carousel_element_" + rowClass);
		});
		
		//Callbacks events
		if ((callback)&&(typeof callback == "function")) {
			$(mainDiv).children().click(function(event){
				callback(event);
			});
		}

		if (multipleRow) {
			_applyMultipleRows(containerId, wrapperDiv, mainDiv, rows, rowItems, scrollItems, rowClass, width, afterCreateCarruselFunction);
		} else {
			$(wrapperDiv).prepend(mainDiv);

			//Get start index
			if(startAtLastElement){
				var start = ($(mainDiv).children().length-rowItems+1);
			} else {
				var start = 0;
			}
			
			_setMainCarousel(containerId,containerId, rows,[],rowItems,scrollItems,width,start, function(){
				if(pagination){
					_forceShowPagination(containerId);
				}
		
				if(sortable){
					$("#" + containerId).sortable();
				}

				//Callback
				if(typeof afterCreateCarruselFunction === "function"){
					afterCreateCarruselFunction();
				}
			});
		}
			
		return;
	};

	var _applyMultipleRows = function(containerId,wrapperDiv,mainDiv,rows,rowItems,scrollItems,rowClass,width,afterCreateCarruselFunction){
		var synchronizeIds = [];
		var createdRows = 0;

		//Create one div for each row.
		var i;
		for (i=0;i<rows;i++) {
			window[mainDiv.id + "_row" + i ] = document.createElement('div');
			window[mainDiv.id + "_row" + i ].setAttribute('id',mainDiv.id + "_row" + i);
			window[mainDiv.id + "_row" + i ].setAttribute('class',"carousel_wrapper_" + rowClass);
			if(i!=0){
				synchronizeIds.push(mainDiv.id + "_row" + i);
			}
		}
			
		//Divide children into the different divs.
		$(mainDiv).children().each(function(index,value){
			$(window[mainDiv.id + "_row" + index%rows  ]).append(value);
		});
			
		//Add divs to the wrapper and invoke carousel Plugin
		for (i=rows-1;i>=0;i--) {
			$(wrapperDiv).prepend(window[mainDiv.id + "_row" + i ]);
			if(i==0){
				var newContainerId = mainDiv.id + "_row" + i;
				_setMainCarousel(newContainerId,containerId,rows,synchronizeIds,rowItems,scrollItems,width, null, function(){
					createdRows++;
					_afterCreateRow(createdRows,rows,afterCreateCarruselFunction);
				});
			} else {
				_setRowCarousel(mainDiv.id + "_row" + i,rowItems,scrollItems,width, function(){
					createdRows++;
					_afterCreateRow(createdRows,rows,afterCreateCarruselFunction);
				});
			}
		}
	};

	var _afterCreateRow = function(createdRows,rows,afterCreateCarruselFunction){
		if((createdRows===rows)&&(typeof afterCreateCarruselFunction == "function")){
			afterCreateCarruselFunction();
		}
	};

	var _setRowCarousel = function (id,rowItems,scrollItems,width,afterCreateCarruselFunction){
		$("#" + id).carouFredSel({
			auto    : false,
			circular: false,
			infinite: false,
			width   : width,
			scroll : {
				//items         : "page",
				items           : scrollItems,
				fx              : "scroll",
				duration        : 1000,
				timeoutDuration : 2000                
			},
			items : {
			  visible    : {
			      min : rowItems,
			      max : rowItems
			    }
			},
			onCreate    		: afterCreateCarruselFunction
		}); 
	};

	var _setMainCarousel = function (id,widgetsId,rows,synchronizeIds,rowItems,scrollItems,width,start,afterCreateCarruselFunction){
		if(!start){
			start = 0;
		}

		$("#" + id).carouFredSel({
			circular: false,
			infinite: false,
			auto    : false,
			width   : width,
			scroll : {
				//items         : "page",
				items           : scrollItems,
				//fx              : "scroll",
				duration        : 1000,
				timeoutDuration : 2000                
			},
			items       : {
				visible   : {
					min : rowItems,
					max : rowItems
				},
				start   : start
			},
			prev    : {
				button  : "#carousel_prev" + widgetsId
				// key     : "left"
			},
			next    : {
				button  : "#carousel_next" + widgetsId
				// key     : "right"
			},
			pagination  : "#carousel_pag"  + widgetsId,
			onCreate    : afterCreateCarruselFunction
		});  
			
		if(synchronizeIds){
			var syncString = "";
			$(synchronizeIds).each(function(index,value){
				if(index !=0){
					syncString = syncString + ", ";
				}
				syncString = syncString + "#" + value;
			});
			$("#" + id).trigger("configuration", ["synchronise", syncString]);
		}

		$("#" + id).attr("rows",rows);
	};
	
	
	var cleanCarousel = function(containerId){
		//Remove content
		$("#" + containerId).html("");

		//Check if is a multirow carousel
		var containderIdForMultiRow = containerId + "_row0";
		if($("#" + containderIdForMultiRow).attr("rows")){
			var rows = $("#" + containderIdForMultiRow).attr("rows");
			var i;
			for(i=0; i<rows;i++){
				_cleanOneRowCarousel(containerId + "_row" + i);
			}
			$("#" + containderIdForMultiRow).attr("id",containerId);
		} else {
			_cleanOneRowCarousel(containerId);
		}
	};
  
	var _cleanOneRowCarousel = function(containerId){
		var carouselWrapper = $("#" + containerId).parent().parent();
		if($(carouselWrapper).hasClass('image_carousel')){
			$(carouselWrapper).removeClass();
			$(carouselWrapper).html("");
			$(carouselWrapper).attr("id",containerId);
		}
	};
	
	var _forceShowPagination = function(containerId){
		var parent = $("#" + containerId).parent().parent();
		if ($(parent).hasClass("image_carousel")){
			$(parent).find(".pagination").attr("style","");
		}
	};

	var goToElement = function(carouselDivId,element){
		if($(element).is("IMG")){
			element = $(element).parent();
		}
		$("#" + carouselDivId).trigger("slideTo", element);
	};
  
	var advanceCarousel = function(carouselDivId,no){
		$("#" + carouselDivId).trigger("next", no);
	};

	var backCarousel = function(carouselDivId,no){
		$("#" + carouselDivId).trigger("prev", no);
	};

	var insertElement = function(carouselDivId,element,posc){
		$("#" + carouselDivId).trigger("insertItem", [element, posc]);
	};

	return {
		createCarousel	  	: createCarousel,
		cleanCarousel    	: cleanCarousel,
		goToElement       	: goToElement,
		advanceCarousel  	: advanceCarousel,
		backCarousel     	: backCarousel,
		insertElement	  	: insertElement
	};

}) (SceneMaker, jQuery);


/*
 * Wrapper for jQuery custom content scroller
 */
SceneMaker.Editor.Scrollbar = (function(SM,$,undefined){
	
	//Available Options: callback
	var createScrollbar = function(containerId,options){
		//Necessary params
		if(!containerId){
			return;
		}
		
		//Default values
		var callback = null;
		var horizontalScroll = false;
		
		//Read options
		if(options){
			if(options['callback']){
				callback = options['callback'];
			}
			if(options['horizontalScroll']){
				horizontalScroll = options['horizontalScroll'];
			}
		}

		var scrollbar = $("#"+containerId);
		$(scrollbar).mCustomScrollbar({
			scrollInertia: 0,
			autoDraggerLength: true,
			horizontalScroll:horizontalScroll
		});
		$(scrollbar).find(".mCSB_container").css("margin-right","5px");

		setTimeout(function(){
			$(scrollbar).mCustomScrollbar("update");
			setTimeout(function(){
				if((options)&&(options.scrollTop === true)){
					// Not necessary (default behaviour)
					// $(scrollbar).mCustomScrollbar("scrollTo","top");
				} else {
					$(scrollbar).mCustomScrollbar("scrollTo","bottom");
				}
				
				//Callback
				if(typeof callback === "function"){
					callback();
				}
			},150);
		},100);

		return;
	}
	
	var cleanScrollbar = function(containerId){
		//Remove content
		var scrollbar = $("#"+containerId);
		$(scrollbar).html("");
		//Remove all classes
		$(scrollbar).removeClass();
		return;
	}
  
	var goToElement = function(containerId,element){
		var elementId = $(element).attr("id");
		var hasId = (typeof elementId == "string");

		if(!hasId){
			var tmpId = SM.Utils.getId("tmp");
			$(element).attr("id",tmpId);
			elementId = tmpId;
		}

		$("#"+containerId).mCustomScrollbar("scrollTo","#" + elementId);

		if(!hasId){
			$(element).removeAttr("id",tmpId);
		}
	};

	return {
		createScrollbar	  : createScrollbar,
		cleanScrollbar    : cleanScrollbar,
		goToElement		  : goToElement
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Video = (function(SM,$,undefined){
		
	var contentToAdd = null;
	var contentAddMode = SM.Constant.NONE;

	var urlDivId = "tab_video_from_url_content";
		
	var init = function(){
		SM.Editor.Video.HTML5.init();

		var urlInput = $("#"+urlDivId).find("input");

		$("#tab_video_from_url_content .previewButton").click(function(event){
			if(SM.Validator.validateObject($(urlInput).val())){
				contentToAdd = SM.Editor.Utils.autocompleteUrls($(urlInput).val());
				SM.Editor.Object.drawPreview("tab_video_from_url_content", contentToAdd);
			} else {
				contentToAdd = null;
			}
		});
	};	

	var onLoadTab = function(tab){
		//Load Video from URL
		$("#tab_video_from_url_content").find("input").val("");
		SM.Editor.Object.resetPreview("tab_video_from_url_content");
	};

	var addVideo = function(video){
		if(video){
			contentToAdd = video;
			addContent();
		}
	};
	
	var addContent = function(){
		switch(contentAddMode){
			case SM.Constant.EVIDEO:
				SM.Editor.EVideo.onVideoSelected(contentToAdd);
				break;
			default:
				SM.Editor.Object.drawPreviewObject(contentToAdd);
		}
		contentAddMode = SM.Constant.NONE;
	};

	var getAddContentMode = function(){
		return contentAddMode;
	};

	var setAddContentMode = function(mode){
		SM.Editor.Utils.hideNonDefaultTabs();
		switch(mode){
			case SM.Constant.NONE:
				break;
			case SM.Constant.EVIDEO:
				$("#tab_audio_soundcloud").hide();
				break;
		}
		contentAddMode = mode;
	};

	var getDefaultTab = function(){
		var defaultTab = 'tab_video_from_url';
		if(SM.Configuration.getConfiguration()["Youtube"]){
			defaultTab = 'tab_video_youtube';
		}
		return defaultTab;
	};
			
	return {
		init				: init,
		onLoadTab 			: onLoadTab,
		addVideo			: addVideo,
		addContent 			: addContent,
		getAddContentMode	: getAddContentMode,
		setAddContentMode	: setAddContentMode,
		getDefaultTab		: getDefaultTab
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Audio = (function(SM,$,undefined){
			
	var init = function(){
		SM.Editor.Audio.HTML5.init();
	};

	return {
		init : init
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Audio.HTML5 = (function(SM,$,undefined){

	var init = function(){	
	};

	var drawAudioWithWrapper = function(audioTag){
		var sources = SM.Audio.HTML5.getSources(audioTag);
		if(sources.length > 0){
			var options = {};
			options.timestamp = true;
			drawAudio(sources,options);
		}
	};

	var drawAudioWithUrl = function(url){
		var options = {};
		options.timestamp = true;
		drawAudio([{src: url}],options);
	};

	var drawAudio = function(sources,options,area,style){
		var current_area;
		if(area){
			current_area = area;
		}	else {
			current_area = SM.Editor.getCurrentArea();
		}
		current_area.attr('type','audio');

		//Default options
		var autoplay = false;
			
		//Replace defeault options if options hash is defined
		if(options){
			if(options['autoplay']){
				autoplay = options['autoplay'];
			}
		}

		var audioTag = document.createElement('audio');
		audioTag.setAttribute('class', "view_content_audio");
		audioTag.setAttribute('controls', "controls");
		audioTag.setAttribute('preload', "metadata");
		audioTag.setAttribute('autoplayonslideenter',autoplay);
		if(style){
			audioTag.setAttribute('style', style);
		}
		
		$(current_area).html("");
		$(current_area).append(audioTag);

		//Insert sources after append audio
		SM.Audio.HTML5.addSourcesToAudioTag(sources,audioTag,{timestamp:true});

		SM.Editor.addDeleteButton($(current_area));

		SM.Editor.Tools.loadToolsForZone(current_area);
	};


	/*
	 * Renderer
	 */
	var renderAudioFromWrapper = function(audioTag,options){
		var sources = SM.Audio.HTML5.getSources(audioTag);
		if(sources.length > 0){
			var options = options || {};
			return SM.Audio.HTML5.renderAudioFromSources(sources,options);
		}
	};

	var renderAudioWithURL = function(url,options){
		return SM.Audio.HTML5.renderAudioFromSources([{src: url}],options);
	};


	return {
		init 						: init,
		drawAudioWithWrapper		: drawAudioWithWrapper,
		drawAudioWithUrl			: drawAudioWithUrl,
		drawAudio 					: drawAudio,
		renderAudioFromWrapper		: renderAudioFromWrapper,
		renderAudioWithURL			: renderAudioWithURL
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Video.HTML5 = (function(SM,$,undefined){
	
	var init = function(){
	};

	var drawVideoWithWrapper = function(videoTag){
		var sources = SM.Video.HTML5.getSources(videoTag);
		if(sources.length > 0){
			var options = {};

			//Look for poster
			var poster = SM.Video.HTML5.getPoster(videoTag);
			if(typeof poster == "string"){
				options.poster = poster;
			}
			//Look for autoplay...
			options.timestamp = true;

			drawVideo(sources,options);
		}
	};

	var drawVideoWithUrl = function(url){
		var options = {};
		options.timestamp = true;
		drawVideo([{src: url}],options);
	};
	
	/**
	* Returns a video object prepared to draw.
	*/
	var drawVideo = function(sources,options,area,style){
		var current_area;
		if(area){
			current_area = area;
		}	else {
			current_area = SM.Editor.getCurrentArea();
		}
		current_area.attr('type','video');

		//Default options
		var posterUrl;
		var autoplay = false;
			
		//Replace defeault options if options hash is defined
		if(options){
			if(options['poster']){
				posterUrl = options['poster'];
			}
			if(options['autoplay']){
				autoplay = options['autoplay'];
			}
		}
			
		var videoTag = document.createElement('video');
		videoTag.setAttribute('class', "view_content_video");
		videoTag.setAttribute('controls', "controls");
		videoTag.setAttribute('preload', "metadata");
		if(typeof posterUrl === "string"){
			videoTag.setAttribute('poster', posterUrl);
		}
		videoTag.setAttribute('autoplayonslideenter',autoplay);
		if(style){
			videoTag.setAttribute('style', style);
		}

		$(current_area).html("");
		$(current_area).append(videoTag);

		//Insert sources after append video
		SM.Video.HTML5.addSourcesToVideoTag(sources,videoTag,{timestamp:true});

		SM.Editor.addDeleteButton($(current_area));

		SM.Editor.Tools.loadToolsForZone(current_area);
	};


	/*
	 * Renderer
	 */
	var renderVideoFromWrapper = function(videoTag,options){
		var sources = SM.Video.HTML5.getSources(videoTag);
		if(sources.length > 0){
			var options = options || {};
			//Look for poster
			var poster = SM.Video.HTML5.getPoster(videoTag);
			if(typeof poster == "string"){
				options.poster = poster;
			}
			return SM.Video.HTML5.renderVideoFromSources(sources,options);
		}
	};

	var renderVideoWithURL = function(url,options){
		return SM.Video.HTML5.renderVideoFromSources([{src: url}],options);
	};


	return {
		init 					: init,
		drawVideoWithUrl 		: drawVideoWithUrl,
		drawVideo 				: drawVideo,
		drawVideoWithWrapper	: drawVideoWithWrapper,
		renderVideoFromWrapper	: renderVideoFromWrapper,
		renderVideoWithURL		: renderVideoWithURL
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Video.Youtube = (function(SM,$,undefined){

	var generateWrapperForYoutubeVideoUrl = function (url){
		var videoId = SM.Video.Youtube.getYoutubeIdFromURL(url);
		if(videoId!=null){
			return _generateWrapper(videoId);
		} else {
			return "Youtube Video ID can't be founded.";
		}
	};

	var _generateWrapper = function(videoId){
		var videoURL = "https://www.youtube.com/embed/"+videoId;
		videoURL = SM.Utils.addParamToUrl(videoURL,"wmode","opaque");
		var videoWContainer = ((typeof SM.Editor.getCurrentArea() != "undefined")&&(SM.Editor.getCurrentArea() != null)) ? SM.Editor.getCurrentArea() : SM.Editor.getCurrentContainer();
		var dimensionsToDraw = SM.Editor.Utils.dimentionsToDraw($(videoWContainer).width(), $(videoWContainer).height(),325,243);
		var wrapper = "<iframe src='"+videoURL+"' frameborder='0' style='width:"+dimensionsToDraw.width+"px; height:"+dimensionsToDraw.height+"px;'></iframe>";
		return wrapper;
	};

	var generatePreviewWrapperForYoutubeVideoUrl = function(url){
		var videoId = SM.Video.Youtube.getYoutubeIdFromURL(url);
		if(videoId!=null){
			return _generatePreviewWrapper(videoId);
		} else {
			return "<p class='objectPreview'>Youtube Video ID can't be founded.</p>"
		}
	};

	var _generatePreviewWrapper = function(videoId){
		var videoURL = "https://www.youtube.com/embed/"+videoId;
		videoURL = SM.Utils.addParamToUrl(videoURL,"wmode","opaque");
		var wrapper = '<iframe class="objectPreview" src="'+videoURL+'" frameborder="0"></iframe>';
		return wrapper;
	};

	return {
		generateWrapperForYoutubeVideoUrl 			: generateWrapperForYoutubeVideoUrl,
		generatePreviewWrapperForYoutubeVideoUrl 	: generatePreviewWrapperForYoutubeVideoUrl
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Image = (function(SM,$,undefined){
	
	var contentToAdd = null;
	var contentAddMode = SM.Constant.NONE;

	var urlDivId = "tab_pic_from_url_content";
	var urlInputId = "picture_url";
	
	var init = function(){
		//Load from URL
		$("#" + urlDivId + " .previewButton").click(function(event){
			if(SM.Validator.validateObject($("#" + urlInputId).val())){
				contentToAdd = SM.Editor.Utils.autocompleteUrls($("#" + urlInputId).val());
				SM.Editor.Object.drawPreview(urlDivId, contentToAdd, {"contentAddMode": contentAddMode});
			}
		});	
	};
	
	var onLoadTab = function(tab){
		if(tab=="url"){
			_onLoadURLTab();
		}
	};
	
	var _onLoadURLTab = function(){
		if(contentAddMode === SM.Constant.SCREEN){
			var $slide = $(SM.Slides.getCurrentSlide());
			var slideBackgroundURL = SM.Slides.getSlideBackground($slide);
			if(typeof slideBackgroundURL === "string"){
				$("#" + urlInputId).val(slideBackgroundURL);
				$("#" + urlDivId + " .previewButton").trigger("click");
				$("#" + urlDivId + " .previewimgbox button").hide();
				return;
			}
		}

		contentToAdd = null;
		SM.Editor.Object.resetPreview(urlDivId);
		$("#" + urlInputId).val("");
	};
	
	var addContent = function(){
		switch(contentAddMode){
			case SM.Constant.SCREEN:
				SM.Editor.Slides.setSlideBackground(SM.Slides.getCurrentSlide(),contentToAdd);
				break;
			default:
				SM.Editor.Object.drawPreviewObject(contentToAdd, {forceType: SM.Constant.MEDIA.IMAGE});
		}
		//Reset contentAddMode
		contentAddMode = SM.Constant.NONE;
	};
	
   /**
	* Function to draw an image in a zone
	* the zone to draw is the one in current_area
	* this function also makes the image draggable
	* param area: optional param indicating the area to add the image, used for editing scenes
	* param style: optional param with the style, used in editing scenes
	*/
	var drawImage = function(image_url, area, style, hyperlink, options){
		var current_area;
		var renderOnInit = false;

		if(area){
			current_area = area;
			renderOnInit = true;
		}	else {
			current_area = SM.Editor.getCurrentArea();
		}

		if((typeof current_area === "undefined")||(current_area === null)){
			return;
		}

		var newStyle;
		if(style){
			newStyle = SM.Editor.Utils.setStyleInPixels(style,current_area);
		} else {
			var image_width = $(current_area).width(); //default image width
			newStyle = "width:"+image_width+"px;";
		}

		var nextImageId = SM.Utils.getId();
		var idToDragAndResize = "draggable" + nextImageId;
		current_area.attr('type','image');
		if(hyperlink){
			current_area.attr('hyperlink',hyperlink);
		}
		current_area.html("<img class='view_content_image' id='"+idToDragAndResize+"' draggable='true' title='Click to drag' src='"+image_url+"' style='"+newStyle+"'/>");

		if(!style){
			//Adjust dimensions after drawing (Only after insert new images)
			var theImg = $("#"+idToDragAndResize);
			$(theImg).load(function(){
				SM.Utils.addTempShown([$(current_area).parent(),$(current_area),$(theImg)]);
				var dimentionsToDraw = SM.Editor.Utils.dimentionsToDraw($(current_area).width(), $(current_area).height(), $(theImg).width(), $(theImg).height());
				SM.Utils.removeTempShown([$(current_area).parent(),$(current_area),$(theImg)]);

				$(theImg).width(dimentionsToDraw.width);
				//Prevent incorrect height detections
				if(dimentionsToDraw.height>0){
					$(theImg).height(dimentionsToDraw.height);
				}
			});
		};

		SM.Editor.addDeleteButton(current_area);
		
		$("#" + idToDragAndResize).draggable({
			cursor: "move",
			stop: function(){
				$(this).parent().click();  //call parent click to select it in case it was unselected	
			}
		});

		if(renderOnInit === false){
			SM.Editor.Slides.updateThumbnail(SM.Slides.getCurrentSlide());
		};
	};

	var getAddContentMode = function(){
		return contentAddMode;
	};

	var setAddContentMode = function(mode){
		SM.Editor.Utils.hideNonDefaultTabs();
		contentAddMode = mode;
	};

	return {
		init 				: init,
		onLoadTab 			: onLoadTab,
		drawImage 			: drawImage,
		addContent 			: addContent,
		getAddContentMode	: getAddContentMode,
		setAddContentMode	: setAddContentMode
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Object = (function(SM,$,undefined){
	var contentToAdd = null;
	var urlDivId = "tab_object_from_url_content";
	var urlInputId = "object_web_input";

	var _hiddenLinkToInitObjectSettings;
		
	var init = function(){
		SM.Editor.Object.Web.init();
		SM.Editor.Object.GoogleDOC.init();
		SM.Editor.Object.PDF.init();

		//Load from URL (embed)
		$("#" + urlDivId + " .previewButton").click(function(event){
			if(SM.Validator.validateObject($("#" + urlInputId).val())){
				contentToAdd = SM.Editor.Utils.autocompleteUrls($("#" + urlInputId).val());
				drawPreview(urlDivId, contentToAdd);
			}
		});

		//Object Settings
		_hiddenLinkToInitObjectSettings = $('<a href="#objectSettings_fancybox" style="display:none"></a>');
		$(_hiddenLinkToInitObjectSettings).fancybox({
			'autoDimensions' : false,
			'height': 400,
			'width': 400,
			'scrolling': 'no',
			'showCloseButton': false,
			'padding' : 0,
			"onStart"  : function(data){
				_onStartObjectSettingsFancybox();
			},
			"onComplete" : function(data){
			},
			"onClosed"  : function(data){
			}
		});
	};
	
	var onLoadTab = function(){
		contentToAdd = null;
		resetPreview(urlDivId);
		$("#" + urlInputId).val("");
	};
	
	var drawPreview = function(divId,src,options){
		$("#" + divId + " .previewimgbox").css("background-image","none");
		$("#" + divId + " .previewimgbox img.imagePreview").remove();
		$("#" + divId + " .previewimgbox .objectPreview").remove();
		
		var wrapper = $(renderObjectPreview(src));
		$("#" + divId + " .previewimgbox").append(wrapper);
		_loadSources(src,wrapper);
		$("#" + divId + " .previewimgbox button").show();
	};

	var _loadSources = function(object,tag){
		var objectInfo = SM.Object.getObjectInfo(object);
		if((objectInfo.wrapper===SM.Constant.WRAPPER.VIDEO)||((objectInfo.wrapper===null)&&(objectInfo.type===SM.Constant.MEDIA.HTML5_VIDEO))){
			var sources = (typeof objectInfo.source == "object") ? objectInfo.source : [{src: objectInfo.source}];
			SM.Video.HTML5.addSourcesToVideoTag(sources,tag,{timestamp:true});
		} else if((objectInfo.wrapper===SM.Constant.WRAPPER.AUDIO)||((objectInfo.wrapper===null)&&(objectInfo.type===SM.Constant.MEDIA.HTML5_AUDIO))){
			var sources = (typeof objectInfo.source == "object") ? objectInfo.source : [{src: objectInfo.source}];
			SM.Audio.HTML5.addSourcesToAudioTag(sources,tag,{timestamp:true});
		}
	};
	
	var resetPreview = function(divId){
		$("#" + divId + " .previewimgbox button").hide();
		$("#" + divId + " .previewimgbox img.imagePreview").remove();
		$("#" + divId + " .previewimgbox .objectPreview").remove();
		$("#" + divId + " .previewimgbox").css("background-image", "");
	};
	
	var drawPreviewElement = function(){
		drawPreviewObject(contentToAdd);
	};
	
	var drawPreviewObject = function(content,options){
		if(content){
			drawObject(content,options);
			$.fancybox.close();
		}
	};



	///////////////////////////////////////
	/// OBJECT RESIZING
	///////////////////////////////////////
	
	/*
	* Resize object and its wrapper automatically
	*/
	var resizeObject = function(id,newWidth){
		var parent = $("#" + id).parent();
		var aspectRatio = $("#" + id).width()/$("#" + id).height();

		var newWrapperHeight = Math.round(newWidth/aspectRatio);
		var newWrapperWidth = Math.round(newWidth);
		$(parent).width(newWrapperWidth);
		$(parent).height(newWrapperHeight);

		var newHeight = newWrapperHeight;
		var newWidth = newWrapperWidth;
		
		$("#" + id).width(newWidth);
		$("#" + id).height(newHeight);
	};
	

	///////////////////////////////////////
	/// OBJECT DRAW: PREVIEWS
	///////////////////////////////////////
	
	var renderObjectPreview = function(object, options){
		var objectInfo = SM.Object.getObjectInfo(object);
		var objectType = objectInfo.type;
		
		if((options)&&(typeof options.forceType === "string")){
			objectType = options.forceType;
		}

		if(objectType === SM.Constant.MEDIA.REUSABLE_PUZZLE_INSTANCE){
			return SM.Editor.Object.Web.generatePreviewWrapperForReusablePuzzleInstance(objectInfo.source);
		}

		switch (objectInfo.wrapper){
			case null:
				//Draw object preview from source
				switch (objectType) {
					case SM.Constant.MEDIA.IMAGE:
						return "<img class='imagePreview' src='" + object + "'></img>";
					case SM.Constant.MEDIA.PDF:
						return SM.Editor.Object.PDF.generatePreviewWrapper(object);
					case SM.Constant.MEDIA.DOC:
					case SM.Constant.MEDIA.PPT:
						return SM.Editor.Object.GoogleDOC.generatePreviewWrapper(object);
					case SM.Constant.MEDIA.YOUTUBE_VIDEO:
						return SM.Editor.Video.Youtube.generatePreviewWrapperForYoutubeVideoUrl(object);
					case SM.Constant.MEDIA.HTML5_VIDEO:
						return SM.Editor.Video.HTML5.renderVideoWithURL(object,{loadSources: false, extraClasses: ["objectPreview"]});
					case SM.Constant.MEDIA.HTML5_AUDIO:
						return SM.Editor.Audio.HTML5.renderAudioWithURL(object,{loadSources: false, extraClasses: ["objectPreview"]});
					case SM.Constant.MEDIA.WEB:
						return SM.Editor.Object.Web.generatePreviewWrapperForWeb(object);
					default:
						SM.Debugging.log("Unrecognized object source type");
				}
				break;
			case SM.Constant.WRAPPER.EMBED:
				return _genericWrapperPreview(object);
			case SM.Constant.WRAPPER.OBJECT:
				return _genericWrapperPreview(object);
			case SM.Constant.WRAPPER.IFRAME:
				return _genericWrapperPreview(object);
			case SM.Constant.WRAPPER.VIDEO:
				return SM.Editor.Video.HTML5.renderVideoFromWrapper(object,{loadSources: false, extraClasses: ["objectPreview"]});
			case SM.Constant.WRAPPER.AUDIO:
				return SM.Editor.Audio.HTML5.renderAudioFromWrapper(object,{loadSources: false, extraClasses: ["objectPreview"]});
			default:
				SM.Debugging.log("Unrecognized object wrapper: " + objectInfo.wrapper);
				break;
		}
	};
	
	var _genericWrapperPreview = function(object){
		var wrapperPreview = $(object);
		$(wrapperPreview).addClass('objectPreview');
		$(wrapperPreview).attr('wmode','opaque');
		$(wrapperPreview).removeAttr('width');
		$(wrapperPreview).removeAttr('height');
		if(typeof $(wrapperPreview).attr("src") != "undefined"){
			$(wrapperPreview).attr("src",SM.Utils.checkObjectUrl($(wrapperPreview).attr("src")));
		}
		//Force scrolling auto if the wrapper has specified the scrolling param
		if(typeof $(wrapperPreview).attr("scrolling") != "undefined"){
			$(wrapperPreview).attr("scrolling","auto");
		}
		return wrapperPreview;
	};
	
	
	
	///////////////////////////////////////
	/// OBJECT DRAW: Draw objects in slides
	///////////////////////////////////////
	
   /**
	* Returns a object prepared to draw.
	* param options.area: optional param indicating the area to add the object, used for editing scenes
	* param options.style: optional param with the style, used in editing scene
	*/
	var drawObject = function(object,options){
		if(!SM.Validator.validateObject(object)){
			return;
		}

		//Defaults
		options = (typeof options == "undefined" ? {} : options);
		var objectInfo = SM.Object.getObjectInfo(object);
		var current_area = SM.Editor.getCurrentArea();
		var object_style = "";

		if(options){
			if(options.area){
				current_area = options.area;
			}
			if(options.style){
				object_style = options.style;
			}
			if(options.forceType){
				objectInfo.type = options.forceType;
			}
		}

		if(objectInfo.type === SM.Constant.MEDIA.REUSABLE_PUZZLE_INSTANCE){
			return drawObject(SM.Editor.Object.Web.generateWrapperForReusablePuzzleInstance(objectInfo.source),options);
		}

		switch (objectInfo.wrapper) {
			case null:
				//Draw object from source
				switch (objectInfo.type) {
					case SM.Constant.MEDIA.IMAGE:
						SM.Editor.Image.drawImage(object);
						break;
					case SM.Constant.MEDIA.PDF:
						options.wrapperGenerated = true;
						return drawObject(SM.Editor.Object.PDF.generateWrapper(objectInfo.source),options);
					case SM.Constant.MEDIA.DOC:
					case SM.Constant.MEDIA.PPT:
						return drawObject(SM.Editor.Object.GoogleDOC.generateWrapper(object),options);
					case SM.Constant.MEDIA.YOUTUBE_VIDEO:
						return drawObject(SM.Editor.Video.Youtube.generateWrapperForYoutubeVideoUrl(object),options);
					case SM.Constant.MEDIA.HTML5_VIDEO:
						SM.Editor.Video.HTML5.drawVideoWithUrl(object);
						break;
					case SM.Constant.MEDIA.HTML5_AUDIO:
						SM.Editor.Audio.HTML5.drawAudioWithUrl(object);
						break;
					case SM.Constant.MEDIA.WEB:
						return drawObject(SM.Editor.Object.Web.generateWrapperForWeb(object),options);
					default:
						SM.Debugging.log("Unrecognized object source type: " + objectInfo.type);
						break;
				}
				break;
			case SM.Constant.WRAPPER.EMBED:
			case SM.Constant.WRAPPER.OBJECT:
			case SM.Constant.WRAPPER.IFRAME:
				if(([SM.Constant.MEDIA.PDF].indexOf(objectInfo.type)!=-1)&&(!options.wrapperGenerated)){
					return drawObject(objectInfo.source,options);
				}
				drawObjectWithWrapper(object, current_area, object_style);
				break;
			case SM.Constant.WRAPPER.VIDEO:
				SM.Editor.Video.HTML5.drawVideoWithWrapper(object);
				break;
			case SM.Constant.WRAPPER.AUDIO:
				SM.Editor.Audio.HTML5.drawAudioWithWrapper(object);
				break;
			default:
				SM.Debugging.log("Unrecognized object wrapper: " + objectInfo.wrapper);
				break;
		}

		//Finally load the tools in the toolbar
		SM.Editor.Tools.loadToolsForZone(current_area);
	};
	
	var drawObjectWithWrapper = function(wrapper, current_area, style){
		current_area.attr('type', 'object');
		var wrapperDiv = document.createElement('div');
		if(style){
			wrapperDiv.setAttribute('style', style);
		}
		$(wrapperDiv).addClass('object_wrapper');

		var wrapperTag = $(wrapper);
		$(wrapperTag).css('pointer-events', "none");
		$(wrapperTag).attr('class', "view_content_object");
		$(wrapperTag).attr('wmode', "opaque");
		if(typeof $(wrapperTag).attr("scrolling") !== "undefined"){
			$(wrapperTag).attr("scrolling","auto");
		}

		$(current_area).html("");
		$(current_area).append(wrapperDiv);

		SM.Editor.addDeleteButton($(current_area));
			
		$(wrapperDiv).append(wrapperTag);

		_adjustWrapperOfObject(wrapperTag, current_area);

		//Load toolbar
		SM.Editor.Tools.loadToolbarForObject(wrapper);
	};

	var _adjustWrapperOfObject = function($object, current_area){
		var maxWidth = current_area.width();
		var maxHeight = current_area.height();
		var width = $object.width();
		var height = $object.height();
		var proportion = height/width;

		if(width > maxWidth){
			$object.width(maxWidth);
			$object.height(width*proportion);
			width = maxWidth;
			height = $object.height();
		}

		if(height > maxHeight){
			$object.height(maxHeight);
			$object.width(height/proportion);
			width = $object.width();
			height = maxHeight;
		}

		var wrapper = $object.parent();
		if($(wrapper).hasClass("object_wrapper")){
			$(wrapper).height($object.height());
			$(wrapper).width($object.width());
		}
	};

	/////////////////
	// Object Settings
	/////////////////

	var showObjectSettings = function(){
		$(_hiddenLinkToInitObjectSettings).trigger("click");
	};

	var _onStartObjectSettingsFancybox = function(){
		var $oSF = $("#objectSettings_fancybox");

		//Get object
		var $area = $(SM.Editor.getCurrentArea());
		var $object = $area.find("div.object_wrapper").children().first();
		var isReusablePuzzleInstance = ($object.attr("reusablepuzzleinstance") === "true");
		$oSF.find("input[type='hidden'][name='elId']").val($area.attr("id"));
		
		//Load Settings
		var oSettings = {};
		var unloadObject = (isReusablePuzzleInstance===false);
		var addPreviewParamToObject = isReusablePuzzleInstance;
		
		try {
			oSettings = JSON.parse($area.attr("elSettings"));
		} catch(e){}

		if(typeof oSettings.unloadObject !== "undefined"){
			unloadObject = oSettings.unloadObject;
		}
		if(typeof oSettings.addPreviewParamToObject !== "undefined"){
			addPreviewParamToObject = oSettings.addPreviewParamToObject;
		}

		//Fill and reset form
		var $unloadObjectCheckbox = $oSF.find("input[type='checkbox'][name='unloadObject']");
		$unloadObjectCheckbox.prop('checked', unloadObject);
		var $addPreviewParamToObjectCheckbox = $oSF.find("input[type='checkbox'][name='addPreviewParamToObject']");
		$addPreviewParamToObjectCheckbox.prop('checked', addPreviewParamToObject);
		$addPreviewParamToObjectCheckbox.attr("defaultvalue",isReusablePuzzleInstance);

		SM.Editor.Utils.enableElementSettingsField($unloadObjectCheckbox,true);
		SM.Editor.Utils.enableElementSettingsField($addPreviewParamToObjectCheckbox,(isReusablePuzzleInstance===false));
	};

	var onObjectSettingsDone = function(){
		var $oSF = $("#objectSettings_fancybox");

		//Get area and object
		var areaId = $oSF.find("input[type='hidden'][name='elId']").val();
		var $area = $("#"+areaId);
		var $object = $area.find("div.object_wrapper").children().first();

		//Get previous settings
		var oSettings = {};
		try {
			oSettings = JSON.parse($(area).attr("elsettings"));
		} catch(e) {}
		
		//Get new settings
		oSettings.unloadObject = $oSF.find("input[type='checkbox'][name='unloadObject']").is(":checked");
		oSettings.addPreviewParamToObject = $oSF.find("input[type='checkbox'][name='addPreviewParamToObject']").is(":checked");

		//Save Settings
		var oSSerialized = JSON.stringify(oSettings);
		$area.attr("elSettings",oSSerialized);

		//Apply settings
		var objectURL = $object.attr("src");
		//var objectURL = oSettings.url;
		if(oSettings.addPreviewParamToObject){
			objectURL = SM.Utils.addParamToUrl(objectURL,"escapp_preview",(""+SM.Status.isPreview()));
		} else {
			objectURL = SM.Utils.removeParamFromUrl(objectURL,"escapp_preview");
		}

		$object.attr("src",objectURL);

		$.fancybox.close();
	};
	
	
	return {
		init							: init,
		onLoadTab 						: onLoadTab,
		drawObject						: drawObject,
		renderObjectPreview 			: renderObjectPreview,
		resizeObject 					: resizeObject,
		drawPreview 					: drawPreview,
		resetPreview 					: resetPreview,
		drawPreviewElement				: drawPreviewElement,
		drawPreviewObject				: drawPreviewObject,
		showObjectSettings				: showObjectSettings,
		onObjectSettingsDone			: onObjectSettingsDone
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Object.Web = (function(SM,$,undefined){

	var init = function(){
	};	

	var generateWrapperForWeb = function(url){
		url = SM.Utils.checkWebUrl(url);
		return "<iframe src='" + url + "' wmode='opaque'></iframe>";
	};

	var generateWrapperForReusablePuzzleInstance = function(url){
		url = SM.Utils.checkReusablePuzzleInstanceUrl(url);
		return "<iframe src='" + url + "' reusablepuzzleinstance='true' wmode='opaque'></iframe>";
	};
	
	var generatePreviewWrapperForWeb = function(url){
		url = SM.Utils.checkWebUrl(url);
		return "<iframe class='objectPreview' src='" + url + "' wmode='opaque'></iframe>";
	};

	var generatePreviewWrapperForReusablePuzzleInstance = function(url){
		url = SM.Utils.checkReusablePuzzleInstanceUrl(url);
		return generatePreviewWrapperForWeb(url);
	};
			
	return {
		init 											: 	init,
		generatePreviewWrapperForWeb 					: 	generatePreviewWrapperForWeb,
		generateWrapperForReusablePuzzleInstance 		: 	generateWrapperForReusablePuzzleInstance,
		generateWrapperForWeb 							: 	generateWrapperForWeb,
		generatePreviewWrapperForReusablePuzzleInstance	: 	generatePreviewWrapperForReusablePuzzleInstance
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Object.PDF = (function(SM,$,undefined){

	var init = function(){
	};

	var generateWrapper = function(url){
		return SM.Object.PDF.generateWrapper(url);
	};
	
	var generatePreviewWrapper = function(url){
		var objectWrapper = SM.Object.PDF.generateWrapper(url);
		var previewWrapper = $(objectWrapper);
		$(previewWrapper).addClass("objectPreview");
		return SM.Utils.getOuterHTML(previewWrapper);
	};
		
	return {
		init					: init,
		generateWrapper 		: generateWrapper,
		generatePreviewWrapper 	: generatePreviewWrapper
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Object.GoogleDOC = (function(SM,$,undefined){

	var init = function(){
	};

	var generateWrapper = function(url){
		return SM.Object.GoogleDOC.generateWrapper(url);
	};
	
	var generatePreviewWrapper = function(url){
		var objectWrapper = SM.Object.GoogleDOC.generateWrapper(url);
		var previewWrapper = $(objectWrapper);
		$(previewWrapper).addClass("objectPreview");
		return SM.Utils.getOuterHTML(previewWrapper);
	};
		
	return {
		init					: init,
		generatePreviewWrapper 	: generatePreviewWrapper,
		generateWrapper 		: generateWrapper
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Text = (function(SM,$,undefined){
	
	var initialized = false;
	var _initializedCKEditorInstances = {};

	var init = function(){
		if(!initialized){
			$(document).on('click','.textthumb', launchTextEditor);

			CKEDITOR.on( 'dialogDefinition', function(ev){
				// Take the dialog name and its definition from the event data.
				var dialogName = ev.data.name;
				var dialogDefinition = ev.data.definition;

				switch(dialogName){
					case 'link':
						//Customize Link window
						// Remove unused link type options
						// var linkType = dialogDefinition.getContents('info').get("linkType");
						// linkType.items.splice(2,1);
						// linkType.items.splice(1,1);

						//Remove LinkType
						dialogDefinition.getContents('info').remove("linkType");
						//Remove unuseful protocols
						var protocols = dialogDefinition.getContents('info').get("protocol").items;
						protocols.splice(3,1);
						protocols.splice(2,1);

						//Remove advanced options
						dialogDefinition.removeContents('advanced');

						//Customize target window
						var targetTab = dialogDefinition.getContents('target');
						var targetField = targetTab.get('linkTargetType');
						targetField['default'] ='_blank';
						targetField.items.splice(6,1);
						targetField.items.splice(4,1);
						targetField.items.splice(1,1);
						targetField.items.splice(0,1);
						// dialogDefinition.removeContents( 'target' ); //To remove targets

						break;
					case 'table':
						dialogDefinition.removeContents('advanced');
						var info = dialogDefinition.getContents('info');
						//Set center as default alignment
						var alignment = info.get("cmbAlign");
						alignment.items.splice(0,1);
						//Keep ["default"] to prevent Google closure compiler errors
						alignment["default"] = "center";
						//Remove self-headers
						info.remove("selHeaders");

						break;
					case 'image':
						//Remove advanced options
						dialogDefinition.removeContents('advanced');

						//Customize target window
						var linkTab = dialogDefinition.getContents('Link');
						var targetField = linkTab.get("cmbTarget");
						targetField['default'] ='_blank';
						targetField.items.splice(4,1);
						targetField.items.splice(2,1);
						targetField.items.splice(0,1);

						break;
					case 'MediaEmbedDialog':
						break;
				}
			});

			initialized=true;
		}
	}

	
	/**
	* Function called when user clicks on the text thumb
	* Allows users to include text content in the slide using a WYSIWYG editor
	*/
	var launchTextEditor = function(event, area, initial_text, options){
		init();

		var current_area;
		if(area){
			current_area = area;
		} else {
			current_area = $(this).parents(".selectable");
		}
		current_area.attr('type','text');
		
		var screen = $("article").has(current_area);
		var view = $("article > article").has(current_area);

		if(typeof $(current_area).attr("id") == "undefined"){
			//We need an ID to call addTempShown properly
			$(current_area).attr("id",SM.Utils.getId("TmpShownId")); 
		}

		var disableTmpShown = (options)&&(options.disableTmpShown);

		if(!disableTmpShown){
			SM.Utils.addTempShown(current_area);
		}
		var currentAreaHeight = $(current_area).height();
		var currentAreaWidth = $(current_area).width();
		if(!disableTmpShown){
			SM.Utils.removeTempShown(current_area);
		}

		//Create the wysiwyg container and add to the area
		var wysiwygContainerId = SM.Utils.getId();
		var wysiwygContainer = $("<div id='"+wysiwygContainerId+"' class='wysiwygTextArea'></div>")
		$(wysiwygContainer).attr('style','width: 100%; height: 100%');
		$(current_area).append(wysiwygContainer);

		//Specified CKEditor configuration
		var config = {};

		//Select the features of the toolbar
		config.toolbar = 'Full';
		config.toolbar_Full =
		[
			{ name: 'first', items : ['Bold','Italic','Underline','-','Subscript','Superscript','Font','FontSize','TextColor','BGColor'] },
			'/',
			{ name: 'lists', items : ['NumberedList','BulletedList','Table'] },
			{ name: 'alignment', items : ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'] },
			{ name: 'link', items : ['Link'] },
			{ name: 'Objects', items : ['Image','MediaEmbed'] },
			{ name: 'symbols', items : ['SpecialChar'] }
		];

		//Singleton toolbar
		config.sharedSpaces =
		{
			top : 'toolbar_text'
		};

		//Disable toolbar expansion
		config.toolbarCanCollapse = false;
		//Disable resizing
		config.resize_enabled = false;
		//Disable bottom tags
		config.removePlugins = 'elementspath';
		//Enable table resize and autogrow
		config.extraPlugins = 'tableresize,autogrow,specialchar,mediaembed';

		if((options)&&(options.autogrow)){
			config.autoGrow_minHeight = 34;
			config.autoGrow_maxHeight = 800;
		}

		//See http://www.htmlhelp.com/reference/html40/entities/symbols.html and/or http://htmlentities.net/html/entities for possible symbols
		config.specialChars = [];
		config.specialChars = config.specialChars.concat(
			[[ '&alpha;', 'Alpha' ]],
			[[ '&beta;', 'Beta' ]],
			[[ '&gamma;', 'Gamma' ]],
			[[ '&delta;', 'Delta' ]],
			[[ '&epsilon;', 'Epsilon']],
			[[ '&zeta;', 'Zeta' ]],
			[[ '&eta;', 'Eta' ]],
			[[ '&theta;', 'Theta' ]],
			[[ '&iota;', 'Iota' ]],
			[[ '&kappa;', 'Kappa' ]],
			[[ '&lambda;', 'Lambda' ]],
			[[ '&mu;', 'Mu' ]],
			[[ '&nu;', 'Nu' ]],
			[[ '&xi;', 'Xi' ]],
			[[ '&omicron;', 'Omicron' ]],
			[[ '&pi;', 'Pi' ]],
			[[ '&rho;', 'Rho' ]],
			[[ '&sigma;', 'Sigma' ]],
			[[ '&tau;', 'Tau' ]],
			[[ '&upsilon;', 'Upsilon' ]],
			[[ '&phi;', 'Phi' ]],
			[[ '&chi;', 'Chi' ]],
			[[ '&psi;', 'Psi' ]],
			[[ '&omega;', 'Omega' ]],

			//Math symbols
			[[ '&divide;', '' ]],
			[[ '&radic;', '' ]],
			[[ '&bull;', '' ]],
			[[ '&middot;', '' ]],
			[[ '&plusmn;', '' ]],
			[[ '&frac14;', '' ]],
			[[ '&frac12;', '' ]],
			[[ '&frac34;', '' ]],
			[[ '&permil;', '' ]],
			[[ '&weierp;', '' ]],
			[[ '&image;', '' ]],
			[[ '&real;', '' ]],
			[[ '&forall;', '' ]],
			[[ '&part;', '' ]],
			[[ '&exist;', '' ]],
			[[ '&empty;', '' ]],
			[[ '&nabla;', '' ]],
			[[ '&isin;', '' ]],
			[[ '&notin;', '' ]],
			[[ '&ni;', '' ]],
			[[ '&prod;', '' ]],
			[[ '&sum;', '' ]],
			[[ '&minus;', '' ]],
			[[ '&lowast;', '' ]],
			[[ '&prop;', '' ]],
			[[ '&infin;', '' ]],
			[[ '&ang;', '' ]],
			[[ '&and;', '' ]],
			[[ '&or;', '' ]],
			[[ '&cap;', '' ]],
			[[ '&cup;', '' ]],
			[[ '&int;', '' ]],
			[[ '&cong;', '' ]],
			[[ '&asymp;', '' ]],
			[[ '&ne;', '' ]],
			[[ '&equiv;', '' ]],
			[[ '&le;', '' ]],
			[[ '&ge;', '' ]],
			[[ '&sub;', '' ]],
			[[ '&sup;', '' ]],
			[[ '&nsub;', '' ]],
			[[ '&sube;', '' ]],
			[[ '&supe;', '' ]],
			[[ '&oplus;', '' ]],
			[[ '&otimes;', '' ]],
			[[ '&perp;', '' ]],
			[[ '&lang;', '' ]],
			[[ '&rang;', '' ]],
			[[ '&lceil;', '' ]],
			[[ '&rceil;', '' ]],
			[[ '&lfloor;', '' ]],
			[[ '&rfloor;', '' ]],
			[[ '&fnof;', '' ]],

			// '' and ""
			[[ '&lsquo;', '' ]],
			[[ '&rsquo;', '' ]],
			[[ '&ldquo;', '' ]],
			[[ '&rdquo;', '' ]],

			//Arrows
			[[ '&larr;', '' ]],
			[[ '&uarr;', '' ]],
			[[ '&darr;', '' ]],
			[[ '&rarr;', '' ]],
			[[ '&harr;', '' ]],
			[[ '&crarr;', '' ]],
			[[ '&lArr;', '' ]],
			[[ '&uArr;', '' ]],
			[[ '&dArr;', '' ]],
			[[ '&rArr;', '' ]],
			[[ '&hArr;', '' ]],

			//Currency
			[[ '&euro;', 'Euro' ]],
			[[ '&cent;', 'Cent' ]],
			[[ '&pound;', 'Pound' ]],
			[[ '&yen;', '' ]],
			[[ '&curren;', '' ]],

			// Other
			[[ '&brvbar;', '' ]],
			[[ '&sect;', '' ]],
			[[ '&copy;', '' ]],
			[[ '&reg;', '' ]],
			[[ '&ordf;', '' ]],
			[[ '&ordm;', '' ]],
			[[ '&deg;', '' ]],
			[[ '&laquo;', '' ]],
			[[ '&raquo;', '' ]],
			[[ '&not;', '' ]],
			[[ '&para;', '' ]],
			[[ '&loz;', '' ]],
			[[ '&spades;', '' ]],
			[[ '&clubs;', '' ]],
			[[ '&hearts;', '' ]],
			[[ '&diams;', '' ]],
			[[ '&dagger;', '' ]]
		);

		//Fit the current area
		config.width = '100%';
		//The height value defines the height of CKEditor editing area and can be given in pixels or em. Percent values are not supported. 
		//http://docs.cksource.com/CKEditor_3.x/Howto/Editor_Size_On_The_Fly
		config.height = currentAreaHeight;

		//Toolbar defaults
		config.fontSize_defaultLabel = '12';

		//Apply sceneMaker skin
		var ckeditorBasePath = CKEDITOR.basePath.substr(0, CKEDITOR.basePath.indexOf("editor/"));
		config.skin = 'sceneMaker,' + ckeditorBasePath + 'editor/skins/sceneMaker/';

		var newInstance = !(typeof initial_text === "string")||((options)&&(options.forceNew));
		if(newInstance){
			var defaultFontSize = 36;
			var defaultAlignment = "center";
			var initialTextColor = "color:#000";
			var blankTextColor = initialTextColor; //For placeholders

			//We can also specify initial_texts style in the options param
			//This options override defaults
			if(options){
				//Font size
				if(typeof options.fontSize == "number"){
					defaultFontSize = options.fontSize;
				}

				//Placeholder
				if(options.placeholder === true){
					initialTextColor = "color:#ccc";
				}
			}

			initial_text = "<p style='text-align:"+defaultAlignment+";'><span autoColor='true' style='"+initialTextColor+"'><span style='font-size:"+defaultFontSize+"px;'>"+"&shy"+"</span></span></p>";
			initial_text_blank = "<p style='text-align:"+defaultAlignment+";'><span autoColor='true' style='"+blankTextColor+"'><span style='font-size:"+defaultFontSize+"px;'>"+"&shy"+"</span></span></p>";
		}

		//Add ckeditor wysiwyg instance
		var ckeditor = CKEDITOR.appendTo(wysiwygContainerId,config);

		var myWidth = currentAreaWidth;
		var myHeight = currentAreaHeight;

		if(!newInstance){
			//Keep screen and view visible until the text has been drawed
			if(!disableTmpShown){
				SM.Utils.addTempShown([screen,view,current_area]);
			}
			setTimeout(function(){
				if(_initializedCKEditorInstances[ckeditor.name] !== true){
					_initializedCKEditorInstances[ckeditor.name] = false;
					if(!disableTmpShown){
						SM.Utils.removeTempShown([screen,view,current_area]);
					}
				} else {
					_initializedCKEditorInstances[ckeditor.name] = undefined;
				}
			},6000);
		}

		ckeditor.on("instanceReady", function(){
			if(initial_text){
				ckeditor.setData(initial_text, function(){
					//Apply fix for a official CKEditor bug
					_fixCKEDITORBug(ckeditor);

					if(newInstance){
						ckeditor.focus();
					}

					if((options)&&(typeof options.callback == "function")){
						options.callback();
					}
				});
			}

			if(!newInstance){
				if(typeof _initializedCKEditorInstances[ckeditor.name] == "undefined"){
					_initializedCKEditorInstances[ckeditor.name] = true;
					if(!disableTmpShown){
						SM.Utils.removeTempShown([screen,view,current_area]);
					}
				} else {
					_initializedCKEditorInstances[ckeditor.name] = undefined;
				}
			}

			if((options)&&(typeof options.onKeyup==="function")&&(options.placeholder!=true)){
				ckeditor.document.on('keyup', function(event){
					options.onKeyup(current_area,ckeditor,event);
				});
			}

			if((!initial_text)&&((options)&&(typeof options.callback == "function"))){
				options.callback();
			}

		});

		ckeditor.on("resize", function(event){
			//onResize
		});

		//Catch the focus event
		ckeditor.on('focus', function(event){
			if((options)&&(options.placeholder===true)){
				var a = $(initial_text).text().replace(/\s+/g,'');
				var b = $(event.editor.getData()).text().replace(/\s+/g,'');
				if(a==b){
					setTimeout(function(){
						event.editor.setData(initial_text_blank, function(){
							if((options)&&(typeof options.onKeyup==="function")){
								ckeditor.document.on('keyup', function(event){
									options.onKeyup(current_area,ckeditor,event);
								});
							}
						});
						event.editor.focus();
					},20);
				}
			}

			var area = getZoneForCKContainer(event.editor.container.$);
			SM.Editor.selectContentZone(area);
		});

		// ckeditor.on('blur', function(event){
		// });

		//Exnteds CKEditor functionality
		ckeditor.getPlainText = _getPlainText;

		//Add a button to delete the current text area
		SM.Editor.addDeleteButton(current_area);
	};
	

	var getCKEditorFromZone = function(zone){
		if((!zone)||(typeof CKEDITOR === 'undefined')||(typeof CKEDITOR.instances === 'undefined')){
			return null;
		}

		var CKEditorInstance = null;

		jQuery.each(CKEDITOR.instances, function(name, CKinstance){
			var CKzone = getZoneForCKContainer(CKinstance.container.$);

			if($(CKzone).attr("id")===$(zone).attr("id")){
				CKEditorInstance = CKinstance;
				return;
			}
		});
		return CKEditorInstance;
	};

	var getZoneForCKContainer = function(container){
		return $("div[type='text']").has(container);
	};

	var getCKEditorIframeContentFromZone = function(zone){
		var editor = getCKEditorFromZone(zone);
		if(!editor){
			return null;
		}
		return _getCKEditorIframeContentFromInstance(editor);
	};

	var _getCKEditorIframeContentFromInstance = function(editor){
		var iframe = $(document.getElementById('cke_contents_' + editor.name)).find("iframe")[0];
		return $(iframe).contents()[0];
	};


	var getCKEditorFromTextArea = function(textArea){
		if((!textArea)||(typeof CKEDITOR === 'undefined')||(typeof CKEDITOR.instances === 'undefined')){
			return null;
		}

		if(!$(textArea).hasClass(".cke_skin_sceneMaker")){
			textArea = $(textArea).find(".cke_skin_sceneMaker");
			if(textArea.length>0){
				textArea = textArea[0];
			}
		}
		
		var CKEditorInstance = null;
		jQuery.each(CKEDITOR.instances, function(name, CKinstance) {
			if(textArea===CKinstance.container.$){
				CKEditorInstance = CKinstance;
				return;
			}
		});
		return CKEditorInstance;
	};

	var _getPlainText = function(){
		var _plainText = "";
		var validIndex = 0;

		$(this.getSnapshot()).each(function(index,p){
			if(p.tagName=="SCRIPT"){
				return;
			}
			if(validIndex!=0){
				_plainText = _plainText + "\n";
			}
			_plainText = _plainText + $(p).text();
			validIndex += 1;
		});

		// return $(this.getSnapshot()).text();
		return _plainText;
	};

	/*
	 * Fix oficial WebKit bug: http://ckeditor.com/forums/CKEditor-3.x/Minimum-Editor-Width-Safari#comment-48574
	 */
	var _fixCKEDITORBug = function(editor){
	    //webkit not redraw iframe correctly when editor's width is < 310px (300px iframe + 10px paddings)
	    if (CKEDITOR.env.webkit) {
	        var iframe = $(document.getElementById('cke_contents_' + editor.name)).find("iframe")[0];
	        iframe.style.display = 'none';
	        iframe.style.display = 'block';
	    }
	};

	return {
		init								: init,
		launchTextEditor					: launchTextEditor,
		getCKEditorFromZone					: getCKEditorFromZone,
		getCKEditorIframeContentFromZone	: getCKEditorIframeContentFromZone,
		getCKEditorFromTextArea				: getCKEditorFromTextArea
	};

}) (SceneMaker, jQuery);


SceneMaker.Editor.Thumbnails = (function(SM,$,undefined){
	var screenThumbnailsDivId = "screens_list";
	var viewThumbnailsDivId = "views_list";

	//Tmp vars
	var drawScreenThumbnailsCallback;
	var drawViewThumbnailsCallback;

	//State vars
	var lastSelectedScreenThumbnail = undefined;
	var lastSelectedViewThumbnail = undefined;
	
	var init = function(){
	};
	 
	var drawScreenThumbnails = function(successCallback){
		drawScreenThumbnailsCallback = successCallback;

		//Clean previous content
		SM.Editor.Scrollbar.cleanScrollbar(screenThumbnailsDivId);
		$("#" + screenThumbnailsDivId).hide();

		//Generate thumbnail images
		var imagesArray = [];
		var imagesArrayTitles = [];

		var slideElements = 0;
		$('.slides > article').each(function(index,s){
			var srcURL = getThumbnailURLForSlide(s);
			var defaultURL = getDefaultThumbnailURLForSlide(s);
			if(srcURL){
				slideElements += 1;
				imagesArray.push($("<img id='screenThumbnail" + slideElements + "' class='image_slidethumbnail' slideNumber='" + slideElements + "' action='goToScreenWithNumber' src='" + srcURL + "' defaultsrc='" + defaultURL + "'/>"));
				imagesArrayTitles.push(slideElements);
			}
    	});

		var options = {};
		options.titleArray = imagesArrayTitles;
		options.callback = _onImagesLoaded;
		options.onImageErrorCallback = _onImageError;
		SM.Editor.Utils.Loader.loadImagesOnContainer(imagesArray,screenThumbnailsDivId,options);
	};
	 
	var _onImageError = function(image){
		var slide = SM.Screen.getScreenWithNumber($(image).attr("slidenumber"));
		var defaultThumbnailURL = getDefaultThumbnailURLForSlide(slide);

		var slideThumbnail = SM.Editor.Thumbnails.getThumbnailForSlide(slide);
		$(slideThumbnail).attr("src",defaultThumbnailURL);

		if(SM.Screen.getCurrentScreen()===slide){
			$("#screen_selected > img").attr("src",thumbnailURL);
		}
	};

	var _onImagesLoaded = function(){
		//Add class to title elements and events
		$("#" + screenThumbnailsDivId).find("img.image_slidethumbnail").each(function(index,img){
			//Add class to title
			var imgContainer = $(img).parent();
			$(imgContainer).addClass("wrapper_slidethumbnail");
			$(imgContainer).addClass("preventNoselectable");
			$(imgContainer).append("<div class='delete_slide delete_screen'></div>");
			var p = $(imgContainer).find("p");
			$(p).addClass("ptext_barbutton");

			//Add events to imgs
			$(img).click(function(event){
				_onClickSlideElement(event);
			});
		});

		//Unselect all thumbnails
		$(".barbutton").css("background-color", "transparent");

		var options = new Array();
		options['callback'] = _afterCreateSlidesScrollbar;

		//Create scrollbar
		$("#" + screenThumbnailsDivId).show();
		SM.Editor.Scrollbar.createScrollbar(screenThumbnailsDivId, options);
	};
	
	var _afterCreateSlidesScrollbar = function(){
		//Add sortable
		$("#" + screenThumbnailsDivId).sortable({
			items: 'div.wrapper_slidethumbnail:has(img[action="goToScreenWithNumber"])',
			change: function(event, ui) {
				//Do nothing
			},
			start: function(event, ui) { 
				//Do nothing
			},
			stop: function(event, ui) {
				var dragElement = ui.item;

				var img = $(ui.item).find("img.image_slidethumbnail[slidenumber]");
				if(isNaN($(img).attr("slidenumber"))){
					return;
				}

				var orgPosition = parseInt($(img).attr("slidenumber"));
				var destPosition;

				//Detect destPosition
				$("#screens_list").find("img.image_slidethumbnail[slidenumber]").each(function(index,item){
					var beforeIndex = parseInt($(item).attr("slidenumber"));
					var afterIndex = index+1;

					if((beforeIndex===orgPosition)&&(beforeIndex!=afterIndex)){
						destPosition = afterIndex;
					}

				});

				// SM.Debugging.log("Org position: " + orgPosition);
				// SM.Debugging.log("Dest position: " + destPosition);

				SM.Editor.Screen.moveScreenTo(orgPosition, destPosition);
			}
		});

		if(typeof drawScreenThumbnailsCallback == "function"){
			drawScreenThumbnailsCallback();
			drawScreenThumbnailsCallback = undefined;
		}
	};

	var _onClickSlideElement = function(event){
		switch($(event.target).attr("action")){
			case "goToScreenWithNumber":
				SM.Screen.goToScreenWithNumber($(event.target).attr("slideNumber"));
				break;
			default:
			  return;
		}
	};

	/**
	* Function to select the thumbnail
	*/
	var selectThumbnail = function(no){
		$("#screens_list img.image_slidethumbnail").removeClass("selectedScreenThumbnail");
		$("#screens_list img.image_slidethumbnail[slideNumber=" + no + "]").addClass("selectedScreenThumbnail");
		$("#screens_list div.wrapper_slidethumbnail").removeClass("selectedThumbnailBackground");
		$("#screens_list img.image_slidethumbnail[slideNumber=" + no + "]").parent("div.wrapper_slidethumbnail").addClass("selectedThumbnailBackground");

		var advance = ((lastSelectedScreenThumbnail===undefined)||(no > lastSelectedScreenThumbnail));
		lastSelectedScreenThumbnail = no;
		var slide = SM.Screen.getScreenWithNumber(no);
		if(!isThumbnailVisible(slide)){
			if(advance){
				moveThumbnailsToScreenWithNumber(Math.max(no-5,1));
			} else {
				moveThumbnailsToScreenWithNumber(no);
			}
		};
	};

	var moveThumbnailsToScreenWithNumber = function(slideNumber){
		var element = $("img.image_slidethumbnail[slideNumber=" + slideNumber + "]");
		SM.Editor.Scrollbar.goToElement(screenThumbnailsDivId,element);
	};

	var moveThumbnailsToViewWithNumber = function(slideNumber){
		var element = $("#views_list img.image_slidethumbnail[slideNumber=" + slideNumber + "]").parent();
		SM.Editor.Scrollbar.goToElement(viewThumbnailsDivId,element);
	};
  
	var getThumbnailForSlide = function(slide){
		if(SM.Slides.isView(slide)){
			return _getThumbnailForView(slide);
		}
		var slidenumber = $(slide).attr("slidenumber");
		return $("#screens_list img.image_slidethumbnail[slideNumber=" + slidenumber + "]");
	};

	var _getThumbnailForView = function(view){
		var slidenumber = $(view).attr("slidenumber");
		return $("#views_list img.image_slidethumbnail[slideNumber=" + slidenumber + "]");
	};

	var getThumbnailURLForSlide = function(slide){
		if($(slide).attr('type')===SM.Constant.VIEW_CONTENT){
			return _getThumbnailURLForViewContent(slide);
		} else {
			//Screen or VIEW_IMAGE
			return _getThumbnailURLForScreenOrViewImage(slide);
		}
	};

	var _getThumbnailURLForViewContent = function(slide){
		//If the slide only contains one element and it is an image, use it as thumbnail.
		var $zone = $(slide).children("div.view_content_zone");
		if(($zone.length === 1)&&(!SM.Editor.isZoneEmpty($zone))&&($zone.attr("type")=="image")){
			//The slide contains only one image
			var img = $zone.find("img");
			if(($(img).length === 1)&&(typeof $(img).attr("src") == "string")){
				return $(img).attr("src");
			}
		}
		return getDefaultThumbnailURLForSlide(slide);
	};

	var _getThumbnailURLForScreenOrViewImage = function(slide){
		var imgBackground = SM.Slides.getSlideBackground(slide);
		if (typeof imgBackground !== "undefined") {
			return imgBackground;
		} else {
			return getDefaultThumbnailURLForSlide(slide);
		}
	};

	var getDefaultThumbnailURLForSlide = function(slide){
		if($(slide).attr('type')===SM.Constant.VIEW_CONTENT){
			return (SM.ImagesPath + "slidesthumbs/view_content_template.png");
		} else {
			return (SM.ImagesPath + "slidesthumbs/screen_template.png");
		}
	};


	////////////////
	// Views Thumbnails
	///////////////

	var drawViewThumbnails = function(views,successCallback){
		drawViewThumbnailsCallback = successCallback;

		//Clean previous content
		SM.Editor.Scrollbar.cleanScrollbar(viewThumbnailsDivId);
		$("#" + viewThumbnailsDivId).hide();

		//Generate thumbnail images
		var imagesArray = [];

		var slideElements = 0;
		$(views).each(function(index,view){
			if(!SM.Slides.isView(view)){
				SM.Debugging.log("Invalid view type");
				return true; //Continue
			}
			var srcURL = getThumbnailURLForSlide(view);
			var defaultURL = getDefaultThumbnailURLForSlide(view);
			slideElements += 1;
			imagesArray.push($("<img id='viewThumbnail" + slideElements + "' class='image_slidethumbnail' slideNumber='" + slideElements + "' src='" + srcURL + "' defaultsrc='" + defaultURL + "'/>"));
    	});

		var options = {};
		options.callback = _onViewsThumbnailsImagesLoaded;
		SM.Editor.Utils.Loader.loadImagesOnContainer(imagesArray,viewThumbnailsDivId,options);
	};

	var _onViewsThumbnailsImagesLoaded = function(){
		//Add class to title elements and events
		$("#" + viewThumbnailsDivId).find("img.image_slidethumbnail").each(function(index,img){
			//Add class to title
			var imgContainer = $(img).parent();
			$(imgContainer).addClass("wrapper_slidethumbnail");
			$(imgContainer).append("<div class='delete_slide delete_view'></div>");
			$(imgContainer).find("p").addClass("ptext_barbutton");

			//Add events to imgs
			$(img).click(function(event){
				_onClickViewElement(event);
			});
		});

		var options = new Array();
		options['horizontalScroll'] = true;
		options['callback'] = _afterCreateViewsScrollbar;

		//Create scrollbar
		$("#" + viewThumbnailsDivId).show();
		SM.Editor.Scrollbar.createScrollbar(viewThumbnailsDivId, options);
	}

	var _afterCreateViewsScrollbar = function(){
		if(typeof drawViewThumbnailsCallback == "function"){
			drawViewThumbnailsCallback();
			drawViewThumbnailsCallback = undefined;
		}
	};

	var _onClickViewElement = function(event){
		var viewNumber = $(event.target).attr("slideNumber");
		SM.Editor.View.openViewWithNumber(viewNumber);
	};

	var selectViewThumbnail = function(no){
		$("#views_list img.image_slidethumbnail").removeClass("selectedViewThumbnail");
		if(no===null){
			//Used to unselect all view thumbnails
			return;
		}
		$("#views_list img.image_slidethumbnail[slideNumber=" + no + "]").addClass("selectedViewThumbnail");

		var advance = ((lastSelectedViewThumbnail===undefined)||(no > lastSelectedViewThumbnail));
		lastSelectedViewThumbnail = no;
		var view = SM.View.getViewWithNumber(SM.Screen.getCurrentScreen(),no);
		if(!isThumbnailVisible(view)){
			if(advance){
				moveThumbnailsToViewWithNumber(Math.max(no-7,1));
			} else {
				moveThumbnailsToViewWithNumber(no);
			}
		};
	};

	var isThumbnailVisible = function(slide){
		var slideThumbnail = getThumbnailForSlide(slide);
		var offset = $(slideThumbnail).offset();
		if((typeof offset == "undefined")||(offset===null)){
			//Transitory states...
			return true;
		}
		if(SM.Slides.isView(slide)){
			var offsetLeft = offset.left;
			return ((offsetLeft > 466) && (offsetLeft < 1119));
		} else {
			//Screen
			var offsetTop = offset.top;
			return ((offsetTop > 132) && (offsetTop < 667));
		}
	};

	return {
		init              					: init,
		drawScreenThumbnails  				: drawScreenThumbnails,
		drawViewThumbnails  				: drawViewThumbnails,
		selectThumbnail	  					: selectThumbnail,
		selectViewThumbnail					: selectViewThumbnail,
		moveThumbnailsToScreenWithNumber	: moveThumbnailsToScreenWithNumber,
		moveThumbnailsToViewWithNumber		: moveThumbnailsToViewWithNumber,
		getThumbnailURLForSlide				: getThumbnailURLForSlide,
		getDefaultThumbnailURLForSlide 		: getDefaultThumbnailURLForSlide,
		getThumbnailForSlide 				: getThumbnailForSlide,
		isThumbnailVisible					: isThumbnailVisible
	}

}) (SceneMaker, jQuery);

SceneMaker.Editor.Settings = (function(SM,$,undefined){
	var settings;

	var init = function(){
	};

	var loadSceneSettings = function(scene){
		if(typeof scene !== "undefined"){
			settings = JSON.parse(JSON.stringify(scene));
			delete settings.screens;
		} else {
			settings = {};
		}

		//Version
		settings.SMVersion = SM.VERSION;
		
		//Aspect ratio
		if((typeof settings.aspectRatio !== "string")||(["4:3","16:9"].indexOf(settings.aspectRatio)===-1)){
			settings.aspectRatio = "4:3";
		}
		SM.ViewerAdapter.applyAspectRatio(settings.aspectRatio);
	};

	var getSettings = function(){
		settings.avatar = _getSceneAvatar();
		return settings;
	};

	var _getSceneAvatar = function(){
		var screens = $('section.slides > article');
		for (var i = 0; i < screens.length; i++) {
			var screenDOM = screens[i];
			if (SM.Slides.isScreen(screenDOM)) {
				var screenBackground = SM.Slides.getSlideBackground(screenDOM);
				if (typeof screenBackground !== "undefined") {
					return screenBackground;
				}
			}
		}
		// Return default avatar
		return SM.ImagesPath + "logos/scene_maker_escapp_thumbnail.png";
	};

	var displaySettings = function(){
		// fancybox to edit scene settings
		$("a#edit_scene_details").fancybox({
			'autoDimensions' : false,
			'autoScale' : true,
			'scrolling': 'no',
			'width': 1000,
			'height': 700,
			'padding': 0,
			'hideOnOverlayClick': false,
			'hideOnContentClick': false,
			'showCloseButton': true,
			'onStart' : function(){
				_onStartSceneSettingsFancybox();
			},
			"onComplete"  : function(data){
			}
		});
		$("a#edit_scene_details").trigger('click');
	};

	var _onStartSceneSettingsFancybox = function(){
		//Title
		if(typeof settings.title === "string"){
			$("#scene_details_input_title").val(settings.title);
		} else {
			$("#scene_details_input_title").val("");
		}

		//Aspect ratio
		var aspectRatio = SM.ViewerAdapter.getAspectRatio();
		if(typeof aspectRatio !== "undefined"){
			$('#scene_details_select_aspectRatio').val(aspectRatio);
		}

		//Actions
		SM.Editor.Actions.loadActions($("#sceneActions"),settings,"SCENE");

		//Done button
		_checkIfEnableDoneButton();
	};

	var _checkIfEnableDoneButton = function(){
		var enable = _checkMandatoryFields();
		if(enable){
			$("#save_scene_details").removeClass("buttonDisabledOnSettings");
			$("#save_scene_details").removeAttr("disabled");
			$("#save_scene_details").removeAttr("title");
		} else {
			$("#save_scene_details").addClass("buttonDisabledOnSettings");
			$("#save_scene_details").attr("disabled","true");
		}
	};

	var _checkMandatoryFields = function(){
		//Check that mandatory params are filled appropiately.
		// var title = $('#scene_details_input_title').val();
		// if((typeof title != "string")||(title.trim()=="")){
		// 	return false;
		// }
		return true;
	};

	var onSaveSceneSettingsButtonClicked = function(event){
		event.preventDefault();
		if($(event.target).hasClass("buttonDisabledOnSettings")){
			return;
		}
		settings = _saveSettings();

		SM.ViewerAdapter.applyAspectRatio(settings.aspectRatio);
		$.fancybox.close();
	};

	var _saveSettings = function(){
		var settings = {};
		settings.SMVersion = SM.VERSION;

		var title = $('#scene_details_input_title').val();
		if((typeof title == "string")&&(title.trim()!="")){
			settings.title = title;
		}

		var aspectRatio = $('#scene_details_select_aspectRatio').val();
		if((typeof aspectRatio === "string")&&(["4:3","16:9"].indexOf(aspectRatio)!==-1)){
			settings.aspectRatio = aspectRatio;
		} else {
			settings.aspectRatio = "4:3";
		}

		//Actions
		var actions = SM.Editor.Actions.getActionsJSON($("#sceneActions"));
		if(actions.length > 0){
			settings.actions = actions;
		}

		return settings;
	};


	return {
		init									: init,
		loadSceneSettings						: loadSceneSettings,
		getSettings								: getSettings,
		displaySettings							: displaySettings,
		onSaveSceneSettingsButtonClicked		: onSaveSceneSettingsButtonClicked
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Tools = (function(SM,$,undefined){
	
	var toolbarEventsLoaded = false;
	var INCREASE_SIZE = 1.05; //Constant to multiply or divide the actual size of the element


	/*
	 * Toolbar is divided in three zones.
	 * 1) Menu
	 * 2) Scene toolbar (always visible)
	 * 3) Element toolbar
	 */

	var init = function(){
		cleanToolbar();

		if(!toolbarEventsLoaded){
			//Add listeners to toolbar buttons
			$.each($("#toolbar_wrapper a.tool_action, div.tool_action"), function(index, toolbarButton) {
				$(toolbarButton).on("click", function(event){
					if(typeof SM.Editor.Tools[$(toolbarButton).attr("action")] == "function"){
						if(!$(toolbarButton).find(".toolbar_scene_wrapper").hasClass("toolbar_scene_wrapper_disabled")){
							SM.Editor.Tools[$(toolbarButton).attr("action")](this);
						}
					}
					return false; //Prevent iframe to move
				});
			});

			toolbarEventsLoaded = true;
		}

		SM.Editor.Tools.Menu.init();
	};
	 
	var cleanToolbar = function(){
		var cSlide = SM.Screen.getCurrentScreen();
		if(typeof cSlide !== "undefined"){
			loadToolsForSlide(cSlide);
		}
	};

	var enableToolbar = function(){
		$("#toolbar_wrapper").show();
	};

	var disableToolbar = function(){
		$("#toolbar_wrapper").hide();
	};


   /*
	* Menu Toolbar and overall Menu 
	*/
	//Enable and disable menu methods in SceneMaker.Editor.Tools.Menu.js


   /*
	* Scene Toolbar
	*/

	/*
	 * Update toolbar when load slide or events
	 */
	var loadToolsForSlide = function(slide){
		_cleanSceneToolbar();

		var type = $(slide).attr("type");
		$(".toolbar_scene_wrapper_slideTools:not(.toolbar_" + type + ")").hide();
		$("#toolbar_slide .toolbar_btn.tool_action:not(.toolbar_" + type + ")").hide();

		switch(type){
			case SM.Constant.VIEW_CONTENT:
				$("#toolbar_slide").removeClass("toolbar_slide_screen").addClass("toolbar_slide_view_content");
				break;
			case SM.Constant.VIEW_IMAGE:
			case SM.Constant.SCREEN:
				$("#toolbar_slide").removeClass("toolbar_slide_view_content").addClass("toolbar_slide_screen");
				$("div.tool_action[action='changeBackground']").show();
				if(typeof SM.Slides.getSlideBackground(slide) !== "undefined"){
					$("div.tool_action[action='addHotspot']").show();
					$("div.tool_action[action='addHotzone']").show();
					$("div.tool_action[action='addCaption']").show();
				} else {
					$("div.tool_action[action='addHotspot']").hide();
					$("div.tool_action[action='addHotzone']").hide();
					$("div.tool_action[action='addCaption']").hide();
				}
				break;
			default:
				return;
		}
	};

	var _cleanSceneToolbar = function(){
		//Enable all buttons
		$(".toolbar_scene_wrapper_slideTools").removeClass("toolbar_scene_wrapper_disabled");
		//cleanZoneTools
		$(".menuselect_hide").hide();
		$(".delete_content").hide();
		_cleanElementToolbar();
	};

	var saveButtonTimeout;
	var saveButtonStatus = "enabled";
	var changeSaveButtonStatus = function(status){
		switch(status){
			case "enabled":
				_enableSaveButton();
				break;
			case "loading":
				_loadingSaveButton();
				break;
			case "disabled":
				_disableSaveButton();
				break;
			default:
				return;
		}
	};

	var _enableSaveButton = function(){
		if(saveButtonStatus === "enabled"){
			return;
		}
		saveButtonStatus = "enabled";
		_stopSaveButtonTimeout();
		$("#toolbar_save").find(".toolbar_scene_wrapper").removeClass("toolbar_scene_wrapper_loading");
		$("#toolbar_save").find(".toolbar_scene_wrapper").removeClass("toolbar_scene_wrapper_disabled");
		$("#toolbar_save").find("p.toolbar_scene_title").html(SM.I18n.getTrans("i.Save"));

		//Menu
		$(".menu_option.menu_action[action='onSaveButtonClicked']").parent().removeClass("menu_item_disabled");
		$(".menu_option.menu_action[action='onSaveButtonClicked']").find("span").html(SM.I18n.getTrans("i.Save"));
	};

	var _loadingSaveButton = function(){
		if(saveButtonStatus === "loading"){
			return;
		}
		saveButtonStatus = "loading";
		$("#toolbar_save").find(".toolbar_scene_wrapper").addClass("toolbar_scene_wrapper_disabled");
		$("#toolbar_save").find(".toolbar_scene_wrapper").addClass("toolbar_scene_wrapper_loading");
		$("#toolbar_save").find("p.toolbar_scene_title").html(SM.I18n.getTrans("i.Saving"));

		//Menu
		$(".menu_option.menu_action[action='onSaveButtonClicked']").parent().addClass("menu_item_disabled");
		$(".menu_option.menu_action[action='onSaveButtonClicked']").find("span").html(SM.I18n.getTrans("i.Saving"));
	};

	var _disableSaveButton = function(){
		if(saveButtonStatus === "disabled"){
			return;
		}
		saveButtonStatus = "disabled";
		$("#toolbar_save").find(".toolbar_scene_wrapper").removeClass("toolbar_scene_wrapper_loading");
		$("#toolbar_save").find(".toolbar_scene_wrapper").addClass("toolbar_scene_wrapper_disabled");
		$("#toolbar_save").find("p.toolbar_scene_title").html(SM.I18n.getTrans("i.Saved"));

		_stopSaveButtonTimeout();
		saveButtonTimeout = setTimeout(function(){
			changeSaveButtonStatus("enabled");
		}, 5000);

		//Menu
		$(".menu_option.menu_action[action='onSaveButtonClicked']").parent().addClass("menu_item_disabled");
		$(".menu_option.menu_action[action='onSaveButtonClicked']").find("span").html(SM.I18n.getTrans("i.Saved"));
	};

	var _stopSaveButtonTimeout = function(){
		if(typeof saveButtonTimeout != "undefined"){
			clearTimeout(saveButtonTimeout);
		}
	};

   /*
	* Zone Tools
	*/
	var loadToolsForZone = function(zone){
		cleanZoneTool(SM.Editor.getLastArea());
		
		var type = $(zone).attr("type");
		switch(type){
			case "text":  
				_loadToolbarForElement(type);
				break;
			case "image":
				_loadToolbarForElement(type);
				break;
			case "video":
				_loadToolbarForElement(type);
				break;
			case "object":
				var object = $(zone).find(".object_wrapper").children()[0];
				loadToolbarForObject(object);
				break;
			case undefined:
				//Add menuselect button and hide tooltips
				$(zone).find(".menuselect_hide").show();
				hideZoneToolTip($(zone).find(".zone_tooltip"));
				return;
			default:
				break;
		}

		//Add delete content button
		$(zone).find(".delete_content").show();
	};

	var addTooltipsToSlide = function(slide){
		var zones = $(slide).find("div.view_content_zone");
		for (var i = 0; i < zones.length; i++) {
			addTooltipToZone(zones[i]);
		};
	};

	var addTooltipToZone = function(zone,hidden){
		var style = "";
		var visible = "true";
		if(hidden === true){
			style = "style='display:none'";
			visible = "false";
		}
		var tooltip = "<span class='zone_tooltip' visible='" + visible + "' " + style + " >"+SM.I18n.getTrans('i.ZoneTooltip')+"</span>";
		$(zone).append(tooltip);

		tooltip = $(zone).find(".zone_tooltip");
		if(hidden === true){
			hideZoneToolTip(tooltip);
		} else {
			showZoneToolTip(tooltip);
		}
	};

	var showZoneToolTip = function(tooltip){
		var zone = $("div").has(tooltip);

		$(tooltip).show();
		$(tooltip).attr("visible","true");
		$(zone).attr("tooltip","true");

		if($(tooltip).css("margin-top")==="0px"){	
			_setTooltipMargins(tooltip);
		}
	};

	var _setTooltipMargins = function(tooltip){
		var zone = $("div").has(tooltip);
		var slide = $("article").has(zone);

		SM.Utils.addTempShown([slide,zone,tooltip]);

		//Adjust margin-top
		var zoneHeight = $(zone).height();
		var spanHeight = $(tooltip).height();
		var marginTop = ((zoneHeight-spanHeight)/2);
		
		SM.Utils.removeTempShown([slide,zone,tooltip]);

		$(tooltip).css("margin-top",marginTop+"px");
	};

	var setAllTooltipMargins = function(callback){
		$("span.zone_tooltip").each(function(index,tooltip){
			_setTooltipMargins(tooltip);
		});
		if(typeof callback == "function"){
			callback(true);
		}
	};

	var hideZoneToolTip = function(tooltip){
		var zone = $("div").has(tooltip);
		$(tooltip).hide();
		$(tooltip).attr("visible","false");
		$(zone).attr("tooltip","false");
	};

	var cleanZoneTool = function(zone){
		_cleanElementToolbar();

		var tooltip = $(zone).find(".zone_tooltip");
		if(SM.Editor.isZoneEmpty(zone)){
			$(zone).find(".menuselect_hide").remove();
			$(zone).removeClass("zoneUnselected").removeClass("zoneSelected").addClass("editable");
			showZoneToolTip(tooltip);
		} else {
			$(zone).find(".menuselect_hide").hide();
			$(zone).find(".delete_content").hide();
			hideZoneToolTip(tooltip);
		}
	};

	var loadToolsForElement = function(element){
		_loadToolbarForElement(element);
	};


   /*
	* Element Toolbar
	*/
	var _loadToolbarForElement = function(type){
		_cleanElementToolbar(type);

		var toolbarClass = "toolbar_" + type;
		$("#toolbar_element").children().hide();
		$("#toolbar_element").find("." + toolbarClass).css("display","inline-block");
		document.getElementById("toolbar_settings_wrapper").style.top = "-4px";
	};

	var loadToolbarForObject = function(object){
		var objectInfo = SM.Object.getObjectInfo(object);

		switch(objectInfo.type){
			case SM.Constant.MEDIA.WEB:
				_loadToolbarForElement(SM.Constant.MEDIA.WEB);
				break;
			default:
				_loadToolbarForElement("object");
				//object default toolbar
				break;
		}
	};

	var _cleanElementToolbar = function(type){
		if(type !== "hotspot"){
			SM.Editor.Marker.setCurrentHotspot(undefined);
		} 
		if(type !== "hotzone"){
			SM.Editor.Marker.setCurrentHotzoneId(undefined);
		}
		$("#toolbar_element").children().hide();
	};

	/*
	 * General actions
	 */
	 var exit = function(){
	 	SM.Editor.Tools.Menu.exit();
	 }

   /*
	* Scene actions
    */

  	var displaySettings = function(){
  		_cleanElementToolbar();
		SM.Editor.Settings.displaySettings();
	};

  	var save = function(){
  		_cleanElementToolbar();
		SM.Editor.Tools.Menu.onSaveButtonClicked();
	};

	var preview = function(){
		_cleanElementToolbar();
		SM.Editor.Preview.preview();
	};

   /*
	* Screen actions
	*/

	var changeBackground = function(){
		$("#hidden_button_to_change_slide_background").trigger("click");
	};

	var deleteSlide = function(){
		SM.Editor.Slides.removeCurrentSlide();
	};

	var addHotspot = function(){
		SM.Editor.Marker.addHotspot();
	};

	var addHotzone = function(){
		SM.Editor.Marker.addHotzone();
	};

	var addCaption = function(){
		_cleanElementToolbar();
		SM.Editor.Caption.addCaption();
	};

	var deleteHotmarker = function(){
		SM.Editor.Marker.deleteCurrentHotmarker();
	};

   /*
	* Element actions
	*/

	var showElementSettings = function(target){
		switch(SM.Editor.getCurrentElementType()){
			case "HOTSPOT":
				SM.Editor.Marker.showHotspotSettings();
				break;
			case "HOTZONE":
				SM.Editor.Marker.showHotzoneSettings();
				break;
			case "ZONE":
			switch($(SM.Editor.getCurrentArea()).attr("type")){
				case SM.Constant.OBJECT:
					SM.Editor.Object.showObjectSettings();
					break;
				default:
					break;
			}
				break;
		}
	};

	return {		
		init							: init,
		loadToolsForSlide				: loadToolsForSlide,
		loadToolsForElement				: loadToolsForElement,
		loadToolsForZone				: loadToolsForZone,
		loadToolbarForObject			: loadToolbarForObject,
		cleanZoneTool 					: cleanZoneTool,
		cleanToolbar					: cleanToolbar,
		enableToolbar					: enableToolbar,
		disableToolbar					: disableToolbar,
		save 							: save,
		displaySettings   				: displaySettings,
		preview 						: preview,
		deleteSlide 					: deleteSlide,
		changeBackground				: changeBackground,
		addHotspot						: addHotspot,
		addHotzone						: addHotzone,
		addCaption						: addCaption,
		deleteHotmarker 				: deleteHotmarker,
		addTooltipsToSlide				: addTooltipsToSlide,
		addTooltipToZone				: addTooltipToZone,
		showZoneToolTip					: showZoneToolTip,
		hideZoneToolTip					: hideZoneToolTip,
		setAllTooltipMargins			: setAllTooltipMargins,
		changeSaveButtonStatus			: changeSaveButtonStatus,
		showElementSettings 			: showElementSettings,
		exit							: exit
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Tools.Menu = (function(SM,$,undefined){

	var _initialized = false;
	var _hoverMenu = false;
	
	/*
	 * Init singleton
	 * Perform actions that must be executed only once
	 */
	var init = function(){
		if(!_initialized){
			_hoverMenu = true;
			
			//Add listeners to menu buttons
			$.each($("#menu a.menu_action"), function(index, menuButton) {
				$(menuButton).on("click", function(event){
					event.preventDefault();
					if($(menuButton).parent().hasClass("menu_item_disabled")){
						//Disabled button
						return false;
					}
					if(typeof SM.Editor.Tools.Menu[$(menuButton).attr("action")] == "function"){
						SM.Editor.Tools.Menu[$(menuButton).attr("action")](this);
						_hideMenuAfterAction();
					}
					return false;
				});
			});

			//Prevent iframe to move
			$("a.menu_option_main, a.menu_option:not('.menu_action')").on("click", function(event){
				event.preventDefault();
				return false;
			});
			
			//Exit button
			var options = SM.Utils.getOptions();
			if(typeof options.exitURL !== "string"){
				$(".menu_option.menu_action[action='exit']").parent().hide();
				$("#toolbar_exit_btn").hide();
			} else {
				SM.exitPath = options.exitURL;
			}
			
			_initialized = true;
		}
		$("#menu").show();

		//menu click show withouth css instead of hover
		var _submenu = false;
	
		$("a:.menu_option_main").on('click',function(){
			if($("#menu li > ul.menu_option_main").css('display') === 'none' ){
				$("#menu li > ul.menu_option_main").css('display','block');
				$("ul:.menu_option_main li").hover(function(e){
					$(this).children('ul').css('display','block').on('mouseenter',function(){
						_submenu = true;
						$(this).mouseleave(function(e){
							_submenu= false;
						})
					});
				}, function(){
					if (!_submenu){
						$("ul:.menu_option_main li > ul").css('display','none');
					}
				});
			} else {
				$("#menu li > ul.menu_option_main").css('display','none');
			}
		});
		$(document).click( function(){
			$("#menu li > ul.menu_option_main").hide();
		});
	};

	var _enableMenuItem = function(items){
		// $(items).show();
		$(items).removeClass("menu_item_disabled").addClass("menu_item_enabled");
	};

	var _disableMenuItem = function(items){
		// $(items).hide();
		$(items).removeClass("menu_item_enabled").addClass("menu_item_disabled");
	};

	var disableMenu = function(){
		$("#menu").hide();
		$("#menu").attr("id","menuDisabled");
	};

	var enableMenu = function(){
		$("#menuDisabled").show();
		$("#menuDisabled").attr("id","menu");
	};


	//////////////////
	/// SAVE
	/////////////////

	var onSaveButtonClicked = function(){
		if(SM.Screen.getScreens().length === 0){
			var options = {};
			options.width = 600;
			options.height = 150;
			options.text = SM.I18n.getTrans("i.NoSlidesOnSaveNotification");
			var button1 = {};
			button1.text = SM.I18n.getTrans("i.Ok");
			button1.callback = function(){
				$.fancybox.close();
			}
			options.buttons = [button1];
			SM.Utils.showDialog(options);
			return;
		}

		SM.Editor.Tools.changeSaveButtonStatus("loading");
		var scene = SM.Editor.saveScene();
		SM.Editor.sendScene(scene,"save",function(){
			//onSave succesfully
			// SM.Debugging.log("onSave succesfully");
			// SM.Debugging.log(scene);
			SM.Editor.Tools.changeSaveButtonStatus("disabled");
		}, function(){
			//error onSave
			// SM.Debugging.log("onSave failure");
			SM.Editor.Tools.changeSaveButtonStatus("enabled");
		});
	};

	/////////////////////
	/// PREVIEW
	///////////////////////

	var preview = function(){
		SM.Editor.Preview.preview();
	};

	////////////////
	//More Actions
	///////////////

	var exit = function(){
		if(SM.Editor.hasSceneChanged()){
			var options = {};
			options.width = 600;
			options.height = 200;
			options.notificationIconSrc = SM.ImagesPath + "icons/save_document.png";
			options.text = SM.I18n.getTrans("i.ExitConfirmationMenu");
			options.buttons = [];

			var button1 = {};
			button1.text = SM.I18n.getTrans("i.cancel");
			button1.callback = function(){
				$.fancybox.close();
			}
			options.buttons.push(button1);

			var button2 = {};
			button2.text = SM.I18n.getTrans("i.exitWSaving");
			button2.callback = function(){
				_exitFromSM();
				$.fancybox.close();
			}
			options.buttons.push(button2);

			var button3 = {};
			button3.text = SM.I18n.getTrans("i.saveAndExit");
			button3.callback = function(){
				$("#waiting_overlay").show();
				SM.Editor.Tools.changeSaveButtonStatus("loading");
				var scene = SM.Editor.saveScene();
				SM.Editor.sendScene(scene,"save",function(){
					//onSave succesfully
					SM.Editor.Tools.changeSaveButtonStatus("disabled");
					_exitFromSM();
				}, function(){
					//error onSave
					SM.Editor.Tools.changeSaveButtonStatus("enabled");
					$("#waiting_overlay").hide();
				});
				$.fancybox.close();
			}
			options.buttons.push(button3);

			SM.Utils.showDialog(options);

		} else {
			_exitFromSM();
		}
	};

	var _exitFromSM = function(){
		SM.Editor.Events.allowExitWithoutConfirmation();
		window.top.location.href = SM.exitPath;
	};

	var addScreen = function(){
		$("#addScreenButton").trigger('click');
		return false; //Prevent iframe to move
	};

	var addView = function(){
		$("#addViewButton").trigger('click');
		return false; //Prevent iframe to move
	};

	var displaySettings = function(){
		SM.Editor.Settings.displaySettings();
	};

	var _hideMenuAfterAction = function(){
		if(_hoverMenu){
			$("#menu ul.menu_option_main").addClass("temp_hidden");
			setTimeout(function(){
				$("#menu ul.menu_option_main").removeClass("temp_hidden");
			},500);
		}
	};

	return {
		init							: init,
		disableMenu 					: disableMenu,
		enableMenu 						: enableMenu,
		addScreen						: addScreen,
		addView							: addView,
		displaySettings					: displaySettings, 
		onSaveButtonClicked 			: onSaveButtonClicked,
		preview 						: preview,
		exit 							: exit
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Utils = (function(SM,$,undefined){

	var dimentionsToDraw = function(w_zone, h_zone, w_content, h_content){
		var dimentions = {width:  w_content, height: h_content};
		var aspect_ratio_zone = w_zone/h_zone;
		var aspect_ratio_content = w_content/h_content;
		
		if (aspect_ratio_zone>aspect_ratio_content) {
			dimentions.width = aspect_ratio_content*h_zone;
			dimentions.height = h_zone;
			return dimentions;
		} else {
			dimentions.width = w_zone;
			dimentions.height = w_zone/aspect_ratio_content;
			return  dimentions;
		}
	};

	var setStyleInPixels = function(style,area){
		var filterStyle = "";
		$.each(style.split(";"), function(index, property){
			if ((property.indexOf("width") === -1)&&(property.indexOf("height")) === -1) {
				filterStyle = filterStyle + property + "; ";
			}
		});
		
		var dimensions = SM.Utils.getPixelDimensionsFromStyle(style,area);

		if((dimensions)&&(dimensions[0])){
			filterStyle = filterStyle + "width: " + dimensions[0] + "px; ";
			if(dimensions[1]){
				filterStyle = filterStyle + "height: " + dimensions[1] + "px; ";
			}
		}
		return filterStyle;
	};
	
	/**
	 * function to get the styles in percentages
	 */
	var getStylesInPercentages = function(parent, element){
		var WidthPercent = element.width()*100/parent.width();
		var HeightPercent = element.height()*100/parent.height();
		var TopPercent = element.position().top*100/parent.height();
		var LeftPercent = element.position().left*100/parent.width();
		return "position: relative; width:" + WidthPercent + "%; height:" + HeightPercent + "%; top:" + TopPercent + "%; left:" + LeftPercent + "%;";
	}; 

	var getStylesForFitContent = function(){
		return "position: relative; width:100%; height:100%; top:0%; left:0%;";
	};
	
	//Help function to autocomplete user inputs.
	//Add HTTP if is not present.
	var autocompleteUrls = function(input){
		var http_urls_pattern=/(^http(s)?:\/\/)/g
		var anchor_urls_pattern=/(^#)/g
		var objectInfo = SM.Object.getObjectInfo(input);
		if((objectInfo.wrapper===null)&&(input.match(http_urls_pattern)===null)&&(input.match(anchor_urls_pattern)===null)){
			return "http://" + input;
		} else {
			return input;
		}
	};


	/////////////////////////
	/// Fancy Box Functions
	/////////////////////////

	var loadTabTimer;

	/**
	 * Function to load a tab and its content in the fancybox
	 * also changes the help button to show the correct help
	 */
	var loadTab = function (tab_id){
		//hide previous tab
		$(".fancy_tab_content").hide();
		//show content
		$("#" + tab_id + "_content").show();
		//deselect all of them
		$(".fancy_tab").removeClass("fancy_selected");
		//select the correct one
		$("#" + tab_id).addClass("fancy_selected");
		//show correct one
		$("#"+ tab_id + "_help").show();

		//Submodule callbacks
		switch (tab_id) {
			//Image
			case "tab_pic_from_url":
				SM.Editor.Image.onLoadTab("url");
				break;
			//Video
			case "tab_video_from_url":
				SM.Editor.Video.onLoadTab();
				break;
			//Objects
			case "tab_object_from_url":
				SM.Editor.Object.onLoadTab("url");
				break;
			default:
				break;
		}
		return false;
	};

	var hideNonDefaultTabs = function(){
		$("div.fancy_tabs a.fancy_tab:not(.disabled)").show();
	};

	var showErrorDialog = function(msg){
		var options = {};
		options.width = 650;
		options.height = 190;
		options.text = msg;
		var button1 = {};
		button1.text = SM.I18n.getTrans("i.Ok");
		button1.callback = function(){
			$.fancybox.close();
		}
		options.buttons = [button1];
		SM.Utils.showDialog(options);
	};

	var enableElementSettingsField = function(element,enable){
		if(element instanceof Array){
			for(var i=0; i<element.length; i++){
				enableElementSettingsField(element[i],enable);
			}
			return;
		}

		if(enable){
			$(element).parent().removeClass("disableSettingsField");
			$(element).removeAttr('disabled');
		} else {
			if ($(element).is("input")){
				if ($(element).attr("type")==="checkbox"){
					var defaultCheckboxValue = ($(element).attr("defaultvalue")==="true") ? true : false;
					$(element).prop('checked', defaultCheckboxValue);
				}
			} else if ($(element).is("select")){
				var defaultSelectValue = $(element).find("option[selected='selected']").val();
				$(element).val(defaultSelectValue);
			}
			$(element).parent().addClass("disableSettingsField");
			$(element).attr('disabled', 'disabled');
		}
	};

	return {
		dimentionsToDraw			: dimentionsToDraw,
		setStyleInPixels  			: setStyleInPixels,		
		getStylesInPercentages 		: getStylesInPercentages,
		getStylesForFitContent		: getStylesForFitContent,
		autocompleteUrls 			: autocompleteUrls,
		loadTab						: loadTab,
		hideNonDefaultTabs			: hideNonDefaultTabs,
		showErrorDialog				: showErrorDialog,
		enableElementSettingsField	: enableElementSettingsField
	};

}) (SceneMaker, jQuery);



SceneMaker.Editor.Utils.Loader = (function(SM,$,undefined){

	var loadObjectsInEditorSlide = function(slide){
		_loadObjectsInEditor($(slide).find(".object_wrapper"));
	};

	var unloadObjectsInEditorSlide = function(slide){
		_unloadObjectsInEditor($(slide).find(".object_wrapper"));
	};

	var loadAllObjects = function(){
		_loadObjectsInEditor($(".object_wrapper"));
	};

	var unloadAllObjects = function(){
		_unloadObjectsInEditor($(".object_wrapper"));
	};

	var _loadObjectsInEditor = function(objects){
		$.each(objects, function(index, object){
			var htmlContent = $(object).attr("htmlContent");
			if(typeof htmlContent !== "undefined"){
				$(object).html(htmlContent);
				$(object).removeAttr("htmlContent");
			}
		});
	};

	var _unloadObjectsInEditor = function(objects){
		$.each(objects, function(index, object){
			var htmlContent = $(object).html();
			if((typeof htmlContent !== "undefined")&&(htmlContent!=="")){
				$(object).attr("htmlContent",$(object).html());
				$(object).html("");
			}
		});
	};

	var loadImagesOnContainer = function(imagesArray,containerId,options){
		var validImagesArray = imagesArray;
		var imagesLength = imagesArray.length;
		var imagesLoaded = 0;

		$.each(imagesArray, function(i, image){
			$(image).load(function(response) {
				imagesLoaded = imagesLoaded + 1;
				if(imagesLoaded === imagesLength){
					_insertElements(validImagesArray,containerId,options);
				}
			});
			$(image).error(function(response){
				imagesLoaded = imagesLoaded + 1;
				if(options.filterUnloadedImages === true){
					validImagesArray.splice(validImagesArray.indexOf(image),1);
				}
				if(imagesLoaded === imagesLength){
					_insertElements(validImagesArray,containerId,options);
				}
				
			});
		});
	};

	var _insertElements = function(imagesArray,containerId,options){
		$.each(imagesArray, function(i, image) {
			_insertElementOnContainer(image,imagesArray,containerId,options);
		});
		if(typeof options.callback === "function"){
			options.callback(options);
		}
	};

	var _insertElementOnContainer = function(image,imagesArray,containerId,options){
		var titleArray = options.titleArray;
		if((titleArray)&&(titleArray[imagesArray.indexOf(image)])){
			$("#" + containerId).append("<div><p>"+titleArray[imagesArray.indexOf(image)]+"</p>" + SM.Utils.getOuterHTML(image) + "</div>");
		} else {
			$("#" + containerId).append('<div>' + SM.Utils.getOuterHTML(image) + '</div>');
		}
	};

	return {
		loadObjectsInEditorSlide 	: loadObjectsInEditorSlide,
		unloadObjectsInEditorSlide 	: unloadObjectsInEditorSlide,
		loadAllObjects 				: loadAllObjects,
		unloadAllObjects			: unloadAllObjects,
		loadImagesOnContainer       : loadImagesOnContainer
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Screen = (function(SM,$,undefined){

	var init = function(){
	};

	var addScreen = function(screen){
		var screen = $(screen);

		if(SM.Screen.getCurrentScreen()){
			$(SM.Screen.getCurrentScreen()).after(screen);
		} else {
			appendScreen(screen);
		}

		var oldCurrentScreenNumber = SM.Screen.getCurrentScreenNumber();
		//currentScreenNumber is next screen
		SM.Screen.setCurrentScreenNumber(oldCurrentScreenNumber+1);

		SM.Screen.triggerScreenLeaveEvent(oldCurrentScreenNumber);
		SM.Screen.updateScreens();
		SM.Screen.triggerScreenEnterEvent(SM.Screen.getCurrentScreenNumber());

		SM.Editor.Thumbnails.drawScreenThumbnails(function(){
			SM.Editor.Thumbnails.selectThumbnail(SM.Screen.getCurrentScreenNumber());
			SM.Editor.Thumbnails.moveThumbnailsToScreenWithNumber(SM.Screen.getCurrentScreenNumber());
		});
	};

	var appendScreen = function(screen){
		$('.slides').append(screen);
	};

	var onClickAddScreenButton = function(){
		var screen = SM.Editor.Dummies.getDummy(SM.Constant.SCREEN,{slideNumber:SM.Screen.getScreensQuantity()+1});
		addScreen(screen);
		$.fancybox.close();
	};

	var getViewsQuantity = function(screen){
		return $(screen).children("article").length;
	};

	var onEnterScreen = function(screen){
		SM.Editor.Slides.updateThumbnail(screen);
		$("#bottomside").show();
		openScreen(screen);

		var screenId = $(screen).attr("id");
		var views = $("#" + screenId + " > article");
		SM.Editor.Thumbnails.drawViewThumbnails(views,function(){
			//Views thumbnails drawed succesfully
		});
	};

	var onLeaveScreen = function(screen){
		closeScreen(screen);

		var currentView = SM.Editor.View.getCurrentView();
		if(currentView){
			SM.Editor.View.closeView(currentView);
		}

		$("#bottomside").hide();
		$("#screen_selected > img").attr("src","");
	};

	var onClickOpenScreen = function(){
		var screen = SM.Screen.getCurrentScreen();
		openScreen(screen);
	};

	var openScreen = function(screen){
		$("#screen_selected_img").addClass("selectedScreenThumbnailInViews");

		var currentView = SM.Editor.View.getCurrentView();
		if(currentView){
			SM.Editor.View.closeView(currentView);
		}

		SM.Editor.Tools.loadToolsForSlide(screen);
	};

	var closeScreen = function(screen){
		//Mark screen thumbnail as unselected
		$("#screen_selected_img").removeClass("selectedScreenThumbnailInViews");
		SM.Editor.Marker.cancelAnnotationSelectedForSlide($(screen).attr("id"));
	};

	var onDeleteScreenClicked = function(event){
		var screenNumber = $(event.target).prev("img").attr("slidenumber");
		var screenToDelete = $("article[type='screen'][slidenumber='" + screenNumber + "']")[0];
		removeScreen(screenToDelete);
	};

	var removeScreen = function(screenToDelete){
		var options = {};
		options.width = 375;
		options.height = 130;
		options.notificationIconSrc = SM.Editor.Thumbnails.getThumbnailURLForSlide(screenToDelete);
		options.notificationIconClass = "notificationIconDeleteSlide";
		options.text = SM.I18n.getTrans("i.AreYouSureDeleteScreen");
		
		var button1 = {};
		button1.text = SM.I18n.getTrans("i.no");
		button1.callback = function(){
			$.fancybox.close();
		}
		var button2 = {};
		button2.text = SM.I18n.getTrans("i.delete");
		button2.callback = function(){
			_removeScreen(screenToDelete);
			$.fancybox.close();
		}
		options.buttons = [button1,button2];
		SM.Utils.showDialog(options);
	};

	var _removeScreen = function(screen){
		if(screen===null){
			return;
		}

		if(SM.Screen.getCurrentScreen() === screen){
			onLeaveScreen(screen);
		}

		var screenToDeleteNumber = $(screen).attr("slidenumber");
		var currentScreenNumber = SM.Screen.getCurrentScreenNumber();

		$(screen).remove();

		if(screenToDeleteNumber <= currentScreenNumber){
			if((currentScreenNumber-1) > 0) {
				SM.Screen.setCurrentScreenNumber(currentScreenNumber-1);
			} else if (SM.Screen.getScreensQuantity()>1){
				SM.Screen.setCurrentScreenNumber(1);
			}
		}

		SM.Screen.updateScreens();
		SM.Editor.Thumbnails.drawScreenThumbnails(function(){
			if(typeof SM.Screen.getCurrentScreen() !== "undefined"){
				var currentScreenNumber = SM.Screen.getCurrentScreenNumber();
				SM.Editor.Thumbnails.selectThumbnail(currentScreenNumber);
				SM.Editor.Thumbnails.moveThumbnailsToScreenWithNumber(currentScreenNumber);
				SM.Screen.triggerScreenEnterEvent(currentScreenNumber);
			}
		});
	};


	/* Move & copy screen features */

	var moveScreenTo = function(orgPosition, destPosition){
		var screen_to_move = SM.Screen.getScreenWithNumber(orgPosition);
		var reference_screen = SM.Screen.getScreenWithNumber(destPosition);

		if((typeof screen_to_move === "undefined")||(typeof reference_screen === "undefined")){
			return;
		}

		if(typeof screen_to_move.length !== undefined){
			screen_to_move = $(screen_to_move)[0];
			if(typeof screen_to_move === "undefined"){
				return;
			}
		}

		if(typeof reference_screen.length !== undefined){
			reference_screen = $(reference_screen)[0];
			if(typeof reference_screen === "undefined"){
				return;
			}
		}

		if((screen_to_move.tagName!="ARTICLE")||(reference_screen.tagName!="ARTICLE")||(screen_to_move==reference_screen)){
			return;
		}

		//We must move screen orgPosition after or before destPosition
		var movement = null;
		if(destPosition > orgPosition){
			movement = "after";
		} else if(destPosition < orgPosition){
			movement = "before";
		} else {
			return;
		}

		var moving_current_screen = false;
		var currentScreen = SM.Screen.getCurrentScreen();
		var oldCurrentScreenNumber = parseInt($(currentScreen).attr("slidenumber"));
		if(currentScreen === screen_to_move){
			moving_current_screen = true;
		}

		var textAreas = SM.Editor.Slides.copyTextAreasOfSlide(screen_to_move);
		$(screen_to_move).remove();
		if(movement=="after"){
			$(reference_screen).after(screen_to_move);
		} else if(movement=="before") {
			$(reference_screen).before(screen_to_move);
		} else {
			return;
		}

		SM.Utils.addTempShown(screen_to_move);

		//Refresh Draggable Objects
		SM.Editor.Marker.refreshDraggables(screen_to_move);
		
		//Reload text areas
		SM.Editor.Slides.cleanTextAreasOfSlide(screen_to_move);
		SM.Editor.Slides.loadTextAreasOfSlide(screen_to_move,textAreas);

		SM.Utils.removeTempShown(screen_to_move);

		//Update screens
		SM.Screen.setScreens($('section.slides > article'));

		//Update scrollbar params and counters
		$("#screens_list").find("div.wrapper_slidethumbnail:has(img[slidenumber])").each(function(index,div){
			var slideNumber = index+1;
			var p = $(div).find("p.ptext_barbutton");
			$(p).html(slideNumber);
			var img = $(div).find("img.image_slidethumbnail");
			$(img).attr("slidenumber",slideNumber);
		});

		//Update current screen number
		var newCurrentScreenNumber;

		if(moving_current_screen){
			newCurrentScreenNumber = destPosition;
		} else {
			if((orgPosition > oldCurrentScreenNumber)&&(destPosition <= oldCurrentScreenNumber)){
				newCurrentScreenNumber = (oldCurrentScreenNumber+1);
			} else if((orgPosition < oldCurrentScreenNumber)&&(destPosition >= oldCurrentScreenNumber)){
				newCurrentScreenNumber = (oldCurrentScreenNumber-1);
			}
		}

		if(typeof newCurrentScreenNumber == "number"){
			SM.Screen.setCurrentScreenNumber(newCurrentScreenNumber);
		}
		
		SM.Screen.updateScreens();
	};

	var copyScreen = function(screenToCopy,options){
		if(typeof screenToCopy === "undefined"){
			return;
		}

		var oldScreenId = $(screenToCopy).attr("id");
		SM.Editor.Slides.cleanTextAreasOfSlide(screenToCopy);
		screenToCopy = _replaceIdsForCopyScreen(screenToCopy);
		var newScreenId = $(screenToCopy).attr("id");

		var currentScreen = SM.Screen.getCurrentScreen();
		if(currentScreen){
			$(currentScreen).after(screenToCopy);
		} else {
			$("section#slides_panel").append(screenToCopy);
		}
		
		var screenCopied = $("#"+newScreenId);

		SM.Editor.Marker.refreshDraggables(screenCopied);
		SM.Editor.Marker.copyMarkers(oldScreenId,newScreenId);
		
		//Restore text areas
		if(options.textAreas){
			SM.Editor.Slides.loadTextAreasOfSlide(screenCopied,options.textAreas,true);
		}
		
		SM.Screen.updateScreens();

		//Redraw thumbnails
		SM.Editor.Thumbnails.drawScreenThumbnails(function(){
			if(currentScreen){
				SM.Screen.goToScreenWithNumber(SM.Screen.getCurrentScreenNumber()+1);
				SM.Editor.Thumbnails.moveThumbnailsToScreenWithNumber(SM.Screen.getCurrentScreenNumber());
			} else {
				SM.Screen.goToScreenWithNumber(1);
				SM.Editor.Thumbnails.moveThumbnailsToScreenWithNumber(1);
			}
		});

		//Clean copyid attributes
		$(screenCopied).find("[copyid]").removeAttr("copyid");
	};

	var _replaceIdsForCopyScreen = function(screen){
		var $screen = $(screen);
		var oldScreenId = $screen.attr("id");
		var newScreenId  = SM.Utils.getId("article");
		$screen.attr("id",newScreenId);

		//Background
		var backgroundImg = $screen.find("img.slide_background#" + oldScreenId + "_background");
		$(backgroundImg).attr("id",newScreenId + "_background");

		var $views = $screen.children("article");
		$views.each(function(index, view) {
			_replaceIdsForCopyView(view,newScreenId);
		});
		return screen;
	};

	var _replaceIdsForCopyView = function(view,newScreenId){
		var $view = $(view);
		switch($view.attr("type")){
			case SM.Constant.VIEW_IMAGE:
				return _replaceIdsForCopyViewImage($view,newScreenId);
			case SM.Constant.VIEW_CONTENT:
				return _replaceIdsForCopyViewContent($view,newScreenId);
		}
	};

	var _replaceIdsForCopyViewImage = function($view,newScreenId){
		var oldViewId = $view.attr("id");
		var newViewId = SM.Utils.getId(newScreenId + "_article");
		$view.attr("id",newViewId);
		var backgroundImg = $view.find("img.slide_background#" + oldViewId + "_background");
		$(backgroundImg).attr("id",newViewId + "_background");
	};

	var _replaceIdsForCopyViewContent = function($view,newScreenId){
		var viewId = SM.Utils.getId(newScreenId + "_article");
		$view.attr("id",viewId);

		//Replace zone Ids
		$view.children("div[id].view_content_zone").each(function(index, zone) {
			zone = _replaceIdsForCopyZone(zone,viewId);
		});
	};

	var _replaceIdsForCopyZone = function(zone,viewId){
		$(zone).attr("copyid",$(zone).attr("id"));

		var zoneId = SM.Utils.getId(viewId + "_zone");
		$(zone).attr("id",zoneId);

		$(zone).find("[id]").each(function(index, el) {
			el = _replaceIdsForCopyEl(el,zoneId);
		});

		return zone;
	};

	var _replaceIdsForCopyEl = function(el,zoneId){
		var elName = _getNameOfCopyEl(el);
		var elId = SM.Utils.getId(zoneId + "_" + elName);
		$(el).attr("id",elId);
		return el;
	};

	var _getNameOfCopyEl = function(el){
		var elName = $($(el).attr("id").split("_")).last()[0];
		if (elName.length>1){
			return elName.substring(0,elName.length-1);
		} else {
			return elName;
		}
	};

	return {
		init 							: init,
		addScreen 						: addScreen,
		appendScreen					: appendScreen,
		onClickAddScreenButton			: onClickAddScreenButton,
		onEnterScreen					: onEnterScreen,
		onLeaveScreen					: onLeaveScreen,
		openScreen						: openScreen,
		closeScreen						: closeScreen,
		onDeleteScreenClicked			: onDeleteScreenClicked,
		removeScreen					: removeScreen,
		onClickOpenScreen				: onClickOpenScreen,
		getViewsQuantity				: getViewsQuantity,
		moveScreenTo					: moveScreenTo,
		copyScreen 						: copyScreen
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.View = (function(SM,$,undefined){
	var currentView;

	var init = function(){
	};

	var getCurrentView = function(){
		return currentView;
	};

	var _setCurrentView = function(newView){
		currentView = newView;
	};

	var addView = function(screen,view){
		var view = $(view).css("display","none")[0];
		appendView(screen,view);
		SM.Editor.Tools.addTooltipsToSlide(view);
		SM.Editor.View.openView(view);
		SM.Editor.Thumbnails.drawViewThumbnails($(screen).find("article"),function(){
			//Views thumbnails drawed succesfully
			SM.Editor.Thumbnails.selectViewThumbnail($(view).attr("slidenumber"));
		});
	};

	var appendView = function(screen,view){
		$(screen).append(view);
	};

	var onClickAddViewButton = function(){
		$("#addViewFancybox").trigger('click');
		SM.Editor.Utils.loadTab('tab_views');
	};

	var onDeleteViewClicked = function(event){
		var currentScreen = SM.Screen.getCurrentScreen();
		var viewNumber = $(event.target).prev("img").attr("slidenumber");
		var viewToDelete = $(currentScreen).find("article[slidenumber='" + viewNumber + "']")[0];
		removeView(viewToDelete);
	};

	var removeView = function(viewToDelete){
		var options = {};
		options.width = 375;
		options.height = 130;
		options.notificationIconSrc = SM.Editor.Thumbnails.getThumbnailURLForSlide(viewToDelete);
		options.notificationIconClass = "notificationIconDeleteSlide";
		options.text = SM.I18n.getTrans("i.AreYouSureDeleteView");
		
		var button1 = {};
		button1.text = SM.I18n.getTrans("i.no");
		button1.callback = function(){
			$.fancybox.close();
		}
		var button2 = {};
		button2.text = SM.I18n.getTrans("i.delete");
		button2.callback = function(){
			_removeView(viewToDelete);
			$.fancybox.close();
		}
		options.buttons = [button1,button2];
		SM.Utils.showDialog(options);
	};

	var _removeView = function(view){
		if(typeof view !== "object"){
			return;
		}

		var screen = $(view).parent();
		var currentView = SM.View.getCurrentView();
		var removingCurrentView = (currentView === view);

		if(SM.View.getCurrentView() === view){
			closeView(view);
		}
		$(view).remove();

		//Update view numbers
		var views = $(screen).find("article");
		$(views).each(function(index,view){
			$(view).attr("slidenumber",index+1);
		});	

		SM.Editor.Thumbnails.drawViewThumbnails(views,function(){
			//Views thumbnails drawed succesfully
			if(removingCurrentView === false){
				SM.Editor.Thumbnails.selectViewThumbnail($(currentView).attr("slidenumber"));
			}
		});

		//After remove a view, load screen if the current view was deleted
		if(removingCurrentView){
			SM.Editor.Screen.openScreen(screen);
		}
	};
	
	var openViewWithNumber = function(viewNumber){
		var screen = SM.Screen.getCurrentScreen();
		var views = $(screen).find("article");
		var view = views[viewNumber-1];
		openView(view);
	};

	var openView = function(view){
		var currentView = getCurrentView();
		if(currentView){
			closeView(currentView);
		} else {
			var screen = $(view).parent();
			SM.Editor.Screen.closeScreen(screen);
		}

		_setCurrentView(view);
		_showView(view);
		SM.Editor.Thumbnails.selectViewThumbnail($(view).attr("slidenumber"));
		SM.Slides.triggerSlideEnterEvent($(view).attr("id"));
	};

	var _showView = function(view){
		$(view).css("display","block");
	};

	var _hideView = function(view){
		$(view).css("display","none");
	};

	var closeViewWithNumber = function(viewNumber){
		var screen = SM.Screen.getCurrentScreen();
		var views = $(screen).find("article");
		var view = views[viewNumber-1];
		closeView(view);
	};

	var closeView = function(view){
		var viewId = $(view).attr("id");
		_setCurrentView(null);
		SM.Editor.Thumbnails.selectViewThumbnail(null);
		_hideView(view);
		SM.Editor.Marker.cancelAnnotationSelectedForSlide(viewId);
		SM.Slides.triggerSlideLeaveEvent(viewId);
	};


	/* View movement (with keyboard) */

	var forwardOneView = function(event){
		_moveViews(1);
	};

	var backwardOneView = function(){
		_moveViews(-1);
	};

	var _moveViews = function(n){
		var currentViewNumber = SM.View.getCurrentViewNumber();
		if(typeof currentViewNumber === "undefined"){
			currentViewNumber = 0;
		}
		var viewsQuantity = SM.Editor.Screen.getViewsQuantity(SM.Screen.getCurrentScreen());
		var no = currentViewNumber+n;
		var cno = Math.min(Math.max(0,no),viewsQuantity);
		if(no===cno){
			_goToView(no);
		}
	};

	var _goToView = function(no){
		if(no===0){
			SM.Editor.Screen.onClickOpenScreen();
		} else {
			SM.Editor.View.openViewWithNumber(no);
		}
	};

	return {
		init 							: init,
		addView							: addView,
		appendView						: appendView,
		onClickAddViewButton			: onClickAddViewButton,
		onDeleteViewClicked				: onDeleteViewClicked,
		removeView						: removeView,
		getCurrentView					: getCurrentView,
		openViewWithNumber 				: openViewWithNumber,
		openView						: openView,
		closeViewWithNumber				: closeViewWithNumber,
		closeView 						: closeView,
		forwardOneView					: forwardOneView,
		backwardOneView					: backwardOneView
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Marker = (function(SM,$,undefined){
	var slideData;
	var currentHotspot;
	var currentHotzoneId;
	var hotzoneIdsAlias;
	var currentEditingMode = "NONE"; //Can be "NONE", "HOTSPOT" or "HOTZONE".
	var hiddenLinkToInitHotspotSettings;
	var hiddenLinkToInitHotzoneSettings;

	var init = function(){
		slideData = {};
		hotzoneIdsAlias = {};

		//Hotspot Settings
		hiddenLinkToInitHotspotSettings = $('<a href="#hotspotSettings_fancybox" style="display:none"></a>');
		$(hiddenLinkToInitHotspotSettings).fancybox({
			'autoDimensions' : false,
			'height': 690,
			'width': 920,
			'scrolling': 'no',
			'showCloseButton': false,
			'padding' : 0,
			"onStart"  : function(data){
				_onStartHotspotSettingsFancybox();
			},
			"onComplete" : function(data){
			},
			"onClosed"  : function(data){
			}
		});

		//Hotzone Settings
		hiddenLinkToInitHotzoneSettings = $('<a href="#hotzoneSettings_fancybox" style="display:none"></a>');
		$(hiddenLinkToInitHotzoneSettings).fancybox({
			'autoDimensions' : false,
			'height': 690,
			'width': 920,
			'scrolling': 'no',
			'showCloseButton': false,
			'padding' : 0,
			"onStart"  : function(data){
				_onStartHotzoneSettingsFancybox();
			},
			"onComplete" : function(data){
			},
			"onClosed"  : function(data){
			}
		});
	};

	var getDefaultSlideConfig = function(slideId){
		var defaultConfig = {
			hotspots: {},
			hotzones: {},
			caption: {}
		};
		return defaultConfig;
	};

	var drawSlideWithMakers = function(slideJSON,scaffoldDOM){
		if(slideJSON){
			if(typeof slideJSON.background === "string"){
				SM.Editor.Slides.setSlideBackground(scaffoldDOM, slideJSON.background);
			};
			_drawHotzones(slideJSON.id,slideJSON.hotzones);
			_drawHotspots(slideJSON.id,slideJSON.hotspots);
			SM.Editor.Caption.loadCaption(slideJSON.id,slideJSON.caption);
		}
	};

	var _drawHotspots = function(slideId,hotspots){
		if (Array.isArray(hotspots)) {
			hotspots.forEach(function(hotspot, index) {
				SM.Utils.registerId(hotspot.id);

				//Transform dimensions from percentage to absolute numbers for the current container.
				//If aspect ratio is 4:3, the dimensions of the container are 800x600
				//If aspect ratio is 16:9, the dimensions of the container are 1024x576
				var slideContainerWidth;
				var slideContainerHeight;

				if($("body").attr("aspectRatio")==="16:9"){
					slideContainerWidth = 1024;
					slideContainerHeight = 576;
				} else {
					slideContainerWidth = 800;
					slideContainerHeight = 600;
				}

				hotspot.x = (hotspot.x*slideContainerWidth/100);
				hotspot.y = (hotspot.y*slideContainerHeight/100);
				hotspot.width = (hotspot.width*slideContainerWidth/100);
				hotspot.height = (hotspot.height*slideContainerHeight/100);

				_drawHotspot(slideId,hotspot);
				if (Array.isArray(hotspot.actions)&&hotspot.actions.length>0) {
					slideData[slideId].hotspots[hotspot.id].actions = hotspot.actions;
				}
			});
		}
	};

	var _drawHotzones = function(slideId,hotzones){
		if (Array.isArray(hotzones)) {
			$(hotzones).each(function(index,hotzoneJSON){
				_drawHotzone(slideId,hotzoneJSON);
			});
		}
	};

	var _drawHotzone = function(slideId,hotzoneJSON){
		if(Array.isArray(hotzoneJSON.points)){
			var hotzoneId;
			if(typeof hotzoneJSON.id === "string"){
				hotzoneId = hotzoneJSON.id;
			} else {
				hotzoneId = SM.Utils.getId("annotation-");
			}
			var hotzoneIdAlias;
			if(typeof hotzoneJSON.idAlias === "string"){
				hotzoneIdAlias = hotzoneJSON.idAlias;
			} else {
				hotzoneIdAlias = SM.Utils.getId("zone-");
			}
			hotzoneIdsAlias[hotzoneId] = hotzoneIdAlias;
			SM.Utils.registerId(hotzoneIdAlias);

			var annotation = SM.Marker.createAnnotationFromPointsArray(hotzoneId,hotzoneJSON.points);
			var annotator = _createAnnotatorForSlide(slideId);
			annotator.addAnnotation(annotation);
			slideData[slideId].hotzones[hotzoneId] = {};
			slideData[slideId].hotzones[hotzoneId].cursorVisibility = hotzoneJSON.cursorVisibility;
			slideData[slideId].hotzones[hotzoneId].enabled = hotzoneJSON.enabled;
			if (Array.isArray(hotzoneJSON.actions)&&(hotzoneJSON.actions.length>0)) {
				slideData[slideId].hotzones[hotzoneId].actions = hotzoneJSON.actions;
			}
		}
	};

   /*
	* Toolbar: Hotspots and Hotzones
	*/
	var addHotspot = function(){
		if(currentEditingMode === "HOTSPOT"){
			_disableEditingMode("HOTSPOT");
		} else {
			_enableEditingMode("HOTSPOT");
		}
	};

	var addHotzone = function(){
		if(currentEditingMode === "HOTZONE"){
			_disableEditingMode("HOTZONE");
		} else {
			_enableEditingMode("HOTZONE");
		}
	};

	var _enableEditingMode = function(mode){
		currentEditingMode = mode;
		switch(mode){
			case "HOTSPOT":
				_disableEditingMode("HOTZONE");
				$("#slides_panel").addClass("hotspot_active");
				break;
			case "HOTZONE":
				_disableEditingMode("HOTSPOT");
				$("#slides_panel").addClass("hotzone_active");
				_enableHotzones();
				break;
			case "NONE":
				_disableEditingMode("HOTSPOT");
				_disableEditingMode("HOTZONE");
				break;
		}
	};

	var _disableEditingMode = function(mode){
		if(currentEditingMode === mode){
			currentEditingMode = "NONE";
		}
		switch(mode){
			case "HOTSPOT":
				$("#slides_panel").removeClass("hotspot_active");
				setCurrentHotspot(undefined);
				break;
			case "HOTZONE":
				$("#slides_panel").removeClass("hotzone_active");
				currentHotzoneId = undefined;
				_disableHotzones();
				break;
			default:
				break;
		}
	};

	var onClick = function(event){
		var $target = $(event.target);
		if(currentEditingMode !== "NONE"){
			if ($target.closest('article[type="' + SM.Constant.SCREEN + '"]').length === 0) {
				//Click outside a slide
				_enableEditingMode("NONE");
			} else {
				//Click inside a slide
				switch(currentEditingMode){
					case "HOTSPOT":
						_onClickInHotspotMode(event);
						break;
					case "HOTZONE":
						//Do nothing. Handled by Annotorious.
						break;
					default:
						break;
				}
			}
		} else {
			if ($target.hasClass('hotspot')){
				_onSelectHotspot($target);
			}
			//Hotzones are handleded using Annotorious events.
		}
	};


	/////
	// Hotspots
	/////

	var _onClickInHotspotMode = function(event){
		event.preventDefault();
		event.stopPropagation();

		var slide = SM.Slides.getCurrentSlide();
		var slideId = $(slide).attr("id");
		var hotspotId = SM.Utils.getId("hotspot-");
		var hotspotSize = 42;
		var rect = slide.getBoundingClientRect();
		var x = event.clientX - rect.left - hotspotSize/2;
		var y = event.clientY - rect.top - hotspotSize/2;
		
		_drawHotspot(slideId,{id: hotspotId, x: x, y: y});
		_enableEditingMode("NONE");
	};

	var _drawHotspot = function(slideId,hotspotJSON){
		if(typeof hotspotJSON.image !== "string"){
			hotspotJSON.image = SM.Marker.getDefaultHotspotImg();
		}
		if(typeof hotspotJSON.lockAspectRatio !== "boolean"){
			hotspotJSON.lockAspectRatio = true;
		}
		if(typeof hotspotJSON.visibility !== "string"){
			hotspotJSON.visibility = "visible";
		}
		if(typeof hotspotJSON.cursorVisibility !== "string"){
			hotspotJSON.cursorVisibility = "pointer";
		}
		if(typeof hotspotJSON.width !== "number"){
			hotspotJSON.width = 42;
		}
		if(typeof hotspotJSON.height !== "number"){
			hotspotJSON.height = 42;
		}

		var rotationAngle = parseFloat(hotspotJSON.rotationAngle);
		if (typeof rotationAngle !== "number" || isNaN(rotationAngle) || rotationAngle < 0 || rotationAngle > 360) {
			rotationAngle = 0;
		}

		var $slide = $("#"+slideId);
		var $imgBackground = SM.Slides.getSlideBackgroundImg($slide);
		var $hotspot = $('<img>', {
			src: hotspotJSON.image,
			class: 'hotspot',
			id: hotspotJSON.id,
			rotationAngle: rotationAngle,
			css: {
				position: 'absolute',
				left: hotspotJSON.x,
				top: hotspotJSON.y,
				width: (hotspotJSON.width + "px"),
				height: (hotspotJSON.height + "px"),
				transform: "rotate(" + rotationAngle + "deg)"
			}
		}).appendTo($imgBackground.parent());
		_validateHotspotPosition($hotspot);

		if(typeof slideData[slideId] === "undefined"){
			slideData[slideId] = getDefaultSlideConfig();
		}
		slideData[slideId].hotspots[hotspotJSON.id] = {};
		slideData[slideId].hotspots[hotspotJSON.id].lockAspectRatio = hotspotJSON.lockAspectRatio;
		slideData[slideId].hotspots[hotspotJSON.id].visibility = hotspotJSON.visibility;
		slideData[slideId].hotspots[hotspotJSON.id].cursorVisibility = hotspotJSON.cursorVisibility;

		_enableDraggableHotspot($hotspot);
	};

	var _enableDraggableHotspot = function($hotspot){
		$hotspot.draggable({
			start: function(event, ui) {
				_onSelectHotspot($hotspot);
			},
			stop: function(event, ui) {
				_validateHotspotPosition($hotspot);
			}
		});
	};

	var _validateHotspotPosition = function($hotspot, margin = 15) {
		const $slide = $hotspot.parent();
		if (_fullyOutside($slide, $hotspot, margin)) {
			_moveInside($slide, $hotspot);
		}
	};

	var _fullyInside = function($container, $el, margin = 0) {
		const cw = $container.innerWidth();
		const ch = $container.innerHeight();
		const ew = $el.outerWidth();
		const eh = $el.outerHeight();
		const pos = $el.position();

		return (
			pos.left >= -margin &&
			pos.top  >= -margin &&
			(pos.left + ew) <= (cw + margin) &&
			(pos.top  + eh) <= (ch + margin)
		);
	};

	var _fullyOutside = function($container, $el, margin = 0) {
		const cw = $container.innerWidth();
		const ch = $container.innerHeight();
		const ew = $el.outerWidth();
		const eh = $el.outerHeight();
		const pos = $el.position();

		return (
			pos.left + ew <= +margin ||
			pos.top + eh <= +margin ||
			pos.left >= cw - margin ||
			pos.top >= ch - margin
		);
	};

	var _moveInside = function($container, $el, margin = 0) {
		const cw = $container.innerWidth();
		const ch = $container.innerHeight();
		const ew = $el.outerWidth();
		const eh = $el.outerHeight();
		let { left, top } = $el.position();

		left = Math.max(margin, Math.min(left, cw - ew - margin));
		top  = Math.max(margin, Math.min(top,  ch - eh - margin));

		//$el.css({ left, top });
		$el.stop(true).animate({ left, top }, 1000);
	};

	var refreshDraggables = function(slide){
		//Refresh hotspots
		$(slide).find('img.hotspot').each(function() {
			var $hotspot = $(this);
			_enableDraggableHotspot($hotspot);
		});
	};

	var copyMarkers = function(oldScreenId,newScreenId){
		_copyMarkersInSlide(oldScreenId,newScreenId);
		$("#"+newScreenId).children("article").each(function(index, view) {
			var newViewId = $(view).attr("id");
			var oldViewId = oldScreenId + newViewId.slice(newScreenId.length);
			_copyMarkersInSlide(oldViewId,newViewId);
		});
	};

	var _copyMarkersInSlide = function(oldSlideId,newSlideId){
		if(typeof slideData[newSlideId] === "undefined"){
			slideData[newSlideId] = getDefaultSlideConfig();
		}
		if(typeof slideData[oldSlideId] === "undefined"){
			//Nothing to copy
			return;
		}

		slideData[newSlideId] = JSON.parse(JSON.stringify(slideData[oldSlideId]));
		var $newSlide = $("#" + newSlideId);
		
		//Undo annotator
		if(typeof slideData[newSlideId].annotator !== "undefined"){
			delete slideData[newSlideId].annotator;
			slideData[newSlideId].hotzones = {};
			var $imgBackground = SM.Slides.getSlideBackgroundImg($newSlide);
			$imgBackground.parent("div[data-theme]").remove();
			$imgBackground.prependTo($newSlide);
		}

		//Change hotspot ids in config
		var hotspotIdsMapping = {};
		$newSlide.children("img.hotspot").each(function(index, hotspot){
			var oldHotspotId = $(hotspot).attr("id");
			var newHotspotId = SM.Utils.getId("hotspot-");
			$(hotspot).attr("id",newHotspotId);
			hotspotIdsMapping[oldHotspotId] = newHotspotId;
		});

		for (var oldHotspotId in hotspotIdsMapping) {
			var newHotspotId = hotspotIdsMapping[oldHotspotId];
			var oldHotspotData = Object.assign({}, slideData[newSlideId].hotspots[oldHotspotId]);
			if((typeof oldHotspotData !== "undefined")&&(Object.keys(oldHotspotData).length > 0)){
				slideData[newSlideId].hotspots[newHotspotId] = oldHotspotData;
			}
			delete slideData[newSlideId].hotspots[oldHotspotId];
		}

		//Change hotzone ids in config
		var oldSlideJSON = saveSlideWithMarkers($("#"+oldSlideId));
		var hotzones = oldSlideJSON.hotzones;
		var hotzoneIdsMapping = {};
		for (var i = 0; i < hotzones.length; i++) {
			var oldHotzoneId = hotzones[i].id;
			hotzones[i].id = SM.Utils.getId("annotation-");
			hotzoneIdsMapping[oldHotzoneId] = hotzones[i].id;
			delete hotzones[i].idAlias;
		}

		//Change ids in hotspot actions
		for (var hotspotId in slideData[newSlideId].hotspots) {
			var hotspot = slideData[newSlideId].hotspots[hotspotId];
			slideData[newSlideId].hotspots[hotspotId].actions = _changeIdsInActions(hotspot.actions,hotspotId,oldSlideId,newSlideId,hotspotIdsMapping,hotzoneIdsMapping);
		}
		//Change ids in hotzone actions
		for (var j = 0; j < hotzones.length; j++) {
			hotzones[j].actions = _changeIdsInActions(hotzones[j].actions,hotzones[j].id,oldSlideId,newSlideId,hotspotIdsMapping,hotzoneIdsMapping);
		}

		if (Array.isArray(hotzones) && hotzones.length > 0) {
			_drawHotzones(newSlideId,hotzones);
		}
	};

	var _changeIdsInActions = function(actions,elementId,oldSlideId,newSlideId,hotspotIdsMapping,hotzoneIdsMapping){
		if (Array.isArray(actions)) {
			var nActions = actions.length;
			for(var i=0; i<nActions; i++){
				var action = actions[i];
				switch(action.actionType){
					case 'openView':
						//open the same view but in the copy screen
						if((action.actionParams)&&(typeof action.actionParams.view === "string")){
							var oldViewId = action.actionParams.view;
							var newViewId;
							if (oldViewId.startsWith(oldSlideId)) {
								//newSlide is a screen containing a copy of oldView
								newViewId = newSlideId + oldViewId.slice(oldSlideId.length);
							} else if(oldViewId.split("_")[0] === oldSlideId.split("_")[0]){
								//newSlide is a view of a screen containing a copy of oldView
								var screenId = newSlideId.split("_")[0];
								newViewId = screenId + oldViewId.slice(screenId.length);
							}
							if(typeof newViewId === "string"){
								actions[i].actionParams.view = newViewId;
							}
						}
						break;
					case 'showHotspot':
					case 'hideHotspot':
						//Keep behaviour if the target hotspot belongs to the old slide
						if((action.actionParams)&&(typeof action.actionParams.hotspotId === "string")){
							var targetHotspotId = action.actionParams.hotspotId;						
							var targetHotspotBelongsToOldSlideId = (Object.keys(hotspotIdsMapping).includes(targetHotspotId));
							if(targetHotspotBelongsToOldSlideId){
								action.actionParams.hotspotId = hotspotIdsMapping[targetHotspotId];
							}
						}
						break;
					case 'enableHotzone':
					case 'disableHotzone':
						//Keep behaviour if the target hotzone belongs to the old slide
						if((action.actionParams)&&(typeof action.actionParams.hotzoneId === "string")){
							var targetHotzoneId = action.actionParams.hotzoneId;						
							var targetHotzoneBelongsToOldSlideId = (Object.keys(hotzoneIdsMapping).includes(targetHotzoneId));
							if(targetHotzoneBelongsToOldSlideId){
								action.actionParams.hotzoneId = hotzoneIdsMapping[targetHotzoneId];
							}
						}
						break;
				}
			}
		}
		return actions;
	};

	var _onSelectHotspot = function($hotspot){
		setCurrentHotspot($hotspot);
		SM.Editor.Tools.loadToolsForElement("hotspot");
	};

	var showHotspotSettings = function(){
		$(hiddenLinkToInitHotspotSettings).trigger("click");
	};

	var _onStartHotspotSettingsFancybox = function(){
		var slideId = $(SM.Slides.getCurrentSlide()).attr("id");
		var $hotspot = $(currentHotspot);
		var hotspotId = $hotspot.attr("id");
		var hotspotSettings = slideData[slideId].hotspots[hotspotId];

		//ID
		$("#hotspotIdInput").val(hotspotId);

		//Image
		//Redraw gallery
		_drawHotspotGalleryCarousel(function(){
			$("#hotspotImageGallery img").removeClass("selected");
			var hotspotImageSource = $hotspot.attr("src");
			//Check if image belongs to gallery
			var imgGallery = $("#hotspotImageGallery").find("img[src='" + hotspotImageSource + "']")[0];
			if(typeof imgGallery === "undefined"){
				//Image does not belong to the gallery
				$("#hotspotImageURL").val(hotspotImageSource);
				$("#hotspotImageSource").val("url").trigger("change");
			} else {
				$(imgGallery).addClass("selected");
				$("#hotspotImageSource").val("gallery").trigger("change");
				SM.Editor.Carousel.goToElement("hotspotImageGallery",imgGallery);
			}
		});

		//Position
		//var hotspotPosition = $hotspot.position();
		var hotspotX = parseFloat($hotspot.css("left"));
		var hotspotY = parseFloat($hotspot.css("top"));
		$("#hotspotPositionX").val(hotspotX);
		$("#hotspotPositionY").val(hotspotY);

		//Size
		if(typeof slideData[slideId].hotspots[hotspotId].lockAspectRatio === "boolean"){
			$("#hotspotLockAspectRatio").prop("checked", slideData[slideId].hotspots[hotspotId].lockAspectRatio);
		}
		
		var hotspotWidth = $hotspot.width();
		var hotspotHeight = $hotspot.height();
		var hotspotAspectRatio = Math.round((hotspotWidth/hotspotHeight) * 100) / 100;
		$("#hotspotSizeWidth").val(hotspotWidth);
		$("#hotspotSizeHeight").val(hotspotHeight);
		$("#hotspotAspectRatio").val(hotspotAspectRatio);
		
		//Rotation
		var rotationAngle = $hotspot.attr("rotationAngle");
		if (!isNaN(rotationAngle) && rotationAngle >= 0 && rotationAngle <= 360) {
			$("#hotspotRotation").val(rotationAngle);
		} else {
			$("#hotspotRotation").val(0);
		}

		//Visibility
		if(typeof slideData[slideId].hotspots[hotspotId].visibility === "string"){
			$("#hotspotVisibility").val(slideData[slideId].hotspots[hotspotId].visibility);
		} else {
			$("#hotspotVisibility").val("visible");
		}

		//Cursor visibility
		if(typeof slideData[slideId].hotspots[hotspotId].cursorVisibility === "string"){
			$("#hotspotCursorVisibility").val(slideData[slideId].hotspots[hotspotId].cursorVisibility);
		} else {
			$("#hotspotCursorVisibility").val("pointer");
		}

		//Actions
		SM.Editor.Actions.loadActions($("#hotspotActions"),hotspotSettings,"HOTSPOT");
	};

	var _drawHotspotGalleryCarousel = function(callback){
		_cleanHotspotGalleryCarousel();

		var hotspotGalleryImgs = [
			{ src: SM.ImagesPath + "hotspotgallery/hotspot.png" },
			{ src: SM.ImagesPath + "hotspotgallery/arrow.png" },
			{ src: SM.ImagesPath + "hotspotgallery/magnifying_glass.png" },
			{ src: SM.ImagesPath + "hotspotgallery/eye.png" },
			{ src: SM.ImagesPath + "hotspotgallery/hand.png" },
			{ src: SM.ImagesPath + "hotspotgallery/hand2.png" },
			{ src: SM.ImagesPath + "hotspotgallery/wheel.png" },
			{ src: SM.ImagesPath + "hotspotgallery/info.png" },
			{ src: SM.ImagesPath + "hotspotgallery/dialogue.png" },
			{ src: SM.ImagesPath + "hotspotgallery/dialogue2.png", aspectRatio: 1.164 },
			{ src: SM.ImagesPath + "hotspotgallery/pin.png", aspectRatio: 0.774 },
			{ src: SM.ImagesPath + "hotspotgallery/close.png" },
			{ src: SM.ImagesPath + "hotspotgallery/key.png", aspectRatio: 0.779 },
			{ src: SM.ImagesPath + "hotspotgallery/painting.png", aspectRatio: 0.891 },
			{ src: SM.ImagesPath + "hotspotgallery/keypad_standard.png" },
			{ src: SM.ImagesPath + "hotspotgallery/keypad_retro.png" },
			{ src: SM.ImagesPath + "hotspotgallery/keypad_futuristic.png" },
			{ src: SM.ImagesPath + "hotspotgallery/decoderdisk_standard.png" },
			{ src: SM.ImagesPath + "hotspotgallery/decoderdisk_basic.png" },
			{ src: SM.ImagesPath + "hotspotgallery/decoderdisk_retro.png" },
			{ src: SM.ImagesPath + "hotspotgallery/decoderdisk_futuristic.png" },
			{ src: SM.ImagesPath + "hotspotgallery/safebox_standard.png" },
			{ src: SM.ImagesPath + "hotspotgallery/safebox_retro.png" },
			{ src: SM.ImagesPath + "hotspotgallery/safebox_futuristic.png", aspectRatio: 1.286 },
			{ src: SM.ImagesPath + "hotspotgallery/signal_generator.png" },
			{ src: SM.ImagesPath + "hotspotgallery/switch_standard_off.png", aspectRatio: 0.767 },
			{ src: SM.ImagesPath + "hotspotgallery/switch_standard_on.png", aspectRatio: 0.767 },
			{ src: SM.ImagesPath + "hotspotgallery/switch_retro_off.png", aspectRatio: 0.743 },
			{ src: SM.ImagesPath + "hotspotgallery/switch_retro_on.png", aspectRatio: 0.743 },
			{ src: SM.ImagesPath + "hotspotgallery/switch_futuristic_off.png", aspectRatio: 0.762 },
			{ src: SM.ImagesPath + "hotspotgallery/switch_futuristic_on.png", aspectRatio: 0.762 },
			{ src: SM.ImagesPath + "hotspotgallery/switches_container_standard.png", aspectRatio: 1.779 },
			{ src: SM.ImagesPath + "hotspotgallery/switches_container_retro.png", aspectRatio: 1.779 },
			{ src: SM.ImagesPath + "hotspotgallery/switches_container_futuristic.png", aspectRatio: 16/9 },
			{ src: SM.ImagesPath + "hotspotgallery/wires_container_standard.png", aspectRatio: 1.687 },
			{ src: SM.ImagesPath + "hotspotgallery/wires_container_retro.png", aspectRatio: 1.930 },
			{ src: SM.ImagesPath + "hotspotgallery/wires_container_futuristic.png", aspectRatio: 1.875 },
			{ src: SM.ImagesPath + "hotspotgallery/chessboard_standard.png" },
			{ src: SM.ImagesPath + "hotspotgallery/chessboard_realistic.png" },
			{ src: SM.ImagesPath + "hotspotgallery/chessboard_futuristic.png" },
			{ src: SM.ImagesPath + "hotspotgallery/chessbox_standard.png", aspectRatio: 0.564 },
			{ src: SM.ImagesPath + "hotspotgallery/chessbox_realistic.png", aspectRatio: 0.564 }
		];

		var carouselImages = [];
		$.each(hotspotGalleryImgs, function(index, image){
			var myImg = $("<img src='" + image.src + "'/>");
			if(typeof image.aspectRatio === "number"){
				myImg.attr("aspectratio",image.aspectRatio);
			}
			carouselImages.push(myImg);
		});

		var options = {};
		options.callback = _drawHotspotGalleryCarouselAfterLoadImages;
		options.afterDrawCarouselCallback = callback;
		SM.Editor.Utils.Loader.loadImagesOnContainer(carouselImages,"hotspotImageGallery",options);
	};

	var _drawHotspotGalleryCarouselAfterLoadImages = function(loadImagesOnContainerOptions){
		var $carouselDiv = $("#hotspotImageGallery");
		var $containerCarouselDiv = $carouselDiv.parent();
		$carouselDiv.show();
		SM.Utils.addTempShown([$containerCarouselDiv,$carouselDiv]);

		var options = new Array();
		options.rows = 1;
		//options.callback = _onClickCarouselElement;
		options.rowItems = 9;
		options.scrollItems = 9;
		//options.styleClass = "hotspotgallery";
		options.afterCreateCarruselFunction = function(){
			setTimeout(function(){
				SM.Utils.removeTempShown([$containerCarouselDiv,$carouselDiv]);
				if(typeof loadImagesOnContainerOptions.afterDrawCarouselCallback === "function"){
					loadImagesOnContainerOptions.afterDrawCarouselCallback();
				}
			},100);
		}
		SM.Editor.Carousel.createCarousel("hotspotImageGallery", options);
	};

	var _cleanHotspotGalleryCarousel = function(){
		SM.Editor.Carousel.cleanCarousel("hotspotImageGallery");
		$("#hotspotImageGallery").hide();
	};

	var onHotspotImageSourceChange = function(event){
		var option = event.target.value;
		if(option === "gallery"){
			var carouselWrapper = $("#hotspotImageGallery").parent().parent();
			$(carouselWrapper).show();
			$("#hotspotImageURLWrapper").hide();
			$("#hotspotImageURL").val("");
			checkHotspotImageURLPreview();
		} else if(option === "url"){
			var carouselWrapper = $("#hotspotImageGallery").parent().parent();
			$(carouselWrapper).hide();
			$("#hotspotImageURLWrapper").show();
			checkHotspotImageURLPreview();
		}
	};

	var checkHotspotImageURLPreview = function(){
		var $hotspotImageURLPreviewWrapper = $("#hotspotImageURLPreviewWrapper");
		var imgUrl = $("#hotspotImageURL").val();
		if((typeof imgUrl === "string")&&(imgUrl.trim() !== "")){
			$hotspotImageURLPreviewWrapper.html("<img src='" + imgUrl + "'>").show();
		} else {
			$hotspotImageURLPreviewWrapper.html("").hide();
		}
	};

	var onClickHotspotImageGallery = function(event){
		var $img = $(event.target);
		$("#hotspotImageGallery").find("img").removeClass("selected");
		$img.addClass("selected");

		//Check and apply aspect ratio
		var aspectRatio = parseFloat($img.attr("aspectratio"));
		if(isNaN(parseFloat(aspectRatio))){
			aspectRatio = 1;
		}
		var currentAspectRatio = $("#hotspotSizeWidth").val()/$("#hotspotSizeHeight").val();
		if((aspectRatio !== currentAspectRatio)&&(aspectRatio > 0)){
			var newHeight = Math.round($("#hotspotSizeWidth").val()/aspectRatio);
			$("#hotspotSizeHeight").val(newHeight);
			$("#hotspotAspectRatio").val(aspectRatio);
		}
	};

	var onInputHotspotSizeWidth = function(event){
		var lockAspectRatio = $("#hotspotLockAspectRatio").prop("checked");
		if(lockAspectRatio){
			var aspectRatio = parseFloat($("#hotspotAspectRatio").val());
			var newHeight = Math.round($("#hotspotSizeWidth").val()/aspectRatio);
			$("#hotspotSizeHeight").val(newHeight);
		}
	};

	var onInputHotspotSizeHeight = function(event){
		var lockAspectRatio = $("#hotspotLockAspectRatio").prop("checked");
		if(lockAspectRatio){
			var aspectRatio = parseFloat($("#hotspotAspectRatio").val());
			var newWidth = Math.round($("#hotspotSizeHeight").val()*aspectRatio);
			$("#hotspotSizeWidth").val(newWidth);
		}
	};

	var onHotspotSettingsDone = function(event){
		var slideId = $(SM.Slides.getCurrentSlide()).attr("id");
		var $hotspot = $(currentHotspot);
		var hotspotId = $hotspot.attr("id");
		var hotspotSettings = {};

		//Hotspot image
		var hotspotImg;
		switch($("#hotspotImageSource").val()){
			case "gallery":
				var $selectedGalleryImg = $("#hotspotImageGallery img.selected");
				if ($selectedGalleryImg.length) {
					hotspotImg = $selectedGalleryImg.attr("src");
				}
				break;
			case "url":
				hotspotImg = $("#hotspotImageURL").val();
				break;
			default:
				break;
		}
		if(typeof hotspotImg !== "string"){
			hotspotImg = SM.Marker.getDefaultHotspotImg();
		}
		$hotspot.attr("src", hotspotImg);

		//Hotspot position
		var hotspotX = parseFloat($("#hotspotPositionX").val());
		var hotspotY = parseFloat($("#hotspotPositionY").val());
		if((typeof hotspotX === "number")&&(!Number.isNaN(hotspotX))&&(hotspotX >= 0)){
			$hotspot.css("left",hotspotX + "px");
		}
		if((typeof hotspotY === "number")&&(!Number.isNaN(hotspotY))&&(hotspotY >= 0)){
			$hotspot.css("top",hotspotY + "px");
		}

		//Hotspot size
		hotspotSettings.lockAspectRatio = $("#hotspotLockAspectRatio").prop("checked");
		var hotspotWidth = $("#hotspotSizeWidth").val();
		var hotspotHeight = $("#hotspotSizeHeight").val();
		if(hotspotWidth > 0){
			$hotspot.width(hotspotWidth);
		}
		if(hotspotHeight > 0){
			$hotspot.height(hotspotHeight);
		}

		//Hotspot rotation
		var rotationAngle = parseFloat($("#hotspotRotation").val());
		if (!isNaN(rotationAngle) && rotationAngle >= 0 && rotationAngle <= 360) {
		  	$hotspot.attr("rotationAngle",rotationAngle);
			$hotspot.css("transform", "rotate(" + rotationAngle + "deg)");
		}

		//Hotspot visibility
		hotspotSettings.visibility = $("#hotspotVisibility").val();
		hotspotSettings.cursorVisibility = $("#hotspotCursorVisibility").val();

		//Validate position
		_validateHotspotPosition($hotspot);

		//Hotspot actions
		var actions = SM.Editor.Actions.getActionsJSON($("#hotspotActions"));
		if(actions.length > 0){
			hotspotSettings.actions = actions;
		}

		slideData[slideId].hotspots[hotspotId] = hotspotSettings;

		$.fancybox.close();
	};


	/////////
	// Hotzones
	////////

	var _enableHotzones = function(){
		var $currentSlide = $(SM.Slides.getCurrentSlide());
		var currentSlideId = $currentSlide.attr("id");
		
		if((typeof slideData[currentSlideId] === "undefined")||(typeof slideData[currentSlideId].annotator === "undefined")){
			var imgBackground = $currentSlide.children("img.slide_background");
			if(imgBackground.length === 0){
				//No background
				_disableEditingMode("HOTZONE");
				return;
			}
			_createAnnotatorForSlide(currentSlideId);
		}
		
		$currentSlide.find("div > svg.a9s-annotationlayer").css("pointer-events","auto");
		slideData[currentSlideId].annotator.setDrawingEnabled(true);
		slideData[currentSlideId].annotator.setUserSelectAction('NONE');
		slideData[currentSlideId].annotator.off('selectionChanged', _onAnnotationSelectionChange);
	};

	var _disableHotzones = function(){
		var $currentSlide = $(SM.Slides.getCurrentSlide());
		var currentSlideId = $currentSlide.attr("id");
		$currentSlide.find("div > svg.a9s-annotationlayer").css("pointer-events","none");
		if((typeof slideData[currentSlideId] !== "undefined") && (typeof slideData[currentSlideId].annotator !== "undefined")){
			slideData[currentSlideId].annotator.setDrawingEnabled(false);
			slideData[currentSlideId].annotator.setUserSelectAction('EDIT');
			slideData[currentSlideId].annotator.on('selectionChanged', _onAnnotationSelectionChange);
		}
	};

	var _createAnnotatorForSlide = function(slideId){
		if(typeof slideData[slideId] === "undefined"){
			slideData[slideId] = getDefaultSlideConfig();
		}
		if(typeof slideData[slideId].annotator !== "undefined"){
			return slideData[slideId].annotator; //already created
		}

		var $slide = $("#" + slideId);
		var $imgBackground = SM.Slides.getSlideBackgroundImg($slide);
		var annotator = Annotorious.createImageAnnotator($imgBackground.attr("id"), {
			drawingEnabled: false,
			drawingMode: "click",
			userSelectAction: 'EDIT',
			style: {
				fill: '#dddddd',
				fillOpacity: 0.25,
				stroke: '#000000',
				strokeWidth: 1
			}
		});
		annotator.setDrawingTool('polygon');
		annotator.on('createAnnotation', (annotation) => {
			hotzoneIdsAlias[annotation.id] = SM.Utils.getId("zone-");
			slideData[slideId].hotzones[annotation.id] = {};
			slideData[slideId].hotzones[annotation.id].cursorVisibility = "default";
			slideData[slideId].hotzones[annotation.id].enabled = true;
			_disableEditingMode("HOTZONE");
		});
		annotator.on('selectionChanged', _onAnnotationSelectionChange);

		//Move hotspots inside the annotator div
		var $container = $($slide.find("div > svg.a9s-annotationlayer").parent());
		$slide.children("img.hotspot").each(function(index,hotspotDOM){
			$container.append(hotspotDOM);
		});
		
		slideData[slideId].annotator = annotator;
		return annotator;
	};

	var _onAnnotationSelectionChange = function(annotations){
		if(Array.isArray(annotations)){
			if (annotations.length === 1){
				//Annotation selected
				_onSelectHotzone(annotations[0].id);
			}
			// if(annotations.length === 0){
			// 	//Annotation unselected
			// }
		}
	};

	var _onSelectHotzone = function(hotzoneId){
		if(currentEditingMode === "HOTSPOT"){
			_disableEditingMode("HOTSPOT");
		}
		currentHotzoneId = hotzoneId;
		SM.Editor.Tools.loadToolsForElement("hotzone");
	};

	var showHotzoneSettings = function(){
		$(hiddenLinkToInitHotzoneSettings).trigger("click");
	};

	var _onStartHotzoneSettingsFancybox = function(){
		var slideId = $(SM.Slides.getCurrentSlide()).attr("id");
		var hotzoneId = currentHotzoneId;
		var hotzoneSettings = slideData[slideId].hotzones[hotzoneId];

		//ID
		$("#hotzoneIdInput").val(hotzoneIdsAlias[hotzoneId]);

		//Cursor visibility
		if(typeof slideData[slideId].hotzones[hotzoneId].cursorVisibility === "string"){
			$("#hotzoneCursorVisibility").val(slideData[slideId].hotzones[hotzoneId].cursorVisibility);
		} else {
			$("#hotzoneCursorVisibility").val("default");
		}

		//Enabled
		if(slideData[slideId].hotzones[hotzoneId].enabled === false){
			$("#hotzoneEnabled").val("false");
		} else {
			$("#hotzoneEnabled").val("true");
		}

		//Actions
		SM.Editor.Actions.loadActions($("#hotzoneActions"),hotzoneSettings,"HOTZONE");
	};

	var onHotzoneSettingsDone = function(event){
		var slideId = $(SM.Slides.getCurrentSlide()).attr("id");
		var hotzoneId = currentHotzoneId;
		var hotzoneSettings = {};

		//Hotzone enabled
		hotzoneSettings.enabled = !($("#hotzoneEnabled").val()==="false");

		//Hotzone cursor visibility
		hotzoneSettings.cursorVisibility = $("#hotzoneCursorVisibility").val();

		//Hotzone actions
		var actions = SM.Editor.Actions.getActionsJSON($("#hotzoneActions"));
		if(actions.length > 0){
			hotzoneSettings.actions = actions;
		}

		slideData[slideId].hotzones[hotzoneId] = hotzoneSettings;

		$.fancybox.close();
	};


	////////////////////
	// Getters & setters
	////////////////////

	var getSlideData = function(){
		return slideData;
	};

	var setSlideData = function(newSlideData){
		slideData = newSlideData;
	};

	var getCurrentHotspot = function(){
		return currentHotspot;
	};

	var setCurrentHotspot = function(newHotspot){
		currentHotspot = newHotspot;
		$("img.hotspot").removeClass("hotspot_selected");
		if(typeof newHotspot !== "undefined"){
			$(newHotspot).addClass("hotspot_selected");
		}
	};

	var getCurrentHotzoneId = function(){
		return currentHotzoneId;
	};

	var setCurrentHotzoneId = function(newHotzoneId){
		currentHotzoneId = newHotzoneId;
		if(typeof newHotzoneId === "undefined"){
			cancelAnnotationSelectedForSlide($(SM.Slides.getCurrentSlide()).attr("id"));
		}
	};

	var getAliasForHotzone = function(hotzoneId){
		return hotzoneIdsAlias[hotzoneId];
	};

	var cancelAnnotationSelectedForSlide = function(slideId){
		if((typeof slideData[slideId] !== "undefined")&&(typeof slideData[slideId].annotator !== "undefined")){
			slideData[slideId].annotator.cancelSelected();
		}
	};

	////////////////////
	// Delete
	////////////////////

	var deleteCurrentHotmarker = function(){
		var isDeletingHotspot;
		if(typeof currentHotspot !== "undefined"){
			isDeletingHotspot = true;
		} else {
			if(typeof currentHotzoneId === "undefined"){
				//No current element
				return;
			}
		}

		var options = {};
		options.width = 375;
		options.height = 130;
		if(isDeletingHotspot){
			options.text = SM.I18n.getTrans("i.AreYouSureDeleteHotspot");
			options.notificationIconSrc = $(currentHotspot).attr("src");
			options.notificationIconClass = "notificationIconDeleteHotspot";
		} else {
			options.text = SM.I18n.getTrans("i.AreYouSureDeleteHotzone");
			options.notificationIconSrc = SM.ImagesPath + "thumbs/hotzone.png";
		}
		
		var button1 = {};
		button1.text = SM.I18n.getTrans("i.no");
		button1.callback = function(){
			$.fancybox.close();
		}
		var button2 = {};
		button2.text = SM.I18n.getTrans("i.delete");
		button2.callback = function(){
			var currentSlideId = $(SM.Slides.getCurrentSlide()).attr("id");
			if(isDeletingHotspot){
				//Delete current hotspot
				var $hotspot = $(currentHotspot);
				var hotspotId = $hotspot.attr("id");
				$hotspot.remove();
				delete slideData[currentSlideId].hotspots[hotspotId];
				setCurrentHotspot(undefined);
			} else {
				//Delete current hotzone
				var annotator = slideData[currentSlideId].annotator;
				if(typeof annotator !== "undefined"){
					//Remove hotzone using Annotorious
					annotator.removeAnnotation(currentHotzoneId);
				}
				delete slideData[currentSlideId].hotzones[currentHotzoneId];
				currentHotzoneId = undefined;
			}
			SM.Editor.Tools.cleanToolbar();
			$.fancybox.close();
		}
		options.buttons = [button1,button2];
		SM.Utils.showDialog(options);
	};


	////////////////////
	// JSON Manipulation
	////////////////////

	var saveSlideWithMarkers = function(slideDOM){
		var slide = {};
		slide.id = $(slideDOM).attr('id');
		slide.type = $(slideDOM).attr('type');

		var slideBackground = SM.Slides.getSlideBackground(slideDOM);
		if(typeof slideBackground === "string"){
			slide.background = slideBackground;
		}

		if(typeof slideData[slide.id] !== "undefined"){
			//Hotspots
			var hotspotsIds = Object.keys(slideData[slide.id].hotspots);
			if(hotspotsIds.length > 0) {
				slide.hotspots = [];
				hotspotsIds.forEach(hotspotId => {
					var hotspotDOM = $("img.hotspot[id='" + hotspotId + "']");
					//var hotspotPosition = $(hotspotDOM).position();
					//var hotspotX = hotspotPosition.left;
					//var hotspotY = hotspotPosition.top;
					var hotspotX = parseFloat(hotspotDOM.css("left"));
					var hotspotY = parseFloat(hotspotDOM.css("top"));

					var hotspotSettings = slideData[slide.id].hotspots[hotspotId];

					//Transform dimensions to percentage instead of absolute numbers.
					//If aspect ratio is 4:3, dimensions are calculated for a container with dimensions 800x600
					//If aspect ratio is 16:9, dimensions are calculated for a container with dimensions 1024x576
					var slideContainerWidth;
					var slideContainerHeight;
					if($("body").attr("aspectRatio")==="16:9"){
						slideContainerWidth = 1024;
						slideContainerHeight = 576;
					} else {
						slideContainerWidth = 800;
						slideContainerHeight = 600;
					}

					var hotspotAdaptiveX = (hotspotX*100/slideContainerWidth).toFixed(4);
					var hotspotAdaptiveY = (hotspotY*100/slideContainerHeight).toFixed(4);
					var hotspotAdaptiveWidth = (hotspotDOM.width()*100/slideContainerWidth).toFixed(4);
					var hotspotAdaptiveHeight = (hotspotDOM.height()*100/slideContainerHeight).toFixed(4);

					var hotspotJSON = {
						"id": hotspotId,
						"x": hotspotAdaptiveX,
						"y": hotspotAdaptiveY,
						"image": hotspotDOM.attr("src"),
						"width": hotspotAdaptiveWidth,
						"height": hotspotAdaptiveHeight,
						"lockAspectRatio": hotspotSettings.lockAspectRatio,
						"rotationAngle": hotspotDOM.attr("rotationAngle"),
						"visibility": hotspotSettings.visibility,
						"cursorVisibility": hotspotSettings.cursorVisibility,
					};

					if (Array.isArray(hotspotSettings.actions) && hotspotSettings.actions.length > 0) {
						hotspotJSON.actions = hotspotSettings.actions;
					}
					slide.hotspots.push(hotspotJSON);
				});
			}

			//Hotzones
			var annotator = slideData[slide.id].annotator;
			if(typeof annotator !== "undefined") {
				var annotations = annotator.getAnnotations();
				if(annotations.length > 0){
					slide.hotzones = [];
		
					annotations.forEach(annotation => {
						var hotzoneId = annotation.id;
						var hotzoneSettings = slideData[slide.id].hotzones[hotzoneId];
						var points = annotation.target.selector.geometry.points;
						var hotzoneJSON = {
							"id": hotzoneId,
							"idAlias": hotzoneIdsAlias[hotzoneId],
							"points": points,
							"cursorVisibility": hotzoneSettings.cursorVisibility,
							"enabled": hotzoneSettings.enabled,
						};
						if (Array.isArray(hotzoneSettings.actions) && hotzoneSettings.actions.length > 0) {
							hotzoneJSON.actions = hotzoneSettings.actions;
						}
						slide.hotzones.push(hotzoneJSON);
					});
				}
			}
			//Save caption
			slide = SM.Editor.Caption.saveCaption(slide);
		}

		return slide;
	};

	return {
		init 								: init,
		drawSlideWithMakers					: drawSlideWithMakers,
		refreshDraggables					: refreshDraggables,
		copyMarkers							: copyMarkers,
		addHotspot							: addHotspot,
		addHotzone							: addHotzone,
		onClick 							: onClick,
		getSlideData						: getSlideData,
		setSlideData						: setSlideData,
		getDefaultSlideConfig 				: getDefaultSlideConfig,
		getCurrentHotspot					: getCurrentHotspot,
		setCurrentHotspot					: setCurrentHotspot,
		showHotspotSettings					: showHotspotSettings,
		getCurrentHotzoneId					: getCurrentHotzoneId,
		setCurrentHotzoneId					: setCurrentHotzoneId,
		getAliasForHotzone					: getAliasForHotzone,
		showHotzoneSettings					: showHotzoneSettings,
		cancelAnnotationSelectedForSlide	: cancelAnnotationSelectedForSlide,
		deleteCurrentHotmarker				: deleteCurrentHotmarker,
		onHotspotImageSourceChange			: onHotspotImageSourceChange,
		onClickHotspotImageGallery			: onClickHotspotImageGallery,
		checkHotspotImageURLPreview			: checkHotspotImageURLPreview,
		onInputHotspotSizeWidth				: onInputHotspotSizeWidth,
		onInputHotspotSizeHeight			: onInputHotspotSizeHeight,
		onHotspotSettingsDone				: onHotspotSettingsDone,
		onHotzoneSettingsDone				: onHotzoneSettingsDone,
		saveSlideWithMarkers				: saveSlideWithMarkers
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Actions = (function(SM,$,undefined){

	var init = function(){
		//Fill action template with current puzzles
		var currentOptionsPuzzles = [];
		var nPuzzles = SM.Editor.getOptions().nPuzzles;
		if((typeof nPuzzles === "number")&&(nPuzzles > 0)){
			for(var inp = 0; inp < nPuzzles; inp++){
				var nPuzzle = (inp+1);
				currentOptionsPuzzles.push({
					value: nPuzzle,
					text: (SM.I18n.getTrans("i.PuzzleOption", {number: nPuzzle}))
				});
			}
		}

		$("div.actionWrapperTemplate div.actionParamsPuzzle select, div.actionWrapperTemplate div.actionEventParamsPuzzle select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			$.each(currentOptionsPuzzles, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});
	};

	var _refreshActionTemplate = function(elType){
		var $actionTemplateDiv = $("div.actionWrapperTemplate");

		var currentOptionsScreens = [];
		$('article[type="' + SM.Constant.SCREEN + '"]').each(function() {
			var $screen = $(this);
			currentOptionsScreens.push({
				value: $screen.attr('id'),
				text: (SM.I18n.getTrans("i.ScreenOption", {number: $screen.attr('slidenumber')}))
			});
		});

		$actionTemplateDiv.find("div.actionParamsScreen select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			$.each(currentOptionsScreens, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});

		$actionTemplateDiv.find("div.actionParamsScreenReplacement select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			$.each(currentOptionsScreens, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});

		//Fill action template with current views
		var currentOptionsViews = [];
		var currentOptionsScreenViews = [];
		var currentOptionsImageViews = [];

		var $currentScreen = $(SM.Screen.getCurrentScreen());
		var currentScreenId = $currentScreen.attr('id');
		$("article[type='screen'] > article").each(function(){
			var $view = $(this);
			var $screen = $(this).parent();
			var option = {
				value: $view.attr('id'),
				text: (SM.I18n.getTrans("i.ViewOption", {screenNumber: $screen.attr('slidenumber'), viewNumber: $view.attr('slidenumber')}))
			};
			currentOptionsViews.push(option);

			if($screen.attr('id') === currentScreenId){
				currentOptionsScreenViews.push(option);
			}
			if($view.attr("type") === SM.Constant.VIEW_IMAGE){
				currentOptionsImageViews.push(option);
			}
		});

		var viewsForActionParamsView;
		if(elType === "SCENE"){
			viewsForActionParamsView = currentOptionsViews;
		} else {
			viewsForActionParamsView = currentOptionsScreenViews;
		}

		$actionTemplateDiv.find("div.actionParamsView select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			$.each(viewsForActionParamsView, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});

		//Fill action template with current slides
		$actionTemplateDiv.find("div.actionEventParamsSlide select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			//Fill with screens
			$.each(currentOptionsScreens, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
			//Fill with views
			$.each(currentOptionsViews, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});

		//Fill action template with current slides with background (screens and image views)
		$actionTemplateDiv.find("div.actionParamsSlide select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			//Fill with screens
			$.each(currentOptionsScreens, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
			//Fill with views
			$.each(currentOptionsImageViews, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});
		
		//Fill action template with current hotspots
		var currentOptionsHotspotIds = [];
		$('img.hotspot').each(function() {
			var $hotspot = $(this);
			currentOptionsHotspotIds.push({
				value: $hotspot.attr('id'),
				text: $hotspot.attr('id')
			});
		});

		$actionTemplateDiv.find("div.actionParamsHotspotId select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			$.each(currentOptionsHotspotIds, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});

		//Fill action template with current hotzones
		var currentOptionsHotzonesIds = [];
		var slideData = SM.Editor.Marker.getSlideData();
		Object.keys(slideData).forEach((slideId, index) => {
			Object.keys(slideData[slideId].hotzones).forEach((hotzoneId, index) => {
				//var hotzone = slideData[slideId].hotzones[hotzoneId];
				currentOptionsHotzonesIds.push({
					value: hotzoneId,
					text: SM.Editor.Marker.getAliasForHotzone(hotzoneId)
				})
			});
		});

		$actionTemplateDiv.find("div.actionParamsHotzoneId select").each(function() {
			var $select = $(this);
			$select.empty();
			$select.append($('<option>', { value: "none", text: SM.I18n.getTrans("i.Unspecified") }))
			$.each(currentOptionsHotzonesIds, function(_, opt) {
				$select.append($("<option>", { value: opt.value, text: opt.text }));
			});
		});
	};

	var loadActions = function(container,elSettings,elType){
		//Remove prior actions
		$(container).find("div.actionWrapper:not(.actionWrapperTemplate)").remove();

		_refreshActionTemplate(elType);

		$(container).addClass("actions_container");
		if(typeof elType === "string"){
			$(container).addClass("actions_container_" + elType);
		}

		//Fill properties with settings
		if (Array.isArray(elSettings.actions) && elSettings.actions.length > 0) {
			for(var i=0; i<elSettings.actions.length; i++){
				var action = elSettings.actions[i];
				if((typeof action.actionType === "string")&&(action.actionType !== "none")){
					var $actionWrapper = addNewAction(container);

					//Action event
					if((typeof action.event !== "undefined")&&(typeof action.event.eventType === "string")&&(action.event.eventType !== "none")){
						$actionWrapper.find("select.actionEvent").val(action.event.eventType).trigger('change');
						if(typeof action.event.eventParams !== "undefined"){
							if(typeof action.event.eventParams.puzzleId === "string"){
								var $actionEventParamsPuzzleSelect = $actionWrapper.find("div.actionEventParamsPuzzle select");
								$actionEventParamsPuzzleSelect.val(action.event.eventParams.puzzleId);
							}

							if(typeof action.event.eventParams.slide === "string"){
								var $actionEventParamsSlideSelect = $actionWrapper.find("div.actionEventParamsSlide select");
								$actionEventParamsSlideSelect.val(action.event.eventParams.slide);
							}
						}
					}

					//Action type and params
					$actionWrapper.find("select.actionType").val(action.actionType).trigger('change');
					if(typeof action.actionParams !== "undefined"){
						if(typeof action.actionParams.screen === "string"){
							var $actionParamsScreenSelect = $actionWrapper.find("div.actionParamsScreen select");
							$actionParamsScreenSelect.val(action.actionParams.screen);
						}
						if(typeof action.actionParams.screenReplacement === "string"){
							var $actionParamsScreenSelectReplacement = $actionWrapper.find("div.actionParamsScreenReplacement select");
							$actionParamsScreenSelectReplacement.val(action.actionParams.screenReplacement);
						}
						if(typeof action.actionParams.view === "string"){
							var $actionParamsViewSelect = $actionWrapper.find("div.actionParamsView select");
							$actionParamsViewSelect.val(action.actionParams.view);
						}
						if(typeof action.actionParams.slide === "string"){
							var $actionParamsSlideSelect = $actionWrapper.find("div.actionParamsSlide select");
							$actionParamsSlideSelect.val(action.actionParams.slide);
						}
						if(typeof action.actionParams.text === "string"){
							var $actionParamsTextAreaText = $actionWrapper.find("div.actionParamsText textarea");
							$actionParamsTextAreaText.val(action.actionParams.text);
						}
						if(typeof action.actionParams.url === "string"){
							var $actionParamsUrlInput = $actionWrapper.find("div.actionParamsURL input");
							$actionParamsUrlInput.val(action.actionParams.url);
						}
						if(typeof action.actionParams.hotspotId === "string"){
							var $actionParamsHotspotIdSelect = $actionWrapper.find("div.actionParamsHotspotId select");
							$actionParamsHotspotIdSelect.val(action.actionParams.hotspotId);
						}
						if(typeof action.actionParams.hotzoneId === "string"){
							var $actionParamsHotzoneIdSelect = $actionWrapper.find("div.actionParamsHotzoneId select");
							$actionParamsHotzoneIdSelect.val(action.actionParams.hotzoneId);
						}
						if(typeof action.actionParams.puzzleId === "string"){
							var $actionParamsPuzzleSelect = $actionWrapper.find("div.actionParamsPuzzle select");
							$actionParamsPuzzleSelect.val(action.actionParams.puzzleId);
							_onPuzzleChange(action.actionParams.puzzleId,$actionWrapper);
						}
					}
				}
			}	
		}
	};

	var addNewAction = function(container){
		var $actionWrapperDiv = $("div.actionWrapperTemplate").clone().removeClass("actionWrapperTemplate").show();
		var $container = $(container);

		if($container.hasClass("actions_container_SCENE")){
			//Limit available actions
			var availableActions = ["none","goToScreen","openView","showHotspot","hideHotspot","enableHotzone","disableHotzone","changeBackground","changeScreen","playSound","stopSound"];
			$actionWrapperDiv.find("select.actionType option").each(function() {
				var value = $(this).val();
				if (!availableActions.includes(value)) {
					$(this).remove();
				}
			});
		} else {
			//Hide events
			$actionWrapperDiv.find("div.setting_scene").remove();
		}

		$(container).append($actionWrapperDiv);
		return $actionWrapperDiv;
	};

	var onActionEventChange = function(event){
		var option = event.target.value;
		var $actionWrapperDiv = $(event.target).closest("div.actionWrapper");
		var $selectSlideWrapper = $actionWrapperDiv.find("div.actionEventParamsSlide");
		var $selectSlide = $selectSlideWrapper.find("select");
		var $selectPuzzleWrapper = $actionWrapperDiv.find("div.actionEventParamsPuzzle");
		var $selectPuzzle = $selectPuzzleWrapper.find("select");

		if(option === "puzzleSolved"){
			$selectPuzzle.prop("selectedIndex", 0);
			$selectPuzzleWrapper.show();
		} else {
			$selectPuzzleWrapper.hide();
		}

		if((option === "slideRevealedFirstTime")||(option === "slideRevealed")){
			$selectSlide.prop("selectedIndex", 0);
			$selectSlideWrapper.show();
		} else {
			$selectSlideWrapper.hide();
		}
	};

	var onActionTypeChange = function(event){
		var option = event.target.value;
		var $actionWrapperDiv = $(event.target).closest("div.actionWrapper");
		var $selectScreenWrapper = $actionWrapperDiv.find("div.actionParamsScreen");
		var $selectScreen = $selectScreenWrapper.find("select");
		var $selectScreenReplacementWrapper = $actionWrapperDiv.find("div.actionParamsScreenReplacement");
		var $selectScreenReplacement = $selectScreenReplacementWrapper.find("select");
		var $selectViewWrapper = $actionWrapperDiv.find("div.actionParamsView");
		var $selectView = $selectViewWrapper.find("select");
		var $selectSlideWrapper = $actionWrapperDiv.find("div.actionParamsSlide");
		var $selectSlide = $selectSlideWrapper.find("select");
		var $textAreaTextWrapper = $actionWrapperDiv.find("div.actionParamsText");
		var $textAreaText = $textAreaTextWrapper.find("textarea");
		var $inputURLWrapper = $actionWrapperDiv.find("div.actionParamsURL");
		var $inputURL = $inputURLWrapper.find("input");
		var $selectHotspotIdWrapper = $actionWrapperDiv.find("div.actionParamsHotspotId");
		var $selectHotspotId = $selectHotspotIdWrapper.find("select");
		var $selectHotzoneIdWrapper = $actionWrapperDiv.find("div.actionParamsHotzoneId");
		var $selectHotzoneId = $selectHotzoneIdWrapper.find("select");
		var $selectPuzzleWrapper = $actionWrapperDiv.find("div.actionParamsPuzzle");
		var $selectPuzzle = $selectPuzzleWrapper.find("select");
		var $inputPuzzleSolutionWrapper = $actionWrapperDiv.find("div.actionParamsPuzzleSolution");
		var $warningChangeBackgroundWrapper = $actionWrapperDiv.find("div.ActionWarningChangeBackground");

		if((option === "goToScreen")||(option === "changeScreen")){
			$selectScreen.prop("selectedIndex", 0);
			$selectScreenWrapper.show();
		} else {
			$selectScreenWrapper.hide();
		}
		if(option === "changeScreen"){
			$selectScreenReplacement.prop("selectedIndex", 0);
			$selectScreenReplacementWrapper.show();
		} else {
			$selectScreenReplacementWrapper.hide();
		}
		if(option === "openView"){
			$selectView.prop("selectedIndex", 0);
			$selectViewWrapper.show();
		} else {
			$selectViewWrapper.hide();
		}
		if(option === "changeBackground"){
			$selectSlide.prop("selectedIndex", 0);
			$selectSlideWrapper.show();
			$warningChangeBackgroundWrapper.show();
		} else {
			$selectSlideWrapper.hide();
			$warningChangeBackgroundWrapper.hide();
		}
		if(option === "showText"){
			$textAreaText.val("");
			$textAreaTextWrapper.show();
		} else {
			$textAreaTextWrapper.hide();
		}
		if((option === "openLink")||(option === "changeBackground")||(option === "playSound")||(option === "stopSound")){
			$inputURL.val("");
			$inputURLWrapper.show();
		} else {
			$inputURLWrapper.hide();
		}
		if((option === "showHotspot")||(option === "hideHotspot")){
			$selectHotspotId.prop("selectedIndex", 0);
			$selectHotspotIdWrapper.show();
		} else {
			$selectHotspotIdWrapper.hide();
		}
		if((option === "enableHotzone")||(option === "disableHotzone")){
			$selectHotzoneId.prop("selectedIndex", 0);
			$selectHotzoneIdWrapper.show();
		} else {
			$selectHotzoneIdWrapper.hide();
		}
		if(option === "solvePuzzle"){
			$selectPuzzle.prop("selectedIndex", 0);
			$selectPuzzleWrapper.show();
		} else {
			$selectPuzzleWrapper.hide();
		}
		$inputPuzzleSolutionWrapper.hide();
	};

	var onPuzzleChange = function(event){
		var option = event.target.value;
		var $actionWrapperDiv = $(event.target).closest("div.actionWrapper");
		_onPuzzleChange(option,$actionWrapperDiv);
	};

	var _onPuzzleChange = function(option, $actionWrapperDiv){
		var $inputPuzzleSolutionWrapper = $actionWrapperDiv.find("div.actionParamsPuzzleSolution");
		var $inputPuzzleSolution = $inputPuzzleSolutionWrapper.find("input");
		if(option !== "none"){
			var $actionContainer = $actionWrapperDiv.parent();
			var inputPuzzleSolutionVal = "";
			if ($actionContainer.hasClass("actions_container_HOTSPOT")) {
				inputPuzzleSolutionVal = $("#hotspotIdInput").val();
			} else if ($actionContainer.hasClass("actions_container_HOTZONE")) {
				inputPuzzleSolutionVal = $("#hotzoneIdInput").val();
			}
			$inputPuzzleSolution.val(inputPuzzleSolutionVal);
			$inputPuzzleSolutionWrapper.show();
		} else {
			$inputPuzzleSolution.val();
			$inputPuzzleSolutionWrapper.hide();
		}
	};

	var onDeleteAction = function(event){
		$(event.target).closest(".actionWrapper").remove();
	};

	var getActionsJSON = function(container){
		var actions = [];
		var actionsForScene = $(container).hasClass("actions_container_SCENE");
		$(container).find("div.actionWrapper").each(function(index, element) {
			var $actionWrapper = $(this);

			//Action type and params
			var actionType = $actionWrapper.find("select.actionType").val();
			if(actionType !== "none"){
				var action = {actionType: actionType, actionParams: {}};
				var $actionParamsScreenSelect = $actionWrapper.find("div.actionParamsScreen select");
				if($actionParamsScreenSelect.is(":visible")){
					action.actionParams.screen = $actionParamsScreenSelect.val();
				}
				var $actionParamsScreenReplacementSelect = $actionWrapper.find("div.actionParamsScreenReplacement select");
				if($actionParamsScreenReplacementSelect.is(":visible")){
					action.actionParams.screenReplacement = $actionParamsScreenReplacementSelect.val();
				}
				var $actionParamsViewSelect = $actionWrapper.find("div.actionParamsView select");
				if($actionParamsViewSelect.is(":visible")){
					action.actionParams.view = $actionParamsViewSelect.val();
				}
				var $actionParamsSlideSelect = $actionWrapper.find("div.actionParamsSlide select");
				if($actionParamsSlideSelect.is(":visible")){
					action.actionParams.slide = $actionParamsSlideSelect.val();
				}
				var $actionParamsTextAreaText = $actionWrapper.find("div.actionParamsText textarea");
				if($actionParamsTextAreaText.is(":visible")){
					action.actionParams.text = $actionParamsTextAreaText.val();
				}
				var $actionParamsUrlInput = $actionWrapper.find("div.actionParamsURL input");
				if($actionParamsUrlInput.is(":visible")){
					action.actionParams.url = SM.Editor.Utils.autocompleteUrls($actionParamsUrlInput.val());
				}
				var $actionParamsHotspotIdSelect = $actionWrapper.find("div.actionParamsHotspotId select");
				if($actionParamsHotspotIdSelect.is(":visible")){
					action.actionParams.hotspotId = $actionParamsHotspotIdSelect.val();
				}
				var $actionParamsHotzoneIdSelect = $actionWrapper.find("div.actionParamsHotzoneId select");
				if($actionParamsHotzoneIdSelect.is(":visible")){
					action.actionParams.hotzoneId = $actionParamsHotzoneIdSelect.val();
				}
				var $actionParamsPuzzleSelect = $actionWrapper.find("div.actionParamsPuzzle select");
				if($actionParamsPuzzleSelect.is(":visible")){
					action.actionParams.puzzleId = $actionParamsPuzzleSelect.val();
				}
				if (Object.keys(action.actionParams).length === 0) {
					delete action.actionParams;
				}

				//Event
				var eventType = $actionWrapper.find("select.actionEvent").val();
				if(eventType !== "none"){
					action.event = {eventType: eventType, eventParams: {}};
					var $actionEventParamsPuzzleSelect = $actionWrapper.find("div.actionEventParamsPuzzle select");
					if($actionEventParamsPuzzleSelect.is(":visible")){
						action.event.eventParams.puzzleId = $actionEventParamsPuzzleSelect.val();
					}
					var $actionEventParamsSlideSelect = $actionWrapper.find("div.actionEventParamsSlide select");
					if($actionEventParamsSlideSelect.is(":visible")){
						action.event.eventParams.slide = $actionEventParamsSlideSelect.val();
					}
				}
				
				if((actionsForScene)&&(typeof action.event === "undefined")){
					return;
				}

				actions.push(action);
			}
		});
		return actions;
	};

	return {
		init 					: init,
		loadActions				: loadActions,
		onActionEventChange		: onActionEventChange,
		onActionTypeChange		: onActionTypeChange,
		addNewAction			: addNewAction,
		onPuzzleChange			: onPuzzleChange,
		onDeleteAction			: onDeleteAction,
		getActionsJSON			: getActionsJSON
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Caption = (function(SM,$,undefined){
	var hiddenLinkToInitCaptionFancybox;

	var init = function(){
		hiddenLinkToInitCaptionFancybox = $('<a href="#caption_fancybox" style="display:none"></a>');
		$(hiddenLinkToInitCaptionFancybox).fancybox({
			'autoDimensions' : false,
			'height': 690,
			'width': 920,
			'scrolling': 'no',
			'showCloseButton': false,
			'padding' : 0,
			"onStart"  : function(data){
				_onStartCaptionFancybox();
			},
			"onComplete" : function(data){
			},
			"onClosed"  : function(data){
			}
		});
	};

	var _onStartCaptionFancybox = function(){
		var slideId = $(SM.Slides.getCurrentSlide()).attr("id");
		var slideData = SM.Editor.Marker.getSlideData();
		var caption = {};
		if((typeof slideData[slideId] !== "undefined")&&(typeof slideData[slideId].caption !== "undefined")){
			caption = slideData[slideId].caption;
		}

		//Text
		if(typeof caption.text === "string"){
			$("#captionText").val(caption.text);
		} else {
			$("#captionText").val("");
		}

		//Mode
		if(typeof caption.mode === "string"){
			$("#captionMode").val(caption.mode);
		} else {
			$("#captionMode").val("minimizable");
		}
	};

	var addCaption = function(){
		$(hiddenLinkToInitCaptionFancybox).trigger("click");
	};

	var onCaptionDone = function(event){
		var slideId = $(SM.Slides.getCurrentSlide()).attr("id");

		var caption = {};
		caption.text = $("#captionText").val();
		caption.mode = $("#captionMode").val();

		var slideData = SM.Editor.Marker.getSlideData();
		if(typeof slideData[slideId] === "undefined"){
			slideData[slideId] = SM.Editor.Marker.getDefaultSlideConfig();
		}
		slideData[slideId].caption = caption;
		SM.Editor.Marker.setSlideData(slideData);

		$.fancybox.close();
	};

	var loadCaption = function(slideId,captionJSON){
		if(_isValidCaption(captionJSON) === false){
			return;
		}
		var slideData = SM.Editor.Marker.getSlideData();
		if(typeof slideData[slideId] === "undefined"){
			slideData[slideId] = SM.Editor.Marker.getDefaultSlideConfig();
		}
		slideData[slideId].caption = captionJSON;
		SM.Editor.Marker.setSlideData(slideData);
	};

	var saveCaption = function(slideJSON){
		var slideData = SM.Editor.Marker.getSlideData();
		if((typeof slideData[slideJSON.id] !== "undefined")&&(_isValidCaption(slideData[slideJSON.id].caption))){
			slideJSON.caption = slideData[slideJSON.id].caption;
		}
		return slideJSON;
	};

	var _isValidCaption = function(caption){
		if(typeof caption !== "object"){
			return false;
		}
		if(typeof caption.text !== "string"){
			return false;
		}
		// if(caption.text.trim() === ""){
		// 	return false;
		// }
		return true;
	};

	return {
		init 			: init,
		addCaption 		: addCaption,
		onCaptionDone	: onCaptionDone,
		loadCaption		: loadCaption,
		saveCaption		: saveCaption
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Preview = (function(SM,$,undefined){

	var init = function(){
	};

	var preview = function(){
		var slideNumberToPreview = 1;
		if(typeof SM.PreviewPath !== "undefined"){
			$("#preview_action").attr("href", SM.PreviewPath + "#" + slideNumberToPreview);
		}
		window.SCENE_MAKER_OPTIONS_PREVIEW = JSON.parse(JSON.stringify(window.SCENE_MAKER_OPTIONS));
		window.SCENE_MAKER_OPTIONS_PREVIEW.preview = true;
		window.SCENE_MAKER_OPTIONS_PREVIEW.scene = SM.Editor.saveScene();

		_initFancybox();
		$("#preview_action").trigger('click');
	};

	var _initFancybox = function(){
		$("#preview_action").fancybox({
			'width'				: _getFancyboxDimensions().width,
			'height'			: _getFancyboxDimensions().height,
			'padding'			: 0,
			'autoScale'     	: false,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe',
			'onStart'			: function(){
				SM.Editor.Utils.Loader.unloadObjectsInEditorSlide(SM.Screen.getCurrentScreen());
			},
			'onClosed'			: function() {
				SM.Editor.Utils.Loader.loadObjectsInEditorSlide(SM.Screen.getCurrentScreen());
			},
			'onComplete': function() {
			}
		});
	};

	var _getFancyboxDimensions = function(){
		var dimensions = {};
		if($("body").attr("aspectRatio")==="16:9"){
			dimensions.width = 1000;
			dimensions.height = 670;
		} else {
			dimensions.width = 910;
			dimensions.height = 680;
		}
		return dimensions;
	};

	var getPreview = function(){
		return scenePreview;
	};

	return {
		init 			: init,
		preview 		: preview,
		getPreview 		: getPreview
	};

}) (SceneMaker, jQuery);

SceneMaker.Editor.Clipboard = (function(SM,$,undefined){

	var stack;
	var _lastTimestamp;
	var _localStorageKey = "SceneMakerClipboard";

	var init = function() {
		stack = [null,null,null];
		// stack = [ElementToCopy,typeOfElement,Params];
	};

	var copy = function(element) {
		if((!element)||(!SM.Slides.isScreen(element))){
			return;
		}

		stack[0] = SM.Utils.getOuterHTML($(element).clone()[0]);
		var params = {};
		//Store WYSIWYG values
		params.textAreas = SM.Editor.Slides.copyTextAreasOfSlide(element);
		stack[1] = params;
		
		if(SM.Status.getDevice().features.localStorage){
			localStorage.setItem(_localStorageKey,JSON.stringify(stack));
		}
	};

	var paste = function() {
		//Prevent massive copy
		if(_lastTimestamp){
			var elapsed = new Date().getTime() - _lastTimestamp;
			if(elapsed < 500){
				return;
			}
		}
		_lastTimestamp = new Date().getTime();

		//Select the stack
		if(SM.Status.getDevice().features.localStorage){
			var storedStack = localStorage.getItem(_localStorageKey);
			if(storedStack!==null){
				var myStack = JSON.parse(storedStack);
			}
		}

		if(!myStack){
			myStack = stack;
		}

		//Check selected stack and parse object to be copied
		if(!myStack[0]){
			return;
		} else {
			myStack[0] = $(myStack[0])[0];
		}

		//Copy screen
		var slideToCopy = $(myStack[0]).clone()[0];

		var options = {};
		if(myStack[1]){
			if(myStack[1].textAreas){
				options.textAreas = myStack[1].textAreas;
			}
		}
		SM.Editor.Screen.copyScreen(slideToCopy,options);
	};

	return {
			init 		: init,
			copy		: copy,
			paste		: paste
	};

}) (SceneMaker,jQuery);

/*
 * Events for the Editor (the events of the Viewer are handled in SceneMaker.Events.js)
 */
SceneMaker.Editor.Events = (function(SM,$,undefined){
	
	var _bindedEditorEventListeners = false;
	var _confirmOnExit;
	var _isCtrlKeyPressed = false;

	var init = function(){
		bindEditorEventListeners();
	};

	var bindEditorEventListeners = function(){
		if(!_bindedEditorEventListeners){
			$(document).on('click', '#addScreenButton', SM.Editor.Screen.onClickAddScreenButton);
			$(document).on('click', '#addViewButton', SM.Editor.View.onClickAddViewButton);
			$(document).on('click', '#screen_selected_img', SM.Editor.Screen.onClickOpenScreen);
					
			$(document).on('click', '#save_scene_details', SM.Editor.Settings.onSaveSceneSettingsButtonClicked);
			$(document).on('click','div.viewthumb', SM.Editor.onViewThumbClicked);

			$(document).on('click','.editable', SM.Editor.onEditableClicked);
			$(document).on('click','.selectable', SM.Editor.onSelectableClicked);
			$(document).on('click',':not(".selectable"):not(".preventNoselectable")', SM.Editor.onNoSelectableClicked);
			
			$(document).on('click','.delete_screen', SM.Editor.Screen.onDeleteScreenClicked);
			$(document).on('click','.delete_view', SM.Editor.View.onDeleteViewClicked);
			$(document).on('click','.delete_content', SM.Editor.onDeleteItemClicked);

			$(document).on("click", ".change_bg_button", SM.Editor.Tools.changeBackground);

			$(document).on("click", "#tab_pic_from_url_content button.button_addContent", SM.Editor.Image.addContent);
			$(document).on("click", "#tab_object_from_url_content button.button_addContent", SM.Editor.Object.drawPreviewElement);
			$(document).on("click", "#tab_video_from_url_content button.button_addContent", SM.Editor.Video.addContent);

			//Marker settings
			$(document).on("change", "#hotspotImageSource", SM.Editor.Marker.onHotspotImageSourceChange);
			$(document).on("click", "#hotspotImageGallery img", SM.Editor.Marker.onClickHotspotImageGallery);
			$(document).on("blur", "#hotspotImageURL", SM.Editor.Marker.checkHotspotImageURLPreview);
			$(document).on("input", "#hotspotSizeWidth", SM.Editor.Marker.onInputHotspotSizeWidth);
			$(document).on("input", "#hotspotSizeHeight", SM.Editor.Marker.onInputHotspotSizeHeight);
			$(document).on("click", "#hotspotSettingsDone", SM.Editor.Marker.onHotspotSettingsDone);
			$(document).on("click", "#hotzoneSettingsDone", SM.Editor.Marker.onHotzoneSettingsDone);

			//Actions
			$(document).on("click", "div.actions_container button.add_action", function(){
				SM.Editor.Actions.addNewAction($(this).closest("div.actions_container"));
			});
			$(document).on("change", "select.actionEvent", SM.Editor.Actions.onActionEventChange);
			$(document).on("change", "select.actionType", SM.Editor.Actions.onActionTypeChange);
			$(document).on("click", "div.delete_action", SM.Editor.Actions.onDeleteAction);
			$(document).on("change", "div.actionParamsPuzzle select", SM.Editor.Actions.onPuzzleChange);
			
			//Element settings
			$(document).on("click", "#objectSettingsDone", SM.Editor.Object.onObjectSettingsDone);

			//Captions
			$(document).on("click", "#captionDone", SM.Editor.Caption.onCaptionDone);

			$(document).on('click', handleClick);
			$(document).bind('keydown', handleBodyKeyDown);
			$(document).bind('keyup', handleBodyKeyUp);

			// Slide Enter and Leave events
			$('article').live('slideenter', SM.Editor.onSlideEnterEditor);
			$('article').live('slideleave', SM.Editor.onSlideLeaveEditor);

			//Waiting overlay
			$(document).on('click',"#waiting_overlay", function(event){
				event.stopPropagation();
				event.preventDefault();
			});

			$(window).on('orientationchange',function(){
				$(window).trigger('resize');
			});

			// //Focus
			// $(window).focus(function(){
			// }).blur(function(){
			// });

			//Fancyboxes

			// fancybox to create a new view
			$("a#addViewFancybox").fancybox({
				'autoDimensions' : false,
				'scrolling': 'no',
				'width': 800,
				'height': 740,
				'padding': 0,
				"onStart"  : function(data) {
					SM.Editor.setContentAddMode(SM.Constant.VIEW);
					var clickedZoneId = $(data).attr("zone");
					SM.Editor.setCurrentArea($("#" + clickedZoneId));
					SM.Editor.Utils.loadTab('tab_views');
				},
				"onClosed"  : function(data) {
					SM.Editor.setContentAddMode(SM.Constant.NONE);
				}
			});
			
			//Loading fancybox
			$("#fancyLoad").fancybox({
				'type'		   : 'inline',
				'autoDimensions' : false,
				'scrolling': 'no',
				'autoScale' : true,		      
				'width': '100%',
				'height': '100%',
				'padding': 0,
				'margin' : 0,
				'overlayOpacity': 0.0,
				'overlayColor' : "#fff",
				'showCloseButton'	: false,
				'onComplete'  : function(data) {
					SM.Utils.Loader.prepareFancyboxForFullLoading();
				},
				'onClosed' : function(data) {
				}
			});

			//Change background
			$("#hidden_button_to_change_slide_background").fancybox({
				'autoDimensions' : false,
				'width': 800,
				'scrolling': 'no',
				'height': 600,
				'padding' : 0,
				"onStart"  : function(data) {
					SM.Editor.Image.setAddContentMode(SM.Constant.SCREEN);
					SM.Editor.Utils.loadTab('tab_pic_from_url');
				},
				"onClosed"  : function(data) {
					SM.Editor.Image.setAddContentMode(SM.Constant.NONE);
				}
			});

			//onbeforeunload event
			window.onbeforeunload = _exitConfirmation;
			_confirmOnExit = true;

			_bindedEditorEventListeners = true;
		}
	};

	//////////////
	// Event Listeners
	//////////////
	var addZoneThumbsEvents = function(container){
		$(container).find("a.addpicture").fancybox({
			'autoDimensions' : false,
			'width': 800,
			'scrolling': 'no',
			'height': 600,
			'padding' : 0,
			"onStart"  : function(data) {
				//re-set the current area to the clicked zone, because maybe the user have clicked in another editable zone before this one
				var clickedZoneId = $(data).attr("zone");
				SM.Editor.setCurrentArea($("#" + clickedZoneId));
				SM.Editor.Image.setAddContentMode(SM.Constant.NONE);
				SM.Editor.Utils.loadTab('tab_pic_from_url');
			}
		});

		$(container).find("a.addobject").fancybox({
			'autoDimensions' : false,
			'width': 800,
			'height': 600,
			'scrolling': 'no',
			'padding' : 0,
			"onStart"  : function(data) {
				var clickedZoneId = $(data).attr("zone");
				SM.Editor.setCurrentArea($("#" + clickedZoneId));
				SM.Editor.Utils.loadTab('tab_object_from_url');
			},
			"onClosed"  : function(data){
				SM.Editor.Object.resetPreview("tab_object_from_url_content");
			}
		});

		$(container).find("a.addvideo").fancybox({
			'autoDimensions' : false,
			'width': 800,
			'scrolling': 'no',
			'height': 600,
			'padding' : 0,
			"onStart"  : function(data) {
				var clickedZoneId = $(data).attr("zone");
				SM.Editor.setCurrentArea($("#" + clickedZoneId));
				SM.Editor.Utils.loadTab(SM.Editor.Video.getDefaultTab());
			},
			"onClosed"  : function(data){
				SM.Editor.Object.resetPreview("tab_video_from_url_content");
			}
		});
	};


	//////////////
	// Event Listeners
	//////////////
	
	var handleClick = function(event){
		SM.Editor.Marker.onClick(event);
	};

	var handleBodyKeyDown = function(event){
		switch (event.keyCode) {
		case 39: // right arrow
			if(SM.Editor.Slides.isSlideFocused()){
				if(SM.Slides.isScreen(SM.Screen.getCurrentScreen())){
					SM.Editor.View.forwardOneView();
				}
				event.preventDefault();
			}
			break;
		case 40: //down arrow	    
			if(SM.Editor.Slides.isSlideFocused()){
				SM.Screen.forwardOneScreen();
				event.preventDefault();
			}
			break;
		case 37: // left arrow
			if(SM.Editor.Slides.isSlideFocused()){
				if(SM.Slides.isScreen(SM.Screen.getCurrentScreen())){
					SM.Editor.View.backwardOneView();
				}
				event.preventDefault();
			}
			break;
		case 38: //up arrow	
			if(SM.Editor.Slides.isSlideFocused()){
				SM.Screen.backwardOneScreen();
				event.preventDefault();    		
			}
			break;
		case 17: //ctrl key
			_isCtrlKeyPressed = true;
			break;	
		case 67: //cKey
			if(SM.Editor.Slides.isSlideFocused()){
				if(_isCtrlKeyPressed){
					if(SM.Screen.getCurrentScreenNumber()){
						SM.Editor.Clipboard.copy(SM.Screen.getCurrentScreen());
					}
				}
			}
			break;	
		case 86: //vKey
		    if(SM.Editor.Slides.isSlideFocused()){
			    if(_isCtrlKeyPressed){
			    	SM.Editor.Clipboard.paste();
		    	}
		    }
		    break;
		case 46: //Supr key
			if(SM.Editor.Slides.isSlideFocused()){
				SM.Editor.Slides.removeCurrentSlide();
			}
			break;	
		}
	};

	var handleBodyKeyUp = function(event) {
	  switch (event.keyCode) {
	    case 17: //ctrl key
	    	_isCtrlKeyPressed = false;
	    	break;	     
	  }
	};

	var _exitConfirmation = function(){
		if(_confirmOnExit){
			if(SM.Editor.hasSceneChanged()){
				var confirmationMsg = SM.I18n.getTrans("i.ExitConfirmation");
				return confirmationMsg;
			}
		}
	};

	var allowExitWithoutConfirmation = function(){
		_confirmOnExit = false;
	};

	return {
			init 							: init,
			bindEditorEventListeners		: bindEditorEventListeners,
			addZoneThumbsEvents				: addZoneThumbsEvents,
			allowExitWithoutConfirmation 	: allowExitWithoutConfirmation
	};

}) (SceneMaker,jQuery);
