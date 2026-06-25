(function startMusic() {
  // === Background Music Playlist ===
  let playlist = [
    "sound/track1.mp3",
    "sound/track2.mp3",
    "sound/track3.mp3",
    "sound/track4.mp3",
    "sound/track5.mp3",
    "sound/track6.mp3",
    "sound/track7.mp3",
    "sound/track8.mp3",
    "sound/track9.mp3",
    "sound/track10.mp3",
    "sound/track11.mp3",
    "sound/track12.mp3",
    "sound/track13.mp3",
    "sound/track14.mp3",
    "sound/track15.mp3",
    "sound/track16.mp3",
    "sound/track17.mp3",
    "sound/track18.mp3",
    "sound/track19.mp3",
    "sound/track20.mp3",
    "sound/track21.mp3",
    "sound/track22.mp3",
    "sound/track23.mp3",
    "sound/track24.mp3",
    "sound/track25.mp3",
    "sound/track26.mp3",
    "sound/track27.mp3",
    "sound/track28.mp3",
    "sound/track29.mp3",
    "sound/track30.mp3",
    "sound/track31.mp3",
    "sound/track32.mp3",
    "sound/track34.mp3",
    "sound/track35.mp3",
    "sound/track36.mp3",
    "sound/track37.mp3",
    "sound/track38.mp3",
    "sound/track39.mp3",
    "sound/track40.mp3",
    "sound/track41.mp3",
    "sound/track42.mp3",
    "sound/track43.mp3",
    "sound/track44.mp3",
    "sound/track45.mp3",
    "sound/track46.mp3",
    "sound/track47.mp3",    
  ];

  // Shuffle the playlist each session
  function shufflePlaylist() {
    for (let i = playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
    }
  }
  shufflePlaylist();

  // Current music index
  let currentTrack = 0;
  let bgMusic = new Audio(playlist[currentTrack]);
  bgMusic.volume = 0.5;
  bgMusic.loop = false;

  // Move to the next track automatically
  bgMusic.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    bgMusic.src = playlist[currentTrack];
    if (window.sound) bgMusic.play();
  });

  // Start music
  function startMusic() {
    if (window.sound) {
      bgMusic.play().catch(() => console.log("Music will start after user input."));
    }
  }

  // === Sound Effects ===
  function playSFX(name) {
    if (!window.sound) return;
    const sfx = new Audio("sound/" + name + ".mp3");
    sfx.volume = 0.8;
    sfx.play();
  }

  // Make it compatible with existing calls
  function soundVerifier(name) {
    playSFX(name);
  }

  // === Volume / Mute Toggle ===
  if (typeof window.volume === "undefined") {
    window.volume = function() {};
  }

  const originalVolume = window.volume;

  window.volume = function() {
    const icon = document.getElementById("volume");
    if (!window.sound) {
      window.sound = true;
      if (icon) {
        icon.className = "fa fa-volume-up";
        icon.style.margin = "0";
      }
      bgMusic.play();
    } else {
      window.sound = false;
      if (icon) {
        icon.className = "fa fa-volume-off";
        icon.style.margin = "0 7px 0 0";
      }
      bgMusic.pause();
    }
  };

  // Expose only what the rest of your game needs
  window.startMusic = startMusic;
  window.playSFX = playSFX;
  window.soundVerifier = soundVerifier;
})();
