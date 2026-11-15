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
    emoji: "✨", cover: "assets/images/albums/focus.jpg", tracks: [3, 4, 5, 6, 7]
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

/* Tampilan dan koleksi */
const byId = id => document.getElementById(id);
const pageNames = ["home", "members", "albums", "songs", "journey"];
const memberKeys = Object.keys(membersData);
const catalogOrder = albumsData.flatMap(album => album.tracks);
const allSongOrder = songsData.map((_, index) => index);
const heroColors = ["#dbeaf6", "#f7e5ee", "#e6e5f7", "#f7e6e2", "#deecfb", "#ebe3f6", "#dce6f6", "#f9e8ed", "#deeee8"];
const memberTones = ["#d7e6f4", "#f1d5de", "#e3daf0", "#d6e9e2", "#f1ddcc", "#d6e4f8", "#f3dce8", "#e2e8c8"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentAlbumIndex = 4;
let onlySaved = false;
let triviaIndex = 0;

function readLocal(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem("h2h.s2u." + key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveLocal(key, value) {
  try {
    localStorage.setItem("h2h.s2u." + key, JSON.stringify(value));
  } catch {
    // Interaksi tetap tersedia selama sesi ketika penyimpanan browser dibatasi.
  }
}

const storedAlbums = readLocal("albums", []);
const savedAlbums = new Set(Array.isArray(storedAlbums) ? storedAlbums.filter(title => albumsData.some(album => album.shortTitle === title)) : []);
const storedHearts = readLocal("memberHearts", {});
for (const key of memberKeys) {
  const count = storedHearts?.[key];
  if (Number.isSafeInteger(count) && count > 0) membersData[key].likes = count;
}

function esc(text) {
  return String(text).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function announce(message) {
  byId("live-status").textContent = message;
}

function syncArtwork(image) {
  if (image instanceof HTMLImageElement && image.parentElement) {
    image.parentElement.classList.toggle("has-art", image.complete && image.naturalWidth > 0);
  }
}
document.addEventListener("load", event => syncArtwork(event.target), true);
document.addEventListener("error", event => syncArtwork(event.target), true);

function setImage(image, path) {
  if (image.getAttribute("src") === path) {
    syncArtwork(image);
    return;
  }
  image.parentElement.classList.remove("has-art");
  image.src = path;
}

function switchTab(name, focusContent = false) {
  if (!pageNames.includes(name)) return;
  for (const page of pageNames) byId("view-" + page).hidden = page !== name;
  document.querySelectorAll(".main-nav [data-tab]").forEach(button => {
    if (button.dataset.tab === name) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  if (name === "albums") renderAllAlbumsGrid();
  window.scrollTo({ top: 0, behavior: "instant" });
  if (focusContent) byId("main-area").focus({ preventScroll: true });
}

function formatOf(album) {
  return album.meta.split("•")[1].trim();
}

function coverSkin(album, index) {
  return `<span class="cover-skin era-${index}" aria-hidden="true">
    <span class="sleeve-artist">Hearts2Hearts</span><span class="sleeve-motif">${album.emoji}</span>
    <span class="sleeve-title">${esc(album.shortTitle)}</span><span class="sleeve-format">${esc(formatOf(album))}</span>
  </span>`;
}

function playMark() {
  return '<span class="row-play" aria-hidden="true"><span class="icon play-icon"></span></span>';
}

function trackNumber(number) {
  return `<span class="track-num" aria-hidden="true"><span class="number">${String(number).padStart(2, "0")}</span><span class="bars"><i></i><i></i><i></i></span></span>`;
}

function animateChange(element, frames, duration = 280) {
  if (reduceMotion.matches || !element.animate) return;
  element.getAnimations().forEach(animation => {
    if (animation.id === "h2h-swap") animation.cancel();
  });
  element.animate(frames, { id: "h2h-swap", duration, easing: "cubic-bezier(.2,.72,.22,1)" });
}

function renderShowcaseAlbum(direction = 0) {
  const album = albumsData[currentAlbumIndex];
  const total = albumsData.length;
  const title = byId("showcase-album-title");
  const period = album.title.endsWith(".");
  title.textContent = period ? album.title.slice(0, -1) : album.title;
  if (period) {
    const dot = document.createElement("span");
    dot.className = "title-dot";
    dot.textContent = ".";
    title.append(dot);
  }
  const [, format, date] = album.meta.split("•").map(part => part.trim());
  byId("showcase-album-meta").innerHTML = `${esc(format)} <span>·</span> ${esc(date)}`;
  byId("showcase-about-text").textContent = album.about;
  byId("showcase-era-label").textContent = `Era ${String(currentAlbumIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  byId("track-count").textContent = album.tracks.length + " lagu";
  byId("hero").style.setProperty("--hero-color", heroColors[currentAlbumIndex]);
  byId("hero-skin").className = "cover-skin era-" + currentAlbumIndex;
  byId("sleeve-title").textContent = album.shortTitle;
  byId("sleeve-format").textContent = format;
  byId("sleeve-motif").textContent = album.emoji;
  setImage(byId("main-cover-img"), album.cover);

  for (const [id, step] of [["prev-era", -1], ["next-era", 1]]) {
    const neighbor = albumsData[(currentAlbumIndex + step + total) % total];
    const adjacent = neighbor.shortTitle;
    const label = (step < 0 ? "Era sebelumnya, " : "Era berikutnya, ") + adjacent;
    byId(id).setAttribute("aria-label", label);
    const arrow = byId(id);
    arrow.removeAttribute("title");
    const peek = arrow.querySelector(".era-peek");
    peek.querySelector("b").textContent = adjacent;
    peek.querySelector(".thumb-fallback").textContent = neighbor.emoji;
    setImage(peek.querySelector("img"), neighbor.cover);
  }
  document.querySelectorAll(".era-dot").forEach((dot, index) => {
    dot.setAttribute("aria-pressed", String(index === currentAlbumIndex));
  });
  byId("showcase-tracklist").innerHTML = album.tracks.map((index, position) => `
    <button type="button" class="track-row" data-track="${index}" data-queue="eras">
      ${trackNumber(position + 1)}<span class="track-name">${esc(songsData[index].title)}</span>
      <span class="track-type">${esc(songsData[index].era)}</span>${playMark()}
    </button>`).join("");
  syncSaveButton();
  syncPlaybackButtons();
  if (direction) {
    animateChange(document.querySelector(".album-object"), [
      { opacity: .45, transform: `translateX(${direction * 13}px) rotate(${direction * 1.6}deg)` },
      { opacity: 1, transform: "none" }
    ], 330);
    animateChange(document.querySelector(".hero-copy"), [
      { opacity: .6, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }
    ]);
  }
}

function goToAlbum(index, direction) {
  if (!albumsData[index] || currentAlbumIndex === index) return;
  const travel = direction ?? Math.sign(index - currentAlbumIndex);
  currentAlbumIndex = index;
  renderShowcaseAlbum(travel);
}

function stepAlbum(step) {
  goToAlbum((currentAlbumIndex + step + albumsData.length) % albumsData.length, step);
  announce("Era " + albumsData[currentAlbumIndex].shortTitle);
}

function syncSaveButton() {
  const album = albumsData[currentAlbumIndex];
  const saved = savedAlbums.has(album.shortTitle);
  const button = byId("save-album");
  button.setAttribute("aria-pressed", String(saved));
  button.setAttribute("aria-label", "Simpan album " + album.shortTitle);
  button.querySelector(".button-label").textContent = saved ? "Tersimpan" : "Simpan";
  button.querySelector(".heart-glyph").textContent = saved ? "♥" : "♡";
  byId("saved-total").textContent = savedAlbums.size;
}

function likeAlbum(event) {
  const title = albumsData[currentAlbumIndex].shortTitle;
  if (savedAlbums.has(title)) {
    savedAlbums.delete(title);
    announce(title + " dihapus dari album tersimpan.");
  } else {
    savedAlbums.add(title);
    spawnHearts(event);
    announce(title + " tersimpan.");
  }
  saveLocal("albums", [...savedAlbums]);
  syncSaveButton();
}

function portrait(key, extraClass = "") {
  const m = membersData[key];
  const name = m.name.split(" ")[0];
  return `<span class="pc-portrait ${extraClass}" style="--member-tone:${memberTones[memberKeys.indexOf(key)]}">
    <span class="portrait-fallback" aria-hidden="true"><span class="member-initial">${esc(name.charAt(0))}</span><span class="member-symbol">${m.emoji}</span></span>
    <img src="${esc(m.img)}" alt="" loading="lazy" decoding="async">
  </span>`;
}

function renderMembersGrid() {
  byId("members-grid").innerHTML = memberKeys.map(key => {
    const member = membersData[key];
    return `<button type="button" class="photocard" data-member="${key}" aria-haspopup="dialog" aria-label="Buka photocard ${esc(member.name)}">
      ${portrait(key)}
      <span class="pc-caption"><span><strong>${esc(member.name.split(" ")[0])}</strong><small>${esc(member.role.split("•")[0].trim())}</small></span><span class="jump-arrow" aria-hidden="true"></span></span>
    </button>`;
  }).join("");
}

function renderAllAlbumsGrid() {
  byId("all-albums").setAttribute("aria-pressed", String(!onlySaved));
  byId("saved-albums").setAttribute("aria-pressed", String(onlySaved));
  byId("saved-total").textContent = savedAlbums.size;
  byId("albums-grid").innerHTML = albumsData.map((album, index) => {
    if (onlySaved && !savedAlbums.has(album.shortTitle)) return "";
    return `<button type="button" class="album-card" data-album="${index}" aria-label="Buka dan putar ${esc(album.shortTitle)}">
      <span class="cover-box">${coverSkin(album, index)}<img src="${esc(album.cover)}" alt="" loading="lazy" decoding="async"></span>
      <span class="album-caption"><span><strong>${esc(album.shortTitle)}</strong><small>${esc(formatOf(album))} · ${album.tracks.length} lagu</small></span>${savedAlbums.has(album.shortTitle) ? '<span aria-hidden="true">♥</span>' : '<span class="jump-arrow" aria-hidden="true"></span>'}</span>
    </button>`;
  }).join("") || '<p class="empty-state">Belum ada album tersimpan. Tekan ♡ Simpan pada era yang kamu sukai di Home.</p>';
}

function openAlbumFromGrid(index) {
  switchTab("home", true);
  goToAlbum(index);
  playSong(albumsData[index].tracks[0], catalogOrder);
}

function thumbnail(path, symbol, eraClass = "") {
  return `<span class="thumb ${eraClass}" aria-hidden="true"><span class="thumb-fallback">${symbol}</span>
    <img src="${esc(path)}" alt="" loading="lazy" decoding="async"></span>`;
}

function renderAllSongsList() {
  byId("songs-list").innerHTML = songsData.map((song, index) => `
    <button type="button" class="song-row" data-track="${index}" data-queue="all">
      ${trackNumber(index + 1)}${thumbnail(song.cover, song.emoji, "era-" + song.albumIdx)}
      <strong>${esc(song.title)}</strong><span class="song-album">${esc(song.album)}</span><span class="song-type">${esc(song.era)}</span>${playMark()}
    </button>`).join("");
}

function renderTimeline() {
  byId("timeline-list").innerHTML = timelineData.map(item => `
    <li><span class="time-label">${esc(item.date)}</span><div><h3>${esc(item.title)}</h3><p>${esc(item.desc)}</p></div></li>`).join("");
}

/* Dialog dan pencarian */
const modal = byId("app-modal");
const modalContent = byId("modal-content");
let dailyPick = readLocal("dailyPick", null);
let shownMember = null;

function openDialog(kind, markup, focusSelector = "#modal-close") {
  modal.className = "app-dialog " + kind;
  modalContent.innerHTML = markup;
  if (!modal.open) modal.showModal();
  document.body.classList.add("has-dialog");
  modal.querySelector(focusSelector)?.focus({ preventScroll: true });
  modal.scrollTop = 0;
}

function openMemberDetail(key, draw = "") {
  const member = membersData[key];
  if (!member) return;
  shownMember = key;
  const badge = draw ? `<p class="dialog-eyebrow">${draw === "today" ? "Photocard hari ini" : "Hasil gacha"}</p>` : "";
  openDialog("member-dialog", `
    ${badge}${portrait(key, "dialog-portrait")}
    <h2 id="dialog-title">${esc(member.name)}</h2>
    <p class="member-role">${esc(member.role)}</p>
    <p class="member-birth">Lahir ${esc(member.birth)}</p>
    <p class="member-fact">${esc(member.fact)}</p>
    <div class="dialog-actions">
      <button type="button" class="button primary" data-member-heart="${key}"><span aria-hidden="true">♥</span><span>Kirim hati</span><span class="heart-count" id="member-heart-count">${member.likes}</span></button>
      ${draw ? '<button type="button" class="button light" id="reroll">Tarik lagi <span class="jump-arrow" aria-hidden="true"></span></button>' : ""}
    </div>`, draw === "again" ? "#reroll" : "#modal-close");
  if (draw) animateChange(modal.querySelector(".dialog-portrait"), [
    { transform: "translateY(8px) rotate(-7deg)", opacity: .4 },
    { transform: "rotate(-3deg)", opacity: 1 }
  ], 320);
}

function luckyMember(again = false) {
  const today = new Date().toDateString();
  if (again) {
    const options = memberKeys.filter(key => key !== shownMember);
    openMemberDetail(options[Math.floor(Math.random() * options.length)], "again");
    return;
  }
  if (dailyPick?.day !== today || !memberKeys.includes(dailyPick.key)) {
    dailyPick = { day: today, key: memberKeys[Math.floor(Math.random() * memberKeys.length)] };
    saveLocal("dailyPick", dailyPick);
  }
  openMemberDetail(dailyPick.key, "today");
}

function sendMemberHeart(key, event) {
  membersData[key].likes += 1;
  const count = membersData[key].likes;
  byId("member-heart-count").textContent = count;
  saveLocal("memberHearts", Object.fromEntries(memberKeys.map(id => [id, membersData[id].likes])));
  spawnHearts(event);
  announce("Hati untuk " + membersData[key].name + ". Total " + count + ".");
}

function openGroupModal() {
  const names = memberKeys.map(key => `<b>${esc(membersData[key].name.split(" ")[0])}</b>`).join("");
  openDialog("group-dialog", `
    <h2 id="dialog-title">Hearts2Hearts</h2>
    <div class="group-image"><div class="group-fallback">${names}</div><img src="assets/images/group/h2h-full.jpg" alt="Foto grup Hearts2Hearts"></div>
    <p class="group-caption">Debut 24 Februari 2025 · S2U (하츄)</p>`);
}

function searchable(value) {
  return value.normalize("NFKC").toLocaleLowerCase("id").replace(/[^\p{L}\p{N}]+/gu, "");
}

function searchButton(kind, key, name, path, symbol) {
  const verb = kind === "member" ? "Buka photocard" : kind === "album" ? "Buka dan putar album" : "Putar";
  return `<button type="button" class="search-hit" data-result="${kind}" data-key="${key}" aria-label="${verb} ${esc(name)}">
    ${thumbnail(path, symbol)}<b>${esc(name)}</b><span class="jump-arrow" aria-hidden="true"></span></button>`;
}

function handleSearch(value, songsOnly) {
  const query = searchable(value.trim());
  const results = [];
  let total = 0;
  function addSection(title, hits) {
    if (!hits.length) return;
    total += hits.length;
    results.push(`<section><h3>${title}</h3>${hits.join("")}</section>`);
  }
  if (!songsOnly) {
    const albums = query ? albumsData.filter(album => searchable(album.shortTitle + " " + album.meta).includes(query)) : [albumsData[currentAlbumIndex]];
    addSection("Albums", albums.map(album => searchButton("album", albumsData.indexOf(album), album.shortTitle, album.cover, album.emoji)));
    const members = query ? memberKeys.filter(key => searchable(membersData[key].name + " " + membersData[key].fact).includes(query)) : memberKeys.slice(0, 2);
    addSection("Members", members.map(key => searchButton("member", key, membersData[key].name, membersData[key].img, membersData[key].emoji)));
  }
  const songs = query
    ? songsData.filter(song => searchable(song.title + " " + song.album + " " + song.era).includes(query) || searchable(albumsData[song.albumIdx].shortTitle).includes(query))
    : albumsData[currentAlbumIndex].tracks.map(index => songsData[index]);
  addSection("Songs", songs.map(song => searchButton("song", songsData.indexOf(song), song.title, song.cover, song.emoji)));
  byId("search-results").innerHTML = results.join("") || '<p class="search-empty">Belum ada hasil. Coba judul atau nama lain.</p>';
  byId("search-results").scrollTop = 0;
  byId("search-status").textContent = total + " hasil.";
}

function openSearch(songsOnly = false) {
  openDialog("search-dialog", `
    <h2 id="dialog-title">${songsOnly ? "Cari lagu" : "Cari di fansite"}</h2>
    <label class="search-field"><span class="icon search-icon" aria-hidden="true"></span><input type="search" id="search-input" aria-label="${songsOnly ? "Cari lagu" : "Cari album, member, atau lagu"}" placeholder="${songsOnly ? "Judul lagu atau album…" : "Album, member, atau lagu…"}" autocomplete="off"></label>
    <p class="sr-only" id="search-status" role="status"></p><div class="search-results" id="search-results"></div>`, "#search-input");
  const input = byId("search-input");
  input.addEventListener("input", () => handleSearch(input.value, songsOnly));
  handleSearch("", songsOnly);
}

function selectSearchHit(button) {
  const kind = button.dataset.result;
  const key = button.dataset.key;
  if (kind === "member") {
    openMemberDetail(key);
    return;
  }
  modal.close();
  if (kind === "album") openAlbumFromGrid(Number(key));
  else {
    switchTab("songs", true);
    playSong(Number(key), allSongOrder);
  }
}

modal.addEventListener("keydown", event => {
  if (!modal.classList.contains("search-dialog") || !["ArrowDown", "ArrowUp"].includes(event.key)) return;
  const elements = [byId("search-input"), ...modal.querySelectorAll(".search-hit")];
  const index = elements.indexOf(document.activeElement);
  if (index < 0) return;
  event.preventDefault();
  const step = event.key === "ArrowDown" ? 1 : -1;
  elements[Math.min(elements.length - 1, Math.max(0, index + step))].focus();
});
modal.addEventListener("click", event => {
  if (event.target !== modal) return;
  const box = modal.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) modal.close();
});
modal.addEventListener("close", () => {
  if (!modal.open) document.body.classList.remove("has-dialog");
});

function spawnHearts(event) {
  if (reduceMotion.matches) return;
  const layer = modal.open ? modal.querySelector(".confetti-layer") : byId("confetti-layer");
  if (layer.childElementCount >= 40) return;
  const button = event.target.closest("button");
  const rect = button?.getBoundingClientRect();
  const x = event.detail ? event.clientX : (rect ? rect.left + rect.width / 2 : innerWidth / 2);
  const y = event.detail ? event.clientY : (rect ? rect.top + rect.height / 2 : innerHeight / 2);
  const bounds = layer.getBoundingClientRect();
  const colors = ["#557ac5", "#d887ae", "#89bfdf", "#aa97ce"];
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart pixel-heart";
    const angle = Math.PI * (1.08 + i * .84 / 7);
    const distance = 37 + Math.random() * 37;
    heart.style.left = (x - bounds.left) + "px";
    heart.style.top = (y - bounds.top) + "px";
    heart.style.setProperty("--dx", (Math.cos(angle) * distance) + "px");
    heart.style.setProperty("--dy", (Math.sin(angle) * distance - 17) + "px");
    heart.style.setProperty("--size", (7 + Math.random() * 6) + "px");
    heart.style.setProperty("--twist", (i * 9 - 30) + "deg");
    heart.style.setProperty("--heart-color", colors[i % colors.length]);
    layer.append(heart);
    window.setTimeout(() => heart.remove(), 760);
  }
}

function pokeFalabella(event) {
  byId("falabella-bubble").textContent = falabellaTrivia[triviaIndex];
  triviaIndex = (triviaIndex + 1) % falabellaTrivia.length;
  animateChange(byId("poke-mascot"), [
    { transform: "none" }, { transform: "translateY(-4px) rotate(-8deg)", offset: .45 }, { transform: "none" }
  ]);
  spawnHearts(event);
}

/* Pemutar. Pilihan era yang dilihat terpisah dari antrean yang didengarkan. */
const audio = byId("main-audio");
const slider = byId("mp-progress");
const demoDuration = 180;
let currentSongIndex = albumsData[currentAlbumIndex].tracks[0];
let playQueue = catalogOrder;
let playback = "paused";
let audioLoaded = false;
let isDemoMode = false;
let demoPosition = 0;
let demoStartedAt = 0;
let demoTimer = null;
let playRequest = 0;

function clock(seconds) {
  const time = Math.max(0, Math.floor(seconds || 0));
  return Math.floor(time / 60) + ":" + String(time % 60).padStart(2, "0");
}

function demoTime() {
  return Math.min(demoDuration, demoPosition + (playback === "playing" ? (performance.now() - demoStartedAt) / 1000 : 0));
}

function updatePosition() {
  const duration = isDemoMode ? demoDuration : audio.duration;
  const elapsed = isDemoMode ? demoTime() : audio.currentTime;
  const valid = Number.isFinite(duration) && duration > 0;
  const percent = valid ? Math.max(0, Math.min(100, elapsed * 100 / duration)) : 0;
  slider.value = percent;
  slider.disabled = !valid;
  slider.style.setProperty("--progress", percent + "%");
  slider.setAttribute("aria-valuetext", valid ? clock(elapsed) + " dari " + clock(duration) : "Durasi belum tersedia");
  byId("mp-elapsed").textContent = clock(elapsed);
  byId("mp-duration").textContent = valid ? clock(duration) : "–:––";
}

function setPlayIcon(container, playing) {
  container.querySelector(".icon").className = "icon " + (playing ? "pause-icon" : "play-icon");
}

function syncPlaybackButtons() {
  const engaged = playback !== "paused";
  const album = albumsData[currentAlbumIndex];
  const activeEra = album.tracks.includes(currentSongIndex) && engaged;
  const eraLabel = (activeEra ? "Jeda " : "Putar ") + album.shortTitle;
  const eraBtn = byId("era-play");
  eraBtn.setAttribute("aria-label", eraLabel);
  eraBtn.querySelector(".button-label").textContent = activeEra ? "Jeda" : "Putar era";
  setPlayIcon(eraBtn, activeEra);
  byId("main-cover-wrap").setAttribute("aria-label", eraLabel);
  byId("main-cover-wrap").classList.toggle("is-playing", activeEra && playback === "playing");
  const playerLabel = (engaged ? "Jeda " : "Putar ") + songsData[currentSongIndex].title;
  byId("mp-play-btn").setAttribute("aria-label", playerLabel);
  byId("mp-play-btn").title = playerLabel;
  setPlayIcon(byId("mp-play-btn"), engaged);
  document.querySelectorAll("[data-track]").forEach(button => {
    const index = Number(button.dataset.track);
    const current = index === currentSongIndex;
    button.classList.toggle("is-current", current);
    button.classList.toggle("is-playing", current && playback === "playing");
    button.setAttribute("aria-label", (current && engaged ? "Jeda " : "Putar ") + songsData[index].title);
    setPlayIcon(button.querySelector(".row-play"), current && engaged);
  });
}

function updatePlayerUI() {
  const song = songsData[currentSongIndex];
  byId("mp-title").textContent = song.title;
  let caption = "Hearts2Hearts";
  if (isDemoMode) caption = "Simulasi · tanpa audio";
  else if (playback === "loading") caption = "Memuat audio…";
  byId("mp-artist").textContent = caption;
  byId("player-cover").style.setProperty("--cover-light", heroColors[song.albumIdx]);
  byId("player-cover-symbol").textContent = song.emoji;
  setImage(byId("mp-cover"), song.cover);
  syncPlaybackButtons();
  updatePosition();
}

function stopDemoTimer() {
  window.clearInterval(demoTimer);
  demoTimer = null;
}

function runDemo() {
  stopDemoTimer();
  isDemoMode = true;
  playback = "playing";
  demoStartedAt = performance.now();
  updatePlayerUI();
  demoTimer = window.setInterval(() => {
    if (demoTime() >= demoDuration) stepSong(1);
    else updatePosition();
  }, 250);
}

async function startAudio() {
  const request = ++playRequest;
  playback = "loading";
  updatePlayerUI();
  try {
    await audio.play();
    if (request !== playRequest || isDemoMode) return;
    playback = "playing";
    updatePlayerUI();
  } catch (error) {
    if (request !== playRequest || isDemoMode) return;
    if (error.name === "NotAllowedError" || error.name === "AbortError") {
      playback = "paused";
      updatePlayerUI();
      if (error.name === "NotAllowedError") byId("mp-artist").textContent = "Ketuk putar untuk mulai";
    } else {
      runDemo();
    }
  }
}

function playSong(index, queue = playQueue, followEra = true) {
  const song = songsData[index];
  if (!song) return;
  ++playRequest;
  audio.pause();
  stopDemoTimer();
  playback = "paused";
  isDemoMode = false;
  demoPosition = 0;
  currentSongIndex = index;
  playQueue = queue;
  if (followEra) goToAlbum(song.albumIdx);
  audioLoaded = true;
  audio.src = song.audio;
  startAudio();
}

function togglePlay() {
  if (playback !== "paused") {
    ++playRequest;
    if (isDemoMode) demoPosition = demoTime();
    playback = "paused";
    audio.pause();
    stopDemoTimer();
    updatePlayerUI();
  } else if (isDemoMode) {
    runDemo();
  } else if (audioLoaded) {
    startAudio();
  } else {
    playSong(currentSongIndex);
  }
}

function toggleEra() {
  const tracks = albumsData[currentAlbumIndex].tracks;
  if (tracks.includes(currentSongIndex)) togglePlay();
  else playSong(tracks[0], catalogOrder);
}

function stepSong(step) {
  const pos = playQueue.indexOf(currentSongIndex);
  const next = (pos + step + playQueue.length) % playQueue.length;
  const followingCurrentEra = songsData[currentSongIndex].albumIdx === currentAlbumIndex;
  playSong(playQueue[next], playQueue, followingCurrentEra);
}

function seekSong(percent) {
  if (isDemoMode) {
    demoPosition = Number(percent) / 100 * demoDuration;
    demoStartedAt = performance.now();
  } else if (Number.isFinite(audio.duration) && audio.duration > 0) {
    audio.currentTime = Number(percent) / 100 * audio.duration;
  }
  updatePosition();
}

audio.addEventListener("timeupdate", updatePosition);
audio.addEventListener("durationchange", updatePosition);
audio.addEventListener("ended", () => {
  if (!isDemoMode && audio.ended) stepSong(1);
});
audio.addEventListener("error", () => {
  if (audio.error && !isDemoMode && playback !== "paused") {
    ++playRequest;
    runDemo();
  }
});
audio.addEventListener("pause", () => {
  if (!isDemoMode && audio.paused && !audio.ended && playback === "playing") {
    playback = "paused";
    updatePlayerUI();
  }
});

/* Kontrol klik, sentuh, dan keyboard */
function onButton(container, selector, action) {
  container.addEventListener("click", event => {
    const button = event.target.closest(selector);
    if (button && container.contains(button)) action(button, event);
  });
}

onButton(document, "[data-tab]", button => switchTab(button.dataset.tab));
onButton(document, "[data-lucky]", () => luckyMember());
onButton(byId("albums-grid"), "[data-album]", button => openAlbumFromGrid(Number(button.dataset.album)));
onButton(byId("members-grid"), "[data-member]", button => openMemberDetail(button.dataset.member));
onButton(modal, ".search-hit", selectSearchHit);
onButton(modal, "#reroll", () => luckyMember(true));
onButton(modal, "[data-member-heart]", (button, event) => sendMemberHeart(button.dataset.memberHeart, event));

function chooseTrack(button) {
  const index = Number(button.dataset.track);
  const queue = button.dataset.queue === "all" ? allSongOrder : catalogOrder;
  if (index === currentSongIndex) {
    playQueue = queue;
    togglePlay();
  } else {
    playSong(index, queue);
  }
}
onButton(byId("showcase-tracklist"), "[data-track]", chooseTrack);
onButton(byId("songs-list"), "[data-track]", chooseTrack);

byId("open-group").addEventListener("click", openGroupModal);
byId("journey-group").addEventListener("click", openGroupModal);
byId("open-search").addEventListener("click", () => openSearch());
document.querySelector("[data-search-songs]").addEventListener("click", () => openSearch(true));
byId("modal-close").addEventListener("click", () => modal.close());
byId("all-albums").addEventListener("click", () => { onlySaved = false; renderAllAlbumsGrid(); });
byId("saved-albums").addEventListener("click", () => { onlySaved = true; renderAllAlbumsGrid(); });
byId("save-album").addEventListener("click", likeAlbum);
byId("poke-mascot").addEventListener("click", pokeFalabella);

for (const [id, label] of [["send-love", "Hati untuk Hearts2Hearts"], ["mp-like", "Hati untuk lagu ini"]]) {
  const button = byId(id);
  let sent = 0;
  let feedbackTimer;
  button.addEventListener("click", event => {
    spawnHearts(event);
    button.classList.add("sent");
    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(() => button.classList.remove("sent"), 650);
    announce(label + " terkirim. " + (++sent));
  });
}

byId("era-play").addEventListener("click", toggleEra);
byId("prev-era").addEventListener("click", () => stepAlbum(-1));
byId("next-era").addEventListener("click", () => stepAlbum(1));
byId("carousel-dots").innerHTML = albumsData.map((album, index) => `<button type="button" class="era-dot" data-era="${index}" aria-label="Tampilkan era ${esc(album.shortTitle)}" title="${esc(album.shortTitle)}"></button>`).join("");
onButton(byId("carousel-dots"), "[data-era]", button => {
  goToAlbum(Number(button.dataset.era));
  announce("Era " + albumsData[currentAlbumIndex].shortTitle);
});
document.querySelector(".era-nav").addEventListener("keydown", event => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  stepAlbum(event.key === "ArrowLeft" ? -1 : 1);
  document.querySelector('.era-dot[aria-pressed="true"]').focus();
});

const artwork = byId("main-cover-wrap");
let gestureStart = null;
let ignoreArtClickUntil = 0;
artwork.addEventListener("pointerdown", event => {
  if (event.pointerType !== "mouse" && event.isPrimary) gestureStart = { x: event.clientX, y: event.clientY };
});
artwork.addEventListener("pointercancel", () => { gestureStart = null; });
artwork.addEventListener("pointerup", event => {
  if (!gestureStart || !event.isPrimary) return;
  const dx = event.clientX - gestureStart.x;
  const dy = event.clientY - gestureStart.y;
  gestureStart = null;
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.4) {
    ignoreArtClickUntil = performance.now() + 450;
    stepAlbum(dx < 0 ? 1 : -1);
  }
});
artwork.addEventListener("click", event => {
  if (event.detail && performance.now() < ignoreArtClickUntil) return;
  toggleEra();
});

byId("mp-play-btn").addEventListener("click", togglePlay);
byId("mp-next").addEventListener("click", () => stepSong(1));
byId("mp-prev").addEventListener("click", () => stepSong(-1));
byId("mp-list").addEventListener("click", () => switchTab("songs", true));
slider.addEventListener("input", () => seekSong(slider.value));
document.addEventListener("keydown", event => {
  const target = event.target;
  if (event.key === "/" && !modal.open && !event.metaKey && !event.ctrlKey && !event.altKey &&
      !target.isContentEditable && !target.closest("input, textarea, select")) {
    event.preventDefault();
    openSearch();
  }
});

const player = document.querySelector(".player");
function reservePlayerSpace() {
  document.documentElement.style.setProperty("--player-height", Math.ceil(player.getBoundingClientRect().height) + "px");
}
if ("ResizeObserver" in window) new ResizeObserver(reservePlayerSpace).observe(player);
else window.addEventListener("resize", reservePlayerSpace);
reservePlayerSpace();
renderMembersGrid();
renderAllAlbumsGrid();
renderAllSongsList();
renderTimeline();
renderShowcaseAlbum();
updatePlayerUI();
document.querySelectorAll("img").forEach(syncArtwork);

