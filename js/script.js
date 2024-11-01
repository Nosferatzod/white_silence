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
