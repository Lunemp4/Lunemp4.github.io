/* ==========================================================================
   CONFIG EASY-EDIT
   ========================================================================== */
const CONFIG = {
  // Définis le nombre de particules en arrière-plan (0 pour désactiver)
  PARTICLES_COUNT: 30,
  
  // Nom de la clé localStorage pour le compteur de vues
  STORAGE_KEY: "lunemp4-profile-views"
};

/* ==========================================================================
   ÉLÉMENTS DOM
   ========================================================================== */
const enterScreen = document.getElementById("enter");
const music = document.getElementById("music");
const soundBtn = document.getElementById("sound");
const viewsElem = document.getElementById("views");
const particlesContainer = document.getElementById("particles");
const bgVideo = document.getElementById("bg-video");

let isMuted = false;


/* ==========================================================================
   ÉCRAN D'ENTRÉE, VIDÉO & AUDIO
   ========================================================================== */
enterScreen.addEventListener("click", async () => {
  enterScreen.classList.add("hide");

  // Force le lancement de la vidéo de fond
  if (bgVideo) {
    bgVideo.muted = false;
    bgVideo.play().catch(err => console.error("Erreur vidéo :", err));
  }

  // Lecture de la musique
  try {
    await music.play();
    isMuted = false;
    soundBtn.textContent = "♫";
  } catch (error) {
    // Si l'autoplay est bloqué par le navigateur
    isMuted = true;
    soundBtn.textContent = "🔇";
  }
});

soundBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      soundBtn.textContent = "♫";
      isMuted = false;
    } catch (error) {
      console.error("Impossible de lire l'audio :", error);
    }
  } else {
    music.pause();
    soundBtn.textContent = "🔇";
    isMuted = true;
  }
});

/* ==========================================================================
   GÉNÉRATEUR DE PARTICULES
   ========================================================================== */
function createParticles() {
  if (!particlesContainer || CONFIG.PARTICLES_COUNT === 0) return;

  for (let i = 0; i < CONFIG.PARTICLES_COUNT; i++) {
    const p = document.createElement("span");
    p.className = "particle";

    p.style.left = `${Math.random() * 100}vw`;
    p.style.top = `${Math.random() * 100 + 100}vh`;
    p.style.animationDuration = `${10 + Math.random() * 15}s`;
    p.style.animationDelay = `${-Math.random() * 15}s`;
    p.style.opacity = (0.1 + Math.random() * 0.3).toFixed(2);

    particlesContainer.appendChild(p);
  }
}

/* ==========================================================================
   INITIALISATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initViewCounter();
  createParticles();
});