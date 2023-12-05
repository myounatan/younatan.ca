import { siteConfig } from "@/config/site";
import { LinkedinIcon } from "lucide-react";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

interface MainNavProps {
  children?: React.ReactNode;
}

export function SocialsNav({ children }: MainNavProps) {
  return (
    <nav className="flex items-center space-x-1">
      <Link
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
          })}
        >
          <LinkedinIcon className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </div>
      </Link>
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
          })}
        >
          <Icons.gitHub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
          })}
        >
          <Icons.twitter className="h-5 w-5 fill-current" />
          <span className="sr-only">Twitter</span>
        </div>
      </Link>
      {children}
    </nav>
  )
}
