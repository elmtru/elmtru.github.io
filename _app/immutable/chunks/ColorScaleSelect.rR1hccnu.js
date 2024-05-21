import{s as ne,e as A,a as te,b as S,d as j,f as re,g as y,h as d,Q as b,i as H,j as z,p as J,M as ke,H as pe,E as ve,N as Me,O as be,P as we,w as I,I as Q,J as W,X,A as Ne}from"./scheduler.JiC8KFoJ.js";import{S as le,i as ie,b as Y,c as ae,d as se,m as oe,t as ce,a as ue,e as fe}from"./index.C8QghjAH.js";import{g as he,a as me}from"./spread.CgU5AtxT.js";import{j as v,k as G,m as Ae,n as Se,o as je,p as K}from"./index.BCZaT-VP.js";import{c as ze,r as L,d as w,v as Ie}from"./PeriodicTable.C6ndjX78.js";import{M as Ee}from"./MultiSelect.BMRmR-Ge.js";import{e as U}from"./each.A9v7PxhN.js";import"./ru.DgAhZWaC.js";function Ve(n){return Math.max(0,-v(Math.abs(n)))}function Pe(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(v(e)/3)))*3-v(Math.abs(n)))}function Re(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,v(e)-v(n))+1}function qe(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),o;return function(a){for(o=0;o<t;++o)r[o]=n[o]*(1-a)+e[o]*a;return r}}function Be(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ce(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,o=new Array(r),a=new Array(t),i;for(i=0;i<r;++i)o[i]=T(n[i],e[i]);for(;i<t;++i)a[i]=e[i];return function(s){for(i=0;i<r;++i)a[i]=o[i](s);return a}}function De(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function E(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function Fe(n,e){var t={},r={},o;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in n?t[o]=T(n[o],e[o]):r[o]=e[o];return function(a){for(o in t)r[o]=t[o](a);return r}}var D=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,C=new RegExp(D.source,"g");function Oe(n){return function(){return n}}function He(n){return function(e){return n(e)+""}}function Te(n,e){var t=D.lastIndex=C.lastIndex=0,r,o,a,i=-1,s=[],c=[];for(n=n+"",e=e+"";(r=D.exec(n))&&(o=C.exec(e));)(a=o.index)>t&&(a=e.slice(t,a),s[i]?s[i]+=a:s[++i]=a),(r=r[0])===(o=o[0])?s[i]?s[i]+=o:s[++i]=o:(s[++i]=null,c.push({i,x:E(r,o)})),t=C.lastIndex;return t<e.length&&(a=e.slice(t),s[i]?s[i]+=a:s[++i]=a),s.length<2?c[0]?He(c[0].x):Oe(e):(e=c.length,function(l){for(var u=0,f;u<e;++u)s[(f=c[u]).i]=f.x(l);return s.join("")})}function T(n,e){var t=typeof e,r;return e==null||t==="boolean"?ze(e):(t==="number"?E:t==="string"?(r=G(e))?(e=r,L):Te:e instanceof G?L:e instanceof Date?De:Be(e)?qe:Array.isArray(e)?Ce:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Fe:E)(n,e)}function Je(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function N(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function Qe(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function _e(n){let e,t,r;n.length!==2?(e=N,t=(s,c)=>N(n(s),c),r=(s,c)=>n(s)-c):(e=n===N||n===Qe?n:We,t=n,r=n);function o(s,c,l=0,u=s.length){if(l<u){if(e(c,c)!==0)return u;do{const f=l+u>>>1;t(s[f],c)<0?l=f+1:u=f}while(l<u)}return l}function a(s,c,l=0,u=s.length){if(l<u){if(e(c,c)!==0)return u;do{const f=l+u>>>1;t(s[f],c)<=0?l=f+1:u=f}while(l<u)}return l}function i(s,c,l=0,u=s.length){const f=o(s,c,l,u-1);return f>l&&r(s[f-1],c)>-r(s[f],c)?f-1:f}return{left:o,center:i,right:a}}function We(){return 0}function Xe(n){return n===null?NaN:+n}const Ye=_e(N),Ge=Ye.right;_e(Xe).center;const Ke=Math.sqrt(50),Le=Math.sqrt(10),Ue=Math.sqrt(2);function V(n,e,t){const r=(e-n)/Math.max(0,t),o=Math.floor(Math.log10(r)),a=r/Math.pow(10,o),i=a>=Ke?10:a>=Le?5:a>=Ue?2:1;let s,c,l;return o<0?(l=Math.pow(10,-o)/i,s=Math.round(n*l),c=Math.round(e*l),s/l<n&&++s,c/l>e&&--c,l=-l):(l=Math.pow(10,o)*i,s=Math.round(n/l),c=Math.round(e/l),s*l<n&&++s,c*l>e&&--c),c<s&&.5<=t&&t<2?V(n,e,t*2):[s,c,l]}function Ze(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const r=e<n,[o,a,i]=r?V(e,n,t):V(n,e,t);if(!(a>=o))return[];const s=a-o+1,c=new Array(s);if(r)if(i<0)for(let l=0;l<s;++l)c[l]=(a-l)/-i;else for(let l=0;l<s;++l)c[l]=(a-l)*i;else if(i<0)for(let l=0;l<s;++l)c[l]=(o+l)/-i;else for(let l=0;l<s;++l)c[l]=(o+l)*i;return c}function F(n,e,t){return e=+e,n=+n,t=+t,V(n,e,t)[2]}function xe(n,e,t){e=+e,n=+n,t=+t;const r=e<n,o=r?F(e,n,t):F(n,e,t);return(r?-1:1)*(o<0?1/-o:o)}function $e(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function en(n){return function(){return n}}function nn(n){return+n}var Z=[0,1];function p(n){return n}function O(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:en(isNaN(e)?NaN:.5)}function tn(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function rn(n,e,t){var r=n[0],o=n[1],a=e[0],i=e[1];return o<r?(r=O(o,r),a=t(i,a)):(r=O(r,o),a=t(a,i)),function(s){return a(r(s))}}function ln(n,e,t){var r=Math.min(n.length,e.length)-1,o=new Array(r),a=new Array(r),i=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++i<r;)o[i]=O(n[i],n[i+1]),a[i]=t(e[i],e[i+1]);return function(s){var c=Ge(n,s,1,r)-1;return a[c](o[c](s))}}function an(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function sn(){var n=Z,e=Z,t=T,r,o,a,i=p,s,c,l;function u(){var h=Math.min(n.length,e.length);return i!==p&&(i=tn(n[0],n[h-1])),s=h>2?ln:rn,c=l=null,f}function f(h){return h==null||isNaN(h=+h)?a:(c||(c=s(n.map(r),e,t)))(r(i(h)))}return f.invert=function(h){return i(o((l||(l=s(e,n.map(r),E)))(h)))},f.domain=function(h){return arguments.length?(n=Array.from(h,nn),u()):n.slice()},f.range=function(h){return arguments.length?(e=Array.from(h),u()):e.slice()},f.rangeRound=function(h){return e=Array.from(h),t=Je,u()},f.clamp=function(h){return arguments.length?(i=h?!0:p,u()):i!==p},f.interpolate=function(h){return arguments.length?(t=h,u()):t},f.unknown=function(h){return arguments.length?(a=h,f):a},function(h,g){return r=h,o=g,u()}}function on(){return sn()(p,p)}function cn(n,e,t,r){var o=xe(n,e,t),a;switch(r=Ae(r??",f"),r.type){case"s":{var i=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(a=Pe(o,i))&&(r.precision=a),Se(r,i)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=Re(o,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=Ve(o))&&(r.precision=a-(r.type==="%")*2);break}}return je(r)}function un(n){var e=n.domain;return n.ticks=function(t){var r=e();return Ze(r[0],r[r.length-1],t??10)},n.tickFormat=function(t,r){var o=e();return cn(o[0],o[o.length-1],t??10,r)},n.nice=function(t){t==null&&(t=10);var r=e(),o=0,a=r.length-1,i=r[o],s=r[a],c,l,u=10;for(s<i&&(l=i,i=s,s=l,l=o,o=a,a=l);u-- >0;){if(l=F(i,s,t),l===c)return r[o]=i,r[a]=s,e(r);if(l>0)i=Math.floor(i/l)*l,s=Math.ceil(s/l)*l;else if(l<0)i=Math.ceil(i*l)/l,s=Math.floor(s*l)/l;else break;c=l}return n},n}function ge(){var n=on();return n.copy=function(){return an(n,ge())},$e.apply(n,arguments),un(n)}function x(n,e,t){const r=n.slice();return r[18]=e[t],r[20]=t,r}function $(n){let e,t;return{c(){e=A("span"),t=new pe(!1),this.h()},l(r){e=S(r,"SPAN",{style:!0});var o=j(e);t=ve(o,!1),o.forEach(y),this.h()},h(){t.a=null,d(e,"style",n[3])},m(r,o){H(r,e,o),t.m(n[1],e)},p(r,o){o&2&&t.p(r[1]),o&8&&d(e,"style",r[3])},d(r){r&&y(e)}}}function ee(n){let e,t=K(n[18])+"",r,o,a;return{c(){e=A("span"),r=Me(t),o=te(),this.h()},l(i){e=S(i,"SPAN",{style:!0,class:!0});var s=j(e);r=be(s,t),o=re(s),s.forEach(y),this.h()},h(){var i;d(e,"style",a="left: calc(100% * "+n[20]+" / "+(((i=n[0])==null?void 0:i.length)-1)+"); "+n[5]),d(e,"class","svelte-wfky5z")},m(i,s){H(i,e,s),z(e,r),z(e,o)},p(i,s){var c;s&1&&t!==(t=K(i[18])+"")&&we(r,t),s&33&&a!==(a="left: calc(100% * "+i[20]+" / "+(((c=i[0])==null?void 0:c.length)-1)+"); "+i[5])&&d(e,"style",a)},d(i){i&&y(e)}}}function fn(n){let e,t,r,o=`linear-gradient(${n[8]}, ${n[7]})`,a=n[1]&&$(n),i=U(n[0]||[]),s=[];for(let c=0;c<i.length;c+=1)s[c]=ee(x(n,i,c));return{c(){e=A("div"),a&&a.c(),t=te(),r=A("div");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){e=S(c,"DIV",{style:!0,class:!0});var l=j(e);a&&a.l(l),t=re(l),r=S(l,"DIV",{style:!0,class:!0});var u=j(r);for(let f=0;f<s.length;f+=1)s[f].l(u);u.forEach(y),l.forEach(y),this.h()},h(){d(r,"style",n[2]),d(r,"class","svelte-wfky5z"),b(r,"background",o),d(e,"style",n[4]),d(e,"class","colorbar svelte-wfky5z"),b(e,"flex-direction",n[6])},m(c,l){H(c,e,l),a&&a.m(e,null),z(e,t),z(e,r);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(r,null)},p(c,[l]){if(c[1]?a?a.p(c,l):(a=$(c),a.c(),a.m(e,t)):a&&(a.d(1),a=null),l&33){i=U(c[0]||[]);let h;for(h=0;h<i.length;h+=1){const g=x(c,i,h);s[h]?s[h].p(g,l):(s[h]=ee(g),s[h].c(),s[h].m(r,null))}for(;h<s.length;h+=1)s[h].d(1);s.length=i.length}l&4&&d(r,"style",c[2]);const u=l&4;(l&388&&o!==(o=`linear-gradient(${c[8]}, ${c[7]})`)||u)&&b(r,"background",o),l&16&&d(e,"style",c[4]);const f=l&16;(l&80||f)&&b(e,"flex-direction",c[6])},i:J,o:J,d(c){c&&y(e),a&&a.d(),ke(s,c)}}}function hn(n,e,t){let r,o,a,i,{label:s=null}=e,{color_scale:c="Viridis"}=e,{label_side:l="left"}=e,{style:u=null}=e,{label_style:f=null}=e,{wrapper_style:h=null}=e,{tick_labels:g=0}=e,{range:_=[0,1]}=e,{tick_side:P="bottom"}=e,{orientation:R="horizontal"}=e,{snap_ticks:q=!0}=e,{steps:M=50}=e,{nice_range:B=_}=e;const de=Object.keys(w).map(m=>m.split("interpolate")[1]).filter(Boolean).join(", ");return n.$$set=m=>{"label"in m&&t(1,s=m.label),"color_scale"in m&&t(9,c=m.color_scale),"label_side"in m&&t(11,l=m.label_side),"style"in m&&t(2,u=m.style),"label_style"in m&&t(3,f=m.label_style),"wrapper_style"in m&&t(4,h=m.wrapper_style),"tick_labels"in m&&t(0,g=m.tick_labels),"range"in m&&t(12,_=m.range),"tick_side"in m&&t(13,P=m.tick_side),"orientation"in m&&t(14,R=m.orientation),"snap_ticks"in m&&t(15,q=m.snap_ticks),"steps"in m&&t(16,M=m.steps),"nice_range"in m&&t(10,B=m.nice_range)},n.$$.update=()=>{if(n.$$.dirty&36865&&((g==null?void 0:g.length)==0||typeof g=="number"||(_==null?void 0:_.length)>0)){const m=Array.isArray(g)?5:g;if(q){const k=ge().domain(_).nice(m);t(0,g=k.ticks(m)),t(10,B=k.domain())}else t(0,g=[...Array(m).keys()].map(k=>{const ye=k/(m-1);return _[0]+ye*(_[1]-_[0])}))}n.$$.dirty&512&&typeof c=="string"&&(`interpolate${c}`in w?t(9,c=w[`interpolate${c}`]):(console.error(`Color scale '${c}' not found, supported color scale names are ${de}. Falling back on 'Viridis'.`),t(9,c=Ie))),n.$$.dirty&16384&&t(8,r={horizontal:"to right",vertical:"to bottom"}[R]),n.$$.dirty&66048&&t(7,o=[...Array(M).keys()].map((m,k)=>c==null?void 0:c(k/M))),n.$$.dirty&2048&&t(6,a={left:"row",right:"row-reverse",top:"column",bottom:"column-reverse"}[l]),n.$$.dirty&8192&&t(5,i={bottom:"top: 100%",top:"bottom: 100%",center:"top: 50%; transform: translateY(-50%)"}[P])},[g,s,u,f,h,i,a,o,r,c,B,l,_,P,R,q,M]}class mn extends le{constructor(e){super(),ie(this,e,hn,fn,ne,{label:1,color_scale:9,label_side:11,style:2,label_style:3,wrapper_style:4,tick_labels:0,range:12,tick_side:13,orientation:14,snap_ticks:15,steps:16,nice_range:10})}}function _n(n){let e,t;const r=[{label:n[10]},{color_scale:n[10]},n[4],{wrapper_style:n[6]}];let o={};for(let a=0;a<r.length;a+=1)o=I(o,r[a]);return e=new mn({props:o}),{c(){ae(e.$$.fragment)},l(a){se(e.$$.fragment,a)},m(a,i){oe(e,a,i),t=!0},p(a,i){const s=i&1104?he(r,[i&1024&&{label:a[10]},i&1024&&{color_scale:a[10]},i&16&&me(a[4]),i&64&&{wrapper_style:a[6]}]):{};e.$set(s)},i(a){t||(ce(e.$$.fragment,a),t=!0)},o(a){ue(e.$$.fragment,a),t=!1},d(a){fe(e,a)}}}function gn(n){let e,t,r,o;const a=[{options:n[5]},{maxSelect:1},{minSelect:n[2]},{placeholder:n[3]},n[7]];function i(l){n[8](l)}function s(l){n[9](l)}let c={$$slots:{default:[_n,({option:l})=>({10:l}),({option:l})=>l?1024:0]},$$scope:{ctx:n}};for(let l=0;l<a.length;l+=1)c=I(c,a[l]);return n[0]!==void 0&&(c.value=n[0]),n[1]!==void 0&&(c.selected=n[1]),e=new Ee({props:c}),Q.push(()=>Y(e,"value",i)),Q.push(()=>Y(e,"selected",s)),{c(){ae(e.$$.fragment)},l(l){se(e.$$.fragment,l)},m(l,u){oe(e,l,u),o=!0},p(l,[u]){const f=u&172?he(a,[u&32&&{options:l[5]},a[1],u&4&&{minSelect:l[2]},u&8&&{placeholder:l[3]},u&128&&me(l[7])]):{};u&3088&&(f.$$scope={dirty:u,ctx:l}),!t&&u&1&&(t=!0,f.value=l[0],W(()=>t=!1)),!r&&u&2&&(r=!0,f.selected=l[1],W(()=>r=!1)),e.$set(f)},i(l){o||(ce(e.$$.fragment,l),o=!0)},o(l){ue(e.$$.fragment,l),o=!1},d(l){fe(e,l)}}}function dn(n,e,t){const r=["value","selected","minSelect","placeholder","cbar_props"];let o=X(e,r),{value:a=null}=e,{selected:i=["Viridis"]}=e,{minSelect:s=0}=e,{placeholder:c="Select a color scale"}=e,{cbar_props:l={}}=e;const u=Object.keys(w).filter(_=>_.startsWith("interpolate")).map(_=>_.replace("interpolate","")),f="justify-content: space-between;";function h(_){a=_,t(0,a)}function g(_){i=_,t(1,i)}return n.$$set=_=>{e=I(I({},e),Ne(_)),t(7,o=X(e,r)),"value"in _&&t(0,a=_.value),"selected"in _&&t(1,i=_.selected),"minSelect"in _&&t(2,s=_.minSelect),"placeholder"in _&&t(3,c=_.placeholder),"cbar_props"in _&&t(4,l=_.cbar_props)},[a,i,s,c,l,u,f,o,h,g]}class An extends le{constructor(e){super(),ie(this,e,dn,gn,ne,{value:0,selected:1,minSelect:2,placeholder:3,cbar_props:4})}}export{mn as C,An as a,_e as b,ge as l};
