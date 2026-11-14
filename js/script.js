/* DATA LAGU HEARTS2HEARTS (18 GROUP + 2 MEMBER OST) */
const songsData = [
  { title: "The Chase", album: "The Chase • Feb 2025", era: "Debut Song", emoji: "🦋", cover: "assets/images/albums/the-chase.jpg", audio: "assets/audio/the-chase.mp3", albumIdx: 0 },
  { title: "Butterflies", album: "The Chase • Feb 2025", era: "B-Side", emoji: "🦋", cover: "assets/images/albums/the-chase.jpg", audio: "assets/audio/butterflies.mp3", albumIdx: 0 },
  { title: "STYLE", album: "Digital Single • Jun 2025", era: "Single", emoji: "🩵", cover: "assets/images/albums/style.jpg", audio: "assets/audio/style.mp3", albumIdx: 1 },
  { title: "Pretty Please", album: "FOCUS • Sep 2025", era: "Pre-release", emoji: "🌸", cover: "assets/images/albums/focus.jpg", audio: "assets/audio/pretty-please.mp3", albumIdx: 2 },
  { title: "FOCUS", album: "1st Mini Album • Okt 2025", era: "Title Track", emoji: "✨", cover: "assets/images/albums/focus.jpg", audio: "assets/audio/focus.mp3", albumIdx: 2 },
  { title: "Apple Pie", album: "FOCUS • Okt 2025", era: "B-Side", emoji: "🥧", cover: "assets/images/albums/focus.jpg", audio: "assets/audio/apple-pie.mp3", albumIdx: 2 },
  { title: "Flutter", album: "FOCUS • Okt 2025", era: "B-Side", emoji: "💫", cover: "assets/images/albums/focus.jpg", audio: "assets/audio/flutter.mp3", albumIdx: 2 },
  { title: "Blue Moon", album: "FOCUS • Okt 2025", era: "B-Side", emoji: "🌙", cover: "assets/images/albums/focus.jpg", audio: "assets/audio/blue-moon.mp3", albumIdx: 2 },
  { title: "RUDE!", album: "Inkigayo 1st Win • Feb 2026", era: "Hit Single", emoji: "🔥", cover: "assets/images/albums/rude.jpg", audio: "assets/audio/rude.mp3", albumIdx: 3 },
  { title: "Lemon Tang", album: "2nd Mini Album • Jun 2026", era: "Title Track", emoji: "🍋", cover: "assets/images/albums/lemon-tang.jpg", audio: "assets/audio/lemon-tang.mp3", albumIdx: 4 },
  { title: "15-LOVE", album: "Lemon Tang • Jun 2026", era: "B-Side", emoji: "🎾", cover: "assets/images/albums/lemon-tang.jpg", audio: "assets/audio/15-love.mp3", albumIdx: 4 },
  { title: "Baby steps (처음투성이)", album: "Lemon Tang • Jun 2026", era: "B-Side", emoji: "👣", cover: "assets/images/albums/lemon-tang.jpg", audio: "assets/audio/baby-steps.mp3", albumIdx: 4 },
  { title: "heart emoji (♡)", album: "Lemon Tang • Jun 2026", era: "B-Side", emoji: "🩵", cover: "assets/images/albums/lemon-tang.jpg", audio: "assets/audio/heart-emoji.mp3", albumIdx: 4 },
  { title: "Secret Recipe", album: "Lemon Tang • Jun 2026", era: "B-Side", emoji: "🧁", cover: "assets/images/albums/lemon-tang.jpg", audio: "assets/audio/secret-recipe.mp3", albumIdx: 4 },
  { title: "ICONIC HEART", album: "1st Japanese Single • Agu 2026", era: "JP Debut", emoji: "🇯🇵", cover: "assets/images/albums/iconic-heart.jpg", audio: "assets/audio/iconic-heart.mp3", albumIdx: 5 },
  { title: "Moonride", album: "KIA Collab • Sep 2026", era: "Collab", emoji: "🚗", cover: "assets/images/albums/moonride.jpg", audio: "assets/audio/moonride.mp3", albumIdx: 6 },
  { title: "Candy Box Lover", album: "OST Single • Okt 2026", era: "OST", emoji: "🍬", cover: "assets/images/albums/candy-box.jpg", audio: "assets/audio/candy-box-lover.mp3", albumIdx: 7 },
  { title: "Next Chapter", album: "Promo Single • Okt 2026", era: "Special", emoji: "🎮", cover: "assets/images/albums/next-chapter.jpg", audio: "assets/audio/next-chapter.mp3", albumIdx: 8 },
  { title: "눈을 떠봐 (Open Your Eyes)", album: "OST (Yuha & Jaehee) • Jul 2026", era: "Member OST", emoji: "🌟", cover: "assets/images/albums/focus.jpg", audio: "assets/audio/open-your-eyes.mp3", albumIdx: 2 },
  { title: "My Dream", album: "OST (Ye-on Solo) • Jul 2026", era: "Member OST", emoji: "🎤", cover: "assets/images/albums/lemon-tang.jpg", audio: "assets/audio/my-dream.mp3", albumIdx: 4 }
];

