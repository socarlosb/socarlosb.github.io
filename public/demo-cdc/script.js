// Causas de Caudas — comportamento do site
// Sem dependências externas. Os dados dos animais vêm de data/animals.js (global ANIMALS).

const EMAIL = "geral@causasdecaudas.org";

/* ---------- Toast ---------- */

let toastEl = null;
let toastTimer = null;

function showToast(msg) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    toastEl.setAttribute("role", "status");
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
}

/* ---------- Copiar para a área de transferência ---------- */

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;
  const text = btn.getAttribute("data-copy");
  navigator.clipboard.writeText(text).then(
    () => showToast((btn.getAttribute("data-copy-label") || "Copiado") + " ✓"),
    () => showToast("Não foi possível copiar — selecione o texto manualmente")
  );
});

/* ---------- Menu mobile ---------- */

const navToggle = document.querySelector(".nav-toggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const nav = document.querySelector(".site-nav");
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

/* ---------- Números de impacto ---------- */
// Preenche qualquer elemento com data-stat="chave" a partir de data/stats.js.

if (typeof STATS !== "undefined") {
  document.querySelectorAll("[data-stat]").forEach((el) => {
    const value = STATS[el.getAttribute("data-stat")];
    if (value !== undefined) el.textContent = value;
  });
}

/* ---------- Animais ---------- */

const LABELS = {
  especie: { gato: "Gato", cao: "Cão" },
  sexo: { macho: "Macho", femea: "Fêmea" },
  porte: { pequeno: "Porte pequeno", medio: "Porte médio", grande: "Porte grande" },
  estado: { disponivel: "Para adoção", reservado: "Reservado", adotado: "Adotado ❤" }
};

function idadeAproximada(nascimento) {
  if (!nascimento) return null;
  const [ano, mes] = nascimento.split("-").map(Number);
  const meses = (new Date().getFullYear() - ano) * 12 + (new Date().getMonth() + 1 - (mes || 6));
  if (meses < 1) return "recém-nascido";
  if (meses < 12) return meses + (meses === 1 ? " mês" : " meses");
  const anos = Math.floor(meses / 12);
  return "~" + anos + (anos === 1 ? " ano" : " anos");
}

function fichaUrl(a) {
  return "animais.html?animal=" + encodeURIComponent(a.id);
}

function photoBox(a, index) {
  const foto = document.createElement("div");
  foto.className = "animal-photo";
  const src = a.fotos && a.fotos[index || 0];
  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Fotografia de " + a.nome;
    img.loading = "lazy";
    foto.appendChild(img);
  } else {
    foto.textContent = a.especie === "cao" ? "🐶" : "🐱";
    foto.setAttribute("aria-label", "Sem fotografia — " + LABELS.especie[a.especie]);
  }
  return foto;
}

function animalCard(a) {
  const card = document.createElement("article");
  card.className = "card animal-card";

  const fotoLink = document.createElement("a");
  fotoLink.href = fichaUrl(a);
  fotoLink.setAttribute("aria-hidden", "true");
  fotoLink.tabIndex = -1;
  fotoLink.appendChild(photoBox(a));
  card.appendChild(fotoLink);

  const body = document.createElement("div");
  body.className = "animal-body";

  const h3 = document.createElement("h3");
  const nomeLink = document.createElement("a");
  nomeLink.href = fichaUrl(a);
  nomeLink.textContent = a.nome;
  h3.appendChild(nomeLink);
  body.appendChild(h3);

  const badges = document.createElement("div");
  badges.className = "badges";
  const idade = idadeAproximada(a.nascimento);
  const tags = [
    LABELS.especie[a.especie],
    LABELS.sexo[a.sexo],
    idade,
    LABELS.porte[a.porte]
  ].filter(Boolean);
  for (const t of tags) {
    const s = document.createElement("span");
    s.className = "badge";
    s.textContent = t;
    badges.appendChild(s);
  }
  const estado = document.createElement("span");
  estado.className = "badge badge-estado-" + a.estado;
  estado.textContent = LABELS.estado[a.estado];
  badges.appendChild(estado);
  if (a.apadrinhamento === "procura") {
    const ap = document.createElement("span");
    ap.className = "badge badge-apadrinhamento";
    ap.textContent = "Procura padrinho";
    badges.appendChild(ap);
  }
  body.appendChild(badges);

  const p = document.createElement("p");
  p.textContent = a.descricao;
  body.appendChild(p);

  const actions = document.createElement("div");
  actions.className = "actions";
  const ver = document.createElement("a");
  ver.className = "btn btn-secondary";
  ver.href = fichaUrl(a);
  const artigo = a.sexo === "femea" ? "a " : a.sexo === "macho" ? "o " : null;
  ver.textContent = artigo ? "Conhecer " + artigo + a.nome : "Ver ficha";
  actions.appendChild(ver);
  if (a.estado === "disponivel") {
    const adopt = document.createElement("a");
    adopt.className = "btn";
    adopt.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Adoção — " + a.nome);
    adopt.textContent = "Quero adotar";
    actions.appendChild(adopt);
  }
  body.appendChild(actions);

  card.appendChild(body);
  return card;
}

