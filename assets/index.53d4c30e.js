(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function c5(t,e){const n=Object.create(null),c=t.split(",");for(let s=0;s<c.length;s++)n[c[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const CS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",MS=c5(CS);function Ih(t){return!!t||t===""}function s5(t){if(u2(t)){const e={};for(let n=0;n<t.length;n++){const c=t[n],s=H1(c)?LS(c):s5(c);if(s)for(const r in s)e[r]=s[r]}return e}else{if(H1(t))return t;if(h1(t))return t}}const bS=/;(?![^(]*\))/g,wS=/:(.+)/;function LS(t){const e={};return t.split(bS).forEach(n=>{if(n){const c=n.split(wS);c.length>1&&(e[c[0].trim()]=c[1].trim())}}),e}function jc(t){let e="";if(H1(t))e=t;else if(u2(t))for(let n=0;n<t.length;n++){const c=jc(t[n]);c&&(e+=c+" ")}else if(h1(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function SS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let c=0;n&&c<t.length;c++)n=it(t[c],e[c]);return n}function it(t,e){if(t===e)return!0;let n=kl(t),c=kl(e);if(n||c)return n&&c?t.getTime()===e.getTime():!1;if(n=tc(t),c=tc(e),n||c)return t===e;if(n=u2(t),c=u2(e),n||c)return n&&c?SS(t,e):!1;if(n=h1(t),c=h1(e),n||c){if(!n||!c)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in t){const i=t.hasOwnProperty(a),o=e.hasOwnProperty(a);if(i&&!o||!i&&o||!it(t[a],e[a]))return!1}}return String(t)===String(e)}function r5(t,e){return t.findIndex(n=>it(n,e))}const T2=t=>H1(t)?t:t==null?"":u2(t)||h1(t)&&(t.toString===Eh||!z2(t.toString))?JSON.stringify(t,Ah,2):String(t),Ah=(t,e)=>e&&e.__v_isRef?Ah(t,e.value):f6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[c,s])=>(n[`${c} =>`]=s,n),{})}:F6(e)?{[`Set(${e.size})`]:[...e.values()]}:h1(e)&&!u2(e)&&!Ph(e)?String(e):e,W2={},u6=[],D4=()=>{},xS=()=>!1,_S=/^on[^a-z]/,Sr=t=>_S.test(t),a5=t=>t.startsWith("onUpdate:"),I1=Object.assign,i5=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},NS=Object.prototype.hasOwnProperty,_2=(t,e)=>NS.call(t,e),u2=Array.isArray,f6=t=>Gc(t)==="[object Map]",F6=t=>Gc(t)==="[object Set]",kl=t=>Gc(t)==="[object Date]",z2=t=>typeof t=="function",H1=t=>typeof t=="string",tc=t=>typeof t=="symbol",h1=t=>t!==null&&typeof t=="object",Th=t=>h1(t)&&z2(t.then)&&z2(t.catch),Eh=Object.prototype.toString,Gc=t=>Eh.call(t),kS=t=>Gc(t).slice(8,-1),Ph=t=>Gc(t)==="[object Object]",o5=t=>H1(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,d0=c5(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},IS=/-(\w)/g,S4=xr(t=>t.replace(IS,(e,n)=>n?n.toUpperCase():"")),AS=/\B([A-Z])/g,B6=xr(t=>t.replace(AS,"-$1").toLowerCase()),Ce=xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),m0=xr(t=>t?`on${Ce(t)}`:""),nc=(t,e)=>!Object.is(t,e),v0=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},I0=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Il;const TS=()=>Il||(Il=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let C4;class Dh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&C4&&(this.parent=C4,this.index=(C4.scopes||(C4.scopes=[])).push(this)-1)}run(e){if(this.active){const n=C4;try{return C4=this,e()}finally{C4=n}}}on(){C4=this}off(){C4=this.parent}stop(e){if(this.active){let n,c;for(n=0,c=this.effects.length;n<c;n++)this.effects[n].stop();for(n=0,c=this.cleanups.length;n<c;n++)this.cleanups[n]();if(this.scopes)for(n=0,c=this.scopes.length;n<c;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Wc(t){return new Dh(t)}function ES(t,e=C4){e&&e.active&&e.effects.push(t)}function Lt(t){C4&&C4.cleanups.push(t)}const l5=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rh=t=>(t.w&ae)>0,Oh=t=>(t.n&ae)>0,PS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ae},DS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let c=0;c<e.length;c++){const s=e[c];Rh(s)&&!Oh(s)?s.delete(t):e[n++]=s,s.w&=~ae,s.n&=~ae}e.length=n}},I8=new WeakMap;let Cn=0,ae=1;const A8=30;let I4;const ct=Symbol(""),T8=Symbol("");class u5{constructor(e,n=null,c){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ES(this,c)}run(){if(!this.active)return this.fn();let e=I4,n=ce;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=I4,I4=this,ce=!0,ae=1<<++Cn,Cn<=A8?PS(this):Al(this),this.fn()}finally{Cn<=A8&&DS(this),ae=1<<--Cn,I4=this.parent,ce=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){I4===this?this.deferStop=!0:this.active&&(Al(this),this.onStop&&this.onStop(),this.active=!1)}}function Al(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ce=!0;const Fh=[];function St(){Fh.push(ce),ce=!1}function xt(){const t=Fh.pop();ce=t===void 0?!0:t}function v4(t,e,n){if(ce&&I4){let c=I8.get(t);c||I8.set(t,c=new Map);let s=c.get(n);s||c.set(n,s=l5()),Bh(s)}}function Bh(t,e){let n=!1;Cn<=A8?Oh(t)||(t.n|=ae,n=!Rh(t)):n=!t.has(I4),n&&(t.add(I4),I4.deps.push(t))}function z3(t,e,n,c,s,r){const a=I8.get(t);if(!a)return;let i=[];if(e==="clear")i=[...a.values()];else if(n==="length"&&u2(t))a.forEach((o,l)=>{(l==="length"||l>=c)&&i.push(o)});else switch(n!==void 0&&i.push(a.get(n)),e){case"add":u2(t)?o5(n)&&i.push(a.get("length")):(i.push(a.get(ct)),f6(t)&&i.push(a.get(T8)));break;case"delete":u2(t)||(i.push(a.get(ct)),f6(t)&&i.push(a.get(T8)));break;case"set":f6(t)&&i.push(a.get(ct));break}if(i.length===1)i[0]&&E8(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);E8(l5(o))}}function E8(t,e){const n=u2(t)?t:[...t];for(const c of n)c.computed&&Tl(c);for(const c of n)c.computed||Tl(c)}function Tl(t,e){(t!==I4||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const RS=c5("__proto__,__v_isRef,__isVue"),$h=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tc)),OS=f5(),FS=f5(!1,!0),BS=f5(!0),El=$S();function $S(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const c=L2(this);for(let r=0,a=this.length;r<a;r++)v4(c,"get",r+"");const s=c[e](...n);return s===-1||s===!1?c[e](...n.map(L2)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){St();const c=L2(this)[e].apply(this,n);return xt(),c}}),t}function f5(t=!1,e=!1){return function(c,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?sx:Wh:e?Gh:jh).get(c))return c;const a=u2(c);if(!t&&a&&_2(El,s))return Reflect.get(El,s,r);const i=Reflect.get(c,s,r);return(tc(s)?$h.has(s):RS(s))||(t||v4(c,"get",s),e)?i:a1(i)?a&&o5(s)?i:i.value:h1(i)?t?Kc(i):j1(i):i}}const US=Uh(),qS=Uh(!0);function Uh(t=!1){return function(n,c,s,r){let a=n[c];if(sc(a)&&a1(a)&&!a1(s))return!1;if(!t&&!sc(s)&&(P8(s)||(s=L2(s),a=L2(a)),!u2(n)&&a1(a)&&!a1(s)))return a.value=s,!0;const i=u2(n)&&o5(c)?Number(c)<n.length:_2(n,c),o=Reflect.set(n,c,s,r);return n===L2(r)&&(i?nc(s,a)&&z3(n,"set",c,s):z3(n,"add",c,s)),o}}function jS(t,e){const n=_2(t,e);t[e];const c=Reflect.deleteProperty(t,e);return c&&n&&z3(t,"delete",e,void 0),c}function GS(t,e){const n=Reflect.has(t,e);return(!tc(e)||!$h.has(e))&&v4(t,"has",e),n}function WS(t){return v4(t,"iterate",u2(t)?"length":ct),Reflect.ownKeys(t)}const qh={get:OS,set:US,deleteProperty:jS,has:GS,ownKeys:WS},KS={get:BS,set(t,e){return!0},deleteProperty(t,e){return!0}},QS=I1({},qh,{get:FS,set:qS}),h5=t=>t,_r=t=>Reflect.getPrototypeOf(t);function Ps(t,e,n=!1,c=!1){t=t.__v_raw;const s=L2(t),r=L2(e);n||(e!==r&&v4(s,"get",e),v4(s,"get",r));const{has:a}=_r(s),i=c?h5:n?v5:rc;if(a.call(s,e))return i(t.get(e));if(a.call(s,r))return i(t.get(r));t!==s&&t.get(e)}function Ds(t,e=!1){const n=this.__v_raw,c=L2(n),s=L2(t);return e||(t!==s&&v4(c,"has",t),v4(c,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Rs(t,e=!1){return t=t.__v_raw,!e&&v4(L2(t),"iterate",ct),Reflect.get(t,"size",t)}function Pl(t){t=L2(t);const e=L2(this);return _r(e).has.call(e,t)||(e.add(t),z3(e,"add",t,t)),this}function Dl(t,e){e=L2(e);const n=L2(this),{has:c,get:s}=_r(n);let r=c.call(n,t);r||(t=L2(t),r=c.call(n,t));const a=s.call(n,t);return n.set(t,e),r?nc(e,a)&&z3(n,"set",t,e):z3(n,"add",t,e),this}function Rl(t){const e=L2(this),{has:n,get:c}=_r(e);let s=n.call(e,t);s||(t=L2(t),s=n.call(e,t)),c&&c.call(e,t);const r=e.delete(t);return s&&z3(e,"delete",t,void 0),r}function Ol(){const t=L2(this),e=t.size!==0,n=t.clear();return e&&z3(t,"clear",void 0,void 0),n}function Os(t,e){return function(c,s){const r=this,a=r.__v_raw,i=L2(a),o=e?h5:t?v5:rc;return!t&&v4(i,"iterate",ct),a.forEach((l,u)=>c.call(s,o(l),o(u),r))}}function Fs(t,e,n){return function(...c){const s=this.__v_raw,r=L2(s),a=f6(r),i=t==="entries"||t===Symbol.iterator&&a,o=t==="keys"&&a,l=s[t](...c),u=n?h5:e?v5:rc;return!e&&v4(r,"iterate",o?T8:ct),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:i?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function F3(t){return function(...e){return t==="delete"?!1:this}}function YS(){const t={get(r){return Ps(this,r)},get size(){return Rs(this)},has:Ds,add:Pl,set:Dl,delete:Rl,clear:Ol,forEach:Os(!1,!1)},e={get(r){return Ps(this,r,!1,!0)},get size(){return Rs(this)},has:Ds,add:Pl,set:Dl,delete:Rl,clear:Ol,forEach:Os(!1,!0)},n={get(r){return Ps(this,r,!0)},get size(){return Rs(this,!0)},has(r){return Ds.call(this,r,!0)},add:F3("add"),set:F3("set"),delete:F3("delete"),clear:F3("clear"),forEach:Os(!0,!1)},c={get(r){return Ps(this,r,!0,!0)},get size(){return Rs(this,!0)},has(r){return Ds.call(this,r,!0)},add:F3("add"),set:F3("set"),delete:F3("delete"),clear:F3("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Fs(r,!1,!1),n[r]=Fs(r,!0,!1),e[r]=Fs(r,!1,!0),c[r]=Fs(r,!0,!0)}),[t,n,e,c]}const[XS,JS,ZS,ex]=YS();function d5(t,e){const n=e?t?ex:ZS:t?JS:XS;return(c,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?c:Reflect.get(_2(n,s)&&s in c?n:c,s,r)}const tx={get:d5(!1,!1)},nx={get:d5(!1,!0)},cx={get:d5(!0,!1)},jh=new WeakMap,Gh=new WeakMap,Wh=new WeakMap,sx=new WeakMap;function rx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ax(t){return t.__v_skip||!Object.isExtensible(t)?0:rx(kS(t))}function j1(t){return sc(t)?t:m5(t,!1,qh,tx,jh)}function Kh(t){return m5(t,!1,QS,nx,Gh)}function Kc(t){return m5(t,!0,KS,cx,Wh)}function m5(t,e,n,c,s){if(!h1(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const a=ax(t);if(a===0)return t;const i=new Proxy(t,a===2?c:n);return s.set(t,i),i}function h6(t){return sc(t)?h6(t.__v_raw):!!(t&&t.__v_isReactive)}function sc(t){return!!(t&&t.__v_isReadonly)}function P8(t){return!!(t&&t.__v_isShallow)}function Qh(t){return h6(t)||sc(t)}function L2(t){const e=t&&t.__v_raw;return e?L2(e):t}function Yh(t){return I0(t,"__v_skip",!0),t}const rc=t=>h1(t)?j1(t):t,v5=t=>h1(t)?Kc(t):t;function Xh(t){ce&&I4&&(t=L2(t),Bh(t.dep||(t.dep=l5())))}function Jh(t,e){t=L2(t),t.dep&&E8(t.dep)}function a1(t){return!!(t&&t.__v_isRef===!0)}function q(t){return ed(t,!1)}function Zh(t){return ed(t,!0)}function ed(t,e){return a1(t)?t:new ix(t,e)}class ix{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:L2(e),this._value=n?e:rc(e)}get value(){return Xh(this),this._value}set value(e){e=this.__v_isShallow?e:L2(e),nc(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:rc(e),Jh(this))}}function F2(t){return a1(t)?t.value:t}const ox={get:(t,e,n)=>F2(Reflect.get(t,e,n)),set:(t,e,n,c)=>{const s=t[e];return a1(s)&&!a1(n)?(s.value=n,!0):Reflect.set(t,e,n,c)}};function td(t){return h6(t)?t:new Proxy(t,ox)}function nd(t){const e=u2(t)?new Array(t.length):{};for(const n in t)e[n]=O2(t,n);return e}class lx{constructor(e,n,c){this._object=e,this._key=n,this._defaultValue=c,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function O2(t,e,n){const c=t[e];return a1(c)?c:new lx(t,e,n)}class ux{constructor(e,n,c,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new u5(e,()=>{this._dirty||(this._dirty=!0,Jh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=c}get value(){const e=L2(this);return Xh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fx(t,e,n=!1){let c,s;const r=z2(t);return r?(c=t,s=D4):(c=t.get,s=t.set),new ux(c,s,r||!s,n)}const Tn=[];function hx(t,...e){St();const n=Tn.length?Tn[Tn.length-1].component:null,c=n&&n.appContext.config.warnHandler,s=dx();if(c)V3(c,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${Td(n,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${t}`,...e];s.length&&r.push(`
`,...mx(s)),console.warn(...r)}xt()}function dx(){let t=Tn[Tn.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const c=t.component&&t.component.parent;t=c&&c.vnode}return e}function mx(t){const e=[];return t.forEach((n,c)=>{e.push(...c===0?[]:[`
`],...vx(n))}),e}function vx({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",c=t.component?t.component.parent==null:!1,s=` at <${Td(t.component,t.type,c)}`,r=">"+n;return t.props?[s,...px(t.props),r]:[s+r]}function px(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(c=>{e.push(...cd(c,t[c]))}),n.length>3&&e.push(" ..."),e}function cd(t,e,n){return H1(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:a1(e)?(e=cd(t,L2(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):z2(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=L2(e),n?e:[`${t}=`,e])}function V3(t,e,n,c){let s;try{s=c?t(...c):t()}catch(r){Nr(r,e,n)}return s}function L4(t,e,n,c){if(z2(t)){const r=V3(t,e,n,c);return r&&Th(r)&&r.catch(a=>{Nr(a,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(L4(t[r],e,n,c));return s}function Nr(t,e,n,c=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,i=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,a,i)===!1)return}r=r.parent}const o=e.appContext.config.errorHandler;if(o){V3(o,null,10,[t,a,i]);return}}gx(t,n,s,c)}function gx(t,e,n,c=!0){console.error(t)}let A0=!1,D8=!1;const h4=[];let f3=0;const En=[];let Mn=null,Zt=0;const Pn=[];let W3=null,e6=0;const sd=Promise.resolve();let p5=null,R8=null;function _4(t){const e=p5||sd;return t?e.then(this?t.bind(this):t):e}function yx(t){let e=f3+1,n=h4.length;for(;e<n;){const c=e+n>>>1;ac(h4[c])<t?e=c+1:n=c}return e}function rd(t){(!h4.length||!h4.includes(t,A0&&t.allowRecurse?f3+1:f3))&&t!==R8&&(t.id==null?h4.push(t):h4.splice(yx(t.id),0,t),ad())}function ad(){!A0&&!D8&&(D8=!0,p5=sd.then(ld))}function Hx(t){const e=h4.indexOf(t);e>f3&&h4.splice(e,1)}function id(t,e,n,c){u2(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?c+1:c))&&n.push(t),ad()}function Vx(t){id(t,Mn,En,Zt)}function zx(t){id(t,W3,Pn,e6)}function kr(t,e=null){if(En.length){for(R8=e,Mn=[...new Set(En)],En.length=0,Zt=0;Zt<Mn.length;Zt++)Mn[Zt]();Mn=null,Zt=0,R8=null,kr(t,e)}}function od(t){if(kr(),Pn.length){const e=[...new Set(Pn)];if(Pn.length=0,W3){W3.push(...e);return}for(W3=e,W3.sort((n,c)=>ac(n)-ac(c)),e6=0;e6<W3.length;e6++)W3[e6]();W3=null,e6=0}}const ac=t=>t.id==null?1/0:t.id;function ld(t){D8=!1,A0=!0,kr(t),h4.sort((n,c)=>ac(n)-ac(c));const e=D4;try{for(f3=0;f3<h4.length;f3++){const n=h4[f3];n&&n.active!==!1&&V3(n,null,14)}}finally{f3=0,h4.length=0,od(),A0=!1,p5=null,(h4.length||En.length||Pn.length)&&ld(t)}}function Cx(t,e,...n){if(t.isUnmounted)return;const c=t.vnode.props||W2;let s=n;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in c){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=c[u]||W2;h&&(s=n.map(d=>d.trim())),f&&(s=n.map(cc))}let i,o=c[i=m0(e)]||c[i=m0(S4(e))];!o&&r&&(o=c[i=m0(B6(e))]),o&&L4(o,t,6,s);const l=c[i+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,L4(l,t,6,s)}}function ud(t,e,n=!1){const c=e.emitsCache,s=c.get(t);if(s!==void 0)return s;const r=t.emits;let a={},i=!1;if(!z2(t)){const o=l=>{const u=ud(l,e,!0);u&&(i=!0,I1(a,u))};!n&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!r&&!i?(c.set(t,null),null):(u2(r)?r.forEach(o=>a[o]=null):I1(a,r),c.set(t,a),a)}function Ir(t,e){return!t||!Sr(e)?!1:(e=e.slice(2).replace(/Once$/,""),_2(t,e[0].toLowerCase()+e.slice(1))||_2(t,B6(e))||_2(t,e))}let M4=null,Ar=null;function T0(t){const e=M4;return M4=t,Ar=t&&t.type.__scopeId||null,e}function Mx(t){Ar=t}function bx(){Ar=null}function P(t,e=M4,n){if(!e||t._n)return t;const c=(...s)=>{c._d&&Jl(-1);const r=T0(e),a=t(...s);return T0(r),c._d&&Jl(1),a};return c._n=!0,c._c=!0,c._d=!0,c}function Qa(t){const{type:e,vnode:n,proxy:c,withProxy:s,props:r,propsOptions:[a],slots:i,attrs:o,emit:l,render:u,renderCache:f,data:h,setupState:d,ctx:v,inheritAttrs:g}=t;let H,p;const V=T0(t);try{if(n.shapeFlag&4){const _=s||c;H=j4(u.call(_,_,f,r,d,h,v)),p=o}else{const _=e;H=j4(_.length>1?_(r,{attrs:o,slots:i,emit:l}):_(r,null)),p=e.props?o:wx(o)}}catch(_){Rn.length=0,Nr(_,t,1),H=m(R4)}let z=H;if(p&&g!==!1){const _=Object.keys(p),{shapeFlag:b}=z;_.length&&b&7&&(a&&_.some(a5)&&(p=Lx(p,a)),z=C3(z,p))}return n.dirs&&(z=C3(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),H=z,T0(V),H}const wx=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sr(n))&&((e||(e={}))[n]=t[n]);return e},Lx=(t,e)=>{const n={};for(const c in t)(!a5(c)||!(c.slice(9)in e))&&(n[c]=t[c]);return n};function Sx(t,e,n){const{props:c,children:s,component:r}=t,{props:a,children:i,patchFlag:o}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return c?Fl(c,a,l):!!a;if(o&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==c[h]&&!Ir(l,h))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:c===a?!1:c?a?Fl(c,a,l):!0:!!a;return!1}function Fl(t,e,n){const c=Object.keys(e);if(c.length!==Object.keys(t).length)return!0;for(let s=0;s<c.length;s++){const r=c[s];if(e[r]!==t[r]&&!Ir(n,r))return!0}return!1}function xx({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _x=t=>t.__isSuspense;function Nx(t,e){e&&e.pendingBranch?u2(t)?e.effects.push(...t):e.effects.push(t):zx(t)}function F1(t,e){if(_1){let n=_1.provides;const c=_1.parent&&_1.parent.provides;c===n&&(n=_1.provides=Object.create(c)),n[t]=e}}function B2(t,e,n=!1){const c=_1||M4;if(c){const s=c.parent==null?c.vnode.appContext&&c.vnode.appContext.provides:c.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z2(e)?e.call(c.proxy):e}}function Me(t,e){return g5(t,null,e)}const Bl={};function R2(t,e,n){return g5(t,e,n)}function g5(t,e,{immediate:n,deep:c,flush:s,onTrack:r,onTrigger:a}=W2){const i=_1;let o,l=!1,u=!1;if(a1(t)?(o=()=>t.value,l=P8(t)):h6(t)?(o=()=>t,c=!0):u2(t)?(u=!0,l=t.some(p=>h6(p)||P8(p)),o=()=>t.map(p=>{if(a1(p))return p.value;if(h6(p))return Ke(p);if(z2(p))return V3(p,i,2)})):z2(t)?e?o=()=>V3(t,i,2):o=()=>{if(!(i&&i.isUnmounted))return f&&f(),L4(t,i,3,[h])}:o=D4,e&&c){const p=o;o=()=>Ke(p())}let f,h=p=>{f=H.onStop=()=>{V3(p,i,4)}};if(uc)return h=D4,e?n&&L4(e,i,3,[o(),u?[]:void 0,h]):o(),D4;let d=u?[]:Bl;const v=()=>{if(!!H.active)if(e){const p=H.run();(c||l||(u?p.some((V,z)=>nc(V,d[z])):nc(p,d)))&&(f&&f(),L4(e,i,3,[p,d===Bl?void 0:d,h]),d=p)}else H.run()};v.allowRecurse=!!e;let g;s==="sync"?g=v:s==="post"?g=()=>r4(v,i&&i.suspense):g=()=>Vx(v);const H=new u5(o,g);return e?n?v():d=H.run():s==="post"?r4(H.run.bind(H),i&&i.suspense):H.run(),()=>{H.stop(),i&&i.scope&&i5(i.scope.effects,H)}}function kx(t,e,n){const c=this.proxy,s=H1(t)?t.includes(".")?fd(c,t):()=>c[t]:t.bind(c,c);let r;z2(e)?r=e:(r=e.handler,n=e);const a=_1;z6(this);const i=g5(s,r.bind(c),n);return a?z6(a):st(),i}function fd(t,e){const n=e.split(".");return()=>{let c=t;for(let s=0;s<n.length&&c;s++)c=c[n[s]];return c}}function Ke(t,e){if(!h1(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),a1(t))Ke(t.value,e);else if(u2(t))for(let n=0;n<t.length;n++)Ke(t[n],e);else if(F6(t)||f6(t))t.forEach(n=>{Ke(n,e)});else if(Ph(t))for(const n in t)Ke(t[n],e);return t}function hd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _t(()=>{t.isMounted=!0}),B4(()=>{t.isUnmounting=!0}),t}const z4=[Function,Array],Ix={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:z4,onEnter:z4,onAfterEnter:z4,onEnterCancelled:z4,onBeforeLeave:z4,onLeave:z4,onAfterLeave:z4,onLeaveCancelled:z4,onBeforeAppear:z4,onAppear:z4,onAfterAppear:z4,onAppearCancelled:z4},setup(t,{slots:e}){const n=Rr(),c=hd();let s;return()=>{const r=e.default&&y5(e.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){for(const g of r)if(g.type!==R4){a=g;break}}const i=L2(t),{mode:o}=i;if(c.isLeaving)return Ya(a);const l=$l(a);if(!l)return Ya(a);const u=ic(l,i,c,n);oc(l,u);const f=n.subTree,h=f&&$l(f);let d=!1;const{getTransitionKey:v}=l.type;if(v){const g=v();s===void 0?s=g:g!==s&&(s=g,d=!0)}if(h&&h.type!==R4&&(!Be(l,h)||d)){const g=ic(h,i,c,n);if(oc(h,g),o==="out-in")return c.isLeaving=!0,g.afterLeave=()=>{c.isLeaving=!1,n.update()},Ya(a);o==="in-out"&&l.type!==R4&&(g.delayLeave=(H,p,V)=>{const z=md(c,h);z[String(h.key)]=h,H._leaveCb=()=>{p(),H._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=V})}return a}}},dd=Ix;function md(t,e){const{leavingVNodes:n}=t;let c=n.get(e.type);return c||(c=Object.create(null),n.set(e.type,c)),c}function ic(t,e,n,c){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:o,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:v,onBeforeAppear:g,onAppear:H,onAfterAppear:p,onAppearCancelled:V}=e,z=String(t.key),_=md(n,t),b=(I,A)=>{I&&L4(I,c,9,A)},x=(I,A)=>{const O=A[1];b(I,A),u2(I)?I.every(W=>W.length<=1)&&O():I.length<=1&&O()},L={mode:r,persisted:a,beforeEnter(I){let A=i;if(!n.isMounted)if(s)A=g||i;else return;I._leaveCb&&I._leaveCb(!0);const O=_[z];O&&Be(t,O)&&O.el._leaveCb&&O.el._leaveCb(),b(A,[I])},enter(I){let A=o,O=l,W=u;if(!n.isMounted)if(s)A=H||o,O=p||l,W=V||u;else return;let T=!1;const $=I._enterCb=f2=>{T||(T=!0,f2?b(W,[I]):b(O,[I]),L.delayedLeave&&L.delayedLeave(),I._enterCb=void 0)};A?x(A,[I,$]):$()},leave(I,A){const O=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return A();b(f,[I]);let W=!1;const T=I._leaveCb=$=>{W||(W=!0,A(),$?b(v,[I]):b(d,[I]),I._leaveCb=void 0,_[O]===t&&delete _[O])};_[O]=t,h?x(h,[I,T]):T()},clone(I){return ic(I,e,n,c)}};return L}function Ya(t){if(Tr(t))return t=C3(t),t.children=null,t}function $l(t){return Tr(t)?t.children?t.children[0]:void 0:t}function oc(t,e){t.shapeFlag&6&&t.component?oc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function y5(t,e=!1,n){let c=[],s=0;for(let r=0;r<t.length;r++){let a=t[r];const i=n==null?a.key:String(n)+String(a.key!=null?a.key:r);a.type===c1?(a.patchFlag&128&&s++,c=c.concat(y5(a.children,e,i))):(e||a.type!==R4)&&c.push(i!=null?C3(a,{key:i}):a)}if(s>1)for(let r=0;r<c.length;r++)c[r].patchFlag=-2;return c}function be(t){return z2(t)?{setup:t,name:t.name}:t}const p0=t=>!!t.type.__asyncLoader,Tr=t=>t.type.__isKeepAlive;function vd(t,e){gd(t,"a",e)}function pd(t,e){gd(t,"da",e)}function gd(t,e,n=_1){const c=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Er(e,c,n),n){let s=n.parent;for(;s&&s.parent;)Tr(s.parent.vnode)&&Ax(c,e,n,s),s=s.parent}}function Ax(t,e,n,c){const s=Er(e,t,c,!0);Hd(()=>{i5(c[e],s)},n)}function Er(t,e,n=_1,c=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;St(),z6(n);const i=L4(e,n,t,a);return st(),xt(),i});return c?s.unshift(r):s.push(r),r}}const k3=t=>(e,n=_1)=>(!uc||t==="sp")&&Er(t,e,n),Pr=k3("bm"),_t=k3("m"),Tx=k3("bu"),yd=k3("u"),B4=k3("bum"),Hd=k3("um"),Ex=k3("sp"),Px=k3("rtg"),Dx=k3("rtc");function Rx(t,e=_1){Er("ec",t,e)}function e4(t,e){const n=M4;if(n===null)return t;const c=Or(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[a,i,o,l=W2]=e[r];z2(a)&&(a={mounted:a,updated:a}),a.deep&&Ke(i),s.push({dir:a,instance:c,value:i,oldValue:void 0,arg:o,modifiers:l})}return t}function Ie(t,e,n,c){const s=t.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const i=s[a];r&&(i.oldValue=r[a].value);let o=i.dir[c];o&&(St(),L4(o,n,8,[t.el,i,t,e]),xt())}}const H5="components",Ox="directives";function $6(t,e){return V5(H5,t,!0,e)||t}const Vd=Symbol();function Fx(t){return H1(t)?V5(H5,t,!1)||t:t||Vd}function U6(t){return V5(Ox,t)}function V5(t,e,n=!0,c=!1){const s=M4||_1;if(s){const r=s.type;if(t===H5){const i=Ad(r,!1);if(i&&(i===e||i===S4(e)||i===Ce(S4(e))))return r}const a=Ul(s[t]||r[t],e)||Ul(s.appContext[t],e);return!a&&c?r:a}}function Ul(t,e){return t&&(t[e]||t[S4(e)]||t[Ce(S4(e))])}function E0(t,e,n,c){let s;const r=n&&n[c];if(u2(t)||H1(t)){s=new Array(t.length);for(let a=0,i=t.length;a<i;a++)s[a]=e(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(h1(t))if(t[Symbol.iterator])s=Array.from(t,(a,i)=>e(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);s=new Array(a.length);for(let i=0,o=a.length;i<o;i++){const l=a[i];s[i]=e(t[l],l,i,r&&r[i])}}else s=[];return n&&(n[c]=s),s}function ql(t){const e={};for(const n in t)e[m0(n)]=t[n];return e}const O8=t=>t?kd(t)?Or(t)||t.proxy:O8(t.parent):null,P0=I1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>O8(t.parent),$root:t=>O8(t.root),$emit:t=>t.emit,$options:t=>Cd(t),$forceUpdate:t=>t.f||(t.f=()=>rd(t.update)),$nextTick:t=>t.n||(t.n=_4.bind(t.proxy)),$watch:t=>kx.bind(t)}),Bx={get({_:t},e){const{ctx:n,setupState:c,data:s,props:r,accessCache:a,type:i,appContext:o}=t;let l;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return c[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(c!==W2&&_2(c,e))return a[e]=1,c[e];if(s!==W2&&_2(s,e))return a[e]=2,s[e];if((l=t.propsOptions[0])&&_2(l,e))return a[e]=3,r[e];if(n!==W2&&_2(n,e))return a[e]=4,n[e];F8&&(a[e]=0)}}const u=P0[e];let f,h;if(u)return e==="$attrs"&&v4(t,"get",e),u(t);if((f=i.__cssModules)&&(f=f[e]))return f;if(n!==W2&&_2(n,e))return a[e]=4,n[e];if(h=o.config.globalProperties,_2(h,e))return h[e]},set({_:t},e,n){const{data:c,setupState:s,ctx:r}=t;return s!==W2&&_2(s,e)?(s[e]=n,!0):c!==W2&&_2(c,e)?(c[e]=n,!0):_2(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:c,appContext:s,propsOptions:r}},a){let i;return!!n[a]||t!==W2&&_2(t,a)||e!==W2&&_2(e,a)||(i=r[0])&&_2(i,a)||_2(c,a)||_2(P0,a)||_2(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_2(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let F8=!0;function $x(t){const e=Cd(t),n=t.proxy,c=t.ctx;F8=!1,e.beforeCreate&&jl(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:a,watch:i,provide:o,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:g,deactivated:H,beforeDestroy:p,beforeUnmount:V,destroyed:z,unmounted:_,render:b,renderTracked:x,renderTriggered:L,errorCaptured:I,serverPrefetch:A,expose:O,inheritAttrs:W,components:T,directives:$,filters:f2}=e;if(l&&Ux(l,c,null,t.appContext.config.unwrapInjectedRef),a)for(const c2 in a){const d2=a[c2];z2(d2)&&(c[c2]=d2.bind(n))}if(s){const c2=s.call(n,n);h1(c2)&&(t.data=j1(c2))}if(F8=!0,r)for(const c2 in r){const d2=r[c2],J2=z2(d2)?d2.bind(n,n):z2(d2.get)?d2.get.bind(n,n):D4,Y1=!z2(d2)&&z2(d2.set)?d2.set.bind(n):D4,L1=M({get:J2,set:Y1});Object.defineProperty(c,c2,{enumerable:!0,configurable:!0,get:()=>L1.value,set:U1=>L1.value=U1})}if(i)for(const c2 in i)zd(i[c2],c,n,c2);if(o){const c2=z2(o)?o.call(n):o;Reflect.ownKeys(c2).forEach(d2=>{F1(d2,c2[d2])})}u&&jl(u,t,"c");function Z(c2,d2){u2(d2)?d2.forEach(J2=>c2(J2.bind(n))):d2&&c2(d2.bind(n))}if(Z(Pr,f),Z(_t,h),Z(Tx,d),Z(yd,v),Z(vd,g),Z(pd,H),Z(Rx,I),Z(Dx,x),Z(Px,L),Z(B4,V),Z(Hd,_),Z(Ex,A),u2(O))if(O.length){const c2=t.exposed||(t.exposed={});O.forEach(d2=>{Object.defineProperty(c2,d2,{get:()=>n[d2],set:J2=>n[d2]=J2})})}else t.exposed||(t.exposed={});b&&t.render===D4&&(t.render=b),W!=null&&(t.inheritAttrs=W),T&&(t.components=T),$&&(t.directives=$)}function Ux(t,e,n=D4,c=!1){u2(t)&&(t=B8(t));for(const s in t){const r=t[s];let a;h1(r)?"default"in r?a=B2(r.from||s,r.default,!0):a=B2(r.from||s):a=B2(r),a1(a)&&c?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):e[s]=a}}function jl(t,e,n){L4(u2(t)?t.map(c=>c.bind(e.proxy)):t.bind(e.proxy),e,n)}function zd(t,e,n,c){const s=c.includes(".")?fd(n,c):()=>n[c];if(H1(t)){const r=e[t];z2(r)&&R2(s,r)}else if(z2(t))R2(s,t.bind(n));else if(h1(t))if(u2(t))t.forEach(r=>zd(r,e,n,c));else{const r=z2(t.handler)?t.handler.bind(n):e[t.handler];z2(r)&&R2(s,r,t)}}function Cd(t){const e=t.type,{mixins:n,extends:c}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(e);let o;return i?o=i:!s.length&&!n&&!c?o=e:(o={},s.length&&s.forEach(l=>D0(o,l,a,!0)),D0(o,e,a)),r.set(e,o),o}function D0(t,e,n,c=!1){const{mixins:s,extends:r}=e;r&&D0(t,r,n,!0),s&&s.forEach(a=>D0(t,a,n,!0));for(const a in e)if(!(c&&a==="expose")){const i=qx[a]||n&&n[a];t[a]=i?i(t[a],e[a]):e[a]}return t}const qx={data:Gl,props:Re,emits:Re,methods:Re,computed:Re,beforeCreate:X1,created:X1,beforeMount:X1,mounted:X1,beforeUpdate:X1,updated:X1,beforeDestroy:X1,beforeUnmount:X1,destroyed:X1,unmounted:X1,activated:X1,deactivated:X1,errorCaptured:X1,serverPrefetch:X1,components:Re,directives:Re,watch:Gx,provide:Gl,inject:jx};function Gl(t,e){return e?t?function(){return I1(z2(t)?t.call(this,this):t,z2(e)?e.call(this,this):e)}:e:t}function jx(t,e){return Re(B8(t),B8(e))}function B8(t){if(u2(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function X1(t,e){return t?[...new Set([].concat(t,e))]:e}function Re(t,e){return t?I1(I1(Object.create(null),t),e):e}function Gx(t,e){if(!t)return e;if(!e)return t;const n=I1(Object.create(null),t);for(const c in e)n[c]=X1(t[c],e[c]);return n}function Wx(t,e,n,c=!1){const s={},r={};I0(r,Dr,1),t.propsDefaults=Object.create(null),Md(t,e,s,r);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=c?s:Kh(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Kx(t,e,n,c){const{props:s,attrs:r,vnode:{patchFlag:a}}=t,i=L2(s),[o]=t.propsOptions;let l=!1;if((c||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ir(t.emitsOptions,h))continue;const d=e[h];if(o)if(_2(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const v=S4(h);s[v]=$8(o,i,v,d,t,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{Md(t,e,s,r)&&(l=!0);let u;for(const f in i)(!e||!_2(e,f)&&((u=B6(f))===f||!_2(e,u)))&&(o?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=$8(o,i,f,void 0,t,!0)):delete s[f]);if(r!==i)for(const f in r)(!e||!_2(e,f)&&!0)&&(delete r[f],l=!0)}l&&z3(t,"set","$attrs")}function Md(t,e,n,c){const[s,r]=t.propsOptions;let a=!1,i;if(e)for(let o in e){if(d0(o))continue;const l=e[o];let u;s&&_2(s,u=S4(o))?!r||!r.includes(u)?n[u]=l:(i||(i={}))[u]=l:Ir(t.emitsOptions,o)||(!(o in c)||l!==c[o])&&(c[o]=l,a=!0)}if(r){const o=L2(n),l=i||W2;for(let u=0;u<r.length;u++){const f=r[u];n[f]=$8(s,o,f,l[f],t,!_2(l,f))}}return a}function $8(t,e,n,c,s,r){const a=t[n];if(a!=null){const i=_2(a,"default");if(i&&c===void 0){const o=a.default;if(a.type!==Function&&z2(o)){const{propsDefaults:l}=s;n in l?c=l[n]:(z6(s),c=l[n]=o.call(null,e),st())}else c=o}a[0]&&(r&&!i?c=!1:a[1]&&(c===""||c===B6(n))&&(c=!0))}return c}function bd(t,e,n=!1){const c=e.propsCache,s=c.get(t);if(s)return s;const r=t.props,a={},i=[];let o=!1;if(!z2(t)){const u=f=>{o=!0;const[h,d]=bd(f,e,!0);I1(a,h),d&&i.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!o)return c.set(t,u6),u6;if(u2(r))for(let u=0;u<r.length;u++){const f=S4(r[u]);Wl(f)&&(a[f]=W2)}else if(r)for(const u in r){const f=S4(u);if(Wl(f)){const h=r[u],d=a[f]=u2(h)||z2(h)?{type:h}:h;if(d){const v=Yl(Boolean,d.type),g=Yl(String,d.type);d[0]=v>-1,d[1]=g<0||v<g,(v>-1||_2(d,"default"))&&i.push(f)}}}const l=[a,i];return c.set(t,l),l}function Wl(t){return t[0]!=="$"}function Kl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ql(t,e){return Kl(t)===Kl(e)}function Yl(t,e){return u2(e)?e.findIndex(n=>Ql(n,t)):z2(e)&&Ql(e,t)?0:-1}const wd=t=>t[0]==="_"||t==="$stable",z5=t=>u2(t)?t.map(j4):[j4(t)],Qx=(t,e,n)=>{if(e._n)return e;const c=P((...s)=>z5(e(...s)),n);return c._c=!1,c},Ld=(t,e,n)=>{const c=t._ctx;for(const s in t){if(wd(s))continue;const r=t[s];if(z2(r))e[s]=Qx(s,r,c);else if(r!=null){const a=z5(r);e[s]=()=>a}}},Sd=(t,e)=>{const n=z5(e);t.slots.default=()=>n},Yx=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=L2(e),I0(e,"_",n)):Ld(e,t.slots={})}else t.slots={},e&&Sd(t,e);I0(t.slots,Dr,1)},Xx=(t,e,n)=>{const{vnode:c,slots:s}=t;let r=!0,a=W2;if(c.shapeFlag&32){const i=e._;i?n&&i===1?r=!1:(I1(s,e),!n&&i===1&&delete s._):(r=!e.$stable,Ld(e,s)),a=e}else e&&(Sd(t,e),a={default:1});if(r)for(const i in s)!wd(i)&&!(i in a)&&delete s[i]};function xd(){return{app:null,config:{isNativeTag:xS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jx=0;function Zx(t,e){return function(c,s=null){z2(c)||(c=Object.assign({},c)),s!=null&&!h1(s)&&(s=null);const r=xd(),a=new Set;let i=!1;const o=r.app={_uid:Jx++,_component:c,_props:s,_container:null,_context:r,_instance:null,version:z_,get config(){return r.config},set config(l){},use(l,...u){return a.has(l)||(l&&z2(l.install)?(a.add(l),l.install(o,...u)):z2(l)&&(a.add(l),l(o,...u))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,u){return u?(r.components[l]=u,o):r.components[l]},directive(l,u){return u?(r.directives[l]=u,o):r.directives[l]},mount(l,u,f){if(!i){const h=m(c,s);return h.appContext=r,u&&e?e(h,l):t(h,l,f),i=!0,o._container=l,l.__vue_app__=o,Or(h.component)||h.component.proxy}},unmount(){i&&(t(null,o._container),delete o._container.__vue_app__)},provide(l,u){return r.provides[l]=u,o}};return o}}function U8(t,e,n,c,s=!1){if(u2(t)){t.forEach((h,d)=>U8(h,e&&(u2(e)?e[d]:e),n,c,s));return}if(p0(c)&&!s)return;const r=c.shapeFlag&4?Or(c.component)||c.component.proxy:c.el,a=s?null:r,{i,r:o}=t,l=e&&e.r,u=i.refs===W2?i.refs={}:i.refs,f=i.setupState;if(l!=null&&l!==o&&(H1(l)?(u[l]=null,_2(f,l)&&(f[l]=null)):a1(l)&&(l.value=null)),z2(o))V3(o,i,12,[a,u]);else{const h=H1(o),d=a1(o);if(h||d){const v=()=>{if(t.f){const g=h?u[o]:o.value;s?u2(g)&&i5(g,r):u2(g)?g.includes(r)||g.push(r):h?(u[o]=[r],_2(f,o)&&(f[o]=u[o])):(o.value=[r],t.k&&(u[t.k]=o.value))}else h?(u[o]=a,_2(f,o)&&(f[o]=a)):d&&(o.value=a,t.k&&(u[t.k]=a))};a?(v.id=-1,r4(v,n)):v()}}}const r4=Nx;function e_(t){return t_(t)}function t_(t,e){const n=TS();n.__VUE__=!0;const{insert:c,remove:s,patchProp:r,createElement:a,createText:i,createComment:o,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=D4,cloneNode:v,insertStaticContent:g}=t,H=(y,C,k,F=null,D=null,G=null,J=!1,j=null,Y=!!C.dynamicChildren)=>{if(y===C)return;y&&!Be(y,C)&&(F=i2(y),q1(y,D,G,!0),y=null),C.patchFlag===-2&&(Y=!1,C.dynamicChildren=null);const{type:U,ref:o2,shapeFlag:s2}=C;switch(U){case M5:p(y,C,k,F);break;case R4:V(y,C,k,F);break;case g0:y==null&&z(C,k,F,J);break;case c1:$(y,C,k,F,D,G,J,j,Y);break;default:s2&1?x(y,C,k,F,D,G,J,j,Y):s2&6?f2(y,C,k,F,D,G,J,j,Y):(s2&64||s2&128)&&U.process(y,C,k,F,D,G,J,j,Y,Q2)}o2!=null&&D&&U8(o2,y&&y.ref,G,C||y,!C)},p=(y,C,k,F)=>{if(y==null)c(C.el=i(C.children),k,F);else{const D=C.el=y.el;C.children!==y.children&&l(D,C.children)}},V=(y,C,k,F)=>{y==null?c(C.el=o(C.children||""),k,F):C.el=y.el},z=(y,C,k,F)=>{[y.el,y.anchor]=g(y.children,C,k,F,y.el,y.anchor)},_=({el:y,anchor:C},k,F)=>{let D;for(;y&&y!==C;)D=h(y),c(y,k,F),y=D;c(C,k,F)},b=({el:y,anchor:C})=>{let k;for(;y&&y!==C;)k=h(y),s(y),y=k;s(C)},x=(y,C,k,F,D,G,J,j,Y)=>{J=J||C.type==="svg",y==null?L(C,k,F,D,G,J,j,Y):O(y,C,D,G,J,j,Y)},L=(y,C,k,F,D,G,J,j)=>{let Y,U;const{type:o2,props:s2,shapeFlag:l2,transition:y2,patchFlag:I2,dirs:q2}=y;if(y.el&&v!==void 0&&I2===-1)Y=y.el=v(y.el);else{if(Y=y.el=a(y.type,G,s2&&s2.is,s2),l2&8?u(Y,y.children):l2&16&&A(y.children,Y,null,F,D,G&&o2!=="foreignObject",J,j),q2&&Ie(y,null,F,"created"),s2){for(const Z2 in s2)Z2!=="value"&&!d0(Z2)&&r(Y,Z2,null,s2[Z2],G,y.children,F,D,K);"value"in s2&&r(Y,"value",null,s2.value),(U=s2.onVnodeBeforeMount)&&q4(U,F,y)}I(Y,y,y.scopeId,J,F)}q2&&Ie(y,null,F,"beforeMount");const j2=(!D||D&&!D.pendingBranch)&&y2&&!y2.persisted;j2&&y2.beforeEnter(Y),c(Y,C,k),((U=s2&&s2.onVnodeMounted)||j2||q2)&&r4(()=>{U&&q4(U,F,y),j2&&y2.enter(Y),q2&&Ie(y,null,F,"mounted")},D)},I=(y,C,k,F,D)=>{if(k&&d(y,k),F)for(let G=0;G<F.length;G++)d(y,F[G]);if(D){let G=D.subTree;if(C===G){const J=D.vnode;I(y,J,J.scopeId,J.slotScopeIds,D.parent)}}},A=(y,C,k,F,D,G,J,j,Y=0)=>{for(let U=Y;U<y.length;U++){const o2=y[U]=j?Q3(y[U]):j4(y[U]);H(null,o2,C,k,F,D,G,J,j)}},O=(y,C,k,F,D,G,J)=>{const j=C.el=y.el;let{patchFlag:Y,dynamicChildren:U,dirs:o2}=C;Y|=y.patchFlag&16;const s2=y.props||W2,l2=C.props||W2;let y2;k&&Ae(k,!1),(y2=l2.onVnodeBeforeUpdate)&&q4(y2,k,C,y),o2&&Ie(C,y,k,"beforeUpdate"),k&&Ae(k,!0);const I2=D&&C.type!=="foreignObject";if(U?W(y.dynamicChildren,U,j,k,F,I2,G):J||J2(y,C,j,null,k,F,I2,G,!1),Y>0){if(Y&16)T(j,C,s2,l2,k,F,D);else if(Y&2&&s2.class!==l2.class&&r(j,"class",null,l2.class,D),Y&4&&r(j,"style",s2.style,l2.style,D),Y&8){const q2=C.dynamicProps;for(let j2=0;j2<q2.length;j2++){const Z2=q2[j2],k4=s2[Z2],qt=l2[Z2];(qt!==k4||Z2==="value")&&r(j,Z2,k4,qt,D,y.children,k,F,K)}}Y&1&&y.children!==C.children&&u(j,C.children)}else!J&&U==null&&T(j,C,s2,l2,k,F,D);((y2=l2.onVnodeUpdated)||o2)&&r4(()=>{y2&&q4(y2,k,C,y),o2&&Ie(C,y,k,"updated")},F)},W=(y,C,k,F,D,G,J)=>{for(let j=0;j<C.length;j++){const Y=y[j],U=C[j],o2=Y.el&&(Y.type===c1||!Be(Y,U)||Y.shapeFlag&70)?f(Y.el):k;H(Y,U,o2,null,F,D,G,J,!0)}},T=(y,C,k,F,D,G,J)=>{if(k!==F){for(const j in F){if(d0(j))continue;const Y=F[j],U=k[j];Y!==U&&j!=="value"&&r(y,j,U,Y,J,C.children,D,G,K)}if(k!==W2)for(const j in k)!d0(j)&&!(j in F)&&r(y,j,k[j],null,J,C.children,D,G,K);"value"in F&&r(y,"value",k.value,F.value)}},$=(y,C,k,F,D,G,J,j,Y)=>{const U=C.el=y?y.el:i(""),o2=C.anchor=y?y.anchor:i("");let{patchFlag:s2,dynamicChildren:l2,slotScopeIds:y2}=C;y2&&(j=j?j.concat(y2):y2),y==null?(c(U,k,F),c(o2,k,F),A(C.children,k,o2,D,G,J,j,Y)):s2>0&&s2&64&&l2&&y.dynamicChildren?(W(y.dynamicChildren,l2,k,D,G,J,j),(C.key!=null||D&&C===D.subTree)&&C5(y,C,!0)):J2(y,C,k,o2,D,G,J,j,Y)},f2=(y,C,k,F,D,G,J,j,Y)=>{C.slotScopeIds=j,y==null?C.shapeFlag&512?D.ctx.activate(C,k,F,J,Y):m2(C,k,F,D,G,J,Y):Z(y,C,Y)},m2=(y,C,k,F,D,G,J)=>{const j=y.component=d_(y,F,D);if(Tr(y)&&(j.ctx.renderer=Q2),m_(j),j.asyncDep){if(D&&D.registerDep(j,c2),!y.el){const Y=j.subTree=m(R4);V(null,Y,C,k)}return}c2(j,y,C,k,D,G,J)},Z=(y,C,k)=>{const F=C.component=y.component;if(Sx(y,C,k))if(F.asyncDep&&!F.asyncResolved){d2(F,C,k);return}else F.next=C,Hx(F.update),F.update();else C.el=y.el,F.vnode=C},c2=(y,C,k,F,D,G,J)=>{const j=()=>{if(y.isMounted){let{next:o2,bu:s2,u:l2,parent:y2,vnode:I2}=y,q2=o2,j2;Ae(y,!1),o2?(o2.el=I2.el,d2(y,o2,J)):o2=I2,s2&&v0(s2),(j2=o2.props&&o2.props.onVnodeBeforeUpdate)&&q4(j2,y2,o2,I2),Ae(y,!0);const Z2=Qa(y),k4=y.subTree;y.subTree=Z2,H(k4,Z2,f(k4.el),i2(k4),y,D,G),o2.el=Z2.el,q2===null&&xx(y,Z2.el),l2&&r4(l2,D),(j2=o2.props&&o2.props.onVnodeUpdated)&&r4(()=>q4(j2,y2,o2,I2),D)}else{let o2;const{el:s2,props:l2}=C,{bm:y2,m:I2,parent:q2}=y,j2=p0(C);if(Ae(y,!1),y2&&v0(y2),!j2&&(o2=l2&&l2.onVnodeBeforeMount)&&q4(o2,q2,C),Ae(y,!0),s2&&M2){const Z2=()=>{y.subTree=Qa(y),M2(s2,y.subTree,y,D,null)};j2?C.type.__asyncLoader().then(()=>!y.isUnmounted&&Z2()):Z2()}else{const Z2=y.subTree=Qa(y);H(null,Z2,k,F,y,D,G),C.el=Z2.el}if(I2&&r4(I2,D),!j2&&(o2=l2&&l2.onVnodeMounted)){const Z2=C;r4(()=>q4(o2,q2,Z2),D)}(C.shapeFlag&256||q2&&p0(q2.vnode)&&q2.vnode.shapeFlag&256)&&y.a&&r4(y.a,D),y.isMounted=!0,C=k=F=null}},Y=y.effect=new u5(j,()=>rd(U),y.scope),U=y.update=()=>Y.run();U.id=y.uid,Ae(y,!0),U()},d2=(y,C,k)=>{C.component=y;const F=y.vnode.props;y.vnode=C,y.next=null,Kx(y,C.props,F,k),Xx(y,C.children,k),St(),kr(void 0,y.update),xt()},J2=(y,C,k,F,D,G,J,j,Y=!1)=>{const U=y&&y.children,o2=y?y.shapeFlag:0,s2=C.children,{patchFlag:l2,shapeFlag:y2}=C;if(l2>0){if(l2&128){L1(U,s2,k,F,D,G,J,j,Y);return}else if(l2&256){Y1(U,s2,k,F,D,G,J,j,Y);return}}y2&8?(o2&16&&K(U,D,G),s2!==U&&u(k,s2)):o2&16?y2&16?L1(U,s2,k,F,D,G,J,j,Y):K(U,D,G,!0):(o2&8&&u(k,""),y2&16&&A(s2,k,F,D,G,J,j,Y))},Y1=(y,C,k,F,D,G,J,j,Y)=>{y=y||u6,C=C||u6;const U=y.length,o2=C.length,s2=Math.min(U,o2);let l2;for(l2=0;l2<s2;l2++){const y2=C[l2]=Y?Q3(C[l2]):j4(C[l2]);H(y[l2],y2,k,null,D,G,J,j,Y)}U>o2?K(y,D,G,!0,!1,s2):A(C,k,F,D,G,J,j,Y,s2)},L1=(y,C,k,F,D,G,J,j,Y)=>{let U=0;const o2=C.length;let s2=y.length-1,l2=o2-1;for(;U<=s2&&U<=l2;){const y2=y[U],I2=C[U]=Y?Q3(C[U]):j4(C[U]);if(Be(y2,I2))H(y2,I2,k,null,D,G,J,j,Y);else break;U++}for(;U<=s2&&U<=l2;){const y2=y[s2],I2=C[l2]=Y?Q3(C[l2]):j4(C[l2]);if(Be(y2,I2))H(y2,I2,k,null,D,G,J,j,Y);else break;s2--,l2--}if(U>s2){if(U<=l2){const y2=l2+1,I2=y2<o2?C[y2].el:F;for(;U<=l2;)H(null,C[U]=Y?Q3(C[U]):j4(C[U]),k,I2,D,G,J,j,Y),U++}}else if(U>l2)for(;U<=s2;)q1(y[U],D,G,!0),U++;else{const y2=U,I2=U,q2=new Map;for(U=I2;U<=l2;U++){const f4=C[U]=Y?Q3(C[U]):j4(C[U]);f4.key!=null&&q2.set(f4.key,U)}let j2,Z2=0;const k4=l2-I2+1;let qt=!1,xl=0;const on=new Array(k4);for(U=0;U<k4;U++)on[U]=0;for(U=y2;U<=s2;U++){const f4=y[U];if(Z2>=k4){q1(f4,D,G,!0);continue}let U4;if(f4.key!=null)U4=q2.get(f4.key);else for(j2=I2;j2<=l2;j2++)if(on[j2-I2]===0&&Be(f4,C[j2])){U4=j2;break}U4===void 0?q1(f4,D,G,!0):(on[U4-I2]=U+1,U4>=xl?xl=U4:qt=!0,H(f4,C[U4],k,null,D,G,J,j,Y),Z2++)}const _l=qt?n_(on):u6;for(j2=_l.length-1,U=k4-1;U>=0;U--){const f4=I2+U,U4=C[f4],Nl=f4+1<o2?C[f4+1].el:F;on[U]===0?H(null,U4,k,Nl,D,G,J,j,Y):qt&&(j2<0||U!==_l[j2]?U1(U4,k,Nl,2):j2--)}}},U1=(y,C,k,F,D=null)=>{const{el:G,type:J,transition:j,children:Y,shapeFlag:U}=y;if(U&6){U1(y.component.subTree,C,k,F);return}if(U&128){y.suspense.move(C,k,F);return}if(U&64){J.move(y,C,k,Q2);return}if(J===c1){c(G,C,k);for(let s2=0;s2<Y.length;s2++)U1(Y[s2],C,k,F);c(y.anchor,C,k);return}if(J===g0){_(y,C,k);return}if(F!==2&&U&1&&j)if(F===0)j.beforeEnter(G),c(G,C,k),r4(()=>j.enter(G),D);else{const{leave:s2,delayLeave:l2,afterLeave:y2}=j,I2=()=>c(G,C,k),q2=()=>{s2(G,()=>{I2(),y2&&y2()})};l2?l2(G,I2,q2):q2()}else c(G,C,k)},q1=(y,C,k,F=!1,D=!1)=>{const{type:G,props:J,ref:j,children:Y,dynamicChildren:U,shapeFlag:o2,patchFlag:s2,dirs:l2}=y;if(j!=null&&U8(j,null,k,y,!0),o2&256){C.ctx.deactivate(y);return}const y2=o2&1&&l2,I2=!p0(y);let q2;if(I2&&(q2=J&&J.onVnodeBeforeUnmount)&&q4(q2,C,y),o2&6)t2(y.component,k,F);else{if(o2&128){y.suspense.unmount(k,F);return}y2&&Ie(y,null,C,"beforeUnmount"),o2&64?y.type.remove(y,C,k,D,Q2,F):U&&(G!==c1||s2>0&&s2&64)?K(U,C,k,!1,!0):(G===c1&&s2&384||!D&&o2&16)&&K(Y,C,k),F&&$4(y)}(I2&&(q2=J&&J.onVnodeUnmounted)||y2)&&r4(()=>{q2&&q4(q2,C,y),y2&&Ie(y,null,C,"unmounted")},k)},$4=y=>{const{type:C,el:k,anchor:F,transition:D}=y;if(C===c1){E(k,F);return}if(C===g0){b(y);return}const G=()=>{s(k),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:J,delayLeave:j}=D,Y=()=>J(k,G);j?j(y.el,G,Y):Y()}else G()},E=(y,C)=>{let k;for(;y!==C;)k=h(y),s(y),y=k;s(C)},t2=(y,C,k)=>{const{bum:F,scope:D,update:G,subTree:J,um:j}=y;F&&v0(F),D.stop(),G&&(G.active=!1,q1(J,y,C,k)),j&&r4(j,C),r4(()=>{y.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},K=(y,C,k,F=!1,D=!1,G=0)=>{for(let J=G;J<y.length;J++)q1(y[J],C,k,F,D)},i2=y=>y.shapeFlag&6?i2(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),U2=(y,C,k)=>{y==null?C._vnode&&q1(C._vnode,null,null,!0):H(C._vnode||null,y,C,null,null,null,k),od(),C._vnode=y},Q2={p:H,um:q1,m:U1,r:$4,mt:m2,mc:A,pc:J2,pbc:W,n:i2,o:t};let b2,M2;return e&&([b2,M2]=e(Q2)),{render:U2,hydrate:b2,createApp:Zx(U2,b2)}}function Ae({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function C5(t,e,n=!1){const c=t.children,s=e.children;if(u2(c)&&u2(s))for(let r=0;r<c.length;r++){const a=c[r];let i=s[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[r]=Q3(s[r]),i.el=a.el),n||C5(a,i))}}function n_(t){const e=t.slice(),n=[0];let c,s,r,a,i;const o=t.length;for(c=0;c<o;c++){const l=t[c];if(l!==0){if(s=n[n.length-1],t[s]<l){e[c]=s,n.push(c);continue}for(r=0,a=n.length-1;r<a;)i=r+a>>1,t[n[i]]<l?r=i+1:a=i;l<t[n[r]]&&(r>0&&(e[c]=n[r-1]),n[r]=c)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=e[a];return n}const c_=t=>t.__isTeleport,Dn=t=>t&&(t.disabled||t.disabled===""),Xl=t=>typeof SVGElement<"u"&&t instanceof SVGElement,q8=(t,e)=>{const n=t&&t.to;return H1(n)?e?e(n):null:n},s_={__isTeleport:!0,process(t,e,n,c,s,r,a,i,o,l){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:v,createText:g,createComment:H}}=l,p=Dn(e.props);let{shapeFlag:V,children:z,dynamicChildren:_}=e;if(t==null){const b=e.el=g(""),x=e.anchor=g("");d(b,n,c),d(x,n,c);const L=e.target=q8(e.props,v),I=e.targetAnchor=g("");L&&(d(I,L),a=a||Xl(L));const A=(O,W)=>{V&16&&u(z,O,W,s,r,a,i,o)};p?A(n,x):L&&A(L,I)}else{e.el=t.el;const b=e.anchor=t.anchor,x=e.target=t.target,L=e.targetAnchor=t.targetAnchor,I=Dn(t.props),A=I?n:x,O=I?b:L;if(a=a||Xl(x),_?(h(t.dynamicChildren,_,A,s,r,a,i),C5(t,e,!0)):o||f(t,e,A,O,s,r,a,i,!1),p)I||Bs(e,n,b,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const W=e.target=q8(e.props,v);W&&Bs(e,W,null,l,0)}else I&&Bs(e,x,L,l,1)}},remove(t,e,n,c,{um:s,o:{remove:r}},a){const{shapeFlag:i,children:o,anchor:l,targetAnchor:u,target:f,props:h}=t;if(f&&r(u),(a||!Dn(h))&&(r(l),i&16))for(let d=0;d<o.length;d++){const v=o[d];s(v,e,n,!0,!!v.dynamicChildren)}},move:Bs,hydrate:r_};function Bs(t,e,n,{o:{insert:c},m:s},r=2){r===0&&c(t.targetAnchor,e,n);const{el:a,anchor:i,shapeFlag:o,children:l,props:u}=t,f=r===2;if(f&&c(a,e,n),(!f||Dn(u))&&o&16)for(let h=0;h<l.length;h++)s(l[h],e,n,2);f&&c(i,e,n)}function r_(t,e,n,c,s,r,{o:{nextSibling:a,parentNode:i,querySelector:o}},l){const u=e.target=q8(e.props,o);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Dn(e.props))e.anchor=l(a(t),e,i(t),n,c,s,r),e.targetAnchor=f;else{e.anchor=a(t);let h=f;for(;h;)if(h=a(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&a(e.targetAnchor);break}l(f,e,u,n,c,s,r)}}return e.anchor&&a(e.anchor)}const a_=s_,c1=Symbol(void 0),M5=Symbol(void 0),R4=Symbol(void 0),g0=Symbol(void 0),Rn=[];let A4=null;function E2(t=!1){Rn.push(A4=t?null:[])}function i_(){Rn.pop(),A4=Rn[Rn.length-1]||null}let lc=1;function Jl(t){lc+=t}function _d(t){return t.dynamicChildren=lc>0?A4||u6:null,i_(),lc>0&&A4&&A4.push(t),t}function o1(t,e,n,c,s,r){return _d(w(t,e,n,c,s,r,!0))}function c3(t,e,n,c,s){return _d(m(t,e,n,c,s,!0))}function j8(t){return t?t.__v_isVNode===!0:!1}function Be(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",Nd=({key:t})=>t!=null?t:null,y0=({ref:t,ref_key:e,ref_for:n})=>t!=null?H1(t)||a1(t)||z2(t)?{i:M4,r:t,k:e,f:!!n}:t:null;function w(t,e=null,n=null,c=0,s=null,r=t===c1?0:1,a=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nd(e),ref:e&&y0(e),scopeId:Ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:c,dynamicProps:s,dynamicChildren:null,appContext:null};return i?(w5(o,n),r&128&&t.normalize(o)):n&&(o.shapeFlag|=H1(n)?8:16),lc>0&&!a&&A4&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&A4.push(o),o}const m=o_;function o_(t,e=null,n=null,c=0,s=null,r=!1){if((!t||t===Vd)&&(t=R4),j8(t)){const i=C3(t,e,!0);return n&&w5(i,n),lc>0&&!r&&A4&&(i.shapeFlag&6?A4[A4.indexOf(t)]=i:A4.push(i)),i.patchFlag|=-2,i}if(V_(t)&&(t=t.__vccOpts),e){e=l_(e);let{class:i,style:o}=e;i&&!H1(i)&&(e.class=jc(i)),h1(o)&&(Qh(o)&&!u2(o)&&(o=I1({},o)),e.style=s5(o))}const a=H1(t)?1:_x(t)?128:c_(t)?64:h1(t)?4:z2(t)?2:0;return w(t,e,n,c,s,a,r,!0)}function l_(t){return t?Qh(t)||Dr in t?I1({},t):t:null}function C3(t,e,n=!1){const{props:c,ref:s,patchFlag:r,children:a}=t,i=e?G1(c||{},e):c;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Nd(i),ref:e&&e.ref?n&&s?u2(s)?s.concat(y0(e)):[s,y0(e)]:y0(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==c1?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&C3(t.ssContent),ssFallback:t.ssFallback&&C3(t.ssFallback),el:t.el,anchor:t.anchor}}function w2(t=" ",e=0){return m(M5,null,t,e)}function u_(t,e){const n=m(g0,null,t);return n.staticCount=e,n}function b5(t="",e=!1){return e?(E2(),c3(R4,null,t)):m(R4,null,t)}function j4(t){return t==null||typeof t=="boolean"?m(R4):u2(t)?m(c1,null,t.slice()):typeof t=="object"?Q3(t):m(M5,null,String(t))}function Q3(t){return t.el===null||t.memo?t:C3(t)}function w5(t,e){let n=0;const{shapeFlag:c}=t;if(e==null)e=null;else if(u2(e))n=16;else if(typeof e=="object")if(c&65){const s=e.default;s&&(s._c&&(s._d=!1),w5(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Dr in e)?e._ctx=M4:s===3&&M4&&(M4.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z2(e)?(e={default:e,_ctx:M4},n=32):(e=String(e),c&64?(n=16,e=[w2(e)]):n=8);t.children=e,t.shapeFlag|=n}function G1(...t){const e={};for(let n=0;n<t.length;n++){const c=t[n];for(const s in c)if(s==="class")e.class!==c.class&&(e.class=jc([e.class,c.class]));else if(s==="style")e.style=s5([e.style,c.style]);else if(Sr(s)){const r=e[s],a=c[s];a&&r!==a&&!(u2(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=c[s])}return e}function q4(t,e,n,c=null){L4(t,e,7,[n,c])}const f_=xd();let h_=0;function d_(t,e,n){const c=t.type,s=(e?e.appContext:t.appContext)||f_,r={uid:h_++,vnode:t,type:c,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bd(c,s),emitsOptions:ud(c,s),emit:null,emitted:null,propsDefaults:W2,inheritAttrs:c.inheritAttrs,ctx:W2,data:W2,props:W2,attrs:W2,slots:W2,refs:W2,setupState:W2,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cx.bind(null,r),t.ce&&t.ce(r),r}let _1=null;const Rr=()=>_1||M4,z6=t=>{_1=t,t.scope.on()},st=()=>{_1&&_1.scope.off(),_1=null};function kd(t){return t.vnode.shapeFlag&4}let uc=!1;function m_(t,e=!1){uc=e;const{props:n,children:c}=t.vnode,s=kd(t);Wx(t,n,s,e),Yx(t,c);const r=s?v_(t,e):void 0;return uc=!1,r}function v_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yh(new Proxy(t.ctx,Bx));const{setup:c}=n;if(c){const s=t.setupContext=c.length>1?g_(t):null;z6(t),St();const r=V3(c,t,0,[t.props,s]);if(xt(),st(),Th(r)){if(r.then(st,st),e)return r.then(a=>{Zl(t,a,e)}).catch(a=>{Nr(a,t,0)});t.asyncDep=r}else Zl(t,r,e)}else Id(t,e)}function Zl(t,e,n){z2(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:h1(e)&&(t.setupState=td(e)),Id(t,n)}let e9;function Id(t,e,n){const c=t.type;if(!t.render){if(!e&&e9&&!c.render){const s=c.template;if(s){const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:o}=c,l=I1(I1({isCustomElement:r,delimiters:i},a),o);c.render=e9(s,l)}}t.render=c.render||D4}z6(t),St(),$x(t),xt(),st()}function p_(t){return new Proxy(t.attrs,{get(e,n){return v4(t,"get","$attrs"),e[n]}})}function g_(t){const e=c=>{t.exposed=c||{}};let n;return{get attrs(){return n||(n=p_(t))},slots:t.slots,emit:t.emit,expose:e}}function Or(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(td(Yh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in P0)return P0[n](t)}}))}const y_=/(?:^|[-_])(\w)/g,H_=t=>t.replace(y_,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ad(t,e=!0){return z2(t)?t.displayName||t.name:t.name||e&&t.__name}function Td(t,e,n=!1){let c=Ad(e);if(!c&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(c=s[1])}if(!c&&t&&t.parent){const s=r=>{for(const a in r)if(r[a]===e)return a};c=s(t.components||t.parent.type.components)||s(t.appContext.components)}return c?H_(c):n?"App":"Anonymous"}function V_(t){return z2(t)&&"__vccOpts"in t}const M=(t,e)=>fx(t,e,uc);function y4(t,e,n){const c=arguments.length;return c===2?h1(e)&&!u2(e)?j8(e)?m(t,null,[e]):m(t,e):m(t,null,e):(c>3?n=Array.prototype.slice.call(arguments,2):c===3&&j8(n)&&(n=[n]),m(t,e,n))}const z_="3.2.37",C_="http://www.w3.org/2000/svg",$e=typeof document<"u"?document:null,t9=$e&&$e.createElement("template"),M_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,c)=>{const s=e?$e.createElementNS(C_,t):$e.createElement(t,n?{is:n}:void 0);return t==="select"&&c&&c.multiple!=null&&s.setAttribute("multiple",c.multiple),s},createText:t=>$e.createTextNode(t),createComment:t=>$e.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$e.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,c,s,r){const a=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{t9.innerHTML=c?`<svg>${t}</svg>`:t;const i=t9.content;if(c){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}e.insertBefore(i,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function b_(t,e,n){const c=t._vtc;c&&(e=(e?[e,...c]:[...c]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function w_(t,e,n){const c=t.style,s=H1(n);if(n&&!s){for(const r in n)G8(c,r,n[r]);if(e&&!H1(e))for(const r in e)n[r]==null&&G8(c,r,"")}else{const r=c.display;s?e!==n&&(c.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(c.display=r)}}const n9=/\s*!important$/;function G8(t,e,n){if(u2(n))n.forEach(c=>G8(t,e,c));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const c=L_(t,e);n9.test(n)?t.setProperty(B6(c),n.replace(n9,""),"important"):t[c]=n}}const c9=["Webkit","Moz","ms"],Xa={};function L_(t,e){const n=Xa[e];if(n)return n;let c=S4(e);if(c!=="filter"&&c in t)return Xa[e]=c;c=Ce(c);for(let s=0;s<c9.length;s++){const r=c9[s]+c;if(r in t)return Xa[e]=r}return e}const s9="http://www.w3.org/1999/xlink";function S_(t,e,n,c,s){if(c&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(s9,e.slice(6,e.length)):t.setAttributeNS(s9,e,n);else{const r=MS(e);n==null||r&&!Ih(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function x_(t,e,n,c,s,r,a){if(e==="innerHTML"||e==="textContent"){c&&a(c,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const o=n==null?"":n;(t.value!==o||t.tagName==="OPTION")&&(t.value=o),n==null&&t.removeAttribute(e);return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Ih(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}const[Ed,__]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let W8=0;const N_=Promise.resolve(),k_=()=>{W8=0},I_=()=>W8||(N_.then(k_),W8=Ed());function h3(t,e,n,c){t.addEventListener(e,n,c)}function A_(t,e,n,c){t.removeEventListener(e,n,c)}function T_(t,e,n,c,s=null){const r=t._vei||(t._vei={}),a=r[e];if(c&&a)a.value=c;else{const[i,o]=E_(e);if(c){const l=r[e]=P_(c,s);h3(t,i,l,o)}else a&&(A_(t,i,a,o),r[e]=void 0)}}const r9=/(?:Once|Passive|Capture)$/;function E_(t){let e;if(r9.test(t)){e={};let n;for(;n=t.match(r9);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[B6(t.slice(2)),e]}function P_(t,e){const n=c=>{const s=c.timeStamp||Ed();(__||s>=n.attached-1)&&L4(D_(c,n.value),e,5,[c])};return n.value=t,n.attached=I_(),n}function D_(t,e){if(u2(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(c=>s=>!s._stopped&&c&&c(s))}else return e}const a9=/^on[a-z]/,R_=(t,e,n,c,s=!1,r,a,i,o)=>{e==="class"?b_(t,c,s):e==="style"?w_(t,n,c):Sr(e)?a5(e)||T_(t,e,n,c,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O_(t,e,c,s))?x_(t,e,c,r,a,i,o):(e==="true-value"?t._trueValue=c:e==="false-value"&&(t._falseValue=c),S_(t,e,c,s))};function O_(t,e,n,c){return c?!!(e==="innerHTML"||e==="textContent"||e in t&&a9.test(e)&&z2(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||a9.test(e)&&H1(n)?!1:e in t}const B3="transition",ln="animation",s3=(t,{slots:e})=>y4(dd,Dd(t),e);s3.displayName="Transition";const Pd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F_=s3.props=I1({},dd.props,Pd),Te=(t,e=[])=>{u2(t)?t.forEach(n=>n(...e)):t&&t(...e)},i9=t=>t?u2(t)?t.some(e=>e.length>1):t.length>1:!1;function Dd(t){const e={};for(const T in t)T in Pd||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:c,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:o=r,appearActiveClass:l=a,appearToClass:u=i,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,v=B_(s),g=v&&v[0],H=v&&v[1],{onBeforeEnter:p,onEnter:V,onEnterCancelled:z,onLeave:_,onLeaveCancelled:b,onBeforeAppear:x=p,onAppear:L=V,onAppearCancelled:I=z}=e,A=(T,$,f2)=>{K3(T,$?u:i),K3(T,$?l:a),f2&&f2()},O=(T,$)=>{T._isLeaving=!1,K3(T,f),K3(T,d),K3(T,h),$&&$()},W=T=>($,f2)=>{const m2=T?L:V,Z=()=>A($,T,f2);Te(m2,[$,Z]),o9(()=>{K3($,T?o:r),u3($,T?u:i),i9(m2)||l9($,c,g,Z)})};return I1(e,{onBeforeEnter(T){Te(p,[T]),u3(T,r),u3(T,a)},onBeforeAppear(T){Te(x,[T]),u3(T,o),u3(T,l)},onEnter:W(!1),onAppear:W(!0),onLeave(T,$){T._isLeaving=!0;const f2=()=>O(T,$);u3(T,f),Od(),u3(T,h),o9(()=>{!T._isLeaving||(K3(T,f),u3(T,d),i9(_)||l9(T,c,H,f2))}),Te(_,[T,f2])},onEnterCancelled(T){A(T,!1),Te(z,[T])},onAppearCancelled(T){A(T,!0),Te(I,[T])},onLeaveCancelled(T){O(T),Te(b,[T])}})}function B_(t){if(t==null)return null;if(h1(t))return[Ja(t.enter),Ja(t.leave)];{const e=Ja(t);return[e,e]}}function Ja(t){return cc(t)}function u3(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function K3(t,e){e.split(/\s+/).forEach(c=>c&&t.classList.remove(c));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function o9(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let $_=0;function l9(t,e,n,c){const s=t._endId=++$_,r=()=>{s===t._endId&&c()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:o}=Rd(t,e);if(!a)return c();const l=a+"end";let u=0;const f=()=>{t.removeEventListener(l,h),r()},h=d=>{d.target===t&&++u>=o&&f()};setTimeout(()=>{u<o&&f()},i+1),t.addEventListener(l,h)}function Rd(t,e){const n=window.getComputedStyle(t),c=v=>(n[v]||"").split(", "),s=c(B3+"Delay"),r=c(B3+"Duration"),a=u9(s,r),i=c(ln+"Delay"),o=c(ln+"Duration"),l=u9(i,o);let u=null,f=0,h=0;e===B3?a>0&&(u=B3,f=a,h=r.length):e===ln?l>0&&(u=ln,f=l,h=o.length):(f=Math.max(a,l),u=f>0?a>l?B3:ln:null,h=u?u===B3?r.length:o.length:0);const d=u===B3&&/\b(transform|all)(,|$)/.test(n[B3+"Property"]);return{type:u,timeout:f,propCount:h,hasTransform:d}}function u9(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,c)=>f9(n)+f9(t[c])))}function f9(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Od(){return document.body.offsetHeight}const Fd=new WeakMap,Bd=new WeakMap,U_={name:"TransitionGroup",props:I1({},F_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Rr(),c=hd();let s,r;return yd(()=>{if(!s.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!K_(s[0].el,n.vnode.el,a))return;s.forEach(j_),s.forEach(G_);const i=s.filter(W_);Od(),i.forEach(o=>{const l=o.el,u=l.style;u3(l,a),u.transform=u.webkitTransform=u.transitionDuration="";const f=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",f),l._moveCb=null,K3(l,a))};l.addEventListener("transitionend",f)})}),()=>{const a=L2(t),i=Dd(a);let o=a.tag||c1;s=r,r=e.default?y5(e.default()):[];for(let l=0;l<r.length;l++){const u=r[l];u.key!=null&&oc(u,ic(u,i,c,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];oc(u,ic(u,i,c,n)),Fd.set(u,u.el.getBoundingClientRect())}return m(o,null,r)}}},q_=U_;function j_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function G_(t){Bd.set(t,t.el.getBoundingClientRect())}function W_(t){const e=Fd.get(t),n=Bd.get(t),c=e.left-n.left,s=e.top-n.top;if(c||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${c}px,${s}px)`,r.transitionDuration="0s",t}}function K_(t,e,n){const c=t.cloneNode();t._vtc&&t._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&c.classList.remove(i))}),n.split(/\s+/).forEach(a=>a&&c.classList.add(a)),c.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(c);const{hasTransform:r}=Rd(c);return s.removeChild(c),r}const ie=t=>{const e=t.props["onUpdate:modelValue"]||!1;return u2(e)?n=>v0(e,n):e};function Q_(t){t.target.composing=!0}function h9(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const d9={created(t,{modifiers:{lazy:e,trim:n,number:c}},s){t._assign=ie(s);const r=c||s.props&&s.props.type==="number";h3(t,e?"change":"input",a=>{if(a.target.composing)return;let i=t.value;n&&(i=i.trim()),r&&(i=cc(i)),t._assign(i)}),n&&h3(t,"change",()=>{t.value=t.value.trim()}),e||(h3(t,"compositionstart",Q_),h3(t,"compositionend",h9),h3(t,"change",h9))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:c,number:s}},r){if(t._assign=ie(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||c&&t.value.trim()===e||(s||t.type==="number")&&cc(t.value)===e))return;const a=e==null?"":e;t.value!==a&&(t.value=a)}},Y_={deep:!0,created(t,e,n){t._assign=ie(n),h3(t,"change",()=>{const c=t._modelValue,s=C6(t),r=t.checked,a=t._assign;if(u2(c)){const i=r5(c,s),o=i!==-1;if(r&&!o)a(c.concat(s));else if(!r&&o){const l=[...c];l.splice(i,1),a(l)}}else if(F6(c)){const i=new Set(c);r?i.add(s):i.delete(s),a(i)}else a(Ud(t,r))})},mounted:m9,beforeUpdate(t,e,n){t._assign=ie(n),m9(t,e,n)}};function m9(t,{value:e,oldValue:n},c){t._modelValue=e,u2(e)?t.checked=r5(e,c.props.value)>-1:F6(e)?t.checked=e.has(c.props.value):e!==n&&(t.checked=it(e,Ud(t,!0)))}const $d={created(t,{value:e},n){t.checked=it(e,n.props.value),t._assign=ie(n),h3(t,"change",()=>{t._assign(C6(t))})},beforeUpdate(t,{value:e,oldValue:n},c){t._assign=ie(c),e!==n&&(t.checked=it(e,c.props.value))}},X_={deep:!0,created(t,{value:e,modifiers:{number:n}},c){const s=F6(e);h3(t,"change",()=>{const r=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?cc(C6(a)):C6(a));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=ie(c)},mounted(t,{value:e}){v9(t,e)},beforeUpdate(t,e,n){t._assign=ie(n)},updated(t,{value:e}){v9(t,e)}};function v9(t,e){const n=t.multiple;if(!(n&&!u2(e)&&!F6(e))){for(let c=0,s=t.options.length;c<s;c++){const r=t.options[c],a=C6(r);if(n)u2(e)?r.selected=r5(e,a)>-1:r.selected=e.has(a);else if(it(C6(r),e)){t.selectedIndex!==c&&(t.selectedIndex=c);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function C6(t){return"_value"in t?t._value:t.value}function Ud(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const J_={created(t,e,n){$s(t,e,n,null,"created")},mounted(t,e,n){$s(t,e,n,null,"mounted")},beforeUpdate(t,e,n,c){$s(t,e,n,c,"beforeUpdate")},updated(t,e,n,c){$s(t,e,n,c,"updated")}};function Z_(t,e){switch(t){case"SELECT":return X_;case"TEXTAREA":return d9;default:switch(e){case"checkbox":return Y_;case"radio":return $d;default:return d9}}}function $s(t,e,n,c,s){const a=Z_(t.tagName,n.props&&n.props.type)[s];a&&a(t,e,n,c)}const eN=["ctrl","shift","alt","meta"],tN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eN.some(n=>t[`${n}Key`]&&!e.includes(n))},nN=(t,e)=>(n,...c)=>{for(let s=0;s<e.length;s++){const r=tN[e[s]];if(r&&r(n,e))return}return t(n,...c)},m3={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):un(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:c}){!e!=!n&&(c?e?(c.beforeEnter(t),un(t,!0),c.enter(t)):c.leave(t,()=>{un(t,!1)}):un(t,e))},beforeUnmount(t,{value:e}){un(t,e)}};function un(t,e){t.style.display=e?t._vod:"none"}const cN=I1({patchProp:R_},M_);let p9;function sN(){return p9||(p9=e_(cN))}const rN=(...t)=>{const e=sN().createApp(...t),{mount:n}=e;return e.mount=c=>{const s=aN(c);if(!s)return;const r=e._component;!z2(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function aN(t){return H1(t)?document.querySelector(t):t}function g9(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,c)}return n}function e2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g9(Object(n),!0).forEach(function(c){M1(t,c,n[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g9(Object(n)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(n,c))})}return t}function R0(t){return R0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R0(t)}function iN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y9(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function oN(t,e,n){return e&&y9(t.prototype,e),n&&y9(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function M1(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L5(t,e){return uN(t)||hN(t,e)||qd(t,e)||mN()}function Qc(t){return lN(t)||fN(t)||qd(t)||dN()}function lN(t){if(Array.isArray(t))return K8(t)}function uN(t){if(Array.isArray(t))return t}function fN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var c=[],s=!0,r=!1,a,i;try{for(n=n.call(t);!(s=(a=n.next()).done)&&(c.push(a.value),!(e&&c.length===e));s=!0);}catch(o){r=!0,i=o}finally{try{!s&&n.return!=null&&n.return()}finally{if(r)throw i}}return c}}function qd(t,e){if(!!t){if(typeof t=="string")return K8(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K8(t,e)}}function K8(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}function dN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var H9=function(){},S5={},jd={},Gd=null,Wd={mark:H9,measure:H9};try{typeof window<"u"&&(S5=window),typeof document<"u"&&(jd=document),typeof MutationObserver<"u"&&(Gd=MutationObserver),typeof performance<"u"&&(Wd=performance)}catch{}var vN=S5.navigator||{},V9=vN.userAgent,z9=V9===void 0?"":V9,oe=S5,t1=jd,C9=Gd,Us=Wd;oe.document;var I3=!!t1.documentElement&&!!t1.head&&typeof t1.addEventListener=="function"&&typeof t1.createElement=="function",Kd=~z9.indexOf("MSIE")||~z9.indexOf("Trident/"),qs,js,Gs,Ws,Ks,M3="___FONT_AWESOME___",Q8=16,Qd="fa",Yd="svg-inline--fa",ot="data-fa-i2svg",Y8="data-fa-pseudo-element",pN="data-fa-pseudo-element-pending",x5="data-prefix",_5="data-icon",M9="fontawesome-i2svg",gN="async",yN=["HTML","HEAD","STYLE","SCRIPT"],Xd=function(){try{return!0}catch{return!1}}(),e1="classic",u1="sharp",N5=[e1,u1];function Yc(t){return new Proxy(t,{get:function(n,c){return c in n?n[c]:n[e1]}})}var fc=Yc((qs={},M1(qs,e1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),M1(qs,u1,{fa:"solid",fass:"solid","fa-solid":"solid"}),qs)),hc=Yc((js={},M1(js,e1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M1(js,u1,{solid:"fass"}),js)),dc=Yc((Gs={},M1(Gs,e1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M1(Gs,u1,{fass:"fa-solid"}),Gs)),HN=Yc((Ws={},M1(Ws,e1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M1(Ws,u1,{"fa-solid":"fass"}),Ws)),VN=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Jd="fa-layers-text",zN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,CN=Yc((Ks={},M1(Ks,e1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M1(Ks,u1,{900:"fass"}),Ks)),Zd=[1,2,3,4,5,6,7,8,9,10],MN=Zd.concat([11,12,13,14,15,16,17,18,19,20]),bN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mc=new Set;Object.keys(hc[e1]).map(mc.add.bind(mc));Object.keys(hc[u1]).map(mc.add.bind(mc));var wN=[].concat(N5,Qc(mc),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qe.GROUP,Qe.SWAP_OPACITY,Qe.PRIMARY,Qe.SECONDARY]).concat(Zd.map(function(t){return"".concat(t,"x")})).concat(MN.map(function(t){return"w-".concat(t)})),On=oe.FontAwesomeConfig||{};function LN(t){var e=t1.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function SN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(t1&&typeof t1.querySelector=="function"){var xN=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xN.forEach(function(t){var e=L5(t,2),n=e[0],c=e[1],s=SN(LN(n));s!=null&&(On[c]=s)})}var em={styleDefault:"solid",familyDefault:"classic",cssPrefix:Qd,replacementClass:Yd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};On.familyPrefix&&(On.cssPrefix=On.familyPrefix);var M6=e2(e2({},em),On);M6.autoReplaceSvg||(M6.observeMutations=!1);var r2={};Object.keys(em).forEach(function(t){Object.defineProperty(r2,t,{enumerable:!0,set:function(n){M6[t]=n,Fn.forEach(function(c){return c(r2)})},get:function(){return M6[t]}})});Object.defineProperty(r2,"familyPrefix",{enumerable:!0,set:function(e){M6.cssPrefix=e,Fn.forEach(function(n){return n(r2)})},get:function(){return M6.cssPrefix}});oe.FontAwesomeConfig=r2;var Fn=[];function _N(t){return Fn.push(t),function(){Fn.splice(Fn.indexOf(t),1)}}var $3=Q8,W4={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function NN(t){if(!(!t||!I3)){var e=t1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=t1.head.childNodes,c=null,s=n.length-1;s>-1;s--){var r=n[s],a=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(c=r)}return t1.head.insertBefore(e,c),t}}var kN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vc(){for(var t=12,e="";t-- >0;)e+=kN[Math.random()*62|0];return e}function q6(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function k5(t){return t.classList?q6(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function tm(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function IN(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(tm(t[n]),'" ')},"").trim()}function Fr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function I5(t){return t.size!==W4.size||t.x!==W4.x||t.y!==W4.y||t.rotate!==W4.rotate||t.flipX||t.flipY}function AN(t){var e=t.transform,n=t.containerWidth,c=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(a," ").concat(i)},l={transform:"translate(".concat(c/2*-1," -256)")};return{outer:s,inner:o,path:l}}function TN(t){var e=t.transform,n=t.width,c=n===void 0?Q8:n,s=t.height,r=s===void 0?Q8:s,a=t.startCentered,i=a===void 0?!1:a,o="";return i&&Kd?o+="translate(".concat(e.x/$3-c/2,"em, ").concat(e.y/$3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/$3,"em), calc(-50% + ").concat(e.y/$3,"em)) "):o+="translate(".concat(e.x/$3,"em, ").concat(e.y/$3,"em) "),o+="scale(".concat(e.size/$3*(e.flipX?-1:1),", ").concat(e.size/$3*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var EN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function nm(){var t=Qd,e=Yd,n=r2.cssPrefix,c=r2.replacementClass,s=EN;if(n!==t||c!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(i,".".concat(c))}return s}var b9=!1;function Za(){r2.autoAddCss&&!b9&&(NN(nm()),b9=!0)}var PN={mixout:function(){return{dom:{css:nm,insertCss:Za}}},hooks:function(){return{beforeDOMElementCreation:function(){Za()},beforeI2svg:function(){Za()}}}},b3=oe||{};b3[M3]||(b3[M3]={});b3[M3].styles||(b3[M3].styles={});b3[M3].hooks||(b3[M3].hooks={});b3[M3].shims||(b3[M3].shims=[]);var T4=b3[M3],cm=[],DN=function t(){t1.removeEventListener("DOMContentLoaded",t),O0=1,cm.map(function(e){return e()})},O0=!1;I3&&(O0=(t1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(t1.readyState),O0||t1.addEventListener("DOMContentLoaded",DN));function RN(t){!I3||(O0?setTimeout(t,0):cm.push(t))}function Xc(t){var e=t.tag,n=t.attributes,c=n===void 0?{}:n,s=t.children,r=s===void 0?[]:s;return typeof t=="string"?tm(t):"<".concat(e," ").concat(IN(c),">").concat(r.map(Xc).join(""),"</").concat(e,">")}function w9(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ON=function(e,n){return function(c,s,r,a){return e.call(n,c,s,r,a)}},e8=function(e,n,c,s){var r=Object.keys(e),a=r.length,i=s!==void 0?ON(n,s):n,o,l,u;for(c===void 0?(o=1,u=e[r[0]]):(o=0,u=c);o<a;o++)l=r[o],u=i(u,e[l],l,e);return u};function FN(t){for(var e=[],n=0,c=t.length;n<c;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<c){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function X8(t){var e=FN(t);return e.length===1?e[0].toString(16):null}function BN(t,e){var n=t.length,c=t.charCodeAt(e),s;return c>=55296&&c<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(c-55296)*1024+s-56320+65536:c}function L9(t){return Object.keys(t).reduce(function(e,n){var c=t[n],s=!!c.icon;return s?e[c.iconName]=c.icon:e[n]=c,e},{})}function J8(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=n.skipHooks,s=c===void 0?!1:c,r=L9(e);typeof T4.hooks.addPack=="function"&&!s?T4.hooks.addPack(t,L9(e)):T4.styles[t]=e2(e2({},T4.styles[t]||{}),r),t==="fas"&&J8("fa",e)}var Qs,Ys,Xs,c6=T4.styles,$N=T4.shims,UN=(Qs={},M1(Qs,e1,Object.values(dc[e1])),M1(Qs,u1,Object.values(dc[u1])),Qs),A5=null,sm={},rm={},am={},im={},om={},qN=(Ys={},M1(Ys,e1,Object.keys(fc[e1])),M1(Ys,u1,Object.keys(fc[u1])),Ys);function jN(t){return~wN.indexOf(t)}function GN(t,e){var n=e.split("-"),c=n[0],s=n.slice(1).join("-");return c===t&&s!==""&&!jN(s)?s:null}var lm=function(){var e=function(r){return e8(c6,function(a,i,o){return a[o]=e8(i,r,{}),a},{})};sm=e(function(s,r,a){if(r[3]&&(s[r[3]]=a),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){s[o.toString(16)]=a})}return s}),rm=e(function(s,r,a){if(s[a]=a,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){s[o]=a})}return s}),om=e(function(s,r,a){var i=r[2];return s[a]=a,i.forEach(function(o){s[o]=a}),s});var n="far"in c6||r2.autoFetchSvg,c=e8($N,function(s,r){var a=r[0],i=r[1],o=r[2];return i==="far"&&!n&&(i="fas"),typeof a=="string"&&(s.names[a]={prefix:i,iconName:o}),typeof a=="number"&&(s.unicodes[a.toString(16)]={prefix:i,iconName:o}),s},{names:{},unicodes:{}});am=c.names,im=c.unicodes,A5=Br(r2.styleDefault,{family:r2.familyDefault})};_N(function(t){A5=Br(t.styleDefault,{family:r2.familyDefault})});lm();function T5(t,e){return(sm[t]||{})[e]}function WN(t,e){return(rm[t]||{})[e]}function Ye(t,e){return(om[t]||{})[e]}function um(t){return am[t]||{prefix:null,iconName:null}}function KN(t){var e=im[t],n=T5("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function le(){return A5}var E5=function(){return{prefix:null,iconName:null,rest:[]}};function Br(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,c=n===void 0?e1:n,s=fc[c][t],r=hc[c][t]||hc[c][s],a=t in T4.styles?t:null;return r||a||null}var S9=(Xs={},M1(Xs,e1,Object.keys(dc[e1])),M1(Xs,u1,Object.keys(dc[u1])),Xs);function $r(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=n.skipLookups,s=c===void 0?!1:c,r=(e={},M1(e,e1,"".concat(r2.cssPrefix,"-").concat(e1)),M1(e,u1,"".concat(r2.cssPrefix,"-").concat(u1)),e),a=null,i=e1;(t.includes(r[e1])||t.some(function(l){return S9[e1].includes(l)}))&&(i=e1),(t.includes(r[u1])||t.some(function(l){return S9[u1].includes(l)}))&&(i=u1);var o=t.reduce(function(l,u){var f=GN(r2.cssPrefix,u);if(c6[u]?(u=UN[i].includes(u)?HN[i][u]:u,a=u,l.prefix=u):qN[i].indexOf(u)>-1?(a=u,l.prefix=Br(u,{family:i})):f?l.iconName=f:u!==r2.replacementClass&&u!==r[e1]&&u!==r[u1]&&l.rest.push(u),!s&&l.prefix&&l.iconName){var h=a==="fa"?um(l.iconName):{},d=Ye(l.prefix,l.iconName);h.prefix&&(a=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!c6.far&&c6.fas&&!r2.autoFetchSvg&&(l.prefix="fas")}return l},E5());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===u1&&(c6.fass||r2.autoFetchSvg)&&(o.prefix="fass",o.iconName=Ye(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=le()||"fas"),o}var QN=function(){function t(){iN(this,t),this.definitions={}}return oN(t,[{key:"add",value:function(){for(var n=this,c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];var a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(i){n.definitions[i]=e2(e2({},n.definitions[i]||{}),a[i]),J8(i,a[i]);var o=dc[e1][i];o&&J8(o,a[i]),lm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,c){var s=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(s).map(function(r){var a=s[r],i=a.prefix,o=a.iconName,l=a.icon,u=l[2];n[i]||(n[i]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[i][f]=l)}),n[i][o]=l}),n}}]),t}(),x9=[],s6={},d6={},YN=Object.keys(d6);function XN(t,e){var n=e.mixoutsTo;return x9=t,s6={},Object.keys(d6).forEach(function(c){YN.indexOf(c)===-1&&delete d6[c]}),x9.forEach(function(c){var s=c.mixout?c.mixout():{};if(Object.keys(s).forEach(function(a){typeof s[a]=="function"&&(n[a]=s[a]),R0(s[a])==="object"&&Object.keys(s[a]).forEach(function(i){n[a]||(n[a]={}),n[a][i]=s[a][i]})}),c.hooks){var r=c.hooks();Object.keys(r).forEach(function(a){s6[a]||(s6[a]=[]),s6[a].push(r[a])})}c.provides&&c.provides(d6)}),n}function Z8(t,e){for(var n=arguments.length,c=new Array(n>2?n-2:0),s=2;s<n;s++)c[s-2]=arguments[s];var r=s6[t]||[];return r.forEach(function(a){e=a.apply(null,[e].concat(c))}),e}function lt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),c=1;c<e;c++)n[c-1]=arguments[c];var s=s6[t]||[];s.forEach(function(r){r.apply(null,n)})}function w3(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return d6[t]?d6[t].apply(null,e):void 0}function ei(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||le();if(!!e)return e=Ye(n,e)||e,w9(fm.definitions,n,e)||w9(T4.styles,n,e)}var fm=new QN,JN=function(){r2.autoReplaceSvg=!1,r2.observeMutations=!1,lt("noAuto")},ZN={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I3?(lt("beforeI2svg",e),w3("pseudoElements2svg",e),w3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;r2.autoReplaceSvg===!1&&(r2.autoReplaceSvg=!0),r2.observeMutations=!0,RN(function(){tk({autoReplaceSvgRoot:n}),lt("watch",e)})}},ek={icon:function(e){if(e===null)return null;if(R0(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ye(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],c=Br(e[0]);return{prefix:c,iconName:Ye(c,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(r2.cssPrefix,"-"))>-1||e.match(VN))){var s=$r(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||le(),iconName:Ye(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var r=le();return{prefix:r,iconName:Ye(r,e)||e}}}},H4={noAuto:JN,config:r2,dom:ZN,parse:ek,library:fm,findIconDefinition:ei,toHtml:Xc},tk=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,c=n===void 0?t1:n;(Object.keys(T4.styles).length>0||r2.autoFetchSvg)&&I3&&r2.autoReplaceSvg&&H4.dom.i2svg({node:c})};function Ur(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(c){return Xc(c)})}}),Object.defineProperty(t,"node",{get:function(){if(!!I3){var c=t1.createElement("div");return c.innerHTML=t.html,c.children}}}),t}function nk(t){var e=t.children,n=t.main,c=t.mask,s=t.attributes,r=t.styles,a=t.transform;if(I5(a)&&n.found&&!c.found){var i=n.width,o=n.height,l={x:i/o/2,y:.5};s.style=Fr(e2(e2({},r),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function ck(t){var e=t.prefix,n=t.iconName,c=t.children,s=t.attributes,r=t.symbol,a=r===!0?"".concat(e,"-").concat(r2.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:e2(e2({},s),{},{id:a}),children:c}]}]}function P5(t){var e=t.icons,n=e.main,c=e.mask,s=t.prefix,r=t.iconName,a=t.transform,i=t.symbol,o=t.title,l=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,d=h===void 0?!1:h,v=c.found?c:n,g=v.width,H=v.height,p=s==="fak",V=[r2.replacementClass,r?"".concat(r2.cssPrefix,"-").concat(r):""].filter(function(A){return f.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(f.classes).join(" "),z={children:[],attributes:e2(e2({},f.attributes),{},{"data-prefix":s,"data-icon":r,class:V,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(H)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/H*16*.0625,"em")}:{};d&&(z.attributes[ot]=""),o&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(u||vc())},children:[o]}),delete z.attributes.title);var b=e2(e2({},z),{},{prefix:s,iconName:r,main:n,mask:c,maskId:l,transform:a,symbol:i,styles:e2(e2({},_),f.styles)}),x=c.found&&n.found?w3("generateAbstractMask",b)||{children:[],attributes:{}}:w3("generateAbstractIcon",b)||{children:[],attributes:{}},L=x.children,I=x.attributes;return b.children=L,b.attributes=I,i?ck(b):nk(b)}function _9(t){var e=t.content,n=t.width,c=t.height,s=t.transform,r=t.title,a=t.extra,i=t.watchable,o=i===void 0?!1:i,l=e2(e2(e2({},a.attributes),r?{title:r}:{}),{},{class:a.classes.join(" ")});o&&(l[ot]="");var u=e2({},a.styles);I5(s)&&(u.transform=TN({transform:s,startCentered:!0,width:n,height:c}),u["-webkit-transform"]=u.transform);var f=Fr(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function sk(t){var e=t.content,n=t.title,c=t.extra,s=e2(e2(e2({},c.attributes),n?{title:n}:{}),{},{class:c.classes.join(" ")}),r=Fr(c.styles);r.length>0&&(s.style=r);var a=[];return a.push({tag:"span",attributes:s,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var t8=T4.styles;function ti(t){var e=t[0],n=t[1],c=t.slice(4),s=L5(c,1),r=s[0],a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(r2.cssPrefix,"-").concat(Qe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(r2.cssPrefix,"-").concat(Qe.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(r2.cssPrefix,"-").concat(Qe.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}var rk={found:!1,width:512,height:512};function ak(t,e){!Xd&&!r2.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ni(t,e){var n=e;return e==="fa"&&r2.styleDefault!==null&&(e=le()),new Promise(function(c,s){if(w3("missingIconAbstract"),n==="fa"){var r=um(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&t8[e]&&t8[e][t]){var a=t8[e][t];return c(ti(a))}ak(t,e),c(e2(e2({},rk),{},{icon:r2.showMissingIcons&&t?w3("missingIconAbstract")||{}:{}}))})}var N9=function(){},ci=r2.measurePerformance&&Us&&Us.mark&&Us.measure?Us:{mark:N9,measure:N9},bn='FA "6.2.0"',ik=function(e){return ci.mark("".concat(bn," ").concat(e," begins")),function(){return hm(e)}},hm=function(e){ci.mark("".concat(bn," ").concat(e," ends")),ci.measure("".concat(bn," ").concat(e),"".concat(bn," ").concat(e," begins"),"".concat(bn," ").concat(e," ends"))},D5={begin:ik,end:hm},H0=function(){};function k9(t){var e=t.getAttribute?t.getAttribute(ot):null;return typeof e=="string"}function ok(t){var e=t.getAttribute?t.getAttribute(x5):null,n=t.getAttribute?t.getAttribute(_5):null;return e&&n}function lk(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(r2.replacementClass)}function uk(){if(r2.autoReplaceSvg===!0)return V0.replace;var t=V0[r2.autoReplaceSvg];return t||V0.replace}function fk(t){return t1.createElementNS("http://www.w3.org/2000/svg",t)}function hk(t){return t1.createElement(t)}function dm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,c=n===void 0?t.tag==="svg"?fk:hk:n;if(typeof t=="string")return t1.createTextNode(t);var s=c(t.tag);Object.keys(t.attributes||[]).forEach(function(a){s.setAttribute(a,t.attributes[a])});var r=t.children||[];return r.forEach(function(a){s.appendChild(dm(a,{ceFn:c}))}),s}function dk(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var V0={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(dm(s),n)}),n.getAttribute(ot)===null&&r2.keepOriginalSource){var c=t1.createComment(dk(n));n.parentNode.replaceChild(c,n)}else n.remove()},nest:function(e){var n=e[0],c=e[1];if(~k5(n).indexOf(r2.replacementClass))return V0.replace(e);var s=new RegExp("".concat(r2.cssPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){var r=c[0].attributes.class.split(" ").reduce(function(i,o){return o===r2.replacementClass||o.match(s)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});c[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var a=c.map(function(i){return Xc(i)}).join(`
`);n.setAttribute(ot,""),n.innerHTML=a}};function I9(t){t()}function mm(t,e){var n=typeof e=="function"?e:H0;if(t.length===0)n();else{var c=I9;r2.mutateApproach===gN&&(c=oe.requestAnimationFrame||I9),c(function(){var s=uk(),r=D5.begin("mutate");t.map(s),r(),n()})}}var R5=!1;function vm(){R5=!0}function si(){R5=!1}var F0=null;function A9(t){if(!!C9&&!!r2.observeMutations){var e=t.treeCallback,n=e===void 0?H0:e,c=t.nodeCallback,s=c===void 0?H0:c,r=t.pseudoElementsCallback,a=r===void 0?H0:r,i=t.observeMutationsRoot,o=i===void 0?t1:i;F0=new C9(function(l){if(!R5){var u=le();q6(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!k9(f.addedNodes[0])&&(r2.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&r2.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&k9(f.target)&&~bN.indexOf(f.attributeName))if(f.attributeName==="class"&&ok(f.target)){var h=$r(k5(f.target)),d=h.prefix,v=h.iconName;f.target.setAttribute(x5,d||u),v&&f.target.setAttribute(_5,v)}else lk(f.target)&&s(f.target)})}}),I3&&F0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mk(){!F0||F0.disconnect()}function vk(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(c,s){var r=s.split(":"),a=r[0],i=r.slice(1);return a&&i.length>0&&(c[a]=i.join(":").trim()),c},{})),n}function pk(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),c=t.innerText!==void 0?t.innerText.trim():"",s=$r(k5(t));return s.prefix||(s.prefix=le()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&c.length>0&&(s.iconName=WN(s.prefix,t.innerText)||T5(s.prefix,X8(t.innerText))),!s.iconName&&r2.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function gk(t){var e=q6(t.attributes).reduce(function(s,r){return s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s},{}),n=t.getAttribute("title"),c=t.getAttribute("data-fa-title-id");return r2.autoA11y&&(n?e["aria-labelledby"]="".concat(r2.replacementClass,"-title-").concat(c||vc()):(e["aria-hidden"]="true",e.focusable="false")),e}function yk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:W4,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function T9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pk(t),c=n.iconName,s=n.prefix,r=n.rest,a=gk(t),i=Z8("parseNodeAttributes",{},t),o=e.styleParser?vk(t):[];return e2({iconName:c,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:W4,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:a}},i)}var Hk=T4.styles;function pm(t){var e=r2.autoReplaceSvg==="nest"?T9(t,{styleParser:!1}):T9(t);return~e.extra.classes.indexOf(Jd)?w3("generateLayersText",t,e):w3("generateSvgReplacementMutation",t,e)}var ue=new Set;N5.map(function(t){ue.add("fa-".concat(t))});Object.keys(fc[e1]).map(ue.add.bind(ue));Object.keys(fc[u1]).map(ue.add.bind(ue));ue=Qc(ue);function E9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I3)return Promise.resolve();var n=t1.documentElement.classList,c=function(f){return n.add("".concat(M9,"-").concat(f))},s=function(f){return n.remove("".concat(M9,"-").concat(f))},r=r2.autoFetchSvg?ue:N5.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Hk));r.includes("fa")||r.push("fa");var a=[".".concat(Jd,":not([").concat(ot,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(ot,"])")})).join(", ");if(a.length===0)return Promise.resolve();var i=[];try{i=q6(t.querySelectorAll(a))}catch{}if(i.length>0)c("pending"),s("complete");else return Promise.resolve();var o=D5.begin("onTree"),l=i.reduce(function(u,f){try{var h=pm(f);h&&u.push(h)}catch(d){Xd||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){mm(h,function(){c("active"),c("complete"),s("pending"),typeof e=="function"&&e(),o(),u()})}).catch(function(h){o(),f(h)})})}function Vk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pm(t).then(function(n){n&&mm([n],e)})}function zk(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(e||{}).icon?e:ei(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:ei(s||{})),t(c,e2(e2({},n),{},{mask:s}))}}var Ck=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=n.transform,s=c===void 0?W4:c,r=n.symbol,a=r===void 0?!1:r,i=n.mask,o=i===void 0?null:i,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,d=n.titleId,v=d===void 0?null:d,g=n.classes,H=g===void 0?[]:g,p=n.attributes,V=p===void 0?{}:p,z=n.styles,_=z===void 0?{}:z;if(!!e){var b=e.prefix,x=e.iconName,L=e.icon;return Ur(e2({type:"icon"},e),function(){return lt("beforeDOMElementCreation",{iconDefinition:e,params:n}),r2.autoA11y&&(h?V["aria-labelledby"]="".concat(r2.replacementClass,"-title-").concat(v||vc()):(V["aria-hidden"]="true",V.focusable="false")),P5({icons:{main:ti(L),mask:o?ti(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:x,transform:e2(e2({},W4),s),symbol:a,title:h,maskId:u,titleId:v,extra:{attributes:V,styles:_,classes:H}})})}},Mk={mixout:function(){return{icon:zk(Ck)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=E9,n.nodeCallback=Vk,n}}},provides:function(e){e.i2svg=function(n){var c=n.node,s=c===void 0?t1:c,r=n.callback,a=r===void 0?function(){}:r;return E9(s,a)},e.generateSvgReplacementMutation=function(n,c){var s=c.iconName,r=c.title,a=c.titleId,i=c.prefix,o=c.transform,l=c.symbol,u=c.mask,f=c.maskId,h=c.extra;return new Promise(function(d,v){Promise.all([ni(s,i),u.iconName?ni(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var H=L5(g,2),p=H[0],V=H[1];d([n,P5({icons:{main:p,mask:V},prefix:i,iconName:s,transform:o,symbol:l,maskId:f,title:r,titleId:a,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var c=n.children,s=n.attributes,r=n.main,a=n.transform,i=n.styles,o=Fr(i);o.length>0&&(s.style=o);var l;return I5(a)&&(l=w3("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),c.push(l||r.icon),{children:c,attributes:s}}}},bk={mixout:function(){return{layer:function(n){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=c.classes,r=s===void 0?[]:s;return Ur({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:n,params:c});var a=[];return n(function(i){Array.isArray(i)?i.map(function(o){a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(r2.cssPrefix,"-layers")].concat(Qc(r)).join(" ")},children:a}]})}}}},wk={mixout:function(){return{counter:function(n){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=c.title,r=s===void 0?null:s,a=c.classes,i=a===void 0?[]:a,o=c.attributes,l=o===void 0?{}:o,u=c.styles,f=u===void 0?{}:u;return Ur({type:"counter",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:c}),sk({content:n.toString(),title:r,extra:{attributes:l,styles:f,classes:["".concat(r2.cssPrefix,"-layers-counter")].concat(Qc(i))}})})}}}},Lk={mixout:function(){return{text:function(n){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=c.transform,r=s===void 0?W4:s,a=c.title,i=a===void 0?null:a,o=c.classes,l=o===void 0?[]:o,u=c.attributes,f=u===void 0?{}:u,h=c.styles,d=h===void 0?{}:h;return Ur({type:"text",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:c}),_9({content:n,transform:e2(e2({},W4),r),title:i,extra:{attributes:f,styles:d,classes:["".concat(r2.cssPrefix,"-layers-text")].concat(Qc(l))}})})}}},provides:function(e){e.generateLayersText=function(n,c){var s=c.title,r=c.transform,a=c.extra,i=null,o=null;if(Kd){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();i=u.width/l,o=u.height/l}return r2.autoA11y&&!s&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,_9({content:n.innerHTML,width:i,height:o,transform:r,title:s,extra:a,watchable:!0})])}}},Sk=new RegExp('"',"ug"),P9=[1105920,1112319];function xk(t){var e=t.replace(Sk,""),n=BN(e,0),c=n>=P9[0]&&n<=P9[1],s=e.length===2?e[0]===e[1]:!1;return{value:X8(s?e[0]:e),isSecondary:c||s}}function D9(t,e){var n="".concat(pN).concat(e.replace(":","-"));return new Promise(function(c,s){if(t.getAttribute(n)!==null)return c();var r=q6(t.children),a=r.filter(function(L){return L.getAttribute(Y8)===e})[0],i=oe.getComputedStyle(t,e),o=i.getPropertyValue("font-family").match(zN),l=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(a&&!o)return t.removeChild(a),c();if(o&&u!=="none"&&u!==""){var f=i.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?u1:e1,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?hc[h][o[2].toLowerCase()]:CN[h][l],v=xk(f),g=v.value,H=v.isSecondary,p=o[0].startsWith("FontAwesome"),V=T5(d,g),z=V;if(p){var _=KN(g);_.iconName&&_.prefix&&(V=_.iconName,d=_.prefix)}if(V&&!H&&(!a||a.getAttribute(x5)!==d||a.getAttribute(_5)!==z)){t.setAttribute(n,z),a&&t.removeChild(a);var b=yk(),x=b.extra;x.attributes[Y8]=e,ni(V,d).then(function(L){var I=P5(e2(e2({},b),{},{icons:{main:L,mask:E5()},prefix:d,iconName:z,extra:x,watchable:!0})),A=t1.createElement("svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=I.map(function(O){return Xc(O)}).join(`
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jz=function(t){const e=[];let n=0;for(let c=0;c<t.length;c++){let s=t.charCodeAt(c);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&c+1<t.length&&(t.charCodeAt(c+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++c)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mt2=function(t){const e=[];let n=0,c=0;for(;n<t.length;){const s=t[n++];if(s<128)e[c++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[c++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],a=t[n++],i=t[n++],o=((s&7)<<18|(r&63)<<12|(a&63)<<6|i&63)-65536;e[c++]=String.fromCharCode(55296+(o>>10)),e[c++]=String.fromCharCode(56320+(o&1023))}else{const r=t[n++],a=t[n++];e[c++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Gz={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,c=[];for(let s=0;s<t.length;s+=3){const r=t[s],a=s+1<t.length,i=a?t[s+1]:0,o=s+2<t.length,l=o?t[s+2]:0,u=r>>2,f=(r&3)<<4|i>>4;let h=(i&15)<<2|l>>6,d=l&63;o||(d=64,a||(h=64)),c.push(n[u],n[f],n[h],n[d])}return c.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jz(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mt2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,c=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],i=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||i==null||l==null||f==null)throw Error();const h=r<<2|i>>4;if(c.push(h),l!==64){const d=i<<4&240|l>>2;if(c.push(d),f!==64){const v=l<<6&192|f;c.push(v)}}}return c},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bt2=function(t){const e=jz(t);return Gz.encodeByteArray(e,!0)},$0=function(t){return bt2(t).replace(/\./g,"")},wt2=function(t){try{return Gz.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function U0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lt2(n)||(t[n]=U0(t[n],e[n]));return t}function Lt2(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,c)=>{n?this.reject(n):this.resolve(c),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,c))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},c=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${c}`,aud:c,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),i="";return[$0(JSON.stringify(n)),$0(JSON.stringify(a)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _t2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b1())}function Nt2(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kt2(){return typeof self=="object"&&self.self===self}function It2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function At2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tt2(){const t=b1();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Et2(){return!Nt2()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wz(){return typeof indexedDB=="object"}function Pt2(){return new Promise((t,e)=>{try{let n=!0;const c="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(c);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(c),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt2="FirebaseError";class o3 extends Error{constructor(e,n,c){super(n),this.code=e,this.customData=c,this.name=Dt2,Object.setPrototypeOf(this,o3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nt.prototype.create)}}class Nt{constructor(e,n,c){this.service=e,this.serviceName=n,this.errors=c}create(e,...n){const c=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?Rt2(r,c):"Error",i=`${this.serviceName}: ${a} (${s}).`;return new o3(s,i,c)}}function Rt2(t,e){return t.replace(Ot2,(n,c)=>{const s=e[c];return s!=null?String(s):`<${c}?>`})}const Ot2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U9(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ft2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function q0(t,e){if(t===e)return!0;const n=Object.keys(t),c=Object.keys(e);for(const s of n){if(!c.includes(s))return!1;const r=t[s],a=e[s];if(q9(r)&&q9(a)){if(!q0(r,a))return!1}else if(r!==a)return!1}for(const s of c)if(!n.includes(s))return!1;return!0}function q9(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){const e=[];for(const[n,c]of Object.entries(t))Array.isArray(c)?c.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(c));return e.length?"&"+e.join("&"):""}function Ln(t){const e={};return t.replace(/^\?/,"").split("&").forEach(c=>{if(c){const[s,r]=c.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Sn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kz(t,e){const n=new Bt2(t,e);return n.subscribe.bind(n)}class Bt2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(c=>{this.error(c)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,c){let s;if(e===void 0&&n===void 0&&c===void 0)throw new Error("Missing Observer.");$t2(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:c},s.next===void 0&&(s.next=c8),s.error===void 0&&(s.error=c8),s.complete===void 0&&(s.complete=c8);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(c){typeof console<"u"&&console.error&&console.error(c)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $t2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function c8(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){return t&&t._delegate?t._delegate:t}class L3{constructor(e,n,c){this.name=e,this.instanceFactory=n,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const c=new St2;if(this.instancesDeferred.set(n,c),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&c.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const c=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jt2(e))try{this.getOrInitializeService({instanceIdentifier:Oe})}catch{}for(const[n,c]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});c.resolve(r)}catch{}}}}clearInstance(e=Oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oe){return this.instances.has(e)}getOptions(e=Oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,c=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:c,options:n});for(const[r,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);c===i&&a.resolve(s)}return s}onInit(e,n){var c;const s=this.normalizeInstanceIdentifier(n),r=(c=this.onInitCallbacks.get(s))!==null&&c!==void 0?c:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const c=this.onInitCallbacks.get(n);if(!!c)for(const s of c)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let c=this.instances.get(e);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:qt2(e),options:n}),this.instances.set(e,c),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(c,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,c)}catch{}return c||null}normalizeInstanceIdentifier(e=Oe){return this.component?this.component.multipleInstances?e:Oe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qt2(t){return t===Oe?void 0:t}function jt2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ut2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=[];var A2;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A2||(A2={}));const Qz={debug:A2.DEBUG,verbose:A2.VERBOSE,info:A2.INFO,warn:A2.WARN,error:A2.ERROR,silent:A2.SILENT},Wt2=A2.INFO,Kt2={[A2.DEBUG]:"log",[A2.VERBOSE]:"log",[A2.INFO]:"info",[A2.WARN]:"warn",[A2.ERROR]:"error"},Qt2=(t,e,...n)=>{if(e<t.logLevel)return;const c=new Date().toISOString(),s=Kt2[e];if(s)console[s](`[${c}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=Wt2,this._logHandler=Qt2,this._userLogHandler=null,Ao.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qz[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A2.DEBUG,...e),this._logHandler(this,A2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A2.VERBOSE,...e),this._logHandler(this,A2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A2.INFO,...e),this._logHandler(this,A2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A2.WARN,...e),this._logHandler(this,A2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A2.ERROR,...e),this._logHandler(this,A2.ERROR,...e)}}function Yt2(t){Ao.forEach(e=>{e.setLogLevel(t)})}function Xt2(t,e){for(const n of Ao){let c=null;e&&e.level&&(c=Qz[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,r,...a)=>{const i=a.map(o=>{if(o==null)return null;if(typeof o=="string")return o;if(typeof o=="number"||typeof o=="boolean")return o.toString();if(o instanceof Error)return o.message;try{return JSON.stringify(o)}catch{return null}}).filter(o=>o).join(" ");r>=(c!=null?c:s.logLevel)&&t({level:A2[r].toLowerCase(),message:i,args:a,type:s.name})}}}const Jt2=(t,e)=>e.some(n=>t instanceof n);let j9,G9;function Zt2(){return j9||(j9=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e62(){return G9||(G9=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yz=new WeakMap,ai=new WeakMap,Xz=new WeakMap,s8=new WeakMap,To=new WeakMap;function t62(t){const e=new Promise((n,c)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{n(se(t.result)),s()},a=()=>{c(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Yz.set(n,t)}).catch(()=>{}),To.set(e,t),e}function n62(t){if(ai.has(t))return;const e=new Promise((n,c)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{n(),s()},a=()=>{c(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});ai.set(t,e)}let ii={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ai.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xz.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return se(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c62(t){ii=t(ii)}function s62(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const c=t.call(r8(this),e,...n);return Xz.set(c,e.sort?e.sort():[e]),se(c)}:e62().includes(t)?function(...e){return t.apply(r8(this),e),se(Yz.get(this))}:function(...e){return se(t.apply(r8(this),e))}}function r62(t){return typeof t=="function"?s62(t):(t instanceof IDBTransaction&&n62(t),Jt2(t,Zt2())?new Proxy(t,ii):t)}function se(t){if(t instanceof IDBRequest)return t62(t);if(s8.has(t))return s8.get(t);const e=r62(t);return e!==t&&(s8.set(t,e),To.set(e,t)),e}const r8=t=>To.get(t);function a62(t,e,{blocked:n,upgrade:c,blocking:s,terminated:r}={}){const a=indexedDB.open(t,e),i=se(a);return c&&a.addEventListener("upgradeneeded",o=>{c(se(a.result),o.oldVersion,o.newVersion,se(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),i.then(o=>{r&&o.addEventListener("close",()=>r()),s&&o.addEventListener("versionchange",()=>s())}).catch(()=>{}),i}const i62=["get","getKey","getAll","getAllKeys","count"],o62=["put","add","delete","clear"],a8=new Map;function W9(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(a8.get(e))return a8.get(e);const n=e.replace(/FromIndex$/,""),c=e!==n,s=o62.includes(n);if(!(n in(c?IDBIndex:IDBObjectStore).prototype)||!(s||i62.includes(n)))return;const r=async function(a,...i){const o=this.transaction(a,s?"readwrite":"readonly");let l=o.store;return c&&(l=l.index(i.shift())),(await Promise.all([l[n](...i),s&&o.done]))[0]};return a8.set(e,r),r}c62(t=>({...t,get:(e,n,c)=>W9(e,n)||t.get(e,n,c),has:(e,n)=>!!W9(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l62{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u62(n)){const c=n.getImmediate();return`${c.library}/${c.version}`}else return null}).filter(n=>n).join(" ")}}function u62(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",K9="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new aa("@firebase/app"),f62="@firebase/app-compat",h62="@firebase/analytics-compat",d62="@firebase/analytics",m62="@firebase/app-check-compat",v62="@firebase/app-check",p62="@firebase/auth",g62="@firebase/auth-compat",y62="@firebase/database",H62="@firebase/database-compat",V62="@firebase/functions",z62="@firebase/functions-compat",C62="@firebase/installations",M62="@firebase/installations-compat",b62="@firebase/messaging",w62="@firebase/messaging-compat",L62="@firebase/performance",S62="@firebase/performance-compat",x62="@firebase/remote-config",_62="@firebase/remote-config-compat",N62="@firebase/storage",k62="@firebase/storage-compat",I62="@firebase/firestore",A62="@firebase/firestore-compat",T62="firebase",E62="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="[DEFAULT]",P62={[oi]:"fire-core",[f62]:"fire-core-compat",[d62]:"fire-analytics",[h62]:"fire-analytics-compat",[v62]:"fire-app-check",[m62]:"fire-app-check-compat",[p62]:"fire-auth",[g62]:"fire-auth-compat",[y62]:"fire-rtdb",[H62]:"fire-rtdb-compat",[V62]:"fire-fn",[z62]:"fire-fn-compat",[C62]:"fire-iid",[M62]:"fire-iid-compat",[b62]:"fire-fcm",[w62]:"fire-fcm-compat",[L62]:"fire-perf",[S62]:"fire-perf-compat",[x62]:"fire-rc",[_62]:"fire-rc-compat",[N62]:"fire-gcs",[k62]:"fire-gcs-compat",[I62]:"fire-fst",[A62]:"fire-fst-compat","fire-js":"fire-js",[T62]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Map,pc=new Map;function j0(t,e){try{t.container.addComponent(e)}catch(n){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jz(t,e){t.container.addOrOverwriteComponent(e)}function he(t){const e=t.name;if(pc.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;pc.set(e,t);for(const n of fe.values())j0(n,t);return!0}function ia(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function D62(t,e,n=ft){ia(t,e).clearInstance(n)}function R62(){pc.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O62={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new Nt("app","Firebase",O62);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F62{constructor(e,n,c){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new L3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=E62;function Zz(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ft,automaticDataCollectionEnabled:!1},e),c=n.name;if(typeof c!="string"||!c)throw de.create("bad-app-name",{appName:String(c)});const s=fe.get(c);if(s){if(q0(t,s.options)&&q0(n,s.config))return s;throw de.create("duplicate-app",{appName:c})}const r=new Gt2(c);for(const i of pc.values())r.addComponent(i);const a=new F62(t,n,r);return fe.set(c,a),a}function eC(t=ft){const e=fe.get(t);if(!e)throw de.create("no-app",{appName:t});return e}function B62(){return Array.from(fe.values())}async function tC(t){const e=t.name;fe.has(e)&&(fe.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function X4(t,e,n){var c;let s=(c=P62[t])!==null&&c!==void 0?c:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const i=[`Unable to register library "${s}" with version "${e}":`];r&&i.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&i.push("and"),a&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(i.join(" "));return}he(new L3(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function nC(t,e){if(t!==null&&typeof t!="function")throw de.create("invalid-log-argument");Xt2(t,e)}function cC(t){Yt2(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $62="firebase-heartbeat-database",U62=1,gc="firebase-heartbeat-store";let i8=null;function sC(){return i8||(i8=a62($62,U62,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gc)}}}).catch(t=>{throw de.create("idb-open",{originalErrorMessage:t.message})})),i8}async function q62(t){var e;try{return(await sC()).transaction(gc).objectStore(gc).get(rC(t))}catch(n){if(n instanceof o3)ut.warn(n.message);else{const c=de.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ut.warn(c.message)}}}async function Q9(t,e){var n;try{const s=(await sC()).transaction(gc,"readwrite");return await s.objectStore(gc).put(e,rC(t)),s.done}catch(c){if(c instanceof o3)ut.warn(c.message);else{const s=de.create("idb-set",{originalErrorMessage:(n=c)===null||n===void 0?void 0:n.message});ut.warn(s.message)}}}function rC(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j62=1024,G62=30*24*60*60*1e3;class W62{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q62(n),this._heartbeatsCachePromise=this._storage.read().then(c=>(this._heartbeatsCache=c,c))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Y9();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(s=>s.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=G62}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Y9(),{heartbeatsToSend:n,unsentEntries:c}=K62(this._heartbeatsCache.heartbeats),s=$0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Y9(){return new Date().toISOString().substring(0,10)}function K62(t,e=j62){const n=[];let c=t.slice();for(const s of t){const r=n.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),X9(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),X9(n)>e){n.pop();break}c=c.slice(1)}return{heartbeatsToSend:n,unsentEntries:c}}class Q62{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wz()?Pt2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await q62(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Q9(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Q9(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function X9(t){return $0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y62(t){he(new L3("platform-logger",e=>new l62(e),"PRIVATE")),he(new L3("heartbeat",e=>new W62(e),"PRIVATE")),X4(oi,K9,t),X4(oi,K9,"esm2017"),X4("fire-js","")}Y62("");const X62=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:kt,_DEFAULT_ENTRY_NAME:ft,_addComponent:j0,_addOrOverwriteComponent:Jz,_apps:fe,_clearComponents:R62,_components:pc,_getProvider:ia,_registerComponent:he,_removeServiceInstance:D62,deleteApp:tC,getApp:eC,getApps:B62,initializeApp:Zz,onLog:nC,registerVersion:X4,setLogLevel:cC,FirebaseError:o3},Symbol.toStringTag,{value:"Module"}));function Eo(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,c=Object.getOwnPropertySymbols(t);s<c.length;s++)e.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(t,c[s])&&(n[c[s]]=t[c[s]]);return n}function aC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J62=aC,iC=new Nt("auth","Firebase",aC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J9=new aa("@firebase/auth");function z0(t,...e){J9.logLevel<=A2.ERROR&&J9.error(`Auth (${kt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(t,...e){throw Po(t,...e)}function J4(t,...e){return Po(t,...e)}function oC(t,e,n){const c=Object.assign(Object.assign({},J62()),{[e]:n});return new Nt("auth","Firebase",c).create(e,{appName:t.name})}function Z62(t,e,n){const c=n;if(!(e instanceof c))throw c.name!==e.constructor.name&&x4(t,"argument-error"),oC(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Po(t,...e){if(typeof t!="string"){const n=e[0],c=[...e.slice(1)];return c[0]&&(c[0].appName=t.name),t._errorFactory.create(n,...c)}return iC.create(t,...e)}function p2(t,e,...n){if(!t)throw Po(e,...n)}function v3(t){const e="INTERNAL ASSERTION FAILED: "+t;throw z0(e),new Error(e)}function S3(t,e){t||v3(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z9=new Map;function p3(t){S3(t instanceof Function,"Expected a class definition");let e=Z9.get(t);return e?(S3(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Z9.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en2(t,e){const n=ia(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(q0(r,e!=null?e:{}))return s;x4(s,"already-initialized")}return n.initialize({options:e})}function tn2(t,e){const n=(e==null?void 0:e.persistence)||[],c=(Array.isArray(n)?n:[n]).map(p3);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(c,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nn2(){return eu()==="http:"||eu()==="https:"}function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nn2()||It2()||"connection"in navigator)?navigator.onLine:!0}function sn2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.shortDelay=e,this.longDelay=n,S3(n>e,"Short delay should be less than long delay!"),this.isMobile=_t2()||At2()}get(){return cn2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e){S3(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{static initialize(e,n,c){this.fetchImpl=e,n&&(this.headersImpl=n),c&&(this.responseImpl=c)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;v3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;v3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;v3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an2=new ss(3e4,6e4);function rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function as(t,e,n,c,s={}){return uC(t,s,async()=>{let r={},a={};c&&(e==="GET"?a=c:r={body:JSON.stringify(c)});const i=cs(Object.assign({key:t.config.apiKey},a)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),lC.fetch()(fC(t,t.config.apiHost,n,i),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},r))})}async function uC(t,e,n){t._canInitEmulator=!1;const c=Object.assign(Object.assign({},rn2),e);try{const s=new in2(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Js(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const i=r.ok?a.errorMessage:a.error.message,[o,l]=i.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(t,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw Js(t,"email-already-in-use",a);if(o==="USER_DISABLED")throw Js(t,"user-disabled",a);const u=c[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw oC(t,u,l);x4(t,u)}}catch(s){if(s instanceof o3)throw s;x4(t,"network-request-failed")}}async function is(t,e,n,c,s={}){const r=await as(t,e,n,c,s);return"mfaPendingCredential"in r&&x4(t,"multi-factor-auth-required",{_serverResponse:r}),r}function fC(t,e,n,c){const s=`${e}${n}?${c}`;return t.config.emulator?Do(t.config,s):`${t.config.apiScheme}://${s}`}class in2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,c)=>{this.timer=setTimeout(()=>c(J4(this.auth,"network-request-failed")),an2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Js(t,e,n){const c={appName:t.name};n.email&&(c.email=n.email),n.phoneNumber&&(c.phoneNumber=n.phoneNumber);const s=J4(t,e,c);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on2(t,e){return as(t,"POST","/v1/accounts:delete",e)}async function ln2(t,e){return as(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function un2(t,e=!1){const n=K2(t),c=await n.getIdToken(e),s=Ro(c);p2(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:c,authTime:$n(o8(s.auth_time)),issuedAtTime:$n(o8(s.iat)),expirationTime:$n(o8(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function o8(t){return Number(t)*1e3}function Ro(t){var e;const[n,c,s]=t.split(".");if(n===void 0||c===void 0||s===void 0)return z0("JWT malformed, contained fewer than 3 sections"),null;try{const r=wt2(c);return r?JSON.parse(r):(z0("Failed to decode base64 JWT payload"),null)}catch(r){return z0("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function fn2(t){const e=Ro(t);return p2(e,"internal-error"),p2(typeof e.exp<"u","internal-error"),p2(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t,e,n=!1){if(n)return e;try{return await e}catch(c){throw c instanceof o3&&hn2(c)&&t.auth.currentUser===t&&await t.auth.signOut(),c}}function hn2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const c=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),c}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(t){var e;const n=t.auth,c=await t.getIdToken(),s=await yc(t,ln2(n,{idToken:c}));p2(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?pn2(r.providerUserInfo):[],i=vn2(t.providerData,a),o=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(i!=null&&i.length),u=o?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new hC(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function mn2(t){const e=K2(t);await G0(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vn2(t,e){return[...t.filter(c=>!e.some(s=>s.providerId===c.providerId)),...e]}function pn2(t){return t.map(e=>{var{providerId:n}=e,c=Eo(e,["providerId"]);return{providerId:n,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn2(t,e){const n=await uC(t,{},async()=>{const c=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,a=fC(t,s,"/v1/token",`key=${r}`),i=await t._getAdditionalHeaders();return i["Content-Type"]="application/x-www-form-urlencoded",lC.fetch()(a,{method:"POST",headers:i,body:c})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p2(e.idToken,"internal-error"),p2(typeof e.idToken<"u","internal-error"),p2(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fn2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return p2(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:c,refreshToken:s,expiresIn:r}=await gn2(e,n);this.updateTokensAndExpiration(c,s,Number(r))}updateTokensAndExpiration(e,n,c){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+c*1e3}static fromJSON(e,n){const{refreshToken:c,accessToken:s,expirationTime:r}=n,a=new Hc;return c&&(p2(typeof c=="string","internal-error",{appName:e}),a.refreshToken=c),s&&(p2(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(p2(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hc,this.toJSON())}_performRefresh(){return v3("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(t,e){p2(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:n,auth:c,stsTokenManager:s}=e,r=Eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dn2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=c,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new hC(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await yc(this,this.stsTokenManager.getToken(this.auth,e));return p2(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return un2(this,e)}reload(){return mn2(this)}_assign(e){this!==e&&(p2(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){p2(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let c=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),c=!0),n&&await G0(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yc(this,on2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var c,s,r,a,i,o,l,u;const f=(c=n.displayName)!==null&&c!==void 0?c:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(a=n.photoURL)!==null&&a!==void 0?a:void 0,g=(i=n.tenantId)!==null&&i!==void 0?i:void 0,H=(o=n._redirectEventId)!==null&&o!==void 0?o:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:_,isAnonymous:b,providerData:x,stsTokenManager:L}=n;p2(z&&L,e,"internal-error");const I=Hc.fromJSON(this.name,L);p2(typeof z=="string",e,"internal-error"),U3(f,e.name),U3(h,e.name),p2(typeof _=="boolean",e,"internal-error"),p2(typeof b=="boolean",e,"internal-error"),U3(d,e.name),U3(v,e.name),U3(g,e.name),U3(H,e.name),U3(p,e.name),U3(V,e.name);const A=new rt({uid:z,auth:e,email:h,emailVerified:_,displayName:f,isAnonymous:b,photoURL:v,phoneNumber:d,tenantId:g,stsTokenManager:I,createdAt:p,lastLoginAt:V});return x&&Array.isArray(x)&&(A.providerData=x.map(O=>Object.assign({},O))),H&&(A._redirectEventId=H),A}static async _fromIdTokenResponse(e,n,c=!1){const s=new Hc;s.updateFromServerResponse(n);const r=new rt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:c});return await G0(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dC.type="NONE";const tu=dC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e,n){return`firebase:${t}:${e}:${n}`}class m6{constructor(e,n,c){this.persistence=e,this.auth=n,this.userKey=c;const{config:s,name:r}=this.auth;this.fullUserKey=C0(this.userKey,s.apiKey,r),this.fullPersistenceKey=C0("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,c="authUser"){if(!n.length)return new m6(p3(tu),e,c);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||p3(tu);const a=C0(c,e.config.apiKey,e.name);let i=null;for(const l of n)try{const u=await l._get(a);if(u){const f=rt._fromJSON(e,u);l!==r&&(i=f),r=l;break}}catch{}const o=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new m6(r,e,c):(r=o[0],i&&await r._set(a,i.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new m6(r,e,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yC(e))return"Blackberry";if(HC(e))return"Webos";if(Oo(e))return"Safari";if((e.includes("chrome/")||vC(e))&&!e.includes("edge/"))return"Chrome";if(gC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=t.match(n);if((c==null?void 0:c.length)===2)return c[1]}return"Other"}function mC(t=b1()){return/firefox\//i.test(t)}function Oo(t=b1()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vC(t=b1()){return/crios\//i.test(t)}function pC(t=b1()){return/iemobile/i.test(t)}function gC(t=b1()){return/android/i.test(t)}function yC(t=b1()){return/blackberry/i.test(t)}function HC(t=b1()){return/webos/i.test(t)}function oa(t=b1()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yn2(t=b1()){var e;return oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hn2(){return Tt2()&&document.documentMode===10}function VC(t=b1()){return oa(t)||gC(t)||HC(t)||yC(t)||/windows phone/i.test(t)||pC(t)}function Vn2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e=[]){let n;switch(t){case"Browser":n=nu(b1());break;case"Worker":n=`${nu(b1())}-${t}`;break;default:n=t}const c=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kt}/${c}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const c=r=>new Promise((a,i)=>{try{const o=e(r);a(o)}catch(o){i(o)}});c.onAbort=n,this.queue.push(c);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const c=[];try{for(const s of this.queue)await s(e),s.onAbort&&c.push(s.onAbort)}catch(s){c.reverse();for(const r of c)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn2{constructor(e,n,c){this.app=e,this.heartbeatServiceProvider=n,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cu(this),this.idTokenSubscription=new cu(this),this.beforeStateQueue=new zn2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=p3(n)),this._initializationPromise=this.queue(async()=>{var c,s;if(!this._deleted&&(this.persistenceManager=await m6.create(this,e),!this._deleted)){if(!((c=this._popupRedirectResolver)===null||c===void 0)&&c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const c=await this.assertedPersistence.getCurrentUser();let s=c,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===i)&&(o==null?void 0:o.user)&&(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return p2(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await G0(e)}catch(c){if(((n=c)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sn2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?K2(e):null;return n&&p2(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&p2(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(p3(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nt("auth","Firebase",e())}onAuthStateChanged(e,n,c){return this.registerStateListener(this.authStateSubscription,e,n,c)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,c){return this.registerStateListener(this.idTokenSubscription,e,n,c)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const c=await this.getOrInitRedirectPersistenceManager(n);return e===null?c.removeCurrentUser():c.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&p3(e)||this._popupRedirectResolver;p2(n,this,"argument-error"),this.redirectPersistenceManager=await m6.create(this,[p3(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,c;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,c,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return p2(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,c,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p2(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const c=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return c&&(n["X-Firebase-Client"]=c),n}}function os(t){return K2(t)}class cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kz(n=>this.observer=n)}get next(){return p2(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return v3("not implemented")}_getIdTokenResponse(e){return v3("not implemented")}_linkToIdToken(e,n){return v3("not implemented")}_getReauthenticationResolver(e){return v3("not implemented")}}async function Mn2(t,e){return as(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn2(t,e){return is(t,"POST","/v1/accounts:signInWithPassword",rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn2(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",rs(t,e))}async function Ln2(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Fo{constructor(e,n,c,s=null){super("password",c),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vc(e,n,"password")}static _fromEmailAndCode(e,n,c=null){return new Vc(e,n,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bn2(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wn2(e,{email:this._email,oobCode:this._password});default:x4(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Mn2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ln2(e,{idToken:n,email:this._email,oobCode:this._password});default:x4(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v6(t,e){return is(t,"POST","/v1/accounts:signInWithIdp",rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn2="http://localhost";class ht extends Fo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):x4("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:c,signInMethod:s}=n,r=Eo(n,["providerId","signInMethod"]);if(!c||!s)return null;const a=new ht(c,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return v6(e,n)}_linkToIdToken(e,n){const c=this.buildRequest();return c.idToken=n,v6(e,c)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,v6(e,n)}buildRequest(){const e={requestUri:Sn2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _n2(t){const e=Ln(Sn(t)).link,n=e?Ln(Sn(e)).deep_link_id:null,c=Ln(Sn(t)).deep_link_id;return(c?Ln(Sn(c)).link:null)||c||n||e||t}class Bo{constructor(e){var n,c,s,r,a,i;const o=Ln(Sn(e)),l=(n=o.apiKey)!==null&&n!==void 0?n:null,u=(c=o.oobCode)!==null&&c!==void 0?c:null,f=xn2((s=o.mode)!==null&&s!==void 0?s:null);p2(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(r=o.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=o.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(i=o.tenantId)!==null&&i!==void 0?i:null}static parseLink(e){const n=_n2(e);try{return new Bo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j6{constructor(){this.providerId=j6.PROVIDER_ID}static credential(e,n){return Vc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const c=Bo.parseLink(n);return p2(c,"argument-error"),Vc._fromEmailAndCode(e,c.code,c.tenantId)}}j6.PROVIDER_ID="password";j6.EMAIL_PASSWORD_SIGN_IN_METHOD="password";j6.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends $o{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3 extends ls{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:X3.PROVIDER_ID,signInMethod:X3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X3.credentialFromTaggedObject(e)}static credentialFromError(e){return X3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X3.credential(e.oauthAccessToken)}catch{return null}}}X3.FACEBOOK_SIGN_IN_METHOD="facebook.com";X3.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d3 extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ht._fromParams({providerId:d3.PROVIDER_ID,signInMethod:d3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return d3.credentialFromTaggedObject(e)}static credentialFromError(e){return d3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:c}=e;if(!n&&!c)return null;try{return d3.credential(n,c)}catch{return null}}}d3.GOOGLE_SIGN_IN_METHOD="google.com";d3.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3 extends ls{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:J3.PROVIDER_ID,signInMethod:J3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return J3.credentialFromTaggedObject(e)}static credentialFromError(e){return J3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return J3.credential(e.oauthAccessToken)}catch{return null}}}J3.GITHUB_SIGN_IN_METHOD="github.com";J3.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3 extends ls{constructor(){super("twitter.com")}static credential(e,n){return ht._fromParams({providerId:Z3.PROVIDER_ID,signInMethod:Z3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Z3.credentialFromTaggedObject(e)}static credentialFromError(e){return Z3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:c}=e;if(!n||!c)return null;try{return Z3.credential(n,c)}catch{return null}}}Z3.TWITTER_SIGN_IN_METHOD="twitter.com";Z3.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn2(t,e){return is(t,"POST","/v1/accounts:signUp",rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,c,s=!1){const r=await rt._fromIdTokenResponse(e,c,s),a=su(c);return new dt({user:r,providerId:a,_tokenResponse:c,operationType:n})}static async _forOperation(e,n,c){await e._updateTokensIfNecessary(c,!0);const s=su(c);return new dt({user:e,providerId:s,_tokenResponse:c,operationType:n})}}function su(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0 extends o3{constructor(e,n,c,s){var r;super(n.code,n.message),this.operationType=c,this.user=s,Object.setPrototypeOf(this,W0.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(e,n,c,s){return new W0(e,n,c,s)}}function CC(t,e,n,c){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?W0._fromErrorAndOperation(t,r,e,c):r})}async function kn2(t,e,n=!1){const c=await yc(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dt._forOperation(t,"link",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In2(t,e,n=!1){var c;const{auth:s}=t,r="reauthenticate";try{const a=await yc(t,CC(s,r,e,t),n);p2(a.idToken,s,"internal-error");const i=Ro(a.idToken);p2(i,s,"internal-error");const{sub:o}=i;return p2(t.uid===o,s,"user-mismatch"),dt._forOperation(t,r,a)}catch(a){throw((c=a)===null||c===void 0?void 0:c.code)==="auth/user-not-found"&&x4(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e,n=!1){const c="signIn",s=await CC(t,c,e),r=await dt._fromIdTokenResponse(t,c,s);return n||await t._updateCurrentUser(r.user),r}async function An2(t,e){return MC(os(t),e)}async function Tn2(t,e,n){const c=os(t),s=await Nn2(c,{returnSecureToken:!0,email:e,password:n}),r=await dt._fromIdTokenResponse(c,"signIn",s);return await c._updateCurrentUser(r.user),r}function En2(t,e,n){return An2(K2(t),j6.credential(e,n))}function bC(t,e,n,c){return K2(t).onAuthStateChanged(e,n,c)}function Pn2(t){return K2(t).signOut()}const K0="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(K0,"1"),this.storage.removeItem(K0),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn2(){const t=b1();return Oo(t)||oa(t)}const Rn2=1e3,On2=10;class LC extends wC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dn2()&&Vn2(),this.fallbackToPolling=VC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const c=this.storage.getItem(n),s=this.localCache[n];c!==s&&e(n,s,c)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,i,o)=>{this.notifyListeners(a,o)});return}const c=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(c);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(c,e.newValue):this.storage.removeItem(c);else if(this.localCache[c]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(c);!n&&this.localCache[c]===a||this.notifyListeners(c,a)},r=this.storage.getItem(c);Hn2()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,On2):s()}notifyListeners(e,n){this.localCache[e]=n;const c=this.listeners[e];if(c)for(const s of Array.from(c))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:c}),!0)})},Rn2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LC.type="LOCAL";const Fn2=LC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC extends wC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SC.type="SESSION";const xC=SC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn2(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const c=new la(e);return this.receivers.push(c),c}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:c,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:c,eventType:s});const i=Array.from(a).map(async l=>l(n.origin,r)),o=await Bn2(i);n.ports[0].postMessage({status:"done",eventId:c,eventType:s,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t="",e=10){let n="";for(let c=0;c<e;c++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,c=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((i,o)=>{const l=Uo("",20);s.port1.start();const u=setTimeout(()=>{o(new Error("unsupported_event"))},c);a={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),i(h.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(){return window}function Un2(t){Z4().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(){return typeof Z4().WorkerGlobalScope<"u"&&typeof Z4().importScripts=="function"}async function qn2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jn2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gn2(){return _C()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="firebaseLocalStorageDb",Wn2=1,Q0="firebaseLocalStorage",kC="fbase_key";class us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([Q0],e?"readwrite":"readonly").objectStore(Q0)}function Kn2(){const t=indexedDB.deleteDatabase(NC);return new us(t).toPromise()}function ui(){const t=indexedDB.open(NC,Wn2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const c=t.result;try{c.createObjectStore(Q0,{keyPath:kC})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const c=t.result;c.objectStoreNames.contains(Q0)?e(c):(c.close(),await Kn2(),e(await ui()))})})}async function ru(t,e,n){const c=ua(t,!0).put({[kC]:e,value:n});return new us(c).toPromise()}async function Qn2(t,e){const n=ua(t,!1).get(e),c=await new us(n).toPromise();return c===void 0?null:c.value}function au(t,e){const n=ua(t,!0).delete(e);return new us(n).toPromise()}const Yn2=800,Xn2=3;class IC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(e){let n=0;for(;;)try{const c=await this._openDb();return await e(c)}catch(c){if(n++>Xn2)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _C()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(Gn2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qn2(),!this.activeServiceWorker)return;this.sender=new $n2(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);!c||((e=c[0])===null||e===void 0?void 0:e.fulfilled)&&((n=c[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jn2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ui();return await ru(e,K0,"1"),await au(e,K0),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(c=>ru(c,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(c=>Qn2(c,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>au(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ua(s,!1).getAll();return new us(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],c=new Set;for(const{fbase_key:s,value:r}of e)c.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!c.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const c=this.listeners[e];if(c)for(const s of Array.from(c))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yn2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IC.type="LOCAL";const Jn2=IC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ec2(t){return new Promise((e,n)=>{const c=document.createElement("script");c.setAttribute("src",t),c.onload=e,c.onerror=s=>{const r=J4("internal-error");r.customData=s,n(r)},c.type="text/javascript",c.charset="UTF-8",Zn2().appendChild(c)})}function tc2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ss(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){return e?p3(e):(p2(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Fo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return v6(e,this._buildIdpRequest())}_linkToIdToken(e,n){return v6(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return v6(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nc2(t){return MC(t.auth,new qo(t),t.bypassAuthState)}function cc2(t){const{auth:e,user:n}=t;return p2(n,e,"internal-error"),In2(n,new qo(t),t.bypassAuthState)}async function sc2(t){const{auth:e,user:n}=t;return p2(n,e,"internal-error"),kn2(n,new qo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,c,s,r=!1){this.auth=e,this.resolver=c,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:c,postBody:s,tenantId:r,error:a,type:i}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:n,sessionId:c,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nc2;case"linkViaPopup":case"linkViaRedirect":return sc2;case"reauthViaPopup":case"reauthViaRedirect":return cc2;default:x4(this.auth,"internal-error")}}resolve(e){S3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc2=new ss(2e3,1e4);async function ac2(t,e,n){const c=os(t);Z62(t,e,$o);const s=AC(c,n);return new Xe(c,"signInViaPopup",e,s).executeNotNull()}class Xe extends TC{constructor(e,n,c,s,r){super(e,n,s,r),this.provider=c,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p2(e,this.auth,"internal-error"),e}async onExecution(){S3(this.filter.length===1,"Popup operations only handle one event");const e=Uo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(J4(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(J4(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,c;if(!((c=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||c===void 0)&&c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(J4(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rc2.get())};e()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic2="pendingRedirect",M0=new Map;class oc2 extends TC{constructor(e,n,c=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,c),this.eventId=null}async execute(){let e=M0.get(this.auth._key());if(!e){try{const c=await lc2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(c)}catch(n){e=()=>Promise.reject(n)}M0.set(this.auth._key(),e)}return this.bypassAuthState||M0.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lc2(t,e){const n=hc2(e),c=fc2(t);if(!await c._isAvailable())return!1;const s=await c._get(n)==="true";return await c._remove(n),s}function uc2(t,e){M0.set(t._key(),e)}function fc2(t){return p3(t._redirectPersistence)}function hc2(t){return C0(ic2,t.config.apiKey,t.name)}async function dc2(t,e,n=!1){const c=os(t),s=AC(c,e),a=await new oc2(c,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await c._persistUserIfCurrent(a.user),await c._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc2=10*60*1e3;class vc2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(e,c)&&(n=!0,this.sendToConsumer(e,c),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pc2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var c;if(e.error&&!EC(e)){const s=((c=e.error.code)===null||c===void 0?void 0:c.split("auth/")[1])||"internal-error";n.onError(J4(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const c=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&c}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mc2&&this.cachedEventUids.clear(),this.cachedEventUids.has(iu(e))}saveEventToCache(e){this.cachedEventUids.add(iu(e)),this.lastProcessedEventTime=Date.now()}}function iu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pc2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc2(t,e={}){return as(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hc2=/^https?/;async function Vc2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gc2(t);for(const n of e)try{if(zc2(n))return}catch{}x4(t,"unauthorized-domain")}function zc2(t){const e=li(),{protocol:n,hostname:c}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&c===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===c}if(!Hc2.test(n))return!1;if(yc2.test(t))return c===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(c)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc2=new ss(3e4,6e4);function ou(){const t=Z4().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mc2(t){return new Promise((e,n)=>{var c,s,r;function a(){ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ou(),n(J4(t,"network-request-failed"))},timeout:Cc2.get()})}if(!((s=(c=Z4().gapi)===null||c===void 0?void 0:c.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Z4().gapi)===null||r===void 0)&&r.load)a();else{const i=tc2("iframefcb");return Z4()[i]=()=>{gapi.load?a():n(J4(t,"network-request-failed"))},ec2(`https://apis.google.com/js/api.js?onload=${i}`).catch(o=>n(o))}}).catch(e=>{throw b0=null,e})}let b0=null;function bc2(t){return b0=b0||Mc2(t),b0}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc2=new ss(5e3,15e3),Lc2="__/auth/iframe",Sc2="emulator/auth/iframe",xc2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_c2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nc2(t){const e=t.config;p2(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Do(e,Sc2):`https://${t.config.authDomain}/${Lc2}`,c={apiKey:e.apiKey,appName:t.name,v:kt},s=_c2.get(t.config.apiHost);s&&(c.eid=s);const r=t._getFrameworks();return r.length&&(c.fw=r.join(",")),`${n}?${cs(c).slice(1)}`}async function kc2(t){const e=await bc2(t),n=Z4().gapi;return p2(n,t,"internal-error"),e.open({where:document.body,url:Nc2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xc2,dontclear:!0},c=>new Promise(async(s,r)=>{await c.restyle({setHideOnLeave:!1});const a=J4(t,"network-request-failed"),i=Z4().setTimeout(()=>{r(a)},wc2.get());function o(){Z4().clearTimeout(i),s(c)}c.ping(o).then(o,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ac2=500,Tc2=600,Ec2="_blank",Pc2="http://localhost";class lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dc2(t,e,n,c=Ac2,s=Tc2){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-c)/2,0).toString();let i="";const o=Object.assign(Object.assign({},Ic2),{width:c.toString(),height:s.toString(),top:r,left:a}),l=b1().toLowerCase();n&&(i=vC(l)?Ec2:n),mC(l)&&(e=e||Pc2,o.scrollbars="yes");const u=Object.entries(o).reduce((h,[d,v])=>`${h}${d}=${v},`,"");if(yn2(l)&&i!=="_self")return Rc2(e||"",i),new lu(null);const f=window.open(e||"",i,u);p2(f,t,"popup-blocked");try{f.focus()}catch{}return new lu(f)}function Rc2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const c=document.createEvent("MouseEvent");c.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc2="__/auth/handler",Fc2="emulator/auth/handler";function uu(t,e,n,c,s,r){p2(t.config.authDomain,t,"auth-domain-config-required"),p2(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:c,v:kt,eventId:s};if(e instanceof $o){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Ft2(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[o,l]of Object.entries(r||{}))a[o]=l}if(e instanceof ls){const o=e.getScopes().filter(l=>l!=="");o.length>0&&(a.scopes=o.join(","))}t.tenantId&&(a.tid=t.tenantId);const i=a;for(const o of Object.keys(i))i[o]===void 0&&delete i[o];return`${Bc2(t)}?${cs(i).slice(1)}`}function Bc2({config:t}){return t.emulator?Do(t,Fc2):`https://${t.authDomain}/${Oc2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l8="webStorageSupport";class $c2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xC,this._completeRedirectFn=dc2,this._overrideRedirectResult=uc2}async _openPopup(e,n,c,s){var r;S3((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=uu(e,n,c,li(),s);return Dc2(e,a,Uo())}async _openRedirect(e,n,c,s){return await this._originValidation(e),Un2(uu(e,n,c,li(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(S3(r,"If manager is not set, promise should be"),r)}const c=this.initAndGetManager(e);return this.eventManagers[n]={promise:c},c.catch(()=>{delete this.eventManagers[n]}),c}async initAndGetManager(e){const n=await kc2(e),c=new vc2(e);return n.register("authEvent",s=>(p2(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:c.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:c},this.iframes[e._key()]=n,c}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(l8,{type:l8},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[l8];a!==void 0&&n(!!a),x4(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vc2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VC()||Oo()||oa()}}const Uc2=$c2;var fu="@firebase/auth",hu="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(c=>{var s;e(((s=c)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){p2(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gc2(t){he(new L3("auth",(e,{options:n})=>{const c=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:a}=c.options;return((i,o)=>{p2(r&&!r.includes(":"),"invalid-api-key",{appName:i.name}),p2(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:r,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zC(t)},u=new Cn2(i,o,l);return tn2(u,n),u})(c,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,c)=>{e.getProvider("auth-internal").initialize()})),he(new L3("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(c=>new qc2(c))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),X4(fu,hu,jc2(t)),X4(fu,hu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(t=eC()){const e=ia(t,"auth");return e.isInitialized()?e.getImmediate():en2(t,{popupRedirectResolver:Uc2,persistence:[Jn2,Fn2,xC]})}Gc2("Browser");/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const t6=typeof window<"u";function Wc2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G2=Object.assign;function u8(t,e){const n={};for(const c in e){const s=e[c];n[c]=O4(s)?s.map(t):t(s)}return n}const Un=()=>{},O4=Array.isArray,Kc2=/\/$/,Qc2=t=>t.replace(Kc2,"");function f8(t,e,n="/"){let c,s={},r="",a="";const i=e.indexOf("#");let o=e.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(c=e.slice(0,o),r=e.slice(o+1,i>-1?i:e.length),s=t(r)),i>-1&&(c=c||e.slice(0,i),a=e.slice(i,e.length)),c=Zc2(c!=null?c:e,n),{fullPath:c+(r&&"?")+r+a,path:c,query:s,hash:a}}function Yc2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function du(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xc2(t,e,n){const c=e.matched.length-1,s=n.matched.length-1;return c>-1&&c===s&&w6(e.matched[c],n.matched[s])&&PC(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function w6(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function PC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jc2(t[n],e[n]))return!1;return!0}function Jc2(t,e){return O4(t)?mu(t,e):O4(e)?mu(e,t):t===e}function mu(t,e){return O4(e)?t.length===e.length&&t.every((n,c)=>n===e[c]):t.length===1&&t[0]===e}function Zc2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),c=t.split("/");let s=n.length-1,r,a;for(r=0;r<c.length;r++)if(a=c[r],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+c.slice(r-(r===c.length?1:0)).join("/")}var zc;(function(t){t.pop="pop",t.push="push"})(zc||(zc={}));var qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qn||(qn={}));function es2(t){if(!t)if(t6){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qc2(t)}const ts2=/^[^#]+#/;function ns2(t,e){return t.replace(ts2,"#")+e}function cs2(t,e){const n=document.documentElement.getBoundingClientRect(),c=t.getBoundingClientRect();return{behavior:e.behavior,left:c.left-n.left-(e.left||0),top:c.top-n.top-(e.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function ss2(t){let e;if("el"in t){const n=t.el,c=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?c?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cs2(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vu(t,e){return(history.state?history.state.position-e:-1)+t}const fi=new Map;function rs2(t,e){fi.set(t,e)}function as2(t){const e=fi.get(t);return fi.delete(t),e}let is2=()=>location.protocol+"//"+location.host;function DC(t,e){const{pathname:n,search:c,hash:s}=e,r=t.indexOf("#");if(r>-1){let i=s.includes(t.slice(r))?t.slice(r).length:1,o=s.slice(i);return o[0]!=="/"&&(o="/"+o),du(o,"")}return du(n,t)+c+s}function os2(t,e,n,c){let s=[],r=[],a=null;const i=({state:h})=>{const d=DC(t,location),v=n.value,g=e.value;let H=0;if(h){if(n.value=d,e.value=h,a&&a===v){a=null;return}H=g?h.position-g.position:0}else c(d);s.forEach(p=>{p(n.value,v,{delta:H,type:zc.pop,direction:H?H>0?qn.forward:qn.back:qn.unknown})})};function o(){a=n.value}function l(h){s.push(h);const d=()=>{const v=s.indexOf(h);v>-1&&s.splice(v,1)};return r.push(d),d}function u(){const{history:h}=window;!h.state||h.replaceState(G2({},h.state,{scroll:fa()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:o,listen:l,destroy:f}}function pu(t,e,n,c=!1,s=!1){return{back:t,current:e,forward:n,replaced:c,position:window.history.length,scroll:s?fa():null}}function ls2(t){const{history:e,location:n}=window,c={value:DC(t,n)},s={value:e.state};s.value||r(c.value,{back:null,current:c.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(o,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+o:is2()+t+o;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function a(o,l){const u=G2({},e.state,pu(s.value.back,o,s.value.forward,!0),l,{position:s.value.position});r(o,u,!0),c.value=o}function i(o,l){const u=G2({},s.value,e.state,{forward:o,scroll:fa()});r(u.current,u,!0);const f=G2({},pu(c.value,o,null),{position:u.position+1},l);r(o,f,!1),c.value=o}return{location:c,state:s,push:i,replace:a}}function us2(t){t=es2(t);const e=ls2(t),n=os2(t,e.state,e.location,e.replace);function c(r,a=!0){a||n.pauseListeners(),history.go(r)}const s=G2({location:"",base:t,go:c,createHref:ns2.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fs2(t){return typeof t=="string"||t&&typeof t=="object"}function RC(t){return typeof t=="string"||typeof t=="symbol"}const q3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},OC=Symbol("");var gu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gu||(gu={}));function L6(t,e){return G2(new Error,{type:t,[OC]:!0},e)}function l3(t,e){return t instanceof Error&&OC in t&&(e==null||!!(t.type&e))}const yu="[^/]+?",hs2={sensitive:!1,strict:!1,start:!0,end:!0},ds2=/[.+*?^${}()[\]/\\]/g;function ms2(t,e){const n=G2({},hs2,e),c=[];let s=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(ds2,"\\$&"),d+=40;else if(h.type===1){const{value:v,repeatable:g,optional:H,regexp:p}=h;r.push({name:v,repeatable:g,optional:H});const V=p||yu;if(V!==yu){d+=10;try{new RegExp(`(${V})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${V}): `+_.message)}}let z=g?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;f||(z=H&&l.length<2?`(?:/${z})`:"/"+z),H&&(z+="?"),s+=z,d+=20,H&&(d+=-8),g&&(d+=-20),V===".*"&&(d+=-50)}u.push(d)}c.push(u)}if(n.strict&&n.end){const l=c.length-1;c[l][c[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function i(l){const u=l.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",v=r[h-1];f[v.name]=d&&v.repeatable?d.split("/"):d}return f}function o(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:v,repeatable:g,optional:H}=d,p=v in l?l[v]:"";if(O4(p)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const V=O4(p)?p.join("/"):p;if(!V)if(H)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=V}}return u||"/"}return{re:a,score:c,keys:r,parse:i,stringify:o}}function vs2(t,e){let n=0;for(;n<t.length&&n<e.length;){const c=e[n]-t[n];if(c)return c;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ps2(t,e){let n=0;const c=t.score,s=e.score;for(;n<c.length&&n<s.length;){const r=vs2(c[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-c.length)===1){if(Hu(c))return 1;if(Hu(s))return-1}return s.length-c.length}function Hu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gs2={type:0,value:""},ys2=/[a-zA-Z0-9_]/;function Hs2(t){if(!t)return[[]];if(t==="/")return[[gs2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,c=n;const s=[];let r;function a(){r&&s.push(r),r=[]}let i=0,o,l="",u="";function f(){!l||(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=o}for(;i<t.length;){if(o=t[i++],o==="\\"&&n!==2){c=n,n=4;continue}switch(n){case 0:o==="/"?(l&&f(),a()):o===":"?(f(),n=1):h();break;case 4:h(),n=c;break;case 1:o==="("?n=2:ys2.test(o)?h():(f(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+o:n=3:u+=o;break;case 3:f(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),a(),s}function Vs2(t,e,n){const c=ms2(Hs2(t.path),n),s=G2(c,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zs2(t,e){const n=[],c=new Map;e=zu({strict:!1,end:!0,sensitive:!1},e);function s(u){return c.get(u)}function r(u,f,h){const d=!h,v=Ms2(u);v.aliasOf=h&&h.record;const g=zu(e,u),H=[v];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const _ of z)H.push(G2({},v,{components:h?h.record.components:v.components,path:_,aliasOf:h?h.record:v}))}let p,V;for(const z of H){const{path:_}=z;if(f&&_[0]!=="/"){const b=f.record.path,x=b[b.length-1]==="/"?"":"/";z.path=f.record.path+(_&&x+_)}if(p=Vs2(z,f,g),h?h.alias.push(p):(V=V||p,V!==p&&V.alias.push(p),d&&u.name&&!Vu(p)&&a(u.name)),v.children){const b=v.children;for(let x=0;x<b.length;x++)r(b[x],p,h&&h.children[x])}h=h||p,o(p)}return V?()=>{a(V)}:Un}function a(u){if(RC(u)){const f=c.get(u);f&&(c.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&c.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function i(){return n}function o(u){let f=0;for(;f<n.length&&ps2(u,n[f])>=0&&(u.record.path!==n[f].record.path||!FC(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Vu(u)&&c.set(u.record.name,u)}function l(u,f){let h,d={},v,g;if("name"in u&&u.name){if(h=c.get(u.name),!h)throw L6(1,{location:u});g=h.record.name,d=G2(Cs2(f.params,h.keys.filter(V=>!V.optional).map(V=>V.name)),u.params),v=h.stringify(d)}else if("path"in u)v=u.path,h=n.find(V=>V.re.test(v)),h&&(d=h.parse(v),g=h.record.name);else{if(h=f.name?c.get(f.name):n.find(V=>V.re.test(f.path)),!h)throw L6(1,{location:u,currentLocation:f});g=h.record.name,d=G2({},f.params,u.params),v=h.stringify(d)}const H=[];let p=h;for(;p;)H.unshift(p.record),p=p.parent;return{name:g,path:v,params:d,matched:H,meta:ws2(H)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:a,getRoutes:i,getRecordMatcher:s}}function Cs2(t,e){const n={};for(const c of e)c in t&&(n[c]=t[c]);return n}function Ms2(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bs2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bs2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const c in t.components)e[c]=typeof n=="boolean"?n:n[c];return e}function Vu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ws2(t){return t.reduce((e,n)=>G2(e,n.meta),{})}function zu(t,e){const n={};for(const c in t)n[c]=c in e?e[c]:t[c];return n}function FC(t,e){return e.children.some(n=>n===t||FC(t,n))}const BC=/#/g,Ls2=/&/g,Ss2=/\//g,xs2=/=/g,_s2=/\?/g,$C=/\+/g,Ns2=/%5B/g,ks2=/%5D/g,UC=/%5E/g,Is2=/%60/g,qC=/%7B/g,As2=/%7C/g,jC=/%7D/g,Ts2=/%20/g;function jo(t){return encodeURI(""+t).replace(As2,"|").replace(Ns2,"[").replace(ks2,"]")}function Es2(t){return jo(t).replace(qC,"{").replace(jC,"}").replace(UC,"^")}function hi(t){return jo(t).replace($C,"%2B").replace(Ts2,"+").replace(BC,"%23").replace(Ls2,"%26").replace(Is2,"`").replace(qC,"{").replace(jC,"}").replace(UC,"^")}function Ps2(t){return hi(t).replace(xs2,"%3D")}function Ds2(t){return jo(t).replace(BC,"%23").replace(_s2,"%3F")}function Rs2(t){return t==null?"":Ds2(t).replace(Ss2,"%2F")}function Y0(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Os2(t){const e={};if(t===""||t==="?")return e;const c=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<c.length;++s){const r=c[s].replace($C," "),a=r.indexOf("="),i=Y0(a<0?r:r.slice(0,a)),o=a<0?null:Y0(r.slice(a+1));if(i in e){let l=e[i];O4(l)||(l=e[i]=[l]),l.push(o)}else e[i]=o}return e}function Cu(t){let e="";for(let n in t){const c=t[n];if(n=Ps2(n),c==null){c!==void 0&&(e+=(e.length?"&":"")+n);continue}(O4(c)?c.map(r=>r&&hi(r)):[c&&hi(c)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Fs2(t){const e={};for(const n in t){const c=t[n];c!==void 0&&(e[n]=O4(c)?c.map(s=>s==null?null:""+s):c==null?c:""+c)}return e}const Bs2=Symbol(""),Mu=Symbol(""),ha=Symbol(""),GC=Symbol(""),di=Symbol("");function fn(){let t=[];function e(c){return t.push(c),()=>{const s=t.indexOf(c);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Y3(t,e,n,c,s){const r=c&&(c.enterCallbacks[s]=c.enterCallbacks[s]||[]);return()=>new Promise((a,i)=>{const o=f=>{f===!1?i(L6(4,{from:n,to:e})):f instanceof Error?i(f):fs2(f)?i(L6(2,{from:e,to:f})):(r&&c.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),a())},l=t.call(c&&c.instances[s],e,n,o);let u=Promise.resolve(l);t.length<3&&(u=u.then(o)),u.catch(f=>i(f))})}function h8(t,e,n,c){const s=[];for(const r of t)for(const a in r.components){let i=r.components[a];if(!(e!=="beforeRouteEnter"&&!r.instances[a]))if($s2(i)){const l=(i.__vccOpts||i)[e];l&&s.push(Y3(l,n,c,r,a))}else{let o=i();s.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const u=Wc2(l)?l.default:l;r.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Y3(h,n,c,r,a)()}))}}return s}function $s2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bu(t){const e=B2(ha),n=B2(GC),c=M(()=>e.resolve(F2(t.to))),s=M(()=>{const{matched:o}=c.value,{length:l}=o,u=o[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(w6.bind(null,u));if(h>-1)return h;const d=wu(o[l-2]);return l>1&&wu(u)===d&&f[f.length-1].path!==d?f.findIndex(w6.bind(null,o[l-2])):h}),r=M(()=>s.value>-1&&Gs2(n.params,c.value.params)),a=M(()=>s.value>-1&&s.value===n.matched.length-1&&PC(n.params,c.value.params));function i(o={}){return js2(o)?e[F2(t.replace)?"replace":"push"](F2(t.to)).catch(Un):Promise.resolve()}return{route:c,href:M(()=>c.value.href),isActive:r,isExactActive:a,navigate:i}}const Us2=be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bu,setup(t,{slots:e}){const n=j1(bu(t)),{options:c}=B2(ha),s=M(()=>({[Lu(t.activeClass,c.linkActiveClass,"router-link-active")]:n.isActive,[Lu(t.exactActiveClass,c.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:y4("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),qs2=Us2;function js2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gs2(t,e){for(const n in e){const c=e[n],s=t[n];if(typeof c=="string"){if(c!==s)return!1}else if(!O4(s)||s.length!==c.length||c.some((r,a)=>r!==s[a]))return!1}return!0}function wu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lu=(t,e,n)=>t!=null?t:e!=null?e:n,Ws2=be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const c=B2(di),s=M(()=>t.route||c.value),r=B2(Mu,0),a=M(()=>{let l=F2(r);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),i=M(()=>s.value.matched[a.value]);F1(Mu,M(()=>a.value+1)),F1(Bs2,i),F1(di,s);const o=q();return R2(()=>[o.value,i.value,t.name],([l,u,f],[h,d,v])=>{u&&(u.instances[f]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!w6(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=i.value,h=f&&f.components[u];if(!h)return Su(n.default,{Component:h,route:l});const d=f.props[u],v=d?d===!0?l.params:typeof d=="function"?d(l):d:null,H=y4(h,G2({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:o}));return Su(n.default,{Component:H,route:l})||H}}});function Su(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ks2=Ws2;function Qs2(t){const e=zs2(t.routes,t),n=t.parseQuery||Os2,c=t.stringifyQuery||Cu,s=t.history,r=fn(),a=fn(),i=fn(),o=Zh(q3);let l=q3;t6&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=u8.bind(null,E=>""+E),f=u8.bind(null,Rs2),h=u8.bind(null,Y0);function d(E,t2){let K,i2;return RC(E)?(K=e.getRecordMatcher(E),i2=t2):i2=E,e.addRoute(i2,K)}function v(E){const t2=e.getRecordMatcher(E);t2&&e.removeRoute(t2)}function g(){return e.getRoutes().map(E=>E.record)}function H(E){return!!e.getRecordMatcher(E)}function p(E,t2){if(t2=G2({},t2||o.value),typeof E=="string"){const M2=f8(n,E,t2.path),y=e.resolve({path:M2.path},t2),C=s.createHref(M2.fullPath);return G2(M2,y,{params:h(y.params),hash:Y0(M2.hash),redirectedFrom:void 0,href:C})}let K;if("path"in E)K=G2({},E,{path:f8(n,E.path,t2.path).path});else{const M2=G2({},E.params);for(const y in M2)M2[y]==null&&delete M2[y];K=G2({},E,{params:f(E.params)}),t2.params=f(t2.params)}const i2=e.resolve(K,t2),U2=E.hash||"";i2.params=u(h(i2.params));const Q2=Yc2(c,G2({},E,{hash:Es2(U2),path:i2.path})),b2=s.createHref(Q2);return G2({fullPath:Q2,hash:U2,query:c===Cu?Fs2(E.query):E.query||{}},i2,{redirectedFrom:void 0,href:b2})}function V(E){return typeof E=="string"?f8(n,E,o.value.path):G2({},E)}function z(E,t2){if(l!==E)return L6(8,{from:t2,to:E})}function _(E){return L(E)}function b(E){return _(G2(V(E),{replace:!0}))}function x(E){const t2=E.matched[E.matched.length-1];if(t2&&t2.redirect){const{redirect:K}=t2;let i2=typeof K=="function"?K(E):K;return typeof i2=="string"&&(i2=i2.includes("?")||i2.includes("#")?i2=V(i2):{path:i2},i2.params={}),G2({query:E.query,hash:E.hash,params:"path"in i2?{}:E.params},i2)}}function L(E,t2){const K=l=p(E),i2=o.value,U2=E.state,Q2=E.force,b2=E.replace===!0,M2=x(K);if(M2)return L(G2(V(M2),{state:U2,force:Q2,replace:b2}),t2||K);const y=K;y.redirectedFrom=t2;let C;return!Q2&&Xc2(c,i2,K)&&(C=L6(16,{to:y,from:i2}),Y1(i2,i2,!0,!1)),(C?Promise.resolve(C):A(y,i2)).catch(k=>l3(k)?l3(k,2)?k:J2(k):c2(k,y,i2)).then(k=>{if(k){if(l3(k,2))return L(G2({replace:b2},V(k.to),{state:U2,force:Q2}),t2||y)}else k=W(y,i2,!0,b2,U2);return O(y,i2,k),k})}function I(E,t2){const K=z(E,t2);return K?Promise.reject(K):Promise.resolve()}function A(E,t2){let K;const[i2,U2,Q2]=Ys2(E,t2);K=h8(i2.reverse(),"beforeRouteLeave",E,t2);for(const M2 of i2)M2.leaveGuards.forEach(y=>{K.push(Y3(y,E,t2))});const b2=I.bind(null,E,t2);return K.push(b2),jt(K).then(()=>{K=[];for(const M2 of r.list())K.push(Y3(M2,E,t2));return K.push(b2),jt(K)}).then(()=>{K=h8(U2,"beforeRouteUpdate",E,t2);for(const M2 of U2)M2.updateGuards.forEach(y=>{K.push(Y3(y,E,t2))});return K.push(b2),jt(K)}).then(()=>{K=[];for(const M2 of E.matched)if(M2.beforeEnter&&!t2.matched.includes(M2))if(O4(M2.beforeEnter))for(const y of M2.beforeEnter)K.push(Y3(y,E,t2));else K.push(Y3(M2.beforeEnter,E,t2));return K.push(b2),jt(K)}).then(()=>(E.matched.forEach(M2=>M2.enterCallbacks={}),K=h8(Q2,"beforeRouteEnter",E,t2),K.push(b2),jt(K))).then(()=>{K=[];for(const M2 of a.list())K.push(Y3(M2,E,t2));return K.push(b2),jt(K)}).catch(M2=>l3(M2,8)?M2:Promise.reject(M2))}function O(E,t2,K){for(const i2 of i.list())i2(E,t2,K)}function W(E,t2,K,i2,U2){const Q2=z(E,t2);if(Q2)return Q2;const b2=t2===q3,M2=t6?history.state:{};K&&(i2||b2?s.replace(E.fullPath,G2({scroll:b2&&M2&&M2.scroll},U2)):s.push(E.fullPath,U2)),o.value=E,Y1(E,t2,K,b2),J2()}let T;function $(){T||(T=s.listen((E,t2,K)=>{if(!$4.listening)return;const i2=p(E),U2=x(i2);if(U2){L(G2(U2,{replace:!0}),i2).catch(Un);return}l=i2;const Q2=o.value;t6&&rs2(vu(Q2.fullPath,K.delta),fa()),A(i2,Q2).catch(b2=>l3(b2,12)?b2:l3(b2,2)?(L(b2.to,i2).then(M2=>{l3(M2,20)&&!K.delta&&K.type===zc.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(K.delta&&s.go(-K.delta,!1),c2(b2,i2,Q2))).then(b2=>{b2=b2||W(i2,Q2,!1),b2&&(K.delta&&!l3(b2,8)?s.go(-K.delta,!1):K.type===zc.pop&&l3(b2,20)&&s.go(-1,!1)),O(i2,Q2,b2)}).catch(Un)}))}let f2=fn(),m2=fn(),Z;function c2(E,t2,K){J2(E);const i2=m2.list();return i2.length?i2.forEach(U2=>U2(E,t2,K)):console.error(E),Promise.reject(E)}function d2(){return Z&&o.value!==q3?Promise.resolve():new Promise((E,t2)=>{f2.add([E,t2])})}function J2(E){return Z||(Z=!E,$(),f2.list().forEach(([t2,K])=>E?K(E):t2()),f2.reset()),E}function Y1(E,t2,K,i2){const{scrollBehavior:U2}=t;if(!t6||!U2)return Promise.resolve();const Q2=!K&&as2(vu(E.fullPath,0))||(i2||!K)&&history.state&&history.state.scroll||null;return _4().then(()=>U2(E,t2,Q2)).then(b2=>b2&&ss2(b2)).catch(b2=>c2(b2,E,t2))}const L1=E=>s.go(E);let U1;const q1=new Set,$4={currentRoute:o,listening:!0,addRoute:d,removeRoute:v,hasRoute:H,getRoutes:g,resolve:p,options:t,push:_,replace:b,go:L1,back:()=>L1(-1),forward:()=>L1(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:m2.add,isReady:d2,install(E){const t2=this;E.component("RouterLink",qs2),E.component("RouterView",Ks2),E.config.globalProperties.$router=t2,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>F2(o)}),t6&&!U1&&o.value===q3&&(U1=!0,_(s.location).catch(U2=>{}));const K={};for(const U2 in q3)K[U2]=M(()=>o.value[U2]);E.provide(ha,t2),E.provide(GC,j1(K)),E.provide(di,o);const i2=E.unmount;q1.add(E),E.unmount=function(){q1.delete(E),q1.size<1&&(l=q3,T&&T(),T=null,o.value=q3,U1=!1,Z=!1),i2()}}};return $4}function jt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ys2(t,e){const n=[],c=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=e.matched[a];i&&(t.matched.find(l=>w6(l,i))?c.push(i):n.push(i));const o=t.matched[a];o&&(e.matched.find(l=>w6(l,o))||s.push(o))}return[n,c,s]}function WC(){return B2(ha)}function xu(t,e,n){Xs2(t,e),e.set(t,n)}function Xs2(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Js2(t,e,n){var c=KC(t,e,"set");return Zs2(t,c,n),n}function Zs2(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}function Ee(t,e){var n=KC(t,e,"get");return e02(t,n)}function KC(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function e02(t,e){return e.get?e.get.call(t):e.value}function QC(t,e,n){const c=e.length-1;if(c<0)return t===void 0?n:t;for(let s=0;s<c;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[c]]===void 0?n:t[e[c]]}function YC(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(c=>YC(t[c],e[c]))}function mi(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),QC(t,e.split("."),n))}function hn(t,e,n){if(e==null)return t===void 0?n:t;if(t!==Object(t))return n;if(typeof e=="string")return mi(t,e,n);if(Array.isArray(e))return QC(t,e,n);if(typeof e!="function")return n;const c=e(t,n);return typeof c>"u"?n:c}function t02(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,c)=>e+c)}function H2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function vi(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function n02(t){return t==null?void 0:t.$el}const _u=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function fs(t,e){const n=Object.create(null),c=Object.create(null);for(const s in t)e.some(r=>r instanceof RegExp?r.test(s):r===s)?n[s]=t[s]:c[s]=t[s];return[n,c]}function c02(t){return fs(t,["class","style","id",/^data-/])}function jn(t){return t==null?[]:Array.isArray(t)?t:[t]}function pi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function x3(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const c={};for(const s in t)c[s]=t[s];for(const s in e){const r=t[s],a=e[s];if(vi(r)&&vi(a)){c[s]=x3(r,a,n);continue}if(Array.isArray(r)&&Array.isArray(a)&&n){c[s]=n(r,a);continue}c[s]=a}return c}function XC(t){return t.map(e=>e.type===c1?XC(e.children):e).flat()}function Go(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function Gn(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Gn(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Gn(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Gn(t,e.component.subTree).flat(1)}return[]}var Zs=new WeakMap,Gt=new WeakMap;class s02{constructor(e){xu(this,Zs,{writable:!0,value:[]}),xu(this,Gt,{writable:!0,value:0}),this.size=e}push(e){Ee(this,Zs)[Ee(this,Gt)]=e,Js2(this,Gt,(Ee(this,Gt)+1)%this.size)}values(){return Ee(this,Zs).slice(Ee(this,Gt)).concat(Ee(this,Zs).slice(0,Ee(this,Gt)))}}function Wo(t){const e={},n=M(t);for(const c in n.value)e[c]=O2(n.value,c);return R2(n,c=>{for(const s in c)e[s].value=c[s]},{flush:"sync"}),e}function X0(t,e){return t.includes(e)}const JC=["top","bottom"],r02=["start","end","left","right"];function gi(t,e){let[n,c]=t.split(" ");return c||(c=X0(JC,n)?"start":X0(r02,n)?"top":"center"),{side:yi(n,e),align:yi(c,e)}}function yi(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function d8(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function m8(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function Nu(t){return{side:t.align,align:t.side}}function ku(t){return X0(JC,t.side)?"y":"x"}class p6{constructor(e){let{x:n,y:c,width:s,height:r}=e;this.x=n,this.y=c,this.width=s,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Iu(t,e){return{x:{before:Math.max(0,e.left-t.left),after:Math.max(0,t.right-e.right)},y:{before:Math.max(0,e.top-t.top),after:Math.max(0,t.bottom-e.bottom)}}}function Ko(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),c=n.transform;if(c){let s,r,a,i,o;if(c.startsWith("matrix3d("))s=c.slice(9,-1).split(/, /),r=+s[0],a=+s[5],i=+s[12],o=+s[13];else if(c.startsWith("matrix("))s=c.slice(7,-1).split(/, /),r=+s[0],a=+s[3],i=+s[4],o=+s[5];else return new p6(e);const l=n.transformOrigin,u=e.x-i-(1-r)*parseFloat(l),f=e.y-o-(1-a)*parseFloat(l.slice(l.indexOf(" ")+1)),h=r?e.width/r:t.offsetWidth+1,d=a?e.height/a:t.offsetHeight+1;return new p6({x:u,y:f,width:h,height:d})}else return new p6(e)}function ZC(t,e,n){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?o02(e):"")}function g6(t,e,n){const c=ZC(t,e,n);c!=null&&console.warn(c)}function Hi(t,e,n){const c=ZC(t,e,n);c!=null&&console.error(c)}const a02=/(?:^|[-_])(\w)/g,i02=t=>t.replace(a02,e=>e.toUpperCase()).replace(/[-_]/g,"");function v8(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t._isVue?t.$options||t.constructor.options:t||{};let c=n.name||n._componentTag;const s=n.__file;if(!c&&s){const r=s.match(/([^/\\]+)\.vue$/);c=r==null?void 0:r[1]}return(c?`<${i02(c)}>`:"<Anonymous>")+(s&&e!==!1?` at ${s}`:"")}function o02(t){if(t._isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const c=e[e.length-1];if(c.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[c,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((c,s)=>`${s===0?"---> ":" ".repeat(5+s*2)}${Array.isArray(c)?`${v8(c[0])}... (${c[1]} recursive calls)`:v8(c)}`).join(`
`)}else return`

(found in ${v8(t)})`}const l02=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],u02=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,f02=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],h02=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function eM(t){const e=Array(3),n=u02,c=l02;for(let s=0;s<3;++s)e[s]=Math.round(pi(n(c[s][0]*t[0]+c[s][1]*t[1]+c[s][2]*t[2]))*255);return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function Qo(t){const e=[0,0,0],n=h02,c=f02,s=n((t>>16&255)/255),r=n((t>>8&255)/255),a=n((t>>0&255)/255);for(let i=0;i<3;++i)e[i]=c[i][0]*s+c[i][1]*r+c[i][2]*a;return e}const J0=.20689655172413793,d02=t=>t>J0**3?Math.cbrt(t):t/(3*J0**2)+4/29,m02=t=>t>J0?t**3:3*J0**2*(t-4/29);function tM(t){const e=d02,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function nM(t){const e=m02,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function Au(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function Z0(t){let e;if(typeof t=="number")e=t;else if(typeof t=="string"){let n=t.startsWith("#")?t.substring(1):t;n.length===3&&(n=n.split("").map(c=>c+c).join("")),n.length!==6&&g6(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`);return e<0?(g6(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&(g6(`'${t}' is not a valid rgb color`),e=16777215),e}function v02(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function cM(t){const e=Z0(t);return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255}}function p02(t,e){const n=tM(Qo(t));return n[0]=n[0]+e*10,eM(nM(n))}function g02(t,e){const n=tM(Qo(t));return n[0]=n[0]-e*10,eM(nM(n))}function y02(t){const e=Z0(t);return Qo(e)[1]}function c4(t,e){const n=Rr();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function A3(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";return Go((t=c4(e).type)==null?void 0:t.name)}let sM=0,w0=new WeakMap;function T3(){const t=c4("getUid");if(w0.has(t))return w0.get(t);{const e=sM++;return w0.set(t,e),e}}T3.reset=()=>{sM=0,w0=new WeakMap};function H02(t){const{provides:e}=c4("injectSelf");if(e&&t in e)return e[t]}const Cc=Symbol.for("vuetify:defaults");function V02(t){return q(t!=null?t:{})}function rM(){const t=B2(Cc);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function It(t,e){const n=rM(),c=q(t),s=M(()=>{const r=F2(e==null?void 0:e.scoped),a=F2(e==null?void 0:e.reset),i=F2(e==null?void 0:e.root);let o=x3(c.value,{prev:n.value});if(r)return o;if(a||i){const l=Number(a||1/0);for(let u=0;u<=l&&o.prev;u++)o=o.prev;return o}return x3(o.prev,o)});return F1(Cc,s),s}function z02(t,e){var n,c;return((n=t.props)==null?void 0:n.hasOwnProperty(e))||((c=t.props)==null?void 0:c.hasOwnProperty(Go(e)))}const S2=function(e){var n;if(e._setup=(n=e._setup)!=null?n:e.setup,!e.name)return g6("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){var c;e.props=(c=e.props)!=null?c:{},e.props._as=String,e.setup=function(r,a){const i=Rr(),o=rM(),l=Zh(),u=Kh({...L2(r)});Me(()=>{var d;const v=o.value.global,g=o.value[(d=r._as)!=null?d:e.name];if(g){const V=Object.entries(g).filter(z=>{let[_]=z;return _.startsWith("V")});V.length&&(l.value=Object.fromEntries(V))}for(const V of Object.keys(r)){let z;if(z02(i.vnode,V))z=r[V];else{var H,p;z=(H=(p=g==null?void 0:g[V])!=null?p:v==null?void 0:v[V])!=null?H:r[V]}u[V]!==z&&(u[V]=z)}});const f=e._setup(u,a);let h;return R2(l,(d,v)=>{!d&&h?h.stop():d&&!v&&(h=Wc(),h.run(()=>{var g,H;It(x3((g=(H=H02(Cc))==null?void 0:H.value)!=null?g:{},d))}))},{immediate:!0}),f}}return e};function N4(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?S2:be)(e)}function G6(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return S2({name:n!=null?n:Ce(S4(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(c,s){let{slots:r}=s;return()=>{var a;return y4(c.tag,{class:t},(a=r.default)==null?void 0:a.call(r))}}})}function aM(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}const er="cubic-bezier(0.4, 0, 0.2, 1)",C02="cubic-bezier(0.0, 0, 0.2, 1)",M02="cubic-bezier(0.4, 0, 1, 1)";function b02(t){for(;t;){if(Yo(t))return t;t=t.parentElement}return document.scrollingElement}function tr(t){const e=[];for(;t;)Yo(t)&&e.push(t),t=t.parentElement;return e}function Yo(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return e.overflowY==="scroll"||e.overflowY==="auto"&&t.scrollHeight>t.clientHeight}const f1=typeof window<"u",Xo=f1&&"IntersectionObserver"in window,w02=f1&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),L02=f1&&CSS.supports("selector(:focus-visible)");function S02(t){for(;t;){if(window.getComputedStyle(t).position==="fixed")return!0;t=t.offsetParent}return!1}function k2(t,e){return n=>Object.keys(t).reduce((c,s)=>{const a=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?c[s]={...a,default:n[s]}:c[s]=a,e&&(c[s].source=e),c},{})}function D2(t){const e=c4("useRender");e.render=t}const At=k2({border:[Boolean,Number,String]},"border");function Tt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();return{borderClasses:M(()=>{const c=a1(t)?t.value:t.border,s=[];if(c===!0||c==="")s.push(`${e}--border`);else if(typeof c=="string"||c===0)for(const r of String(c).split(" "))s.push(`border-${r}`);return s})}}const x02=[null,"default","comfortable","compact"],we=k2({density:{type:String,default:"default",validator:t=>x02.includes(t)}},"density");function Et(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();return{densityClasses:M(()=>`${e}--density-${t.density}`)}}const Pt=k2({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Dt(t){return{elevationClasses:M(()=>{const n=a1(t)?t.value:t.elevation,c=[];return n==null||c.push(`elevation-${n}`),c})}}const E3=k2({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function P3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();return{roundedClasses:M(()=>{const c=a1(t)?t.value:t.rounded,s=[];if(c===!0||c==="")s.push(`${e}--rounded`);else if(typeof c=="string"||c===0)for(const r of String(c).split(" "))s.push(`rounded-${r}`);return s})}}const T1=k2({tag:{type:String,default:"div"}},"tag"),Wt=2.4,Tu=.2126729,Eu=.7151522,Pu=.072175,_02=.55,N02=.58,k02=.57,I02=.62,e0=.03,Du=1.45,A02=5e-4,T02=1.25,E02=1.25,Ru=.078,Ou=12.82051282051282,t0=.06,Fu=.001;function Bu(t,e){const n=((t>>16&255)/255)**Wt,c=((t>>8&255)/255)**Wt,s=((t>>0&255)/255)**Wt,r=((e>>16&255)/255)**Wt,a=((e>>8&255)/255)**Wt,i=((e>>0&255)/255)**Wt;let o=n*Tu+c*Eu+s*Pu,l=r*Tu+a*Eu+i*Pu;if(o<=e0&&(o+=(e0-o)**Du),l<=e0&&(l+=(e0-l)**Du),Math.abs(l-o)<A02)return 0;let u;if(l>o){const f=(l**_02-o**N02)*T02;u=f<Fu?0:f<Ru?f-f*Ou*t0:f-t0}else{const f=(l**I02-o**k02)*E02;u=f>-Fu?0:f>-Ru?f-f*Ou*t0:f+t0}return u*100}const nr=Symbol.for("vuetify:theme"),s4=k2({theme:String},"theme"),dn={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function P02(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:dn;if(!t)return{...dn,isDisabled:!0};const e={};for(const[r,a]of Object.entries((n=t.themes)!=null?n:{})){var n,c,s;const i=a.dark?(c=dn.themes)==null?void 0:c.dark:(s=dn.themes)==null?void 0:s.light;e[r]=x3(i,a)}return x3(dn,{...t,themes:e})}function D02(t,e){const n=t._context.provides.usehead,c=j1(P02(e)),s=q(c.defaultTheme),r=q(c.themes),a=M(()=>{const f={};for(const[h,d]of Object.entries(r.value)){const v=f[h]={...d,colors:{...d.colors}};if(c.variations)for(const g of c.variations.colors){const H=v.colors[g];for(const p of["lighten","darken"]){const V=p==="lighten"?p02:g02;for(const z of t02(c.variations[p],1))v.colors[`${g}-${p}-${z}`]=v02(V(Z0(H),z))}}for(const g of Object.keys(v.colors)){if(/on-[a-z]/.test(g)||v.colors[`on-${g}`])continue;const H=`on-${g}`,p=Z0(v.colors[g]),V=Math.abs(Bu(0,p)),z=Math.abs(Bu(16777215,p));v.colors[H]=z>Math.min(V,50)?"#fff":"#000"}}return f}),i=M(()=>a.value[s.value]),o=M(()=>{const f=[];i.value.dark&&Kt(f,":root",["color-scheme: dark"]);for(const[g,H]of Object.entries(a.value)){const{variables:p,dark:V}=H;Kt(f,`.v-theme--${g}`,[`color-scheme: ${V?"dark":"normal"}`,...R02(H),...Object.keys(p).map(z=>{const _=p[z],b=typeof _=="string"&&_.startsWith("#")?cM(_):void 0,x=b?`${b.r}, ${b.g}, ${b.b}`:void 0;return`--v-${z}: ${x!=null?x:_}`})])}const h=[],d=[],v=new Set(Object.values(a.value).flatMap(g=>Object.keys(g.colors)));for(const g of v)/on-[a-z]/.test(g)?Kt(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(Kt(h,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),Kt(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),Kt(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return f.push(...h,...d),f.map((g,H)=>H===0?g:`    ${g}`).join("")});if(n)n.addHeadObjs(M(()=>{const f={children:o.value,type:"text/css",id:"vuetify-theme-stylesheet"};return c.cspNonce&&(f.nonce=c.cspNonce),{style:[f]}})),f1&&Me(()=>n.updateDOM());else{let h=function(){if(!c.isDisabled){if(typeof document<"u"&&!f){const d=document.createElement("style");d.type="text/css",d.id="vuetify-theme-stylesheet",c.cspNonce&&d.setAttribute("nonce",c.cspNonce),f=d,document.head.appendChild(f)}f&&(f.innerHTML=o.value)}};var u=h;let f=f1?document.getElementById("vuetify-theme-stylesheet"):null;R2(o,h,{immediate:!0})}const l=M(()=>c.isDisabled?void 0:`v-theme--${s.value}`);return{isDisabled:c.isDisabled,name:s,themes:r,current:i,computedThemes:a,themeClasses:l,styles:o,global:{name:s,current:i}}}function u4(t){c4("provideTheme");const e=B2(nr,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=M(()=>{var r;return(r=t.theme)!=null?r:e==null?void 0:e.name.value}),c=M(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,themeClasses:c};return F1(nr,s),s}function Kt(t,e,n){t.push(`${e} {
`,...n.map(c=>`  ${c};
`),`}
`)}function R02(t){const e=t.dark?2:1,n=t.dark?1:2,c=[];for(const[s,r]of Object.entries(t.colors)){const a=cM(r);c.push(`--v-theme-${s}: ${a.r},${a.g},${a.b}`),s.startsWith("on-")||c.push(`--v-theme-${s}-overlay-multiplier: ${y02(r)>.18?e:n}`)}return c}function Jo(t){return Wo(()=>{const e=[],n={};return t.value.background&&(Au(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(Au(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function mt(t,e){const n=M(()=>({text:a1(t)?t.value:e?t[e]:null})),{colorClasses:c,colorStyles:s}=Jo(n);return{textColorClasses:c,textColorStyles:s}}function r3(t,e){const n=M(()=>({background:a1(t)?t.value:e?t[e]:null})),{colorClasses:c,colorStyles:s}=Jo(n);return{backgroundColorClasses:c,backgroundColorStyles:s}}const O02=["elevated","flat","tonal","outlined","text","plain"];function Zo(t,e){return m(c1,null,[t&&m("span",{key:"overlay",class:`${e}__overlay`},null),m("span",{key:"underlay",class:`${e}__underlay`},null)])}const hs=k2({color:String,variant:{type:String,default:"elevated",validator:t=>O02.includes(t)}},"variant");function e7(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();const n=M(()=>{const{variant:r}=F2(t);return`${e}--variant-${r}`}),{colorClasses:c,colorStyles:s}=Jo(M(()=>{const{variant:r,color:a}=F2(t);return{[["elevated","flat"].includes(r)?"background":"text"]:a}}));return{colorClasses:c,colorStyles:s,variantClasses:n}}const F02=S2({name:"VBtnGroup",props:{divided:Boolean,...At(),...we(),...Pt(),...E3(),...T1(),...s4(),...hs()},setup(t,e){let{slots:n}=e;const{themeClasses:c}=u4(t),{densityClasses:s}=Et(t),{borderClasses:r}=Tt(t),{elevationClasses:a}=Dt(t),{roundedClasses:i}=P3(t);It({VBtn:{height:"auto",color:O2(t,"color"),density:O2(t,"density"),flat:!0,variant:O2(t,"variant")}}),D2(()=>m(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},c.value,r.value,s.value,a.value,i.value]},n))}});function F4(t,e,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:o=>o,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:o=>o;const r=c4("useProxiedModel"),a=M(()=>{var o,l;return t[e],!!(r!=null&&(o=r.vnode.props)!=null&&o.hasOwnProperty(e)||r!=null&&(l=r.vnode.props)!=null&&l.hasOwnProperty(Go(e)))}),i=q(c(t[e]));return M({get(){return a.value?c(t[e]):i.value},set(o){(a.value?c(t[e]):i.value)!==o&&(i.value=o,r==null||r.emit(`update:${e}`,s(o)))}})}const B02=k2({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),$02=k2({value:null,disabled:Boolean,selectedClass:String},"group-item");function U02(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=c4("useGroupItem");if(!c)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=T3();F1(Symbol.for(`${e.description}:id`),s);const r=B2(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const a=O2(t,"value"),i=M(()=>r.disabled.value||t.disabled);r.register({id:s,value:a,disabled:i},c),B4(()=>{r.unregister(s)});const o=M(()=>r.isSelected(s)),l=M(()=>o.value&&[r.selectedClass.value,t.selectedClass]);return R2(o,u=>{c.emit("group:selected",{value:u})}),{id:s,isSelected:o,toggle:()=>r.select(s,!o.value),select:u=>r.select(s,u),selectedClass:l,value:a,disabled:i,group:r}}function q02(t,e){let n=!1;const c=j1([]),s=F4(t,"modelValue",[],h=>h==null?[]:iM(c,jn(h)),h=>{const d=G02(c,h);return t.multiple?d:d[0]}),r=c4("useGroup");function a(h,d){const v=h,g=Symbol.for(`${e.description}:id`),p=Gn(g,r==null?void 0:r.vnode).indexOf(d);p>-1?c.splice(p,0,v):c.push(v)}function i(h){if(n)return;o();const d=c.findIndex(v=>v.id===h);c.splice(d,1)}function o(){const h=c.find(d=>!d.disabled);h&&t.mandatory==="force"&&!s.value.length&&(s.value=[h.id])}_t(()=>{o()}),B4(()=>{n=!0});function l(h,d){const v=c.find(p=>p.id===h);if(!(d&&v!=null&&v.disabled))if(t.multiple){var g;const p=s.value.slice(),V=p.findIndex(_=>_===h),z=~V;if(d=(g=d)!=null?g:!z,z&&t.mandatory&&p.length<=1||!z&&t.max!=null&&p.length+1>t.max)return;V<0&&d?p.push(h):V>=0&&!d&&p.splice(V,1),s.value=p}else{var H;const p=s.value.includes(h);if(t.mandatory&&p)return;s.value=((H=d)!=null?H:!p)?[h]:[]}}function u(h){if(t.multiple&&g6('This method is not supported when using "multiple" prop'),s.value.length){const d=s.value[0],v=c.findIndex(p=>p.id===d);let g=(v+h)%c.length,H=c[g];for(;H.disabled&&g!==v;)g=(g+h)%c.length,H=c[g];if(H.disabled)return;s.value=[c[g].id]}else{const d=c.find(v=>!v.disabled);d&&(s.value=[d.id])}}const f={register:a,unregister:i,selected:s,select:l,disabled:O2(t,"disabled"),prev:()=>u(c.length-1),next:()=>u(1),isSelected:h=>s.value.includes(h),selectedClass:M(()=>t.selectedClass),items:M(()=>c),getItemIndex:h=>j02(c,h)};return F1(e,f),f}function j02(t,e){const n=iM(t,[e]);return n.length?t.findIndex(c=>c.id===n[0]):-1}function iM(t,e){const n=[];for(let c=0;c<t.length;c++){const s=t[c];s.value!=null?e.find(r=>YC(r,s.value))!=null&&n.push(s.id):e.includes(c)&&n.push(s.id)}return n}function G02(t,e){const n=[];for(let c=0;c<t.length;c++){const s=t[c];e.includes(s.id)&&n.push(s.value!=null?s.value:c)}return n}const oM=Symbol.for("vuetify:v-btn-toggle");N4()({name:"VBtnToggle",props:B02({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:c,next:s,prev:r,select:a,selected:i}=q02(t,oM);return D2(()=>{var o;return m(F02,{class:"v-btn-toggle"},{default:()=>[(o=n.default)==null?void 0:o.call(n,{isSelected:c,next:s,prev:r,select:a,selected:i})]})}),{next:s,prev:r,select:a}}});const e3=be({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:c,reset:s,root:r,scoped:a}=nd(t);return It(c,{reset:s,root:r,scoped:a}),()=>{var i;return(i=n.default)==null?void 0:i.call(n)}}});const W02={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},K02={component:t=>y4(lM,{...t,class:"mdi"})},y1=[String,Function,Object],Vi=Symbol.for("vuetify:icons"),da=k2({icon:{type:y1,required:!0},tag:{type:String,required:!0}},"icon"),Q02=S2({name:"VComponentIcon",props:da(),setup(t){return()=>m(t.tag,null,{default:()=>[m(t.icon,null,null)]})}}),Y02=S2({name:"VSvgIcon",inheritAttrs:!1,props:da(),setup(t,e){let{attrs:n}=e;return()=>m(t.tag,G1(n,{style:null}),{default:()=>[m("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[m("path",{d:t.icon},null)])]})}});S2({name:"VLigatureIcon",props:da(),setup(t){return()=>m(t.tag,null,{default:()=>[t.icon]})}});const lM=S2({name:"VClassIcon",props:da(),setup(t){return()=>m(t.tag,{class:t.icon},null)}}),X02={svg:{component:Y02},class:{component:lM}};function J02(t){return x3({defaultSet:"mdi",sets:{...X02,mdi:K02},aliases:W02},t)}const Z02=t=>{const e=B2(Vi);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:M(()=>{const c=a1(t)?t.value:t.icon;if(!c)throw new Error("Icon value is undefined or null");let s=c;if(typeof c=="string"&&c.includes("$")){var r;s=(r=e.aliases)==null?void 0:r[c.slice(c.indexOf("$")+1)]}if(!s)throw new Error(`Could not find aliased icon "${c}"`);if(typeof s!="string")return{component:Q02,icon:s};const a=Object.keys(e.sets).find(l=>typeof s=="string"&&s.startsWith(`${l}:`)),i=a?s.slice(a.length+1):s;return{component:e.sets[a!=null?a:e.defaultSet].component,icon:i}})}},er2=["x-small","small","default","large","x-large"],ma=k2({size:{type:[String,Number],default:"default"}},"size");function va(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();return Wo(()=>{let n,c;return X0(er2,t.size)?n=`${e}--size-${t.size}`:t.size&&(c={width:H2(t.size),height:H2(t.size)}),{sizeClasses:n,sizeStyles:c}})}const tr2=k2({color:String,start:Boolean,end:Boolean,icon:y1,...ma(),...T1({tag:"i"}),...s4()},"v-icon"),C1=S2({name:"VIcon",props:tr2(),setup(t,e){let{attrs:n,slots:c}=e,s;c.default&&(s=M(()=>{var u,f;const h=(u=c.default)==null?void 0:u.call(c);if(!!h)return(f=XC(h).filter(d=>d.children&&typeof d.children=="string")[0])==null?void 0:f.children}));const{themeClasses:r}=u4(t),{iconData:a}=Z02(s||t),{sizeClasses:i}=va(t),{textColorClasses:o,textColorStyles:l}=mt(O2(t,"color"));return D2(()=>m(a.value.component,{tag:t.tag,icon:a.value.icon,class:["v-icon","notranslate",r.value,i.value,o.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[i.value?void 0:{fontSize:H2(t.size),height:H2(t.size),width:H2(t.size)},l.value],"aria-hidden":"true"},null)),{}}});function uM(t){const e=q(),n=q(!1);if(Xo){const c=new IntersectionObserver(s=>{t==null||t(s,c),n.value=!!s.find(r=>r.isIntersecting)});B4(()=>{c.disconnect()}),R2(e,(s,r)=>{r&&(c.unobserve(r),n.value=!1),s&&c.observe(s)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}function fM(t){const e=q(),n=q();if(f1){const c=new ResizeObserver(s=>{t==null||t(s,c),s.length&&(n.value=s[0].contentRect)});B4(()=>{c.disconnect()}),R2(e,(s,r)=>{r&&(c.unobserve(r),n.value=void 0),s&&c.observe(s)},{flush:"post"})}return{resizeRef:e,contentRect:Kc(n)}}const nr2=S2({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ma(),...T1({tag:"div"}),...s4()},setup(t,e){let{slots:n}=e;const c=20,s=2*Math.PI*c,r=q(),{themeClasses:a}=u4(t),{sizeClasses:i,sizeStyles:o}=va(t),{textColorClasses:l,textColorStyles:u}=mt(O2(t,"color")),{textColorClasses:f,textColorStyles:h}=mt(O2(t,"bgColor")),{intersectionRef:d,isIntersecting:v}=uM(),{resizeRef:g,contentRect:H}=fM(),p=M(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),V=M(()=>Number(t.width)),z=M(()=>o.value?Number(t.size):H.value?H.value.width:Math.max(V.value,32)),_=M(()=>c/(1-V.value/z.value)*2),b=M(()=>V.value/z.value*_.value),x=M(()=>H2((100-p.value)/100*s));return Me(()=>{d.value=r.value,g.value=r.value}),D2(()=>m(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},a.value,i.value,l.value],style:[o.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:p.value},{default:()=>[m("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${_.value} ${_.value}`},[m("circle",{class:["v-progress-circular__underlay",f.value],style:h.value,fill:"transparent",cx:"50%",cy:"50%",r:c,"stroke-width":b.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),m("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:c,"stroke-width":b.value,"stroke-dasharray":s,"stroke-dashoffset":x.value},null)]),n.default&&m("div",{class:"v-progress-circular__content"},[n.default({value:p.value})])]})),{}}});const zi=Symbol("rippleStop"),cr2=80;function $u(t,e){t.style.transform=e,t.style.webkitTransform=e}function p8(t,e){t.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function Ci(t){return t.constructor.name==="TouchEvent"}function hM(t){return t.constructor.name==="KeyboardEvent"}const sr2=function(t,e){var n;let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,r=0;if(!hM(t)){const h=e.getBoundingClientRect(),d=Ci(t)?t.touches[t.touches.length-1]:t;s=d.clientX-h.left,r=d.clientY-h.top}let a=0,i=.3;(n=e._ripple)!=null&&n.circle?(i=.15,a=e.clientWidth/2,a=c.center?a:a+Math.sqrt((s-a)**2+(r-a)**2)/4):a=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const o=`${(e.clientWidth-a*2)/2}px`,l=`${(e.clientHeight-a*2)/2}px`,u=c.center?o:`${s-a}px`,f=c.center?l:`${r-a}px`;return{radius:a,scale:i,x:u,y:f,centerX:o,centerY:l}},cr={show(t,e){var n;let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const s=document.createElement("span"),r=document.createElement("span");s.appendChild(r),s.className="v-ripple__container",c.class&&(s.className+=` ${c.class}`);const{radius:a,scale:i,x:o,y:l,centerX:u,centerY:f}=sr2(t,e,c),h=`${a*2}px`;r.className="v-ripple__animation",r.style.width=h,r.style.height=h,e.appendChild(s);const d=window.getComputedStyle(e);d&&d.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),$u(r,`translate(${o}, ${l}) scale3d(${i},${i},${i})`),p8(r,0),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),$u(r,`translate(${u}, ${f}) scale3d(1,1,1)`),p8(r,.08)},0)},hide(t){var e;if(!(t!=null&&(e=t._ripple)!=null&&e.enabled))return;const n=t.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const c=n[n.length-1];if(c.dataset.isHiding)return;c.dataset.isHiding="true";const s=performance.now()-Number(c.dataset.activated),r=Math.max(250-s,0);setTimeout(()=>{c.classList.remove("v-ripple__animation--in"),c.classList.add("v-ripple__animation--out"),p8(c,0),setTimeout(()=>{t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),c.parentNode&&t.removeChild(c.parentNode)},300)},r)}};function dM(t){return typeof t>"u"||!!t}function Mc(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[zi])){if(t[zi]=!0,Ci(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||hM(t),n._ripple.class&&(e.class=n._ripple.class),Ci(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{cr.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var c;n!=null&&(c=n._ripple)!=null&&c.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},cr2)}else cr.show(t,n,e)}}function Uu(t){t[zi]=!0}function d4(t){const e=t.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{d4(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),cr.hide(e)}}function mM(t){const e=t.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let bc=!1;function vM(t){!bc&&(t.keyCode===_u.enter||t.keyCode===_u.space)&&(bc=!0,Mc(t))}function pM(t){bc=!1,d4(t)}function gM(t){bc&&(bc=!1,d4(t))}function yM(t,e,n){var c;const{value:s,modifiers:r}=e,a=dM(s);if(a||cr.hide(t),t._ripple=(c=t._ripple)!=null?c:{},t._ripple.enabled=a,t._ripple.centered=r.center,t._ripple.circle=r.circle,vi(s)&&s.class&&(t._ripple.class=s.class),a&&!n){if(r.stop){t.addEventListener("touchstart",Uu,{passive:!0}),t.addEventListener("mousedown",Uu);return}t.addEventListener("touchstart",Mc,{passive:!0}),t.addEventListener("touchend",d4,{passive:!0}),t.addEventListener("touchmove",mM,{passive:!0}),t.addEventListener("touchcancel",d4),t.addEventListener("mousedown",Mc),t.addEventListener("mouseup",d4),t.addEventListener("mouseleave",d4),t.addEventListener("keydown",vM),t.addEventListener("keyup",pM),t.addEventListener("blur",gM),t.addEventListener("dragstart",d4,{passive:!0})}else!a&&n&&HM(t)}function HM(t){t.removeEventListener("mousedown",Mc),t.removeEventListener("touchstart",Mc),t.removeEventListener("touchend",d4),t.removeEventListener("touchmove",mM),t.removeEventListener("touchcancel",d4),t.removeEventListener("mouseup",d4),t.removeEventListener("mouseleave",d4),t.removeEventListener("keydown",vM),t.removeEventListener("keyup",pM),t.removeEventListener("dragstart",d4),t.removeEventListener("blur",gM)}function rr2(t,e){yM(t,e,!1)}function ar2(t){delete t._ripple,HM(t)}function ir2(t,e){if(e.value===e.oldValue)return;const n=dM(e.oldValue);yM(t,e,n)}const t7={mounted:rr2,unmounted:ar2,updated:ir2},W6=k2({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function K6(t){return{dimensionStyles:M(()=>({height:H2(t.height),maxHeight:H2(t.maxHeight),maxWidth:H2(t.maxWidth),minHeight:H2(t.minHeight),minWidth:H2(t.minWidth),width:H2(t.width)}))}}const or2={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},lr2={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},n7=Symbol.for("vuetify:rtl");function ur2(t,e){var n;return fr2({rtl:{...lr2,...(n=e==null?void 0:e.rtl)!=null?n:{}},isRtl:q(!1),rtlClasses:q("")},t)}function fr2(t,e,n){const c=M(()=>typeof(n==null?void 0:n.rtl)=="boolean"?n.rtl:e.current.value&&t.rtl.hasOwnProperty(e.current.value)?t.rtl[e.current.value]:t.isRtl.value);return{isRtl:c,rtl:t.rtl,rtlClasses:M(()=>`v-locale--is-${c.value?"rtl":"ltr"}`)}}function ds(){const t=B2(n7);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return t}const hr2=S2({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...E3(),...T1(),...s4()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const c=F4(t,"modelValue"),{isRtl:s}=ds(),{themeClasses:r}=u4(t),{textColorClasses:a,textColorStyles:i}=mt(t,"color"),{backgroundColorClasses:o,backgroundColorStyles:l}=r3(M(()=>t.bgColor||t.color)),{backgroundColorClasses:u,backgroundColorStyles:f}=r3(t,"color"),{roundedClasses:h}=P3(t),{intersectionRef:d,isIntersecting:v}=uM(),g=M(()=>parseInt(t.max,10)),H=M(()=>parseInt(t.height,10)),p=M(()=>parseFloat(t.bufferValue)/g.value*100),V=M(()=>parseFloat(c.value)/g.value*100),z=M(()=>s.value!==t.reverse),_=M(()=>t.indeterminate?"fade-transition":"slide-x-transition"),b=M(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function x(L){if(!d.value)return;const{left:I,right:A,width:O}=d.value.getBoundingClientRect(),W=z.value?O-L.clientX+(A-O):L.clientX-I;c.value=Math.round(W/O*g.value)}return D2(()=>m(t.tag,{ref:d,class:["v-progress-linear",{"v-progress-linear--active":t.active&&v.value,"v-progress-linear--reverse":z.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},h.value,r.value],style:{height:t.active?H2(H.value):0,"--v-progress-linear-height":H2(H.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:V.value,onClick:t.clickable&&x},{default:()=>[t.stream&&m("div",{key:"stream",class:["v-progress-linear__stream",a.value],style:{...i.value,[z.value?"left":"right"]:H2(-H.value),borderTop:`${H2(H.value/2)} dotted`,opacity:b.value,top:`calc(50% - ${H2(H.value/4)})`,width:H2(100-p.value,"%"),"--v-progress-linear-stream-to":H2(H.value*(z.value?1:-1))}},null),m("div",{class:["v-progress-linear__background",o.value],style:[l.value,{opacity:b.value,width:H2(t.stream?p.value:100,"%")}]},null),m(s3,{name:_.value},{default:()=>[t.indeterminate?m("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(L=>m("div",{key:L,class:["v-progress-linear__indeterminate",L,u.value],style:f.value},null))]):m("div",{class:["v-progress-linear__determinate",u.value],style:[f.value,{width:H2(V.value,"%")}]},null)]}),n.default&&m("div",{class:"v-progress-linear__content"},[n.default({value:V.value,buffer:p.value})])]})),{}}}),c7=k2({loading:Boolean},"loader");function s7(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();return{loaderClasses:M(()=>({[`${e}--loading`]:t.loading}))}}function VM(t,e){var n;let{slots:c}=e;return m("div",{class:`${t.name}__loader`},[((n=c.default)==null?void 0:n.call(c,{color:t.color,isActive:t.active}))||m(hr2,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const qu={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},zM=k2({location:String},"location");function CM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:c}=ds();return{locationStyles:M(()=>{if(!t.location)return{};const{side:r,align:a}=gi(t.location.split(" ").length>1?t.location:`${t.location} center`,c.value);function i(l){return n?n(l):0}const o={};return r!=="center"&&(e?o[qu[r]]=`calc(100% - ${i(r)}px)`:o[r]=0),a!=="center"?e?o[qu[a]]=`calc(100% - ${i(a)}px)`:o[a]=0:(r==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),o})}}const dr2=["static","relative","fixed","absolute","sticky"],MM=k2({position:{type:String,validator:t=>dr2.includes(t)}},"position");function bM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();return{positionClasses:M(()=>t.position?`${e}--${t.position}`:void 0)}}function wM(){var t,e;return(t=c4("useRouter"))==null||(e=t.proxy)==null?void 0:e.$router}function r7(t,e){const n=Fx("RouterLink"),c=M(()=>!!(t.href||t.to)),s=M(()=>(c==null?void 0:c.value)||!!(e.onClick||e.onClickOnce));if(typeof n=="string")return{isLink:c,isClickable:s,href:O2(t,"href")};const r=t.to?n.useLink(t):void 0;return{...r,isLink:c,isClickable:s,href:M(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const a7=k2({href:String,replace:Boolean,to:[String,Object]},"router");let g8=!1;function mr2(t,e){let n=!1,c,s;f1&&(_4(()=>{window.addEventListener("popstate",r),c=t==null?void 0:t.beforeEach((a,i,o)=>{g8?n?e(o):o():setTimeout(()=>n?e(o):o()),g8=!0}),s=t==null?void 0:t.afterEach(()=>{g8=!1})}),Lt(()=>{var a,i;window.removeEventListener("popstate",r),(a=c)==null||a(),(i=s)==null||i()}));function r(a){var i;(i=a.state)!=null&&i.replaced||(n=!0,setTimeout(()=>n=!1))}}function vr2(t,e){R2(()=>{var n;return(n=t.isExactActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&_4(()=>{e(!0)})},{immediate:!0})}const v1=S2({name:"VBtn",directives:{Ripple:t7},props:{active:Boolean,symbol:{type:null,default:oM},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:y1,appendIcon:y1,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...At(),...E3(),...we(),...W6(),...Pt(),...$02(),...c7(),...zM(),...MM(),...a7(),...ma(),...T1({tag:"button"}),...s4(),...hs({variant:"elevated"})},emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:c}=e;const{themeClasses:s}=u4(t),{borderClasses:r}=Tt(t),{colorClasses:a,colorStyles:i,variantClasses:o}=e7(t),{densityClasses:l}=Et(t),{dimensionStyles:u}=K6(t),{elevationClasses:f}=Dt(t),{loaderClasses:h}=s7(t),{locationStyles:d}=CM(t),{positionClasses:v}=bM(t),{roundedClasses:g}=P3(t),{sizeClasses:H}=va(t),p=U02(t,t.symbol,!1),V=r7(t,n),z=M(()=>(p==null?void 0:p.disabled.value)||t.disabled),_=M(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border));return vr2(V,p==null?void 0:p.select),D2(()=>{var b,x,L,I,A,O,W,T;const $=V.isLink.value?"a":t.tag,f2=!p||p.isSelected.value,m2=!!(t.prependIcon||c.prepend),Z=!!(t.appendIcon||c.append);return e4(m($,{type:$==="a"?void 0:"button",class:["v-btn",p==null?void 0:p.selectedClass.value,{"v-btn--active":t.active,"v-btn--block":t.block,"v-btn--disabled":z.value,"v-btn--elevated":_.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},s.value,r.value,f2?a.value:void 0,l.value,f.value,h.value,v.value,g.value,H.value,o.value],style:[f2?i.value:void 0,u.value,d.value],disabled:z.value||void 0,href:V.href.value,onClick:c2=>{var d2;z.value||((d2=V.navigate)==null||d2.call(V,c2),p==null||p.toggle())}},{default:()=>[Zo(!0,"v-btn"),!t.icon&&m2&&m(e3,{key:"prepend",defaults:{VIcon:{icon:t.prependIcon}}},{default:()=>[m("span",{class:"v-btn__prepend"},[(b=(x=c.prepend)==null?void 0:x.call(c))!=null?b:m(C1,null,null)])]}),m("span",{class:"v-btn__content","data-no-activator":""},[m(e3,{key:"content",defaults:{VIcon:{icon:typeof t.icon=="string"?t.icon:void 0}}},{default:()=>[(L=(I=c.default)==null?void 0:I.call(c))!=null?L:typeof t.icon=="string"&&m(C1,{key:"icon"},null)]})]),!t.icon&&Z&&m(e3,{key:"append",defaults:{VIcon:{icon:t.appendIcon}}},{default:()=>[m("span",{class:"v-btn__append"},[(A=(O=c.append)==null?void 0:O.call(c))!=null?A:m(C1,null,null)])]}),!!t.loading&&m("span",{key:"loader",class:"v-btn__loader"},[(W=(T=c.loader)==null?void 0:T.call(c))!=null?W:m(nr2,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[U6("ripple"),!z.value&&t.ripple,null]])}),{}}});const xn=S2({name:"VCardActions",setup(t,e){let{slots:n}=e;return It({VBtn:{variant:"text"}}),D2(()=>{var c;return m("div",{class:"v-card-actions"},[(c=n.default)==null?void 0:c.call(n)])}),{}}});function pr2(t){return{aspectStyles:M(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const gr2=S2({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...W6()},setup(t,e){let{slots:n}=e;const{aspectStyles:c}=pr2(t),{dimensionStyles:s}=K6(t);return D2(()=>{var r;return m("div",{class:"v-responsive",style:s.value},[m("div",{class:"v-responsive__sizer",style:c.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&m("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function yr2(t,e){if(!Xo)return;const n=e.modifiers||{},c=e.value,{handler:s,options:r}=typeof c=="object"?c:{handler:c,options:{}},a=new IntersectionObserver(function(){var i;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const u=(i=t._observe)==null?void 0:i[e.instance.$.uid];if(!u)return;const f=o.some(h=>h.isIntersecting);s&&(!n.quiet||u.init)&&(!n.once||f||u.init)&&s(f,o,l),f&&n.once?LM(t,e):u.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:a},a.observe(t)}function LM(t,e){var n;const c=(n=t._observe)==null?void 0:n[e.instance.$.uid];!c||(c.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const Hr2={mounted:yr2,unmounted:LM},SM=Hr2,ms=k2({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),Je=(t,e)=>{var n;let{slots:c}=e;const{transition:s,...r}=t;if(!s||typeof s=="boolean")return(n=c.default)==null?void 0:n.call(c);const{component:a=s3,...i}=typeof s=="object"?s:{};return y4(a,G1(typeof s=="string"?{name:s}:i,r),c)},b4=S2({name:"VImg",directives:{intersect:SM},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ms()},emits:["loadstart","load","error"],setup(t,e){let{emit:n,slots:c}=e;const s=q(""),r=q(),a=q(t.eager?"loading":"idle"),i=q(),o=q(),l=M(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=M(()=>l.value.aspect||i.value/o.value||0);R2(()=>t.src,()=>{f(a.value!=="idle")}),Pr(()=>f());function f(L){if(!(t.eager&&L)&&!(Xo&&!L&&!t.eager)){if(a.value="loading",l.value.lazySrc){const I=new Image;I.src=l.value.lazySrc,g(I,null)}!l.value.src||_4(()=>{var I,A;if(n("loadstart",((I=r.value)==null?void 0:I.currentSrc)||l.value.src),(A=r.value)!=null&&A.complete){if(r.value.naturalWidth||d(),a.value==="error")return;u.value||g(r.value,null),h()}else u.value||g(r.value),v()})}}function h(){var L;v(),a.value="loaded",n("load",((L=r.value)==null?void 0:L.currentSrc)||l.value.src)}function d(){var L;a.value="error",n("error",((L=r.value)==null?void 0:L.currentSrc)||l.value.src)}function v(){const L=r.value;L&&(s.value=L.currentSrc||L.src)}function g(L){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const A=()=>{const{naturalHeight:O,naturalWidth:W}=L;O||W?(i.value=W,o.value=O):!L.complete&&a.value==="loading"&&I!=null?setTimeout(A,I):(L.currentSrc.endsWith(".svg")||L.currentSrc.startsWith("data:image/svg+xml"))&&(i.value=1,o.value=1)};A()}const H=M(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),p=M(()=>{var L;if(!l.value.src||a.value==="idle")return;const I=y4("img",{class:["v-img__img",H.value],src:l.value.src,srcset:l.value.srcset,alt:"",sizes:t.sizes,ref:r,onLoad:h,onError:d}),A=(L=c.sources)==null?void 0:L.call(c);return m(Je,{transition:t.transition,appear:!0},{default:()=>[e4(A?m("picture",{class:"v-img__picture"},[A,I]):I,[[m3,a.value==="loaded"]])]})}),V=M(()=>m(Je,{transition:t.transition},{default:()=>[l.value.lazySrc&&a.value!=="loaded"&&m("img",{class:["v-img__img","v-img__img--preload",H.value],src:l.value.lazySrc,alt:""},null)]})),z=M(()=>{if(!!c.placeholder)return m(Je,{transition:t.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!c.error)&&m("div",{class:"v-img__placeholder"},[c.placeholder()])]})}),_=M(()=>{if(!!c.error)return m(Je,{transition:t.transition,appear:!0},{default:()=>[a.value==="error"&&m("div",{class:"v-img__error"},[c.error()])]})}),b=M(()=>{if(!!t.gradient)return m("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null)}),x=q(!1);{const L=R2(u,I=>{I&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{x.value=!0})}),L())})}return D2(()=>e4(m(gr2,{class:["v-img",{"v-img--booting":!x.value}],style:{width:H2(t.width==="auto"?i.value:t.width)},aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>[p.value,V.value,b.value,z.value,_.value],default:c.default}),[[U6("intersect"),{handler:f,options:t.options},null,{once:!0}]])),{currentSrc:s,image:r,state:a,naturalWidth:i,naturalHeight:o}}}),Vr2=k2({color:String,start:Boolean,end:Boolean,icon:y1,image:String,...we(),...E3(),...ma(),...T1()}),S6=S2({name:"VAvatar",props:Vr2(),setup(t,e){let{slots:n}=e;const{backgroundColorClasses:c,backgroundColorStyles:s}=r3(O2(t,"color")),{densityClasses:r}=Et(t),{roundedClasses:a}=P3(t),{sizeClasses:i,sizeStyles:o}=va(t);return D2(()=>{var l;return m(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},c.value,r.value,a.value,i.value],style:[s.value,o.value]},{default:()=>[t.image?m(b4,{src:t.image,alt:""},null):t.icon?m(C1,{icon:t.icon},null):(l=n.default)==null?void 0:l.call(n)]})}),{}}}),_n=G6("v-card-subtitle"),K4=G6("v-card-title"),zr2=be({name:"VCardItem",props:{appendAvatar:String,appendIcon:y1,prependAvatar:String,prependIcon:y1,subtitle:String,title:String,...we()},setup(t,e){let{slots:n}=e;return D2(()=>{var c,s,r,a,i,o,l,u,f;const h=!!(t.prependAvatar||t.prependIcon||n.prepend),d=!!(t.appendAvatar||t.appendIcon||n.append),v=!!(t.title||n.title),g=!!(t.subtitle||n.subtitle);return m("div",{class:"v-card-item"},[h&&m(e3,{key:"prepend",defaults:{VAvatar:{density:t.density,icon:t.prependIcon,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},{default:()=>[m("div",{class:"v-card-item__prepend"},[(c=(s=n.prepend)==null?void 0:s.call(n))!=null?c:m(S6,null,null)])]}),m("div",{class:"v-card-item__content"},[v&&m(K4,{key:"title"},{default:()=>[(r=(a=n.title)==null?void 0:a.call(n))!=null?r:t.title]}),g&&m(_n,{key:"subtitle"},{default:()=>[(i=(o=n.subtitle)==null?void 0:o.call(n))!=null?i:t.subtitle]}),(l=n.default)==null?void 0:l.call(n)]),d&&m(e3,{key:"append",defaults:{VAvatar:{density:t.density,icon:t.appendIcon,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},{default:()=>[m("div",{class:"v-card-item__append"},[(u=(f=n.append)==null?void 0:f.call(n))!=null?u:m(S6,null,null)])]})])}),{}}}),g3=G6("v-card-text"),E4=S2({name:"VCard",directives:{Ripple:t7},props:{appendAvatar:String,appendIcon:y1,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:y1,ripple:Boolean,subtitle:String,text:String,title:String,...s4(),...At(),...we(),...W6(),...Pt(),...c7(),...zM(),...MM(),...E3(),...a7(),...T1(),...hs({variant:"elevated"})},setup(t,e){let{attrs:n,slots:c}=e;const{themeClasses:s}=u4(t),{borderClasses:r}=Tt(t),{colorClasses:a,colorStyles:i,variantClasses:o}=e7(t),{densityClasses:l}=Et(t),{dimensionStyles:u}=K6(t),{elevationClasses:f}=Dt(t),{loaderClasses:h}=s7(t),{locationStyles:d}=CM(t),{positionClasses:v}=bM(t),{roundedClasses:g}=P3(t),H=r7(t,n),p=M(()=>t.link!==!1&&H.isLink.value),V=M(()=>!t.disabled&&t.link!==!1&&(t.link||H.isClickable.value));return D2(()=>{var z,_,b,x,L;const I=p.value?"a":t.tag,A=!!(c.title||t.title),O=!!(c.subtitle||t.subtitle),W=A||O,T=!!(c.append||t.appendAvatar||t.appendIcon),$=!!(c.prepend||t.prependAvatar||t.prependIcon),f2=!!(c.image||t.image),m2=W||$||T,Z=!!(c.text||t.text);return e4(m(I,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":V.value},s.value,r.value,a.value,l.value,f.value,h.value,v.value,g.value,o.value],style:[i.value,u.value,d.value],href:H.href.value,onClick:V.value&&H.navigate},{default:()=>[f2&&m(e3,{key:"image",defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[m("div",{class:"v-card__image"},[(z=(_=c.image)==null?void 0:_.call(c))!=null?z:m(b4,null,null)])]}),m(VM,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:c.loader}),m2&&m(zr2,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:c.item,prepend:c.prepend,title:c.title,subtitle:c.subtitle,append:c.append}),Z&&m(g3,{key:"text"},{default:()=>[(b=(x=c.text)==null?void 0:x.call(c))!=null?b:t.text]}),(L=c.default)==null?void 0:L.call(c),c.actions&&m(xn,null,{default:c.actions}),Zo(V.value,"v-card")]}),[[U6("ripple"),V.value]])}),{}}});const Q6=S2({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...T1()},setup(t,e){let{slots:n}=e;return D2(()=>m(t.tag,{class:["v-container",{"v-container--fluid":t.fluid}]},n)),{}}}),i7=["sm","md","lg","xl","xxl"],xM=(()=>i7.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),_M=(()=>i7.reduce((t,e)=>(t["offset"+Ce(e)]={type:[String,Number],default:null},t),{}))(),NM=(()=>i7.reduce((t,e)=>(t["order"+Ce(e)]={type:[String,Number],default:null},t),{}))(),ju={col:Object.keys(xM),offset:Object.keys(_M),order:Object.keys(NM)};function Cr2(t,e,n){let c=t;if(!(n==null||n===!1))return e&&(c+=`-${e.replace(t,"")}`),t==="col"&&(c="v-"+c),t==="col"&&(n===""||n===!0)||(c+=`-${n}`),c.toLowerCase()}const r6=S2({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...xM,offset:{type:[String,Number],default:null},..._M,order:{type:[String,Number],default:null},...NM,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},...T1()},setup(t,e){let{slots:n}=e;const c=M(()=>{const s=[];let r;for(r in ju)ju[r].forEach(i=>{const o=t[i],l=Cr2(r,i,o);l&&s.push(l)});const a=s.some(i=>i.startsWith("v-col-"));return s.push({"v-col":!a||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),s});return()=>{var s;return y4(t.tag,{class:c.value},(s=n.default)==null?void 0:s.call(n))}}}),Mr2=["sm","md","lg","xl","xxl"],o7=["start","end","center"];function l7(t,e){return Mr2.reduce((n,c)=>(n[t+Ce(c)]=e(),n),{})}const kM=t=>[...o7,"baseline","stretch"].includes(t),IM=l7("align",()=>({type:String,default:null,validator:kM})),AM=t=>[...o7,"space-between","space-around"].includes(t),TM=l7("justify",()=>({type:String,default:null,validator:AM})),EM=t=>[...o7,"space-between","space-around","stretch"].includes(t),PM=l7("alignContent",()=>({type:String,default:null,validator:EM})),Gu={align:Object.keys(IM),justify:Object.keys(TM),alignContent:Object.keys(PM)},br2={align:"align",justify:"justify",alignContent:"align-content"};function wr2(t,e,n){let c=br2[t];if(n!=null)return e&&(c+=`-${e.replace(t,"")}`),c+=`-${n}`,c.toLowerCase()}const Mi=S2({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:kM},...IM,justify:{type:String,default:null,validator:AM},...TM,alignContent:{type:String,default:null,validator:EM},...PM,...T1()},setup(t,e){let{slots:n}=e;const c=M(()=>{const s=[];let r;for(r in Gu)Gu[r].forEach(a=>{const i=t[a],o=wr2(r,a,i);o&&s.push(o)});return s.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),s});return()=>{var s;return y4(t.tag,{class:["v-row",c.value]},(s=n.default)==null?void 0:s.call(n))}}}),a6=G6("flex-grow-1","div","VSpacer");function V4(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return S2({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(c,s){let{slots:r}=s;return()=>{const a=c.group?q_:s3;return y4(a,{name:t,mode:c.mode,onBeforeEnter(i){i.style.transformOrigin=c.origin},onLeave(i){if(c.leaveAbsolute){const{offsetTop:o,offsetLeft:l,offsetWidth:u,offsetHeight:f}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${o}px`,i.style.left=`${l}px`,i.style.width=`${u}px`,i.style.height=`${f}px`}c.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(c.leaveAbsolute&&i!=null&&i._transitionInitialStyles){const{position:o,top:l,left:u,width:f,height:h}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=o||"",i.style.top=l||"",i.style.left=u||"",i.style.width=f||"",i.style.height=h||""}}},r.default)}}})}function DM(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return S2({name:t,props:{mode:{type:String,default:n}},setup(c,s){let{slots:r}=s;return()=>y4(s3,{name:t,...e},r.default)}})}function RM(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",c=S4(`offset-${n}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[n]:a.style[n]}},onEnter(a){const i=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const o=`${a[c]}px`;a.style[n]="0",a.offsetHeight,a.style.transition=i.transition,t&&a._parent&&a._parent.classList.add(t),requestAnimationFrame(()=>{a.style[n]=o})},onAfterEnter:r,onEnterCancelled:r,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[n]:a.style[n]},a.style.overflow="hidden",a.style[n]=`${a[c]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(a){t&&a._parent&&a._parent.classList.remove(t),r(a)}function r(a){const i=a._initialStyle[n];a.style.overflow=a._initialStyle.overflow,i!=null&&(a.style[n]=i),delete a._initialStyle}}const Lr2=S2({name:"VDialogTransition",props:{target:Object},setup(t,e){let{slots:n}=e;const c={onBeforeEnter(s){s.style.pointerEvents="none",s.style.visibility="hidden"},async onEnter(s,r){var a;await new Promise(d=>requestAnimationFrame(d)),await new Promise(d=>requestAnimationFrame(d)),s.style.visibility="";const{x:i,y:o,sx:l,sy:u,speed:f}=Ku(t.target,s),h=s.animate([{transform:`translate(${i}px, ${o}px) scale(${l}, ${u})`,opacity:0},{transform:""}],{duration:225*f,easing:C02});(a=Wu(s))==null||a.forEach(d=>{d.animate([{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*f,easing:er})}),h.finished.then(()=>r())},onAfterEnter(s){s.style.removeProperty("pointer-events")},onBeforeLeave(s){s.style.pointerEvents="none"},async onLeave(s,r){var a;await new Promise(d=>requestAnimationFrame(d));const{x:i,y:o,sx:l,sy:u,speed:f}=Ku(t.target,s);s.animate([{transform:""},{transform:`translate(${i}px, ${o}px) scale(${l}, ${u})`,opacity:0}],{duration:125*f,easing:M02}).finished.then(()=>r()),(a=Wu(s))==null||a.forEach(d=>{d.animate([{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:er})})},onAfterLeave(s){s.style.removeProperty("pointer-events")}};return()=>t.target?m(s3,G1({name:"dialog-transition"},c,{css:!1}),n):m(s3,{name:"dialog-transition"},n)}});function Wu(t){var e;const n=(e=t.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return n&&[...n]}function Ku(t,e){const n=t.getBoundingClientRect(),c=Ko(e),[s,r]=getComputedStyle(e).transformOrigin.split(" ").map(p=>parseFloat(p)),[a,i]=getComputedStyle(e).getPropertyValue("--v-overlay-anchor-origin").split(" ");let o=n.left+n.width/2;a==="left"||i==="left"?o-=n.width/2:(a==="right"||i==="right")&&(o+=n.width/2);let l=n.top+n.height/2;a==="top"||i==="top"?l-=n.height/2:(a==="bottom"||i==="bottom")&&(l+=n.height/2);const u=n.width/c.width,f=n.height/c.height,h=Math.max(1,u,f),d=u/h,v=f/h,g=c.width*c.height/(window.innerWidth*window.innerHeight),H=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:o-(s+c.left),y:l-(r+c.top),sx:d,sy:v,speed:H}}V4("fab-transition","center center","out-in");V4("dialog-bottom-transition");V4("dialog-top-transition");V4("fade-transition");V4("scale-transition");V4("scroll-x-transition");V4("scroll-x-reverse-transition");V4("scroll-y-transition");V4("scroll-y-reverse-transition");V4("slide-x-transition");V4("slide-x-reverse-transition");const OM=V4("slide-y-transition");V4("slide-y-reverse-transition");const i6=DM("expand-transition",RM()),Sr2=DM("expand-x-transition",RM("",!0));const xr2=S2({name:"VLabel",props:{text:String,...s4()},setup(t,e){let{slots:n}=e;return D2(()=>{var c;return m("label",{class:"v-label"},[t.text,(c=n.default)==null?void 0:c.call(n)])}),{}}}),n0=S2({name:"VFieldLabel",props:{floating:Boolean},setup(t,e){let{slots:n}=e;return D2(()=>m(xr2,{class:["v-field-label",{"v-field-label--floating":t.floating}],"aria-hidden":t.floating||void 0},n)),{}}}),_r2=k2({focused:Boolean},"focus");function Nr2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3();const n=F4(t,"focused"),c=M(()=>({[`${e}--focused`]:n.value}));function s(){n.value=!0}function r(){n.value=!1}return{focusClasses:c,isFocused:n,focus:s,blur:r}}const kr2=["underlined","outlined","filled","solo","plain"],FM=k2({appendInnerIcon:y1,bgColor:String,clearable:Boolean,clearIcon:{type:y1,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:y1,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>kr2.includes(t)},...s4(),...c7()},"v-field"),BM=N4()({name:"VField",inheritAttrs:!1,props:{id:String,..._r2(),...FM()},emits:{"click:clear":t=>!0,"click:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:c,slots:s}=e;const{themeClasses:r}=u4(t),{loaderClasses:a}=s7(t),{focusClasses:i,isFocused:o,focus:l,blur:u}=Nr2(t),f=M(()=>t.dirty||t.active),h=M(()=>!t.singleLine&&!!(t.label||s.label)),d=T3(),v=M(()=>t.id||`input-${d}`),g=q(),H=q(),p=q(),{backgroundColorClasses:V,backgroundColorStyles:z}=r3(O2(t,"bgColor")),{textColorClasses:_,textColorStyles:b}=mt(M(()=>f.value&&o.value&&!t.error&&!t.disabled?t.color:void 0));R2(f,I=>{if(h.value){const A=g.value.$el,O=H.value.$el,W=Ko(A),T=O.getBoundingClientRect(),$=T.x-W.x,f2=T.y-W.y-(W.height/2-T.height/2),m2=T.width/.75,Z=Math.abs(m2-W.width)>1?{maxWidth:H2(m2)}:void 0,c2=parseFloat(getComputedStyle(A).transitionDuration)*1e3||150,d2=parseFloat(getComputedStyle(O).getPropertyValue("--v-field-label-scale"));A.style.visibility="visible",O.style.visibility="hidden",A.animate([{transform:"translate(0)"},{transform:`translate(${$}px, ${f2}px) scale(${d2})`,...Z}],{duration:c2,easing:er,direction:I?"normal":"reverse"}).finished.then(()=>{A.style.removeProperty("visibility"),O.style.removeProperty("visibility")})}},{flush:"post"});const x=M(()=>({isActive:f,isFocused:o,controlRef:p,blur:u,focus:l}));function L(I){I.target!==document.activeElement&&I.preventDefault(),c("click:control",I)}return D2(()=>{var I,A,O;const W=t.variant==="outlined",T=s["prepend-inner"]||t.prependInnerIcon,$=!!(t.clearable||s.clear),f2=!!(s["append-inner"]||t.appendInnerIcon||$),m2=s.label?s.label({label:t.label,props:{for:v.value}}):t.label;return m("div",G1({class:["v-field",{"v-field--active":f.value,"v-field--appended":f2,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":T,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--has-label":!!m2,[`v-field--variant-${t.variant}`]:!0},r.value,V.value,i.value,a.value],style:[z.value,b.value],onClick:L},n),[m("div",{class:"v-field__overlay"},null),m(VM,{name:"v-field",active:t.loading,color:t.error?"error":t.color},{default:s.loader}),T&&m("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&m(C1,{key:"prepend-icon",onClick:n["onClick:prependInner"],icon:t.prependInnerIcon},null),(I=s["prepend-inner"])==null?void 0:I.call(s,x.value)]),m("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(t.variant)&&h.value&&m(n0,{key:"floating-label",ref:H,class:[_.value],floating:!0},{default:()=>[m2]}),m(n0,{ref:g,for:v.value},{default:()=>[m2]}),(A=s.default)==null?void 0:A.call(s,{...x.value,props:{id:v.value,class:"v-field__input"},focus:l,blur:u})]),$&&m(Sr2,{key:"clear"},{default:()=>[e4(m("div",{class:"v-field__clearable"},[s.clear?s.clear():m(C1,{onClick:Z=>c("click:clear",Z),icon:t.clearIcon},null)]),[[m3,t.dirty]])]}),f2&&m("div",{key:"append",class:"v-field__append-inner"},[(O=s["append-inner"])==null?void 0:O.call(s,x.value),t.appendInnerIcon&&m(C1,{key:"append-icon",onClick:n["onClick:appendInner"],icon:t.appendInnerIcon},null)]),m("div",{class:["v-field__outline",_.value]},[W&&m(c1,null,[m("div",{class:"v-field__outline__start"},null),h.value&&m("div",{class:"v-field__outline__notch"},[m(n0,{ref:H,floating:!0},{default:()=>[m2]})]),m("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(t.variant)&&h.value&&m(n0,{ref:H,floating:!0},{default:()=>[m2]})])])}),{controlRef:p}}});function Ir2(t){return fs(t,Object.keys(BM.props))}const Ar2=S2({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ms({transition:{component:OM,leaveAbsolute:!0,group:!0}})},setup(t,e){let{slots:n}=e;const c=M(()=>jn(t.messages)),{textColorClasses:s,textColorStyles:r}=mt(M(()=>t.color));return D2(()=>m(Je,{transition:t.transition,tag:"div",class:["v-messages",s.value],style:r.value},{default:()=>[t.active&&c.value.map((a,i)=>m("div",{class:"v-messages__message",key:`${i}-${c.value}`},[n.message?n.message({message:a}):a]))]})),{}}}),Tr2=Symbol.for("vuetify:form");function Er2(){return B2(Tr2,null)}const Pr2=k2({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function Dr2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A3(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:T3();const c=F4(t,"modelValue"),s=M(()=>{var z;return(z=t.validationValue)!=null?z:c.value}),r=Er2(),a=q([]),i=q(!0),o=M(()=>!!(jn(c.value===""?null:c.value).length||jn(s.value===""?null:s.value).length)),l=M(()=>!!(t.disabled||r!=null&&r.isDisabled.value)),u=M(()=>!!(t.readonly||r!=null&&r.isReadonly.value)),f=M(()=>t.errorMessages.length?jn(t.errorMessages):a.value),h=M(()=>t.error||f.value.length?!1:t.rules.length&&i.value?null:!0),d=q(!1),v=M(()=>({[`${e}--error`]:h.value===!1,[`${e}--dirty`]:o.value,[`${e}--disabled`]:l.value,[`${e}--readonly`]:u.value})),g=M(()=>{var z;return(z=t.name)!=null?z:F2(n)});Pr(()=>{r==null||r.register(g.value,V,H,p,h)}),B4(()=>{r==null||r.unregister(g.value)}),R2(s,()=>{s.value!=null&&V()});function H(){p(),c.value=null}function p(){i.value=!0,a.value=[]}async function V(){const z=[];d.value=!0;for(const _ of t.rules){if(z.length>=(t.maxErrors||1))break;const x=await(typeof _=="function"?_:()=>_)(s.value);if(x!==!0){if(typeof x!="string"){console.warn(`${x} is not a valid value. Rule functions must return boolean true or a string.`);continue}z.push(x)}}return a.value=z,d.value=!1,i.value=!1,a.value}return{errorMessages:f,isDirty:o,isDisabled:l,isReadonly:u,isPristine:i,isValid:h,isValidating:d,reset:H,resetValidation:p,validate:V,validationClasses:v}}const $M=k2({id:String,appendIcon:y1,prependIcon:y1,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},...we(),...Pr2()}),UM=N4()({name:"VInput",props:{...$M()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:c,emit:s}=e;const{densityClasses:r}=Et(t),a=T3(),i=M(()=>t.id||`input-${a}`),{errorMessages:o,isDirty:l,isDisabled:u,isReadonly:f,isPristine:h,isValid:d,isValidating:v,reset:g,resetValidation:H,validate:p,validationClasses:V}=Dr2(t,"v-input",i),z=M(()=>({id:i,isDirty:l,isDisabled:u,isReadonly:f,isPristine:h,isValid:d,isValidating:v,reset:g,resetValidation:H,validate:p}));return D2(()=>{var _,b,x,L,I;const A=!!(c.prepend||t.prependIcon),O=!!(c.append||t.appendIcon),W=!!((_=t.messages)!=null&&_.length||o.value.length),T=!t.hideDetails||t.hideDetails==="auto"&&(W||!!c.details);return m("div",{class:["v-input",`v-input--${t.direction}`,r.value,V.value]},[A&&m("div",{key:"prepend",class:"v-input__prepend"},[t.prependIcon&&m(C1,{key:"prepend-icon",onClick:n["onClick:prepend"],icon:t.prependIcon},null),(b=c.prepend)==null?void 0:b.call(c,z.value)]),c.default&&m("div",{class:"v-input__control"},[(x=c.default)==null?void 0:x.call(c,z.value)]),O&&m("div",{key:"append",class:"v-input__append"},[(L=c.append)==null?void 0:L.call(c,z.value),t.appendIcon&&m(C1,{key:"append-icon",onClick:n["onClick:append"],icon:t.appendIcon},null)]),T&&m("div",{class:"v-input__details"},[m(Ar2,{active:W,messages:o.value.length>0?o.value:t.messages},{message:c.message}),(I=c.details)==null?void 0:I.call(c,z.value)])])}),{reset:g,resetValidation:H,validate:p}}});function Rr2(t){return fs(t,Object.keys(UM.props))}const Or2=S2({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ms({transition:{component:OM}})},setup(t,e){let{slots:n}=e;const c=M(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return D2(()=>m(Je,{transition:t.transition},{default:()=>[e4(m("div",{class:"v-counter"},[n.default?n.default({counter:c.value,max:t.max,value:t.value}):c.value]),[[m3,t.active]])]})),{}}}),y8=Symbol("Forwarded refs");function qM(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),c=1;c<e;c++)n[c-1]=arguments[c];return t[y8]=n,new Proxy(t,{get(s,r){if(Reflect.has(s,r))return Reflect.get(s,r);for(const a of n)if(a.value&&Reflect.has(a.value,r)){const i=Reflect.get(a.value,r);return typeof i=="function"?i.bind(a.value):i}},getOwnPropertyDescriptor(s,r){const a=Reflect.getOwnPropertyDescriptor(s,r);if(a)return a;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const i of n){if(!i.value)continue;const o=Reflect.getOwnPropertyDescriptor(i.value,r);if(o)return o;if("_"in i.value&&"setupState"in i.value._){const l=Reflect.getOwnPropertyDescriptor(i.value._.setupState,r);if(l)return l}}for(const i of n){let o=i.value&&Object.getPrototypeOf(i.value);for(;o;){const l=Reflect.getOwnPropertyDescriptor(o,r);if(l)return l;o=Object.getPrototypeOf(o)}}for(const i of n){const o=i.value&&i.value[y8];if(!o)continue;const l=o.slice();for(;l.length;){const u=l.shift(),f=Reflect.getOwnPropertyDescriptor(u.value,r);if(f)return f;const h=u.value&&u.value[y8];h&&l.push(...h)}}}}})}const Fr2=["color","file","time","date","datetime-local","week","month"],vt=N4()({name:"VTextField",directives:{Intersect:SM},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...$M(),...FM()},emits:{"click:clear":t=>!0,"click:control":t=>!0,"click:input":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:c,slots:s}=e;const r=F4(t,"modelValue"),a=M(()=>{var V;return typeof t.counterValue=="function"?t.counterValue(r.value):((V=r.value)!=null?V:"").toString().length}),i=M(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter});function o(V,z){var _,b;!t.autofocus||!V||(_=z[0].target)==null||(b=_.focus)==null||b.call(_)}const l=q(),u=q(),f=q(!1),h=q(),d=M(()=>Fr2.includes(t.type)||t.persistentPlaceholder||f.value),v=M(()=>t.messages.length?t.messages:f.value||t.persistentHint?t.hint:"");function g(){if(h.value!==document.activeElement){var V;(V=h.value)==null||V.focus()}f.value||(f.value=!0)}function H(V){g(),c("click:control",V)}function p(V){V.stopPropagation(),g(),_4(()=>{r.value="",c("click:clear",V)})}return D2(()=>{const V=!!(s.counter||t.counter||t.counterValue),z=!!(V||s.details),[_,b]=c02(n),[{modelValue:x,...L}]=Rr2(t),[I]=Ir2(t);return m(UM,G1({ref:l,modelValue:r.value,"onUpdate:modelValue":A=>r.value=A,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-text-field--flush-details":["plain","underlined"].includes(t.variant)}],"onClick:prepend":n["onClick:prepend"],"onClick:append":n["onClick:append"]},_,L,{messages:v.value}),{...s,default:A=>{let{id:O,isDisabled:W,isDirty:T,isReadonly:$,isValid:f2}=A;return m(BM,G1({ref:u,onMousedown:m2=>{m2.target!==h.value&&m2.preventDefault()},"onClick:control":H,"onClick:clear":p,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"],role:"textbox"},I,{id:O.value,active:d.value||T.value,dirty:T.value||t.dirty,focused:f.value,error:f2.value===!1}),{...s,default:m2=>{let{props:{class:Z,...c2}}=m2;const d2=e4(m("input",G1({ref:h,"onUpdate:modelValue":J2=>r.value=J2,autofocus:t.autofocus,readonly:$.value,disabled:W.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:g,onBlur:()=>f.value=!1},c2,b),null),[[J_,r.value],[U6("intersect"),{handler:o},null,{once:!0}]]);return m(c1,null,[t.prefix&&m("span",{class:"v-text-field__prefix"},[t.prefix]),s.default?m("div",{class:Z,onClick:J2=>c("click:input",J2),"data-no-activator":""},[s.default(),d2]):C3(d2,{class:Z}),t.suffix&&m("span",{class:"v-text-field__suffix"},[t.suffix])])}})},details:z?A=>{var O;return m(c1,null,[(O=s.details)==null?void 0:O.call(s,A),V&&m(c1,null,[m("span",null,null),m(Or2,{active:t.persistentCounter||f.value,value:a.value,max:i.value},s.counter)])])}:void 0})}),qM({},l,u,h)}}),Br2={class:"body"},$r2=w2("CALCULATOR"),Ur2=w("div",{class:"resultbtn"},"Result",-1),qr2=w("p",null,null,-1),jr2=w("br",null,null,-1),Gr2=w("br",null,null,-1),Wr2=w("br",null,null,-1),Kr2=w("p",null," RESULT : ",-1),Qr2={__name:"BasicMathView",setup(t){const e=q(0),n=q(0),c=q(0),s=q(0),r=q(0),a=q(0),i=q(0);function o(){return c.value=e.value+n.value,s.value=e.value-n.value,r.value=e.value*n.value,a.value=e.value/n.value,i.value=(e.value+n.value)/2,c.value}return(l,u)=>(E2(),o1("div",Br2,[m(E4,{loading:l.loading,class:"mx-auto my-12","max-width":"500","max-height":"576",elevation:"9"},{default:P(()=>[m(K4,{class:"caltitle"},{default:P(()=>[$r2]),_:1}),m(Q6,{fluid:""},{default:P(()=>[m(vt,{label:"First Input",modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),modelModifiers:{number:!0}},null,8,["modelValue"]),m(vt,{label:"Second Input",modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=f=>n.value=f),modelModifiers:{number:!0}},null,8,["modelValue"]),m(v1,{block:"",color:"#34495E",elevation:"9",small:"","x-large":"","x-small":"",onClick:o},{default:P(()=>[Ur2]),_:1}),qr2,jr2,Gr2,Wr2,Kr2,w("p",null," Sum : "+T2(c.value),1),w("p",null," Difference : "+T2(s.value),1),w("p",null," Product : "+T2(r.value),1),w("p",null," Qoutient : "+T2(a.value),1),w("p",null," Average : "+T2(i.value),1)]),_:1})]),_:1},8,["loading"])]))}};const Yr2=w2(" STRING MANIPULATOR"),Xr2=w("div",{class:"getresbtn"},"Get Result",-1),Jr2=w("p",null,null,-1),Zr2=w("br",null,null,-1),ea2=w("br",null,null,-1),ta2=w("br",null,null,-1),na2={__name:"StringAppView",setup(t){const e=q(""),n=q(0),c=q(0),s=q(0),r=q(0);function a(){return n.value=e.value.match(/[aeiou]/gi).length,c.value=e.value.match(/[bcdfghjklmnpqrstvwxys]/gi).length,s.value=e.value.match(/[0123456789]/ig).length,r.value=e.value.replace(/[aeiou]/gi,"*"),n.value}return(i,o)=>(E2(),c3(E4,{loading:i.loading,class:"mx-auto my-12","max-width":"500","max-height":"500",elevation:"9"},{default:P(()=>[m(K4,{class:"stringtitle"},{default:P(()=>[Yr2]),_:1}),m(Q6,{fluid:""},{default:P(()=>[m(vt,{label:"Enter a String",modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l)},null,8,["modelValue"]),m(v1,{class:"v-btn",block:"",color:"#34495E",elevation:"9",small:"","x-large":"","x-small":"",onClick:a},{default:P(()=>[Xr2]),_:1}),Jr2,Zr2,ea2,ta2,w("p",null," Count Vowel /s : "+T2(n.value),1),w("p",null," Count Constant /s : "+T2(c.value),1),w("p",null," Count Numbers : "+T2(s.value),1),w("p",null," Vowel Conversion to (*) : "+T2(r.value),1)]),_:1})]),_:1},8,["loading"]))}};const Y6=(t,e)=>{const n=t.__vccOpts||t;for(const[c,s]of e)n[c]=s;return n},ca2={},sa2={id:"Home-page"},ra2={class:"intro"},aa2=w("h1",null," FINAL LABORATORY",-1),ia2=w("h1",null,"Dashboard",-1),oa2=w("p",null,null,-1),la2=w("p",null,null,-1),ua2=w("p",null,null,-1),fa2=w("p",null,null,-1),ha2=w("p",null,null,-1),da2=w("p",null,null,-1),ma2=w("p",null,null,-1),va2=w("p",null,null,-1),pa2=w("p",null,null,-1),ga2=w("p",null,null,-1),ya2=w("p",null,null,-1),Ha2=w("p",null,"Hi, My Name is Noble Peter Jansen.",-1),Va2=w2("Learn More");function za2(t,e){return E2(),o1("main",sa2,[w("main",null,[w("div",ra2,[aa2,ia2,oa2,la2,ua2,fa2,ha2,da2,ma2,va2,pa2,ga2,ya2,Ha2,m(v1,{elevation:"9",color:"#41B883","router-link":"",to:"/aboutapps",class:"learnmore"},{default:P(()=>[Va2]),_:1})])])])}const Ca2=Y6(ca2,[["render",za2]]);const Ma2={},ba2=u_('<br><br><br><br><br><br><br><h1 class="abouttitle">About Me </h1><header class="masthead"><p class="masthead-intro">Hi I&#39;m</p><h1 class="masthead-heading">Noble Peter Jansen!</h1></header><section class="introduction-section"><h1>Introduction</h1><p>I am a student at TIP Manila, taking BSIT program, a part time marketer, and soon to be web developer.</p><p>I love the internet, technology, and building beautiful things.</p></section><section class="location-section"><h1>Where I&#39;m From</h1><p>I&#39;m from Balic-balic Sampaloc Manila </p></section><section class="questions-section"><h1>More About Me</h1><h2>What are your favorite hobbies?</h2><p>My favorite hobby is building things on the internet like ecommerce sites and email marketing campaigns.</p><h2>What&#39;s your dream job?</h2><p>My dream job is similar to my current job except I would like to be building software instead of buildings.</p><h2>Where do you live?</h2><p>I live on a rural acreage, but I&#39;m close to Ottawa and Montreal.</p><h2>Why do you want to be a web developer?</h2><p>Because programming is awesome and programming for the internet is even more awesome.</p></section>',12),wa2=[ba2];function La2(t,e){return E2(),o1("main",null,wa2)}const Sa2=Y6(Ma2,[["render",La2]]),xa2=w("h1",null,"Quiz",-1),_a2={key:0,class:"quiz"},Na2={class:"quiz-info"},ka2={class:"questions"},Ia2={class:"score"},Aa2={class:"options"},Ta2=["name","value","disabled"],Ea2=["disabled"],Pa2={key:1},Da2=w("h2",null,"Done Quiz",-1),Ra2={__name:"AxiosDemoView",setup(t){const e=q([{question:"2+2=?",answer:2,options:["1","3","4","5"],selected:null},{question:"1+1=?",answer:0,options:["2","3","4","5"],selected:null},{question:"1+1=?",answer:0,options:["2","3","4","5"],selected:null}]),n=q(!1),c=q(0),s=M(()=>{let o=0;return e.value.map(l=>{l.selected==l.answer&&o++}),o}),r=M(()=>{let o=e.value[c.value];return o.index=c.value,o}),a=o=>{e.value[c.value].selected=o.target.value,o.target.value=null},i=()=>{c.value<e.value.length-1?c.value++:n=!0};return(o,l)=>(E2(),o1(c1,null,[xa2,n.value?(E2(),o1("section",Pa2,[Da2,w("p",null,"Your score is "+T2(F2(s))+"/"+T2(e.value.length),1)])):(E2(),o1("section",_a2,[w("div",Na2,[w("span",ka2,T2(F2(r).question),1),w("span",Ia2,"Score: "+T2(F2(s))+"/"+T2(e.value.length),1)]),w("div",Aa2,[(E2(!0),o1(c1,null,E0(F2(r).options,(u,f)=>(E2(),o1("label",{key:f,class:jc(`option ${F2(r).selected==f?f==F2(r).answer?"correct":"wrong":""} ${F2(r).selected!=null&&f!=F2(r).selected?"disabled":""}`)},[e4(w("input",{type:"radio",name:F2(r).index,value:f,"onUpdate:modelValue":l[0]||(l[0]=h=>F2(r).selected=h),disabled:F2(r).selected,onChange:a},null,40,Ta2),[[$d,F2(r).selected]]),w("span",null,T2(u),1)],2))),128))]),w("button",{onClick:i,disabled:!F2(r).selected},T2(F2(r).index==e.value.length-1?"Finish":F2(r).selected==null?"Select an option":"Next question"),9,Ea2)]))],64))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa2{constructor(e,n){this._delegate=e,this.firebase=n,j0(e,new L3("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),tC(this._delegate)))}_getService(e,n=ft){var c;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((c=s.getComponent())===null||c===void 0?void 0:c.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=ft){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){j0(this._delegate,e)}_addOrOverwriteComponent(e){Jz(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Qu=new Nt("app-compat","Firebase",Fa2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba2(t){const e={},n={__esModule:!0,initializeApp:r,app:s,registerVersion:X4,setLogLevel:cC,onLog:nC,apps:null,SDK_VERSION:kt,INTERNAL:{registerComponent:i,removeApp:c,useAsService:o,modularAPIs:X62}};n.default=n,Object.defineProperty(n,"apps",{get:a});function c(l){delete e[l]}function s(l){if(l=l||ft,!U9(e,l))throw Qu.create("no-app",{appName:l});return e[l]}s.App=t;function r(l,u={}){const f=Zz(l,u);if(U9(e,f.name))return e[f.name];const h=new t(f,n);return e[f.name]=h,h}function a(){return Object.keys(e).map(l=>e[l])}function i(l){const u=l.name,f=u.replace("-compat","");if(he(l)&&l.type==="PUBLIC"){const h=(d=s())=>{if(typeof d[f]!="function")throw Qu.create("invalid-app-argument",{appName:u});return d[f]()};l.serviceProps!==void 0&&U0(h,l.serviceProps),n[f]=h,t.prototype[f]=function(...d){return this._getService.bind(this,u).apply(this,l.multipleInstances?d:[])}}return l.type==="PUBLIC"?n[f]:null}function o(l,u){return u==="serverAuth"?null:u}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(){const t=Ba2(Oa2);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:jM,extendNamespace:e,createSubscribe:Kz,ErrorFactory:Nt,deepExtend:U0});function e(n){U0(t,n)}return t}const $a2=jM();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new aa("@firebase/app-compat"),Ua2="@firebase/app-compat",qa2="0.1.34";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja2(t){X4(Ua2,qa2,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(kt2()&&self.firebase!==void 0){Yu.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Yu.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const pa=$a2;ja2();var Ga2="firebase",Wa2="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pa.registerVersion(Ga2,Wa2,"app-compat");var Ka2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a2,u7=u7||{},g2=Ka2||self;function sr(){}function ga(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Qa2(t){return Object.prototype.hasOwnProperty.call(t,H8)&&t[H8]||(t[H8]=++Ya2)}var H8="closure_uid_"+(1e9*Math.random()>>>0),Ya2=0;function Xa2(t,e,n){return t.call.apply(t.bind,arguments)}function Ja2(t,e,n){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,c),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function W1(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W1=Xa2:W1=Ja2,W1.apply(null,arguments)}function c0(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var c=n.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function $1(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(c,s,r){for(var a=Array(arguments.length-2),i=2;i<arguments.length;i++)a[i-2]=arguments[i];return e.prototype[s].apply(c,a)}}function Le(){this.s=this.s,this.o=this.o}var Za2=0;Le.prototype.s=!1;Le.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Za2!=0)&&Qa2(this)};Le.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const GM=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function f7(t){const e=t.length;if(0<e){const n=Array(e);for(let c=0;c<e;c++)n[c]=t[c];return n}return[]}function Xu(t,e){for(let n=1;n<arguments.length;n++){const c=arguments[n];if(ga(c)){const s=t.length||0,r=c.length||0;t.length=s+r;for(let a=0;a<r;a++)t[s+a]=c[a]}else t.push(c)}}function K1(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}K1.prototype.h=function(){this.defaultPrevented=!0};var e82=function(){if(!g2.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{g2.addEventListener("test",sr,e),g2.removeEventListener("test",sr,e)}catch{}return t}();function rr(t){return/^[\s\xa0]*$/.test(t)}var Ju=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function V8(t,e){return t<e?-1:t>e?1:0}function ya(){var t=g2.navigator;return t&&(t=t.userAgent)?t:""}function G4(t){return ya().indexOf(t)!=-1}function h7(t){return h7[" "](t),t}h7[" "]=sr;function t82(t){var e=s82;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var n82=G4("Opera"),x6=G4("Trident")||G4("MSIE"),WM=G4("Edge"),bi=WM||x6,KM=G4("Gecko")&&!(ya().toLowerCase().indexOf("webkit")!=-1&&!G4("Edge"))&&!(G4("Trident")||G4("MSIE"))&&!G4("Edge"),c82=ya().toLowerCase().indexOf("webkit")!=-1&&!G4("Edge");function QM(){var t=g2.document;return t?t.documentMode:void 0}var ar;e:{var z8="",C8=function(){var t=ya();if(KM)return/rv:([^\);]+)(\)|;)/.exec(t);if(WM)return/Edge\/([\d\.]+)/.exec(t);if(x6)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(c82)return/WebKit\/(\S+)/.exec(t);if(n82)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(C8&&(z8=C8?C8[1]:""),x6){var M8=QM();if(M8!=null&&M8>parseFloat(z8)){ar=String(M8);break e}}ar=z8}var s82={};function r82(){return t82(function(){let t=0;const e=Ju(String(ar)).split("."),n=Ju("9").split("."),c=Math.max(e.length,n.length);for(let a=0;t==0&&a<c;a++){var s=e[a]||"",r=n[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=V8(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||V8(s[2].length==0,r[2].length==0)||V8(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var wi;if(g2.document&&x6){var Zu=QM();wi=Zu||parseInt(ar,10)||void 0}else wi=void 0;var a82=wi;function wc(t,e){if(K1.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(KM){e:{try{h7(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:i82[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wc.X.h.call(this)}}$1(wc,K1);var i82={2:"touch",3:"pen",4:"mouse"};wc.prototype.h=function(){wc.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ps="closure_listenable_"+(1e6*Math.random()|0),o82=0;function l82(t,e,n,c,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!c,this.ha=s,this.key=++o82,this.ba=this.ea=!1}function Ha(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function d7(t,e,n){for(const c in t)e.call(n,t[c],c,t)}function YM(t){const e={};for(const n in t)e[n]=t[n];return e}const ef="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function XM(t,e){let n,c;for(let s=1;s<arguments.length;s++){c=arguments[s];for(n in c)t[n]=c[n];for(let r=0;r<ef.length;r++)n=ef[r],Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n])}}function Va(t){this.src=t,this.g={},this.h=0}Va.prototype.add=function(t,e,n,c,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var a=Si(t,e,c,s);return-1<a?(e=t[a],n||(e.ea=!1)):(e=new l82(e,this.src,r,!!c,s),e.ea=n,t.push(e)),e};function Li(t,e){var n=e.type;if(n in t.g){var c=t.g[n],s=GM(c,e),r;(r=0<=s)&&Array.prototype.splice.call(c,s,1),r&&(Ha(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Si(t,e,n,c){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==c)return s}return-1}var m7="closure_lm_"+(1e6*Math.random()|0),b8={};function JM(t,e,n,c,s){if(c&&c.once)return eb(t,e,n,c,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)JM(t,e[r],n,c,s);return null}return n=g7(n),t&&t[ps]?t.N(e,n,vs(c)?!!c.capture:!!c,s):ZM(t,e,n,!1,c,s)}function ZM(t,e,n,c,s,r){if(!e)throw Error("Invalid event type");var a=vs(s)?!!s.capture:!!s,i=p7(t);if(i||(t[m7]=i=new Va(t)),n=i.add(e,n,c,a,r),n.proxy)return n;if(c=u82(),n.proxy=c,c.src=t,c.listener=n,t.addEventListener)e82||(s=a),s===void 0&&(s=!1),t.addEventListener(e.toString(),c,s);else if(t.attachEvent)t.attachEvent(nb(e.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return n}function u82(){function t(n){return e.call(t.src,t.listener,n)}const e=f82;return t}function eb(t,e,n,c,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)eb(t,e[r],n,c,s);return null}return n=g7(n),t&&t[ps]?t.O(e,n,vs(c)?!!c.capture:!!c,s):ZM(t,e,n,!0,c,s)}function tb(t,e,n,c,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)tb(t,e[r],n,c,s);else c=vs(c)?!!c.capture:!!c,n=g7(n),t&&t[ps]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Si(r,n,c,s),-1<n&&(Ha(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=p7(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Si(e,n,c,s)),(n=-1<t?e[t]:null)&&v7(n))}function v7(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ps])Li(e.i,t);else{var n=t.type,c=t.proxy;e.removeEventListener?e.removeEventListener(n,c,t.capture):e.detachEvent?e.detachEvent(nb(n),c):e.addListener&&e.removeListener&&e.removeListener(c),(n=p7(e))?(Li(n,t),n.h==0&&(n.src=null,e[m7]=null)):Ha(t)}}}function nb(t){return t in b8?b8[t]:b8[t]="on"+t}function f82(t,e){if(t.ba)t=!0;else{e=new wc(e,this);var n=t.listener,c=t.ha||t.src;t.ea&&v7(t),t=n.call(c,e)}return t}function p7(t){return t=t[m7],t instanceof Va?t:null}var w8="__closure_events_fn_"+(1e9*Math.random()>>>0);function g7(t){return typeof t=="function"?t:(t[w8]||(t[w8]=function(e){return t.handleEvent(e)}),t[w8])}function A1(){Le.call(this),this.i=new Va(this),this.P=this,this.I=null}$1(A1,Le);A1.prototype[ps]=!0;A1.prototype.removeEventListener=function(t,e,n,c){tb(this,t,e,n,c)};function B1(t,e){var n,c=t.I;if(c)for(n=[];c;c=c.I)n.push(c);if(t=t.P,c=e.type||e,typeof e=="string")e=new K1(e,t);else if(e instanceof K1)e.target=e.target||t;else{var s=e;e=new K1(c,t),XM(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var a=e.g=n[r];s=s0(a,c,!0,e)&&s}if(a=e.g=t,s=s0(a,c,!0,e)&&s,s=s0(a,c,!1,e)&&s,n)for(r=0;r<n.length;r++)a=e.g=n[r],s=s0(a,c,!1,e)&&s}A1.prototype.M=function(){if(A1.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],c=0;c<n.length;c++)Ha(n[c]);delete t.g[e],t.h--}}this.I=null};A1.prototype.N=function(t,e,n,c){return this.i.add(String(t),e,!1,n,c)};A1.prototype.O=function(t,e,n,c){return this.i.add(String(t),e,!0,n,c)};function s0(t,e,n,c){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ba&&a.capture==n){var i=a.listener,o=a.ha||a.src;a.ea&&Li(t.i,a),s=i.call(o,c)!==!1&&s}}return s&&!c.defaultPrevented}var y7=g2.JSON.stringify;function h82(){var t=rb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class d82{constructor(){this.h=this.g=null}add(e,n){const c=cb.get();c.set(e,n),this.h?this.h.next=c:this.g=c,this.h=c}}var cb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new m82,t=>t.reset());class m82{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function v82(t){g2.setTimeout(()=>{throw t},0)}function sb(t,e){xi||p82(),_i||(xi(),_i=!0),rb.add(t,e)}var xi;function p82(){var t=g2.Promise.resolve(void 0);xi=function(){t.then(g82)}}var _i=!1,rb=new d82;function g82(){for(var t;t=h82();){try{t.h.call(t.g)}catch(n){v82(n)}var e=cb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_i=!1}function za(t,e){A1.call(this),this.h=t||1,this.g=e||g2,this.j=W1(this.kb,this),this.l=Date.now()}$1(za,A1);a2=za.prototype;a2.ca=!1;a2.R=null;a2.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),B1(this,"tick"),this.ca&&(H7(this),this.start()))}};a2.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function H7(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}a2.M=function(){za.X.M.call(this),H7(this),delete this.g};function V7(t,e,n){if(typeof t=="function")n&&(t=W1(t,n));else if(t&&typeof t.handleEvent=="function")t=W1(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:g2.setTimeout(t,e||0)}function ab(t){t.g=V7(()=>{t.g=null,t.i&&(t.i=!1,ab(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class y82 extends Le{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ab(this)}M(){super.M(),this.g&&(g2.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lc(t){Le.call(this),this.h=t,this.g={}}$1(Lc,Le);var tf=[];function ib(t,e,n,c){Array.isArray(n)||(n&&(tf[0]=n.toString()),n=tf);for(var s=0;s<n.length;s++){var r=JM(e,n[s],c||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ob(t){d7(t.g,function(e,n){this.g.hasOwnProperty(n)&&v7(e)},t),t.g={}}Lc.prototype.M=function(){Lc.X.M.call(this),ob(this)};Lc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ca(){this.g=!0}Ca.prototype.Aa=function(){this.g=!1};function H82(t,e,n,c,s,r){t.info(function(){if(t.g)if(r)for(var a="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");a=2<=f.length&&f[1]=="type"?a+(u+"="+l+"&"):a+(u+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+c+") [attempt "+s+"]: "+e+`
`+n+`
`+a})}function V82(t,e,n,c,s,r,a){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+a})}function o6(t,e,n,c){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+C82(t,n)+(c?" "+c:"")})}function z82(t,e){t.info(function(){return"TIMEOUT: "+e})}Ca.prototype.info=function(){};function C82(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var c=n[t];if(!(2>c.length)){var s=c[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var a=1;a<s.length;a++)s[a]=""}}}}return y7(n)}catch{return e}}var Rt={},nf=null;function Ma(){return nf=nf||new A1}Rt.Oa="serverreachability";function lb(t){K1.call(this,Rt.Oa,t)}$1(lb,K1);function Sc(t){const e=Ma();B1(e,new lb(e))}Rt.STAT_EVENT="statevent";function ub(t,e){K1.call(this,Rt.STAT_EVENT,t),this.stat=e}$1(ub,K1);function t4(t){const e=Ma();B1(e,new ub(e,t))}Rt.Pa="timingevent";function fb(t,e){K1.call(this,Rt.Pa,t),this.size=e}$1(fb,K1);function gs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return g2.setTimeout(function(){t()},e)}var ba={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},hb={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function z7(){}z7.prototype.h=null;function cf(t){return t.h||(t.h=t.i())}function db(){}var ys={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function C7(){K1.call(this,"d")}$1(C7,K1);function M7(){K1.call(this,"c")}$1(M7,K1);var Ni;function wa(){}$1(wa,z7);wa.prototype.g=function(){return new XMLHttpRequest};wa.prototype.i=function(){return{}};Ni=new wa;function Hs(t,e,n,c){this.l=t,this.j=e,this.m=n,this.U=c||1,this.S=new Lc(this),this.O=M82,t=bi?125:void 0,this.T=new za(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new mb}function mb(){this.i=null,this.g="",this.h=!1}var M82=45e3,ki={},ir={};a2=Hs.prototype;a2.setTimeout=function(t){this.O=t};function Ii(t,e,n){t.K=1,t.v=Sa(_3(e)),t.s=n,t.P=!0,vb(t,null)}function vb(t,e){t.F=Date.now(),Vs(t),t.A=_3(t.v);var n=t.A,c=t.U;Array.isArray(c)||(c=[String(c)]),Mb(n.i,"t",c),t.C=0,n=t.l.H,t.h=new mb,t.g=qb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new y82(W1(t.Ka,t,t.g),t.N)),ib(t.S,t.g,"readystatechange",t.hb),e=t.H?YM(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Sc(),H82(t.j,t.u,t.A,t.m,t.U,t.s)}a2.hb=function(t){t=t.target;const e=this.L;e&&y3(t)==3?e.l():this.Ka(t)};a2.Ka=function(t){try{if(t==this.g)e:{const u=y3(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||bi||this.g&&(this.h.h||this.g.fa()||of(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Sc(3):Sc(2)),La(this);var n=this.g.aa();this.Y=n;t:if(pb(this)){var c=of(this.g);t="";var s=c.length,r=y3(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ze(this),Wn(this);var a="";break t}this.h.i=new g2.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(c[e],{stream:r&&e==s-1});c.splice(0,s),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=n==200,V82(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rr(i)){var l=i;break t}}l=null}if(n=l)o6(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ai(this,n);else{this.i=!1,this.o=3,t4(12),Ze(this),Wn(this);break e}}this.P?(gb(this,u,a),bi&&this.i&&u==3&&(ib(this.S,this.T,"tick",this.gb),this.T.start())):(o6(this.j,this.m,a,null),Ai(this,a)),u==4&&Ze(this),this.i&&!this.I&&(u==4?Fb(this.l,this):(this.i=!1,Vs(this)))}else n==400&&0<a.indexOf("Unknown SID")?(this.o=3,t4(12)):(this.o=0,t4(13)),Ze(this),Wn(this)}}}catch{}finally{}};function pb(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gb(t,e,n){let c=!0,s;for(;!t.I&&t.C<n.length;)if(s=b82(t,n),s==ir){e==4&&(t.o=4,t4(14),c=!1),o6(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ki){t.o=4,t4(15),o6(t.j,t.m,n,"[Invalid Chunk]"),c=!1;break}else o6(t.j,t.m,s,null),Ai(t,s);pb(t)&&s!=ir&&s!=ki&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,t4(16),c=!1),t.i=t.i&&c,c?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),N7(e),e.K=!0,t4(11))):(o6(t.j,t.m,n,"[Invalid Chunked Response]"),Ze(t),Wn(t))}a2.gb=function(){if(this.g){var t=y3(this.g),e=this.g.fa();this.C<e.length&&(La(this),gb(this,t,e),this.i&&t!=4&&Vs(this))}};function b82(t,e){var n=t.C,c=e.indexOf(`
`,n);return c==-1?ir:(n=Number(e.substring(n,c)),isNaN(n)?ki:(c+=1,c+n>e.length?ir:(e=e.substr(c,n),t.C=c+n,e)))}a2.cancel=function(){this.I=!0,Ze(this)};function Vs(t){t.V=Date.now()+t.O,yb(t,t.O)}function yb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=gs(W1(t.fb,t),e)}function La(t){t.B&&(g2.clearTimeout(t.B),t.B=null)}a2.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(z82(this.j,this.A),this.K!=2&&(Sc(),t4(17)),Ze(this),this.o=2,Wn(this)):yb(this,this.V-t)};function Wn(t){t.l.G==0||t.I||Fb(t.l,t)}function Ze(t){La(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,H7(t.T),ob(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ai(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ti(n.h,t))){if(!t.J&&Ti(n.h,t)&&n.G==3){try{var c=n.Fa.g.parse(e)}catch{c=null}if(Array.isArray(c)&&c.length==3){var s=c;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ur(n),Na(n);else break e;_7(n),t4(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=gs(W1(n.bb,n),6e3));if(1>=Lb(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else et(n,11)}else if((t.J||n.g==t)&&ur(n),!rr(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(c=1.5*h,n.J=c,n.j.info("backChannelRequestTimeoutMs_="+c)),c=n;const d=t.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=c.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(b7(r,r.h),r.h=null))}if(c.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(c.za=g,s1(c.F,c.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),c=n;var a=t;if(c.sa=Ub(c,c.H?c.ka:null,c.V),a.J){Sb(c.h,a);var i=a,o=c.J;o&&i.setTimeout(o),i.B&&(La(i),Vs(i)),c.g=a}else Rb(c);0<n.i.length&&ka(n)}else l[0]!="stop"&&l[0]!="close"||et(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?et(n,7):x7(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Sc(4)}catch{}}function w82(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ga(t)){for(var e=[],n=t.length,c=0;c<n;c++)e.push(t[c]);return e}e=[],n=0;for(c in t)e[n++]=t[c];return e}function L82(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ga(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const c in t)e[n++]=c;return e}}}function Hb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ga(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=L82(t),c=w82(t),s=c.length,r=0;r<s;r++)e.call(void 0,c[r],n&&n[r],t)}var Vb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S82(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var c=t[n].indexOf("="),s=null;if(0<=c){var r=t[n].substring(0,c);s=t[n].substring(c+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function at(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof at){this.h=e!==void 0?e:t.h,or(this,t.j),this.s=t.s,this.g=t.g,lr(this,t.m),this.l=t.l,e=t.i;var n=new xc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sf(this,n),this.o=t.o}else t&&(n=String(t).match(Vb))?(this.h=!!e,or(this,n[1]||"",!0),this.s=Nn(n[2]||""),this.g=Nn(n[3]||"",!0),lr(this,n[4]),this.l=Nn(n[5]||"",!0),sf(this,n[6]||"",!0),this.o=Nn(n[7]||"")):(this.h=!!e,this.i=new xc(null,this.h))}at.prototype.toString=function(){var t=[],e=this.j;e&&t.push(kn(e,rf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(kn(e,rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(kn(n,n.charAt(0)=="/"?N82:_82,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",kn(n,I82)),t.join("")};function _3(t){return new at(t)}function or(t,e,n){t.j=n?Nn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sf(t,e,n){e instanceof xc?(t.i=e,A82(t.i,t.h)):(n||(e=kn(e,k82)),t.i=new xc(e,t.h))}function s1(t,e,n){t.i.set(e,n)}function Sa(t){return s1(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Nn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function kn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,x82),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function x82(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rf=/[#\/\?@]/g,_82=/[#\?:]/g,N82=/[#\?]/g,k82=/[#\?@]/g,I82=/#/g;function xc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Se(t){t.g||(t.g=new Map,t.h=0,t.i&&S82(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}a2=xc.prototype;a2.add=function(t,e){Se(this),this.i=null,t=X6(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zb(t,e){Se(t),e=X6(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cb(t,e){return Se(t),e=X6(t,e),t.g.has(e)}a2.forEach=function(t,e){Se(this),this.g.forEach(function(n,c){n.forEach(function(s){t.call(e,s,c,this)},this)},this)};a2.oa=function(){Se(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let c=0;c<e.length;c++){const s=t[c];for(let r=0;r<s.length;r++)n.push(e[c])}return n};a2.W=function(t){Se(this);let e=[];if(typeof t=="string")Cb(this,t)&&(e=e.concat(this.g.get(X6(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};a2.set=function(t,e){return Se(this),this.i=null,t=X6(this,t),Cb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};a2.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Mb(t,e,n){zb(t,e),0<n.length&&(t.i=null,t.g.set(X6(t,e),f7(n)),t.h+=n.length)}a2.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var c=e[n];const r=encodeURIComponent(String(c)),a=this.W(c);for(c=0;c<a.length;c++){var s=r;a[c]!==""&&(s+="="+encodeURIComponent(String(a[c]))),t.push(s)}}return this.i=t.join("&")};function X6(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function A82(t,e){e&&!t.j&&(Se(t),t.i=null,t.g.forEach(function(n,c){var s=c.toLowerCase();c!=s&&(zb(this,c),Mb(this,s,n))},t)),t.j=e}var T82=class{constructor(t,e){this.h=t,this.g=e}};function bb(t){this.l=t||E82,g2.PerformanceNavigationTiming?(t=g2.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(g2.g&&g2.g.Ga&&g2.g.Ga()&&g2.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var E82=10;function wb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lb(t){return t.h?1:t.g?t.g.size:0}function Ti(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function b7(t,e){t.g?t.g.add(e):t.h=e}function Sb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bb.prototype.cancel=function(){if(this.i=xb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return f7(t.i)}function w7(){}w7.prototype.stringify=function(t){return g2.JSON.stringify(t,void 0)};w7.prototype.parse=function(t){return g2.JSON.parse(t,void 0)};function P82(){this.g=new w7}function D82(t,e,n){const c=n||"";try{Hb(t,function(s,r){let a=s;vs(s)&&(a=y7(s)),e.push(c+r+"="+encodeURIComponent(a))})}catch(s){throw e.push(c+"type="+encodeURIComponent("_badmap")),s}}function R82(t,e){const n=new Ca;if(g2.Image){const c=new Image;c.onload=c0(r0,n,c,"TestLoadImage: loaded",!0,e),c.onerror=c0(r0,n,c,"TestLoadImage: error",!1,e),c.onabort=c0(r0,n,c,"TestLoadImage: abort",!1,e),c.ontimeout=c0(r0,n,c,"TestLoadImage: timeout",!1,e),g2.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else e(!1)}function r0(t,e,n,c,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(c)}catch{}}function zs(t){this.l=t.$b||null,this.j=t.ib||!1}$1(zs,z7);zs.prototype.g=function(){return new xa(this.l,this.j)};zs.prototype.i=function(t){return function(){return t}}({});function xa(t,e){A1.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=L7,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$1(xa,A1);var L7=0;a2=xa.prototype;a2.open=function(t,e){if(this.readyState!=L7)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_c(this)};a2.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||g2).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};a2.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=L7};a2.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_c(this)),this.g&&(this.readyState=3,_c(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof g2.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_b(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function _b(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}a2.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cs(this):_c(this),this.readyState==3&&_b(this)}};a2.Ua=function(t){this.g&&(this.response=this.responseText=t,Cs(this))};a2.Ta=function(t){this.g&&(this.response=t,Cs(this))};a2.ga=function(){this.g&&Cs(this)};function Cs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_c(t)}a2.setRequestHeader=function(t,e){this.v.append(t,e)};a2.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};a2.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _c(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var O82=g2.JSON.parse;function z1(t){A1.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nb,this.K=this.L=!1}$1(z1,A1);var Nb="",F82=/^https?$/i,B82=["POST","PUT"];a2=z1.prototype;a2.da=function(t,e,n,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ni.g(),this.C=this.u?cf(this.u):cf(Ni),this.g.onreadystatechange=W1(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){af(this,r);return}if(t=n||"",n=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var s in c)n.set(s,c[s]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const r of c.keys())n.set(r,c.get(r));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=g2.FormData&&t instanceof g2.FormData,!(0<=GM(B82,e))||c||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of n)this.g.setRequestHeader(r,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ab(this),0<this.B&&((this.K=$82(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W1(this.qa,this)):this.A=V7(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){af(this,r)}};function $82(t){return x6&&r82()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}a2.qa=function(){typeof u7<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B1(this,"timeout"),this.abort(8))};function af(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kb(t),_a(t)}function kb(t){t.D||(t.D=!0,B1(t,"complete"),B1(t,"error"))}a2.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,B1(this,"complete"),B1(this,"abort"),_a(this))};a2.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_a(this,!0)),z1.X.M.call(this)};a2.Ha=function(){this.s||(this.F||this.v||this.l?Ib(this):this.eb())};a2.eb=function(){Ib(this)};function Ib(t){if(t.h&&typeof u7<"u"&&(!t.C[1]||y3(t)!=4||t.aa()!=2)){if(t.v&&y3(t)==4)V7(t.Ha,0,t);else if(B1(t,"readystatechange"),y3(t)==4){t.h=!1;try{const i=t.aa();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var c;if(c=i===0){var s=String(t.H).match(Vb)[1]||null;if(!s&&g2.self&&g2.self.location){var r=g2.self.location.protocol;s=r.substr(0,r.length-1)}c=!F82.test(s?s.toLowerCase():"")}n=c}if(n)B1(t,"complete"),B1(t,"success");else{t.m=6;try{var a=2<y3(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.aa()+"]",kb(t)}}finally{_a(t)}}}}function _a(t,e){if(t.g){Ab(t);const n=t.g,c=t.C[0]?sr:null;t.g=null,t.C=null,e||B1(t,"ready");try{n.onreadystatechange=c}catch{}}}function Ab(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(g2.clearTimeout(t.A),t.A=null)}function y3(t){return t.g?t.g.readyState:0}a2.aa=function(){try{return 2<y3(this)?this.g.status:-1}catch{return-1}};a2.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};a2.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),O82(e)}};function of(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}a2.Ea=function(){return this.m};a2.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function Tb(t){let e="";return d7(t,function(n,c){e+=c,e+=":",e+=n,e+=`\r
`}),e}function S7(t,e,n){e:{for(c in n){var c=!1;break e}c=!0}c||(n=Tb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):s1(t,e,n))}function mn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Eb(t){this.Ca=0,this.i=[],this.j=new Ca,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=mn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=mn("baseRetryDelayMs",5e3,t),this.ab=mn("retryDelaySeedMs",1e4,t),this.Za=mn("forwardChannelMaxRetries",2,t),this.ta=mn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new bb(t&&t.concurrentRequestLimit),this.Fa=new P82,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}a2=Eb.prototype;a2.ma=8;a2.G=1;function x7(t){if(Pb(t),t.G==3){var e=t.U++,n=_3(t.F);s1(n,"SID",t.I),s1(n,"RID",e),s1(n,"TYPE","terminate"),Ms(t,n),e=new Hs(t,t.j,e,void 0),e.K=2,e.v=Sa(_3(n)),n=!1,g2.navigator&&g2.navigator.sendBeacon&&(n=g2.navigator.sendBeacon(e.v.toString(),"")),!n&&g2.Image&&(new Image().src=e.v,n=!0),n||(e.g=qb(e.l,null),e.g.da(e.v)),e.F=Date.now(),Vs(e)}$b(t)}function Na(t){t.g&&(N7(t),t.g.cancel(),t.g=null)}function Pb(t){Na(t),t.u&&(g2.clearTimeout(t.u),t.u=null),ur(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&g2.clearTimeout(t.m),t.m=null)}function ka(t){wb(t.h)||t.m||(t.m=!0,sb(t.Ja,t),t.C=0)}function U82(t,e){return Lb(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=gs(W1(t.Ja,t,e),Bb(t,t.C)),t.C++,!0)}a2.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Hs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=YM(r),XM(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var c=this.i[n];if("__data__"in c.g&&(c=c.g.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(e+=c,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Db(this,s,e),n=_3(this.F),s1(n,"RID",t),s1(n,"CVER",22),this.D&&s1(n,"X-HTTP-Session-Id",this.D),Ms(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Tb(r)))+"&"+e:this.o&&S7(n,this.o,r)),b7(this.h,s),this.Xa&&s1(n,"TYPE","init"),this.O?(s1(n,"$req",e),s1(n,"SID","null"),s.Z=!0,Ii(s,n,null)):Ii(s,n,e),this.G=2}}else this.G==3&&(t?lf(this,t):this.i.length==0||wb(this.h)||lf(this))};function lf(t,e){var n;e?n=e.m:n=t.U++;const c=_3(t.F);s1(c,"SID",t.I),s1(c,"RID",n),s1(c,"AID",t.T),Ms(t,c),t.o&&t.s&&S7(c,t.o,t.s),n=new Hs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Db(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),b7(t.h,n),Ii(n,c,e)}function Ms(t,e){t.ia&&d7(t.ia,function(n,c){s1(e,c,n)}),t.l&&Hb({},function(n,c){s1(e,c,n)})}function Db(t,e,n){n=Math.min(t.i.length,n);var c=t.l?W1(t.l.Qa,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const a=["count="+n];r==-1?0<n?(r=s[0].h,a.push("ofs="+r)):r=0:a.push("ofs="+r);let i=!0;for(let o=0;o<n;o++){let l=s[o].h;const u=s[o].g;if(l-=r,0>l)r=Math.max(0,s[o].h-100),i=!1;else try{D82(u,a,"req"+l+"_")}catch{c&&c(u)}}if(i){c=a.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,c}function Rb(t){t.g||t.u||(t.Z=1,sb(t.Ia,t),t.A=0)}function _7(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=gs(W1(t.Ia,t),Bb(t,t.A)),t.A++,!0)}a2.Ia=function(){if(this.u=null,Ob(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=gs(W1(this.cb,this),t)}};a2.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,t4(10),Na(this),Ob(this))};function N7(t){t.B!=null&&(g2.clearTimeout(t.B),t.B=null)}function Ob(t){t.g=new Hs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_3(t.sa);s1(e,"RID","rpc"),s1(e,"SID",t.I),s1(e,"CI",t.L?"0":"1"),s1(e,"AID",t.T),s1(e,"TYPE","xmlhttp"),Ms(t,e),t.o&&t.s&&S7(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Sa(_3(e)),n.s=null,n.P=!0,vb(n,t)}a2.bb=function(){this.v!=null&&(this.v=null,Na(this),_7(this),t4(19))};function ur(t){t.v!=null&&(g2.clearTimeout(t.v),t.v=null)}function Fb(t,e){var n=null;if(t.g==e){ur(t),N7(t),t.g=null;var c=2}else if(Ti(t.h,e))n=e.D,Sb(t.h,e),c=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(c==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;c=Ma(),B1(c,new fb(c,n)),ka(t)}else Rb(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(c==1&&U82(t,e)||c==2&&_7(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:et(t,5);break;case 4:et(t,10);break;case 3:et(t,6);break;default:et(t,2)}}}function Bb(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function et(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var c=W1(t.jb,t);n||(n=new at("//www.google.com/images/cleardot.gif"),g2.location&&g2.location.protocol=="http"||or(n,"https"),Sa(n)),R82(n.toString(),c)}else t4(2);t.G=0,t.l&&t.l.va(e),$b(t),Pb(t)}a2.jb=function(t){t?(this.j.info("Successfully pinged google.com"),t4(2)):(this.j.info("Failed to ping google.com"),t4(1))};function $b(t){if(t.G=0,t.la=[],t.l){const e=xb(t.h);(e.length!=0||t.i.length!=0)&&(Xu(t.la,e),Xu(t.la,t.i),t.h.i.length=0,f7(t.i),t.i.length=0),t.l.ua()}}function Ub(t,e,n){var c=n instanceof at?_3(n):new at(n,void 0);if(c.g!="")e&&(c.g=e+"."+c.g),lr(c,c.m);else{var s=g2.location;c=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new at(null,void 0);c&&or(r,c),e&&(r.g=e),s&&lr(r,s),n&&(r.l=n),c=r}return n=t.D,e=t.za,n&&e&&s1(c,n,e),s1(c,"VER",t.ma),Ms(t,c),c}function qb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new z1(new zs({ib:!0})):new z1(t.ra),e.L=t.H,e}function jb(){}a2=jb.prototype;a2.xa=function(){};a2.wa=function(){};a2.va=function(){};a2.ua=function(){};a2.Qa=function(){};function fr(){if(x6&&!(10<=Number(a82)))throw Error("Environmental error: no available transport.")}fr.prototype.g=function(t,e){return new p4(t,e)};function p4(t,e){A1.call(this),this.g=new Eb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!rr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new J6(this)}$1(p4,A1);p4.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t4(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ub(t,null,t.V),ka(t)};p4.prototype.close=function(){x7(this.g)};p4.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=y7(t),t=n);e.i.push(new T82(e.$a++,t)),e.G==3&&ka(e)};p4.prototype.M=function(){this.g.l=null,delete this.j,x7(this.g),delete this.g,p4.X.M.call(this)};function Gb(t){C7.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$1(Gb,C7);function Wb(){M7.call(this),this.status=1}$1(Wb,M7);function J6(t){this.g=t}$1(J6,jb);J6.prototype.xa=function(){B1(this.g,"a")};J6.prototype.wa=function(t){B1(this.g,new Gb(t))};J6.prototype.va=function(t){B1(this.g,new Wb)};J6.prototype.ua=function(){B1(this.g,"b")};fr.prototype.createWebChannel=fr.prototype.g;p4.prototype.send=p4.prototype.u;p4.prototype.open=p4.prototype.m;p4.prototype.close=p4.prototype.close;ba.NO_ERROR=0;ba.TIMEOUT=8;ba.HTTP_ERROR=6;hb.COMPLETE="complete";db.EventType=ys;ys.OPEN="a";ys.CLOSE="b";ys.ERROR="c";ys.MESSAGE="d";A1.prototype.listen=A1.prototype.N;z1.prototype.listenOnce=z1.prototype.O;z1.prototype.getLastError=z1.prototype.Na;z1.prototype.getLastErrorCode=z1.prototype.Ea;z1.prototype.getStatus=z1.prototype.aa;z1.prototype.getResponseJson=z1.prototype.Ra;z1.prototype.getResponseText=z1.prototype.fa;z1.prototype.send=z1.prototype.da;var q82=function(){return new fr},j82=function(){return Ma()},L8=ba,G82=hb,W82=Rt,uf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},K82=zs,a0=db,Q82=z1;const ff="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}x1.UNAUTHENTICATED=new x1(null),x1.GOOGLE_CREDENTIALS=new x1("google-credentials-uid"),x1.FIRST_PARTY=new x1("first-party-uid"),x1.MOCK_USER=new x1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z6="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new aa("@firebase/firestore");function Ei(){return me.logLevel}function Y82(t){me.setLogLevel(t)}function B(t,...e){if(me.logLevel<=A2.DEBUG){const n=e.map(k7);me.debug(`Firestore (${Z6}): ${t}`,...n)}}function p1(t,...e){if(me.logLevel<=A2.ERROR){const n=e.map(k7);me.error(`Firestore (${Z6}): ${t}`,...n)}}function _6(t,...e){if(me.logLevel<=A2.WARN){const n=e.map(k7);me.warn(`Firestore (${Z6}): ${t}`,...n)}}function k7(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t="Unexpected state"){const e=`FIRESTORE (${Z6}) INTERNAL ASSERTION FAILED: `+t;throw p1(e),new Error(e)}function v2(t,e){t||n2()}function X82(t,e){t||n2()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends o3{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class J82{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(x1.UNAUTHENTICATED))}shutdown(){}}class Z82{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ei2{constructor(e){this.t=e,this.currentUser=x1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let c=this.i;const s=o=>this.i!==c?(c=this.i,n(o)):Promise.resolve();let r=new N1;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new N1,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const o=r;e.enqueueRetryable(async()=>{await o.promise,await s(this.currentUser)})},i=o=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new N1)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(c=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):c?(v2(typeof c.accessToken=="string"),new Kb(c.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v2(e===null||typeof e=="string"),new x1(e)}}class ti2{constructor(e,n,c,s){this.h=e,this.l=n,this.m=c,this.g=s,this.type="FirstParty",this.user=x1.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(v2(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ni2{constructor(e,n,c,s){this.h=e,this.l=n,this.m=c,this.g=s}getToken(){return Promise.resolve(new ti2(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(x1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ci2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class si2{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const c=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.A;return this.A=r.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>c(r))};const s=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(v2(typeof n.token=="string"),this.A=n.token,new ci2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let c=0;c<t;c++)n[c]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let c="";for(;c.length<20;){const s=ri2(40);for(let r=0;r<s.length;++r)c.length<20&&s[r]<n&&(c+=e.charAt(s[r]%e.length))}return c}}function V2(t,e){return t<e?-1:t>e?1:0}function N6(t,e,n){return t.length===e.length&&t.every((c,s)=>n(c,e[s]))}function Yb(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return i1.fromMillis(Date.now())}static fromDate(e){return i1.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),c=Math.floor(1e6*(e-1e3*n));return new i1(n,c)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V2(this.nanoseconds,e.nanoseconds):V2(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.timestamp=e}static fromTimestamp(e){return new h2(e)}static min(){return new h2(new i1(0,0))}static max(){return new h2(new i1(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,c){n===void 0?n=0:n>e.length&&n2(),c===void 0?c=e.length-n:c>e.length-n&&n2(),this.segments=e,this.offset=n,this.len=c}get length(){return this.len}isEqual(e){return Nc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nc?e.forEach(c=>{n.push(c)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,c=this.limit();n<c;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const c=Math.min(e.length,n.length);for(let s=0;s<c;s++){const r=e.get(s),a=n.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class N2 extends Nc{construct(e,n,c){return new N2(e,n,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const c of e){if(c.indexOf("//")>=0)throw new R(N.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);n.push(...c.split("/").filter(s=>s.length>0))}return new N2(n)}static emptyPath(){return new N2([])}}const ai2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class g1 extends Nc{construct(e,n,c){return new g1(e,n,c)}static isValidIdentifier(e){return ai2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),g1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new g1(["__name__"])}static fromServerFormat(e){const n=[];let c="",s=0;const r=()=>{if(c.length===0)throw new R(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(c),c=""};let a=!1;for(;s<e.length;){const i=e[s];if(i==="\\"){if(s+1===e.length)throw new R(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[s+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new R(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);c+=o,s+=2}else i==="`"?(a=!a,s++):i!=="."||a?(c+=i,s++):(r(),s++)}if(r(),a)throw new R(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new g1(n)}static emptyPath(){return new g1([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(N2.fromString(e))}static fromName(e){return new Q(N2.fromString(e).popFirst(5))}static empty(){return new Q(N2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&N2.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return N2.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new N2(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,c,s){this.indexId=e,this.collectionGroup=n,this.fields=c,this.indexState=s}}function Pi(t){return t.fields.find(e=>e.kind===2)}function Fe(t){return t.fields.filter(e=>e.kind!==2)}Xb.UNKNOWN_ID=-1;class ii2{constructor(e,n){this.fieldPath=e,this.kind=n}}class hr{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new hr(0,g4.min())}}function Jb(t,e){const n=t.toTimestamp().seconds,c=t.toTimestamp().nanoseconds+1,s=h2.fromTimestamp(c===1e9?new i1(n+1,0):new i1(n,c));return new g4(s,Q.empty(),e)}function Zb(t){return new g4(t.readTime,t.key,-1)}class g4{constructor(e,n,c){this.readTime=e,this.documentKey=n,this.largestBatchId=c}static min(){return new g4(h2.min(),Q.empty(),-1)}static max(){return new g4(h2.max(),Q.empty(),-1)}}function I7(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:V2(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==ew)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&n2(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((c,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(c,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(c,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,c)=>{n(e)})}static reject(e){return new S((n,c)=>{c(e)})}static waitFor(e){return new S((n,c)=>{let s=0,r=0,a=!1;e.forEach(i=>{++s,i.next(()=>{++r,a&&r===s&&n()},o=>c(o))}),a=!0,r===s&&n()})}static or(e){let n=S.resolve(!1);for(const c of e)n=n.next(s=>s?S.resolve(s):c());return n}static forEach(e,n){const c=[];return e.forEach((s,r)=>{c.push(n.call(this,s,r))}),this.waitFor(c)}static mapArray(e,n){return new S((c,s)=>{const r=e.length,a=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;n(e[l]).next(u=>{a[l]=u,++i,i===r&&c(a)},u=>s(u))}})}static doWhile(e,n){return new S((c,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):c()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new N1,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Kn(e,n.error)):this.P.resolve()},this.transaction.onerror=c=>{const s=A7(c.target.error);this.P.reject(new Kn(e,s))}}static open(e,n,c,s){try{return new Ia(n,e.transaction(s,c))}catch(r){throw new Kn(n,r)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new li2(n)}}class P4{constructor(e,n,c){this.name=e,this.version=n,this.S=c,P4.D(b1())===12.2&&p1("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),Ue(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Wz())return!1;if(P4.N())return!0;const e=b1(),n=P4.D(e),c=0<n&&n<10,s=P4.k(e),r=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||c||r)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static k(e){const n=e.match(/Android ([\d.]+)/i),c=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async F(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,c)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=r=>{const a=r.target.result;n(a)},s.onblocked=()=>{c(new Kn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=r=>{const a=r.target.error;a.name==="VersionError"?c(new R(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?c(new R(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):c(new Kn(e,a))},s.onupgradeneeded=r=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const a=r.target.result;this.S.$(a,s.transaction,r.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,c,s){const r=n==="readonly";let a=0;for(;;){++a;try{this.db=await this.F(e);const i=Ia.open(this.db,e,r?"readonly":"readwrite",c),o=s(i).next(l=>(i.V(),l)).catch(l=>(i.abort(l),S.reject(l))).toPromise();return o.catch(()=>{}),await i.v,o}catch(i){const o=i,l=o.name!=="FirebaseError"&&a<3;if(B("SimpleDb","Transaction failed with error:",o.message,"Retrying:",l),this.close(),!l)return Promise.reject(o)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oi2{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Ue(this.U.delete())}}class Kn extends R{constructor(e,n){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function _e(t){return t.name==="IndexedDbTransactionError"}class li2{constructor(e){this.store=e}put(e,n){let c;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),c=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),c=this.store.put(e)),Ue(c)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),Ue(this.store.add(e))}get(e){return Ue(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),Ue(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),Ue(this.store.count())}W(e,n){const c=this.options(e,n);if(c.index||typeof this.store.getAll!="function"){const s=this.cursor(c),r=[];return this.H(s,(a,i)=>{r.push(i)}).next(()=>r)}{const s=this.store.getAll(c.range);return new S((r,a)=>{s.onerror=i=>{a(i.target.error)},s.onsuccess=i=>{r(i.target.result)}})}}J(e,n){const c=this.store.getAll(e,n===null?void 0:n);return new S((s,r)=>{c.onerror=a=>{r(a.target.error)},c.onsuccess=a=>{s(a.target.result)}})}Y(e,n){B("SimpleDb","DELETE ALL",this.store.name);const c=this.options(e,n);c.X=!1;const s=this.cursor(c);return this.H(s,(r,a,i)=>i.delete())}Z(e,n){let c;n?c=e:(c={},n=e);const s=this.cursor(c);return this.H(s,n)}tt(e){const n=this.cursor({});return new S((c,s)=>{n.onerror=r=>{const a=A7(r.target.error);s(a)},n.onsuccess=r=>{const a=r.target.result;a?e(a.primaryKey,a.value).next(i=>{i?a.continue():c()}):c()}})}H(e,n){const c=[];return new S((s,r)=>{e.onerror=a=>{r(a.target.error)},e.onsuccess=a=>{const i=a.target.result;if(!i)return void s();const o=new oi2(i),l=n(i.primaryKey,i.value,o);if(l instanceof S){const u=l.catch(f=>(o.done(),S.reject(f)));c.push(u)}o.isDone?s():o.G===null?i.continue():i.continue(o.G)}}).next(()=>S.waitFor(c))}options(e,n){let c;return e!==void 0&&(typeof e=="string"?c=e:n=e),{index:c,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const c=this.store.index(e.index);return e.X?c.openKeyCursor(e.range,n):c.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ue(t){return new S((e,n)=>{t.onsuccess=c=>{const s=c.target.result;e(s)},t.onerror=c=>{const s=A7(c.target.error);n(s)}})}let hf=!1;function A7(t){const e=P4.D(b1());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const c=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hf||(hf=!0,setTimeout(()=>{throw c},0)),c}}return t}class ui2{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){B("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){_e(n)?B("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await xe(n)}await this.nt(6e4)})}}class fi2{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const c=new Set;let s=n,r=!0;return S.doWhile(()=>r===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!c.has(a))return B("IndexBackiller",`Processing collection: ${a}`),this.rt(e,a,s).next(i=>{s-=i,c.add(a)});r=!1})).next(()=>n-s)}rt(e,n,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,c).next(r=>{const a=r.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.ot(s,r)).next(i=>(B("IndexBackiller",`Updating offset: ${i}`),this.localStore.indexManager.updateCollectionGroup(e,n,i))).next(()=>a.size)}))}ot(e,n){let c=e;return n.changes.forEach((s,r)=>{const a=Zb(r);I7(a,c)>0&&(c=a)}),new g4(c.readTime,c.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=c=>this.ut(c),this.ct=c=>n.writeSequenceNumber(c))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ot(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i4.at=-1;class d1{constructor(e,n){this.comparator=e,this.root=n||D1.EMPTY}insert(e,n){return new d1(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,D1.BLACK,null,null))}remove(e){return new d1(this.comparator,this.root.remove(e,this.comparator).copy(null,null,D1.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const c=this.comparator(e,n.key);if(c===0)return n.value;c<0?n=n.left:c>0&&(n=n.right)}return null}indexOf(e){let n=0,c=this.root;for(;!c.isEmpty();){const s=this.comparator(e,c.key);if(s===0)return n+c.left.size;s<0?c=c.left:(n+=c.left.size+1,c=c.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,c)=>(e(n,c),!1))}toString(){const e=[];return this.inorderTraversal((n,c)=>(e.push(`${n}:${c}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new i0(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new i0(this.root,e,this.comparator,!1)}getReverseIterator(){return new i0(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new i0(this.root,e,this.comparator,!0)}}class i0{constructor(e,n,c,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?c(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class D1{constructor(e,n,c,s,r){this.key=e,this.value=n,this.color=c!=null?c:D1.RED,this.left=s!=null?s:D1.EMPTY,this.right=r!=null?r:D1.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,c,s,r){return new D1(e!=null?e:this.key,n!=null?n:this.value,c!=null?c:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,c){let s=this;const r=c(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,c),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,c)),s.fixUp()}removeMin(){if(this.left.isEmpty())return D1.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let c,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return D1.EMPTY;c=s.right.min(),s=s.copy(c.key,c.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,D1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,D1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw n2();const e=this.left.check();if(e!==this.right.check())throw n2();return e+(this.isRed()?0:1)}}D1.EMPTY=null,D1.RED=!0,D1.BLACK=!1;D1.EMPTY=new class{constructor(){this.size=0}get key(){throw n2()}get value(){throw n2()}get color(){throw n2()}get left(){throw n2()}get right(){throw n2()}copy(t,e,n,c,s){return this}insert(t,e,n){return new D1(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.comparator=e,this.data=new d1(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,c)=>(e(n),!1))}forEachInRange(e,n){const c=this.data.getIteratorFrom(e[0]);for(;c.hasNext();){const s=c.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let c;for(c=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();c.hasNext();)if(!e(c.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mf(this.data.getIterator())}getIteratorFrom(e){return new mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(c=>{n=n.add(c)}),n}isEqual(e){if(!(e instanceof $2)||this.size!==e.size)return!1;const n=this.data.getIterator(),c=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=c.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $2(this.comparator);return n.data=e,n}}class mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qt(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(e){this.fields=e,e.sort(g1.comparator)}static empty(){return new m4([])}unionWith(e){let n=new $2(g1.comparator);for(const c of this.fields)n=n.add(c);for(const c of e)n=n.add(c);return new m4(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return N6(this.fields,e.fields,(n,c)=>n.isEqual(c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi2(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new w1(n)}static fromUint8Array(e){const n=function(c){let s="";for(let r=0;r<c.length;++r)s+=String.fromCharCode(c[r]);return s}(e);return new w1(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let c=0;c<e.length;c++)n[c]=e.charCodeAt(c);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V2(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}w1.EMPTY_BYTE_STRING=new w1("");const di2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ve(t){if(v2(!!t),typeof t=="string"){let e=0;const n=di2.exec(t);if(v2(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const c=new Date(t);return{seconds:Math.floor(c.getTime()/1e3),nanos:e}}return{seconds:l1(t.seconds),nanos:l1(t.nanos)}}function l1(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pt(t){return typeof t=="string"?w1.fromBase64String(t):w1.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T7(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cw(t){const e=t.mapValue.fields.__previous_value__;return T7(e)?cw(e):e}function kc(t){const e=ve(t.mapValue.fields.__local_write_time__.timestampValue);return new i1(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi2{constructor(e,n,c,s,r,a,i,o){this.databaseId=e,this.appId=n,this.persistenceKey=c,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=i,this.useFetchStreams=o}}class pe{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pe&&e.projectId===this.projectId&&e.database===this.database}}function bs(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function sw(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},L0={nullValue:"NULL_VALUE"};function gt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?T7(t)?4:rw(t)?9007199254740991:10:n2()}function a3(t,e){if(t===e)return!0;const n=gt(t);if(n!==gt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kc(t).isEqual(kc(e));case 3:return function(c,s){if(typeof c.timestampValue=="string"&&typeof s.timestampValue=="string"&&c.timestampValue.length===s.timestampValue.length)return c.timestampValue===s.timestampValue;const r=ve(c.timestampValue),a=ve(s.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(c,s){return pt(c.bytesValue).isEqual(pt(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(c,s){return l1(c.geoPointValue.latitude)===l1(s.geoPointValue.latitude)&&l1(c.geoPointValue.longitude)===l1(s.geoPointValue.longitude)}(t,e);case 2:return function(c,s){if("integerValue"in c&&"integerValue"in s)return l1(c.integerValue)===l1(s.integerValue);if("doubleValue"in c&&"doubleValue"in s){const r=l1(c.doubleValue),a=l1(s.doubleValue);return r===a?Ic(r)===Ic(a):isNaN(r)&&isNaN(a)}return!1}(t,e);case 9:return N6(t.arrayValue.values||[],e.arrayValue.values||[],a3);case 10:return function(c,s){const r=c.mapValue.fields||{},a=s.mapValue.fields||{};if(df(r)!==df(a))return!1;for(const i in r)if(r.hasOwnProperty(i)&&(a[i]===void 0||!a3(r[i],a[i])))return!1;return!0}(t,e);default:return n2()}}function Ac(t,e){return(t.values||[]).find(n=>a3(n,e))!==void 0}function ge(t,e){if(t===e)return 0;const n=gt(t),c=gt(e);if(n!==c)return V2(n,c);switch(n){case 0:case 9007199254740991:return 0;case 1:return V2(t.booleanValue,e.booleanValue);case 2:return function(s,r){const a=l1(s.integerValue||s.doubleValue),i=l1(r.integerValue||r.doubleValue);return a<i?-1:a>i?1:a===i?0:isNaN(a)?isNaN(i)?0:-1:1}(t,e);case 3:return vf(t.timestampValue,e.timestampValue);case 4:return vf(kc(t),kc(e));case 5:return V2(t.stringValue,e.stringValue);case 6:return function(s,r){const a=pt(s),i=pt(r);return a.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const a=s.split("/"),i=r.split("/");for(let o=0;o<a.length&&o<i.length;o++){const l=V2(a[o],i[o]);if(l!==0)return l}return V2(a.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const a=V2(l1(s.latitude),l1(r.latitude));return a!==0?a:V2(l1(s.longitude),l1(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const a=s.values||[],i=r.values||[];for(let o=0;o<a.length&&o<i.length;++o){const l=ge(a[o],i[o]);if(l)return l}return V2(a.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===ne.mapValue&&r===ne.mapValue)return 0;if(s===ne.mapValue)return 1;if(r===ne.mapValue)return-1;const a=s.fields||{},i=Object.keys(a),o=r.fields||{},l=Object.keys(o);i.sort(),l.sort();for(let u=0;u<i.length&&u<l.length;++u){const f=V2(i[u],l[u]);if(f!==0)return f;const h=ge(a[i[u]],o[l[u]]);if(h!==0)return h}return V2(i.length,l.length)}(t.mapValue,e.mapValue);default:throw n2()}}function vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return V2(t,e);const n=ve(t),c=ve(e),s=V2(n.seconds,c.seconds);return s!==0?s:V2(n.nanos,c.nanos)}function y6(t){return Di(t)}function Di(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(c){const s=ve(c);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?pt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(c){let s="[",r=!0;for(const a of c.values||[])r?r=!1:s+=",",s+=Di(a);return s+"]"}(t.arrayValue):"mapValue"in t?function(c){const s=Object.keys(c.fields||{}).sort();let r="{",a=!0;for(const i of s)a?a=!1:r+=",",r+=`${i}:${Di(c.fields[i])}`;return r+"}"}(t.mapValue):n2();var e,n}function yt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ri(t){return!!t&&"integerValue"in t}function Tc(t){return!!t&&"arrayValue"in t}function pf(t){return!!t&&"nullValue"in t}function gf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function S0(t){return!!t&&"mapValue"in t}function Qn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ot(t.mapValue.fields,(n,c)=>e.mapValue.fields[n]=Qn(c)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function vi2(t){return"nullValue"in t?L0:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?yt(pe.empty(),Q.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:n2()}function pi2(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?yt(pe.empty(),Q.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ne:n2()}function yf(t,e){const n=ge(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Hf(t,e){const n=ge(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.value=e}static empty(){return new R1({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let c=0;c<e.length-1;++c)if(n=(n.mapValue.fields||{})[e.get(c)],!S0(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qn(n)}setAll(e){let n=g1.emptyPath(),c={},s=[];e.forEach((a,i)=>{if(!n.isImmediateParentOf(i)){const o=this.getFieldsMap(n);this.applyChanges(o,c,s),c={},s=[],n=i.popLast()}a?c[i.lastSegment()]=Qn(a):s.push(i.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,c,s)}delete(e){const n=this.field(e.popLast());S0(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return a3(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let c=0;c<e.length;++c){let s=n.mapValue.fields[e.get(c)];S0(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(c)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,c){Ot(n,(s,r)=>e[s]=r);for(const s of c)delete e[s]}clone(){return new R1(Qn(this.value))}}function aw(t){const e=[];return Ot(t.fields,(n,c)=>{const s=new g1([n]);if(S0(c)){const r=aw(c.mapValue).fields;if(r.length===0)e.push(s);else for(const a of r)e.push(s.child(a))}else e.push(s)}),new m4(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,c,s,r,a){this.key=e,this.documentType=n,this.version=c,this.readTime=s,this.data=r,this.documentState=a}static newInvalidDocument(e){return new Y2(e,0,h2.min(),h2.min(),R1.empty(),0)}static newFoundDocument(e,n,c){return new Y2(e,1,n,h2.min(),c,0)}static newNoDocument(e,n){return new Y2(e,2,n,h2.min(),R1.empty(),0)}static newUnknownDocument(e,n){return new Y2(e,3,n,h2.min(),R1.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=R1.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=R1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=h2.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Y2&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Y2(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi2{constructor(e,n=null,c=[],s=[],r=null,a=null,i=null){this.path=e,this.collectionGroup=n,this.orderBy=c,this.filters=s,this.limit=r,this.startAt=a,this.endAt=i,this.ht=null}}function Vf(t,e=null,n=[],c=[],s=null,r=null,a=null){return new gi2(t,e,n,c,s,r,a)}function Ht(t){const e=X(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(c=>{return(s=c).field.canonicalString()+s.op.toString()+y6(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(c=>function(s){return s.field.canonicalString()+s.dir}(c)).join(","),bs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(c=>y6(c)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(c=>y6(c)).join(",")),e.ht=n}return e.ht}function yi2(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(c=n).field.canonicalString()} ${c.op} ${y6(c.value)}`;var c}).join(", ")}]`),bs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>y6(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>y6(n)).join(",")),`Target(${e})`}function ws(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Li2(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],c=e.filters[s],n.op!==c.op||!n.field.isEqual(c.field)||!a3(n.value,c.value))return!1;var n,c;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bf(t.startAt,e.startAt)&&bf(t.endAt,e.endAt)}function dr(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function mr(t,e){return t.filters.filter(n=>n instanceof O1&&n.field.isEqual(e))}function zf(t,e,n){let c=L0,s=!0;for(const r of mr(t,e)){let a=L0,i=!0;switch(r.op){case"<":case"<=":a=vi2(r.value);break;case"==":case"in":case">=":a=r.value;break;case">":a=r.value,i=!1;break;case"!=":case"not-in":a=L0}yf({value:c,inclusive:s},{value:a,inclusive:i})<0&&(c=a,s=i)}if(n!==null){for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){const a=n.position[r];yf({value:c,inclusive:s},{value:a,inclusive:n.inclusive})<0&&(c=a,s=n.inclusive);break}}return{value:c,inclusive:s}}function Cf(t,e,n){let c=ne,s=!0;for(const r of mr(t,e)){let a=ne,i=!0;switch(r.op){case">=":case">":a=pi2(r.value),i=!1;break;case"==":case"in":case"<=":a=r.value;break;case"<":a=r.value,i=!1;break;case"!=":case"not-in":a=ne}Hf({value:c,inclusive:s},{value:a,inclusive:i})>0&&(c=a,s=i)}if(n!==null){for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){const a=n.position[r];Hf({value:c,inclusive:s},{value:a,inclusive:n.inclusive})>0&&(c=a,s=n.inclusive);break}}return{value:c,inclusive:s}}class O1 extends class{}{constructor(e,n,c){super(),this.field=e,this.op=n,this.value=c}static create(e,n,c){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,c):new Hi2(e,n,c):n==="array-contains"?new Ci2(e,c):n==="in"?new Mi2(e,c):n==="not-in"?new bi2(e,c):n==="array-contains-any"?new wi2(e,c):new O1(e,n,c)}static lt(e,n,c){return n==="in"?new Vi2(e,c):new zi2(e,c)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ge(n,this.value)):n!==null&&gt(this.value)===gt(n)&&this.ft(ge(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return n2()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Hi2 extends O1{constructor(e,n,c){super(e,n,c),this.key=Q.fromName(c.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.ft(n)}}class Vi2 extends O1{constructor(e,n){super(e,"in",n),this.keys=iw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zi2 extends O1{constructor(e,n){super(e,"not-in",n),this.keys=iw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(c=>Q.fromName(c.referenceValue))}class Ci2 extends O1{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tc(n)&&Ac(n.arrayValue,this.value)}}class Mi2 extends O1{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ac(this.value.arrayValue,n)}}class bi2 extends O1{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ac(this.value.arrayValue,n)}}class wi2 extends O1{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(c=>Ac(this.value.arrayValue,c))}}class ye{constructor(e,n){this.position=e,this.inclusive=n}}class H6{constructor(e,n="asc"){this.field=e,this.dir=n}}function Li2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Mf(t,e,n){let c=0;for(let s=0;s<t.position.length;s++){const r=e[s],a=t.position[s];if(r.field.isKeyField()?c=Q.comparator(Q.fromName(a.referenceValue),n.key):c=ge(a,n.data.field(r.field)),r.dir==="desc"&&(c*=-1),c!==0)break}return c}function bf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!a3(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e,n=null,c=[],s=[],r=null,a="F",i=null,o=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=c,this.filters=s,this.limit=r,this.limitType=a,this.startAt=i,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function ow(t,e,n,c,s,r,a,i){return new D3(t,e,n,c,s,r,a,i)}function en(t){return new D3(t)}function wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function E7(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function P7(t){for(const e of t.filters)if(e.dt())return e.field;return null}function D7(t){return t.collectionGroup!==null}function k6(t){const e=X(t);if(e._t===null){e._t=[];const n=P7(e),c=E7(e);if(n!==null&&c===null)n.isKeyField()||e._t.push(new H6(n)),e._t.push(new H6(g1.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new H6(g1.keyField(),r))}}}return e._t}function l4(t){const e=X(t);if(!e.wt)if(e.limitType==="F")e.wt=Vf(e.path,e.collectionGroup,k6(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of k6(e)){const a=r.dir==="desc"?"asc":"desc";n.push(new H6(r.field,a))}const c=e.endAt?new ye(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ye(e.startAt.position,e.startAt.inclusive):null;e.wt=Vf(e.path,e.collectionGroup,n,e.filters,e.limit,c,s)}return e.wt}function vr(t,e,n){return new D3(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ls(t,e){return ws(l4(t),l4(e))&&t.limitType===e.limitType}function lw(t){return`${Ht(l4(t))}|lt:${t.limitType}`}function Oi(t){return`Query(target=${yi2(l4(t))}; limitType=${t.limitType})`}function R7(t,e){return e.isFoundDocument()&&function(n,c){const s=c.key.path;return n.collectionGroup!==null?c.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,c){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&c.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,c){for(const s of n.filters)if(!s.matches(c))return!1;return!0}(t,e)&&function(n,c){return!(n.startAt&&!function(s,r,a){const i=Mf(s,r,a);return s.inclusive?i<=0:i<0}(n.startAt,k6(n),c)||n.endAt&&!function(s,r,a){const i=Mf(s,r,a);return s.inclusive?i>=0:i>0}(n.endAt,k6(n),c))}(t,e)}function uw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fw(t){return(e,n)=>{let c=!1;for(const s of k6(t)){const r=Si2(s,e,n);if(r!==0)return r;c=c||s.field.isKeyField()}return 0}}function Si2(t,e,n){const c=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,r,a){const i=r.data.field(s),o=a.data.field(s);return i!==null&&o!==null?ge(i,o):n2()}(t.field,e,n);switch(t.dir){case"asc":return c;case"desc":return-1*c;default:return n2()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function dw(t){return{integerValue:""+t}}function mw(t,e){return sw(e)?dw(e):hw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this._=void 0}}function xi2(t,e,n){return t instanceof I6?function(c,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:c.seconds,nanos:c.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Vt?pw(t,e):t instanceof zt?gw(t,e):function(c,s){const r=vw(c,s),a=Lf(r)+Lf(c.yt);return Ri(r)&&Ri(c.yt)?dw(a):hw(c.It,a)}(t,e)}function _i2(t,e,n){return t instanceof Vt?pw(t,e):t instanceof zt?gw(t,e):n}function vw(t,e){return t instanceof A6?Ri(n=e)||function(c){return!!c&&"doubleValue"in c}(n)?e:{integerValue:0}:null;var n}class I6 extends Aa{}class Vt extends Aa{constructor(e){super(),this.elements=e}}function pw(t,e){const n=yw(e);for(const c of t.elements)n.some(s=>a3(s,c))||n.push(c);return{arrayValue:{values:n}}}class zt extends Aa{constructor(e){super(),this.elements=e}}function gw(t,e){let n=yw(e);for(const c of t.elements)n=n.filter(s=>!a3(s,c));return{arrayValue:{values:n}}}class A6 extends Aa{constructor(e,n){super(),this.It=e,this.yt=n}}function Lf(t){return l1(t.integerValue||t.doubleValue)}function yw(t){return Tc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.field=e,this.transform=n}}function Ni2(t,e){return t.field.isEqual(e.field)&&function(n,c){return n instanceof Vt&&c instanceof Vt||n instanceof zt&&c instanceof zt?N6(n.elements,c.elements,a3):n instanceof A6&&c instanceof A6?a3(n.yt,c.yt):n instanceof I6&&c instanceof I6}(t.transform,e.transform)}class ki2{constructor(e,n){this.version=e,this.transformResults=n}}class r1{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new r1}static exists(e){return new r1(void 0,e)}static updateTime(e){return new r1(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function x0(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ta{}function Hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nn(t.key,r1.none()):new tn(t.key,t.data,r1.none());{const n=t.data,c=R1.empty();let s=new $2(g1.comparator);for(let r of e.fields)if(!s.has(r)){let a=n.field(r);a===null&&r.length>1&&(r=r.popLast(),a=n.field(r)),a===null?c.delete(r):c.set(r,a),s=s.add(r)}return new R3(t.key,c,new m4(s.toArray()),r1.none())}}function Ii2(t,e,n){t instanceof tn?function(c,s,r){const a=c.value.clone(),i=xf(c.fieldTransforms,s,r.transformResults);a.setAll(i),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):t instanceof R3?function(c,s,r){if(!x0(c.precondition,s))return void s.convertToUnknownDocument(r.version);const a=xf(c.fieldTransforms,s,r.transformResults),i=s.data;i.setAll(Vw(c)),i.setAll(a),s.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(t,e,n):function(c,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Yn(t,e,n,c){return t instanceof tn?function(s,r,a,i){if(!x0(s.precondition,r))return a;const o=s.value.clone(),l=_f(s.fieldTransforms,i,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(t,e,n,c):t instanceof R3?function(s,r,a,i){if(!x0(s.precondition,r))return a;const o=_f(s.fieldTransforms,i,r),l=r.data;return l.setAll(Vw(s)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,c):function(s,r,a){return x0(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):a}(t,e,n)}function Ai2(t,e){let n=null;for(const c of t.fieldTransforms){const s=e.data.field(c.field),r=vw(c.transform,s||null);r!=null&&(n===null&&(n=R1.empty()),n.set(c.field,r))}return n||null}function Sf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,c){return n===void 0&&c===void 0||!(!n||!c)&&N6(n,c,(s,r)=>Ni2(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tn extends Ta{constructor(e,n,c,s=[]){super(),this.key=e,this.value=n,this.precondition=c,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class R3 extends Ta{constructor(e,n,c,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=c,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Vw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const c=t.data.field(n);e.set(n,c)}}),e}function xf(t,e,n){const c=new Map;v2(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],a=r.transform,i=e.data.field(r.field);c.set(r.field,_i2(a,i,n[s]))}return c}function _f(t,e,n){const c=new Map;for(const s of t){const r=s.transform,a=n.data.field(s.field);c.set(s.field,xi2(r,a,e))}return c}class nn extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class O7 extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti2{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V1,x2;function zw(t){switch(t){default:return n2();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Cw(t){if(t===void 0)return p1("GRPC error has no .code"),N.UNKNOWN;switch(t){case V1.OK:return N.OK;case V1.CANCELLED:return N.CANCELLED;case V1.UNKNOWN:return N.UNKNOWN;case V1.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case V1.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case V1.INTERNAL:return N.INTERNAL;case V1.UNAVAILABLE:return N.UNAVAILABLE;case V1.UNAUTHENTICATED:return N.UNAUTHENTICATED;case V1.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case V1.NOT_FOUND:return N.NOT_FOUND;case V1.ALREADY_EXISTS:return N.ALREADY_EXISTS;case V1.PERMISSION_DENIED:return N.PERMISSION_DENIED;case V1.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case V1.ABORTED:return N.ABORTED;case V1.OUT_OF_RANGE:return N.OUT_OF_RANGE;case V1.UNIMPLEMENTED:return N.UNIMPLEMENTED;case V1.DATA_LOSS:return N.DATA_LOSS;default:return n2()}}(x2=V1||(V1={}))[x2.OK=0]="OK",x2[x2.CANCELLED=1]="CANCELLED",x2[x2.UNKNOWN=2]="UNKNOWN",x2[x2.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x2[x2.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x2[x2.NOT_FOUND=5]="NOT_FOUND",x2[x2.ALREADY_EXISTS=6]="ALREADY_EXISTS",x2[x2.PERMISSION_DENIED=7]="PERMISSION_DENIED",x2[x2.UNAUTHENTICATED=16]="UNAUTHENTICATED",x2[x2.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x2[x2.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x2[x2.ABORTED=10]="ABORTED",x2[x2.OUT_OF_RANGE=11]="OUT_OF_RANGE",x2[x2.UNIMPLEMENTED=12]="UNIMPLEMENTED",x2[x2.INTERNAL=13]="INTERNAL",x2[x2.UNAVAILABLE=14]="UNAVAILABLE",x2[x2.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),c=this.inner[n];if(c!==void 0){for(const[s,r]of c)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const c=this.mapKeyFn(e),s=this.inner[c];if(s===void 0)return this.inner[c]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),c=this.inner[n];if(c===void 0)return!1;for(let s=0;s<c.length;s++)if(this.equalsFn(c[s][0],e))return c.length===1?delete this.inner[n]:c.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ot(this.inner,(n,c)=>{for(const[s,r]of c)e(s,r)})}isEmpty(){return nw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei2=new d1(Q.comparator);function o4(){return Ei2}const Mw=new d1(Q.comparator);function In(...t){let e=Mw;for(const n of t)e=e.insert(n.key,n);return e}function bw(t){let e=Mw;return t.forEach((n,c)=>e=e.insert(n,c.overlayedDocument)),e}function Q4(){return Xn()}function ww(){return Xn()}function Xn(){return new Ne(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pi2=new d1(Q.comparator),Di2=new $2(Q.comparator);function C2(...t){let e=Di2;for(const n of t)e=e.add(n);return e}const Ri2=new $2(V2);function Ea(){return Ri2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,c,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=c,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const c=new Map;return c.set(e,_s.createSynthesizedTargetChangeForCurrentChange(e,n)),new xs(h2.min(),c,Ea(),o4(),C2())}}class _s{constructor(e,n,c,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=c,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new _s(w1.EMPTY_BYTE_STRING,n,C2(),C2(),C2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,c,s){this.Tt=e,this.removedTargetIds=n,this.key=c,this.Et=s}}class Lw{constructor(e,n){this.targetId=e,this.At=n}}class Sw{constructor(e,n,c=w1.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=c,this.cause=s}}class Nf{constructor(){this.Rt=0,this.bt=If(),this.Pt=w1.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=C2(),n=C2(),c=C2();return this.bt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:c=c.add(s);break;default:n2()}}),new _s(this.Pt,this.vt,e,n,c)}Nt(){this.Vt=!1,this.bt=If()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Oi2{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=o4(),this.qt=kf(),this.Kt=new $2(V2)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const c=this.zt(n);switch(e.state){case 0:this.Ht(n)&&c.Ct(e.resumeToken);break;case 1:c.Ft(),c.St||c.Nt(),c.Ct(e.resumeToken);break;case 2:c.Ft(),c.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(c.$t(),c.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),c.Ct(e.resumeToken));break;default:n2()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((c,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,c=e.At.count,s=this.Xt(n);if(s){const r=s.target;if(dr(r))if(c===0){const a=new Q(r.path);this.jt(n,a,Y2.newNoDocument(a,h2.min()))}else v2(c===1);else this.Zt(n)!==c&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,a)=>{const i=this.Xt(a);if(i){if(r.current&&dr(i.target)){const o=new Q(i.target.path);this.Ut.get(o)!==null||this.ee(a,o)||this.jt(a,o,Y2.newNoDocument(o,e))}r.Dt&&(n.set(a,r.xt()),r.Nt())}});let c=C2();this.qt.forEach((r,a)=>{let i=!0;a.forEachWhile(o=>{const l=this.Xt(o);return!l||l.purpose===2||(i=!1,!1)}),i&&(c=c.add(r))}),this.Ut.forEach((r,a)=>a.setReadTime(e));const s=new xs(e,n,this.Kt,this.Ut,c);return this.Ut=o4(),this.qt=kf(),this.Kt=new $2(V2),s}Qt(e,n){if(!this.Ht(e))return;const c=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,c),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,c){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),c&&(this.Ut=this.Ut.insert(n,c))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Nf,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new $2(V2),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Nf),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function kf(){return new d1(Q.comparator)}function If(){return new d1(Q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bi2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $i2{constructor(e,n){this.databaseId=e,this.gt=n}}function Ec(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xw(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ui2(t,e){return Ec(t,e.toTimestamp())}function k1(t){return v2(!!t),h2.fromTimestamp(function(e){const n=ve(e);return new i1(n.seconds,n.nanos)}(t))}function F7(t,e){return function(n){return new N2(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _w(t){const e=N2.fromString(t);return v2(Dw(e)),e}function Pc(t,e){return F7(t.databaseId,e.path)}function t3(t,e){const n=_w(e);if(n.get(1)!==t.databaseId.projectId)throw new R(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(kw(n))}function Fi(t,e){return F7(t.databaseId,e)}function Nw(t){const e=_w(t);return e.length===4?N2.emptyPath():kw(e)}function Dc(t){return new N2(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kw(t){return v2(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Af(t,e,n){return{name:Pc(t,e),fields:n.value.mapValue.fields}}function Iw(t,e,n){const c=t3(t,e.name),s=k1(e.updateTime),r=new R1({mapValue:{fields:e.fields}}),a=Y2.newFoundDocument(c,s,r);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function qi2(t,e){return"found"in e?function(n,c){v2(!!c.found),c.found.name,c.found.updateTime;const s=t3(n,c.found.name),r=k1(c.found.updateTime),a=new R1({mapValue:{fields:c.found.fields}});return Y2.newFoundDocument(s,r,a)}(t,e):"missing"in e?function(n,c){v2(!!c.missing),v2(!!c.readTime);const s=t3(n,c.missing),r=k1(c.readTime);return Y2.newNoDocument(s,r)}(t,e):n2()}function ji2(t,e){let n;if("targetChange"in e){e.targetChange;const c=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:n2()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(o,l){return o.gt?(v2(l===void 0||typeof l=="string"),w1.fromBase64String(l||"")):(v2(l===void 0||l instanceof Uint8Array),w1.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,i=a&&function(o){const l=o.code===void 0?N.UNKNOWN:Cw(o.code);return new R(l,o.message||"")}(a);n=new Sw(c,s,r,i||null)}else if("documentChange"in e){e.documentChange;const c=e.documentChange;c.document,c.document.name,c.document.updateTime;const s=t3(t,c.document.name),r=k1(c.document.updateTime),a=new R1({mapValue:{fields:c.document.fields}}),i=Y2.newFoundDocument(s,r,a),o=c.targetIds||[],l=c.removedTargetIds||[];n=new _0(o,l,i.key,i)}else if("documentDelete"in e){e.documentDelete;const c=e.documentDelete;c.document;const s=t3(t,c.document),r=c.readTime?k1(c.readTime):h2.min(),a=Y2.newNoDocument(s,r),i=c.removedTargetIds||[];n=new _0([],i,a.key,a)}else if("documentRemove"in e){e.documentRemove;const c=e.documentRemove;c.document;const s=t3(t,c.document),r=c.removedTargetIds||[];n=new _0([],r,s,null)}else{if(!("filter"in e))return n2();{e.filter;const c=e.filter;c.targetId;const s=c.count||0,r=new Ti2(s),a=c.targetId;n=new Lw(a,r)}}return n}function Rc(t,e){let n;if(e instanceof tn)n={update:Af(t,e.key,e.value)};else if(e instanceof nn)n={delete:Pc(t,e.key)};else if(e instanceof R3)n={update:Af(t,e.key,e.data),updateMask:Ji2(e.fieldMask)};else{if(!(e instanceof O7))return n2();n={verify:Pc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(c=>function(s,r){const a=r.transform;if(a instanceof I6)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zt)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof A6)return{fieldPath:r.field.canonicalString(),increment:a.yt};throw n2()}(0,c))),e.precondition.isNone||(n.currentDocument=function(c,s){return s.updateTime!==void 0?{updateTime:Ui2(c,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:n2()}(t,e.precondition)),n}function Bi(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?r1.updateTime(k1(s.updateTime)):s.exists!==void 0?r1.exists(s.exists):r1.none()}(e.currentDocument):r1.none(),c=e.updateTransforms?e.updateTransforms.map(s=>function(r,a){let i=null;if("setToServerValue"in a)v2(a.setToServerValue==="REQUEST_TIME"),i=new I6;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];i=new Vt(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];i=new zt(l)}else"increment"in a?i=new A6(r,a.increment):n2();const o=g1.fromServerFormat(a.fieldPath);return new Ss(o,i)}(t,s)):[];if(e.update){e.update.name;const s=t3(t,e.update.name),r=new R1({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(i){const o=i.fieldPaths||[];return new m4(o.map(l=>g1.fromServerFormat(l)))}(e.updateMask);return new R3(s,r,a,n,c)}return new tn(s,r,n,c)}if(e.delete){const s=t3(t,e.delete);return new nn(s,n)}if(e.verify){const s=t3(t,e.verify);return new O7(s,n)}return n2()}function Gi2(t,e){return t&&t.length>0?(v2(e!==void 0),t.map(n=>function(c,s){let r=c.updateTime?k1(c.updateTime):k1(s);return r.isEqual(h2.min())&&(r=k1(s)),new ki2(r,c.transformResults||[])}(n,e))):[]}function Aw(t,e){return{documents:[Fi(t,e.path)]}}function Tw(t,e){const n={structuredQuery:{}},c=e.path;e.collectionGroup!==null?(n.parent=Fi(t,c),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fi(t,c.popLast()),n.structuredQuery.from=[{collectionId:c.lastSegment()}]);const s=function(o){if(o.length===0)return;const l=o.map(u=>function(f){if(f.op==="=="){if(gf(f.value))return{unaryFilter:{field:Yt(f.field),op:"IS_NAN"}};if(pf(f.value))return{unaryFilter:{field:Yt(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(gf(f.value))return{unaryFilter:{field:Yt(f.field),op:"IS_NOT_NAN"}};if(pf(f.value))return{unaryFilter:{field:Yt(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(f.field),op:Qi2(f.op),value:f.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(o){if(o.length!==0)return o.map(l=>function(u){return{field:Yt(u.field),direction:Ki2(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=function(o,l){return o.gt||bs(l)?l:{value:l}}(t,e.limit);var i;return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(i=e.startAt).inclusive,values:i.position}),e.endAt&&(n.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),n}function Ew(t){let e=Nw(t.parent);const n=t.structuredQuery,c=n.from?n.from.length:0;let s=null;if(c>0){v2(c===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=Pw(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(u=>function(f){return new H6(l6(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let i=null;n.limit&&(i=function(u){let f;return f=typeof u=="object"?u.value:u,bs(f)?null:f}(n.limit));let o=null;n.startAt&&(o=function(u){const f=!!u.before,h=u.values||[];return new ye(h,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,h=u.values||[];return new ye(h,f)}(n.endAt)),ow(e,s,a,r,i,"F",o,l)}function Wi2(t,e){const n=function(c,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return n2()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pw(t){return t?t.unaryFilter!==void 0?[Xi2(t)]:t.fieldFilter!==void 0?[Yi2(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Pw(e)).reduce((e,n)=>e.concat(n)):n2():[]}function Ki2(t){return Fi2[t]}function Qi2(t){return Bi2[t]}function Yt(t){return{fieldPath:t.canonicalString()}}function l6(t){return g1.fromServerFormat(t.fieldPath)}function Yi2(t){return O1.create(l6(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return n2()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xi2(t){switch(t.unaryFilter.op){case"IS_NAN":const e=l6(t.unaryFilter.field);return O1.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=l6(t.unaryFilter.field);return O1.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=l6(t.unaryFilter.field);return O1.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=l6(t.unaryFilter.field);return O1.create(s,"!=",{nullValue:"NULL_VALUE"});default:return n2()}}function Ji2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Tf(e)),e=Zi2(t.get(n),e);return Tf(e)}function Zi2(t,e){let n=e;const c=t.length;for(let s=0;s<c;s++){const r=t.charAt(s);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Tf(t){return t+""}function Y4(t){const e=t.length;if(v2(e>=2),e===2)return v2(t.charAt(0)===""&&t.charAt(1)===""),N2.emptyPath();const n=e-2,c=[];let s="";for(let r=0;r<e;){const a=t.indexOf("",r);switch((a<0||a>n)&&n2(),t.charAt(a+1)){case"":const i=t.substring(r,a);let o;s.length===0?o=i:(s+=i,o=s,s=""),c.push(o);break;case"":s+=t.substring(r,a),s+="\0";break;case"":s+=t.substring(r,a+1);break;default:n2()}r=a+2}return new N2(c)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t,e){return[t,n4(e)]}function Rw(t,e,n){return[t,n4(e),n]}const e52={},t52=["prefixPath","collectionGroup","readTime","documentId"],n52=["prefixPath","collectionGroup","documentId"],c52=["collectionGroup","readTime","prefixPath","documentId"],s52=["canonicalId","targetId"],r52=["targetId","path"],a52=["path","targetId"],i52=["collectionId","parent"],o52=["indexId","uid"],l52=["uid","sequenceNumber"],u52=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],f52=["indexId","uid","orderedDocumentKey"],h52=["userId","collectionPath","documentId"],d52=["userId","collectionPath","largestBatchId"],m52=["userId","collectionGroup","largestBatchId"],Ow=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],v52=[...Ow,"documentOverlays"],Fw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bw=Fw,p52=[...Bw,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends tw{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function E1(t,e){const n=X(t);return P4.O(n.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B7{constructor(e,n,c,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=c,this.mutations=s}applyToRemoteDocument(e,n){const c=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Ii2(r,e,c[s])}}applyToLocalView(e,n){for(const c of this.baseMutations)c.key.isEqual(e.key)&&(n=Yn(c,e,n,this.localWriteTime));for(const c of this.mutations)c.key.isEqual(e.key)&&(n=Yn(c,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const c=ww();return this.mutations.forEach(s=>{const r=e.get(s.key),a=r.overlayedDocument;let i=this.applyToLocalView(a,r.mutatedFields);i=n.has(s.key)?null:i;const o=Hw(a,i);o!==null&&c.set(s.key,o),a.isValidDocument()||a.convertToNoDocument(h2.min())}),c}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),C2())}isEqual(e){return this.batchId===e.batchId&&N6(this.mutations,e.mutations,(n,c)=>Sf(n,c))&&N6(this.baseMutations,e.baseMutations,(n,c)=>Sf(n,c))}}class $7{constructor(e,n,c,s){this.batch=e,this.commitVersion=n,this.mutationResults=c,this.docVersions=s}static from(e,n,c){v2(e.mutations.length===c.length);let s=Pi2;const r=e.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,c[a].version);return new $7(e,n,c,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U7{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n,c,s,r=h2.min(),a=h2.min(),i=w1.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=c,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=i}withSequenceNumber(e){return new re(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.re=e}}function g52(t,e){let n;if(e.document)n=Iw(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const c=Q.fromSegments(e.noDocument.path),s=Mt(e.noDocument.readTime);n=Y2.newNoDocument(c,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return n2();{const c=Q.fromSegments(e.unknownDocument.path),s=Mt(e.unknownDocument.version);n=Y2.newUnknownDocument(c,s)}}return e.readTime&&n.setReadTime(function(c){const s=new i1(c[0],c[1]);return h2.fromTimestamp(s)}(e.readTime)),n}function Pf(t,e){const n=e.key,c={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pr(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())c.document=function(s,r){return{name:Pc(s,r.key),fields:r.data.value.mapValue.fields,updateTime:Ec(s,r.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())c.noDocument={path:n.path.toArray(),readTime:Ct(e.version)};else{if(!e.isUnknownDocument())return n2();c.unknownDocument={path:n.path.toArray(),version:Ct(e.version)}}return c}function pr(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ct(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Mt(t){const e=new i1(t.seconds,t.nanoseconds);return h2.fromTimestamp(e)}function qe(t,e){const n=(e.baseMutations||[]).map(r=>Bi(t.re,r));for(let r=0;r<e.mutations.length-1;++r){const a=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const i=e.mutations[r+1];a.updateTransforms=i.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const c=e.mutations.map(r=>Bi(t.re,r)),s=i1.fromMillis(e.localWriteTimeMs);return new B7(e.batchId,s,n,c)}function An(t){const e=Mt(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Mt(t.lastLimboFreeSnapshotVersion):h2.min();let c;var s;return t.query.documents!==void 0?(v2((s=t.query).documents.length===1),c=l4(en(Nw(s.documents[0])))):c=function(r){return l4(Ew(r))}(t.query),new re(c,t.targetId,0,t.lastListenSequenceNumber,e,n,w1.fromBase64String(t.resumeToken))}function Uw(t,e){const n=Ct(e.snapshotVersion),c=Ct(e.lastLimboFreeSnapshotVersion);let s;s=dr(e.target)?Aw(t.re,e.target):Tw(t.re,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ht(e.target),readTime:n,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:c,query:s}}function q7(t){const e=Ew({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vr(e,e.limit,"L"):e}function S8(t,e){return new U7(e.largestBatchId,Bi(t.re,e.overlayMutation))}function Df(t,e){const n=e.path.lastSegment();return[t,n4(e.path.popLast()),n]}function Rf(t,e,n,c){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ct(c.readTime),documentKey:n4(c.documentKey.path),largestBatchId:c.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y52{getBundleMetadata(e,n){return Of(e).get(n).next(c=>{if(c)return{id:(s=c).bundleId,createTime:Mt(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return Of(e).put({bundleId:(c=n).id,createTime:Ct(k1(c.createTime)),version:c.version});var c}getNamedQuery(e,n){return Ff(e).get(n).next(c=>{if(c)return{name:(s=c).name,query:q7(s.bundledQuery),readTime:Mt(s.readTime)};var s})}saveNamedQuery(e,n){return Ff(e).put(function(c){return{name:c.name,readTime:Ct(k1(c.readTime)),bundledQuery:c.bundledQuery}}(n))}}function Of(t){return E1(t,"bundles")}function Ff(t){return E1(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const c=n.uid||"";return new Pa(e,c)}getOverlay(e,n){return vn(e).get(Df(this.userId,n)).next(c=>c?S8(this.It,c):null)}getOverlays(e,n){const c=Q4();return S.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&c.set(s,r)})).next(()=>c)}saveOverlays(e,n,c){const s=[];return c.forEach((r,a)=>{const i=new U7(n,a);s.push(this.ue(e,i))}),S.waitFor(s)}removeOverlaysForBatchId(e,n,c){const s=new Set;n.forEach(a=>s.add(n4(a.getCollectionPath())));const r=[];return s.forEach(a=>{const i=IDBKeyRange.bound([this.userId,a,c],[this.userId,a,c+1],!1,!0);r.push(vn(e).Y("collectionPathOverlayIndex",i))}),S.waitFor(r)}getOverlaysForCollection(e,n,c){const s=Q4(),r=n4(n),a=IDBKeyRange.bound([this.userId,r,c],[this.userId,r,Number.POSITIVE_INFINITY],!0);return vn(e).W("collectionPathOverlayIndex",a).next(i=>{for(const o of i){const l=S8(this.It,o);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,n,c,s){const r=Q4();let a;const i=IDBKeyRange.bound([this.userId,n,c],[this.userId,n,Number.POSITIVE_INFINITY],!0);return vn(e).Z({index:"collectionGroupOverlayIndex",range:i},(o,l,u)=>{const f=S8(this.It,l);r.size()<s||f.largestBatchId===a?(r.set(f.getKey(),f),a=f.largestBatchId):u.done()}).next(()=>r)}ue(e,n){return vn(e).put(function(c,s,r){const[a,i,o]=Df(s,r.mutation.key);return{userId:s,collectionPath:i,documentId:o,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:Rc(c.re,r.mutation)}}(this.It,this.userId,n))}}function vn(t){return E1(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(l1(e.integerValue));else if("doubleValue"in e){const c=l1(e.doubleValue);isNaN(c)?this.le(n,13):(this.le(n,15),Ic(c)?n.fe(0):n.fe(c))}else if("timestampValue"in e){const c=e.timestampValue;this.le(n,20),typeof c=="string"?n.de(c):(n.de(`${c.seconds||""}`),n.fe(c.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(pt(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const c=e.geoPointValue;this.le(n,45),n.fe(c.latitude||0),n.fe(c.longitude||0)}else"mapValue"in e?rw(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):n2()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const c=e.fields||{};this.le(n,55);for(const s of Object.keys(c))this._e(s,n),this.ae(c[s],n)}pe(e,n){const c=e.values||[];this.le(n,50);for(const s of c)this.ae(s,n)}ge(e,n){this.le(n,37),Q.fromName(e).path.forEach(c=>{this.le(n,60),this.Ie(c,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}je.Te=new je;function H52(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Bf(t){const e=64-function(n){let c=0;for(let s=0;s<8;++s){const r=H52(255&n[s]);if(c+=r,r!==8)break}return c}(t);return Math.ceil(e/8)}class V52{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let c=n.next();for(;!c.done;)this.Ae(c.value),c=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let c=n.next();for(;!c.done;)this.Pe(c.value),c=n.next();this.ve()}Ve(e){for(const n of e){const c=n.charCodeAt(0);if(c<128)this.Ae(c);else if(c<2048)this.Ae(960|c>>>6),this.Ae(128|63&c);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|c>>>12),this.Ae(128|63&c>>>6),this.Ae(128|63&c);else{const s=n.codePointAt(0);this.Ae(240|s>>>18),this.Ae(128|63&s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s)}}this.Re()}Se(e){for(const n of e){const c=n.charCodeAt(0);if(c<128)this.Pe(c);else if(c<2048)this.Pe(960|c>>>6),this.Pe(128|63&c);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|c>>>12),this.Pe(128|63&c>>>6),this.Pe(128|63&c);else{const s=n.codePointAt(0);this.Pe(240|s>>>18),this.Pe(128|63&s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s)}}this.ve()}De(e){const n=this.Ce(e),c=Bf(n);this.xe(1+c),this.buffer[this.position++]=255&c;for(let s=n.length-c;s<n.length;++s)this.buffer[this.position++]=255&n[s]}Ne(e){const n=this.Ce(e),c=Bf(n);this.xe(1+c),this.buffer[this.position++]=~(255&c);for(let s=n.length-c;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(s){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,s,!1),new Uint8Array(r.buffer)}(e),c=(128&n[0])!=0;n[0]^=c?255:128;for(let s=1;s<n.length;++s)n[s]^=c?255:0;return n}Ae(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let c=2*this.buffer.length;c<n&&(c=n);const s=new Uint8Array(c);s.set(this.buffer),this.buffer=s}}class z52{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class C52{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Oe()}}class pn{constructor(){this.Be=new V52,this.Le=new z52(this.Be),this.Ue=new C52(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,c,s){this.indexId=e,this.documentKey=n,this.arrayValue=c,this.directionalValue=s}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,c=new Uint8Array(n);return c.set(this.directionalValue,0),n!==e?c.set([0],this.directionalValue.length):++c[c.length-1],new Ge(this.indexId,this.documentKey,this.arrayValue,c)}}function Pe(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=$f(t.arrayValue,e.arrayValue),n!==0?n:(n=$f(t.directionalValue,e.directionalValue),n!==0?n:Q.comparator(t.documentKey,e.documentKey)))}function $f(t,e){for(let n=0;n<t.length&&n<e.length;++n){const c=t[n]-e[n];if(c!==0)return c}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M52{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const c=n;c.dt()?this.je=c:this.Qe.push(c)}}We(e){const n=Pi(e);if(n!==void 0&&!this.ze(n))return!1;const c=Fe(e);let s=0,r=0;for(;s<c.length&&this.ze(c[s]);++s);if(s===c.length)return!0;if(this.je!==void 0){const a=c[s];if(!this.He(this.je,a)||!this.Je(this.Ge[r++],a))return!1;++s}for(;s<c.length;++s){const a=c[s];if(r>=this.Ge.length||!this.Je(this.Ge[r++],a))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const c=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===c}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b52{constructor(){this.Ye=new j7}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(g4.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(g4.min())}updateCollectionGroup(e,n,c){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class j7{constructor(){this.index={}}add(e){const n=e.lastSegment(),c=e.popLast(),s=this.index[n]||new $2(N2.comparator),r=!s.has(c);return this.index[n]=s.add(c),r}has(e){const n=e.lastSegment(),c=e.popLast(),s=this.index[n];return s&&s.has(c)}getEntries(e){return(this.index[e]||new $2(N2.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=new Uint8Array(0);class w52{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new j7,this.Ze=new Ne(c=>Ht(c),(c,s)=>ws(c,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const c=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const r={collectionId:c,parent:n4(s)};return Uf(e).put(r)}return S.resolve()}getCollectionParents(e,n){const c=[],s=IDBKeyRange.bound([n,""],[Yb(n),""],!1,!0);return Uf(e).W(s).next(r=>{for(const a of r){if(a.collectionId!==n)break;c.push(Y4(a.parent))}return c})}addFieldIndex(e,n){const c=l0(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(i=>[i.fieldPath.canonicalString(),i.kind])}}(n);delete s.indexId;const r=c.add(s);if(n.indexState){const a=yn(e);return r.next(i=>{a.put(Rf(i,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return r.next()}deleteFieldIndex(e,n){const c=l0(e),s=yn(e),r=gn(e);return c.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const c=gn(e);let s=!0;const r=new Map;return S.forEach(this.tn(n),a=>this.en(e,a).next(i=>{s&&(s=!!i),r.set(a,i)})).next(()=>{if(s){let a=C2();const i=[];return S.forEach(r,(o,l)=>{var u;B("IndexedDbIndexManager",`Using index ${u=o,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(z=>`${z.fieldPath}:${z.kind}`).join(",")}`} to execute ${Ht(n)}`);const f=function(z,_){const b=Pi(_);if(b===void 0)return null;for(const x of mr(z,b.fieldPath))switch(x.op){case"array-contains-any":return x.value.arrayValue.values||[];case"array-contains":return[x.value]}return null}(l,o),h=function(z,_){const b=new Map;for(const x of Fe(_))for(const L of mr(z,x.fieldPath))switch(L.op){case"==":case"in":b.set(x.fieldPath.canonicalString(),L.value);break;case"not-in":case"!=":return b.set(x.fieldPath.canonicalString(),L.value),Array.from(b.values())}return null}(l,o),d=function(z,_){const b=[];let x=!0;for(const L of Fe(_)){const I=L.kind===0?zf(z,L.fieldPath,z.startAt):Cf(z,L.fieldPath,z.startAt);b.push(I.value),x&&(x=I.inclusive)}return new ye(b,x)}(l,o),v=function(z,_){const b=[];let x=!0;for(const L of Fe(_)){const I=L.kind===0?Cf(z,L.fieldPath,z.endAt):zf(z,L.fieldPath,z.endAt);b.push(I.value),x&&(x=I.inclusive)}return new ye(b,x)}(l,o),g=this.nn(o,l,d),H=this.nn(o,l,v),p=this.sn(o,l,h),V=this.rn(o.indexId,f,g,d.inclusive,H,v.inclusive,p);return S.forEach(V,z=>c.J(z,n.limit).next(_=>{_.forEach(b=>{const x=Q.fromSegments(b.documentKey);a.has(x)||(a=a.add(x),i.push(x))})}))}).next(()=>i)}return S.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,c,s,r,a,i){const o=(n!=null?n.length:1)*Math.max(c.length,r.length),l=o/(n!=null?n.length:1),u=[];for(let f=0;f<o;++f){const h=n?this.on(n[f/l]):o0,d=this.un(e,h,c[f%l],s),v=this.cn(e,h,r[f%l],a),g=i.map(H=>this.un(e,h,H,!0));u.push(...this.createRange(d,v,g))}return u}un(e,n,c,s){const r=new Ge(e,Q.empty(),n,c);return s?r:r.Ke()}cn(e,n,c,s){const r=new Ge(e,Q.empty(),n,c);return s?r.Ke():r}en(e,n){const c=new M52(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(r=>{let a=null;for(const i of r)c.We(i)&&(!a||i.fields.length>a.fields.length)&&(a=i);return a})}getIndexType(e,n){let c=2;return S.forEach(this.tn(n),s=>this.en(e,s).next(r=>{r?c!==0&&r.fields.length<function(a){let i=new $2(g1.comparator),o=!1;for(const l of a.filters){const u=l;u.field.isKeyField()||(u.op==="array-contains"||u.op==="array-contains-any"?o=!0:i=i.add(u.field))}for(const l of a.orderBy)l.field.isKeyField()||(i=i.add(l.field));return i.size+(o?1:0)}(s)&&(c=1):c=0})).next(()=>c)}an(e,n){const c=new pn;for(const s of Fe(e)){const r=n.data.field(s.fieldPath);if(r==null)return null;const a=c.qe(s.kind);je.Te.ce(r,a)}return c.$e()}on(e){const n=new pn;return je.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const c=new pn;return je.Te.ce(yt(this.databaseId,n),c.qe(function(s){const r=Fe(s);return r.length===0?0:r[r.length-1].kind}(e))),c.$e()}sn(e,n,c){if(c===null)return[];let s=[];s.push(new pn);let r=0;for(const a of Fe(e)){const i=c[r++];for(const o of s)if(this.ln(n,a.fieldPath)&&Tc(i))s=this.fn(s,a,i);else{const l=o.qe(a.kind);je.Te.ce(i,l)}}return this.dn(s)}nn(e,n,c){return this.sn(e,n,c.position)}dn(e){const n=[];for(let c=0;c<e.length;++c)n[c]=e[c].$e();return n}fn(e,n,c){const s=[...e],r=[];for(const a of c.arrayValue.values||[])for(const i of s){const o=new pn;o.seed(i.$e()),je.Te.ce(a,o.qe(n.kind)),r.push(o)}return r}ln(e,n){return!!e.filters.find(c=>c instanceof O1&&c.field.isEqual(n)&&(c.op==="in"||c.op==="not-in"))}getFieldIndexes(e,n){const c=l0(e),s=yn(e);return(n?c.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):c.W()).next(r=>{const a=[];return S.forEach(r,i=>s.get([i.indexId,this.uid]).next(o=>{a.push(function(l,u){const f=u?new hr(u.sequenceNumber,new g4(Mt(u.readTime),new Q(Y4(u.documentKey)),u.largestBatchId)):hr.empty(),h=l.fields.map(([d,v])=>new ii2(g1.fromServerFormat(d),v));return new Xb(l.indexId,l.collectionGroup,h,f)}(i,o))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((c,s)=>{const r=c.indexState.sequenceNumber-s.indexState.sequenceNumber;return r!==0?r:V2(c.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,c){const s=l0(e),r=yn(e);return this._n(e).next(a=>s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(i=>S.forEach(i,o=>r.put(Rf(o.indexId,this.user,a,c)))))}updateIndexEntries(e,n){const c=new Map;return S.forEach(n,(s,r)=>{const a=c.get(s.collectionGroup);return(a?S.resolve(a):this.getFieldIndexes(e,s.collectionGroup)).next(i=>(c.set(s.collectionGroup,i),S.forEach(i,o=>this.wn(e,s,o).next(l=>{const u=this.mn(r,o);return l.isEqual(u)?S.resolve():this.gn(e,r,o,l,u)}))))})}yn(e,n,c,s){return gn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.hn(c,n.key),documentKey:n.key.path.toArray()})}pn(e,n,c,s){return gn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.hn(c,n.key),n.key.path.toArray()])}wn(e,n,c){const s=gn(e);let r=new $2(Pe);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([c.indexId,this.uid,this.hn(c,n)])},(a,i)=>{r=r.add(new Ge(c.indexId,n,i.arrayValue,i.directionalValue))}).next(()=>r)}mn(e,n){let c=new $2(Pe);const s=this.an(n,e);if(s==null)return c;const r=Pi(n);if(r!=null){const a=e.data.field(r.fieldPath);if(Tc(a))for(const i of a.arrayValue.values||[])c=c.add(new Ge(n.indexId,e.key,this.on(i),s))}else c=c.add(new Ge(n.indexId,e.key,o0,s));return c}gn(e,n,c,s,r){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const a=[];return function(i,o,l,u,f){const h=i.getIterator(),d=o.getIterator();let v=Qt(h),g=Qt(d);for(;v||g;){let H=!1,p=!1;if(v&&g){const V=l(v,g);V<0?p=!0:V>0&&(H=!0)}else v!=null?p=!0:H=!0;H?(u(g),g=Qt(d)):p?(f(v),v=Qt(h)):(v=Qt(h),g=Qt(d))}}(s,r,Pe,i=>{a.push(this.yn(e,n,c,i))},i=>{a.push(this.pn(e,n,c,i))}),S.waitFor(a)}_n(e){let n=1;return yn(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(c,s,r)=>{r.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,c){c=c.sort((a,i)=>Pe(a,i)).filter((a,i,o)=>!i||Pe(a,o[i-1])!==0);const s=[];s.push(e);for(const a of c){const i=Pe(a,e),o=Pe(a,n);if(i===0)s[0]=e.Ke();else if(i>0&&o<0)s.push(a),s.push(a.Ke());else if(o>0)break}s.push(n);const r=[];for(let a=0;a<s.length;a+=2)r.push(IDBKeyRange.bound([s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,o0,[]],[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,o0,[]]));return r}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(qf)}getMinOffset(e,n){return S.mapArray(this.tn(n),c=>this.en(e,c).next(s=>s||n2())).next(qf)}}function Uf(t){return E1(t,"collectionParents")}function gn(t){return E1(t,"indexEntries")}function l0(t){return E1(t,"indexConfiguration")}function yn(t){return E1(t,"indexState")}function qf(t){v2(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let c=1;c<t.length;c++){const s=t[c].indexState.offset;I7(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new g4(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class a4{constructor(e,n,c){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=c}static withCacheSize(e){return new a4(e,a4.DEFAULT_COLLECTION_PERCENTILE,a4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e,n){const c=t.store("mutations"),s=t.store("documentMutations"),r=[],a=IDBKeyRange.only(n.batchId);let i=0;const o=c.Z({range:a},(u,f,h)=>(i++,h.delete()));r.push(o.next(()=>{v2(i===1)}));const l=[];for(const u of n.mutations){const f=Rw(e,u.key.path,n.batchId);r.push(s.delete(f)),l.push(u.key)}return S.waitFor(r).next(()=>l)}function gr(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw n2();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */a4.DEFAULT_COLLECTION_PERCENTILE=10,a4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,a4.DEFAULT=new a4(41943040,a4.DEFAULT_COLLECTION_PERCENTILE,a4.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),a4.DISABLED=new a4(-1,0,0);class Da{constructor(e,n,c,s){this.userId=e,this.It=n,this.indexManager=c,this.referenceDelegate=s,this.In={}}static oe(e,n,c,s){v2(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new Da(r,n,c,s)}checkEmpty(e){let n=!0;const c=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return j3(e).Z({index:"userMutationsIndex",range:c},(s,r,a)=>{n=!1,a.done()}).next(()=>n)}addMutationBatch(e,n,c,s){const r=n6(e),a=j3(e);return a.add({}).next(i=>{v2(typeof i=="number");const o=new B7(i,n,c,s),l=function(h,d,v){const g=v.baseMutations.map(p=>Rc(h.re,p)),H=v.mutations.map(p=>Rc(h.re,p));return{userId:d,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:g,mutations:H}}(this.It,this.userId,o),u=[];let f=new $2((h,d)=>V2(h.canonicalString(),d.canonicalString()));for(const h of s){const d=Rw(this.userId,h.key.path,i);f=f.add(h.key.path.popLast()),u.push(a.put(l)),u.push(r.put(d,e52))}return f.forEach(h=>{u.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.In[i]=o.keys()}),S.waitFor(u).next(()=>o)})}lookupMutationBatch(e,n){return j3(e).get(n).next(c=>c?(v2(c.userId===this.userId),qe(this.It,c)):null)}Tn(e,n){return this.In[n]?S.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(c=>{if(c){const s=c.keys();return this.In[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const c=n+1,s=IDBKeyRange.lowerBound([this.userId,c]);let r=null;return j3(e).Z({index:"userMutationsIndex",range:s},(a,i,o)=>{i.userId===this.userId&&(v2(i.batchId>=c),r=qe(this.It,i)),o.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let c=-1;return j3(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,r,a)=>{c=r.batchId,a.done()}).next(()=>c)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return j3(e).W("userMutationsIndex",n).next(c=>c.map(s=>qe(this.It,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const c=N0(this.userId,n.path),s=IDBKeyRange.lowerBound(c),r=[];return n6(e).Z({range:s},(a,i,o)=>{const[l,u,f]=a,h=Y4(u);if(l===this.userId&&n.path.isEqual(h))return j3(e).get(f).next(d=>{if(!d)throw n2();v2(d.userId===this.userId),r.push(qe(this.It,d))});o.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let c=new $2(V2);const s=[];return n.forEach(r=>{const a=N0(this.userId,r.path),i=IDBKeyRange.lowerBound(a),o=n6(e).Z({range:i},(l,u,f)=>{const[h,d,v]=l,g=Y4(d);h===this.userId&&r.path.isEqual(g)?c=c.add(v):f.done()});s.push(o)}),S.waitFor(s).next(()=>this.En(e,c))}getAllMutationBatchesAffectingQuery(e,n){const c=n.path,s=c.length+1,r=N0(this.userId,c),a=IDBKeyRange.lowerBound(r);let i=new $2(V2);return n6(e).Z({range:a},(o,l,u)=>{const[f,h,d]=o,v=Y4(h);f===this.userId&&c.isPrefixOf(v)?v.length===s&&(i=i.add(d)):u.done()}).next(()=>this.En(e,i))}En(e,n){const c=[],s=[];return n.forEach(r=>{s.push(j3(e).get(r).next(a=>{if(a===null)throw n2();v2(a.userId===this.userId),c.push(qe(this.It,a))}))}),S.waitFor(s).next(()=>c)}removeMutationBatch(e,n){return qw(e.ie,this.userId,n).next(c=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),S.forEach(c,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return S.resolve();const c=IDBKeyRange.lowerBound([this.userId]),s=[];return n6(e).Z({range:c},(r,a,i)=>{if(r[0]===this.userId){const o=Y4(r[1]);s.push(o)}else i.done()}).next(()=>{v2(s.length===0)})})}containsKey(e,n){return jw(e,this.userId,n)}Rn(e){return Gw(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function jw(t,e,n){const c=N0(e,n.path),s=c[1],r=IDBKeyRange.lowerBound(c);let a=!1;return n6(t).Z({range:r,X:!0},(i,o,l)=>{const[u,f,h]=i;u===e&&f===s&&(a=!0),l.done()}).next(()=>a)}function j3(t){return E1(t,"mutations")}function n6(t){return E1(t,"documentMutations")}function Gw(t){return E1(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new bt(0)}static vn(){return new bt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L52{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const c=new bt(n.highestTargetId);return n.highestTargetId=c.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>h2.fromTimestamp(new i1(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,c){return this.Vn(e).next(s=>(s.highestListenSequenceNumber=n,c&&(s.lastRemoteSnapshotVersion=c.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Sn(e,s)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(c=>(c.targetCount+=1,this.Cn(n,c),this.Sn(e,c))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Xt(e).delete(n.targetId)).next(()=>this.Vn(e)).next(c=>(v2(c.targetCount>0),c.targetCount-=1,this.Sn(e,c)))}removeTargets(e,n,c){let s=0;const r=[];return Xt(e).Z((a,i)=>{const o=An(i);o.sequenceNumber<=n&&c.get(o.targetId)===null&&(s++,r.push(this.removeTargetData(e,o)))}).next(()=>S.waitFor(r)).next(()=>s)}forEachTarget(e,n){return Xt(e).Z((c,s)=>{const r=An(s);n(r)})}Vn(e){return Gf(e).get("targetGlobalKey").next(n=>(v2(n!==null),n))}Sn(e,n){return Gf(e).put("targetGlobalKey",n)}Dn(e,n){return Xt(e).put(Uw(this.It,n))}Cn(e,n){let c=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,c=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,c=!0),c}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const c=Ht(n),s=IDBKeyRange.bound([c,Number.NEGATIVE_INFINITY],[c,Number.POSITIVE_INFINITY]);let r=null;return Xt(e).Z({range:s,index:"queryTargetsIndex"},(a,i,o)=>{const l=An(i);ws(n,l.target)&&(r=l,o.done())}).next(()=>r)}addMatchingKeys(e,n,c){const s=[],r=ee(e);return n.forEach(a=>{const i=n4(a.path);s.push(r.put({targetId:c,path:i})),s.push(this.referenceDelegate.addReference(e,c,a))}),S.waitFor(s)}removeMatchingKeys(e,n,c){const s=ee(e);return S.forEach(n,r=>{const a=n4(r.path);return S.waitFor([s.delete([c,a]),this.referenceDelegate.removeReference(e,c,r)])})}removeMatchingKeysForTargetId(e,n){const c=ee(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return c.delete(s)}getMatchingKeysForTargetId(e,n){const c=IDBKeyRange.bound([n],[n+1],!1,!0),s=ee(e);let r=C2();return s.Z({range:c,X:!0},(a,i,o)=>{const l=Y4(a[1]),u=new Q(l);r=r.add(u)}).next(()=>r)}containsKey(e,n){const c=n4(n.path),s=IDBKeyRange.bound([c],[Yb(c)],!1,!0);let r=0;return ee(e).Z({index:"documentTargetsIndex",X:!0,range:s},([a,i],o,l)=>{a!==0&&(r++,l.done())}).next(()=>r>0)}se(e,n){return Xt(e).get(n).next(c=>c?An(c):null)}}function Xt(t){return E1(t,"targets")}function Gf(t){return E1(t,"targetGlobal")}function ee(t){return E1(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf([t,e],[n,c]){const s=V2(t,n);return s===0?V2(e,c):s}class S52{constructor(e){this.xn=e,this.buffer=new $2(Wf),this.Nn=0}kn(){return++this.Nn}Mn(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const c=this.buffer.last();Wf(n,c)<0&&(this.buffer=this.buffer.delete(c).add(n))}}get maxValue(){return this.buffer.last()[0]}}class x52{constructor(e,n,c){this.garbageCollector=e,this.asyncQueue=n,this.localStore=c,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}Fn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_e(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await xe(n)}await this.Fn(3e5)})}}class _52{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(c=>Math.floor(n/100*c))}nthSequenceNumber(e,n){if(n===0)return S.resolve(i4.at);const c=new S52(n);return this.$n.forEachTarget(e,s=>c.Mn(s.sequenceNumber)).next(()=>this.$n.Ln(e,s=>c.Mn(s))).next(()=>c.maxValue)}removeTargets(e,n,c){return this.$n.removeTargets(e,n,c)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(jf)):this.getCacheSize(e).next(c=>c<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jf):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let c,s,r,a,i,o,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,a=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(c=f,i=Date.now(),this.removeTargets(e,c,n))).next(f=>(r=f,o=Date.now(),this.removeOrphanedDocuments(e,c))).next(f=>(l=Date.now(),Ei()<=A2.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-u}ms
	Determined least recently used ${s} in `+(i-a)+`ms
	Removed ${r} targets in `+(o-i)+`ms
	Removed ${f} documents in `+(l-o)+`ms
Total Duration: ${l-u}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:f})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N52{constructor(e,n){this.db=e,this.garbageCollector=function(c,s){return new _52(c,s)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(c=>n.next(s=>c+s))}qn(e){let n=0;return this.Ln(e,c=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(c,s)=>n(s))}addReference(e,n,c){return u0(e,c)}removeReference(e,n,c){return u0(e,c)}removeTargets(e,n,c){return this.db.getTargetCache().removeTargets(e,n,c)}markPotentiallyOrphaned(e,n){return u0(e,n)}Gn(e,n){return function(c,s){let r=!1;return Gw(c).tt(a=>jw(c,a,s).next(i=>(i&&(r=!0),S.resolve(!i)))).next(()=>r)}(e,n)}removeOrphanedDocuments(e,n){const c=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let r=0;return this.Kn(e,(a,i)=>{if(i<=n){const o=this.Gn(e,a).next(l=>{if(!l)return r++,c.getEntry(e,a).next(()=>(c.removeEntry(a,h2.min()),ee(e).delete([0,n4(a.path)])))});s.push(o)}}).next(()=>S.waitFor(s)).next(()=>c.apply(e)).next(()=>r)}removeTarget(e,n){const c=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,c)}updateLimboDocument(e,n){return u0(e,n)}Kn(e,n){const c=ee(e);let s,r=i4.at;return c.Z({index:"documentTargetsIndex"},([a,i],{path:o,sequenceNumber:l})=>{a===0?(r!==i4.at&&n(new Q(Y4(s)),r),r=l,s=o):r=i4.at}).next(()=>{r!==i4.at&&n(new Q(Y4(s)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function u0(t,e){return ee(t).put(function(n,c){return{targetId:0,path:n4(n.path),sequenceNumber:c}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.changes=new Ne(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Y2.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const c=this.changes.get(n);return c!==void 0?S.resolve(c):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k52{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,c){return De(e).put(c)}removeEntry(e,n,c){return De(e).delete(function(s,r){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],pr(r),a[a.length-1]]}(n,c))}updateMetadata(e,n){return this.getMetadata(e).next(c=>(c.byteSize+=n,this.Qn(e,c)))}getEntry(e,n){let c=Y2.newInvalidDocument(n);return De(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Hn(n))},(s,r)=>{c=this.jn(n,r)}).next(()=>c)}Wn(e,n){let c={size:0,document:Y2.newInvalidDocument(n)};return De(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Hn(n))},(s,r)=>{c={document:this.jn(n,r),size:gr(r)}}).next(()=>c)}getEntries(e,n){let c=o4();return this.zn(e,n,(s,r)=>{const a=this.jn(s,r);c=c.insert(s,a)}).next(()=>c)}Hn(e,n){let c=o4(),s=new d1(Q.comparator);return this.zn(e,n,(r,a)=>{const i=this.jn(r,a);c=c.insert(r,i),s=s.insert(r,gr(a))}).next(()=>({documents:c,Jn:s}))}zn(e,n,c){if(n.isEmpty())return S.resolve();let s=new $2(Yf);n.forEach(o=>s=s.add(o));const r=IDBKeyRange.bound(Hn(s.first()),Hn(s.last())),a=s.getIterator();let i=a.getNext();return De(e).Z({index:"documentKeyIndex",range:r},(o,l,u)=>{const f=Q.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;i&&Yf(i,f)<0;)c(i,null),i=a.getNext();i&&i.isEqual(f)&&(c(i,l),i=a.hasNext()?a.getNext():null),i?u.j(Hn(i)):u.done()}).next(()=>{for(;i;)c(i,null),i=a.hasNext()?a.getNext():null})}getAllFromCollection(e,n,c){const s=[n.popLast().toArray(),n.lastSegment(),pr(c.readTime),c.documentKey.path.isEmpty()?"":c.documentKey.path.lastSegment()],r=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return De(e).W(IDBKeyRange.bound(s,r,!0)).next(a=>{let i=o4();for(const o of a){const l=this.jn(Q.fromSegments(o.prefixPath.concat(o.collectionGroup,o.documentId)),o);i=i.insert(l.key,l)}return i})}getAllFromCollectionGroup(e,n,c,s){let r=o4();const a=Qf(n,c),i=Qf(n,g4.max());return De(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,i,!0)},(o,l,u)=>{const f=this.jn(Q.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(f.key,f),r.size===s&&u.done()}).next(()=>r)}newChangeBuffer(e){return new I52(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Kf(e).get("remoteDocumentGlobalKey").next(n=>(v2(!!n),n))}Qn(e,n){return Kf(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const c=g52(this.It,n);if(!(c.isNoDocument()&&c.version.isEqual(h2.min())))return c}return Y2.newInvalidDocument(e)}}function Kw(t){return new k52(t)}class I52 extends Ww{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Ne(c=>c.toString(),(c,s)=>c.isEqual(s))}applyChanges(e){const n=[];let c=0,s=new $2((r,a)=>V2(r.canonicalString(),a.canonicalString()));return this.changes.forEach((r,a)=>{const i=this.Xn.get(r);if(n.push(this.Yn.removeEntry(e,r,i.readTime)),a.isValidDocument()){const o=Pf(this.Yn.It,a);s=s.add(r.path.popLast()),c+=gr(o)-i.size,n.push(this.Yn.addEntry(e,r,o))}else if(c-=i.size,this.trackRemovals){const o=Pf(this.Yn.It,a.convertToNoDocument(h2.min()));n.push(this.Yn.addEntry(e,r,o))}}),s.forEach(r=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,r))}),n.push(this.Yn.updateMetadata(e,c)),S.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(c=>(this.Xn.set(n,{size:c.size,readTime:c.document.readTime}),c.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:c,Jn:s})=>(s.forEach((r,a)=>{this.Xn.set(r,{size:a,readTime:c.get(r).readTime})}),c))}}function Kf(t){return E1(t,"remoteDocumentGlobal")}function De(t){return E1(t,"remoteDocumentsV14")}function Hn(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qf(t,e){const n=e.documentKey.path.toArray();return[t,pr(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Yf(t,e){const n=t.path.toArray(),c=e.path.toArray();let s=0;for(let r=0;r<n.length-2&&r<c.length-2;++r)if(s=V2(n[r],c[r]),s)return s;return s=V2(n.length,c.length),s||(s=V2(n[n.length-2],c[c.length-2]),s||V2(n[n.length-1],c[c.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A52{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,c,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=c,this.indexManager=s}getDocument(e,n){let c=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(c=s,this.getBaseDocument(e,n,c))).next(s=>(c!==null&&Yn(c.mutation,s,m4.empty(),i1.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(c=>this.getLocalViewOfDocuments(e,c,C2()).next(()=>c))}getLocalViewOfDocuments(e,n,c=C2()){const s=Q4();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,c).next(r=>{let a=In();return r.forEach((i,o)=>{a=a.insert(i,o.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const c=Q4();return this.populateOverlays(e,c,n).next(()=>this.computeViews(e,n,c,C2()))}populateOverlays(e,n,c){const s=[];return c.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((a,i)=>{n.set(a,i)})})}computeViews(e,n,c,s){let r=o4();const a=Xn(),i=Xn();return n.forEach((o,l)=>{const u=c.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof R3)?r=r.insert(l.key,l):u!==void 0&&(a.set(l.key,u.mutation.getFieldMask()),Yn(u.mutation,l,u.mutation.getFieldMask(),i1.now()))}),this.recalculateAndSaveOverlays(e,r).next(o=>(o.forEach((l,u)=>a.set(l,u)),n.forEach((l,u)=>{var f;return i.set(l,new A52(u,(f=a.get(l))!==null&&f!==void 0?f:null))}),i))}recalculateAndSaveOverlays(e,n){const c=Xn();let s=new d1((a,i)=>a-i),r=C2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const i of a)i.keys().forEach(o=>{const l=n.get(o);if(l===null)return;let u=c.get(o)||m4.empty();u=i.applyToLocalView(l,u),c.set(o,u);const f=(s.get(i.batchId)||C2()).add(o);s=s.insert(i.batchId,f)})}).next(()=>{const a=[],i=s.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,u=o.value,f=ww();u.forEach(h=>{if(!r.has(h)){const d=Hw(n.get(h),c.get(h));d!==null&&f.set(h,d),r=r.add(h)}}),a.push(this.documentOverlayCache.saveOverlays(e,l,f))}return S.waitFor(a)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(c=>this.recalculateAndSaveOverlays(e,c))}getDocumentsMatchingQuery(e,n,c){return function(s){return Q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):D7(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,c):this.getDocumentsMatchingCollectionQuery(e,n,c)}getNextDocuments(e,n,c,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,c,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,c.largestBatchId,s-r.size):S.resolve(Q4());let i=-1,o=r;return a.next(l=>S.forEach(l,(u,f)=>(i<f.largestBatchId&&(i=f.largestBatchId),r.get(u)?S.resolve():this.getBaseDocument(e,u,f).next(h=>{o=o.insert(u,h)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,o,l,C2())).next(u=>({batchId:i,changes:bw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(c=>{let s=In();return c.isFoundDocument()&&(s=s.insert(c.key,c)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,c){const s=n.collectionGroup;let r=In();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,i=>{const o=function(l,u){return new D3(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,i.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,c).next(l=>{l.forEach((u,f)=>{r=r.insert(u,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,c){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,c).next(r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,c.largestBatchId))).next(r=>{r.forEach((i,o)=>{const l=o.getKey();s.get(l)===null&&(s=s.insert(l,Y2.newInvalidDocument(l)))});let a=In();return s.forEach((i,o)=>{const l=r.get(i);l!==void 0&&Yn(l.mutation,o,m4.empty(),i1.now()),R7(n,o)&&(a=a.insert(i,o))}),a})}getBaseDocument(e,n,c){return c===null||c.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(Y2.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T52{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var c;return this.Zn.set(n.id,{id:(c=n).id,version:c.version,createTime:k1(c.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(c){return{name:c.name,query:q7(c.bundledQuery),readTime:k1(c.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E52{constructor(){this.overlays=new d1(Q.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const c=Q4();return S.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&c.set(s,r)})).next(()=>c)}saveOverlays(e,n,c){return c.forEach((s,r)=>{this.ue(e,n,r)}),S.resolve()}removeOverlaysForBatchId(e,n,c){const s=this.es.get(c);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(c)),S.resolve()}getOverlaysForCollection(e,n,c){const s=Q4(),r=n.length+1,a=new Q(n.child("")),i=this.overlays.getIteratorFrom(a);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>c&&s.set(o.getKey(),o)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,c,s){let r=new d1((l,u)=>l-u);const a=this.overlays.getIterator();for(;a.hasNext();){const l=a.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>c){let u=r.get(l.largestBatchId);u===null&&(u=Q4(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const i=Q4(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,u)=>i.set(l,u)),!(i.size()>=s)););return S.resolve(i)}ue(e,n,c){const s=this.overlays.get(c.key);if(s!==null){const a=this.es.get(s.largestBatchId).delete(c.key);this.es.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(c.key,new U7(n,c));let r=this.es.get(n);r===void 0&&(r=C2(),this.es.set(n,r)),this.es.set(n,r.add(c.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G7{constructor(){this.ns=new $2(S1.ss),this.rs=new $2(S1.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const c=new S1(e,n);this.ns=this.ns.add(c),this.rs=this.rs.add(c)}us(e,n){e.forEach(c=>this.addReference(c,n))}removeReference(e,n){this.cs(new S1(e,n))}hs(e,n){e.forEach(c=>this.removeReference(c,n))}ls(e){const n=new Q(new N2([])),c=new S1(n,e),s=new S1(n,e+1),r=[];return this.rs.forEachInRange([c,s],a=>{this.cs(a),r.push(a.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Q(new N2([])),c=new S1(n,e),s=new S1(n,e+1);let r=C2();return this.rs.forEachInRange([c,s],a=>{r=r.add(a.key)}),r}containsKey(e){const n=new S1(e,0),c=this.ns.firstAfterOrEqual(n);return c!==null&&e.isEqual(c.key)}}class S1{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Q.comparator(e.key,n.key)||V2(e._s,n._s)}static os(e,n){return V2(e._s,n._s)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P52{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new $2(S1.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,c,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new B7(r,n,c,s);this.mutationQueue.push(a);for(const i of s)this.gs=this.gs.add(new S1(i.key,r)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const c=n+1,s=this.ps(c),r=s<0?0:s;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const c=new S1(n,0),s=new S1(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([c,s],a=>{const i=this.ys(a._s);r.push(i)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let c=new $2(V2);return n.forEach(s=>{const r=new S1(s,0),a=new S1(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,a],i=>{c=c.add(i._s)})}),S.resolve(this.Is(c))}getAllMutationBatchesAffectingQuery(e,n){const c=n.path,s=c.length+1;let r=c;Q.isDocumentKey(r)||(r=r.child(""));const a=new S1(new Q(r),0);let i=new $2(V2);return this.gs.forEachWhile(o=>{const l=o.key.path;return!!c.isPrefixOf(l)&&(l.length===s&&(i=i.add(o._s)),!0)},a),S.resolve(this.Is(i))}Is(e){const n=[];return e.forEach(c=>{const s=this.ys(c);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){v2(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let c=this.gs;return S.forEach(n.mutations,s=>{const r=new S1(s.key,n.batchId);return c=c.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=c})}An(e){}containsKey(e,n){const c=new S1(n,0),s=this.gs.firstAfterOrEqual(c);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D52{constructor(e){this.Es=e,this.docs=new d1(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const c=n.key,s=this.docs.get(c),r=s?s.size:0,a=this.Es(n);return this.docs=this.docs.insert(c,{document:n.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,c.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const c=this.docs.get(n);return S.resolve(c?c.document.mutableCopy():Y2.newInvalidDocument(n))}getEntries(e,n){let c=o4();return n.forEach(s=>{const r=this.docs.get(s);c=c.insert(s,r?r.document.mutableCopy():Y2.newInvalidDocument(s))}),S.resolve(c)}getAllFromCollection(e,n,c){let s=o4();const r=new Q(n.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:i,value:{document:o}}=a.getNext();if(!n.isPrefixOf(i.path))break;i.path.length>n.length+1||I7(Zb(o),c)<=0||(s=s.insert(o.key,o.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,c,s){n2()}As(e,n){return S.forEach(this.docs,c=>n(c))}newChangeBuffer(e){return new R52(this)}getSize(e){return S.resolve(this.size)}}class R52 extends Ww{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((c,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(c)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O52{constructor(e){this.persistence=e,this.Rs=new Ne(n=>Ht(n),ws),this.lastRemoteSnapshotVersion=h2.min(),this.highestTargetId=0,this.bs=0,this.Ps=new G7,this.targetCount=0,this.vs=bt.Pn()}forEachTarget(e,n){return this.Rs.forEach((c,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,c){return c&&(this.lastRemoteSnapshotVersion=c),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new bt(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,c){let s=0;const r=[];return this.Rs.forEach((a,i)=>{i.sequenceNumber<=n&&c.get(i.targetId)===null&&(this.Rs.delete(a),r.push(this.removeMatchingKeysForTargetId(e,i.targetId)),s++)}),S.waitFor(r).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const c=this.Rs.get(n)||null;return S.resolve(c)}addMatchingKeys(e,n,c){return this.Ps.us(n,c),S.resolve()}removeMatchingKeys(e,n,c){this.Ps.hs(n,c);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const c=this.Ps.ds(n);return S.resolve(c)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new i4(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new O52(this),this.indexManager=new b52,this.remoteDocumentCache=function(c){return new D52(c)}(c=>this.referenceDelegate.xs(c)),this.It=new $w(n),this.Ns=new T52(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new E52,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let c=this.Vs[e.toKey()];return c||(c=new P52(n,this.referenceDelegate),this.Vs[e.toKey()]=c),c}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,c){B("MemoryPersistence","Starting transaction:",e);const s=new F52(this.Ss.next());return this.referenceDelegate.ks(),c(s).next(r=>this.referenceDelegate.Ms(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return S.or(Object.values(this.Vs).map(c=>()=>c.containsKey(e,n)))}}class F52 extends tw{constructor(e){super(),this.currentSequenceNumber=e}}class Ra{constructor(e){this.persistence=e,this.Fs=new G7,this.$s=null}static Bs(e){return new Ra(e)}get Ls(){if(this.$s)return this.$s;throw n2()}addReference(e,n,c){return this.Fs.addReference(c,n),this.Ls.delete(c.toString()),S.resolve()}removeReference(e,n,c){return this.Fs.removeReference(c,n),this.Ls.add(c.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ls.add(r.toString()))}).next(()=>c.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,c=>{const s=Q.fromPath(c);return this.Us(e,s).next(r=>{r||n.removeEntry(s,h2.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(c=>{c?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B52{constructor(e){this.It=e}$(e,n,c,s){const r=new Ia("createOrUpgrade",n);c<1&&s>=1&&(function(i){i.createObjectStore("owner")}(e),function(i){i.createObjectStore("mutationQueues",{keyPath:"userId"}),i.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ef,{unique:!0}),i.createObjectStore("documentMutations")}(e),Xf(e),function(i){i.createObjectStore("remoteDocuments")}(e));let a=S.resolve();return c<3&&s>=3&&(c!==0&&(function(i){i.deleteObjectStore("targetDocuments"),i.deleteObjectStore("targets"),i.deleteObjectStore("targetGlobal")}(e),Xf(e)),a=a.next(()=>function(i){const o=i.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:h2.min().toTimestamp(),targetCount:0};return o.put("targetGlobalKey",l)}(r))),c<4&&s>=4&&(c!==0&&(a=a.next(()=>function(i,o){return o.store("mutations").W().next(l=>{i.deleteObjectStore("mutations"),i.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ef,{unique:!0});const u=o.store("mutations"),f=l.map(h=>u.put(h));return S.waitFor(f)})}(e,r))),a=a.next(()=>{(function(i){i.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),c<5&&s>=5&&(a=a.next(()=>this.qs(r))),c<6&&s>=6&&(a=a.next(()=>(function(i){i.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),c<7&&s>=7&&(a=a.next(()=>this.Gs(r))),c<8&&s>=8&&(a=a.next(()=>this.Qs(e,r))),c<9&&s>=9&&(a=a.next(()=>{(function(i){i.objectStoreNames.contains("remoteDocumentChanges")&&i.deleteObjectStore("remoteDocumentChanges")})(e)})),c<10&&s>=10&&(a=a.next(()=>this.js(r))),c<11&&s>=11&&(a=a.next(()=>{(function(i){i.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(i){i.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),c<12&&s>=12&&(a=a.next(()=>{(function(i){const o=i.createObjectStore("documentOverlays",{keyPath:h52});o.createIndex("collectionPathOverlayIndex",d52,{unique:!1}),o.createIndex("collectionGroupOverlayIndex",m52,{unique:!1})})(e)})),c<13&&s>=13&&(a=a.next(()=>function(i){const o=i.createObjectStore("remoteDocumentsV14",{keyPath:t52});o.createIndex("documentKeyIndex",n52),o.createIndex("collectionGroupIndex",c52)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),c<14&&s>=14&&(a=a.next(()=>this.zs(e,r))),c<15&&s>=15&&(a=a.next(()=>function(i){i.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),i.createObjectStore("indexState",{keyPath:o52}).createIndex("sequenceNumberIndex",l52,{unique:!1}),i.createObjectStore("indexEntries",{keyPath:u52}).createIndex("documentKeyIndex",f52,{unique:!1})}(e))),a}Ks(e){let n=0;return e.store("remoteDocuments").Z((c,s)=>{n+=gr(s)}).next(()=>{const c={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}qs(e){const n=e.store("mutationQueues"),c=e.store("mutations");return n.W().next(s=>S.forEach(s,r=>{const a=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return c.W("userMutationsIndex",a).next(i=>S.forEach(i,o=>{v2(o.userId===r.userId);const l=qe(this.It,o);return qw(e,r.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),c=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const r=[];return c.Z((a,i)=>{const o=new N2(a),l=function(u){return[0,n4(u)]}(o);r.push(n.get(l).next(u=>u?S.resolve():(f=>n.put({targetId:0,path:n4(f),sequenceNumber:s.highestListenSequenceNumber}))(o)))}).next(()=>S.waitFor(r))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:i52});const c=n.store("collectionParents"),s=new j7,r=a=>{if(s.add(a)){const i=a.lastSegment(),o=a.popLast();return c.put({collectionId:i,parent:n4(o)})}};return n.store("remoteDocuments").Z({X:!0},(a,i)=>{const o=new N2(a);return r(o.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([a,i,o],l)=>{const u=Y4(i);return r(u.popLast())}))}js(e){const n=e.store("targets");return n.Z((c,s)=>{const r=An(s),a=Uw(this.It,r);return n.put(a)})}Ws(e,n){const c=n.store("remoteDocuments"),s=[];return c.Z((r,a)=>{const i=n.store("remoteDocumentsV14"),o=(l=a,l.document?new Q(N2.fromString(l.document.name).popFirst(5)):l.noDocument?Q.fromSegments(l.noDocument.path):l.unknownDocument?Q.fromSegments(l.unknownDocument.path):n2()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:o.slice(0,o.length-2),collectionGroup:o[o.length-2],documentId:o[o.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(i.put(u))}).next(()=>S.waitFor(s))}zs(e,n){const c=n.store("mutations"),s=Kw(this.It),r=new Yw(Ra.Bs,this.It.re);return c.W().next(a=>{const i=new Map;return a.forEach(o=>{var l;let u=(l=i.get(o.userId))!==null&&l!==void 0?l:C2();qe(this.It,o).keys().forEach(f=>u=u.add(f)),i.set(o.userId,u)}),S.forEach(i,(o,l)=>{const u=new x1(l),f=Pa.oe(this.It,u),h=r.getIndexManager(u),d=Da.oe(u,this.It,h,r.referenceDelegate);return new Qw(s,d,f,h).recalculateAndSaveOverlaysForDocumentKeys(new $i(n,i4.at),o).next()})})}}function Xf(t){t.createObjectStore("targetDocuments",{keyPath:r52}).createIndex("documentTargetsIndex",a52,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",s52,{unique:!0}),t.createObjectStore("targetGlobal")}const x8="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class W7{constructor(e,n,c,s,r,a,i,o,l,u,f=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=c,this.Hs=r,this.window=a,this.document=i,this.Js=l,this.Ys=u,this.Xs=f,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=h=>Promise.resolve(),!W7.C())throw new R(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new N52(this,s),this.ii=n+"main",this.It=new $w(o),this.ri=new P4(this.ii,this.Xs,new B52(this.It)),this.Cs=new L52(this.referenceDelegate,this.It),this.remoteDocumentCache=Kw(this.It),this.Ns=new y52,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&p1("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(N.FAILED_PRECONDITION,x8);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new i4(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>f0(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(_e(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Vn(e).get("owner").next(n=>S.resolve(this.mi(n)))}gi(e){return f0(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const c=E1(n,"clientMetadata");return c.W().next(s=>{const r=this.Ii(s,18e5),a=s.filter(i=>r.indexOf(i)===-1);return S.forEach(a,i=>c.delete(i.clientId)).next(()=>a)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?S.resolve(!0):Vn(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new R(N.FAILED_PRECONDITION,x8);return!1}}return!(!this.networkEnabled||!this.inForeground)||f0(e).W().next(c=>this.Ii(c,5e3).find(s=>{if(this.clientId!==s.clientId){const r=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,i=this.networkEnabled===s.networkEnabled;if(r||a&&i)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new $i(e,i4.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(c=>this.pi(c.updateTimeMs,n)&&!this.Ei(c.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>f0(e).W().next(n=>this.Ii(n,18e5).map(c=>c.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Da.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new w52(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Pa.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,c){B("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",r=(a=this.Xs)===15?p52:a===14?Bw:a===13?Fw:a===12?v52:a===11?Ow:void n2();var a;let i;return this.ri.runTransaction(e,s,r,o=>(i=new $i(o,this.Ss?this.Ss.next():i4.at),n==="readwrite-primary"?this.fi(i).next(l=>!!l||this.di(i)).next(l=>{if(!l)throw p1(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new R(N.FAILED_PRECONDITION,ew);return c(i)}).next(l=>this.wi(i).next(()=>l)):this.Vi(i).next(()=>c(i)))).then(o=>(i.raiseOnCommittedEvent(),o))}Vi(e){return Vn(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(N.FAILED_PRECONDITION,x8)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vn(e).put("owner",n)}static C(){return P4.C()}_i(e){const n=Vn(e);return n.get("owner").next(c=>this.mi(c)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):S.resolve())}pi(e,n){const c=Date.now();return!(e<c-n)&&(!(e>c)||(p1(`Detected an update time that is in the future: ${e} > ${c}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Et2()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const c=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(c){return p1("IndexedDbPersistence","Failed to get zombied client id.",c),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){p1("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vn(t){return E1(t,"owner")}function f0(t){return E1(t,"clientMetadata")}function K7(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q7{constructor(e,n,c,s){this.targetId=e,this.fromCache=n,this.Si=c,this.Di=s}static Ci(e,n){let c=C2(),s=C2();for(const r of n.docChanges)switch(r.type){case 0:c=c.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Q7(e,n.fromCache,c,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,c,s){return this.ki(e,n).next(r=>r||this.Mi(e,n,s,c)).next(r=>r||this.Oi(e,n))}ki(e,n){if(wf(n))return S.resolve(null);let c=l4(n);return this.indexManager.getIndexType(e,c).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=vr(n,null,"F"),c=l4(n)),this.indexManager.getDocumentsMatchingTarget(e,c).next(r=>{const a=C2(...r);return this.Ni.getDocuments(e,a).next(i=>this.indexManager.getMinOffset(e,c).next(o=>{const l=this.Fi(n,i);return this.$i(n,l,a,o.readTime)?this.ki(e,vr(n,null,"F")):this.Bi(e,l,n,o)}))})))}Mi(e,n,c,s){return wf(n)||s.isEqual(h2.min())?this.Oi(e,n):this.Ni.getDocuments(e,c).next(r=>{const a=this.Fi(n,r);return this.$i(n,a,c,s)?this.Oi(e,n):(Ei()<=A2.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oi(n)),this.Bi(e,a,n,Jb(s,-1)))})}Fi(e,n){let c=new $2(fw(e));return n.forEach((s,r)=>{R7(e,r)&&(c=c.add(r))}),c}$i(e,n,c,s){if(e.limit===null)return!1;if(c.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return Ei()<=A2.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.Ni.getDocumentsMatchingQuery(e,n,g4.min())}Bi(e,n,c,s){return this.Ni.getDocumentsMatchingQuery(e,c,s).next(r=>(n.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $52{constructor(e,n,c,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new d1(V2),this.qi=new Ne(r=>Ht(r),ws),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(c)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Jw(t,e,n,c){return new $52(t,e,n,c)}async function Zw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",c=>{let s;return n.mutationQueue.getAllMutationBatches(c).next(r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(c))).next(r=>{const a=[],i=[];let o=C2();for(const l of s){a.push(l.batchId);for(const u of l.mutations)o=o.add(u.key)}for(const l of r){i.push(l.batchId);for(const u of l.mutations)o=o.add(u.key)}return n.localDocuments.getDocuments(c,o).next(l=>({ji:l,removedBatchIds:a,addedBatchIds:i}))})})}function U52(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",c=>{const s=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(a,i,o,l){const u=o.batch,f=u.keys();let h=S.resolve();return f.forEach(d=>{h=h.next(()=>l.getEntry(i,d)).next(v=>{const g=o.docVersions.get(d);v2(g!==null),v.version.compareTo(g)<0&&(u.applyToRemoteDocument(v,o),v.isValidDocument()&&(v.setReadTime(o.commitVersion),l.addEntry(v)))})}),h.next(()=>a.mutationQueue.removeMutationBatch(i,u))}(n,c,e,r).next(()=>r.apply(c)).next(()=>n.mutationQueue.performConsistencyCheck(c)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(c,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,function(a){let i=C2();for(let o=0;o<a.mutationResults.length;++o)a.mutationResults[o].transformResults.length>0&&(i=i.add(a.batch.mutations[o].key));return i}(e))).next(()=>n.localDocuments.getDocuments(c,s))})}function eL(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function q52(t,e){const n=X(t),c=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const i=[];e.targetChanges.forEach((u,f)=>{const h=s.get(f);if(!h)return;i.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,f)));let d=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(f)?d=d.withResumeToken(w1.EMPTY_BYTE_STRING,h2.min()).withLastLimboFreeSnapshotVersion(h2.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,c)),s=s.insert(f,d),function(v,g,H){return v.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(h,d,u)&&i.push(n.Cs.updateTargetData(r,d))});let o=o4(),l=C2();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&i.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),i.push(tL(r,a,e.documentUpdates).next(u=>{o=u.Wi,l=u.zi})),!c.isEqual(h2.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(f=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,c));i.push(u)}return S.waitFor(i).next(()=>a.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(n.Ui=s,r))}function tL(t,e,n){let c=C2(),s=C2();return n.forEach(r=>c=c.add(r)),e.getEntries(t,c).next(r=>{let a=o4();return n.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(i)),o.isNoDocument()&&o.version.isEqual(h2.min())?(e.removeEntry(i,o.readTime),a=a.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(o),a=a.insert(i,o)):B("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{Wi:a,zi:s}})}function j52(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",c=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(c,e)))}function T6(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",c=>{let s;return n.Cs.getTargetData(c,e).next(r=>r?(s=r,S.resolve(s)):n.Cs.allocateTargetId(c).next(a=>(s=new re(e,a,0,c.currentSequenceNumber),n.Cs.addTargetData(c,s).next(()=>s))))}).then(c=>{const s=n.Ui.get(c.targetId);return(s===null||c.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(c.targetId,c),n.qi.set(e,c.targetId)),c})}async function E6(t,e,n){const c=X(t),s=c.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await c.persistence.runTransaction("Release target",r,a=>c.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_e(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}c.Ui=c.Ui.remove(e),c.qi.delete(s.target)}function yr(t,e,n){const c=X(t);let s=h2.min(),r=C2();return c.persistence.runTransaction("Execute query","readonly",a=>function(i,o,l){const u=X(i),f=u.qi.get(l);return f!==void 0?S.resolve(u.Ui.get(f)):u.Cs.getTargetData(o,l)}(c,a,l4(e)).next(i=>{if(i)return s=i.lastLimboFreeSnapshotVersion,c.Cs.getMatchingKeysForTargetId(a,i.targetId).next(o=>{r=o})}).next(()=>c.Li.getDocumentsMatchingQuery(a,e,n?s:h2.min(),n?r:C2())).next(i=>(sL(c,uw(e),i),{documents:i,Hi:r})))}function nL(t,e){const n=X(t),c=X(n.Cs),s=n.Ui.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",r=>c.se(r,e).next(a=>a?a.target:null))}function cL(t,e){const n=X(t),c=n.Ki.get(e)||h2.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Gi.getAllFromCollectionGroup(s,e,Jb(c,-1),Number.MAX_SAFE_INTEGER)).then(s=>(sL(n,e,s),s))}function sL(t,e,n){let c=h2.min();n.forEach((s,r)=>{r.readTime.compareTo(c)>0&&(c=r.readTime)}),t.Ki.set(e,c)}async function G52(t,e,n,c){const s=X(t);let r=C2(),a=o4();for(const l of n){const u=e.Ji(l.metadata.name);l.document&&(r=r.add(u));const f=e.Yi(l);f.setReadTime(e.Xi(l.metadata.readTime)),a=a.insert(u,f)}const i=s.Gi.newChangeBuffer({trackRemovals:!0}),o=await T6(s,function(l){return l4(en(N2.fromString(`__bundle__/docs/${l}`)))}(c));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>tL(l,i,a).next(u=>(i.apply(l),u)).next(u=>s.Cs.removeMatchingKeysForTargetId(l,o.targetId).next(()=>s.Cs.addMatchingKeys(l,r,o.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function W52(t,e,n=C2()){const c=await T6(t,l4(q7(e.bundledQuery))),s=X(t);return s.persistence.runTransaction("Save named query","readwrite",r=>{const a=k1(e.readTime);if(c.snapshotVersion.compareTo(a)>=0)return s.Ns.saveNamedQuery(r,e);const i=c.withResumeToken(w1.EMPTY_BYTE_STRING,a);return s.Ui=s.Ui.insert(i.targetId,i),s.Cs.updateTargetData(r,i).next(()=>s.Cs.removeMatchingKeysForTargetId(r,c.targetId)).next(()=>s.Cs.addMatchingKeys(r,n,c.targetId)).next(()=>s.Ns.saveNamedQuery(r,e))})}function Jf(t,e){return`firestore_clients_${t}_${e}`}function Zf(t,e,n){let c=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(c+=`_${e.uid}`),c}function _8(t,e){return`firestore_targets_${t}_${e}`}class Hr{constructor(e,n,c,s){this.user=e,this.batchId=n,this.state=c,this.error=s}static Zi(e,n,c){const s=JSON.parse(c);let r,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(r=new R(s.error.code,s.error.message))),a?new Hr(e,n,s.state,r):(p1("SharedClientState",`Failed to parse mutation state for ID '${n}': ${c}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jn{constructor(e,n,c){this.targetId=e,this.state=n,this.error=c}static Zi(e,n){const c=JSON.parse(n);let s,r=typeof c=="object"&&["not-current","current","rejected"].indexOf(c.state)!==-1&&(c.error===void 0||typeof c.error=="object");return r&&c.error&&(r=typeof c.error.message=="string"&&typeof c.error.code=="string",r&&(s=new R(c.error.code,c.error.message))),r?new Jn(e,c.state,s):(p1("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vr{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const c=JSON.parse(n);let s=typeof c=="object"&&c.activeTargetIds instanceof Array,r=Ea();for(let a=0;s&&a<c.activeTargetIds.length;++a)s=sw(c.activeTargetIds[a]),r=r.add(c.activeTargetIds[a]);return s?new Vr(e,r):(p1("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Y7{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Y7(n.clientId,n.onlineState):(p1("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ui{constructor(){this.activeTargetIds=Ea()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N8{constructor(e,n,c,s,r){this.window=e,this.Hs=n,this.persistenceKey=c,this.sr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new d1(V2),this.started=!1,this.cr=[];const a=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=Jf(this.persistenceKey,this.sr),this.hr=function(i){return`firestore_sequence_number_${i}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Ui),this.lr=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.wr=function(i){return`firestore_online_state_${i}`}(this.persistenceKey),this.mr=function(i){return`firestore_bundle_loaded_v2_${i}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const c of e){if(c===this.sr)continue;const s=this.getItem(Jf(this.persistenceKey,c));if(s){const r=Vr.Zi(c,s);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const c=this.yr(n);c&&this.pr(c)}for(const c of this.cr)this.rr(c);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((c,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,c){this.Tr(e,n,c),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const c=this.storage.getItem(_8(this.persistenceKey,e));if(c){const s=Jn.Zi(e,c);s&&(n=s.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(_8(this.persistenceKey,e))}updateQueryState(e,n,c){this.Rr(e,n,c)}handleUserChange(e,n,c){n.forEach(s=>{this.Er(s)}),this.currentUser=e,c.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void p1("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const c=this.vr(n.key);return this.Vr(c,null)}{const c=this.Sr(n.key,n.newValue);if(c)return this.Vr(c.clientId,c)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const c=this.Dr(n.key,n.newValue);if(c)return this.Cr(c)}}else if(this._r.test(n.key)){if(n.newValue!==null){const c=this.Nr(n.key,n.newValue);if(c)return this.kr(c)}}else if(n.key===this.wr){if(n.newValue!==null){const c=this.yr(n.newValue);if(c)return this.pr(c)}}else if(n.key===this.hr){const c=function(s){let r=i4.at;if(s!=null)try{const a=JSON.parse(s);v2(typeof a=="number"),r=a}catch(a){p1("SharedClientState","Failed to read sequence number from WebStorage",a)}return r}(n.newValue);c!==i4.at&&this.sequenceNumberHandler(c)}else if(n.key===this.mr){const c=this.Mr(n.newValue);await Promise.all(c.map(s=>this.syncEngine.Or(s)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,c){const s=new Hr(this.currentUser,e,n,c),r=Zf(this.persistenceKey,this.currentUser,e);this.setItem(r,s.tr())}Er(e){const n=Zf(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,c){const s=_8(this.persistenceKey,e),r=new Jn(e,n,c);this.setItem(s,r.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const c=this.vr(e);return Vr.Zi(c,n)}Dr(e,n){const c=this.dr.exec(e),s=Number(c[1]),r=c[2]!==void 0?c[2]:null;return Hr.Zi(new x1(r),s,n)}Nr(e,n){const c=this._r.exec(e),s=Number(c[1]);return Jn.Zi(s,n)}yr(e){return Y7.Zi(e)}Mr(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const c=n?this.ur.insert(e,n):this.ur.remove(e),s=this.Ir(this.ur),r=this.Ir(c),a=[],i=[];return r.forEach(o=>{s.has(o)||a.push(o)}),s.forEach(o=>{r.has(o)||i.push(o)}),this.syncEngine.Br(a,i).then(()=>{this.ur=c})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=Ea();return e.forEach((c,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class rL{constructor(){this.Lr=new Ui,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,c){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,c){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ui,Promise.resolve()}handleUserChange(e,n,c){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K52{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q52={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y52{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X52 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,c,s,r){const a=this.ao(e,n);B("RestConnection","Sending: ",a,c);const i={};return this.ho(i,s,r),this.lo(e,a,i,c).then(o=>(B("RestConnection","Received: ",o),o),o=>{throw _6("RestConnection",`${e} failed with error: `,o,"url: ",a,"request:",c),o})}fo(e,n,c,s,r,a){return this.co(e,n,c,s,r)}ho(e,n,c){e["X-Goog-Api-Client"]="gl-js/ fire/"+Z6,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),c&&c.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const c=Q52[e];return`${this.oo}/v1/${n}:${c}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,c,s){return new Promise((r,a)=>{const i=new Q82;i.listenOnce(G82.COMPLETE,()=>{try{switch(i.getLastErrorCode()){case L8.NO_ERROR:const l=i.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),r(l);break;case L8.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),a(new R(N.DEADLINE_EXCEEDED,"Request time out"));break;case L8.HTTP_ERROR:const u=i.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",i.getResponseText()),u>0){const f=i.getResponseJson().error;if(f&&f.status&&f.message){const h=function(d){const v=d.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(v)>=0?v:N.UNKNOWN}(f.status);a(new R(h,f.message))}else a(new R(N.UNKNOWN,"Server responded with status "+i.getStatus()))}else a(new R(N.UNAVAILABLE,"Connection failed."));break;default:n2()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const o=JSON.stringify(s);i.send(n,"POST",o,c,15)})}_o(e,n,c){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=q82(),a=j82(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new K82({})),this.ho(i.initMessageHeaders,n,c),i.encodeInitMessageHeaders=!0;const o=s.join("");B("Connection","Creating WebChannel: "+o,i);const l=r.createWebChannel(o,i);let u=!1,f=!1;const h=new Y52({Hr:v=>{f?B("Connection","Not sending because WebChannel is closed:",v):(u||(B("Connection","Opening WebChannel transport."),l.open(),u=!0),B("Connection","WebChannel sending:",v),l.send(v))},Jr:()=>l.close()}),d=(v,g,H)=>{v.listen(g,p=>{try{H(p)}catch(V){setTimeout(()=>{throw V},0)}})};return d(l,a0.EventType.OPEN,()=>{f||B("Connection","WebChannel transport opened.")}),d(l,a0.EventType.CLOSE,()=>{f||(f=!0,B("Connection","WebChannel transport closed"),h.io())}),d(l,a0.EventType.ERROR,v=>{f||(f=!0,_6("Connection","WebChannel transport errored:",v),h.io(new R(N.UNAVAILABLE,"The operation could not be completed")))}),d(l,a0.EventType.MESSAGE,v=>{var g;if(!f){const H=v.data[0];v2(!!H);const p=H,V=p.error||((g=p[0])===null||g===void 0?void 0:g.error);if(V){B("Connection","WebChannel received error:",V);const z=V.status;let _=function(x){const L=V1[x];if(L!==void 0)return Cw(L)}(z),b=V.message;_===void 0&&(_=N.INTERNAL,b="Unknown error status: "+z+" with message "+V.message),f=!0,h.io(new R(_,b)),l.close()}else B("Connection","WebChannel received:",H),h.ro(H)}}),d(a,W82.STAT_EVENT,v=>{v.stat===uf.PROXY?B("Connection","Detected buffering proxy"):v.stat===uf.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(){return typeof window<"u"?window:null}function k0(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){return new $i2(t,!0)}class X7{constructor(e,n,c=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=n,this.wo=c,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),c=Math.max(0,Date.now()-this.To),s=Math.max(0,n-c);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${c} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n,c,s,r,a,i,o){this.Hs=e,this.Po=c,this.vo=s,this.Vo=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new X7(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(p1(n.toString()),p1("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([c,s])=>{this.So===n&&this.Go(c,s)},c=>{e(()=>{const s=new R(N.UNKNOWN,"Fetching auth token failed: "+c.message);return this.Qo(s)})})}Go(e,n){const c=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{c(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{c(()=>this.Qo(s))}),this.stream.onMessage(s=>{c(()=>this.onMessage(s))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J52 extends iL{constructor(e,n,c,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,c,s,a),this.It=r}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=ji2(this.It,e),c=function(s){if(!("targetChange"in s))return h2.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?h2.min():r.readTime?k1(r.readTime):h2.min()}(e);return this.listener.Wo(n,c)}zo(e){const n={};n.database=Dc(this.It),n.addTarget=function(s,r){let a;const i=r.target;return a=dr(i)?{documents:Aw(s,i)}:{query:Tw(s,i)},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?a.resumeToken=xw(s,r.resumeToken):r.snapshotVersion.compareTo(h2.min())>0&&(a.readTime=Ec(s,r.snapshotVersion.toTimestamp())),a}(this.It,e);const c=Wi2(this.It,e);c&&(n.labels=c),this.Bo(n)}Ho(e){const n={};n.database=Dc(this.It),n.removeTarget=e,this.Bo(n)}}class Z52 extends iL{constructor(e,n,c,s,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,c,s,a),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(v2(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Gi2(e.writeResults,e.commitTime),c=k1(e.commitTime);return this.listener.Zo(c,n)}return v2(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Dc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(c=>Rc(this.It,c))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo2 extends class{}{constructor(e,n,c,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=c,this.It=s,this.nu=!1}su(){if(this.nu)throw new R(N.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,c){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.Vo.co(e,n,c,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(N.UNKNOWN,s.toString())})}fo(e,n,c,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.Vo.fo(e,n,c,r,a,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(N.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class to2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p1(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no2{constructor(e,n,c,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=c,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(a=>{c.enqueueAndForget(async()=>{ke(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(i){const o=X(i);o._u.add(4),await cn(o),o.gu.set("Unknown"),o._u.delete(4),await ks(o)}(this))})}),this.gu=new to2(c,s)}}async function ks(t){if(ke(t))for(const e of t.wu)await e(!0)}async function cn(t){for(const e of t.wu)await e(!1)}function Oa(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),el(n)?Z7(n):rn(n).ko()&&J7(n,e))}function Oc(t,e){const n=X(t),c=rn(n);n.du.delete(e),c.ko()&&oL(n,e),n.du.size===0&&(c.ko()?c.Fo():ke(n)&&n.gu.set("Unknown"))}function J7(t,e){t.yu.Ot(e.targetId),rn(t).zo(e)}function oL(t,e){t.yu.Ot(e),rn(t).Ho(e)}function Z7(t){t.yu=new Oi2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),rn(t).start(),t.gu.uu()}function el(t){return ke(t)&&!rn(t).No()&&t.du.size>0}function ke(t){return X(t)._u.size===0}function lL(t){t.yu=void 0}async function co2(t){t.du.forEach((e,n)=>{J7(t,e)})}async function so2(t,e){lL(t),el(t)?(t.gu.hu(e),Z7(t)):t.gu.set("Unknown")}async function ro2(t,e,n){if(t.gu.set("Online"),e instanceof Sw&&e.state===2&&e.cause)try{await async function(c,s){const r=s.cause;for(const a of s.targetIds)c.du.has(a)&&(await c.remoteSyncer.rejectListen(a,r),c.du.delete(a),c.yu.removeTarget(a))}(t,e)}catch(c){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),c),await zr(t,c)}else if(e instanceof _0?t.yu.Gt(e):e instanceof Lw?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(h2.min()))try{const c=await eL(t.localStore);n.compareTo(c)>=0&&await function(s,r){const a=s.yu.te(r);return a.targetChanges.forEach((i,o)=>{if(i.resumeToken.approximateByteSize()>0){const l=s.du.get(o);l&&s.du.set(o,l.withResumeToken(i.resumeToken,r))}}),a.targetMismatches.forEach(i=>{const o=s.du.get(i);if(!o)return;s.du.set(i,o.withResumeToken(w1.EMPTY_BYTE_STRING,o.snapshotVersion)),oL(s,i);const l=new re(o.target,i,1,o.sequenceNumber);J7(s,l)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(c){B("RemoteStore","Failed to raise snapshot:",c),await zr(t,c)}}async function zr(t,e,n){if(!_e(e))throw e;t._u.add(1),await cn(t),t.gu.set("Offline"),n||(n=()=>eL(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ks(t)})}function uL(t,e){return e().catch(n=>zr(t,n,e))}async function sn(t){const e=X(t),n=He(e);let c=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;ao2(e);)try{const s=await j52(e.localStore,c);if(s===null){e.fu.length===0&&n.Fo();break}c=s.batchId,io2(e,s)}catch(s){await zr(e,s)}fL(e)&&hL(e)}function ao2(t){return ke(t)&&t.fu.length<10}function io2(t,e){t.fu.push(e);const n=He(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function fL(t){return ke(t)&&!He(t).No()&&t.fu.length>0}function hL(t){He(t).start()}async function oo2(t){He(t).eu()}async function lo2(t){const e=He(t);for(const n of t.fu)e.Xo(n.mutations)}async function uo2(t,e,n){const c=t.fu.shift(),s=$7.from(c,e,n);await uL(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sn(t)}async function fo2(t,e){e&&He(t).Yo&&await async function(n,c){if(s=c.code,zw(s)&&s!==N.ABORTED){const r=n.fu.shift();He(n).Oo(),await uL(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,c)),await sn(n)}var s}(t,e),fL(t)&&hL(t)}async function th(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const c=ke(n);n._u.add(3),await cn(n),c&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ks(n)}async function qi(t,e){const n=X(t);e?(n._u.delete(2),await ks(n)):e||(n._u.add(2),await cn(n),n.gu.set("Unknown"))}function rn(t){return t.pu||(t.pu=function(e,n,c){const s=X(e);return s.su(),new J52(n,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,c)}(t.datastore,t.asyncQueue,{Yr:co2.bind(null,t),Zr:so2.bind(null,t),Wo:ro2.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),el(t)?Z7(t):t.gu.set("Unknown")):(await t.pu.stop(),lL(t))})),t.pu}function He(t){return t.Iu||(t.Iu=function(e,n,c){const s=X(e);return s.su(),new Z52(n,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,c)}(t.datastore,t.asyncQueue,{Yr:oo2.bind(null,t),Zr:fo2.bind(null,t),tu:lo2.bind(null,t),Zo:uo2.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await sn(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,c,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=c,this.op=s,this.removalCallback=r,this.deferred=new N1,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,c,s,r){const a=Date.now()+c,i=new tl(e,n,a,s,r);return i.start(c),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function an(t,e){if(p1("AsyncQueue",`${e}: ${t}`),_e(t))return new R(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(e){this.comparator=e?(n,c)=>e(n,c)||Q.comparator(n.key,c.key):(n,c)=>Q.comparator(n.key,c.key),this.keyedMap=In(),this.sortedSet=new d1(this.comparator)}static emptySet(e){return new V6(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,c)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof V6)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),c=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=c.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const c=new V6;return c.comparator=this.comparator,c.keyedMap=e,c.sortedSet=n,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.Tu=new d1(Q.comparator)}track(e){const n=e.doc.key,c=this.Tu.get(n);c?e.type!==0&&c.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&c.type!==1?this.Tu=this.Tu.insert(n,{type:c.type,doc:e.doc}):e.type===2&&c.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&c.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&c.type===0?this.Tu=this.Tu.remove(n):e.type===1&&c.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:c.doc}):e.type===0&&c.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):n2():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,c)=>{e.push(c)}),e}}class P6{constructor(e,n,c,s,r,a,i,o){this.query=e,this.docs=n,this.oldDocs=c,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=i,this.excludesMetadataChanges=o}static fromInitialDocuments(e,n,c,s){const r=[];return n.forEach(a=>{r.push({type:0,doc:a})}),new P6(e,n,V6.emptySet(n),r,c,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ls(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,c=e.docChanges;if(n.length!==c.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==c[s].type||!n[s].doc.isEqual(c[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho2{constructor(){this.Au=void 0,this.listeners=[]}}class do2{constructor(){this.queries=new Ne(e=>lw(e),Ls),this.onlineState="Unknown",this.Ru=new Set}}async function nl(t,e){const n=X(t),c=e.query;let s=!1,r=n.queries.get(c);if(r||(s=!0,r=new ho2),s)try{r.Au=await n.onListen(c)}catch(a){const i=an(a,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(i)}n.queries.set(c,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&sl(n)}async function cl(t,e){const n=X(t),c=e.query;let s=!1;const r=n.queries.get(c);if(r){const a=r.listeners.indexOf(e);a>=0&&(r.listeners.splice(a,1),s=r.listeners.length===0)}if(s)return n.queries.delete(c),n.onUnlisten(c)}function mo2(t,e){const n=X(t);let c=!1;for(const s of e){const r=s.query,a=n.queries.get(r);if(a){for(const i of a.listeners)i.Pu(s)&&(c=!0);a.Au=s}}c&&sl(n)}function vo2(t,e,n){const c=X(t),s=c.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);c.queries.delete(e)}function sl(t){t.Ru.forEach(e=>{e.next()})}class rl{constructor(e,n,c){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=c||{}}Pu(e){if(!this.options.includeMetadataChanges){const c=[];for(const s of e.docChanges)s.type!==3&&c.push(s);e=new P6(e.query,e.docs,e.oldDocs,c,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const c=n!=="Offline";return(!this.options.Nu||!c)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=P6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po2{constructor(e,n){this.payload=e,this.byteLength=n}ku(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.It=e}Ji(e){return t3(this.It,e)}Yi(e){return e.metadata.exists?Iw(this.It,e.document,!1):Y2.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return k1(e)}}class go2{constructor(e,n,c){this.Mu=e,this.localStore=n,this.It=c,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=dL(e)}Ou(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n;const c=N2.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(c.get(c.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Fu(e){const n=new Map,c=new ch(this.It);for(const s of e)if(s.metadata.queries){const r=c.Ji(s.metadata.name);for(const a of s.metadata.queries){const i=(n.get(a)||C2()).add(r);n.set(a,i)}}return n}async complete(){const e=await G52(this.localStore,new ch(this.It),this.documents,this.Mu.id),n=this.Fu(this.documents);for(const c of this.queries)await W52(this.localStore,c,n.get(c.name));return this.progress.taskState="Success",{progress:this.progress,$u:this.collectionGroups,Bu:e}}}function dL(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.key=e}}class vL{constructor(e){this.key=e}}class pL{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=C2(),this.mutatedKeys=C2(),this.Ku=fw(e),this.Gu=new V6(this.Ku)}get Qu(){return this.Lu}ju(e,n){const c=n?n.Wu:new nh,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,i=!1;const o=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,f)=>{const h=s.get(u),d=R7(this.query,f)?f:null,v=!!h&&this.mutatedKeys.has(h.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let H=!1;h&&d?h.data.isEqual(d.data)?v!==g&&(c.track({type:3,doc:d}),H=!0):this.zu(h,d)||(c.track({type:2,doc:d}),H=!0,(o&&this.Ku(d,o)>0||l&&this.Ku(d,l)<0)&&(i=!0)):!h&&d?(c.track({type:0,doc:d}),H=!0):h&&!d&&(c.track({type:1,doc:h}),H=!0,(o||l)&&(i=!0)),H&&(d?(a=a.add(d),r=g?r.add(u):r.delete(u)):(a=a.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const u=this.query.limitType==="F"?a.last():a.first();a=a.delete(u.key),r=r.delete(u.key),c.track({type:1,doc:u})}return{Gu:a,Wu:c,$i:i,mutatedKeys:r}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,c){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.Wu.Eu();r.sort((l,u)=>function(f,h){const d=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return n2()}};return d(f)-d(h)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(c);const a=n?this.Ju():[],i=this.qu.size===0&&this.current?1:0,o=i!==this.Uu;return this.Uu=i,r.length!==0||o?{snapshot:new P6(this.query,e.Gu,s,r,e.mutatedKeys,i===0,o,!1),Yu:a}:{Yu:a}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new nh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=C2(),this.Gu.forEach(c=>{this.Xu(c.key)&&(this.qu=this.qu.add(c.key))});const n=[];return e.forEach(c=>{this.qu.has(c)||n.push(new vL(c))}),this.qu.forEach(c=>{e.has(c)||n.push(new mL(c))}),n}Zu(e){this.Lu=e.Hi,this.qu=C2();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return P6.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class yo2{constructor(e,n,c){this.query=e,this.targetId=n,this.view=c}}class Ho2{constructor(e){this.key=e,this.ec=!1}}class Vo2{constructor(e,n,c,s,r,a){this.localStore=e,this.remoteStore=n,this.eventManager=c,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.nc={},this.sc=new Ne(i=>lw(i),Ls),this.ic=new Map,this.rc=new Set,this.oc=new d1(Q.comparator),this.uc=new Map,this.cc=new G7,this.ac={},this.hc=new Map,this.lc=bt.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function zo2(t,e){const n=ul(t);let c,s;const r=n.sc.get(e);if(r)c=r.targetId,n.sharedClientState.addLocalQueryTarget(c),s=r.view.tc();else{const a=await T6(n.localStore,l4(e));n.isPrimaryClient&&Oa(n.remoteStore,a);const i=n.sharedClientState.addLocalQueryTarget(a.targetId);c=a.targetId,s=await al(n,e,c,i==="current")}return s}async function al(t,e,n,c){t.dc=(u,f,h)=>async function(d,v,g,H){let p=v.view.ju(g);p.$i&&(p=await yr(d.localStore,v.query,!1).then(({documents:_})=>v.view.ju(_,p)));const V=H&&H.targetChanges.get(v.targetId),z=v.view.applyChanges(p,d.isPrimaryClient,V);return ji(d,v.targetId,z.Yu),z.snapshot}(t,u,f,h);const s=await yr(t.localStore,e,!0),r=new pL(e,s.Hi),a=r.ju(s.documents),i=_s.createSynthesizedTargetChangeForCurrentChange(n,c&&t.onlineState!=="Offline"),o=r.applyChanges(a,t.isPrimaryClient,i);ji(t,n,o.Yu);const l=new yo2(e,n,r);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),o.snapshot}async function Co2(t,e){const n=X(t),c=n.sc.get(e),s=n.ic.get(c.targetId);if(s.length>1)return n.ic.set(c.targetId,s.filter(r=>!Ls(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(c.targetId),n.sharedClientState.isActiveQueryTarget(c.targetId)||await E6(n.localStore,c.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(c.targetId),Oc(n.remoteStore,c.targetId),D6(n,c.targetId)}).catch(xe)):(D6(n,c.targetId),await E6(n.localStore,c.targetId,!0))}async function Mo2(t,e,n){const c=fl(t);try{const s=await function(r,a){const i=X(r),o=i1.now(),l=a.reduce((h,d)=>h.add(d.key),C2());let u,f;return i.persistence.runTransaction("Locally write mutations","readwrite",h=>{let d=o4(),v=C2();return i.Gi.getEntries(h,l).next(g=>{d=g,d.forEach((H,p)=>{p.isValidDocument()||(v=v.add(H))})}).next(()=>i.localDocuments.getOverlayedDocuments(h,d)).next(g=>{u=g;const H=[];for(const p of a){const V=Ai2(p,u.get(p.key).overlayedDocument);V!=null&&H.push(new R3(p.key,V,aw(V.value.mapValue),r1.exists(!0)))}return i.mutationQueue.addMutationBatch(h,o,H,a)}).next(g=>{f=g;const H=g.applyToLocalDocumentSet(u,v);return i.documentOverlayCache.saveOverlays(h,g.batchId,H)})}).then(()=>({batchId:f.batchId,changes:bw(u)}))}(c.localStore,e);c.sharedClientState.addPendingMutation(s.batchId),function(r,a,i){let o=r.ac[r.currentUser.toKey()];o||(o=new d1(V2)),o=o.insert(a,i),r.ac[r.currentUser.toKey()]=o}(c,s.batchId,n),await O3(c,s.changes),await sn(c.remoteStore)}catch(s){const r=an(s,"Failed to persist write");n.reject(r)}}async function gL(t,e){const n=X(t);try{const c=await q52(n.localStore,e);e.targetChanges.forEach((s,r)=>{const a=n.uc.get(r);a&&(v2(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.ec=!0:s.modifiedDocuments.size>0?v2(a.ec):s.removedDocuments.size>0&&(v2(a.ec),a.ec=!1))}),await O3(n,c,e)}catch(c){await xe(c)}}function sh(t,e,n){const c=X(t);if(c.isPrimaryClient&&n===0||!c.isPrimaryClient&&n===1){const s=[];c.sc.forEach((r,a)=>{const i=a.view.bu(e);i.snapshot&&s.push(i.snapshot)}),function(r,a){const i=X(r);i.onlineState=a;let o=!1;i.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(a)&&(o=!0)}),o&&sl(i)}(c.eventManager,e),s.length&&c.nc.Wo(s),c.onlineState=e,c.isPrimaryClient&&c.sharedClientState.setOnlineState(e)}}async function bo2(t,e,n){const c=X(t);c.sharedClientState.updateQueryState(e,"rejected",n);const s=c.uc.get(e),r=s&&s.key;if(r){let a=new d1(Q.comparator);a=a.insert(r,Y2.newNoDocument(r,h2.min()));const i=C2().add(r),o=new xs(h2.min(),new Map,new $2(V2),a,i);await gL(c,o),c.oc=c.oc.remove(r),c.uc.delete(e),ll(c)}else await E6(c.localStore,e,!1).then(()=>D6(c,e,n)).catch(xe)}async function wo2(t,e){const n=X(t),c=e.batch.batchId;try{const s=await U52(n.localStore,e);ol(n,c,null),il(n,c),n.sharedClientState.updateMutationState(c,"acknowledged"),await O3(n,s)}catch(s){await xe(s)}}async function Lo2(t,e,n){const c=X(t);try{const s=await function(r,a){const i=X(r);return i.persistence.runTransaction("Reject batch","readwrite-primary",o=>{let l;return i.mutationQueue.lookupMutationBatch(o,a).next(u=>(v2(u!==null),l=u.keys(),i.mutationQueue.removeMutationBatch(o,u))).next(()=>i.mutationQueue.performConsistencyCheck(o)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(o,l,a)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,l)).next(()=>i.localDocuments.getDocuments(o,l))})}(c.localStore,e);ol(c,e,n),il(c,e),c.sharedClientState.updateMutationState(e,"rejected",n),await O3(c,s)}catch(s){await xe(s)}}async function So2(t,e){const n=X(t);ke(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const c=await function(r){const a=X(r);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",i=>a.mutationQueue.getHighestUnacknowledgedBatchId(i))}(n.localStore);if(c===-1)return void e.resolve();const s=n.hc.get(c)||[];s.push(e),n.hc.set(c,s)}catch(c){const s=an(c,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function il(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function ol(t,e,n){const c=X(t);let s=c.ac[c.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),c.ac[c.currentUser.toKey()]=s}}function D6(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const c of t.ic.get(e))t.sc.delete(c),n&&t.nc._c(c,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(c=>{t.cc.containsKey(c)||yL(t,c)})}function yL(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Oc(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ll(t))}function ji(t,e,n){for(const c of n)c instanceof mL?(t.cc.addReference(c.key,e),xo2(t,c)):c instanceof vL?(B("SyncEngine","Document no longer in limbo: "+c.key),t.cc.removeReference(c.key,e),t.cc.containsKey(c.key)||yL(t,c.key)):n2()}function xo2(t,e){const n=e.key,c=n.path.canonicalString();t.oc.get(n)||t.rc.has(c)||(B("SyncEngine","New document in limbo: "+n),t.rc.add(c),ll(t))}function ll(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Q(N2.fromString(e)),c=t.lc.next();t.uc.set(c,new Ho2(n)),t.oc=t.oc.insert(n,c),Oa(t.remoteStore,new re(l4(en(n.path)),c,2,i4.at))}}async function O3(t,e,n){const c=X(t),s=[],r=[],a=[];c.sc.isEmpty()||(c.sc.forEach((i,o)=>{a.push(c.dc(o,e,n).then(l=>{if(l){c.isPrimaryClient&&c.sharedClientState.updateQueryState(o.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Q7.Ci(o.targetId,l);r.push(u)}}))}),await Promise.all(a),c.nc.Wo(s),await async function(i,o){const l=X(i);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(o,f=>S.forEach(f.Si,h=>l.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>S.forEach(f.Di,h=>l.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!_e(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of o){const f=u.targetId;if(!u.fromCache){const h=l.Ui.get(f),d=h.snapshotVersion,v=h.withLastLimboFreeSnapshotVersion(d);l.Ui=l.Ui.insert(f,v)}}}(c.localStore,r))}async function _o2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const c=await Zw(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(a=>{a.forEach(i=>{i.reject(new R(N.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,c.removedBatchIds,c.addedBatchIds),await O3(n,c.ji)}}function No2(t,e){const n=X(t),c=n.uc.get(e);if(c&&c.ec)return C2().add(c.key);{let s=C2();const r=n.ic.get(e);if(!r)return s;for(const a of r){const i=n.sc.get(a);s=s.unionWith(i.view.Qu)}return s}}async function ko2(t,e){const n=X(t),c=await yr(n.localStore,e.query,!0),s=e.view.Zu(c);return n.isPrimaryClient&&ji(n,e.targetId,s.Yu),s}async function Io2(t,e){const n=X(t);return cL(n.localStore,e).then(c=>O3(n,c))}async function Ao2(t,e,n,c){const s=X(t),r=await function(a,i){const o=X(a),l=X(o.mutationQueue);return o.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,i).next(f=>f?o.localDocuments.getDocuments(u,f):S.resolve(null)))}(s.localStore,e);r!==null?(n==="pending"?await sn(s.remoteStore):n==="acknowledged"||n==="rejected"?(ol(s,e,c||null),il(s,e),function(a,i){X(X(a).mutationQueue).An(i)}(s.localStore,e)):n2(),await O3(s,r)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function To2(t,e){const n=X(t);if(ul(n),fl(n),e===!0&&n.fc!==!0){const c=n.sharedClientState.getAllActiveQueryTargets(),s=await rh(n,c.toArray());n.fc=!0,await qi(n.remoteStore,!0);for(const r of s)Oa(n.remoteStore,r)}else if(e===!1&&n.fc!==!1){const c=[];let s=Promise.resolve();n.ic.forEach((r,a)=>{n.sharedClientState.isLocalQueryTarget(a)?c.push(a):s=s.then(()=>(D6(n,a),E6(n.localStore,a,!0))),Oc(n.remoteStore,a)}),await s,await rh(n,c),function(r){const a=X(r);a.uc.forEach((i,o)=>{Oc(a.remoteStore,o)}),a.cc.fs(),a.uc=new Map,a.oc=new d1(Q.comparator)}(n),n.fc=!1,await qi(n.remoteStore,!1)}}async function rh(t,e,n){const c=X(t),s=[],r=[];for(const a of e){let i;const o=c.ic.get(a);if(o&&o.length!==0){i=await T6(c.localStore,l4(o[0]));for(const l of o){const u=c.sc.get(l),f=await ko2(c,u);f.snapshot&&r.push(f.snapshot)}}else{const l=await nL(c.localStore,a);i=await T6(c.localStore,l),await al(c,HL(l),a,!1)}s.push(i)}return c.nc.Wo(r),s}function HL(t){return ow(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Eo2(t){const e=X(t);return X(X(e.localStore).persistence).vi()}async function Po2(t,e,n,c){const s=X(t);if(s.fc)return void B("SyncEngine","Ignoring unexpected query state notification.");const r=s.ic.get(e);if(r&&r.length>0)switch(n){case"current":case"not-current":{const a=await cL(s.localStore,uw(r[0])),i=xs.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await O3(s,a,i);break}case"rejected":await E6(s.localStore,e,!0),D6(s,e,c);break;default:n2()}}async function Do2(t,e,n){const c=ul(t);if(c.fc){for(const s of e){if(c.ic.has(s)){B("SyncEngine","Adding an already active target "+s);continue}const r=await nL(c.localStore,s),a=await T6(c.localStore,r);await al(c,HL(r),a.targetId,!1),Oa(c.remoteStore,a)}for(const s of n)c.ic.has(s)&&await E6(c.localStore,s,!1).then(()=>{Oc(c.remoteStore,s),D6(c,s)}).catch(xe)}}function ul(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gL.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=No2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bo2.bind(null,e),e.nc.Wo=mo2.bind(null,e.eventManager),e.nc._c=vo2.bind(null,e.eventManager),e}function fl(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wo2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Lo2.bind(null,e),e}function Ro2(t,e,n){const c=X(t);(async function(s,r,a){try{const i=await r.getMetadata();if(await function(f,h){const d=X(f),v=k1(h.createTime);return d.persistence.runTransaction("hasNewerBundle","readonly",g=>d.Ns.getBundleMetadata(g,h.id)).then(g=>!!g&&g.createTime.compareTo(v)>=0)}(s.localStore,i))return await r.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(i)),Promise.resolve(new Set);a._updateProgress(dL(i));const o=new go2(i,s.localStore,r.It);let l=await r.wc();for(;l;){const f=await o.Ou(l);f&&a._updateProgress(f),l=await r.wc()}const u=await o.complete();return await O3(s,u.Bu,void 0),await function(f,h){const d=X(f);return d.persistence.runTransaction("Save bundle","readwrite",v=>d.Ns.saveBundleMetadata(v,h))}(s.localStore,i),a._completeWith(u.progress),Promise.resolve(u.$u)}catch(i){return _6("SyncEngine",`Loading bundle failed with ${i}`),a._failWith(i),Promise.resolve(new Set)}})(c,e,n).then(s=>{c.sharedClientState.notifyBundleLoaded(s)})}class VL{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ns(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return Jw(this.persistence,new Xw,e.initialUser,this.It)}gc(e){return new Yw(Ra.Bs,this.It)}mc(e){return new rL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zL extends VL{constructor(e,n,c){super(),this.Ec=e,this.cacheSizeBytes=n,this.forceOwnership=c,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ec.initialize(this,e),await fl(this.Ec.syncEngine),await sn(this.Ec.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}yc(e){return Jw(this.persistence,new Xw,e.initialUser,this.It)}Ic(e,n){const c=this.persistence.referenceDelegate.garbageCollector;return new x52(c,e.asyncQueue,n)}Tc(e,n){const c=new fi2(n,this.persistence);return new ui2(e.asyncQueue,c)}gc(e){const n=K7(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),c=this.cacheSizeBytes!==void 0?a4.withCacheSize(this.cacheSizeBytes):a4.DEFAULT;return new W7(this.synchronizeTabs,n,e.clientId,c,e.asyncQueue,aL(),k0(),this.It,this.sharedClientState,!!this.forceOwnership)}mc(e){return new rL}}class Oo2 extends zL{constructor(e,n){super(e,n,!1),this.Ec=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ec.syncEngine;this.sharedClientState instanceof N8&&(this.sharedClientState.syncEngine={Fr:Ao2.bind(null,n),$r:Po2.bind(null,n),Br:Do2.bind(null,n),vi:Eo2.bind(null,n),Or:Io2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async c=>{await To2(this.Ec.syncEngine,c),this.gcScheduler&&(c&&!this.gcScheduler.started?this.gcScheduler.start():c||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(c&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():c||this.indexBackfillerScheduler.stop())})}mc(e){const n=aL();if(!N8.C(n))throw new R(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const c=K7(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new N8(n,e.asyncQueue,c,e.clientId,e.initialUser)}}class hl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=c=>sh(this.syncEngine,c,1),this.remoteStore.remoteSyncer.handleCredentialChange=_o2.bind(null,this.syncEngine),await qi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new do2}createDatastore(e){const n=Ns(e.databaseInfo.databaseId),c=(s=e.databaseInfo,new X52(s));var s;return function(r,a,i,o){return new eo2(r,a,i,o)}(e.authCredentials,e.appCheckCredentials,c,n)}createRemoteStore(e){return n=this.localStore,c=this.datastore,s=e.asyncQueue,r=i=>sh(this.syncEngine,i,0),a=eh.C()?new eh:new K52,new no2(n,c,s,r,a);var n,c,s,r,a}createSyncEngine(e,n){return function(c,s,r,a,i,o,l){const u=new Vo2(c,s,r,a,i,o);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await cn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const c={value:t.slice(n,n+e),done:!1};return n+=e,c}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):p1("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo2{constructor(e,n){this.bc=e,this.It=n,this.metadata=new N1,this.buffer=new Uint8Array,this.Pc=new TextDecoder("utf-8"),this.vc().then(c=>{c&&c.ku()?this.metadata.resolve(c.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(c==null?void 0:c.payload)}`))},c=>this.metadata.reject(c))}close(){return this.bc.cancel()}async getMetadata(){return this.metadata.promise}async wc(){return await this.getMetadata(),this.vc()}async vc(){const e=await this.Vc();if(e===null)return null;const n=this.Pc.decode(e),c=Number(n);isNaN(c)&&this.Sc(`length string (${n}) is not valid number`);const s=await this.Dc(c);return new po2(JSON.parse(s),e.length+c)}Cc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Vc(){for(;this.Cc()<0&&!await this.xc(););if(this.buffer.length===0)return null;const e=this.Cc();e<0&&this.Sc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Dc(e){for(;this.buffer.length<e;)await this.xc()&&this.Sc("Reached the end of bundle when more is expected.");const n=this.Pc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Sc(e){throw this.bc.cancel(),new Error(`Invalid bundle format: ${e}`)}async xc(){const e=await this.bc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(N.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(c,s){const r=X(c),a=Dc(r.It)+"/documents",i={documents:s.map(f=>Pc(r.It,f))},o=await r.fo("BatchGetDocuments",a,i,s.length),l=new Map;o.forEach(f=>{const h=qi2(r.It,f);l.set(h.key.toString(),h)});const u=[];return s.forEach(f=>{const h=l.get(f.toString());v2(!!h),u.push(h)}),u}(this.datastore,e);return n.forEach(c=>this.recordVersion(c)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(e.toString())}delete(e){this.write(new nn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,c)=>{const s=Q.fromPath(c);this.mutations.push(new O7(s,this.precondition(s)))}),await async function(n,c){const s=X(n),r=Dc(s.It)+"/documents",a={writes:c.map(i=>Rc(s.It,i))};await s.co("Commit",r,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw n2();n=h2.min()}const c=this.readVersions.get(e.key.toString());if(c){if(!n.isEqual(c))throw new R(N.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(h2.min())?r1.exists(!1):r1.updateTime(n):r1.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(h2.min()))throw new R(N.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return r1.updateTime(n)}return r1.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o2{constructor(e,n,c,s,r){this.asyncQueue=e,this.datastore=n,this.options=c,this.updateFunction=s,this.deferred=r,this.Nc=c.maxAttempts,this.xo=new X7(this.asyncQueue,"transaction_retry")}run(){this.Nc-=1,this.kc()}kc(){this.xo.Ao(async()=>{const e=new Bo2(this.datastore),n=this.Mc(e);n&&n.then(c=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(c)}).catch(s=>{this.Oc(s)}))}).catch(c=>{this.Oc(c)})})}Mc(e){try{const n=this.updateFunction(e);return!bs(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Oc(e){this.Nc>0&&this.Fc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget(()=>(this.kc(),Promise.resolve()))):this.deferred.reject(e)}Fc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!zw(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo2{constructor(e,n,c,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=c,this.databaseInfo=s,this.user=x1.UNAUTHENTICATED,this.clientId=Qb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(c,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new N1;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const c=an(n,"Failed to shutdown persistence");e.reject(c)}}),e.promise}}async function CL(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let c=n.initialUser;t.setCredentialChangeListener(async s=>{c.isEqual(s)||(await Zw(e.localStore,s),c=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ML(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dl(t);B("FirestoreClient","Initializing OnlineComponentProvider");const c=await t.getConfiguration();await e.initialize(n,c),t.setCredentialChangeListener(s=>th(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>th(e.remoteStore,r)),t.onlineComponents=e}async function dl(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await CL(t,new VL)),t.offlineComponents}async function Ba(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await ML(t,new hl)),t.onlineComponents}function bL(t){return dl(t).then(e=>e.persistence)}function ml(t){return dl(t).then(e=>e.localStore)}function wL(t){return Ba(t).then(e=>e.remoteStore)}function vl(t){return Ba(t).then(e=>e.syncEngine)}async function R6(t){const e=await Ba(t),n=e.eventManager;return n.onListen=zo2.bind(null,e.syncEngine),n.onUnlisten=Co2.bind(null,e.syncEngine),n}function qo2(t){return t.asyncQueue.enqueue(async()=>{const e=await bL(t),n=await wL(t);return e.setNetworkEnabled(!0),function(c){const s=X(c);return s._u.delete(0),ks(s)}(n)})}function jo2(t){return t.asyncQueue.enqueue(async()=>{const e=await bL(t),n=await wL(t);return e.setNetworkEnabled(!1),async function(c){const s=X(c);s._u.add(0),await cn(s),s.gu.set("Offline")}(n)})}function Go2(t,e){const n=new N1;return t.asyncQueue.enqueueAndForget(async()=>async function(c,s,r){try{const a=await function(i,o){const l=X(i);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,o))}(c,s);a.isFoundDocument()?r.resolve(a):a.isNoDocument()?r.resolve(null):r.reject(new R(N.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const i=an(a,`Failed to get document '${s} from cache`);r.reject(i)}}(await ml(t),e,n)),n.promise}function LL(t,e,n={}){const c=new N1;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,a,i,o){const l=new Fa({next:f=>{r.enqueueAndForget(()=>cl(s,u));const h=f.docs.has(a);!h&&f.fromCache?o.reject(new R(N.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&i&&i.source==="server"?o.reject(new R(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(f)},error:f=>o.reject(f)}),u=new rl(en(a.path),l,{includeMetadataChanges:!0,Nu:!0});return nl(s,u)}(await R6(t),t.asyncQueue,e,n,c)),c.promise}function Wo2(t,e){const n=new N1;return t.asyncQueue.enqueueAndForget(async()=>async function(c,s,r){try{const a=await yr(c,s,!0),i=new pL(s,a.Hi),o=i.ju(a.documents),l=i.applyChanges(o,!1);r.resolve(l.snapshot)}catch(a){const i=an(a,`Failed to execute query '${s} against cache`);r.reject(i)}}(await ml(t),e,n)),n.promise}function SL(t,e,n={}){const c=new N1;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,a,i,o){const l=new Fa({next:f=>{r.enqueueAndForget(()=>cl(s,u)),f.fromCache&&i.source==="server"?o.reject(new R(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(f)},error:f=>o.reject(f)}),u=new rl(a,l,{includeMetadataChanges:!0,Nu:!0});return nl(s,u)}(await R6(t),t.asyncQueue,e,n,c)),c.promise}function Ko2(t,e){const n=new Fa(e);return t.asyncQueue.enqueueAndForget(async()=>function(c,s){X(c).Ru.add(s),s.next()}(await R6(t),n)),()=>{n.Rc(),t.asyncQueue.enqueueAndForget(async()=>function(c,s){X(c).Ru.delete(s)}(await R6(t),n))}}function Qo2(t,e,n){const c=new N1;return t.asyncQueue.enqueueAndForget(async()=>{const s=await function(r){return Ba(r).then(a=>a.datastore)}(t);new $o2(t.asyncQueue,s,n,e,c).run()}),c.promise}function Yo2(t,e,n,c){const s=function(r,a){let i;return i=typeof r=="string"?new TextEncoder().encode(r):r,function(o,l){return new Fo2(o,l)}(function(o,l){if(o instanceof Uint8Array)return ah(o,l);if(o instanceof ArrayBuffer)return ah(new Uint8Array(o),l);if(o instanceof ReadableStream)return o.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(i),a)}(n,Ns(e));t.asyncQueue.enqueueAndForget(async()=>{Ro2(await vl(t),s,c)})}function Xo2(t,e){return t.asyncQueue.enqueue(async()=>function(n,c){const s=X(n);return s.persistence.runTransaction("Get named query","readonly",r=>s.Ns.getNamedQuery(r,c))}(await ml(t),e))}const ih=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e,n){if(!n)throw new R(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xL(t,e,n,c){if(e===!0&&c===!0)throw new R(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function oh(t){if(!Q.isDocumentKey(t))throw new R(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lh(t){if(Q.isDocumentKey(t))throw new R(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $a(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":n2()}function P2(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$a(t);throw new R(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function _L(t,e){if(e<=0)throw new R(N.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,xL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,c,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=c,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new J82;switch(n.type){case"gapi":const c=n.client;return new ni2(c,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ih.get(e);n&&(B("ComponentProvider","Removing Datastore"),ih.delete(e),n.terminate())}(this),Promise.resolve()}}function Jo2(t,e,n,c={}){var s;const r=(t=P2(t,Is))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&_6("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),c.mockUserToken){let a,i;if(typeof c.mockUserToken=="string")a=c.mockUserToken,i=x1.MOCK_USER;else{a=xt2(c.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const o=c.mockUserToken.sub||c.mockUserToken.user_id;if(!o)throw new R(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new x1(o)}t._authCredentials=new Z82(new Kb(a,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,c){this.converter=n,this._key=c,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new n3(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n1(this.firestore,e,this._key)}}class Q1{constructor(e,n,c){this.converter=n,this._query=c,this.type="query",this.firestore=e}withConverter(e){return new Q1(this.firestore,e,this._query)}}class n3 extends Q1{constructor(e,n,c){super(e,n,en(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new n1(this.firestore,null,new Q(e))}withConverter(e){return new n3(this.firestore,e,this._path)}}function NL(t,e,...n){if(t=K2(t),pl("collection","path",e),t instanceof Is){const c=N2.fromString(e,...n);return lh(c),new n3(t,null,c)}{if(!(t instanceof n1||t instanceof n3))throw new R(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const c=t._path.child(N2.fromString(e,...n));return lh(c),new n3(t.firestore,null,c)}}function Zo2(t,e){if(t=P2(t,Is),pl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(N.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Q1(t,null,function(n){return new D3(N2.emptyPath(),n)}(e))}function Cr(t,e,...n){if(t=K2(t),arguments.length===1&&(e=Qb.R()),pl("doc","path",e),t instanceof Is){const c=N2.fromString(e,...n);return oh(c),new n1(t,null,new Q(c))}{if(!(t instanceof n1||t instanceof n3))throw new R(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const c=t._path.child(N2.fromString(e,...n));return oh(c),new n1(t.firestore,t instanceof n3?t.converter:null,new Q(c))}}function kL(t,e){return t=K2(t),e=K2(e),(t instanceof n1||t instanceof n3)&&(e instanceof n1||e instanceof n3)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function IL(t,e){return t=K2(t),e=K2(e),t instanceof Q1&&e instanceof Q1&&t.firestore===e.firestore&&Ls(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e72{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new X7(this,"async_queue_retry"),this.jc=()=>{const n=k0();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=k0();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=k0();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new N1;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!_e(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(c=>{this.qc=c,this.Kc=!1;const s=function(r){let a=r.message||"";return r.stack&&(a=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),a}(c);throw p1("INTERNAL UNHANDLED ERROR: ",s),c}).then(c=>(this.Kc=!1,c))));return this.$c=n,n}enqueueAfterDelay(e,n,c){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const s=tl.createAndSchedule(this,e,n,c,r=>this.Jc(r));return this.Uc.push(s),s}Wc(){this.qc&&n2()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,c)=>n.targetTimeMs-c.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Gi(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const c=e;for(const s of n)if(s in c&&typeof c[s]=="function")return!0;return!1}(t,["next","error","complete"])}class t72{constructor(){this._progressObserver={},this._taskCompletionResolver=new N1,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,c){this._progressObserver={next:e,error:n,complete:c}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n72=-1;class m1 extends Is{constructor(e,n,c,s){super(e,n,c,s),this.type="firestore",this._queue=new e72,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||AL(this),this._firestoreClient.terminate()}}function P1(t){return t._firestoreClient||AL(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function AL(t){var e;const n=t._freezeSettings(),c=function(s,r,a,i){return new mi2(s,r,a,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Uo2(t._authCredentials,t._appCheckCredentials,t._queue,c)}function c72(t,e){EL(t=P2(t,m1));const n=P1(t),c=t._freezeSettings(),s=new hl;return TL(n,s,new zL(s,c.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function s72(t){EL(t=P2(t,m1));const e=P1(t),n=t._freezeSettings(),c=new hl;return TL(e,c,new Oo2(c,n.cacheSizeBytes))}function TL(t,e,n){const c=new N1;return t.asyncQueue.enqueue(async()=>{try{await CL(t,n),await ML(t,e),c.resolve()}catch(s){const r=s;if(!function(a){return a.name==="FirebaseError"?a.code===N.FAILED_PRECONDITION||a.code===N.UNIMPLEMENTED:typeof DOMException<"u"&&a instanceof DOMException?a.code===22||a.code===20||a.code===11:!0}(r))throw r;_6("Error enabling offline persistence. Falling back to persistence disabled: "+r),c.reject(r)}}).then(()=>c.promise)}function r72(t){if(t._initialized&&!t._terminated)throw new R(N.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new N1;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!P4.C())return Promise.resolve();const c=n+"main";await P4.delete(c)}(K7(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function a72(t){return function(e){const n=new N1;return e.asyncQueue.enqueueAndForget(async()=>So2(await vl(e),n)),n.promise}(P1(t=P2(t,m1)))}function i72(t){return qo2(P1(t=P2(t,m1)))}function o72(t){return jo2(P1(t=P2(t,m1)))}function l72(t,e){const n=P1(t=P2(t,m1)),c=new t72;return Yo2(n,t._databaseId,e,c),c}function u72(t,e){return Xo2(P1(t=P2(t,m1)),e).then(n=>n?new Q1(t,null,n.query):null)}function EL(t){if(t._initialized||t._terminated)throw new R(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new g1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e){this._byteString=e}static fromBase64String(e){try{return new i3(w1.fromBase64String(e))}catch(n){throw new R(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new i3(w1.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V2(this._lat,e._lat)||V2(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f72=/^__.*__$/;class h72{constructor(e,n,c){this.data=e,this.fieldMask=n,this.fieldTransforms=c}toMutation(e,n){return this.fieldMask!==null?new R3(e,this.data,this.fieldMask,n,this.fieldTransforms):new tn(e,this.data,n,this.fieldTransforms)}}class PL{constructor(e,n,c){this.data=e,this.fieldMask=n,this.fieldTransforms=c}toMutation(e,n){return new R3(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DL(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw n2()}}class qa{constructor(e,n,c,s,r,a){this.settings=e,this.databaseId=n,this.It=c,this.ignoreUndefinedProperties=s,r===void 0&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const c=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.sa({path:c,ra:!1});return s.oa(e),s}ua(e){var n;const c=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.sa({path:c,ra:!1});return s.ea(),s}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Mr(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(DL(this.na)&&f72.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class d72{constructor(e,n,c){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=c||Ns(e)}fa(e,n,c,s=!1){return new qa({na:e,methodName:n,la:c,path:g1.emptyPath(),ra:!1,ha:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Bt(t){const e=t._freezeSettings(),n=Ns(t._databaseId);return new d72(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ja(t,e,n,c,s,r={}){const a=t.fa(r.merge||r.mergeFields?2:0,e,n,s);Vl("Data must be an object, but it was:",a,c);const i=FL(c,a);let o,l;if(r.merge)o=new m4(a.fieldMask),l=a.fieldTransforms;else if(r.mergeFields){const u=[];for(const f of r.mergeFields){const h=Wi(e,f,n);if(!a.contains(h))throw new R(N.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);$L(u,h)||u.push(h)}o=new m4(u),l=a.fieldTransforms.filter(f=>o.covers(f.field))}else o=null,l=a.fieldTransforms;return new h72(new R1(i),o,l)}class As extends Ft{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof As}}function RL(t,e,n){return new qa({na:3,la:e.settings.la,methodName:t._methodName,ra:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class gl extends Ft{_toFieldTransform(e){return new Ss(e.path,new I6)}isEqual(e){return e instanceof gl}}class m72 extends Ft{constructor(e,n){super(e),this.da=n}_toFieldTransform(e){const n=RL(this,e,!0),c=this.da.map(r=>$t(r,n)),s=new Vt(c);return new Ss(e.path,s)}isEqual(e){return this===e}}class v72 extends Ft{constructor(e,n){super(e),this.da=n}_toFieldTransform(e){const n=RL(this,e,!0),c=this.da.map(r=>$t(r,n)),s=new zt(c);return new Ss(e.path,s)}isEqual(e){return this===e}}class p72 extends Ft{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=new A6(e.It,mw(e.It,this._a));return new Ss(e.path,n)}isEqual(e){return this===e}}function yl(t,e,n,c){const s=t.fa(1,e,n);Vl("Data must be an object, but it was:",s,c);const r=[],a=R1.empty();Ot(c,(o,l)=>{const u=zl(e,o,n);l=K2(l);const f=s.ua(u);if(l instanceof As)r.push(u);else{const h=$t(l,f);h!=null&&(r.push(u),a.set(u,h))}});const i=new m4(r);return new PL(a,i,s.fieldTransforms)}function Hl(t,e,n,c,s,r){const a=t.fa(1,e,n),i=[Wi(e,c,n)],o=[s];if(r.length%2!=0)throw new R(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)i.push(Wi(e,r[h])),o.push(r[h+1]);const l=[],u=R1.empty();for(let h=i.length-1;h>=0;--h)if(!$L(l,i[h])){const d=i[h];let v=o[h];v=K2(v);const g=a.ua(d);if(v instanceof As)l.push(d);else{const H=$t(v,g);H!=null&&(l.push(d),u.set(d,H))}}const f=new m4(l);return new PL(u,f,a.fieldTransforms)}function OL(t,e,n,c=!1){return $t(n,t.fa(c?4:3,e))}function $t(t,e){if(BL(t=K2(t)))return Vl("Unsupported field value:",e,t),FL(t,e);if(t instanceof Ft)return function(n,c){if(!DL(c.na))throw c.aa(`${n._methodName}() can only be used with update() and set()`);if(!c.path)throw c.aa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(c);s&&c.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,c){const s=[];let r=0;for(const a of n){let i=$t(a,c.ca(r));i==null&&(i={nullValue:"NULL_VALUE"}),s.push(i),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,c){if((n=K2(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mw(c.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=i1.fromDate(n);return{timestampValue:Ec(c.It,s)}}if(n instanceof i1){const s=new i1(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ec(c.It,s)}}if(n instanceof Ua)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof i3)return{bytesValue:xw(c.It,n._byteString)};if(n instanceof n1){const s=c.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw c.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:F7(n.firestore._databaseId||c.databaseId,n._key.path)}}throw c.aa(`Unsupported field value: ${$a(n)}`)}(t,e)}function FL(t,e){const n={};return nw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ot(t,(c,s)=>{const r=$t(s,e.ia(c));r!=null&&(n[c]=r)}),{mapValue:{fields:n}}}function BL(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof i1||t instanceof Ua||t instanceof i3||t instanceof n1||t instanceof Ft)}function Vl(t,e,n){if(!BL(n)||!function(c){return typeof c=="object"&&c!==null&&(Object.getPrototypeOf(c)===Object.prototype||Object.getPrototypeOf(c)===null)}(n)){const c=$a(n);throw c==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+c)}}function Wi(t,e,n){if((e=K2(e))instanceof Ve)return e._internalPath;if(typeof e=="string")return zl(t,e);throw Mr("Field path arguments must be of type string or ",t,!1,void 0,n)}const g72=new RegExp("[~\\*/\\[\\]]");function zl(t,e,n){if(e.search(g72)>=0)throw Mr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ve(...e.split("."))._internalPath}catch{throw Mr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mr(t,e,n,c,s){const r=c&&!c.isEmpty(),a=s!==void 0;let i=`Function ${e}() called with invalid data`;n&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||a)&&(o+=" (found",r&&(o+=` in field ${c}`),a&&(o+=` in document ${s}`),o+=")"),new R(N.INVALID_ARGUMENT,i+t+o)}function $L(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,c,s,r){this._firestore=e,this._userDataWriter=n,this._key=c,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new n1(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y72(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ga("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y72 extends Fc{data(){return super.data()}}function Ga(t,e){return typeof e=="string"?zl(t,e):e instanceof Ve?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class N3 extends Fc{constructor(e,n,c,s,r,a){super(e,n,c,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const c=this._document.data.field(Ga("DocumentSnapshot.get",e));if(c!==null)return this._userDataWriter.convertValue(c,n.serverTimestamps)}}}class Zn extends N3{data(e={}){return super.data(e)}}class ze{constructor(e,n,c,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new tt(s.hasPendingWrites,s.fromCache),this.query=c}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(c=>{e.call(n,new Zn(this._firestore,this._userDataWriter,c.key,c,new tt(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(c,s){if(c._snapshot.oldDocs.isEmpty()){let r=0;return c._snapshot.docChanges.map(a=>({type:"added",doc:new Zn(c._firestore,c._userDataWriter,a.doc.key,a.doc,new tt(c._snapshot.mutatedKeys.has(a.doc.key),c._snapshot.fromCache),c.query.converter),oldIndex:-1,newIndex:r++}))}{let r=c._snapshot.oldDocs;return c._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const i=new Zn(c._firestore,c._userDataWriter,a.doc.key,a.doc,new tt(c._snapshot.mutatedKeys.has(a.doc.key),c._snapshot.fromCache),c.query.converter);let o=-1,l=-1;return a.type!==0&&(o=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),l=r.indexOf(a.doc.key)),{type:H72(a.type),doc:i,oldIndex:o,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function H72(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return n2()}}function UL(t,e){return t instanceof N3&&e instanceof N3?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ze&&e instanceof ze&&t._firestore===e._firestore&&IL(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ts{}function G3(t,...e){for(const n of e)t=n._apply(t);return t}class V72 extends Ts{constructor(e,n,c){super(),this.wa=e,this.ma=n,this.ga=c,this.type="where"}_apply(e){const n=Bt(e.firestore),c=function(s,r,a,i,o,l,u){let f;if(o.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){hh(u,l);const d=[];for(const v of u)d.push(fh(i,s,v));f={arrayValue:{values:d}}}else f=fh(i,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||hh(u,l),f=OL(a,r,u,l==="in"||l==="not-in");const h=O1.create(o,l,f);return function(d,v){if(v.dt()){const H=P7(d);if(H!==null&&!H.isEqual(v.field))throw new R(N.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${H.toString()}' and '${v.field.toString()}'`);const p=E7(d);p!==null&&QL(d,v.field,p)}const g=function(H,p){for(const V of H.filters)if(p.indexOf(V.op)>=0)return V.op;return null}(d,function(H){switch(H){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(g!==null)throw g===v.op?new R(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new R(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${g.toString()}' filters.`)}(s,h),h}(e._query,"where",n,e.firestore._databaseId,this.wa,this.ma,this.ga);return new Q1(e.firestore,e.converter,function(s,r){const a=s.filters.concat([r]);return new D3(s.path,s.collectionGroup,s.explicitOrderBy.slice(),a,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,c))}}function z72(t,e,n){const c=e,s=Ga("where",t);return new V72(s,c,n)}class C72 extends Ts{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(c,s,r){if(c.startAt!==null)throw new R(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(c.endAt!==null)throw new R(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new H6(s,r);return function(i,o){if(E7(i)===null){const l=P7(i);l!==null&&QL(i,l,o.field)}}(c,a),a}(e._query,this.wa,this.ya);return new Q1(e.firestore,e.converter,function(c,s){const r=c.explicitOrderBy.concat([s]);return new D3(c.path,c.collectionGroup,r,c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e._query,n))}}function M72(t,e="asc"){const n=e,c=Ga("orderBy",t);return new C72(c,n)}class jL extends Ts{constructor(e,n,c){super(),this.type=e,this.pa=n,this.Ia=c}_apply(e){return new Q1(e.firestore,e.converter,vr(e._query,this.pa,this.Ia))}}function b72(t){return _L("limit",t),new jL("limit",t,"F")}function w72(t){return _L("limitToLast",t),new jL("limitToLast",t,"L")}class GL extends Ts{constructor(e,n,c){super(),this.type=e,this.Ta=n,this.Ea=c}_apply(e){const n=KL(e,this.type,this.Ta,this.Ea);return new Q1(e.firestore,e.converter,function(c,s){return new D3(c.path,c.collectionGroup,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,s,c.endAt)}(e._query,n))}}function L72(...t){return new GL("startAt",t,!0)}function S72(...t){return new GL("startAfter",t,!1)}class WL extends Ts{constructor(e,n,c){super(),this.type=e,this.Ta=n,this.Ea=c}_apply(e){const n=KL(e,this.type,this.Ta,this.Ea);return new Q1(e.firestore,e.converter,function(c,s){return new D3(c.path,c.collectionGroup,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,s)}(e._query,n))}}function x72(...t){return new WL("endBefore",t,!1)}function _72(...t){return new WL("endAt",t,!0)}function KL(t,e,n,c){if(n[0]=K2(n[0]),n[0]instanceof Fc)return function(s,r,a,i,o){if(!i)throw new R(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const u of k6(s))if(u.field.isKeyField())l.push(yt(r,i.key));else{const f=i.data.field(u.field);if(T7(f))throw new R(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const h=u.field.canonicalString();throw new R(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}l.push(f)}return new ye(l,o)}(t._query,t.firestore._databaseId,e,n[0]._document,c);{const s=Bt(t.firestore);return function(r,a,i,o,l,u){const f=r.explicitOrderBy;if(l.length>f.length)throw new R(N.INVALID_ARGUMENT,`Too many arguments provided to ${o}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let d=0;d<l.length;d++){const v=l[d];if(f[d].field.isKeyField()){if(typeof v!="string")throw new R(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${o}(), but got a ${typeof v}`);if(!D7(r)&&v.indexOf("/")!==-1)throw new R(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${o}() must be a plain document ID, but '${v}' contains a slash.`);const g=r.path.child(N2.fromString(v));if(!Q.isDocumentKey(g))throw new R(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${o}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const H=new Q(g);h.push(yt(a,H))}else{const g=OL(i,o,v);h.push(g)}}return new ye(h,u)}(t._query,t.firestore._databaseId,s,e,n,c)}}function fh(t,e,n){if(typeof(n=K2(n))=="string"){if(n==="")throw new R(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!D7(e)&&n.indexOf("/")!==-1)throw new R(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const c=e.path.child(N2.fromString(n));if(!Q.isDocumentKey(c))throw new R(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${c}' is not because it has an odd number of segments (${c.length}).`);return yt(t,new Q(c))}if(n instanceof n1)return yt(t,n._key);throw new R(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$a(n)}.`)}function hh(t,e){if(!Array.isArray(t)||t.length===0)throw new R(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new R(N.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function QL(t,e,n){if(!n.isEqual(e))throw new R(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N72={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{convertValue(e,n="none"){switch(gt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return l1(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw n2()}}convertObject(e,n){const c={};return Ot(e.fields,(s,r)=>{c[s]=this.convertValue(r,n)}),c}convertGeoPoint(e){return new Ua(l1(e.latitude),l1(e.longitude))}convertArray(e,n){return(e.values||[]).map(c=>this.convertValue(c,n))}convertServerTimestamp(e,n){switch(n){case"previous":const c=cw(e);return c==null?null:this.convertValue(c,n);case"estimate":return this.convertTimestamp(kc(e));default:return null}}convertTimestamp(e){const n=ve(e);return new i1(n.seconds,n.nanos)}convertDocumentKey(e,n){const c=N2.fromString(e);v2(Dw(c));const s=new pe(c.get(1),c.get(3)),r=new Q(c.popFirst(5));return s.isEqual(n)||p1(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e,n){let c;return c=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,c}class k72 extends Cl{constructor(e){super(),this.firestore=e}convertBytes(e){return new i3(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new n1(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I72{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Bt(e)}set(e,n,c){this._verifyNotCommitted();const s=te(e,this._firestore),r=Wa(s.converter,n,c),a=ja(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,c);return this._mutations.push(a.toMutation(s._key,r1.none())),this}update(e,n,c,...s){this._verifyNotCommitted();const r=te(e,this._firestore);let a;return a=typeof(n=K2(n))=="string"||n instanceof Ve?Hl(this._dataReader,"WriteBatch.update",r._key,n,c,s):yl(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(a.toMutation(r._key,r1.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=te(e,this._firestore);return this._mutations=this._mutations.concat(new nn(n._key,r1.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function te(t,e){if((t=K2(t)).firestore!==e)throw new R(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A72(t){t=P2(t,n1);const e=P2(t.firestore,m1);return LL(P1(e),t._key).then(n=>Ml(e,t,n))}class Ut extends Cl{constructor(e){super(),this.firestore=e}convertBytes(e){return new i3(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new n1(this.firestore,null,n)}}function T72(t){t=P2(t,n1);const e=P2(t.firestore,m1),n=P1(e),c=new Ut(e);return Go2(n,t._key).then(s=>new N3(e,c,t._key,s,new tt(s!==null&&s.hasLocalMutations,!0),t.converter))}function E72(t){t=P2(t,n1);const e=P2(t.firestore,m1);return LL(P1(e),t._key,{source:"server"}).then(n=>Ml(e,t,n))}function P72(t){t=P2(t,Q1);const e=P2(t.firestore,m1),n=P1(e),c=new Ut(e);return qL(t._query),SL(n,t._query).then(s=>new ze(e,c,t,s))}function D72(t){t=P2(t,Q1);const e=P2(t.firestore,m1),n=P1(e),c=new Ut(e);return Wo2(n,t._query).then(s=>new ze(e,c,t,s))}function R72(t){t=P2(t,Q1);const e=P2(t.firestore,m1),n=P1(e),c=new Ut(e);return SL(n,t._query,{source:"server"}).then(s=>new ze(e,c,t,s))}function dh(t,e,n){t=P2(t,n1);const c=P2(t.firestore,m1),s=Wa(t.converter,e,n);return Es(c,[ja(Bt(c),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,r1.none())])}function mh(t,e,n,...c){t=P2(t,n1);const s=P2(t.firestore,m1),r=Bt(s);let a;return a=typeof(e=K2(e))=="string"||e instanceof Ve?Hl(r,"updateDoc",t._key,e,n,c):yl(r,"updateDoc",t._key,e),Es(s,[a.toMutation(t._key,r1.exists(!0))])}function O72(t){return Es(P2(t.firestore,m1),[new nn(t._key,r1.none())])}function F72(t,e){const n=P2(t.firestore,m1),c=Cr(t),s=Wa(t.converter,e);return Es(n,[ja(Bt(t.firestore),"addDoc",c._key,s,t.converter!==null,{}).toMutation(c._key,r1.exists(!1))]).then(()=>c)}function YL(t,...e){var n,c,s;t=K2(t);let r={includeMetadataChanges:!1},a=0;typeof e[a]!="object"||Gi(e[a])||(r=e[a],a++);const i={includeMetadataChanges:r.includeMetadataChanges};if(Gi(e[a])){const f=e[a];e[a]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[a+1]=(c=f.error)===null||c===void 0?void 0:c.bind(f),e[a+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let o,l,u;if(t instanceof n1)l=P2(t.firestore,m1),u=en(t._key.path),o={next:f=>{e[a]&&e[a](Ml(l,t,f))},error:e[a+1],complete:e[a+2]};else{const f=P2(t,Q1);l=P2(f.firestore,m1),u=f._query;const h=new Ut(l);o={next:d=>{e[a]&&e[a](new ze(l,h,f,d))},error:e[a+1],complete:e[a+2]},qL(t._query)}return function(f,h,d,v){const g=new Fa(v),H=new rl(h,g,d);return f.asyncQueue.enqueueAndForget(async()=>nl(await R6(f),H)),()=>{g.Rc(),f.asyncQueue.enqueueAndForget(async()=>cl(await R6(f),H))}}(P1(l),u,i,o)}function B72(t,e){return Ko2(P1(t=P2(t,m1)),Gi(e)?e:{next:e})}function Es(t,e){return function(n,c){const s=new N1;return n.asyncQueue.enqueueAndForget(async()=>Mo2(await vl(n),c,s)),s.promise}(P1(t),e)}function Ml(t,e,n){const c=n.docs.get(e._key),s=new Ut(t);return new N3(t,s,e._key,c,new tt(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $72 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Bt(e)}get(e){const n=te(e,this._firestore),c=new k72(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return n2();const r=s[0];if(r.isFoundDocument())return new Fc(this._firestore,c,r.key,r,n.converter);if(r.isNoDocument())return new Fc(this._firestore,c,n._key,null,n.converter);throw n2()})}set(e,n,c){const s=te(e,this._firestore),r=Wa(s.converter,n,c),a=ja(this._dataReader,"Transaction.set",s._key,r,s.converter!==null,c);return this._transaction.set(s._key,a),this}update(e,n,c,...s){const r=te(e,this._firestore);let a;return a=typeof(n=K2(n))=="string"||n instanceof Ve?Hl(this._dataReader,"Transaction.update",r._key,n,c,s):yl(this._dataReader,"Transaction.update",r._key,n),this._transaction.update(r._key,a),this}delete(e){const n=te(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=te(e,this._firestore),c=new Ut(this._firestore);return super.get(e).then(s=>new N3(this._firestore,c,n._key,s._document,new tt(!1,!1),n.converter))}}function U72(t,e,n){t=P2(t,m1);const c=Object.assign(Object.assign({},N72),n);return function(s){if(s.maxAttempts<1)throw new R(N.INVALID_ARGUMENT,"Max attempts must be at least 1")}(c),Qo2(P1(t),s=>e(new $72(t,s)),c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q72(){return new As("deleteField")}function j72(){return new gl("serverTimestamp")}function G72(...t){return new m72("arrayUnion",t)}function W72(...t){return new v72("arrayRemove",t)}function K72(t){return new p72("increment",t)}(function(t,e=!0){(function(n){Z6=n})(kt),he(new L3("firestore",(n,{instanceIdentifier:c,options:s})=>{const r=n.getProvider("app").getImmediate(),a=new m1(new ei2(n.getProvider("auth-internal")),new si2(n.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new R(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pe(i.options.projectId,o)}(r,c),r);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),X4(ff,"3.5.0",t),X4(ff,"3.5.0","esm2017")})();const Q72="@firebase/firestore-compat",Y72="0.1.25";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function ph(){if(!hi2())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Bc{constructor(e){this._delegate=e}static fromBase64String(e){return ph(),new Bc(i3.fromBase64String(e))}static fromUint8Array(e){return vh(),new Bc(i3.fromUint8Array(e))}toBase64(){return ph(),this._delegate.toBase64()}toUint8Array(){return vh(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){return X72(t,["next","error","complete"])}function X72(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const c of e)if(c in n&&typeof n[c]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J72{enableIndexedDbPersistence(e,n){return c72(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return s72(e._delegate)}clearIndexedDbPersistence(e){return r72(e._delegate)}}class XL{constructor(e,n,c){this._delegate=n,this._persistenceProvider=c,this.INTERNAL={delete:()=>this.terminate()},e instanceof pe||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&_6("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,c={}){Jo2(this._delegate,e,n,c)}enableNetwork(){return i72(this._delegate)}disableNetwork(){return o72(this._delegate)}enablePersistence(e){let n=!1,c=!1;return e&&(n=!!e.synchronizeTabs,c=!!e.experimentalForceOwningTab,xL("synchronizeTabs",n,"experimentalForceOwningTab",c)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,c)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return a72(this._delegate)}onSnapshotsInSync(e){return B72(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new O6(this,NL(this._delegate,e))}catch(n){throw Z1(n,"collection()","Firestore.collection()")}}doc(e){try{return new w4(this,Cr(this._delegate,e))}catch(n){throw Z1(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new J1(this,Zo2(this._delegate,e))}catch(n){throw Z1(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return U72(this._delegate,n=>e(new JL(this,n)))}batch(){return P1(this._delegate),new ZL(new I72(this._delegate,e=>Es(this._delegate,e)))}loadBundle(e){return l72(this._delegate,e)}namedQuery(e){return u72(this._delegate,e).then(n=>n?new J1(this,n):null)}}class Ka extends Cl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bc(new i3(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return w4.forKey(n,this.firestore,null)}}function Z72(t){Y82(t)}class JL{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Ka(e)}get(e){const n=nt(e);return this._delegate.get(n).then(c=>new $c(this._firestore,new N3(this._firestore._delegate,this._userDataWriter,c._key,c._document,c.metadata,n.converter)))}set(e,n,c){const s=nt(e);return c?(bl("Transaction.set",c),this._delegate.set(s,n,c)):this._delegate.set(s,n),this}update(e,n,c,...s){const r=nt(e);return arguments.length===2?this._delegate.update(r,n):this._delegate.update(r,n,c,...s),this}delete(e){const n=nt(e);return this._delegate.delete(n),this}}class ZL{constructor(e){this._delegate=e}set(e,n,c){const s=nt(e);return c?(bl("WriteBatch.set",c),this._delegate.set(s,n,c)):this._delegate.set(s,n),this}update(e,n,c,...s){const r=nt(e);return arguments.length===2?this._delegate.update(r,n):this._delegate.update(r,n,c,...s),this}delete(e){const n=nt(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class wt{constructor(e,n,c){this._firestore=e,this._userDataWriter=n,this._delegate=c}fromFirestore(e,n){const c=new Zn(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Uc(this._firestore,c),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const c=wt.INSTANCES;let s=c.get(e);s||(s=new WeakMap,c.set(e,s));let r=s.get(n);return r||(r=new wt(e,new Ka(e),n),s.set(n,r)),r}}wt.INSTANCES=new WeakMap;class w4{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Ka(e)}static forPath(e,n,c){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new w4(n,new n1(n._delegate,c,new Q(e)))}static forKey(e,n,c){return new w4(n,new n1(n._delegate,c,e))}get id(){return this._delegate.id}get parent(){return new O6(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new O6(this.firestore,NL(this._delegate,e))}catch(n){throw Z1(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=K2(e),e instanceof n1?kL(this._delegate,e):!1}set(e,n){n=bl("DocumentReference.set",n);try{return n?dh(this._delegate,e,n):dh(this._delegate,e)}catch(c){throw Z1(c,"setDoc()","DocumentReference.set()")}}update(e,n,...c){try{return arguments.length===1?mh(this._delegate,e):mh(this._delegate,e,n,...c)}catch(s){throw Z1(s,"updateDoc()","DocumentReference.update()")}}delete(){return O72(this._delegate)}onSnapshot(...e){const n=eS(e),c=tS(e,s=>new $c(this.firestore,new N3(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return YL(this._delegate,n,c)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=T72(this._delegate):(e==null?void 0:e.source)==="server"?n=E72(this._delegate):n=A72(this._delegate),n.then(c=>new $c(this.firestore,new N3(this.firestore._delegate,this._userDataWriter,c._key,c._document,c.metadata,this._delegate.converter)))}withConverter(e){return new w4(this.firestore,e?this._delegate.withConverter(wt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Z1(t,e,n){return t.message=t.message.replace(e,n),t}function eS(t){for(const e of t)if(typeof e=="object"&&!Ki(e))return e;return{}}function tS(t,e){var n,c;let s;return Ki(t[0])?s=t[0]:Ki(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:r=>{s.next&&s.next(e(r))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(c=s.complete)===null||c===void 0?void 0:c.bind(s)}}class $c{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new w4(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return UL(this._delegate,e._delegate)}}class Uc extends $c{data(e){const n=this._delegate.data(e);return X82(n!==void 0),n}}class J1{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Ka(e)}where(e,n,c){try{return new J1(this.firestore,G3(this._delegate,z72(e,n,c)))}catch(s){throw Z1(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new J1(this.firestore,G3(this._delegate,M72(e,n)))}catch(c){throw Z1(c,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new J1(this.firestore,G3(this._delegate,b72(e)))}catch(n){throw Z1(n,"limit()","Query.limit()")}}limitToLast(e){try{return new J1(this.firestore,G3(this._delegate,w72(e)))}catch(n){throw Z1(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new J1(this.firestore,G3(this._delegate,L72(...e)))}catch(n){throw Z1(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new J1(this.firestore,G3(this._delegate,S72(...e)))}catch(n){throw Z1(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new J1(this.firestore,G3(this._delegate,x72(...e)))}catch(n){throw Z1(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new J1(this.firestore,G3(this._delegate,_72(...e)))}catch(n){throw Z1(n,"endAt()","Query.endAt()")}}isEqual(e){return IL(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=D72(this._delegate):(e==null?void 0:e.source)==="server"?n=R72(this._delegate):n=P72(this._delegate),n.then(c=>new Qi(this.firestore,new ze(this.firestore._delegate,this._userDataWriter,this._delegate,c._snapshot)))}onSnapshot(...e){const n=eS(e),c=tS(e,s=>new Qi(this.firestore,new ze(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return YL(this._delegate,n,c)}withConverter(e){return new J1(this.firestore,e?this._delegate.withConverter(wt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class el2{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Uc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Qi{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new J1(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Uc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new el2(this._firestore,n))}forEach(e,n){this._delegate.forEach(c=>{e.call(n,new Uc(this._firestore,c))})}isEqual(e){return UL(this._delegate,e._delegate)}}class O6 extends J1{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new w4(this.firestore,e):null}doc(e){try{return e===void 0?new w4(this.firestore,Cr(this._delegate)):new w4(this.firestore,Cr(this._delegate,e))}catch(n){throw Z1(n,"doc()","CollectionReference.doc()")}}add(e){return F72(this._delegate,e).then(n=>new w4(this.firestore,n))}isEqual(e){return kL(this._delegate,e._delegate)}withConverter(e){return new O6(this.firestore,e?this._delegate.withConverter(wt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function nt(t){return P2(t,n1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(...e){this._delegate=new Ve(...e)}static documentId(){return new wl(g1.keyField().canonicalString())}isEqual(e){return e=K2(e),e instanceof Ve?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this._delegate=e}static serverTimestamp(){const e=j72();return e._methodName="FieldValue.serverTimestamp",new We(e)}static delete(){const e=q72();return e._methodName="FieldValue.delete",new We(e)}static arrayUnion(...e){const n=G72(...e);return n._methodName="FieldValue.arrayUnion",new We(n)}static arrayRemove(...e){const n=W72(...e);return n._methodName="FieldValue.arrayRemove",new We(n)}static increment(e){const n=K72(e);return n._methodName="FieldValue.increment",new We(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl2={Firestore:XL,GeoPoint:Ua,Timestamp:i1,Blob:Bc,Transaction:JL,WriteBatch:ZL,DocumentReference:w4,DocumentSnapshot:$c,Query:J1,QueryDocumentSnapshot:Uc,QuerySnapshot:Qi,CollectionReference:O6,FieldPath:wl,FieldValue:We,setLogLevel:Z72,CACHE_SIZE_UNLIMITED:n72};function nl2(t,e){t.INTERNAL.registerComponent(new L3("firestore-compat",n=>{const c=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(c,s)},"PUBLIC").setServiceProps(Object.assign({},tl2)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl2(t){nl2(t,(e,n)=>new XL(e,n,new J72)),t.registerVersion(Q72,Y72)}cl2(pa);const sl2={apiKey:"AIzaSyAlUrTHmDCgIRYIhWIiNl_wZuhvC8qErvU",authDomain:"vue3-app-f3f37.firebaseapp.com",projectId:"vue3-app-f3f37",storageBucket:"vue3-app-f3f37.appspot.com",messagingSenderId:"121056243683",appId:"1:121056243683:web:514eec776b0bb09b57fad6",measurementId:"G-YFHY5LBQER"};pa.initializeApp(sl2);const nS=pa.firestore();nS.settings({timestampsInSnapshots:!0});const rl2="/assets/ball.444d133f.gif",al2="/assets/ball2.731c0472.gif";const H3=S2({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...s4()},setup(t,e){let{attrs:n}=e;const{themeClasses:c}=u4(t),{backgroundColorClasses:s,backgroundColorStyles:r}=r3(O2(t,"color")),a=M(()=>{const i={};return t.length&&(i[t.vertical?"maxHeight":"maxWidth"]=H2(t.length)),t.thickness&&(i[t.vertical?"borderRightWidth":"borderTopWidth"]=H2(t.thickness)),i});return D2(()=>m("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},c.value,s.value],style:[a.value,r.value],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),il2={name:"Quiz",data(){return{questions:[],loading:!0,index:0,score:0,questionCurrentNumber:1,quizCompleted:!1,result:"",passingScore:"",pass:!1,squiz:!1}},computed:{currentQuestion(){return this.questions!==[]?this.questions[this.index]:null}},methods:{async fetchQuestions(){this.loading=!0;let e=await(await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy")).json(),n=0,c=e.results.map(s=>{s.answers=[s.correct_answer,...s.incorrect_answers];for(let r=s.answers.length-1;r>0;r--){const a=Math.floor(Math.random()*(r+1));[s.answers[r],s.answers[a]]=[s.answers[a],s.answers[r]]}return s.rightAnswer=null,s.key=n,n++,s});this.questions=c,this.loading=!1},startQuiz(){return this.squiz=!0,squiz},handleButtonClick:function(t){let e=t.target.getAttribute("index"),c=t.target.innerHTML.replace(/'/,"&#039;");this.questions[e].userAnswer=c,t.target.classList.add("clicked");let s=document.querySelectorAll(`[index="${e}"]`);for(let r=0;r<s.length;r++)s[r]!==t.target&&s[r].setAttribute("disabled","");this.checkAnswer(t,e)},checkAnswer:function(t,e){let n=this.questions[e];if(n.userAnswer){if(this.index<this.questions.length-1&&setTimeout(function(){this.index+=1}.bind(this),500),n.userAnswer===n.correct_answer)t.target.classList.add("rightAnswer"),this.questions[e].rightAnswer=!0,this.score++;else{t.target.classList.add("wrongAnswer"),this.questions[e].rightAnswer=!1;let c=this.questions[e].correct_answer;document.querySelectorAll(`[index="${e}"]`).forEach(function(r){r.innerHTML===c&&r.classList.add("showRightAnswer")})}if(this.questionCurrentNumber<this.questions.length)this.questionCurrentNumber++;else{this.quizCompleted=!0,(this.quizCompleted=!0)&&(this.passingScore=.5*this.questions.length,this.score>=this.passingScore?(this.result="You've Passed",this.pass=!0):this.result="You've Failed");const s={User:b6().currentUser.email,Remarks:this.result,Scores:this.score,Timestamp:new Date};nS.collection("quizscores").add(s).then(()=>{console.log("Added")})}}},reload(){window.location.reload()}},mounted(){this.fetchQuestions()}},X2=t=>(Mx("data-v-bb321bd8"),t=t(),bx(),t),ol2=w2("QUIZ APP"),ll2={key:0,class:"quiz"},ul2=X2(()=>w("h1",{id:"headline"},"Sports Quiz",-1)),fl2=X2(()=>w("img",{id:"logo-crown",src:rl2},null,-1)),hl2=w2("Start"),dl2={key:1},ml2={key:0,class:"quiz"},vl2=X2(()=>w("img",{id:"logo-crown2",src:al2},null,-1)),pl2=X2(()=>w("h1",{id:"headline"},"Sports Quiz",-1)),gl2=X2(()=>w("hr",{class:"divider"},null,-1)),yl2=["innerHTML"],Hl2={key:0},Vl2=["index","innerHTML"],zl2=X2(()=>w("hr",{class:"divider"},null,-1)),Cl2={key:1},Ml2=X2(()=>w("h1",{id:"quizresult"},"Quiz Result:",-1)),bl2={id:"quizfailed"},wl2={id:"quizfailed"},Ll2={id:"quizpassed"},Sl2={id:"quizpassed"},xl2=X2(()=>w("p",null," Would you like to play again? ",-1)),_l2=X2(()=>w("div",{class:"playagain"}," Play Again? ",-1)),Nl2=X2(()=>w("br",null,null,-1)),kl2=X2(()=>w("br",null,null,-1)),Il2=X2(()=>w("br",null,null,-1)),Al2=X2(()=>w("br",null,null,-1)),Tl2=X2(()=>w("br",null,null,-1)),El2=X2(()=>w("br",null,null,-1)),Pl2=X2(()=>w("br",null,null,-1)),Dl2=X2(()=>w("br",null,null,-1)),Rl2=X2(()=>w("br",null,null,-1)),Ol2=X2(()=>w("br",null,null,-1)),Fl2=X2(()=>w("br",null,null,-1)),Bl2=X2(()=>w("br",null,null,-1)),$l2=X2(()=>w("br",null,null,-1)),Ul2=X2(()=>w("br",null,null,-1)),ql2=X2(()=>w("br",null,null,-1)),jl2=X2(()=>w("br",null,null,-1)),Gl2=X2(()=>w("br",null,null,-1));function Wl2(t,e,n,c,s,r){const a=$6("center");return E2(),o1("body",null,[m(E4,{loading:s.loading,class:"mx-auto my-12","max-width":"800","max-height":"700",elevation:"9"},{default:P(()=>[m(K4,{class:"caltitle"},{default:P(()=>[ol2]),_:1}),m(H3),m(Q6,{fluid:""},{default:P(()=>[m(g3,null,{default:P(()=>[s.squiz?(E2(),o1("section",dl2,[s.quizCompleted?(E2(),o1("section",Cl2,[m(a,null,{default:P(()=>[Ml2]),_:1}),s.pass?(E2(),c3(g3,{key:1},{default:P(()=>[m(a,null,{default:P(()=>[m(b4,{src:"https://c.tenor.com/fYCeLcil6BkAAAAd/dog-doggo.gif","max-width":"50%"})]),_:1}),w("h1",Ll2,T2(s.result),1),w("p",Sl2,T2(s.score)+"/"+T2(s.questions.length),1)]),_:1})):(E2(),c3(g3,{key:0},{default:P(()=>[m(a,null,{default:P(()=>[m(b4,{src:"https://c.tenor.com/6CujUsC1CIkAAAAM/crying-black-guy-meme50fps-interpolated-interpolated.gif","max-width":"50%"})]),_:1}),w("h1",bl2,T2(s.result),1),w("p",wl2,T2(s.score)+"/"+T2(s.questions.length),1)]),_:1})),m(a,null,{default:P(()=>[xl2,m(v1,{id:"play-again",class:"button-footer",color:"#34495E",onClick:r.reload},{default:P(()=>[_l2]),_:1},8,["onClick"])]),_:1})])):(E2(),o1("section",ml2,[vl2,m(a,null,{default:P(()=>[pl2]),_:1}),w("h5",null,"Score: "+T2(s.score)+"/"+T2(s.questions.length),1),w("h5",null,"Question: "+T2(s.questionCurrentNumber)+"/"+T2(s.questions.length),1),gl2,w("span",null,[w("h1",{innerHTML:s.loading?"Loading...":r.currentQuestion.question},null,8,yl2),r.currentQuestion?(E2(),o1("form",Hl2,[(E2(!0),o1(c1,null,E0(r.currentQuestion.answers,i=>(E2(),o1("button",{index:r.currentQuestion.key,key:i,innerHTML:i,onClick:e[0]||(e[0]=nN((...o)=>r.handleButtonClick&&r.handleButtonClick(...o),["prevent"]))},null,8,Vl2))),128))])):b5("",!0),m(a6)]),zl2]))])):(E2(),o1("section",ll2,[m(a,null,{default:P(()=>[ul2]),_:1}),fl2,m(g3,{class:"startquizcard"},{default:P(()=>[m(v1,{class:"btn",depressed:"",outlined:"",color:"#34495E",onClick:r.startQuiz},{default:P(()=>[hl2]),_:1},8,["onClick"])]),_:1})]))]),_:1})]),_:1})]),_:1},8,["loading"]),Nl2,kl2,Il2,Al2,Tl2,El2,Pl2,Dl2,Rl2,Ol2,Fl2,Bl2,$l2,Ul2,ql2,jl2,Gl2])}const Kl2=Y6(il2,[["render",Wl2],["__scopeId","data-v-bb321bd8"]]);const Ql2={},Yl2=w("br",null,null,-1),Xl2=w("h1",{class:"vuetitle"},"Research About Vuetify",-1),Jl2=w("header",{class:"masthead"},[w("h1",{class:"masthead-heading"},"VUETIFY")],-1),Zl2=w("section",{class:"introduction-section"},[w("h1",null,"Introduction"),w("p",null," Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required \u2014 everything you need to create amazing applications is at your fingertips."),w("p",null,"Vuetify is a complete UI framework built on top of Vue. js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences.")],-1),e92=w("section",{class:"introduction-section"},[w("h1",null,"Why Vuetify?"),w("p",null," Vuetify is the most popular component library for Vue.js, enabling you to create great-looking, accessible apps even if UI design isn't your area. While the library has over 80 elements ready to use straight out the box, it also allows you to create custom elements, giving your apps a clean yet bespoke feel. This article takes you through Scrimba's free two-hour Vuetify course by Gwen Faraday. The course teaches you all the core skills needed to get started with Vuetify, including:")],-1);function t92(t,e){const n=$6("center");return E2(),c3(E4,null,{default:P(()=>[w("main",null,[Yl2,m(n,null,{default:P(()=>[m(b4,{class:"icon",src:"https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif"})]),_:1}),Xl2,Jl2,Zl2,e92])]),_:1})}const n92=Y6(Ql2,[["render",t92]]);const c92={data:()=>({show:!1})},s92={class:"team"},r92=w("h1",{class:"abouttitle"},"Compilation ",-1),a92=w("header",{class:"masthead"},[w("p",{class:"masthead-intro"},"About"),w("h1",{class:"masthead-heading"},"Apps")],-1),i92=w2(" Basic Math "),o92=w2(" Simple Calculator "),l92=w2("window"),u92=w2(" Explore "),f92=w2(" A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations. "),h92=w2(" String App "),d92=w2(" String Manipulation "),m92=w2("window"),v92=w2(" Explore "),p92=w2(" This is an app where you need to input some words, names or letters and it will coun all the vowels, constant, numbers and will convert the vowels to asteriks (*). "),g92=w2(" Quiz App "),y92=w2(" Basic Quiz "),H92=w2("window"),V92=w2(" Explore "),z92=w2(" As the name suggests, the quiz application is an application that allows one in organizing the online quiz. This application will be useful in organizing the quiz events in the colleges or the schools. The online quiz application will help in managing the quiz event in a smooth way. "),C92=w2(" About Veutify "),M92=w2(" Researh about veutify "),b92=w2("window"),w92=w2(" Explore "),L92=w2(" What is Vuetify? Vuetify is a complete UI framework built on top of Vue. js. The goal of the project is to provide developers with the tools they need to build rich and engaging user experiences. ");function S92(t,e,n,c,s,r){return E2(),o1("div",s92,[m(Q6,null,{default:P(()=>[r92,a92,m(Mi,{class:"mb-6","no-gutters":""},{default:P(()=>[m(r6,{sm:"5",md:"6"},{default:P(()=>[m(E4,{class:"mx-auto","max-width":"760"},{default:P(()=>[m(b4,{src:"https://www.svgrepo.com/show/69764/basic-mathematical-symbols.svg",height:"200px"}),m(K4,null,{default:P(()=>[i92]),_:1}),m(_n,null,{default:P(()=>[o92]),_:1}),m(xn,null,{default:P(()=>[m(v1,{color:"orange lighten-2","router-link":"",to:"/basicMath"},{default:P(()=>[m(C1,null,{default:P(()=>[l92]),_:1}),u92]),_:1}),m(a6),m(v1,{icon:"",onClick:e[0]||(e[0]=a=>t.show=!t.show)},{default:P(()=>[m(C1,null,{default:P(()=>[w2(T2(t.show?"mdi-chevron-up":"mdi-chevron-down"),1)]),_:1})]),_:1})]),_:1}),m(i6,null,{default:P(()=>[e4(w("div",null,[m(H3),m(g3,null,{default:P(()=>[f92]),_:1})],512),[[m3,t.show]])]),_:1})]),_:1})]),_:1}),m(r6,{sm:"5","offset-sm":"2",md:"6","offset-md":"0"},{default:P(()=>[m(E4,{class:"mx-auto","max-width":"760"},{default:P(()=>[m(b4,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADKysqlpaXv7+8mJibOzs7g4OCJiYmTk5P7+/v4+PioqKjz8/Pb29uLi4tycnJMTEzr6+s3NzfCwsJsbGwtLS2BgYHT09NlZWVRUVF6enpGRkZ0dHSwsLC4uLgXFxcdHR2ampo9PT0YGBgQEBA0NDRYWFhmZmaI+w5pAAAHdklEQVR4nO2d65aiOhBGURRbBfGCN7R11O5x3v8Jj5x21qBt4KtQlYSZ7N9esheQW1WKIPB4PB6Px+PxtJdJ1G0X0YRg1wsXnTayCHuY4JvtljbgDfAb9G23shH9QZ1gZLuJjYlqrqDt9jFQfRXbfYt+0a8SbHMn84eK7qZnu21MqAeN0HbTmAiVhhfbTWPiojS03TI2VIKT8ofSsF2k5car5qjl0T5VXmhXKY8DqlG/W/pMbLR1HJS7ya7iM2VDdXfkKt6wwBu6jTcs8IZu4w0LvGEjkk0Wvk2313x/Y5Zft8vdMM6iOdsf2DQcHNNZR8mP5TCr3SADsGWYHJbI3k9/egR3c5VYMUzCimv3jRm6Zf0aC4bHnKD3xVXVNADThsnwg+xXsMp0/9GsYdJgW/JSs2mtwqjhUN+vYDnW+VODhtmpmeBtANG5jMYMR7+a+hUc3DXkil0NXTU8Mwl2Omc3DadsgupW2jQcUWYw9RBnOCYMmcMeS+cM97yCdcFc84b0WWgdO7cMOTuZ3zhlGAsIdjYOGW4kBGmNkDUcn0QMSQ+irKHEQ9ghjheiht3npjGxdcbwp5ChM9fwICTozHM4+pQyJIXaBQ1FhsL/IS31BQ1/iBlSBAUNpTpS6uJCznApZkjbjxIzHIsJ7kmCcoZHMUPK8QJJQ8pN+rHfhXEch8P3fFX7YepWlJjhCfZLN6PS95LBcV0V2iDN2CQNJ88tU/HyB3uHLZegmCE43OfKjbPk8GqHjr4hLGa4hgSrR7Z5/CR5IS3u70gZ1vcYHeiWy96u9w8vdsRO9I6UISJ4GtX/zo1xMulGA63IWoGQ4RwxPOo2moSQIRRqYpOoRMgwAwSRE3MMCBkiy3vt3AMaQoZIxJ4j4QlAyBAZDtttuPvrDd8Bw3Y/h8hmd7v7UuQatns8RJ7DzprNogohQyx/zch9KmQI5s/s+ZKdlVic03xdxoRNRYHFeemdVPg6ChnC2zQFW83MUQwhwxHF8MZQboJjc43/wD4WeiKlDFW7gVVcD9pbFRVIGWqmW+aHpscrviFlqJ9IM4t5JaUMG4W4c85n0onIzAv2bLermCFhzFfA1PHIxYA5wvhThrmAnGHD4yN3PsOmj6ScIVuYe91s4iqYbZI+N1WbaRPHluREves7Sua1sSYrDLFAlVnDgOWo029OmruPshm0nIa3daRWtyprSFoIA+hcRuFMdu4UU43dOenTCNyl3i7k6ar4iRK+UfEOdb9D/lQQ39HDO8S5qoGTXew5fLT+xsTpvM2JWZF0yNLIGdIx69DfoSVgGjoHnDGXeCWM/cZOq/MOG7mDhsGYtVPFD+YbrRoRMt6r8H1quLZJxnYoGA4gG69PM8EyT+tBp282agwdr8+t1QGdhNupE9WLGe5Wpw2DIsW56TF2MD3VZjWz8bHRXOeK/YvlinTjbKq/I4cNGNZr7gWjSLd3xdYY9g0LNimU2/8ENiS6YXhj8kYuc/YT+mFnDIv/oQb/oUHfJcOiXh2p34GO0LhlWDSIEHeEznQ7ZxiM8cAjVALfPcMgGKAdK3RUz0XDYAROzVfIjzlpGARgdTDkpxw1xE73tdoQy6lCoqauGmKpf8jc21lDqOgEEt131hCKHyNxKHcNkflbuw2RnZx2GyJDYrufQ6SMVqv7UqinQX7HWUPofX3IDzlrCMXGkR8SNxxEx0M2oWczIcsL9bvwSsgabt5P9+/tz7SqFlA21RT5JUnDyWOHv0oJqTDQ8gmq5SJo+GI34id6lgLbyYACwXKGip3sbQYsecAUHOjGFzOsyPba1WU1ofl+VvdLa67CumKrc4weRllALREyTGqb1193Xx4YmeObiVbjFlh53Xx9fHixUxKdKWFTLEQqY0jLDf5cXWaz/YL0nQKb8UOhCsmPgHlRIob1TyEH4AMjYtj83BoCOHkQMeRKCqoETd4TMZSqcv0AmiksYmhCsA8KihjKlZ8tAVe8ljCECu415AM+6CVhODBgaDeD1sA1hGKjcoYGehpCIVMRQ+bE/O9QDniJGDZ4yyEEtjCUNJR5u8wfSIeCZdYW7C+xesCFc09c7wJ8CbFkudU1vhbUY6RSO1EnKUFyoT4pw7nQK1gceoelzNTNqfeQJvyrxE+XarIXQCU+CeTuVRzg3a+hvtjChGEwguqYQsx0q/JJx4AnPNObT40uxpDh7dv0zexvDBvUxDKRqRA1PI2XNqr5ZSYXY56edPX654Y1zYxlm0Ranc6WVFzgJSbzaTZD2sudt0fdykllDGcMjbvn/ITYXdLXAVQ6NnKiBt3ze0Wm+moXbhjLX9rL+ko22WG4W26v+f5y2c+u21/vaZxxun3hbF4bG96wwBu6jTcs8IZu4w0L/i1D0gujnQAxLEchoMPFTlEO9akSWx/y8NKwVcQPmbzKpOLO34LyQl9st4wJ9fkM7iKktlAPBNAZpBZQsfaUTj0wQ2VsVTx/xADVuX4mErmkqQl8iOYeGKG2OO+g3TdqHwldtbm7ARM4eiFDGMkCi5CyRTmJuu0i0ntfucfj8Xg8Ho/HDf4DO4+Bt7ThJGEAAAAASUVORK5CYII=",height:"200px"}),m(K4,null,{default:P(()=>[h92]),_:1}),m(_n,null,{default:P(()=>[d92]),_:1}),m(xn,null,{default:P(()=>[m(v1,{color:"orange lighten-2","router-link":"",to:"/StringApp"},{default:P(()=>[m(C1,null,{default:P(()=>[m92]),_:1}),v92]),_:1}),m(a6),m(v1,{icon:"",onClick:e[1]||(e[1]=a=>t.show=!t.show)},{default:P(()=>[m(C1,null,{default:P(()=>[w2(T2(t.show?"mdi-chevron-up":"mdi-chevron-down"),1)]),_:1})]),_:1})]),_:1}),m(i6,null,{default:P(()=>[e4(w("div",null,[m(H3),m(g3,null,{default:P(()=>[p92]),_:1})],512),[[m3,t.show]])]),_:1})]),_:1})]),_:1})]),_:1}),m(Mi,{"no-gutters":""},{default:P(()=>[m(r6,{sm:"6",md:"5",lg:"6"},{default:P(()=>[m(E4,{class:"mx-auto","max-width":"760"},{default:P(()=>[m(b4,{src:"https://cdn-icons-png.flaticon.com/512/5694/5694744.png",height:"200px"}),m(K4,null,{default:P(()=>[g92]),_:1}),m(_n,null,{default:P(()=>[y92]),_:1}),m(xn,null,{default:P(()=>[m(v1,{color:"orange lighten-2","router-link":"",to:"/axiosQuiz"},{default:P(()=>[m(C1,null,{default:P(()=>[H92]),_:1}),V92]),_:1}),m(a6),m(v1,{icon:"",onClick:e[2]||(e[2]=a=>t.show=!t.show)},{default:P(()=>[m(C1,null,{default:P(()=>[w2(T2(t.show?"mdi-chevron-up":"mdi-chevron-down"),1)]),_:1})]),_:1})]),_:1}),m(i6,null,{default:P(()=>[e4(w("div",null,[m(H3),m(g3,null,{default:P(()=>[z92]),_:1})],512),[[m3,t.show]])]),_:1})]),_:1})]),_:1}),m(r6,{sm:"6",md:"5","offset-md":"2",lg:"6","offset-lg":"0"},{default:P(()=>[m(E4,{class:"mx-auto","max-width":"760"},{default:P(()=>[m(b4,{src:"https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png",height:"200px"}),m(K4,null,{default:P(()=>[C92]),_:1}),m(_n,null,{default:P(()=>[M92]),_:1}),m(xn,null,{default:P(()=>[m(v1,{color:"orange lighten-2","router-link":"",to:"/aboutVuetify"},{default:P(()=>[m(C1,null,{default:P(()=>[b92]),_:1}),w92]),_:1}),m(a6),m(v1,{icon:"",onClick:e[3]||(e[3]=a=>t.show=!t.show)},{default:P(()=>[m(C1,null,{default:P(()=>[w2(T2(t.show?"mdi-chevron-up":"mdi-chevron-down"),1)]),_:1})]),_:1})]),_:1}),m(i6,null,{default:P(()=>[e4(w("div",null,[m(H3),m(g3,null,{default:P(()=>[L92]),_:1})],512),[[m3,t.show]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const x92=Y6(c92,[["render",S92]]);const _92=w2("Register"),N92={id:"quiz-container"},k92=w("h1",null,"Create an Account",-1),I92=w("p",{class:"mx-auto my-1"},null,-1),A92={class:"mx-auto my-1"},T92=w("div",{class:"resultbtn"},"Register",-1),E92=w("div",{class:"resultbtn"},"Google Sign-In",-1),P92=w("p",{class:"mx-auto my-12",color:"#34495E"},"If you have already an account sign in here.",-1),D92={class:"mx-auto my-1"},R92=w("div",{class:"resultbtn"},"Sign-In",-1),O92={__name:"Register",setup(t){const e=q(""),n=q(""),c=WC(),s=()=>{Tn2(b6(),e.value,n.value).then(a=>{console.log("Succesfully registered"),c.push("/dashboard")}).catch(a=>{console.log(a.code),alert(a.message)})},r=()=>{const a=new d3;ac2(b6(),a).then(i=>{console.log(i.user),c.push("/dashboard")}).catch(i=>{})};return(a,i)=>{const o=$6("center");return E2(),c3(E4,{loading:a.loading,class:"mx-auto my-12","max-width":"750","max-height":"750",elevation:"9"},{default:P(()=>[m(K4,{class:"caltitle"},{default:P(()=>[_92]),_:1}),m(Q6,{fluid:""},{default:P(()=>[m(o,null,{default:P(()=>[m(b4,{class:"icon",src:"https://cdn.dribbble.com/users/2446970/screenshots/5883361/media/c6adf54fc02fea4ac9e2e003bbf5370d.gif"})]),_:1}),w("div",N92,[m(o,null,{default:P(()=>[k92]),_:1}),I92,m(vt,{name:"login",modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=l=>e.value=l),label:"Enter your email",type:"text"},null,8,["modelValue"]),m(vt,{name:"Password",modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=l=>n.value=l),label:"Enter your Password",type:"password"},null,8,["modelValue"]),w("p",A92,[m(v1,{block:"",color:"#34495E",elevation:"1",small:"","x-large":"","x-small":"",onClick:s},{default:P(()=>[T92]),_:1})]),m(H3),w("p",null,[m(v1,{block:"",color:"#EA4335",elevation:"1",small:"","x-large":"","x-small":"",onClick:r},{default:P(()=>[E92]),_:1})]),m(H3),m(o,null,{default:P(()=>[P92]),_:1}),w("p",D92,[m(v1,{class:"signinbtn",block:"",color:"#41B883",elevation:"1",small:"","x-large":"","x-small":"","router-link":"",to:"/"},{default:P(()=>[R92]),_:1})])])]),_:1})]),_:1},8,["loading"])}}};const cS=k2({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function sS(t,e){const n={},c=s=>()=>{if(!f1)return Promise.resolve(!0);const r=s==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(a=>{var i;const o=parseInt((i=t[s])!=null?i:0,10);n[s]=window.setTimeout(()=>{e==null||e(r),a(r)},o)})};return{runCloseDelay:c("closeDelay"),runOpenDelay:c("openDelay")}}const F92=S2({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...cS()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const c=F4(t,"modelValue"),{runOpenDelay:s,runCloseDelay:r}=sS(t,a=>!t.disabled&&(c.value=a));return()=>{var a;return(a=n.default)==null?void 0:a.call(n,{isHovering:c.value,props:{onMouseenter:s,onMouseleave:r}})}}}),B92={class:"intro1"},$92=w("h1",null," Login to your Account",-1),U92=w("p",null,"Sign In to Continue Access",-1),q92=w("p",null,null,-1),j92=w("p",null,null,-1),G92=w("p",null,null,-1),W92=w("p",null,null,-1),K92=w("p",null,null,-1),Q92=w("p",null,null,-1),Y92=w("p",null,null,-1),X92=w("p",null,null,-1),J92=w("p",null,null,-1),Z92=w("p",null,null,-1),eu2=w("p",null,null,-1),tu2=w("p",null,null,-1),nu2=w2("Learn More"),cu2=w2("Sign-In"),su2={id:"quiz-container"},ru2={style:{"text-align":"center"}},au2=w("h1",null,"Sign In",-1),iu2=w("p",{class:"mx-auto my-1"},null,-1),ou2={key:0},lu2={class:"mx-auto my-1"},uu2=w("div",{class:"resultbtn"},"Sign-In",-1),fu2=w("div",{class:"resultbtn"},"Register",-1),hu2={__name:"SignIn",setup(t){const n=q(""),c=q(""),s=q(),r=WC(),a=()=>{En2(b6(),n.value,c.value).then(i=>{console.log("Succesfully signed in!"),r.push("/dashboard")}).catch(i=>{switch(console.log(i.code),i.code){case"auth/invalid-email":s.value="Invalid Email";break;case"auth/user-not-found":s.value="No account with that email was found";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or password was incorrect";break}})};return(i,o)=>{const l=$6("center");return E2(),c3(Mi,null,{default:P(()=>[m(r6,{cols:"2",sm:"6"},{default:P(()=>[m(E4,{"max-width":"2000","max-height":"930",elevation:"10"},{default:P(()=>[w("div",B92,[$92,U92,q92,j92,G92,W92,K92,Q92,Y92,X92,J92,Z92,eu2,tu2,m(v1,{color:"#34495E",elevation:"1",small:"","x-large":"","x-small":"","router-link":"",to:"/register"},{default:P(()=>[nu2]),_:1})])]),_:1})]),_:1}),m(r6,{cols:"2",sm:"6"},{default:P(()=>[m(E4,{loading:!1,class:"mx-auto my-15","max-width":"750","max-height":"1000",elevation:"9"},{default:P(()=>[m(K4,{class:"caltitle"},{default:P(()=>[cu2]),_:1}),m(Q6,{fluid:""},{default:P(()=>[w("div",su2,[w("div",ru2,[m(l,null,{default:P(()=>[m(b4,{class:"bgicon",src:"https://cdn.dribbble.com/users/2726709/screenshots/6478602/1.gif"})]),_:1})]),m(l,null,{default:P(()=>[au2]),_:1}),iu2,m(vt,{name:"login",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=u=>n.value=u),label:"Login",type:"text"},null,8,["modelValue"]),m(vt,{name:"Password",modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=u=>c.value=u),label:"Password",type:"password"},null,8,["modelValue"]),s.value?(E2(),o1("p",ou2,T2(s.value),1)):b5("",!0),w("p",lu2,[m(F92,null,{default:P(()=>[m(v1,{block:"",color:"#34495E",elevation:"1",small:"","x-large":"","x-small":"",onClick:a,loading:!1},{default:P(()=>[uu2]),_:1})]),_:1})]),m(H3),w("p",null,[m(v1,{block:"",color:"#41B883",elevation:"1",small:"","x-large":"","x-small":"","router-link":"",to:"/register"},{default:P(()=>[fu2]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})}}};const du2={},mu2={id:"Home-page"},vu2={class:"intro"},pu2=w("h1",null," FINAL LABORATORY",-1),gu2=w("h1",null,"Dashboard",-1),yu2=w("p",null,null,-1),Hu2=w("p",null,null,-1),Vu2=w("p",null,null,-1),zu2=w("p",null,null,-1),Cu2=w("p",null,null,-1),Mu2=w("p",null,null,-1),bu2=w("p",null,null,-1),wu2=w("p",null,null,-1),Lu2=w("p",null,null,-1),Su2=w("p",null,null,-1),xu2=w("p",null,null,-1),_u2=w("p",null,"Hi, My Name is Noble Peter Jansen.",-1),Nu2=w2("Learn More");function ku2(t,e){return E2(),o1("main",mu2,[w("main",null,[w("div",vu2,[pu2,gu2,yu2,Hu2,Vu2,zu2,Cu2,Mu2,bu2,wu2,Lu2,Su2,xu2,_u2,m(v1,{elevation:"9",color:"#41B883","router-link":"",to:"/aboutProject",class:"learnmore"},{default:P(()=>[Nu2]),_:1})])])])}const Iu2=Y6(du2,[["render",ku2]]),Ll=Qs2({history:us2("/"),routes:[{path:"/",name:"signIn",component:hu2},{path:"/stringApp",name:"StringAppView",component:na2,meta:{requiresAuth:!0}},{path:"/dashboard",name:"Dashboard",component:Iu2,meta:{requiresAuth:!0}},{path:"/basicMath",name:"basicMath",component:Qr2,meta:{requiresAuth:!0}},{path:"/aboutMe",name:"aboutMe",component:Sa2,meta:{requiresAuth:!0}},{path:"/axiosDemo",name:"axiosDemo",component:Ra2,meta:{requiresAuth:!0}},{path:"/axiosQuiz",name:"axiosQuiz",component:Kl2,meta:{requiresAuth:!0}},{path:"/aboutVuetify",name:"aboutVuetify",component:n92,meta:{requiresAuth:!0}},{path:"/aboutProject",name:"aboutProject",component:x92,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:O92},{path:"/home",name:"home",component:Ca2,meta:{requiresAuth:!0}}]}),Au2=()=>new Promise((t,e)=>{const n=bC(b6(),c=>{n(),t(c)},e)});Ll.beforeEach(async(t,e,n)=>{t.matched.some(c=>c.meta.requiresAuth)?await Au2()?n():(alert("You need to sign in in order for you to access this module!"),n("/")):n()});const rS=N4()({name:"VToolbarTitle",props:{text:String,...T1()},setup(t,e){let{slots:n}=e;return D2(()=>{var c;const s=!!(n.default||n.text||t.text);return m(t.tag,{class:"v-toolbar-title"},{default:()=>[s&&m("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(c=n.default)==null?void 0:c.call(n)])]})}),{}}}),Tu2=[null,"prominent","default","comfortable","compact"],Eu2=k2({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>Tu2.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...At(),...Pt(),...E3(),...T1({tag:"header"}),...s4()},"v-toolbar"),Pu2=N4()({name:"VToolbar",props:Eu2(),setup(t,e){var n;let{slots:c}=e;const{backgroundColorClasses:s,backgroundColorStyles:r}=r3(O2(t,"color")),{borderClasses:a}=Tt(t),{elevationClasses:i}=Dt(t),{roundedClasses:o}=P3(t),{themeClasses:l}=u4(t),u=q(!!(t.extended||(n=c.extension)!=null&&n.call(c))),f=M(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),h=M(()=>u.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return It({VBtn:{variant:"text"}}),D2(()=>{var d,v,g,H,p;const V=!!(t.title||c.title),z=!!(c.image||t.image),_=(d=c.extension)==null?void 0:d.call(c);return u.value=!!(t.extended||_),m(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},s.value,a.value,i.value,o.value,l.value],style:[r.value]},{default:()=>[z&&m("div",{key:"image",class:"v-toolbar__image"},[m(e3,{defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[c.image?(v=c.image)==null?void 0:v.call(c):m(b4,null,null)]})]),m("div",{class:"v-toolbar__content",style:{height:H2(f.value)}},[c.prepend&&m("div",{class:"v-toolbar__prepend"},[(g=c.prepend)==null?void 0:g.call(c)]),V&&m(rS,{key:"title",text:t.title},{text:c.title}),(H=c.default)==null?void 0:H.call(c),c.append&&m("div",{class:"v-toolbar__append"},[(p=c.append)==null?void 0:p.call(c)])]),m(i6,null,{default:()=>[u.value&&m("div",{class:"v-toolbar__extension",style:{height:H2(h.value)}},[_])]})]})}),{contentHeight:f,extensionHeight:h}}}),br=Symbol.for("vuetify:layout"),aS=Symbol.for("vuetify:layout-item"),gh=1e3,Du2=k2({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ru2=k2({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ou2(){const t=B2(br);if(!t)throw new Error("Could not find injected Vuetify layout");return t}function Fu2(t){var e;const n=B2(br);if(!n)throw new Error("Could not find injected Vuetify layout");const c=(e=t.id)!=null?e:`layout-item-${T3()}`,s=c4("useLayoutItem");F1(aS,{id:c});const r=q(!1);pd(()=>r.value=!0),vd(()=>r.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:i}=n.register(s,{...t,active:M(()=>r.value?!1:t.active.value),id:c});return B4(()=>n.unregister(c)),{layoutItemStyles:a,layoutRect:n.layoutRect,layoutItemScrimStyles:i}}const Bu2=(t,e,n,c)=>{let s={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...s}}];for(const a of t){const i=e.get(a),o=n.get(a),l=c.get(a);if(!i||!o||!l)continue;const u={...s,[i.value]:parseInt(s[i.value],10)+(l.value?parseInt(o.value,10):0)};r.push({id:a,layer:u}),s=u}return r};function $u2(t){const e=B2(br,null),n=M(()=>e?e.rootZIndex.value-100:gh),c=q([]),s=j1(new Map),r=j1(new Map),a=j1(new Map),i=j1(new Map),o=j1(new Map),{resizeRef:l,contentRect:u}=fM(),f=M(()=>{var b;const x=new Map,L=(b=t.overlaps)!=null?b:[];for(const I of L.filter(A=>A.includes(":"))){const[A,O]=I.split(":");if(!c.value.includes(A)||!c.value.includes(O))continue;const W=s.get(A),T=s.get(O),$=r.get(A),f2=r.get(O);!W||!T||!$||!f2||(x.set(O,{position:W.value,amount:parseInt($.value,10)}),x.set(A,{position:T.value,amount:-parseInt(f2.value,10)}))}return x}),h=M(()=>{const b=[...new Set([...a.values()].map(L=>L.value))].sort((L,I)=>L-I),x=[];for(const L of b){const I=c.value.filter(A=>{var O;return((O=a.get(A))==null?void 0:O.value)===L});x.push(...I)}return Bu2(x,s,r,i)}),d=M(()=>!Array.from(o.values()).some(b=>b.value)),v=M(()=>{const b=h.value[h.value.length-1].layer;return{"--v-layout-left":H2(b.left),"--v-layout-right":H2(b.right),"--v-layout-top":H2(b.top),"--v-layout-bottom":H2(b.bottom),...d.value?void 0:{transition:"none"}}}),g=M(()=>h.value.slice(1).map((b,x)=>{let{id:L}=b;const{layer:I}=h.value[x],A=r.get(L);return{id:L,...I,size:Number(A.value)}})),H=b=>g.value.find(x=>x.id===b),p=c4("createLayout"),V=q(!1);_t(()=>{V.value=!0}),F1(br,{register:(b,x)=>{let{id:L,order:I,position:A,layoutSize:O,elementSize:W,active:T,disableTransitions:$,absolute:f2}=x;a.set(L,I),s.set(L,A),r.set(L,O),i.set(L,T),$&&o.set(L,$);const Z=Gn(aS,p==null?void 0:p.vnode).indexOf(b);Z>-1?c.value.splice(Z,0,L):c.value.push(L);const c2=M(()=>g.value.findIndex(L1=>L1.id===L)),d2=M(()=>n.value+h.value.length*2-c2.value*2),J2=M(()=>{const L1=A.value==="left"||A.value==="right",U1=A.value==="right",q1=A.value==="bottom",$4={[A.value]:0,zIndex:d2.value,transform:`translate${L1?"X":"Y"}(${(T.value?0:-110)*(U1||q1?-1:1)}%)`,position:f2.value||n.value!==gh?"absolute":"fixed",...d.value?void 0:{transition:"none"}};if(!V.value)return $4;if(c2.value<0)throw new Error(`Layout item "${L}" is missing`);const E=g.value[c2.value];if(!E)throw new Error(`Could not find layout item "${L}`);const t2=f.value.get(L);return t2&&(E[t2.position]+=t2.amount),{...$4,height:L1?`calc(100% - ${E.top}px - ${E.bottom}px)`:W.value?`${W.value}px`:void 0,left:U1?void 0:`${E.left}px`,right:U1?`${E.right}px`:void 0,top:A.value!=="bottom"?`${E.top}px`:void 0,bottom:A.value!=="top"?`${E.bottom}px`:void 0,width:L1?W.value?`${W.value}px`:void 0:`calc(100% - ${E.left}px - ${E.right}px)`}}),Y1=M(()=>({zIndex:d2.value-1}));return{layoutItemStyles:J2,layoutItemScrimStyles:Y1,zIndex:d2}},unregister:b=>{a.delete(b),s.delete(b),r.delete(b),i.delete(b),o.delete(b),c.value=c.value.filter(x=>x!==b)},mainStyles:v,getLayoutItem:H,items:g,layoutRect:u,rootZIndex:n});const z=M(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),_=M(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:z,layoutStyles:_,getLayoutItem:H,items:g,layoutRect:u,layoutRef:l}}const Uu2=S2({name:"VAppBarNavIcon",props:{icon:{type:y1,default:"$menu"}},setup(t,e){let{slots:n}=e;return D2(()=>m(v1,{class:"v-app-bar-nav-icon",icon:t.icon},n)),{}}});const Yi=Symbol.for("vuetify:list");function iS(){const t=B2(Yi,{hasPrepend:q(!1),updateHasPrepend:()=>null}),e={hasPrepend:q(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return F1(Yi,e),t}function oS(){return B2(Yi,null)}const qu2={open:t=>{let{id:e,value:n,opened:c,parents:s}=t;if(n){const r=new Set;r.add(e);let a=s.get(e);for(;a!=null;)r.add(a),a=s.get(a);return r}else return c.delete(e),c},select:()=>null},lS={open:t=>{let{id:e,value:n,opened:c,parents:s}=t;if(n){let r=s.get(e);for(c.add(e);r!=null&&r!==e;)c.add(r),r=s.get(r);return c}else c.delete(e);return c},select:()=>null},ju2={open:lS.open,select:t=>{let{id:e,value:n,opened:c,parents:s}=t;if(!n)return c;const r=[];let a=s.get(e);for(;a!=null;)r.push(a),a=s.get(a);return new Set(r)}},Sl=t=>{const e={select:n=>{let{id:c,value:s,selected:r}=n;if(t&&!s){const a=Array.from(r.entries()).reduce((i,o)=>{let[l,u]=o;return u==="on"?[...i,l]:i},[]);if(a.length===1&&a[0]===c)return r}return r.set(c,s?"on":"off"),r},in:(n,c,s)=>{let r=new Map;for(const a of n||[])r=e.select({id:a,value:!0,selected:new Map(r),children:c,parents:s});return r},out:n=>{const c=[];for(const[s,r]of n.entries())r==="on"&&c.push(s);return c}};return e},uS=t=>{const e=Sl(t);return{select:c=>{let{selected:s,id:r,...a}=c;const i=s.has(r)?new Map([[r,s.get(r)]]):new Map;return e.select({...a,id:r,selected:i})},in:(c,s,r)=>{let a=new Map;return c!=null&&c.length&&(a=e.in(c.slice(0,1),s,r)),a},out:(c,s,r)=>e.out(c,s,r)}},Gu2=t=>{const e=Sl(t);return{select:c=>{let{id:s,selected:r,children:a,...i}=c;return a.has(s)?r:e.select({id:s,selected:r,children:a,...i})},in:e.in,out:e.out}},Wu2=t=>{const e=uS(t);return{select:c=>{let{id:s,selected:r,children:a,...i}=c;return a.has(s)?r:e.select({id:s,selected:r,children:a,...i})},in:e.in,out:e.out}},Ku2=t=>{const e={select:n=>{let{id:c,value:s,selected:r,children:a,parents:i}=n;const o=new Map(r),l=[c];for(;l.length;){const f=l.shift();r.set(f,s?"on":"off"),a.has(f)&&l.push(...a.get(f))}let u=i.get(c);for(;u;){const f=a.get(u),h=f.every(v=>r.get(v)==="on"),d=f.every(v=>!r.has(v)||r.get(v)==="off");r.set(u,h?"on":d?"off":"indeterminate"),u=i.get(u)}return t&&!s&&Array.from(r.entries()).reduce((h,d)=>{let[v,g]=d;return g==="on"?[...h,v]:h},[]).length===0?o:r},in:(n,c,s)=>{let r=new Map;for(const a of n||[])r=e.select({id:a,value:!0,selected:new Map(r),children:c,parents:s});return r},out:(n,c)=>{const s=[];for(const[r,a]of n.entries())a==="on"&&!c.has(r)&&s.push(r);return s}};return e},qc=Symbol.for("vuetify:nested"),fS={id:q(),root:{register:()=>null,unregister:()=>null,parents:q(new Map),children:q(new Map),open:()=>null,select:()=>null,opened:q(new Set),selected:q(new Map),selectedValues:q([])}},Qu2=k2({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),Yu2=t=>{let e=!1;const n=q(new Map),c=q(new Map),s=F4(t,"opened",t.opened,f=>new Set(f),f=>[...f.values()]),r=M(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return Wu2(t.mandatory);case"leaf":return Gu2(t.mandatory);case"independent":return Sl(t.mandatory);case"single-independent":return uS(t.mandatory);case"classic":default:return Ku2(t.mandatory)}}),a=M(()=>{if(typeof t.openStrategy=="function")return t.openStrategy;switch(t.openStrategy){case"list":return ju2;case"single":return qu2;case"multiple":default:return lS}}),i=F4(t,"selected",t.selected,f=>r.value.in(f,n.value,c.value),f=>r.value.out(f,n.value,c.value));B4(()=>{e=!0});function o(f){const h=[];let d=f;for(;d!=null;)h.unshift(d),d=c.value.get(d);return h}const l=c4("nested"),u={id:q(),root:{opened:s,selected:i,selectedValues:M(()=>{const f=[];for(const[h,d]of i.value.entries())d==="on"&&f.push(h);return f}),register:(f,h,d)=>{h&&f!==h&&c.value.set(f,h),d&&n.value.set(f,[]),h!=null&&n.value.set(h,[...n.value.get(h)||[],f])},unregister:f=>{if(e)return;n.value.delete(f);const h=c.value.get(f);if(h){var d;const v=(d=n.value.get(h))!=null?d:[];n.value.set(h,v.filter(g=>g!==f))}c.value.delete(f),s.value.delete(f)},open:(f,h,d)=>{l.emit("click:open",{id:f,value:h,path:o(f),event:d});const v=a.value.open({id:f,value:h,opened:new Set(s.value),children:n.value,parents:c.value,event:d});v&&(s.value=v)},select:(f,h,d)=>{l.emit("click:select",{id:f,value:h,path:o(f),event:d});const v=r.value.select({id:f,value:h,selected:new Map(i.value),children:n.value,parents:c.value,event:d});v&&(i.value=v);const g=a.value.select({id:f,value:h,selected:new Map(i.value),opened:new Set(s.value),children:n.value,parents:c.value,event:d});g&&(s.value=g)},children:n,parents:c}};return F1(qc,u),u.root},hS=(t,e)=>{const n=B2(qc,fS),c=M(()=>{var r;return(r=t.value)!=null?r:T3().toString()}),s={...n,id:c,open:(r,a)=>n.root.open(c.value,r,a),isOpen:M(()=>n.root.opened.value.has(c.value)),parent:M(()=>n.root.parents.value.get(c.value)),select:(r,a)=>n.root.select(c.value,r,a),isSelected:M(()=>n.root.selected.value.get(c.value)==="on"),isIndeterminate:M(()=>n.root.selected.value.get(c.value)==="indeterminate"),isLeaf:M(()=>!n.root.children.value.get(c.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(c.value,n.id.value,e),B4(()=>{!n.isGroupActivator&&n.root.unregister(c.value)}),e&&F1(qc,s),s},Xu2=()=>{const t=B2(qc,fS);F1(qc,{...t,isGroupActivator:!0})},Ju2=S2({name:"VListGroupActivator",setup(t,e){let{slots:n}=e;return Xu2(),()=>{var c;return(c=n.default)==null?void 0:c.call(n)}}}),Zu2=k2({activeColor:String,color:String,collapseIcon:{type:y1,default:"$collapse"},expandIcon:{type:y1,default:"$expand"},prependIcon:y1,appendIcon:y1,fluid:Boolean,subgroup:Boolean,value:null,...T1()}),dS=N4()({name:"VListGroup",props:{title:String,...Zu2()},setup(t,e){let{slots:n}=e;const{isOpen:c,open:s}=hS(O2(t,"value"),!0),r=oS(),a=l=>{s(!c.value,l)},i=M(()=>({onClick:a,class:"v-list-group__header"})),o=M(()=>c.value?t.collapseIcon:t.expandIcon);return D2(()=>{var l;return m(t.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":t.fluid,"v-list-group--subgroup":t.subgroup}]},{default:()=>[n.activator&&m(e3,{defaults:{VListItem:{active:c.value,activeColor:t.activeColor,color:t.color,prependIcon:t.prependIcon||t.subgroup&&o.value,appendIcon:t.appendIcon||!t.subgroup&&o.value,title:t.title,value:t.value}}},{default:()=>[m(Ju2,null,{default:()=>[n.activator({props:i.value,isOpen:c})]})]}),m(i6,null,{default:()=>[e4(m("div",{class:"v-list-group__items"},[(l=n.default)==null?void 0:l.call(n)]),[[m3,c.value]])]})]})}),{}}});function ef2(t){return fs(t,Object.keys(dS.props))}const tf2=G6("v-list-item-subtitle"),Xi=G6("v-list-item-title"),wr=N4()({name:"VListItem",directives:{Ripple:t7},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:y1,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:y1,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...At(),...we(),...W6(),...Pt(),...E3(),...a7(),...T1(),...s4(),...hs({variant:"text"})},setup(t,e){let{attrs:n,slots:c}=e;const s=r7(t,n),r=M(()=>{var $;return($=t.value)!=null?$:s.href.value}),{select:a,isSelected:i,isIndeterminate:o,isGroupActivator:l,root:u,parent:f}=hS(r,!1),h=oS(),d=M(()=>{var $;return t.active!==!1&&(t.active||(($=s.isExactActive)==null?void 0:$.value)||i.value)}),v=M(()=>t.link!==!1&&s.isLink.value),g=M(()=>!t.disabled&&t.link!==!1&&(t.link||s.isClickable.value||t.value!=null&&!!h)),H=M(()=>t.rounded||t.nav),p=M(()=>{var $;return{color:d.value&&($=t.activeColor)!=null?$:t.color,variant:t.variant}});R2(()=>{var $;return($=s.isExactActive)==null?void 0:$.value},$=>{$&&f.value!=null&&u.open(f.value,!0)},{immediate:!0});const{themeClasses:V}=u4(t),{borderClasses:z}=Tt(t),{colorClasses:_,colorStyles:b,variantClasses:x}=e7(p),{densityClasses:L}=Et(t),{dimensionStyles:I}=K6(t),{elevationClasses:A}=Dt(t),{roundedClasses:O}=P3(H),W=M(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),T=M(()=>({isActive:d.value,select:a,isSelected:i.value,isIndeterminate:o.value}));return D2(()=>{var $,f2,m2,Z,c2,d2,J2;const Y1=v.value?"a":t.tag,L1=!h||i.value||d.value,U1=c.title||t.title,q1=c.subtitle||t.subtitle,$4=!!(c.append||t.appendAvatar||t.appendIcon),E=!!(c.prepend||t.prependAvatar||t.prependIcon);return h==null||h.updateHasPrepend(E),e4(m(Y1,{class:["v-list-item",{"v-list-item--active":d.value,"v-list-item--disabled":t.disabled,"v-list-item--link":g.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!E&&(h==null?void 0:h.hasPrepend.value),[`${t.activeClass}`]:d.value},V.value,z.value,L1?_.value:void 0,L.value,A.value,W.value,O.value,x.value],style:[L1?b.value:void 0,I.value],href:s.href.value,tabindex:g.value?0:void 0,onClick:g.value&&(t2=>{var K;l||((K=s.navigate)==null||K.call(s,t2),t.value!=null&&a(!i.value,t2))})},{default:()=>[Zo(g.value||d.value,"v-list-item"),E&&m(e3,{key:"prepend",defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>[m("div",{class:"v-list-item__prepend"},[t.prependAvatar&&m(S6,{key:"prepend-avatar"},null),t.prependIcon&&m(C1,{key:"prepend-icon"},null),($=c.prepend)==null?void 0:$.call(c,T.value)])]}),m("div",{class:"v-list-item__content"},[U1&&m(Xi,{key:"title"},{default:()=>[(f2=(m2=c.title)==null?void 0:m2.call(c,{title:t.title}))!=null?f2:t.title]}),q1&&m(tf2,{key:"subtitle"},{default:()=>[(Z=(c2=c.subtitle)==null?void 0:c2.call(c,{subtitle:t.subtitle}))!=null?Z:t.subtitle]}),(d2=c.default)==null?void 0:d2.call(c,T.value)]),$4&&m(e3,{key:"append",defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>[m("div",{class:"v-list-item__append"},[(J2=c.append)==null?void 0:J2.call(c,T.value),t.appendIcon&&m(C1,{key:"append-icon"},null),t.appendAvatar&&m(S6,{key:"append-avatar"},null)])]})]}),[[U6("ripple"),g.value]])}),{}}}),nf2=S2({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...T1()},setup(t,e){let{slots:n}=e;const{textColorClasses:c,textColorStyles:s}=mt(O2(t,"color"));return D2(()=>{var r,a;const i=!!(n.default||t.title);return m(t.tag,{class:["v-list-subheader",{"v-list-subheader--inset":t.inset,"v-list-subheader--sticky":t.sticky},c.value],style:{textColorStyles:s}},{default:()=>[i&&m("div",{class:"v-list-subheader__text"},[(r=(a=n.default)==null?void 0:a.call(n))!=null?r:t.title])]})}),{}}}),mS=N4()({name:"VListChildren",props:{items:Array},setup(t,e){let{slots:n}=e;return iS(),()=>{var c,s,r;return(c=(s=n.default)==null?void 0:s.call(n))!=null?c:(r=t.items)==null?void 0:r.map(a=>{let{children:i,props:o,type:l,raw:u}=a;if(l==="divider"){var f,h;return(f=(h=n.divider)==null?void 0:h.call(n,{props:o}))!=null?f:m(H3,o,null)}if(l==="subheader"){var d,v;return(d=(v=n.subheader)==null?void 0:v.call(n,{props:o}))!=null?d:m(nf2,o,{default:n.subheader})}const g={subtitle:n.subtitle?V=>{var z;return(z=n.subtitle)==null?void 0:z.call(n,{...V,item:u})}:void 0,prepend:n.prepend?V=>{var z;return(z=n.prepend)==null?void 0:z.call(n,{...V,item:u})}:void 0,append:n.append?V=>{var z;return(z=n.append)==null?void 0:z.call(n,{...V,item:u})}:void 0,default:n.default?V=>{var z;return(z=n.default)==null?void 0:z.call(n,{...V,item:u})}:void 0,title:n.title?V=>{var z;return(z=n.title)==null?void 0:z.call(n,{...V,item:u})}:void 0},[H,p]=ef2(o);return i?m(dS,G1({value:o==null?void 0:o.value},H),{activator:V=>{let{props:z}=V;return n.header?n.header({...o,...z}):m(wr,G1(o,z),g)},default:()=>m(mS,{items:i},n)}):n.item?n.item(o):m(wr,o,g)})}}}),cf2=k2({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function sf2(t,e){const n=hn(e,t.itemType,"item"),c=typeof e=="string"?e:hn(e,t.itemTitle),s=hn(e,t.itemValue,void 0),r=hn(e,t.itemChildren),a=t.itemProps===!0?fs(e,["children"])[1]:hn(e,t.itemProps),i={title:c,value:s,...a};return{type:n,title:i.title,value:i.value,props:i,children:n==="item"&&r?vS(t,r):void 0,raw:e}}function vS(t,e){const n=[];for(const c of e)n.push(sf2(t,c));return n}function rf2(t){return{items:M(()=>vS(t,t.items))}}const af2=N4()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Qu2({selectStrategy:"single-leaf",openStrategy:"list"}),...At(),...we(),...W6(),...Pt(),itemType:{type:String,default:"type"},...cf2(),...E3(),...T1(),...s4(),...hs({variant:"text"})},emits:{"update:selected":t=>!0,"update:opened":t=>!0,"click:open":t=>!0,"click:select":t=>!0},setup(t,e){let{slots:n}=e;const{items:c}=rf2(t),{themeClasses:s}=u4(t),{backgroundColorClasses:r,backgroundColorStyles:a}=r3(O2(t,"bgColor")),{borderClasses:i}=Tt(t),{densityClasses:o}=Et(t),{dimensionStyles:l}=K6(t),{elevationClasses:u}=Dt(t),{roundedClasses:f}=P3(t),{open:h,select:d}=Yu2(t),v=M(()=>t.lines?`v-list--${t.lines}-line`:void 0),g=O2(t,"activeColor"),H=O2(t,"color");return iS(),It({VListGroup:{activeColor:g,color:H},VListItem:{activeClass:O2(t,"activeClass"),activeColor:g,color:H,density:O2(t,"density"),disabled:O2(t,"disabled"),lines:O2(t,"lines"),nav:O2(t,"nav"),variant:O2(t,"variant")}}),D2(()=>m(t.tag,{class:["v-list",{"v-list--disabled":t.disabled,"v-list--nav":t.nav},s.value,r.value,i.value,o.value,u.value,v.value,f.value],style:[a.value,l.value]},{default:()=>[m(mS,{items:c.value},n)]})),{open:h,select:d}}});const Ji=Symbol.for("vuetify:v-menu"),if2=k2({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...cS()});function of2(t,e){let{isActive:n,isTop:c}=e;const s=q();let r=!1,a=!1;const i=M(()=>t.openOnFocus||t.openOnFocus==null&&t.openOnHover),o=M(()=>t.openOnClick||t.openOnClick==null&&!t.openOnHover&&!i.value),{runOpenDelay:l,runCloseDelay:u}=sS(t,p=>{p===(t.openOnHover&&r||i.value&&a)&&!(t.openOnHover&&n.value&&!c.value)&&(n.value=p)}),f={click:p=>{p.stopPropagation(),s.value=p.currentTarget||p.target,n.value=!n.value},mouseenter:p=>{r=!0,s.value=p.currentTarget||p.target,l()},mouseleave:p=>{r=!1,u()},focus:p=>{L02&&!p.target.matches(":focus-visible")||(a=!0,p.stopPropagation(),s.value=p.currentTarget||p.target,l())},blur:p=>{a=!1,p.stopPropagation(),u()}},h=M(()=>{const p={};return o.value&&(p.click=f.click),t.openOnHover&&(p.mouseenter=f.mouseenter,p.mouseleave=f.mouseleave),i.value&&(p.focus=f.focus,p.blur=f.blur),p}),d=M(()=>{const p={};if(t.openOnHover&&(p.mouseenter=()=>{r=!0,l()},p.mouseleave=()=>{r=!1,u()}),t.closeOnContentClick){const V=B2(Ji,null);p.click=()=>{n.value=!1,V==null||V.closeParents()}}return p});R2(c,p=>{p&&(t.openOnHover&&!r&&(!i.value||!a)||i.value&&!a&&(!t.openOnHover||!r))&&(n.value=!1)});const v=q();Me(()=>{!v.value||_4(()=>{const p=v.value;s.value=n02(p)?p.$el:p})});const g=c4("useActivator");let H;return R2(()=>!!t.activator,p=>{p&&f1?(H=Wc(),H.run(()=>{lf2(t,g,{activatorEl:s,activatorEvents:h})})):H&&H.stop()},{flush:"post",immediate:!0}),{activatorEl:s,activatorRef:v,activatorEvents:h,contentEvents:d}}function lf2(t,e,n){let{activatorEl:c,activatorEvents:s}=n;R2(()=>t.activator,(o,l)=>{if(l&&o!==l){const u=i(l);u&&a(u)}o&&_4(()=>r())},{immediate:!0}),R2(()=>t.activatorProps,()=>{r()}),Lt(()=>{a()});function r(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;!o||(Object.entries(s.value).forEach(u=>{let[f,h]=u;o.addEventListener(f,h)}),Object.keys(l).forEach(u=>{l[u]==null?o.removeAttribute(u):o.setAttribute(u,l[u])}))}function a(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;!o||(Object.entries(s.value).forEach(u=>{let[f,h]=u;o.removeEventListener(f,h)}),Object.keys(l).forEach(u=>{o.removeAttribute(u)}))}function i(){var o;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t.activator,u;if(l)if(l==="parent"){var f,h;let d=e==null||(f=e.proxy)==null||(h=f.$el)==null?void 0:h.parentNode;for(;d.hasAttribute("data-no-activator");)d=d.parentNode;u=d}else typeof l=="string"?u=document.querySelector(l):"$el"in l?u=l.$el:u=l;return c.value=((o=u)==null?void 0:o.nodeType)===Node.ELEMENT_NODE?u:null,c.value}}const uf2=k2({eager:Boolean},"lazy");function ff2(t,e){const n=q(!1),c=M(()=>n.value||t.eager||e.value);R2(e,()=>n.value=!0);function s(){t.eager||(n.value=!1)}return{isBooted:n,hasContent:c,onAfterLeave:s}}function k8(t,e){return{x:t.x+e.x,y:t.y+e.y}}function hf2(t,e){return{x:t.x-e.x,y:t.y-e.y}}function yh(t,e){if(t.side==="top"||t.side==="bottom"){const{side:n,align:c}=t,s=c==="left"?0:c==="center"?e.width/2:c==="right"?e.width:c,r=n==="top"?0:n==="bottom"?e.height:n;return k8({x:s,y:r},e)}else if(t.side==="left"||t.side==="right"){const{side:n,align:c}=t,s=n==="left"?0:n==="right"?e.width:n,r=c==="top"?0:c==="center"?e.height/2:c==="bottom"?e.height:c;return k8({x:s,y:r},e)}return k8({x:e.width/2,y:e.height/2},e)}const pS={static:vf2,connected:gf2},df2=k2({locationStrategy:{type:[String,Function],default:"static",validator:t=>typeof t=="function"||t in pS},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]});function mf2(t,e){const n=q({}),c=q();let s;Me(async()=>{var a;(a=s)==null||a.stop(),c.value=void 0,f1&&e.isActive.value&&t.locationStrategy&&(s=Wc(),await _4(),s.run(()=>{if(typeof t.locationStrategy=="function"){var i;c.value=(i=t.locationStrategy(e,t,n))==null?void 0:i.updateLocation}else{var o;c.value=(o=pS[t.locationStrategy](e,t,n))==null?void 0:o.updateLocation}}))}),f1&&window.addEventListener("resize",r,{passive:!0}),Lt(()=>{var a;f1&&window.removeEventListener("resize",r),c.value=void 0,(a=s)==null||a.stop()});function r(a){var i;(i=c.value)==null||i.call(c,a)}return{contentStyles:n,updateLocation:c}}function vf2(){}function pf2(t){const e=Ko(t);return e.x-=parseFloat(t.style.left||0),e.y-=parseFloat(t.style.top||0),e}function gf2(t,e,n){const c=S02(t.activatorEl.value);c&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:s,preferredOrigin:r}=Wo(()=>{const d=gi(e.location,t.isRtl.value),v=e.origin==="overlap"?d:e.origin==="auto"?d8(d):gi(e.origin,t.isRtl.value);return d.side===v.side&&d.align===m8(v).align?{preferredAnchor:Nu(d),preferredOrigin:Nu(v)}:{preferredAnchor:d,preferredOrigin:v}}),[a,i,o,l]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>M(()=>{const v=parseFloat(e[d]);return isNaN(v)?1/0:v})),u=M(()=>{if(Array.isArray(e.offset))return e.offset;if(typeof e.offset=="string"){const d=e.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof e.offset=="number"?[e.offset,0]:[0,0]});let f=!1;if(f1){const d=new ResizeObserver(()=>{f&&h()});d.observe(t.activatorEl.value),d.observe(t.contentEl.value),Lt(()=>{d.disconnect()})}function h(){f=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>f=!0)});const d=t.activatorEl.value.getBoundingClientRect(),v=pf2(t.contentEl.value),g=tr(t.contentEl.value),H=12;g.length||(g.push(document.documentElement),t.contentEl.value.style.top&&t.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=g.reduce((O,W)=>{const T=W.getBoundingClientRect(),$=new p6({x:W===document.documentElement?0:T.x,y:W===document.documentElement?0:T.y,width:W.clientWidth,height:W.clientHeight});return O?new p6({x:Math.max(O.left,$.left),y:Math.max(O.top,$.top),width:Math.min(O.right,$.right)-Math.max(O.left,$.left),height:Math.min(O.bottom,$.bottom)-Math.max(O.top,$.top)}):$},void 0);p.x+=H,p.y+=H,p.width-=H*2,p.height-=H*2;let V={anchor:s.value,origin:r.value};function z(O){const W=new p6(v),T=yh(O.anchor,d),$=yh(O.origin,W);let{x:f2,y:m2}=hf2(T,$);switch(O.anchor.side){case"top":m2-=u.value[0];break;case"bottom":m2+=u.value[0];break;case"left":f2-=u.value[0];break;case"right":f2+=u.value[0];break}switch(O.anchor.align){case"top":m2-=u.value[1];break;case"bottom":m2+=u.value[1];break;case"left":f2-=u.value[1];break;case"right":f2+=u.value[1];break}return W.x+=f2,W.y+=m2,W.width=Math.min(W.width,o.value),W.height=Math.min(W.height,l.value),{overflows:Iu(W,p),x:f2,y:m2}}let _=0,b=0;const x={x:0,y:0},L={x:!1,y:!1};let I=-1;for(;;){if(I++>10){Hi("Infinite loop detected in connectedLocationStrategy");break}const{x:O,y:W,overflows:T}=z(V);_+=O,b+=W,v.x+=O,v.y+=W;{const $=ku(V.anchor),f2=T.x.before||T.x.after,m2=T.y.before||T.y.after;let Z=!1;if(["x","y"].forEach(c2=>{if(c2==="x"&&f2&&!L.x||c2==="y"&&m2&&!L.y){const d2={anchor:{...V.anchor},origin:{...V.origin}},J2=c2==="x"?$==="y"?m8:d8:$==="y"?d8:m8;d2.anchor=J2(d2.anchor),d2.origin=J2(d2.origin);const{overflows:Y1}=z(d2);(Y1[c2].before<=T[c2].before&&Y1[c2].after<=T[c2].after||Y1[c2].before+Y1[c2].after<(T[c2].before+T[c2].after)/2)&&(V=d2,Z=L[c2]=!0)}}),Z)continue}T.x.before&&(_+=T.x.before,v.x+=T.x.before),T.x.after&&(_-=T.x.after,v.x-=T.x.after),T.y.before&&(b+=T.y.before,v.y+=T.y.before),T.y.after&&(b-=T.y.after,v.y-=T.y.after);{const $=Iu(v,p);x.x=p.width-$.x.before-$.x.after,x.y=p.height-$.y.before-$.y.after,_+=$.x.before,v.x+=$.x.before,b+=$.y.before,v.y+=$.y.before}break}const A=ku(V.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${V.anchor.side} ${V.anchor.align}`,transformOrigin:`${V.origin.side} ${V.origin.align}`,top:H2(Hh(b)),left:H2(Hh(_)),minWidth:H2(A==="y"?Math.min(a.value,d.width):a.value),maxWidth:H2(Vh(pi(x.x,a.value===1/0?0:a.value,o.value))),maxHeight:H2(Vh(pi(x.y,i.value===1/0?0:i.value,l.value)))})}return R2(()=>[s.value,r.value,e.offset,e.minWidth,e.minHeight,e.maxWidth,e.maxHeight],()=>h(),{immediate:!c}),c&&_4(()=>h()),requestAnimationFrame(()=>{n.value.maxHeight&&h()}),{updateLocation:h}}function Hh(t){return Math.round(t*devicePixelRatio)/devicePixelRatio}function Vh(t){return Math.ceil(t*devicePixelRatio)/devicePixelRatio}let Zi=!0;const Lr=[];function yf2(t){!Zi||Lr.length?(Lr.push(t),e5()):(Zi=!1,t(),e5())}let zh=-1;function e5(){cancelAnimationFrame(zh),zh=requestAnimationFrame(()=>{const t=Lr.shift();t&&t(),Lr.length?e5():Zi=!0})}const t5={none:null,close:zf2,block:Cf2,reposition:Mf2},Hf2=k2({scrollStrategy:{type:[String,Function],default:"block",validator:t=>typeof t=="function"||t in t5}});function Vf2(t,e){if(!f1)return;let n;Me(async()=>{var c;(c=n)==null||c.stop(),e.isActive.value&&t.scrollStrategy&&(n=Wc(),await _4(),n.run(()=>{if(typeof t.scrollStrategy=="function")t.scrollStrategy(e);else{var s;(s=t5[t.scrollStrategy])==null||s.call(t5,e)}}))})}function zf2(t){var e;function n(c){t.isActive.value=!1}gS((e=t.activatorEl.value)!=null?e:t.contentEl.value,n)}function Cf2(t){var e;const n=[...new Set([...tr(t.activatorEl.value),...tr(t.contentEl.value)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),c=window.innerWidth-document.documentElement.offsetWidth,s=(r=>Yo(r)&&r)(((e=t.root.value)==null?void 0:e.offsetParent)||document.documentElement);s&&t.root.value.classList.add("v-overlay--scroll-blocked"),n.forEach((r,a)=>{r.style.setProperty("--v-body-scroll-x",H2(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",H2(-r.scrollTop)),r.style.setProperty("--v-scrollbar-offset",H2(c)),r.classList.add("v-overlay-scroll-blocked")}),Lt(()=>{n.forEach((r,a)=>{const i=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),o=parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-i,r.scrollTop=-o}),s&&t.root.value.classList.remove("v-overlay--scroll-blocked")})}function Mf2(t){var e;let n=!1,c=-1;function s(r){yf2(()=>{var a,i;const o=performance.now();(a=(i=t.updateLocation).value)==null||a.call(i,r),n=(performance.now()-o)/(1e3/60)>2})}gS((e=t.activatorEl.value)!=null?e:t.contentEl.value,r=>{n?(cancelAnimationFrame(c),c=requestAnimationFrame(()=>{c=requestAnimationFrame(()=>{s(r)})})):s(r)})}function gS(t,e){const n=[document,...tr(t)];n.forEach(c=>{c.addEventListener("scroll",e,{passive:!0})}),Lt(()=>{n.forEach(c=>{c.removeEventListener("scroll",e)})})}function yS(t,e){let n;R2(t,c=>{if(c&&!n)n=Wc(),n.run(e);else{var s;(s=n)==null||s.stop(),n=void 0}},{immediate:!0})}const Ch=Symbol.for("vuetify:stack"),zn=j1([]);function bf2(t,e){const n=c4("useStack"),c=B2(Ch,void 0),s=j1({activeChildren:new Set});F1(Ch,s);const r=q(+e.value);yS(t,()=>{var o;const l=(o=zn.at(-1))==null?void 0:o[1];r.value=l?l+10:+e.value,zn.push([n.uid,r.value]),c==null||c.activeChildren.add(n.uid),Lt(()=>{const u=zn.findIndex(f=>f[0]===n.uid);zn.splice(u,1),c==null||c.activeChildren.delete(n.uid)})});const a=q(!0);Me(()=>{var o;const l=((o=zn.at(-1))==null?void 0:o[0])===n.uid;setTimeout(()=>a.value=l)});const i=M(()=>!s.activeChildren.size);return{globalTop:Kc(a),localTop:i,stackStyles:M(()=>({zIndex:r.value}))}}function ec(t){return{teleportTarget:M(()=>{const n=t.value;if(n===!0||!f1)return;const c=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(c==null){hx(`Unable to locate target ${n}`);return}if(!ec.cache.has(c)){const s=document.createElement("div");s.className="v-overlay-container",c.appendChild(s),ec.cache.set(c,s)}return ec.cache.get(c)})}}ec.cache=new WeakMap;function wf2(){return!0}function HS(t,e,n){if(!t||VS(t,n)===!1)return!1;const c=aM(e);if(typeof ShadowRoot<"u"&&c instanceof ShadowRoot&&c.host===t.target)return!1;const s=(typeof n.value=="object"&&n.value.include||(()=>[]))();return s.push(e),!s.some(r=>r==null?void 0:r.contains(t.target))}function VS(t,e){return(typeof e.value=="object"&&e.value.closeConditional||wf2)(t)}function Lf2(t,e,n){const c=typeof n.value=="function"?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&HS(t,e,n)&&setTimeout(()=>{VS(t,n)&&c&&c(t)},0)}function Mh(t,e){const n=aM(t);e(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&e(n)}const Sf2={mounted(t,e){const n=s=>Lf2(s,t,e),c=s=>{t._clickOutside.lastMousedownWasOutside=HS(s,t,e)};Mh(t,s=>{s.addEventListener("click",n,!0),s.addEventListener("mousedown",c,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[e.instance.$.uid]={onClick:n,onMousedown:c}},unmounted(t,e){!t._clickOutside||(Mh(t,n=>{var c;if(!n||!((c=t._clickOutside)!=null&&c[e.instance.$.uid]))return;const{onClick:s,onMousedown:r}=t._clickOutside[e.instance.$.uid];n.removeEventListener("click",s,!0),n.removeEventListener("mousedown",r,!0)}),delete t._clickOutside[e.instance.$.uid])}};function xf2(t){const{modelValue:e,color:n,...c}=t;return m(s3,{name:"fade-transition",appear:!0},{default:()=>[t.modelValue&&m("div",G1({class:["v-overlay__scrim",t.color.backgroundColorClasses.value],style:t.color.backgroundColorStyles.value},c),null)]})}const _f2=N4()({name:"VOverlay",directives:{ClickOutside:Sf2},inheritAttrs:!1,props:{absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...if2(),...W6(),...uf2(),...df2(),...Hf2(),...s4(),...ms()},emits:{"click:outside":t=>!0,"update:modelValue":t=>!0,afterLeave:()=>!0},setup(t,e){let{slots:n,attrs:c,emit:s}=e;const r=F4(t,"modelValue"),a=M({get:()=>r.value,set:Z=>{Z&&t.disabled||(r.value=Z)}}),{teleportTarget:i}=ec(M(()=>t.attach||t.contained)),{themeClasses:o}=u4(t),{rtlClasses:l,isRtl:u}=ds(),{hasContent:f,onAfterLeave:h}=ff2(t,a),d=r3(M(()=>typeof t.scrim=="string"?t.scrim:null)),{globalTop:v,localTop:g,stackStyles:H}=bf2(a,O2(t,"zIndex")),{activatorEl:p,activatorRef:V,activatorEvents:z,contentEvents:_}=of2(t,{isActive:a,isTop:g}),{dimensionStyles:b}=K6(t);R2(()=>t.disabled,Z=>{Z&&(a.value=!1)});const x=q(),L=q(),{contentStyles:I,updateLocation:A}=mf2(t,{isRtl:u,contentEl:L,activatorEl:p,isActive:a});Vf2(t,{root:x,contentEl:L,activatorEl:p,isActive:a,updateLocation:A});function O(Z){s("click:outside",Z),t.persistent?m2():a.value=!1}function W(){return a.value&&v.value}f1&&R2(a,Z=>{Z?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(Z){Z.key==="Escape"&&v.value&&(t.persistent?m2():a.value=!1)}const $=wM();yS(()=>t.closeOnBack,()=>{mr2($,Z=>{v.value&&a.value?(Z(!1),t.persistent?m2():a.value=!1):Z()})});const f2=q();R2(()=>a.value&&(t.absolute||t.contained)&&i.value==null,Z=>{if(Z){const c2=b02(x.value);c2&&c2!==document.scrollingElement&&(f2.value=c2.scrollTop)}});function m2(){var Z;t.noClickAnimation||(Z=L.value)==null||Z.animate([{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:er})}return D2(()=>{var Z,c2;return m(c1,null,[(Z=n.activator)==null?void 0:Z.call(n,{isActive:a.value,props:G1({ref:V},ql(z.value),t.activatorProps)}),f1&&m(a_,{disabled:!i.value,to:i.value},{default:()=>[f.value&&m("div",G1({class:["v-overlay",{"v-overlay--absolute":t.absolute||t.contained,"v-overlay--active":a.value,"v-overlay--contained":t.contained},o.value,l.value],style:[H.value,{top:H2(f2.value)}],ref:x},c),[m(xf2,{color:d,modelValue:a.value&&!!t.scrim},null),m(Je,{appear:!0,persisted:!0,transition:t.transition,target:p.value,onAfterLeave:()=>{h(),s("afterLeave")}},{default:()=>[e4(m("div",G1({ref:L,class:["v-overlay__content",t.contentClass],style:[b.value,I.value]},ql(_.value),t.contentProps),[(c2=n.default)==null?void 0:c2.call(n,{isActive:a})]),[[m3,a.value],[U6("click-outside"),{handler:O,closeConditional:W,include:()=>[p.value]}]])]})])]})])}),{activatorEl:p,animateClick:m2,contentEl:L,globalTop:v,localTop:g,updateLocation:A}}});function Nf2(){const e=c4("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}const kf2=N4()({name:"VMenu",inheritAttrs:!1,props:{modelValue:Boolean,id:String,...ms({transition:{component:Lr2}})},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:c}=e;const s=F4(t,"modelValue"),{scopeId:r}=Nf2(),a=T3(),i=M(()=>t.id||`v-menu-${a}`),o=q(),l=B2(Ji,null);let u=0;F1(Ji,{register(){++u},unregister(){--u},closeParents(){setTimeout(()=>{u||(s.value=!1,l==null||l.closeParents())},40)}}),R2(s,h=>{h?l==null||l.register():l==null||l.unregister()});function f(){l==null||l.closeParents()}return D2(()=>m(_f2,G1({ref:o,modelValue:s.value,"onUpdate:modelValue":h=>s.value=h,class:["v-menu"],transition:t.transition,absolute:!0,closeOnContentClick:!0,locationStrategy:"connected",scrollStrategy:"reposition",scrim:!1,openDelay:"300",closeDelay:"250",activatorProps:{"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":i.value},"onClick:outside":f},r,n),{default:c.default,activator:c.activator})),qM({id:i},o)}});const n5=Symbol.for("vuetify:display"),bh={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},If2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:bh;return x3(bh,t)};function wh(t){return f1&&!t?window.innerWidth:0}function Lh(t){return f1&&!t?window.innerHeight:0}function Af2(){const t=f1?window.navigator.userAgent:"ssr";function e(v){return Boolean(t.match(v))}const n=e(/android/i),c=e(/iphone|ipad|ipod/i),s=e(/cordova/i),r=e(/electron/i),a=e(/chrome/i),i=e(/edge/i),o=e(/firefox/i),l=e(/opera/i),u=e(/win/i),f=e(/mac/i),h=e(/linux/i),d=e(/ssr/i);return{android:n,ios:c,cordova:s,electron:r,chrome:a,edge:i,firefox:o,opera:l,win:u,mac:f,linux:h,touch:w02,ssr:d}}function Tf2(t,e){const{thresholds:n,mobileBreakpoint:c}=If2(t),s=q(Lh(e)),r=Af2(),a=j1({}),i=q(wh(e));function o(){s.value=Lh(),i.value=wh()}return e&&_4(()=>o()),Me(()=>{const l=i.value<n.sm,u=i.value<n.md&&!l,f=i.value<n.lg&&!(u||l),h=i.value<n.xl&&!(f||u||l),d=i.value<n.xxl&&!(h||f||u||l),v=i.value>=n.xxl,g=l?"xs":u?"sm":f?"md":h?"lg":d?"xl":"xxl",H=typeof c=="number"?c:n[c],p=r.ssr?r.android||r.ios||r.opera:i.value<H;a.xs=l,a.sm=u,a.md=f,a.lg=h,a.xl=d,a.xxl=v,a.smAndUp=!l,a.mdAndUp=!(l||u),a.lgAndUp=!(l||u||f),a.xlAndUp=!(l||u||f||h),a.smAndDown=!(f||h||d||v),a.mdAndDown=!(h||d||v),a.lgAndDown=!(d||v),a.xlAndDown=!v,a.name=g,a.height=s.value,a.width=i.value,a.mobile=p,a.mobileBreakpoint=c,a.platform=r,a.thresholds=n}),f1&&window.addEventListener("resize",o,{passive:!0}),nd(a)}function Ef2(){const t=B2(n5);if(!t)throw new Error("Could not find Vuetify display injection");return t}const Sh=Symbol.for("vuetify:locale-adapter"),h0=Symbol.for("vuetify:locale");function Pf2(t){return!!t&&t.hasOwnProperty("getScope")&&t.hasOwnProperty("createScope")&&t.hasOwnProperty("createRoot")}function Df2(t,e){const n=Pf2(e)?e:Ff2(e),c=n.createRoot(t);return t==null||t.provide(n7,ur2(c,e)),n}const xh="$vuetify.",_h=(t,e)=>t.replace(/\{(\d+)\}/g,(n,c)=>String(e[+c])),Rf2=(t,e,n)=>function(c){for(var s=arguments.length,r=new Array(s>1?s-1:0),a=1;a<s;a++)r[a-1]=arguments[a];if(!c.startsWith(xh))return _h(c,r);const i=c.replace(xh,""),o=t.value&&n.value[t.value],l=e.value&&n.value[e.value];let u=mi(o,i,null);return u||(g6(`Translation key "${c}" not found in "${t.value}", trying fallback locale`),u=mi(l,i,null)),u||(Hi(`Translation key "${c}" not found in fallback`),u=c),typeof u!="string"&&(Hi(`Translation key "${c}" has a non-string value`),u=c),_h(u,r)};function Of2(t,e){return(n,c)=>new Intl.NumberFormat([t.value,e.value],c).format(n)}function Ff2(t){const e=n=>{const c=q(n.current),s=q(n.fallback),r=q(n.messages);return{current:c,fallback:s,messages:r,t:Rf2(c,s,r),n:Of2(c,s)}};return{createRoot:n=>{var c,s,r;const a=e({current:(c=t==null?void 0:t.defaultLocale)!=null?c:"en",fallback:(s=t==null?void 0:t.fallbackLocale)!=null?s:"en",messages:(r=t==null?void 0:t.messages)!=null?r:{en:or2}});if(!n)throw new Error("[Vuetify] Could not find default app instance");return n.provide(h0,a),a},getScope:()=>{const n=B2(h0);if(!n)throw new Error("[Vuetify] Could not find injected locale instance");return n},createScope:n=>{const c=B2(h0);if(!c)throw new Error("[Vuetify] Could not find injected locale instance");const s=e({current:M(()=>{var r;return(r=n==null?void 0:n.locale)!=null?r:c.current.value}),fallback:M(()=>{var r;return(r=n==null?void 0:n.locale)!=null?r:c.fallback.value}),messages:M(()=>{var r;return(r=n==null?void 0:n.messages)!=null?r:c.messages.value})});return F1(h0,s),s}}}function zS(){const t=q(!1);return _t(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:M(()=>t.value?void 0:{transition:"none !important"}),isBooted:Kc(t)}}const Bf2=100,$f2=20;function Nh(t){const e=1.41421356237;return(t<0?-1:1)*Math.sqrt(Math.abs(t))*e}function kh(t){if(t.length<2)return 0;if(t.length===2)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const c=Nh(e),s=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(s-c)*Math.abs(s),n===t.length-1&&(e*=.5)}return Nh(e)*1e3}function Uf2(){const t={};function e(s){Array.from(s.changedTouches).forEach(r=>{var a;((a=t[r.identifier])!=null?a:t[r.identifier]=new s02($f2)).push([s.timeStamp,r])})}function n(s){Array.from(s.changedTouches).forEach(r=>{delete t[r.identifier]})}function c(s){var r;const a=(r=t[s])==null?void 0:r.values().reverse();if(!a)throw new Error(`No samples for touch id ${s}`);const i=a[0],o=[],l=[];for(const u of a){if(i[0]-u[0]>Bf2)break;o.push({t:u[0],d:u[1].clientX}),l.push({t:u[0],d:u[1].clientY})}return{x:kh(o),y:kh(l),get direction(){const{x:u,y:f}=this,[h,d]=[Math.abs(u),Math.abs(f)];return h>d&&u>=0?"right":h>d&&u<=0?"left":d>h&&f>=0?"down":d>h&&f<=0?"up":qf2()}}}return{addMovement:e,endTouch:n,getVelocity:c}}function qf2(){throw new Error}function jf2(t){let{isActive:e,isTemporary:n,width:c,touchless:s,position:r}=t;_t(()=>{window.addEventListener("touchstart",p,{passive:!0}),window.addEventListener("touchmove",V,{passive:!1}),window.addEventListener("touchend",z,{passive:!0})}),B4(()=>{window.removeEventListener("touchstart",p),window.removeEventListener("touchmove",V),window.removeEventListener("touchend",z)});const a=M(()=>r.value!=="bottom"),{addMovement:i,endTouch:o,getVelocity:l}=Uf2();let u=!1;const f=q(!1),h=q(0),d=q(0);let v;function g(b,x){return(r.value==="left"?b:r.value==="right"?document.documentElement.clientWidth-b:r.value==="bottom"?document.documentElement.clientHeight-b:Jt())-(x?c.value:0)}function H(b){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const L=r.value==="left"?(b-d.value)/c.value:r.value==="right"?(document.documentElement.clientWidth-b-d.value)/c.value:r.value==="bottom"?(document.documentElement.clientHeight-b-d.value)/c.value:Jt();return x?Math.max(0,Math.min(1,L)):L}function p(b){if(s.value)return;const x=b.changedTouches[0].clientX,L=b.changedTouches[0].clientY,I=25,A=r.value==="left"?x<I:r.value==="right"?x>document.documentElement.clientWidth-I:r.value==="bottom"?L>document.documentElement.clientHeight-I:Jt(),O=e.value&&(r.value==="left"?x<c.value:r.value==="right"?x>document.documentElement.clientWidth-c.value:r.value==="bottom"?L>document.documentElement.clientHeight-c.value:Jt());(A||O||e.value&&n.value)&&(u=!0,v=[x,L],d.value=g(a.value?x:L,e.value),h.value=H(a.value?x:L),o(b),i(b))}function V(b){const x=b.changedTouches[0].clientX,L=b.changedTouches[0].clientY;if(u){if(!b.cancelable){u=!1;return}const A=Math.abs(x-v[0]),O=Math.abs(L-v[1]);(a.value?A>O&&A>3:O>A&&O>3)?(f.value=!0,u=!1):(a.value?O:A)>3&&(u=!1)}if(!f.value)return;b.preventDefault(),i(b);const I=H(a.value?x:L,!1);h.value=Math.max(0,Math.min(1,I)),I>1?d.value=g(a.value?x:L,!0):I<0&&(d.value=g(a.value?x:L,!1))}function z(b){if(u=!1,!f.value)return;i(b),f.value=!1;const x=l(b.changedTouches[0].identifier),L=Math.abs(x.x),I=Math.abs(x.y);(a.value?L>I&&L>400:I>L&&I>3)?e.value=x.direction===({left:"right",right:"left",bottom:"up"}[r.value]||Jt()):e.value=h.value>.5}const _=M(()=>f.value?{transform:r.value==="left"?`translateX(calc(-100% + ${h.value*c.value}px))`:r.value==="right"?`translateX(calc(100% - ${h.value*c.value}px))`:r.value==="bottom"?`translateY(calc(100% - ${h.value*c.value}px))`:Jt(),transition:"none"}:void 0);return{isDragging:f,dragProgress:h,dragStyles:_}}function Jt(){throw new Error}const Gf2=["start","end","left","right","bottom"],Wf2=S2({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:t=>Gf2.includes(t)},...At(),...Pt(),...Ru2(),...E3(),...T1({tag:"nav"}),...s4()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:c}=e;const{themeClasses:s}=u4(t),{borderClasses:r}=Tt(t),{backgroundColorClasses:a,backgroundColorStyles:i}=r3(O2(t,"color")),{elevationClasses:o}=Dt(t),{mobile:l}=Ef2(),{roundedClasses:u}=P3(t),f=wM(),h=F4(t,"modelValue",null,$=>!!$),d=q(!1),{ssrBootStyles:v}=zS(),g=M(()=>t.rail&&t.expandOnHover&&d.value?Number(t.width):Number(t.rail?t.railWidth:t.width)),H=M(()=>!t.permanent&&(l.value||t.temporary));t.disableResizeWatcher||R2(H,$=>!t.permanent&&(h.value=!$)),!t.disableRouteWatcher&&f&&R2(f.currentRoute,()=>H.value&&(h.value=!1)),R2(()=>t.permanent,$=>{$&&(h.value=!0)}),Pr(()=>{t.modelValue!=null||H.value||(h.value=t.permanent||!l.value)});const p=q(),{isRtl:V}=ds(),z=M(()=>yi(t.location,V.value)),{isDragging:_,dragProgress:b,dragStyles:x}=jf2({isActive:h,isTemporary:H,width:g,touchless:O2(t,"touchless"),position:z}),L=M(()=>{const $=H.value?0:t.rail&&t.expandOnHover?Number(t.railWidth):g.value;return _.value?$*b.value:$}),{layoutItemStyles:I,layoutRect:A,layoutItemScrimStyles:O}=Fu2({id:t.name,order:M(()=>parseInt(t.order,10)),position:z,layoutSize:L,elementSize:g,active:M(()=>h.value||_.value),disableTransitions:M(()=>_.value),absolute:O2(t,"absolute")}),W=r3(M(()=>typeof t.scrim=="string"?t.scrim:null)),T=M(()=>({..._.value?{opacity:b.value*.2,transition:"none"}:void 0,...A.value?{left:H2(A.value.left),right:H2(A.value.right),top:H2(A.value.top),bottom:H2(A.value.bottom)}:void 0,...O.value}));return It({VList:{bgColor:"transparent"}}),D2(()=>{var $,f2,m2,Z;const c2=c.image||t.image;return m(c1,null,[m(t.tag,G1({ref:p,onMouseenter:()=>d.value=!0,onMouseleave:()=>d.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${z.value}`,{"v-navigation-drawer--expand-on-hover":t.expandOnHover,"v-navigation-drawer--floating":t.floating,"v-navigation-drawer--is-hovering":d.value,"v-navigation-drawer--rail":t.rail,"v-navigation-drawer--temporary":H.value,"v-navigation-drawer--active":h.value},s.value,a.value,r.value,o.value,u.value],style:[i.value,I.value,x.value,v.value]},n),{default:()=>[c2&&m("div",{key:"image",class:"v-navigation-drawer__img"},[c.image?($=c.image)==null?void 0:$.call(c,{image:t.image}):m("img",{src:t.image,alt:""},null)]),c.prepend&&m("div",{class:"v-navigation-drawer__prepend"},[(f2=c.prepend)==null?void 0:f2.call(c)]),m("div",{class:"v-navigation-drawer__content"},[(m2=c.default)==null?void 0:m2.call(c)]),c.append&&m("div",{class:"v-navigation-drawer__append"},[(Z=c.append)==null?void 0:Z.call(c)])]}),m(s3,{name:"fade-transition"},{default:()=>[H.value&&(_.value||h.value)&&!!t.scrim&&m("div",{class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[T.value,W.backgroundColorStyles.value],onClick:()=>h.value=!1},null)]})])}),{}}}),Kf2={class:"nav-menu"},Qf2=w("h1",{class:"noble-title"},"Final Laboratory",-1),Yf2=w("span",{class:"white--text text-h5"},"PJ",-1),Xf2={center:"",class:"logo"},Jf2=["src"],Zf2={__name:"NavBar",setup(t){const e=q(!1);let n;_t(()=>{n=b6(),bC(n,i=>{i?e.value=!0:e.value=!1})});const c=()=>{Pn2(n).then(()=>{Ll.push("/")})},s=q(!1),r=q([{title:"Dashboard",icon:"mdi-view-dashboard",path:"/Dashboard"},{title:"Basic Math",icon:"mdi-calculator",path:"/basicMath"},{title:"String App",icon:"mdi-code-string",path:"/stringApp"},{title:"Quiz App",icon:"mdi-comment-question-outline",path:"/axiosQuiz"},{title:"About Vuetify",icon:"mdi-receipt",path:"/aboutVuetify"},{title:"About Me",icon:"mdi-account",path:"/aboutMe"},{title:"About Apps",icon:"mdi-apps",path:"/aboutProject"}]);function a(){return s.value=!s.value}return(i,o)=>{const l=$6("center");return E2(),o1("nav",Kf2,[m(Pu2,{color:"#41B883",class:"toolbar",app:""},{default:P(()=>[m(Uu2,{onClick:a,class:"toggledrawer"}),m(rS,null,{default:P(()=>[Qf2]),_:1}),m(a6),m(kf2,{"open-on-hover":""},{activator:P(({props:u})=>[m(S6,{color:"black"},{default:P(()=>[Yf2]),_:1}),m(S6),e.value?(E2(),o1("button",{key:0,class:"signout",onClick:c,icon:"fa-solid fa-right-to-bracket"},"Sign Out")):b5("",!0)]),default:P(()=>[m(af2,null,{default:P(()=>[(E2(!0),o1(c1,null,E0(r.value,(u,f)=>(E2(),c3(wr,{key:f,router:"",to:u.path,"prepend-icon":u.icon},{default:P(()=>[m(Xi,null,{default:P(()=>[w2(T2(u.title),1)]),_:2},1024)]),_:2},1032,["to","prepend-icon"]))),128))]),_:1})]),_:1})]),_:1}),m(Wf2,{color:"#34495E",modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=u=>s.value=u)},{default:P(()=>[w("aside",{class:jc(`${i.is_expanded?"is-expanded":""}`)},[m(l,null,{default:P(()=>[w("div",Xf2,[w("img",{src:F2(Ct2),alt:"Vue"},null,8,Jf2)])]),_:1}),(E2(!0),o1(c1,null,E0(r.value,u=>(E2(),c3(wr,{color:"white",key:u.title,router:"",to:u.path,"prepend-icon":u.icon,class:"items"},{default:P(()=>[m(Xi,null,{default:P(()=>[w2(T2(u.title),1)]),_:2},1024)]),_:2},1032,["to","prepend-icon"]))),128))],2)]),_:1},8,["modelValue"])])}}};const eh2=S2({name:"VApp",props:{...Du2({fullHeight:!0}),...s4()},setup(t,e){let{slots:n}=e;const c=u4(t),{layoutClasses:s,layoutStyles:r,getLayoutItem:a,items:i,layoutRef:o}=$u2(t),{rtlClasses:l}=ds();return D2(()=>{var u;return m("div",{ref:o,class:["v-application",c.themeClasses.value,s.value,l.value],style:r.value},[m("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:a,items:i,theme:c}}});const th2=S2({name:"VMain",props:{scrollable:Boolean,...T1({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:c}=Ou2(),{ssrBootStyles:s}=zS();return D2(()=>{var r,a;return m(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[c.value,s.value]},{default:()=>[t.scrollable?m("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(a=n.default)==null?void 0:a.call(n)]})}),{}}}),nh2={__name:"App",setup(t){return(e,n)=>{const c=$6("router-view");return E2(),c3(eh2,{class:"body"},{default:P(()=>[m(th2,null,{default:P(()=>[m(Zf2),m(c)]),_:1})]),_:1})}}};const ch2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{install:n=>{const{blueprint:c,...s}=t,r=x3(c,s),{aliases:a={},components:i={},directives:o={}}=r;for(const h in o)n.directive(h,o[h]);for(const h in i)n.component(h,i[h]);for(const h in a)n.component(h,S2({...a[h],name:h}));function l(h){n.provide(Cc,V02(r.defaults)),n.provide(n5,Tf2(r.display,h)),n.provide(nr,D02(n,r.theme)),n.provide(Vi,J02(r.icons)),n.provide(Sh,Df2(n,r.locale))}f1||l(),T3.reset();const u=n.mount;n.mount=(h,d,v)=>{l(d);const g=u(h,d,v);return n.mount=u,g};function f(h){var d,v,g;const H=this.$,p=(d=(v=H.parent)==null?void 0:v.provides)!=null?d:(g=H.vnode.appContext)==null?void 0:g.provides;if(p&&h in p)return p[h]}n.mixin({computed:{$vuetify(){return j1({defaults:f.call(this,Cc),display:f.call(this,n5),theme:f.call(this,nr),icons:f.call(this,Vi),locale:f.call(this,Sh),rtl:f.call(this,n7)})}}})}}},sh2=ch2();Ok.add(ft2);rN(nh2).use(Ll).use(sh2).component("fa",zt2).mount("#app");