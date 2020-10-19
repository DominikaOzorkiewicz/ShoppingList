(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),c=(a(87),a(51)),o=a(18),u=(a(88),a(135)),s=a(158),m=a(138),g=a(140),p=a(141),d=a(48),h=a(142),b=a(102),f=a(61),E=a.n(f),v=function(e){var t=e.changeLanguage,a=e.t,n=Object(u.a)((function(){return Object(s.a)({logo:{width:"25px",height:"25px",marginRight:"10px"}})}))();return l.a.createElement(m.a,{position:"static"},l.a.createElement(g.a,null,l.a.createElement(p.a,{maxWidth:"md"},l.a.createElement(d.a,{variant:"h6"},l.a.createElement("img",{className:n.logo,src:E.a,alt:"Logo"}),a("title"))),l.a.createElement(h.a,{size:"small",color:"primary",variant:"contained",orientation:"horizontal",disableElevation:!0},l.a.createElement(b.a,{onClick:function(){return t("en")}},l.a.createElement("img",{src:"assets/en.png",title:"English",alt:"UK Flag"})),l.a.createElement(b.a,{onClick:function(){return t("pl")}},l.a.createElement("img",{src:"assets/pl.png",title:"Polski",alt:"Polish Flag"})))))},y=a(101),j=a(144),O=a(159),k=a(156),x=a(152),F=a(148),S=a(153),w=a(66),N=a(154),I=function e(t,a,n){Object(w.a)(this,e),this.id=Object(N.a)(),this.name="",this.quantity="",this.unit="",this.bought=!1,this.name=t,this.quantity=a,this.unit=n},C=function(e){var t=Object(n.useState)(e),a=Object(o.a)(t,2),l=a[0],r=a[1];return[l,r,{value:l,onChange:function(e){r(e.target.value)}}]},L=function(e){var t=e.addProductFn,a=e.t,r=C(""),i=Object(o.a)(r,3),c=i[0],m=i[1],g=i[2],d=C(""),h=Object(o.a)(d,3),f=h[0],E=h[1],v=h[2],w=C("item(s)"),N=Object(o.a)(w,3),L=N[0],W=N[1],q=N[2],B=Object(n.useState)([]),T=Object(o.a)(B,2),P=T[0],J=T[1],z=Object(u.a)((function(){return Object(s.a)({form:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",padding:"10px"},input:{margin:"10px 20px"},unitSelect:{minWidth:"100px"}})}))(),R=null;return P.length>0&&(R=P.map((function(e,t){return l.a.createElement(S.a,{key:t,severity:"error"},e)}))),l.a.createElement(y.a,{square:!0,elevation:3},l.a.createElement(p.a,{maxWidth:"md"},R,l.a.createElement("form",{className:z.form,onSubmit:function(e){e.preventDefault();var n=[],l=Number(f);if(c.trim().length<3&&n.push(a("error.type1")),isNaN(l)?n.push(a("error.type2")):l<=0&&n.push(a("error.type3")),J(n),0===n.length){var r=new I(c,l,L);t(r),m(""),E(""),W(a("label.unitType.items"))}}},l.a.createElement(j.a,{className:z.input},l.a.createElement(O.a,null,a("label.item")),l.a.createElement(k.a,g)),l.a.createElement(j.a,{className:z.input},l.a.createElement(O.a,null,a("label.quantity")),l.a.createElement(k.a,v)),l.a.createElement(j.a,{className:z.input},l.a.createElement(O.a,null,a("label.unit")),l.a.createElement(x.a,Object.assign({className:z.unitSelect},q),l.a.createElement(F.a,{value:"g"},a("label.unitType.grams")),l.a.createElement(F.a,{value:"kg"},a("label.unitType.kilograms")),l.a.createElement(F.a,{value:"l"},a("label.unitType.liters")),l.a.createElement(F.a,{value:a("label.unitType.items")},a("label.unitType.items")))),l.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},a("button.add")))))},W=a(147),q=a(103),B=a(149),T=a(155),P=a(150),J=a(143),z=a(67),R=a.n(z),A=function(e){var t=e.item,a=e.toggleBoughtFn,n=e.deleteItemFn,r=e.t,i=function(){"function"===typeof a&&a(t.id)};return l.a.createElement(q.a,{dense:!0,button:!0},l.a.createElement(B.a,{onClick:i},l.a.createElement(T.a,{color:"primary",edge:"start",checked:t.bought,tabIndex:-1,disableRipple:!0})),l.a.createElement(P.a,{onClick:i},t.name," - ",t.quantity," ",t.unit),l.a.createElement(J.a,{"aria-label":"delete",title:r("button.delete"),onClick:function(){"function"===typeof n&&n(t.id)}},l.a.createElement(R.a,{fontSize:"small"})))},D=function(e){var t=e.items,a=e.toggleBoughtFn,n=e.clearListFn,r=e.deleteItemFn,i=e.t;return l.a.createElement(p.a,{maxWidth:"md"},l.a.createElement(W.a,null,t.map((function(e){return l.a.createElement(A,{key:e.id,item:e,toggleBoughtFn:a,deleteItemFn:r,t:i})}))),t.length>0&&l.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:function(){return n()}},i("button.clear")))},K=a(157),M=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return t}})),l=Object(o.a)(a,2),r=l[0],i=l[1];return[r,function(t){i(t),localStorage.setItem(e,JSON.stringify(t))}]}("itemsList",[]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(K.a)(),u=Object(o.a)(i,2),s=u[0],m=u[1];return l.a.createElement("div",{className:"App"},l.a.createElement(v,{changeLanguage:function(e){m.changeLanguage(e)},t:s}),l.a.createElement(L,{addProductFn:function(e){r([].concat(Object(c.a)(a),[e]))},t:s}),l.a.createElement(D,{items:a,toggleBoughtFn:function(e){var t=a.map((function(t){return t.id===e&&(t.bought=!t.bought),t}));r(t)},clearListFn:function(){r([])},deleteItemFn:function(e){var t=Object(c.a)(a).filter((function(t){return t.id!==e}));r(t)},t:s}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(50),V=a(39),$=a(71),G=a(73);U.a.use($.a).use(G.a).use(V.e).init({backend:{loadPath:"locales/{{lng}}/{{ns}}.json"},fallbackLng:"en",debug:!0,lng:"en",detection:{order:["queryString","cookie"],cache:["cookie"]},interpolation:{escapeValue:!1}});U.a;var H=a(151);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(n.Suspense,{fallback:l.a.createElement(H.a,null)},l.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a.p+"static/media/logo.4a1cbb02.svg"},82:function(e,t,a){e.exports=a(100)},87:function(e,t,a){},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.806f3a3a.chunk.js.map