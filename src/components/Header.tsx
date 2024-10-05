import { Button } from "@/components/ui/button";
import { Github, Layers } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-dark text-gray-100 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-0 right-0">
          <Button variant="link" size="icon" asChild className="text-neutral-500 hover:text-neutral-400">
            <a href={"my.github"} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="w-5 h-5" />
              <span className="sr-only">View GitHub</span>
            </a>
          </Button>
        </div>
        <div className="flex items-center space-x-3 mb-4">
          <Layers className="w-8 h-8" />
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">husaria.dev</h1>
        </div>
        <p className="text-lg text-gray-300/60 font-light max-w-4xl">
          View all projects hosted on husaria.dev
        </p>
      </div>
    </header>
  );
}