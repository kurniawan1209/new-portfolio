import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/50 via-background to-purple-950/30" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and intro */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Alex Rivera</h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Full-Stack Developer</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I build scalable, high-performance web applications that combine elegant design with robust engineering.
            </p>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:alex@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Summary */}
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-balance">
              I'm a developer passionate about crafting accessible, pixel-perfect web applications that blend thoughtful
              design with robust engineering. My work lies at the intersection of frontend and backend, creating
              experiences that not only look great but are meticulously built for performance and usability.
            </p>

            <p className="text-balance">
              Currently, I'm a <strong>Senior Full-Stack Engineer at TechCorp</strong>, specializing in modern web
              technologies. I contribute to building scalable platforms that serve millions of users, ensuring our
              systems meet the highest standards of reliability and user experience.
            </p>

            <p className="text-balance">
              With <strong>4+ years of experience</strong> across startups and established companies, I've developed
              software across diverse environments — from fast-paced startups to enterprise corporations. I've shipped
              features used by thousands of customers and led technical initiatives that improved system performance by
              40%.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
