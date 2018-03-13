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

Array.prototype.forEach.call(document.querySelectorAll('.popup-container'), function(element) {
  initPopupAnchor(element, 'popup-container_infocus');
});
