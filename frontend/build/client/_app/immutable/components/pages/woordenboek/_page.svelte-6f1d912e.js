import{S as V,i as q,s as y,k as _,l as u,m,h as d,p as I,b as S,n as b,O as C,r as x,a as w,u as k,c as E,H as h,v as P}from"../../../chunks/index-a04286cd.js";function j(i,l,s){const e=i.slice();return e[1]=l[s],e}function D(i){let l,s,e=i[1].woord+"",t,n,a,r=i[1].beschrijving+"",f,p;return{c(){l=_("div"),s=_("p"),t=x(e),n=w(),a=_("p"),f=x(r),p=w(),this.h()},l(c){l=u(c,"DIV",{class:!0});var o=m(l);s=u(o,"P",{});var v=m(s);t=k(v,e),v.forEach(d),n=E(o),a=u(o,"P",{});var g=m(a);f=k(g,r),g.forEach(d),p=E(o),o.forEach(d),this.h()},h(){I(l,"class","flex flex-row gap-8")},m(c,o){S(c,l,o),h(l,s),h(s,t),h(l,n),h(l,a),h(a,f),h(l,p)},p(c,o){o&1&&e!==(e=c[1].woord+"")&&P(t,e),o&1&&r!==(r=c[1].beschrijving+"")&&P(f,r)},d(c){c&&d(l)}}}function H(i){let l,s=i[0].woordenboek.items,e=[];for(let t=0;t<s.length;t+=1)e[t]=D(j(i,s,t));return{c(){l=_("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=u(t,"DIV",{class:!0});var n=m(l);for(let a=0;a<e.length;a+=1)e[a].l(n);n.forEach(d),this.h()},h(){I(l,"class","maxwidth mx-auto")},m(t,n){S(t,l,n);for(let a=0;a<e.length;a+=1)e[a].m(l,null)},p(t,[n]){if(n&1){s=t[0].woordenboek.items;let a;for(a=0;a<s.length;a+=1){const r=j(t,s,a);e[a]?e[a].p(r,n):(e[a]=D(r),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},i:b,o:b,d(t){t&&d(l),C(e,t)}}}function O(i,l,s){let{data:e}=l;return i.$$set=t=>{"data"in t&&s(0,e=t.data)},[e]}class A extends V{constructor(l){super(),q(this,l,O,H,y,{data:0})}}export{A as default};