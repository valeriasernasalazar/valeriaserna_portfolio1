var In=Array.isArray,kn=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Cn=Object.prototype,bn=Array.prototype,Zt=Object.getPrototypeOf;const Pn=()=>{};function Fn(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,j=8,lt=16,m=32,z=64,tt=128,I=256,G=512,d=1024,R=2048,H=4096,b=8192,P=16384,Wt=32768,Et=65536,qn=1<<17,Xt=1<<19,yt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props"),Mn=Symbol("");function wt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yn(){throw new Error("https://svelte.dev/e/hydration_failed")}function jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Hn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Un(){W=!0}const Vn=1,Gn=2,Kn=16,$n=1,Zn=2,zn=4,Wn=8,Xn=16,Jn=1,Qn=2,ln="[",an="[!",un="]",mt={},tr=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function nr(t){return At(at(t))}function on(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function rr(t,n=!1){return At(on(t,n))}function At(t){return o!==null&&o.f&y&&(T===null?mn([t]):T.push(t)),t}function er(t,n){return o!==null&&it()&&o.f&(y|lt)&&(T===null||!T.includes(t))&&sn(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),gt(t,R),it()&&u!==null&&u.f&d&&!(u.f&m)&&(h!==null&&h.includes(t)?(A(u,R),Q(u)):g===null?An([t]):g.push(t))),n}function gt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&R||!e&&a===u||(A(a,n),i&(d|I)&&(i&y?gt(a,H):Q(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let D=!1;function sr(t){D=t}let w;function q(t){if(t===null)throw Rt(),mt;return w=t}function lr(){return q(k(w))}function ar(t){if(D){if(k(w)!==null)throw Rt(),mt;w=t}}function ur(t=1){if(D){for(var n=t,r=w;n--;)r=k(r);w=r}}function or(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===an)&&(t+=1)}var e=k(n);n.remove(),n=e}}var vt,xt,St;function ir(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;xt=_t(n,"firstChild").get,St=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return xt.call(t)}function k(t){return St.call(t)}function fr(t,n){if(!D)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function _r(t,n){if(!D){var r=rt(t);return r instanceof Comment&&r.data===""?k(r):r}return w}function cr(t,n=1,r=!1){let e=D?w:t;for(var s;n--;)s=e,e=k(e);if(!D)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function vr(t){t.textContent=""}function _n(t){var n=y|R;u===null?n|=I:u.f|=yt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function pr(t){const n=_n(t);return n.equals=Tt,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):O(e)}}}function cn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;Z(cn(t));try{Dt(t),n=Bt(t)}finally{Z(r)}return n}function It(t){var n=Ot(t),r=(S||t.f&I)&&t.deps!==null?H:d;A(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function ut(t){Dt(t),Y(t,0),A(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){u===null&&o===null&&nn(),o!==null&&o.f&I&&tn(),ot&&Qt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{pt(!0),J(a),a.f|=Wt}catch(c){throw O(a),c}finally{pt(i)}}else n!==null&&Q(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!_&&!s&&e&&(l!==null&&vn(a,l),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function hr(t){const n=F(j,null,!1);return A(n,d),n.teardown=t,n}function dr(t){kt();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Nt(t);return e}}function Er(t){return kt(),pn(t)}function yr(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Nt(t){return F(dt,t,!1)}function pn(t){return F(j,t,!0)}function wr(t){return hn(t)}function hn(t,n=0){return F(j|lt|n,t,!0)}function Tr(t,n=!0){return F(j|m,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Pt(t,n&&!r),bt(t),Y(t,0),A(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];qt(t,r,!0),yn(r,()=>{O(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Et)!==0||(e.f&m)!==0;qt(e,n,l?r:!1),e=s}}}function mr(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){B(t)&&J(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&m)!==0;Lt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,et=[];function Mt(){K=!1;const t=et.slice();et=[],zt(t)}function Ar(t){K||(K=!0,queueMicrotask(Mt)),et.push(t)}function wn(){K&&Mt()}const Yt=0,Tn=1;let U=!1,V=Yt,L=!1,M=null,N=!1,ot=!1;function pt(t){N=t}function ht(t){ot=t}let x=[],C=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let T=null;function mn(t){T=t}let h=null,E=0,g=null;function An(t){g=t}let jt=1,S=!1,f=null;function Ht(){return++jt}function it(){return!W||f!==null&&f.l===null}function B(t){var p;var n=t.f;if(n&R)return!0;if(n&H){var r=t.deps,e=(n&I)!==0;if(r!==null){var s,l,a=(n&G)!==0,i=e&&u!==null&&!S,_=r.length;if(a||i){for(s=0;s<_;s++)l=r[s],(p=l==null?void 0:l.reactions)!=null&&p.includes(t)||(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=G)}for(s=0;s<_;s++)if(l=r[s],B(l)&&It(l),l.version>t.version)return!0}(!e||u!==null&&!S)&&A(t,d)}return!1}function gn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw U=!1,t}function Rn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(U){if(r===null&&(U=!1),Rn(n))throw t;return}r!==null&&(U=!0);{gn(t,n);return}}function Bt(t){var ft;var n=h,r=E,e=g,s=o,l=S,a=T,i=f,_=t.f;h=null,E=0,g=null,o=_&(m|z)?null:t,S=!N&&(_&I)!==0,T=null,f=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!S)for(v=E;v<c.length;v++)((ft=c[v]).reactions??(ft.reactions=[])).push(t)}else c!==null&&E<c.length&&(Y(t,E),c.length=E);return p}finally{h=n,E=r,g=e,o=s,S=l,T=a,f=i}}function xn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(A(n,H),n.f&(I|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function J(t){var n=t.f;if(!(n&P)){A(t,d);var r=u,e=f;u=t;try{n&lt?dn(t):Pt(t),bt(t),Ct(t);var s=Bt(t);t.teardown=typeof s=="function"?s:null,t.version=jt}catch(l){X(l,t,r,e||t.ctx)}finally{u=r}}}function Ut(){if(C>1e3){C=0;try{rn()}catch(t){if(M!==null)X(t,M,null);else throw t}}C++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&d||(s.f^=d);var l=[];Gt(s,l),Sn(l)}}finally{N=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{B(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Dn(){if(L=!1,C>1001)return;const t=x;x=[],Vt(t),L||(C=0,M=null)}function Q(t){V===Yt&&(L||(L=!0,queueMicrotask(Dn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|m)){if(!(r&d))return;n.f^=d}}x.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&d)!==0,i=r.next;if(!a&&!(s&b))if(s&j){if(l)r.f^=d;else try{B(r)&&J(r)}catch(v){X(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&dt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Gt(_,n)}function Kt(t){var n=V,r=x;try{Ut();const s=[];V=Tn,x=s,L=!1,Vt(r);var e=t==null?void 0:t();return wn(),(x.length>0||s.length>0)&&Kt(),C=0,M=null,e}finally{V=n,x=r}}async function gr(){await Promise.resolve(),Kt()}function Rr(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=Ot(t);return ut(t),e}if(o!==null){T!==null&&T.includes(t)&&en();var s=o.deps;h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&m)&&g.includes(t)&&(A(u,R),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&It(l)),t.v}function xr(t){const n=o;try{return o=null,t()}finally{o=n}}const On=~(R|H|d);function A(t,n){t.f=t.f&On|n}function Sr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Dr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];Z(l.effect),$(l.reaction),Nt(l.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Or(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ur as $,lr as A,In as B,kn as C,or as D,Et as E,sr as F,mr as G,an as H,b as I,En as J,u as K,fn as L,qt as M,vr as N,yn as O,rt as P,un as Q,o as R,on as S,at as T,Gn as U,Vn as V,Kn as W,k as X,Zt as Y,$t as Z,Mn as _,dr as a,er as a0,rr as a1,$ as a2,Z as a3,hr as a4,Ar as a5,Nn as a6,ir as a7,ln as a8,mt as a9,Kt as aA,gr as aB,nr as aC,Jt as aD,Rt as aa,Yn as ab,yr as ac,Jn as ad,Qn as ae,ct as af,Cn as ag,bn as ah,Hn as ai,_t as aj,tr as ak,Bn as al,Nt as am,pn as an,jn as ao,qn as ap,zn as aq,Tt as ar,m as as,z as at,$n as au,Zn as av,Wn as aw,Ln as ax,pr as ay,Xn as az,xr as b,f as c,Fn as d,Or as e,_n as f,Rr as g,Un as h,hn as i,Tr as j,O as k,W as l,D as m,Pn as n,w as o,Sr as p,_r as q,zt as r,Dr as s,wr as t,Er as u,fr as v,ar as w,cr as x,nt as y,q as z};
