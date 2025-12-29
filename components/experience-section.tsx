import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    company: "TechCorp",
    role: "Senior Full-Stack Engineer",
    period: "2023 — Present",
    description:
      "Lead development of cloud-based SaaS platform serving 100K+ users. Architect and implement scalable microservices using Next.js, Node.js, and PostgreSQL. Mentor junior developers and establish engineering best practices.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "StartupHub",
    role: "Full-Stack Developer",
    period: "2021 — 2023",
    description:
      "Built core features for real-time collaboration platform. Implemented WebSocket connections for live updates, optimized database queries reducing load times by 60%, and created reusable component library.",
    technologies: ["React", "TypeScript", "Express", "MongoDB", "Redis", "Socket.io"],
  },
  {
    company: "Digital Solutions Inc",
    role: "Full-Stack Developer",
    period: "2020 — 2021",
    description:
      "Developed custom e-commerce solutions for clients. Created responsive web applications with payment integration, inventory management, and admin dashboards. Collaborated with design team to ensure pixel-perfect implementations.",
    technologies: ["React", "JavaScript", "Python", "Django", "MySQL", "Stripe"],
  },
]

export function ExperienceSection() {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-background to-green-950/20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-muted-foreground md:text-right">{exp.period}</p>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
