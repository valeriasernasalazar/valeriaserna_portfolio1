import{a as O,t as W}from"../chunks/disclose-version.DlCjqMpY.js";import{i as ee}from"../chunks/legacy.DsbDqpt_.js";import{y as ae,i as te,m as k,z as D,A as se,B as le,C as z,H as ne,D as P,F,o as H,I as R,G as J,j as Q,J as re,K as X,L as oe,M as ie,N as ce,O as ve,k as fe,P as de,Q as ue,R as he,S as ye,T as $,U as pe,V as _e,W as xe,X as ge,Y as me,Z as Ee,_ as be,p as we,q as Ie,t as j,s as Me,v as M,$ as V,w,x as L,a0 as Ae,g as Y,a1 as ke}from"../chunks/runtime.BcZaled9.js";import{e as Be,s as q}from"../chunks/render.B7loP4zp.js";import{o as Te}from"../chunks/index-client.DaBqH76_.js";import{b as Ce}from"../chunks/paths.Dhj266sp.js";function Ne(t,e){return e}function He(t,e,a,o){for(var i=[],c=e.length,v=0;v<c;v++)ie(e[v].e,i,!0);var y=c>0&&i.length===0&&a!==null;if(y){var h=a.parentNode;ce(h),h.append(a),o.clear(),B(t,e[0].prev,e[c-1].next)}ve(i,()=>{for(var f=0;f<c;f++){var _=e[f];y||(o.delete(_.k),B(t,_.prev,_.next)),fe(_.e,!y)}})}function Le(t,e,a,o,i,c=null){var v=t,y={flags:e,items:new Map,first:null};{var h=t;v=k?D(de(h)):h.appendChild(ae())}k&&se();var f=null,_=!1;te(()=>{var s=a(),d=le(s)?s:s==null?[]:z(s),n=d.length;if(_&&n===0)return;_=n===0;let r=!1;if(k){var x=v.data===ne;x!==(n===0)&&(v=P(),D(v),F(!1),r=!0)}if(k){for(var I=null,m,l=0;l<n;l++){if(H.nodeType===8&&H.data===ue){v=H,r=!0,F(!1);break}var u=d[l],E=o(u,l);m=Z(H,y,I,null,u,E,l,i,e),y.items.set(E,m),I=m}n>0&&D(P())}if(!k){var b=he;Re(d,y,v,i,e,(b.f&R)!==0,o)}c!==null&&(n===0?f?J(f):f=Q(()=>c(v)):f!==null&&re(f,()=>{f=null})),r&&F(!0)}),k&&(v=H)}function Re(t,e,a,o,i,c,v,y){var h=t.length,f=e.items,_=e.first,s=_,d,n=null,r=[],x=[],I,m,l,u;for(u=0;u<h;u+=1){if(I=t[u],m=v(I,u),l=f.get(m),l===void 0){var E=s?s.e.nodes_start:a;n=Z(E,e,n,n===null?e.first:n.next,I,m,u,o,i),f.set(m,n),r=[],x=[],s=n.next;continue}if(Se(l,I,u),l.e.f&R&&J(l.e),l!==s){if(d!==void 0&&d.has(l)){if(r.length<x.length){var b=x[0],p;n=b.prev;var g=r[0],A=r[r.length-1];for(p=0;p<r.length;p+=1)G(r[p],b,a);for(p=0;p<x.length;p+=1)d.delete(x[p]);B(e,g.prev,A.next),B(e,n,g),B(e,A,b),s=b,n=A,u-=1,r=[],x=[]}else d.delete(l),G(l,s,a),B(e,l.prev,l.next),B(e,l,n===null?e.first:n.next),B(e,n,l),n=l;continue}for(r=[],x=[];s!==null&&s.k!==m;)(c||!(s.e.f&R))&&(d??(d=new Set)).add(s),x.push(s),s=s.next;if(s===null)continue;l=s}r.push(l),n=l,s=l.next}if(s!==null||d!==void 0){for(var T=d===void 0?[]:z(d);s!==null;)(c||!(s.e.f&R))&&T.push(s),s=s.next;var C=T.length;if(C>0){var N=h===0?a:null;He(e,T,N,f)}}X.first=e.first&&e.first.e,X.last=n&&n.e}function Se(t,e,a,o){oe(t.v,e),t.i=a}function Z(t,e,a,o,i,c,v,y,h,f){var _=(h&_e)!==0,s=(h&xe)===0,d=_?s?ye(i):$(i):i,n=h&pe?$(v):v,r={i:n,v:d,k:c,a:null,e:null,prev:a,next:o};try{return r.e=Q(()=>y(t,d,n),k),r.e.prev=a&&a.e,r.e.next=o&&o.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),o!==null&&(o.prev=r,o.e.prev=r.e),r}finally{}}function G(t,e,a){for(var o=t.next?t.next.e.nodes_start:a,i=e?e.e.nodes_start:a,c=t.e.nodes_start;c!==o;){var v=ge(c);i.before(c),c=v}}function B(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function K(t,e,a,o){var i=t.__attributes??(t.__attributes={});k&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[be]=a),a==null?t.removeAttribute(e):typeof a!="string"&&De(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var U=new Map;function De(t){var e=U.get(t.nodeName);if(e)return e;U.set(t.nodeName,e=[]);for(var a,o=t,i=Element.prototype;i!==o;){a=Ee(o);for(var c in a)a[c].set&&e.push(c);o=me(o)}return e}var Fe=W('<li class="svelte-o88exy"><a class="svelte-o88exy"> </a></li>'),Ve=W(`<nav class="svelte-o88exy"><div class="profile-container svelte-o88exy"><div class="profile svelte-o88exy"><img alt="" class="svelte-o88exy"> <div class="eye svelte-o88exy" id="leftEye"><div class="eye-ball svelte-o88exy" id="leftEyeBall"></div></div> <div class="eye svelte-o88exy" id="rightEye"><div class="eye-ball svelte-o88exy" id="rightEyeBall"></div></div></div> <h1 class="profile-name svelte-o88exy">Valeria Serna</h1></div> <ul class="svelte-o88exy"></ul></nav> <div id="particles-js"></div> <div class="container svelte-o88exy"><section id="home" class="svelte-o88exy"><h1 class="svelte-o88exy">Hello, I'm Valeria Serna</h1> <p class="svelte-o88exy">Expert at turning coffee ☕ and code 💻 into insights that matter.</p> <div class="cta-buttons svelte-o88exy"><a href="#projects" class="svelte-o88exy">View My Projects</a> <a href="#contact" class="svelte-o88exy">Contact Me</a></div></section> <section id="about" class="svelte-o88exy"><h2 class="svelte-o88exy">About Me</h2> <div class="profile-container svelte-o88exy"><p class="svelte-o88exy">Hi, I'm Valeria, a data scientist with a curious mind and a love for coffee and books!</p></div></section> <section id="projects" class="svelte-o88exy"><h2 class="svelte-o88exy">Projects</h2> <p class="svelte-o88exy">Here are some of the projects I’ve worked on. Click to learn more!</p></section> <section id="books" class="svelte-o88exy"><h2 class="svelte-o88exy">Books</h2> <p class="svelte-o88exy">A collection of books I’ve read and recommend—data science must-reads and quirky favorites!</p></section> <section id="fun" class="svelte-o88exy"><h2 class="svelte-o88exy">Fun Stuff</h2> <div class="fact-box svelte-o88exy"><p class="svelte-o88exy"> </p></div> <button class="svelte-o88exy">Generate Fun Fact</button></section> <section id="contact" class="svelte-o88exy"><h2 class="svelte-o88exy">Contact Me</h2> <p class="svelte-o88exy">Let’s connect! I’m always up for a chat about data, projects, or your favorite algorithm.</p></section></div>`,1);function qe(t,e){we(e,!1);const a=[{id:"home",label:"Home"},{id:"about",label:"About Me"},{id:"projects",label:"Projects"},{id:"books",label:"Books"},{id:"fun",label:"Fun Stuff"},{id:"contact",label:"Contact"}];let o=ke("Data science is 80% cleaning data and 20% complaining about cleaning data.");const i=["The term 'data scientist' was coined in 2008.","90% of the world's data was created in the last two years.","Python is the most used programming language for data science.","Netflix saves $1 billion annually with machine learning.","The first-ever database was created in 1960."];function c(){Ae(o,i[Math.floor(Math.random()*i.length)])}Te(()=>{document.addEventListener("mousemove",l=>{const u=document.getElementById("leftEyeBall"),E=document.getElementById("rightEyeBall"),b=window.innerWidth/2,p=window.innerHeight/2,g=10;[u,E].forEach(A=>{if(A){const T=Math.atan2(l.clientY-p,l.clientX-b);let C=Math.cos(T)*g,N=Math.sin(T)*g;const S=Math.sqrt(C**2+N**2);S>g&&(C=C/S*g,N=N/S*g),A.style.transform=`translate(${C}px, ${N}px)`}})}),document.addEventListener("mouseout",()=>{const l=document.getElementById("leftEyeBall"),u=document.getElementById("rightEyeBall");[l,u].forEach(E=>{E&&(E.style.transform="translate(-50%, -50%)")})})}),ee();var v=Ve(),y=Ie(v),h=M(y),f=M(h),_=M(f);K(_,"src",`${Ce??""}/profilepic2.png`),V(4),w(f),V(2),w(h);var s=L(h,2);Le(s,5,()=>a,Ne,(l,u)=>{let E=()=>Y(u).id,b=()=>Y(u).label;var p=Fe(),g=M(p),A=M(g,!0);w(g),w(p),j(()=>{K(g,"href",`#${E()}`),q(A,b())}),O(l,p)}),w(s),w(y);var d=L(y,4),n=L(M(d),8),r=L(M(n),2),x=M(r),I=M(x,!0);w(x),w(r);var m=L(r,2);w(n),V(2),w(d),j(()=>q(I,Y(o))),Be("click",m,c),O(t,v),Me()}export{qe as component};
