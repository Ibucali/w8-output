document.body.animate(
  {
    background: ["#fcc", "rgba(233, 48, 187, 1)"],
  },
  {
    fill: "forwards",
    duration: 3000
  }
);

const wrappers = document.querySelectorAll(".wrapper");

let clickCount = 0;
let totalPoints = 0;

const pointsList = [10,20,30,40,50,60,70,80,90,100];

wrappers.forEach(wrapper => {
  wrapper.addEventListener("click", function(e) {
    
    if (!e.target.className.startsWith("box")) return;

    if (clickCount < 5) {
      const randomPoint = pointsList[Math.floor(Math.random() * pointsList.length)];
      totalPoints += randomPoint;
      clickCount++;

      alert(`${randomPoint} puntos！`);

      if (clickCount === 5) {
        alert(`Tu total es ${totalPoints} puntos \u{1F389}`);
      }
      if (totalPoints >= 300) {
        alert("\u{1F38A} Felicidades! Has alcanzado 300 puntos.");
      }
    }
  });
});

const box8 = document.querySelectorAll(".box8");
box8.forEach(box => {
    box.addEventListener("click", function() {
        setTimeout(() => {
            const mensaje = Math.random() < 0.3 ? "\u{2728} 大吉" : "小吉";
            alert(mensaje);
        }, 1000);
    });
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

  if (savedEmail) {
    document.getElementById("youremail").value = savedEmail;
  }
  if (savedPassword) {
    document.getElementById("password").value = savedPassword;
  }
});

// フォーム送信時に入力値を保存
const form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const email = document.getElementById("youremail").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("youremail", email);
  localStorage.setItem("password", password);
});


const $emojiClick = document.querySelector(".crear");


const heartsContainer = document.createElement("div");
heartsContainer.classList.add("hearts-container");
$emojiClick.appendChild(heartsContainer);

const hearts = [];
for (let i = 0; i < 5; i++) {
  const $agregar = document.createElement("div");
  $agregar.classList.add("agregar");
  $agregar.innerHTML = '<div class="heart-wrap"><span>❤️</span></div>';
  heartsContainer.appendChild($agregar);
  hearts.push($agregar.querySelector("span"));
}


hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    hearts.forEach((h, j) => {
      h.classList.remove("animate");
      void h.offsetWidth; 
      setTimeout(() => {
        h.classList.add("animate");
      }, 100 * j);
    });
  });
});

// 📩
const enviarEmoji = document.createElement("div");
enviarEmoji.classList.add("enviarEmoji");
enviarEmoji.innerHTML = "<span>📩</span>";
$emojiClick.insertBefore(enviarEmoji, heartsContainer);

let zoomed = false;

enviarEmoji.addEventListener("mouseenter", () => {
  // PC の hover 代わり
  if (!("ontouchstart" in window)) {
    enviarEmoji.classList.add("moveRightZoom");
    enviarEmoji.classList.remove("resetZoom");
  }
});

enviarEmoji.addEventListener("mouseleave", () => {
  // PC で hover を外したら戻す
  if (!("ontouchstart" in window)) {
    enviarEmoji.classList.remove("moveRightZoom");
    enviarEmoji.classList.add("resetZoom");
  }
});

enviarEmoji.addEventListener("click", () => {
  // スマホ・PC 共通のクリック処理
  if (!zoomed) {
    enviarEmoji.classList.add("moveRightZoom");
    enviarEmoji.classList.remove("resetZoom");
    zoomed = true;
  } else {
    enviarEmoji.classList.remove("moveRightZoom");
    enviarEmoji.classList.add("resetZoom");
    zoomed = false;
  }
});



// 💬
const comentario = document.createElement("div");
comentario.classList.add("comentario");
comentario.innerHTML = "<span>💬</span>";
$emojiClick.appendChild(comentario);

comentario.addEventListener("mouseover", () => {
  comentario.classList.add("zoomed");
});
comentario.addEventListener("mouseout", () => {
  comentario.classList.remove("zoomed");
});

const $butttoo = document.querySelector("#buttoon");
$butttoo.addEventListener("click", function(){ 
  alert("\u{1F49B} Gracias por tu apoyo! \u{1F49B} "); 
});

const $hoge = document.querySelector("#hacerClick");
for (let i = 1; i < 6; i++) {
  const $multipleButton = document.createElement("button");
  $multipleButton.classList.add("btn", "btn-primary");
  $multipleButton.innerHTML = "butttooo" + i;
  $hoge.appendChild($multipleButton);
  $multipleButton.addEventListener("click", function(){ 
    alert("\u{1F493} Gracias por tu apoyo! \u{1F493} ");
  });
}