function animalBadges(a) {
  const badges = document.createElement("div");
  badges.className = "badges";
  const idade = idadeAproximada(a.nascimento);
  const tags = [LABELS.especie[a.especie], LABELS.sexo[a.sexo], idade, LABELS.porte[a.porte]].filter(Boolean);
  for (const t of tags) {
    const s = document.createElement("span");
    s.className = "badge";
    s.textContent = t;
    badges.appendChild(s);
  }
  const estado = document.createElement("span");
  estado.className = "badge badge-estado-" + a.estado;
  estado.textContent = LABELS.estado[a.estado];
  badges.appendChild(estado);
  if (a.apadrinhamento === "procura") {
    const ap = document.createElement("span");
    ap.className = "badge badge-apadrinhamento";
    ap.textContent = "Procura padrinho";
    badges.appendChild(ap);
  }
  return badges;
}

/* ---------- Lightbox (ampliar foto, com navegação entre fotos) ---------- */

let lightbox = null;
const lightboxState = { fotos: [], index: 0, alt: "" };

function lightboxShow(i) {
  const n = lightboxState.fotos.length;
  lightboxState.index = ((i % n) + n) % n; // navegação circular
  const img = lightbox.querySelector("img");
  img.src = lightboxState.fotos[lightboxState.index];
  img.alt = lightboxState.alt + " (" + (lightboxState.index + 1) + " de " + n + ")";
  lightbox.querySelector(".lightbox-counter").textContent =
    n > 1 ? lightboxState.index + 1 + " / " + n : "";
}

function openLightbox(fotos, index, alt) {
  if (!lightbox) {
    lightbox = document.createElement("dialog");
    lightbox.className = "lightbox";
    lightbox.appendChild(document.createElement("img"));

    const mkNav = (className, label, delta) => {
      const btn = document.createElement("button");
      btn.className = "lightbox-nav " + className;
      btn.setAttribute("aria-label", label);
      btn.textContent = delta < 0 ? "‹" : "›";
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // não fechar o lightbox
        lightboxShow(lightboxState.index + delta);
      });
      return btn;
    };
    lightbox.appendChild(mkNav("lightbox-prev", "Fotografia anterior", -1));
    lightbox.appendChild(mkNav("lightbox-next", "Fotografia seguinte", 1));

    const counter = document.createElement("div");
    counter.className = "lightbox-counter";
    lightbox.appendChild(counter);

    // fechar ao clicar fora dos botões (a tecla Escape já fecha por defeito)
    lightbox.addEventListener("click", (e) => {
      if (!e.target.closest(".lightbox-nav")) lightbox.close();
    });
    lightbox.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") lightboxShow(lightboxState.index - 1);
      if (e.key === "ArrowRight") lightboxShow(lightboxState.index + 1);
    });
    document.body.appendChild(lightbox);
  }

  lightboxState.fotos = fotos;
  lightboxState.alt = alt;
  const multi = fotos.length > 1;
  lightbox.querySelector(".lightbox-prev").hidden = !multi;
  lightbox.querySelector(".lightbox-next").hidden = !multi;
  lightboxShow(index);
  lightbox.showModal();
}

