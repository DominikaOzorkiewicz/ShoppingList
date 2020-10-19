(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),c=(a(87),a(51)),o=a(18),u=(a(88),a(135)),m=a(158),s=a(138),g=a(140),p=a(141),h=a(48),d=a(142),b=a(102),f=a(61),E=a.n(f),v=function(e){var t=e.changeLanguage,a=e.t,n=Object(u.a)((function(){return Object(m.a)({logo:{width:"25px",height:"25px",marginRight:"10px"}})}))();return r.a.createElement(s.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(h.a,{variant:"h6"},r.a.createElement("img",{className:n.logo,src:E.a,alt:"Logo"}),a("title"))),r.a.createElement(d.a,{size:"small",color:"primary",variant:"contained",orientation:"horizontal",disableElevation:!0},r.a.createElement(b.a,{onClick:function(){return t("en")}},r.a.createElement("img",{src:"assets/en.png",title:"English",alt:"UK Flag"})),r.a.createElement(b.a,{onClick:function(){return t("pl")}},r.a.createElement("img",{src:"assets/pl.png",title:"Polski",alt:"Polish Flag"})))))},y=a(101),O=a(144),j=a(159),k=a(156),x=a(152),F=a(148),S=a(153),w=a(66),N=a(154),I=function e(t,a,n){Object(w.a)(this,e),this.id=Object(N.a)(),this.name="",this.quantity="",this.unit="",this.bought=!1,this.name=t,this.quantity=a,this.unit=n},C=function(e){var t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],i=a[1];return[r,i,{value:r,onChange:function(e){i(e.target.value)}}]},L=function(e){var t=e.addProductFn,a=e.t,i=C(""),l=Object(o.a)(i,3),c=l[0],s=l[1],g=l[2],h=C(""),d=Object(o.a)(h,3),f=d[0],E=d[1],v=d[2],w=C("item(s)"),N=Object(o.a)(w,3),L=N[0],W=N[1],q=N[2],B=Object(n.useState)([]),T=Object(o.a)(B,2),J=T[0],P=T[1],z=Object(u.a)((function(){return Object(m.a)({form:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",padding:"10px"},input:{margin:"10px 20px"},unitSelect:{minWidth:"100px"}})}))(),R=null;return J.length>0&&(R=J.map((function(e,t){return r.a.createElement(S.a,{key:t,severity:"error"},e)}))),r.a.createElement(y.a,{square:!0,elevation:3},r.a.createElement(p.a,{maxWidth:"md"},R,r.a.createElement("form",{className:z.form,onSubmit:function(e){e.preventDefault();var n=[],r=Number(f);if(c.trim().length<3&&n.push(a("error.type1")),isNaN(r)?n.push(a("error.type2")):r<=0&&n.push(a("error.type3")),P(n),0===n.length){var i=new I(c,r,L);t(i),s(""),E(""),W(a("label.unitType.items"))}}},r.a.createElement(O.a,{className:z.input},r.a.createElement(j.a,null,a("label.item")),r.a.createElement(k.a,g)),r.a.createElement(O.a,{className:z.input},r.a.createElement(j.a,null,a("label.quantity")),r.a.createElement(k.a,v)),r.a.createElement(O.a,{className:z.input},r.a.createElement(j.a,null,a("label.unit")),r.a.createElement(x.a,Object.assign({className:z.unitSelect},q),r.a.createElement(F.a,{value:"g"},a("label.unitType.grams")),r.a.createElement(F.a,{value:"kg"},a("label.unitType.kilograms")),r.a.createElement(F.a,{value:"l"},a("label.unitType.liters")),r.a.createElement(F.a,{value:a("label.unitType.items")},a("label.unitType.items")))),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},a("button.add")))))},W=a(147),q=a(103),B=a(149),T=a(155),J=a(150),P=a(143),z=a(67),R=a.n(z),A=function(e){var t=e.item,a=e.toggleBoughtFn,n=e.deleteItemFn,i=e.t,l=function(){"function"===typeof a&&a(t.id)};return r.a.createElement(q.a,{dense:!0,button:!0},r.a.createElement(B.a,{onClick:l},r.a.createElement(T.a,{color:"primary",edge:"start",checked:t.bought,tabIndex:-1,disableRipple:!0})),r.a.createElement(J.a,{onClick:l},t.name," - ",t.quantity," ",t.unit),r.a.createElement(P.a,{"aria-label":"delete",title:i("button.delete"),onClick:function(){"function"===typeof n&&n(t.id)}},r.a.createElement(R.a,{fontSize:"small"})))},D=function(e){var t=e.items,a=e.toggleBoughtFn,n=e.clearListFn,i=e.deleteItemFn,l=e.t;return r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(W.a,null,t.map((function(e){return r.a.createElement(A,{key:e.id,item:e,toggleBoughtFn:a,deleteItemFn:i,t:l})}))),t.length>0&&r.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:function(){return n()}},l("button.clear")))},K=a(157),M=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return t}})),r=Object(o.a)(a,2),i=r[0],l=r[1];return[i,function(t){l(t),localStorage.setItem(e,JSON.stringify(t))}]}("itemsList",[]),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(K.a)(),u=Object(o.a)(l,2),m=u[0],s=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement(v,{changeLanguage:function(e){s.changeLanguage(e)},t:m}),r.a.createElement(L,{addProductFn:function(e){i([].concat(Object(c.a)(a),[e]))},t:m}),r.a.createElement(D,{items:a,toggleBoughtFn:function(e){var t=a.map((function(t){return t.id===e&&(t.bought=!t.bought),t}));i(t)},clearListFn:function(){i([])},deleteItemFn:function(e){var t=Object(c.a)(a).filter((function(t){return t.id!==e}));i(t)},t:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(50),V=a(39),$=a(71),G=a(73);U.a.use($.a).use(G.a).use(V.e).init({fallbackLng:"en",debug:!0,detection:{order:["queryString","cookie"],cache:["cookie"]},interpolation:{escapeValue:!1}});U.a;var H=a(151);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(H.a,null)},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a.p+"static/media/logo.4a1cbb02.svg"},82:function(e,t,a){e.exports=a(100)},87:function(e,t,a){},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.8d6122e4.chunk.js.map