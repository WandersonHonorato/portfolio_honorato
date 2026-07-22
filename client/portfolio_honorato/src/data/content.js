export const sections = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Stack técnica', id: 'stack' },
  { label: 'Experiência', id: 'experiencia' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Cursos & Certificações', id: 'cursos' },
]

export const techStack = [
  {
    title: 'Back-End',
    tags: [
      'Java 17+', 'Node.js', 'Spring Boot 3', 'Spring Security', 'Spring Data',
      'Spring WebFlux', 'Express.js', 'Maven', 'REST APIs', 'WebSocket',
      'MVC', 'Microservices', 'Event-Driven',
    ],
  },
  {
    title: 'Front-End',
    tags: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap 4'],
  },
  {
    title: 'Dados',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQS', 'RabbitMQ'],
  },
  {
    title: 'Testes & Qualidade',
    tags: ['JUnit 5', 'Mockito', 'Cypress'],
  },
  {
    title: 'DevOps & Cloud',
    tags: [
      'AWS (EC2, ECS, Lambda)', 'API Gateway', 'S3', 'SNS/SQS', 'RDS',
      'Docker', 'GitHub Actions', 'Datadog', 'Google Analytics',
    ],
  },
  {
    title: 'Ágil & Versionamento',
    tags: ['Git', 'JIRA', 'Trello', 'Scrum', 'Kanban'],
  },
]

export const experience = [
  {
    id: 'exp-1',
    role: 'Freelancer de Desenvolvimento de Sistemas',
    org: 'Novaterra Ambiental',
    period: 'JUL 2025 — ATUAL',
    highlightTags: ['Java', 'Spring Boot 3', 'React', 'TypeScript', 'PostgreSQL'],
    details: [
      'Desenvolvimento de aplicações internas com Java 17/21, Spring Boot 3, Node.js e Express.js, implementando APIs RESTful para sistemas e automação de processos internos.',
      'Desenvolvimento front-end de aplicações responsivas com JavaScript, ReactJS, TypeScript, HTML5, CSS3 e Bootstrap 4, com foco em acessibilidade e compatibilidade.',
      'Adoção de princípios de SOLID e Clean Code na construção de soluções, visando manutenção e escalabilidade.',
      'Participação ativa em rotinas de versionamento de código com Git e GitHub.',
      'Apoio na modelagem e manutenção do banco de dados (SQL e PostgreSQL), garantindo performance e integridade dos dados.',
      'Aplicação de metodologias ágeis (Scrum e Kanban) utilizando Trello.',
      'Suporte de TI aos demais setores da empresa (hardware e software).',
    ],
  },
]

export const projects = [
  {
    title: "Rosa D'Água — Sistema de Gestão para Distribuidora de Água",
    description:
      'Sistema completo em produção para gestão de uma distribuidora de água, cobrindo backend, frontend e infraestrutura. Backend em Node.js com persistência via SQLite (sql.js), expondo APIs REST consumidas pelos módulos do sistema. Inclui notificações sonoras em tempo real entre módulos, dashboard executivo com gráficos interativos de histórico de clientes e um painel de fila de atendimento.',
    modules: ['Operacional', 'Vendas', 'Executivo', 'Painel de Fila', 'Química'],
    tags: [
      'Node.js', 'Express.js', 'React.js', 'Bootstrap 4', 'REST APIs',
      'SQLite (sql.js)', 'JWT', 'Bootstrap',
    ],
  },
]

export const courses = [
  {
    name: 'Desenvolvimento Full Stack (JavaScript, React.JS, Node.JS, Express.JS, Cypress)',
    org: 'Digital College',
    period: 'Fevereiro 2026 — Julho 2026',
  },
  {
    name: 'Microsserviços com Spring e RabbitMQ + AWS',
    org: 'Udemy',
    period: 'Julho 2025 — Março 2026',
  },
  {
    name: 'Java Orientado a Objetos',
    org: 'Udemy — Nélio Alves',
    period: 'Novembro 2024 — Fevereiro 2025',
  },
  {
    name: 'Git e GitHub',
    org: 'Téo Me Why',
    period: 'Novembro 2024 — Dezembro 2024',
  },
]

export const profile = {
  name: 'Wanderson Honorato',
  tagline: 'Construindo com Java, Spring e React. Simples por fora, sólido por dentro.',
  role: 'Junior Software Engineer',
  roleSecondary: 'Fullstack Developer',
  location: 'Fortaleza, Ceará - Brasil',
  email: 'wanderson.honorato1998@gmail.com',
  phone: '+55 85 99260-6938',
  github: 'https://github.com/WandersonHonorato',
  githubHandle: 'WandersonHonorato',
  linkedin: 'https://www.linkedin.com/in/wanderson-honorato/',
  linkedinHandle: 'wanderson-honorato',
}
