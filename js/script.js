document.addEventListener('DOMContentLoaded', function() {
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
});