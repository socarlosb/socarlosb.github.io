// Parceiros e associações amigas — editar este ficheiro para adicionar/atualizar.
// Os logótipos vivem em assets/img/parceiros/ e assets/img/amigos/
// (nome do ficheiro = nome da entidade, bom para SEO de imagem).
//
// Campos:
//   nome   nome da entidade (usado no texto alternativo do logótipo)
//   tipo   "parceiro" | "amigo" — decide em que grelha aparece no sobre.html
//   img    caminho do logótipo
//   url    site da entidade (null = logótipo aparece sem link)

const PARTNERS = [
  // Parceiros (empresas e instituições)
  { nome: "Portoalities", tipo: "parceiro", img: "assets/img/parceiros/portoalities.webp", url: "https://portoalities.com/" },
  { nome: "Best Account", tipo: "parceiro", img: "assets/img/parceiros/best-account.webp", url: "https://bestaccount.com.pt/" },
  { nome: "Cores ao Cubo", tipo: "parceiro", img: "assets/img/parceiros/cores-ao-cubo.webp", url: "https://www.coresaocubo.pt/" },
  { nome: "Techy", tipo: "parceiro", img: "assets/img/parceiros/techy.webp", url: "https://www.techy.pt/" },
  { nome: "Foz Imóveis", tipo: "parceiro", img: "assets/img/parceiros/foz-imoveis.webp", url: "https://foz-imoveis.com/" },
  { nome: "MDC", tipo: "parceiro", img: "assets/img/parceiros/mdc.webp", url: "https://www.mdcexports.co.uk/" },
  { nome: "Royal Canin", tipo: "parceiro", img: "assets/img/parceiros/royal-canin.webp", url: "https://www.royalcanin.pt/" },
  // TODO: confirmar página atual do Super Puré (o site antigo linkava um endereço de Facebook já desativado)
  { nome: "Super Puré", tipo: "parceiro", img: "assets/img/parceiros/super-pure.webp", url: "https://www.facebook.com/profile.php?id=100068760998539&ref=br_rs#" }, // Remover este?
  { nome: "SNIP International", tipo: "parceiro", img: "assets/img/parceiros/snip-international.webp", url: "https://www.snip-international.org/" },

  // Associações amigas
  { nome: "Pêlos Sem Dono", tipo: "amigo", img: "assets/img/amigos/pelos-sem-dono.jpg", url: "https://www.facebook.com/pelos.semdono/" },
  { nome: "Abrigo Gatos & Afetos", tipo: "amigo", img: "assets/img/amigos/abrigo-gatos-e-afetos.webp", url: "https://www.facebook.com/abrigogatoseafectos/" },
  { nome: "Cantinho do Tareco", tipo: "amigo", img: "assets/img/amigos/cantinho-do-tareco.webp", url: "https://www.cantinhodotareco.org/" },
  { nome: "MIDAS — Movimento Internacional para a Defesa dos Animais", tipo: "amigo", img: "assets/img/amigos/midas.webp", url: "https://www.associacaomidas.org/" },
  { nome: "Anonimais", tipo: "amigo", img: "assets/img/amigos/anonimais.webp", url: "https://anonimais.org/" },
  { nome: "Colónias de Rio Tinto", tipo: "amigo", img: "assets/img/amigos/colonia-de-rio-tinto.webp", url: "https://colonia-riotinto.blogspot.com/" },
];
