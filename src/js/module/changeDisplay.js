function changeDisplay(element, condition) {
  switch (condition) {
    case 'block':
      element.style.display = 'block';
      break;
    case 'none':
      element.style.display = 'none';
      break;
  }
}

export default changeDisplay;
