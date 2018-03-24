function PopupDispather (elements) {
  var anchor = elements.anchor;
  var popup = elements.popup;

  var hover = false;
  var focus = false;

  addListeners(anchor);
  addListeners(popup);

  function applyState () {
    if (hover || focus) {
      anchor.classList.add('hover');
      popup.classList.remove('visually-hidden');
    } else {
      anchor.classList.remove('hover');
      popup.classList.add('visually-hidden');
    }
  }

  function addListeners (element) {
    element.addEventListener('mouseenter', function (e) {
      hover = true;
      applyState();
    });
    
    element.addEventListener('mouseleave', function (e) {
      hover = false;
      applyState();
    });
    
    element.addEventListener('focusin', function (e) {
      focus = true;
      applyState();
    });
    
    element.addEventListener('focusout', function (e) {
      if (!e.relatedTarget || e.relatedTarget && !isNestedChild(e.relatedTarget, element)) {
        focus = false;
        applyState();
      }
    });
  }
}

function isNestedChild (child, parent) {
  while (child.parentElement) {
    if (child.parentElement === parent) {
      return true;
    }
    child = child.parentElement;
  }
  return false;
}

PopupDispather({
  anchor: document.getElementById('main-menu-catalog-link'),
  popup: document.querySelector('.catalog-menu')
});

PopupDispather({
  anchor: document.querySelector('.user-menu__link_search'),
  popup: document.querySelector('.search-form')
});

PopupDispather({
  anchor: document.querySelector('.user-menu__link_login'),
  popup: document.querySelector('.login-form')
});

var fullBasket = document.querySelector('.user-menu__link_basket-full');
if (fullBasket) {
  PopupDispather({
    anchor: fullBasket,
    popup: document.querySelector('.basket-form')
  });
}
