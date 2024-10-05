import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col overflow-hidden border-neutral-800 bg-neutral-900 shadow-md">
          <div className="flex-1 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-15 h-15">
                <img
                  src={project.icon}
                  alt={`${project.name} icon`}
                  width={60}
                  height={60}
                  className="rounded-sm"
                />
              </div>
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 text-neutral-100">{project.name}</CardTitle>
              <CardDescription className="text-sm text-neutral-400">
                {project.description}
              </CardDescription>
            </div>
          </div>
          <div className="bg-neutral-950 p-4 border-t border-neutral-800 flex justify-between items-center">
            <Button variant="default" size="sm" asChild >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Project
              </a>
            </Button>
            {project.github && (
              <Button variant="default" size="sm" asChild >
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}