const btn = document.querySelector(".modal-btn");
const closebtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

btn.addEventListener("click", function () {

   modal.classList.add("open-modal");
  
});
closebtn.addEventListener("click", function () {
   modal.classList.remove("open-modal");
});

