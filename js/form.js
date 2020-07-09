var searchButton = document.querySelector('.show-modal-button');
var searchForm = document.querySelector('.search-form');
var arrivalDate = document.querySelector('#arrival-date');
var departureDate = document.querySelector('#departure-date');
var adult = document.querySelector('#adult');
var children = document.querySelector('#children');

searchForm.classList.add('modal-hide');

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (searchForm.classList.contains('modal-show')) {
    searchForm.classList.remove('modal-show');
    searchForm.classList.add('modal-hide');
  } else {
    searchForm.classList.remove('modal-hide');
    searchForm.classList.add('modal-show');
  }
});

searchForm.addEventListener('submit', function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adult.value) {
    evt.preventDefault();
    searchForm.classList.add('modal-error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains('modal-show')) {
      evt.preventDefault();
      searchForm.classList.remove('modal-show');
      searchForm.classList.remove('modal-error');
    }
  }
});