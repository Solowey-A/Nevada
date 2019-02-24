function $(selector) {
  return document.querySelector(selector);
}

$('.subscribe').addEventListener('focus', function () {
  this.classList.add('form_focus');
}, true);

$('.subscribe').addEventListener('blur', function () {
  this.classList.remove('form_focus');
}, true);






