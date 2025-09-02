window.addEventListener("load", () => {
    setTimeout(() => {
        alert("ボタンのどれかをクリックするとイベントが発生するかも");
    }, 1000);
});

const wrappers = document.querySelectorAll(".wrapper");

let clickCount = 0;
let totalPoints = 0;

// 選べるポイントのリスト
const pointsList = [10,20,30,40,50,60,70,80,90,100];

wrappers.forEach(wrapper => {
  wrapper.addEventListener("click", function(e) {
    // wrapper全体じゃなく box 個別クリックのみ有効にする
    if (!e.target.className.startsWith("box")) return;

    if (clickCount < 5) {
      const randomPoint = pointsList[Math.floor(Math.random() * pointsList.length)];
      totalPoints += randomPoint;
      clickCount++;

      alert(`${randomPoint} ポイント獲得！`);

      if (clickCount === 5) {
        alert(`合計ポイントは ${totalPoints} です 🎉`);
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


const $emojiClick = document.querySelector(".crear");
const hearts = [];

// 5つハートを生成してボタン内に追加
for (let i = 0; i < 5; i++) {
  const $agregar = document.createElement("div");
  $agregar.classList.add("agregar");

  // ラッパーを作って span を入れる
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
      void h.offsetWidth; // ← ブラウザに再描画させるトリック

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

const enviarEmoji = document.createElement("div");
enviarEmoji.classList.add("enviarEmoji");
enviarEmoji.innerHTML = "<span>📤</span>";
$emojiClick.appendChild(enviarEmoji);