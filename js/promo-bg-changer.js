function initBackgroundChanger (inputElements) {
  for (var index = 0; index < inputElements.length; index++) {
    inputElements[index].addEventListener('change', function() {
      setupBodyBackground(inputElements);
    });
  }

  setupBodyBackground(inputElements);
}

function setupBodyBackground(inputElements) {
  for (var index = 0; index < inputElements.length; index++) {
    var input = inputElements[index];
    var className = input.getAttribute('data-body-class');
    if (input.checked) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }
};

initBackgroundChanger(document.querySelectorAll('.promo__slider-input'));
