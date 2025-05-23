document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Gracias por inscribirte al evento!");
});

function filtrarGaleria() {
  const categoriaSeleccionada = document.getElementById("filtro").value;
  const elementos = document.querySelectorAll(".galeria img, .galeria video");
  const titulo = document.getElementById("titulo-categoria");

  // Mostrar u ocultar elementos según categoría
  elementos.forEach(el => {
    const categoria = el.getAttribute("data-categoria");
    if (categoriaSeleccionada === "todos" || categoria === categoriaSeleccionada) {
      el.style.display = "inline-block";
    } else {
      el.style.display = "none";
    }
  });

  // Actualizar título según selección
  switch (categoriaSeleccionada) {
    case "concentración":
      titulo.textContent = "Concentración Motera";
      break;
    case "autos":
      titulo.textContent = "Autos Locos";
      break;
    case "trial":
      titulo.textContent = "Trial";
      break;
    default:
      titulo.textContent = "";
      break;
  }
}

document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Tu solicitud ha sido enviada! Nos pondremos en contacto contigo pronto.");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

