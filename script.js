
const DADOS = {
  nome: "Nicolle Neiva",
  foto: "nick.jpeg",                      
  titulo: "Oi, eu sou a Nicolle. Construo ferramentas web que resolvem problemas reais.",
  resumo: "Estudante de Ciência da Computação na FUMEC, apaixonada por transformar ideias em sites e sistemas fáceis de usar.",
  sobre: [
    "Sou estudante de Ciência da Computação na FUMEC. Gosto de projetos que juntam implementação técnica com utilidade no dia a dia, como sites que ajudam alguém a decidir, aprender ou organizar algo.",
    ""
  ],
  formacao: [
    {
      curso: "Bacharelado em Ciência da Computação",
      instituicao: "Universidade FUMEC",
      periodo: "2026 - Concluindo",
      detalhes: "Estudos voltados para o desenvolvimento de software, estruturas de dados, lógica de programação e soluções web."
    },
    {
      curso: "Técnico em Analise e Desenvolvimento de Sistemas",
      instituicao: "E.E. Gov. Milton Campos",
      periodo: "2025 - Concluído",
      detalhes: "Formação técnica em desenvolvimento de software, programação e manutenção de sistemas."
    }
  ],
  contatos: {
    linkedin: "https://www.linkedin.com/in/nicolle-neiva-a36a58368/",
    github: "https://github.com/nickx-byter",
    instagram: "https://www.instagram.com/isn.nicolle",
    whatsapp: "5531991255449",   
    mensagemWhatsapp: "Olá, Nicolle! Vi seu portfólio e gostaria de conversar." //mensagem para conato
  },
  habilidades: [
    { grupo: "Desenvolvimento web", itens: ["HTML", "CSS", "JavaScript","Design responsivo"] },
    { grupo: "Programação", itens: ["Java", "Lógica de programação", "Arquivos binários", "Python"] },
    { grupo: "Ferramentas e trabalho em equipe", itens: ["Git e GitHub", "VS Code", "Figma", "Notion","Trabalho em grupo"] }
  ],
  projetos: [
    {
      titulo: "TrashBucket (Ecolixo)",
      descricao: "Site educativo sobre lixo eletrônico: explica os riscos do descarte incorreto e como descartar da forma certa.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      codigo: "", demo: "", imagem: ""
    },
    {
      titulo: "PPKx",
      descricao: "Site de planejamento de receitas a partir dos ingredientes que você tem em casa e do tempo disponível. Projeto de startup da faculdade.",
      tecnologias: ["Web", "Empreendedorismo"],
      codigo: "", demo: "", imagem: ""
    },
    {
      titulo: "Sistema de estacionamento",
      descricao: "Aplicação em Java para gerenciar um estacionamento, com gravação e leitura dos dados em arquivo binário.",
      tecnologias: ["Java", "Arquivos binários"],
      codigo: "", demo: "", imagem: ""
    }
  ],
  certificados: [
    {
      titulo: "Python: Programação para iniciantes",
      emissor: "Onde consegui: Santander Open Academy",
      data: "04/2026",
      aprendi: "Aprendi os fundamentos da lógica de programação, estruturas de controle e a sintaxe básica da linguagem. Posso aplicar essas habilidades desenvolvendo scripts para automatizar tarefas repetitivas e auxiliando no desenvolvimento inicial de projetos web. Essa base de resolução de problemas é essencial para atuar em qualquer equipe de desenvolvimento.",
      link: "",                 
      imagem: "python.png"  
    
    },
     {
      titulo: "Excel: Intermediário",
      emissor: "Onde consegui: Santander Open Academy",
      data: "04/2026",
      aprendi: "Aprendi a utilizar o Excel para análise de dados, criação de gráficos e automação de tarefas repetitivas. Essa habilidade é valiosa para otimizar processos e tomar decisões baseadas em informações.",
      link: "",                 
      imagem: "excel.png"  
    
    },
    {
      titulo: "Hardware e Arquitetura de Computadores",
      emissor: "Onde consegui: Cisco Networking Academy",
      data: "04/2026",
      aprendi: "Aprendi os fundamentos da arquitetura de computadores, incluindo componentes hardware e estrutura de sistemas. Essa base é essencial para entender como os sistemas funcionam internamente e como otimizar seu desempenho.",
      link: "",                 
      imagem: "hardware.png"  
    
    },
    {
      titulo: "Introdução à Cibersegurança",
      emissor: "Onde consegui: Cisco Networking Academy",
      data: "11/2026",
      aprendi: "Aprendi os fundamentos da cibersegurança, incluindo ameaças e vulnerabilidades digitais. Essa base é essencial para entender como proteger sistemas e dados em ambientes modernos.",
      link: "",                 
      imagem: "ciber.png"  
    
    }
  ]
};

