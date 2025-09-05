window.addEventListener("load", () => {
    setTimeout(() => {
        alert("ボタンのどれかをクリックするとイベントが発生するかも");
    }, 1000);
});

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
  e.preventDefault(); // テスト用に送信止める

  const email = document.getElementById("youremail").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("youremail", email);
  localStorage.setItem("password", password);
});


const $emojiClick = document.querySelector(".crear");
const hearts = [];

// 5つハートを生成してボタン内に追加
for (let i = 0; i < 5; i++) {
  const $agregar = document.createElement("div");
  $agregar.classList.add("agregar");

  $agregar.innerHTML = '<div class="heart-wrap"><span>❤️</span></div>';

  $emojiClick.appendChild($agregar);
  hearts.push($agregar.querySelector("span"));
}

// ❤️がクリックされたら、全部順番にアニメーション
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    hearts.forEach((h, j) => {
      // まずリセット（繰り返し用）
      h.classList.remove("animate");
      void h.offsetWidth; 

      // 順番にクラスを付与
      setTimeout(() => {
        h.classList.add("animate");
      }, 100 * j);
    });
  });
});

const comentario = document.createElement("div");
comentario.classList.add("comentario");
comentario.innerHTML = "<span>💬</span>";
$emojiClick.appendChild(comentario);

comentario.addEventListener("mouseover", () => {
  comentario.classList.add("zoomed");
});
comentario.addEventListener("mouseout", () => {
  comentario.classList.remove("zoomed")
});


const enviarEmoji = document.createElement("div");
enviarEmoji.classList.add("enviarEmoji");
enviarEmoji.innerHTML = "<span>📤</span>";
// マウスホバーで右に移動＋拡大
enviarEmoji.addEventListener("mouseover", () => {
  enviarEmoji.classList.remove("resetZoom"); // 戻り状態をリセット
  enviarEmoji.classList.add("moveZoom");
});

// クリックで元の位置に戻す
enviarEmoji.addEventListener("click", () => {
  enviarEmoji.classList.remove("moveZoom");
  enviarEmoji.classList.add("resetZoom");
});

$emojiClick.appendChild(enviarEmoji);

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
