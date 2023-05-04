// definisco il mio array di immagini
const imgCarousel = ["consegna/img/01.webp", "consegna/img/02.webp", "consegna/img/03.webp", "consegna/img/04.webp", "consegna/img/05.webp"];

// devo prendere un immagine dall'array e inserirla dentro ad un div con le opportune classi in modo che ad ogni click esca l'immagine
let currentIndex = 0;
let prevActiveImg = null;

// prendo la freccia per next
const arrowNext = document.getElementById("next");

// collego la freccia Next all'evento click
arrowNext.addEventListener("click", function () {
  if (currentIndex < imgCarousel.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

    //levo la classe "active"

  if (prevActiveImg) {
    prevActiveImg.classList.remove("active");
    prevActiveImg.classList.add("invisible");
  }

  let imgItem = `<div class="my_img"><img src="${imgCarousel[currentIndex]}" alt="image"></div>`;
  const itemsContainer = document.getElementById("items_container");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = imgItem;
  itemsContainer.append(newDiv);

// memorizzo l'immagine attuale come quella precedente
prevActiveImg = newDiv.querySelector(".my_img");


});