/* Icones contato linkar */
const ICONES = {
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
};

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $ = id => document.getElementById(id);
const link = (url, texto) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(texto)}</a>` : "";

//apresentar os dados na página
document.title = `${DADOS.nome} — Portfólio`;
$("marca").textContent = DADOS.nome;
$("titulo").textContent = DADOS.titulo;
$("resumo").textContent = DADOS.resumo;
$("foto-area").innerHTML = DADOS.foto
  ? `<img class="foto" src="${esc(DADOS.foto)}" alt="Foto de ${esc(DADOS.nome)}">`
  : `<div class="foto inicial" aria-hidden="true">${esc(DADOS.nome.charAt(0))}</div>`;

// Sobre
document.getElementById("sobre-texto").innerHTML = DADOS.sobre.map(p => `<p>${esc(p)}</p>`).join("");
// Formação
document.getElementById("formacao-lista").innerHTML = DADOS.formacao.map(f => `
  <article class="cert">
    <div>
      <h3>${esc(f.curso)}</h3>
      <p class="onde">${esc(f.instituicao)}</p>
      <p class="quando">${esc(f.periodo)}</p>
    </div>
    <div>
      <p class="aprendi">${esc(f.detalhes)}</p>
    </div>
  </article>`).join("");
// Habilidades
document.getElementById("habilidades-lista").innerHTML = DADOS.habilidades.map(g => `
  <div class="grupo">
    <h3>${esc(g.grupo)}</h3>
    <ul class="chips">${g.itens.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
  </div>`).join("");

// Projetos
document.getElementById("projetos-lista").innerHTML = DADOS.projetos.map(p => `
  <article class="projeto">
    ${p.imagem ? `<img src="${esc(p.imagem)}" alt="Imagem do projeto ${esc(p.titulo)}" loading="lazy">` : ""}
    <div class="corpo">
      <h3>${esc(p.titulo)}</h3>
      <p>${esc(p.descricao)}</p>
      <ul class="tags">${p.tecnologias.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      ${(p.codigo || p.demo) ? `<div class="links">${link(p.demo, "Ver online")}${link(p.codigo, "Código")}</div>` : ""}
    </div>
  </article>`).join("");

// Certificados
document.getElementById("certificados-lista").innerHTML = DADOS.certificados.map(c => `
  <article class="cert">
    <div>
      <h3>${esc(c.titulo)}</h3>
      <p class="onde">${esc(c.emissor)}</p>
      <p class="quando">${esc(c.data)}</p>
    </div>
    <div>
      <p class="aprendi"><strong>O que aprendi:</strong> ${esc(c.aprendi)}</p>
      ${c.link ? `<div class="links">${link(c.link, "Verificar credencial")}</div>` : ""}
      ${c.imagem ? `<a class="miniatura" href="${esc(c.imagem)}" target="_blank" rel="noopener noreferrer"><img src="${esc(c.imagem)}" alt="Certificado: ${esc(c.titulo)}" loading="lazy"></a>` : ""}
    </div>
  </article>`).join("");
  

// Contato
const C = DADOS.contatos;
const canais = [
  { id: "linkedin", nome: "LinkedIn", url: C.linkedin, nota: "Conexões e vagas" },
  { id: "github", nome: "GitHub", url: C.github, nota: "Meu código" },
  { id: "instagram", nome: "Instagram", url: C.instagram, nota: "Dia a dia" },
  { id: "whatsapp", nome: "WhatsApp", url: C.whatsapp ? `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(C.mensagemWhatsapp || "")}` : "", nota: "Conversa direta" }
].filter(c => c.url);

$("contatos-lista").innerHTML = canais.map(c => `
  <a class="contato" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[c.id]}</svg>
    <div><strong>${c.nome}</strong><span>${c.nota}</span></div>
  </a>`).join("");

$("rodape").textContent = `© ${new Date().getFullYear()} ${DADOS.nome}. Feito com HTML, CSS e JavaScript.`;


const links = [...document.querySelectorAll(".menu a")];
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(s => observador.observe(s));