/* DATA 9 ALBUM & RILISAN SPESIAL */
const albumsData = [
  {
    title: "The Chase.", shortTitle: "The Chase",
    meta: "Hearts2Hearts • 1st Single Album • 24 Feb 2025",
    about: "Single album debut bersejarah dengan konsep Mystic & Girlhood. Meraih kemenangan pertama di The Show dalam 15 hari!",
    emoji: "🦋", cover: "assets/images/albums/the-chase.jpg", tracks: [0, 1]
  },
  {
    title: "STYLE.", shortTitle: "STYLE",
    meta: "Hearts2Hearts • Digital Single • 18 Jun 2025",
    about: "Single musim panas pertama yang menampilkan pesona ceria dan penuh gaya khas 8 member H2H.",
    emoji: "🩵", cover: "assets/images/albums/style.jpg", tracks: [2]
  },
  {
    title: "FOCUS.", shortTitle: "FOCUS",
    meta: "Hearts2Hearts • 1st Mini Album • 20 Okt 2025",
    about: "Mini album perdana yang memuncaki tangga lagu, dilengkapi B-side favorit S2U seperti Apple Pie & Blue Moon.",
    emoji: "✨", cover: "assets/images/albums/focus.jpg", tracks: [4, 3, 5, 6, 7]
  },
  {
    title: "RUDE!", shortTitle: "RUDE!",
    meta: "Hearts2Hearts • Digital Single • 20 Feb 2026",
    about: "Lagu hits enerjik yang membawa Hearts2Hearts meraih trofi pertama mereka di Inkigayo (22 Mar 2026)!",
    emoji: "🔥", cover: "assets/images/albums/rude.jpg", tracks: [8]
  },
  {
    title: "Lemon Tang.", shortTitle: "Lemon Tang",
    meta: "Hearts2Hearts • 2nd Mini Album • 22 Jun 2026",
    about: "Mini album musim panas yang ceria dan menyegarkan dengan lagu andalan Lemon Tang serta 15-LOVE.",
    emoji: "🍋", cover: "assets/images/albums/lemon-tang.jpg", tracks: [9, 10, 11, 12, 13]
  },
  {
    title: "ICONIC HEART.", shortTitle: "ICONIC HEART",
    meta: "Hearts2Hearts • 1st Japanese Single • Agu 2026",
    about: "Debut resmi Hearts2Hearts di Jepang sekaligus perilisan versi Korea pada Oktober 2026.",
    emoji: "🇯🇵", cover: "assets/images/albums/iconic-heart.jpg", tracks: [14]
  },
  {
    title: "Moonride.", shortTitle: "Moonride",
    meta: "Hearts2Hearts • KIA Collaboration • Sep 2026",
    about: "Lagu kolaborasi spesial bersama KIA yang membawa nuansa dreamy berkendara di bawah cahaya bulan.",
    emoji: "🚗", cover: "assets/images/albums/moonride.jpg", tracks: [15]
  },
  {
    title: "Candy Box Lover.", shortTitle: "Candy Box Lover",
    meta: "Hearts2Hearts • OST Single • Okt 2026",
    about: "Lagu OST manis penuh warna yang memanjakan telinga para S2U di penghujung 2026.",
    emoji: "🍬", cover: "assets/images/albums/candy-box.jpg", tracks: [16]
  },
  {
    title: "Next Chapter.", shortTitle: "Next Chapter",
    meta: "Hearts2Hearts • Promo Single • Okt 2026",
    about: "Single spesial penuh semangat untuk kolaborasi game Arena of Valor.",
    emoji: "🎮", cover: "assets/images/albums/next-chapter.jpg", tracks: [17]
  }
];

