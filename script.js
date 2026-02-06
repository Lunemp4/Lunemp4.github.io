// CONFIG UTILISATEUR
const userConfig = {
    username: "LuneMp4",
    bio: "Créateur De Contenu",
    badges: [
        { name: "owner", image: "https://cdn3.emoji.gg/emojis/905668-crown.gif" },
        { name: "verified", image: "https://github.com/mezotv/discord-badges/raw/main/assets/server/Verified.svg" },
        { name: "vip", image: "https://github.com/mezotv/discord-badges/raw/main/assets/hypesquadevents.svg" },
        { name: "Support", image: "https://cdn3.emoji.gg/emojis/733217-diamond.png"},
    ],
};


// VIDÉO ET OVERLAY
const video = document.getElementById('myVideo');
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  video.muted = false;
  video.play().catch(err => console.log('Erreur lecture vidéo:', err));
  overlay.classList.add('hide');
});

// APPLICATION UTILISATEUR
document.getElementById("username").textContent = userConfig.username;
document.getElementById("bio").textContent = userConfig.bio;

const badgesContainer = document.getElementById("badges");

userConfig.badges.forEach(badge => {
    const img = document.createElement("img");
    img.src = badge.image;
    img.alt = badge.name;
    img.title = badge.name.toUpperCase();
    img.className = `badge-img badge-${badge.name.toLowerCase()}`;
    badgesContainer.appendChild(img);
});

// PARTICULES SUR BADGES
function createParticle(badge, x, y) {
    const particle = document.createElement("span");
    particle.className = "particle";
    badge.appendChild(particle);

    particle.style.left = x + "px";
    particle.style.top = y + "px";

    const angle = Math.random() * 2 * Math.PI;
    const distance = 30 + Math.random() * 20;

    const vx = Math.cos(angle) * distance;
    const vy = Math.sin(angle) * distance;

    particle.animate([
        { transform: "translate(0px, 0px)", opacity: 1 },
        { transform: `translate(${vx}px, ${vy}px)`, opacity: 0 }
    ], { duration: 700 + Math.random() * 300, easing: "ease-out" });

    setTimeout(() => particle.remove(), 1000);
}

document.querySelectorAll(".badge-img").forEach(badge => {
    badge.addEventListener("mouseenter", () => {
        const x = badge.offsetWidth / 2;
        const y = badge.offsetHeight / 2;
        for (let i = 0; i < 6; i++) createParticle(badge, x, y);
    });
});


// CONTROLE DES LIEN

const linksConfig = [
  { name: "youtube", url: "https://www.youtube.com/@Lunemp4", icon: "icon/youtube.webp" },
  { name: "instagram", url: "https://www.instagram.com/lune_mp4", icon: "icon/insta.webp" },
  { name: "TikTok", url: "https://www.tiktok.com/@lune_mp4", icon: "icon/tiktok.webp" },
  { name: "discord", url: "https://discord.com/invite/MS8Yz6ZbQ8", icon: "icon/discord.webp" },
  
];

const linksContainer = document.getElementById("links");

linksConfig.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.target = "_blank";
  a.title = link.name;

  const img = document.createElement("img");
  img.src = link.icon;
  img.alt = link.name;

  a.appendChild(img);
  linksContainer.appendChild(a);
});



console.log("ready");
