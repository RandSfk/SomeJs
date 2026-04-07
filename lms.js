(() => {
  const cleanupIds = ["genz-fix-style", "genz-fixed-hub", "genz-overlay", "genz-cards", "genz-font"];
  cleanupIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });

  if (!document.getElementById("genz-font")) {
    const font = document.createElement("link");
    font.id = "genz-font";
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(font);
  }

  const style = document.createElement("style");
  style.id = "genz-fix-style";
  style.textContent = `
    :root{
      --bg:#0b0f14;
      --panel:rgba(19,24,31,.92);
      --line:rgba(255,255,255,.08);
      --text:#e9eef7;
      --muted:#aab3c2;
      --accent:#7c8cff;
      --accent2:#8b5cf6;
      --shadow:0 20px 55px rgba(0,0,0,.45);
      --radius:22px;
    }

    *{ box-sizing:border-box !important; transition: all .22s ease; }

    html, body{
      background:
        radial-gradient(900px 500px at 15% 0%, rgba(124,140,255,.12), transparent 50%),
        radial-gradient(800px 500px at 100% 0%, rgba(139,92,246,.10), transparent 46%),
        var(--bg) !important;
      color:var(--text) !important;
      font-family:"Poppins",system-ui,-apple-system,Segoe UI,sans-serif !important;
      overflow-y:auto !important;
    }

    .wrapper, .content-wrapper{
      background: transparent !important;
      min-height: 100vh !important;
      overflow: visible !important;
    }

    .main-header, .navbar{
      background: rgba(14,18,24,.9) !important;
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--line) !important;
    }

    .logo{
      background: linear-gradient(135deg, rgba(124,140,255,.18), rgba(139,92,246,.14)) !important;
      color:#fff !important;
      border-right:1px solid var(--line) !important;
    }

    .main-sidebar{
      background: linear-gradient(180deg,#0c1016 0%, #090c11 100%) !important;
      border-right:1px solid var(--line) !important;
    }

    .navbar .user-menu,
    .navbar .user.user-menu,
    .main-sidebar .user-panel,
    .main-sidebar .info,
    .main-sidebar .pull-left.image,
    .main-sidebar .user-panel .image,
    .main-sidebar .user-panel .pull-left.image,
    .sidebar .user-panel,
    .sidebar .user-panel *{
      display:none !important;
      visibility:hidden !important;
      opacity:0 !important;
      height:0 !important;
      min-height:0 !important;
      margin:0 !important;
      padding:0 !important;
      overflow:hidden !important;
    }

    .content{
      padding: 16px !important;
      overflow: visible !important;
    }

    .content > .row{
      display:grid !important;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
      gap:16px !important;
      align-items:start !important;
    }

    .content > .row > div{
      float:none !important;
      width:auto !important;
      margin:0 !important;
    }

    .small-box{
      position:relative;
      overflow:hidden;
      border-radius: var(--radius) !important;
      background: linear-gradient(145deg, rgba(28,33,42,.92), rgba(18,22,30,.94)) !important;
      border:1px solid rgba(255,255,255,.07) !important;
      box-shadow: var(--shadow) !important;
      min-height: 100%;
      backdrop-filter: blur(14px);
    }

    .small-box:hover{
      transform: translateY(-5px);
      box-shadow: 0 22px 60px rgba(0,0,0,.55) !important;
    }

    .small-box .inner{ padding: 18px !important; }
    .small-box .inner p{
      color: var(--text) !important;
      line-height: 1.7 !important;
      font-size: 15px !important;
    }
    .small-box .icon{
      opacity:.10 !important;
      top:8px !important;
      right:14px !important;
      font-size:76px !important;
      color:#fff !important;
    }

    .bg-yellow, .bg-green, .bg-blue, .bg-red{
      background: transparent !important;
      color: var(--text) !important;
    }

    .main-footer{
      background: rgba(14,18,24,.9) !important;
      color:#c6cfdb !important;
      border-top:1px solid var(--line) !important;
      backdrop-filter: blur(14px);
    }

    ::-webkit-scrollbar{ width:8px; height:8px; }
    ::-webkit-scrollbar-thumb{
      background: linear-gradient(180deg, rgba(124,140,255,.7), rgba(139,92,246,.7));
      border-radius:999px;
    }

    #genz-fixed-hub{
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 99999;
    }

    #genz-open-btn{
      border:none;
      outline:none;
      cursor:pointer;
      padding:14px 18px;
      border-radius:16px;
      font-weight:700;
      color:#fff;
      background: linear-gradient(135deg, rgba(124,140,255,.95), rgba(139,92,246,.95));
      box-shadow: 0 14px 28px rgba(124,140,255,.18);
    }

    #genz-open-btn:active{ transform: scale(.98); }

    #genz-overlay{
      position: fixed;
      inset: 0;
      z-index: 99998;
      display: none;
      background: rgba(0,0,0,.48);
      backdrop-filter: blur(8px);
      padding: 18px;
    }

    #genz-overlay.show{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .genz-modal{
      width: min(1100px, 100%);
      max-height: min(88vh, 920px);
      overflow: auto;
      border-radius: 26px;
      background: linear-gradient(145deg, rgba(24,29,38,.97), rgba(16,20,26,.98));
      border:1px solid var(--line);
      box-shadow: var(--shadow);
      padding: 18px;
    }

    .hub-top{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      flex-wrap:wrap;
      margin-bottom: 14px;
    }

    .hub-title h2{
      margin:0;
      color:#fff;
      font-size:22px;
      letter-spacing:-.4px;
      top:80px;
    }

    .hub-title p{
      margin:4px 0 0;
      color:var(--muted);
      font-size:13px;
    }

    .hub-btn{
      border:none;
      outline:none;
      cursor:pointer;
      padding:12px 16px;
      border-radius:16px;
      font-weight:700;
      color:#fff;
      background: linear-gradient(135deg, rgba(124,140,255,.95), rgba(139,92,246,.95));
    }

    .profile-mini{
      display:flex;
      align-items:center;
      gap:12px;
      margin:0 0 14px;
      padding:14px 16px;
      border-radius:22px;
      background: rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.07);
    }

    .profile-mini img{
      width:52px;
      height:52px;
      border-radius:16px;
      object-fit:cover;
      border:1px solid rgba(255,255,255,.08);
      box-shadow: 0 12px 26px rgba(0,0,0,.28);
    }

    .profile-mini .meta{
      min-width:0;
      flex:1;
    }

    .profile-mini .meta .name{
      font-size:14px;
      font-weight:700;
      color:#fff;
      margin:0;
      line-height:1.25;
    }

    .profile-mini .meta .npm{
      font-size:12px;
      color:var(--muted);
      margin:2px 0 0;
    }

    .hub-panel{
      display:block;
      padding-top: 10px;
    }

    .hub-grid{
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap:14px;
    }

    .hub-card{
      position:relative;
      overflow:hidden;
      border-radius:22px;
      background: linear-gradient(145deg, rgba(33,39,50,.95), rgba(19,23,30,.95));
      border:1px solid rgba(255,255,255,.07);
      box-shadow: 0 14px 35px rgba(0,0,0,.28);
      min-height: 150px;
    }

    .hub-card:hover{
      transform: translateY(-5px);
      box-shadow: 0 22px 46px rgba(0,0,0,.42);
    }

    .hub-card .label{
      padding:16px 16px 10px;
      font-size:15px;
      font-weight:700;
      color:#fff;
      line-height:1.35;
    }

    .hub-card .sub{
      padding:0 16px 14px;
      color:var(--muted);
      font-size:12px;
      line-height:1.5;
      min-height: 52px;
    }

    .hub-card a{
      position:absolute;
      left:16px;
      bottom:16px;
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:10px 14px;
      border-radius:14px;
      text-decoration:none !important;
      color:#fff !important;
      font-size:12px;
      font-weight:700;
      background: linear-gradient(135deg, rgba(124,140,255,.95), rgba(139,92,246,.95));
    }

    .hub-card.is-alert{
      border-color: rgba(245,185,66,.22);
      background: linear-gradient(145deg, rgba(45,36,18,.92), rgba(22,19,14,.95));
    }

    .hub-card.is-alert a{
      background: linear-gradient(135deg, #f5b942, #ff7a59);
    }

    .hub-card.is-good a{
      background: linear-gradient(135deg, #27c281, #22c55e);
    }

    .hub-card.is-red a{
      background: linear-gradient(135deg, #ff5f6d, #ff3d71);
    }

    @media (max-width: 768px){
      .content{ padding: 12px !important; }
      .hub-title h2{ font-size: 18px; }
      .genz-modal{ padding: 14px; }
      .hub-grid{ grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  const content = document.querySelector(".content");
  if (!content) return;

  const profileImg =
    document.querySelector(".user-panel .image img")?.src ||
    document.querySelector(".navbar .user-menu img")?.src ||
    "";

  const profileName =
    document.querySelector(".navbar .user-menu .hidden-xs")?.textContent?.trim() ||
    "Mahasiswa";

  const npm =
    document.querySelector(".user-panel .info p")?.textContent?.trim() ||
    "";

  const row = content.querySelector(".row");
  if (row) {
    const kids = Array.from(row.children);
    kids.slice(2).forEach((el) => el.remove());
  }

  const allBoxes = Array.from(content.querySelectorAll(".small-box"));

  const cardsMeta = [
    { key: "BELUM APPROVED", title: "ABSENSI", sub: "Lihat status approval berkas perwalian kamu.", cls: "is-alert" },
    { key: "PERWALIAN MAHASISWA", title: "Perwalian Mahasiswa", sub: "Menu perwalian semester berjalan.", cls: "is-good" },
    { key: "Download Kartu Hasil Studi", title: "KHS", sub: "Download hasil studi semester kamu.", cls: "is-good" },
    { key: "Download Kartu Rencana Studi", title: "KRS", sub: "Menu kartu rencana studi.", cls: "is-red" },
    { key: "Ruang Materi", title: "Ruang Materi", sub: "Download materi kuliah.", cls: "" },
    { key: "Ruang Tugas", title: "Ruang Tugas", sub: "Upload jawaban tugas kuliah.", cls: "is-red" },
    { key: "Ruang Quiz", title: "Ruang Quiz", sub: "Upload jawaban quiz.", cls: "is-red" },
    { key: "Ruang Tugas Kelompok", title: "Tugas Kelompok", sub: "Masuk ke ruang tugas kelompok.", cls: "" }
  ];

  const findBox = (needle) =>
    allBoxes.find((box) => (box.innerText || "").includes(needle)) || null;

  const extractLink = (box) => {
    const a = box?.querySelector("a[href]");
    alert(a)
    return a ? a.getAttribute("href") : "#";
  };

  const removeBox = (box) => {
    if (!box) return;
    const wrap = box.closest(".col-lg-12, .col-lg-6, .col-lg-9, .col-lg-3");
    if (wrap) wrap.remove();
    else box.remove();
  };

  const overlayCards = cardsMeta.map((meta) => {
    const box = findBox(meta.key);
    const link = extractLink(box);
    if (box) removeBox(box);
    return { ...meta, link };
  });

  const infoBox = allBoxes.find((box) => (box.innerText || "").includes("Informasi Kampus"));
  if (infoBox) removeBox(infoBox);

  const hub = document.createElement("div");
  hub.id = "genz-fixed-hub";
  hub.innerHTML = `
    <button class="hub-btn" type="button" id="genz-open-btn">Buka Menu</button>
  `;

  const overlay = document.createElement("div");
  overlay.id = "genz-overlay";
  overlay.innerHTML = `
    <div class="genz-modal">
      <div class="hub-top">
        <div class="hub-title">
          <h2>Dashboard</h2>
          <p>Menu dibuat sebagai elemen baru di overlay.</p>
        </div>
        <button class="hub-btn" type="button" id="genz-close-btn">Tutup</button>
      </div>

      <div class="profile-mini">
        ${profileImg ? `<img src="${profileImg}" alt="profile">` : ""}
        <div class="meta">
          <p class="name">${profileName}</p>
          <p class="npm">${npm}</p>
        </div>
      </div>

      <div class="hub-panel">
        <div class="hub-grid" id="genz-grid"></div>
      </div>
    </div>
  `;

  const grid = overlay.querySelector("#genz-grid");

  overlayCards.forEach((meta) => {
    const card = document.createElement("div");
    card.className = `hub-card ${meta.cls}`.trim();

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = meta.title;

    const sub = document.createElement("div");
    sub.className = "sub";
    sub.textContent = meta.sub;

    const link = document.createElement("a");
    link.href = meta.link || "#";
    link.textContent = "Buka";

    card.appendChild(label);
    card.appendChild(sub);
    card.appendChild(link);
    grid.appendChild(card);
  });

  document.body.appendChild(hub);
  document.body.appendChild(overlay);

  const openBtn = hub.querySelector("#genz-open-btn");
  const closeBtn = overlay.querySelector("#genz-close-btn");

  const openOverlay = () => overlay.classList.add("show");
  const closeOverlay = () => overlay.classList.remove("show");

  openBtn.addEventListener("click", openOverlay);
  closeBtn.addEventListener("click", closeOverlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeOverlay();
  });
})();

(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    .content-wrapper {
      background: #1e1e1e !important;
    }

    .content {
      background: #1e1e1e !important;
    }

    .table {
      background: #2b2b2b !important;
      color: #eee !important;
    }

    .table th, .table td {
      border-color: #444 !important;
    }
  `;
  document.head.appendChild(style);
})();

(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    .box {
      background: #2b2b2b !important; /* abu gelap */
      color: #eee !important;
      border-color: #444 !important;
    }

    .box-header {
      background: #333 !important;
      color: #fff !important;
    }

    .box-body {
      background: #2b2b2b !important;
    }
  `;
  document.head.appendChild(style);
})();
