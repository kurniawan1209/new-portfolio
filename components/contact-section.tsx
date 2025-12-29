import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Twitter, Github, DownloadCloud } from "lucide-react"

export function ContactSection() {
    return (
        <section className="relative px-6 py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-background to-red-950/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                <p className="text-lg text-muted-foreground mb-12 text-balance">
                    I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
                    want to say hi, feel free to reach out!
                </p>

                <Card className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <a href="mailto:kurniawan1564@gmail.com" className="text-lg hover:text-accent transition-colors">
                                kurniawan1564@gmail.com
                            </a>
                        </div>

                        <div className="flex justify-center gap-4 pt-4">
                            <Button variant="outline" size="lg" asChild>
                                <a href="https://github.com/kurniawan1209" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5 mr-2" />
                                    GitHub
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="https://www.linkedin.com/in/knhidayat15/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5 mr-2" />
                                    LinkedIn
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a target="_blank" rel="noopener noreferrer" aria-label="CV" href="/CV_KURNIAWAN_NUR_HIDAYAT.pdf" download>
                                    <DownloadCloud className="h-5 w-5 ml-1" />
                                    Download CV 
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                        <Button size="lg" className="min-w-48" asChild>
                            <a href="mailto:kurniawan1564@gmail.com">Get In Touch</a>
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    )
}
