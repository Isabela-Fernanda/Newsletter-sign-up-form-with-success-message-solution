# Frontend Mentor - Newsletter sign-up form with success message solution

Esta é uma solução para o [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Índice

- [Visão geral](#visão-geral)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)

## Visão geral

### Screenshot
Mobile
![](/src/design-solution/Mobile-solution.png) ![](/src/design-solution/Mobile-error.png)

![](/src/design-solution/Mobile-success.png)

Desktop
![](/src/design-solution/Desktop-solution.png)
![](/src/design-solution/Desktop-error.png)
![](/src/design-solution/Desktop-success.png)

### Links

- Live Site URL: [Newsletter sign-up form with success message]()

## Meu processo

### Construído com

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first 

### O que eu aprendi

Neste projeto eu pratiquei meus conhecimentos de js e também aprendi como checar a validade de um email.

```js
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
```


### Desenvolvimento contínuo

Planejo continuar focando em projetos de HTML, CSS e JS. 

## Autor

- Frontend Mentor - [@Isabela-Fernanda](https://www.frontendmentor.io/profile/Isabela-Fernanda)

