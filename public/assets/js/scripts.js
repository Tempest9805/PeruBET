!function(){return function e(t,n,o){function r(a,l){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(c)return c(a,!0);var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){return r(t[a][1][e]||e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var c="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}}()({1:[function(e,t,n){"use strict";var o=e("./modules/topNav"),r=e("./modules/searchFilter");(0,e("./modules/carousel_netflix").carousel_netflix)(".accordion.v1",!0),(0,o.topNav)(),document.body.classList.contains("home")||document.body.classList.contains("portfolio")&&(0,r.searchFilter)()},{"./modules/carousel_netflix":2,"./modules/searchFilter":3,"./modules/topNav":4}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.carousel_netflix=function(e,t){document.addEventListener("click",function(n){if(n.target.matches(e+" .a-btn"))if(n.target.parentElement.classList.contains("active"))n.target.parentElement.classList.remove("active");else{if(1==t){console.log("yameteee");var o=document.querySelectorAll(e+" .a-container");Array.prototype.forEach.call(o,function(e){e.classList.remove("active")})}n.target.parentElement.classList.add("active")}})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.searchFilter=function(){var e,t,n,o=function(e,t,n){var o=document.querySelectorAll(t),r=document.querySelectorAll(n);o.forEach(function(t){t.textContent.toUpperCase().includes(e)?t.style.display="block":t.style.display="none"}),r.forEach(function(t){t.textContent.toUpperCase().includes(e)?t.style.display="block":t.style.display="none"})};e=document.getElementById("searchInput"),t=".class-item__fragment",n=".class-item",e.addEventListener("keyup",function(e){"Escape"===e.key&&(e.target.value=""),o(e.target.value.toUpperCase(),t,n)})}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){document.querySelector(".hamburger").addEventListener("click",function(e){e.preventDefault(),[].map.call(document.querySelectorAll(".hamburger"),function(e){e.classList.toggle("is-active")}),[].map.call(document.querySelectorAll(".top-nav__menu"),function(e){e.classList.toggle("show-top-nav")})})}},{}]},{},[1]);
//# sourceMappingURL=scripts.js.map
