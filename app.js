window.addEventListener("load", () => {
    setTimeout(() => {
        alert("ボタンのどれかをクリックするとイベントが発生するかも");
    }, 1000);
});

const emailInput = document.getElementById("youremail");
emailInput.placeholder = "name@company.com"

const passwordInput = document.getElementById("password");
passwordInput.placeholder = "••••••••";

const contextHelp = document.getElementById("contexthelp");
const contextHelp1 = document.getElementById("contexthelp1");

emailInput.addEventListener("focus", () => {
    contextHelp.style.display = "block";
});
emailInput.addEventListener("blur", () => {
    contextHelp.style.display = "none";
});
passwordInput.addEventListener("focus", () => {
    contextHelp1.style.display = "block";
});
passwordInput.addEventListener("blur", () => {
    contextHelp1.style.display = "none";
});