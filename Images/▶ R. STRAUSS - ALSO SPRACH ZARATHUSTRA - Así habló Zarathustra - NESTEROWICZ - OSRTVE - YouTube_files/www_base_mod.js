var _yt_www={};(function(m){var window=this;m.aa=function(a){return function(){return m.ba[a].apply(this,arguments)}};m.l=function(a,b){for(var c=a.split("."),d=b||m.ca,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
m.da=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};m.ea=function(a){return"array"==(0,m.da)(a)};m.n=function(a){return"string"==typeof a};m.fa=function(a){return"function"==(0,m.da)(a)};var ga=function(a,b,c){return a.call.apply(a.bind,arguments)};
var ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};m.q=function(a,b,c){m.q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return m.q.apply(null,arguments)};m.ia=function(a,b){for(var c in b)a[c]=b[c]};
m.r=function(a,b){var c=a.split("."),d=m.ca;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};m.s=function(a,b){function c(){}c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a};m.ja=function(a,b){var c=(0,m.ka)(a,b),d;(d=0<=c)&&(0,m.la)(a,c);return d};m.la=function(a,b){m.ma.splice.call(a,b,1)};
m.na=function(a,b,c){return 2>=arguments.length?m.ma.slice.call(a,b):m.ma.slice.call(a,b,c)};m.oa=function(){};m.pa=function(){this.b=[];this.Xc={}};m.qa=function(a){ra(m.ta,arguments)};m.t=function(a,b){return a in m.ta?m.ta[a]:b};m.ua=function(a){ra(m.va,arguments)};
m.u=function(a,b){if((0,m.fa)(a)&&(0,m.l)("ytsched.enableSetTimeout")){var c=(0,m.l)("yt.scheduler.instance.addJob");if(c)return c(a,0,b);(0,m.r)("ytsched.enableSetTimeout",!1)}(0,m.fa)(a)&&(a=(0,m.wa)(a));return window.setTimeout(a,b)};m.w=function(a){(0,m.l)("ytsched.enableSetTimeout")?(0,m.l)("yt.scheduler.instance.cancelJob")(a):window.clearTimeout(a)};m.wa=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw(0,m.xa)(b),b;}}:a};
m.xa=function(a,b){if(window&&window.yterr){var c=(0,m.l)("yt.www.errors.log");c?c(a,b):(c=(0,m.t)("ERRORS")||[],c.push(a),(0,m.qa)("ERRORS",c))}};m.ya=function(a){ra(m.za,arguments)};m.Aa=function(a){return a in m.za};var ra=function(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}};m.x=function(a,b,c){var d=Ba();return d?d.subscribe(a,function(){var d=arguments;try{Ca[a]?b.apply(c||m.ca,d):(0,m.u)(function(){b.apply(c||m.ca,d)},0)}catch(g){(0,m.xa)(g)}},c):0};
m.Da=function(a){var b=Ba();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[(0,window.parseInt)(a,10)]),(0,m.z)(a,function(a){b.unsubscribeByKey(a)}))};m.B=function(a,b){var c=Ba();return c?c.publish.apply(c,arguments):!1};var Ea=function(a,b){Ca[a]=!0;var c=Ba();c&&c.publish.apply(c,arguments);Ca[a]=!1};var Ba=function(){return(0,m.l)("yt.pubsub.instance_")};m.Fa=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.D=(0,m.wa)(d||null);this.k=(0,m.wa)(e||null);this.b=[]};
m.Ga=function(a){a.name in Ha&&Ia(a.name);Ha[a.name]={reqs:[],disable:(0,m.q)(a.disable,a)};(0,m.z)(a.deps,function(b){if(!(b in Ha))throw Error("Module "+b+" required by "+a.name);Ha[b].reqs.push(a.name)});a.enable()};var Ia=function(a){if(a in Ha){var b=Ha[a];(0,m.z)(b.reqs,function(a){Ia(a)});try{b.disable()}catch(c){}delete Ha[a]}};m.Ja=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};m.Ka=function(a,b){var c=a.match(La);window.spf.scripts.load(a,b,c?c[1]:"")};
m.Ma=function(a){a&&((0,m.n)(a)?(0,m.Ka)(a):(0,m.ea)(a)?(0,m.z)(a,function(a){(0,m.Ma)(a)}):(0,m.Ja)(a,function(a,c){(0,m.Ka)(c,function(){(0,m.Ma)(a)})}))};m.Na=function(a,b){if(a){var c=new window.Image,d=""+Oa++;Pa[d]=c;c.onload=c.onerror=function(){b&&Pa[d]&&b();delete Pa[d]};c.src=a;c=eval("null")}};m.Qa=function(a,b,c){(0,m.Ra)(c)[a]=b||(0,m.C)()};var Sa=function(a){return Math.max(0,a.responseStart-a.navigationStart)};
m.Ta=function(a,b){var c=(0,m.Ra)(a),d=Ua(a).span,e=(0,m.Va)(a),g=b||(0,m.l)("yt.timing.reportbuilder_");if(g){if(g=g.apply(null,[c,d,e,a]))Wa(g),(0,m.Xa)(a)}else{var g={v:2,s:"youtube",action:(0,m.t)("TIMING_ACTION")},h=(0,m.t)("TIMING_INFO")||{},k;for(k in h)e[k]=h[k];k=e.srt;delete e.srt;if(!k&&0!==k)try{k=Sa((window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance).timing)}catch(p){e.pt&&(k=e.pt)}if(k||0===k)e.srt=k;c.aft||(c.aft=c.vr&&c.cl&&c.cl>c.vr?c.cl:c.vr?
c.vr:c.ol);c.vr&&c.gv&&(d.vl=Math.round(c.vr-c.gv));for(var v in e)"_"!=v.charAt(0)&&(g[v]=e[v]);e={};v=[];k=c._start;for(var y in c)"_"!=y.charAt(0)&&(h=Math.max(Math.round(c[y]-k),0),e[y]=h,v.push(y+"."+h));g.rt=v.join(",");c={};y=[];for(var A in d)"_"!=A.charAt(0)&&(c[A]=d[A],y.push(A+"."+d[A]));g.it=y.join(",");Wa(g);(d=(0,m.l)("ytdebug.logTiming"))&&d(g,e,c);(0,m.Xa)(a)}};
var Ya=function(){var a=(0,m.t)("TIMING_ACTION"),b=!!(0,m.t)("TIMING_WFF"),c=(0,m.Ra)(void 0);a&&c._start&&(b&&c.vr?(0,m.Ta)(void 0):b||!c.ol&&!c.aft||(0,m.Ta)(void 0))};var Wa=function(a){var b="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",c="",d;for(d in a)c+="&"+d+"="+a[d];(0,m.Na)(b+"?"+c.substring(1))};m.Ra=function(a){return Ua(a).tick};m.Va=function(a){return Ua(a).info};var Ua=function(a){return(0,m.l)("ytcsi."+(a||"")+"data_")||(0,m.Xa)(a)};
m.Xa=function(a){var b={tick:{},span:{},info:{}};(0,m.r)("ytcsi."+(a||"")+"data_",b);return b};var Za=function(){(0,m.Qa)("ol");(0,m.B)("init");var a=(0,m.t)("PAGE_NAME");a&&(0,m.B)("init-"+a);Ya()};var $a=function(){var a=(0,m.t)("PAGE_NAME");a&&Ea("dispose-"+a);Ea("dispose")};var ab=function(){Za()};var bb=function(){$a()};
var cb=function(a,b,c){for(var d=window.document.getElementsByTagName("script"),e=!1,g=0,h=d.length;g<h;g++)if(0<d[g].src.indexOf("/debug-")){e=!0;break}e&&(d=Error(),d.message=a,d.fileName=b,d.lineNumber=c,(0,m.xa)(d))};var db=function(){eb=1;(0,m.Xa)(void 0);fb(gb);Ea("navigate")};var hb=function(a,b){var c=1==eb;eb=2;c?(fb(ib),jb()):fb(kb);b.swfcfg&&lb(b.swfcfg)};var mb=function(){};
var nb=function(a,b){var c=1==eb;eb=3;(0,m.Qa)("_start",b.timing.responseStart);var d=Sa(b.timing);(0,m.Va)(void 0).srt=d;var d=b.timing.responseStart-b.timing.fetchStart,e=Ua(void 0).span,g=(0,m.Ra)(void 0);"number"==typeof d?e.req=d:d in g&&(e.req=(0,m.C)()-g[d]);c&&(fb(ob),jb());b.swfcfg&&lb(b.swfcfg)};var pb=function(a){fb(qb);if(a.timing){var b={spfProcessCss:"cl",spfProcessHtml:"hr",spfProcessJs:"jl"},c;for(c in b)a.timing[c]&&(0,m.Qa)(b[c],a.timing[c])}Za();eb=0};var rb=function(a,b){(0,m.xa)(b)};
var sb=function(){tb()};var ub=function(){};var jb=function(){var a=(0,m.l)("ytbin.qoe.getInstance");a&&(a=a(),a.reset(),a.start());window.scroll(0,0);$a();for(var b in m.ta)delete m.ta[b];(b=(0,m.l)("yt.www.watch.player.dispose"))&&b()};var lb=function(a){(0,m.r)("ytplayer.config",null);var b=(0,m.l)("yt.player.cancelAll");b&&b();a=a||null;b=(0,m.l)("yt.player.embed");a&&b&&(b("player-api",a),a=(0,m.vb)(a),a.loaded=!0);(0,m.r)("ytplayer.config",a)};
var fb=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.innerHTML="<dt><dd>",window.document.body.appendChild(b));(0,m.u)(function(){var c=a[0],d=a[1],e=a[2];b.className="";var g=b.style;g.transitionDuration=g.webkitTransitionDuration=c+"ms";g.width=d+"%";(0,m.w)(wb);wb=(0,m.u)(function(){b.className=e},c)},0)};
var tb=function(){var a=qb[0]+50;(0,m.w)(wb);wb=(0,m.u)(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};var xb=function(){m.Fa.call(this,"www/base");this.j=0};var yb=function(a,b){var c;(c=(c=b.match(zb))?c[1]+"/"+c[2]:"")&&Ia(c)};m.ba=[];m.Ab=m.Ab||{};m.ca=this;m.Bb="closure_uid_"+(1E9*Math.random()>>>0);m.C=Date.now||function(){return+new Date};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return m.q.apply(null,c)}return(0,m.q)(this,a)};m.ma=Array.prototype;m.ka=m.ma.indexOf?function(a,b,c){return m.ma.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if((0,m.n)(a))return(0,m.n)(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};m.z=m.ma.forEach?function(a,b,c){m.ma.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=(0,m.n)(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)};
m.Cb=m.ma.filter?function(a,b,c){return m.ma.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=0,h=(0,m.n)(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var p=h[k];b.call(c,p,k,a)&&(e[g++]=p)}return e};m.Db=m.ma.map?function(a,b,c){return m.ma.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=(0,m.n)(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e};
m.Eb=m.ma.reduce?function(a,b,c,d){d&&(b=(0,m.q)(b,d));return m.ma.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;(0,m.z)(a,function(c,h){e=b.call(d,e,c,h,a)});return e};m.Fb=m.ma.some?function(a,b,c){return m.ma.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=(0,m.n)(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&b.call(c,e[g],g,a))return!0;return!1};
m.Gb=m.ma.every?function(a,b,c){return m.ma.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=(0,m.n)(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};m.oa.prototype.fd=!1;m.oa.prototype.va=(0,m.aa)(14);m.oa.prototype.dispose=function(){this.fd||(this.fd=!0,this.Q())};m.oa.prototype.Q=function(){if(this.Sb)for(;this.Sb.length;)this.Sb.shift()()};(0,m.s)(m.pa,m.oa);m.f=m.pa.prototype;m.f.iv=1;m.f.Sl=0;m.f.U=function(a,b,c){var d=this.Xc[a];d||(d=this.Xc[a]=[]);var e=this.iv;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.iv=e+3;d.push(e);return e};m.f.ra=(0,m.aa)(5);m.f.se=function(a){if(0!=this.Sl)return this.j||(this.j=[]),this.j.push(a),!1;var b=this.b[a];if(b){var c=this.Xc[b];c&&(0,m.ja)(c,a);delete this.b[a];delete this.b[a+1];delete this.b[a+2]}return!!b};
m.f.N=function(a,b){var c=this.Xc[a];if(c){this.Sl++;for(var d=(0,m.na)(arguments,1),e=0,g=c.length;e<g;e++){var h=c[e];this.b[h+1].apply(this.b[h+2],d)}this.Sl--;if(this.j&&0==this.Sl)for(;c=this.j.pop();)this.se(c);return 0!=e}return!1};m.f.clear=function(a){if(a){var b=this.Xc[a];b&&((0,m.z)(b,this.se,this),delete this.Xc[a])}else this.b.length=0,this.Xc={}};m.f.eb=(0,m.aa)(4);m.f.Q=function(){m.pa.L.Q.call(this);delete this.b;delete this.Xc;delete this.j};m.ta=window.yt&&window.yt.config_||{};(0,m.r)("yt.config_",m.ta);m.va=window.yt&&window.yt.tokens_||{};(0,m.r)("yt.tokens_",m.va);m.za=window.yt&&window.yt.msgs_||{};(0,m.r)("yt.msgs_",m.za);m.Hb="Microsoft Internet Explorer"==window.navigator.appName;var Ib=(0,m.l)("yt.pubsub.instance_")||new m.pa;m.pa.prototype.subscribe=m.pa.prototype.U;m.pa.prototype.unsubscribeByKey=m.pa.prototype.se;m.pa.prototype.publish=m.pa.prototype.N;m.pa.prototype.clear=m.pa.prototype.clear;(0,m.r)("yt.pubsub.instance_",Ib);var Ca={};m.f=m.Fa.prototype;m.f.enable=function(){(0,m.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.U("init-"+a,this.init,this),this.U("dispose-"+a,this.dispose,this),(0,m.t)("PAGE_NAME")==a&&this.init())},this)};m.f.init=function(){this.D&&this.D()};m.f.dispose=function(){this.k&&this.k()};m.f.disable=function(){this.dispose();this.clear()};m.f.U=function(a,b,c){a=(0,m.x)(a,b,c);this.b.push(a);return a};m.f.clear=function(){(0,m.Da)(this.b);this.b=[]};var Ha=(0,m.l)("yt.modules.registry_")||{};(0,m.r)("yt.modules.registry_",Ha);var La=/jsbin\/(?:[a-zA-Z0-9_-]+\/)*(?:debug-)?([a-zA-Z0-9_-]+?)(?:-vfl|.js)/,zb=/^([a-z]+)_(\w+)_mod$/;var Pa={},Oa=0;var eb,wb,gb=[900,60,"waiting"],ob=[500,99,"waiting"],ib=[300,60,"waiting"],kb=[400,99,"waiting"],qb=[300,101,"done"];window.yt=window.yt||{};(0,m.r)("yt.setConfig",m.qa);(0,m.r)("yt.getConfig",m.t);(0,m.r)("yt.hasMsg",m.Aa);(0,m.r)("yt.setMsg",m.ya);(0,m.r)("yt.setGoogMsg",function(a){ra(m.za,arguments)});(0,m.r)("yt.setAjaxToken",m.ua);(0,m.r)("reportTimingMaps",function(a,b){for(var c in a)(0,m.Qa)(c,a[c]);for(var d in b){c=d;var e=b[d];(0,m.Va)(void 0)[c]=e}Ya()});(0,m.s)(xb,m.Fa);
xb.prototype.enable=function(){window.onload=ab;window.onunload=bb;window.onerror=cb;var a=window.ytspf||{};a.enabled?(a.config=a.config||{},(0,m.ia)(a.config,{"navigate-requested-callback":db,"navigate-part-received-callback":hb,"navigate-part-processed-callback":mb,"navigate-received-callback":nb,"navigate-processed-callback":pb,"navigate-error-callback":rb,"script-loading-callback":yb}),a.enabled=window.spf.init(a.config),this.U("init",sb),this.U("dispose",ub)):window.spf.dispose();this.U("init",
this.init,this);this.U("dispose",this.dispose,this)};xb.prototype.init=function(){(window.ytspf||{}).enabled||window.spf.dispose();var a,b;!window.ytPageFrameLoaded&&(0,m.t)("PAGEFRAME_JS")&&(a=(0,m.t)("PAGEFRAME_JS"),b=function(){(0,m.l)("ytbin.www.pageframe.setup")();window.ytPageFrameLoaded=!0});var c={};c[(0,m.t)("JS_COMMON_MODULE")]=(0,m.t)("JS_PAGE_MODULES");var d=(0,m.t)("JS_DELAY_LOAD");0<d?((0,m.w)(this.j),this.j=(0,m.u)(function(){a&&(0,m.Ka)(a,b);(0,m.Ma)(c)},d)):(a&&(0,m.Ka)(a,b),(0,m.Ma)(c))};
xb.prototype.dispose=function(){(0,m.w)(this.j);var a=(0,m.l)("ytbin.www.pageframe.cancelSetup");a&&a()};xb.prototype.disable=function(){xb.L.disable.call(this);window.spf.dispose();window.onload=null;window.onunload=null;window.onerror=null};(0,m.Ga)(new xb);})(_yt_www);
