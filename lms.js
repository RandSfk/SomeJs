(() => {
  const cleanupIds = ["genz-fix-style", "genz-fixed-hub", "genz-overlay", "genz-font"];
  cleanupIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });

  // FONT
  if (!document.getElementById("genz-font")) {
    const font = document.createElement("link");
    font.id = "genz-font";
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(font);
  }

  // STYLE (dipersingkat dikit biar fokus ke logic)
  const style = document.createElement("style");
  style.id = "genz-fix-style";
  style.textContent = `
    body{background:#0b0f14!important;color:#fff!important;font-family:Poppins!important}
    .hub-card{cursor:pointer;border-radius:20px;padding:16px;background:#1a1f27;margin-bottom:12px}
    .hub-card:hover{transform:translateY(-4px)}
    #genz-fixed-hub{position:fixed;bottom:18px;right:18px;z-index:99999}
    #genz-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);display:none;z-index:99998}
    #genz-overlay.show{display:flex;align-items:center;justify-content:center}
    .genz-modal{background:#11161c;padding:20px;border-radius:20px;width:90%;max-width:900px}
    .hub-btn{padding:10px 14px;border:none;border-radius:12px;background:#7c8cff;color:#fff;font-weight:700}
  `;
  document.head.appendChild(style);

  const content = document.querySelector(".content");
  if (!content) return;

  // AMBIL PROFILE
  const profileImg =
    document.querySelector(".user-panel .image img")?.src ||
    document.querySelector(".navbar .user-menu img")?.src || "";

  const profileName =
    document.querySelector(".navbar .user-menu .hidden-xs")?.textContent?.trim() ||
    "Mahasiswa";

  const npm =
    document.querySelector(".user-panel .info p")?.textContent?.trim() || "";

  // HAPUS SEMUA BOX ASLI
  document.querySelectorAll(".small-box").forEach(el => {
    const wrap = el.closest(".col-lg-3, .col-lg-4, .col-lg-6, .col-lg-12");
    if (wrap) wrap.remove();
    else el.remove();
  });

  // 🔥 DATA CARD + LINK MANUAL
  const cards = [
    {
      title: "ABSENSI",
      sub: "Lihat status approval berkas perwalian kamu.",
      link: "/absensi"
    },
    {
      title: "Perwalian Mahasiswa",
      sub: "Menu perwalian semester berjalan.",
      link: "/perwalian"
    },
    {
      title: "KHS",
      sub: "Download hasil studi semester kamu.",
      link: "/khs"
    },
    {
      title: "KRS",
      sub: "Menu kartu rencana studi.",
      link: "/krs"
    },
    {
      title: "Ruang Materi",
      sub: "Download materi kuliah.",
      link: "/materi"
    },
    {
      title: "Ruang Tugas",
      sub: "Upload jawaban tugas kuliah.",
      link: "/tugas"
    },
    {
      title: "Ruang Quiz",
      sub: "Upload jawaban quiz.",
      link: "/quiz"
    },
    {
      title: "Tugas Kelompok",
      sub: "Masuk ke ruang tugas kelompok.",
      link: "/kelompok"
    }
  ];

  // FIX LINK BIAR ABSOLUTE
  const toFull = (url) => {
    if (!url) return "#";
    if (url.startsWith("http")) return url;
    return location.origin + url;
  };

  // HUB BUTTON
  const hub = document.createElement("div");
  hub.id = "genz-fixed-hub";
  hub.innerHTML = `<button class="hub-btn" id="genz-open-btn">Buka Menu</button>`;

  // OVERLAY
  const overlay = document.createElement("div");
  overlay.id = "genz-overlay";
  overlay.innerHTML = `
    <div class="genz-modal">
      <div style="display:flex;justify-content:space-between;margin-bottom:15px">
        <h3>Dashboard</h3>
        <button class="hub-btn" id="genz-close-btn">Tutup</button>
      </div>

      <div style="margin-bottom:15px">
        ${profileImg ? `<img src="${profileImg}" style="width:50px;border-radius:10px">` : ""}
        <div>${profileName}</div>
        <div style="font-size:12px;color:#aaa">${npm}</div>
      </div>

      <div id="genz-grid"></div>
    </div>
  `;

  const grid = overlay.querySelector("#genz-grid");

  // RENDER CARD
  cards.forEach((c) => {
    const card = document.createElement("div");
    card.className = "hub-card";

    card.innerHTML = `
      <div style="font-weight:700">${c.title}</div>
      <div style="font-size:12px;color:#aaa">${c.sub}</div>
    `;

    // 🔥 FULL CLICK
    card.addEventListener("click", () => {
      const link = toFull(c.link);
      window.location.href = link;
    });

    grid.appendChild(card);
  });

  document.body.appendChild(hub);
  document.body.appendChild(overlay);

  // EVENT
  document.getElementById("genz-open-btn").onclick = () =>
    overlay.classList.add("show");

  document.getElementById("genz-close-btn").onclick = () =>
    overlay.classList.remove("show");

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("show");
  });
})();
