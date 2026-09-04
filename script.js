const members = [
  { id: "jiwoo", name: "Jiwoo", korean: "지우", fullName: "Choi Ji-woo", birthday: "7 September 2006", origin: "Seoul, Korea Selatan", role: "LEADER", emoji: "🍓", color: "#9fd9ff", fact: "Pernah belajar balet selama beberapa tahun, suka membawa buku harian saat bepergian, dan sering menjadi fotografer untuk para member." },
  { id: "carmen", name: "Carmen", korean: "카르멘", fullName: "Nyoman Ayu Carmenita", birthday: "28 Maret 2006", origin: "Denpasar, Bali, Indonesia", role: "OLDEST", emoji: "🌴", color: "#ffd574", fact: "Fasih berbahasa Indonesia, Korea, dan Inggris. Carmen juga dapat memainkan piano, gitar, drum, dan biola." },
  { id: "yuha", name: "Yuha", korean: "유하", fullName: "Yu Ha-ram", birthday: "12 April 2007", origin: "Wonju, Korea Selatan", role: "MEMBER", emoji: "🎀", color: "#ffacd3", fact: "Memiliki saudari kembar, menjalani masa trainee paling panjang, dan dikenal memiliki kepekaan nada yang sangat baik." },
  { id: "stella", name: "Stella", korean: "스텔라", fullName: "Kim Da-hyun", birthday: "18 Juni 2007", origin: "Ulsan, Korea Selatan · besar di Vancouver", role: "MEMBER", emoji: "🧁", color: "#c7b5ff", fact: "Fasih berbahasa Korea dan Inggris. Ia dapat memainkan gitar, bas, dan drum, serta pernah bermain dalam band sekolah." },
  { id: "juun", name: "Juun", korean: "주은", fullName: "Kim Ju-eun", birthday: "3 Desember 2008", origin: "Goyang, Korea Selatan", role: "MEMBER", emoji: "👾", color: "#a993ff", fact: "Suka menciptakan koreografi dan dikenal sebagai salah satu member yang paling cepat mempelajari gerakan tari baru." },
  { id: "a-na", name: "A-na", korean: "에이나", fullName: "Roh Yu-na", birthday: "20 Desember 2008", origin: "Seoul, Korea Selatan", role: "MEMBER", emoji: "🌻", color: "#ffda57", fact: "Menyukai warna pastel, punya energi yang besar, dan merupakan penggemar serial Detective Conan." },
  { id: "ian", name: "Ian", korean: "이안", fullName: "Jeong Lee-an", birthday: "9 Oktober 2009", origin: "Seoul, Korea Selatan", role: "MEMBER", emoji: "🫛", color: "#a9e69c", fact: "Pernah bekerja sebagai model anak, suka mengoleksi parfum, dan dikenal sebagai pembawa suasana di dalam grup." },
  { id: "ye-on", name: "Ye-on", korean: "예온", fullName: "Kim Na-yeon", birthday: "19 April 2010", origin: "Yangsan, Korea Selatan", role: "MAKNAE", emoji: "😊", color: "#ffb08c", fact: "Mulai bernyanyi sejak kecil, memiliki pengalaman teater musikal, dan merupakan member paling muda Hearts2Hearts." }
];

const albums = [
  { id: "the-chase", title: "The Chase", year: "2025", date: "24 FEB 2025", type: "DEBUT SINGLE ALBUM", color: "linear-gradient(135deg,#bedfff,#8eaeff)", tracks: ["The Chase", "Butterflies"] },
  { id: "style", title: "STYLE", year: "2025", date: "18 JUN 2025", type: "DIGITAL SINGLE", color: "linear-gradient(135deg,#ff74b5,#ffbf65)", tracks: ["STYLE"] },
  { id: "pretty-please", title: "Pretty Please", year: "2025", date: "24 SEP 2025", type: "PRE-RELEASE SINGLE", color: "linear-gradient(135deg,#a7dfff,#ff9fca)", tracks: ["Pretty Please"] },
  { id: "focus", title: "FOCUS", year: "2025", date: "20 OCT 2025", type: "1ST MINI ALBUM", color: "linear-gradient(135deg,#263a70,#7287bb)", tracks: ["FOCUS", "Apple Pie", "Pretty Please", "Flutter", "Blue Moon", "STYLE"] },
  { id: "rude", title: "RUDE!", year: "2026", date: "20 FEB 2026", type: "DIGITAL SINGLE", color: "linear-gradient(135deg,#333143,#b96e9c)", tracks: ["RUDE!"] },
  { id: "lemon-tang", title: "Lemon Tang", year: "2026", date: "22 JUN 2026", type: "2ND MINI ALBUM", color: "linear-gradient(135deg,#f9ed43,#8bd370)", tracks: ["Lemon Tang", "15-LOVE", "Baby Steps (처음투성이)", "heart emoji (♡)", "Secret Recipe", "RUDE!"] },
  { id: "iconic-heart", title: "ICONIC HEART", year: "2026", date: "12 AUG 2026", type: "1ST JAPAN SINGLE", color: "linear-gradient(135deg,#82cfff,#ff73b9)", tracks: ["ICONIC HEART", "Lemon Tang (Japanese Ver.)", "RUDE! (Japanese Ver.)"] }
];

