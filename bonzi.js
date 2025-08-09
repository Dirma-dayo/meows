const phrases = [
  "i saw what you downloaded last summer",
  "click here to claim your 10MB of FREE RAM",
  "hidup.... HIDUP MAHASISWA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "would u like to install clippy? (not a virus)",
  "ur computer needs more glitter click here!",
  "im watching you type",
  "hi im definitely not spyware click me for infinite funsies",
];

setInterval(() => {
  const speech = document.getElementById("bonzi-speech");
  speech.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const bonzi = document.getElementById("bonzi");
  if (bonzi) {
    bonzi.addEventListener("click", () => {
      window.open("https://vx-underground.org/", "_blank");
    });
  }
});