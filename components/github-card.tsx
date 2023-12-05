"use client";

import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { TechStackItem } from "@/types/tech-stack";
import { TechStackList } from "./tech-stack-list";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface GitHubProjectProps {
  name: string;
  description: string;
  techStack: TechStackItem[];
  image?: string;
  demoLink?: string;
  demoText?: string;
  repoName?: string;
}

export function GitHubCard({ name, description, techStack, image, demoLink, demoText, repoName }: GitHubProjectProps) {
  return (
    <Card className="col-span-1">
      {image && <img className="rounded-t-lg border h-40 w-full object-cover" src={image} alt="" />}

      <CardHeader className="grid grid-cols-1 items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="pt-2">
            {description}
          </CardDescription>
        </div>
        <div className="flex flex-auto items-center space-x-1 rounded-md gap-2">
        {repoName && <Button variant="default" className="px-3 shadow-none">
            <Link 
              href={`${siteConfig.links.github}/${repoName}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>}
          {demoLink && <Button variant="secondary" className="px-3 shadow-none">
            <Link 
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              {demoText || "Live Demo"}
            </Link>
          </Button>}
        </div>
      </CardHeader>
      <CardContent className="-mt-1">
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <TechStackList techStack={techStack} />
          {/* <div>Updated April 2023</div> */}
        </div>
      </CardContent>
    </Card>
  )
}