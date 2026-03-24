// ===== VALIDAÇÃO DO FORMULÁRIO =====
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede envio padrão

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});

// ===== TEMA CLARO / ESCURO =====
const botaoTema = document.createElement("button");
botaoTema.textContent = "🌙 Tema";
botaoTema.style.position = "fixed";
botaoTema.style.bottom = "20px";
botaoTema.style.right = "20px";
botaoTema.style.padding = "10px";
botaoTema.style.borderRadius = "8px";
botaoTema.style.border = "none";
botaoTema.style.cursor = "pointer";
botaoTema.style.backgroundColor = "#3D1950";
botaoTema.style.color = "white";
botaoTema.style.zIndex = "1000";

document.body.appendChild(botaoTema);

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botaoTema.textContent = "☀️ Tema";
    } else {
        botaoTema.textContent = "🌙 Tema";
    }
});