function renderAnimalDetail(container, a) {
  container.innerHTML = "";

  const back = document.createElement("a");
  back.className = "back-link";
  back.href = "animais.html";
  back.textContent = "← Todos os animais";
  container.appendChild(back);

  const detail = document.createElement("article");
  detail.className = "animal-detail";

  // Galeria: foto principal (clique amplia) + miniaturas clicáveis
  const gallery = document.createElement("div");
  gallery.className = "detail-gallery";

  function mainPhoto(i) {
    const box = photoBox(a, i);
    const src = a.fotos && a.fotos[i];
    if (src) {
      box.classList.add("zoomable");
      box.setAttribute("role", "button");
      box.setAttribute("aria-label", "Ampliar fotografia de " + a.nome);
      box.tabIndex = 0;
      const zoom = () => openLightbox(a.fotos, i, "Fotografia de " + a.nome);
      box.addEventListener("click", zoom);
      box.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          zoom();
        }
      });
    }
    return box;
  }

  gallery.appendChild(mainPhoto(0));
  if (a.fotos && a.fotos.length > 1) {
    const thumbs = document.createElement("div");
    thumbs.className = "detail-thumbs";
    a.fotos.forEach((src, i) => {
      const btn = document.createElement("button");
      btn.setAttribute("aria-label", "Ver fotografia " + (i + 1) + " de " + a.nome);
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      btn.appendChild(img);
      btn.addEventListener("click", () => {
        gallery.replaceChild(mainPhoto(i), gallery.firstChild);
      });
      thumbs.appendChild(btn);
    });
    gallery.appendChild(thumbs);
  }
  detail.appendChild(gallery);

  const info = document.createElement("div");
  info.className = "detail-info";

  const h1 = document.createElement("h1");
  h1.textContent = a.nome;
  info.appendChild(h1);

  info.appendChild(animalBadges(a));

  const historia = a.historia || a.descricao || "";
  for (const par of historia.split("\n\n")) {
    if (!par.trim()) continue;
    const p = document.createElement("p");
    p.textContent = par;
    info.appendChild(p);
  }

  const actions = document.createElement("div");
  actions.className = "actions";
  if (a.estado === "disponivel") {
    const adopt = document.createElement("a");
    adopt.className = "btn";
    adopt.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Adoção — " + a.nome);
    const artigo = a.sexo === "femea" ? "a " : a.sexo === "macho" ? "o " : null;
    adopt.textContent = artigo ? "Quero adotar " + artigo + a.nome : "Quero adotar";
    actions.appendChild(adopt);
  }
  if (a.apadrinhamento === "procura") {
    const god = document.createElement("a");
    god.className = "btn btn-secondary";
    god.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Apadrinhamento — " + a.nome);
    god.textContent = "Apadrinhar";
    actions.appendChild(god);
  }
  // Partilha: Web Share API (abre o menu nativo de partilha) com fallback
  // para copiar o link onde a API não existe (ex.: Firefox no desktop).
  // Atenção: só em http/https — com file:// o Chrome em Windows chega a
  // matar o separador (RESULT_CODE_KILLED_BAD_MESSAGE) em vez de rejeitar.
  const share = document.createElement("button");
  share.className = "btn btn-secondary";
  const shareData = {
    title: a.nome + " — Causas de Caudas",
    text: a.descricao,
    url: location.href
  };
  const canUseShareApi =
    typeof navigator.share === "function" &&
    /^https?:$/.test(location.protocol) &&
    (typeof navigator.canShare !== "function" || navigator.canShare(shareData));
  if (canUseShareApi) {
    share.textContent = "Partilhar";
    share.addEventListener("click", () => {
      try {
        navigator.share(shareData).catch(() => {}); // cancelar a partilha não é um erro
      } catch (e) {
        /* dados rejeitados: não há mais nada a fazer */
      }
    });
  } else {
    share.textContent = "Copiar link para partilhar";
    share.setAttribute("data-copy", location.href);
    share.setAttribute("data-copy-label", "Link copiado");
  }
  actions.appendChild(share);
  info.appendChild(actions);

  detail.appendChild(info);
  container.appendChild(detail);
}

function renderAnimals(container, list) {
  container.innerHTML = "";
  if (!list.length) {
    const msg = document.createElement("p");
    msg.className = "empty-msg";
    msg.textContent = "Nenhum animal corresponde a estes filtros — experimente alargar a pesquisa.";
    container.appendChild(msg);
    return;
  }
  for (const a of list) container.appendChild(animalCard(a));
}

// Página Animais: ficha individual (?animal=id) ou grelha com filtros
const grid = document.getElementById("animals-grid");
const detailContainer = document.getElementById("animal-detail");
const listingContainer = document.getElementById("animals-listing");

const params = new URLSearchParams(location.search);
const animalId = params.get("animal") || params.get("gato");
const selectedAnimal =
  animalId && typeof ANIMALS !== "undefined" ? ANIMALS.find((a) => a.id === animalId) : null;

if (selectedAnimal && detailContainer) {
  if (listingContainer) listingContainer.hidden = true;
  renderAnimalDetail(detailContainer, selectedAnimal);
  document.title = selectedAnimal.nome + " — Causas de Caudas";
} else if (grid && typeof ANIMALS !== "undefined") {
  const state = { especie: "todos", estado: "ativos" };

  function apply() {
    let list = ANIMALS.slice();
    if (state.especie !== "todos") list = list.filter((a) => a.especie === state.especie);
    if (state.estado === "ativos") list = list.filter((a) => a.estado !== "adotado");
    renderAnimals(grid, list);
  }

  document.querySelectorAll(".chip[data-especie]").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.especie = chip.getAttribute("data-especie");
      document.querySelectorAll(".chip[data-especie]").forEach((c) =>
        c.setAttribute("aria-pressed", String(c === chip))
      );
      apply();
    });
  });

  const estadoSel = document.getElementById("filter-estado");
  if (estadoSel) {
    estadoSel.addEventListener("change", () => {
      state.estado = estadoSel.value;
      apply();
    });
  }

  apply();
}

