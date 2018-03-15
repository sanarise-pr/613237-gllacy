function isNestedChild (child, parent) {
  while (child.parentElement) {
    if (child.parentElement === parent) {
      return true;
    }
    child = child.parentElement;
  }
  return false;
}

function initPopupAnchor(element, className) {
  element.addEventListener('focusin', function (e) {
    element.classList.add(className);
  });

  element.addEventListener('focusout', function (e) {
    if (!e.relatedTarget || e.relatedTarget && !isNestedChild(e.relatedTarget, element)) {
      element.classList.remove(className);
    }
  });
}

// TODO: переименовать файл, т.к. он касается не только попапа, 
// а скорее про ловлю фокуса на дочерних элементах

Array.prototype.forEach.call(document.querySelectorAll('.popup-container'), function(element) {
  initPopupAnchor(element, 'popup-container_infocus');
});

Array.prototype.forEach.call(document.querySelectorAll('.catalog-list__item'), function(element) {
  initPopupAnchor(element, 'catalog-list__item_infocus');
});
