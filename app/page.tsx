import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MailIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AboutMe } from "@/components/aboute-me"
import ContactButton from "@/components/contact-button"
import { GitHubCard } from "@/components/github-card"
import { CircleIcon } from "@radix-ui/react-icons"
import { CodingLanguages, DevTechnologies } from "@/components/tech"

export default function IndexPage() {
  return (
    <section className="container flex-col flex space-y-4 w-full gap-5 py-10">

      <div className="items-center justify-center flex flex-auto gap-5">
        <div className="order-2 sm:order-1 transition-all ">
            {/* <img src="/matthew.png" alt="Matthew" className="flex-2 rounded-full"/> */}
          <div className="flex-2 group h-[140px] w-[140px] md:h-[200px] md:w-[200px] sm:h-[150px] sm:w-[150px] [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img className="h-full w-full rounded-full object-cover shadow-xl shadow-black/40" src="/matthew-2.png" alt="" />
              </div>
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <img className="h-full w-full rounded-full object-cover shadow-xl shadow-black/40" src="/base-westie.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-left grid items-center gap-y-5 order-1 sm:order-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Matthew Younatan
          </h1>
          <h3 className="text-lg font-bold leading-tight tracking-tighter md:text-2xl">
            Software&nbsp;Engineer
            <p className="max-w-[700px] font-normal leading-normal tracking-normal text-lg text-muted-foreground">
              Toronto, ON
            </p>
          </h3>
        </div>
      </div>

      <ContactButton />

      <div className="md:px-[15%] lg:px-[10%] xl:px-[5%] space-y-10">
        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">
            About
          </h2>
        <AboutMe />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-5 text-center">
            Projects
          </h2>
          <div className="w-full grid col-span-4 grid-cols-3 gap-4">
            <GitHubCard
              name="CampaignX"
              description="Decentralized, AI-enabled social media marketing campaign tool. Live on Base L2 testnet."
              demoLink="https://campaign-x-git-backdropbuild-campaign-x.vercel.app/"
              demoText="Live Demo"
              image="/campaignx.png" techStack={[ CodingLanguages.solidity, CodingLanguages.typescript, DevTechnologies.hardhat, DevTechnologies.ethereum, DevTechnologies.openzeppelin, DevTechnologies.alchemy, DevTechnologies.web3auth,DevTechnologies.auth0, DevTechnologies.accountabstraction,DevTechnologies.openai,DevTechnologies.nextjs,DevTechnologies.react,DevTechnologies.materialui,DevTechnologies.aws,DevTechnologies.vercel ]}
            />
            <GitHubCard
              name="TwitterCampaign - EthGlobal Paris 2023 Finalist"
              description="Top 13 winning hackathon project out of 321 total submissions. An AI-enabled, decentralized tool where anyone can create, and participate in on-chain Twitter marketing campaigns."
              repoName="twitter-campaign"
              demoLink="https://ethglobal.com/showcase/twittercampaign-wv9we"
              demoText="View Showcase"
              image="/twitter-campaign.png" techStack={[ CodingLanguages.solidity, CodingLanguages.typescript, DevTechnologies.hardhat, DevTechnologies.ethereum, DevTechnologies.openzeppelin, DevTechnologies.alchemy, CodingLanguages.graphql, DevTechnologies.web3auth,DevTechnologies.auth0, DevTechnologies.accountabstraction,DevTechnologies.openai,DevTechnologies.nextjs,DevTechnologies.react,DevTechnologies.materialui ]}
            />
            <GitHubCard
              name="Roblox First-Person Shooter Game"
              description="Fully-featured FPS game written entirely in Lua, spanning 80,000+ lines of code, achieving over 200,000+ unique plays."
              demoLink="https://www.roblox.com/games/6325436182/RETROSCAPE"
              demoText="Play Game"
              image="/retroscape.png" techStack={[ CodingLanguages.lua, DevTechnologies.roblox ]}
            />
            <GitHubCard
              name="Mitchell F Chan's Beggars Belief"
              description="Smart contracts for world-renowned NFT artist Mitchell F Chan's &quot;Beggars Belief&quot; 1/1 collection."
              repoName="beggars-belief"
              image="/beggars-belief.png" techStack={[ CodingLanguages.solidity, CodingLanguages.typescript, DevTechnologies.hardhat, DevTechnologies.ethereum, DevTechnologies.openzeppelin ]}
            />
            <GitHubCard
              name="Quantum Computing Research Paper"
              description="Novel ternary tree algorithm &quot;TT-LITE&quot; for reducing the number of quantum gates used inside of a quantum-image circuit."
              repoName="tt-lite"
              demoLink="https://arxiv.org/abs/1912.12599"
              demoText="View Paper"
              image="/laurier-sign-banner.png" techStack={[ CodingLanguages.python, DevTechnologies.qiskit ]}
            />
          </div>
        </div>
        
      </div>
      
    </section>
  )
}
