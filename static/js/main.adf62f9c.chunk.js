(this["webpackJsonpmovie-discovery"]=this["webpackJsonpmovie-discovery"]||[]).push([[0],{134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(29),i=a.n(c),o=(a(85),a(5)),s=a(11),l=(a(90),a(22)),u=a(15),m=a(12),f=a(147),v=a(148),p=a(149),d=a(150),b=a(151),E=a(163),g=a(164),O=a(165),h=a(152),j=(a(91),a(70));a(92);function y(){var e=Object(u.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],i=a[1];return r.a.createElement("form",{className:"search-box",onSubmit:function(t){t.preventDefault(),c.length>0?e.push("/search",{searchString:c}):alert("Please input search key words")}},r.a.createElement("input",{type:"text",className:"input",placeholder:"Movie name...",value:c,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement(j.a,null)))}var w=a(48),N=a.n(w),S=a(71);function _(e){return k.apply(this,arguments)}function k(){return(k=Object(S.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=2;break}return e.abrupt("return",t.data);case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw a=e.sent,new Error(a);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){throw console.error("API call failed. "+e),e}var M="323c169d6502f84d4a8a225e5732db2c",P="https://api.themoviedb.org/3/",x="https://image.tmdb.org/t/p/w500",I="Recommend Movies",T="Upcoming Movies",D=["United States","France","Canada","Italy","United Kingdom","Russia","Korean","Japan","Hongkong","China","India","Brazil"],R=[2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010],A=["Default","Release Date","Name","Rate","Most Watched"],L=a(16),U=a.n(L);function H(){return function(e){return U.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=323c169d6502f84d4a8a225e5732db2c").then(_).catch(C).then((function(t){e({type:"LOAD_GENRES_SUCCESS",genres:t.genres})})).catch((function(e){throw console.error(e),e}))}}var B=a(10);var V=Object(s.b)((function(e){return{genres:0===e.genres.length?[]:e.genres,textColor:e.navbar.textColor}}),(function(e){return{actions:{loadGenres:Object(B.b)(H,e)}}}))((function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),j=u[0],w=u[1],N=D,S=Object(n.useState)(Object(m.a)({},e.showNav)),_=Object(o.a)(S,2),k=_[0],C=_[1],M=Object(n.useState)(Object(m.a)({},e.isTransparent)),P=Object(o.a)(M,2),x=P[0],I=P[1],T=Object(n.useState)(!1),R=Object(o.a)(T,2),A=R[0],L=R[1];return Object(n.useEffect)((function(){C(e.showNav)}),[e.showNav]),Object(n.useEffect)((function(){I(e.isTransparent)}),[e.isTransparent]),Object(n.useEffect)((function(){e.actions.loadGenres();var t=[];N.map((function(e,a){return t.push(r.a.createElement(f.a,{key:a},e)),null})),w(t)}),[]),Object(n.useEffect)((function(){if(e.genres.length>0){var t=[];e.genres.map((function(e,a){return t.push(r.a.createElement(f.a,{key:a},e.name)),null})),i(t)}}),[e.genres]),r.a.createElement(v.a,{fixed:"top",dark:!0,expand:"md",className:"".concat(k?"nav-show":"nav-hide"," ").concat(x?"transparent-nav":"non-transparent")},r.a.createElement(l.c,{to:"/",className:"navbar-brand"},"Home"),r.a.createElement(p.a,{onClick:function(){return L(!A)}}),r.a.createElement(d.a,{isOpen:A,navbar:!0},r.a.createElement(b.a,{className:"mr-auto",navbar:!0},r.a.createElement(E.a,{nav:!0,inNavbar:!0},r.a.createElement(g.a,{nav:!0,caret:!0},"Genre"),r.a.createElement(O.a,{right:!0},c)),r.a.createElement(E.a,{nav:!0,inNavbar:!0},r.a.createElement(g.a,{nav:!0,caret:!0},"Country"),r.a.createElement(O.a,{right:!0},j)),r.a.createElement(h.a,null,r.a.createElement(l.c,{className:"nav-link",to:"/toprated"},"Top Rated")),r.a.createElement(h.a,null,r.a.createElement(l.c,{className:"nav-link",to:"/popular"},"Popular"))),r.a.createElement(h.a,{className:"input-search"},r.a.createElement(y,null))))})),G=a(20),F=a(36);function W(e){var t=P+"movie/popular?api_key="+M+"&page=".concat(e);return U.a.get(t)}function Y(e){var t=P+"movie/top_rated?api_key="+M+"&page=".concat(e);return U.a.get(t)}function z(){return function(e){return U.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=323c169d6502f84d4a8a225e5732db2c&page=1").then(_).catch(C).then((function(t){var a=[],n=[];if(!(t.results<0)){if(t.results.length>5)for(var r=0;r<5;r++)a.push(t.results[r]);else{var c,i=Object(G.a)(t.results);try{for(i.s();!(c=i.n()).done;){var o=c.value;a.push(o)}}catch(f){i.e(f)}finally{i.f()}}if(t.results.length>20)for(var s=0;s<20;s++)n.push(t.results[s]);else{var l,u=Object(G.a)(t.results);try{for(u.s();!(l=u.n()).done;){var m=l.value;n.push(m)}}catch(f){u.e(f)}finally{u.f()}}e({type:"LOAD_NOW_PLAYING_MOVIE_SUCCESS",movies:a}),e(function(e){return{type:"LOAD_RECOMMENDED_MOVIE_SUCCESS",movies:e}}(n))}})).catch((function(e){throw console.error(e),e}))}}function J(){return function(e){return U.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=323c169d6502f84d4a8a225e5732db2c&page=1").then(_).catch(C).then((function(t){var a=[];if(!(t.results<0)){if(t.results.length>20)for(var n=0;n<20;n++)a.push(t.results[n]);else{var r,c=Object(G.a)(t.results);try{for(c.s();!(r=c.n()).done;){var i=r.value;a.push(i)}}catch(o){c.e(o)}finally{c.f()}}e({type:"LOAD_UPCOMING_MOVIE_SUCCESS",movies:a})}}))}}function K(){return function(e){return function(){for(var e=[],t=1;t<=20;t++)e.push(W(t));return Promise.all(e).then((function(e){var t=[];return e.map((function(e){return e.data.results&&t.push.apply(t,Object(F.a)(e.data.results)),null})),t})).catch(C)}().then((function(t){e({type:"LOAD_POPULAR_MOVIE_SUCCESS",movies:t})})).catch((function(e){throw console.error(e),e}))}}function q(){return function(e){return function(){for(var e=[],t=1;t<=20;t++)e.push(Y(t));return Promise.all(e).then((function(e){var t=[];return e.map((function(e){return e.data.results&&t.push.apply(t,Object(F.a)(e.data.results)),null})),t})).catch(C)}().then((function(t){e({type:"LOAD_TOP_RATED_MOVIE_SUCCESS",movies:t})})).catch((function(e){throw console.error(e),e}))}}function X(e){return{type:"SET_HOME_PAGE",value:e}}var $=a(75),Q=a(153),Z=a(154),ee=a(155),te=a(156);a(134);var ae=Object(s.b)((function(e){return{nowPlaying:0===e.movies.nowPlaying.length?[]:e.movies.nowPlaying}}))((function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(!1),l=Object(o.a)(s,2),u=l[0],m=l[1],f=Object(n.useState)([]),v=Object(o.a)(f,2),p=v[0],d=v[1];Object(n.useEffect)((function(){if(e.nowPlaying){var t=[];e.nowPlaying.map((function(e){return t.push({src:"".concat("https://image.tmdb.org/t/p/w1280").concat(e.backdrop_path),altText:e.original_title,caption:e.original_title,overview:e.overview}),null})),d(t)}}),[e.nowPlaying]);var b=function(){if(!u){var e=c===p.length-1?0:c+1;i(e)}},E=function(){if(!u){var e=0===c?p.length-1:c-1;i(e)}},g=p.map((function(t){return r.a.createElement($.a,{onExiting:function(){return m(!0)},onExited:function(){return m(!1)},key:t.src},r.a.createElement("img",{src:t.src,alt:t.altText}),r.a.createElement(Q.a,{className:e.textColor,captionText:t.overview,captionHeader:t.caption}))}));return r.a.createElement(Z.a,{activeIndex:c,next:b,previous:E},r.a.createElement(ee.a,{items:p,activeIndex:c,onClickHandler:function(e){u||i(e)}}),g,r.a.createElement(te.a,{direction:"prev",directionText:"Previous",onClickHandler:E}),r.a.createElement(te.a,{direction:"next",directionText:"Next",onClickHandler:b}))}));function ne(e){return r.a.createElement("div",{className:"section-heading"},r.a.createElement("h2",{className:"section-title"},e.sectionTitle))}var re=a(27);a(135);var ce=Object(s.b)((function(e){return{genres:e.genres}}))((function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"image-card"},r.a.createElement(l.b,{to:e.changeId?"".concat(e.movie.id):"details/".concat(e.movie.id)},r.a.createElement("img",{className:"movie-img",src:x+e.movie.poster_path,alt:e.movie.title})),r.a.createElement("div",{className:"movie-info"},r.a.createElement(re.b,{color:"#fff"}),r.a.createElement("div",{className:"info-text"},r.a.createElement("h3",{className:"title"},e.movie.title),r.a.createElement("p",{className:"overview"},e.movie.overview),r.a.createElement("p",{className:"genre"},"Genre: "+function(t){var a=[];return e.genres.map((function(e){var n,r=Object(G.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;e.id===c&&a.push(e.name)}}catch(i){r.e(i)}finally{r.f()}return null})),a=a.join(", ")}(e.movie.genre_ids)),r.a.createElement("p",{className:"release-date"},e.movie.release_date),r.a.createElement("p",{className:"rate"},r.a.createElement(re.c,{color:"yellow",size:22}),e.movie.vote_average)))))}));function ie(e){var t=e.movieList.map((function(e){return r.a.createElement(ce,{key:e.id,movie:e})}));return r.a.createElement("div",{className:"movie-list"},t)}var oe=a(157);a(136);var se=Object(s.b)((function(e){return{recommended:e.movies.recommendedMovies,upcoming:e.movies.upcomingMovies}}),(function(e){return{actions:{}}}))((function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)([]),l=Object(o.a)(s,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){switch(i(e.sectionName),e.sectionName){case I:m(e.recommended);break;case T:m(e.upcoming)}}),[e.recommended,e.upcoming]),r.a.createElement(oe.a,{className:"movie-section"},r.a.createElement("div",null,r.a.createElement(ne,{sectionTitle:c})),r.a.createElement("div",null,r.a.createElement(ie,{movieList:u})))})),le=a(158);a(137);var ue=Object(s.b)((function(e){return{}}),(function(e){return{actions:{loadNowPlayingMovies:Object(B.b)(z,e),loadUpcomingMovies:Object(B.b)(J,e),setHomePage:Object(B.b)(X,e)}}}))((function(e){var t={sectionContainer:{"margin-top":"2rem"}};return Object(n.useEffect)((function(){e.actions.setHomePage(!0),e.actions.loadNowPlayingMovies(),e.actions.loadUpcomingMovies()}),[]),r.a.createElement(oe.a,null,r.a.createElement(le.a,null,r.a.createElement(ae,null)),r.a.createElement(le.a,{style:t.sectionContainer},r.a.createElement(se,{sectionName:I})),r.a.createElement(le.a,{style:t.sectionContainer},r.a.createElement(se,{sectionName:T})))})),me=a(159);function fe(e){var t=e.name,a=e.url,n={cardContainer:{maxWidth:"60px",marginRight:"1rem"},cardImage:{width:"100%"},cardText:{textAlign:"center"}};return r.a.createElement("div",{className:"cast-info",style:n.cardContainer},r.a.createElement("img",{src:x+a,alt:"Not found",style:n.cardImage}),r.a.createElement("div",{className:"cast-name",style:n.cardText},t))}var ve=a(77),pe=(a(138),a(76)),de=a.n(pe);a(141);function be(e){var t=e.movies.map((function(e){return r.a.createElement("div",null,r.a.createElement(ce,{key:e.id,movie:e,changeId:!0}))}));return r.a.createElement(de.a,Object.assign({},{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},spaceBetween:100,breakpoints:{1350:{slidesPerView:4,spaceBetween:40},1e3:{slidesPerView:3,spaceBetween:30},650:{slidesPerView:2,spaceBetween:20},300:{slidesPerView:1,spaceBetween:10}},freeMode:!0},{shouldSwiperUpdate:!0}),t)}var Ee=Object(s.b)((function(e){return{nowPlaying:0===e.movies.nowPlaying.length?[]:e.movies.nowPlaying}}))((function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){e.movieId&&function(e){var t=P+"movie/"+e+"/recommendations?api_key="+M;U.a.get(t).then((function(e){if(200===e.status)return console.log(e.data),e.data;if(400===e.status){var t=e.text();throw new Error(t)}throw new Error("Network response was not ok.")})).then((function(e){if(e.results.length>10){var t=e.results.slice(0,10);i(t)}else i(e.results)}))}(e.movieId)}),[e.movieId]),Object(n.useEffect)((function(){c.length>0&&m(r.a.createElement(be,{movies:c}))}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You may also like"),r.a.createElement("div",null,u))}));var ge=Object(s.b)((function(e){return{genres:e.genres}}),(function(e){return{actions:{setHomePage:Object(B.b)(X,e)}}}))((function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),l=Object(o.a)(s,2),u=l[0],m=l[1],f=Object(n.useState)({}),v=Object(o.a)(f,2),p=v[0],d=v[1],b=Object(n.useState)([]),E=Object(o.a)(b,2),g=E[0],O=E[1],h=Object(n.useState)({}),j=Object(o.a)(h,2),y=j[0],w=j[1];return Object(n.useEffect)((function(){e.actions.setHomePage(!1);var t=e.match.params.id;!function(e){var t=P+"movie/"+e+"?api_key="+M;U.a.get(t).then((function(e){if(200===e.status)return e.data;if(400===e.status){var t=e.text();throw new Error(t)}throw new Error("Network response was not ok.")})).then((function(e){return i(e)}))}(t),function(e){var t=P+"movie/"+e+"/credits?api_key="+M;U.a.get(t).then((function(e){if(200===e.status)return e.data;if(400===e.status){var t=e.text();throw new Error(t)}throw new Error("Network response was not ok.")})).then((function(e){return d(e)}))}(t),function(e){var t=P+"movie/"+e+"/videos?api_key="+M;U.a.get(t).then((function(e){if(200===e.status)return e.data;if(400===e.status){var t=e.text();throw new Error(t)}throw new Error("Network response was not ok.")})).then((function(e){0===e.results.length&&w({});var t=e.results.find((function(e){return"Official Trailer"===e.name}));if(t)w(t);else{var a;a=e.results[0],w(a)}}))}(t)}),[e.match.params.id]),Object(n.useEffect)((function(){if(c.genres){var t=function(t){var a=[];if(t){var n,r=Object(G.a)(t);try{var c=function(){var t=n.value;e.genres.map((function(e){return t.id===e.id&&a.push(t.name),null}))};for(r.s();!(n=r.n()).done;)c()}catch(i){r.e(i)}finally{r.f()}a=a.join(", ")}return a}(c.genres);console.log(t),m(t)}}),[c]),Object(n.useEffect)((function(){if(p.cast){var e=p.cast.slice(0,5).map((function(e){return r.a.createElement(fe,{key:e.credit_id,name:e.name,url:e.profile_path})}));O(e)}}),[p]),r.a.createElement(oe.a,{id:"movie-details",style:{paddingTop:"8rem",paddingBottom:"2rem"}},r.a.createElement(le.a,{className:"movie-details-info"},r.a.createElement(me.a,{sm:"12",xs:"5",md:"5",lg:"4",className:"movie-poster"},r.a.createElement("img",{className:"movie-detail-img",src:x+c.poster_path,alt:c.title})),r.a.createElement(me.a,{sm:"12",xs:"6",md:"6",lg:"5",className:"detail-info-text"},r.a.createElement(le.a,{className:"movie-detail-title"},r.a.createElement("h2",null,c.title)),r.a.createElement(le.a,{className:"movie-detail-view"},r.a.createElement(re.c,{color:"yellow"}),c.vote_average,r.a.createElement("div",{className:"movie-duration"},r.a.createElement(ve.a,{color:"#fff"})," ",c.runtime," min"),c.vote_count," voted"),r.a.createElement(le.a,{className:"movie-detail-overview"},c.overview),r.a.createElement(le.a,{className:"movie-detail-release_date"},"Release Date: ",c.release_date),r.a.createElement(le.a,{className:"movie-detail-genre"},"Genre: ",u," "),r.a.createElement(le.a,{className:"movie-detail-director"},"Director: ",function(){if(p.crew){var e=p.crew.find((function(e){return"Director"===e.job}));return e?e.name:"Not found"}}()),r.a.createElement(le.a,{className:"cast-text"},"Cast: "),r.a.createElement(le.a,{className:"movie-detail-cast"},g))),r.a.createElement(le.a,{className:"trailer"},y&&r.a.createElement(me.a,{sm:"12",xs:"11",md:"12",lg:"9",className:"trailer-container"},r.a.createElement("iframe",{src:y.key?"https://www.youtube.com/embed/"+y.key:null,title:c.title}))),r.a.createElement(le.a,{className:"recommendation"},r.a.createElement(me.a,null,r.a.createElement("div",{className:"recommmended movies"},r.a.createElement(Ee,{movieId:c.id})))))})),Oe=function(e,t){var a=[];return 0===e.length||t.map((function(t){var n,r=Object(G.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;t.name===c&&a.push(t.id)}}catch(i){r.e(i)}finally{r.f()}return null})),a},he=function(e,t){return new Date(e.release_date)>new Date(t.release_date)},je=function(e,t){return e.title.localeCompare(t.title)},ye=function(e,t){return e.vote_average===t.vote_average?0:e.vote_average>t.vote_average?-1:1},we=function(e,t){return e.popularity===t.popularity?0:e.popularity>t.popularity?1:-1},Ne=function(e,t){return 0===e.length||e.every((function(e){return t.genre_ids.includes(e)}))},Se=function(e,t){return 0===e.length||!!t.release_date&&e.includes(t.release_date.substring(0,4))},_e=function(e,t){return 0===e.length||!!t.original_language&&function(e){var t=[];return e.map((function(e){return t.push(function(e){switch(e){case"United States":case"Canada":case"United Kingdom":return"en";case"France":return"fr";case"Italy":return"it";case"Russia":return"ru";case"Korean":return"ko";case"Japan":return"ja";case"Hongkong":case"China":return"zh";case"Brazil":return"pt";case"India":return"hi";default:return"en"}}(e)),null})),t}(e).includes(t.original_language)},ke=function(e,t){switch(t){case"Default":return e;case"Release Date":return e.sort(he);case"Name":return e.sort(je);case"Rate":return e.sort(ye);case"Most Watched":return e.sort(we);default:return e}},Ce=a(32);function Me(e){return{type:"SET_FILTER_OPTION",options:e}}var Pe=a(72),xe=(a(142),a(78)),Ie=a(39);var Te=Object(s.b)((function(e){return{genres:0===e.genres.length?[]:e.genres,filterOptions:e.filterbar}}),(function(e){return{actions:{setFilterOptions:Object(B.b)(Me,e)}}}))((function(e){var t=D,a=R,c=A,i=Object(n.useState)([]),s=Object(o.a)(i,2),l=s[0],u=s[1],f=Object(n.useState)([]),v=Object(o.a)(f,2),p=v[0],d=v[1],j=Object(n.useState)([]),y=Object(o.a)(j,2),w=y[0],N=y[1],S=Object(n.useState)([]),_=Object(o.a)(S,2),k=_[0],C=_[1],M=Object(n.useState)([]),P=Object(o.a)(M,2),x=P[0],I=P[1],T=Object(n.useState)([]),L=Object(o.a)(T,2),U=L[0],H=L[1],B=Object(n.useState)([]),V=Object(o.a)(B,2),G=V[0],F=V[1],W=Object(n.useState)({sortType:"Default"}),Y=Object(o.a)(W,2),z=Y[0],J=Y[1],K=Object(n.useState)("All"),q=Object(o.a)(K,2),X=q[0],$=q[1],Q=Object(n.useState)("All"),Z=Object(o.a)(Q,2),ee=Z[0],te=Z[1],ae=Object(n.useState)("All"),ne=Object(o.a)(ae,2),ce=ne[0],ie=ne[1],oe=Object(n.useState)("Default"),se=Object(o.a)(oe,2),le=se[0],ue=se[1],me=function(e){var t=e.target,a=t.name,n=t.checked;I((function(e){return Object(m.a)({},e,Object(Ce.a)({},a,n))}))},fe=function(e){var t=e.target,a=t.name,n=t.checked;H((function(e){return Object(m.a)({},e,Object(Ce.a)({},a,n))}))},ve=function(e){var t=e.target,a=t.name,n=t.checked;F((function(e){return Object(m.a)({},e,Object(Ce.a)({},a,n))}))},pe=function(e){var t=e.target.value;J((function(e){return Object(m.a)({},e,{sortType:t})})),ue(t)},de=function(e){return 0===function(e){return Object.keys(e).length}(e)?0:Object.values(e).reduce((function(e,t){return e+(!0===t?1:0)}),0)},be=function(e){return Object.keys(e).find((function(t){return!0===e[t]}))},Ee=function(e){for(var t=[],a=0,n=Object.entries(e);a<n.length;a++){var r=Object(o.a)(n[a],2),c=r[0];!0===r[1]&&t.push(c)}return t};return Object(n.useEffect)((function(){var e=[],n=[],i=[];t.map((function(t,a){return e.push(r.a.createElement("div",{key:a,className:"dropdown-item country-filter-item"},r.a.createElement("input",{type:"checkbox",name:t,checked:G[t],onChange:ve}),t)),null})),a.map((function(e,t){return n.push(r.a.createElement("div",{key:t,className:"dropdown-item year-filter-item"},r.a.createElement("input",{type:"checkbox",name:e,checked:U[e],onChange:fe}),e)),null})),c.map((function(e,t){return i.push(r.a.createElement("div",{key:t,className:"dropdown-item sort-filter-item"},r.a.createElement("input",{type:"radio",name:"sort",key:t,value:e,onChange:pe}),e)),null})),u(e),d(n),N(i)}),[]),Object(n.useEffect)((function(){var e=[];a.map((function(t,a){return e.push(r.a.createElement("div",{key:a,className:"dropdown-item year-filter-item"},r.a.createElement("input",{type:"checkbox",name:t,checked:U[t],onChange:fe}),t)),d(e),null}))}),[U]),Object(n.useEffect)((function(){var e=[];t.map((function(t,a){return e.push(r.a.createElement("div",{key:a,className:"dropdown-item country-filter-item"},r.a.createElement("input",{type:"checkbox",name:t,checked:G[t],onChange:ve}),t)),u(e),null}))}),[G]),Object(n.useEffect)((function(){var e=[];c.map((function(t,a){return e.push(r.a.createElement("div",{key:a,className:"dropdown-item sort-filter-item"},r.a.createElement("input",{type:"radio",name:"sort",key:a,checked:z.sortType===t,value:t,onChange:pe}),t)),N(e),null}))}),[z]),Object(n.useEffect)((function(){if(e.genres.length>0){var t=[];e.genres.map((function(e,a){return t.push(r.a.createElement("div",{key:a,className:"dropdown-item genre-filter-item"},r.a.createElement("input",{type:"checkbox",name:e.name,checked:x[e.name],onChange:me}),e.name)),null})),C(t)}}),[e.genres,x]),Object(n.useEffect)((function(){var t=de(x);if(0===t)$("All");else if(1===t){var a=be(x);$(a)}else $("".concat(t," selected"));var n=Ee(x);e.actions.setFilterOptions(Object(m.a)({},e.filterOptions,{genres:n}))}),[x]),Object(n.useEffect)((function(){var t=de(U);if(0===t)te("All");else if(1===t){var a=be(U);te(a)}else te("".concat(t," selected"));var n=Ee(U);e.actions.setFilterOptions(Object(m.a)({},e.filterOptions,{years:n}))}),[U]),Object(n.useEffect)((function(){var t=de(G);if(0===t)ie("All");else if(1===t){var a=be(G);ie(a)}else ie("".concat(t," selected"));var n=Ee(G);e.actions.setFilterOptions(Object(m.a)({},e.filterOptions,{countries:n}))}),[G]),Object(n.useEffect)((function(){var t=z.sortType;e.actions.setFilterOptions(Object(m.a)({},e.filterOptions,{sort:t}))}),[z]),r.a.createElement("div",{className:"filter-bar-wrapper"},r.a.createElement(b.a,null,r.a.createElement(E.a,{nav:!0,inNavbar:!0},r.a.createElement(g.a,{nav:!0,caret:!0},r.a.createElement(Ie.c,null),"Genre",r.a.createElement("div",{className:"genre-value"},X)),r.a.createElement(O.a,{right:!0},k)),r.a.createElement(E.a,{nav:!0,inNavbar:!0,className:"year-filter"},r.a.createElement(g.a,{nav:!0,caret:!0},r.a.createElement(Ie.b,null)," Year",r.a.createElement("div",{className:"year-value"},ee)),r.a.createElement(O.a,{right:!0},p)),r.a.createElement(E.a,{nav:!0,inNavbar:!0},r.a.createElement(g.a,{nav:!0,caret:!0},r.a.createElement(Ie.a,null)," Country",r.a.createElement("div",{className:"country-value"},ce)),r.a.createElement(O.a,{right:!0},l)),r.a.createElement(E.a,{nav:!0,inNavbar:!0,className:"sort-filter"},r.a.createElement(g.a,{nav:!0,caret:!0},r.a.createElement(re.a,null)," Sort",r.a.createElement("div",{className:"sort-value"},le)),r.a.createElement(O.a,{right:!0},w)),r.a.createElement(h.a,null,r.a.createElement(Pe.a,{color:"info",className:"clear-filter-button"},r.a.createElement(xe.a,null),"Clear Filter"))))})),De=a(160),Re=a(161),Ae=a(162);a(143);function Le(e){var t=e.moviesPerPage,a=e.totalMovies,c=e.currentPage,i=e.paginate,s=e.link,l=Object(n.useState)(0),u=Object(o.a)(l,2),m=u[0],f=u[1],v=Object(n.useState)([]),p=Object(o.a)(v,2),d=p[0],b=p[1],E=Object(n.useState)(c),g=Object(o.a)(E,2),O=g[0],h=g[1];return Object(n.useEffect)((function(){h(c)}),[c]),Object(n.useEffect)((function(){for(var e=[],n=1;n<=Math.ceil(a/t);n++)e.push(n);f(e)}),[a]),Object(n.useEffect)((function(){if(m.length>0){var e=m.map((function(e){return r.a.createElement(De.a,{key:e,className:O===e?"active-page":""},r.a.createElement(Re.a,{href:s,onClick:function(){return function(e){i(e),h(e)}(e)}},e))}));b(e)}else b([])}),[m,O]),r.a.createElement(Ae.a,{"aria-label":"Page navigation example"},r.a.createElement(De.a,null,r.a.createElement(Re.a,{first:!0,href:s,onClick:function(){i(1),h(1)}})),r.a.createElement(De.a,null,r.a.createElement(Re.a,{previous:!0,href:s,onClick:function(){c>1&&(i(c-1),h(c-1))}})),d,r.a.createElement(De.a,null,r.a.createElement(Re.a,{next:!0,href:s,onClick:function(){c<m.length&&(i(c+1),h(c+1))}})),r.a.createElement(De.a,null,r.a.createElement(Re.a,{last:!0,href:s,onClick:function(){var e=m.length;i(e),h(e)}})))}var Ue=Object(s.b)((function(e){return{topRatedMovies:0===e.movies.topRatedMovies.length?[]:e.movies.topRatedMovies,filterOptions:e.filterbar,genres:e.genres}}),(function(e){return{actions:{loadTopRatedMovies:Object(B.b)(q,e),setHomePage:Object(B.b)(X,e)}}}))((function(e){var t=this,a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),m=u[0],f=u[1],v=Object(n.useState)(1),p=Object(o.a)(v,2),d=p[0],b=p[1],E=40*d,g=E-40,O=m.slice(g,E),h={pageContainer:{"padding-top":"8rem"},topRatedMovieContainer:{margin:"0 1rem",width:"100%"},paginationBar:{justifyContent:"center",alignItems:"center"}};return Object(n.useEffect)((function(){e.actions.setHomePage(!1),0===i.length&&e.actions.loadTopRatedMovies()}),[]),Object(n.useEffect)((function(){s(e.topRatedMovies),f(e.topRatedMovies)}),[e.topRatedMovies]),Object(n.useEffect)((function(){if(i.length>0){var a="Default";e.filterOptions.sort&&(a=e.filterOptions.sort);var n=Oe(e.filterOptions.genres,e.genres),r=i.filter(Ne.bind(t,n)).filter(Se.bind(t,e.filterOptions.years)).filter(_e.bind(t,e.filterOptions.countries));r=ke(r,a),f(r)}}),[e.filterOptions]),r.a.createElement(oe.a,{id:"top-rated-movies",style:h.pageContainer},r.a.createElement(le.a,{className:"filter-bar"},r.a.createElement(Te,null)),r.a.createElement(le.a,{className:"top-rated-movies"},r.a.createElement("div",{className:"top-rated-movie-list",style:h.topRatedMovieContainer},r.a.createElement(ie,{movieList:O}))),r.a.createElement(le.a,{className:"pagination-bar",style:h.paginationBar},r.a.createElement(Le,{moviesPerPage:40,totalMovies:m.length,currentPage:d,paginate:function(e){return b(e)},link:"#top-rated-movies"})))}));var He=Object(s.b)((function(e){return{popularMovies:0===e.movies.popularMovies.length?[]:e.movies.popularMovies,filterOptions:e.filterbar,genres:e.genres}}),(function(e){return{actions:{loadPopularMovies:Object(B.b)(K,e),setHomePage:Object(B.b)(X,e)}}}))((function(e){var t=this,a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),m=u[0],f=u[1],v=Object(n.useState)(1),p=Object(o.a)(v,2),d=p[0],b=p[1],E=40*d,g=E-40,O=m.slice(g,E),h={pageContainer:{"padding-top":"8rem"},popularMovieContainer:{margin:"0 1rem",width:"100%"},paginationBar:{justifyContent:"center",alignItems:"center"}};return Object(n.useEffect)((function(){e.actions.setHomePage(!1),0===i.length&&e.actions.loadPopularMovies()}),[]),Object(n.useEffect)((function(){s(e.popularMovies),f(e.popularMovies)}),[e.popularMovies]),Object(n.useEffect)((function(){if(i.length>0){var a="Default";e.filterOptions.sort&&(a=e.filterOptions.sort);var n=Oe(e.filterOptions.genres,e.genres),r=i.filter(Ne.bind(t,n)).filter(Se.bind(t,e.filterOptions.years)).filter(_e.bind(t,e.filterOptions.countries));r=ke(r,a),f(r)}}),[e.filterOptions]),r.a.createElement(oe.a,{id:"popular-movies",style:h.pageContainer},r.a.createElement(le.a,{className:"filter-bar"},r.a.createElement(Te,null)),r.a.createElement(le.a,{className:"popular-movies"},r.a.createElement("div",{className:"popular-movie-list",style:h.popularMovieContainer},r.a.createElement(ie,{movieList:O}))),r.a.createElement(le.a,{className:"pagination-bar",style:h.paginationBar},r.a.createElement(Le,{moviesPerPage:40,totalMovies:m.length,currentPage:d,paginate:function(e){return b(e)},link:"#popular-movies"})))}));var Be=Object(s.b)((function(e){return{filterOptions:e.filterbar,genres:e.genres}}),(function(e){return{actions:{setHomePage:Object(B.b)(X,e)}}}))((function(e){var t=this,a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),m=u[0],f=u[1],v=Object(n.useState)(1),p=Object(o.a)(v,2),d=p[0],b=p[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),O=g[0],h=g[1],j=40*d,y=j-40,w=m.slice(y,j),N={pageContainer:{"padding-top":"8rem"},searchMovieContainer:{margin:"0 1rem",width:"100%"},searchTitle:{margin:"0rem 1rem 2rem 1rem"},paginationBar:{justifyContent:"center",alignItems:"center"}},S=function(e){for(var t=[],a=1;a<=20;a++)t.push(_(a,e));Promise.all(t).then((function(e){var t=[];e.map((function(e){return e.data.results&&t.push.apply(t,Object(F.a)(e.data.results)),null})),s(t),f(t)})).catch((function(e){throw console.error("API call failed. "+e),e}))},_=function(e,t){var a=P+"search/movie?api_key="+M+"&query=".concat(t,"&page=").concat(e);return U.a.get(a)};return Object(n.useEffect)((function(){if(e.actions.setHomePage(!1),e.location.state){var t=e.location.state.searchString;h(t),S(t),0===i.length&&S(t)}}),[]),Object(n.useEffect)((function(){if(e.location.state){var t=e.location.state.searchString;t!==O&&(h(t),S(t))}}),[e.location.state]),Object(n.useEffect)((function(){if(i.length>0){var a="Default";e.filterOptions.sort&&(a=e.filterOptions.sort);var n=Oe(e.filterOptions.genres,e.genres),r=i.filter(Ne.bind(t,n)).filter(Se.bind(t,e.filterOptions.years)).filter(_e.bind(t,e.filterOptions.countries));r=ke(r,a),f(r)}}),[e.filterOptions]),r.a.createElement(oe.a,{id:"search-movies",style:N.pageContainer},r.a.createElement(le.a,{className:"search-title"},r.a.createElement("h2",{style:N.searchTitle},"Results for: ".concat(O))),r.a.createElement(le.a,{className:"filter-bar"},r.a.createElement(Te,null)),r.a.createElement(le.a,{className:"search-movies"},r.a.createElement("div",{className:"search-movie-list",style:N.searchMovieContainer},r.a.createElement(ie,{movieList:w}))),r.a.createElement(le.a,{className:"pagination-bar",style:N.paginationBar},i.length>0&&r.a.createElement(Le,{moviesPerPage:40,totalMovies:m.length,currentPage:d,paginate:function(e){return b(e)},link:"#search-movies"})))}));var Ve=Object(s.b)((function(e){return{homepage:e.navbar.homepage}}))((function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(!0),m=Object(o.a)(s,2),f=m[0],v=m[1],p=Object(n.useState)(0),d=Object(o.a)(p,2),b=d[0],E=d[1],g=Object(n.useState)(0),O=Object(o.a)(g,2),h=O[0],j=O[1],y=function(){if(!e.homepage)return v(!1),void i(!0);var t=window.pageYOffset;if(h<=0&&document.querySelector(".carousel")){var a=document.querySelector(".carousel").clientHeight;j(a)}i(b>t),v(!(t>h)),E(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}})),Object(n.useEffect)((function(){if(e.homepage){var t=window.pageYOffset;v(0===t)}else v(!1)}),[e.homepage]),r.a.createElement(l.a,{basename:"/movie-discovery"},r.a.createElement("div",{className:"App"},r.a.createElement(V,{showNav:c,isTransparent:f}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/popular",component:He}),r.a.createElement(u.a,{path:"/toprated",component:Ue}),r.a.createElement(u.a,{path:"/details/:id",component:ge}),r.a.createElement(u.a,{path:"/search",component:Be}),r.a.createElement(u.a,{path:"/",component:ue}))))}));a(144),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge={nowPlaying:[],searchMovies:[],recommendedMovies:[],upcomingMovies:[],topRatedMovies:[],popularMovies:[]};var Fe={homepage:!0};var We={genres:[],years:[],countries:[],sort:"Default"};var Ye=Object(B.c)({genres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_GENRES_SUCCESS":return t.genres;default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_NOW_PLAYING_MOVIE_SUCCESS":return Object(m.a)({},e,{nowPlaying:t.movies});case"LOAD_RECOMMENDED_MOVIE_SUCCESS":return Object(m.a)({},e,{recommendedMovies:t.movies});case"LOAD_UPCOMING_MOVIE_SUCCESS":return Object(m.a)({},e,{upcomingMovies:t.movies});case"LOAD_POPULAR_MOVIE_SUCCESS":return Object(m.a)({},e,{popularMovies:t.movies});case"LOAD_TOP_RATED_MOVIE_SUCCESS":return Object(m.a)({},e,{topRatedMovies:t.movies});case"LOAD_LATEST_MOVIES":return Object(m.a)({},e,{latestMovies:t.latestMovies});case"LOAD_TRENDING_MOVIES":return Object(m.a)({},e,{trendingMovies:t.trendingMovies});default:return e}},navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HOME_PAGE":return Object(m.a)({},e,{homepage:t.value});default:return e}},filterbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER_OPTION":return t.options;default:return e}}}),ze=a(79);var Je=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d;return Object(B.e)(Ye,e,t(Object(B.a)(ze.a)))}();i.a.render(r.a.createElement(s.a,{store:Je},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(146)},85:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.adf62f9c.chunk.js.map