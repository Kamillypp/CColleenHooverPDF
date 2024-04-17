// Função para definir um cookie
function setCookie(name, value, expirationDate) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString() + "; path=/";
}

// Definir a data de expiração para 17 de abril de 2025
let expirationDate = new Date("Fri, 17 Apr 2025 12:00:00 UTC");

// Definir o cookie
setCookie("nome", "João", expirationDate);

