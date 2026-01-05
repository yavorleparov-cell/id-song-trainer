let songs = [];
let currentSong = null;

async function loadSongs() {
  const response = await fetch("songs.json");
  songs = await response.json();
}

function playRandomSong() {
  currentSong = songs[Math.floor(Math.random() * songs.length)];

  document.getElementById("player").innerHTML = `
    <iframe width="560" height="315"
      src="${currentSong.url}?autoplay=1"
      frameborder="0" allow="autoplay">
    </iframe>
  `;
}

function checkAnswer() {
  const guess = document.getElementById("guess").value.toLowerCase();
  const correct = currentSong.name.toLowerCase();

  if (guess === correct) {
    document.getElementById("result").innerText = "🔥 Correct!";
  } else {
    document.getElementById("result").innerText = "❌ Wrong! It was: " + currentSong.name;
  }
}

loadSongs();
