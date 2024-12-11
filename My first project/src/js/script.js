let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
               links.classList.remove('active');
              document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            })
        }
    })
}
<script>
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos
        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Cria um objeto para armazenar a mensagem
        const contactMessage = {
            fullName,
            email,
            phone,
            subject,
            message,
            date: new Date().toISOString() // Adiciona a data e hora do envio
        };

        // Recupera as mensagens existentes no LocalStorage
        let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

        // Adiciona a nova mensagem à lista
        messages.push(contactMessage);

        // Salva a lista atualizada no LocalStorage
        localStorage.setItem("contactMessages", JSON.stringify(messages));

        // Exibe uma mensagem de sucesso
        alert("Mensagem enviada com sucesso!");

        // Limpa o formulário
        document.getElementById("contact-form").reset();
    });
</script>




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}