import { TechStackItem } from "@/types/tech-stack";
import { CircleIcon } from "lucide-react";

export const CodingLanguages: Record<string, TechStackItem> = {
  solidity: {name: "Solidity", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-300" />},
  typescript: {name: "TypeScript", icon: <CircleIcon className="mr-1 h-3 w-3 text-sky-400" />},
  javascript: {name: "JavaScript", icon: <CircleIcon className="mr-1 h-3 w-3 text-yellow-400" />},
  python: {name: "Python", icon: <CircleIcon className="mr-1 h-3 w-3 text-emerald-600" />},
  lua: {name: "Lua", icon: <CircleIcon className="mr-1 h-3 w-3 text-blue-500" />},
  cpp: {name: "C/C++", icon: <CircleIcon className="mr-1 h-3 w-3 text-stone-500" />},
  tailwind: {name: "TailwindCSS", icon: <CircleIcon className="mr-1 h-3 w-3 text-violet-500" />},
  html: {name: "HTML5", icon: <CircleIcon className="mr-1 h-3 w-3 text-gray-500" />},
  prisma: {name: "Prisma ORM", icon: <CircleIcon className="mr-1 h-3 w-3 text-red-600" />},
  yaml: {name: "YAML", icon: <CircleIcon className="mr-1 h-3 w-3 text-gray-500" />},
  graphql: {name: "GraphQL", icon: <CircleIcon className="mr-1 h-3 w-3 text-gray-500" />},
}

export const DevTechnologies: Record<string, TechStackItem> = {
  aws: {name: "AWS (EC2, RDS, S3)", icon: <CircleIcon className="mr-1 h-3 w-3 text-amber-600" />},
  gcp: {name: "GCP (Cloud Run, App Engine)", icon: <CircleIcon className="mr-1 h-3 w-3 text-sky-400" />},
  ethereum: {name: "Ethereum", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-300" />},
  mongodb: {name: "MongoDB", icon: <CircleIcon className="mr-1 h-3 w-3 text-blue-500" />},
  postgresql: {name: "PostgreSQL", icon: <CircleIcon className="mr-1 h-3 w-3 text-orange-600" />},
  nginx: {name: "Nginx", icon: <CircleIcon className="mr-1 h-3 w-3 text-emerald-700" />},
  nodejs: {name: "NodeJS", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-400" />},
  expressjs: {name: "ExpressJS", icon: <CircleIcon className="mr-1 h-3 w-3 text-rose-400" />},
  nextjs: {name: "NextJS", icon: <CircleIcon className="mr-1 h-3 w-3 text-lime-400" />},
  rest: {name: "RESTful APIs", icon: <CircleIcon className="mr-1 h-3 w-3 text-indigo-400" />},
  vercel: {name: "Vercel", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-500" />},
  react: {name: "ReactJS", icon: <CircleIcon className="mr-1 h-3 w-3 text-pink-600" />},
  github: {name: "GitHub Actions", icon: <CircleIcon className="mr-1 h-3 w-3 text-sky-400" />},
  roblox: {name: "Roblox Studio", icon: <CircleIcon className="mr-1 h-3 w-3 text-red-600" />},
  hardhat: {name: "Hardhat", icon: <CircleIcon className="mr-1 h-3 w-3 text-orange-400" />},
  ethers: {name: "Ethers", icon: <CircleIcon className="mr-1 h-3 w-3 text-green-600" />},
  web3auth: {name: "Web3Auth", icon: <CircleIcon className="mr-1 h-3 w-3 text-teal-600" />},
  accountabstraction: {name: "Account Abstraction", icon: <CircleIcon className="mr-1 h-3 w-3 text-red-600" />},
  openai: {name: "OpenAI", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-300" />},
  materialui: {name: "MaterialUI", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-300" />},
  shadcn: {name: "ShadCN", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-300" />},
  auth0: {name: "Auth0", icon: <CircleIcon className="mr-1 h-3 w-3 text-lime-400" />},
  openzeppelin: {name: "OpenZeppelin", icon: <CircleIcon className="mr-1 h-3 w-3 text-slate-300" />},
  alchemy: {name: "MongoDB", icon: <CircleIcon className="mr-1 h-3 w-3 text-blue-500" />},
  qiskit: {name: "IBM QISKit", icon: <CircleIcon className="mr-1 h-3 w-3 text-amber-600" />},
}
