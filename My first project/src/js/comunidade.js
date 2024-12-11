document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os ícones de like
    const likeIcons = document.querySelectorAll(".engagements i");

    // Adiciona o evento de clique para alternar a classe "active"
    likeIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            icon.classList.toggle("active"); // Alterna a classe "active" no ícone
        });
    });
});