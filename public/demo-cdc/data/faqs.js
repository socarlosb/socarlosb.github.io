// Dúvidas frequentes (conteúdo educativo) — editar este ficheiro para adicionar/atualizar.
// Textos resgatados do site antigo (WordPress) em 2026-07, revistos para o acordo ortográfico.
// Os originais estão arquivados em ../conteudo-antigo/faq/ (fora da pasta site/).
//
// Campos:
//   id       identificador único (usado no link partilhável: faq.html?faq=id)
//   titulo   título da dúvida
//   resumo   resumo curto para o cartão da listagem (1 a 2 frases)
//   corpo    texto longo — separar parágrafos com uma linha em branco (\n\n);
//            um bloco que comece por "# " vira subtítulo;
//            um bloco em que todas as linhas comecem por "- " vira lista
//   fotos    lista de imagens (a primeira é a capa do cartão; todas aparecem na página da dúvida)

const FAQS = [
  {
    id: "alergia-ao-gato",
    titulo: "Será que tenho alergia ao gato?",
    resumo:
      "A alergia não é bem aos pêlos: a causa mais comum é uma proteína da saliva. Saiba reconhecer os sintomas.",
    corpo:
      "Numa altura em que as alergias são cada vez mais frequentes e em que podem surgir dúvidas ao adotar um tareco, preparámos esta explicação sobre a alergia ao gato.\n\nMuitas pessoas pensam que a alergia ao gato é causada pelos pêlos em si… mas isso não é bem verdade!\n\nA causa mais comum de alergia é uma proteína presente na saliva do tareco. Quando o gato se lambe, a proteína vai parar ao pêlo e depois espalha-se pelo ambiente na forma de pequenas partículas, inclusive no ar que respiramos. É por isso que, mesmo em casas limpas e bem cuidadas, a exposição continua a acontecer.\n\nAlém disso, em pessoas com alergia aos ácaros do pó da casa, o contacto com tarecos também pode desencadear sintomas alérgicos. Porquê? Porque os gatos que vivem dentro de casa acumulam muitos ácaros do pó no pelinho — uns verdadeiros tapetes com patas.\n\nOs sintomas de alergia ao gato ou aos ácaros são os mesmos de qualquer outra alergia respiratória:\n\n- Espirros\n- Comichão nos olhos e no nariz\n- Nariz entupido ou com pingo\n- Tosse\n\nNa dúvida, procure aconselhamento médico antes de desistir de adotar.",
    fotos: [
      "assets/img/faq/alergia-ao-gato-1.png",
      "assets/img/faq/alergia-ao-gato-2.png",
      "assets/img/faq/alergia-ao-gato-3.png",
    ],
  },
  {
    id: "idade-do-gato",
    titulo: "Quantos anos tem o seu gato?",
    resumo:
      "Como se converte a idade de um gato em \"anos humanos\"? Veja a correspondência por fases da vida.",
    corpo:
      "A idade dos gatos não se converte em \"anos humanos\" multiplicando por 7 — a equivalência muda ao longo da vida: só o primeiro ano de um gato corresponde a cerca de 15 anos humanos.\n\nVeja nas imagens a correspondência por fases da vida do seu tareco.",
    fotos: [
      "assets/img/faq/idade-do-gato-capa.jpg",
      "assets/img/faq/idade-do-gato-1.png",
      "assets/img/faq/idade-do-gato-2.png",
      "assets/img/faq/idade-do-gato-3.png",
      "assets/img/faq/idade-do-gato-4.png",
    ],
  },
  {
    id: "cao-e-gato",
    titulo: "Cão e gato: um par perfeito?!",
    resumo:
      "A Fiona (chow-chow) e a gatinha Joy provam que, com uma boa adaptação, cães e gatos podem dar-se lindamente.",
    corpo:
      "Sabia que cães e gatos podem dar-se bem?\n\nEsta história passa-se em Santa Maria da Feira, mas podia ser em sua casa. A cadela é a Fiona, de raça chow-chow, adotada há algum tempo. Mais recentemente, a Joy — uma gatinha bebé — apareceu na rua, e a adotante não conseguiu ficar-lhe indiferente.\n\nContra todas as probabilidades (bem sabemos que a raça chow-chow pode ser ciumenta), as duas dão-se lindamente. E esta adotante, que sempre foi uma \"pessoa de cães\", passou a conhecer a maravilha de ter também um tareco.\n\nA adoção conjunta de cães e gatos pode funcionar: a fase de adaptação é fundamental para uma amizade duradoura.",
    fotos: ["assets/img/faq/cao-e-gato.jpg"],
  },
  {
    id: "crescimento-dos-gatinhos",
    titulo: "Como crescem os gatinhos?",
    resumo:
      "Dos olhos fechados ao desmame: as fases das primeiras 9 semanas de vida de um gatinho.",
    corpo:
      "Sabia que, quando os gatinhos nascem, os olhos estão fechados e as orelhas dobradas? Não se conseguem levantar e dependem da mãe para tudo.\n\nÀs 3 semanas começam a brincar, já é possível ver com mais facilidade se são machos ou fêmeas e podemos introduzir a comida húmida e a caixa de areia.\n\nÀs 5 semanas só pensam em brincar, têm muita energia, e a interação com pessoas é fundamental nesta fase.\n\nÀs 9 semanas já estão bem crescidos: comem comida sólida, os olhos mudam de cor, usam linguagem corporal como um gato adulto e estão em idade de seguir para adoção.\n\nAdote, não compre!",
    fotos: ["assets/img/faq/crescimento-gatinhos.jpg"],
  },
  {
    id: "microchip",
    titulo: "Porque devo colocar o microchip?",
    resumo:
      "O microchip é do tamanho de um grão de arroz e pode ser a diferença entre perder e recuperar o seu animal.",
    corpo:
      "Todos os anos, milhares de animais desaparecem das suas casas. Ao mínimo descuido — uma porta, um portão ou uma janela entreaberta — o seu animal pode desaparecer. Em inúmeras situações, a identificação eletrónica tem permitido que os tutores os encontrem.\n\n# O que é o microchip?\n\nÉ uma pequena cápsula eletrónica do tamanho de um grão de arroz, com um código único e permanente de 15 dígitos, num formato usado em todo o mundo. É colocado na face lateral esquerda do pescoço, apenas por médicos veterinários, e é lido com um aparelho próprio. Os dados do tutor e do animal ficam associados a esse número no SIAC — Sistema de Informação de Animais de Companhia.\n\n# É obrigatório?\n\nSim: em Portugal, a identificação eletrónica e o registo no SIAC são obrigatórios para cães, gatos e furões.\n\n# Quais as vantagens?\n\n- Permite recuperar o animal muito mais depressa em caso de perda\n- É um comprovativo de titularidade em caso de roubo\n- Ajuda a combater o abandono\n\n# O meu animal perdeu-se. E agora?\n\nContacte os hospitais e clínicas veterinárias da zona com a descrição do animal e o número do microchip, e comunique o desaparecimento ao SIAC. Para qualquer esclarecimento, fale com o seu médico veterinário.",
    fotos: ["assets/img/faq/microchip.jpg", "assets/img/faq/microchip-cao.jpg"],
  },
  {
    id: "esterilizacao",
    titulo: "As consequências da falta de esterilização",
    resumo:
      "Um casal de gatos não esterilizado pode originar milhares de descendentes em poucos anos. Veja os números.",
    corpo:
      "Analise a imagem, compreenda o que pode acontecer e perceba a importância da intervenção nas colónias de gatos de rua.\n\nÉ por isto que o método CED (Capturar, Esterilizar, Devolver) é o centro do nosso trabalho — e é também por isto que precisamos de ajuda: muitos animais ficam por esterilizar por falta de fundos.",
    fotos: [
      "assets/img/faq/esterilizacao-capa.jpg",
      "assets/img/faq/estatistica-reproducao-felina.jpg",
    ],
  },
  {
    id: "animais-e-o-frio",
    titulo: "Como proteger os animais no frio",
    resumo:
      "Abrigo, mantas, alimentação reforçada e cuidados com lareiras: o essencial para o inverno.",
    corpo:
      "# Recolher os animais no interior\n\nTodos os animais devem ser protegidos, mas os que não vivem dentro de casa requerem atenção especial. Nestes casos, deve tentar recolhê-los ou fornecer-lhes abrigo ou casotas adequadas.\n\n# Um ninho com mais conforto\n\nO porte, a raça e a idade devem ser tidos em conta. Os animais com 8 ou mais anos, de pequena dimensão, de pelo curto ou com pouca gordura corporal são os que mais sofrem com o frio. Para os proteger, ponha mais uma manta ou um cobertor no ninho, ou vista-lhes roupa, se o animal aceitar.\n\n# Evitar banhos\n\nO banho deve ser evitado durante o inverno por causa do risco de hipotermia. Banhos demasiado frequentes prejudicam o equilíbrio da pele, provocam dermatites e põem em causa a saúde do animal.\n\n# Alimentação reforçada\n\nNo inverno, os animais queimam mais energia para se manterem quentes. Se o seu animal não sofre de obesidade nem de alguma patologia, pode aumentar ligeiramente a ração. A hidratação é igualmente importante — incentive a ingestão de água todo o ano.\n\n# Cuidado com as diferenças de temperatura\n\nSe o animal esteve à lareira ou ao pé do aquecedor, afaste-o da fonte de calor uma hora antes de sair e agasalhe-o, para evitar infeções respiratórias causadas pela mudança abrupta de temperatura. E atenção: os animais não devem estar demasiado perto de aquecedores ou lareiras — podem sofrer queimaduras graves.\n\n# E os que não têm ninguém?\n\nAjude também os animais de rua: coloque caixas de cartão com mantas (servem toalhas ou tapetes velhos), providencie abrigos e ração.",
    fotos: [
      "assets/img/faq/animais-e-o-frio.jpg",
      "assets/img/faq/abrigo-gato.jpg",
      "assets/img/faq/abrigo-cao.jpg",
    ],
  },
  {
    id: "alimentacao-e-calor",
    titulo: "Cuidados com a alimentação e o calor",
    resumo:
      "No calor, a comida estraga-se mais depressa — saiba como adaptar a alimentação do seu animal.",
    corpo:
      "Devido ao calor, é necessário ter mais atenção à alimentação dos seus animais, devendo optar por comida seca.\n\nA comida húmida estraga-se rapidamente com as temperaturas altas — se a usar, retire o que ficar no prato pouco depois da refeição. E garanta sempre água fresca à disposição, em vários pontos da casa.",
    fotos: ["assets/img/faq/alimentacao-e-calor.jpg"],
  },
  {
    id: "kit-sos",
    titulo: "Kit S.O.S. para ajudar animais",
    resumo:
      "Um pequeno kit no carro pode salvar a vida de um animal ferido ou abandonado.",
    corpo:
      "Encontrar um animal abandonado ou ferido é mais frequente do que se pensa — e fotografar e partilhar nas redes sociais nem sempre chega, porque os abrigos e as associações estão constantemente sobrelotados.\n\nA nossa sugestão: leve um pequeno kit S.O.S. no carro. Se conseguir parar o veículo em segurança, poderá entrar em ação. O kit deve incluir:\n\n- Água\n- Vasilhas velhas\n- Biscoitos secos\n- Compressas\n- Soro fisiológico\n- Betadine\n\nUm gesto simples que pode ter um papel fundamental na vida de um animal ferido.",
    fotos: ["assets/img/faq/kit-sos.png"],
  },
  {
    id: "dicas-gato-feliz",
    titulo: "Dicas para um gato saudável e feliz",
    resumo:
      "As situações a evitar para que o seu felino tenha saúde e seja feliz — num cartaz para guardar.",
    corpo:
      "Estas são algumas situações que deve evitar para que o seu felino tenha saúde e seja feliz. Guarde o cartaz e partilhe com outros tutores de tarecos.",
    fotos: [
      "assets/img/faq/dia-do-gato-capa.png",
      "assets/img/faq/dia-do-gato-dicas.png",
    ],
  },
];
