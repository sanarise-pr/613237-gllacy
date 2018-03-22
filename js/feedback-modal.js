function toggleFeedbackWindow () {
  document.querySelector('.feedback').classList.toggle('feedback_shown');
}

[document.getElementById('feedback-button'), document.querySelector('.feedback__close-btn')].forEach(function(element) {
  element.addEventListener('click', toggleFeedbackWindow);
})
