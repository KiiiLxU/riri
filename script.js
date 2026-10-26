const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", () => {
surprise.classList.toggle("hidden");

if (surprise.classList.contains("hidden")) {
    surpriseBtn.textContent = "Open Your Surprise 🎁";
} else {
    surpriseBtn.textContent = "Hide Surprise 💗";
    createConfetti();
}

});

function createConfetti() {
const symbols = ["💗", "💕", "💖", "✨", "🎉", "🌸"];

for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 18 + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

}

// Gentle floating hearts in the background
setInterval(() => {
const heart = document.createElement("span");

heart.className = "heart";
heart.textContent = "♡";
heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = 18 + Math.random() * 15 + "px";
heart.style.animationDuration = 6 + Math.random() * 4 + "s";

document.body.appendChild(heart);

heart.addEventListener("animationend", () => {
    heart.remove();
});

}, 1200);