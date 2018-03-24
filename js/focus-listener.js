function isNestedChild (child, parent) {
  while (child.parentElement) {
    if (child.parentElement === parent) {
      return true;
    }
    child = child.parentElement;
  }
  return false;
}

function initFocusListener(element, className) {
  element.addEventListener('focusin', function (e) {
    element.classList.add(className);
  });

  element.addEventListener('focusout', function (e) {
    if (!e.relatedTarget || e.relatedTarget && !isNestedChild(e.relatedTarget, element)) {
      element.classList.remove(className);
    }
  });
}

Array.prototype.forEach.call(document.querySelectorAll('.catalog-item'), function(element) {
  initFocusListener(element, 'catalog-item_infocus');
});
