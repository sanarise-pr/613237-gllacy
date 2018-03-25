function initPopupListener(e){var t=e.anchor,n=e.popup,o=!1,u=!1;function i(){o||u?(t.classList.add("hover"),n.classList.remove("visually-hidden")):(t.classList.remove("hover"),n.classList.add("visually-hidden"))}function s(e){e.addEventListener("mouseenter",function(e){o=!0,i()}),e.addEventListener("mouseleave",function(e){o=!1,i()}),listenFocusEvents(e,{focusin:function(e){u=!0,i()},focusout:function(e){u=!1,i()}})}s(t),s(n)}function initFocusListener(t,n){listenFocusEvents(t,{focusin:function(e){t.classList.add(n)},focusout:function(e){t.classList.remove(n)}})}function listenFocusEvents(t,n){t.addEventListener("focusin",n.focusin),t.addEventListener("focusout",function(e){(!e.relatedTarget||e.relatedTarget&&!isNestedChild(e.relatedTarget,t))&&n.focusout()})}function isNestedChild(e,t){for(;e.parentElement;){if(e.parentElement===t)return!0;e=e.parentElement}return!1}initPopupListener({anchor:document.getElementById("main-menu-catalog-link"),popup:document.querySelector(".catalog-menu")}),initPopupListener({anchor:document.querySelector(".user-menu__link_search"),popup:document.querySelector(".search-form")}),initPopupListener({anchor:document.querySelector(".user-menu__link_login"),popup:document.querySelector(".login-form")});var fullBasket=document.querySelector(".user-menu__link_basket-full");fullBasket&&initPopupListener({anchor:fullBasket,popup:document.querySelector(".basket-form")}),Array.prototype.forEach.call(document.querySelectorAll(".catalog-item"),function(e){initFocusListener(e,"catalog-item_infocus")});