const formulario = document.querySelector(".form");
const sucesso = document.querySelector(".success-message");
const entrada = document.querySelector("input");
const aviso = document.getElementById("email-error");
const botaoForm = document.querySelector("form button");
const botaoSucesso = document.querySelector(".success-message button");

// Expressão regular para validar email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

botaoForm.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o envio do formulário

    if (regexEmail.test(entrada.value)) {
        // Email válido: mostra mensagem de sucesso
        formulario.classList.add("oculto");
        sucesso.classList.remove("oculto");
    } else {
        // Email inválido: mostra mensagem de erro e borda vermelha
        aviso.classList.remove("oculto");
        entrada.style.border = "0.16rem solid var(--Tomato)";
    }
});

entrada.addEventListener("input", () => {
    entrada.style.border = "0.16rem solid var(--Dark-Slate-Grey)";
    aviso.classList.add("oculto");
});

botaoSucesso.addEventListener("click", () => {
    sucesso.classList.add("oculto");
    formulario.classList.remove("oculto");
    entrada.value = ""; // Limpa o campo de e-mail
    entrada.style.border = "0.1rem solid var(--Grey)"; // Reseta a borda
    aviso.classList.add("oculto"); // Esconde a mensagem de erro
});