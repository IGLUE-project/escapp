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


/**
 * @popperjs/core v2.11.8 - MIT License
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var u=(n(e)?t(e):window).visualViewport,l=!c()&&i,d=(a.left+(l&&u?u.offsetLeft:0))/f,h=(a.top+(l&&u?u.offsetTop:0))/p,m=a.width/f,v=a.height/p;return{width:m,height:v,top:h,right:d+m,bottom:h+v,left:d,x:d,y:h}}function u(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return t(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),m=d(n),y=p(e,c,o),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==l(n)||v(m))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:u(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):m&&(b.x=h(m))),{x:y.left+g.scrollLeft-b.x,y:y.top+g.scrollTop-b.y,width:y.width,height:y.height}}function g(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function x(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:r(e)&&v(e)?e:x(b(e))}function w(e,n){var r;void 0===n&&(n=[]);var o=x(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(w(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return r(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var n=t(e),i=j(e);i&&O(i)&&"static"===m(i).position;)i=j(i);return i&&("html"===l(i)||"body"===l(i)&&"static"===m(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&"fixed"===m(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(l(n))<0;){var i=m(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var D="top",A="bottom",L="right",P="left",M="auto",k=[D,A,L,P],W="start",B="end",H="viewport",T="popper",R=k.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),S=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function N(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function I(e,r,o){return r===H?N(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var u=c();(u||!u&&"fixed"===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+h(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):N(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function _(e,t,o,s){var f="clippingParents"===t?function(e){var t=w(b(e)),o=["absolute","fixed"].indexOf(m(e).position)>=0&&r(e)?E(e):e;return n(o)?t.filter((function(e){return n(e)&&C(e,o)&&"body"!==l(e)})):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],u=c.reduce((function(t,n){var r=I(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),I(e,p,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function F(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?"clippingParents":f,u=r.rootBoundary,l=void 0===u?H:u,h=r.elementContext,m=void 0===h?T:h,v=r.altBoundary,y=void 0!==v&&v,g=r.padding,b=void 0===g?0:g,x=Y("number"!=typeof b?b:G(b,k)),w=m===T?"reference":T,O=e.rects.popper,j=e.elements[y?w:m],E=_(n(j)?j:j.contextElement||d(e.elements.popper),c,l,s),P=p(e.elements.reference),M=X({reference:P,element:O,strategy:"absolute",placement:i}),W=N(Object.assign({},O,M)),B=m===T?W:P,R={top:E.top-B.top+x.top,bottom:B.bottom-E.bottom+x.bottom,left:E.left-B.left+x.left,right:B.right-E.right+x.right},S=e.modifiersData.offset;if(m===T&&S){var V=S[i];Object.keys(R).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";R[e]+=V[n]*t}))}return R}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?K:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?w(e):e.contextElement?w(e.contextElement):[],popper:w(t)};var s,p,d=function(e){var t=q(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(Q(t,n)){f.rects={reference:y(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&c.addEventListener("resize",r.update,$),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&c.removeEventListener("resize",r.update,$)}},data:{}};var te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,x="function"==typeof l?l({x:y,y:b}):{x:y,y:b};y=x.x,b=x.y;var w=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=P,M=D,k=window;if(u){var W=E(r),H="clientHeight",T="clientWidth";if(W===t(r)&&"static"!==m(W=d(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),W=W,i===D||(i===P||i===L)&&a===B)M=A,b-=(h&&W===k&&k.visualViewport?k.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===P||(i===D||i===A)&&a===B)j=L,y-=(h&&W===k&&k.visualViewport?k.visualViewport.width:W[T])-o.width,y*=p?1:-1}var R,S=Object.assign({position:c},u&&ne),V=!0===l?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:s(n*o)/o||0,y:s(r*o)/o||0}}({x:y,y:b},t(r)):{x:y,y:b};return y=V.x,b=V.y,p?Object.assign({},S,((R={})[M]=O?"0":"",R[j]=w?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=O?b+"px":"",n[j]=w?y+"px":"",n.transform="",n))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:F(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ie={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&l(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,p=U(r),u=p?s?R:R.filter((function(e){return U(e)===p})):k,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=F(v),g=f||(y===v||!h?[fe(v)]:function(e){if(F(e)===M)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(F(n)===M?ue(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var B=b[k],H=F(B),T=U(B)===W,R=[D,A].indexOf(H)>=0,S=R?"width":"height",V=J(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?T?L:P:T?A:D;x[S]>w[S]&&(q=fe(q));var C=fe(q),N=[];if(i&&N.push(V[H]<=0),s&&N.push(V[q]<=0,V[C]<=0),N.every((function(e){return e}))){E=B,j=!1;break}O.set(B,N)}if(j)for(var I=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},_=h?3:1;_>0;_--){if("break"===I(_))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function de(e,t,n){return i(e,a(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=J(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),x=F(t.placement),w=U(t.placement),O=!w,j=z(x),M="x"===j?"y":"x",k=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(s){var q,C="y"===j?D:P,N="y"===j?A:L,I="y"===j?"height":"width",_=k[j],X=_+b[C],Y=_-b[N],G=m?-H[I]/2:0,K=w===W?B[I]:H[I],Q=w===W?-H[I]:-B[I],Z=t.elements.arrow,$=m&&Z?g(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[C],ne=ee[N],re=de(0,B[I],$[I]),oe=O?B[I]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=O?-B[I]/2+G+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&E(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(q=null==S?void 0:S[j])?q:0,ce=_+ie-fe,pe=de(m?a(X,_+oe-fe-se):X,_,m?i(Y,ce):Y);k[j]=pe,V[j]=pe-_}if(c){var ue,le="x"===j?D:P,he="x"===j?A:L,me=k[M],ve="y"===M?"height":"width",ye=me+b[le],ge=me-b[he],be=-1!==[D,P].indexOf(x),xe=null!=(ue=null==S?void 0:S[M])?ue:0,we=be?ye:me-B[ve]-H[ve]-xe+R.altAxis,Oe=be?me+B[ve]+H[ve]-xe-R.altAxis:ge,je=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(we,me,Oe):de(m?we:ye,me,m?Oe:ge);k[M]=je,V[M]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=z(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,n),u=g(i),l="y"===f?D:P,d="y"===f?A:L,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,x=p[l],w=y-u[c]-p[d],O=y/2-u[c]/2+b,j=de(x,O,w),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&C(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[D,L,A,P].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ye(f),u=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},be=Z({defaultModifiers:[ee,te,oe,ie]}),xe=[ee,te,oe,ie,ae,le,he,me,ge],we=Z({defaultModifiers:xe});e.applyStyles=ie,e.arrow=me,e.computeStyles=oe,e.createPopper=we,e.createPopperLite=be,e.defaultModifiers=xe,e.detectOverflow=J,e.eventListeners=ee,e.flip=le,e.hide=ge,e.offset=ae,e.popperGenerator=Z,e.popperOffsets=te,e.preventOverflow=he,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper.min.js.map


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],t):(e=e||self).tippy=t(e.Popper)}(this,(function(e){"use strict";var t={passive:!0,capture:!0},n=function(){return document.body};function r(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function o(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function i(e,t){return"function"==typeof e?e.apply(void 0,t):e}function a(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function s(e,t){var n=Object.assign({},e);return t.forEach((function(e){delete n[e]})),n}function u(e){return[].concat(e)}function c(e,t){-1===e.indexOf(t)&&e.push(t)}function p(e){return e.split("-")[0]}function f(e){return[].slice.call(e)}function l(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function d(){return document.createElement("div")}function v(e){return["Element","Fragment"].some((function(t){return o(e,t)}))}function m(e){return o(e,"MouseEvent")}function g(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function h(e){return v(e)?[e]:function(e){return o(e,"NodeList")}(e)?f(e):Array.isArray(e)?e:f(document.querySelectorAll(e))}function b(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function y(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function w(e){var t,n=u(e)[0];return null!=n&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function E(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function O(e,t){for(var n=t;n;){var r;if(e.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var x={isTouch:!1},C=0;function T(){x.isTouch||(x.isTouch=!0,window.performance&&document.addEventListener("mousemove",A))}function A(){var e=performance.now();e-C<20&&(x.isTouch=!1,document.removeEventListener("mousemove",A)),C=e}function L(){var e=document.activeElement;if(g(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var D=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,R=Object.assign({appendTo:n,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),k=Object.keys(R);function P(e){var t=(e.plugins||[]).reduce((function(t,n){var r,o=n.name,i=n.defaultValue;o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=R[o])?r:i);return t}),{});return Object.assign({},e,t)}function j(e,t){var n=Object.assign({},t,{content:i(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(P(Object.assign({},R,{plugins:t}))):k).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},R.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function M(e,t){e.innerHTML=t}function V(e){var t=d();return!0===e?t.className="tippy-arrow":(t.className="tippy-svg-arrow",v(e)?t.appendChild(e):M(t,e)),t}function I(e,t){v(t.content)?(M(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?M(e,t.content):e.textContent=t.content)}function S(e){var t=e.firstElementChild,n=f(t.children);return{box:t,content:n.find((function(e){return e.classList.contains("tippy-content")})),arrow:n.find((function(e){return e.classList.contains("tippy-arrow")||e.classList.contains("tippy-svg-arrow")})),backdrop:n.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function N(e){var t=d(),n=d();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=d();function o(n,r){var o=S(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||I(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(V(r.arrow))):i.appendChild(V(r.arrow)):s&&i.removeChild(s)}return r.className="tippy-content",r.setAttribute("data-state","hidden"),I(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}N.$$tippy=!0;var B=1,H=[],U=[];function _(o,s){var v,g,h,C,T,A,L,k,M=j(o,Object.assign({},R,P(l(s)))),V=!1,I=!1,N=!1,_=!1,F=[],W=a(we,M.interactiveDebounce),X=B++,Y=(k=M.plugins).filter((function(e,t){return k.indexOf(e)===t})),$={id:X,reference:o,popper:d(),popperInstance:null,props:M,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:Y,clearDelayTimeouts:function(){clearTimeout(v),clearTimeout(g),cancelAnimationFrame(h)},setProps:function(e){if($.state.isDestroyed)return;ae("onBeforeUpdate",[$,e]),be();var t=$.props,n=j(o,Object.assign({},t,l(e),{ignoreAttributes:!0}));$.props=n,he(),t.interactiveDebounce!==n.interactiveDebounce&&(ce(),W=a(we,n.interactiveDebounce));t.triggerTarget&&!n.triggerTarget?u(t.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):n.triggerTarget&&o.removeAttribute("aria-expanded");ue(),ie(),J&&J(t,n);$.popperInstance&&(Ce(),Ae().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));ae("onAfterUpdate",[$,e])},setContent:function(e){$.setProps({content:e})},show:function(){var e=$.state.isVisible,t=$.state.isDestroyed,o=!$.state.isEnabled,a=x.isTouch&&!$.props.touch,s=r($.props.duration,0,R.duration);if(e||t||o||a)return;if(te().hasAttribute("disabled"))return;if(ae("onShow",[$],!1),!1===$.props.onShow($))return;$.state.isVisible=!0,ee()&&(z.style.visibility="visible");ie(),de(),$.state.isMounted||(z.style.transition="none");if(ee()){var u=re(),p=u.box,f=u.content;b([p,f],0)}A=function(){var e;if($.state.isVisible&&!_){if(_=!0,z.offsetHeight,z.style.transition=$.props.moveTransition,ee()&&$.props.animation){var t=re(),n=t.box,r=t.content;b([n,r],s),y([n,r],"visible")}se(),ue(),c(U,$),null==(e=$.popperInstance)||e.forceUpdate(),ae("onMount",[$]),$.props.animation&&ee()&&function(e,t){me(e,t)}(s,(function(){$.state.isShown=!0,ae("onShown",[$])}))}},function(){var e,t=$.props.appendTo,r=te();e=$.props.interactive&&t===n||"parent"===t?r.parentNode:i(t,[r]);e.contains(z)||e.appendChild(z);$.state.isMounted=!0,Ce()}()},hide:function(){var e=!$.state.isVisible,t=$.state.isDestroyed,n=!$.state.isEnabled,o=r($.props.duration,1,R.duration);if(e||t||n)return;if(ae("onHide",[$],!1),!1===$.props.onHide($))return;$.state.isVisible=!1,$.state.isShown=!1,_=!1,V=!1,ee()&&(z.style.visibility="hidden");if(ce(),ve(),ie(!0),ee()){var i=re(),a=i.box,s=i.content;$.props.animation&&(b([a,s],o),y([a,s],"hidden"))}se(),ue(),$.props.animation?ee()&&function(e,t){me(e,(function(){!$.state.isVisible&&z.parentNode&&z.parentNode.contains(z)&&t()}))}(o,$.unmount):$.unmount()},hideWithInteractivity:function(e){ne().addEventListener("mousemove",W),c(H,W),W(e)},enable:function(){$.state.isEnabled=!0},disable:function(){$.hide(),$.state.isEnabled=!1},unmount:function(){$.state.isVisible&&$.hide();if(!$.state.isMounted)return;Te(),Ae().forEach((function(e){e._tippy.unmount()})),z.parentNode&&z.parentNode.removeChild(z);U=U.filter((function(e){return e!==$})),$.state.isMounted=!1,ae("onHidden",[$])},destroy:function(){if($.state.isDestroyed)return;$.clearDelayTimeouts(),$.unmount(),be(),delete o._tippy,$.state.isDestroyed=!0,ae("onDestroy",[$])}};if(!M.render)return $;var q=M.render($),z=q.popper,J=q.onUpdate;z.setAttribute("data-tippy-root",""),z.id="tippy-"+$.id,$.popper=z,o._tippy=$,z._tippy=$;var G=Y.map((function(e){return e.fn($)})),K=o.hasAttribute("aria-expanded");return he(),ue(),ie(),ae("onCreate",[$]),M.showOnCreate&&Le(),z.addEventListener("mouseenter",(function(){$.props.interactive&&$.state.isVisible&&$.clearDelayTimeouts()})),z.addEventListener("mouseleave",(function(){$.props.interactive&&$.props.trigger.indexOf("mouseenter")>=0&&ne().addEventListener("mousemove",W)})),$;function Q(){var e=$.props.touch;return Array.isArray(e)?e:[e,0]}function Z(){return"hold"===Q()[0]}function ee(){var e;return!(null==(e=$.props.render)||!e.$$tippy)}function te(){return L||o}function ne(){var e=te().parentNode;return e?w(e):document}function re(){return S(z)}function oe(e){return $.state.isMounted&&!$.state.isVisible||x.isTouch||C&&"focus"===C.type?0:r($.props.delay,e?0:1,R.delay)}function ie(e){void 0===e&&(e=!1),z.style.pointerEvents=$.props.interactive&&!e?"":"none",z.style.zIndex=""+$.props.zIndex}function ae(e,t,n){var r;(void 0===n&&(n=!0),G.forEach((function(n){n[e]&&n[e].apply(n,t)})),n)&&(r=$.props)[e].apply(r,t)}function se(){var e=$.props.aria;if(e.content){var t="aria-"+e.content,n=z.id;u($.props.triggerTarget||o).forEach((function(e){var r=e.getAttribute(t);if($.state.isVisible)e.setAttribute(t,r?r+" "+n:n);else{var o=r&&r.replace(n,"").trim();o?e.setAttribute(t,o):e.removeAttribute(t)}}))}}function ue(){!K&&$.props.aria.expanded&&u($.props.triggerTarget||o).forEach((function(e){$.props.interactive?e.setAttribute("aria-expanded",$.state.isVisible&&e===te()?"true":"false"):e.removeAttribute("aria-expanded")}))}function ce(){ne().removeEventListener("mousemove",W),H=H.filter((function(e){return e!==W}))}function pe(e){if(!x.isTouch||!N&&"mousedown"!==e.type){var t=e.composedPath&&e.composedPath()[0]||e.target;if(!$.props.interactive||!O(z,t)){if(u($.props.triggerTarget||o).some((function(e){return O(e,t)}))){if(x.isTouch)return;if($.state.isVisible&&$.props.trigger.indexOf("click")>=0)return}else ae("onClickOutside",[$,e]);!0===$.props.hideOnClick&&($.clearDelayTimeouts(),$.hide(),I=!0,setTimeout((function(){I=!1})),$.state.isMounted||ve())}}}function fe(){N=!0}function le(){N=!1}function de(){var e=ne();e.addEventListener("mousedown",pe,!0),e.addEventListener("touchend",pe,t),e.addEventListener("touchstart",le,t),e.addEventListener("touchmove",fe,t)}function ve(){var e=ne();e.removeEventListener("mousedown",pe,!0),e.removeEventListener("touchend",pe,t),e.removeEventListener("touchstart",le,t),e.removeEventListener("touchmove",fe,t)}function me(e,t){var n=re().box;function r(e){e.target===n&&(E(n,"remove",r),t())}if(0===e)return t();E(n,"remove",T),E(n,"add",r),T=r}function ge(e,t,n){void 0===n&&(n=!1),u($.props.triggerTarget||o).forEach((function(r){r.addEventListener(e,t,n),F.push({node:r,eventType:e,handler:t,options:n})}))}function he(){var e;Z()&&(ge("touchstart",ye,{passive:!0}),ge("touchend",Ee,{passive:!0})),(e=$.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(ge(e,ye),e){case"mouseenter":ge("mouseleave",Ee);break;case"focus":ge(D?"focusout":"blur",Oe);break;case"focusin":ge("focusout",Oe)}}))}function be(){F.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),F=[]}function ye(e){var t,n=!1;if($.state.isEnabled&&!xe(e)&&!I){var r="focus"===(null==(t=C)?void 0:t.type);C=e,L=e.currentTarget,ue(),!$.state.isVisible&&m(e)&&H.forEach((function(t){return t(e)})),"click"===e.type&&($.props.trigger.indexOf("mouseenter")<0||V)&&!1!==$.props.hideOnClick&&$.state.isVisible?n=!0:Le(e),"click"===e.type&&(V=!n),n&&!r&&De(e)}}function we(e){var t=e.target,n=te().contains(t)||z.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=p(o.placement),s=o.modifiersData.offset;if(!s)return!0;var u="bottom"===a?s.top.y:0,c="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,l="left"===a?s.right.x:0,d=t.top-r+u>i,v=r-t.bottom-c>i,m=t.left-n+f>i,g=n-t.right-l>i;return d||v||m||g}))}(Ae().concat(z).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:M}:null})).filter(Boolean),e)&&(ce(),De(e))}function Ee(e){xe(e)||$.props.trigger.indexOf("click")>=0&&V||($.props.interactive?$.hideWithInteractivity(e):De(e))}function Oe(e){$.props.trigger.indexOf("focusin")<0&&e.target!==te()||$.props.interactive&&e.relatedTarget&&z.contains(e.relatedTarget)||De(e)}function xe(e){return!!x.isTouch&&Z()!==e.type.indexOf("touch")>=0}function Ce(){Te();var t=$.props,n=t.popperOptions,r=t.placement,i=t.offset,a=t.getReferenceClientRect,s=t.moveTransition,u=ee()?S(z).arrow:null,c=a?{getBoundingClientRect:a,contextElement:a.contextElement||te()}:o,p=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(ee()){var n=re().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];ee()&&u&&p.push({name:"arrow",options:{element:u,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),$.popperInstance=e.createPopper(c,z,Object.assign({},n,{placement:r,onFirstUpdate:A,modifiers:p}))}function Te(){$.popperInstance&&($.popperInstance.destroy(),$.popperInstance=null)}function Ae(){return f(z.querySelectorAll("[data-tippy-root]"))}function Le(e){$.clearDelayTimeouts(),e&&ae("onTrigger",[$,e]),de();var t=oe(!0),n=Q(),r=n[0],o=n[1];x.isTouch&&"hold"===r&&o&&(t=o),t?v=setTimeout((function(){$.show()}),t):$.show()}function De(e){if($.clearDelayTimeouts(),ae("onUntrigger",[$,e]),$.state.isVisible){if(!($.props.trigger.indexOf("mouseenter")>=0&&$.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&V)){var t=oe(!1);t?g=setTimeout((function(){$.state.isVisible&&$.hide()}),t):h=requestAnimationFrame((function(){$.hide()}))}}else ve()}}function F(e,n){void 0===n&&(n={});var r=R.plugins.concat(n.plugins||[]);document.addEventListener("touchstart",T,t),window.addEventListener("blur",L);var o=Object.assign({},n,{plugins:r}),i=h(e).reduce((function(e,t){var n=t&&_(t,o);return n&&e.push(n),e}),[]);return v(e)?i[0]:i}F.defaultProps=R,F.setDefaultProps=function(e){Object.keys(e).forEach((function(t){R[t]=e[t]}))},F.currentInput=x;var W=Object.assign({},e.applyStyles,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}}),X={mouseover:"mouseenter",focusin:"focus",click:"click"};var Y={name:"animateFill",defaultValue:!1,fn:function(e){var t;if(null==(t=e.props.render)||!t.$$tippy)return{};var n=S(e.popper),r=n.box,o=n.content,i=e.props.animateFill?function(){var e=d();return e.className="tippy-backdrop",y([e],"hidden"),e}():null;return{onCreate:function(){i&&(r.insertBefore(i,r.firstElementChild),r.setAttribute("data-animatefill",""),r.style.overflow="hidden",e.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var e=r.style.transitionDuration,t=Number(e.replace("ms",""));o.style.transitionDelay=Math.round(t/10)+"ms",i.style.transitionDuration=e,y([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&y([i],"hidden")}}}};var $={clientX:0,clientY:0},q=[];function z(e){var t=e.clientX,n=e.clientY;$={clientX:t,clientY:n}}var J={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,n=w(e.props.triggerTarget||t),r=!1,o=!1,i=!0,a=e.props;function s(){return"initial"===e.props.followCursor&&e.state.isVisible}function u(){n.addEventListener("mousemove",f)}function c(){n.removeEventListener("mousemove",f)}function p(){r=!0,e.setProps({getReferenceClientRect:null}),r=!1}function f(n){var r=!n.target||t.contains(n.target),o=e.props.followCursor,i=n.clientX,a=n.clientY,s=t.getBoundingClientRect(),u=i-s.left,c=a-s.top;!r&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),n=i,r=a;"initial"===o&&(n=e.left+u,r=e.top+c);var s="horizontal"===o?e.top:r,p="vertical"===o?e.right:n,f="horizontal"===o?e.bottom:r,l="vertical"===o?e.left:n;return{width:p-l,height:f-s,top:s,right:p,bottom:f,left:l}}})}function l(){e.props.followCursor&&(q.push({instance:e,doc:n}),function(e){e.addEventListener("mousemove",z)}(n))}function d(){0===(q=q.filter((function(t){return t.instance!==e}))).filter((function(e){return e.doc===n})).length&&function(e){e.removeEventListener("mousemove",z)}(n)}return{onCreate:l,onDestroy:d,onBeforeUpdate:function(){a=e.props},onAfterUpdate:function(t,n){var i=n.followCursor;r||void 0!==i&&a.followCursor!==i&&(d(),i?(l(),!e.state.isMounted||o||s()||u()):(c(),p()))},onMount:function(){e.props.followCursor&&!o&&(i&&(f($),i=!1),s()||u())},onTrigger:function(e,t){m(t)&&($={clientX:t.clientX,clientY:t.clientY}),o="focus"===t.type},onHidden:function(){e.props.followCursor&&(p(),c(),i=!0)}}}};var G={name:"inlinePositioning",defaultValue:!1,fn:function(e){var t,n=e.reference;var r=-1,o=!1,i=[],a={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(o){var a=o.state;e.props.inlinePositioning&&(-1!==i.indexOf(a.placement)&&(i=[]),t!==a.placement&&-1===i.indexOf(a.placement)&&(i.push(a.placement),e.setProps({getReferenceClientRect:function(){return function(e){return function(e,t,n,r){if(n.length<2||null===e)return t;if(2===n.length&&r>=0&&n[0].left>n[1].right)return n[r]||t;switch(e){case"top":case"bottom":var o=n[0],i=n[n.length-1],a="top"===e,s=o.top,u=i.bottom,c=a?o.left:i.left,p=a?o.right:i.right;return{top:s,bottom:u,left:c,right:p,width:p-c,height:u-s};case"left":case"right":var f=Math.min.apply(Math,n.map((function(e){return e.left}))),l=Math.max.apply(Math,n.map((function(e){return e.right}))),d=n.filter((function(t){return"left"===e?t.left===f:t.right===l})),v=d[0].top,m=d[d.length-1].bottom;return{top:v,bottom:m,left:f,right:l,width:l-f,height:m-v};default:return t}}(p(e),n.getBoundingClientRect(),f(n.getClientRects()),r)}(a.placement)}})),t=a.placement)}};function s(){var t;o||(t=function(e,t){var n;return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat(((null==(n=e.popperOptions)?void 0:n.modifiers)||[]).filter((function(e){return e.name!==t.name})),[t])})}}(e.props,a),o=!0,e.setProps(t),o=!1)}return{onCreate:s,onAfterUpdate:s,onTrigger:function(t,n){if(m(n)){var o=f(e.reference.getClientRects()),i=o.find((function(e){return e.left-2<=n.clientX&&e.right+2>=n.clientX&&e.top-2<=n.clientY&&e.bottom+2>=n.clientY})),a=o.indexOf(i);r=a>-1?a:r}},onHidden:function(){r=-1}}}};var K={name:"sticky",defaultValue:!1,fn:function(e){var t=e.reference,n=e.popper;function r(t){return!0===e.props.sticky||e.props.sticky===t}var o=null,i=null;function a(){var s=r("reference")?(e.popperInstance?e.popperInstance.state.elements.reference:t).getBoundingClientRect():null,u=r("popper")?n.getBoundingClientRect():null;(s&&Q(o,s)||u&&Q(i,u))&&e.popperInstance&&e.popperInstance.update(),o=s,i=u,e.state.isMounted&&requestAnimationFrame(a)}return{onMount:function(){e.props.sticky&&a()}}}};function Q(e,t){return!e||!t||(e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left)}return F.setDefaultProps({plugins:[Y,J,G,K],render:N}),F.createSingleton=function(e,t){var n;void 0===t&&(t={});var r,o=e,i=[],a=[],c=t.overrides,p=[],f=!1;function l(){a=o.map((function(e){return u(e.props.triggerTarget||e.reference)})).reduce((function(e,t){return e.concat(t)}),[])}function v(){i=o.map((function(e){return e.reference}))}function m(e){o.forEach((function(t){e?t.enable():t.disable()}))}function g(e){return o.map((function(t){var n=t.setProps;return t.setProps=function(o){n(o),t.reference===r&&e.setProps(o)},function(){t.setProps=n}}))}function h(e,t){var n=a.indexOf(t);if(t!==r){r=t;var s=(c||[]).concat("content").reduce((function(e,t){return e[t]=o[n].props[t],e}),{});e.setProps(Object.assign({},s,{getReferenceClientRect:"function"==typeof s.getReferenceClientRect?s.getReferenceClientRect:function(){var e;return null==(e=i[n])?void 0:e.getBoundingClientRect()}}))}}m(!1),v(),l();var b={fn:function(){return{onDestroy:function(){m(!0)},onHidden:function(){r=null},onClickOutside:function(e){e.props.showOnCreate&&!f&&(f=!0,r=null)},onShow:function(e){e.props.showOnCreate&&!f&&(f=!0,h(e,i[0]))},onTrigger:function(e,t){h(e,t.currentTarget)}}}},y=F(d(),Object.assign({},s(t,["overrides"]),{plugins:[b].concat(t.plugins||[]),triggerTarget:a,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat((null==(n=t.popperOptions)?void 0:n.modifiers)||[],[W])})})),w=y.show;y.show=function(e){if(w(),!r&&null==e)return h(y,i[0]);if(!r||null!=e){if("number"==typeof e)return i[e]&&h(y,i[e]);if(o.indexOf(e)>=0){var t=e.reference;return h(y,t)}return i.indexOf(e)>=0?h(y,e):void 0}},y.showNext=function(){var e=i[0];if(!r)return y.show(0);var t=i.indexOf(r);y.show(i[t+1]||e)},y.showPrevious=function(){var e=i[i.length-1];if(!r)return y.show(e);var t=i.indexOf(r),n=i[t-1]||e;y.show(n)};var E=y.setProps;return y.setProps=function(e){c=e.overrides||c,E(e)},y.setInstances=function(e){m(!0),p.forEach((function(e){return e()})),o=e,m(!1),v(),l(),p=g(y),y.setProps({triggerTarget:a})},p=g(y),y},F.delegate=function(e,n){var r=[],o=[],i=!1,a=n.target,c=s(n,["target"]),p=Object.assign({},c,{trigger:"manual",touch:!1}),f=Object.assign({touch:R.touch},c,{showOnCreate:!0}),l=F(e,p);function d(e){if(e.target&&!i){var t=e.target.closest(a);if(t){var r=t.getAttribute("data-tippy-trigger")||n.trigger||R.trigger;if(!t._tippy&&!("touchstart"===e.type&&"boolean"==typeof f.touch||"touchstart"!==e.type&&r.indexOf(X[e.type])<0)){var s=F(t,f);s&&(o=o.concat(s))}}}}function v(e,t,n,o){void 0===o&&(o=!1),e.addEventListener(t,n,o),r.push({node:e,eventType:t,handler:n,options:o})}return u(l).forEach((function(e){var n=e.destroy,a=e.enable,s=e.disable;e.destroy=function(e){void 0===e&&(e=!0),e&&o.forEach((function(e){e.destroy()})),o=[],r.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),r=[],n()},e.enable=function(){a(),o.forEach((function(e){return e.enable()})),i=!1},e.disable=function(){s(),o.forEach((function(e){return e.disable()})),i=!0},function(e){var n=e.reference;v(n,"touchstart",d,t),v(n,"mouseover",d),v(n,"focusin",d),v(n,"click",d)}(e)})),l},F.hideAll=function(e){var t=void 0===e?{}:e,n=t.exclude,r=t.duration;U.forEach((function(e){var t=!1;if(n&&(t=g(n)?e.reference===n:e.popper===n.popper),!t){var o=e.props.duration;e.setProps({duration:r}),e.hide(),e.state.isDestroyed||e.setProps({duration:o})}}))},F.roundArrow='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',F}));
//# sourceMappingURL=tippy.umd.min.js.map


(()=>{var __webpack_modules__={20:(e,t,n)=>{!function(e){var t=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},n="notify",i="escapp_notifyjs",r=n+"!blank",o={t:"top",m:"middle",b:"bottom",l:"left",c:"center",r:"right"},s=["l","c","r"],a=["t","m","b"],c=["t","b","l","r"],u={t:"b",m:null,b:"t",l:"r",c:null,r:"l"},l=function(t){var n;return n=[],e.each(t.split(/\W+/),(function(e,t){var i;if(i=t.toLowerCase().charAt(0),o[i])return n.push(i)})),n},d={},f={name:"core",html:'<div class="'+i+'-wrapper">\n\t<div class="'+i+'-arrow"></div>\n\t<div class="'+i+'-container"></div>\n</div>',css:"."+i+"-corner {\n\tposition: fixed;\n\tmargin: 5px;\n\tz-index: 1050;\n}\n\n."+i+"-corner ."+i+"-wrapper,\n."+i+"-corner ."+i+"-container {\n\tposition: relative;\n\tdisplay: block;\n\theight: inherit;\n\twidth: inherit;\n\tmargin: 3px;\n}\n\n."+i+"-wrapper {\n\tz-index: 1;\n\tposition: absolute;\n\tdisplay: inline-block;\n\theight: 0;\n\twidth: 0;\n}\n\n."+i+"-container {\n\tdisplay: none;\n\tz-index: 1;\n\tposition: absolute;\n}\n\n."+i+"-hidable {\n\tcursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n\tposition: relative;\n}\n\n."+i+"-arrow {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 0;\n\theight: 0;\n}"},h={"border-radius":["-webkit-","-moz-"]},p=function(e){return d[e]},m=function(e){if(!e)throw"Missing Style name";d[e]&&delete d[e]},g=function(t,r){if(!t)throw"Missing Style name";if(!r)throw"Missing Style definition";if(!r.html)throw"Missing Style HTML";var o=d[t];o&&o.cssElem&&(window.console&&console.warn(n+": overwriting style '"+t+"'"),d[t].cssElem.remove()),r.name=t,d[t]=r;var s="";r.classes&&e.each(r.classes,(function(t,n){return s+="."+i+"-"+r.name+"-"+t+" {\n",e.each(n,(function(t,n){return h[t]&&e.each(h[t],(function(e,i){return s+="\t"+i+t+": "+n+";\n"})),s+="\t"+t+": "+n+";\n"})),s+="}\n"})),r.css&&(s+="/* styles for "+r.name+" */\n"+r.css),s&&(r.cssElem=y(s),r.cssElem.attr("id","notify-"+r.name));var a={},c=e(r.html);v("html",c,a),v("text",c,a),r.fields=a},y=function(t){var n;(n=S("style")).attr("type","text/css"),e("head").append(n);try{n.html(t)}catch(e){n[0].styleSheet.cssText=t}return n},v=function(t,n,i){var o;return"html"!==t&&(t="text"),b(n,"["+(o="data-notify-"+t)+"]").each((function(){var n;(n=e(this).attr(o))||(n=r),i[n]=t}))},b=function(e,t){return e.is(t)?e:e.find(t)},_={clickToHide:!0,autoHide:!0,autoHideDelay:5e3,arrowShow:!0,arrowSize:5,breakNewLines:!0,elementPosition:"bottom",globalPosition:"top right",style:"bootstrap",className:"error",showAnimation:"slideDown",showDuration:400,hideAnimation:"slideUp",hideDuration:200,gap:5},w=function(t,n){var i;return(i=function(){}).prototype=t,e.extend(!0,new i,n)},A=function(t){return e.extend(_,t)},S=function(t){return e("<"+t+"></"+t+">")},E={},x=function(t){var n;return t.is("[type=radio]")&&(n=t.parents("form:first").find("[type=radio]").filter((function(n,i){return e(i).attr("name")===t.attr("name")})),t=n.first()),t},k=function(e,t,n){var i;if("string"==typeof n)n=parseInt(n,10);else if("number"!=typeof n)return;if(!isNaN(n))return i=o[u[t.charAt(0)]],void 0!==e[i]&&(t=o[i.charAt(0)],n=-n),void 0===e[t]?e[t]=n:e[t]+=n,null},T=function(e,t,n){if("l"===e||"t"===e)return 0;if("c"===e||"m"===e)return n/2-t/2;if("r"===e||"b"===e)return n-t;throw"Invalid alignment"},C=function(e){return C.e=C.e||S("div"),C.e.text(e).html()};function R(t,n,r){"string"==typeof r&&(r={className:r}),this.options=w(_,e.isPlainObject(r)?r:{}),this.loadHTML(),this.wrapper=e(f.html),this.options.clickToHide&&this.wrapper.addClass(i+"-hidable"),this.wrapper.data(i,this),this.arrow=this.wrapper.find("."+i+"-arrow"),this.container=this.wrapper.find("."+i+"-container"),this.container.append(this.userContainer),t&&t.length&&(this.elementType=t.attr("type"),this.originalElement=t,this.elem=x(t),this.elem.data(i,this),this.elem.before(this.wrapper)),this.container.hide(),this.run(n)}R.prototype.loadHTML=function(){var t;t=this.getStyle(),this.userContainer=e(t.html),this.userFields=t.fields},R.prototype.show=function(e,t){var n,i,r,o,s,a;if(a=this,i=function(){if(e||a.elem||a.destroy(),t)return t()},s=this.container.parent().parents(":hidden").length>0,r=this.container.add(this.arrow),n=[],s&&e)o="show";else if(s&&!e)o="hide";else if(!s&&e)o=this.options.showAnimation,n.push(this.options.showDuration);else{if(s||e)return i();o=this.options.hideAnimation,n.push(this.options.hideDuration)}return n.push(i),r[o].apply(r,n)},R.prototype.setGlobalPosition=function(){var t=this.getPosition(),n=t[0],r=t[1],s=o[n],a=o[r],c=n+"|"+r,u=E[c];if(!u||!document.body.contains(u[0])){u=E[c]=S("div");var l={};l[s]=0,"middle"===a?l.top="45%":"center"===a?l.left="45%":l[a]=0,u.css(l).addClass(i+"-corner"),e("body").append(u)}return u.prepend(this.wrapper)},R.prototype.setElementPosition=function(){var n,i,r,l,d,f,h,p,m,g,y,v,b,_,w,A,S,E,x,C,R,O,M,P,N,z,j,F;for(M=(z=this.getPosition())[0],O=z[1],z[2],y=this.elem.position(),p=this.elem.outerHeight(),v=this.elem.outerWidth(),m=this.elem.innerHeight(),g=this.elem.innerWidth(),F=this.wrapper.position(),d=this.container.height(),f=this.container.width(),E=o[M],C=u[M],(h={})[R=o[C]]="b"===M?p:"r"===M?v:0,k(h,"top",y.top-F.top),k(h,"left",y.left-F.left),_=0,A=(j=["top","left"]).length;_<A;_++)P=j[_],(x=parseInt(this.elem.css("margin-"+P),10))&&k(h,P,x);if(b=Math.max(0,this.options.gap-(this.options.arrowShow?r:0)),k(h,R,b),this.options.arrowShow){for(r=this.options.arrowSize,i=e.extend({},h),n=this.userContainer.css("border-color")||this.userContainer.css("border-top-color")||this.userContainer.css("background-color")||"white",w=0,S=c.length;w<S;w++)P=c[w],N=o[P],P!==C&&(l=N===E?n:"transparent",i["border-"+N]=r+"px solid "+l);k(h,o[C],r),t.call(c,O)>=0&&k(i,o[O],2*r)}else this.arrow.hide();if(t.call(a,M)>=0?(k(h,"left",T(O,f,v)),i&&k(i,"left",T(O,r,g))):t.call(s,M)>=0&&(k(h,"top",T(O,d,p)),i&&k(i,"top",T(O,r,m))),this.container.is(":visible")&&(h.display="block"),this.container.removeAttr("style").css(h),i)return this.arrow.removeAttr("style").css(i)},R.prototype.getPosition=function(){var e,n,i,r,o,u,d,f;if(f=this.options.position||(this.elem?this.options.elementPosition:this.options.globalPosition),0===(e=l(f)).length&&(e[0]="b"),n=e[0],t.call(c,n)<0)throw"Must be one of ["+c+"]";return(1===e.length||(i=e[0],t.call(a,i)>=0&&(r=e[1],t.call(s,r)<0))||(o=e[0],t.call(s,o)>=0&&(u=e[1],t.call(a,u)<0)))&&(e[1]=(d=e[0],t.call(s,d)>=0?"m":"l")),2===e.length&&(e[2]=e[1]),e},R.prototype.getStyle=function(e){var t;if(e||(e=this.options.style),e||(e="default"),!(t=d[e]))throw"Missing style: "+e;return t},R.prototype.updateClasses=function(){var t,n;return t=["base"],e.isArray(this.options.className)?t=t.concat(this.options.className):this.options.className&&t.push(this.options.className),n=this.getStyle(),t=e.map(t,(function(e){return i+"-"+n.name+"-"+e})).join(" "),this.userContainer.attr("class",t)},R.prototype.run=function(t,n){var i,o,s,a,c;if(e.isPlainObject(n)?e.extend(this.options,n):"string"===e.type(n)&&(this.options.className=n),!this.container||t){if(this.container||t){for(s in o={},e.isPlainObject(t)?o=t:o[r]=t,o)i=o[s],(a=this.userFields[s])&&("text"===a&&(i=C(i),this.options.breakNewLines&&(i=i.replace(/\n/g,"<br/>"))),c=s===r?"":"="+s,b(this.userContainer,"[data-notify-"+a+c+"]").html(i));this.updateClasses(),this.elem?this.setElementPosition():this.setGlobalPosition(),this.show(!0),this.options.autoHide&&(clearTimeout(this.autohideTimer),this.autohideTimer=setTimeout(this.show.bind(this,!1),this.options.autoHideDelay))}}else this.show(!1)},R.prototype.destroy=function(){this.wrapper.data(i,null),this.wrapper.remove()},e[n]=function(t,i,r){return t&&t.nodeName||t.jquery?e(t)[n](i,r):(r=i,new R(null,i=t,r)),t},e.fn[n]=function(t,n){return e(this).each((function(){var r=x(e(this)).data(i);r&&r.destroy(),new R(e(this),t,n)})),this},e.extend(e[n],{defaults:A,addStyle:g,removeStyle:m,pluginOptions:_,getStyle:p,insertCSS:y}),g("bootstrap",{html:"<div>\n<span data-notify-text></span>\n</div>",classes:{base:{"font-weight":"bold",padding:"8px 15px 8px 14px","text-shadow":"0 1px 0 rgba(255, 255, 255, 0.5)","background-color":"#fcf8e3",border:"1px solid #fbeed5","border-radius":"4px","white-space":"nowrap","padding-left":"25px","background-repeat":"no-repeat","background-position":"3px 7px"},error:{color:"#B94A48","background-color":"#F2DEDE","border-color":"#EED3D7","background-image":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"},success:{color:"#468847","background-color":"#DFF0D8","border-color":"#D6E9C6","background-image":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"},info:{color:"#3A87AD","background-color":"#D9EDF7","border-color":"#BCE8F1","background-image":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"},warn:{color:"#C09853","background-color":"#FCF8E3","border-color":"#FBEED5","background-image":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"}}}),e((function(){y(f.css).attr("id","core-notify"),e(document).on("click","."+i+"-hidable",(function(t){e(this).trigger("notify-hide")})),e(document).on("notify-hide","."+i+"-wrapper",(function(t){var n=e(this).data(i);n&&n.show(!1)}))}))}(n(883))},33:function(e){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=90)}({17:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=n(18),r=function(){function e(){}return e.getFirstMatch=function(e,t){var n=t.match(e);return n&&n.length>0&&n[1]||""},e.getSecondMatch=function(e,t){var n=t.match(e);return n&&n.length>1&&n[2]||""},e.matchAndReturnConst=function(e,t,n){if(e.test(t))return n},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,n,i){void 0===i&&(i=!1);var r=e.getVersionPrecision(t),o=e.getVersionPrecision(n),s=Math.max(r,o),a=0,c=e.map([t,n],(function(t){var n=s-e.getVersionPrecision(t),i=t+new Array(n+1).join(".0");return e.map(i.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(i&&(a=s-Math.min(r,o)),s-=1;s>=a;){if(c[0][s]>c[1][s])return 1;if(c[0][s]===c[1][s]){if(s===a)return 0;s-=1}else if(c[0][s]<c[1][s])return-1}},e.map=function(e,t){var n,i=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)i.push(t(e[n]));return i},e.find=function(e,t){var n,i;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(n=0,i=e.length;n<i;n+=1){var r=e[n];if(t(r,n))return r}},e.assign=function(e){for(var t,n,i=e,r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];if(Object.assign)return Object.assign.apply(Object,[e].concat(o));var a=function(){var e=o[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){i[t]=e[t]}))};for(t=0,n=o.length;t<n;t+=1)a();return e},e.getBrowserAlias=function(e){return i.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return i.BROWSER_MAP[e]||""},e}();t.default=r,e.exports=t.default},18:function(e,t,n){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i,r=(i=n(91))&&i.__esModule?i:{default:i},o=n(18);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){}var t,n,i;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new r.default(e,t)},e.parse=function(e){return new r.default(e).getResult()},t=e,i=[{key:"BROWSER_MAP",get:function(){return o.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return o.ENGINE_MAP}},{key:"OS_MAP",get:function(){return o.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return o.PLATFORMS_MAP}}],(n=null)&&s(t.prototype,n),i&&s(t,i),e}();t.default=a,e.exports=t.default},91:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=c(n(92)),r=c(n(93)),o=c(n(94)),s=c(n(95)),a=c(n(17));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=a.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=a.default.find(r.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=a.default.find(o.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=a.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return a.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,n={},i=0,r={},o=0;if(Object.keys(e).forEach((function(t){var s=e[t];"string"==typeof s?(r[t]=s,o+=1):"object"==typeof s&&(n[t]=s,i+=1)})),i>0){var s=Object.keys(n),c=a.default.find(s,(function(e){return t.isOS(e)}));if(c){var u=this.satisfies(n[c]);if(void 0!==u)return u}var l=a.default.find(s,(function(e){return t.isPlatform(e)}));if(l){var d=this.satisfies(n[l]);if(void 0!==d)return d}}if(o>0){var f=Object.keys(r),h=a.default.find(f,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(r[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var n=this.getBrowserName().toLowerCase(),i=e.toLowerCase(),r=a.default.getBrowserTypeByAlias(i);return t&&r&&(i=r.toLowerCase()),i===n},t.compareVersion=function(e){var t=[0],n=e,i=!1,r=this.getBrowserVersion();if("string"==typeof r)return">"===e[0]||"<"===e[0]?(n=e.substr(1),"="===e[1]?(i=!0,n=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?n=e.substr(1):"~"===e[0]&&(i=!0,n=e.substr(1)),t.indexOf(a.default.compareVersions(r,n,i))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=u,e.exports=t.default},92:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i,r=(i=n(17))&&i.__esModule?i:{default:i},o=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},n=r.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},n=r.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},n=r.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},n=r.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},n=r.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},n=r.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},n=r.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},n=r.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=r.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},n=r.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},n=r.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},n=r.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},n=r.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},n=r.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},n=r.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},n=r.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},n=r.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},n=r.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},n=r.default.getFirstMatch(o,e)||r.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},n=r.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},n=r.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},n=r.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},n=r.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},n=r.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},n=r.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},n=r.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},n=r.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},n=r.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){var t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe:function(e){var t={name:"Android Browser"},n=r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},n=r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},n=r.default.getFirstMatch(o,e);return n&&(t.version=n),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:r.default.getFirstMatch(t,e),version:r.default.getSecondMatch(t,e)}}}];t.default=s,e.exports=t.default},93:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i,r=(i=n(17))&&i.__esModule?i:{default:i},o=n(18),s=[{test:[/Roku\/DVP/],describe:function(e){var t=r.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:o.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=r.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=r.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=r.default.getWindowsVersionName(t);return{name:o.OS_MAP.Windows,version:t,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:o.OS_MAP.iOS},n=r.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t}},{test:[/macintosh/i],describe:function(e){var t=r.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=r.default.getMacOSVersionName(t),i={name:o.OS_MAP.MacOS,version:t};return n&&(i.versionName=n),i}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=r.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:o.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),n=e.test(/android/i);return t&&n},describe:function(e){var t=r.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=r.default.getAndroidVersionName(t),i={name:o.OS_MAP.Android,version:t};return n&&(i.versionName=n),i}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=r.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:o.OS_MAP.WebOS};return t&&t.length&&(n.version=t),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=r.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||r.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||r.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:o.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=r.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=r.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:o.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:o.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=r.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.PlayStation4,version:t}}}];t.default=s,e.exports=t.default},94:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i,r=(i=n(17))&&i.__esModule?i:{default:i},o=n(18),s=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=r.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(n.model=t),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n},describe:function(e){var t=r.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}}];t.default=s,e.exports=t.default},95:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i,r=(i=n(17))&&i.__esModule?i:{default:i},o=n(18),s=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:o.ENGINE_MAP.Blink};var t=r.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:o.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:o.ENGINE_MAP.Trident},n=r.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:o.ENGINE_MAP.Presto},n=r.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:function(e){var t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n},describe:function(e){var t={name:o.ENGINE_MAP.Gecko},n=r.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:o.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:o.ENGINE_MAP.WebKit},n=r.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t}}];t.default=s,e.exports=t.default}})},329:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(n){return new Sha256(t,!0).update(n)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var n=0;n<OUTPUT_TYPES.length;++n){var i=OUTPUT_TYPES[n];t[i]=createOutputMethod(i,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(n,i){return new HmacSha256(n,t,!0).update(i)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,n){return t.create(e).update(n)};for(var n=0;n<OUTPUT_TYPES.length;++n){var i=OUTPUT_TYPES[n];t[i]=createHmacOutputMethod(i,e)}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function HmacSha256(e,t,n){var i,r=typeof e;if("string"===r){var o,s=[],a=e.length,c=0;for(i=0;i<a;++i)(o=e.charCodeAt(i))<128?s[c++]=o:o<2048?(s[c++]=192|o>>6,s[c++]=128|63&o):o<55296||o>=57344?(s[c++]=224|o>>12,s[c++]=128|o>>6&63,s[c++]=128|63&o):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++i)),s[c++]=240|o>>18,s[c++]=128|o>>12&63,s[c++]=128|o>>6&63,s[c++]=128|63&o);e=s}else{if("object"!==r)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var u=[],l=[];for(i=0;i<64;++i){var d=e[i]||0;u[i]=92^d,l[i]=54^d}Sha256.call(this,t,n),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}Sha256.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if("string"!==n){if("object"!==n)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0}for(var i,r,o=0,s=e.length,a=this.blocks;o<s;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),t)for(r=this.start;o<s&&r<64;++o)a[r>>2]|=e[o]<<SHIFT[3&r++];else for(r=this.start;o<s&&r<64;++o)(i=e.charCodeAt(o))<128?a[r>>2]|=i<<SHIFT[3&r++]:i<2048?(a[r>>2]|=(192|i>>6)<<SHIFT[3&r++],a[r>>2]|=(128|63&i)<<SHIFT[3&r++]):i<55296||i>=57344?(a[r>>2]|=(224|i>>12)<<SHIFT[3&r++],a[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],a[r>>2]|=(128|63&i)<<SHIFT[3&r++]):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++o)),a[r>>2]|=(240|i>>18)<<SHIFT[3&r++],a[r>>2]|=(128|i>>12&63)<<SHIFT[3&r++],a[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],a[r>>2]|=(128|63&i)<<SHIFT[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.block=a[16],this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296|0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e,t,n,i,r,o,s,a,c,u=this.h0,l=this.h1,d=this.h2,f=this.h3,h=this.h4,p=this.h5,m=this.h6,g=this.h7,y=this.blocks;for(e=16;e<64;++e)t=((r=y[e-15])>>>7|r<<25)^(r>>>18|r<<14)^r>>>3,n=((r=y[e-2])>>>17|r<<15)^(r>>>19|r<<13)^r>>>10,y[e]=y[e-16]+t+y[e-7]+n|0;for(c=l&d,e=0;e<64;e+=4)this.first?(this.is224?(o=300032,g=(r=y[0]-1413257819)-150054599|0,f=r+24177077|0):(o=704751109,g=(r=y[0]-210244248)-1521486534|0,f=r+143694565|0),this.first=!1):(t=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),i=(o=u&l)^u&d^c,g=f+(r=g+(n=(h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&p^~h&m)+K[e]+y[e])|0,f=r+(t+i)|0),t=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),i=(s=f&u)^f&l^o,m=d+(r=m+(n=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))+(g&h^~g&p)+K[e+1]+y[e+1])|0,t=((d=r+(t+i)|0)>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),i=(a=d&f)^d&u^s,p=l+(r=p+(n=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&g^~m&h)+K[e+2]+y[e+2])|0,t=((l=r+(t+i)|0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),i=(c=l&d)^l&f^a,h=u+(r=h+(n=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&m^~p&g)+K[e+3]+y[e+3])|0,u=r+(t+i)|0;this.h0=this.h0+u|0,this.h1=this.h1+l|0,this.h2=this.h2+d|0,this.h3=this.h3+f|0,this.h4=this.h4+h|0,this.h5=this.h5+p|0,this.h6=this.h6+m|0,this.h7=this.h7+g|0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,i=this.h3,r=this.h4,o=this.h5,s=this.h6,a=this.h7,c=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s];return this.is224||(c+=HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]),c},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,i=this.h3,r=this.h4,o=this.h5,s=this.h6,a=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24&255,n>>16&255,n>>8&255,255&n,i>>24&255,i>>16&255,i>>8&255,255&i,r>>24&255,r>>16&255,r>>8&255,255&r,o>>24&255,o>>16&255,o>>8&255,255&o,s>>24&255,s>>16&255,s>>8&255,255&s];return this.is224||c.push(a>>24&255,a>>16&255,a>>8&255,255&a),c},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},489:function(e,t,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
e.exports=function(){"use strict";function e(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}function t(e){return"function"==typeof e}var i=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,o=void 0,s=void 0,a=function(e,t){_[r]=e,_[r+1]=t,2===(r+=2)&&(s?s(w):S())};function c(e){s=e}function u(e){a=e}var l="undefined"!=typeof window?window:void 0,d=l||{},f=d.MutationObserver||d.WebKitMutationObserver,h="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),p="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function m(){return function(){return process.nextTick(w)}}function g(){return void 0!==o?function(){o(w)}:b()}function y(){var e=0,t=new f(w),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function v(){var e=new MessageChannel;return e.port1.onmessage=w,function(){return e.port2.postMessage(0)}}function b(){var e=setTimeout;return function(){return e(w,1)}}var _=new Array(1e3);function w(){for(var e=0;e<r;e+=2)(0,_[e])(_[e+1]),_[e]=void 0,_[e+1]=void 0;r=0}function A(){try{var e=Function("return this")().require("vertx");return o=e.runOnLoop||e.runOnContext,g()}catch(e){return b()}}var S=void 0;function E(e,t){var n=this,i=new this.constructor(T);void 0===i[k]&&K(i);var r=n._state;if(r){var o=arguments[r-1];a((function(){return U(r,i,o,n._result)}))}else L(n,i,e,t);return i}function x(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(T);return B(n,e),n}S=h?m():f?y():p?v():void 0===l?A():b();var k=Math.random().toString(36).substring(2);function T(){}var C=void 0,R=1,O=2;function M(){return new TypeError("You cannot resolve a promise with itself")}function P(){return new TypeError("A promises callback cannot return that same promise.")}function N(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function z(e,t,n){a((function(e){var i=!1,r=N(n,t,(function(n){i||(i=!0,t!==n?B(e,n):H(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function j(e,t){t._state===R?H(e,t._result):t._state===O?D(e,t._result):L(t,void 0,(function(t){return B(e,t)}),(function(t){return D(e,t)}))}function F(e,n,i){n.constructor===e.constructor&&i===E&&n.constructor.resolve===x?j(e,n):void 0===i?H(e,n):t(i)?z(e,n,i):H(e,n)}function B(t,n){if(t===n)D(t,M());else if(e(n)){var i=void 0;try{i=n.then}catch(e){return void D(t,e)}F(t,n,i)}else H(t,n)}function I(e){e._onerror&&e._onerror(e._result),q(e)}function H(e,t){e._state===C&&(e._result=t,e._state=R,0!==e._subscribers.length&&a(q,e))}function D(e,t){e._state===C&&(e._state=O,e._result=t,a(I,e))}function L(e,t,n,i){var r=e._subscribers,o=r.length;e._onerror=null,r[o]=t,r[o+R]=n,r[o+O]=i,0===o&&e._state&&a(q,e)}function q(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,o=e._result,s=0;s<t.length;s+=3)i=t[s],r=t[s+n],i?U(n,i,r,o):r(o);e._subscribers.length=0}}function U(e,n,i,r){var o=t(i),s=void 0,a=void 0,c=!0;if(o){try{s=i(r)}catch(e){c=!1,a=e}if(n===s)return void D(n,P())}else s=r;n._state!==C||(o&&c?B(n,s):!1===c?D(n,a):e===R?H(n,s):e===O&&D(n,s))}function W(e,t){try{t((function(t){B(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}var V=0;function X(){return V++}function K(e){e[k]=V++,e._state=void 0,e._result=void 0,e._subscribers=[]}function Y(){return new Error("Array Methods must be provided an Array")}var Q=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(T),this.promise[k]||K(this.promise),i(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?H(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&H(this.promise,this._result))):D(this.promise,Y())}return e.prototype._enumerate=function(e){for(var t=0;this._state===C&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===x){var r=void 0,o=void 0,s=!1;try{r=e.then}catch(e){s=!0,o=e}if(r===E&&e._state!==C)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===te){var a=new n(T);s?D(a,o):F(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(i(e),t)},e.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===C&&(this._remaining--,e===O?D(i,n):this._result[t]=n),0===this._remaining&&H(i,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;L(e,void 0,(function(e){return n._settledAt(R,t,e)}),(function(e){return n._settledAt(O,t,e)}))},e}();function G(e){return new Q(this,e).promise}function J(e){var t=this;return i(e)?new t((function(n,i){for(var r=e.length,o=0;o<r;o++)t.resolve(e[o]).then(n,i)})):new t((function(e,t){return t(new TypeError("You must pass an array to race."))}))}function Z(e){var t=new this(T);return D(t,e),t}function $(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ee(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var te=function(){function e(t){this[k]=X(),this._result=this._state=void 0,this._subscribers=[],T!==t&&("function"!=typeof t&&$(),this instanceof e?W(this,t):ee())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var n=this,i=n.constructor;return t(e)?n.then((function(t){return i.resolve(e()).then((function(){return t}))}),(function(t){return i.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();function ne(){var e=void 0;if(void 0!==n.g)e=n.g;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===i&&!t.cast)return}e.Promise=te}return te.prototype.then=E,te.all=G,te.race=J,te.resolve=x,te.reject=Z,te._setScheduler=c,te._setAsap=u,te._asap=a,te.polyfill=ne,te.Promise=te,te}()},491:(e,t,n)=>{n(581),e.exports=self.fetch.bind(self)},581:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DOMException:()=>w,Headers:()=>l,Request:()=>y,Response:()=>b,fetch:()=>A});var i="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n.g&&n.g||{},r={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};if(r.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function c(e){return"string"!=typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r.iterable&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){if(2!=e.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+e.length);this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(!e._noBody)return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function f(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function h(e){var t=new FileReader,n=f(t);return t.readAsArrayBuffer(e),n}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:r.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:r.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():r.arrayBuffer&&r.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||s(e))?this._bodyArrayBuffer=p(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=d(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}if(r.blob)return this.blob().then(h);throw new Error("could not read as ArrayBuffer")},this.text=function(){var e,t,n,i,r,o=d(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=f(t),i=/charset=([A-Za-z0-9_-]+)/.exec(e.type),r=i?i[1]:"utf-8",t.readAsText(e,r),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),i=0;i<t.length;i++)n[i]=String.fromCharCode(t[i]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(e,t){e=a(e),t=c(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},l.prototype.delete=function(e){delete this.map[a(e)]},l.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},l.prototype.set=function(e,t){this.map[a(e)]=c(t)},l.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},l.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),u(e)},l.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),u(e)},l.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),u(e)},r.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var g=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function y(e,t){if(!(this instanceof y))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,r,o=(t=t||{}).body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),g.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in i)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function v(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),i=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(r))}})),t}function b(e,t){if(!(this instanceof b))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},m.call(y.prototype),m.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var _=[301,302,303,307,308];b.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})};var w=i.DOMException;try{new w}catch(e){(w=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),w.prototype.constructor=w}function A(e,t){return new Promise((function(n,o){var s=new y(e,t);if(s.signal&&s.signal.aborted)return o(new w("Aborted","AbortError"));var u=new XMLHttpRequest;function d(){u.abort()}if(u.onload=function(){var e,t,i={statusText:u.statusText,headers:(e=u.getAllResponseHeaders()||"",t=new l,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var n=e.split(":"),i=n.shift().trim();if(i){var r=n.join(":").trim();try{t.append(i,r)}catch(e){console.warn("Response "+e.message)}}})),t)};0===s.url.indexOf("file://")&&(u.status<200||u.status>599)?i.status=200:i.status=u.status,i.url="responseURL"in u?u.responseURL:i.headers.get("X-Request-URL");var r="response"in u?u.response:u.responseText;setTimeout((function(){n(new b(r,i))}),0)},u.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},u.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request timed out"))}),0)},u.onabort=function(){setTimeout((function(){o(new w("Aborted","AbortError"))}),0)},u.open(s.method,function(e){try{return""===e&&i.location.href?i.location.href:e}catch(t){return e}}(s.url),!0),"include"===s.credentials?u.withCredentials=!0:"omit"===s.credentials&&(u.withCredentials=!1),"responseType"in u&&(r.blob?u.responseType="blob":r.arrayBuffer&&(u.responseType="arraybuffer")),t&&"object"==typeof t.headers&&!(t.headers instanceof l||i.Headers&&t.headers instanceof i.Headers)){var f=[];Object.getOwnPropertyNames(t.headers).forEach((function(e){f.push(a(e)),u.setRequestHeader(e,c(t.headers[e]))})),s.headers.forEach((function(e,t){-1===f.indexOf(t)&&u.setRequestHeader(t,e)}))}else s.headers.forEach((function(e,t){u.setRequestHeader(t,e)}));s.signal&&(s.signal.addEventListener("abort",d),u.onreadystatechange=function(){4===u.readyState&&s.signal.removeEventListener("abort",d)}),u.send(void 0===s._bodyInit?null:s._bodyInit)}))}A.polyfill=!0,i.fetch||(i.fetch=A,i.Headers=l,i.Request=y,i.Response=b)},883:function(e,t,n){var i;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */}e=n.nmd(e),function(t,n){"use strict";"object"==r(e)&&"object"==r(e.exports)?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(n,o){"use strict";var s=[],a=Object.getPrototypeOf,c=s.slice,u=s.flat?function(e){return s.flat.call(e)}:function(e){return s.concat.apply([],e)},l=s.push,d=s.indexOf,f={},h=f.toString,p=f.hasOwnProperty,m=p.toString,g=m.call(Object),y={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},b=function(e){return null!=e&&e===e.window},_=n.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function A(e,t,n){var i,r,o=(n=n||_).createElement("script");if(o.text=e,t)for(i in w)(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function S(e){return null==e?e+"":"object"==r(e)||"function"==typeof e?f[h.call(e)]||"object":r(e)}var E="3.7.1",x=/HTML$/i,k=function(e,t){return new k.fn.init(e,t)};function T(e){var t=!!e&&"length"in e&&e.length,n=S(e);return!v(e)&&!b(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}k.fn=k.prototype={jquery:E,constructor:k,length:0,toArray:function(){return c.call(this)},get:function(e){return null==e?c.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(e){return this.pushStack(k.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(k.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(k.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:s.sort,splice:s.splice},k.extend=k.fn.extend=function(){var e,t,n,i,o,s,a=arguments[0]||{},c=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[c]||{},c++),"object"==r(a)||v(a)||(a={}),c===u&&(a=this,c--);c<u;c++)if(null!=(e=arguments[c]))for(t in e)i=e[t],"__proto__"!==t&&a!==i&&(l&&i&&(k.isPlainObject(i)||(o=Array.isArray(i)))?(n=a[t],s=o&&!Array.isArray(n)?[]:o||k.isPlainObject(n)?n:{},o=!1,a[t]=k.extend(l,s,i)):void 0!==i&&(a[t]=i));return a},k.extend({expando:"jQuery"+(E+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==h.call(e)||(t=a(e))&&("function"!=typeof(n=p.call(t,"constructor")&&t.constructor)||m.call(n)!==g))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){A(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(T(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},text:function(e){var t,n="",i=0,r=e.nodeType;if(!r)for(;t=e[i++];)n+=k.text(t);return 1===r||11===r?e.textContent:9===r?e.documentElement.textContent:3===r||4===r?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(T(Object(e))?k.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:d.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!x.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},map:function(e,t,n){var i,r,o=0,s=[];if(T(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&s.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&s.push(r);return u(s)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=s[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}));var R=s.pop,O=s.sort,M=s.splice,P="[\\x20\\t\\r\\n\\f]",N=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g");k.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var z=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function j(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}k.escapeSelector=function(e){return(e+"").replace(z,j)};var F=_,B=l;!function(){var e,t,i,r,o,a,u,l,f,h,m=B,g=k.expando,v=0,b=0,_=ee(),w=ee(),A=ee(),S=ee(),E=function(e,t){return e===t&&(o=!0),0},x="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",T="(?:\\\\[\\da-fA-F]{1,6}"+P+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",z="\\["+P+"*("+T+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+T+"))|)"+P+"*\\]",j=":("+T+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+z+")*)|.*)\\)|)",I=new RegExp(P+"+","g"),H=new RegExp("^"+P+"*,"+P+"*"),D=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),L=new RegExp(P+"|>"),q=new RegExp(j),U=new RegExp("^"+T+"$"),W={ID:new RegExp("^#("+T+")"),CLASS:new RegExp("^\\.("+T+")"),TAG:new RegExp("^("+T+"|[*])"),ATTR:new RegExp("^"+z),PSEUDO:new RegExp("^"+j),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+x+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},V=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Y=/[+~]/,Q=new RegExp("\\\\[\\da-fA-F]{1,6}"+P+"?|\\\\([^\\r\\n\\f])","g"),G=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},J=function(){ce()},Z=fe((function(e){return!0===e.disabled&&C(e,"fieldset")}),{dir:"parentNode",next:"legend"});try{m.apply(s=c.call(F.childNodes),F.childNodes),s[F.childNodes.length].nodeType}catch(e){m={apply:function(e,t){B.apply(e,c.call(t))},call:function(e){B.apply(e,c.call(arguments,1))}}}function $(e,t,n,i){var r,o,s,c,u,d,h,p=t&&t.ownerDocument,v=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n;if(!i&&(ce(t),t=t||a,l)){if(11!==v&&(u=K.exec(e)))if(r=u[1]){if(9===v){if(!(s=t.getElementById(r)))return n;if(s.id===r)return m.call(n,s),n}else if(p&&(s=p.getElementById(r))&&$.contains(t,s)&&s.id===r)return m.call(n,s),n}else{if(u[2])return m.apply(n,t.getElementsByTagName(e)),n;if((r=u[3])&&t.getElementsByClassName)return m.apply(n,t.getElementsByClassName(r)),n}if(!(S[e+" "]||f&&f.test(e))){if(h=e,p=t,1===v&&(L.test(e)||D.test(e))){for((p=Y.test(e)&&ae(t.parentNode)||t)==t&&y.scope||((c=t.getAttribute("id"))?c=k.escapeSelector(c):t.setAttribute("id",c=g)),o=(d=le(e)).length;o--;)d[o]=(c?"#"+c:":scope")+" "+de(d[o]);h=d.join(",")}try{return m.apply(n,p.querySelectorAll(h)),n}catch(t){S(e,!0)}finally{c===g&&t.removeAttribute("id")}}}return ve(e.replace(N,"$1"),t,n,i)}function ee(){var e=[];return function n(i,r){return e.push(i+" ")>t.cacheLength&&delete n[e.shift()],n[i+" "]=r}}function te(e){return e[g]=!0,e}function ne(e){var t=a.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ie(e){return function(t){return C(t,"input")&&t.type===e}}function re(e){return function(t){return(C(t,"input")||C(t,"button"))&&t.type===e}}function oe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Z(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function se(e){return te((function(t){return t=+t,te((function(n,i){for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))}))}))}function ae(e){return e&&void 0!==e.getElementsByTagName&&e}function ce(e){var n,i=e?e.ownerDocument||e:F;return i!=a&&9===i.nodeType&&i.documentElement&&(u=(a=i).documentElement,l=!k.isXMLDoc(a),h=u.matches||u.webkitMatchesSelector||u.msMatchesSelector,u.msMatchesSelector&&F!=a&&(n=a.defaultView)&&n.top!==n&&n.addEventListener("unload",J),y.getById=ne((function(e){return u.appendChild(e).id=k.expando,!a.getElementsByName||!a.getElementsByName(k.expando).length})),y.disconnectedMatch=ne((function(e){return h.call(e,"*")})),y.scope=ne((function(){return a.querySelectorAll(":scope")})),y.cssHas=ne((function(){try{return a.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),y.getById?(t.filter.ID=function(e){var t=e.replace(Q,G);return function(e){return e.getAttribute("id")===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&l){var n=t.getElementById(e);return n?[n]:[]}}):(t.filter.ID=function(e){var t=e.replace(Q,G);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&l){var n,i,r,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),t.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},t.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&l)return t.getElementsByClassName(e)},f=[],ne((function(e){var t;u.appendChild(e).innerHTML="<a id='"+g+"' href='' disabled='disabled'></a><select id='"+g+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||f.push("\\["+P+"*(?:value|"+x+")"),e.querySelectorAll("[id~="+g+"-]").length||f.push("~="),e.querySelectorAll("a#"+g+"+*").length||f.push(".#.+[+~]"),e.querySelectorAll(":checked").length||f.push(":checked"),(t=a.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),u.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&f.push(":enabled",":disabled"),(t=a.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||f.push("\\["+P+"*name"+P+"*="+P+"*(?:''|\"\")")})),y.cssHas||f.push(":has"),f=f.length&&new RegExp(f.join("|")),E=function(e,t){if(e===t)return o=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!y.sortDetached&&t.compareDocumentPosition(e)===n?e===a||e.ownerDocument==F&&$.contains(F,e)?-1:t===a||t.ownerDocument==F&&$.contains(F,t)?1:r?d.call(r,e)-d.call(r,t):0:4&n?-1:1)}),a}for(e in $.matches=function(e,t){return $(e,null,null,t)},$.matchesSelector=function(e,t){if(ce(e),l&&!S[t+" "]&&(!f||!f.test(t)))try{var n=h.call(e,t);if(n||y.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){S(t,!0)}return 0<$(t,a,null,[e]).length},$.contains=function(e,t){return(e.ownerDocument||e)!=a&&ce(e),k.contains(e,t)},$.attr=function(e,n){(e.ownerDocument||e)!=a&&ce(e);var i=t.attrHandle[n.toLowerCase()],r=i&&p.call(t.attrHandle,n.toLowerCase())?i(e,n,!l):void 0;return void 0!==r?r:e.getAttribute(n)},$.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},k.uniqueSort=function(e){var t,n=[],i=0,s=0;if(o=!y.sortStable,r=!y.sortStable&&c.call(e,0),O.call(e,E),o){for(;t=e[s++];)t===e[s]&&(i=n.push(s));for(;i--;)M.call(e,n[i],1)}return r=null,e},k.fn.uniqueSort=function(){return this.pushStack(k.uniqueSort(c.apply(this)))},(t=k.expr={cacheLength:50,createPseudo:te,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Q,G),e[3]=(e[3]||e[4]||e[5]||"").replace(Q,G),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||$.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&$.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return W.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&q.test(n)&&(t=le(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Q,G).toLowerCase();return"*"===e?function(){return!0}:function(e){return C(e,t)}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&_(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=$.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&-1<r.indexOf(n):"$="===t?n&&r.slice(-n.length)===n:"~="===t?-1<(" "+r.replace(I," ")+" ").indexOf(n):"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,c){var u,l,d,f,h,p=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),b=!c&&!a,_=!1;if(m){if(o){for(;p;){for(d=t;d=d[p];)if(a?C(d,y):1===d.nodeType)return!1;h=p="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&b){for(_=(f=(u=(l=m[g]||(m[g]={}))[e]||[])[0]===v&&u[1])&&u[2],d=f&&m.childNodes[f];d=++f&&d&&d[p]||(_=f=0)||h.pop();)if(1===d.nodeType&&++_&&d===t){l[e]=[v,f,_];break}}else if(b&&(_=f=(u=(l=t[g]||(t[g]={}))[e]||[])[0]===v&&u[1]),!1===_)for(;(d=++f&&d&&d[p]||(_=f=0)||h.pop())&&(!(a?C(d,y):1===d.nodeType)||!++_||(b&&((l=d[g]||(d[g]={}))[e]=[v,_]),d!==t)););return(_-=r)===i||_%i==0&&0<=_/i}}},PSEUDO:function(e,n){var i,r=t.pseudos[e]||t.setFilters[e.toLowerCase()]||$.error("unsupported pseudo: "+e);return r[g]?r(n):1<r.length?(i=[e,e,"",n],t.setFilters.hasOwnProperty(e.toLowerCase())?te((function(e,t){for(var i,o=r(e,n),s=o.length;s--;)e[i=d.call(e,o[s])]=!(t[i]=o[s])})):function(e){return r(e,0,i)}):r}},pseudos:{not:te((function(e){var t=[],n=[],i=ye(e.replace(N,"$1"));return i[g]?te((function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}})),has:te((function(e){return function(t){return 0<$(e,t).length}})),contains:te((function(e){return e=e.replace(Q,G),function(t){return-1<(t.textContent||k.text(t)).indexOf(e)}})),lang:te((function(e){return U.test(e||"")||$.error("unsupported lang: "+e),e=e.replace(Q,G).toLowerCase(),function(t){var n;do{if(n=l?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===u},focus:function(e){return e===function(){try{return a.activeElement}catch(e){}}()&&a.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:oe(!1),disabled:oe(!0),checked:function(e){return C(e,"input")&&!!e.checked||C(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!t.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return V.test(e.nodeName)},button:function(e){return C(e,"input")&&"button"===e.type||C(e,"button")},text:function(e){var t;return C(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:se((function(){return[0]})),last:se((function(e,t){return[t-1]})),eq:se((function(e,t,n){return[n<0?n+t:n]})),even:se((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:se((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:se((function(e,t,n){var i;for(i=n<0?n+t:t<n?t:n;0<=--i;)e.push(i);return e})),gt:se((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}}).pseudos.nth=t.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=ie(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=re(e);function ue(){}function le(e,n){var i,r,o,s,a,c,u,l=w[e+" "];if(l)return n?0:l.slice(0);for(a=e,c=[],u=t.preFilter;a;){for(s in i&&!(r=H.exec(a))||(r&&(a=a.slice(r[0].length)||a),c.push(o=[])),i=!1,(r=D.exec(a))&&(i=r.shift(),o.push({value:i,type:r[0].replace(N," ")}),a=a.slice(i.length)),t.filter)!(r=W[s].exec(a))||u[s]&&!(r=u[s](r))||(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return n?a.length:a?$.error(e):w(e,c).slice(0)}function de(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function fe(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=b++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,c){var u,l,d=[v,a];if(c){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,c))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(l=t[g]||(t[g]={}),r&&C(t,r))t=t[i]||t;else{if((u=l[o])&&u[0]===v&&u[1]===a)return d[2]=u[2];if((l[o]=d)[2]=e(t,n,c))return!0}return!1}}function he(e){return 1<e.length?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function pe(e,t,n,i,r){for(var o,s=[],a=0,c=e.length,u=null!=t;a<c;a++)(o=e[a])&&(n&&!n(o,i,r)||(s.push(o),u&&t.push(a)));return s}function me(e,t,n,i,r,o){return i&&!i[g]&&(i=me(i)),r&&!r[g]&&(r=me(r,o)),te((function(o,s,a,c){var u,l,f,h,p=[],g=[],y=s.length,v=o||function(e,t,n){for(var i=0,r=t.length;i<r;i++)$(e,t[i],n);return n}(t||"*",a.nodeType?[a]:a,[]),b=!e||!o&&t?v:pe(v,p,e,a,c);if(n?n(b,h=r||(o?e:y||i)?[]:s,a,c):h=b,i)for(u=pe(h,g),i(u,[],a,c),l=u.length;l--;)(f=u[l])&&(h[g[l]]=!(b[g[l]]=f));if(o){if(r||e){if(r){for(u=[],l=h.length;l--;)(f=h[l])&&u.push(b[l]=f);r(null,h=[],u,c)}for(l=h.length;l--;)(f=h[l])&&-1<(u=r?d.call(o,f):p[l])&&(o[u]=!(s[u]=f))}}else h=pe(h===s?h.splice(y,h.length):h),r?r(null,s,h,c):m.apply(s,h)}))}function ge(e){for(var n,r,o,s=e.length,a=t.relative[e[0].type],c=a||t.relative[" "],u=a?1:0,l=fe((function(e){return e===n}),c,!0),f=fe((function(e){return-1<d.call(n,e)}),c,!0),h=[function(e,t,r){var o=!a&&(r||t!=i)||((n=t).nodeType?l(e,t,r):f(e,t,r));return n=null,o}];u<s;u++)if(r=t.relative[e[u].type])h=[fe(he(h),r)];else{if((r=t.filter[e[u].type].apply(null,e[u].matches))[g]){for(o=++u;o<s&&!t.relative[e[o].type];o++);return me(1<u&&he(h),1<u&&de(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(N,"$1"),r,u<o&&ge(e.slice(u,o)),o<s&&ge(e=e.slice(o)),o<s&&de(e))}h.push(r)}return he(h)}function ye(e,n){var r,o,s,c,u,d,f=[],h=[],p=A[e+" "];if(!p){for(n||(n=le(e)),r=n.length;r--;)(p=ge(n[r]))[g]?f.push(p):h.push(p);(p=A(e,(o=h,c=0<(s=f).length,u=0<o.length,d=function(e,n,r,d,f){var h,p,g,y=0,b="0",_=e&&[],w=[],A=i,S=e||u&&t.find.TAG("*",f),E=v+=null==A?1:Math.random()||.1,x=S.length;for(f&&(i=n==a||n||f);b!==x&&null!=(h=S[b]);b++){if(u&&h){for(p=0,n||h.ownerDocument==a||(ce(h),r=!l);g=o[p++];)if(g(h,n||a,r)){m.call(d,h);break}f&&(v=E)}c&&((h=!g&&h)&&y--,e&&_.push(h))}if(y+=b,c&&b!==y){for(p=0;g=s[p++];)g(_,w,n,r);if(e){if(0<y)for(;b--;)_[b]||w[b]||(w[b]=R.call(d));w=pe(w)}m.apply(d,w),f&&!e&&0<w.length&&1<y+s.length&&k.uniqueSort(d)}return f&&(v=E,i=A),_},c?te(d):d))).selector=e}return p}function ve(e,n,i,r){var o,s,a,c,u,d="function"==typeof e&&e,f=!r&&le(e=d.selector||e);if(i=i||[],1===f.length){if(2<(s=f[0]=f[0].slice(0)).length&&"ID"===(a=s[0]).type&&9===n.nodeType&&l&&t.relative[s[1].type]){if(!(n=(t.find.ID(a.matches[0].replace(Q,G),n)||[])[0]))return i;d&&(n=n.parentNode),e=e.slice(s.shift().value.length)}for(o=W.needsContext.test(e)?0:s.length;o--&&(a=s[o],!t.relative[c=a.type]);)if((u=t.find[c])&&(r=u(a.matches[0].replace(Q,G),Y.test(s[0].type)&&ae(n.parentNode)||n))){if(s.splice(o,1),!(e=r.length&&de(s)))return m.apply(i,r),i;break}}return(d||ye(e,f))(r,n,!l,i,!n||Y.test(e)&&ae(n.parentNode)||n),i}ue.prototype=t.filters=t.pseudos,t.setFilters=new ue,y.sortStable=g.split("").sort(E).join("")===g,ce(),y.sortDetached=ne((function(e){return 1&e.compareDocumentPosition(a.createElement("fieldset"))})),k.find=$,k.expr[":"]=k.expr.pseudos,k.unique=k.uniqueSort,$.compile=ye,$.select=ve,$.setDocument=ce,$.tokenize=le,$.escape=k.escapeSelector,$.getText=k.text,$.isXML=k.isXMLDoc,$.selectors=k.expr,$.support=k.support,$.uniqueSort=k.uniqueSort}();var I=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&k(e).is(n))break;i.push(e)}return i},H=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=k.expr.match.needsContext,L=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function q(e,t,n){return v(t)?k.grep(e,(function(e,i){return!!t.call(e,i,e)!==n})):t.nodeType?k.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?k.grep(e,(function(e){return-1<d.call(t,e)!==n})):k.filter(t,e,n)}k.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?k.find.matchesSelector(i,e)?[i]:[]:k.find.matches(e,k.grep(t,(function(e){return 1===e.nodeType})))},k.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(k(e).filter((function(){for(t=0;t<i;t++)if(k.contains(r[t],this))return!0})));for(n=this.pushStack([]),t=0;t<i;t++)k.find(e,r[t],n);return 1<i?k.uniqueSort(n):n},filter:function(e){return this.pushStack(q(this,e||[],!1))},not:function(e){return this.pushStack(q(this,e||[],!0))},is:function(e){return!!q(this,"string"==typeof e&&D.test(e)?k(e):e||[],!1).length}});var U,W=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||U,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:W.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:_,!0)),L.test(i[1])&&k.isPlainObject(t))for(i in t)v(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(r=_.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,U=k(_);var V=/^(?:parents|prev(?:Until|All))/,X={children:!0,contents:!0,next:!0,prev:!0};function K(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0}))},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&k(e);if(!D.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?d.call(k(e),this[0]):d.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return I(e,"parentNode")},parentsUntil:function(e,t,n){return I(e,"parentNode",n)},next:function(e){return K(e,"nextSibling")},prev:function(e){return K(e,"previousSibling")},nextAll:function(e){return I(e,"nextSibling")},prevAll:function(e){return I(e,"previousSibling")},nextUntil:function(e,t,n){return I(e,"nextSibling",n)},prevUntil:function(e,t,n){return I(e,"previousSibling",n)},siblings:function(e){return H((e.parentNode||{}).firstChild,e)},children:function(e){return H(e.firstChild)},contents:function(e){return null!=e.contentDocument&&a(e.contentDocument)?e.contentDocument:(C(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},(function(e,t){k.fn[e]=function(n,i){var r=k.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=k.filter(i,r)),1<this.length&&(X[e]||k.uniqueSort(r),V.test(e)&&r.reverse()),this.pushStack(r)}}));var Y=/[^\x20\t\r\n\f]+/g;function Q(e){return e}function G(e){throw e}function J(e,t,n,i){var r;try{e&&v(r=e.promise)?r.call(e).done(t).fail(n):e&&v(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},k.each(t.match(Y)||[],(function(e,t){n[t]=!0})),n):k.extend({},e);var i,r,o,s,a=[],c=[],u=-1,l=function(){for(s=s||e.once,o=i=!0;c.length;u=-1)for(r=c.shift();++u<a.length;)!1===a[u].apply(r[0],r[1])&&e.stopOnFalse&&(u=a.length,r=!1);e.memory||(r=!1),i=!1,s&&(a=r?[]:"")},d={add:function(){return a&&(r&&!i&&(u=a.length-1,c.push(r)),function t(n){k.each(n,(function(n,i){v(i)?e.unique&&d.has(i)||a.push(i):i&&i.length&&"string"!==S(i)&&t(i)}))}(arguments),r&&!i&&l()),this},remove:function(){return k.each(arguments,(function(e,t){for(var n;-1<(n=k.inArray(t,a,n));)a.splice(n,1),n<=u&&u--})),this},has:function(e){return e?-1<k.inArray(e,a):0<a.length},empty:function(){return a&&(a=[]),this},disable:function(){return s=c=[],a=r="",this},disabled:function(){return!a},lock:function(){return s=c=[],r||i||(a=r=""),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],c.push(t),i||l()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!o}};return d},k.extend({Deferred:function(e){var t=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return k.Deferred((function(n){k.each(t,(function(t,i){var r=v(e[i[4]])&&e[i[4]];s[i[1]]((function(){var e=r&&r.apply(this,arguments);e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)}))})),e=null})).promise()},then:function(e,i,o){var s=0;function a(e,t,i,o){return function(){var c=this,u=arguments,l=function(){var n,l;if(!(e<s)){if((n=i.apply(c,u))===t.promise())throw new TypeError("Thenable self-resolution");l=n&&("object"==r(n)||"function"==typeof n)&&n.then,v(l)?o?l.call(n,a(s,t,Q,o),a(s,t,G,o)):(s++,l.call(n,a(s,t,Q,o),a(s,t,G,o),a(s,t,Q,t.notifyWith))):(i!==Q&&(c=void 0,u=[n]),(o||t.resolveWith)(c,u))}},d=o?l:function(){try{l()}catch(n){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(n,d.error),s<=e+1&&(i!==G&&(c=void 0,u=[n]),t.rejectWith(c,u))}};e?d():(k.Deferred.getErrorHook?d.error=k.Deferred.getErrorHook():k.Deferred.getStackHook&&(d.error=k.Deferred.getStackHook()),n.setTimeout(d))}}return k.Deferred((function(n){t[0][3].add(a(0,n,v(o)?o:Q,n.notifyWith)),t[1][3].add(a(0,n,v(e)?e:Q)),t[2][3].add(a(0,n,v(i)?i:G))})).promise()},promise:function(e){return null!=e?k.extend(e,o):o}},s={};return k.each(t,(function(e,n){var r=n[2],a=n[5];o[n[1]]=r.add,a&&r.add((function(){i=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),r.add(n[3].fire),s[n[0]]=function(){return s[n[0]+"With"](this===s?void 0:this,arguments),this},s[n[0]+"With"]=r.fireWith})),o.promise(s),e&&e.call(s,s),s},when:function(e){var t=arguments.length,n=t,i=Array(n),r=c.call(arguments),o=k.Deferred(),s=function(e){return function(n){i[e]=this,r[e]=1<arguments.length?c.call(arguments):n,--t||o.resolveWith(i,r)}};if(t<=1&&(J(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||v(r[n]&&r[n].then)))return o.then();for(;n--;)J(r[n],s(n),o.reject);return o.promise()}});var Z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&Z.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){n.setTimeout((function(){throw e}))};var $=k.Deferred();function ee(){_.removeEventListener("DOMContentLoaded",ee),n.removeEventListener("load",ee),k.ready()}k.fn.ready=function(e){return $.then(e).catch((function(e){k.readyException(e)})),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||$.resolveWith(_,[k])}}),k.ready.then=$.then,"complete"===_.readyState||"loading"!==_.readyState&&!_.documentElement.doScroll?n.setTimeout(k.ready):(_.addEventListener("DOMContentLoaded",ee),n.addEventListener("load",ee));var te=function(e,t,n,i,r,o,s){var a=0,c=e.length,u=null==n;if("object"===S(n))for(a in r=!0,n)te(e,t,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,v(i)||(s=!0),u&&(s?(t.call(e,i),t=null):(u=t,t=function(e,t,n){return u.call(k(e),n)})),t))for(;a<c;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:u?t.call(e):c?t(e[0],n):o},ne=/^-ms-/,ie=/-([a-z])/g;function re(e,t){return t.toUpperCase()}function oe(e){return e.replace(ne,"ms-").replace(ie,re)}var se=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function ae(){this.expando=k.expando+ae.uid++}ae.uid=1,ae.prototype={cache:function(e){var t=e[this.expando];return t||(t={},se(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[oe(t)]=n;else for(i in t)r[oe(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][oe(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(oe):(t=oe(t))in i?[t]:t.match(Y)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||k.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var ce=new ae,ue=new ae,le=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,de=/[A-Z]/g;function fe(e,t,n){var i,r;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(de,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(r=n)||"false"!==r&&("null"===r?null:r===+r+""?+r:le.test(r)?JSON.parse(r):r)}catch(e){}ue.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return ue.hasData(e)||ce.hasData(e)},data:function(e,t,n){return ue.access(e,t,n)},removeData:function(e,t){ue.remove(e,t)},_data:function(e,t,n){return ce.access(e,t,n)},_removeData:function(e,t){ce.remove(e,t)}}),k.fn.extend({data:function(e,t){var n,i,o,s=this[0],a=s&&s.attributes;if(void 0===e){if(this.length&&(o=ue.get(s),1===s.nodeType&&!ce.get(s,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(i=a[n].name).indexOf("data-")&&(i=oe(i.slice(5)),fe(s,i,o[i]));ce.set(s,"hasDataAttrs",!0)}return o}return"object"==r(e)?this.each((function(){ue.set(this,e)})):te(this,(function(t){var n;if(s&&void 0===t)return void 0!==(n=ue.get(s,e))||void 0!==(n=fe(s,e))?n:void 0;this.each((function(){ue.set(this,e,t)}))}),null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each((function(){ue.remove(this,e)}))}}),k.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=ce.get(e,t),n&&(!i||Array.isArray(n)?i=ce.access(e,t,k.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),i=n.length,r=n.shift(),o=k._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,(function(){k.dequeue(e,t)}),o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ce.get(e,n)||ce.access(e,n,{empty:k.Callbacks("once memory").add((function(){ce.remove(e,[t+"queue",n])}))})}}),k.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?k.queue(this[0],e):void 0===t?this:this.each((function(){var n=k.queue(this,e,t);k._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&k.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){k.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=k.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=ce.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var he=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,pe=new RegExp("^(?:([+-])=|)("+he+")([a-z%]*)$","i"),me=["Top","Right","Bottom","Left"],ge=_.documentElement,ye=function(e){return k.contains(e.ownerDocument,e)},ve={composed:!0};ge.getRootNode&&(ye=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ve)===e.ownerDocument});var be=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ye(e)&&"none"===k.css(e,"display")};function _e(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return k.css(e,t,"")},c=a(),u=n&&n[3]||(k.cssNumber[t]?"":"px"),l=e.nodeType&&(k.cssNumber[t]||"px"!==u&&+c)&&pe.exec(k.css(e,t));if(l&&l[3]!==u){for(c/=2,u=u||l[3],l=+c||1;s--;)k.style(e,t,l+u),(1-o)*(1-(o=a()/c||.5))<=0&&(s=0),l/=o;l*=2,k.style(e,t,l+u),n=n||[]}return n&&(l=+l||+c||0,r=n[1]?l+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=l,i.end=r)),r}var we={};function Ae(e,t){for(var n,i,r,o,s,a,c,u=[],l=0,d=e.length;l<d;l++)(i=e[l]).style&&(n=i.style.display,t?("none"===n&&(u[l]=ce.get(i,"display")||null,u[l]||(i.style.display="")),""===i.style.display&&be(i)&&(u[l]=(c=s=o=void 0,s=(r=i).ownerDocument,a=r.nodeName,(c=we[a])||(o=s.body.appendChild(s.createElement(a)),c=k.css(o,"display"),o.parentNode.removeChild(o),"none"===c&&(c="block"),we[a]=c)))):"none"!==n&&(u[l]="none",ce.set(i,"display",n)));for(l=0;l<d;l++)null!=u[l]&&(e[l].style.display=u[l]);return e}k.fn.extend({show:function(){return Ae(this,!0)},hide:function(){return Ae(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){be(this)?k(this).show():k(this).hide()}))}});var Se,Ee,xe=/^(?:checkbox|radio)$/i,ke=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Te=/^$|^module$|\/(?:java|ecma)script/i;Se=_.createDocumentFragment().appendChild(_.createElement("div")),(Ee=_.createElement("input")).setAttribute("type","radio"),Ee.setAttribute("checked","checked"),Ee.setAttribute("name","t"),Se.appendChild(Ee),y.checkClone=Se.cloneNode(!0).cloneNode(!0).lastChild.checked,Se.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!Se.cloneNode(!0).lastChild.defaultValue,Se.innerHTML="<option></option>",y.option=!!Se.lastChild;var Ce={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Re(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t)?k.merge([e],n):n}function Oe(e,t){for(var n=0,i=e.length;n<i;n++)ce.set(e[n],"globalEval",!t||ce.get(t[n],"globalEval"))}Ce.tbody=Ce.tfoot=Ce.colgroup=Ce.caption=Ce.thead,Ce.th=Ce.td,y.option||(Ce.optgroup=Ce.option=[1,"<select multiple='multiple'>","</select>"]);var Me=/<|&#?\w+;/;function Pe(e,t,n,i,r){for(var o,s,a,c,u,l,d=t.createDocumentFragment(),f=[],h=0,p=e.length;h<p;h++)if((o=e[h])||0===o)if("object"===S(o))k.merge(f,o.nodeType?[o]:o);else if(Me.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(ke.exec(o)||["",""])[1].toLowerCase(),c=Ce[a]||Ce._default,s.innerHTML=c[1]+k.htmlPrefilter(o)+c[2],l=c[0];l--;)s=s.lastChild;k.merge(f,s.childNodes),(s=d.firstChild).textContent=""}else f.push(t.createTextNode(o));for(d.textContent="",h=0;o=f[h++];)if(i&&-1<k.inArray(o,i))r&&r.push(o);else if(u=ye(o),s=Re(d.appendChild(o),"script"),u&&Oe(s),n)for(l=0;o=s[l++];)Te.test(o.type||"")&&n.push(o);return d}var Ne=/^([^.]*)(?:\.(.+)|)/;function ze(){return!0}function je(){return!1}function Fe(e,t,n,i,o,s){var a,c;if("object"==r(t)){for(c in"string"!=typeof n&&(i=i||n,n=void 0),t)Fe(e,c,n,i,t[c],s);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=je;else if(!o)return e;return 1===s&&(a=o,(o=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each((function(){k.event.add(this,t,o,i,n)}))}function Be(e,t,n){n?(ce.set(e,t,!1),k.event.add(e,t,{namespace:!1,handler:function(e){var n,i=ce.get(this,t);if(1&e.isTrigger&&this[t]){if(i)(k.event.special[t]||{}).delegateType&&e.stopPropagation();else if(i=c.call(arguments),ce.set(this,t,i),this[t](),n=ce.get(this,t),ce.set(this,t,!1),i!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else i&&(ce.set(this,t,k.event.trigger(i[0],i.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=ze)}})):void 0===ce.get(e,t)&&k.event.add(e,t,ze)}k.event={global:{},add:function(e,t,n,i,r){var o,s,a,c,u,l,d,f,h,p,m,g=ce.get(e);if(se(e))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&k.find.matchesSelector(ge,r),n.guid||(n.guid=k.guid++),(c=g.events)||(c=g.events=Object.create(null)),(s=g.handle)||(s=g.handle=function(t){return void 0!==k&&k.event.triggered!==t.type?k.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(Y)||[""]).length;u--;)h=m=(a=Ne.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),h&&(d=k.event.special[h]||{},h=(r?d.delegateType:d.bindType)||h,d=k.event.special[h]||{},l=k.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&k.expr.match.needsContext.test(r),namespace:p.join(".")},o),(f=c[h])||((f=c[h]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,i,p,s)||e.addEventListener&&e.addEventListener(h,s)),d.add&&(d.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,l):f.push(l),k.event.global[h]=!0)},remove:function(e,t,n,i,r){var o,s,a,c,u,l,d,f,h,p,m,g=ce.hasData(e)&&ce.get(e);if(g&&(c=g.events)){for(u=(t=(t||"").match(Y)||[""]).length;u--;)if(h=m=(a=Ne.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),h){for(d=k.event.special[h]||{},f=c[h=(i?d.delegateType:d.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;o--;)l=f[o],!r&&m!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||i&&i!==l.selector&&("**"!==i||!l.selector)||(f.splice(o,1),l.selector&&f.delegateCount--,d.remove&&d.remove.call(e,l));s&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,p,g.handle)||k.removeEvent(e,h,g.handle),delete c[h])}else for(h in c)k.event.remove(e,h+t[u],n,i,!0);k.isEmptyObject(c)&&ce.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=new Array(arguments.length),c=k.event.fix(e),u=(ce.get(this,"events")||Object.create(null))[c.type]||[],l=k.event.special[c.type]||{};for(a[0]=c,t=1;t<arguments.length;t++)a[t]=arguments[t];if(c.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,c)){for(s=k.event.handlers.call(this,c,u),t=0;(r=s[t++])&&!c.isPropagationStopped();)for(c.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!c.isImmediatePropagationStopped();)c.rnamespace&&!1!==o.namespace&&!c.rnamespace.test(o.namespace)||(c.handleObj=o,c.data=o.data,void 0!==(i=((k.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(c.result=i)&&(c.preventDefault(),c.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,c),c.result}},handlers:function(e,t){var n,i,r,o,s,a=[],c=t.delegateCount,u=e.target;if(c&&u.nodeType&&!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],s={},n=0;n<c;n++)void 0===s[r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?-1<k(r,this).index(u):k.find(r,this,null,[u]).length),s[r]&&o.push(i);o.length&&a.push({elem:u,handlers:o})}return u=this,c<t.length&&a.push({elem:u,handlers:t.slice(c)}),a},addProp:function(e,t){Object.defineProperty(k.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return xe.test(t.type)&&t.click&&C(t,"input")&&Be(t,"click",!0),!1},trigger:function(e){var t=this||e;return xe.test(t.type)&&t.click&&C(t,"input")&&Be(t,"click"),!0},_default:function(e){var t=e.target;return xe.test(t.type)&&t.click&&C(t,"input")&&ce.get(t,"click")||C(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ze:je,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:je,isPropagationStopped:je,isImmediatePropagationStopped:je,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ze,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ze,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ze,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){if(_.documentMode){var n=ce.get(this,"handle"),i=k.event.fix(e);i.type="focusin"===e.type?"focus":"blur",i.isSimulated=!0,n(e),i.target===i.currentTarget&&n(i)}else k.event.simulate(t,e.target,k.event.fix(e))}k.event.special[e]={setup:function(){var i;if(Be(this,e,!0),!_.documentMode)return!1;(i=ce.get(this,t))||this.addEventListener(t,n),ce.set(this,t,(i||0)+1)},trigger:function(){return Be(this,e),!0},teardown:function(){var e;if(!_.documentMode)return!1;(e=ce.get(this,t)-1)?ce.set(this,t,e):(this.removeEventListener(t,n),ce.remove(this,t))},_default:function(t){return ce.get(t.target,e)},delegateType:t},k.event.special[t]={setup:function(){var i=this.ownerDocument||this.document||this,r=_.documentMode?this:i,o=ce.get(r,t);o||(_.documentMode?this.addEventListener(t,n):i.addEventListener(e,n,!0)),ce.set(r,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=_.documentMode?this:i,o=ce.get(r,t)-1;o?ce.set(r,t,o):(_.documentMode?this.removeEventListener(t,n):i.removeEventListener(e,n,!0),ce.remove(r,t))}}})),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){k.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||k.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}})),k.fn.extend({on:function(e,t,n,i){return Fe(this,e,t,n,i)},one:function(e,t,n,i){return Fe(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,k(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==r(e)){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=je),this.each((function(){k.event.remove(this,e,n,t)}))}});var Ie=/<script|<style|<link/i,He=/checked\s*(?:[^=]|=\s*.checked.)/i,De=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Le(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function qe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ue(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function We(e,t){var n,i,r,o,s,a;if(1===t.nodeType){if(ce.hasData(e)&&(a=ce.get(e).events))for(r in ce.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)k.event.add(t,r,a[r][n]);ue.hasData(e)&&(o=ue.access(e),s=k.extend({},o),ue.set(t,s))}}function Ve(e,t,n,i){t=u(t);var r,o,s,a,c,l,d=0,f=e.length,h=f-1,p=t[0],m=v(p);if(m||1<f&&"string"==typeof p&&!y.checkClone&&He.test(p))return e.each((function(r){var o=e.eq(r);m&&(t[0]=p.call(this,r,o.html())),Ve(o,t,n,i)}));if(f&&(o=(r=Pe(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){for(a=(s=k.map(Re(r,"script"),qe)).length;d<f;d++)c=r,d!==h&&(c=k.clone(c,!0,!0),a&&k.merge(s,Re(c,"script"))),n.call(e[d],c,d);if(a)for(l=s[s.length-1].ownerDocument,k.map(s,Ue),d=0;d<a;d++)c=s[d],Te.test(c.type||"")&&!ce.access(c,"globalEval")&&k.contains(l,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?k._evalUrl&&!c.noModule&&k._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},l):A(c.textContent.replace(De,""),c,l))}return e}function Xe(e,t,n){for(var i,r=t?k.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||k.cleanData(Re(i)),i.parentNode&&(n&&ye(i)&&Oe(Re(i,"script")),i.parentNode.removeChild(i));return e}k.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,o,s,a,c,u,l=e.cloneNode(!0),d=ye(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(s=Re(l),i=0,r=(o=Re(e)).length;i<r;i++)a=o[i],"input"===(u=(c=s[i]).nodeName.toLowerCase())&&xe.test(a.type)?c.checked=a.checked:"input"!==u&&"textarea"!==u||(c.defaultValue=a.defaultValue);if(t)if(n)for(o=o||Re(e),s=s||Re(l),i=0,r=o.length;i<r;i++)We(o[i],s[i]);else We(e,l);return 0<(s=Re(l,"script")).length&&Oe(s,!d&&Re(e,"script")),l},cleanData:function(e){for(var t,n,i,r=k.event.special,o=0;void 0!==(n=e[o]);o++)if(se(n)){if(t=n[ce.expando]){if(t.events)for(i in t.events)r[i]?k.event.remove(n,i):k.removeEvent(n,i,t.handle);n[ce.expando]=void 0}n[ue.expando]&&(n[ue.expando]=void 0)}}}),k.fn.extend({detach:function(e){return Xe(this,e,!0)},remove:function(e){return Xe(this,e)},text:function(e){return te(this,(function(e){return void 0===e?k.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Ve(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)}))},prepend:function(){return Ve(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Ve(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(Re(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return k.clone(this,e,t)}))},html:function(e){return te(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ie.test(e)&&!Ce[(ke.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(Re(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Ve(this,arguments,(function(t){var n=this.parentNode;k.inArray(this,e)<0&&(k.cleanData(Re(this)),n&&n.replaceChild(t,this))}),e)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){k.fn[e]=function(e){for(var n,i=[],r=k(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),k(r[s])[t](n),l.apply(i,n.get());return this.pushStack(i)}}));var Ke=new RegExp("^("+he+")(?!px)[a-z%]+$","i"),Ye=/^--/,Qe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},Ge=function(e,t,n){var i,r,o={};for(r in t)o[r]=e.style[r],e.style[r]=t[r];for(r in i=n.call(e),t)e.style[r]=o[r];return i},Je=new RegExp(me.join("|"),"i");function Ze(e,t,n){var i,r,o,s,a=Ye.test(t),c=e.style;return(n=n||Qe(e))&&(s=n.getPropertyValue(t)||n[t],a&&s&&(s=s.replace(N,"$1")||void 0),""!==s||ye(e)||(s=k.style(e,t)),!y.pixelBoxStyles()&&Ke.test(s)&&Je.test(t)&&(i=c.width,r=c.minWidth,o=c.maxWidth,c.minWidth=c.maxWidth=c.width=s,s=n.width,c.width=i,c.minWidth=r,c.maxWidth=o)),void 0!==s?s+"":s}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ge.appendChild(u).appendChild(l);var e=n.getComputedStyle(l);i="1%"!==e.top,c=12===t(e.marginLeft),l.style.right="60%",s=36===t(e.right),r=36===t(e.width),l.style.position="absolute",o=12===t(l.offsetWidth/3),ge.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var i,r,o,s,a,c,u=_.createElement("div"),l=_.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),c},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,i,r;return null==a&&(e=_.createElement("table"),t=_.createElement("tr"),i=_.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",i.style.height="9px",i.style.display="block",ge.appendChild(e).appendChild(t).appendChild(i),r=n.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,ge.removeChild(e)),a}}))}();var et=["Webkit","Moz","ms"],tt=_.createElement("div").style,nt={};function it(e){return k.cssProps[e]||nt[e]||(e in tt?e:nt[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=et.length;n--;)if((e=et[n]+t)in tt)return e}(e)||e)}var rt=/^(none|table(?!-c[ea]).+)/,ot={position:"absolute",visibility:"hidden",display:"block"},st={letterSpacing:"0",fontWeight:"400"};function at(e,t,n){var i=pe.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function ct(e,t,n,i,r,o){var s="width"===t?1:0,a=0,c=0,u=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(u+=k.css(e,n+me[s],!0,r)),i?("content"===n&&(c-=k.css(e,"padding"+me[s],!0,r)),"margin"!==n&&(c-=k.css(e,"border"+me[s]+"Width",!0,r))):(c+=k.css(e,"padding"+me[s],!0,r),"padding"!==n?c+=k.css(e,"border"+me[s]+"Width",!0,r):a+=k.css(e,"border"+me[s]+"Width",!0,r));return!i&&0<=o&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-c-a-.5))||0),c+u}function ut(e,t,n){var i=Qe(e),r=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,i),o=r,s=Ze(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(Ke.test(s)){if(!n)return s;s="auto"}return(!y.boxSizingReliable()&&r||!y.reliableTrDimensions()&&C(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===k.css(e,"display",!1,i))&&e.getClientRects().length&&(r="border-box"===k.css(e,"boxSizing",!1,i),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+ct(e,t,n||(r?"border":"content"),o,i,s)+"px"}function lt(e,t,n,i,r){return new lt.prototype.init(e,t,n,i,r)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,s,a,c=oe(t),u=Ye.test(t),l=e.style;if(u||(t=it(c)),a=k.cssHooks[t]||k.cssHooks[c],void 0===n)return a&&"get"in a&&void 0!==(o=a.get(e,!1,i))?o:l[t];"string"===(s=r(n))&&(o=pe.exec(n))&&o[1]&&(n=_e(e,t,o),s="number"),null!=n&&n==n&&("number"!==s||u||(n+=o&&o[3]||(k.cssNumber[c]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,i){var r,o,s,a=oe(t);return Ye.test(t)||(t=it(a)),(s=k.cssHooks[t]||k.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=Ze(e,t,i)),"normal"===r&&t in st&&(r=st[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),k.each(["height","width"],(function(e,t){k.cssHooks[t]={get:function(e,n,i){if(n)return!rt.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ut(e,t,i):Ge(e,ot,(function(){return ut(e,t,i)}))},set:function(e,n,i){var r,o=Qe(e),s=!y.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===k.css(e,"boxSizing",!1,o),c=i?ct(e,t,i,a,o):0;return a&&s&&(c-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-ct(e,t,"border",!1,o)-.5)),c&&(r=pe.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=k.css(e,t)),at(0,n,c)}}})),k.cssHooks.marginLeft=$e(y.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ze(e,"marginLeft"))||e.getBoundingClientRect().left-Ge(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),k.each({margin:"",padding:"",border:"Width"},(function(e,t){k.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+me[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(k.cssHooks[e+t].set=at)})),k.fn.extend({css:function(e,t){return te(this,(function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=Qe(e),r=t.length;s<r;s++)o[t[s]]=k.css(e,t[s],!1,i);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)}),e,t,1<arguments.length)}}),((k.Tween=lt).prototype={constructor:lt,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=lt.propHooks[this.prop];return e&&e.get?e.get(this):lt.propHooks._default.get(this)},run:function(e){var t,n=lt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):lt.propHooks._default.set(this),this}}).init.prototype=lt.prototype,(lt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[it(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=lt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=lt.prototype.init,k.fx.step={};var dt,ft,ht,pt,mt=/^(?:toggle|show|hide)$/,gt=/queueHooks$/;function yt(){ft&&(!1===_.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(yt):n.setTimeout(yt,k.fx.interval),k.fx.tick())}function vt(){return n.setTimeout((function(){dt=void 0})),dt=Date.now()}function bt(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=me[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function _t(e,t,n){for(var i,r=(wt.tweeners[t]||[]).concat(wt.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function wt(e,t,n){var i,r,o=0,s=wt.prefilters.length,a=k.Deferred().always((function(){delete c.elem})),c=function(){if(r)return!1;for(var t=dt||vt(),n=Math.max(0,u.startTime+u.duration-t),i=1-(n/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(i);return a.notifyWith(e,[u,i,n]),i<1&&s?n:(s||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:k.extend({},t),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},n),originalProperties:t,originalOptions:n,startTime:dt||vt(),duration:n.duration,tweens:[],createTween:function(t,n){var i=k.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),l=u.props;for(function(e,t){var n,i,r,o,s;for(n in e)if(r=t[i=oe(n)],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=k.cssHooks[i])&&"expand"in s)for(n in o=s.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r}(l,u.opts.specialEasing);o<s;o++)if(i=wt.prefilters[o].call(u,e,l,u.opts))return v(i.stop)&&(k._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return k.map(l,_t,u),v(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),k.fx.timer(k.extend(c,{elem:e,anim:u,queue:u.opts.queue})),u}k.Animation=k.extend(wt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return _e(n.elem,e,pe.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(Y);for(var n,i=0,r=e.length;i<r;i++)n=e[i],wt.tweeners[n]=wt.tweeners[n]||[],wt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,c,u,l,d="width"in t||"height"in t,f=this,h={},p=e.style,m=e.nodeType&&be(e),g=ce.get(e,"fxshow");for(i in n.queue||(null==(s=k._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,f.always((function(){f.always((function(){s.unqueued--,k.queue(e,"fx").length||s.empty.fire()}))}))),t)if(r=t[i],mt.test(r)){if(delete t[i],o=o||"toggle"===r,r===(m?"hide":"show")){if("show"!==r||!g||void 0===g[i])continue;m=!0}h[i]=g&&g[i]||k.style(e,i)}if((c=!k.isEmptyObject(t))||!k.isEmptyObject(h))for(i in d&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(u=g&&g.display)&&(u=ce.get(e,"display")),"none"===(l=k.css(e,"display"))&&(u?l=u:(Ae([e],!0),u=e.style.display||u,l=k.css(e,"display"),Ae([e]))),("inline"===l||"inline-block"===l&&null!=u)&&"none"===k.css(e,"float")&&(c||(f.done((function(){p.display=u})),null==u&&(l=p.display,u="none"===l?"":l)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always((function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))),c=!1,h)c||(g?"hidden"in g&&(m=g.hidden):g=ce.access(e,"fxshow",{display:u}),o&&(g.hidden=!m),m&&Ae([e],!0),f.done((function(){for(i in m||Ae([e]),ce.remove(e,"fxshow"),h)k.style(e,i,h[i])}))),c=_t(m?g[i]:0,i,f),i in g||(g[i]=c.start,m&&(c.end=c.start,c.start=0))}],prefilter:function(e,t){t?wt.prefilters.unshift(e):wt.prefilters.push(e)}}),k.speed=function(e,t,n){var i=e&&"object"==r(e)?k.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return k.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in k.fx.speeds?i.duration=k.fx.speeds[i.duration]:i.duration=k.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){v(i.old)&&i.old.call(this),i.queue&&k.dequeue(this,i.queue)},i},k.fn.extend({fadeTo:function(e,t,n,i){return this.filter(be).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=k.isEmptyObject(e),o=k.speed(t,n,i),s=function(){var t=wt(this,k.extend({},e),o);(r||ce.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,r=null!=e&&e+"queueHooks",o=k.timers,s=ce.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&gt.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||k.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=ce.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=k.timers,s=i?i.length:0;for(n.finish=!0,k.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish}))}}),k.each(["toggle","show","hide"],(function(e,t){var n=k.fn[t];k.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(bt(t,!0),e,i,r)}})),k.each({slideDown:bt("show"),slideUp:bt("hide"),slideToggle:bt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){k.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(dt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),dt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){ft||(ft=!0,yt())},k.fx.stop=function(){ft=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(e,t){return e=k.fx&&k.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,i){var r=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(r)}}))},ht=_.createElement("input"),pt=_.createElement("select").appendChild(_.createElement("option")),ht.type="checkbox",y.checkOn=""!==ht.value,y.optSelected=pt.selected,(ht=_.createElement("input")).value="t",ht.type="radio",y.radioValue="t"===ht.value;var At,St=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return te(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each((function(){k.removeAttr(this,e)}))}}),k.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(r=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?At:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=k.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(Y);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),At={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=St[t]||k.find.attr;St[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(o=St[s],St[s]=r,r=null!=n(e,t,i)?s:null,St[s]=o),r}}));var Et=/^(?:input|select|textarea|button)$/i,xt=/^(?:a|area)$/i;function kt(e){return(e.match(Y)||[]).join(" ")}function Tt(e){return e.getAttribute&&e.getAttribute("class")||""}function Ct(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Y)||[]}k.fn.extend({prop:function(e,t){return te(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each((function(){delete this[k.propFix[e]||e]}))}}),k.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,r=k.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):Et.test(e.nodeName)||xt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){k.propFix[this.toLowerCase()]=this})),k.fn.extend({addClass:function(e){var t,n,i,r,o,s;return v(e)?this.each((function(t){k(this).addClass(e.call(this,t,Tt(this)))})):(t=Ct(e)).length?this.each((function(){if(i=Tt(this),n=1===this.nodeType&&" "+kt(i)+" "){for(o=0;o<t.length;o++)r=t[o],n.indexOf(" "+r+" ")<0&&(n+=r+" ");s=kt(n),i!==s&&this.setAttribute("class",s)}})):this},removeClass:function(e){var t,n,i,r,o,s;return v(e)?this.each((function(t){k(this).removeClass(e.call(this,t,Tt(this)))})):arguments.length?(t=Ct(e)).length?this.each((function(){if(i=Tt(this),n=1===this.nodeType&&" "+kt(i)+" "){for(o=0;o<t.length;o++)for(r=t[o];-1<n.indexOf(" "+r+" ");)n=n.replace(" "+r+" "," ");s=kt(n),i!==s&&this.setAttribute("class",s)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,i,o,s,a=r(e),c="string"===a||Array.isArray(e);return v(e)?this.each((function(n){k(this).toggleClass(e.call(this,n,Tt(this),t),t)})):"boolean"==typeof t&&c?t?this.addClass(e):this.removeClass(e):(n=Ct(e),this.each((function(){if(c)for(s=k(this),o=0;o<n.length;o++)i=n[o],s.hasClass(i)?s.removeClass(i):s.addClass(i);else void 0!==e&&"boolean"!==a||((i=Tt(this))&&ce.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":ce.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+kt(Tt(n))+" ").indexOf(t))return!0;return!1}});var Rt=/\r/g;k.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=v(e),this.each((function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,k(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=k.map(r,(function(e){return null==e?"":e+""}))),(t=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}))):r?(t=k.valHooks[r.type]||k.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(Rt,""):null==n?"":n:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:kt(k.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],c=s?o+1:r.length;for(i=o<0?c:s?o:0;i<c;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){if(t=k(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=k.makeArray(t),s=r.length;s--;)((i=r[s]).selected=-1<k.inArray(k.valHooks.option.get(i),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],(function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var Ot=n.location,Mt={guid:Date.now()},Pt=/\?/;k.parseXML=function(e){var t,i;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){}return i=t&&t.getElementsByTagName("parsererror")[0],t&&!i||k.error("Invalid XML: "+(i?k.map(i.childNodes,(function(e){return e.textContent})).join("\n"):e)),t};var Nt=/^(?:focusinfocus|focusoutblur)$/,zt=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,i,o){var s,a,c,u,l,d,f,h,m=[i||_],g=p.call(e,"type")?e.type:e,y=p.call(e,"namespace")?e.namespace.split("."):[];if(a=h=c=i=i||_,3!==i.nodeType&&8!==i.nodeType&&!Nt.test(g+k.event.triggered)&&(-1<g.indexOf(".")&&(g=(y=g.split(".")).shift(),y.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[k.expando]?e:new k.Event(g,"object"==r(e)&&e)).isTrigger=o?2:3,e.namespace=y.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:k.makeArray(t,[e]),f=k.event.special[g]||{},o||!f.trigger||!1!==f.trigger.apply(i,t))){if(!o&&!f.noBubble&&!b(i)){for(u=f.delegateType||g,Nt.test(u+g)||(a=a.parentNode);a;a=a.parentNode)m.push(a),c=a;c===(i.ownerDocument||_)&&m.push(c.defaultView||c.parentWindow||n)}for(s=0;(a=m[s++])&&!e.isPropagationStopped();)h=a,e.type=1<s?u:f.bindType||g,(d=(ce.get(a,"events")||Object.create(null))[e.type]&&ce.get(a,"handle"))&&d.apply(a,t),(d=l&&a[l])&&d.apply&&se(a)&&(e.result=d.apply(a,t),!1===e.result&&e.preventDefault());return e.type=g,o||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(m.pop(),t)||!se(i)||l&&v(i[g])&&!b(i)&&((c=i[l])&&(i[l]=null),k.event.triggered=g,e.isPropagationStopped()&&h.addEventListener(g,zt),i[g](),e.isPropagationStopped()&&h.removeEventListener(g,zt),k.event.triggered=void 0,c&&(i[l]=c)),e.result}},simulate:function(e,t,n){var i=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(i,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each((function(){k.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}});var jt=/\[\]$/,Ft=/\r?\n/g,Bt=/^(?:submit|button|image|reset|file)$/i,It=/^(?:input|select|textarea|keygen)/i;function Ht(e,t,n,i){var o;if(Array.isArray(t))k.each(t,(function(t,o){n||jt.test(e)?i(e,o):Ht(e+"["+("object"==r(o)&&null!=o?t:"")+"]",o,n,i)}));else if(n||"object"!==S(t))i(e,t);else for(o in t)Ht(e+"["+o+"]",t[o],n,i)}k.param=function(e,t){var n,i=[],r=function(e,t){var n=v(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,(function(){r(this.name,this.value)}));else for(n in e)Ht(n,e[n],t,r);return i.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&It.test(this.nodeName)&&!Bt.test(e)&&(this.checked||!xe.test(e))})).map((function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,(function(e){return{name:t.name,value:e.replace(Ft,"\r\n")}})):{name:t.name,value:n.replace(Ft,"\r\n")}})).get()}});var Dt=/%20/g,Lt=/#.*$/,qt=/([?&])_=[^&]*/,Ut=/^(.*?):[ \t]*([^\r\n]*)$/gm,Wt=/^(?:GET|HEAD)$/,Vt=/^\/\//,Xt={},Kt={},Yt="*/".concat("*"),Qt=_.createElement("a");function Gt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(Y)||[];if(v(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Jt(e,t,n,i){var r={},o=e===Kt;function s(a){var c;return r[a]=!0,k.each(e[a]||[],(function(e,a){var u=a(t,n,i);return"string"!=typeof u||o||r[u]?o?!(c=u):void 0:(t.dataTypes.unshift(u),s(u),!1)})),c}return s(t.dataTypes[0])||!r["*"]&&s("*")}function Zt(e,t){var n,i,r=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&k.extend(!0,e,i),e}Qt.href=Ot.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ot.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ot.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Yt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Zt(Zt(e,k.ajaxSettings),t):Zt(k.ajaxSettings,e)},ajaxPrefilter:Gt(Xt),ajaxTransport:Gt(Kt),ajax:function(e,t){"object"==r(e)&&(t=e,e=void 0),t=t||{};var i,o,s,a,c,u,l,d,f,h,p=k.ajaxSetup({},t),m=p.context||p,g=p.context&&(m.nodeType||m.jquery)?k(m):k.event,y=k.Deferred(),v=k.Callbacks("once memory"),b=p.statusCode||{},w={},A={},S="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(l){if(!a)for(a={};t=Ut.exec(s);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?s:null},setRequestHeader:function(e,t){return null==l&&(e=A[e.toLowerCase()]=A[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==l&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)E.always(e[E.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||S;return i&&i.abort(t),x(0,t),this}};if(y.promise(E),p.url=((e||p.url||Ot.href)+"").replace(Vt,Ot.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(Y)||[""],null==p.crossDomain){u=_.createElement("a");try{u.href=p.url,u.href=u.href,p.crossDomain=Qt.protocol+"//"+Qt.host!=u.protocol+"//"+u.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=k.param(p.data,p.traditional)),Jt(Xt,p,t,E),l)return E;for(f in(d=k.event&&p.global)&&0==k.active++&&k.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Wt.test(p.type),o=p.url.replace(Lt,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Dt,"+")):(h=p.url.slice(o.length),p.data&&(p.processData||"string"==typeof p.data)&&(o+=(Pt.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(o=o.replace(qt,"$1"),h=(Pt.test(o)?"&":"?")+"_="+Mt.guid+++h),p.url=o+h),p.ifModified&&(k.lastModified[o]&&E.setRequestHeader("If-Modified-Since",k.lastModified[o]),k.etag[o]&&E.setRequestHeader("If-None-Match",k.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&E.setRequestHeader("Content-Type",p.contentType),E.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Yt+"; q=0.01":""):p.accepts["*"]),p.headers)E.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(!1===p.beforeSend.call(m,E,p)||l))return E.abort();if(S="abort",v.add(p.complete),E.done(p.success),E.fail(p.error),i=Jt(Kt,p,t,E)){if(E.readyState=1,d&&g.trigger("ajaxSend",[E,p]),l)return E;p.async&&0<p.timeout&&(c=n.setTimeout((function(){E.abort("timeout")}),p.timeout));try{l=!1,i.send(w,x)}catch(e){if(l)throw e;x(-1,e)}}else x(-1,"No Transport");function x(e,t,r,a){var u,f,h,_,w,A=t;l||(l=!0,c&&n.clearTimeout(c),i=void 0,s=a||"",E.readyState=0<e?4:0,u=200<=e&&e<300||304===e,r&&(_=function(e,t,n){for(var i,r,o,s,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){c.unshift(r);break}if(c[0]in n)o=c[0];else{for(r in n){if(!c[0]||e.converters[r+" "+c[0]]){o=r;break}s||(s=r)}o=o||s}if(o)return o!==c[0]&&c.unshift(o),n[o]}(p,E,r)),!u&&-1<k.inArray("script",p.dataTypes)&&k.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),_=function(e,t,n,i){var r,o,s,a,c,u={},l=e.dataTypes.slice();if(l[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=l.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(s=u[c+" "+o]||u["* "+o]))for(r in u)if((a=r.split(" "))[1]===o&&(s=u[c+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[r]:!0!==u[r]&&(o=a[0],l.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}(p,_,E,u),u?(p.ifModified&&((w=E.getResponseHeader("Last-Modified"))&&(k.lastModified[o]=w),(w=E.getResponseHeader("etag"))&&(k.etag[o]=w)),204===e||"HEAD"===p.type?A="nocontent":304===e?A="notmodified":(A=_.state,f=_.data,u=!(h=_.error))):(h=A,!e&&A||(A="error",e<0&&(e=0))),E.status=e,E.statusText=(t||A)+"",u?y.resolveWith(m,[f,A,E]):y.rejectWith(m,[E,A,h]),E.statusCode(b),b=void 0,d&&g.trigger(u?"ajaxSuccess":"ajaxError",[E,p,u?f:h]),v.fireWith(m,[E,A]),d&&(g.trigger("ajaxComplete",[E,p]),--k.active||k.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],(function(e,t){k[t]=function(e,n,i,r){return v(n)&&(r=r||i,i=n,n=void 0),k.ajax(k.extend({url:e,type:t,dataType:r,data:n,success:i},k.isPlainObject(e)&&e))}})),k.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),k._evalUrl=function(e,t,n){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t,n)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){k(this).wrapInner(e.call(this,t))})):this.each((function(){var t=k(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e);return this.each((function(n){k(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){k(this).replaceWith(this.childNodes)})),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var $t={0:200,1223:204},en=k.ajaxSettings.xhr();y.cors=!!en&&"withCredentials"in en,y.ajax=en=!!en,k.ajaxTransport((function(e){var t,i;if(y.cors||en&&!e.crossDomain)return{send:function(r,o){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);t=function(e){return function(){t&&(t=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o($t[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),i=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){t&&i()}))},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(r){if(t)throw r}},abort:function(){t&&t()}}})),k.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),k.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,r){t=k("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),_.head.appendChild(t[0])},abort:function(){n&&n()}}}));var tn,nn=[],rn=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=nn.pop()||k.expando+"_"+Mt.guid++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",(function(e,t,i){var r,o,s,a=!1!==e.jsonp&&(rn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&rn.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(rn,"$1"+r):!1!==e.jsonp&&(e.url+=(Pt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||k.error(r+" was not called"),s[0]},e.dataTypes[0]="json",o=n[r],n[r]=function(){s=arguments},i.always((function(){void 0===o?k(n).removeProp(r):n[r]=o,e[r]&&(e.jsonpCallback=t.jsonpCallback,nn.push(r)),s&&v(o)&&o(s[0]),s=o=void 0})),"script"})),y.createHTMLDocument=((tn=_.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===tn.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((i=(t=_.implementation.createHTMLDocument("")).createElement("base")).href=_.location.href,t.head.appendChild(i)):t=_),o=!n&&[],(r=L.exec(e))?[t.createElement(r[1])]:(r=Pe([e],t,o),o&&o.length&&k(o).remove(),k.merge([],r.childNodes)));var i,r,o},k.fn.load=function(e,t,n){var i,o,s,a=this,c=e.indexOf(" ");return-1<c&&(i=kt(e.slice(c)),e=e.slice(0,c)),v(t)?(n=t,t=void 0):t&&"object"==r(t)&&(o="POST"),0<a.length&&k.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done((function(e){s=arguments,a.html(i?k("<div>").append(k.parseHTML(e)).find(i):e)})).always(n&&function(e,t){a.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},k.expr.pseudos.animated=function(e){return k.grep(k.timers,(function(t){return e===t.elem})).length},k.offset={setOffset:function(e,t,n){var i,r,o,s,a,c,u=k.css(e,"position"),l=k(e),d={};"static"===u&&(e.style.position="relative"),a=l.offset(),o=k.css(e,"top"),c=k.css(e,"left"),("absolute"===u||"fixed"===u)&&-1<(o+c).indexOf("auto")?(s=(i=l.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(c)||0),v(t)&&(t=t.call(e,n,k.extend({},a))),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):l.css(d)}},k.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){k.offset.setOffset(this,e,t)}));var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===k.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),r.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-k.css(i,"marginTop",!0),left:t.left-r.left-k.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===k.css(e,"position");)e=e.offsetParent;return e||ge}))}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;k.fn[e]=function(i){return te(this,(function(e,i,r){var o;if(b(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r}),e,i,arguments.length)}})),k.each(["top","left"],(function(e,t){k.cssHooks[t]=$e(y.pixelPosition,(function(e,n){if(n)return n=Ze(e,t),Ke.test(n)?k(e).position()[t]+"px":n}))})),k.each({Height:"height",Width:"width"},(function(e,t){k.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,i){k.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return te(this,(function(t,n,r){var o;return b(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?k.css(t,n,a):k.style(t,n,r,a)}),t,s?r:void 0,s)}}))})),k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){k.fn[t]=function(e){return this.on(t,e)}})),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){k.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}));var on=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;k.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return i=c.call(arguments,2),(r=function(){return e.apply(t||this,i.concat(c.call(arguments)))}).guid=e.guid=e.guid||k.guid++,r},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=C,k.isFunction=v,k.isWindow=b,k.camelCase=oe,k.type=S,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},k.trim=function(e){return null==e?"":(e+"").replace(on,"$1")},void 0===(i=function(){return k}.apply(t,[]))||(e.exports=i);var sn=n.jQuery,an=n.$;return k.noConflict=function(e){return n.$===k&&(n.$=an),e&&n.jQuery===k&&(n.jQuery=sn),k},void 0===o&&(n.jQuery=n.$=k),k}))}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.amdO={},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var __webpack_exports__={};(()=>{"use strict";var e={};__webpack_require__.r(e),__webpack_require__.d(e,{clear:()=>M,getChildSetting:()=>P,getSetting:()=>C,init:()=>E,isSupported:()=>x,removeChildSetting:()=>z,removeSetting:()=>O,saveChildSetting:()=>N,saveSetting:()=>R});var t={};__webpack_require__.r(t),__webpack_require__.d(t,{clear:()=>L,getSetting:()=>I,init:()=>B,removeSetting:()=>D,saveSetting:()=>H});var n={};__webpack_require__.r(n),__webpack_require__.d(n,{Decoder:()=>Gt,Encoder:()=>Yt,PacketType:()=>Kt,protocol:()=>Xt});__webpack_require__(489),__webpack_require__(491);var i=__webpack_require__(33),r=__webpack_require__.n(i);__webpack_require__(883);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){if("object"!==o(e)||"object"!==o(t)||e instanceof Array)return void 0!==t?t:e;for(var n=Object.keys(Object.assign({},e,t)),i=n.length,r=0;r<i;r++)e[n[r]]=s(e[n[r]],t[n[r]]);return e}function a(){try{return function(e){var t={};if("string"!=typeof e)return t;var n=e.split("?");if(n.length<=1)return t;for(var i=n[1].split("#")[0].split("&"),r=0;r<i.length;r++){var o=i[r].split("=");2===o.length&&(t[o[0]]=decodeURIComponent(o[1]))}return t}(window.location.href)}catch(e){return{}}}function c(e,t,n){if("string"!=typeof e||"string"!=typeof t||"string"!=typeof n)return e;var i=e.split("#");e=i[0];var r=t+"="+encodeURIComponent(n);return e.indexOf("?")>-1?e+="&"+r:e+="?"+r,i.length>1&&(e=e+"#"+i[1]),e}var u,l=function(){var e;try{e=document.location.protocol}catch(e){}if("string"==typeof e){var t=e.match(/[\w]+/);e=t instanceof Array&&"string"==typeof t[0]?t[0]:"unknown"}return e};var d,f,h={en:{"i.button_ok":"Ok","i.button_nok":"Cancel","i.button_retry":"Retry","i.generic_error_title":"Error","i.auth_title":"Authentication required","i.auth_text":"Enter your Escapp user credentials (email and password). For this authentication to be successful, you must have previously registered with your user to the escape room on the Escapp platform.","i.auth_title_wrong_credentials":"Authentication error","i.auth_text_wrong_credentials":"The credentials provided are not correct. You need to enter your Escapp user credentials (email and password). For this authentication to be successful, you must have previously registered with your user to the escape room on the Escapp platform.","i.auth_email_label":"Email","i.auth_password_label":"Password","i.connecton_error_title":"Connection Error","i.connecton_error_text":"Unable to connect to the Escapp platform.","i.completion_title":"¡Escape Room Completed!","i.completion_text":"¡Congratulations! You have completed the escape room. On the escapp platform you can check the ranking to see in which position you have ended.","i.initialization_error_title":"Escapp client initialization error","i.initialization_error_endpoint":"Escapp client could not be started correctly because the Escapp endpoint was not provided.","i.initialization_error_endpoint_format":"Escapp client could not be started correctly because the format of the provided Escapp endpoint is incorrect.","i.initialization_error_linkedPuzzleIds":"Escapp client could not be started correctly because neither resourceId nor linkedPuzzleIds were provided.","i.participation_error_NOT_ACTIVE":"You are a participant of this escape room but the turn you have signed up for has not started yet.","i.participation_error_NOT_AUTHENTICATED":"Authentication is required before submitting puzzle solutions.","i.participation_error_NOT_PARTICIPANT":"You are not a participant of this escape room.","i.participation_error_NOT_STARTED":"You are a participant of this escape room but you need to click on the 'Start' button in the Escapp platform in order to start the escape room.","i.participation_error_TOO_LATE":"You are a participant of this escape room but the turn you have signed up for has ended or you have run out of time.","i.puzzles_required":"You shouldn't be here. You must complete previous puzzles before accessing this one.","i.restore_title":"Status update","i.restore_auto_text":"A newer application status was found on the Escapp server. The application is going to be updated based on this status.","i.restore_request_text":"A newer application status was found on the Escapp server. Do you want to update the application based on this status? If you don't, your application could be in a different state than the rest of your team members.","i.start_title":"Do you want to start the escape room?","i.start_text":"Press 'Ok' to start the escape room right now or 'Cancel' to start it later.<br/>Once the escape room has been started, time will start to run and it cannot be stopped.","i.notification_start":"The Escape Room begins. Good luck #{team}!","i.notification_member_join":"#{member} has joined the Escape Room","i.notification_member_leave":"#{member} has left the Escape Room","i.notification_hint_new":"Your team has obtained a new hint. Access the Escapp platform to read it.","i.notification_puzzle_success":"Your team has solved a new puzzle.","i.notification_puzzle_success_end1":"¡Good job #{team}!","i.notification_puzzle_success_end2":"¡Well done #{team}!","i.notification_puzzle_success_end3":"¡Keep up the good work #{team}!","i.notification_ranking_1_up":"Congratulations #{team}! You are first in the leaderboard","i.notification_ranking_2_up":"Awesome #{team}! You are second in the leaderboard","i.notification_ranking_3_up":"Very good #{team}! You are third in the leaderboard","i.notification_ranking_1_same":"Very good #{team}, you continue leading the leaderboard!","i.notification_ranking_2_same":"Great #{team}, you continue second in the leaderboard!","i.notification_ranking_3_same":"Good #{team}, you continue third in the leaderboard!","i.notification_ranking_2_down":"#{teamOther} just overtook you in the leaderboard! Now you are second in the leaderboard","i.notification_ranking_3_down":"#{teamOther} just overtook you in the leaderboard! Now you are third in the leaderboard","i.notification_ranking_up":"#{team} has advanced to position #{position} in the leaderboard!","i.notification_ranking_down":"#{teamOther} just overtook you! #{team} is now at position #{position} in the leaderboard","i.notification_ranking_down_generic":"#{team} is now at position #{position} in the leaderboard","i.notification_ranking_generic":"#{team} is at position #{position} in the leaderboard","i.notification_ranking_1_other":"#{team} is now at the first position of the leaderboard!","i.notification_ranking_2_other":"#{team} is now at the second position of the leaderboard!","i.notification_ranking_3_other":"#{team} is now at the third position of the leaderboard!","i.notification_time_hours_and_minutes":"#{hours} hours and #{minutes} minutes to run out of time","i.notification_time_one_hour_and_minutes":"One hour and #{minutes} minutes to run out of time","i.notification_time_hours":"#{hours} hours to run out of time","i.notification_time_one_hour":"1 hour to run out of time","i.notification_time_minutes":"#{minutes} minutes to run out of time","i.notification_time_one_minute":"1 minute to run out of time","i.notification_time_runout":"Time's up!","i.notification_time_runout_title":"Escape room completed","i.not_supported_title":"Unsupported web browser","i.not_supported_text":"We are sorry. Your web browser does not allow to perform this activity. Try a different browser."},es:{"i.button_ok":"Ok","i.button_nok":"Cancelar","i.button_retry":"Reintentar","i.generic_error_title":"Error","i.auth_title":"Autenticación necesaria","i.auth_text":"Introduce las credenciales (correo y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.","i.auth_title_wrong_credentials":"Error de autenticación","i.auth_text_wrong_credentials":"Las credenciales aportadas no son correctas. Debes introducir las credenciales (correo y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.","i.auth_email_label":"Correo electrónico","i.auth_password_label":"Contraseña","i.connecton_error_title":"Error de conexión","i.connecton_error_text":"No se ha podido conectar con la plataforma Escapp.","i.completion_title":"¡Escape Room Completada!","i.completion_text":"¡Enhorabuena! Has completado la escape room.<br/>En la <a href='#{escappURL}' target='_blank'>plataforma escapp</a> puedes consultar el ranking para ver en que posición has finalizado.","i.initialization_error_title":"Error de inicialización de Escapp client","i.initialization_error_endpoint":"Escapp client no se pudo iniciar correctamente porque no se proporcionó la URL de la plataforma Escapp.","i.initialization_error_endpoint_format":"Escapp client no se pudo iniciar correctamente porque la URL proporcionada para acceder a la plataforma Escapp tiene un formato incorrecto.","i.initialization_error_linkedPuzzleIds":"Escapp client no se pudo iniciar correctamente porque no se ha proporcionado ni resourceId ni linkedPuzzleIds.","i.participation_error_NOT_ACTIVE":"Eres participante de esta escape room pero el turno al que te has apuntado aún no ha empezado.","i.participation_error_NOT_AUTHENTICATED":"Es necesario autenticarse antes de enviar soluciones de retos.","i.participation_error_NOT_PARTICIPANT":"No eres participante de esta escape room.","i.participation_error_NOT_STARTED":"Eres participante de esta escape room pero no le has dado al botón de comenzar en la plataforma escapp.","i.participation_error_TOO_LATE":"Eres participante de esta escape room pero el turno al que te has apuntado ha terminado o te has quedado sin tiempo.","i.puzzles_required":"No deberías estar aquí. Debes completar retos anteriores antes de acceder a este.","i.restore_title":"Actualización de estado","i.restore_auto_text":"Se encontró un estado más reciente de la aplicación en el servidor de Escapp. Se va a actualizar la aplicación en base a este estado.","i.restore_request_text":"Se encontró un estado más reciente de la aplicación en el servidor de Escapp. ¿Desea actualizar la aplicación en base a este estado? Si no lo hace su aplicación podría estar en un estado diferente al del resto de miembros de su equipo.","i.start_title":"¿Quieres iniciar la escape room?","i.start_text":"Pulsa 'Ok' para empezar la escape room ahora mismo o 'Cancelar' para iniciarla en otro momento.<br/>Una vez iniciada la escape room, empezará a correr el tiempo y éste no podrá ser detenido.","i.notification_start":"Empieza la Escape Room. ¡Suerte #{team}!","i.notification_member_join":"#{member} se ha unido a la Escape Room","i.notification_member_leave":"#{member} ha abandonado la Escape Room","i.notification_hint_new":"Tu equipo ha conseguido una nueva pista. Accede a la plataforma Escapp para consultarla.","i.notification_puzzle_success":"Tu equipo ha superado un nuevo reto.","i.notification_puzzle_success_end1":"¡Buen trabajo #{team}!","i.notification_puzzle_success_end2":"¡Bien hecho #{team}!","i.notification_puzzle_success_end3":"¡Seguid así #{team}!","i.notification_ranking_1_up":"¡Enhorabuena #{team}! Vais primeros en la clasificación!","i.notification_ranking_2_up":"¡Genial #{team}! Vais segundos en la clasificación","i.notification_ranking_3_up":"¡Muy bien #{team}! Vais terceros en la clasificación","i.notification_ranking_1_same":"Muy bien #{team}, ¡seguís encabezando la clasificación!","i.notification_ranking_2_same":"Estupendo #{team}, ¡seguís segundos en la clasificación!","i.notification_ranking_3_same":"Bien #{team}, ¡seguís terceros en la clasificación!","i.notification_ranking_2_down":"¡#{teamOther} os acaba de adelantar en la clasificación! Ahora váis segundos","i.notification_ranking_3_down":"¡#{teamOther} os acaba de adelantar en la clasificación! Ahora váis terceros","i.notification_ranking_up":"¡#{team} ha avanzado a la #{position}º posición de la clasificación!","i.notification_ranking_down":"¡#{teamOther} os acaba de adelantar! #{team} ahora ocupa la #{position}º posición de la clasificación","i.notification_ranking_down_generic":"#{team} ahora ocupa la #{position}º posición de la clasificación","i.notification_ranking_generic":"#{team} está en la #{position}º posición de la clasificación","i.notification_ranking_1_other":"#{teamOther} se ha colocado en la primera posición de la clasificación","i.notification_ranking_2_other":"#{teamOther} se ha colocado en la segunda posición de la clasificación","i.notification_ranking_3_other":"#{teamOther} se ha colocado en la tercera posición de la clasificación","i.notification_time_hours_and_minutes":"Faltan #{hours} horas y #{minutes} minutos para que se agote el tiempo","i.notification_time_one_hour_and_minutes":"Falta 1 hora y #{minutes} minutos para que se agote el tiempo","i.notification_time_hours":"Faltan #{hours} horas para que se agote el tiempo","i.notification_time_one_hour":"Falta 1 hora para que se agote el tiempo","i.notification_time_minutes":"Faltan #{minutes} minutos para que se agote el tiempo","i.notification_time_one_minute":"Falta 1 minuto para que se agote el tiempo","i.notification_time_runout":"¡Se ha agotado el tiempo!","i.notification_time_runout_title":"Escape room finalizada","i.notsupported_title":"Navegador web no soportado","i.notsupported_text":"Lo sentimos. Su navegador web no permite realizar esta actividad. Pruebe con otro navegador."}};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e){if(void 0===d){var t={availableLocales:["es","en"],defaultLocale:"en",locale:void 0};if(f=s(t,e),d=h,"object"==p(e)&&"object"===p(e.locales)&&(d=s(d,e.locales),delete f.locales),!1===g(f.defaultLocale)&&(void 0!==f.availableLocales&&f.availableLocales instanceof Array&&f.availableLocales.length>0?f.defaultLocale=f.availableLocales[0]:f.defaultLocale=t.defaultLocale),!1===g(f.locale)){var n=function(){var e=a();if(g(e.locale))return e.locale;var t=navigator.language||navigator.userLanguage;"string"==typeof t&&-1!==t.indexOf("-")&&(t=t.split("-")[0]);if(g(t))return t;return}();g(n)?f.locale=n:f.locale=f.defaultLocale}}}function g(e){return"string"==typeof e&&-1!==f.availableLocales.indexOf(e)}function y(e,t){return void 0!==d[f.locale]&&"string"==typeof d[f.locale][e]?v(d[f.locale][e],t):f.locale!==f.defaultLocale&&void 0!==d[f.defaultLocale]&&"string"==typeof d[f.defaultLocale][e]?v(d[f.defaultLocale][e],t):"EN"!==f.locale&&"EN"!==f.defaultLocale&&void 0!==d.en&&"string"==typeof d.en[e]?v(d.en[e],t):void 0}function v(e,t){if("object"!==p(t))return e;for(var n in t){var i="#{"+n+"}";-1!==e.indexOf(i)&&(r=e,o=i,s=t[n],e=r.replace(new RegExp(o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g"),s))}var r,o,s;return e}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}var _,w,A=!1,S=!1;function E(e,t){void 0===_&&"string"==typeof e&&(_=e,A=x(),S=A&&!t)}function x(){return!!window.localStorage&&"function"==typeof localStorage.getItem&&"function"==typeof localStorage.setItem&&"function"==typeof localStorage.removeItem}function k(){if(!S)return{};var e=localStorage.getItem(_);if(null==e)return{};try{return JSON.parse(e)}catch(e){return{}}}function T(e){if(S){try{e=JSON.stringify(e),localStorage.setItem(_,e)}catch(e){return}return e}}function C(e){if(S){var t=k();return"object"===b(t)?t[e]:void 0}}function R(e,t){if(S){var n=k();return"object"===b(n)?(n[e]=t,T(n)):void 0}}function O(e){if(S){var t=k();return"object"===b(t)?(delete t[e],T(t)):void 0}}function M(){A&&localStorage.removeItem(_)}function P(e,t){if(S){var n=C(e);return"object"===b(n)?n[t]:void 0}}function N(e,t,n){if(S){var i=C(e);return void 0===i&&(i={}),"object"===b(i)?(i[t]=n,R(e,i)):void 0}}function z(e,t){if(S){var n=C(e);return"object"===b(n)?(delete n[t],R(e,n)):void 0}}var j=!1,F="appData";function B(e,t){j=void 0!==(w=e)&&!t}function I(e){return j?w.getChildSetting(F,e):void 0}function H(e,t){return j?w.saveChildSetting(F,e,t):void 0}function D(e){return j?w.removeChildSetting(F,e):void 0}function L(){return j?w.removeSetting(F):void 0}const q=function(){function e(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function t(t,n,i,r,o,s){return e((a=e(e(n,t),e(r,s)))<<(c=o)|a>>>32-c,i);var a,c}function n(e,n,i,r,o,s,a){return t(n&i|~n&r,e,n,o,s,a)}function i(e,n,i,r,o,s,a){return t(n&r|i&~r,e,n,o,s,a)}function r(e,n,i,r,o,s,a){return t(n^i^r,e,n,o,s,a)}function o(e,n,i,r,o,s,a){return t(i^(n|~r),e,n,o,s,a)}function s(t,s){var a,c,u,l,d;t[s>>5]|=128<<s%32,t[14+(s+64>>>9<<4)]=s;var f=1732584193,h=-271733879,p=-1732584194,m=271733878;for(a=0;a<t.length;a+=16)c=f,u=h,l=p,d=m,f=n(f,h,p,m,t[a],7,-680876936),m=n(m,f,h,p,t[a+1],12,-389564586),p=n(p,m,f,h,t[a+2],17,606105819),h=n(h,p,m,f,t[a+3],22,-1044525330),f=n(f,h,p,m,t[a+4],7,-176418897),m=n(m,f,h,p,t[a+5],12,1200080426),p=n(p,m,f,h,t[a+6],17,-1473231341),h=n(h,p,m,f,t[a+7],22,-45705983),f=n(f,h,p,m,t[a+8],7,1770035416),m=n(m,f,h,p,t[a+9],12,-1958414417),p=n(p,m,f,h,t[a+10],17,-42063),h=n(h,p,m,f,t[a+11],22,-1990404162),f=n(f,h,p,m,t[a+12],7,1804603682),m=n(m,f,h,p,t[a+13],12,-40341101),p=n(p,m,f,h,t[a+14],17,-1502002290),f=i(f,h=n(h,p,m,f,t[a+15],22,1236535329),p,m,t[a+1],5,-165796510),m=i(m,f,h,p,t[a+6],9,-1069501632),p=i(p,m,f,h,t[a+11],14,643717713),h=i(h,p,m,f,t[a],20,-373897302),f=i(f,h,p,m,t[a+5],5,-701558691),m=i(m,f,h,p,t[a+10],9,38016083),p=i(p,m,f,h,t[a+15],14,-660478335),h=i(h,p,m,f,t[a+4],20,-405537848),f=i(f,h,p,m,t[a+9],5,568446438),m=i(m,f,h,p,t[a+14],9,-1019803690),p=i(p,m,f,h,t[a+3],14,-187363961),h=i(h,p,m,f,t[a+8],20,1163531501),f=i(f,h,p,m,t[a+13],5,-1444681467),m=i(m,f,h,p,t[a+2],9,-51403784),p=i(p,m,f,h,t[a+7],14,1735328473),f=r(f,h=i(h,p,m,f,t[a+12],20,-1926607734),p,m,t[a+5],4,-378558),m=r(m,f,h,p,t[a+8],11,-2022574463),p=r(p,m,f,h,t[a+11],16,1839030562),h=r(h,p,m,f,t[a+14],23,-35309556),f=r(f,h,p,m,t[a+1],4,-1530992060),m=r(m,f,h,p,t[a+4],11,1272893353),p=r(p,m,f,h,t[a+7],16,-155497632),h=r(h,p,m,f,t[a+10],23,-1094730640),f=r(f,h,p,m,t[a+13],4,681279174),m=r(m,f,h,p,t[a],11,-358537222),p=r(p,m,f,h,t[a+3],16,-722521979),h=r(h,p,m,f,t[a+6],23,76029189),f=r(f,h,p,m,t[a+9],4,-640364487),m=r(m,f,h,p,t[a+12],11,-421815835),p=r(p,m,f,h,t[a+15],16,530742520),f=o(f,h=r(h,p,m,f,t[a+2],23,-995338651),p,m,t[a],6,-198630844),m=o(m,f,h,p,t[a+7],10,1126891415),p=o(p,m,f,h,t[a+14],15,-1416354905),h=o(h,p,m,f,t[a+5],21,-57434055),f=o(f,h,p,m,t[a+12],6,1700485571),m=o(m,f,h,p,t[a+3],10,-1894986606),p=o(p,m,f,h,t[a+10],15,-1051523),h=o(h,p,m,f,t[a+1],21,-2054922799),f=o(f,h,p,m,t[a+8],6,1873313359),m=o(m,f,h,p,t[a+15],10,-30611744),p=o(p,m,f,h,t[a+6],15,-1560198380),h=o(h,p,m,f,t[a+13],21,1309151649),f=o(f,h,p,m,t[a+4],6,-145523070),m=o(m,f,h,p,t[a+11],10,-1120210379),p=o(p,m,f,h,t[a+2],15,718787259),h=o(h,p,m,f,t[a+9],21,-343485551),f=e(f,c),h=e(h,u),p=e(p,l),m=e(m,d);return[f,h,p,m]}function a(e){var t,n="",i=32*e.length;for(t=0;t<i;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function c(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var i=8*e.length;for(t=0;t<i;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function u(e){var t,n,i="0123456789abcdef",r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+=i.charAt(t>>>4&15)+i.charAt(15&t);return r}function l(e){return unescape(encodeURIComponent(e))}function d(e){return function(e){return a(s(c(e),8*e.length))}(l(e))}function f(e,t){return function(e,t){var n,i,r=c(e),o=[],u=[];for(o[15]=u[15]=void 0,r.length>16&&(r=s(r,8*e.length)),n=0;n<16;n+=1)o[n]=909522486^r[n],u[n]=1549556828^r[n];return i=s(o.concat(c(t)),512+8*t.length),a(s(u.concat(i),640))}(l(e),l(t))}return function(e,t,n){return t?n?f(t,e):u(f(t,e)):n?d(e):u(d(e))}}();var U=__webpack_require__(329),W=!1,V=void 0;function X(e){!0!==W&&(W=!0,V=e)}function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Y(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function G(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,J(i.key),i)}}function J(e){var t=function(e,t){if("object"!=K(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=K(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==K(t)?t:t+""}const Z=($=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],ee=function(){return e=function e(t){var n=t.targetModal,i=t.triggers,r=void 0===i?[]:i,o=t.onShow,s=void 0===o?function(){}:o,a=t.onClose,c=void 0===a?function(){}:a,u=t.openTrigger,l=void 0===u?"data-micromodal-trigger":u,d=t.closeTrigger,f=void 0===d?"data-micromodal-close":d,h=t.disableScroll,p=void 0!==h&&h,m=t.disableFocus,g=void 0!==m&&m,y=t.awaitCloseAnimation,v=void 0!==y&&y,b=t.awaitOpenAnimation,_=void 0!==b&&b,w=t.debugMode,A=void 0!==w&&w,S=t.inputs,E=void 0===S?void 0:S,x=t.buttons,k=void 0===x?void 0:x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.getElementById(n),this.config={debugMode:A,disableScroll:p,openTrigger:l,closeTrigger:f,onShow:s,onClose:c,awaitCloseAnimation:v,awaitOpenAnimation:_,disableFocus:g,inputs:E,buttons:k},r.length>0&&this.registerTriggers.apply(this,Y(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this),this.onInputKeyup=this.onInputKeyup.bind(this),void 0!==E&&E.length>0?(this.modal.classList.add("require-input"),this.modal.classList.add("invalid-input")):(this.modal.classList.remove("require-input"),this.modal.classList.remove("invalid-input"))},t=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var t=function(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",t,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement)}},{key:"closeModal",value:function(e){var t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus();var n={choice:void 0,inputs:[]};if(void 0!==this.config.inputs){for(var i=[],r=0;r<this.config.inputs.length;r++){var o=document.getElementById("escapp-modal-input"+(r+1));i.push(o.value)}n.inputs=i}void 0!==this.config.buttons&&this.config.buttons instanceof Array&&this.config.buttons.length>0?(n.choice=!1,void 0!==e&&(13===e.keyCode&&"string"==typeof this.config.buttons[0].response?n.choice=this.config.buttons[0].response:void 0!==e.target&&"string"==typeof e.target.getAttribute("response")&&(n.choice=e.target.getAttribute("response")))):n.choice=!0,this.config.onClose(this.modal,n),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",(function e(){t.classList.remove("is-open"),t.removeEventListener("animationend",e,!1)}),!1):t.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:"",height:""});break;case"disable":Object.assign(t.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){if(this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown),void 0!==this.config.inputs)for(var e=0;e<this.config.inputs.length;e++){var t=document.getElementById("escapp-modal-input"+(e+1));t&&t.addEventListener("keydown",this.onInputKeyup)}}},{key:"removeEventListeners",value:function(){if(this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown),void 0!==this.config.inputs)for(var e=0;e<this.config.inputs.length;e++){var t=document.getElementById("escapp-modal-input"+(e+1));t&&t.removeEventListener("keydown",this.onInputKeyup)}}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&((e.target.classList.contains("ignore_input_validation")||this.validateInputs())&&this.closeModal(e),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&(void 0!==this.config.inputs||void 0!==this.config.buttons&&1!==this.config.buttons.length||(this.closeModal(e),e.preventDefault())),13===e.keyCode&&(!this.validateInputs()||void 0!==this.config.buttons&&1!==this.config.buttons.length||(this.closeModal(e),e.preventDefault())),9===e.keyCode&&this.maintainFocus(e)}},{key:"onInputKeyup",value:function(e){var t=this;setTimeout((function(){t.validateInputs()?t.modal.classList.remove("invalid-input"):t.modal.classList.add("invalid-input")}),20)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll($);return Array.apply(void 0,Y(e))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes();e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var t=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=t.indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),e.shiftKey||n!==t.length-1||(t[0].focus(),e.preventDefault())}else t[0].focus()}},{key:"validateInputs",value:function(){if(void 0===this.config.inputs||0===this.config.inputs.length)return!0;for(var e=0;e<this.config.inputs.length;e++){var t=document.getElementById("escapp-modal-input"+(e+1));if(!1===this.validateInput(t,this.config.inputs[e]))return!1}return!0}},{key:"validateInput",value:function(e,t){var n=e.value;return""!==n&&("function"!=typeof t.validate||t.validate(n))}}],t&&G(e.prototype,t),n&&G(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}(),te=null,ne=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="escapp-modal" id="'.concat(e,'"></div>')),!1},ie=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var n in t)ne(n);return!0},re={init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=Y(document.querySelectorAll("[".concat(t.openTrigger,"]"))),i=function(e,t){var n=[];return e.forEach((function(e){var i=e.attributes[t].value;void 0===n[i]&&(n[i]=[]),n[i].push(e)})),n}(n,t.openTrigger);if(!0!==t.debugMode||!1!==ie(n,i))for(var r in i){var o=i[r];t.targetModal=r,t.triggers=Y(o),te=new ee(t)}},show:function(e,t){var n=t||{};n.targetModal=e,!0===n.debugMode&&!1===ne(e)||(te=new ee(n)).showModal()},close:function(e,t){(t||{}).targetModal=e,e&&(te.modal=document.getElementById(e)),"function"==typeof t.onClose&&(te.config.onClose=t.onClose),te.closeModal()}},re);var $,ee,te,ne,ie,re,oe,se=__webpack_require__(883),ae=!1;function ce(e){if(se("#escapp-modal").hasClass("is-open"))Z.close("escapp-modal",{onClose:function(t,n){setTimeout((function(){ce(e)}),50)}});else{var t;if(se("#escapp-modal-title").html(e.title),se("#escapp-modal-content p.content").html(e.text),se(".escapp-modal-input").remove(),"string"==typeof e.img?(se("#escapp-modal .escapp-modal__content div.escapp_content_img_wrapper img").attr("src",e.img),se("#escapp-modal .escapp-modal__content div.escapp_content_img_wrapper").show()):(se("#escapp-modal .escapp-modal__content div.escapp_content_img_wrapper img").attr("src",""),se("#escapp-modal .escapp-modal__content div.escapp_content_img_wrapper").hide()),!1!==e.escapp)t="logo";else{var n=["logo","lock"].indexOf(e.icon);-1!==n&&(t=["logo","lock"][n])}if(void 0===t?se("div.escapp-modal__container img.dialog_corner").hide():(se("div.escapp-modal__container img.dialog_corner."+t).show(),se("div.escapp-modal__container img.dialog_corner:not(."+t+")").hide()),e.inputs instanceof Array&&e.inputs.length>0)for(var i=0;i<e.inputs.length;i++)se("#escapp-modal-content").append('<p><input id="escapp-modal-input'+(i+1)+'" class="escapp-modal-input" type="text" spellcheck="false"/></p>'),"string"==typeof e.inputs[i].type&&se("#escapp-modal-input"+(i+1)).attr("type",e.inputs[i].type),"string"==typeof e.inputs[i].label&&se("#escapp-modal-input"+(i+1)).attr("placeholder",e.inputs[i].label),"string"==typeof e.inputs[i].autocomplete&&se("#escapp-modal-input"+(i+1)).attr("autocomplete",e.inputs[i].autocomplete);if(se("footer.escapp-modal__footer .escapp-modal__btn").remove(),e.buttons instanceof Array)for(var r=e.buttons.length-1;r>=0;r--)se("footer.escapp-modal__footer").append('<button id="escapp-modal-button'+(r+1)+'"class="escapp-modal__btn" data-micromodal-close>'+e.buttons[r].label+"</button>"),"string"==typeof e.buttons[r].response&&se("#escapp-modal-button"+(r+1)).attr("response",e.buttons[r].response),!0===e.buttons[r].ignoreInputs&&se("#escapp-modal-button"+(r+1)).addClass("ignore_input_validation");else se("footer.escapp-modal__footer").append('<button class="escapp-modal__btn" data-micromodal-close>'+y("i.button_ok")+"</button>");!1!==e.escapp?(se("#escapp-modal").addClass("escapp_dialog"),se("#escapp-modal").removeClass("escapp_custom_dialog")):(se("#escapp-modal").removeClass("escapp_dialog"),se("#escapp-modal").addClass("escapp_custom_dialog")),Z.show("escapp-modal",{onShow:function(t,n){"function"==typeof e.openCallback&&e.openCallback()},onClose:function(t,n){"function"==typeof e.closeCallback&&e.closeCallback(n)},inputs:e.inputs,buttons:e.buttons})}}__webpack_require__(20);var ue=__webpack_require__(883);function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}var de,fe=!1,he=!1,pe=!1,me=0;function ge(e){if(!0!==fe){switch(fe=!0,e.enabled){case!0:he=!0;break;case"FALSE_IF_EMBED":he=!1===function(){if("boolean"==typeof u)return u;var e=!0;try{e=window.location!==window.parent.location}catch(e){}return u=e,e}();break;default:he=!1}ue.notify.addStyle("escapp",{html:"<div>\n<span data-notify-text></span>\n</div>"})}}function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!0===he&&"object"===le(e)&&"string"==typeof e.text&&""!==e.text.trim())switch(!0===e.escapp&&(e.type="event"),-1===["ranking","info","warning","event","time","error"].indexOf(e.type)&&(e.type="event"),e.type){case"ranking":return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(e,{className:"ranking"});return ve(t)}(e);case"info":return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(e,{className:"info"});return ve(t)}(e);case"warning":return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(e,{className:"warn",autoHide:!1});return ve(t)}(e);case"event":return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(e,{className:"event"});return ve(t)}(e);case"time":return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(e,{className:"time"});return ve(t)}(e);case"error":return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(e,{className:"error",autoHide:!1});return ve(t)}(e);default:return}}function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=be(e.text),n=s({className:"event",style:"escapp",clickToHide:!0,autoHide:!0,autoHideDelay:be(e.text),globalPosition:"top right",showAnimation:"fadeIn",showDuration:600,hideAnimation:"fadeOut",hideDuration:600,gap:0},e);-1===["success","info","warn","error","ranking","event"].indexOf(e.className)&&(e.className="event"),me=t,!1===pe&&(pe=!0,de=setInterval((function(){0===(me=Math.max(0,me-1e3))&&void 0!==de&&(clearInterval(de),pe=!1)}),1e3)),ue.notify(n.text,n)}function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return me+Math.min(2e4,Math.max(4e3,1e3+500*e.split(" ").length))}var _e={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};_e.start=Ne,_e.stop=ze,_e.toggle=function(){Se?ze():Ne()},_e.pause=Oe,_e.resume=Me,_e.togglePause=function(){Ee?Me():Oe()},_e.isPaused=function(){return Ee},_e.remove=function(){stop(),Ee=!1,ke=[]},_e.isRunning=function(){return Se};var we=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,Ae=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],Se=!1,Ee=!1,xe=Date.now(),ke=[],Te=0,Ce=null;function Re(e,t,n){return e.color=Ae[Math.random()*Ae.length|0]+(_e.alpha+")"),e.color2=Ae[Math.random()*Ae.length|0]+(_e.alpha+")"),e.x=Math.random()*t,e.y=Math.random()*n-n,e.diameter=10*Math.random()+5,e.tilt=10*Math.random()-10,e.tiltAngleIncrement=.07*Math.random()+.05,e.tiltAngle=Math.random()*Math.PI,e}function Oe(){Ee=!0}function Me(){Ee=!1,Pe()}function Pe(){if(!Ee)if(0===ke.length)Ce.clearRect(0,0,window.innerWidth,window.innerHeight);else{var e=Date.now(),t=e-xe;(!we||t>_e.frameInterval)&&(Ce.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var e,t=window.innerWidth,n=window.innerHeight;Te+=.01;for(var i=0;i<ke.length;i++)e=ke[i],!Se&&e.y<-15?e.y=n+100:(e.tiltAngle+=e.tiltAngleIncrement,e.x+=Math.sin(Te)-.5,e.y+=.5*(Math.cos(Te)+e.diameter+_e.speed),e.tilt=15*Math.sin(e.tiltAngle)),(e.x>t+20||e.x<-20||e.y>n)&&(Se&&ke.length<=_e.maxCount?Re(e,t,n):(ke.splice(i,1),i--))}(),function(e){for(var t,n,i,r,o=0;o<ke.length;o++){if(t=ke[o],e.beginPath(),e.lineWidth=t.diameter,n=(i=t.x+t.tilt)+t.diameter/2,r=t.y+t.tilt+t.diameter/2,_e.gradient){var s=e.createLinearGradient(n,t.y,i,r);s.addColorStop("0",t.color),s.addColorStop("1.0",t.color2),e.strokeStyle=s}else e.strokeStyle=t.color;e.moveTo(n,t.y),e.lineTo(i,r),e.stroke()}}(Ce),xe=e-t%_e.frameInterval),requestAnimationFrame(Pe)}}function Ne(e,t,n){var i=window.innerWidth,r=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,_e.frameInterval)};var o=document.getElementById("confetti-canvas");null===o?((o=document.createElement("canvas")).setAttribute("id","confetti-canvas"),o.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(o),o.width=i,o.height=r,window.addEventListener("resize",(function(){o.width=window.innerWidth,o.height=window.innerHeight}),!0),Ce=o.getContext("2d")):null===Ce&&(Ce=o.getContext("2d"));var s=_e.maxCount;if(t)if(n)if(t==n)s=ke.length+n;else{if(t>n){var a=t;t=n,n=a}s=ke.length+(Math.random()*(n-t)+t|0)}else s=ke.length+t;else n&&(s=ke.length+n);for(;ke.length<s;)ke.push(Re({},i,r));Se=!0,Ee=!1,Pe(),e&&window.setTimeout(ze,e)}function ze(){Se=!1}var je=!1,Fe=[];const Be=Object.create(null);Be.open="0",Be.close="1",Be.ping="2",Be.pong="3",Be.message="4",Be.upgrade="5",Be.noop="6";const Ie=Object.create(null);Object.keys(Be).forEach((e=>{Ie[Be[e]]=e}));const He={type:"error",data:"parser error"},De="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),Le="function"==typeof ArrayBuffer,qe=e=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Ue=({type:e,data:t},n,i)=>De&&t instanceof Blob?n?i(t):We(t,i):Le&&(t instanceof ArrayBuffer||qe(t))?n?i(t):We(new Blob([t]),i):i(Be[e]+(t||"")),We=(e,t)=>{const n=new FileReader;return n.onload=function(){const e=n.result.split(",")[1];t("b"+(e||""))},n.readAsDataURL(e)};function Ve(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Xe;const Ke="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ye="undefined"==typeof Uint8Array?[]:new Uint8Array(256);for(let e=0;e<64;e++)Ye[Ke.charCodeAt(e)]=e;const Qe="function"==typeof ArrayBuffer,Ge=(e,t)=>{if("string"!=typeof e)return{type:"message",data:Ze(e,t)};const n=e.charAt(0);if("b"===n)return{type:"message",data:Je(e.substring(1),t)};return Ie[n]?e.length>1?{type:Ie[n],data:e.substring(1)}:{type:Ie[n]}:He},Je=(e,t)=>{if(Qe){const n=(e=>{let t,n,i,r,o,s=.75*e.length,a=e.length,c=0;"="===e[e.length-1]&&(s--,"="===e[e.length-2]&&s--);const u=new ArrayBuffer(s),l=new Uint8Array(u);for(t=0;t<a;t+=4)n=Ye[e.charCodeAt(t)],i=Ye[e.charCodeAt(t+1)],r=Ye[e.charCodeAt(t+2)],o=Ye[e.charCodeAt(t+3)],l[c++]=n<<2|i>>4,l[c++]=(15&i)<<4|r>>2,l[c++]=(3&r)<<6|63&o;return u})(e);return Ze(n,t)}return{base64:!0,data:e}},Ze=(e,t)=>"blob"===t?e instanceof Blob?e:new Blob([e]):e instanceof ArrayBuffer?e:e.buffer,$e=String.fromCharCode(30);function et(){return new TransformStream({transform(e,t){!function(e,t){De&&e.data instanceof Blob?e.data.arrayBuffer().then(Ve).then(t):Le&&(e.data instanceof ArrayBuffer||qe(e.data))?t(Ve(e.data)):Ue(e,!1,(e=>{Xe||(Xe=new TextEncoder),t(Xe.encode(e))}))}(e,(n=>{const i=n.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const e=new DataView(r.buffer);e.setUint8(0,126),e.setUint16(1,i)}else{r=new Uint8Array(9);const e=new DataView(r.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(i))}e.data&&"string"!=typeof e.data&&(r[0]|=128),t.enqueue(r),t.enqueue(n)}))}})}let tt;function nt(e){return e.reduce(((e,t)=>e+t.length),0)}function it(e,t){if(e[0].length===t)return e.shift();const n=new Uint8Array(t);let i=0;for(let r=0;r<t;r++)n[r]=e[0][i++],i===e[0].length&&(e.shift(),i=0);return e.length&&i<e[0].length&&(e[0]=e[0].slice(i)),n}function rt(e){if(e)return function(e){for(var t in rt.prototype)e[t]=rt.prototype[t];return e}(e)}rt.prototype.on=rt.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},rt.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},rt.prototype.off=rt.prototype.removeListener=rt.prototype.removeAllListeners=rt.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,i=this._callbacks["$"+e];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r=0;r<i.length;r++)if((n=i[r])===t||n.fn===t){i.splice(r,1);break}return 0===i.length&&delete this._callbacks["$"+e],this},rt.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),n=this._callbacks["$"+e],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(n){i=0;for(var r=(n=n.slice(0)).length;i<r;++i)n[i].apply(this,t)}return this},rt.prototype.emitReserved=rt.prototype.emit,rt.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},rt.prototype.hasListeners=function(e){return!!this.listeners(e).length};const ot="function"==typeof Promise&&"function"==typeof Promise.resolve?e=>Promise.resolve().then(e):(e,t)=>t(e,0),st="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function at(e,...t){return t.reduce(((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t)),{})}const ct=st.setTimeout,ut=st.clearTimeout;function lt(e,t){t.useNativeTimers?(e.setTimeoutFn=ct.bind(st),e.clearTimeoutFn=ut.bind(st)):(e.setTimeoutFn=st.setTimeout.bind(st),e.clearTimeoutFn=st.clearTimeout.bind(st))}function dt(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}class ft extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class ht extends rt{constructor(e){super(),this.writable=!1,lt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new ft(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(e){"open"===this.readyState&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ge(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return-1===e.indexOf(":")?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(443!==this.opts.port)||!this.opts.secure&&80!==Number(this.opts.port))?":"+this.opts.port:""}_query(e){const t=function(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}(e);return t.length?"?"+t:""}}class pt extends ht{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",(function(){--e||t()}))),this.writable||(e++,this.once("drain",(function(){--e||t()})))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){((e,t)=>{const n=e.split($e),i=[];for(let e=0;e<n.length;e++){const r=Ge(n[e],t);if(i.push(r),"error"===r.type)break}return i})(e,this.socket.binaryType).forEach((e=>{if("opening"===this.readyState&&"open"===e.type&&this.onOpen(),"close"===e.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)})),"closed"!==this.readyState&&(this._polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}write(e){this.writable=!1,((e,t)=>{const n=e.length,i=new Array(n);let r=0;e.forEach(((e,o)=>{Ue(e,!1,(e=>{i[o]=e,++r===n&&t(i.join($e))}))}))})(e,(e=>{this.doWrite(e,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=dt()),this.supportsBinary||t.sid||(t.b64=1),this.createUri(e,t)}}let mt=!1;try{mt="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){}const gt=mt;function yt(){}class vt extends pt{constructor(e){if(super(e),"undefined"!=typeof location){const t="https:"===location.protocol;let n=location.port;n||(n=t?"443":"80"),this.xd="undefined"!=typeof location&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",((e,t)=>{this.onError("xhr post error",e,t)}))}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",((e,t)=>{this.onError("xhr poll error",e,t)})),this.pollXhr=e}}class bt extends rt{constructor(e,t,n){super(),this.createRequest=e,lt(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=void 0!==n.data?n.data:null,this._create()}_create(){var e;const t=at(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&n.setRequestHeader(e,this._opts.extraHeaders[e])}}catch(e){}if("POST"===this._method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(e){}try{n.setRequestHeader("Accept","*/*")}catch(e){}null===(e=this._opts.cookieJar)||void 0===e||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var e;3===n.readyState&&(null===(e=this._opts.cookieJar)||void 0===e||e.parseCookies(n.getResponseHeader("set-cookie"))),4===n.readyState&&(200===n.status||1223===n.status?this._onLoad():this.setTimeoutFn((()=>{this._onError("number"==typeof n.status?n.status:0)}),0))},n.send(this._data)}catch(e){return void this.setTimeoutFn((()=>{this._onError(e)}),0)}"undefined"!=typeof document&&(this._index=bt.requestsCount++,bt.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(void 0!==this._xhr&&null!==this._xhr){if(this._xhr.onreadystatechange=yt,e)try{this._xhr.abort()}catch(e){}"undefined"!=typeof document&&delete bt.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;null!==e&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}if(bt.requestsCount=0,bt.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",_t);else if("function"==typeof addEventListener){addEventListener("onpagehide"in st?"pagehide":"unload",_t,!1)}function _t(){for(let e in bt.requests)bt.requests.hasOwnProperty(e)&&bt.requests[e].abort()}const wt=function(){const e=At({xdomain:!1});return e&&null!==e.responseType}();function At(e){const t=e.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!t||gt))return new XMLHttpRequest}catch(e){}if(!t)try{return new(st[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(e){}}const St="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class Et extends ht{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=St?{}:at(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(e){return this.emitReserved("error",e)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Ue(n,this.supportsBinary,(e=>{try{this.doWrite(n,e)}catch(e){}i&&ot((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){void 0!==this.ws&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=dt()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const xt=st.WebSocket||st.MozWebSocket;const kt={websocket:class extends Et{createSocket(e,t,n){return St?new xt(e,t,n):t?new xt(e,t):new xt(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends ht{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then((()=>{this.onClose()})).catch((e=>{this.onError("webtransport error",e)})),this._transport.ready.then((()=>{this._transport.createBidirectionalStream().then((e=>{const t=function(e,t){tt||(tt=new TextDecoder);const n=[];let i=0,r=-1,o=!1;return new TransformStream({transform(s,a){for(n.push(s);;){if(0===i){if(nt(n)<1)break;const e=it(n,1);o=!(128&~e[0]),r=127&e[0],i=r<126?3:126===r?1:2}else if(1===i){if(nt(n)<2)break;const e=it(n,2);r=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),i=3}else if(2===i){if(nt(n)<8)break;const e=it(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),o=t.getUint32(0);if(o>Math.pow(2,21)-1){a.enqueue(He);break}r=o*Math.pow(2,32)+t.getUint32(4),i=3}else{if(nt(n)<r)break;const e=it(n,r);a.enqueue(Ge(o?e:tt.decode(e),t)),i=0}if(0===r||r>e){a.enqueue(He);break}}}})}(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=et();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const r=()=>{n.read().then((({done:e,value:t})=>{e||(this.onPacket(t),r())})).catch((e=>{}))};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then((()=>this.onOpen()))}))}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this._writer.write(n).then((()=>{i&&ot((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){var e;null===(e=this._transport)||void 0===e||e.close()}},polling:class extends vt{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=wt&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new bt(At,this.uri(),e)}}},Tt=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ct=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Rt(e){if(e.length>8e3)throw"URI too long";const t=e,n=e.indexOf("["),i=e.indexOf("]");-1!=n&&-1!=i&&(e=e.substring(0,n)+e.substring(n,i).replace(/:/g,";")+e.substring(i,e.length));let r=Tt.exec(e||""),o={},s=14;for(;s--;)o[Ct[s]]=r[s]||"";return-1!=n&&-1!=i&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=function(e,t){const n=/\/{2,9}/g,i=t.replace(n,"/").split("/");"/"!=t.slice(0,1)&&0!==t.length||i.splice(0,1);"/"==t.slice(-1)&&i.splice(i.length-1,1);return i}(0,o.path),o.queryKey=function(e,t){const n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(e,t,i){t&&(n[t]=i)})),n}(0,o.query),o}const Ot="function"==typeof addEventListener&&"function"==typeof removeEventListener,Mt=[];Ot&&addEventListener("offline",(()=>{Mt.forEach((e=>e()))}),!1);class Pt extends rt{constructor(e,t){if(super(),this.binaryType="arraybuffer",this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&"object"==typeof e&&(t=e,e=null),e){const n=Rt(e);t.hostname=n.host,t.secure="https"===n.protocol||"wss"===n.protocol,t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=Rt(t.host).host);lt(this,t),this.secure=null!=t.secure?t.secure:"undefined"!=typeof location&&"https:"===location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=t.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach((e=>{const t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e})),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"==typeof this.opts.query&&(this.opts.query=function(e){let t={},n=e.split("&");for(let e=0,i=n.length;e<i;e++){let i=n[e].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t}(this.opts.query)),Ot&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Mt.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);const e=this.opts.rememberUpgrade&&Pt.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket")?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",(e=>this._onClose("transport close",e)))}onOpen(){this.readyState="open",Pt.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush()}_onPacket(e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data)}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),"closed"!==this.readyState&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn((()=>{this._onClose("ping timeout")}),e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(e+="string"==typeof(t=i)?function(e){let t=0,n=0;for(let i=0,r=e.length;i<r;i++)t=e.charCodeAt(i),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(i++,n+=4);return n}(t):Math.ceil(1.33*(t.byteLength||t.size))),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}var t;return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,ot((()=>{this._onClose("ping timeout")}),this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,i){if("function"==typeof t&&(i=t,t=void 0),"function"==typeof n&&(i=n,n=null),"closing"===this.readyState||"closed"===this.readyState)return;(n=n||{}).compress=!1!==n.compress;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?n():e()})):this.upgrading?n():e()),this}_onError(e){if(Pt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&"opening"===this.readyState)return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ot&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const e=Mt.indexOf(this._offlineEventListener);-1!==e&&Mt.splice(e,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Pt.protocol=4;class Nt extends Pt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),"open"===this.readyState&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;Pt.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",(e=>{if(!n)if("pong"===e.type&&"probe"===e.data){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Pt.priorWebsocketSuccess="websocket"===t.name,this.transport.pause((()=>{n||"closed"!==this.readyState&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())}))}else{const e=new Error("probe error");e.transport=t.name,this.emitReserved("upgradeError",e)}})))};function r(){n||(n=!0,u(),t.close(),t=null)}const o=e=>{const n=new Error("probe error: "+e);n.transport=t.name,r(),this.emitReserved("upgradeError",n)};function s(){o("transport closed")}function a(){o("socket closed")}function c(e){t&&e.name!==t.name&&r()}const u=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",s),this.off("close",a),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",s),this.once("close",a),this.once("upgrading",c),-1!==this._upgrades.indexOf("webtransport")&&"webtransport"!==e?this.setTimeoutFn((()=>{n||t.open()}),200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}class zt extends Nt{constructor(e,t={}){const n="object"==typeof e?e:t;(!n.transports||n.transports&&"string"==typeof n.transports[0])&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map((e=>kt[e])).filter((e=>!!e))),super(e,n)}}const jt="function"==typeof ArrayBuffer,Ft=Object.prototype.toString,Bt="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Ft.call(Blob),It="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===Ft.call(File);function Ht(e){return jt&&(e instanceof ArrayBuffer||(e=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer)(e))||Bt&&e instanceof Blob||It&&e instanceof File}function Dt(e,t){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(Dt(e[t]))return!0;return!1}if(Ht(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return Dt(e.toJSON(),!0);for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&Dt(e[t]))return!0;return!1}function Lt(e){const t=[],n=e.data,i=e;return i.data=qt(n,t),i.attachments=t.length,{packet:i,buffers:t}}function qt(e,t){if(!e)return e;if(Ht(e)){const n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){const n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=qt(e[i],t);return n}if("object"==typeof e&&!(e instanceof Date)){const n={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=qt(e[i],t));return n}return e}function Ut(e,t){return e.data=Wt(e.data,t),delete e.attachments,e}function Wt(e,t){if(!e)return e;if(e&&!0===e._placeholder){if("number"==typeof e.num&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Wt(e[n],t);else if("object"==typeof e)for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Wt(e[n],t));return e}const Vt=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Xt=5;var Kt;!function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"}(Kt||(Kt={}));class Yt{constructor(e){this.replacer=e}encode(e){return e.type!==Kt.EVENT&&e.type!==Kt.ACK||!Dt(e)?[this.encodeAsString(e)]:this.encodeAsBinary({type:e.type===Kt.EVENT?Kt.BINARY_EVENT:Kt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id})}encodeAsString(e){let t=""+e.type;return e.type!==Kt.BINARY_EVENT&&e.type!==Kt.BINARY_ACK||(t+=e.attachments+"-"),e.nsp&&"/"!==e.nsp&&(t+=e.nsp+","),null!=e.id&&(t+=e.id),null!=e.data&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Lt(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}function Qt(e){return"[object Object]"===Object.prototype.toString.call(e)}class Gt extends rt{constructor(e){super(),this.reviver=e}add(e){let t;if("string"==typeof e){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Kt.BINARY_EVENT;n||t.type===Kt.BINARY_ACK?(t.type=n?Kt.EVENT:Kt.ACK,this.reconstructor=new Jt(t),0===t.attachments&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else{if(!Ht(e)&&!e.base64)throw new Error("Unknown type: "+e);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t))}}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(void 0===Kt[n.type])throw new Error("unknown packet type "+n.type);if(n.type===Kt.BINARY_EVENT||n.type===Kt.BINARY_ACK){const i=t+1;for(;"-"!==e.charAt(++t)&&t!=e.length;);const r=e.substring(i,t);if(r!=Number(r)||"-"!==e.charAt(t))throw new Error("Illegal attachments");n.attachments=Number(r)}if("/"===e.charAt(t+1)){const i=t+1;for(;++t;){if(","===e.charAt(t))break;if(t===e.length)break}n.nsp=e.substring(i,t)}else n.nsp="/";const i=e.charAt(t+1);if(""!==i&&Number(i)==i){const i=t+1;for(;++t;){const n=e.charAt(t);if(null==n||Number(n)!=n){--t;break}if(t===e.length)break}n.id=Number(e.substring(i,t+1))}if(e.charAt(++t)){const i=this.tryParse(e.substr(t));if(!Gt.isPayloadValid(n.type,i))throw new Error("invalid payload");n.data=i}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch(e){return!1}}static isPayloadValid(e,t){switch(e){case Kt.CONNECT:return Qt(t);case Kt.DISCONNECT:return void 0===t;case Kt.CONNECT_ERROR:return"string"==typeof t||Qt(t);case Kt.EVENT:case Kt.BINARY_EVENT:return Array.isArray(t)&&("number"==typeof t[0]||"string"==typeof t[0]&&-1===Vt.indexOf(t[0]));case Kt.ACK:case Kt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Jt{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const e=Ut(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function Zt(e,t,n){return e.on(t,n),function(){e.off(t,n)}}const $t=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class en extends rt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Zt(e,"open",this.onopen.bind(this)),Zt(e,"packet",this.onpacket.bind(this)),Zt(e,"error",this.onerror.bind(this)),Zt(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,i,r;if($t.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:Kt.EVENT,data:t,options:{}};if(o.options.compress=!1!==this.flags.compress,"function"==typeof t[t.length-1]){const e=this.ids++,n=t.pop();this._registerAckCallback(e,n),o.id=e}const s=null===(i=null===(n=this.io.engine)||void 0===n?void 0:n.transport)||void 0===i?void 0:i.writable,a=this.connected&&!(null===(r=this.io.engine)||void 0===r?void 0:r._hasPingExpired());return this.flags.volatile&&!s||(a?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;const i=null!==(n=this.flags.timeout)&&void 0!==n?n:this._opts.ackTimeout;if(void 0===i)return void(this.acks[e]=t);const r=this.io.setTimeoutFn((()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,new Error("operation has timed out"))}),i),o=(...e)=>{this.io.clearTimeoutFn(r),t.apply(this,e)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise(((n,i)=>{const r=(e,t)=>e?i(e):n(t);r.withError=!0,t.push(r),this.emit(e,...t)}))}_addToQueue(e){let t;"function"==typeof e[e.length-1]&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push(((e,...i)=>{if(n!==this._queue[0])return;return null!==e?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(e)):(this._queue.shift(),t&&t(null,...i)),n.pending=!1,this._drainQueue()})),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||0===this._queue.length)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){"function"==typeof this.auth?this.auth((e=>{this._sendConnectPacket(e)})):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Kt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach((e=>{if(!this.sendBuffer.some((t=>String(t.id)===e))){const t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,new Error("socket has been disconnected"))}}))}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Kt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Kt.EVENT:case Kt.BINARY_EVENT:this.onevent(e);break;case Kt.ACK:case Kt.BINARY_ACK:this.onack(e);break;case Kt.DISCONNECT:this.ondisconnect();break;case Kt.CONNECT_ERROR:this.destroy();const t=new Error(e.data.message);t.data=e.data.data,this.emitReserved("connect_error",t)}}onevent(e){const t=e.data||[];null!=e.id&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&"string"==typeof e[e.length-1]&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:Kt.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];"function"==typeof t&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach((e=>this.emitEvent(e))),this.receiveBuffer=[],this.sendBuffer.forEach((e=>{this.notifyOutgoingListeners(e),this.packet(e)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((e=>e())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Kt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function tn(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}tn.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=1&Math.floor(10*t)?e+n:e-n}return 0|Math.min(e,this.max)},tn.prototype.reset=function(){this.attempts=0},tn.prototype.setMin=function(e){this.ms=e},tn.prototype.setMax=function(e){this.max=e},tn.prototype.setJitter=function(e){this.jitter=e};class nn extends rt{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&"object"==typeof e&&(t=e,e=void 0),(t=t||{}).path=t.path||"/socket.io",this.opts=t,lt(this,t),this.reconnection(!1!==t.reconnection),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(i=t.randomizationFactor)&&void 0!==i?i:.5),this.backoff=new tn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==t.timeout?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||n;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=!1!==t.autoConnect,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return void 0===e?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return void 0===e?this._reconnectionDelay:(this._reconnectionDelay=e,null===(t=this.backoff)||void 0===t||t.setMin(e),this)}randomizationFactor(e){var t;return void 0===e?this._randomizationFactor:(this._randomizationFactor=e,null===(t=this.backoff)||void 0===t||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return void 0===e?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,null===(t=this.backoff)||void 0===t||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new zt(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=Zt(t,"open",(function(){n.onopen(),e&&e()})),r=t=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",t),e?e(t):this.maybeReconnectOnOpen()},o=Zt(t,"error",r);if(!1!==this._timeout){const e=this._timeout,n=this.setTimeoutFn((()=>{i(),r(new Error("timeout")),t.close()}),e);this.opts.autoUnref&&n.unref(),this.subs.push((()=>{this.clearTimeoutFn(n)}))}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Zt(e,"ping",this.onping.bind(this)),Zt(e,"data",this.ondata.bind(this)),Zt(e,"error",this.onerror.bind(this)),Zt(e,"close",this.onclose.bind(this)),Zt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(e){this.onclose("parse error",e)}}ondecoded(e){ot((()=>{this.emitReserved("packet",e)}),this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new en(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const e of t){if(this.nsps[e].active)return}this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach((e=>e())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),null===(n=this.engine)||void 0===n||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn((()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",t)):e.onreconnect()})))}),t);this.opts.autoUnref&&n.unref(),this.subs.push((()=>{this.clearTimeoutFn(n)}))}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const rn={};function on(e,t){"object"==typeof e&&(t=e,e=void 0);const n=function(e,t="",n){let i=e;n=n||"undefined"!=typeof location&&location,null==e&&(e=n.protocol+"//"+n.host),"string"==typeof e&&("/"===e.charAt(0)&&(e="/"===e.charAt(1)?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e=void 0!==n?n.protocol+"//"+e:"https://"+e),i=Rt(e)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const r=-1!==i.host.indexOf(":")?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+t,i.href=i.protocol+"://"+r+(n&&n.port===i.port?"":":"+i.port),i}(e,(t=t||{}).path||"/socket.io"),i=n.source,r=n.id,o=n.path,s=rn[r]&&o in rn[r].nsps;let a;return t.forceNew||t["force new connection"]||!1===t.multiplex||s?a=new nn(i,t):(rn[r]||(rn[r]=new nn(i,t)),a=rn[r]),n.query&&!t.query&&(t.query=n.queryKey),a.socket(n.path,t)}function sn(e){return sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sn(e)}Object.assign(on,{Manager:nn,Socket:en,io:on,connect:on});var an,cn,un,ln,dn,fn=!1,hn=on,pn={connected:!1,connectedTeamMembers:[],reconnectionTeamMembers:{},ranking:void 0,firstRankingNotificationShown:!1,allowSecondaryRankingNotifications:!0};function mn(e,t){if(!0!==pn.connected){ln=t.localErState.teamId,dn=t.teamName,pn.ranking=t.localErState.ranking;var n={escapeRoom:un,email:e.email,token:e.token};(function(e){e.on("connect",gn),e.on("disconnect",vn),e.on("INITIAL_INFO",yn),e.on("JOIN",bn),e.on("LEAVE",_n),e.on("HINT_RESPONSE",wn),e.on("PUZZLE_RESPONSE",An),e.on("TEAM_PROGRESS",Sn),e.on("MESSAGE",En),e.on("connect_error",(function(e){})),e.on("error",(function(e){}))})(hn(cn,{query:n}))}}function gn(){pn.connected=!0}function yn(e){e.connectedMembers instanceof Array&&(pn.connectedTeamMembers=e.connectedMembers)}function vn(){pn.connected=!1}function bn(e){if("object"===sn(e)&&"string"==typeof e.username){var t=Object.assign([],pn.connectedTeamMembers);e.connectedMembers instanceof Array&&(pn.connectedTeamMembers=e.connectedMembers);var n=e.username,i=an.getSettings();if(n!==i.user.email&&i.localErState.teamMembers instanceof Array&&-1!==i.localErState.teamMembers.indexOf(n)&&-1===t.indexOf(n)&&void 0===pn.reconnectionTeamMembers[n]){var r=an._getMemberNameFromERState(i.localErState,n);"string"==typeof r&&function(e){var t={type:"info"};t.text=y("i.notification_member_join",{member:e}),an.displayCustomNotification(t.text,t)}(r)}}}function _n(e){if("object"===sn(e)&&"string"==typeof e.username){var t=Object.assign([],pn.connectedTeamMembers);e.connectedMembers instanceof Array&&(pn.connectedTeamMembers=e.connectedMembers);var n=e.username,i=an.getSettings();n!==i.user.email&&-1!==i.localErState.teamMembers.indexOf(n)&&-1!==t.indexOf(n)&&-1===pn.connectedTeamMembers.indexOf(n)&&("number"==typeof pn.reconnectionTeamMembers[n]?pn.reconnectionTeamMembers[n]=pn.reconnectionTeamMembers[n]+1:pn.reconnectionTeamMembers[n]=1,setTimeout((function(){if("number"==typeof pn.reconnectionTeamMembers[n]&&(pn.reconnectionTeamMembers[n]=pn.reconnectionTeamMembers[n]-1,0===pn.reconnectionTeamMembers[n]&&delete pn.reconnectionTeamMembers[n]),-1===pn.connectedTeamMembers.indexOf(n)&&void 0===pn.reconnectionTeamMembers[n]){var e=an._getMemberNameFromERState(i.localErState,n);"string"==typeof e&&function(e){var t={type:"info"};t.text=y("i.notification_member_leave",{member:e}),an.displayCustomNotification(t.text,t)}(e)}}),3e3))}}function wn(e){"string"==typeof e.msg&&function(e){var t={type:"event",autoHide:!0};t.text=y("i.notification_hint_new",{hint:e}),an.displayCustomNotification(t.text,t)}(e.msg)}function An(e){if("OK"===e.code&&"number"==typeof e.puzzleOrder){var t=Object.assign([],an._getNewestState().puzzlesSolved);an._updateRemoteErState(e.erState),-1===t.indexOf(e.puzzleOrder)?(n=e.puzzleOrder,i={type:"event"},o=1,s=3,r=Math.floor(Math.random()*(s-o+1)+o),i.text=y("i.notification_puzzle_success",{puzzle:n})+" "+y("i.notification_puzzle_success_end"+r,{team:dn}),an.displayCustomNotification(i.text,i),setTimeout((function(){xn(e.erState)}),2e3)):xn(e.erState)}var n,i,r,o,s}function Sn(e){"object"===sn(e)&&e.ranking instanceof Array&&e.ranking.length>0&&function(e){var t=void 0;pn.ranking instanceof Array&&(t=Object.assign([],pn.ranking));if(pn.ranking=e,!(t instanceof Array)||!(e instanceof Array)||function(e){if(e instanceof Array)for(var t=0;t<e.length;t++)if(e[t].count>0)return!1;return!0}(e))return;if(void 0===ln||"string"!=typeof dn)return;var n=kn(t,ln),i=kn(e,ln);if("number"!=typeof n||"number"!=typeof i)return;var r=i<n,o=i===n,s=i>n,a=an._getTeamFromRanking(ln,e),c="object"===sn(a)&&"number"==typeof a.count?a.count:0,u=void 0,l=ln;!1===pn.firstRankingNotificationShown&&c>0&&(o||s)&&(r=i<=3,o=!1,s=!1);var d=!1;if(c>0&&i<=3){switch(i){case 1:r?u=y("i.notification_ranking_1_up",{team:dn}):o&&(u=y("i.notification_ranking_1_same",{team:dn}));break;case 2:r?u=y("i.notification_ranking_2_up",{team:dn}):o?u=y("i.notification_ranking_2_same",{team:dn}):s&&(u=y("i.notification_ranking_2_down",{teamOther:e[0].name,team:dn}));break;case 3:if(r)u=y("i.notification_ranking_3_up",{team:dn});else if(o)u=y("i.notification_ranking_3_same",{team:dn});else if(s){u=y("i.notification_ranking_3_down",{teamOther:t.length>0&&t[0].id!==e[0].id?e[0].name:e[1].name,team:dn})}}d="string"==typeof u}if(void 0===u)if(r&&c>0)u=y("i.notification_ranking_up",{team:dn,position:i});else if(s&&c>0){var f=function(e,t,n,i){if(n<=0||i<=n||n>=e.length||i>t.length)return;for(var r=[],o=n;o<e.length;o++)r.push(e[o].id);if(0===r.length)return;for(var s=[],a=i-1;a>=0;a--)-1!==r.indexOf(t[a].id)&&s.push(t[a].name);if(1===s.length)return s[0];return}(t,e,n,i);u="string"==typeof f?y("i.notification_ranking_down",{teamOther:f,team:dn,position:i}):y("i.notification_ranking_down_generic",{team:dn,position:i})}else{if((!0===pn.firstRankingNotificationShown||0===c)&&t instanceof Array){var h=t.length,p=e.length;h>0&&p>0&&(t[0].id!==e[0].id&&e[0].id!==ln?(l=e[0].id,u=y("i.notification_ranking_1_other",{teamOther:e[0].name})):h>1&&p>1&&(t[1].id!==e[1].id&&e[1].id!==ln?(l=e[1].id,u=y("i.notification_ranking_2_other",{teamOther:e[1].name})):h>2&&p>2&&t[2].id!==e[2].id&&e[2].id!==ln&&(l=e[2].id,u=y("i.notification_ranking_3_other",{teamOther:e[2].name}))))}void 0===u&&(u=y("i.notification_ranking_generic",{team:dn,position:i}))}var m=!0===s&&c>0&&n<=3&&i>3;(!0===o||l!==ln||!0===s&&!1===d&&!1===m)&&!1===pn.allowSecondaryRankingNotifications&&(u=void 0);"string"==typeof u&&(pn.allowSecondaryRankingNotifications=!1,setTimeout((function(){pn.allowSecondaryRankingNotifications=!0}),24e4),!1===pn.firstRankingNotificationShown&&l===ln&&(pn.firstRankingNotificationShown=!0),g=u,v={type:"ranking"},an.displayCustomNotification(g,v));var g,v}(e.ranking)}function En(e){if(e&&e.msg&&"string"==typeof e.msg&&e.msg.length){var t={type:"info"};t.text=e.msg,an.displayCustomNotification(t.text,t)}}function xn(e){var t=Object.assign({},an.getSettings().localErState),n=an._isRemoteStateNewestForApp();an._validateStateToRestore((function(e){"object"===sn(e)&&n&&an._isStateNewestThan(e,t)&&"function"==typeof an.getSettings().onNewErStateCallback&&an.getSettings().onNewErStateCallback(e)}))}function kn(e,t){if("number"==typeof t&&e instanceof Array)for(var n=0;n<e.length;n++)if(e[n].id===t)return n+1}var Tn,Cn,Rn=!1,On=!1,Mn=void 0,Pn=!1,Nn=void 0,zn=void 0,jn=void 0,Fn=[0,1,2,5,10,15,30,45,60,75,90,105];function Bn(e,t){if(void 0===Mn&&"number"==typeof e&&"number"==typeof t)if(e<=0||t<=0)Pn=!0;else{Cn=t;var n=(Mn=e)/3600,i=Math.floor(n),r=Math.floor(60*(n-i)),o=(Mn-3600*i-60*r)%(zn=Mn>240?10:1);setTimeout((function(){Mn=Math.max(0,Mn-o),In(),On&&Hn()}),1e3*o)}}function In(){void 0!==Nn&&clearInterval(Nn),"number"!=typeof Mn||Mn<=0||(zn=Mn>240?10:1,Nn=setInterval((function(){Mn=Math.max(0,Mn-zn),10===zn?Mn<=240&&In():0===Mn&&(Pn=!0,clearInterval(Nn),On&&-1!==Fn.indexOf(0)&&Dn(),Tn._onTimeRunOut())}),1e3*zn))}function Hn(){if("number"==typeof Mn&&!0!==Pn){void 0!==jn&&clearTimeout(jn);var e=void 0,t=Mn/3600;if(t>=2)e=3600*(t-Math.floor(t));else for(var n=Mn/60,i=Fn.sort((function(e,t){return t-e})),r=0;r<i.length;r++)if(n>=i[r]){e=60*(n-i[r]);break}"number"==typeof e&&(jn=setTimeout((function(){!0!==Pn&&(Dn(),setTimeout((function(){Hn()}),1e3*(zn+1)))}),1e3*e))}}function Dn(){if(!(!0!==On||"number"!=typeof Mn||Tn.isERCompleted()||Math.abs(Mn-Cn)<30)){var e=void 0,t=Mn/3600,n=Math.floor(t),i=Math.round(60*(t-n)),r=Mn-3600*n-60*i;Math.abs(r)<=zn+1&&(n>0?e=0===i?1===n?y("i.notification_time_one_hour"):y("i.notification_time_hours",{hours:n}):y(1===n?"i.notification_time_one_hour_and_minutes":"i.notification_time_hours_and_minutes",{hours:n,minutes:i}):i>0?e=1===i?y("i.notification_time_one_minute"):y("i.notification_time_minutes",{minutes:i}):0===i&&!0===Pn&&(e=y("i.notification_time_runout"))),"string"==typeof e&&Tn.displayCustomNotification(e,{type:"time"})}}var Ln=__webpack_require__(883);function qn(e){return function(e){if(Array.isArray(e))return Un(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Un(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Un(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Un(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function Wn(e){return Wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wn(e)}window.ESCAPP=function(n){var i={},o={},u={endpoint:void 0,imagesPath:"/assets/images/",linkedPuzzleIds:void 0,relatedPuzzleIds:void 0,requiredPuzzlesIds:void 0,user:{email:void 0,token:void 0},preview:!1,silent:!1,forceValidation:!0,autovalidate:!1,notifications:!1,rtc:!0,restoreState:"REQUEST_USER",I18n:void 0,browserRestrictions:{"internet explorer":">10",chrome:">41",firefox:">38"},browserRestrictionsDefault:!0,countdown:!0,jQuery:!1,initCallback:void 0,onNewErStateCallback:void 0,onErRestartCallback:void 0},d={erId:void 0,localStorageKey:void 0,encryptKey:void 0,user:{authenticated:!1,participation:void 0},localErState:void 0,remoteErState:void 0,lastSolvedPuzzleId:void 0,nextPuzzleId:void 0,allPuzzlesSolved:!1,teamName:void 0,duration:void 0,remainingTime:void 0,puzzlesRequirements:!0},f={puzzleData:{},puzzlesSolved:[],progress:0,score:0,nPuzzles:void 0,hintsAllowed:void 0,startTime:void 0,remainingTime:void 0,strictTime:!1,teamId:void 0,teamMembers:void 0,ranking:void 0},h=!1,p=!1,g=[],v=!1,b=!1;this.init=function(t){if(!0!==h){"object"!=Wn(t)&&(t={});var n=this._getAppSettingsFromEnvironment();"object"!==Wn(n)&&(n={}),"object"===Wn(n.escappClientSettings)&&(t=s(t,Object.assign({},n.escappClientSettings))),delete(n=Object.assign({},n)).escappClientSettings,o=n,!0===(i=s(s(u,t),d)).preview?(i.silent=!0,i.rtc=!1,i.restoreState="NEVER"):i.preview=!1,!0===i.silent?(i.forceValidation=!1,i.notifications=!1,"AUTO"!==i.restoreState&&(-1!==["AUTO_NOTIFICATION","REQUEST_USER"].indexOf(i.restoreState)?i.restoreState="AUTO":i.restoreState="NEVER")):i.silent=!1,"object"!==Wn(i.relatedPuzzleIds)&&"object"===Wn(i.linkedPuzzleIds)&&(i.relatedPuzzleIds=i.linkedPuzzleIds);var r,c=a();if("string"!=typeof i.endpoint&&void 0!==c.escapp_endpoint&&(i.endpoint=function(e){if("string"==typeof e){var t=e.match(/^https?:\/\//);if(t instanceof Array&&1===t.length){var n=t[0].replace("://",""),i=l();n!=i&&"https"===i&&(e="https"+e.replace(n,""))}}return e}(c.escapp_endpoint)),"string"==typeof i.endpoint?(i.erId=this._getERIdFromEscappEndpoint(i.endpoint),"false"!==this._isValidEscappEndpoint(i.endpoint)&&"string"==typeof i.erId||g.push("i.initialization_error_endpoint_format")):g.push("i.initialization_error_endpoint"),void 0===i.resourceId&&(i.linkedPuzzleIds instanceof Array&&i.linkedPuzzleIds.length>0?i.resourceId=i.linkedPuzzleIds.join("-"):i.preview?g.push("i.initialization_error_linkedPuzzleIds"):i.resourceId="preview"),void 0===i.localStorageKey&&(i.localStorageKey="ESCAPP_"+i.erId+"_"+i.resourceId),void 0===i.encryptKey&&(i.encryptKey=i.localStorageKey),m(i.I18n),E(i.localStorageKey,i.preview),B(e,i.preview),X(i.encryptKey),r={imagesPath:i.imagesPath},!0!==ae&&(ae=!0,oe=r.imagesPath,se("body").prepend('<div class="escapp-modal micromodal-slide" id="escapp-modal" aria-hidden="true"><div class="escapp-modal__overlay" tabIndex="-1"><div class="escapp-modal__container" role="dialog" aria-modal="true"><header class="escapp-modal__header"><h2 class="escapp-modal__title" id="escapp-modal-title"></h2></header><main class="escapp-modal__content" id="escapp-modal-content"><p class="content"></p></main><footer class="escapp-modal__footer"></footer></div></div>'),se("#escapp-modal div.escapp-modal__container").prepend('<img class="dialog_corner logo" src="'+oe+'escapp_logo_dark.png"/>'),se("#escapp-modal div.escapp-modal__container").prepend('<img class="dialog_corner lock" src="'+oe+'lock.svg"/>'),se("#escapp-modal .escapp-modal__content").prepend('<div class="escapp_content_img_wrapper"><img src="'+oe+'trophy.png"/></div>'),Z.init({disableScroll:!0,disableFocus:!1,awaitOpenAnimation:!1,awaitCloseAnimation:!1,debugMode:!1})),ge({enabled:i.notifications}),function(e){!0!==je&&(je=!0,e.imagesPath)}({imagesPath:i.imagesPath}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!0!==fn){fn=!0,an=e.escapp;var t,n=function(e){var t;try{t=e.split("/")[2]}catch(e){}return t}(e.endpoint);if(void 0!==n){var i=function(e){var t="ws://";try{e.match("https://")&&(t="wss://")}catch(e){}return t}(e.endpoint);cn=i+n,t=e.endpoint,un=t.split("/").pop()}}}({endpoint:i.endpoint,escapp:this}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!0!==Rn&&(Rn=!0,On=!0===e.notifications,Tn=e.escapp)}({notifications:he&&i.countdown,escapp:this}),i.preview&&this._resetForPreview(),void 0===this._getUserCredentials(i.user)){var y=this._getUserCredentials({email:c.escapp_email||c.email,token:c.escapp_token||c.token});if(void 0!==y)i.user=y;else{var v=C("user");void 0!==this._getUserCredentials(v)&&(i.user=v)}}"object"===Wn(i.user)&&(i.user.authenticated=!1);var b=C("localErState");!1===this._validateERState(b)&&(b=s({},f)),i.localErState=b,R("localErState",i.localErState),this._updateAppPuzzlesState(),!0===i.jQuery&&void 0===window.jQuery&&(window.$=window.jQuery=this.getJQuery()),h=!0,p=0===g.length,this._enableBeforeEachCheckInitialization(),this._checkInitialization()}},this._getAppSettingsFromEnvironment=function(){var e=window,t=0;try{for(;"object"!==Wn(e.ESCAPP_APP_SETTINGS)&&e.parent&&e.parent!==e&&t<=1;)t+=1,e=e.parent;if("object"===Wn(e.ESCAPP_APP_SETTINGS))return e.ESCAPP_APP_SETTINGS}catch(e){}},this._isValidEscappEndpoint=function(e){return/^(https?:\/\/[a-zA-Z][^\/]*\/api\/escapeRooms\/[0-9]+)$/.test(e)},this._getERIdFromEscappEndpoint=function(e){var t=e.match(/^(https?:\/\/[a-zA-Z][^\/]*\/api\/escapeRooms\/([0-9]+))$/);return t?parseInt(t[2],10)+"":void 0},this._enableBeforeEachCheckInitialization=function(){for(var e=this,t=Object.keys(this),n=["init","getSettings","getAppSettings","isSupported"],i=function(){var t=o[r],i="function"==typeof e[t],s=t.startsWith("_"),a=n.includes(t);if(!i||"constructor"===t||s||a)return 1;var c=e[t].bind(e);e[t]=function(){if(!1!==e._checkInitialization())return c.apply(void 0,arguments)}},r=0,o=t;r<o.length;r++)i()},this._checkInitialization=function(){return!!p||(this._displayInitializationErrorDialog(),!1)},this._getUserCredentials=function(e){if("object"===Wn(e)&&"string"==typeof e.email&&("string"==typeof e.token||"string"==typeof e.password)){var t={email:e.email};return"string"==typeof e.token?t.token=e.token:t.password=e.password,t}},this.isSupported=function(){var e;try{void 0===(e=r().getParser(window.navigator.userAgent).satisfies(i.browserRestrictions))&&(e=i.browserRestrictionsDefault)}catch(t){e=i.browserRestrictionsDefault}var t=x();return e&&t},this.validate=function(e){return this.isSupported()?this.validateUser(e):i.silent?this._safeCall(e,!1):this.displayCustomEscappDialog(y("i.not_supported_title"),y("i.not_supported_text"),{},function(t){this._safeCall(e,!1)}.bind(this))},this.validateUser=function(e){if("object"!==Wn(i.user)||"string"!=typeof i.user.token){if(i.silent)return this._safeCall(e,!1);this._displayUserAuthDialog(!0,function(t){this._onUserAuthDialogResponse(t,function(t){return t?this._validateUserAfterAuth(e):this._onValidateUserFail(e)}.bind(this))}.bind(this))}else this.retrieveState(function(t,n){return t||i.silent||!i.forceValidation?this._safeCall(e,t,n):this._onValidateUserFail(e)}.bind(this))},this._onUserAuthDialogResponse=function(e,t){if("ok"===e.choice||!1!==i.forceValidation){var n={email:e.inputs[0],password:e.inputs[1]};this._auth(n,function(e){if(!0!==i.user.authenticated)return this._displayUserAuthDialog(!1,t);switch(i.user.participation){case"PARTICIPANT":this._safeCall(t,!0);case"NOT_STARTED":this._startEscapeRoom(function(e){this._safeCall(t,e)}.bind(this));break;case"NOT_A_PARTICIPANT":case"AUTHOR":case"NOT_ACTIVE":case"TOO_LATE":this._displayUserParticipationErrorDialog(function(){this._safeCall(t,!1)}.bind(this))}}.bind(this))}else this._safeCall(t,!i.forceValidation)},this._onValidateUserFail=function(e){return!0!==i.user.authenticated?this._retryAfterAuthFail(e):this._safeCall(e,!1)},this._retryAfterAuthFail=function(e){return this._resetUser(),this.validateUser(e)},this._resetUser=function(){i.user=Object.assign({},d.user),O("user"),this._resetErState()},this._resetErState=function(){i.localErState=f,i.remoteErState=void 0,O("localErState")},this._resetForPreview=function(){this._resetErState(),M()},this._validateUserAfterAuth=function(e){this._validatePreviousPuzzles(function(t){t||!1===i.forceValidation?this._validateStateToRestore(function(n){this._afterValidateUser(),this._safeCall(e,t,n)}.bind(this)):this._safeCall(e,!1)}.bind(this))},this._validatePreviousPuzzles=function(e){if(i.requiredPuzzlesIds instanceof Array&&0!==i.requiredPuzzlesIds.length){var t=this._getNewestState();if(!1===this._validateERState(t))i.puzzlesRequirements=!1;else for(var n=0;n<i.requiredPuzzlesIds.length;n++)if(-1===t.puzzlesSolved.indexOf(i.requiredPuzzlesIds[n])){i.puzzlesRequirements=!1;break}if(!1===i.puzzlesRequirements){if(i.silent)return this._safeCall(e,!1);this._displayPuzzleRequirementDialog(function(t){this._safeCall(e,!1)}.bind(this))}else this._safeCall(e,!0)}else this._safeCall(e,!0)},this._afterValidateUser=function(){!0!==b&&(b=!0,this._connect(),Bn(i.remainingTime,i.duration))},this._startEscapeRoom=function(e){this._displayStartDialog(function(t){!0===t?this.start(function(t){!0===t&&this._displayStartNotification(),this._safeCall(e,!0===t)}.bind(this)):this._safeCall(e,!1)}.bind(this))},this._displayDialog=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e=s({escapp:!0},e),!i.silent||!1!==e.ignoreSilent)return ce(e)},this.displayCustomDialog=function(e,t,n,i){var r={title:e,text:t,escapp:!1,icon:void 0};"function"==typeof i&&(r.closeCallback=i),"object"===Wn(n)&&(r=Object.assign(r,n)),this._displayDialog(r)},this.displayCustomEscappDialog=function(e,t,n,i){var r=s(n||{},{escapp:!0});this.displayCustomDialog(e,t,r,i)},this.displayPuzzleDialog=function(e,t,n,i){var r={escapp:!1,icon:"lock",inputs:[{type:"text",autocomplete:"off",validate:function(e){return"string"==typeof(t=e)&&""!==t.trim();var t}}]};r.buttons=[{response:"ok",label:y("i.button_ok")},{response:"cancel",label:y("i.button_nok"),ignoreInputs:!0}],"function"==typeof i&&(r.closeCallback=function(e){e.inputs instanceof Array&&1===e.inputs.length&&(e.value=e.inputs[0]),i(e)}),"object"===Wn(n)&&(r=Object.assign(r,n)),this.displayCustomDialog(e,t,r,i)},this.displayCompletionDialog=function(e,t){var n={escapp:!0,img:i.imagesPath+"/trophy.png"};"object"===Wn(e)&&(n=Object.assign(n,e)),n.closeCallback=function(){setTimeout(function(){this.stopAnimation("confetti")}.bind(this),1500),this._safeCall(t)}.bind(this),this.startAnimation("confetti"),this.displayCustomDialog(y("i.completion_title"),y("i.completion_text",{escappURL:this._getEscappPlatformFinishURL()}),n,t)},this._getEscappPlatformFinishURL=function(){return this._getEscappPlatformURL()+"/finish"},this._getEscappPlatformURL=function(){return this._isValidEscappEndpoint(i.endpoint)?i.endpoint.replace("/api",""):""},this._displayUserAuthDialog=function(e,t){var n={requireInput:!0};e?(n.title=y("i.auth_title"),n.text=y("i.auth_text")):(n.title=y("i.auth_title_wrong_credentials"),n.text=y("i.auth_text_wrong_credentials")),n.inputs=[{type:"text",label:y("i.auth_email_label"),validate:function(e){return function(e){return"string"==typeof e&&/\S+@\S+\.\S+/.test(e)}(e)}},{type:"password",label:y("i.auth_password_label")}],n.buttons=[{response:"ok",label:y("i.button_ok")}],!1===i.forceValidation&&n.buttons.push({response:"cancel",label:y("i.button_nok"),ignoreInputs:!0}),n.closeCallback=function(e){this._safeCall(t,e)}.bind(this),this._displayDialog(n)},this._displayUserParticipationErrorDialog=function(e){var t={};if(t.title=y("i.generic_error_title"),this.isUserLoggedIn())switch(i.user.participation){case"TOO_LATE":t.text=y("i.participation_error_TOO_LATE");break;case"NOT_ACTIVE":t.text=y("i.participation_error_NOT_ACTIVE");break;case"NOT_STARTED":t.text=y("i.participation_error_NOT_STARTED");break;default:t.text=y("i.participation_error_NOT_PARTICIPANT")}else t.text=y("i.participation_error_NOT_AUTHENTICATED");"function"==typeof e&&(t.closeCallback=e),t.buttons=[],!1!==i.forceValidation&&!1!==this.isUserLoggedIn()||t.buttons.push({response:"ok",label:y("i.button_ok")}),this._displayDialog(t)},this._displayPuzzleRequirementDialog=function(e){var t={};t.title=y("i.generic_error_title"),t.text=y("i.puzzles_required"),t.buttons=[],!1===i.forceValidation&&t.buttons.push({response:"ok",label:y("i.button_ok")}),"function"==typeof e&&(t.closeCallback=e),this._displayDialog(t)},this._displayRestoreStateDialog=function(e){var t={requireInput:!0};t.title=y("i.restore_title"),"AUTO_NOTIFICATION"===i.restoreState?t.text=y("i.restore_auto_text"):(t.text=y("i.restore_request_text"),t.buttons=[{response:"ok",label:y("i.button_ok")},{response:"nok",label:y("i.button_nok")}]),"function"==typeof e&&(t.closeCallback=function(t){e("AUTO_NOTIFICATION"===i.restoreState||"ok"===t.choice)}.bind(this)),this._displayDialog(t)},this._displayStartDialog=function(e){var t={};t.title=y("i.start_title"),t.text=y("i.start_text"),t.buttons=[{response:"ok",label:y("i.button_ok")},{response:"nok",label:y("i.button_nok")}],"function"==typeof e&&(t.closeCallback=function(t){e("ok"===t.choice)}.bind(this)),this._displayDialog(t)},this._displayInitializationErrorDialog=function(e){if(!0!==v){var t;v=!0,t=g instanceof Array&&g.length>0&&"string"==typeof g[0]&&""!==g[0].trim()?g[0]:"Escapp Client could not be started correctly due to an unknown error.";try{var n={icon:void 0,escapp:!1,ignoreSilent:!0};try{n.title=y("i.initialization_error_title"),n.text=t.startsWith("i.")?y(t):t}catch(e){}"string"==typeof n.title&&""!==n.title.trim()||(n.title="Escapp client initialization error"),"string"==typeof n.text&&""!==n.text.trim()||(n.text=t),n.closeCallback=function(t){v=!1,this._safeCall(e)}.bind(this),this._displayDialog(n)}catch(n){alert(t),v=!1,this._safeCall(e)}}},this._displayConnectionErrorDialog=function(e,t){var n={};n.title=y("i.connecton_error_title"),n.text=y("i.connecton_error_text"),n.buttons=[{response:"retry",label:y("i.button_retry")}],!0===e&&n.buttons.push({response:"nok",label:y("i.button_nok")}),n.closeCallback=function(e){this._safeCall(t,e.choice)}.bind(this),this._displayDialog(n)},this._displayNotification=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ye(e=s({escapp:!0},e))},this.displayCustomNotification=function(e,t){var n={text:e,escapp:!1,icon:void 0};"object"===Wn(t)&&(n=Object.assign(n,t)),this._displayNotification(n)},this.displayCustomEscappNotification=function(e,t){var n=s(t||{},{escapp:!0});this.displayCustomNotification(e,n)},this._displayStartNotification=function(){if(void 0===i.teamName)return!1;if(0!==this._getNewestState().puzzlesSolved.length)return!1;var e={};e.text=y("i.notification_start",{team:i.teamName}),this._displayNotification(e)},this.startAnimation=function(e,t){!function(e,t){var n=!0;"confetti"===e?Ne():n=!1;!1!==n&&(-1===Fe.indexOf(e)&&Fe.push(e),"number"==typeof t&&setTimeout(function(){this.stopAnimation(e)}.bind(this),t))}(e,t)},this.stopAnimation=function(e){!function(e){var t=Fe.indexOf(e);-1!==t&&("confetti"===e&&ze(),Fe.splice(t,1))}(e)},this._validateStateToRestore=function(e){if("NEVER"===i.restoreState)return this._safeCall(e);var t=this._isRemoteStateNewest(),n=this._getNewestState();return"AUTO"===i.restoreState||!1===t||i.relatedPuzzleIds instanceof Array&&i.relatedPuzzleIds.length>0&&!1===this._isRemoteStateNewestForApp()?this._updateErStates(n,e):void this._displayRestoreStateDialog(function(t){return!1===t&&(n=i.localErState),this._updateErStates(n,e)}.bind(this))},this._updateErStates=function(e,t){this._validateERState(e)&&(i.localErState=e,R("localErState",i.localErState),i.remoteErState=void 0,this._updateAppPuzzlesState(),this._updateTrackingLocalErState()),this._safeCall(t,e)},this._updateRemoteErState=function(e){if(!1!==this._validateERState(e)&&!i.preview){i.remoteErState=e;var t=!1;this._validateERState(i.localErState)&&void 0!==i.localErState.startTime&&i.localErState.startTime!==e.startTime&&(i.localErState=i.remoteErState,t=!0);for(var n=["nPuzzles","hintsAllowed","startTime","remainingTime","duration","teamId","teamMembers","ranking"],r=0;r<n.length;r++)void 0===i.localErState[n[r]]&&void 0!==e[n[r]]&&(i.localErState[n[r]]=e[n[r]]);if("object"===Wn(i.remoteErState.puzzleData)&&Object.keys(i.remoteErState.puzzleData).length>0)for(var o=0;o<i.localErState.puzzlesSolved.length;o++){var s=i.remoteErState.puzzleData[i.localErState.puzzlesSolved[o]];"object"===Wn(s)&&(i.localErState.puzzleData[i.localErState.puzzlesSolved[o]]=s)}this._updateAppPuzzlesState(),this._updateTrackingLocalErState(),this._validateERState(i.localErState)&&R("localErState",i.localErState),t&&"function"==typeof i.onErRestartCallback&&i.onErRestartCallback(i.remoteErState)}},this._updateTrackingLocalErState=function(){i.localErState.progress=100*i.localErState.puzzlesSolved.length/i.localErState.nPuzzles;for(var e=0,t=Object.keys(i.localErState.puzzleData),n=0;n<t.length;n++)e+=i.localErState.puzzleData[t[n]].score;i.localErState.score=e},this._updateSettingsFromInitialErState=function(e){if(!1!==this._validateERState(e)){var t=this._getTeamNameFromERState(e);"string"==typeof t&&(i.teamName=t),"number"==typeof e.duration&&(i.duration=e.duration),"number"==typeof e.remainingTime&&(i.remainingTime=e.remainingTime),i.preview&&"number"!=typeof i.remainingTime&&"number"==typeof i.duration&&(i.remainingTime=i.duration)}},this._updateAppPuzzlesState=function(){var e=void 0,t=void 0,n=!1,r=this.getSolvedPuzzles();r instanceof Array&&r.length>0&&(e=Math.max.apply(Math,qn(r)));var o=this.getUnsolvedPuzzles();o instanceof Array&&(o.length>0?t=Math.min.apply(Math,qn(o)):(n=!0,t=e)),i.lastSolvedPuzzleId=e,i.nextPuzzleId=t,i.allPuzzlesSolved=n},this._getNewestState=function(){return this._isRemoteStateNewest()?i.remoteErState:i.localErState},this._isRemoteStateNewest=function(e){var t=this._validateERState(i.localErState);if(!1===this._validateERState(i.remoteErState))return!1;if(!1===t)return!0;if(!0===e&&i.relatedPuzzleIds instanceof Array&&i.relatedPuzzleIds.length>0){var n=s({},i.localErState);n.puzzlesSolved=n.puzzlesSolved.filter((function(e){return-1!==i.relatedPuzzleIds.indexOf(e)}));var r=s({},i.remoteErState);return r.puzzlesSolved=r.puzzlesSolved.filter((function(e){return-1!==i.relatedPuzzleIds.indexOf(e)})),this._isStateNewestThan(r,n)}return this._isStateNewestThan(i.remoteErState,i.localErState)},this._isStateNewestThan=function(e,t){return 0!==e.puzzlesSolved.length&&(0===t.puzzlesSolved.length||e.puzzlesSolved.length>t.puzzlesSolved.length)},this._isRemoteStateNewestForApp=function(){return this._isRemoteStateNewest(!0)},this._validateERState=function(e){return"object"===Wn(e)&&e.puzzlesSolved instanceof Array},this._auth=function(e,t){var n=this._getUserCredentials(e);if(void 0===n)return this._safeCall(t,!1);var r=this,o=i.endpoint+"/auth",s=Object.assign({},n);s.preview=i.preview,fetch(o,{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json","Accept-Language":"es-ES"}}).then((function(e){return e.json()})).then((function(e){delete n.password,i.user=n,"string"==typeof e.token&&(i.user.token=e.token),i.user.authenticated=!0===e.authentication,i.user.participation=e.participation,R("user",i.user),r._updateSettingsFromInitialErState(e.erState),r._updateRemoteErState(e.erState),r._safeCall(t,i.user.authenticated)})).catch((function(n){r._displayConnectionErrorDialog(!1,(function(){r._auth(e,t)}))}))},this.retrieveState=function(e){this._auth(i.user,function(t){if(t&&i.user.authenticated)return i.preview?-1!==["AUTHOR","PARTICIPANT"].indexOf(i.user.participation)?this._validateUserAfterAuth(e):this._safeCall(e,!1):-1!==["PARTICIPANT","NOT_STARTED"].indexOf(i.user.participation)?"NOT_STARTED"===i.user.participation?i.silent?this._safeCall(e,!1):this._startEscapeRoom(function(t){return!0===t?this._validateUserAfterAuth(e):this.validateUser(e)}.bind(this)):this._validateUserAfterAuth(e):i.silent?this._safeCall(e,!1):this._displayUserParticipationErrorDialog(function(){this._safeCall(e,!1)}.bind(this));this._safeCall(e,!1)}.bind(this))},this.submitPuzzle=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!1===this.isUserValidParticipant()&&!i.silent)return this._displayUserParticipationErrorDialog(r);var o=this._getUserCredentials(i.user);if(void 0===o)return this._safeCall(r,!1,{msg:"Invalid params"});if(void 0===e)return this._safeCall(r,!1,{msg:"Puzzle id not provided"});if(!0!==i.puzzlesRequirements)return this._safeCall(r,!1,{msg:"Invalid puzzle requirements"});i.preview&&(n.readonly=!0);var s=this,a=i.endpoint+"/puzzles/"+e+(!0===n.readonly?"/check_solution":"/submit"),c=o;c.solution=t,c.preview=i.preview,fetch(a,{method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json","Accept-Language":"es-ES"}}).then((function(e){return e.json()})).then((function(t){if(!("PARTICIPANT"===t.participation||i.preview&&-1!==["AUTHOR"].indexOf(i.user.participation)))return i.silent?s._safeCall(r,!1,t):s._displayUserParticipationErrorDialog(function(){this._safeCall(r,!1,t)}.bind(s));var o="OK"===t.code&&!0===t.correctAnswer;!0!==n.readonly&&(o&&s._validateERState(i.localErState)&&-1===i.localErState.puzzlesSolved.indexOf(e)&&(i.localErState.puzzlesSolved.push(e),R("localErState",i.localErState)),s._updateRemoteErState(t.erState)),s._safeCall(r,o,t)})).catch((function(o){if(i.silent)return s._safeCall(r,!1);s._displayConnectionErrorDialog(!0,(function(i){"retry"===i&&s.submitPuzzle(e,t,n,r)}))}))},this.checkPuzzle=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;n.readonly=!0,this.submitPuzzle(e,t,n,i)},this.submitNextPuzzle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.submitPuzzle(this.getNextPuzzle(),e,t,n)},this.checkNextPuzzle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;t.readonly=!0,this.checkPuzzle(this.getNextPuzzle(),e,t,n)},this.start=function(e){var t=this._getUserCredentials(i.user);if(void 0===t||!1===this.isUserLoggedIn())return this._safeCall(e,!1);var n=this,r=i.endpoint+"/start",o=t;fetch(r,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json","Accept-Language":"es-ES"}}).then((function(e){return e.json()})).then((function(t){n._updateRemoteErState(t.erState);var r="OK"===t.code;r&&(n._updateSettingsFromInitialErState(t.erState),i.user.participation=t.participation,R("user",i.user)),n._safeCall(e,r,t)})).catch((function(t){if(i.silent)return n._safeCall(e,!1);n._displayConnectionErrorDialog(!0,function(t){"retry"===t?n.start(e):n._safeCall(e,!1)}.bind(n))}))},this._connect=function(){if(!0===i.rtc){var e=this._getUserCredentials(i.user);void 0!==e&&mn(e,i)}},this._getTeamNameFromERState=function(e){var t=this._getTeamFromERState(e);return"object"===Wn(t)?t.name:void 0},this._getMemberNameFromERState=function(e,t){var n=this._getTeamFromERState(e);if(void 0!==n&&n.teamMembers instanceof Array)for(var i=0;i<n.teamMembers.length;i++)if(n.teamMembers[i].username===t)return n.teamMembers[i].name},this._getTeamFromERState=function(e){return this._getTeamFromRanking(e.teamId,e.ranking)},this._getTeamFromRanking=function(e,t){if("number"==typeof e&&t instanceof Array)for(var n=0;n<t.length;n++)if(t[n].id===e)return t[n]},this._hasBeenSuccesfullyInitialized=function(){return p},this.getSettings=function(){return i},this.getAppSettings=function(){return o},this.registerCallback=function(e,t){"string"==typeof e&&-1!=["initCallback","onNewErStateCallback","onErRestartCallback"].indexOf(e)&&"function"==typeof t&&(i[e]=t)},this.getStorage=function(){return t},this.getJQuery=function(){return Ln},this.isUserLoggedIn=function(){return!0===i.user.authenticated},this.isUserValidParticipant=function(){return void 0!==this._getUserCredentials(i.user)&&!0===i.user.authenticated&&("PARTICIPANT"===i.user.participation||!(!i.preview||-1===["AUTHOR"].indexOf(i.user.participation)))},this.isPreviewMode=function(){return i.preview},this.getSolvedPuzzles=function(){return i.linkedPuzzleIds instanceof Array&&this._validateERState(i.localErState)&&i.localErState.puzzlesSolved instanceof Array?i.localErState.puzzlesSolved.filter((function(e){return i.linkedPuzzleIds.includes(e)})):[]},this.getUnsolvedPuzzles=function(){var e=this.getSolvedPuzzles();return i.linkedPuzzleIds instanceof Array&&e instanceof Array?i.linkedPuzzleIds.filter((function(t){return!e.includes(t)})):[]},this.getLastSolvedPuzzle=function(){return i.lastSolvedPuzzleId},this.getLastSolution=function(){if(void 0!==i.lastSolvedPuzzleId&&this._validateERState(i.localErState)&&"object"===Wn(i.localErState.puzzleData)){var e=i.localErState.puzzleData[i.lastSolvedPuzzleId];if("object"===Wn(e)&&"string"==typeof e.solution)return e.solution}},this.getNextPuzzle=function(){return i.nextPuzzleId},this.getAllPuzzlesSolved=function(){return i.allPuzzlesSolved},this._onTimeRunOut=function(){this._validateERState(i.localErState)&&!0===i.localErState.strictTime&&(i.user.participation="TOO_LATE",i.silent||!1!==On||this.displayCustomEscappDialog(y("i.notification_time_runout_title"),y("i.notification_time_runout"),{}))},this.isERCompleted=function(){var e=this._getNewestState();return!!(this._validateERState(e)&&e.puzzlesSolved instanceof Array&&"number"==typeof e.nPuzzles)&&e.puzzlesSolved.length===e.nPuzzles},this.isEREnded=function(){return this.isERCompleted()||Pn},this.reset=function(e){this._resetUser(),M(),this._safeCall(e)},this.encrypt=function(e,t){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"!=typeof e||""===e.trim())return e;switch(t){case"MD5":return q(e);case"SHA-256":var i="string"==typeof n.key?n.key:V;return"string"!=typeof i||""===i.trim()?e:U.hmac(i,e);default:return e}}(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})},this.addEscappSettingsToUrl=function(e){return this._addEndpointParamToUrl(this._addLocaleParamToUrl(this._addUserCredentialsToUrl(e)))},this._addUserCredentialsToUrl=function(e){var t=this._getUserCredentials(i.user);return void 0===t?e:(e=c(e,"escapp_email",t.email),e=c(e,"escapp_token",t.token))},this._addLocaleParamToUrl=function(e){var t=a();return"string"==typeof t.locale&&(e=c(e,"locale",t.locale)),e},this._addEndpointParamToUrl=function(e){var t=a();return"string"==typeof t.escapp_endpoint&&(e=c(e,"escapp_endpoint",t.escapp_endpoint)),e},this._safeCall=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];e.apply(void 0,n)}},this.init(n),!0===i.autovalidate?this.validate(i.initCallback):"function"==typeof i.initCallback&&i.initCallback()},window.escapp_client_environment="production"})()})();

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

SceneMaker.Video = (function(SM,$,undefined){
	
	var init = function(){
		SM.Video.HTML5.init();
		SM.Video.Youtube.init();
	};

	return {
		init : init
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

SceneMaker.Actions = (function(SM,$,undefined){
	var _slideIdsAlias;
	var _actionsSlideRevealedFirstTime;
	var _actionsSlideRevealed;
	

	var init = function(scene){
		_slideIdsAlias = {};
		_actionsSlideRevealedFirstTime = {};
		_actionsSlideRevealed = {};

		//Load actions
		if(Array.isArray(scene.actions)){
			var actionsWithEvents = scene.actions.filter(
				item => ((typeof item.event !== "undefined") && (typeof item.event.eventType === "string"))
			);
			//Actions for the slideRevealedFirstTime event
			actionsWithEvents.filter(
				item => ((item.event.eventType === "slideRevealedFirstTime")&&(typeof item.event.eventParams !== "undefined")&&(typeof item.event.eventParams.slide === "string"))
			).forEach(item => {
				var slide = item.event.eventParams.slide;
				if (!_actionsSlideRevealedFirstTime[slide]) {
					_actionsSlideRevealedFirstTime[slide] = {performed: false, actions: []};
				}
				_actionsSlideRevealedFirstTime[slide].actions.push(item);
			});
			//Actions for the slideRevealed event
			actionsWithEvents.filter(
				item => ((item.event.eventType === "slideRevealed")&&(typeof item.event.eventParams !== "undefined")&&(typeof item.event.eventParams.slide === "string"))
			).forEach(item => {
				var slide = item.event.eventParams.slide;
				if (!_actionsSlideRevealed[slide]) {
					_actionsSlideRevealed[slide] = {actions: []};
				}
				_actionsSlideRevealed[slide].actions.push(item);
			});
		}
	};

	var _getSlideIdAlias = function(slideId){
		if(typeof _slideIdsAlias[slideId] === "string"){
			return _slideIdsAlias[slideId];
		}
		return slideId;
	};

	var _registerSlideIdAlias = function(slideId,slideIdAlias){
		if((typeof slideIdAlias !== "string")||(slideIdAlias === slideId)||($("#" + slideIdAlias).length === 0)){
			return;
		}
		for (var _slideId in _slideIdsAlias) {
			if(slideId === _slideIdsAlias[_slideId]){
				if(_slideId === slideIdAlias){
					delete _slideIdsAlias[_slideId];
					continue;
				} else {
					_slideIdsAlias[_slideId] = slideIdAlias;
				}
			}
		}
		_slideIdsAlias[slideId] = slideIdAlias;
	};

	var addActionToHotspot = function(hotspotDOM, action){
		switch(action.actionType){
			case "showText":
				if((action.actionParams)&&(typeof action.actionParams.text === "string")){
					_addTooltip($(hotspotDOM)[0],action.actionParams.text);
				};
				break;
			default:
				break;
		};
	};

	var addActionToHotzone = function(hotzoneDOM, action){
		switch(action.actionType){
			case "showText":
				if((action.actionParams)&&(typeof action.actionParams.text === "string")){
					_addTooltip($(hotzoneDOM)[0],action.actionParams.text);
				};
				break;
			default:
				break;
		};
	};

	var _addTooltip = function(elementDOM,text){
		tippy(elementDOM, {
			content: text,
			trigger: 'click',
			placement: 'top',
			inlinePositioning: true,
			arrow: true,
			theme: '',
			animation: 'scale', //fade, scale,
			duration: 1000,
			inertia: false,
			interactive: false,
			interactiveBorder: 2,
			hideOnClick: true,
			maxWidth: 'none',
			offset: [2, 6],
			delay: [0, 0],
			popperOptions: {
				modifiers: [
					{ name: 'eventListeners', options: { scroll: false, resize: false } },
				],
			},
			onCreate(instance) {
				var toolTipId = instance.popper.id;
				$(elementDOM).attr("markertooltipid",toolTipId);
			}
		});
	};

	var performActions = function(actions,eventTargetId){
		if (Array.isArray(actions)) {
			actions.forEach((action, index) => {
				_performAction(action,eventTargetId);
			});
		}
	};

	var _performAction = function(action,eventTargetId){
		switch(action.actionType){
			case "goToScreen":
				if((action.actionParams)&&(typeof action.actionParams.screen === "string")){
					var screenId = _getSlideIdAlias(action.actionParams.screen);
					var $screen = $("#" + screenId);
					if ($screen.length > 0) {
						if($screen[0] === SM.Screen.getCurrentScreen()){
							var currentView = SM.View.getCurrentView();
							if((typeof currentView !== "undefined")&&(currentView !== null)){
								SM.View.closeView($(currentView).attr("id"));
							}
						}
						SM.Screen.goToScreenWithNumber($screen.attr("slideNumber"));
					}
				}
				break;
			case "openView":
				if((action.actionParams)&&(typeof action.actionParams.view === "string")){
					var viewId = action.actionParams.view;
					var $view = $("#" + viewId);
					if ($view.length > 0) {
						SM.View.openView(viewId);
					}
				}
				break;	
			case "openLink":
				if((action.actionParams)&&(typeof action.actionParams.url === "string")){
					window.open(action.actionParams.url, '_blank', 'noopener,noreferrer');
				}
				break;
			case "showText":
				//Do nothing. Tooltips are handled automatically by Tippy.
				// if((action.actionParams)&&(typeof action.actionParams.text === "string")){
				// 	alert(action.actionParams.text);
				// };
				break;
			case "changeBackground":
				if((action.actionParams)&&(typeof action.actionParams.slide === "string")&&(typeof action.actionParams.url === "string")){
					SM.Slides.changeSlideBackground($("#" + action.actionParams.slide),action.actionParams.url);
				}
				break;
			case "changeScreen":
				if((action.actionParams)&&(typeof action.actionParams.screen === "string")&&(typeof action.actionParams.screenReplacement === "string")){
					var screenId = action.actionParams.screen;
					var screenReplacementId = action.actionParams.screenReplacement;
					_registerSlideIdAlias(screenId,screenReplacementId);
					if($(SM.Screen.getCurrentScreen()).attr("id") === screenId){
						_performAction({actionType: "goToScreen", actionParams:{screen: screenId}});
					}
				}
				break;
			case "showHotspot":
			case "hideHotspot":
				if((action.actionParams)&&(typeof action.actionParams.hotspotId === "string")){
					var hotspotId = action.actionParams.hotspotId;
					var $hotspot = $("#" + hotspotId);
					if ($hotspot.length > 0) {
						if(action.actionType === "showHotspot"){
							$hotspot.show();
						} else {
							$hotspot.hide();
						}
					}
				}
				break;
			case "enableHotzone":
			case "disableHotzone":
				if((action.actionParams)&&(typeof action.actionParams.hotzoneId === "string")){
					var $hotzoneDOM = SM.Marker.getHotzoneDOM(action.actionParams.hotzoneId);
					if ($hotzoneDOM.length > 0) {
						if(action.actionType === "enableHotzone"){
							$hotzoneDOM.attr("hotzone_enabled","true");
						} else {
							$hotzoneDOM.attr("hotzone_enabled","false");
						}
					}
				}
				break;
			case "playSound":
				if((action.actionParams)&&(typeof action.actionParams.url === "string")){
					SM.Audio.HTML5.playAudio(action.actionParams.url);
				}
				break;
			case "stopSound":
				if((action.actionParams)&&(typeof action.actionParams.url === "string")){
					SM.Audio.HTML5.stopAudio(action.actionParams.url);
				}
				break;
			case "solvePuzzle":
				if((action.actionParams)&&(typeof action.actionParams.puzzleId === "string")){
					SM.Escapp.submitPuzzleSolution(action.actionParams.puzzleId,eventTargetId);
				}
				break;
			default:
				break;
		}
	};

	var checkActionsForSlideEnterEvent = function(slideId){
		if(typeof _actionsSlideRevealedFirstTime[slideId] !== "undefined"){
			if(_actionsSlideRevealedFirstTime[slideId].performed !== true){
				_actionsSlideRevealedFirstTime[slideId].performed = true;
				performActions(_actionsSlideRevealedFirstTime[slideId].actions);
			}
		}
		if(typeof _actionsSlideRevealed[slideId] !== "undefined"){
			performActions(_actionsSlideRevealed[slideId].actions);
		}
	};

	return {
		init 							: init,
		addActionToHotspot				: addActionToHotspot,
		addActionToHotzone				: addActionToHotzone,
		performActions					: performActions,
		checkActionsForSlideEnterEvent	: checkActionsForSlideEnterEvent
	};

}) (SceneMaker, jQuery);

SceneMaker.Caption = (function(SM,$,undefined){

	var init = function(){
	};

	var drawCaption = function(slide,captionJSON){
		if(_isValidCaption(captionJSON) === false){
			return;
		}
		var $slide = $(slide);
		var $captionWrapperDiv = $("div.captionWrapperTemplate").clone().removeClass("captionWrapperTemplate");
		$captionWrapperDiv.find("div.captionBodyWrapper").html(captionJSON.text);

		if(typeof captionJSON.mode !== "undefined"){
			$captionWrapperDiv.attr("mode",captionJSON.mode);
		}

		switch(captionJSON.mode){
			case "minimizable":
				break;
			case "closable":
				break;
			case "fixed":
				$captionWrapperDiv.find("div.captionHeaderWrapper").remove();
				break;
		}

		$slide.append($captionWrapperDiv);
		$captionWrapperDiv.show()
	};

	var _isValidCaption = function(caption){
		if(typeof caption !== "object"){
			return false;
		}
		if(typeof caption.text !== "string"){
			return false;
		}
		if(caption.text.trim() === ""){
			return false;
		}
		return true;
	};

	var onCaptionButtonClicked = function(event){
		var $currentSlide = $(SM.Slides.getCurrentSlide());
		var $captionWrapperDiv = $currentSlide.find("div.captionWrapper");
		var captionMode = $captionWrapperDiv.attr("mode");
		switch(captionMode){
			case "minimizable":
				var currentStatus = $captionWrapperDiv.attr("state");
				if(currentStatus === "minimized"){
					//Maximize
					$captionWrapperDiv.find("div.captionHeaderWrapper img").attr("src", SM.ImagesPath + "vicons/close.png");
					$captionWrapperDiv.attr("state","maximized");
				} else {
					//Minimize
					$captionWrapperDiv.find("div.captionHeaderWrapper img").attr("src", SM.ImagesPath + "vicons/maximize.png");
					$captionWrapperDiv.attr("state","minimized");
				}
				break;
			case "closable":
				$captionWrapperDiv.hide();
				break;
			case "fixed":
				//Do nothing
				break;
		}
	};

	return {
		init 					: init,
		drawCaption				: drawCaption,
		onCaptionButtonClicked	: onCaptionButtonClicked
	};

}) (SceneMaker, jQuery);

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

SceneMaker.Escapp = (function(SM,$,undefined){
	var _escapp;
	var _puzzlesSolved;
	var _linkedPuzzleIds;
	var _relatedPuzzleIds;
	var _actionsForRelatedPuzzles;

	var init = function(options, scene){
		_puzzlesSolved = [];
		_actionsForRelatedPuzzles = {};
		_linkedPuzzleIds = _getLinkedPuzzleIdsForScene(scene);
		_relatedPuzzleIds = _getRelatedPuzzleIdsForScene(scene);
		if((_linkedPuzzleIds.length === 0)&&(_relatedPuzzleIds.length === 0)){
			//No need to use Escapp.
			return;
		}
		if(SM.Status.isPreview() === true){
			return;
		}

		var defaultEscappSettings = _getDefaultEscappSettings(options, scene);
		var escappSettings = SM.Utils.deepMerge((options.escapp || {}), defaultEscappSettings);

		//Add callbacks
		escappSettings.onNewErStateCallback = function(erState){
			_updateSceneState(erState);
		};
		escappSettings.onErRestartCallback = function(erState){
			_puzzlesSolved = [];
			_updateSceneState(erState);
		};

		_escapp = new ESCAPP(escappSettings);
		SM.Debugging.log("Escapp client initiated with settings:", _escapp.getSettings());

		//Authenticate user in Escapp
		_escapp.validate((success, erState) => {
			try {
				SM.Debugging.log("Escapp validation", success, erState);
				if(success){
					_updateSceneState(erState);
				}
			} catch (e){
				SM.Debugging.log("Error in escapp validate callback", e);
			}
		});
	};

	var _getDefaultEscappSettings = function(options, scene){
		var settings = {
			imagesPath: SM.ImagesPath + "libs/escapp/",
			linkedPuzzleIds: _linkedPuzzleIds,
			relatedPuzzleIds: _relatedPuzzleIds,
			preview: SM.Status.isPreview(),
			silent: (SM.Debugging.isDevelopping()!==true),
			forceValidation: true,
			notifications: "FALSE",
			rtc: true,
			restoreState: "AUTO",
			I18n: {
				locale: SM.I18n.getLanguage(),
			}
		};
		if(typeof options.user !== "undefined"){
			settings.user = options.user;
		}
		return settings;
	};

	var _getLinkedPuzzleIdsForScene = function(scene){
		var linkedPuzzleIds = [];

		for (var screenIndex in scene.screens) {
			var screen = scene.screens[screenIndex];
			for (var hotspotIndex in screen.hotspots) {
				var hotspot = screen.hotspots[hotspotIndex];
				linkedPuzzleIds = linkedPuzzleIds.concat(_getLinkedPuzzleIdsForActions(hotspot.actions));
			}
			for (var hotzoneIndex in screen.hotzones) {
				var hotzone = screen.hotzones[hotzoneIndex];
				linkedPuzzleIds = linkedPuzzleIds.concat(_getLinkedPuzzleIdsForActions(hotzone.actions));
			}
		}

		//Remove duplicates and convert to numbers
		linkedPuzzleIds = [...new Set(linkedPuzzleIds
		.map(Number)
		.filter(n => !isNaN(n))
		)].sort((a, b) => a - b);

		return linkedPuzzleIds;
	};

	var _getLinkedPuzzleIdsForActions = function(actions){
		var linkedPuzzleIds = [];
		if (Array.isArray(actions)){
			for (var actionIndex in actions) {
				var action = actions[actionIndex];
				if((action.actionType === "solvePuzzle")&&(typeof action.actionParams !== "undefined")&&(typeof action.actionParams.puzzleId === "string")){
					linkedPuzzleIds.push(action.actionParams.puzzleId);
				}
			};
		}
		return linkedPuzzleIds;
	};

	var _getRelatedPuzzleIdsForScene = function(scene){
		var relatedPuzzleIds = _getRelatedPuzzleIdsForActions(scene.actions);
		//Include _linkedPuzzleIds
		relatedPuzzleIds = (relatedPuzzleIds.map(Number).filter(n => !isNaN(n))).concat(_linkedPuzzleIds);

		//Remove duplicates
		relatedPuzzleIds = [...new Set(relatedPuzzleIds)].sort((a, b) => a - b);

		return relatedPuzzleIds;
	};

	var _getRelatedPuzzleIdsForActions = function(actions){
		var relatedPuzzleIds = [];
		if (Array.isArray(actions)){
			for (var actionIndex in actions) {
				var action = actions[actionIndex];
				if(typeof action.event !== "undefined"){
					var event = action.event;
					if((event.eventType === "puzzleSolved")&&(typeof event.eventParams !== "undefined")&&(typeof event.eventParams.puzzleId === "string")){
						relatedPuzzleIds.push(event.eventParams.puzzleId);
						if(typeof _actionsForRelatedPuzzles[event.eventParams.puzzleId] === "undefined"){
							_actionsForRelatedPuzzles[event.eventParams.puzzleId] = [];
						}
						_actionsForRelatedPuzzles[event.eventParams.puzzleId].push(action);
					}
				}
			};
		}
		return relatedPuzzleIds;
	};

	var _updateSceneState = function(erState){
		if((typeof erState !== "undefined")&&(Array.isArray(erState.puzzlesSolved))){
			var newPuzzles = erState.puzzlesSolved.filter(
				puzzleId => !_puzzlesSolved.includes(puzzleId) && _relatedPuzzleIds.includes(puzzleId)
			).sort((a, b) => a - b);
			var actions = [];
			newPuzzles.forEach(function(puzzleId) {
				_puzzlesSolved.push(puzzleId);
				var actionsForPuzzle = _actionsForRelatedPuzzles[puzzleId];
				if(Array.isArray(actionsForPuzzle)){
					actions = actions.concat(actionsForPuzzle);
				}
			});
			_puzzlesSolved = _puzzlesSolved.sort((a, b) => a - b);
			_updateSceneWithActions(actions);
		}
	};

	var _updateSceneWithActions = function(actions){
		//If there are several actions with type "goToScreen" or "openView", apply only the last one.
		var lastIndexSlideMovement = actions.map(a => a.actionType).reduce((last, type, i) => 
			(type === "goToScreen" || type === "openView") ? i : last, -1
		);
		actions = actions.filter((a, i) =>
			!(a.actionType === "goToScreen" || a.actionType === "openView") || i === lastIndexSlideMovement
		);

		//If there are several actions with type "playSound", apply only the last one.
		var lastIndexPlaySound = actions.map(a => a.actionType).reduce((last, type, i) => 
			(type === "playSound") ? i : last, -1
		);
		actions = actions.filter((a, i) =>
			!(a.actionType === "playSound") || i === lastIndexPlaySound
		);
		
		SM.Actions.performActions(actions);
	};

	var submitPuzzleSolution = function(puzzleId, puzzleSolution){
		var puzzleId = Number(puzzleId);
		if((!isNaN(puzzleId))&&(_linkedPuzzleIds.includes(puzzleId))&&(!_puzzlesSolved.includes(puzzleId))){
			if(SM.Status.isPreview() !== true){
				if(typeof _escapp !== "undefined"){
					_escapp.submitPuzzle(puzzleId, puzzleSolution, {}, (success, res) => {
						//SM.Debugging.log("Solution submitted to Escapp", puzzleId, puzzleSolution, success, res);
						if(success){
							_updateSceneState(res.erState);
						}
					});
				}
			} else {
				//Preview
				var erState = {puzzlesSolved: JSON.parse(JSON.stringify(_puzzlesSolved))};
				erState.puzzlesSolved.push(puzzleId);
				_updateSceneState(erState);
			}
		}
	};

	var getEscapp = function(){
		return _escapp;
	};

	return {
		init 					: init,
		getEscapp 				: getEscapp,
		submitPuzzleSolution	: submitPuzzleSolution
	};

}) (SceneMaker, jQuery);