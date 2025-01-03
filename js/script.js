/* document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.live__content-switch input[type="range"]');
    const beforeImage = document.querySelector('.live__before');
    const afterImage = document.querySelector('.live__after');
    const container = document.querySelector('.live__content-switch');

    function updateImage() {
        const value = slider.value;
        const containerWidth = beforeImage.offsetWidth;
        const position = (value / 100) * containerWidth;
        
        afterImage.style.clipPath = `inset(0 ${containerWidth - position}px 0 0)`;
    }

    slider.addEventListener('input', updateImage);
    window.addEventListener('resize', updateImage);
    updateImage();
});*/

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(
    '.live__content-switch input[type="range"]'
  );
  const beforeImage = document.querySelector(".live__before"); // картинка "was"
  const afterImage = document.querySelector(".live__after"); // картинка "now"
  const container = document.querySelector(".live__content-switch");

  function updateImage() {
    const value = slider.value;
    const containerWidth = container.offsetWidth;
    const position = (value / 100) * containerWidth;

    // Показываем картинку "now" (afterImage) слева от позиции ползунка
    afterImage.style.clipPath = `inset(0 ${containerWidth - position}px 0 0)`;

    // Показываем картинку "was" (beforeImage) справа от позиции ползунка
    beforeImage.style.clipPath = `inset(0 0 0 ${position}px)`;
  }

  slider.addEventListener("input", updateImage);
  window.addEventListener("resize", updateImage);
  updateImage();
});
