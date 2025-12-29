import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "TaskFlow Pro",
    description:
      "A project management platform with real-time collaboration, kanban boards, and team analytics. Built with Next.js and Supabase, serving 5K+ active users.",
    image: "/modern-project-management-dashboard-with-kanban-bo.jpg",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "E-Commerce Analytics",
    description:
      "Advanced analytics dashboard for e-commerce businesses. Features real-time sales tracking, customer insights, and revenue forecasting with interactive charts.",
    image: "/analytics-dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "DevConnect",
    description:
      "Social platform for developers to share code snippets, collaborate on projects, and discover open source opportunities. Integrated with GitHub API.",
    image: "/developer-social-platform-with-code-editor.jpg",
    technologies: ["React", "Express", "MongoDB", "OAuth"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Content Generator",
    description:
      "Content creation tool powered by GPT-4. Generate blog posts, social media content, and marketing copy with customizable tone and style parameters.",
    image: "/ai-writing-assistant-interface.png",
    technologies: ["Next.js", "OpenAI API", "Prisma", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "HealthTrack",
    description:
      "Personal health and fitness tracking application. Log workouts, track nutrition, monitor progress with detailed charts and personalized recommendations.",
    image: "/health-fitness-tracking-app-dashboard.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function ProjectsSection() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-background to-pink-950/20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
