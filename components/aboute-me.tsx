"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteConfig } from "@/config/site";
import { CircleIcon } from "lucide-react"
import { TechStackList } from "./tech-stack-list";
import { CodingLanguages, DevTechnologies, FieldTopics } from "./tech";
import { SocialsNav } from "./socials-nav";
import { useEffect, useState } from "react";
import { getYearsOfExperience } from "@/lib/text";

const isWindowContext = typeof window !== "undefined";

export function AboutMe() {
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isMobile, setIsMobile] = useState(isWindowContext ? /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent) : false);

  const languages = Object.values(CodingLanguages);
  const technologies = Object.values(DevTechnologies);
  const topics = Object.values(FieldTopics);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 space-y-4 xl:space-y-0 xl:space-x-4">
      <Accordion type="single" collapsible className="xl:col-span-2" defaultValue={!isMobile ? "item-1" : undefined}>
        <AccordionItem value="item-1" className="border rounded-lg px-5">
          <AccordionTrigger className="hover:no-underline no-underline">Bio</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {siteConfig.about.bio.map((paragraph, index) => (
              <span key={index}>
                {paragraph.replace('years', `${getYearsOfExperience()} years`)}
                <br />
                <br />
              </span>
            ))}
            <SocialsNav />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="xl:col-span-2" defaultValue="item-1">
        <AccordionItem value="item-1" className="border rounded-lg px-5">
          <AccordionTrigger className="hover:no-underline no-underline">Skills</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <p className="text-muted-foreground border-b">
                  Languages
                </p>
                <TechStackList techStack={languages} />
              </div>
              <div className="grid gap-2">
                <p className="text-muted-foreground border-b">
                  Technologies
                </p>
                <TechStackList techStack={technologies} />
              </div>
              <div className="grid gap-2">
                <p className="text-muted-foreground border-b">
                  Topics
                </p>
                <TechStackList techStack={topics} />
              </div>
              <div className="flex space-x-4 text-xs text-muted-foreground pt-5">
                <div>Updated {currentMonth} {currentYear}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
