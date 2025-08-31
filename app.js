window.addEventListener("load", () => {
    setTimeout(() => {
        alert("ボタンのどれかをクリックするとイベントが発生するかも");
    }, 1000);
});

const box8 = document.querySelector(".box8");
box8.addEventListener("click", function() {
    setTimeout(() => {
        const mensaje = Math.random() < 0.3 ? "\u{2728} 大吉" : "小吉";
        alert(mensaje);
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

// ページ読み込み時に保存済みデータをフォームにセット
window.addEventListener("DOMContentLoaded", () => {
  const savedEmail = localStorage.getItem("youremail");
  const savedPassword = localStorage.getItem("password");

  console.log("読み込み email:", savedEmail);
  console.log("読み込み password:", savedPassword);

  if (savedEmail) {
    document.getElementById("youremail").value = savedEmail;
  }
  if (savedPassword) {
    document.getElementById("password").value = savedPassword;
  }
});

// フォーム送信時に入力値を保存
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault(); // テスト用に送信止める
  console.log("保存処理実行");

  const email = document.getElementById("youremail").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("youremail", email);
  localStorage.setItem("password", password);
});


const $submitButton = document.querySelector("button[type='submit']");
const $agregar = document.createElement("div");
$agregar.classList.add("agregar");
$agregar.innerHTML = "<span>❤️</span>";
$submitButton.appendChild($agregar);
$submitButton.addEventListener("click", (event) => {
    setTimeout(() => {
        $agregar.classList.add("animate");
    }, 100);
});
