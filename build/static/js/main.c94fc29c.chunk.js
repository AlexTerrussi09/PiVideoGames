(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),s=n.n(r),i=(n(30),n(31),n(6)),o=n(2),l=n(5),j=n(8),u=n(7),d=n(4),b="GET_ALL_VIDEOGAMES",O="GET_VIDEOGAME_DETAILS",m="CREATE_VIDEOGAME",p="DELETE_VIDEOGAME",f="GET_ALL_GENRES",h="GET_GENRES_DETAILS",v="SEARCH_VIDEOGAMES",g="CLEAR_VIDEOGAME",x="GET_ALL_PLATFORMS",N="UPDATE_VIDEOGAME",y="FILTER",E=function(){return function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){var n,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/videogames",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",t({type:b,payload:a}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(j.a)(Object(l.a)().mark((function t(n){var a,c,r,s;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://localhost:3001/videogames","POST",a=JSON.stringify(e),c={"Content-Type":"application/json"},t.next=6,fetch("http://localhost:3001/videogames",{method:"POST",body:a,headers:c});case 6:return r=t.sent,t.next=9,r.json();case 9:return null!==(s=t.sent)?alert("Videojuego creado"):alert("Error al crear el Videojuego"),t.abrupt("return",n({type:m,payload:s}));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(){return function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){var n,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/genres");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",t({type:f,payload:a}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(j.a)(Object(l.a)().mark((function t(n){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n({type:y,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(j.a)(Object(l.a)().mark((function t(n){var a,c,r,s;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="http://localhost:3001/videogames/".concat(e),"DELETE",c={"Content-Type":"application/json"},t.next=5,fetch(a,{method:"DELETE",headers:c});case 5:return r=t.sent,t.next=8,r.json();case 8:return s=t.sent,t.abrupt("return",n({type:p,payload:s.id}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=(n(35),n(0)),G=function(e){e.Title;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h2",{children:"Loading..."}),Object(P.jsxs)("div",{className:"mosaic-loader",children:[Object(P.jsx)("div",{className:"cell d-0"}),Object(P.jsx)("div",{className:"cell d-1"}),Object(P.jsx)("div",{className:"cell d-2"}),Object(P.jsx)("div",{className:"cell d-3"}),Object(P.jsx)("div",{className:"cell d-1"}),Object(P.jsx)("div",{className:"cell d-2"}),Object(P.jsx)("div",{className:"cell d-3"}),Object(P.jsx)("div",{className:"cell d-4"}),Object(P.jsx)("div",{className:"cell d-2"}),Object(P.jsx)("div",{className:"cell d-3"}),Object(P.jsx)("div",{className:"cell d-4"}),Object(P.jsx)("div",{className:"cell d-5"}),Object(P.jsx)("div",{className:"cell d-3"}),Object(P.jsx)("div",{className:"cell d-4"}),Object(P.jsx)("div",{className:"cell d-5"}),Object(P.jsx)("div",{className:"cell d-6"})]})]})})},A=(n(37),n(14)),k=(n(38),function(e){var t=e.setPlataformas,n=e.Plats,c=Object(d.c)((function(e){return e.platforms})),r=Object(d.b)();return Object(a.useEffect)((function(){r(function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){var n,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/platforms");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",t({type:x,payload:a}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("select",{className:"select",onChange:function(e){if(n.includes(e.target.value))return alert("Plataforma ".concat(e.target.value," ya agregada!"));console.log(n),t([].concat(Object(A.a)(n),[e.target.value]))},children:[Object(P.jsx)("option",{value:"All",children:"Platforms"}),c.map((function(e,t){return Object(P.jsx)("option",{value:e.name,children:e.name},t)}))]})})}),T=function(e){var t=e.Gens,n=e.setGeneros,c=Object(d.b)(),r=Object(d.c)((function(e){return e.genres}));return Object(a.useEffect)((function(){c(C())}),[]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("select",{className:"select",onChange:function(e){if(t.includes(e.target.value))return alert("Genero ".concat(e.target.value," ya agregado!"));console.log(t),n([].concat(Object(A.a)(t),[e.target.value]))},children:[Object(P.jsx)("option",{value:"All",children:"Genre"}),r.map((function(e,t){return Object(P.jsx)("option",{value:e.name,children:e.name},t)}))]})})},_=function(e){var t,n,c=Object(i.f)(),r=Object(d.b)(),s=Object(d.c)((function(e){return e.videogameDetail})),o=Object(a.useState)(!0),b=Object(u.a)(o,2),m=b[0],p=b[1],f=Object(a.useState)([]),h=Object(u.a)(f,2),v=(h[0],h[1],Object(a.useState)([])),x=Object(u.a)(v,2),N=(x[0],x[1],Object(a.useState)("")),y=Object(u.a)(N,2),E=(y[0],y[1],Object(a.useState)({})),D=Object(u.a)(E,2),C=(D[0],D[1]),w=e.match.params.id,A=function(){r((function(e){return e({type:g,payload:{}})})),c.push("/videogames")},k=function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(S(t))&&A();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e;r((e=w,function(){var t=Object(j.a)(Object(l.a)().mark((function t(n){var a,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/videogames/".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:return c=t.sent,t.abrupt("return",n({type:O,payload:c}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),console.log(s),setTimeout((function(){p(!1),C({name:s.name,description:s.description,Plataformas:s.Plataformas,background_image:s.background_image,rating:s.rating,Generos:s.Generos,releaseDate:s.releaseDate})}),1e3)}),[]),Object(P.jsx)(P.Fragment,{children:m?Object(P.jsx)(G,{}):Object(P.jsxs)("div",{className:"divGeneralDetail",children:[Object(P.jsx)("div",{className:"navDetail",children:Object(P.jsx)("button",{onClick:function(){return A()},children:"Atras"})}),Object(P.jsxs)("div",{className:"containerDetail",children:[Object(P.jsxs)("div",{className:"title",children:[Object(P.jsx)("h1",{children:Object(P.jsx)("u",{children:s.name})}),Object(P.jsxs)("h1",{children:[s.rating," \u272d"]})]}),Object(P.jsxs)("div",{className:"details",children:[Object(P.jsx)("img",{src:s.background_image,alt:"not found",className:"fondo"}),Object(P.jsxs)("div",{className:"divDescripcionBtn",children:[Object(P.jsx)("div",{className:"description",children:s.description}),"number"!==typeof s.id?Object(P.jsx)("div",{className:"botonesDetails",children:Object(P.jsx)("button",{onClick:function(){return k(s.id)},className:"eliminar",children:"Eliminar"})}):Object(P.jsx)(P.Fragment,{})]})]}),Object(P.jsxs)("div",{className:"info",children:[Object(P.jsx)("div",{children:s.releaseDate}),Object(P.jsxs)("div",{children:["NaN"!==String(Number(s.id))?Object(P.jsxs)("div",{children:[" Generos: ",null===(t=s.Generos)||void 0===t?void 0:t.join(" , ")]}):Object(P.jsxs)("div",{children:[" Generos: ",s.Generos.map((function(e){return e.name})).join(" , ")]}),"NaN"!==String(Number(s.id))?Object(P.jsxs)("div",{children:[" Disponible para: ",null===(n=s.Plataformas)||void 0===n?void 0:n.join(" , ")]}):Object(P.jsxs)("div",{children:[" Disponible para: ",s.Plataformas.map((function(e){return e.name})).join(" , ")]})]})]})]})]})})},L=(n(45),function(e){var t=e.setCargando,n=Object(d.b)(),c=Object(d.c)((function(e){return e.genres})),r=Object(d.c)((function(e){return e.videogames}));return Object(a.useEffect)((function(){n(C())}),[]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("select",{className:"select",onChange:function(e){"All"===e.target.value?(n(E()),t(!0)):(n(w(r.filter((function(t){if(t.Generos.includes(e.target.value))return t})))),t(!0))},children:[Object(P.jsx)("option",{value:"All",children:"Genre"}),c.map((function(e,t){return Object(P.jsx)("option",{value:e.name,children:e.name},t)}))]})})}),F=(n(46),function(e){var t=Object(i.f)(),n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],s=c[1],b=Object(d.b)(),O=Object(a.useState)([]),m=Object(u.a)(O,2),p=m[0],f=m[1],h=Object(a.useState)([]),v=Object(u.a)(h,2),g=v[0],x=v[1],N=Date.now(),y=new Date(N),E=Object(a.useState)({name:"",description:"",platforms:[],background_image:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",rating:1,genres:[],releaseDate:y.toLocaleDateString()}),C=Object(u.a)(E,2),w=C[0],S=C[1],G=function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(w),e.next=4,b(D(Object(o.a)(Object(o.a)({},w),{},{genres:g,platforms:p})));case 4:e.sent&&(A(),setTimeout((function(){window.location.reload()}),500));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){S({name:"",description:"",platforms:[],releaseDate:y.toLocaleDateString(),background_image:"https://www.publicdomainpictures.net/es/view-image.php?image=270609&picture=imagen-no-encontrada",rating:1,genres:["Action"]})};return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"divGeneral",children:[Object(P.jsx)("div",{className:"divG1",children:Object(P.jsx)("nav",{className:"navCreate",children:Object(P.jsx)("button",{onClick:function(){t.replace("/videogames")},children:"Atras"})})}),Object(P.jsx)("div",{className:"divG2",children:Object(P.jsxs)("div",{className:"createDiv",children:[Object(P.jsx)("h3",{children:"Crea tu propia carta de Videojuego!"}),Object(P.jsxs)("form",{onSubmit:G,children:[Object(P.jsxs)("div",{className:"div1",children:[Object(P.jsxs)("div",{className:"div2",children:[Object(P.jsxs)("label",{className:"primerLabel",children:[Object(P.jsx)("span",{children:"*"}),"Nombre:"]}),Object(P.jsx)("input",{type:"text",onChange:function(e){S(Object(o.a)(Object(o.a)({},w),{},{name:e.target.value}))}})]}),Object(P.jsxs)("div",{className:"div2",children:[Object(P.jsxs)("label",{children:[Object(P.jsx)("span",{children:"*"}),"Descripcion:"]}),Object(P.jsx)("textarea",{onChange:function(e){S(Object(o.a)(Object(o.a)({},w),{},{description:e.target.value}))}})]}),Object(P.jsxs)("div",{className:"div2",children:[Object(P.jsx)("label",{children:"Rating:"}),Object(P.jsx)("input",{type:"number",step:"0.001",onChange:function(e){e.preventDefault();var t=e.target.value;t&&t>5||t&&t<1?s("El Rating tiene que ser un valor entre 1 y 5"):(S(Object(o.a)(Object(o.a)({},w),{},{rating:e.target.value})),s(""))}}),r?Object(P.jsx)("span",{className:"span",children:r}):Object(P.jsx)(P.Fragment,{})]})]}),Object(P.jsxs)("div",{className:"div1",children:[Object(P.jsxs)("div",{className:"div2",children:[Object(P.jsx)("label",{children:"*Plataformas:"}),Object(P.jsx)(k,{Plats:p,setPlataformas:f}),Object(P.jsx)("div",{className:"box",children:p?p.map((function(e,t){return Object(P.jsxs)("span",{className:"span",children:[e,Object(P.jsx)("i",{onClick:function(){!function(e){f(p.filter((function(t){return t!==e})))}(e)},children:"  \u2014"})]},t)})):Object(P.jsx)(P.Fragment,{})})]}),Object(P.jsxs)("div",{className:"div2",children:[Object(P.jsx)("label",{children:"*Generos:"}),Object(P.jsx)(T,{Gens:g,setGeneros:x}),Object(P.jsx)("div",{className:"box",children:g?g.map((function(e,t){return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("span",{className:"span",children:[e,Object(P.jsx)("i",{onClick:function(){!function(e){x(g.filter((function(t){return t!==e})))}(e)},className:"elim",children:"  \u2014"})]},t)})})):Object(P.jsx)(P.Fragment,{})})]})]}),Object(P.jsxs)("div",{className:"div1",children:[Object(P.jsxs)("div",{className:"div2",children:[Object(P.jsx)("label",{children:"Imagen URL:"}),Object(P.jsx)("input",{type:"text",onChange:function(e){S(Object(o.a)(Object(o.a)({},w),{},{background_image:e.target.value}))}})]}),Object(P.jsxs)("div",{className:"div2",children:[Object(P.jsx)("label",{children:"Fecha De Lanzamiento:"}),Object(P.jsx)("input",{type:"date",onChange:function(e){var t=new Date(e.target.value);S(Object(o.a)(Object(o.a)({},w),{},{releaseDate:t.toLocaleDateString()}))}})]})]}),Object(P.jsx)("div",{children:Object(P.jsx)("button",{type:"submit",disabled:!w.name||!w.description||!w.platforms||r,children:"Crear"})})]})]})})]})})}),I=(n(47),function(e){var t=Object(i.f)();return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"login",children:[Object(P.jsx)("h1",{children:"Bienvenidos!"}),Object(P.jsx)("p",{children:"Esta aplicacion web te permite ver el catalogo completo de los videojuegos existentes, podras filtrar y buscar tus videojuegos favoritos!"}),Object(P.jsx)("button",{className:"btn",onClick:function(){t.replace("/videogames")},children:"Entrar!"})]})})})}),R=(n(48),n(49),function(e){var t=e.setCargando,n=Object(d.b)(),a=Object(d.c)((function(e){return e.videogames}));return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("select",{className:"select",onChange:function(e){if("AZ"===e.target.value){var c=a.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));n(w(c))}else if("ZA"===e.target.value){var r=a.sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}));n(w(r))}else if("HR"===e.target.value){var s=a.sort((function(e,t){return e.rating>t.rating?-1:e.rating<t.rating?1:0}));n(w(s))}else if("LR"===e.target.value){var i=a.sort((function(e,t){return e.rating<t.rating?-1:e.rating>t.rating?1:0}));n(w(i))}else"API"===e.target.value?n(w(a.filter((function(e){if("number"===typeof e.id)return e})))):"DB"===e.target.value?n(w(a.filter((function(e){if("NaN"===String(Number(e.id)))return e})))):"EMPTY"===e.target.value&&(n(E()),t(!0))},children:[Object(P.jsx)("option",{value:"EMPTY",children:"All"}),Object(P.jsx)("option",{value:"AZ",children:"A-Z"}),Object(P.jsx)("option",{value:"ZA",children:"Z-A"}),Object(P.jsx)("option",{value:"HR",children:"Higher Rating"}),Object(P.jsx)("option",{value:"LR",children:"Lower Rating"}),Object(P.jsx)("option",{value:"API",children:"API"}),Object(P.jsx)("option",{value:"DB",children:"MyGames"})]})})}),V=function(e){var t=e.setCargando,n=Object(i.f)(),c=Object(a.useState)(""),r=Object(u.a)(c,2),s=r[0],o=r[1],b=Object(d.b)();return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"div",children:[Object(P.jsxs)("div",{className:"divSelector",children:[Object(P.jsx)("img",{onClick:function(){n.replace("/")},className:"icono",src:"https://http2.mlstatic.com/storage/mshops-appearance-api/images/15/254304515/logo-2020060212005277900.png",width:"40rem",height:"40rem"}),Object(P.jsx)(L,{setCargando:t}),Object(P.jsx)(R,{setCargando:t})]}),Object(P.jsxs)("form",{className:"divSearch",onSubmit:function(e){e.preventDefault(),t(!0),console.log(s);var n=b(function(e){try{return function(){var t=Object(j.a)(Object(l.a)().mark((function t(n){var a,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/videogames?name=".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:return c=t.sent,console.log(a),t.abrupt("return",n({type:v,payload:c}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}catch(t){return!1}}(s));return n?(t(!1),n):(t(!1),alert("no se encontro ningun juego con ese nombre"))},children:[Object(P.jsx)("input",{placeholder:"Search",onChange:function(e){o(e.target.value)}}),Object(P.jsx)("button",{type:"submit",className:"btnSearch",children:"Search"})]}),Object(P.jsx)("div",{className:"divCreate",children:Object(P.jsx)("button",{onClick:function(){n.replace("/videogames/create")},children:"Create"})})]})})},M=(n(50),function(e){var t=e.VideoGame,n=t.Generos,a=n.map((function(e){return e})).join("-"),c=n.map((function(e){return e.name})).join("-"),r=Object(i.f)();return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"cardVideoGame",onClick:function(){return e=t.id,void r.replace("/videogames/".concat(e));var e},children:[Object(P.jsx)("h3",{children:t.name}),Object(P.jsx)("img",{src:t.background_image,alt:" not found"}),Object(P.jsxs)("h4",{children:["number"===typeof t.id?a:c,"  (",t.rating," \u272d) "]})]})})}),B=(n(51),function(e){for(var t=e.totalPosts,n=e.postPerPage,a=e.setCurrentPage,c=e.currentPage,r=[],s=1;s<=Math.ceil(t/n);s++)r.push(s);return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("nav",{className:"navPagination",children:[Object(P.jsx)("button",{onClick:function(){c>1&&a(c-1)},className:"Prev",children:"Prev"}),r.map((function(e,t){return Object(P.jsx)("button",{className:e===c?"paginationCurrent":"normal",onClick:function(){return a(e)},children:e},t)})),Object(P.jsx)("button",{onClick:function(){c<r.length&&a(c+1)},className:"Next",children:"Next"})]})})}),Z=(n(52),function(e){var t=Object(d.c)((function(e){return e})),n=t.videogames,c=(t.genres,Object(a.useState)(!0)),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(1),l=Object(u.a)(o,2),j=(l[0],l[1],Object(a.useState)(1)),b=Object(u.a)(j,2),O=b[0],m=b[1],p=15*O,f=p-15,h=n.length>7?n.slice(f,p):n;return Object(a.useEffect)((function(){n.length&&i(!1)}),[n]),Object(P.jsx)(P.Fragment,{children:s?Object(P.jsx)(G,{}):Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"ContainerTodo",children:[Object(P.jsx)("nav",{className:"nav",children:Object(P.jsx)(V,{setCargando:i})}),h&&Object(P.jsxs)("div",{className:"containerHome",children:[Object(P.jsx)("div",{className:"pagination",children:Object(P.jsx)(B,{totalPosts:n.length,postPerPage:15,setCurrentPage:m,currentPage:O})}),Object(P.jsx)("div",{className:"containerVideoGames",children:h.length?h.map((function(e,t){return Object(P.jsx)(M,{VideoGame:e},t)})):Object(P.jsx)("h3",{children:"No se encontro ningun videojuego"})}),Object(P.jsx)("div",{className:"pagination",children:Object(P.jsx)(B,{totalPosts:n.length,postPerPage:15,setCurrentPage:m,currentPage:O})})]})]})})})}),H=function(e){var t=Object(d.b)();return Object(a.useEffect)((function(){t(E())}),[t]),Object(P.jsx)(Z,{})};var J=function(){return Object(P.jsx)("div",{className:"App-header",children:Object(P.jsxs)(i.c,{children:[Object(P.jsx)(i.a,{exact:!0,path:"/",component:I}),Object(P.jsx)(i.a,{exact:!0,path:"/videogames",component:H}),Object(P.jsx)(i.a,{path:"/videogames/create",component:F}),Object(P.jsx)(i.a,{path:"/videogames/:id",component:_})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},X=n(13),Y=n(20),q=n(25),z={videogames:[],videogameDetail:{},genres:[],genresDetail:{},platforms:[]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{videogames:t.payload});case O:return Object(o.a)(Object(o.a)({},e),{},{videogameDetail:t.payload});case f:return Object(o.a)(Object(o.a)({},e),{},{genres:t.payload});case x:return Object(o.a)(Object(o.a)({},e),{},{platforms:t.payload});case h:return Object(o.a)(Object(o.a)({},e),{},{genresDetail:t.payload});case v:return Object(o.a)(Object(o.a)({},e),{},{videogames:Object(A.a)(t.payload)});case m:return Object(o.a)(Object(o.a)({},e),{},{videogames:[].concat(Object(A.a)(e.videogames),[t.payload])});case p:return Object(o.a)(Object(o.a)({},e),{},{videogames:e.videogames.filter((function(e){return e.id!==t.payload}))});case y:return Object(o.a)(Object(o.a)({},e),{},{videogames:t.payload});case g:return Object(o.a)(Object(o.a)({},e),{},{videogameDetail:t.payload});case N:return Object(o.a)(Object(o.a)({},e),{},{videogames:[].concat(Object(A.a)(e.videogames),[t.payload])});default:return e}},Q="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.b,W=Object(Y.c)(K,Q(Object(Y.a)(q.a)));s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(d.a,{store:W,children:Object(P.jsx)(X.a,{children:Object(P.jsx)(J,{})})})}),document.getElementById("root")),U()}},[[53,1,2]]]);
//# sourceMappingURL=main.c94fc29c.chunk.js.map