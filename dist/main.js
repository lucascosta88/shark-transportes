/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={776:function(e,t,n){var o;!function(r,i,l,a,c){void 0===(o=function(){return r.fullpage=function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",c="fp-viewing",s="active",u=".active",f="fp-completely",d="fp-section",v="."+d,p=".fp-section.active",h="fp-tableCell",g="."+h,m="fp-auto-height",w="fp-normal-scroll",S="fp-nav",b="#fp-nav",y="fp-show-active",E="fp-slide",L="."+E,x=".fp-slide.active",A="fp-slides",T=".fp-slides",k="fp-slidesContainer",O="."+k,M="fp-table",C=".fp-slidesNav",H=".fp-slidesNav a",I=".fp-controlArrow",B="fp-prev",R="fp-controlArrow fp-prev",N=".fp-controlArrow.fp-prev",z="fp-controlArrow fp-next",j=".fp-controlArrow.fp-next";function P(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function D(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function V(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=V(e[r],o[r]))}return e}function W(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Y(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function F(){return e.innerWidth}function U(e,t){var n;for(n in e=J(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++)e[o].style[n]=t[n];return e}function _(e,t,n){for(var o=e[n];o&&!we(o,t);)o=o[n];return o}function X(e,t){return _(e,t,"previousElementSibling")}function K(e,t){return _(e,t,"nextElementSibling")}function $(e){return e.previousElementSibling}function q(e){return e.nextElementSibling}function Q(e){return e[e.length-1]}function G(e,t){e=te(e)?e[0]:e;for(var n=null!=t?D(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function J(e){return te(e)?e:[e]}function Z(e){e=J(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ee(e){e=J(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function te(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ne(e,t){e=J(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function oe(e,t){e=J(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function re(e,t){t.appendChild(e)}function ie(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function le(e,t){ie(e,t,!0)}function ae(e,t){for("string"==typeof t&&(t=be(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ce(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function se(e,t){return e&&1===e.nodeType?we(e,t)?e:se(e.parentNode,t):null}function ue(e,t){de(e,e.nextSibling,t)}function fe(e,t){de(e,e,t)}function de(e,t,n){te(n)||("string"==typeof n&&(n=be(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function ve(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function pe(e){return Array.prototype.filter.call(e.parentNode.children,(function(t){return t!==e}))}function he(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function ge(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function me(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function we(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Se(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function be(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function ye(e){e=J(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function Ee(e,t,n){for(var o=e[n],r=[];o;)(we(o,t)||null==t)&&r.push(o),o=o[n];return r}function Le(e,t){return Ee(e,t,"nextElementSibling")}function xe(e,t){return Ee(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:D,deepExtend:V,hasClass:W,getWindowHeight:Y,css:U,until:_,prevUntil:X,nextUntil:K,prev:$,next:q,last:Q,index:G,getList:J,hide:Z,show:ee,isArrayOrList:te,addClass:ne,removeClass:oe,appendTo:re,wrap:ie,wrapAll:le,wrapInner:ae,unwrap:ce,closest:se,after:ue,before:fe,insertBefore:de,getScrollTop:ve,siblings:pe,preventDefault:he,isFunction:ge,trigger:me,matches:we,toggle:Se,createElementFromHTML:be,remove:ye,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:Ee,nextAll:Le,prevAll:xe,showError:P},function(_,J){var te=J&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(J.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1,ie=D("html, body"),de=D("html")[0],Ee=D("body")[0];if(!W(de,a)){var Ae={};J=V({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof _?D(_)[0]:_,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},J);var Te,ke,Oe,Me,Ce=!1,He=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Ie="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Be="string"==typeof _?D(_)[0]:_,Re=Y(),Ne=F(),ze=!1,je=!0,Pe=!0,De=[],Ve={m:{up:!0,down:!0,left:!0,right:!0}};Ve.k=V({},Ve.m);var We,Ye,Fe,Ue,_e,Xe,Ke,$e,qe,Qe=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},Ge={touchmove:"ontouchmove"in e?"touchmove":Qe.move,touchstart:"ontouchstart"in e?"touchstart":Qe.down},Je=!1;try{var Ze=Object.defineProperty({},"passive",{get:function(){Je=!0}});e.addEventListener("testPassive",null,Ze),e.removeEventListener("testPassive",null,Ze)}catch(e){}var et,tt,nt,ot=V({},J),rt=!1,it=!0,lt=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];no(),e.fp_easings=V(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Be&&(Ae.version="3.0.8",Ae.setAutoScrolling=mt,Ae.setRecordHistory=wt,Ae.setScrollingSpeed=St,Ae.setFitToSection=bt,Ae.setLockAnchors=function(e){J.lockAnchors=e},Ae.setMouseWheelScrolling=yt,Ae.setAllowScrolling=Et,Ae.setKeyboardScrolling=xt,Ae.moveSectionUp=At,Ae.moveSectionDown=Tt,Ae.silentMoveTo=kt,Ae.moveTo=Ot,Ae.moveSlideRight=Mt,Ae.moveSlideLeft=Ct,Ae.fitToSection=Ut,Ae.reBuild=Ht,Ae.setResponsive=Bt,Ae.getFullpageData=function(){return J},Ae.destroy=function(n){mt(!1,"internal"),Et(!0),Lt(!1),xt(!1),ne(Be,l),[_e,Ue,Ye,Xe,Ke,qe,Fe,nt].forEach((function(e){clearTimeout(e)})),e.removeEventListener("scroll",Ft),e.removeEventListener("hashchange",gn),e.removeEventListener("resize",Bn),t.removeEventListener("keydown",wn),t.removeEventListener("keyup",bn),["click","touchstart"].forEach((function(e){t.removeEventListener(e,Rt)})),["mouseenter","touchstart","mouseleave","touchend"].forEach((function(e){t.removeEventListener(e,zt,!0)})),n&&(Jn(0),D("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Be).forEach((function(e){an(e,"src")})),D("img[data-srcset]").forEach((function(e){an(e,"srcset")})),ye(D("#fp-nav, .fp-slidesNav, .fp-controlArrow")),U(D(v),{height:"","background-color":"",padding:""}),U(D(L),{width:""}),U(Be,{height:"",position:"","-ms-touch-action":"","touch-action":""}),U(ie,{overflow:"",height:""}),oe(de,a),oe(Ee,r),Ee.className.split(/\s+/).forEach((function(e){0===e.indexOf(c)&&oe(Ee,e)})),D(".fp-section, .fp-slide").forEach((function(e){J.scrollOverflowHandler&&J.scrollOverflow&&J.scrollOverflowHandler.remove(e),oe(e,"fp-table active "+f),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),W(e,d)&&!rt&&e.removeAttribute("data-anchor")})),jn(Be),[g,O,T].forEach((function(e){D(e,Be).forEach((function(e){ce(e)}))})),U(Be,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[d,E,k].forEach((function(e){oe(D("."+e),e)})))},Ae.getActiveSection=function(){return new lo(D(p)[0])},Ae.getActiveSlide=function(){return on(D(x,D(p)[0])[0])},Ae.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<D(J.sectionSelector,Be).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<D(J.sectionSelector,Be).length;t++)e.push(0);return e}(),options:J,setAutoScrolling:mt},Ae.shared={afterRenderActions:Yt,isNormalScrollElement:!1},e.fullpage_api=Ae,J.$&&Object.keys(Ae).forEach((function(e){J.$.fn.fullpage[e]=Ae[e]})),J.css3&&(J.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),J.scrollBar=J.scrollBar||J.hybrid,function(){if(!J.anchors.length){var e="[data-anchor]",t=D(J.sectionSelector.split(",").join(e+",")+e,Be);t.length&&t.length===D(v).length&&(rt=!0,t.forEach((function(e){J.anchors.push(e.getAttribute("data-anchor").toString())})))}if(!J.navigationTooltips.length){var n="[data-tooltip]",o=D(J.sectionSelector.split(",").join(n+",")+n,Be);o.length&&o.forEach((function(e){J.navigationTooltips.push(e.getAttribute("data-tooltip").toString())}))}}(),function(){U(Be,{height:"100%",position:"relative"}),ne(Be,n),ne(de,a),Re=Y(),oe(Be,l),ne(D(J.sectionSelector,Be),d),ne(D(J.slideSelector,Be),E);for(var e=D(v),o=0;o<e.length;o++){var r=o,i=e[o],c=D(L,i),u=c.length;i.setAttribute("data-fp-styles",i.getAttribute("style")),Dt(i,r),Vt(i,r),u>0?Pt(i,c,u):J.verticalCentered&&Vn(i)}J.fixedElements&&J.css3&&D(J.fixedElements).forEach((function(e){Ee.appendChild(e)})),J.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",S);var n=t.createElement("ul");e.appendChild(n),re(e,Ee);var o=D(b)[0];ne(o,"fp-"+J.navigationPosition),J.showActiveTooltip&&ne(o,y);for(var r="",i=0;i<D(v).length;i++){var l="";J.anchors.length&&(l=J.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+Wt(i,"Section")+"</span><span></span></a>";var a=J.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="fp-tooltip fp-'+J.navigationPosition+'">'+a+"</div>"),r+="</li>"}D("ul",o)[0].innerHTML=r;var c=D("li",D(b)[0])[G(D(p)[0],v)];ne(D("a",c),s)}(),D('iframe[src*="youtube.com/embed/"]',Be).forEach((function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)})),J.scrollOverflow&&(We=J.scrollOverflowHandler.init(J))}(),Et(!0),Lt(!0),mt(J.autoScrolling,"internal"),Nn(),qn(),"complete"===t.readyState&&hn(),e.addEventListener("load",hn),J.scrollOverflow||Yt(),function(){for(var e=1;e<4;e++)qe=setTimeout(jt,350*e)}(),e.addEventListener("scroll",Ft),e.addEventListener("hashchange",gn),e.addEventListener("focus",An),e.addEventListener("blur",Tn),e.addEventListener("resize",Bn),t.addEventListener("keydown",wn),t.addEventListener("keyup",bn),["click","touchstart"].forEach((function(e){t.addEventListener(e,Rt)})),J.normalScrollElements&&(["mouseenter","touchstart"].forEach((function(e){Nt(e,!1)})),["mouseleave","touchend"].forEach((function(e){Nt(e,!0)}))));var at=!1,ct=0,st=0,ut=0,ft=0,dt=0,vt=(new Date).getTime(),pt=0,ht=0,gt=Re;return Ae}function mt(e,t){e||Jn(0),to("autoScrolling",e,t);var n=D(p)[0];if(J.autoScrolling&&!J.scrollBar)U(ie,{overflow:"hidden",height:"100%"}),wt(ot.recordHistory,"internal"),U(Be,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Jn(n.offsetTop);else if(U(ie,{overflow:"visible",height:"initial"}),wt(!!J.autoScrolling&&ot.recordHistory,"internal"),U(Be,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=rn(n.offsetTop);o.element.scrollTo(0,o.options)}}function wt(e,t){to("recordHistory",e,t)}function St(e,t){to("scrollingSpeed",e,t)}function bt(e,t){to("fitToSection",e,t)}function yt(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!Je&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",Gt,i):t[n](o+r,Gt,i)}(),Be.addEventListener("mousedown",yn),Be.addEventListener("mouseup",En)):(t.addEventListener?(t.removeEventListener("mousewheel",Gt,!1),t.removeEventListener("wheel",Gt,!1),t.removeEventListener("MozMousePixelScroll",Gt,!1)):t.detachEvent("onmousewheel",Gt),Be.removeEventListener("mousedown",yn),Be.removeEventListener("mouseup",En))}function Et(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){eo(e,t,"m")})):eo(e,"all","m")}function Lt(e){e?(yt(!0),function(){if(He||Ie){J.autoScrolling&&(Ee.removeEventListener(Ge.touchmove,Xt,{passive:!1}),Ee.addEventListener(Ge.touchmove,Xt,{passive:!1}));var e=J.touchWrapper;e.removeEventListener(Ge.touchstart,qt),e.removeEventListener(Ge.touchmove,Kt,{passive:!1}),e.addEventListener(Ge.touchstart,qt),e.addEventListener(Ge.touchmove,Kt,{passive:!1})}}()):(yt(!1),function(){if(He||Ie){J.autoScrolling&&(Ee.removeEventListener(Ge.touchmove,Kt,{passive:!1}),Ee.removeEventListener(Ge.touchmove,Xt,{passive:!1}));var e=J.touchWrapper;e.removeEventListener(Ge.touchstart,qt),e.removeEventListener(Ge.touchmove,Kt,{passive:!1})}}())}function xt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){eo(e,t,"k")})):(eo(e,"all","k"),J.keyboardScrolling=e)}function At(){var e=X(D(p)[0],v);e||!J.loopTop&&!J.continuousVertical||(e=Q(D(v))),null!=e&&en(e,null,!0)}function Tt(){var e=K(D(p)[0],v);e||!J.loopBottom&&!J.continuousVertical||(e=D(v)[0]),null!=e&&en(e,null,!1)}function kt(e,t){St(0,"internal"),Ot(e,t),St(ot.scrollingSpeed,"internal")}function Ot(e,t){var n=Fn(e);void 0!==t?Un(e,t):null!=n&&en(n)}function Mt(e){Jt("right",e)}function Ct(e){Jt("left",e)}function Ht(t){if(!W(Be,l)){ze=!0,Re=Y(),Ne=F();for(var n=D(v),o=0;o<n.length;++o){var r=n[o],i=D(T,r)[0],a=D(L,r);J.verticalCentered&&U(D(g,r),{height:Wn(r)+"px"}),U(r,{height:Re+"px"}),a.length>1&&Hn(i,D(x,i)[0])}J.scrollOverflow&&We.createScrollBarForAll();var c=G(D(p)[0],v);c&&kt(c+1),ze=!1,ge(J.afterResize)&&t&&J.afterResize.call(Be,e.innerWidth,e.innerHeight),ge(J.afterReBuild)&&!t&&J.afterReBuild.call(Be)}}function It(){return W(Ee,r)}function Bt(e){var t=It();e?t||(mt(!1,"internal"),bt(!1,"internal"),Z(D(b)),ne(Ee,r),ge(J.afterResponsive)&&J.afterResponsive.call(Be,e),J.scrollOverflow&&We.createScrollBarForAll()):t&&(mt(ot.autoScrolling,"internal"),bt(ot.autoScrolling,"internal"),ee(D(b)),oe(Ee,r),ge(J.afterResponsive)&&J.afterResponsive.call(Be,e))}function Rt(e){var t=e.target;t&&se(t,"#fp-nav a")?kn.call(t,e):we(t,".fp-tooltip")?Sn.call(t):we(t,I)?xn.call(t,e):we(t,H)||null!=se(t,H)?On.call(t,e):se(t,J.menu+" [data-menuanchor]")&&Mn.call(t,e)}function Nt(e,n){t["fp_"+e]=n,t.addEventListener(e,zt,!0)}function zt(e){var n=e.type,o=!1,r=J.scrollOverflow,i="mouseleave"===n?e.toElement||e.relatedTarget:e.target;if(i==t||!i)return Lt(!0),void(r&&J.scrollOverflowHandler.setIscroll(i,!0));"touchend"===n&&(it=!1,setTimeout((function(){it=!0}),800)),("mouseenter"!==n||it)&&(J.normalScrollElements.split(",").forEach((function(e){if(!o){var t=we(i,e),n=se(i,e);(t||n)&&(Ae.shared.isNormalScrollElement||(Lt(!1),r&&J.scrollOverflowHandler.setIscroll(i,!1)),Ae.shared.isNormalScrollElement=!0,o=!0)}})),!o&&Ae.shared.isNormalScrollElement&&(Lt(!0),r&&J.scrollOverflowHandler.setIscroll(i,!0),Ae.shared.isNormalScrollElement=!1))}function jt(){var e=Y(),t=F();Re===e&&Ne===t||(Re=e,Ne=t,Ht(!0))}function Pt(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=A,le(n,l);var a=t.createElement("div");a.className=k,le(n,a),U(D(O,e),{width:r+"%"}),o>1&&(J.controlArrows&&function(e){var t=[be('<div class="'+R+'"></div>'),be('<div class="'+z+'"></div>')];ue(D(T,e)[0],t),"#fff"!==J.controlArrowColor&&(U(D(j,e),{"border-color":"transparent transparent transparent "+J.controlArrowColor}),U(D(N,e),{"border-color":"transparent "+J.controlArrowColor+" transparent transparent"})),J.loopHorizontal||Z(D(N,e))}(e),J.slidesNavigation&&function(e,t){re(be('<div class="fp-slidesNav"><ul></ul></div>'),e);var n=D(C,e)[0];ne(n,"fp-"+J.slidesNavPosition);for(var o=0;o<t;o++)re(be('<li><a href="#"><span class="fp-sr-only">'+Wt(o,"Slide",D(L,e)[o])+"</span><span></span></a></li>"),D("ul",n)[0]);U(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ne(D("a",D("li",n)[0]),s)}(e,o)),n.forEach((function(e){U(e,{width:i+"%"}),J.verticalCentered&&Vn(e)}));var c=D(x,e)[0];null!=c&&(0!==G(D(p),v)||0===G(D(p),v)&&0!==G(c))?Gn(c,"internal"):ne(n[0],s)}function Dt(e,t){t||null!=D(p)[0]||ne(e,s),Me=D(p)[0],U(e,{height:Re+"px"}),J.paddingTop&&U(e,{"padding-top":J.paddingTop}),J.paddingBottom&&U(e,{"padding-bottom":J.paddingBottom}),void 0!==J.sectionsColor[t]&&U(e,{"background-color":J.sectionsColor[t]}),void 0!==J.anchors[t]&&e.setAttribute("data-anchor",J.anchors[t])}function Vt(e,t){void 0!==J.anchors[t]&&W(e,s)&&Pn(J.anchors[t],t),J.menu&&J.css3&&null!=se(D(J.menu)[0],o)&&D(J.menu).forEach((function(e){Ee.appendChild(e)}))}function Wt(e,t,n){var o="Section"===t?J.anchors[e]:n.getAttribute("data-anchor");return J.navigationTooltips[e]||o||t+" "+(e+1)}function Yt(){var e,t,n=D(p)[0];ne(n,f),sn(n),cn(),fn(n),J.scrollOverflow&&J.scrollOverflowHandler.afterLoad(),t=Fn((e=mn()).section),e.section&&t&&(void 0===t||G(t)!==G(Me))||!ge(J.afterLoad)||tn("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:G(n,v)}),ge(J.afterRender)&&tn("afterRender")}function Ft(){var e,t,n,o;if(!ze&&(!J.autoScrolling||J.scrollBar)){var r=ve(),i=function(e){var t=e>ct?"down":"up";return ct=e,pt=e,t}(r),l=0,a=r+Y()/2,c=Ee.offsetHeight-Y()===r,u=D(v);if(c)l=u.length-1;else if(r)for(var d=0;d<u.length;++d)u[d].offsetTop<=a&&(l=d);else l=0;if(t=i,n=D(p)[0].offsetTop,o=n+Y(),("up"==t?o>=ve()+Y():n<=ve())&&(W(D(p)[0],f)||(ne(D(p)[0],f),oe(pe(D(p)[0]),f))),!W(e=u[l],s)){at=!0;var h,g,m=D(p)[0],w=G(m,v)+1,S=Dn(e),b=e.getAttribute("data-anchor"),y=G(e,v)+1,E=D(x,e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:b,element:e,leavingSection:w,direction:S};E&&(g=E.getAttribute("data-anchor"),h=G(E)),Pe&&(ne(e,s),oe(pe(e),s),ge(J.onLeave)&&tn("onLeave",L),ge(J.afterLoad)&&tn("afterLoad",L),vn(m),sn(e),fn(e),Pn(b,y-1),J.anchors.length&&(Te=b),Xn(h,g,b,y)),clearTimeout(Xe),Xe=setTimeout((function(){at=!1}),100)}J.fitToSection&&(clearTimeout(Ke),Ke=setTimeout((function(){J.fitToSection&&D(p)[0].offsetHeight<=Re&&Ut()}),J.fitToSectionDelay))}}function Ut(){Pe&&(ze=!0,en(D(p)[0]),ze=!1)}function _t(e){if(Ve.m[e]){var t="down"===e?Tt:At;if(J.scrollOverflow){var n=J.scrollOverflowHandler.scrollable(D(p)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!J.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Xt(e){J.autoScrolling&&$t(e)&&Ve.m.up&&he(e)}function Kt(t){var n=se(t.target,v)||D(p)[0];if($t(t)){J.autoScrolling&&he(t);var o=Qn(t);ft=o.y,dt=o.x,D(T,n).length&&Math.abs(ut-dt)>Math.abs(st-ft)?!Ce&&Math.abs(ut-dt)>F()/100*J.touchSensitivity&&(ut>dt?Ve.m.right&&Mt(n):Ve.m.left&&Ct(n)):J.autoScrolling&&Pe&&Math.abs(st-ft)>e.innerHeight/100*J.touchSensitivity&&(st>ft?_t("down"):ft>st&&_t("up"))}}function $t(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function qt(e){if(J.fitToSection&&(et=!1),$t(e)){var t=Qn(e);st=t.y,ut=t.x}}function Qt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Gt(t){var n=(new Date).getTime(),o=W(D(".fp-completely")[0],w);if(!Ve.m.down&&!Ve.m.up)return he(t),!1;if(J.autoScrolling&&!Oe&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;De.length>149&&De.shift(),De.push(Math.abs(r)),J.scrollBar&&he(t);var c=n-vt;return vt=n,c>200&&(De=[]),Pe&&Qt(De,10)>=Qt(De,70)&&a&&_t(i<0?"down":"up"),!1}J.fitToSection&&(et=!1)}function Jt(e,t){var n=null==t?D(p)[0]:t,o=D(T,n)[0];if(!(null==o||Ce||D(L,o).length<2)){var r=D(x,o)[0],i=null;if(null==(i="left"===e?X(r,L):K(r,L))){if(!J.loopHorizontal)return;var l=pe(r);i="left"===e?l[l.length-1]:l[0]}Ce=!Ae.test.isTesting,Hn(o,i,e)}}function Zt(){for(var e=D(x),t=0;t<e.length;t++)Gn(e[t],"internal")}function en(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>pt,i=o-Re+t,l=J.bigSectionsDestination;return t>Re?(r||l)&&"bottom"!==l||(o=i):(r||ze&&null==q(e))&&(o=i),pt=o,o}(e),yMovement:Dn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:G(e,v),activeSlide:D(x,e)[0],activeSection:D(p)[0],leavingSection:G(D(p),v)+1,localIsResizing:ze};if(!(i.activeSection==e&&!ze||J.scrollBar&&ve()===i.dtop&&!W(e,m))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=G(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,ge(J.onLeave)&&!1===tn("onLeave",i))return}J.autoScrolling&&J.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=function(e){return e.isMovementUp?fe(D(p)[0],Le(e.activeSection,v)):ue(D(p)[0],xe(e.activeSection,v).reverse()),Jn(D(p)[0].offsetTop),Zt(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=Dn(e.element),e}(i)),i.localIsResizing||vn(i.activeSection),J.scrollOverflow&&J.scrollOverflowHandler.beforeLeave(),ne(e,s),oe(pe(e),s),sn(e),J.scrollOverflow&&J.scrollOverflowHandler.onLeave(),Pe=Ae.test.isTesting,Xn(r,o,i.anchorLink,i.sectionIndex),function(e){var t=J.scrollingSpeed<700,n=t?700:J.scrollingSpeed;if(J.css3&&J.autoScrolling&&!J.scrollBar)Yn("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),J.scrollingSpeed?(clearTimeout(Ue),Ue=setTimeout((function(){ln(e),Pe=!t}),J.scrollingSpeed)):ln(e);else{var o=rn(e.dtop);Ae.test.top=-e.dtop+"px",oo(o.element,o.options,J.scrollingSpeed,(function(){J.scrollBar?setTimeout((function(){ln(e)}),30):(ln(e),Pe=!t)}))}t&&(clearTimeout(nt),nt=setTimeout((function(){Pe=!0}),n))}(i),Te=i.anchorLink,Pn(i.anchorLink,i.sectionIndex)}}}function tn(e,t){var n,o=function(e,t){var n;return(n=J.v2compatible?{afterRender:function(){return[Be]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:nn(D(p)[0]),slide:on(D(x,D(p)[0])[0])}},onLeave:function(){return{origin:nn(t.activeSection),destination:nn(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:nn(t.section),origin:on(t.prevSlide),destination:on(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}})[e]()}(e,t);if(J.v2compatible){if(!1===J[e].apply(o[0],o.slice(1)))return!1}else if(me(Be,e,o),!1===J[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map((function(e){return n[e]})))))return!1;return!0}function nn(e){return e?new lo(e):null}function on(e){return e?new ao(e):null}function rn(t){var n={};return J.autoScrolling&&!J.scrollBar?(n.options=-t,n.element=D(o)[0]):(n.options=t,n.element=e),n}function ln(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?fe(D(v)[0],e.wrapAroundElements):ue(D(v)[D(v).length-1],e.wrapAroundElements),Jn(D(p)[0].offsetTop),Zt())}(e),ge(J.afterLoad)&&!e.localIsResizing&&tn("afterLoad",e),J.scrollOverflow&&J.scrollOverflowHandler.afterLoad(),e.localIsResizing||fn(e.element),ne(e.element,f),oe(pe(e.element),f),cn(),Pe=!0,ge(e.callback)&&e.callback()}function an(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function cn(){var e=D(".fp-auto-height")[0]||It()&&D(".fp-auto-height-responsive")[0];J.lazyLoading&&e&&D(".fp-section:not(.active)").forEach((function(e){var t,n,o;n=(t=e.getBoundingClientRect()).top,o=t.bottom,(n+2<Re&&n>0||o>2&&o<Re)&&sn(e)}))}function sn(e){J.lazyLoading&&D("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",pn(e)).forEach((function(t){if(["src","srcset"].forEach((function(n){var o=t.getAttribute("data-"+n);null!=o&&o&&(an(t,n),t.addEventListener("load",(function(){un(e)})))})),we(t,"source")){var n=se(t,"video, audio");n&&(n.load(),n.onloadeddata=function(){un(e)})}}))}function un(e){J.scrollOverflow&&(clearTimeout(tt),tt=setTimeout((function(){W(Ee,r)||We.createScrollBar(e)}),200))}function fn(e){var t=pn(e);D("video, audio",t).forEach((function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()})),D('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){e.hasAttribute("data-autoplay")&&dn(e),e.onload=function(){e.hasAttribute("data-autoplay")&&dn(e)}}))}function dn(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function vn(e){var t=pn(e);D("video, audio",t).forEach((function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()})),D('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function pn(e){var t=D(x,e);return t.length&&(e=t[0]),e}function hn(){var e=mn(),t=e.section,n=e.slide;t&&(J.animateAnchor?Un(t,n):kt(t,n))}function gn(){if(!at&&!J.lockAnchors){var e=mn(),t=e.section,n=e.slide,o=void 0===Te,r=void 0===Te&&void 0===n&&!Ce;t&&t.length&&(t&&t!==Te&&!o||r||!Ce&&ke!=n)&&Un(t,n)}}function mn(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function wn(e){clearTimeout($e);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n=e.shiftKey,o=t.activeElement,r=Ln(pn(D(p)[0]));function i(e){return he(e),r[0]?r[0].focus():null}(function(e){var n=Ln(t),o=n.indexOf(t.activeElement),r=n[e.shiftKey?o-1:o+1],i=on(se(r,L)),l=nn(se(r,v));return!i&&!l})(e)||(o?null==se(o,".fp-section.active,.fp-section.active .fp-slide.active")&&(o=i(e)):i(e),(!n&&o==r[r.length-1]||n&&o==r[0])&&he(e))}(e):we(n,"textarea")||we(n,"input")||we(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!J.keyboardScrolling||!J.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&he(e),Oe=e.ctrlKey,$e=setTimeout((function(){!function(e){var n=e.shiftKey,o=t.activeElement,r=we(o,"video")||we(o,"audio");if(Pe||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:Ve.k.up&&At();break;case 32:if(n&&Ve.k.up&&!r){At();break}case 40:case 34:Ve.k.down&&(32===e.keyCode&&r||Tt());break;case 36:Ve.k.up&&Ot(1);break;case 35:Ve.k.down&&Ot(D(v).length);break;case 37:Ve.k.left&&Ct();break;case 39:Ve.k.right&&Mt()}}(e)}),150))}function Sn(){me($(this),"click")}function bn(e){je&&(Oe=e.ctrlKey)}function yn(e){2==e.which&&(ht=e.pageY,Be.addEventListener("mousemove",Cn))}function En(e){2==e.which&&Be.removeEventListener("mousemove",Cn)}function Ln(e){return[].slice.call(D('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter((function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent}))}function xn(){var e=se(this,v);W(this,B)?Ve.m.left&&Ct(e):Ve.m.right&&Mt(e)}function An(){je=!0}function Tn(){je=!1,Oe=!1}function kn(e){he(e);var t=G(se(this,"#fp-nav li"));en(D(v)[t])}function On(e){he(e);var t=D(T,se(this,v))[0];Hn(t,D(L,t)[G(se(this,"li"))])}function Mn(e){!D(J.menu)[0]||!J.lockAnchors&&J.anchors.length||(he(e),Ot(this.getAttribute("data-menuanchor")))}function Cn(e){J.autoScrolling&&(Pe&&(e.pageY<ht&&Ve.m.up?At():e.pageY>ht&&Ve.m.down&&Tt()),ht=e.pageY)}function Hn(e,t,n){var o,r,i=se(e,v),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:G(t),section:i,sectionIndex:G(i,v),anchorLink:i.getAttribute("data-anchor"),slidesNav:D(C,i)[0],slideAnchor:$n(t),prevSlide:D(x,i)[0],prevSlideIndex:G(D(x,i)[0]),localIsResizing:ze};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":o>r?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(Pe=!1),J.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&ge(J.onSlideLeave)&&!1===tn("onSlideLeave",l)?Ce=!1:(ne(t,s),oe(pe(t),s),l.localIsResizing||(vn(l.prevSlide),sn(t)),!J.loopHorizontal&&J.controlArrows&&(Se(D(N,i),0!==l.slideIndex),Se(D(j,i),null!=q(t))),W(i,s)&&!l.localIsResizing&&Xn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(J.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";Ae.test.translate3dH[t.sectionIndex]=r,U(zn(D(O,e)),Zn(r)),_e=setTimeout((function(){n&&In(t)}),J.scrollingSpeed)}else Ae.test.left[t.sectionIndex]=Math.round(o.left),oo(e,Math.round(o.left),J.scrollingSpeed,(function(){n&&In(t)}))}(e,l,!0))}function In(e){var t,n;t=e.slidesNav,n=e.slideIndex,J.slidesNavigation&&null!=t&&(oe(D(u,t),s),ne(D("a",D("li",t)[n]),s)),e.localIsResizing||(ge(J.afterSlideLoad)&&tn("afterSlideLoad",e),Pe=!0,fn(e.destiny)),Ce=!1}function Bn(){ze=!0,clearTimeout(Ye),Ye=setTimeout((function(){for(var e=0;e<4;e++)Fe=setTimeout(Rn,200*e)}),200)}function Rn(){if(Nn(),He){var e=t.activeElement;if(!we(e,"textarea")&&!we(e,"input")&&!we(e,"select")){var n=Y();Math.abs(n-gt)>20*Math.max(gt,n)/100&&(Ht(!0),gt=n)}}else jt()}function Nn(){var t=J.responsive||J.responsiveWidth,n=J.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?Bt(o||r):t?Bt(o):n&&Bt(r)}function zn(e){var t="all "+J.scrollingSpeed+"ms "+J.easingcss3;return oe(e,i),U(e,{"-webkit-transition":t,transition:t})}function jn(e){return ne(e,i)}function Pn(e,t){var n;n=e,D(J.menu).forEach((function(e){J.menu&&null!=e&&(oe(D(u,e),s),ne(D('[data-menuanchor="'+n+'"]',e),s))})),function(e,t){J.navigation&&null!=D(b)[0]&&(oe(D(u,D(b)[0]),s),ne(e?D('a[href="#'+e+'"]',D(b)[0]):D("a",D("li",D(b)[0])[t]),s))}(e,t)}function Dn(e){var t=G(D(p)[0],v),n=G(e,v);return t==n?"none":t>n?"up":"down"}function Vn(e){if(!W(e,M)){var n=t.createElement("div");n.className=h,n.style.height=Wn(e)+"px",ne(e,M),ae(e,n)}}function Wn(e){var t=Re;if(J.paddingTop||J.paddingBottom){var n=e;W(n,d)||(n=se(e,v));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=Re-o}return t}function Yn(e,t){t?zn(Be):jn(Be),U(Be,Zn(e)),Ae.test.translate3d=e,setTimeout((function(){oe(Be,i)}),10)}function Fn(e){var t=D('.fp-section[data-anchor="'+e+'"]',Be)[0];if(!t){var n=void 0!==e?e-1:0;t=D(v)[n]}return t}function Un(e,t){var n=Fn(e);if(null!=n){var o=function(e,t){var n=D('.fp-slide[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=D(L,t)[e]),n}(t,n);$n(n)===Te||W(n,s)?_n(o):en(n,(function(){_n(o)}))}}function _n(e){null!=e&&Hn(se(e,T),e)}function Xn(e,t,n,o){var r="";J.anchors.length&&!J.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),ke=t,Kn(r+"/"+t)):null!=e?(ke=t,Kn(n)):Kn(n)),qn()}function Kn(t){if(J.recordHistory)location.hash=t;else if(He||Ie)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function $n(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=G(e);return null==t&&(t=n),t}function qn(){var e=D(p)[0],t=D(x,e)[0],n=$n(e),o=$n(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");Ee.className=Ee.className.replace(i,""),ne(Ee,"fp-viewing-"+r)}function Qn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Ie&&$t(e)&&J.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Gn(e,t){St(0,"internal"),void 0!==t&&(ze=!0),Hn(se(e,T),e),void 0!==t&&(ze=!1),St(ot.scrollingSpeed,"internal")}function Jn(e){var t=Math.round(e);if(J.css3&&J.autoScrolling&&!J.scrollBar)Yn("translate3d(0px, -"+t+"px, 0px)",!1);else if(J.autoScrolling&&!J.scrollBar)U(Be,{top:-t+"px"}),Ae.test.top=-t+"px";else{var n=rn(t);ro(n.element,n.options)}}function Zn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function eo(e,t,n){"all"!==t?Ve[n][t]=e:Object.keys(Ve[n]).forEach((function(t){Ve[n][t]=e}))}function to(e,t,n){J[e]=t,"internal"!==n&&(ot[e]=t)}function no(){var e=J.licenseKey,t="font-size: 15px;background:yellow;";te?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(P("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),P("error","https://github.com/alvarotrigo/fullPage.js#options.")),W(de,a)?P("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(J.continuousVertical&&(J.loopTop||J.loopBottom)&&(J.continuousVertical=!1,P("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!J.scrollOverflow||!J.scrollBar&&J.autoScrolling||P("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!J.continuousVertical||!J.scrollBar&&J.autoScrolling||(J.continuousVertical=!1,P("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),J.scrollOverflow&&null==J.scrollOverflowHandler&&(J.scrollOverflow=!1,P("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),lt.forEach((function(e){J[e]&&P("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)})),J.anchors.forEach((function(e){var t=[].slice.call(D("[name]")).filter((function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()})),n=[].slice.call(D("[id]")).filter((function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()}));if(n.length||t.length){P("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||t.length)&&P("error",'"'+e+'" is is being used by another element `'+o+"` property")}})))}function oo(t,n,o,r){var i=function(t){return t.self!=e&&W(t,A)?t.scrollLeft:!J.autoScrolling||J.scrollBar?ve():t.offsetTop}(t),l=n-i,a=0;et=!0,function c(){if(et){var s=n;a+=20,o&&(s=e.fp_easings[J.easing](a,i,l,o)),ro(t,s),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()}()}function ro(t,n){!J.autoScrolling||J.scrollBar||t.self!=e&&W(t,A)?t.self!=e&&W(t,A)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function io(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=G(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function lo(e){io.call(this,e,v)}function ao(e){io.call(this,e,L)}no()}}(i,l),r.fullpage}.call(t,n,t,e))||(e.exports=o)}(this,window,document),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n=e.extend({},n,{$:e}),new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage)}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(776)})()})();