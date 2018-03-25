function initPopupListener(elements) {
  var anchor = elements.anchor;
  var popup = elements.popup;

  var hover = false;
  var focus = false;

  addListeners(anchor);
  addListeners(popup);

  function applyState() {
    if (hover || focus) {
      anchor.classList.add('hover');
      popup.classList.remove('visually-hidden');
    } else {
      anchor.classList.remove('hover');
      popup.classList.add('visually-hidden');
    }
  }

  function addListeners(element) {
    element.addEventListener('mouseenter', function (e) {
      hover = true;
      applyState();
    });
    
    element.addEventListener('mouseleave', function (e) {
      hover = false;
      applyState();
    });

    listenFocusEvents(element, {
      focusin: function (e) {
        focus = true;
        applyState();
      },
      focusout: function (e) {
        focus = false;
        applyState();
      }
    });
  }
}

function initFocusListener(element, className) {
  listenFocusEvents(element, {
    focusin: function (e) {
      element.classList.add(className);
    },
    focusout: function (e) {
      element.classList.remove(className);
    }
  });
}

function listenFocusEvents(element, listeners) {
  element.addEventListener('focusin', listeners.focusin);

  element.addEventListener('focusout', function (e) {
    if (!e.relatedTarget || e.relatedTarget && !isNestedChild(e.relatedTarget, element)) {
      listeners.focusout();
    }
  });
}

function isNestedChild(child, parent) {
  while (child.parentElement) {
    if (child.parentElement === parent) {
      return true;
    }
    child = child.parentElement;
  }
  return false;
}

initPopupListener({
  anchor: document.getElementById('main-menu-catalog-link'),
  popup: document.querySelector('.catalog-menu')
});

initPopupListener({
  anchor: document.querySelector('.user-menu__link_search'),
  popup: document.querySelector('.search-form')
});

initPopupListener({
  anchor: document.querySelector('.user-menu__link_login'),
  popup: document.querySelector('.login-form')
});

var fullBasket = document.querySelector('.user-menu__link_basket-full');
if (fullBasket) {
  initPopupListener({
    anchor: fullBasket,
    popup: document.querySelector('.basket-form')
  });
}

Array.prototype.forEach.call(document.querySelectorAll('.catalog-item'), function(element) {
  initFocusListener(element, 'catalog-item_infocus');
});
