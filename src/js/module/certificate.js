import path from '../../data/certificatePath.json';
import changeDisplay from './changeDisplay';
import disableElement from './disableElement';

function createCertificate(pathToImg) {
  const certificate = document.querySelector('.сertificate');
  certificate.innerHTML = `<img class="certificate-img" src=${pathToImg} alt="beOnMAX" />`;
}

const certificate = () => {
  const certificateButtons = document.querySelectorAll('.certificate-button'),
    modalCertificate = document.querySelector('.modal-certificate'),
    overlayCertificate = modalCertificate.querySelector('.overlay_certificate'),
    closeButton = modalCertificate.querySelector('.close');

  certificateButtons.forEach((button) => {
    let pathToImg = null;

    //в зависимости от того какой дата атрибут у кнопки назначаем ей путь до картинки
    switch (button.getAttribute('data-course')) {
      case 'beonmax':
        pathToImg = path.beonmax;
        break;

      case 'rsstage0':
        pathToImg = path.rsstage0;
        break;

      case 'udemy':
        pathToImg = path.udemy;
        break;
    }

    button.addEventListener('click', () => {
      disableElement(button, 500);
      changeDisplay(modalCertificate, 'block');
      createCertificate(pathToImg);
      setTimeout(() => overlayCertificate.classList.toggle('overlay_open'), 50);
    });
  });

  closeButton.addEventListener('click', (e) => {
    disableElement(closeButton, 1000);
    overlayCertificate.classList.toggle('overlay_open');
    setTimeout(() => changeDisplay(modalCertificate, 'none'), 500);
  });

  overlayCertificate.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay_certificate')) {
      disableElement(overlayCertificate, 500);
      overlayCertificate.classList.toggle('overlay_open');
      setTimeout(() => changeDisplay(modalCertificate, 'none'), 500);
    }
  });
};

export default certificate;