/* DATA 8 MEMBER */
const membersData = {
  jiwoo: {
    name: "Jiwoo (지우)", role: "Leader • Dancer • Rapper • Vocalist",
    birth: "7 September 2006", emoji: "🩰", img: "assets/images/members/jiwoo.jpg", likes: 0,
    fact: "Mantan balerina yang dilirik staf SM Entertainment saat sedang berbelanja di minimarket!"
  },
  carmen: {
    name: "Carmen (카르멘)", role: "Vocalist • Bali, Indonesia",
    birth: "28 Maret 2006", emoji: "🌺", img: "assets/images/members/carmen.jpg", likes: 0,
    fact: "Idol asal Indonesia pertama yang debut di SM Entertainment! Nama aslinya Nyoman Ayu Carmenita dan hobi main piano."
  },
  yuha: {
    name: "Yuha (유하)", role: "Vocalist • Dancer",
    birth: "12 April 2007", emoji: "🎹", img: "assets/images/members/yuha.jpg", likes: 0,
    fact: "Penggemar berat Disney, jago bermain piano, dan dijuluki 'First Love Girl'!"
  },
  stella: {
    name: "Stella (스텔라)", role: "Vocalist • Korea-Kanada",
    birth: "18 Juni 2007", emoji: "🎸", img: "assets/images/members/stella.jpg", likes: 0,
    fact: "Tumbuh besar di Vancouver, Kanada. Sangat musikal karena jago bermain gitar, bass, dan drum!"
  },
  juun: {
    name: "Juun (주은)", role: "Main Dancer • Rapper • Vocalist",
    birth: "3 Desember 2008", emoji: "💃", img: "assets/images/members/juun.jpg", likes: 0,
    fact: "Jago bikin koreografi, suka menirukan karakter NPC, dan kuat menahan plank lebih dari 10 menit!"
  },
  ana: {
    name: "A-na (에이나)", role: "Rapper • Vocalist • Visual",
    birth: "20 Desember 2008", emoji: "🦋", img: "assets/images/members/ana.jpg", likes: 0,
    fact: "Bergabung menjadi trainee SM Entertainment pada Oktober 2022, tepat satu hari setelah Ian!"
  },
  ian: {
    name: "Ian (이안)", role: "Center • Dancer • Vocalist • Visual",
    birth: "9 Oktober 2009", emoji: "🎀", img: "assets/images/members/ian.jpg", likes: 0,
    fact: "Lahir tepat di Hari Hangeul! Bisa mengikat rambut cepol dalam 3 detik dan merupakan mood-maker grup."
  },
  yeon: {
    name: "Ye-on (예온)", role: "Vocalist • Maknae",
    birth: "19 April 2010", emoji: "🎤", img: "assets/images/members/yeon.jpg", likes: 0,
    fact: "Maknae kesayangan yang direkrut lewat DM Instagram dari video menyanyi musikalnya. Mengidolakan Taeyeon SNSD!"
  }
};

/* TIMELINE & TRIVIA FALABELLA */
const timelineData = [
  { date: "12 Jan 2025", title: "Perkenalan Pertama di SMTOWN Live", desc: "Diperkenalkan ke publik untuk pertama kalinya di konser ulang tahun ke-30 SM Entertainment." },
  { date: "24 Feb 2025", title: "Official Debut: The Chase & Fandom S2U", desc: "Resmi debut dengan 8 member dan mengumumkan nama fandom S2U (하츄)." },
  { date: "11 Mar 2025", title: "Music Show 1st Win (The Show)", desc: "Meraih piala pertama hanya 15 hari setelah debut!" },
  { date: "20 Okt 2025", title: "1st Mini Album: FOCUS", desc: "Merilis mini album perdana berisi 6 lagu dengan title track FOCUS." },
  { date: "Feb – Mar 2026", title: "Fanmeeting Hearts 2 House & Inkigayo Win", desc: "Tiket fanmeeting sold out dalam hitungan menit, lalu menang Inkigayo (22 Mar) lewat RUDE!." },
  { date: "22 Jun 2026", title: "2nd Mini Album: Lemon Tang", desc: "Comeback musim panas yang ceria dan menyegarkan." },
  { date: "Agu – Okt 2026", title: "Debut Jepang & Kolaborasi Spesial", desc: "Merilis ICONIC HEART di Jepang & Korea, serta lagu spesial Moonride, Candy Box Lover, dan Next Chapter." }
];

