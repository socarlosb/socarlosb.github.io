# Site Causas de Caudas — MVP

Site estático: HTML + CSS + JavaScript, sem frameworks nem build. Basta abrir `index.html` no browser (ou servir a pasta com qualquer servidor estático).

## Páginas

- `index.html` — Início (hero, números, destaques de animais, histórias)
- `animais.html` — listagem com filtros (espécie, incluir adotados); com `?animal=id` mostra a **ficha individual** do animal (galeria de fotos + história completa), com link partilhável nas redes sociais (ex.: `animais.html?animal=joao`)
- `ajudar.html` — donativos, apadrinhamento, sócios, voluntariado, FAT, bens, loja/ilustrações
- `sobre.html` — quem somos, método CED, como funcionamos, parceiros
- `faq.html` — dúvidas frequentes (conteúdo educativo); com `?faq=id` mostra a página de uma dúvida, com link partilhável (ex.: `faq.html?faq=microchip`)
- `contactos.html` — todos os contactos num só sítio + formulário

## Como atualizar os animais

Editar **`data/animals.js`** — é o único ficheiro que precisa de manutenção regular. As instruções e os campos estão comentados no topo do ficheiro. Cada animal tem uma `descricao` curta (para o cartão da listagem) e uma `historia` longa (para a ficha individual, parágrafos separados por linha em branco). Fotos: colocar em `assets/img/gatos/` e listar os caminhos no campo `fotos` — a primeira aparece no cartão, todas entram na galeria da ficha.

## Como atualizar as histórias de "Finais felizes"

Editar **`data/stories.js`** — cada história tem o nome do animal, um texto curto e uma foto opcional. Aparecem na homepage antes do cartão-convite "A sua história aqui?".

## Como atualizar as dúvidas frequentes

Editar **`data/faqs.js`** — cada dúvida tem título, resumo (para o cartão), corpo (parágrafos separados por linha em branco; blocos "# " viram subtítulos; linhas "- " viram listas) e imagens em `assets/img/faq/`. Os textos originais do site antigo estão arquivados em `../conteudo-antigo/faq/`.

## Como atualizar parceiros e associações amigas

Editar **`data/partners.js`** — cada entrada tem nome, tipo (`parceiro` ou `amigo`), logótipo e link. Os logótipos vivem em `assets/img/parceiros/` e `assets/img/amigos/` com o nome da entidade no ficheiro (bom para SEO). Entradas com `url: null` aparecem sem link. As grelhas na página Sobre nós preenchem-se automaticamente.

## Como atualizar os números de impacto

Editar **`data/stats.js`** — os números (adoções, esterilizações, …) estão definidos uma única vez aí e aparecem automaticamente em todas as páginas que os usam (elementos com `data-stat="chave"`). O valor escrito no HTML serve apenas de reserva para visitantes sem JavaScript — ao alterar um número no `stats.js`, é boa prática atualizar também o valor de reserva no HTML, mas não é obrigatório.

## Formulários — sugestão: Google Forms

Os formulários atuais do site (contacto, sócios, voluntariado) usam `mailto:` — servem para mensagens curtas, mas os questionários completos da associação (adoção com ~30 perguntas, voluntários, FAT — ver `../FORMS.md`) não cabem nesse esquema: o `mailto:` tem limites de tamanho e não suporta anexos nem consentimento RGPD.

**Sugestão: criar os 3 questionários no Google Forms e linkar a partir do site** (botão que abre em novo separador, sem iframe).

Argumentos:

- Grátis e sem limite de submissões (alternativas como Formspree dão 50/mês no plano grátis e cobram pelos uploads de ficheiros).
- Suporta os anexos de documentos que os formulários de adoção e FAT já pedem.
- As respostas caem numa folha de cálculo partilhada pelos voluntários — muito melhor para triagem do que emails avulsos.
- Qualquer voluntário edita perguntas sem tocar no código do site.
- Lógica condicional nativa (ex.: "está vedado?" só aparece a quem tem jardim).
- Consentimento e acesso restrito às respostas resolvidos pela plataforma.

Custo: a página do formulário não tem o design do site (por isso linkar, não embeber).

Próximos passos:

1. Criar os 3 formulários no Google Forms da conta da associação, copiando os campos de `../FORMS.md` (ativar "upload de ficheiros" onde aplicável e limitar o acesso às respostas).
2. Ponderar o funil em duas fases na adoção: formulário curto no site ("Quero adotar o João": contacto, habitação, outros animais) e o questionário completo enviado só aos candidatos sérios — reduz desistências sem perder rigor na triagem.
3. Substituir/complementar os botões atuais em `animais.html` e `ajudar.html` com links para os formulários.
4. Criar `privacidade.html` — os formulários referem uma Política de Privacidade que o novo site ainda não tem (necessário para RGPD).

## Notas técnicas

- Usamos `data/animals.js` (e não `.json`) para o site funcionar aberto diretamente do disco, sem servidor.
- Formulários: MVP usa `mailto:` (abre o programa de email do visitante). Se preferirmos receção direta, migrar para Formspree/Netlify Forms.
- `TODO` nos HTML marca conteúdo à espera de dados reais (números de impacto, histórias, logótipos, stock da loja).
