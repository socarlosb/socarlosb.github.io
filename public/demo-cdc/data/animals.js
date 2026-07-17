// Dados dos animais — editar este ficheiro para adicionar/atualizar animais.
// (usamos um .js em vez de .json para o site funcionar mesmo aberto diretamente
// do disco, sem servidor)
//
// Campos:
//   id           identificador único (não repetir; usado no link da ficha: animais.html?animal=id)
//   nome         nome do animal
//   especie      "gato" | "cao"
//   sexo         "macho" | "femea" | null (para grupos/ninhadas com sexos mistos)
//   nascimento   "AAAA-MM" (aproximado serve)
//   porte        "pequeno" | "medio" | "grande"
//   estado       "disponivel" | "reservado" | "adotado"
//   apadrinhamento  "procura" | "apadrinhado" | null
//   descricao    resumo curto para o cartão da listagem (2 a 3 frases)
//   historia     texto longo para a ficha do animal — separar parágrafos com uma
//                linha em branco (\n\n). Se ficar vazio, a ficha mostra a descricao.
//   fotos        lista de fotos (ex.: ["assets/img/gatos/joao-1.jpg", "assets/img/gatos/joao-2.jpg"]);
//                a primeira é a do cartão. Lista vazia = sem foto (mostra 🐱/🐶)

const ANIMALS = [
  {
    id: "ninhada-dos-panterinhas",
    nome: "Ninhada dos Panterinhas",
    especie: "gato",
    sexo: null,
    nascimento: "2026-05",
    porte: "pequeno",
    estado: "disponivel",
    apadrinhamento: null,
    descricao:
      "Seis gatinhos resgatados de uma casa abandonada em S. Pedro da Cova — doces e brincalhões, à procura de lares com paciência e amor.",
    historia:
      "São seis gatinhos com cerca de um mês e meio e estão à procura de um lar cheio de amor, paciência e responsabilidade.\n\nForam resgatados de uma colónia em S. Pedro da Cova / Gondomar, onde nasceram numa casa abandonada. O resgate foi particularmente desafiante, exigindo muitas horas de trabalho ao longo de vários dias para que todos pudessem ficar em segurança.\n\nComo resultado das suas primeiras experiências de vida, são ainda receosos no primeiro contacto com pessoas. No entanto, estão atualmente em processo de socialização e, com tempo, carinho e respeito pelo seu ritmo, começam a confiar e a revelar a sua personalidade doce e brincalhona.",
    fotos: [
      "assets/img/gatos/panteirinhas-1.png",
      "assets/img/gatos/panteirinhas-2.png",
      "assets/img/gatos/panteirinhas-3.png",
    ],
  },
  {
    id: "ninhada-dos-reloginhos",
    nome: "Ninhada dos Relóginhos",
    especie: "gato",
    sexo: null,
    nascimento: "2026-06",
    porte: "pequeno",
    estado: "disponivel",
    apadrinhamento: null,
    descricao:
      "Cinco bebés nascidos numa colónia da Rua da Sra. Hora — daí os nomes de relógio: Patek Philippe, Audemars Piguet, TAG Heuer, Swatch e Tissot.",
    historia:
      "Estes cinco pequenos felinos chegaram ao mundo de forma inesperada: a mãe integrava uma colónia acompanhada pelo programa CED (Captura, Esterilização e Devolução), mas, contrariamente aos planos iniciais, decidiu dar à luz esta ninhada.\n\nComo a colónia provinha da Rua da Sra. Hora, os bebés receberam nomes inspirados em marcas famosas de relógios, homenageando o local de origem e a história materna: os machos Patek Philippe, Audemars Piguet e TAG Heuer, e as fêmeas Swatch e Tissot.\n\nHoje, estes relógios de quatro patas marcam o tempo de uma forma muito especial: com ronrons, brincadeiras, descobertas e muito amor.",
    fotos: [
      "assets/img/gatos/reloginhos-1.png",
      "assets/img/gatos/reloginhos-2.png",
      "assets/img/gatos/reloginhos-3.png",
    ],
  },
  {
    id: "joao",
    nome: "João",
    especie: "gato",
    sexo: "macho",
    nascimento: "2022-04",
    porte: "medio",
    estado: "disponivel",
    apadrinhamento: null,
    descricao:
      "O João é um conversador nato: recebe-nos sempre com um miau e adora companhia.",
    historia:
      "O João apareceu numa das colónias que apoiamos, ainda jovem, magro e desconfiado. Bastaram duas semanas de comida quente e paciência para percebermos que aquele gato tinha muito para dizer — literalmente: o João responde quando lhe falam.\n\nHoje está recuperado, esterilizado e vacinado. É um gato de pessoas: segue-nos pela casa, dorme aos pés da cama e recebe as visitas à porta. Depois de uma vida difícil na rua, procura um sofá (e uma conversa) só dele.",
    fotos: ["assets/img/gatos/joao-1.png"],
  },
  {
    id: "easy",
    nome: "Easy",
    especie: "gato",
    sexo: "femea",
    nascimento: "2021-09",
    porte: "medio",
    estado: "disponivel",
    apadrinhamento: "procura",
    descricao:
      "Fiel ao nome, a Easy é das gatas mais fáceis de conquistar: basta um cobertor quente.",
    historia:
      "A Easy foi resgatada com os seus bebés, que entretanto já foram todos adotados — agora é a vez dela.\n\nÉ tímida no primeiro dia, observadora no segundo e rainha da casa ao terceiro. Dá-se bem com outros gatos e o seu sítio favorito do mundo é um cobertor lavado. Enquanto espera por família, a Easy também procura padrinho para ajudar nas suas despesas.",
    fotos: ["assets/img/gatos/easy-1.png"],
  },
  {
    id: "odair",
    nome: "Odair",
    especie: "gato",
    sexo: "macho",
    nascimento: "2023-02",
    porte: "pequeno",
    estado: "reservado",
    apadrinhamento: null,
    descricao:
      "O Odair é pura energia: persegue bolinhas, sombras e o próprio rabo.",
    historia:
      "O Odair nasceu numa ninhada resgatada de um quintal em Matosinhos. É o mais brincalhão dos irmãos: persegue bolinhas, sombras e, quando tudo o resto falha, o próprio rabo.\n\nEstá reservado — mas há mais patudos à espera!",
    fotos: [
      "assets/img/gatos/odair-1.webp",
      "assets/img/gatos/odair-2.webp",
      "assets/img/gatos/odair-3.webp",
    ],
  },
  {
    id: "leila",
    nome: "Leila",
    especie: "gato",
    sexo: "femea",
    nascimento: "2023-06",
    porte: "pequeno",
    estado: "disponivel",
    apadrinhamento: null,
    descricao:
      "Encontrada numa caixa de cartão com as filhas Laila e Lila. As pequenas já foram adotadas — agora é a vez da mãe.",
    historia:
      "A Leila foi encontrada com as suas crias de um mês — a Laila e a Lila — dentro de uma caixa de cartão, numa zona super movimentada da cidade do Porto.\n\nApesar do início difícil, a Leila cuidou das pequeninas de forma exemplar e viu-as crescer saudáveis até ambas serem adotadas. Agora é a vez da mãe: está testada (negativa para FIV/FeLV), esterilizada e pronta para encontrar o seu próprio final feliz.",
    fotos: ["assets/img/gatos/leila-1.jpeg"],
  },
];
