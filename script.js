document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.querySelector(".toggle-btn");
  const overlay = document.getElementById("overlay");

  // Mostrar / ocultar sidebar
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("closed");
      overlay.classList.toggle("active");
    });
  }

  // Cerrar sidebar al tocar fuera (overlay)
  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.add("closed");
      overlay.classList.remove("active");
    });
  }

  // Simulación de login (solo en cuenta.html)
  const loginForm = document.getElementById("loginForm");
  const mensajeCuenta = document.getElementById("mensajeCuenta");

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const clave = document.getElementById("clave").value;

      if (usuario === "admin" && clave === "1234") {
        mensajeCuenta.innerHTML = `<div class="alert alert-success">Bienvenido, ${usuario}. Saldo actual: ₡250,000</div>`;
      } else {
        mensajeCuenta.innerHTML = `<div class="alert alert-danger">Usuario o contraseña incorrectos</div>`;
      }
    });
  }
});
