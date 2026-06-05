export const THEME = {
  accent: "var(--accent)",
  accentHover: "var(--accent-hover)",
  accentBg: "var(--accent-bg)",
  bg: "var(--bg)",
  surface: "var(--surface)",
  text: "var(--text)",
  muted: "var(--muted)",
  subtle: "var(--subtle)",
  border: "var(--border)",
  tag: "var(--tag-bg)",
};

export const PROJECTS = [
  {
    name: "NOUR",
    tagline: "The prediction market for everyone",
    desc: "Consumer trading interface on Polymarket for everyday users. Groq-powered AI briefs, embedded wallets via Magic Labs, and zero prior knowledge required.",
    tech: ["React", "Polymarket", "Groq", "Polygon", "Magic Labs", "PostgreSQL", "Redis", "FastAPI"],
    github: "https://github.com/mateojkk/nour",
    status: "Private",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "Web3",
  },
  {
    name: "MIKUU",
    tagline: "Browser-based gasless P2P payments",
    desc: "Peer-to-peer USDC.e payment app on the Tempo blockchain. AES-256-GCM encrypted wallets, terminal command interface, no extensions needed.",
    tech: ["Vite", "React", "FastAPI", "MongoDB", "Tempo"],
    live: "https://mikuu.vercel.app",
    github: "https://github.com/mateojkk/mikuu",
    status: "Live Beta",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "Web3",
  },
  {
    name: "Rune",
    tagline: "Decentralized form builder on Walrus",
    desc: "A decentralized form builder and feedback collection platform built on the Walrus protocol, enabling trustless data storage and privacy.",
    tech: ["TypeScript", "React", "Walrus Protocol", "Web3"],
    live: "https://runeso.vercel.app",
    github: "https://github.com/mateojkk/Rune",
    status: "Public",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "Web3",
  },
  {
    name: "Trainyard-AI",
    tagline: "Decentralized AI dataset marketplace",
    desc: "A decentralized marketplace where developers and AI researchers can buy, sell, and verify AI training datasets securely.",
    tech: ["JavaScript", "React", "AI", "Marketplace"],
    live: "https://trainyard-ai.vercel.app",
    github: "https://github.com/mateojkk/Trainyard-AI",
    status: "Public",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "AI",
  },
  {
    name: "claymore",
    tagline: "Onchain NFT gallery",
    desc: "An elegant, interactive onchain NFT gallery designed to exhibit digital assets directly fetched from the blockchain.",
    tech: ["TypeScript", "React", "Ethers", "NFTs", "Web3"],
    github: "https://github.com/mateojkk/claymore",
    status: "Public",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "Web3",
  },
  {
    name: "tensor-scan",
    tagline: "Bittensor transaction viewer",
    desc: "A comprehensive blockchain explorer and transaction viewer specifically designed for the Bittensor network.",
    tech: ["TypeScript", "React", "Bittensor", "Substrate"],
    github: "https://github.com/mateojkk/tensor-scan",
    status: "Public",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "Tools",
  },
  {
    name: "LIMI",
    tagline: "Real-time Limitless Exchange bot",
    desc: "A fast, real-time Rust-based notification bot that monitors limitless.exchange and announces new prediction markets instantly.",
    tech: ["Rust", "WebSockets", "limitless.exchange", "Bots"],
    github: "https://github.com/mateojkk/LIMI",
    status: "Public",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "Tools",
  },
  {
    name: "speedy",
    tagline: "Polymarket trading bot",
    desc: "An automated Polymarket trading bot optimized for high-frequency prediction market operations.",
    tech: ["Python", "Polymarket API", "Trading Bot"],
    github: "https://github.com/mateojkk/speedy",
    status: "Public",
    statusBg: THEME.accentBg,
    statusColor: THEME.accent,
    category: "Tools",
  },
];

export const STACK = [
  {
    cat: "Content",
    items:
      "Ghostwriting, technical writing, paid partnerships, and personal content",
  },
  {
    cat: "Languages",
    items:
      "JavaScript, TypeScript, Python, Rust, HTML, CSS",
  },
  {
    cat: "Frontend",
    items:
      "React, Vite, Tailwind CSS, modern UI/UX design, micro-interactions",
  },
  {
    cat: "Backend",
    items:
      "FastAPI, REST APIs, WebSockets, security auditing, CLIs, automation bots",
  },
  {
    cat: "Web3",
    items:
      "Walrus Protocol, Bittensor, Ethereum ecosystem, EVM-compatible chains, Solana, smart contract integration",
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
    cat: "Infra",
    items:
      "Vercel, Netlify, Docker, GitHub Actions, CI/CD, Linux, Cloudflare",
  },
];

export const CONTACT_LINKS = [
  { label: "X / Twitter ↗", href: "https://twitter.com/mateojk_" },
  { label: "GitHub ↗", href: "https://github.com/mateojkk" },
  { label: "Email ↗", href: "mailto:thesaintszn@gmail.com" },
];
