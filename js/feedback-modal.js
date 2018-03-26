function initFeedback() {
  var feedbackWindow = document.querySelector('.feedback');

  document.getElementById('feedback-button')
    .addEventListener('click', showFeedback);

  [
    document.querySelector('.feedback__close-btn'), 
    document.querySelector('.feedback__mask-overlay')
  ]
    .forEach(function (element) {
      element.addEventListener('click', hideFeedback);
    });

  function showFeedback(e) {
    e.preventDefault();
    if (!feedbackWindow.classList.contains('feedback_shown')) {
      document.addEventListener('keydown', onKeyPress);
      feedbackWindow.classList.add('feedback_shown');
    }
  }

  function hideFeedback(e) {
    e.preventDefault();
    if (feedbackWindow.classList.contains('feedback_shown')) {
      document.removeEventListener('keydown', onKeyPress);
      feedbackWindow.classList.remove('feedback_shown');
    }
  }

  function onKeyPress (e) {
    if (e.keyCode == 27) {
      hideFeedback(e);
    }
  }
}

initFeedback();
