import{i as Io,S as kn,a as Mo,s as Vo,d as No,p as ko,o as Fo,u as Oo,b as Do,c as ie,e as Lo,t as oe,r as Ro,g as te,f as Yt,h as zo,j as pe,k as _i,l as R,m as I,n as Ho,q as Fn}from"./index-client-Zht3WHnA.js";function Uo(e){if(typeof e=="object"&&e!==null&&!Io(e)&&!(kn in e)){var t=e;return Mo in e&&Vo(),No(t,kn,{value:!0,writable:!0,enumerable:!1}),t}return e}function jo(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function pt(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function _e(e){return e=pt(Math.abs(e)),e?e[1]:NaN}function Bo(e,t){return function(n,r){for(var i=n.length,o=[],a=0,s=e[0],u=0;i>0&&s>0&&(u+s+1>r&&(s=Math.max(1,r-u)),o.push(n.substring(i-=s,i+s)),!((u+=s+1)>r));)s=e[a=(a+1)%e.length];return o.reverse().join(t)}}function Wo(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var qo=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function mt(e){if(!(t=qo.exec(e)))throw new Error("invalid format: "+e);var t;return new pn({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}mt.prototype=pn.prototype;function pn(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}pn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Po(e){e:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case".":r=i=n;break;case"0":r===0&&(r=n),i=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var wi;function Go(e,t){var n=pt(e,t);if(!n)return e+"";var r=n[0],i=n[1],o=i-(wi=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+pt(e,Math.max(0,t+o-1))[0]}function On(e,t){var n=pt(e,t);if(!n)return e+"";var r=n[0],i=n[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const Dn={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:jo,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>On(e*100,t),r:On,s:Go,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Ln(e){return e}var Rn=Array.prototype.map,zn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Xo(e){var t=e.grouping===void 0||e.thousands===void 0?Ln:Bo(Rn.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?Ln:Wo(Rn.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",s=e.minus===void 0?"−":e.minus+"",u=e.nan===void 0?"NaN":e.nan+"";function l(d){d=mt(d);var f=d.fill,h=d.align,m=d.sign,v=d.symbol,_=d.zero,x=d.width,b=d.comma,w=d.precision,T=d.trim,S=d.type;S==="n"?(b=!0,S="g"):Dn[S]||(w===void 0&&(w=12),T=!0,S="g"),(_||f==="0"&&h==="=")&&(_=!0,f="0",h="=");var N=v==="$"?n:v==="#"&&/[boxX]/.test(S)?"0"+S.toLowerCase():"",H=v==="$"?r:/[%p]/.test(S)?a:"",U=Dn[S],G=/[defgprs%]/.test(S);w=w===void 0?6:/[gprs]/.test(S)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function L(g){var E=N,p=H,y,X,Z;if(S==="c")p=U(g)+p,g="";else{g=+g;var j=g<0||1/g<0;if(g=isNaN(g)?u:U(Math.abs(g),w),T&&(g=Po(g)),j&&+g==0&&m!=="+"&&(j=!1),E=(j?m==="("?m:s:m==="-"||m==="("?"":m)+E,p=(S==="s"?zn[8+wi/3]:"")+p+(j&&m==="("?")":""),G){for(y=-1,X=g.length;++y<X;)if(Z=g.charCodeAt(y),48>Z||Z>57){p=(Z===46?i+g.slice(y+1):g.slice(y))+p,g=g.slice(0,y);break}}}b&&!_&&(g=t(g,1/0));var B=E.length+g.length+p.length,k=B<x?new Array(x-B+1).join(f):"";switch(b&&_&&(g=t(k+g,k.length?x-p.length:1/0),k=""),h){case"<":g=E+g+p+k;break;case"=":g=E+k+g+p;break;case"^":g=k.slice(0,B=k.length>>1)+E+g+p+k.slice(B);break;default:g=k+E+g+p;break}return o(g)}return L.toString=function(){return d+""},L}function c(d,f){var h=l((d=mt(d),d.type="f",d)),m=Math.max(-8,Math.min(8,Math.floor(_e(f)/3)))*3,v=Math.pow(10,-m),_=zn[8+m/3];return function(x){return h(v*x)+_}}return{format:l,formatPrefix:c}}var je,Mt,bi;Yo({thousands:",",grouping:[3],currency:["$",""]});function Yo(e){return je=Xo(e),Mt=je.format,bi=je.formatPrefix,je}function Qo(e){return Math.max(0,-_e(Math.abs(e)))}function Ko(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(_e(t)/3)))*3-_e(Math.abs(e)))}function Zo(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,_e(t)-_e(e))+1}var Qt="http://www.w3.org/1999/xhtml";const Hn={svg:"http://www.w3.org/2000/svg",xhtml:Qt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Vt(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Hn.hasOwnProperty(t)?{space:Hn[t],local:e}:e}function Jo(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Qt&&t.documentElement.namespaceURI===Qt?t.createElement(e):t.createElementNS(n,e)}}function ea(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Si(e){var t=Vt(e);return(t.local?ea:Jo)(t)}function ta(){}function mn(e){return e==null?ta:function(){return this.querySelector(e)}}function na(e){typeof e!="function"&&(e=mn(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,s=r[i]=new Array(a),u,l,c=0;c<a;++c)(u=o[c])&&(l=e.call(u,u.__data__,c,o))&&("__data__"in u&&(l.__data__=u.__data__),s[c]=l);return new z(r,this._parents)}function ra(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function ia(){return[]}function Ci(e){return e==null?ia:function(){return this.querySelectorAll(e)}}function oa(e){return function(){return ra(e.apply(this,arguments))}}function aa(e){typeof e=="function"?e=oa(e):e=Ci(e);for(var t=this._groups,n=t.length,r=[],i=[],o=0;o<n;++o)for(var a=t[o],s=a.length,u,l=0;l<s;++l)(u=a[l])&&(r.push(e.call(u,u.__data__,l,a)),i.push(u));return new z(r,i)}function Ti(e){return function(){return this.matches(e)}}function $i(e){return function(t){return t.matches(e)}}var sa=Array.prototype.find;function ua(e){return function(){return sa.call(this.children,e)}}function la(){return this.firstElementChild}function ca(e){return this.select(e==null?la:ua(typeof e=="function"?e:$i(e)))}var fa=Array.prototype.filter;function da(){return Array.from(this.children)}function ha(e){return function(){return fa.call(this.children,e)}}function pa(e){return this.selectAll(e==null?da:ha(typeof e=="function"?e:$i(e)))}function ma(e){typeof e!="function"&&(e=Ti(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,s=r[i]=[],u,l=0;l<a;++l)(u=o[l])&&e.call(u,u.__data__,l,o)&&s.push(u);return new z(r,this._parents)}function Ai(e){return new Array(e.length)}function ga(){return new z(this._enter||this._groups.map(Ai),this._parents)}function gt(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}gt.prototype={constructor:gt,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function va(e){return function(){return e}}function xa(e,t,n,r,i,o){for(var a=0,s,u=t.length,l=o.length;a<l;++a)(s=t[a])?(s.__data__=o[a],r[a]=s):n[a]=new gt(e,o[a]);for(;a<u;++a)(s=t[a])&&(i[a]=s)}function ya(e,t,n,r,i,o,a){var s,u,l=new Map,c=t.length,d=o.length,f=new Array(c),h;for(s=0;s<c;++s)(u=t[s])&&(f[s]=h=a.call(u,u.__data__,s,t)+"",l.has(h)?i[s]=u:l.set(h,u));for(s=0;s<d;++s)h=a.call(e,o[s],s,o)+"",(u=l.get(h))?(r[s]=u,u.__data__=o[s],l.delete(h)):n[s]=new gt(e,o[s]);for(s=0;s<c;++s)(u=t[s])&&l.get(f[s])===u&&(i[s]=u)}function _a(e){return e.__data__}function wa(e,t){if(!arguments.length)return Array.from(this,_a);var n=t?ya:xa,r=this._parents,i=this._groups;typeof e!="function"&&(e=va(e));for(var o=i.length,a=new Array(o),s=new Array(o),u=new Array(o),l=0;l<o;++l){var c=r[l],d=i[l],f=d.length,h=ba(e.call(c,c&&c.__data__,l,r)),m=h.length,v=s[l]=new Array(m),_=a[l]=new Array(m),x=u[l]=new Array(f);n(c,d,v,_,x,h,t);for(var b=0,w=0,T,S;b<m;++b)if(T=v[b]){for(b>=w&&(w=b+1);!(S=_[w])&&++w<m;);T._next=S||null}}return a=new z(a,r),a._enter=s,a._exit=u,a}function ba(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Sa(){return new z(this._exit||this._groups.map(Ai),this._parents)}function Ca(e,t,n){var r=this.enter(),i=this,o=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?o.remove():n(o),r&&i?r.merge(i).order():i}function Ta(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,o=r.length,a=Math.min(i,o),s=new Array(i),u=0;u<a;++u)for(var l=n[u],c=r[u],d=l.length,f=s[u]=new Array(d),h,m=0;m<d;++m)(h=l[m]||c[m])&&(f[m]=h);for(;u<i;++u)s[u]=n[u];return new z(s,this._parents)}function $a(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Aa(e){e||(e=Ea);function t(d,f){return d&&f?e(d.__data__,f.__data__):!d-!f}for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a=n[o],s=a.length,u=i[o]=new Array(s),l,c=0;c<s;++c)(l=a[c])&&(u[c]=l);u.sort(t)}return new z(i,this._parents).order()}function Ea(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Ia(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Ma(){return Array.from(this)}function Va(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function Na(){let e=0;for(const t of this)++e;return e}function ka(){return!this.node()}function Fa(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],o=0,a=i.length,s;o<a;++o)(s=i[o])&&e.call(s,s.__data__,o,i);return this}function Oa(e){return function(){this.removeAttribute(e)}}function Da(e){return function(){this.removeAttributeNS(e.space,e.local)}}function La(e,t){return function(){this.setAttribute(e,t)}}function Ra(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function za(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Ha(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Ua(e,t){var n=Vt(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?Da:Oa:typeof t=="function"?n.local?Ha:za:n.local?Ra:La)(n,t))}function Ei(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ja(e){return function(){this.style.removeProperty(e)}}function Ba(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Wa(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function qa(e,t,n){return arguments.length>1?this.each((t==null?ja:typeof t=="function"?Wa:Ba)(e,t,n??"")):we(this.node(),e)}function we(e,t){return e.style.getPropertyValue(t)||Ei(e).getComputedStyle(e,null).getPropertyValue(t)}function Pa(e){return function(){delete this[e]}}function Ga(e,t){return function(){this[e]=t}}function Xa(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Ya(e,t){return arguments.length>1?this.each((t==null?Pa:typeof t=="function"?Xa:Ga)(e,t)):this.node()[e]}function Ii(e){return e.trim().split(/^|\s+/)}function gn(e){return e.classList||new Mi(e)}function Mi(e){this._node=e,this._names=Ii(e.getAttribute("class")||"")}Mi.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Vi(e,t){for(var n=gn(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function Ni(e,t){for(var n=gn(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Qa(e){return function(){Vi(this,e)}}function Ka(e){return function(){Ni(this,e)}}function Za(e,t){return function(){(t.apply(this,arguments)?Vi:Ni)(this,e)}}function Ja(e,t){var n=Ii(e+"");if(arguments.length<2){for(var r=gn(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Za:t?Qa:Ka)(n,t))}function es(){this.textContent=""}function ts(e){return function(){this.textContent=e}}function ns(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function rs(e){return arguments.length?this.each(e==null?es:(typeof e=="function"?ns:ts)(e)):this.node().textContent}function is(){this.innerHTML=""}function os(e){return function(){this.innerHTML=e}}function as(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function ss(e){return arguments.length?this.each(e==null?is:(typeof e=="function"?as:os)(e)):this.node().innerHTML}function us(){this.nextSibling&&this.parentNode.appendChild(this)}function ls(){return this.each(us)}function cs(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function fs(){return this.each(cs)}function ds(e){var t=typeof e=="function"?e:Si(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function hs(){return null}function ps(e,t){var n=typeof e=="function"?e:Si(e),r=t==null?hs:typeof t=="function"?t:mn(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function ms(){var e=this.parentNode;e&&e.removeChild(this)}function gs(){return this.each(ms)}function vs(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function xs(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function ys(e){return this.select(e?xs:vs)}function _s(e){return arguments.length?this.property("__data__",e):this.node().__data__}function ws(e){return function(t){e.call(this,t,this.__data__)}}function bs(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Ss(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,o;n<i;++n)o=t[n],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):t[++r]=o;++r?t.length=r:delete this.__on}}}function Cs(e,t,n){return function(){var r=this.__on,i,o=ws(t);if(r){for(var a=0,s=r.length;a<s;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=n),i.value=t;return}}this.addEventListener(e.type,o,n),i={type:e.type,name:e.name,value:t,listener:o,options:n},r?r.push(i):this.__on=[i]}}function Ts(e,t,n){var r=bs(e+""),i,o=r.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var u=0,l=s.length,c;u<l;++u)for(i=0,c=s[u];i<o;++i)if((a=r[i]).type===c.type&&a.name===c.name)return c.value}return}for(s=t?Cs:Ss,i=0;i<o;++i)this.each(s(r[i],t,n));return this}function ki(e,t,n){var r=Ei(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function $s(e,t){return function(){return ki(this,e,t)}}function As(e,t){return function(){return ki(this,e,t.apply(this,arguments))}}function Es(e,t){return this.each((typeof t=="function"?As:$s)(e,t))}function*Is(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,o=r.length,a;i<o;++i)(a=r[i])&&(yield a)}var Fi=[null];function z(e,t){this._groups=e,this._parents=t}function Ce(){return new z([[document.documentElement]],Fi)}function Ms(){return this}z.prototype=Ce.prototype={constructor:z,select:na,selectAll:aa,selectChild:ca,selectChildren:pa,filter:ma,data:wa,enter:ga,exit:Sa,join:Ca,merge:Ta,selection:Ms,order:$a,sort:Aa,call:Ia,nodes:Ma,node:Va,size:Na,empty:ka,each:Fa,attr:Ua,style:qa,property:Ya,classed:Ja,text:rs,html:ss,raise:ls,lower:fs,append:ds,insert:ps,remove:gs,clone:ys,datum:_s,on:Ts,dispatch:Es,[Symbol.iterator]:Is};function Oi(e){return typeof e=="string"?new z([[document.querySelector(e)]],[document.documentElement]):new z([[e]],Fi)}function ct(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Vs(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function Di(e){let t,n,r;e.length!==2?(t=ct,n=(s,u)=>ct(e(s),u),r=(s,u)=>e(s)-u):(t=e===ct||e===Vs?e:Ns,n=e,r=e);function i(s,u,l=0,c=s.length){if(l<c){if(t(u,u)!==0)return c;do{const d=l+c>>>1;n(s[d],u)<0?l=d+1:c=d}while(l<c)}return l}function o(s,u,l=0,c=s.length){if(l<c){if(t(u,u)!==0)return c;do{const d=l+c>>>1;n(s[d],u)<=0?l=d+1:c=d}while(l<c)}return l}function a(s,u,l=0,c=s.length){const d=i(s,u,l,c-1);return d>l&&r(s[d-1],u)>-r(s[d],u)?d-1:d}return{left:i,center:a,right:o}}function Ns(){return 0}function ks(e){return e===null?NaN:+e}const Fs=Di(ct),Li=Fs.right;Di(ks).center;const Os=Math.sqrt(50),Ds=Math.sqrt(10),Ls=Math.sqrt(2);function vt(e,t,n){const r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),a=o>=Os?10:o>=Ds?5:o>=Ls?2:1;let s,u,l;return i<0?(l=Math.pow(10,-i)/a,s=Math.round(e*l),u=Math.round(t*l),s/l<e&&++s,u/l>t&&--u,l=-l):(l=Math.pow(10,i)*a,s=Math.round(e/l),u=Math.round(t/l),s*l<e&&++s,u*l>t&&--u),u<s&&.5<=n&&n<2?vt(e,t,n*2):[s,u,l]}function Rs(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[i,o,a]=r?vt(t,e,n):vt(e,t,n);if(!(o>=i))return[];const s=o-i+1,u=new Array(s);if(r)if(a<0)for(let l=0;l<s;++l)u[l]=(o-l)/-a;else for(let l=0;l<s;++l)u[l]=(o-l)*a;else if(a<0)for(let l=0;l<s;++l)u[l]=(i+l)/-a;else for(let l=0;l<s;++l)u[l]=(i+l)*a;return u}function Kt(e,t,n){return t=+t,e=+e,n=+n,vt(e,t,n)[2]}function zs(e,t,n){t=+t,e=+e,n=+n;const r=t<e,i=r?Kt(t,e,n):Kt(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function Hs(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,o=new Array(i);++r<i;)o[r]=e+r*n;return o}function Ri(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function vn(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function zi(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function De(){}var Ve=.7,xt=1/Ve,ye="\\s*([+-]?\\d+)\\s*",Ne="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Q="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Us=/^#([0-9a-f]{3,8})$/,js=new RegExp(`^rgb\\(${ye},${ye},${ye}\\)$`),Bs=new RegExp(`^rgb\\(${Q},${Q},${Q}\\)$`),Ws=new RegExp(`^rgba\\(${ye},${ye},${ye},${Ne}\\)$`),qs=new RegExp(`^rgba\\(${Q},${Q},${Q},${Ne}\\)$`),Ps=new RegExp(`^hsl\\(${Ne},${Q},${Q}\\)$`),Gs=new RegExp(`^hsla\\(${Ne},${Q},${Q},${Ne}\\)$`),Un={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};vn(De,de,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:jn,formatHex:jn,formatHex8:Xs,formatHsl:Ys,formatRgb:Bn,toString:Bn});function jn(){return this.rgb().formatHex()}function Xs(){return this.rgb().formatHex8()}function Ys(){return Hi(this).formatHsl()}function Bn(){return this.rgb().formatRgb()}function de(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Us.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Wn(t):n===3?new D(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Be(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Be(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=js.exec(e))?new D(t[1],t[2],t[3],1):(t=Bs.exec(e))?new D(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Ws.exec(e))?Be(t[1],t[2],t[3],t[4]):(t=qs.exec(e))?Be(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Ps.exec(e))?Gn(t[1],t[2]/100,t[3]/100,1):(t=Gs.exec(e))?Gn(t[1],t[2]/100,t[3]/100,t[4]):Un.hasOwnProperty(e)?Wn(Un[e]):e==="transparent"?new D(NaN,NaN,NaN,0):null}function Wn(e){return new D(e>>16&255,e>>8&255,e&255,1)}function Be(e,t,n,r){return r<=0&&(e=t=n=NaN),new D(e,t,n,r)}function Qs(e){return e instanceof De||(e=de(e)),e?(e=e.rgb(),new D(e.r,e.g,e.b,e.opacity)):new D}function ke(e,t,n,r){return arguments.length===1?Qs(e):new D(e,t,n,r??1)}function D(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}vn(D,ke,zi(De,{brighter(e){return e=e==null?xt:Math.pow(xt,e),new D(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ve:Math.pow(Ve,e),new D(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new D(fe(this.r),fe(this.g),fe(this.b),yt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:qn,formatHex:qn,formatHex8:Ks,formatRgb:Pn,toString:Pn}));function qn(){return`#${ce(this.r)}${ce(this.g)}${ce(this.b)}`}function Ks(){return`#${ce(this.r)}${ce(this.g)}${ce(this.b)}${ce((isNaN(this.opacity)?1:this.opacity)*255)}`}function Pn(){const e=yt(this.opacity);return`${e===1?"rgb(":"rgba("}${fe(this.r)}, ${fe(this.g)}, ${fe(this.b)}${e===1?")":`, ${e})`}`}function yt(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function fe(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ce(e){return e=fe(e),(e<16?"0":"")+e.toString(16)}function Gn(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new q(e,t,n,r)}function Hi(e){if(e instanceof q)return new q(e.h,e.s,e.l,e.opacity);if(e instanceof De||(e=de(e)),!e)return new q;if(e instanceof q)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),a=NaN,s=o-i,u=(o+i)/2;return s?(t===o?a=(n-r)/s+(n<r)*6:n===o?a=(r-t)/s+2:a=(t-n)/s+4,s/=u<.5?o+i:2-o-i,a*=60):s=u>0&&u<1?0:a,new q(a,s,u,e.opacity)}function Zt(e,t,n,r){return arguments.length===1?Hi(e):new q(e,t,n,r??1)}function q(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}vn(q,Zt,zi(De,{brighter(e){return e=e==null?xt:Math.pow(xt,e),new q(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ve:Math.pow(Ve,e),new q(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new D(jt(e>=240?e-240:e+120,i,r),jt(e,i,r),jt(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new q(Xn(this.h),We(this.s),We(this.l),yt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=yt(this.opacity);return`${e===1?"hsl(":"hsla("}${Xn(this.h)}, ${We(this.s)*100}%, ${We(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Xn(e){return e=(e||0)%360,e<0?e+360:e}function We(e){return Math.max(0,Math.min(1,e||0))}function jt(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Nt=e=>()=>e;function Ui(e,t){return function(n){return e+n*t}}function Zs(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Js(e,t){var n=t-e;return n?Ui(e,n>180||n<-180?n-360*Math.round(n/360):n):Nt(isNaN(e)?t:e)}function eu(e){return(e=+e)==1?Ie:function(t,n){return n-t?Zs(t,n,e):Nt(isNaN(t)?n:t)}}function Ie(e,t){var n=t-e;return n?Ui(e,n):Nt(isNaN(e)?t:e)}const _t=function e(t){var n=eu(t);function r(i,o){var a=n((i=ke(i)).r,(o=ke(o)).r),s=n(i.g,o.g),u=n(i.b,o.b),l=Ie(i.opacity,o.opacity);return function(c){return i.r=a(c),i.g=s(c),i.b=u(c),i.opacity=l(c),i+""}}return r.gamma=e,r}(1);function tu(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(o){for(i=0;i<n;++i)r[i]=e[i]*(1-o)+t[i]*o;return r}}function nu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ru(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=new Array(r),o=new Array(n),a;for(a=0;a<r;++a)i[a]=xn(e[a],t[a]);for(;a<n;++a)o[a]=t[a];return function(s){for(a=0;a<r;++a)o[a]=i[a](s);return o}}function iu(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function W(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function ou(e,t){var n={},r={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?n[i]=xn(e[i],t[i]):r[i]=t[i];return function(o){for(i in n)r[i]=n[i](o);return r}}var Jt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Bt=new RegExp(Jt.source,"g");function au(e){return function(){return e}}function su(e){return function(t){return e(t)+""}}function ji(e,t){var n=Jt.lastIndex=Bt.lastIndex=0,r,i,o,a=-1,s=[],u=[];for(e=e+"",t=t+"";(r=Jt.exec(e))&&(i=Bt.exec(t));)(o=i.index)>n&&(o=t.slice(n,o),s[a]?s[a]+=o:s[++a]=o),(r=r[0])===(i=i[0])?s[a]?s[a]+=i:s[++a]=i:(s[++a]=null,u.push({i:a,x:W(r,i)})),n=Bt.lastIndex;return n<t.length&&(o=t.slice(n),s[a]?s[a]+=o:s[++a]=o),s.length<2?u[0]?su(u[0].x):au(t):(t=u.length,function(l){for(var c=0,d;c<t;++c)s[(d=u[c]).i]=d.x(l);return s.join("")})}function xn(e,t){var n=typeof t,r;return t==null||n==="boolean"?Nt(t):(n==="number"?W:n==="string"?(r=de(t))?(t=r,_t):ji:t instanceof de?_t:t instanceof Date?iu:nu(t)?tu:Array.isArray(t)?ru:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ou:W)(e,t)}function uu(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var Yn=180/Math.PI,en={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Bi(e,t,n,r,i,o){var a,s,u;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(u=e*n+t*r)&&(n-=e*u,r-=t*u),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,u/=s),e*r<t*n&&(e=-e,t=-t,u=-u,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*Yn,skewX:Math.atan(u)*Yn,scaleX:a,scaleY:s}}var qe;function lu(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?en:Bi(t.a,t.b,t.c,t.d,t.e,t.f)}function cu(e){return e==null||(qe||(qe=document.createElementNS("http://www.w3.org/2000/svg","g")),qe.setAttribute("transform",e),!(e=qe.transform.baseVal.consolidate()))?en:(e=e.matrix,Bi(e.a,e.b,e.c,e.d,e.e,e.f))}function Wi(e,t,n,r){function i(l){return l.length?l.pop()+" ":""}function o(l,c,d,f,h,m){if(l!==d||c!==f){var v=h.push("translate(",null,t,null,n);m.push({i:v-4,x:W(l,d)},{i:v-2,x:W(c,f)})}else(d||f)&&h.push("translate("+d+t+f+n)}function a(l,c,d,f){l!==c?(l-c>180?c+=360:c-l>180&&(l+=360),f.push({i:d.push(i(d)+"rotate(",null,r)-2,x:W(l,c)})):c&&d.push(i(d)+"rotate("+c+r)}function s(l,c,d,f){l!==c?f.push({i:d.push(i(d)+"skewX(",null,r)-2,x:W(l,c)}):c&&d.push(i(d)+"skewX("+c+r)}function u(l,c,d,f,h,m){if(l!==d||c!==f){var v=h.push(i(h)+"scale(",null,",",null,")");m.push({i:v-4,x:W(l,d)},{i:v-2,x:W(c,f)})}else(d!==1||f!==1)&&h.push(i(h)+"scale("+d+","+f+")")}return function(l,c){var d=[],f=[];return l=e(l),c=e(c),o(l.translateX,l.translateY,c.translateX,c.translateY,d,f),a(l.rotate,c.rotate,d,f),s(l.skewX,c.skewX,d,f),u(l.scaleX,l.scaleY,c.scaleX,c.scaleY,d,f),l=c=null,function(h){for(var m=-1,v=f.length,_;++m<v;)d[(_=f[m]).i]=_.x(h);return d.join("")}}}var fu=Wi(lu,"px, ","px)","deg)"),du=Wi(cu,", ",")",")");function hu(e){return function(t,n){var r=e((t=Zt(t)).h,(n=Zt(n)).h),i=Ie(t.s,n.s),o=Ie(t.l,n.l),a=Ie(t.opacity,n.opacity);return function(s){return t.h=r(s),t.s=i(s),t.l=o(s),t.opacity=a(s),t+""}}}const pu=hu(Js);function mu(e){return function(){return e}}function gu(e){return+e}var Qn=[0,1];function ve(e){return e}function tn(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:mu(isNaN(t)?NaN:.5)}function vu(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function xu(e,t,n){var r=e[0],i=e[1],o=t[0],a=t[1];return i<r?(r=tn(i,r),o=n(a,o)):(r=tn(r,i),o=n(o,a)),function(s){return o(r(s))}}function yu(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),o=new Array(r),a=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=tn(e[a],e[a+1]),o[a]=n(t[a],t[a+1]);return function(s){var u=Li(e,s,1,r)-1;return o[u](i[u](s))}}function _u(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function wu(){var e=Qn,t=Qn,n=xn,r,i,o,a=ve,s,u,l;function c(){var f=Math.min(e.length,t.length);return a!==ve&&(a=vu(e[0],e[f-1])),s=f>2?yu:xu,u=l=null,d}function d(f){return f==null||isNaN(f=+f)?o:(u||(u=s(e.map(r),t,n)))(r(a(f)))}return d.invert=function(f){return a(i((l||(l=s(t,e.map(r),W)))(f)))},d.domain=function(f){return arguments.length?(e=Array.from(f,gu),c()):e.slice()},d.range=function(f){return arguments.length?(t=Array.from(f),c()):t.slice()},d.rangeRound=function(f){return t=Array.from(f),n=uu,c()},d.clamp=function(f){return arguments.length?(a=f?!0:ve,c()):a!==ve},d.interpolate=function(f){return arguments.length?(n=f,c()):n},d.unknown=function(f){return arguments.length?(o=f,d):o},function(f,h){return r=f,i=h,c()}}function bu(){return wu()(ve,ve)}function Su(e,t,n,r){var i=zs(e,t,n),o;switch(r=mt(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(o=Ko(i,a))&&(r.precision=o),bi(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=Zo(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=Qo(i))&&(r.precision=o-(r.type==="%")*2);break}}return Mt(r)}function qi(e){var t=e.domain;return e.ticks=function(n){var r=t();return Rs(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var i=t();return Su(i[0],i[i.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),i=0,o=r.length-1,a=r[i],s=r[o],u,l,c=10;for(s<a&&(l=a,a=s,s=l,l=i,i=o,o=l);c-- >0;){if(l=Kt(a,s,n),l===u)return r[i]=a,r[o]=s,t(r);if(l>0)a=Math.floor(a/l)*l,s=Math.ceil(s/l)*l;else if(l<0)a=Math.ceil(a*l)/l,s=Math.floor(s*l)/l;else break;u=l}return e},e}function Pi(){var e=bu();return e.copy=function(){return _u(e,Pi())},Ri.apply(e,arguments),qi(e)}function Gi(){var e=0,t=1,n=1,r=[.5],i=[0,1],o;function a(u){return u!=null&&u<=u?i[Li(r,u,0,n)]:o}function s(){var u=-1;for(r=new Array(n);++u<n;)r[u]=((u+1)*t-(u-n)*e)/(n+1);return a}return a.domain=function(u){return arguments.length?([e,t]=u,e=+e,t=+t,s()):[e,t]},a.range=function(u){return arguments.length?(n=(i=Array.from(u)).length-1,s()):i.slice()},a.invertExtent=function(u){var l=i.indexOf(u);return l<0?[NaN,NaN]:l<1?[e,r[0]]:l>=n?[r[n-1],t]:[r[l-1],r[l]]},a.unknown=function(u){return arguments.length&&(o=u),a},a.thresholds=function(){return r.slice()},a.copy=function(){return Gi().domain([e,t]).range(i).unknown(o)},Ri.apply(qi(a),arguments)}var Xi=typeof window=="object"&&window&&window.Object===Object&&window,Cu=typeof self=="object"&&self&&self.Object===Object&&self,ae=Xi||Cu||Function("return this")(),wt=ae.Symbol,Yi=Object.prototype,Tu=Yi.hasOwnProperty,$u=Yi.toString,Te=wt?wt.toStringTag:void 0;function Au(e){var t=Tu.call(e,Te),n=e[Te];try{e[Te]=void 0;var r=!0}catch{}var i=$u.call(e);return r&&(t?e[Te]=n:delete e[Te]),i}var Eu=Object.prototype,Iu=Eu.toString;function Mu(e){return Iu.call(e)}var Vu="[object Null]",Nu="[object Undefined]",Kn=wt?wt.toStringTag:void 0;function me(e){return e==null?e===void 0?Nu:Vu:Kn&&Kn in Object(e)?Au(e):Mu(e)}function Le(e){return e!=null&&typeof e=="object"}var ku="[object Number]";function Fu(e){return typeof e=="number"||Le(e)&&me(e)==ku}function Ou(e,t){for(var n,r=-1,i=e.length;++r<i;){var o=t(e[r]);o!==void 0&&(n=n===void 0?o:n+o)}return n}function Qi(e){return e}function Du(e){return e&&e.length?Ou(e,Qi):0}var Lu=Object.prototype;function Ki(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Lu;return e===n}function Ru(e,t){return function(n){return e(t(n))}}var zu=Ru(Object.keys,Object),Hu=Object.prototype,Uu=Hu.hasOwnProperty;function ju(e){if(!Ki(e))return zu(e);var t=[];for(var n in Object(e))Uu.call(e,n)&&n!="constructor"&&t.push(n);return t}function bt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Bu="[object AsyncFunction]",Wu="[object Function]",qu="[object GeneratorFunction]",Pu="[object Proxy]";function Zi(e){if(!bt(e))return!1;var t=me(e);return t==Wu||t==qu||t==Bu||t==Pu}var Wt=ae["__core-js_shared__"],Zn=function(){var e=/[^.]+$/.exec(Wt&&Wt.keys&&Wt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Gu(e){return!!Zn&&Zn in e}var Xu=Function.prototype,Yu=Xu.toString;function ge(e){if(e!=null){try{return Yu.call(e)}catch{}try{return e+""}catch{}}return""}var Qu=/[\\^$.*+?()[\]{}|]/g,Ku=/^\[object .+?Constructor\]$/,Zu=Function.prototype,Ju=Object.prototype,el=Zu.toString,tl=Ju.hasOwnProperty,nl=RegExp("^"+el.call(tl).replace(Qu,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rl(e){if(!bt(e)||Gu(e))return!1;var t=Zi(e)?nl:Ku;return t.test(ge(e))}function il(e,t){return e==null?void 0:e[t]}function Re(e,t){var n=il(e,t);return rl(n)?n:void 0}var nn=Re(ae,"DataView"),rn=Re(ae,"Map"),on=Re(ae,"Promise"),an=Re(ae,"Set"),sn=Re(ae,"WeakMap"),Jn="[object Map]",ol="[object Object]",er="[object Promise]",tr="[object Set]",nr="[object WeakMap]",rr="[object DataView]",al=ge(nn),sl=ge(rn),ul=ge(on),ll=ge(an),cl=ge(sn),ue=me;(nn&&ue(new nn(new ArrayBuffer(1)))!=rr||rn&&ue(new rn)!=Jn||on&&ue(on.resolve())!=er||an&&ue(new an)!=tr||sn&&ue(new sn)!=nr)&&(ue=function(e){var t=me(e),n=t==ol?e.constructor:void 0,r=n?ge(n):"";if(r)switch(r){case al:return rr;case sl:return Jn;case ul:return er;case ll:return tr;case cl:return nr}return t});var fl="[object Arguments]";function ir(e){return Le(e)&&me(e)==fl}var Ji=Object.prototype,dl=Ji.hasOwnProperty,hl=Ji.propertyIsEnumerable,pl=ir(function(){return arguments}())?ir:function(e){return Le(e)&&dl.call(e,"callee")&&!hl.call(e,"callee")},yn=Array.isArray,ml=9007199254740991;function eo(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ml}function gl(e){return e!=null&&eo(e.length)&&!Zi(e)}function vl(){return!1}var to=typeof exports=="object"&&exports&&!exports.nodeType&&exports,or=to&&typeof module=="object"&&module&&!module.nodeType&&module,xl=or&&or.exports===to,ar=xl?ae.Buffer:void 0,yl=ar?ar.isBuffer:void 0,_l=yl||vl,wl="[object Arguments]",bl="[object Array]",Sl="[object Boolean]",Cl="[object Date]",Tl="[object Error]",$l="[object Function]",Al="[object Map]",El="[object Number]",Il="[object Object]",Ml="[object RegExp]",Vl="[object Set]",Nl="[object String]",kl="[object WeakMap]",Fl="[object ArrayBuffer]",Ol="[object DataView]",Dl="[object Float32Array]",Ll="[object Float64Array]",Rl="[object Int8Array]",zl="[object Int16Array]",Hl="[object Int32Array]",Ul="[object Uint8Array]",jl="[object Uint8ClampedArray]",Bl="[object Uint16Array]",Wl="[object Uint32Array]",$={};$[Dl]=$[Ll]=$[Rl]=$[zl]=$[Hl]=$[Ul]=$[jl]=$[Bl]=$[Wl]=!0;$[wl]=$[bl]=$[Fl]=$[Sl]=$[Ol]=$[Cl]=$[Tl]=$[$l]=$[Al]=$[El]=$[Il]=$[Ml]=$[Vl]=$[Nl]=$[kl]=!1;function ql(e){return Le(e)&&eo(e.length)&&!!$[me(e)]}function Pl(e){return function(t){return e(t)}}var no=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Me=no&&typeof module=="object"&&module&&!module.nodeType&&module,Gl=Me&&Me.exports===no,qt=Gl&&Xi.process,sr=function(){try{var e=Me&&Me.require&&Me.require("util").types;return e||qt&&qt.binding&&qt.binding("util")}catch{}}(),ur=sr&&sr.isTypedArray,Xl=ur?Pl(ur):ql,Yl="[object Map]",Ql="[object Set]",Kl=Object.prototype,Zl=Kl.hasOwnProperty;function _n(e){if(e==null)return!0;if(gl(e)&&(yn(e)||typeof e=="string"||typeof e.splice=="function"||_l(e)||Xl(e)||pl(e)))return!e.length;var t=ue(e);if(t==Yl||t==Ql)return!e.size;if(Ki(e))return!ju(e).length;for(var n in e)if(Zl.call(e,n))return!1;return!0}function Jl(e){return e&&e.length?e[0]:void 0}function ro(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function io(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(i);++r<i;)o[r]=e[r+t];return o}var ec=/\s/;function tc(e){for(var t=e.length;t--&&ec.test(e.charAt(t)););return t}var nc=/^\s+/;function rc(e){return e&&e.slice(0,tc(e)+1).replace(nc,"")}var ic="[object Symbol]";function oc(e){return typeof e=="symbol"||Le(e)&&me(e)==ic}var lr=NaN,ac=/^[-+]0x[0-9a-f]+$/i,sc=/^0b[01]+$/i,uc=/^0o[0-7]+$/i,lc=parseInt;function cc(e){if(typeof e=="number")return e;if(oc(e))return lr;if(bt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=bt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=rc(e);var n=sc.test(e);return n||uc.test(e)?lc(e.slice(2),n?2:8):ac.test(e)?lr:+e}var cr=1/0,fc=17976931348623157e292;function dc(e){if(!e)return e===0?e:0;if(e=cc(e),e===cr||e===-cr){var t=e<0?-1:1;return t*fc}return e===e?e:0}function wn(e){var t=dc(e),n=t%1;return t===t?n?t-n:t:0}function hc(e,t,n){var r=e==null?0:e.length;return r?(t=t===void 0?1:wn(t),io(e,t<0?0:t,r)):[]}function pc(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function mc(e){return typeof e=="function"?e:Qi}var gc=9007199254740991,Pt=4294967295,vc=Math.min;function xc(e,t){if(e=wn(e),e<1||e>gc)return[];var n=Pt,r=vc(e,Pt);t=mc(t),e-=Pt;for(var i=pc(r,t);++n<e;)t(n);return i}function yc(e,t,n){return e&&e.length?(t=t===void 0?1:wn(t),io(e,0,t<0?0:t)):[]}function St(e,t){return Du(yc(e,t))}function _c({tickData:e,customSegmentStops:t,min:n,max:r}){if(!yn(t)||_n(t))return e;if(Jl(t)!==n)throw new Error(`First value should be equivalent to min value given. Current min value - ${n}`);if(ro(t)!==r)throw new Error(`Last value should be equivalent to max value given. Current min value - ${r}`);const i=t.map((o,a)=>{if(a!==0)return(o-t[a-1])/(r-n)});return hc(i)}function wc({heightRatio:e,radius:t}){if(e<0||e>1)throw new Error(`Invalid needleHeightRatio given - ${e}`);return Math.round(t*e)}function bc({maxSegmentLabelCount:e,segmentCount:t}){const n=parseInt(e,10),r=parseInt(t,10);return Fu(n)&&n>=0&&n<=r?n:r}function Sc({min:e,max:t,segments:n}){return Pi().range([0,1]).domain([e,t])}function Cc(e,{min:t,max:n,segments:r}){let i=[];if(i=e.ticks(r),(ro(i)!==n||r<i.length)&&i.length>1){const a=(n-t)/r;i=[t],xc(r,s=>{i.push(t+(s+1)*a)})}return i.length===1&&(i=[t,n]),i}function Tc(e,t){const n=t.labelFormat(e),r=t.currentValuePlaceholderStyle;return t.currentValueText.replace(r,n)}function fr(e){return e*Math.PI/180}function $c(e,t,n){return`translate(${e+t}, ${e+n})`}function Ac(e){return e.width/2}const C={easeLinear:"easeLinear",easeQuadIn:"easeQuadIn",easeQuadOut:"easeQuadOut",easeQuadInOut:"easeQuadInOut",easeCubicIn:"easeCubicIn",easeCubicOut:"easeCubicOut",easeCubicInOut:"easeCubicInOut",easePolyIn:"easePolyIn",easePolyOut:"easePolyOut",easePolyInOut:"easePolyInOut",easeSinIn:"easeSinIn",easeSinOut:"easeSinOut",easeSinInOut:"easeSinInOut",easeExpIn:"easeExpIn",easeExpOut:"easeExpOut",easeExpInOut:"easeExpInOut",easeCircleIn:"easeCircleIn",easeCircleOut:"easeCircleOut",easeCircleInOut:"easeCircleInOut",easeBounceIn:"easeBounceIn",easeBounceOut:"easeBounceOut",easeBounceInOut:"easeBounceInOut",easeBackIn:"easeBackIn",easeBackOut:"easeBackOut",easeBackInOut:"easeBackInOut",easeElasticIn:"easeElasticIn",easeElasticOut:"easeElasticOut",easeElasticInOut:"easeElasticInOut",easeElastic:"easeElastic"},oo=e=>e,dr={value:0,minValue:0,maxValue:1e3,forceRender:!1,width:300,height:300,paddingHorizontal:0,paddingVertical:0,fluidWidth:!1,dimensionUnit:"px",segments:5,maxSegmentLabels:-1,customSegmentStops:[],customSegmentLabels:[],needleColor:"steelblue",startColor:"#FF471A",endColor:"#33CC33",segmentColors:[],needleTransition:C.easeQuadInOut,needleTransitionDuration:500,needleHeightRatio:.9,ringWidth:60,textColor:"#666",valueFormat:"",segmentValueFormatter:oo,currentValueText:"${value}",currentValuePlaceholderStyle:"${value}",labelFontSize:"14px",valueTextFontSize:"16px",valueTextFontWeight:"bold",svgAriaLabel:"React d3 speedometer"},Ec={ringInset:20,pointerWidth:10,pointerTailLength:5,minAngle:-90,maxAngle:90,labelInset:10},Ic=({PROPS:e,parentWidth:t,parentHeight:n})=>{const r={width:e.fluidWidth?t:e.width,height:e.fluidWidth?n:e.height,paddingHorizontal:e.paddingHorizontal,paddingVertical:e.paddingVertical,dimensionUnit:e.dimensionUnit,ringWidth:e.ringWidth,minValue:e.minValue,maxValue:e.maxValue,needleColor:e.needleColor,majorTicks:e.segments,customSegmentStops:e.customSegmentStops,customSegmentLabels:e.customSegmentLabels,maxSegmentLabels:bc({maxSegmentLabelCount:e.maxSegmentLabels,segmentCount:e.segments}),segmentColors:e.segmentColors,arcColorFn:e.segmentColors.length>0?Gi(e.segmentColors):pu(ke(e.startColor),ke(e.endColor)),needleTransition:e.needleTransition,needleTransitionDuration:e.needleTransitionDuration,needleHeightRatio:e.needleHeightRatio,textColor:e.textColor,labelFormat:Mt(e.valueFormat),segmentValueFormatter:e.segmentValueFormatter,currentValueText:e.currentValueText,currentValuePlaceholderStyle:e.currentValuePlaceholderStyle,labelFontSize:e.labelFontSize,valueTextFontSize:e.valueTextFontSize,valueTextFontWeight:e.valueTextFontWeight,svgAriaLabel:e.svgAriaLabel};return Object.assign({},Ec,r)},Mc=(e,t)=>({...e,...t});function O(e){return function(){return e}}const hr=Math.abs,M=Math.atan2,se=Math.cos,Vc=Math.max,Gt=Math.min,Y=Math.sin,xe=Math.sqrt,F=1e-12,Fe=Math.PI,Ct=Fe/2,Nc=2*Fe;function kc(e){return e>1?0:e<-1?Fe:Math.acos(e)}function pr(e){return e>=1?Ct:e<=-1?-Ct:Math.asin(e)}const un=Math.PI,ln=2*un,le=1e-6,Fc=ln-le;function ao(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Oc(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return ao;const n=10**t;return function(r){this._+=r[0];for(let i=1,o=r.length;i<o;++i)this._+=Math.round(arguments[i]*n)/n+r[i]}}class Dc{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?ao:Oc(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,i){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(t,n,r,i,o,a){this._append`C${+t},${+n},${+r},${+i},${this._x1=+o},${this._y1=+a}`}arcTo(t,n,r,i,o){if(t=+t,n=+n,r=+r,i=+i,o=+o,o<0)throw new Error(`negative radius: ${o}`);let a=this._x1,s=this._y1,u=r-t,l=i-n,c=a-t,d=s-n,f=c*c+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(f>le)if(!(Math.abs(d*u-l*c)>le)||!o)this._append`L${this._x1=t},${this._y1=n}`;else{let h=r-a,m=i-s,v=u*u+l*l,_=h*h+m*m,x=Math.sqrt(v),b=Math.sqrt(f),w=o*Math.tan((un-Math.acos((v+f-_)/(2*x*b)))/2),T=w/b,S=w/x;Math.abs(T-1)>le&&this._append`L${t+T*c},${n+T*d}`,this._append`A${o},${o},0,0,${+(d*h>c*m)},${this._x1=t+S*u},${this._y1=n+S*l}`}}arc(t,n,r,i,o,a){if(t=+t,n=+n,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(i),u=r*Math.sin(i),l=t+s,c=n+u,d=1^a,f=a?i-o:o-i;this._x1===null?this._append`M${l},${c}`:(Math.abs(this._x1-l)>le||Math.abs(this._y1-c)>le)&&this._append`L${l},${c}`,r&&(f<0&&(f=f%ln+ln),f>Fc?this._append`A${r},${r},0,1,${d},${t-s},${n-u}A${r},${r},0,1,${d},${this._x1=l},${this._y1=c}`:f>le&&this._append`A${r},${r},0,${+(f>=un)},${d},${this._x1=t+r*Math.cos(o)},${this._y1=n+r*Math.sin(o)}`)}rect(t,n,r,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function so(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Dc(t)}function Lc(e){return e.innerRadius}function Rc(e){return e.outerRadius}function zc(e){return e.startAngle}function Hc(e){return e.endAngle}function Uc(e){return e&&e.padAngle}function jc(e,t,n,r,i,o,a,s){var u=n-e,l=r-t,c=a-i,d=s-o,f=d*u-c*l;if(!(f*f<F))return f=(c*(t-o)-d*(e-i))/f,[e+f*u,t+f*l]}function Pe(e,t,n,r,i,o,a){var s=e-n,u=t-r,l=(a?o:-o)/xe(s*s+u*u),c=l*u,d=-l*s,f=e+c,h=t+d,m=n+c,v=r+d,_=(f+m)/2,x=(h+v)/2,b=m-f,w=v-h,T=b*b+w*w,S=i-o,N=f*v-m*h,H=(w<0?-1:1)*xe(Vc(0,S*S*T-N*N)),U=(N*w-b*H)/T,G=(-N*b-w*H)/T,L=(N*w+b*H)/T,g=(-N*b+w*H)/T,E=U-_,p=G-x,y=L-_,X=g-x;return E*E+p*p>y*y+X*X&&(U=L,G=g),{cx:U,cy:G,x01:-c,y01:-d,x11:U*(i/S-1),y11:G*(i/S-1)}}function Bc(){var e=Lc,t=Rc,n=O(0),r=null,i=zc,o=Hc,a=Uc,s=null,u=so(l);function l(){var c,d,f=+e.apply(this,arguments),h=+t.apply(this,arguments),m=i.apply(this,arguments)-Ct,v=o.apply(this,arguments)-Ct,_=hr(v-m),x=v>m;if(s||(s=c=u()),h<f&&(d=h,h=f,f=d),!(h>F))s.moveTo(0,0);else if(_>Nc-F)s.moveTo(h*se(m),h*Y(m)),s.arc(0,0,h,m,v,!x),f>F&&(s.moveTo(f*se(v),f*Y(v)),s.arc(0,0,f,v,m,x));else{var b=m,w=v,T=m,S=v,N=_,H=_,U=a.apply(this,arguments)/2,G=U>F&&(r?+r.apply(this,arguments):xe(f*f+h*h)),L=Gt(hr(h-f)/2,+n.apply(this,arguments)),g=L,E=L,p,y;if(G>F){var X=pr(G/f*Y(U)),Z=pr(G/h*Y(U));(N-=X*2)>F?(X*=x?1:-1,T+=X,S-=X):(N=0,T=S=(m+v)/2),(H-=Z*2)>F?(Z*=x?1:-1,b+=Z,w-=Z):(H=0,b=w=(m+v)/2)}var j=h*se(b),B=h*Y(b),k=f*se(S),ze=f*Y(S);if(L>F){var He=h*se(w),Ue=h*Y(w),Dt=f*se(T),Lt=f*Y(T),J;if(_<Fe)if(J=jc(j,B,Dt,Lt,He,Ue,k,ze)){var Rt=j-J[0],zt=B-J[1],Ht=He-J[0],Ut=Ue-J[1],Vn=1/Y(kc((Rt*Ht+zt*Ut)/(xe(Rt*Rt+zt*zt)*xe(Ht*Ht+Ut*Ut)))/2),Nn=xe(J[0]*J[0]+J[1]*J[1]);g=Gt(L,(f-Nn)/(Vn-1)),E=Gt(L,(h-Nn)/(Vn+1))}else g=E=0}H>F?E>F?(p=Pe(Dt,Lt,j,B,h,E,x),y=Pe(He,Ue,k,ze,h,E,x),s.moveTo(p.cx+p.x01,p.cy+p.y01),E<L?s.arc(p.cx,p.cy,E,M(p.y01,p.x01),M(y.y01,y.x01),!x):(s.arc(p.cx,p.cy,E,M(p.y01,p.x01),M(p.y11,p.x11),!x),s.arc(0,0,h,M(p.cy+p.y11,p.cx+p.x11),M(y.cy+y.y11,y.cx+y.x11),!x),s.arc(y.cx,y.cy,E,M(y.y11,y.x11),M(y.y01,y.x01),!x))):(s.moveTo(j,B),s.arc(0,0,h,b,w,!x)):s.moveTo(j,B),!(f>F)||!(N>F)?s.lineTo(k,ze):g>F?(p=Pe(k,ze,He,Ue,f,-g,x),y=Pe(j,B,Dt,Lt,f,-g,x),s.lineTo(p.cx+p.x01,p.cy+p.y01),g<L?s.arc(p.cx,p.cy,g,M(p.y01,p.x01),M(y.y01,y.x01),!x):(s.arc(p.cx,p.cy,g,M(p.y01,p.x01),M(p.y11,p.x11),!x),s.arc(0,0,f,M(p.cy+p.y11,p.cx+p.x11),M(y.cy+y.y11,y.cx+y.x11),x),s.arc(y.cx,y.cy,g,M(y.y11,y.x11),M(y.y01,y.x01),!x))):s.arc(0,0,f,S,T,x)}if(s.closePath(),c)return s=null,c+""||null}return l.centroid=function(){var c=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,d=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Fe/2;return[se(d)*c,Y(d)*c]},l.innerRadius=function(c){return arguments.length?(e=typeof c=="function"?c:O(+c),l):e},l.outerRadius=function(c){return arguments.length?(t=typeof c=="function"?c:O(+c),l):t},l.cornerRadius=function(c){return arguments.length?(n=typeof c=="function"?c:O(+c),l):n},l.padRadius=function(c){return arguments.length?(r=c==null?null:typeof c=="function"?c:O(+c),l):r},l.startAngle=function(c){return arguments.length?(i=typeof c=="function"?c:O(+c),l):i},l.endAngle=function(c){return arguments.length?(o=typeof c=="function"?c:O(+c),l):o},l.padAngle=function(c){return arguments.length?(a=typeof c=="function"?c:O(+c),l):a},l.context=function(c){return arguments.length?(s=c??null,l):s},l}function Wc(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function uo(e){this._context=e}uo.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function qc(e){return new uo(e)}function Pc(e){return e[0]}function Gc(e){return e[1]}function Xc(e,t){var n=O(!0),r=null,i=qc,o=null,a=so(s);e=typeof e=="function"?e:e===void 0?Pc:O(e),t=typeof t=="function"?t:t===void 0?Gc:O(t);function s(u){var l,c=(u=Wc(u)).length,d,f=!1,h;for(r==null&&(o=i(h=a())),l=0;l<=c;++l)!(l<c&&n(d=u[l],l,u))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+e(d,l,u),+t(d,l,u));if(h)return o=null,h+""||null}return s.x=function(u){return arguments.length?(e=typeof u=="function"?u:O(+u),s):e},s.y=function(u){return arguments.length?(t=typeof u=="function"?u:O(+u),s):t},s.defined=function(u){return arguments.length?(n=typeof u=="function"?u:O(!!u),s):n},s.curve=function(u){return arguments.length?(i=u,r!=null&&(o=i(r)),s):i},s.context=function(u){return arguments.length?(u==null?r=o=null:o=i(r=u),s):r},s}function mr(e){return e<0?-1:1}function gr(e,t,n){var r=e._x1-e._x0,i=t-e._x1,o=(e._y1-e._y0)/(r||i<0&&-0),a=(n-e._y1)/(i||r<0&&-0),s=(o*i+a*r)/(r+i);return(mr(o)+mr(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(s))||0}function vr(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function Xt(e,t,n){var r=e._x0,i=e._y0,o=e._x1,a=e._y1,s=(o-r)/3;e._context.bezierCurveTo(r+s,i+s*t,o-s,a-s*n,o,a)}function Tt(e){this._context=e}Tt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Xt(this,this._t0,vr(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Xt(this,vr(this,n=gr(this,e,t)),n);break;default:Xt(this,this._t0,n=gr(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}};Object.create(Tt.prototype).point=function(e,t){Tt.prototype.point.call(this,t,e)};function Yc(e){return new Tt(e)}var Qc={value:function(){}};function lo(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new ft(n)}function ft(e){this._=e}function Kc(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}ft.prototype=lo.prototype={constructor:ft,on:function(e,t){var n=this._,r=Kc(e+"",n),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(e=r[o]).type)&&(i=Zc(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<a;)if(i=(e=r[o]).type)n[i]=xr(n[i],e.name,t);else if(t==null)for(i in n)n[i]=xr(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ft(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};function Zc(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function xr(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=Qc,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var be=0,Ae=0,$e=0,co=1e3,$t,Ee,At=0,he=0,kt=0,Oe=typeof performance=="object"&&performance.now?performance:Date,fo=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function bn(){return he||(fo(Jc),he=Oe.now()+kt)}function Jc(){he=0}function Et(){this._call=this._time=this._next=null}Et.prototype=ho.prototype={constructor:Et,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?bn():+n)+(t==null?0:+t),!this._next&&Ee!==this&&(Ee?Ee._next=this:$t=this,Ee=this),this._call=e,this._time=n,cn()},stop:function(){this._call&&(this._call=null,this._time=1/0,cn())}};function ho(e,t,n){var r=new Et;return r.restart(e,t,n),r}function ef(){bn(),++be;for(var e=$t,t;e;)(t=he-e._time)>=0&&e._call.call(null,t),e=e._next;--be}function yr(){he=(At=Oe.now())+kt,be=Ae=0;try{ef()}finally{be=0,nf(),he=0}}function tf(){var e=Oe.now(),t=e-At;t>co&&(kt-=t,At=e)}function nf(){for(var e,t=$t,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:$t=n);Ee=e,cn(r)}function cn(e){if(!be){Ae&&(Ae=clearTimeout(Ae));var t=e-he;t>24?(e<1/0&&(Ae=setTimeout(yr,e-Oe.now()-kt)),$e&&($e=clearInterval($e))):($e||(At=Oe.now(),$e=setInterval(tf,co)),be=1,fo(yr))}}function _r(e,t,n){var r=new Et;return t=t==null?0:+t,r.restart(function(i){r.stop(),e(i+t)},t,n),r}var rf=lo("start","end","cancel","interrupt"),of=[],po=0,wr=1,fn=2,dt=3,br=4,dn=5,ht=6;function Ft(e,t,n,r,i,o){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;af(e,n,{name:t,index:r,group:i,on:rf,tween:of,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:po})}function Sn(e,t){var n=P(e,t);if(n.state>po)throw new Error("too late; already scheduled");return n}function K(e,t){var n=P(e,t);if(n.state>dt)throw new Error("too late; already running");return n}function P(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function af(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=ho(o,0,n.time);function o(l){n.state=wr,n.timer.restart(a,n.delay,n.time),n.delay<=l&&a(l-n.delay)}function a(l){var c,d,f,h;if(n.state!==wr)return u();for(c in r)if(h=r[c],h.name===n.name){if(h.state===dt)return _r(a);h.state===br?(h.state=ht,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[c]):+c<t&&(h.state=ht,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[c])}if(_r(function(){n.state===dt&&(n.state=br,n.timer.restart(s,n.delay,n.time),s(l))}),n.state=fn,n.on.call("start",e,e.__data__,n.index,n.group),n.state===fn){for(n.state=dt,i=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(e,e.__data__,n.index,n.group))&&(i[++d]=h);i.length=d+1}}function s(l){for(var c=l<n.duration?n.ease.call(null,l/n.duration):(n.timer.restart(u),n.state=dn,1),d=-1,f=i.length;++d<f;)i[d].call(e,c);n.state===dn&&(n.on.call("end",e,e.__data__,n.index,n.group),u())}function u(){n.state=ht,n.timer.stop(),delete r[t];for(var l in r)return;delete e.__transition}}function sf(e,t){var n=e.__transition,r,i,o=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){o=!1;continue}i=r.state>fn&&r.state<dn,r.state=ht,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}o&&delete e.__transition}}function uf(e){return this.each(function(){sf(this,e)})}function lf(e,t){var n,r;return function(){var i=K(this,e),o=i.tween;if(o!==n){r=n=o;for(var a=0,s=r.length;a<s;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function cf(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var o=K(this,e),a=o.tween;if(a!==r){i=(r=a).slice();for(var s={name:t,value:n},u=0,l=i.length;u<l;++u)if(i[u].name===t){i[u]=s;break}u===l&&i.push(s)}o.tween=i}}function ff(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=P(this.node(),n).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?lf:cf)(n,e,t))}function Cn(e,t,n){var r=e._id;return e.each(function(){var i=K(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return P(i,r).value[t]}}function mo(e,t){var n;return(typeof t=="number"?W:t instanceof de?_t:(n=de(t))?(t=n,_t):ji)(e,t)}function df(e){return function(){this.removeAttribute(e)}}function hf(e){return function(){this.removeAttributeNS(e.space,e.local)}}function pf(e,t,n){var r,i=n+"",o;return function(){var a=this.getAttribute(e);return a===i?null:a===r?o:o=t(r=a,n)}}function mf(e,t,n){var r,i=n+"",o;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?o:o=t(r=a,n)}}function gf(e,t,n){var r,i,o;return function(){var a,s=n(this),u;return s==null?void this.removeAttribute(e):(a=this.getAttribute(e),u=s+"",a===u?null:a===r&&u===i?o:(i=u,o=t(r=a,s)))}}function vf(e,t,n){var r,i,o;return function(){var a,s=n(this),u;return s==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),u=s+"",a===u?null:a===r&&u===i?o:(i=u,o=t(r=a,s)))}}function xf(e,t){var n=Vt(e),r=n==="transform"?du:mo;return this.attrTween(e,typeof t=="function"?(n.local?vf:gf)(n,r,Cn(this,"attr."+e,t)):t==null?(n.local?hf:df)(n):(n.local?mf:pf)(n,r,t))}function yf(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function _f(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function wf(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&_f(e,o)),n}return i._value=t,i}function bf(e,t){var n,r;function i(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&yf(e,o)),n}return i._value=t,i}function Sf(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Vt(e);return this.tween(n,(r.local?wf:bf)(r,t))}function Cf(e,t){return function(){Sn(this,e).delay=+t.apply(this,arguments)}}function Tf(e,t){return t=+t,function(){Sn(this,e).delay=t}}function $f(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Cf:Tf)(t,e)):P(this.node(),t).delay}function Af(e,t){return function(){K(this,e).duration=+t.apply(this,arguments)}}function Ef(e,t){return t=+t,function(){K(this,e).duration=t}}function If(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Af:Ef)(t,e)):P(this.node(),t).duration}function Mf(e,t){if(typeof t!="function")throw new Error;return function(){K(this,e).ease=t}}function Vf(e){var t=this._id;return arguments.length?this.each(Mf(t,e)):P(this.node(),t).ease}function Nf(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;K(this,e).ease=n}}function kf(e){if(typeof e!="function")throw new Error;return this.each(Nf(this._id,e))}function Ff(e){typeof e!="function"&&(e=Ti(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var o=t[i],a=o.length,s=r[i]=[],u,l=0;l<a;++l)(u=o[l])&&e.call(u,u.__data__,l,o)&&s.push(u);return new ne(r,this._parents,this._name,this._id)}function Of(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,o=Math.min(r,i),a=new Array(r),s=0;s<o;++s)for(var u=t[s],l=n[s],c=u.length,d=a[s]=new Array(c),f,h=0;h<c;++h)(f=u[h]||l[h])&&(d[h]=f);for(;s<r;++s)a[s]=t[s];return new ne(a,this._parents,this._name,this._id)}function Df(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Lf(e,t,n){var r,i,o=Df(t)?Sn:K;return function(){var a=o(this,e),s=a.on;s!==r&&(i=(r=s).copy()).on(t,n),a.on=i}}function Rf(e,t){var n=this._id;return arguments.length<2?P(this.node(),n).on.on(e):this.each(Lf(n,e,t))}function zf(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Hf(){return this.on("end.remove",zf(this._id))}function Uf(e){var t=this._name,n=this._id;typeof e!="function"&&(e=mn(e));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var s=r[a],u=s.length,l=o[a]=new Array(u),c,d,f=0;f<u;++f)(c=s[f])&&(d=e.call(c,c.__data__,f,s))&&("__data__"in c&&(d.__data__=c.__data__),l[f]=d,Ft(l[f],t,n,f,l,P(c,n)));return new ne(o,this._parents,t,n)}function jf(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Ci(e));for(var r=this._groups,i=r.length,o=[],a=[],s=0;s<i;++s)for(var u=r[s],l=u.length,c,d=0;d<l;++d)if(c=u[d]){for(var f=e.call(c,c.__data__,d,u),h,m=P(c,n),v=0,_=f.length;v<_;++v)(h=f[v])&&Ft(h,t,n,v,f,m);o.push(f),a.push(c)}return new ne(o,a,t,n)}var Bf=Ce.prototype.constructor;function Wf(){return new Bf(this._groups,this._parents)}function qf(e,t){var n,r,i;return function(){var o=we(this,e),a=(this.style.removeProperty(e),we(this,e));return o===a?null:o===n&&a===r?i:i=t(n=o,r=a)}}function go(e){return function(){this.style.removeProperty(e)}}function Pf(e,t,n){var r,i=n+"",o;return function(){var a=we(this,e);return a===i?null:a===r?o:o=t(r=a,n)}}function Gf(e,t,n){var r,i,o;return function(){var a=we(this,e),s=n(this),u=s+"";return s==null&&(u=s=(this.style.removeProperty(e),we(this,e))),a===u?null:a===r&&u===i?o:(i=u,o=t(r=a,s))}}function Xf(e,t){var n,r,i,o="style."+t,a="end."+o,s;return function(){var u=K(this,e),l=u.on,c=u.value[o]==null?s||(s=go(t)):void 0;(l!==n||i!==c)&&(r=(n=l).copy()).on(a,i=c),u.on=r}}function Yf(e,t,n){var r=(e+="")=="transform"?fu:mo;return t==null?this.styleTween(e,qf(e,r)).on("end.style."+e,go(e)):typeof t=="function"?this.styleTween(e,Gf(e,r,Cn(this,"style."+e,t))).each(Xf(this._id,e)):this.styleTween(e,Pf(e,r,t),n).on("end.style."+e,null)}function Qf(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Kf(e,t,n){var r,i;function o(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Qf(e,a,n)),r}return o._value=t,o}function Zf(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Kf(e,t,n??""))}function Jf(e){return function(){this.textContent=e}}function ed(e){return function(){var t=e(this);this.textContent=t??""}}function td(e){return this.tween("text",typeof e=="function"?ed(Cn(this,"text",e)):Jf(e==null?"":e+""))}function nd(e){return function(t){this.textContent=e.call(this,t)}}function rd(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&nd(i)),t}return r._value=e,r}function id(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,rd(e))}function od(){for(var e=this._name,t=this._id,n=xo(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],s=a.length,u,l=0;l<s;++l)if(u=a[l]){var c=P(u,t);Ft(u,e,n,l,a,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new ne(r,this._parents,e,n)}function ad(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(o,a){var s={value:a},u={value:function(){--i===0&&o()}};n.each(function(){var l=K(this,r),c=l.on;c!==e&&(t=(e=c).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(u)),l.on=t}),i===0&&o()})}var sd=0;function ne(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function vo(e){return Ce().transition(e)}function xo(){return++sd}var ee=Ce.prototype;ne.prototype=vo.prototype={constructor:ne,select:Uf,selectAll:jf,selectChild:ee.selectChild,selectChildren:ee.selectChildren,filter:Ff,merge:Of,selection:Wf,transition:od,call:ee.call,nodes:ee.nodes,node:ee.node,size:ee.size,empty:ee.empty,each:ee.each,on:Rf,attr:xf,attrTween:Sf,style:Yf,styleTween:Zf,text:td,textTween:id,remove:Hf,tween:ff,delay:$f,duration:If,ease:Vf,easeVarying:kf,end:ad,[Symbol.iterator]:ee[Symbol.iterator]};const ud=e=>+e;function ld(e){return e*e}function cd(e){return e*(2-e)}function Sr(e){return((e*=2)<=1?e*e:--e*(2-e)+1)/2}function fd(e){return e*e*e}function dd(e){return--e*e*e+1}function yo(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Tn=3,hd=function e(t){t=+t;function n(r){return Math.pow(r,t)}return n.exponent=e,n}(Tn),pd=function e(t){t=+t;function n(r){return 1-Math.pow(1-r,t)}return n.exponent=e,n}(Tn),md=function e(t){t=+t;function n(r){return((r*=2)<=1?Math.pow(r,t):2-Math.pow(2-r,t))/2}return n.exponent=e,n}(Tn),_o=Math.PI,wo=_o/2;function gd(e){return+e==1?1:1-Math.cos(e*wo)}function vd(e){return Math.sin(e*wo)}function xd(e){return(1-Math.cos(_o*e))/2}function re(e){return(Math.pow(2,-10*e)-.0009765625)*1.0009775171065494}function yd(e){return re(1-+e)}function _d(e){return 1-re(e)}function wd(e){return((e*=2)<=1?re(1-e):2-re(e-1))/2}function bd(e){return 1-Math.sqrt(1-e*e)}function Sd(e){return Math.sqrt(1- --e*e)}function Cd(e){return((e*=2)<=1?1-Math.sqrt(1-e*e):Math.sqrt(1-(e-=2)*e)+1)/2}var hn=4/11,Td=6/11,$d=8/11,Ad=3/4,Ed=9/11,Id=10/11,Md=15/16,Vd=21/22,Nd=63/64,Ge=1/hn/hn;function kd(e){return 1-It(1-e)}function It(e){return(e=+e)<hn?Ge*e*e:e<$d?Ge*(e-=Td)*e+Ad:e<Id?Ge*(e-=Ed)*e+Md:Ge*(e-=Vd)*e+Nd}function Fd(e){return((e*=2)<=1?1-It(1-e):It(e-1)+1)/2}var $n=1.70158,Od=function e(t){t=+t;function n(r){return(r=+r)*r*(t*(r-1)+r)}return n.overshoot=e,n}($n),Dd=function e(t){t=+t;function n(r){return--r*r*((r+1)*t+r)+1}return n.overshoot=e,n}($n),Ld=function e(t){t=+t;function n(r){return((r*=2)<1?r*r*((t+1)*r-t):(r-=2)*r*((t+1)*r+t)+2)/2}return n.overshoot=e,n}($n),Se=2*Math.PI,An=1,En=.3,Rd=function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Se);function i(o){return t*re(- --o)*Math.sin((r-o)/n)}return i.amplitude=function(o){return e(o,n*Se)},i.period=function(o){return e(t,o)},i}(An,En),Cr=function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Se);function i(o){return 1-t*re(o=+o)*Math.sin((o+r)/n)}return i.amplitude=function(o){return e(o,n*Se)},i.period=function(o){return e(t,o)},i}(An,En),zd=function e(t,n){var r=Math.asin(1/(t=Math.max(1,t)))*(n/=Se);function i(o){return((o=o*2-1)<0?t*re(-o)*Math.sin((r-o)/n):2-t*re(o)*Math.sin((r+o)/n))/2}return i.amplitude=function(o){return e(o,n*Se)},i.period=function(o){return e(t,o)},i}(An,En),Hd={time:null,delay:0,duration:250,ease:yo};function Ud(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function jd(e){var t,n;e instanceof ne?(t=e._id,e=e._name):(t=xo(),(n=Hd).time=bn(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],s=a.length,u,l=0;l<s;++l)(u=a[l])&&Ft(u,e,t,l,a,n||Ud(u,t));return new ne(r,this._parents,e,t)}Ce.prototype.interrupt=uf;Ce.prototype.transition=jd;function Bd(e){switch(e){case C.easeLinear:return ud;case C.easeQuadIn:return ld;case C.easeQuadOut:return cd;case C.easeQuadInOut:return Sr;case C.easeCubicIn:return fd;case C.easeCubicOut:return dd;case C.easeCubicInOut:return yo;case C.easePolyIn:return hd;case C.easePolyOut:return pd;case C.easePolyInOut:return md;case C.easeSinIn:return gd;case C.easeSinOut:return vd;case C.easeSinInOut:return xd;case C.easeExpIn:return yd;case C.easeExpOut:return _d;case C.easeExpInOut:return wd;case C.easeCircleIn:return bd;case C.easeCircleOut:return Sd;case C.easeCircleInOut:return Cd;case C.easeBounceIn:return kd;case C.easeBounceOut:return It;case C.easeBounceInOut:return Fd;case C.easeBackIn:return Od;case C.easeBackOut:return Dd;case C.easeBackInOut:return Ld;case C.easeElasticIn:return Rd;case C.easeElasticOut:return Cr;case C.easeElasticInOut:return zd;case C.easeElastic:return Cr;default:return console.warn(`Warning: Invalid needle transition '${e}'. Switching to default transition 'easeQuadInOut'`),Sr}}var Tr=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Wd(e,t){return!!(e===t||Tr(e)&&Tr(t))}function qd(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Wd(e[n],t[n]))return!1;return!0}function Ot(e,t){t===void 0&&(t=qd);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}const In=Ot(Xd),Pd=Ot(Yd),Mn=Ot(Qd),Gd=Ot(Kd);function Xd(e){return Sc({min:e.minValue,max:e.maxValue,segments:e.maxSegmentLabels})}function Yd(e){const t=In(e);let n=Cc(t,{min:e.minValue,max:e.maxValue,segments:e.maxSegmentLabels});return e.customSegmentStops.length>0&&e.maxSegmentLabels!==0&&(n=e.customSegmentStops),n}function Qd(e){const t=Hs(e.majorTicks).map(r=>1/e.majorTicks);return _c({tickData:t,customSegmentStops:e.customSegmentStops,min:e.minValue,max:e.maxValue})}function Kd(e){const t=Mn(e),n=e.maxAngle-e.minAngle,r=e.width/2;return Bc().innerRadius(r-e.ringWidth-e.ringInset).outerRadius(r-e.ringInset).startAngle((o,a)=>{const s=St(t,a);return fr(e.minAngle+s*n)}).endAngle((o,a)=>{const s=St(t,a+1);return fr(e.minAngle+s*n)})}function Zd({duration:e,ease:t}){return vo().duration(e).ease(t)}const Jd=({d3_refs:e,newValue:t,config:n})=>{const i=In(n)(t),o=n.maxAngle-n.minAngle,a=n.minAngle+i*o;e.pointer.transition(Zd({duration:n.needleTransitionDuration,ease:Bd(n.needleTransition)})).attr("transform",`rotate(${a})`),e.current_value_text.text(Tc(t,n))},eh=({container:e,config:t})=>{const n=Ac(t),r=$c(n,t.paddingHorizontal,t.paddingVertical),i=th({container:e,config:t});return nh({config:t,svg:i,centerTx:r}),rh({config:t,svg:i,centerTx:r,r:n}),{current_value_text:oh({config:t,svg:i}),pointer:ah({config:t,svg:i,r:n,centerTx:r})}};function th({container:e,config:t}){const n=t.width+2*t.paddingHorizontal,r=t.height+2*t.paddingVertical;return Oi(e).append("svg:svg").attr("class","speedometer").attr("width",`${n}${t.dimensionUnit}`).attr("height",`${r}${t.dimensionUnit}`).attr("role","img").attr("focusable","false").attr("aria-label",t.svgAriaLabel).style("width",`${n}${t.dimensionUnit}`).style("height",`${r}${t.dimensionUnit}`)}function nh({config:e,svg:t,centerTx:n}){const r=Mn(e),i=Gd(e);t.append("g").attr("class","arc").attr("transform",n).selectAll("path").data(r).enter().append("path").attr("class","speedo-segment").attr("fill",(a,s)=>!_n(e.segmentColors)&&e.segmentColors[s]?e.segmentColors[s]:e.arcColorFn(a*s)).attr("d",i)}function rh({config:e,svg:t,centerTx:n,r}){const i=Pd(e),o=Mn(e),a=In(e),s=e.maxAngle-e.minAngle,{customSegmentLabels:u}=e,l=yn(u)&&!_n(u),c=l&&u.length===o.length;if(l&&!c)throw new Error(`Custom Segment Labels should be an array with length of ${o.length}`);if(l&&c){ih({config:e,svg:t,centerTx:n,r,ticks:i,tickData:o,scale:a,range:s});return}t.append("g").attr("class","label").attr("transform",n).selectAll("text").data(i).enter().append("text").attr("transform",(f,h)=>{const m=e.customSegmentStops.length===0?a(f):St(o,h);return`rotate(${e.minAngle+m*s}) translate(0, ${e.labelInset-r})`}).text(f=>e.segmentValueFormatter(e.labelFormat(f))).attr("class","segment-value").style("text-anchor","middle").style("font-size",e.labelFontSize).style("font-weight","bold").style("fill",e.textColor)}function ih({config:e,svg:t,centerTx:n,r,ticks:i,tickData:o,scale:a,range:s}){const{customSegmentStops:u,customSegmentLabels:l}=e;function c(_,x){const b=u.length===0?a(_):St(o,x);return e.minAngle+b*s}const d=l.map((_,x)=>{const b=x,w=x+1,T=i[b],S=c(T,b),N=i[w];return(c(N,w)+S)/2}),f=r-e.ringWidth-e.ringInset,h=r-e.ringInset,m=h-(h-f)/2;t.append("g").attr("class","label").attr("transform",n).selectAll("text").data(l).enter().append("text").attr("transform",(_,x)=>{const b=d[x],w=`rotate(${b}) translate(0, ${e.labelInset-r})`,T=`rotate(${b}) translate(0, ${e.labelInset/2-m})`;return _.position==="OUTSIDE"?w:T}).text(_=>_.text||"").attr("class","segment-value").style("text-anchor","middle").style("font-size",_=>_.fontSize||e.labelFontSize).style("font-weight","bold").style("fill",_=>_.color||e.textColor)}function oh({config:e,svg:t}){const n=(e.width+2*e.paddingHorizontal)/2,r=(e.width+4*e.paddingVertical)/2;return t.append("g").attr("transform",`translate(${n}, ${r})`).append("text").attr("class","current-value").attr("text-anchor","middle").attr("y",23).text(e.currentValue).style("font-size",e.valueTextFontSize).style("font-weight",e.valueTextFontWeight).style("fill",e.textColor)}function ah({config:e,svg:t,r:n,centerTx:r}){const i=wc({heightRatio:e.needleHeightRatio,radius:n}),o=[[e.pointerWidth/2,0],[0,-i],[-(e.pointerWidth/2),0],[0,e.pointerTailLength],[e.pointerWidth/2,0]],a=Xc().curve(Yc);return t.append("g").data([o]).attr("class","pointer").attr("transform",r).style("fill",e.needleColor).append("path").attr("d",a).attr("transform",`rotate(${e.minAngle})`)}var sh=oe('<div id="speedo-container"></div>');function A(e,t){ko(t,!0);const n=Ro(t,["$$slots","$$events","$$legacy"]),r=Uo(t.forceRender);let i=zo(!1),o={},a={},s={pointer:!1,current_value_text:!1},u;function l(){a=Object.assign({},dr,n),o=Ic({PROPS:a,parentWidth:u.parentNode.clientWidth,parentHeight:u.parentNode.clientHeight}),Oi(u).select("svg").remove(),s=eh({container:u,config:o})}function c(){Jd({d3_refs:s,newValue:a.value||0,config:o})}Fo(()=>{l()}),Oo(()=>{te(i)&&r&&l(),te(i)||Yt(i,!0),a=Object.assign({},dr,n),o=Mc(o,{labelFormat:Mt(a.valueFormat||""),segmentValueFormatter:a.segmentValueFormatter||oo,currentValueText:a.currentValueText||"${value}"}),c()});var d=sh();Do(d,f=>u=f,()=>u),ie(e,d),Lo()}A.__docgen={version:3,name:"Speedometer.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var uh=oe("<div><!></div> <div><!></div>",1);function bo(e,t){let n=pe(t,"textColor",0,"#d8dee9");var r=uh(),i=_i(r),o=R(i);A(o,{width:500,needleHeightRatio:.7,value:777,currentValueText:"Happiness Level",customSegmentLabels:[{text:"Very Bad",position:"INSIDE",color:"#555"},{text:"Bad",position:"INSIDE",color:"#555"},{text:"Ok",position:"INSIDE",color:"#555",fontSize:"19px"},{text:"Good",position:"INSIDE",color:"#555"},{text:"Very Good",position:"INSIDE",color:"#555"}],ringWidth:47,needleTransitionDuration:3333,needleTransition:"easeElastic",needleColor:"#90f2ff",get textColor(){return n()},$$legacy:!0});var a=I(I(i,!0)),s=R(a);A(s,{width:500,needleHeightRatio:.7,value:777,customSegmentStops:[0,250,750,1e3],segmentColors:["#9399ff","#14ffec","#00bbf0"],currentValueText:"How are you?",customSegmentLabels:[{text:"Good",position:"OUTSIDE",color:"#d8dee9"},{text:"Great",position:"OUTSIDE",color:"#d8dee9"},{text:"Awesome!",position:"OUTSIDE",color:"#d8dee9"}],ringWidth:47,needleTransitionDuration:3333,needleTransition:"easeElastic",needleColor:"#a7ff83",get textColor(){return n()},$$legacy:!0}),ie(e,r)}bo.__docgen={version:3,name:"custom-segment-labels.svelte",data:[{visibility:"public",description:null,keywords:[],name:"textColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#d8dee9"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var lh=oe("<div><div><!></div> <div><!></div></div>");function So(e,t){let n=pe(t,"textColor",0,"#d8dee9");var r=lh(),i=R(r),o=R(i);A(o,{segments:3,value:470,segmentColors:["#FF9933","#ECEFF4","#138808"],needleColor:"#000080",get textColor(){return n()},$$legacy:!0});var a=I(I(i,!0)),s=R(a);A(s,{segments:3,value:470,segmentColors:["#0055A4","#ECEFF4","#EF4135"],needleColor:"lightgreen",get textColor(){return n()},$$legacy:!0}),ie(e,r)}So.__docgen={version:3,name:"custom-segment-colors.svelte",data:[{visibility:"public",description:null,keywords:[],name:"textColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#d8dee9"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var ch=oe("<div><!> <!> <!></div>");function Co(e,t){let n=pe(t,"textColor",0,"#d8dee9");var r=ch(),i=R(r);A(i,{needleHeightRatio:.7,maxSegmentLabels:5,segments:3,customSegmentStops:[0,500,750,900,1e3],segmentColors:["firebrick","tomato","gold","limegreen"],value:333,get textColor(){return n()},$$legacy:!0});var o=I(I(i,!0));A(o,{forceRender:!0,maxSegmentLabels:1,customSegmentStops:[500,777,1e3],segmentColors:["#5959ac","#AAA"],needleColor:"#5959ac",currentValueText:"Current Value: ${value}",minValue:500,maxValue:1e3,value:777,get textColor(){return n()},$$legacy:!0});var a=I(I(o,!0));A(a,{forceRender:!0,maxSegmentLabels:1,segmentColors:["tomato","gold"],needleColor:"tomato",currentValueText:"Current Value: ${value}",minValue:-120,maxValue:0,value:-100,customSegmentStops:[-120,-100,0],get textColor(){return n()},$$legacy:!0}),ie(e,r)}Co.__docgen={version:3,name:"custom-segment-stops.svelte",data:[{visibility:"public",description:null,keywords:[],name:"textColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#d8dee9"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var fh=oe(`<div style=" width: 500px; height: 300px; "><!></div> <p style="color: #d8dee9">Here 'Speedometer' takes the width of the parent (500px)</p>`,1);function To(e,t){let n=pe(t,"textColor",0,"#d8dee9");var r=fh(),i=_i(r),o=R(i);A(o,{fluidWidth:!0,minValue:100,maxValue:500,value:473,needleColor:"steelblue",get textColor(){return n()},$$legacy:!0}),I(I(i,!0)),ie(e,r)}To.__docgen={version:3,name:"fluid-width-view.svelte",data:[{visibility:"public",description:null,keywords:[],name:"textColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#d8dee9"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var dh=oe(`<div style="color: #d8dee9"><h4>Click the below button to force rerendering the whole component on props
    change. By default, on props change, only the speedometer value/needle value
    will be updated and animated for smooth visualization. Below button will
    toggle between two sets of totally different appearances, when forceRender
    option is given true.</h4> <button class="svelte-aparmy"><strong>Force Re render component on props change</strong></button> <!></div>`);function $o(e,t){let n=pe(t,"textColor",0,"#d8dee9"),r=Fn(!1),i=[{value:111,startColor:"blue",segments:5,width:300,height:300},{value:222,startColor:"orange",segments:10,width:400,height:400}],o=Fn(i[0]);var a=dh(),s=R(a),u=I(I(s,!0));R(u);var l=I(I(u,!0));A(l,{get value(){return te(o).value},get startColor(){return te(o).startColor},forceRender:!0,get segments(){return te(o).segments},get width(){return te(o).width},get height(){return te(o).height},get textColor(){return n()},$$legacy:!0}),Ho("click",u,()=>{Yt(r,!te(r));let c=te(r)?i[1]:i[0];Yt(o,c)},!1),ie(e,a)}$o.__docgen={version:3,name:"force-render.svelte",data:[{visibility:"public",description:null,keywords:[],name:"textColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#d8dee9"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var hh=oe("<div><!> <!></div>");function Ao(e,t){let n=pe(t,"textColor",0,"#d8dee9");var r=hh(),i=R(r);A(i,{maxValue:150,value:70.7,valueFormat:"d",customSegmentStops:[0,50,70,90,150],segmentColors:["#bf616a","#d08770","#ebcb8b","#a3be8c"],get textColor(){return n()},$$legacy:!0});var o=I(I(i,!0));A(o,{maxValue:150,value:70.7,segments:5,valueFormat:"d",get textColor(){return n()},$$legacy:!0}),ie(e,r)}Ao.__docgen={version:3,name:"configure-format-values.svelte",data:[{visibility:"public",description:null,keywords:[],name:"textColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#d8dee9"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var ph=oe("<div><div><!></div> <div><!></div></div>");function Eo(e,t){let n=pe(t,"textColor",0,"#d8dee9");var r=ph(),i=R(r),o=R(i);A(o,{maxSegmentLabels:0,segments:5555,get textColor(){return n()},$$legacy:!0});var a=I(I(i,!0)),s=R(a);A(s,{maxSegmentLabels:0,segments:4,value:333,startColor:"#2E3440",endColor:"#4C566A",needleColor:"#D8DEE9",get textColor(){return n()},$$legacy:!0}),ie(e,r)}Eo.__docgen={version:3,name:"no-segment-labels.svelte",data:[{visibility:"public",description:null,keywords:[],name:"textColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"#d8dee9"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const V="#AAA",vh={title:"Svelte Speedometer",component:A},Xe=()=>({Usage:`
    <Speedometer />
  `,Component:A,props:{textColor:V}}),Ye=()=>({Usage:`
      <Speedometer
        maxValue={500}
        value={473}
        needleColor="violet"
        startColor="tomato"
        endColor="lightgreen"
        segments={10}
      />
  `,Component:A,props:{maxValue:500,value:473,needleColor:"violet",startColor:"tomato",endColor:"lightgreen",segments:10,textColor:V}}),Qe=()=>({Usage:`
    <Speedometer
      width={500}
      needleHeightRatio={0.7}
      value={777}
      currentValueText="Happiness Level"
      customSegmentLabels={
        [
          { 
            text: 'Very Bad', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Bad', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Ok', 
            position: 'INSIDE', 
            color: '#555', 
            fontSize: '19px' 
          }, 
          { 
            text: 'Good', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Very Good', 
            position: 'INSIDE', 
            color: '#555' 
          }
        ]
      }
      ringWidth={47}
      needleTransitionDuration={3333}
      needleTransition="easeElastic"
      needleColor={'#90f2ff'}
    />
    
    <Speedometer
      width={500}
      needleHeightRatio={0.7}
      value={777}
      customSegmentStops={[0, 250, 750, 1000]}
      segmentColors={['#9399ff', '#14ffec', '#00bbf0']}
      currentValueText="How are you?"
      customSegmentLabels={
        [
          { text: "Good", position: "OUTSIDE", color: "#d8dee9" },
          { text: "Great", position: "OUTSIDE", color: "#d8dee9" },
          { text: "Awesome!", position: "OUTSIDE", color: "#d8dee9" },
        ]  
      }
      ringWidth={47}
      needleTransitionDuration={3333}
      needleTransition="easeElastic"
      needleColor={'#a7ff83'}
    />
  `,Component:bo,props:{textColor:V}}),Ke=()=>({Usage:`
    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#FF9933', '#ECEFF4', '#138808']}
      needleColor="#000080"
    />

    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#0055A4', '#ECEFF4', '#EF4135']}
      needleColor="lightgreen"
    />
  `,Component:So,props:{textColor:V}}),Ze=()=>({Usage:`
    <Speedometer
      needleHeightRatio={0.7}
      maxSegmentLabels={5}
      segments={3}
      customSegmentStops={[0, 500, 750, 900, 1000]}
      segmentColors={['firebrick', 'tomato', 'gold', 'limegreen']}
      value={333}
    />
    <Speedometer
      forceRender={true}
      maxSegmentLabels={1}
      customSegmentStops={[500, 777, 1000]}
      segmentColors={['#5959ac', '#AAA']}
      needleColor={'#5959ac'}
      currentValueText={'Current Value: \${value}'}
      minValue={500}
      maxValue={1000}
      value={777}
    />
    <Speedometer
      forceRender={true}
      maxSegmentLabels={1}
      segmentColors={['tomato', 'gold']}
      needleColor={'tomato'}
      currentValueText={'Current Value: \${value}'}
      minValue={-120}
      maxValue={0}
      value={-100}
      customSegmentStops={[-120, -100, 0]}
    />
  `,Component:Co,props:{textColor:V}}),Je=()=>({Usage:`
    <div style=" width: 500px; height: 300px; ">
      <Speedometer
        fluidWidth={true}
        minValue={100}
        maxValue={500}
        value={473}
        needleColor="steelblue"
      />
    </div>
  `,Component:To,props:{textColor:V}}),et=()=>({Usage:`
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
    />
  `,Component:A,props:{value:333,needleColor:"steelblue",needleTransitionDuration:4e3,needleTransition:"easeElastic",textColor:V}}),tt=()=>({Usage:`
  
  `,Component:$o,props:{textColor:V}}),nt=()=>({Usage:`
    <Speedometer
      maxValue={150}
      value={70.7}
      valueFormat={"d"}
      customSegmentStops={[0, 50, 70, 90, 150]}
      segmentColors={["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]}
    />
    <Speedometer
      maxValue={150}
      value={70.7}
      segments={5}
      valueFormat={"d"}
    />
  `,Component:Ao,props:{textColor:V}});function mh(e){return e<200?`${e} 😒`:e<400?`${e} 😐`:e<600?`${e} 😌`:e<800?`${e} 😊`:e<900?`${e} 😉`:`${e} 😇`}const rt=()=>({Usage:`
    <Speedometer
      value={333}
      segmentValueFormatter={segmentValueFormatter}
    />
  `,Component:A,props:{value:333,segmentValueFormatter:mh,needleTransitionDuration:4e3,needleTransition:"easeElastic",currentValueText:"Current Value: ${value}",textColor:V,paddingHorizontal:35}}),it=()=>({Usage:`
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      currentValueText="Current Value: \${value}"
    />
  `,Component:A,props:{value:333,needleTransitionDuration:4e3,needleTransition:"easeElastic",currentValueText:"Current Value: ${value}",textColor:V}}),ot=()=>({Usage:`
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      currentValueText="Current Value: #{value}"
      currentValuePlaceholderStyle={"#{value}"}
    />
  `,Component:A,props:{value:333,needleTransitionDuration:4e3,needleTransition:"easeElastic",currentValueText:"Current Value: #{value}",currentValuePlaceholderStyle:"#{value}",textColor:V}}),at=()=>({Usage:`
    <Speedometer
      value={333}
      needleHeightRatio={0.5}
      labelFontSize={"15px"}
      valueTextFontSize={"23px"}
    />
  `,Component:A,props:{value:333,needleHeightRatio:.5,labelFontSize:"15px",valueTextFontSize:"23px",textColor:V}}),st=()=>({Usage:`
    <Speedometer
      needleHeightRatio={0.7}
      maxSegmentLabels={5}
      segments={5555}
      value={333}
    />
  `,Component:A,props:{needleHeightRatio:.7,maxSegmentLabels:5,segments:5555,value:333,textColor:V}}),ut=()=>({Usage:`
    <Speedometer
      maxSegmentLabels={0}
      segments={111}
    />

    <Speedometer
      maxSegmentLabels={0}
      segments={4}
      value={333}
      startColor={"#2E3440"}
      endColor={"#4C566A"}
      needleColor="#D8DEE9"
    />
  `,Component:Eo,props:{textColor:V}}),lt=()=>({Usage:`
    <Speedometer
      value={333}
      labelFontSize={"31px"}
      valueTextFontSize={"37px"}
      valueTextFontWeight={"500"}
      paddingHorizontal={17}
      paddingVertical={17}
      currentValueText={"Value: \${value}"}
    />
  `,Component:A,props:{value:333,labelFontSize:"31px",valueTextFontSize:"37px",valueTextFontWeight:"500",paddingHorizontal:17,paddingVertical:17,currentValueText:"Value: ${value}",textColor:V}});var $r,Ar,Er;Xe.parameters={...Xe.parameters,docs:{...($r=Xe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer />
  \`,
  Component: Speedometer,
  props: {
    textColor
  }
})`,...(Er=(Ar=Xe.parameters)==null?void 0:Ar.docs)==null?void 0:Er.source}}};var Ir,Mr,Vr;Ye.parameters={...Ye.parameters,docs:{...(Ir=Ye.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => ({
  Usage: \`
      <Speedometer
        maxValue={500}
        value={473}
        needleColor="violet"
        startColor="tomato"
        endColor="lightgreen"
        segments={10}
      />
  \`,
  Component: Speedometer,
  props: {
    maxValue: 500,
    value: 473,
    needleColor: "violet",
    startColor: "tomato",
    endColor: "lightgreen",
    segments: 10,
    textColor
  }
})`,...(Vr=(Mr=Ye.parameters)==null?void 0:Mr.docs)==null?void 0:Vr.source}}};var Nr,kr,Fr;Qe.parameters={...Qe.parameters,docs:{...(Nr=Qe.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      width={500}
      needleHeightRatio={0.7}
      value={777}
      currentValueText="Happiness Level"
      customSegmentLabels={
        [
          { 
            text: 'Very Bad', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Bad', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Ok', 
            position: 'INSIDE', 
            color: '#555', 
            fontSize: '19px' 
          }, 
          { 
            text: 'Good', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Very Good', 
            position: 'INSIDE', 
            color: '#555' 
          }
        ]
      }
      ringWidth={47}
      needleTransitionDuration={3333}
      needleTransition="easeElastic"
      needleColor={'#90f2ff'}
    />
    
    <Speedometer
      width={500}
      needleHeightRatio={0.7}
      value={777}
      customSegmentStops={[0, 250, 750, 1000]}
      segmentColors={['#9399ff', '#14ffec', '#00bbf0']}
      currentValueText="How are you?"
      customSegmentLabels={
        [
          { text: "Good", position: "OUTSIDE", color: "#d8dee9" },
          { text: "Great", position: "OUTSIDE", color: "#d8dee9" },
          { text: "Awesome!", position: "OUTSIDE", color: "#d8dee9" },
        ]  
      }
      ringWidth={47}
      needleTransitionDuration={3333}
      needleTransition="easeElastic"
      needleColor={'#a7ff83'}
    />
  \`,
  Component: CustomSegmentLabelsView,
  props: {
    textColor
  }
})`,...(Fr=(kr=Qe.parameters)==null?void 0:kr.docs)==null?void 0:Fr.source}}};var Or,Dr,Lr;Ke.parameters={...Ke.parameters,docs:{...(Or=Ke.parameters)==null?void 0:Or.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#FF9933', '#ECEFF4', '#138808']}
      needleColor="#000080"
    />

    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#0055A4', '#ECEFF4', '#EF4135']}
      needleColor="lightgreen"
    />
  \`,
  Component: CustomSegmentColorsView,
  props: {
    textColor
  }
})`,...(Lr=(Dr=Ke.parameters)==null?void 0:Dr.docs)==null?void 0:Lr.source}}};var Rr,zr,Hr;Ze.parameters={...Ze.parameters,docs:{...(Rr=Ze.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      needleHeightRatio={0.7}
      maxSegmentLabels={5}
      segments={3}
      customSegmentStops={[0, 500, 750, 900, 1000]}
      segmentColors={['firebrick', 'tomato', 'gold', 'limegreen']}
      value={333}
    />
    <Speedometer
      forceRender={true}
      maxSegmentLabels={1}
      customSegmentStops={[500, 777, 1000]}
      segmentColors={['#5959ac', '#AAA']}
      needleColor={'#5959ac'}
      currentValueText={'Current Value: \\\${value}'}
      minValue={500}
      maxValue={1000}
      value={777}
    />
    <Speedometer
      forceRender={true}
      maxSegmentLabels={1}
      segmentColors={['tomato', 'gold']}
      needleColor={'tomato'}
      currentValueText={'Current Value: \\\${value}'}
      minValue={-120}
      maxValue={0}
      value={-100}
      customSegmentStops={[-120, -100, 0]}
    />
  \`,
  Component: CustomSegmentStopsView,
  props: {
    textColor
  }
})`,...(Hr=(zr=Ze.parameters)==null?void 0:zr.docs)==null?void 0:Hr.source}}};var Ur,jr,Br;Je.parameters={...Je.parameters,docs:{...(Ur=Je.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => ({
  Usage: \`
    <div style=" width: 500px; height: 300px; ">
      <Speedometer
        fluidWidth={true}
        minValue={100}
        maxValue={500}
        value={473}
        needleColor="steelblue"
      />
    </div>
  \`,
  Component: FluidWidthView,
  props: {
    textColor
  }
})`,...(Br=(jr=Je.parameters)==null?void 0:jr.docs)==null?void 0:Br.source}}};var Wr,qr,Pr;et.parameters={...et.parameters,docs:{...(Wr=et.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
    />
  \`,
  Component: Speedometer,
  props: {
    value: 333,
    needleColor: "steelblue",
    needleTransitionDuration: 4000,
    needleTransition: "easeElastic",
    textColor
  }
})`,...(Pr=(qr=et.parameters)==null?void 0:qr.docs)==null?void 0:Pr.source}}};var Gr,Xr,Yr;tt.parameters={...tt.parameters,docs:{...(Gr=tt.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => ({
  Usage: \`
  
  \`,
  Component: ForceRenderView,
  props: {
    textColor
  }
})`,...(Yr=(Xr=tt.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var Qr,Kr,Zr;nt.parameters={...nt.parameters,docs:{...(Qr=nt.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      maxValue={150}
      value={70.7}
      valueFormat={"d"}
      customSegmentStops={[0, 50, 70, 90, 150]}
      segmentColors={["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]}
    />
    <Speedometer
      maxValue={150}
      value={70.7}
      segments={5}
      valueFormat={"d"}
    />
  \`,
  Component: ConfigureFormatValuesView,
  props: {
    textColor
  }
})`,...(Zr=(Kr=nt.parameters)==null?void 0:Kr.docs)==null?void 0:Zr.source}}};var Jr,ei,ti;rt.parameters={...rt.parameters,docs:{...(Jr=rt.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      value={333}
      segmentValueFormatter={segmentValueFormatter}
    />
  \`,
  Component: Speedometer,
  props: {
    value: 333,
    segmentValueFormatter,
    needleTransitionDuration: 4000,
    needleTransition: "easeElastic",
    currentValueText: "Current Value: \${value}",
    textColor,
    paddingHorizontal: 35
  }
})`,...(ti=(ei=rt.parameters)==null?void 0:ei.docs)==null?void 0:ti.source}}};var ni,ri,ii;it.parameters={...it.parameters,docs:{...(ni=it.parameters)==null?void 0:ni.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      currentValueText="Current Value: \\\${value}"
    />
  \`,
  Component: Speedometer,
  props: {
    value: 333,
    needleTransitionDuration: 4000,
    needleTransition: "easeElastic",
    currentValueText: "Current Value: \${value}",
    textColor
  }
})`,...(ii=(ri=it.parameters)==null?void 0:ri.docs)==null?void 0:ii.source}}};var oi,ai,si;ot.parameters={...ot.parameters,docs:{...(oi=ot.parameters)==null?void 0:oi.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      currentValueText="Current Value: #{value}"
      currentValuePlaceholderStyle={"#{value}"}
    />
  \`,
  Component: Speedometer,
  props: {
    value: 333,
    needleTransitionDuration: 4000,
    needleTransition: "easeElastic",
    currentValueText: "Current Value: #{value}",
    currentValuePlaceholderStyle: "#{value}",
    textColor
  }
})`,...(si=(ai=ot.parameters)==null?void 0:ai.docs)==null?void 0:si.source}}};var ui,li,ci;at.parameters={...at.parameters,docs:{...(ui=at.parameters)==null?void 0:ui.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      value={333}
      needleHeightRatio={0.5}
      labelFontSize={"15px"}
      valueTextFontSize={"23px"}
    />
  \`,
  Component: Speedometer,
  props: {
    value: 333,
    needleHeightRatio: 0.5,
    labelFontSize: "15px",
    valueTextFontSize: "23px",
    textColor
  }
})`,...(ci=(li=at.parameters)==null?void 0:li.docs)==null?void 0:ci.source}}};var fi,di,hi;st.parameters={...st.parameters,docs:{...(fi=st.parameters)==null?void 0:fi.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      needleHeightRatio={0.7}
      maxSegmentLabels={5}
      segments={5555}
      value={333}
    />
  \`,
  Component: Speedometer,
  props: {
    needleHeightRatio: 0.7,
    maxSegmentLabels: 5,
    segments: 5555,
    value: 333,
    textColor
  }
})`,...(hi=(di=st.parameters)==null?void 0:di.docs)==null?void 0:hi.source}}};var pi,mi,gi;ut.parameters={...ut.parameters,docs:{...(pi=ut.parameters)==null?void 0:pi.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      maxSegmentLabels={0}
      segments={111}
    />

    <Speedometer
      maxSegmentLabels={0}
      segments={4}
      value={333}
      startColor={"#2E3440"}
      endColor={"#4C566A"}
      needleColor="#D8DEE9"
    />
  \`,
  Component: NoSegmentLabelsView,
  props: {
    textColor
  }
})`,...(gi=(mi=ut.parameters)==null?void 0:mi.docs)==null?void 0:gi.source}}};var vi,xi,yi;lt.parameters={...lt.parameters,docs:{...(vi=lt.parameters)==null?void 0:vi.docs,source:{originalSource:`() => ({
  Usage: \`
    <Speedometer
      value={333}
      labelFontSize={"31px"}
      valueTextFontSize={"37px"}
      valueTextFontWeight={"500"}
      paddingHorizontal={17}
      paddingVertical={17}
      currentValueText={"Value: \\\${value}"}
    />
  \`,
  Component: Speedometer,
  props: {
    value: 333,
    labelFontSize: "31px",
    valueTextFontSize: "37px",
    valueTextFontWeight: "500",
    paddingHorizontal: 17,
    paddingVertical: 17,
    currentValueText: "Value: \${value}",
    textColor
  }
})`,...(yi=(xi=lt.parameters)==null?void 0:xi.docs)==null?void 0:yi.source}}};const xh=["DefaultWithoutNoConfig","ConfiguringValues","CustomSegmentLabels","CustomSegmentColors","CustomSegmentStops","FluidWidth","NeedleTransitionDuration","ForceRender","ConfiguringTheFormatForValuesDisplayed","CustomSegmentValueFormatter","CustomCurrentValueText","CustomCurrentValuePlaceholderStyleForEgValue","ConfigureNeedleLengthAndFontSizes","GradientEffectWithLargeNumberOfSegmentsAndMaxSegmentLabelsConfig","NoSegmentLabels","CustomizeFontSizesAndSpacing"];export{at as ConfigureNeedleLengthAndFontSizes,nt as ConfiguringTheFormatForValuesDisplayed,Ye as ConfiguringValues,ot as CustomCurrentValuePlaceholderStyleForEgValue,it as CustomCurrentValueText,Ke as CustomSegmentColors,Qe as CustomSegmentLabels,Ze as CustomSegmentStops,rt as CustomSegmentValueFormatter,lt as CustomizeFontSizesAndSpacing,Xe as DefaultWithoutNoConfig,Je as FluidWidth,tt as ForceRender,st as GradientEffectWithLargeNumberOfSegmentsAndMaxSegmentLabelsConfig,et as NeedleTransitionDuration,ut as NoSegmentLabels,xh as __namedExportsOrder,vh as default};
