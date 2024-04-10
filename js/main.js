document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  const modal = document.querySelector ('.modal');
  const modalBtn = document.querySelectorAll  ('[data-toggle=modal]')

  modalBtn.forEach09(element => {
    element.addEventListener('click', () => {
    modal.classList.toggle ('modal--visible')
    });
});
});