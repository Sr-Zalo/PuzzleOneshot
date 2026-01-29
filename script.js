let code = "";
const correctCode = "598734162";

function updateScreen() {
  const screen = document.getElementById("screen");

  if (screen) {
    screen.textContent = code;
  }
}

function addNumber(num) {
  code += num;
  updateScreen();
}

function deleteLast() {
  code = code.slice(0, -1);
  updateScreen();
}

function clearAll() {
  code = "";
  updateScreen();
}

function sendCode() {
  const message = document.getElementById("message");

  if (code === correctCode) {
    window.location.href = "success.html";
  } else {
    message.textContent = "❌ Código incorrecto";
    clearAll();
  }
}

/* 🔥 IMPORTANTE: mostrar pantalla al cargar */
document.addEventListener("DOMContentLoaded", updateScreen);