// Homepage: destaques (2 animais disponíveis, escolhidos ao acaso em cada visita
// para todos terem visibilidade)
const destaques = document.getElementById("destaques-grid");
if (destaques && typeof ANIMALS !== "undefined") {
  const disponiveis = ANIMALS.filter((a) => a.estado === "disponivel");
  for (let i = disponiveis.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [disponiveis[i], disponiveis[j]] = [disponiveis[j], disponiveis[i]];
  }
  renderAnimals(destaques, disponiveis.slice(0, 2));
}

/* ---------- Ampliar as ilustrações de exemplo (página Como ajudar) ---------- */

const illuButtons = Array.from(document.querySelectorAll(".illu-samples button"));
if (illuButtons.length) {
  const fotos = illuButtons.map((btn) => btn.querySelector("img").getAttribute("src"));
  illuButtons.forEach((btn, i) => {
    btn.addEventListener("click", () =>
      openLightbox(fotos, i, "Exemplo de ilustração personalizada")
    );
  });
}

/* ---------- Parceiros e amigos (página Sobre nós) ---------- */
// Preenche as grelhas [data-partners="tipo"] a partir de data/partners.js.

document.querySelectorAll("[data-partners]").forEach((grid) => {
  if (typeof PARTNERS === "undefined") return;
  const tipo = grid.getAttribute("data-partners");
  PARTNERS.filter((p) => p.tipo === tipo).forEach((p) => {
    const img = document.createElement("img");
    img.src = p.img;
    img.alt = "Logótipo de " + p.nome;
    img.loading = "lazy";
    if (p.url) {
      const link = document.createElement("a");
      link.href = p.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.title = p.nome;
      link.appendChild(img);
      grid.appendChild(link);
    } else {
      img.title = p.nome;
      grid.appendChild(img);
    }
  });
});

/* ---------- Finais felizes (homepage) ---------- */
// Cartões a partir de data/stories.js; o cartão-convite escrito no HTML fica no fim.

