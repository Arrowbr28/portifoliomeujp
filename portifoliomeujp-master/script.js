const changeButton = document.querySelector('#change-color-button');
    const revertButton = document.querySelector('#revert-color-button');
    const body = document.querySelector('body');
    const divs = document.querySelectorAll('div');
    let originalColors = [];

    changeButton.addEventListener('click', () => {
      originalColors = [];
      for (let i = 0; i < divs.length; i++) {
        originalColors.push(divs[i].style.backgroundColor);
        divs[i].style.backgroundColor = 'black';
      }
      body.style.backgroundColor = 'black';
    });

    revertButton.addEventListener('click', () => {
      for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = originalColors[i];
      }
      body.style.backgroundColor = '';
    });