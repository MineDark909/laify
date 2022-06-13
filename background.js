const DELAY_IN_MS = 3000;
const VIDEO_LENGTH_IN_MS = 20000;

const VIDEO_HTML_STRING =
  "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://github.com/MineDark909/laify/blob/main/lai.mp4?raw=true' type='video/mp4'></video>";

function laify() {
  setTimeout(() => {
    const body = document.body;
    body.innerHTML = VIDEO_HTML_STRING;
    body.style.backgroundColor = "black";
    setTimeout(() => {
      window.location.replace(document.URL);
    }, VIDEO_LENGTH_IN_MS);
  }, DELAY_IN_MS);
}

const chance = Math.floor(Math.random() * 100);
if (chance <= 10) {
  laify();
}
