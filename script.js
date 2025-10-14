const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// Ejemplo de login simulado (para cuenta.html)
const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("clave").value;
    const mensaje = document.getElementById("mensajeCuenta");

    if (user === "admin" && pass === "1234") {
      mensaje.innerHTML = `<div class="alert alert-success">Bienvenido, ${user}</div>`;
    } else {
      mensaje.innerHTML = `<div class="alert alert-danger">Usuario o contraseña incorrectos</div>`;
    }
  });
}
