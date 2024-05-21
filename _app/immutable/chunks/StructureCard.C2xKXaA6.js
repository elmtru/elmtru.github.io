import{s as P,v as H,i as k,g as d,W as fe,w,e as N,a as E,b as S,d as z,f as L,x as B,j as v,M as ie,c as Y,h as p,u as Z,k as $,m as x,H as D,E as I,N as ee,O as le,P as te,X as F,K as oe,A as ue}from"./scheduler.JiC8KFoJ.js";import{S as se,i as ae,t as b,a as j,g as M,f as O,c as re,d as _e,m as me,e as ce}from"./index.C8QghjAH.js";import{g as ne,a as he}from"./spread.CgU5AtxT.js";import{p as y,b as T,d as q}from"./index.BCZaT-VP.js";import{e as G}from"./each.A9v7PxhN.js";import{$ as ge}from"./ru.DgAhZWaC.js";function K(n,e,t){const f=n.slice();return f[4]=e[t].title,f[11]=e[t].value,f[12]=e[t].unit,f[5]=e[t].fmt!==void 0?e[t].fmt:f[6],f[13]=e[t].tooltip,f}const de=n=>({}),R=n=>({}),pe=n=>({}),U=n=>({});function W(n){let e,t;const f=n[9].title,l=Y(f,n,n[8],U),s=l||be(n);return{c(){e=N("h2"),s&&s.c(),this.h()},l(i){e=S(i,"H2",{class:!0});var a=z(e);s&&s.l(a),a.forEach(d),this.h()},h(){p(e,"class","svelte-18jpu7z")},m(i,a){k(i,e,a),s&&s.m(e,null),t=!0},p(i,a){l?l.p&&(!t||a&256)&&Z(l,f,i,i[8],t?x(f,i[8],a,pe):$(i[8]),U):s&&s.p&&(!t||a&16)&&s.p(i,t?a:-1)},i(i){t||(b(s,i),t=!0)},o(i){j(s,i),t=!1},d(i){i&&d(e),s&&s.d(i)}}}function be(n){let e,t;return{c(){e=new D(!1),t=H(),this.h()},l(f){e=I(f,!1),t=H(),this.h()},h(){e.a=t},m(f,l){e.m(n[4],f,l),k(f,t,l)},p(f,l){l&16&&e.p(f[4])},d(f){f&&(d(t),e.d())}}}function X(n){let e;const t=n[9].fallback,f=Y(t,n,n[8],R),l=f||ke(n);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,i){l&&l.m(s,i),e=!0},p(s,i){f?f.p&&(!e||i&256)&&Z(f,t,s,s[8],e?x(t,s[8],i,de):$(s[8]),R):l&&l.p&&(!e||i&2)&&l.p(s,e?i:-1)},i(s){e||(b(l,s),e=!0)},o(s){j(l,s),e=!1},d(s){l&&l.d(s)}}}function ke(n){let e,t;return{c(){e=ee(n[1]),t=E()},l(f){e=le(f,n[1]),t=L(f)},m(f,l){k(f,e,l),k(f,t,l)},p(f,l){l&2&&te(e,f[1])},d(f){f&&(d(e),d(t))}}}function J(n){let e,t=n[12]+"",f;return{c(){e=N("small"),f=ee(t),this.h()},l(l){e=S(l,"SMALL",{class:!0});var s=z(e);f=le(s,t),s.forEach(d),this.h()},h(){p(e,"class","svelte-18jpu7z")},m(l,s){k(l,e,s),v(e,f)},p(l,s){s&1&&t!==(t=l[12]+"")&&te(f,t)},d(l){l&&d(e)}}}function Q(n){let e,t,f,l=n[4]+"",s,i,a,c,g=(typeof n[11]=="number"?y(n[11],n[5]):n[11])+"",o,m,_,r=n[12]&&J(n);return{c(){e=N("div"),t=N("span"),f=new D(!1),i=E(),a=N("strong"),c=new D(!1),o=E(),r&&r.c(),_=E(),this.h()},l(u){e=S(u,"DIV",{class:!0});var h=z(e);t=S(h,"SPAN",{class:!0,title:!0});var V=z(t);f=I(V,!1),V.forEach(d),i=L(h),a=S(h,"STRONG",{title:!0,class:!0});var C=z(a);c=I(C,!1),o=L(C),r&&r.l(C),C.forEach(d),_=L(h),h.forEach(d),this.h()},h(){f.a=null,p(t,"class","title svelte-18jpu7z"),p(t,"title",s=n[4]),c.a=o,p(a,"title",m=n[13]??null),p(a,"class","svelte-18jpu7z"),p(e,"class","svelte-18jpu7z")},m(u,h){k(u,e,h),v(e,t),f.m(l,t),v(e,i),v(e,a),c.m(g,a),v(a,o),r&&r.m(a,null),v(e,_)},p(u,h){h&1&&l!==(l=u[4]+"")&&f.p(l),h&1&&s!==(s=u[4])&&p(t,"title",s),h&1&&g!==(g=(typeof u[11]=="number"?y(u[11],u[5]):u[11])+"")&&c.p(g),u[12]?r?r.p(u,h):(r=J(u),r.c(),r.m(a,null)):r&&(r.d(1),r=null),h&1&&m!==(m=u[13]??null)&&p(a,"title",m)},d(u){u&&d(e),r&&r.d()}}}function A(n){let e,t,f,l=(n[4]||n[7].title)&&W(n),s=G(n[0].filter(n[10])),i=[];for(let o=0;o<s.length;o+=1)i[o]=Q(K(n,s,o));let a=null;s.length||(a=X(n));let c=[{class:"info-card svelte-18jpu7z"},{style:n[3]}],g={};for(let o=0;o<c.length;o+=1)g=w(g,c[o]);return{c(){e=N(n[2]),l&&l.c(),t=E();for(let o=0;o<i.length;o+=1)i[o].c();a&&a.c(),this.h()},l(o){e=S(o,(n[2]||"null").toUpperCase(),{class:!0,style:!0});var m=z(e);l&&l.l(m),t=L(m);for(let _=0;_<i.length;_+=1)i[_].l(m);a&&a.l(m),m.forEach(d),this.h()},h(){B(n[2])(e,g)},m(o,m){k(o,e,m),l&&l.m(e,null),v(e,t);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(e,null);a&&a.m(e,null),f=!0},p(o,m){if(o[4]||o[7].title?l?(l.p(o,m),m&144&&b(l,1)):(l=W(o),l.c(),b(l,1),l.m(e,t)):l&&(M(),j(l,1,1,()=>{l=null}),O()),m&259){s=G(o[0].filter(o[10]));let _;for(_=0;_<s.length;_+=1){const r=K(o,s,_);i[_]?i[_].p(r,m):(i[_]=Q(r),i[_].c(),i[_].m(e,null))}for(;_<i.length;_+=1)i[_].d(1);i.length=s.length,!s.length&&a?a.p(o,m):s.length?a&&(M(),j(a,1,1,()=>{a=null}),O()):(a=X(o),a.c(),b(a,1),a.m(e,null))}B(o[2])(e,g=ne(c,[{class:"info-card svelte-18jpu7z"},(!f||m&8)&&{style:o[3]}]))},i(o){f||(b(l),f=!0)},o(o){j(l),f=!1},d(o){o&&d(e),l&&l.d(),ie(i,o),a&&a.d()}}}function ve(n){let e=n[2],t,f,l=n[2]&&A(n);return{c(){l&&l.c(),t=H()},l(s){l&&l.l(s),t=H()},m(s,i){l&&l.m(s,i),k(s,t,i),f=!0},p(s,[i]){s[2]?e?P(e,s[2])?(l.d(1),l=A(s),e=s[2],l.c(),l.m(t.parentNode,t)):l.p(s,i):(l=A(s),e=s[2],l.c(),l.m(t.parentNode,t)):e&&(l.d(1),l=null,e=s[2])},i(s){f||(b(l,s),f=!0)},o(s){j(l,s),f=!1},d(s){s&&d(t),l&&l.d(s)}}}function je(n,e,t){let f,{$$slots:l={},$$scope:s}=e;const i=fe(l);let{data:a=[]}=e,{title:c=""}=e,{fallback:g=""}=e,{fmt:o=".2f"}=e,{as:m="section"}=e,{style:_=null}=e;const r=u=>(!("condition"in u)||(u==null?void 0:u.condition))&&![void 0,null].includes(u.value);return n.$$set=u=>{"data"in u&&t(0,a=u.data),"title"in u&&t(4,c=u.title),"fallback"in u&&t(1,g=u.fallback),"fmt"in u&&t(5,o=u.fmt),"as"in u&&t(2,m=u.as),"style"in u&&t(3,_=u.style),"$$scope"in u&&t(8,s=u.$$scope)},n.$$.update=()=>{n.$$.dirty&32&&t(6,f=o)},[a,g,m,_,c,o,f,i,s,l,r]}class ye extends se{constructor(e){super(),ae(this,e,je,ve,P,{data:0,title:4,fallback:1,fmt:5,as:2,style:3})}}function Ne(n){var s,i;let e,t;const f=[{data:[{title:n[9]("Formula"),value:T(n[0])},{title:n[9]("Number of atoms"),value:(i=(s=n[0])==null?void 0:s.sites)==null?void 0:i.length,fmt:".0f"},{title:n[9]("Volume"),value:n[8],unit:"Å³"},{title:n[9]("Density"),value:q(n[0]),unit:n[9]("unitsByName.g/cm³")},{title:`${n[9]("Lattice lengths")} a, b, c`,value:[n[7],n[6],n[5]].map(y).join(", "),unit:"Å"},{title:`${n[9]("Lattice angles")}  α, β, γ`,value:[n[4],n[3],n[2]].map(y).join("°, ")+"°"}]},n[10],{title:n[1]}];let l={};for(let a=0;a<f.length;a+=1)l=w(l,f[a]);return e=new ye({props:l}),{c(){re(e.$$.fragment)},l(a){_e(e.$$.fragment,a)},m(a,c){me(e,a,c),t=!0},p(a,[c]){var o,m;const g=c&2047?ne(f,[c&1021&&{data:[{title:a[9]("Formula"),value:T(a[0])},{title:a[9]("Number of atoms"),value:(m=(o=a[0])==null?void 0:o.sites)==null?void 0:m.length,fmt:".0f"},{title:a[9]("Volume"),value:a[8],unit:"Å³"},{title:a[9]("Density"),value:q(a[0]),unit:a[9]("unitsByName.g/cm³")},{title:`${a[9]("Lattice lengths")} a, b, c`,value:[a[7],a[6],a[5]].map(y).join(", "),unit:"Å"},{title:`${a[9]("Lattice angles")}  α, β, γ`,value:[a[4],a[3],a[2]].map(y).join("°, ")+"°"}]},c&1024&&he(a[10]),c&2&&{title:a[1]}]):{};e.$set(g)},i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){j(e.$$.fragment,a),t=!1},d(a){ce(e,a)}}}function Se(n,e,t){let f,l,s,i,a,c,g;const o=["structure","title"];let m=F(e,o),_;oe(n,ge,h=>t(9,_=h));let{structure:r}=e,{title:u="Structure"}=e;return n.$$set=h=>{e=w(w({},e),ue(h)),t(10,m=F(e,o)),"structure"in h&&t(0,r=h.structure),"title"in h&&t(1,u=h.title)},n.$$.update=()=>{n.$$.dirty&1&&t(8,{volume:f,a:l,b:s,c:i,alpha:a,beta:c,gamma:g}=(r==null?void 0:r.lattice)??{},f,(t(7,l),t(0,r)),(t(6,s),t(0,r)),(t(5,i),t(0,r)),(t(4,a),t(0,r)),(t(3,c),t(0,r)),(t(2,g),t(0,r)))},[r,u,g,c,a,i,s,l,f,_,m]}class Ae extends se{constructor(e){super(),ae(this,e,Se,Ne,P,{structure:0,title:1})}}export{ye as I,Ae as S};
