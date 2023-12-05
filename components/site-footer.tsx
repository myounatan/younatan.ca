import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { LinkedinIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-background top-0 z-40 w-full border-t">
      <div className="container grid grid-rows h-16 items-center justify-center">
        <div className="space-y-0 text-center">
          <p className="text-sm text-muted-foreground">
            website designed&nbsp;by Matthew&nbsp;Younatan&nbsp;©️
          </p>
          <Link
              href={siteConfig.links.websiteSource}
              target="_blank"
              rel="noreferrer"
            >
            <p className="text-sm text-muted-foreground underline underline-offset-2">
              view source code
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