const historias = document.getElementById("historias-grid");
if (historias && typeof STORIES !== "undefined") {
  const convite = historias.firstElementChild;
  STORIES.forEach((s) => {
    const card = document.createElement("div");
    card.className = "card";
    if (s.foto) {
      const img = document.createElement("img");
      img.className = "card-capa";
      img.src = s.foto;
      img.alt = "Fotografia de " + s.nome;
      img.loading = "lazy";
      card.appendChild(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "card-capa-placeholder";
      ph.setAttribute("aria-hidden", "true");
      ph.textContent = "🐾";
      card.appendChild(ph);
    }
    const h3 = document.createElement("h3");
    h3.textContent = s.nome;
    card.appendChild(h3);
    const p = document.createElement("p");
    p.textContent = s.texto;
    card.appendChild(p);
    historias.insertBefore(card, convite);
  });
}

/* ---------- Dúvidas frequentes (faq.html) ---------- */
// Listagem em cartões + página de dúvida via ?faq=id (link partilhável).

function renderFaqDetail(container, f) {
  const back = document.createElement("a");
  back.className = "back-link";
  back.href = "faq.html";
  back.textContent = "← Todas as dúvidas";
  container.appendChild(back);

  // Mesmo layout da ficha do animal: galeria uniforme à esquerda, texto à direita
  const temFotos = f.fotos && f.fotos.length > 0;
  const detail = document.createElement("article");
  detail.className = temFotos ? "animal-detail" : "faq-article";

  if (temFotos) {
    const gallery = document.createElement("div");
    gallery.className = "detail-gallery";

    function mainPhoto(i) {
      const box = document.createElement("div");
      box.className = "animal-photo zoomable";
      box.setAttribute("role", "button");
      box.setAttribute("aria-label", "Ampliar imagem de " + f.titulo);
      box.tabIndex = 0;
      const img = document.createElement("img");
      img.src = f.fotos[i];
      img.alt = f.titulo + " — imagem " + (i + 1) + " de " + f.fotos.length;
      box.appendChild(img);
      const zoom = () => openLightbox(f.fotos, i, f.titulo);
      box.addEventListener("click", zoom);
      box.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          zoom();
        }
      });
      return box;
    }

    gallery.appendChild(mainPhoto(0));
    if (f.fotos.length > 1) {
      const thumbs = document.createElement("div");
      thumbs.className = "detail-thumbs";
      f.fotos.forEach((src, i) => {
        const btn = document.createElement("button");
        btn.setAttribute("aria-label", "Ver imagem " + (i + 1) + " de " + f.fotos.length);
        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        btn.appendChild(img);
        btn.addEventListener("click", () => {
          gallery.replaceChild(mainPhoto(i), gallery.firstChild);
        });
        thumbs.appendChild(btn);
      });
      gallery.appendChild(thumbs);
    }
    detail.appendChild(gallery);
  }

  const info = document.createElement("div");
  info.className = "detail-info";

  const h1 = document.createElement("h1");
  h1.textContent = f.titulo;
  info.appendChild(h1);

  // corpo: parágrafos separados por \n\n; "# " vira subtítulo; linhas "- " viram lista
  f.corpo.split("\n\n").forEach((bloco) => {
    const linhas = bloco.split("\n");
    if (bloco.startsWith("# ")) {
      const h2 = document.createElement("h2");
      h2.textContent = bloco.slice(2);
      info.appendChild(h2);
    } else if (linhas.every((l) => l.startsWith("- "))) {
      const ul = document.createElement("ul");
      linhas.forEach((l) => {
        const li = document.createElement("li");
        li.textContent = l.slice(2);
        ul.appendChild(li);
      });
      info.appendChild(ul);
    } else {
      const p = document.createElement("p");
      p.textContent = bloco;
      info.appendChild(p);
    }
  });

  // Partilhar: Web Share quando disponível; senão, copiar o link
  const share = document.createElement("button");
  share.className = "btn btn-secondary";
  share.textContent = "Partilhar esta dúvida";
  const shareData = { title: f.titulo, url: location.href };
  const canWebShare =
    /^https?:$/.test(location.protocol) &&
    typeof navigator.share === "function" &&
    (typeof navigator.canShare !== "function" || navigator.canShare(shareData));
  if (canWebShare) {
    share.addEventListener("click", () => navigator.share(shareData).catch(() => {}));
  } else {
    share.setAttribute("data-copy", location.href);
    share.setAttribute("data-copy-label", "Link copiado");
  }
  const shareRow = document.createElement("p");
  shareRow.className = "faq-share";
  shareRow.appendChild(share);
  info.appendChild(shareRow);

  detail.appendChild(info);
  container.appendChild(detail);
}

function faqCard(f) {
  const card = document.createElement("div");
  card.className = "card";
  const url = "faq.html?faq=" + encodeURIComponent(f.id);

  if (f.fotos && f.fotos.length) {
    const capaLink = document.createElement("a");
    capaLink.href = url;
    capaLink.tabIndex = -1;
    capaLink.setAttribute("aria-hidden", "true");
    const img = document.createElement("img");
    img.className = "card-capa";
    img.src = f.fotos[0];
    img.alt = "";
    img.loading = "lazy";
    capaLink.appendChild(img);
    card.appendChild(capaLink);
  }

  const h3 = document.createElement("h3");
  const titleLink = document.createElement("a");
  titleLink.href = url;
  titleLink.textContent = f.titulo;
  h3.appendChild(titleLink);
  card.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = f.resumo;
  card.appendChild(p);

  const mais = document.createElement("a");
  mais.href = url;
  mais.textContent = "Ler resposta →";
  card.appendChild(mais);

  return card;
}

const faqDetailContainer = document.getElementById("faq-detail");
const faqListing = document.getElementById("faq-listing");
const faqGrid = document.getElementById("faq-grid");
const faqId = params.get("faq");
const selectedFaq =
  faqId && typeof FAQS !== "undefined" ? FAQS.find((f) => f.id === faqId) : null;

if (selectedFaq && faqDetailContainer) {
  if (faqListing) faqListing.hidden = true;
  renderFaqDetail(faqDetailContainer, selectedFaq);
  document.title = selectedFaq.titulo + " — Causas de Caudas";
} else if (faqGrid && typeof FAQS !== "undefined") {
  FAQS.forEach((f) => faqGrid.appendChild(faqCard(f)));
}

/* ---------- Formulários via mailto ---------- */
// MVP sem backend: o formulário abre o programa de email com o assunto e corpo preenchidos.

document.querySelectorAll("form[data-mailto]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = form.getAttribute("data-subject") || "Contacto pelo site";
    let body = "";
    for (const [key, value] of data.entries()) {
      if (value) body += key + ": " + value + "\n";
    }
    location.href =
      "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
});