const falabellaTrivia = [
  "Hello, we are Hearts2Hearts! Semangat terus ya S2U! 🩵",
  "Tahukah kamu? Warna resmi H2H adalah Sky Blue, persis warna langit cerah!",
  "Fun fact: Carmen adalah idol asal Indonesia pertama di SM Entertainment! 🇮🇩",
  "Aku Falabella, kuda kecil resmi yang selalu menemani H2H & S2U! 🐴",
  "Juun kuat menahan plank lebih dari 10 menit lho, keren banget kan? 💪",
  "H2H meraih kemenangan Inkigayo pertama pada 22 Maret 2026 lewat RUDE! 🏆",
  "Coba klik tombol 'Gacha Bias' di menu Members untuk lihat keberuntunganmu! 🎲"
];

/* NAVIGASI & PENCARIAN */
function switchTab(tabId) {
  document.querySelectorAll(".tab-view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById("view-" + tabId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".pill-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
}

function handleSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    renderMembersGrid();
    renderAllSongsList();
    return;
  }

  const matchedMembers = Object.keys(membersData).filter(k =>
    membersData[k].name.toLowerCase().includes(q) ||
    membersData[k].fact.toLowerCase().includes(q)
  );

  if (matchedMembers.length > 0 && !songsData.some(s => s.title.toLowerCase().includes(q))) {
    switchTab("members");
    renderMembersGrid(matchedMembers);
  } else {
    switchTab("songs");
    renderAllSongsList(q);
  }
}

/* CAROUSEL ALBUM */
let currentAlbumIndex = 4; // Default: Lemon Tang

function renderShowcaseAlbum() {
  const total = albumsData.length;
  const current = albumsData[currentAlbumIndex];
  const prevIdx = (currentAlbumIndex - 1 + total) % total;
  const nextIdx = (currentAlbumIndex + 1) % total;

  document.getElementById("showcase-era-label").textContent = `Era ${currentAlbumIndex + 1} of ${total}`;
  document.getElementById("carousel-dots").innerHTML = albumsData.map((_, i) =>
    `<button class="c-dot ${i === currentAlbumIndex ? "active" : ""}" onclick="goToAlbum(${i})"></button>`
  ).join("");

  const prevAlb = albumsData[prevIdx];
  const prevImg = document.getElementById("peek-prev-img");
  prevImg.style.display = "block";
  document.getElementById("peek-prev-emoji").style.display = "none";
  document.getElementById("peek-prev-emoji").textContent = prevAlb.emoji;
  prevImg.src = prevAlb.cover;
  document.getElementById("peek-prev-title").textContent = prevAlb.shortTitle;

  const nextAlb = albumsData[nextIdx];
  const nextImg = document.getElementById("peek-next-img");
  nextImg.style.display = "block";
  document.getElementById("peek-next-emoji").style.display = "none";
  document.getElementById("peek-next-emoji").textContent = nextAlb.emoji;
  nextImg.src = nextAlb.cover;
  document.getElementById("peek-next-title").textContent = nextAlb.shortTitle;

  const mainImg = document.getElementById("main-cover-img");
  mainImg.style.display = "block";
  document.getElementById("main-cover-emoji").style.display = "none";
  document.getElementById("main-cover-emoji").textContent = current.emoji;
  mainImg.src = current.cover;

  document.getElementById("ambient-bg").style.backgroundImage = `url('${current.cover}')`;
  document.getElementById("showcase-about-text").textContent = current.about;
  document.getElementById("showcase-album-title").textContent = current.title;
  document.getElementById("showcase-album-meta").textContent = `${current.meta} • ${current.tracks.length} Song(s)`;

  document.getElementById("showcase-tracklist").innerHTML = current.tracks.map((songIdx, pos) => {
    const song = songsData[songIdx];
    const activeClass = songIdx === currentSongIndex ? "active" : "";
    return `
      <div class="s-track-row ${activeClass}" onclick="playSong(${songIdx})">
        <span class="s-track-num">${songIdx === currentSongIndex && isPlaying ? "▶" : pos + 1}</span>
        <span class="s-track-title">${song.title}</span>
        <span>${song.emoji}</span>
      </div>
    `;
  }).join("");
}

