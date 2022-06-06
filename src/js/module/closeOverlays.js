import changeDisplay from './changeDisplay';

const closeOverlays = () => {
  const overlays = document.querySelectorAll('.overlay');

  overlays.forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('overlay')) {
        changeDisplay(overlay.parentNode, 'none');
      }
    });
  });
};

export default closeOverlays;
