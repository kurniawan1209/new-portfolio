import { Github, Linkedin, Mail, DownloadCloud } from "lucide-react"
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
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Kurniawan</h1>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">Nur Hidayat</h1>
                            <p className="text-xl md:text-2xl text-muted-foreground">Full-Stack Developer</p>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I build scalable, high-performance web applications that combine elegant design with robust engineering.
                        </p>

                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com/kurniawan1209" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://www.linkedin.com/in/knhidayat15/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="mailto:kurniawan1564@gmail.com" aria-label="Email">
                                    <Mail className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a target="_blank" rel="noopener noreferrer" aria-label="CV" href="/CV_KURNIAWAN_NUR_HIDAYAT.pdf" download>
                                Download CV <DownloadCloud className="h-5 w-5 ml-1" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right side - Summary */}
                    <div className="space-y-6 text-foreground/90 leading-relaxed ml-6">
                        <p className="text-balance">
                            I am a <strong>Database and Web Engineer</strong> with a strong focus on building reliable, data-driven applications. My work sits across database architecture, backend
                            integration, and web development, where I design database structures, optimize data flows, and ensure applications are stable, maintainable, and aligned
                            with actual business needs rather than theoretical perfection.
                        </p>

                        <p className="text-balance">
                            Currently, I work as a <strong>Full-Stack Developer</strong>, contributing to the development and maintenance of production systems. My responsibilities include
                            integrating data between applications, and building web applications using modern frameworks. I regularly collaborate with other developers to ensure
                            data integrity, system performance, and smooth application behavior.
                        </p>

                        {/* <p className="text-balance">
                            With <strong>3+ years of professional experience</strong> across different organizational environments, I have supported internal systems, data
                            pipelines, and customer-facing applications. I am comfortable working across database, backend, and application layers, and I focus on delivering
                            solutions that are practical, scalable, and dependable over the long term.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
