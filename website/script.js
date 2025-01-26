const startGameButton = document.getElementById("startGameButton");
const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

// Set up canvas size
function resizeCanvas() {
  gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Start Game Button Event
startGameButton.addEventListener("click", () => {
    // document.querySelector(".landing-container").style.display = "none";
    // gameCanvas.style.display = "block";
    // startGame();
    window.location.href = "http://127.0.0.1:5500/index.html";
});

// // Basic Game Loop
// function startGame() {
//   let bubbles = [];
//   const colors = ["#00a8e8", "#1cc5dc", "#66d9ef"];

//   // Generate some bubbles
//   for (let i = 0; i < 20; i++) {
//     bubbles.push({
//       x: Math.random() * gameCanvas.width,
//       y: Math.random() * gameCanvas.height,
//       radius: Math.random() * 30 + 10,
//       dx: Math.random() * 2 - 1,
//       dy: Math.random() * 2 - 1,
//       color: colors[Math.floor(Math.random() * colors.length)],
//     });
//   }

//   function drawBubbles() {
//     ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

//     bubbles.forEach((bubble) => {
//       // Draw bubble
//       ctx.beginPath();
//       ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
//       ctx.fillStyle = bubble.color;
//       ctx.fill();

//       // Move bubble
//       bubble.x += bubble.dx;
//       bubble.y += bubble.dy;

//       // Bounce on edges
//       if (bubble.x < 0 || bubble.x > gameCanvas.width) bubble.dx *= -1;
//       if (bubble.y < 0 || bubble.y > gameCanvas.height) bubble.dy *= -1;
//     });

//     requestAnimationFrame(drawBubbles);
//   }

//   drawBubbles();
// }
