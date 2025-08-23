let puntoSeleccionado = "";

function openLogin(title) {
  puntoSeleccionado = title;
  document.getElementById("loginTitle").innerText = "Ingrese su Clave - " + title;
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("claveInput").value = "";
}

function closeLogin() {
  document.getElementById("loginScreen").style.display = "none";
}

function aceptarClave() {
  const clave = document.getElementById("claveInput").value;
  const claveCorrecta = "1234";

  if (clave === claveCorrecta) {
    if (puntoSeleccionado === "Restaurante") {
      window.location.href = "restaurante.html";
    } else if (puntoSeleccionado === "Ranchitos") {
      window.location.href = "ranchitos.html";
    } else if (puntoSeleccionado === "Terraza") {
      window.location.href = "ranchon.html";
    }
  } else {
    alert("Clave incorrecta");
  }
}
