import { TechStackItem } from "@/types/tech-stack";

// array of tech stack
interface TechStackListProps {
  techStack: TechStackItem[];
}

export function TechStackList({ techStack }: TechStackListProps) {
  return (
    <>
      <div className="w-full flex flex-row flex-wrap text-sm text-muted-foreground">
        {techStack.map((skill, index) => (
          <div key={index} className="flex items-center justify-center pr-2">
            {skill.icon}
            {skill.name.split(" ").map((word, index) => (
              <span key={index}>{word}&nbsp;</span>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}