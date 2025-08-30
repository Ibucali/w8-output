window.addEventListener("load", () => {
    setTimeout(() => {
        alert("ボタンのどれかをクリックするとイベントが発生するかも");
    }, 1000);
});

const emailInput = document.getElementById("youremail");
emailInput.placeholder = "name@company.com"

const passwordInput = document.getElementById("password");
passwordInput.placeholder = "••••••••";