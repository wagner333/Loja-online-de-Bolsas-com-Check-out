document.addEventListener("DOMContentLoaded", function() {
  const interval = 3000; // intervalo de 3 segundos (3000 milissegundos)
  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel input[type="radio"]');
  
  setInterval(function() {
      slides[slideIndex].checked = true;
      slideIndex++;
      if (slideIndex === slides.length) {
          slideIndex = 0;
      }
  }, interval);
});


// Store the current image sources for each product
// Definir os nomes das imagens para cada produto
let imagensPorProduto = {
  1: [
    "Design sem nome(7)2.png",
    "Design sem nome(8)3.png",
    "Design sem nome(9) (2).png",
    "Design sem nome(11).png"
  ],
  2: [
    "Design sem nome(7).png",
    "Design sem nome(8).png",
    "Design sem nome(9).png",

  ]
};


let indiceAtualImagem = {
  1: 0,
  2: 0
};


function proximoImagem(numero) {
  let imagem = document.getElementById(`image${numero}`);
  indiceAtualImagem[numero]++; 
  if (indiceAtualImagem[numero] >= imagensPorProduto[numero].length) {
    indiceAtualImagem[numero] = 0;
  }
  
  imagem.src = `imagens de produtos/${imagensPorProduto[numero][indiceAtualImagem[numero]]}`;
}


function anteriorImagem(numero) {
  let imagem = document.getElementById(`image${numero}`);
  indiceAtualImagem[numero]--; 
  if (indiceAtualImagem[numero] < 0) {
    indiceAtualImagem[numero] = imagensPorProduto[numero].length - 1;
  }
  
  imagem.src = `imagens de produtos/${imagensPorProduto[numero][indiceAtualImagem[numero]]}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
  });
});

