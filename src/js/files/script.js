// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.addEventListener('click', function (e) {
  const targetElement = e.target;

  if (!targetElement.closest('.langs')) {
    document.querySelector('.langs').classList.remove('active');
  }
});

document.querySelector('.langs__current').addEventListener('click', function (e) {
  e.target.closest('.langs').classList.toggle('active');
});
document.querySelector('.langs__arrow').addEventListener('click', function (e) {
  e.target.closest('.langs').classList.toggle('active');
});

// Отключение Parallax слайдов на мобильных устройствах
document.addEventListener('DOMContentLoaded', function () {
  if (document.documentElement.classList.contains('touch')) {
    document.querySelectorAll('[data-prlx-mouse]').forEach((image) => {
      image.removeAttribute('data-prlx-mouse');
    });

    document.querySelectorAll('.main-slider__slide').forEach((slide) => {
      slide.classList.add('touch-slide');
    });
  }
});