const trackFileNames = {
  "The Chase": "the-chase.mp3",
  "Butterflies": "butterflies.mp3",
  "STYLE": "style.mp3",
  "Pretty Please": "pretty-please.mp3",
  "FOCUS": "focus.mp3",
  "Apple Pie": "apple-pie.mp3",
  "Flutter": "flutter.mp3",
  "Blue Moon": "blue-moon.mp3",
  "RUDE!": "rude.mp3",
  "Lemon Tang": "lemon-tang.mp3",
  "15-LOVE": "15-love.mp3",
  "Baby Steps (처음투성이)": "baby-steps.mp3",
  "heart emoji (♡)": "heart-emoji.mp3",
  "Secret Recipe": "secret-recipe.mp3",
  "ICONIC HEART": "iconic-heart.mp3",
  "Lemon Tang (Japanese Ver.)": "lemon-tang-japanese-ver.mp3",
  "RUDE! (Japanese Ver.)": "rude-japanese-ver.mp3"
};

const allTracks = [];
albums.forEach(album => album.tracks.forEach(title => {
  if (!allTracks.some(track => track.title === title && track.album === album.title)) {
    allTracks.push({ title, album: album.title, albumId: album.id, file: trackFileNames[title] });
  }
}));

const memberGrid = document.querySelector("#memberGrid");
const albumGrid = document.querySelector("#albumGrid");
const memberModal = document.querySelector("#memberModal");
const audioPlayer = document.querySelector("#audioPlayer");
const audio = document.querySelector("#audioElement");
const toast = document.querySelector("#toast");
let currentTrackIndex = -1;
let toastTimer;

function escapeText(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span.innerHTML;
}

function renderMembers() {
  memberGrid.innerHTML = members.map((member, index) => `
    <button class="member-card reveal" type="button" data-member="${member.id}" style="--member-color:${member.color}" aria-label="Buka profil ${member.name}">
      <span class="member-placeholder">${String(index + 1).padStart(2, "0")}</span>
      <img src="assets/images/members/${member.id}.jpg" alt="Foto ${member.name}" loading="lazy" onerror="this.remove()">
      <span class="member-emoji" aria-hidden="true">${member.emoji}</span>
      <span class="member-info">
        <p>${member.role}</p>
        <h3>${member.name}</h3>
        <span>${member.fullName}</span>
      </span>
    </button>
  `).join("");
}

function renderAlbums() {
  albumGrid.innerHTML = albums.map(album => `
    <article class="album-card reveal" data-year="${album.year}">
      <div class="album-cover image-fallback" style="--album-color:${album.color}">
        <img src="assets/images/albums/${album.id}.jpg" alt="Sampul ${album.title}" loading="lazy" onerror="this.remove()">
        <span>${album.title.split(" ").map(word => word[0]).join("").slice(0, 3)}</span>
      </div>
      <div class="album-meta">
        <div class="album-topline"><span>${album.type}</span><span>${album.date}</span></div>
        <h3>${album.title}</h3>
        <ol class="track-list">
          ${album.tracks.map((track, index) => `
            <li>
              <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
              <span>${escapeText(track)}</span>
              <button class="track-play play-track" type="button" data-track="${escapeText(track)}" data-album="${album.id}" aria-label="Putar ${escapeText(track)}">▶</button>
            </li>
          `).join("")}
        </ol>
      </div>
    </article>
  `).join("");
}

