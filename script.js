document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('fullName');
    const fullName = 'Kacper Werakso';
    let index = 0;
  
    function typeEffect() {
      if (index < fullName.length) {
        nameElement.textContent += fullName[index];
        index++;
        setTimeout(typeEffect, 150);
      }
    }
  
    typeEffect();
  });