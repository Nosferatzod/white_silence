const toggleButton = document.getElementById('toggleButton');
const navbarNav = document.getElementById('navbarNav');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    navbarNav.classList.remove('active');
});


document.addEventListener("contextmenu", (event) => event.preventDefault());
document.onkeydown = function(e) {
   if (e.key === "PrintScreen") {
      alert("Print Screen desativado");
      return false;
   }
   if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "p")) {
      alert("Ações desativadas para proteger o conteúdo.");
      return false;
   }
};

document.addEventListener("copy", function(event) {
   alert("Copiar conteúdo não é permitido.");
   event.preventDefault();
});

// Detecta tentativa de Print Screen com teclas de acesso rápido
document.addEventListener("keydown", function(event) {
   if (event.key === "PrintScreen") {
       alert("Captura de tela desativada.");
       event.preventDefault();
   }
});


function alerta() {
    alert('A página não pode ser salva.');
    return false;
}

function verificaBotao(oEvent) {
    var tecla = (oEvent.keyCode) ? oEvent.keyCode : oEvent.which;
    if (tecla == 17 || tecla == 44 || tecla == 106) {
        alerta();
    }
}

document.onkeypress = verificaBotao;
document.onkeydown = verificaBotao;
document.oncontextmenu = alerta;

