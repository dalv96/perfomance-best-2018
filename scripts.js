const arrowLeftScens = document.querySelector('.scenarios__paginator .paginator__arrow_left');
const arrowRightScens = document.querySelector('.scenarios__paginator .paginator__arrow_right');
const panelCountScens = document.querySelectorAll('.scenarios__panel').length;
const pageCountScens = document.querySelectorAll('.scenarios__page').length;
const scenarios = document.querySelector('.scenarios');
const pagiantorScens = document.querySelector('.scenarios__paginator');
let currentPage = 1;

pagiantorScens.classList.toggle('paginator_hide', panelCountScens <= 9);

arrowRightScens.addEventListener('click', function () {
  if (currentPage < pageCountScens) {
    currentPage += 1;
    arrowRightScens.classList.toggle('paginator__arrow_disabled', currentPage === pageCountScens);
    arrowLeftScens.classList.toggle('paginator__arrow_disabled', currentPage === 1);
    scenarios.scroll({
      top: 0,
      left: 645,
      behavior: 'smooth'
    });
  }
});

arrowLeftScens.addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage -= 1;
    arrowRightScens.classList.toggle('paginator__arrow_disabled', currentPage === pageCountScens);
    arrowLeftScens.classList.toggle('paginator__arrow_disabled', currentPage === 1);
    scenarios.scroll({
      top: 0,
      left: -645,
      behavior: 'smooth'
    });
  }
});

const selectButton = document.querySelector('.filter__select-button');
const selectButtonText = document.querySelector('.filter__select-button .button__text');
const selectOptions = document.querySelectorAll('.filter__select-item');
const popup = document.querySelector('.filter__select-popup');

selectButton.addEventListener('click', function() {
  popup.classList.toggle('filter__select-popup_open');
});

let widths = '';
window.addEventListener('scroll', function() {
    widths += document.querySelectorAll('body')[0].offsetWidth;
    document.querySelector('.stats').innerHTML = widths;
});

selectOptions.forEach(o => {
  o.addEventListener('click', function(e) {
    document.querySelector('#' + e.target.dataset.group).checked = true;

    selectOptions.forEach(opt => opt.classList.toggle('filter__select-item_checked', false));
    e.target.classList.toggle('filter__select-item_checked', true);
    popup.classList.toggle('filter__select-popup_open', false);
    selectButtonText.innerText = e.target.innerText;
  })
});

document.querySelector('.menu__icon').addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('menu_open');
});
