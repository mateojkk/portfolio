export const THEME = {
  accent: "#1B4332",
  accentHover: "#2D6A4F",
  accentBg: "#EEF5F1",
  bg: "#FAFAF9",
  surface: "#FFFFFF",
  text: "#111111",
  muted: "#555555",
  subtle: "#999999",
  border: "#E8E8E3",
  tag: "#F5F5F2",
};

export const PROJECTS = [
  {
    name: "NOUR",
    tagline: "The prediction market for everyone",
    desc: "Consumer trading interface on Polymarket for everyday users. Groq-powered AI briefs, embedded wallets via Magic Labs, and zero prior knowledge required.",
    tech: ["React", "Polymarket", "Groq", "Polygon", "Magic Labs", "PostgreSQL", "Redis", "fastAPI"],
    github: "https://github.com/mateojkk/nour",
    status: "WAITLIST LIVE",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
  },
  {
    name: "MIKUU",
    tagline: "Browser-based P2P payments",
    desc: "Peer-to-peer USDC.e payment app on the Tempo blockchain. AES-256-GCM encrypted wallets, terminal command interface, no extensions needed.",
    tech: ["Vite", "React", "FastAPI", "MongoDB", "Tempo"],
    live: null,
    github: "https://github.com/mateojkk/mikuu",
    status: "Live Beta",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
  },
];

export const STACK = [
  {
    cat: "Frontend",
    items:
      "HTML, CSS, JavaScript, TypeScript, React, Vite, Tailwind CSS",
  },
  {
    cat: "Backend",
    items:
      "FastAPI, Python, REST APIs, WebSockets, Railway, Cloudflare",
  },
  {
    cat: "Database",
    items:
      "PostgreSQL, MongoDB, MySQL, Redis, Supabase",
  },
  {
    cat: "AI / LLM",
    items:
      "OpenAI, Groq, Anthropic, prompt engineering, embeddings, AI product integration",
  },
  {
    cat: "Web3",
    items:
      "Ethereum ecosystem, EVM-compatible chains, Solana ecosystem, wallet integration",
  },
  {
    cat: "Infra",
    items:
      "Vercel, Netlify, Docker, GitHub Actions, CI/CD, Linux",
  },
];

export const CONTACT_LINKS = [
  { label: "X / Twitter ↗", href: "https://twitter.com/mateoinrl" },
  { label: "GitHub ↗", href: "https://github.com/mateojkk" },
  { label: "Email ↗", href: "mailto:thesaintszn@gmail.com" },
];
