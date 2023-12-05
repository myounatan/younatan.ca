import { siteConfig } from "@/config/site";
import { MailIcon } from "lucide-react";

export default function ContactButton() {
  return (
    <div className="grid gap-8 items-start justify-center">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 animate-tilt group-hover:duration-200">
        </div>
        
        <a href={`mailto:${siteConfig.about.email}`}>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center"> {/*divide-gray-600*/}
            <span className="flex items-center space-x-5">
              <MailIcon className="h-6 w-6 text-indigo-300 group-hover:text-gray-100 -rotate-6 group-hover:rotate-0 transition duration-200" />
              {/* <span className="pr-6 text-gray-100">Contact me</span> */}
            </span>
            <span className="pl-3 text-indigo-300 group-hover:text-gray-100 transition duration-200">Contact me &rarr;</span>
            
          </button>
        </a>
      </div>
    </div>
  )
}