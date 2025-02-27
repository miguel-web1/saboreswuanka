document.addEventListener("DOMContentLoaded", function () {
  const botonInicio = document.querySelector(".boton-inicio");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
          botonInicio.classList.add("mostrar");
      } else {
          botonInicio.classList.remove("mostrar");
      }
  });
});