renderMembers();
renderAlbums();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min((index % 4) * 70, 210)}ms`;
  revealObserver.observe(element);
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const logoStage = document.querySelector(".logo-stage");
function spinLogo() {
  if (logoStage.classList.contains("spin")) return;
  logoStage.classList.add("spin");
  window.setTimeout(() => logoStage.classList.remove("spin"), 1450);
}
logoStage.addEventListener("mouseenter", spinLogo);
logoStage.addEventListener("click", spinLogo);
logoStage.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    spinLogo();
  }
});

function openMember(id) {
  const member = members.find(item => item.id === id);
  if (!member) return;
  const modalPhoto = document.querySelector("#modalPhoto");
  modalPhoto.style.setProperty("--member-color", member.color);
  modalPhoto.innerHTML = `<span class="modal-initial">${member.name[0]}</span><img src="assets/images/members/${member.id}.jpg" alt="Foto ${member.name}" onerror="this.remove()">`;
  document.querySelector("#modalRole").textContent = member.role;
  document.querySelector("#modalName").textContent = member.name;
  document.querySelector("#modalKorean").textContent = member.korean;
  document.querySelector("#modalFullName").textContent = member.fullName;
  document.querySelector("#modalBirthday").textContent = member.birthday;
  document.querySelector("#modalOrigin").textContent = member.origin;
  document.querySelector("#modalFact").textContent = member.fact;
  memberModal.classList.add("open");
  memberModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  memberModal.querySelector(".modal-close").focus();
}

function closeMember() {
  memberModal.classList.remove("open");
  memberModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

memberGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-member]");
  if (card) openMember(card.dataset.member);
});
memberModal.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeMember));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && memberModal.classList.contains("open")) closeMember();
});

document.querySelectorAll(".filter-chip").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter-chip").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  const filter = button.dataset.filter;
  document.querySelectorAll(".album-card").forEach(card => {
    card.hidden = filter !== "all" && card.dataset.year !== filter;
  });
}));

function findTrackIndex(title, albumId) {
  let index = allTracks.findIndex(track => track.title.toLowerCase() === title.toLowerCase() && (!albumId || track.albumId === albumId));
  if (index < 0) index = allTracks.findIndex(track => track.albumId === title);
  return index;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3500);
}

function loadTrack(index, autoplay = true) {
  if (index < 0 || index >= allTracks.length) return;
  currentTrackIndex = index;
  const track = allTracks[index];
  audio.src = `assets/audio/${track.file}`;
  document.querySelector("#playerTitle").textContent = track.title;
  document.querySelector("#playerAlbum").textContent = track.album.toUpperCase();
  document.querySelector("#playerCover").style.background = albums.find(album => album.id === track.albumId)?.color || "";
  audioPlayer.classList.add("visible");
  if (autoplay) {
    audio.play().then(() => updatePlayButton(true)).catch(() => {
      updatePlayButton(false);
      showToast(`Tambahkan ${track.file} ke folder assets/audio untuk memutar lagu ini.`);
    });
  }
}

document.addEventListener("click", event => {
  const button = event.target.closest(".play-track");
  if (!button) return;
  const index = findTrackIndex(button.dataset.track, button.dataset.album);
  loadTrack(index);
});

function updatePlayButton(playing) {
  document.querySelector("#togglePlay").textContent = playing ? "❚❚" : "▶";
}

document.querySelector("#togglePlay").addEventListener("click", () => {
  if (currentTrackIndex < 0) return;
  if (audio.paused) audio.play().then(() => updatePlayButton(true)).catch(() => showToast("File audio belum ditemukan di folder assets/audio."));
  else { audio.pause(); updatePlayButton(false); }
});
document.querySelector("#prevTrack").addEventListener("click", () => loadTrack((currentTrackIndex - 1 + allTracks.length) % allTracks.length));
document.querySelector("#nextTrack").addEventListener("click", () => loadTrack((currentTrackIndex + 1) % allTracks.length));
document.querySelector("#closePlayer").addEventListener("click", () => {
  audio.pause();
  updatePlayButton(false);
  audioPlayer.classList.remove("visible");
});
audio.addEventListener("ended", () => loadTrack((currentTrackIndex + 1) % allTracks.length));
audio.addEventListener("error", () => {
  if (audio.src) showToast("Audio belum tersedia. Periksa nama file di folder assets/audio.");
});

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}
audio.addEventListener("timeupdate", () => {
  document.querySelector("#currentTime").textContent = formatTime(audio.currentTime);
  document.querySelector("#duration").textContent = formatTime(audio.duration);
  document.querySelector("#seekBar").value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
});
document.querySelector("#seekBar").addEventListener("input", event => {
  if (audio.duration) audio.currentTime = (Number(event.target.value) / 100) * audio.duration;
});

const pickBias = document.querySelector("#pickBias");
const biasResult = document.querySelector("#biasResult");
pickBias.addEventListener("click", () => {
  pickBias.disabled = true;
  let ticks = 0;
  const roulette = window.setInterval(() => {
    const member = members[Math.floor(Math.random() * members.length)];
    biasResult.innerHTML = `<span>${member.emoji}</span><h3>${member.name}</h3><p>${member.fullName}</p>`;
    biasResult.classList.add("has-result");
    ticks += 1;
    if (ticks > 12) {
      window.clearInterval(roulette);
      localStorage.setItem("h2h-bias", member.id);
      pickBias.textContent = "Pilih lagi";
      pickBias.disabled = false;
    }
  }, 85);
});

const savedBias = members.find(member => member.id === localStorage.getItem("h2h-bias"));
if (savedBias) {
  biasResult.innerHTML = `<span>${savedBias.emoji}</span><h3>${savedBias.name}</h3><p>${savedBias.fullName}</p>`;
  biasResult.classList.add("has-result");
  pickBias.textContent = "Pilih lagi";
}

const loveButton = document.querySelector("#loveButton");
const loveCount = document.querySelector("#loveCount");
let hearts = Number(localStorage.getItem("h2h-love") || 2025);
loveCount.textContent = hearts.toLocaleString("id-ID");
loveButton.addEventListener("click", event => {
  hearts += 1;
  localStorage.setItem("h2h-love", String(hearts));
  loveCount.textContent = hearts.toLocaleString("id-ID");
  loveButton.classList.remove("pop");
  requestAnimationFrame(() => loveButton.classList.add("pop"));
  createSpark(event.clientX || innerWidth / 2, event.clientY || innerHeight / 2, "♡");
});

const facts = [
  "Carmen adalah member pertama SM Entertainment yang berasal dari Indonesia.",
  "Nama S2U menempatkan penggemar di tengah Hearts2Hearts.",
  "The Chase dirilis pada 24 Februari 2025 sebagai lagu debut mereka.",
  "Jiwoo adalah leader Hearts2Hearts, sedangkan Ye-on adalah member termuda.",
  "FOCUS memuat enam lagu, termasuk STYLE dan Pretty Please.",
  "Lemon Tang juga memuat RUDE! sebagai lagu penutup.",
  "ICONIC HEART menandai debut Jepang Hearts2Hearts pada Agustus 2026.",
  "Warna fandom Hearts2Hearts adalah Sky Blue."
];
document.querySelector("#newFact").addEventListener("click", () => {
  const factBox = document.querySelector("#randomFact");
  let next = facts[Math.floor(Math.random() * facts.length)];
  while (next === factBox.textContent && facts.length > 1) next = facts[Math.floor(Math.random() * facts.length)];
  factBox.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 350 });
  factBox.textContent = next;
});

const finePointer = window.matchMedia("(pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const cursor = document.querySelector(".cursor-orbit");
let lastSpark = 0;

function createSpark(x, y, symbol = "✦") {
  if (reducedMotion) return;
  const spark = document.createElement("span");
  spark.className = "cursor-spark";
  spark.textContent = symbol;
  spark.style.left = `${x + (Math.random() - .5) * 18}px`;
  spark.style.top = `${y + (Math.random() - .5) * 18}px`;
  document.body.appendChild(spark);
  window.setTimeout(() => spark.remove(), 750);
}

if (finePointer && !reducedMotion) {
  document.addEventListener("pointermove", event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    if (performance.now() - lastSpark > 110 && event.target.closest(".hero-visual, .member-card, .fan-card")) {
      createSpark(event.clientX, event.clientY);
      lastSpark = performance.now();
    }
  });
  document.querySelectorAll("a, button, .logo-stage").forEach(element => {
    element.addEventListener("mouseenter", () => cursor.classList.add("active"));
    element.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });

  document.querySelectorAll(".member-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const bounds = card.getBoundingClientRect();
      const rotateY = ((event.clientX - bounds.left) / bounds.width - .5) * 8;
      const rotateX = -((event.clientY - bounds.top) / bounds.height - .5) * 8;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });
    card.addEventListener("pointerleave", () => card.style.transform = "");
  });
}
