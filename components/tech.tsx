import { TechStackItem } from "@/types/tech-stack";
import { CircleIcon, SquareIcon, TriangleIcon } from "lucide-react";

export const CodingLanguages: Record<string, TechStackItem> = {
  python: {name: "Python", icon: <CircleIcon className="mr-1 h-3 w-3 text-emerald-600" />},
  solidity: {name: "Solidity", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-300" />},
  typescript: {name: "TypeScript", icon: <CircleIcon className="mr-1 h-3 w-3 text-sky-400" />},
  javascript: {name: "JavaScript", icon: <CircleIcon className="mr-1 h-3 w-3 text-yellow-400" />},
  lua: {name: "Lua", icon: <CircleIcon className="mr-1 h-3 w-3 text-blue-500" />},
  golang: {name: "Go (Golang)", icon: <CircleIcon className="mr-1 h-3 w-3 text-teal-500" />},
  cpp: {name: "C/C++", icon: <CircleIcon className="mr-1 h-3 w-3 text-stone-500" />},
  tailwind: {name: "TailwindCSS", icon: <CircleIcon className="mr-1 h-3 w-3 text-violet-500" />},
  html: {name: "HTML5", icon: <CircleIcon className="mr-1 h-3 w-3 text-gray-500" />},
  prisma: {name: "Prisma ORM", icon: <CircleIcon className="mr-1 h-3 w-3 text-red-600" />},
  yaml: {name: "YAML", icon: <CircleIcon className="mr-1 h-3 w-3 text-gray-500" />},
  graphql: {name: "GraphQL", icon: <CircleIcon className="mr-1 h-3 w-3 text-gray-500" />},
}

export const DevTechnologies: Record<string, TechStackItem> = {
  aws: {name: "AWS (EC2, RDS, S3)", icon: <SquareIcon className="mr-1 h-3 w-3 text-amber-600" />},
  gcp: {name: "GCP (Cloud Run, App Engine)", icon: <SquareIcon className="mr-1 h-3 w-3 text-sky-400" />},
  flask: {name: "Flask", icon: <SquareIcon className="mr-1 h-3 w-3 text-indigo-300" />},
  ethereum: {name: "Ethereum", icon: <SquareIcon className="mr-1 h-3 w-3 text-slate-300" />},
  mongodb: {name: "MongoDB", icon: <SquareIcon className="mr-1 h-3 w-3 text-blue-500" />},
  postgresql: {name: "PostgreSQL", icon: <SquareIcon className="mr-1 h-3 w-3 text-orange-600" />},
  nginx: {name: "Nginx", icon: <SquareIcon className="mr-1 h-3 w-3 text-emerald-700" />},
  nodejs: {name: "NodeJS", icon: <SquareIcon className="mr-1 h-3 w-3 text-slate-400" />},
  expressjs: {name: "ExpressJS", icon: <SquareIcon className="mr-1 h-3 w-3 text-rose-400" />},
  nextjs: {name: "NextJS", icon: <SquareIcon className="mr-1 h-3 w-3 text-lime-400" />},
  rest: {name: "RESTful APIs", icon: <SquareIcon className="mr-1 h-3 w-3 text-indigo-400" />},
  vercel: {name: "Vercel", icon: <SquareIcon className="mr-1 h-3 w-3 text-slate-500" />},
  react: {name: "ReactJS", icon: <SquareIcon className="mr-1 h-3 w-3 text-pink-600" />},
  github: {name: "GitHub Actions", icon: <SquareIcon className="mr-1 h-3 w-3 text-sky-400" />},
  roblox: {name: "Roblox Studio", icon: <SquareIcon className="mr-1 h-3 w-3 text-red-600" />},
  hardhat: {name: "Hardhat", icon: <SquareIcon className="mr-1 h-3 w-3 text-orange-400" />},
  ethers: {name: "Ethers", icon: <SquareIcon className="mr-1 h-3 w-3 text-green-600" />},
  web3auth: {name: "Web3Auth", icon: <SquareIcon className="mr-1 h-3 w-3 text-teal-600" />},
  accountabstraction: {name: "Account Abstraction", icon: <SquareIcon className="mr-1 h-3 w-3 text-red-600" />},
  openai: {name: "OpenAI", icon: <SquareIcon className="mr-1 h-3 w-3 text-slate-300" />},
  materialui: {name: "MaterialUI", icon: <SquareIcon className="mr-1 h-3 w-3 text-slate-300" />},
  shadcn: {name: "ShadCN", icon: <SquareIcon className="mr-1 h-3 w-3 text-slate-300" />},
  auth0: {name: "Auth0", icon: <SquareIcon className="mr-1 h-3 w-3 text-lime-400" />},
  openzeppelin: {name: "OpenZeppelin", icon: <SquareIcon className="mr-1 h-3 w-3 text-slate-300" />},
  alchemy: {name: "Alchemy", icon: <SquareIcon className="mr-1 h-3 w-3 text-blue-500" />},
  qiskit: {name: "IBM QISKit", icon: <SquareIcon className="mr-1 h-3 w-3 text-amber-600" />},
  swagger: {name: "NextJS", icon: <SquareIcon className="mr-1 h-3 w-3 text-emerald-400" />},
}

export const FieldTopics: Record<string, TechStackItem> = {
  blockchain: {name: "Blockchain", icon: <TriangleIcon className="mr-1 h-3 w-3 text-amber-600" />},
  gamedev: {name: "Game Development", icon: <TriangleIcon className="mr-1 h-3 w-3 text-blue-600" />},
  quantum: {name: "Quantum Computing", icon: <TriangleIcon className="mr-1 h-3 w-3 text-purple-600" />},
  // AI: {name: "A.I.", icon: <TriangleIcon className="mr-1 h-3 w-3 text-green-600" />},
  webdev: {name: "Web Development", icon: <TriangleIcon className="mr-1 h-3 w-3 text-rose-400" />},
  cloud: {name: "Cloud Computing", icon: <TriangleIcon className="mr-1 h-3 w-3 text-rose-100" />},
  // security: {name: "Security", icon: <TriangleIcon className="mr-1 h-3 w-3 text-gray-200" />},
  nfts: {name: "NFTs", icon: <TriangleIcon className="mr-1 h-3 w-3 text-teal-600" />},
}
