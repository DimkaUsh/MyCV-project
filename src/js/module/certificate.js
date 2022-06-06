import path from '../../data/certificatePath.json';
import changeDisplay from './changeDisplay';

function createCertificate(pathToImg) {
  const certificate = document.querySelector('.сertificate');
  certificate.innerHTML = `<img class="certificate-img" src=${pathToImg} alt="beOnMAX" />`;
}

const certificate = () => {
  const certificateButtons = document.querySelectorAll('.certificate-button'),
    modalCertificate = document.querySelector('.modal-certificate'),
    closeButton = document.querySelector('.close');

  certificateButtons.forEach((button) => {
    let pathToImg = null;
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
      changeDisplay(modalCertificate, 'block');
      createCertificate(pathToImg);
    });
  });

  closeButton.addEventListener('click', () => {
    changeDisplay(modalCertificate, 'none');
  });
};

export default certificate;
