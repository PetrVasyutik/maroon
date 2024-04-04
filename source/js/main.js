import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initCoachesSlider, initReviewsSlider} from './modules/swiper/init-swiper';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initCoachesSlider();
    initReviewsSlider();
    const form = new Form();
    window.form = form;
    form.init();
  });

  const header = document.querySelector('.header');
  const menu = document.querySelector('.navigation');
  const button = document.querySelector('.header__menu-button');
  const overlay = document.querySelector('.navigation__overlay');

  function openHeaderMenu() {

    button.removeEventListener('click', openHeaderMenu);
    button.addEventListener('click', closeHeaderMenu);
    overlay.addEventListener('click', closeHeaderMenu);

    document.addEventListener('keydown', onEscPress);

    document.body.classList.add('no-scroll');
    header.classList.add('header_colored');
    menu.classList.add('navigation_open');
    button.classList.add('header__menu-button_active');

    setMenuHeight();
  }

  function closeHeaderMenu() {
    button.removeEventListener('click', closeHeaderMenu);
    button.addEventListener('click', openHeaderMenu);
    overlay.removeEventListener('click', closeHeaderMenu);

    document.removeEventListener('keydown', onEscPress);

    document.body.classList.remove('no-scroll');
    if (!isScrolled()) {
      header.classList.remove('header_colored');
    }
    menu.classList.remove('navigation_open');
    button.classList.remove('header__menu-button_active');
  }

  function onEscPress(evt) {
    if (evt.keyCode === 27) {
      closeHeaderMenu();
    }
  }

  function isScrolled() {
    const pxAmount = 0;
    const scrollTop = document.documentElement.scrollTop;

    return scrollTop > pxAmount;
  }

  function setMenuHeight() {
    menu.removeAttribute('style');

    const deltaHeight = document.body.offsetHeight - header.offsetHeight;
    const menuHeight = menu.offsetHeight;

    if (deltaHeight < menuHeight) {
      menu.setAttribute('style', 'height: ${deltaHeight}px');
    }
  }

  if (menu) {
    window.addEventListener('scroll', function () {
      if (isScrolled()) {
        header.classList.add('header_colored');
      } else {
        header.classList.remove('header_colored');
      }
    });

    closeHeaderMenu();
  }
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
