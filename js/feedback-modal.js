function initFeedback() {
  var feedbackWindow = document.querySelector('.feedback');

  document.getElementById('feedback-button')
    .addEventListener('click', showFeedback);

  document.querySelector('.feedback__close-btn')
    .addEventListener('click', hideFeedback);

  document.querySelector('.feedback__background')
    .addEventListener('click', function (e) {
      if (e.target === this) {
        hideFeedback(e);
      }
    });

  function showFeedback(e) {
    e.preventDefault();
    feedbackWindow.classList.remove('feedback_show-must-go-out');
    feedbackWindow.classList.add('feedback_show-must-go-on');
    document.addEventListener('keydown', onKeyPress);
  }

  function hideFeedback(e) {
    e.preventDefault();
    feedbackWindow.classList.add('feedback_show-must-go-out');
    document.removeEventListener('keydown', onKeyPress);
  }

  function onKeyPress (e) {
    if (e.keyCode == 27) {
      hideFeedback(e);
    }
  }
}

initFeedback();
