document.addEventListener("DOMContentLoaded", function (event) { 
  //do work
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchmodal = () => {
  modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach09(element => {
    element.addEventListener('click', switchmodal); 
   });
    
    closeBtn.addEventListener('click', switchmodal); 

});
