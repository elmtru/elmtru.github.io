var nn=Object.freeze,_n=Object.defineProperty;var an=(t,n)=>nn(_n(t,"raw",{value:nn(n||t.slice())}));import{s as on,I as dn,e as d,a as J,N as i,b as $,d as w,V as $n,f as N,O as k,g as r,h as C,i as j,j as u,J as vn,P as Q,c as ln,u as cn,k as un,m as rn,H as bn,v as sn,E as hn,p as Sn}from"./scheduler.JiC8KFoJ.js";import{S as kn,i as mn,b as yn,c as L,d as R,m as T,t as E,a as O,e as V}from"./index.C8QghjAH.js";import{C as wn}from"./CodeLinks.NhsnNu6v.js";import"./index.BCZaT-VP.js";import{m as fn}from"./index.DEFUO2rq.js";import{M as jn}from"./MultiSelect.BMRmR-Ge.js";import{S as En}from"./Structure.DdYllP2R.js";function On(t){let n,p,e="Выберите молекулу:",s,a,l,q,m,v,B,M,F,U,f,W,b,Y,x=JSON.stringify(t[1],null,2)+"",P,G,K,H,h,z,A,g,S;function gn(o){t[2](o)}let X={id:"select",options:fn.map(xn),selected:[t[0]],maxSelect:1,minSelect:1};return t[0]!==void 0&&(X.value=t[0]),a=new jn({props:X}),dn.push(()=>yn(a,"value",gn)),g=new En({props:{structure:t[1],bonding_strategy:"max_dist",bonding_options:{max_bond_dist:2}}}),{c(){n=d("form"),p=d("label"),p.textContent=e,s=J(),L(a.$$.fragment),q=J(),m=d("details"),v=d("summary"),B=i("JSON молекулы ("),M=i(t[0]),F=i(")"),U=J(),f=d("pre"),W=i(""),b=d("code"),Y=i(`
`),P=i(x),G=i(`
`),K=i(`
`),H=J(),h=d("h3"),z=i(t[0]),A=J(),L(g.$$.fragment),this.h()},l(o){n=$(o,"FORM",{class:!0});var c=w(n);p=$(c,"LABEL",{for:!0,"data-svelte-h":!0}),$n(p)!=="svelte-1sx6cut"&&(p.textContent=e),s=N(c),R(a.$$.fragment,c),q=N(c),m=$(c,"DETAILS",{class:!0});var _=w(m);v=$(_,"SUMMARY",{});var y=w(v);B=k(y,"JSON молекулы ("),M=k(y,t[0]),F=k(y,")"),y.forEach(r),U=N(_),f=$(_,"PRE",{class:!0});var D=w(f);W=k(D,""),b=$(D,"CODE",{});var I=w(b);Y=k(I,`
`),P=k(I,x),G=k(I,`
`),I.forEach(r),K=k(D,`
`),D.forEach(r),_.forEach(r),c.forEach(r),H=N(o),h=$(o,"H3",{align:!0});var Z=w(h);z=k(Z,t[0]),Z.forEach(r),A=N(o),R(g.$$.fragment,o),this.h()},h(){C(p,"for","select"),C(f,"class","svelte-f6t5kv"),C(m,"class","svelte-f6t5kv"),C(n,"class","svelte-f6t5kv"),C(h,"align","center")},m(o,c){j(o,n,c),u(n,p),u(n,s),T(a,n,null),u(n,q),u(n,m),u(m,v),u(v,B),u(v,M),u(v,F),u(m,U),u(m,f),u(f,W),u(f,b),u(b,Y),u(b,P),u(b,G),u(f,K),j(o,H,c),j(o,h,c),u(h,z),j(o,A,c),T(g,o,c),S=!0},p(o,[c]){const _={};c&1&&(_.selected=[o[0]]),!l&&c&1&&(l=!0,_.value=o[0],vn(()=>l=!1)),a.$set(_),(!S||c&1)&&Q(M,o[0]),(!S||c&2)&&x!==(x=JSON.stringify(o[1],null,2)+"")&&Q(P,x),(!S||c&1)&&Q(z,o[0]);const y={};c&2&&(y.structure=o[1]),g.$set(y)},i(o){S||(E(a.$$.fragment,o),E(g.$$.fragment,o),S=!0)},o(o){O(a.$$.fragment,o),O(g.$$.fragment,o),S=!1},d(o){o&&(r(n),r(H),r(h),r(A)),V(a),V(g,o)}}}const xn=t=>t.name;function Jn(t,n,p){let e,s="Бензол";function a(l){s=l,p(0,s)}return t.$$.update=()=>{t.$$.dirty&1&&p(1,e=fn.find(l=>l.name===s)||{})},[s,e,a]}class Nn extends kn{constructor(n){super(),mn(this,n,Jn,On,on,{})}}const Cn=t=>({}),tn=t=>({slot:"example"}),Mn=t=>({}),en=t=>({slot:"code"});function Pn(t){let n,p;return n=new Nn({}),{c(){L(n.$$.fragment)},l(e){R(n.$$.fragment,e)},m(e,s){T(n,e,s),p=!0},i(e){p||(E(n.$$.fragment,e),p=!0)},o(e){O(n.$$.fragment,e),p=!1},d(e){V(n,e)}}}function Hn(t){let n;const p=t[0].default,e=ln(p,t,t[1],tn),s=e||Pn();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){e&&e.p&&(!n||l&2)&&cn(e,p,a,a[1],n?rn(p,a[1],l,Cn):un(a[1]),tn)},i(a){n||(E(s,a),n=!0)},o(a){O(s,a),n=!1},d(a){s&&s.d(a)}}}function zn(t){let n,p=`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Structure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$lib'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> molecules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'$site'</span>
  <span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">'svelte-multiselect'</span>

  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Бензол</span><span class="token template-punctuation string">\`</span></span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> molecule <span class="token operator">=</span> molecules<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">struct</span><span class="token punctuation">)</span> <span class="token operator">=></span> struct<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Выберите молекулу:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span>
    <span class="token attr-name">options=</span><span class="token language-javascript"><span class="token punctuation">{</span>molecules<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mol</span><span class="token punctuation">)</span> <span class="token operator">=></span> mol<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">selected=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name"><span class="token namespace">bind:</span>value=</span><span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>
    <span class="token attr-name">maxSelect=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">minSelect=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>JSON молекулы (<span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">></span></span>
    <span class="token language-javascript"><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>molecule<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>center<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Structure</span> <span class="token attr-name">structure=</span><span class="token language-javascript"><span class="token punctuation">{</span>molecule<span class="token punctuation">}</span></span> <span class="token attr-name">bonding_strategy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>max_dist<span class="token punctuation">"</span></span> <span class="token attr-name">bonding_options=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">max_bond_dist</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>`,e;return{c(){n=new bn(!1),e=sn(),this.h()},l(s){n=hn(s,!1),e=sn(),this.h()},h(){n.a=e},m(s,a){n.m(p,s,a),j(s,e,a)},p:Sn,d(s){s&&(r(e),n.d())}}}function An(t){let n;const p=t[0].default,e=ln(p,t,t[1],en),s=e||zn();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,l){e&&e.p&&(!n||l&2)&&cn(e,p,a,a[1],n?rn(p,a[1],l,Mn):un(a[1]),en)},i(a){n||(E(s,a),n=!0)},o(a){O(s,a),n=!1},d(a){s&&s.d(a)}}}var pn;function Dn(t){let n,p,e;return p=new wn({props:{src:String.raw(pn||(pn=an([`<script>
import { Structure } from '$lib'
import { molecules } from '$site'
import Select from 'svelte-multiselect'
let name = \`Бензол\`
$: molecule = molecules.find((struct) => struct.name === name) || {}
<\/script>
<form>
<label for="select">Выберите молекулу:</label>
<Select
id="select"
options={molecules.map((mol) => mol.name)}
selected={[name]}
bind:value={name}
maxSelect={1}
minSelect={1}
/>
<details>
<summary>JSON молекулы ({name})</summary>
<pre>
<code>
{JSON.stringify(molecule, null, 2)}
</code>
</pre>
</details>
</form>
<h3 align='center'>{name}</h3>
<Structure structure={molecule} bonding_strategy="max_dist" bonding_options={{max_bond_dist: 2}} />`],[`<script>
import { Structure } from '$lib'
import { molecules } from '$site'
import Select from 'svelte-multiselect'
let name = \\\`Бензол\\\`
$: molecule = molecules.find((struct) => struct.name === name) || {}
<\/script>
<form>
<label for="select">Выберите молекулу:</label>
<Select
id="select"
options={molecules.map((mol) => mol.name)}
selected={[name]}
bind:value={name}
maxSelect={1}
minSelect={1}
/>
<details>
<summary>JSON молекулы ({name})</summary>
<pre>
<code>
{JSON.stringify(molecule, null, 2)}
</code>
</pre>
</details>
</form>
<h3 align='center'>{name}</h3>
<Structure structure={molecule} bonding_strategy="max_dist" bonding_options={{max_bond_dist: 2}} />`]))),meta:{Wrapper:"svelte-zoo/CodeExample.svelte",filename:"/src/routes/(demos)/molecule/+page.md",pkg:"elementari",repo:"https://github.com/elmtru/elmtru.github.io",hideStyle:!0,example:!0,stackblitz:!0},$$slots:{code:[An],example:[Hn]},$$scope:{ctx:t}}}),{c(){n=d("div"),L(p.$$.fragment)},l(s){n=$(s,"DIV",{});var a=w(n);R(p.$$.fragment,a),a.forEach(r)},m(s,a){j(s,n,a),T(p,n,null),e=!0},p(s,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:s}),p.$set(l)},i(s){e||(E(p.$$.fragment,s),e=!0)},o(s){O(p.$$.fragment,s),e=!1},d(s){s&&r(n),V(p)}}}function In(t,n,p){let{$$slots:e={},$$scope:s}=n;return t.$$set=a=>{"$$scope"in a&&p(1,s=a.$$scope)},[e,s]}class Ln extends kn{constructor(n){super(),mn(this,n,In,Dn,on,{})}}const Yn=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"}));export{Ln as P,Yn as _};