function prevAlbum() {
  currentAlbumIndex = (currentAlbumIndex - 1 + albumsData.length) % albumsData.length;
  renderShowcaseAlbum();
}

function nextAlbum() {
  currentAlbumIndex = (currentAlbumIndex + 1) % albumsData.length;
  renderShowcaseAlbum();
}

function goToAlbum(idx) {
  currentAlbumIndex = idx;
  renderShowcaseAlbum();
}

function likeAlbum(btn, event) {
  btn.textContent = btn.textContent === "🩵" ? "🩷" : "🩵";
  spawnHearts(event);
}

/* RENDER HALAMAN LAIN */
function renderMembersGrid(filterKeys = null) {
  const container = document.getElementById("members-grid");
  if (!container) return;

  const keys = filterKeys || Object.keys(membersData);
  container.innerHTML = keys.map(key => {
    const m = membersData[key];
    return `
      <div class="photocard" onclick="openMemberDetail('${key}')">
        <div class="pc-img-box">
          <img src="${m.img}" alt="${m.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="pc-fallback">${m.emoji}</div>
          <span class="pc-tag">${m.emoji} H2H</span>
        </div>
        <div class="pc-footer">
          <div>
            <strong>${m.name.split(" ")[0]}</strong>
            <small>${m.role.split("•")[0].trim()}</small>
          </div>
          <span style="font-size:14px;">🩵</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderAllAlbumsGrid() {
  const container = document.getElementById("albums-grid");
  if (!container) return;

  container.innerHTML = albumsData.map((alb, idx) => `
    <div class="album-card" onclick="openAlbumFromGrid(${idx})">
      <div class="album-cover">
        <img src="${alb.cover}" alt="${alb.shortTitle}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="peek-fallback">${alb.emoji}</div>
      </div>
      <h3 style="font-size:15px; margin-bottom:2px;">${alb.shortTitle}</h3>
      <p style="font-size:11px; color:#0284C7; font-weight:700; margin-bottom:4px;">${alb.meta.split("•")[1] || "Release"}</p>
      <small style="font-size:11px; color:#64748B;">${alb.tracks.length} Lagu Utama</small>
    </div>
  `).join("");
}

function openAlbumFromGrid(albumIdx) {
  currentAlbumIndex = albumIdx;
  switchTab("home");
  renderShowcaseAlbum();
  playSong(albumsData[albumIdx].tracks[0]);
}

function renderAllSongsList(filterText = "") {
  const container = document.getElementById("songs-list");
  if (!container) return;

  const filtered = songsData
    .map((song, idx) => ({ song, idx }))
    .filter(item =>
      !filterText ||
      item.song.title.toLowerCase().includes(filterText) ||
      item.song.album.toLowerCase().includes(filterText)
    );

  container.innerHTML = filtered.map(({ song, idx }) => `
    <div class="song-row ${idx === currentSongIndex ? "playing" : ""}" onclick="playSong(${idx})">
      <div class="song-emoji">${song.emoji}</div>
      <div style="flex:1;">
        <strong>${idx + 1}. ${song.title}</strong>
        <small>${song.album}</small>
      </div>
      <span style="font-size:12px;">▶</span>
    </div>
  `).join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline-list");
  if (!container) return;

  container.innerHTML = timelineData.map(item => `
    <div class="time-card">
      <span>${item.date}</span>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join("");
}

/* MODAL, GACHA & HUJAN HATI */
function openMemberDetail(key, isGacha = false) {
  const m = membersData[key];
  if (!m) return;

  const modal = document.getElementById("app-modal");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <button class="modal-close" onclick="forceCloseModal()">✕</button>
    ${isGacha ? `<div style="display:inline-block; background:#E0F2FE; color:#0284C7; font-size:11px; font-weight:800; padding:4px 12px; border-radius:99px; margin-bottom:10px;">🎲 Lucky Bias Hari Ini!</div>` : ""}
    <div style="width:100px; height:100px; margin:0 auto 12px; border-radius:50%; overflow:hidden; border:3px solid #7EC8E3; background:#E0F2FE; display:flex; align-items:center; justify-content:center; font-size:40px;">
      <img src="${m.img}" alt="${m.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';" />
      <span style="display:none;">${m.emoji}</span>
    </div>
    <h2 style="font-size:20px; margin-bottom:4px;">${m.name}</h2>
    <p style="font-size:12px; color:#0284C7; font-weight:700; margin-bottom:4px;">${m.role}</p>
    <p style="font-size:12px; color:#64748B; margin-bottom:14px;">🎂 ${m.birth}</p>
    <div style="background:#F0F9FF; border:1px solid #BAE6FD; border-radius:16px; padding:14px; text-align:left; font-size:13px; line-height:1.5; margin-bottom:16px;">
      <strong>💡 Fun Fact:</strong><br>${m.fact}
    </div>
    <div style="display:flex; gap:10px; justify-content:center;">
      <button class="playful-btn" onclick="sendMemberHeart('${key}', event)">🩵 Kirim Hati (<span id="heart-count-${key}">${m.likes}</span>)</button>
      ${isGacha ? `<button class="pill-tab" style="background:#F1F5F9;" onclick="luckyMember()">🎲 Gacha Lagi</button>` : ""}
    </div>
  `;

  modal.classList.add("show");
  if (isGacha) spawnHearts();
}

function sendMemberHeart(key, event) {
  membersData[key].likes++;
  const el = document.getElementById(`heart-count-${key}`);
  if (el) el.textContent = membersData[key].likes;
  spawnHearts(event);
}

function luckyMember() {
  const keys = Object.keys(membersData);
  openMemberDetail(keys[Math.floor(Math.random() * keys.length)], true);
}

function openGroupModal() {
  const modal = document.getElementById("app-modal");
  document.getElementById("modal-content").innerHTML = `
    <button class="modal-close" onclick="forceCloseModal()">✕</button>
    <h2 style="font-size:18px; margin-bottom:12px;">🩵 Hearts2Hearts (Full 8 Members)</h2>
    <div style="width:100%; height:220px; border-radius:18px; overflow:hidden; background:#E0F2FE; margin-bottom:14px; display:flex; align-items:center; justify-content:center;">
      <img src="assets/images/group/h2h-full.jpg" alt="H2H Full Group" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
      <span style="display:none; font-size:13px; color:#0284C7; padding:20px;">Taruh foto grup di <code>assets/images/group/h2h-full.jpg</code></span>
    </div>
    <p style="font-size:13px; color:#64748B; line-height:1.5;">
      <b>Debut:</b> 24 Februari 2025 • <b>Fandom:</b> S2U (하츄)<br>
      <i>"Hello, we are Hearts2Hearts!"</i>
    </p>
  `;
  modal.classList.add("show");
}

function closeModal(event) {
  if (event.target.id === "app-modal") forceCloseModal();
}

function forceCloseModal() {
  document.getElementById("app-modal").classList.remove("show");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") forceCloseModal();
});

function spawnHearts(event) {
  const layer = document.getElementById("confetti-layer");
  const icons = ["🩵", "🩷", "✨", "🫧", "💫", "🌸"];
  const originX = event && event.clientX ? event.clientX : window.innerWidth / 2;
  const originY = event && event.clientY ? event.clientY : window.innerHeight / 2;

  for (let i = 0; i < 10; i++) {
    const span = document.createElement("span");
    span.className = "floating-heart";
    span.textContent = icons[Math.floor(Math.random() * icons.length)];
    const offsetX = Math.random() * 100 - 50;
    const offsetY = Math.random() * 40 - 20;
    span.style.left = (originX + offsetX) + "px";
    span.style.top = (originY + offsetY) + "px";
    span.style.fontSize = (18 + Math.random() * 10) + "px";
    layer.appendChild(span);
    setTimeout(() => span.remove(), 1400);
  }
}

let triviaIdx = 0;
function pokeFalabella() {
  const btn = document.querySelector(".falabella-btn");
  btn.classList.remove("bounce");
  void btn.offsetWidth;
  btn.classList.add("bounce");

  document.getElementById("falabella-bubble").textContent = falabellaTrivia[triviaIdx];
  triviaIdx = (triviaIdx + 1) % falabellaTrivia.length;

  const rect = btn.getBoundingClientRect();
  spawnHearts({ clientX: rect.left + 25, clientY: rect.top });
}

/* PEMUTAR MUSIK */
let currentSongIndex = 9;
let isPlaying = false;
let isDemoMode = false;
let demoTimer = null;
let demoSec = 0;

const audio = document.getElementById("main-audio");
const playBtn = document.getElementById("mp-play-btn");
const progressSlider = document.getElementById("mp-progress");

function updatePlayerUI() {
  document.getElementById("mp-title").textContent = songsData[currentSongIndex].title;
  renderShowcaseAlbum();
  renderAllSongsList(document.getElementById("search-input").value.trim().toLowerCase());
}

function playSong(index) {
  currentSongIndex = index;
  const song = songsData[index];
  if (!song) return;

  if (typeof song.albumIdx === "number") currentAlbumIndex = song.albumIdx;
  stopDemoTimer();
  demoSec = 0;
  progressSlider.value = 0;

  audio.src = song.audio;
  audio.onerror = () => {
    if (!isDemoMode) startDemoMode();
  };

  audio.play().then(() => {
    isDemoMode = false;
    setPlayVisual(true);
    document.getElementById("mp-artist").textContent = "Hearts2Hearts";
    updatePlayerUI();
  }).catch(() => {
    startDemoMode();
  });
}

function startDemoMode() {
  isDemoMode = true;
  setPlayVisual(true);
  document.getElementById("mp-artist").textContent = "Hearts2Hearts (Demo UI)";
  updatePlayerUI();

  stopDemoTimer();
  demoTimer = setInterval(() => {
    if (!isPlaying) return;
    demoSec++;
    if (demoSec >= 180) {
      nextSong();
      return;
    }
    progressSlider.value = (demoSec / 180) * 100;
  }, 1000);
}

function stopDemoTimer() {
  if (demoTimer) {
    clearInterval(demoTimer);
    demoTimer = null;
  }
}

function setPlayVisual(playing) {
  isPlaying = playing;
  playBtn.textContent = playing ? "⏸" : "▶";
  document.getElementById("vinyl-badge").textContent = playing ? "⏸ Playing..." : "▶ Play Era";
  document.getElementById("main-cover-wrap").classList.toggle("playing", playing);
}

function togglePlay() {
  if (!audio.src && !isDemoMode) {
    playSong(currentSongIndex);
    return;
  }
  if (isDemoMode) {
    setPlayVisual(!isPlaying);
    renderShowcaseAlbum();
    return;
  }
  if (audio.paused) {
    audio.play();
    setPlayVisual(true);
  } else {
    audio.pause();
    setPlayVisual(false);
  }
  renderShowcaseAlbum();
}

function nextSong() { playSong((currentSongIndex + 1) % songsData.length); }
function prevSong() { playSong((currentSongIndex - 1 + songsData.length) % songsData.length); }

function seekSong(val) {
  if (isDemoMode) {
    demoSec = Math.floor((val / 100) * 180);
    return;
  }
  if (audio.duration) audio.currentTime = (val / 100) * audio.duration;
}

audio.addEventListener("timeupdate", () => {
  if (audio.duration && !isDemoMode) {
    progressSlider.value = (audio.currentTime / audio.duration) * 100;
  }
});

audio.addEventListener("ended", nextSong);

/* INISIALISASI */
document.addEventListener("DOMContentLoaded", () => {
  renderShowcaseAlbum();
  renderMembersGrid();
  renderAllAlbumsGrid();
  renderAllSongsList();
  renderTimeline();
});