const video = document.getElementById("bgVideo");

// Force autoplay attempt
video.muted = true;
video.play().catch(() => {
  // If autoplay is blocked, wait for user interaction
  document.body.addEventListener("click", () => {
    video.play();
  }, { once: true });
});