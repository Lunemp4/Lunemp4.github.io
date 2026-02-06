<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>LuneMp4</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Vidéo en fond -->
  <video id="myVideo" playsinline preload="auto" loop muted>
    <source src="bg-vid.mp4" type="video/mp4">
    Votre navigateur ne supporte pas la vidéo.
  </video>

  <!-- Overlay pour démarrage -->
  <div id="overlay">Cliquez pour démarrer</div>

  <!-- Carte / menu -->
  <main class="card">
    <img src="https://yt3.googleusercontent.com/QZ11COsuIokb8yaYj6x6C4FxYocz23zd64NEolxFpNxaCEgVQSvitYrq_RSmY5985aPJRkeQeu4=s160-c-k-c0x00ffffff-no-rj" class="avatar" alt="Avatar">

    <h1 id="username">LuneMp4</h1>

    <!-- Badges -->
    <div class="badges" id="badges"></div>

    <p id="bio"></p>

    <div class="links" id="links">
  <!-- Les icônes seront injectées via JS ou tu peux les mettre directement ici -->
</div>

  </main>

  <script src="script.js"></script>
</body>
</html>
