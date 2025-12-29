import { Code2, Database, Server, Container } from "lucide-react"
import Image from "next/image"

export function TechStackSection() {
  const techStack = {
    frontend: [
      { name: "React", icon: "/react-logo.png" },
      { name: "Next.js", icon: "/nextjs-logo.png" },
      { name: "TypeScript", icon: "/typescript-logo.png" },
      { name: "JavaScript", icon: "/javascript-logo.png" },
      { name: "Tailwind CSS", icon: "/tailwind-css-logo.png" },
      { name: "Vue.js", icon: "/vuejs-logo.png" },
      { name: "HTML5", icon: "/html5-logo.png" },
      { name: "CSS3", icon: "/css3-logo.png" },
    ],
    backend: [
      { name: "Node.js", icon: "/nodejs-logo.png" },
      { name: "Python", icon: "/python-logo.png" },
      { name: "PHP", icon: "/php-logo.png" },
      { name: "Laravel", icon: "/laravel-logo.jpg" },
      { name: "Express", icon: "/expressjs-logo.png" },
      { name: "Django", icon: "/django-logo.jpg" },
      { name: "FastAPI", icon: "/fastapi-logo.jpg" },
      { name: "NestJS", icon: "/nestjs-logo.jpg" },
    ],
    databases: [
      { name: "PostgreSQL", icon: "/postgresql-logo.png" },
      { name: "MongoDB", icon: "/mongodb-logo.png" },
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "Redis", icon: "/redis-logo.png" },
      { name: "Supabase", icon: "/supabase-logo.png" },
      { name: "Prisma", icon: "/tech-prisma.png" },
    ],
    tools: [
      { name: "Git", icon: "/git-logo.jpg" },
      { name: "Docker", icon: "/docker-logo.png" },
      { name: "AWS", icon: "/aws-logo.png" },
      { name: "CI/CD", icon: "/ci-cd-pipeline-icon.jpg" },
      { name: "REST APIs", icon: "/rest-api-icon.png" },
      { name: "GraphQL", icon: "/graphql-logo.png" },
      { name: "Kubernetes", icon: "/kubernetes-logo.png" },
      { name: "Nginx", icon: "/nginx-logo.png" },
    ],
  }

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">Tech Stack & Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proficient in modern technologies across the full stack, from frontend frameworks to backend systems and
            cloud infrastructure
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-cyan/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="text-2xl font-semibold">Frontend Development</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {techStack.frontend.map((tech) => (
                <div
                  key={tech.name}
                  className="group bg-cyan/10 hover:bg-cyan/20 border border-cyan/30 transition-all rounded-lg p-4 flex flex-col items-center gap-3 hover:scale-105"
                >
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-green/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green/20 flex items-center justify-center">
                <Server className="w-5 h-5 text-green" />
              </div>
              <h3 className="text-2xl font-semibold">Backend Development</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {techStack.backend.map((tech) => (
                <div
                  key={tech.name}
                  className="group bg-green/10 hover:bg-green/20 border border-green/30 transition-all rounded-lg p-4 flex flex-col items-center gap-3 hover:scale-105"
                >
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-purple/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-purple" />
              </div>
              <h3 className="text-2xl font-semibold">Databases</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {techStack.databases.map((tech) => (
                <div
                  key={tech.name}
                  className="group bg-purple/10 hover:bg-purple/20 border border-purple/30 transition-all rounded-lg p-4 flex flex-col items-center gap-3 hover:scale-105"
                >
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-orange/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center">
                <Container className="w-5 h-5 text-orange" />
              </div>
              <h3 className="text-2xl font-semibold">Tools & DevOps</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {techStack.tools.map((tech) => (
                <div
                  key={tech.name}
                  className="group bg-orange/10 hover:bg-orange/20 border border-orange/30 transition-all rounded-lg p-4 flex flex-col items-center gap-3 hover:scale-105"
                >
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
