import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const experiences = [
    {
        company: "PT. Global Intermedia Nusantara",
        role: "Web Developer",
        period: "Sep 2023 — Present",
        description:
            "Create web applications using Laravel and jQuery. Conduct client discussions regarding application development and provide guidance on application flow. Handle data integration between multiple applications.",
        technologies: ["Laravel", "jQuery", "PHP", "MySQL"],
    },
    {
        company: "PT. Aino Indonesia",
        role: "Database Engineer",
        period: "Nov 2022 — May 2023",
        description:
            "Maintained and restructured transactional databases. Created comprehensive backup and recovery plans for database systems. Provided database support and guidance to development team members.",
        technologies: ["Oracle", "PostgreSQL", "MySQL", "Database Administration"],
    },
    {
        company: "CV. Karya Hidup Sentosa",
        role: "Database Engineer",
        period: "May 2020 — Nov 2022",
        description:
            "Monitored and mentored Database Engineer Interns. Designed and optimized table structures for new internal applications. Created SQL procedures to call Oracle APIs. Developed ETL scripts using PySpark and CodeIgniter for data warehouse purposes. Assisted data scientist team in developing recommendation systems for company's e-commerce.",
        technologies: ["Oracle", "SQL", "PySpark", "CodeIgniter", "ETL", "PostgreSQL", "MySQL"],
    },
    {
        company: "CV. Karya Hidup Sentosa",
        role: "Database and Web Developer Intern",
        period: "Jun 2019 — Apr 2020",
        description:
            "Built custom reports in Oracle Database Application to support employee workflows. Created SQL queries across various databases (Oracle, MySQL, PostgreSQL) for application development. Developed and maintained web applications for internal purposes.",
        technologies: ["Oracle", "MySQL", "PostgreSQL", "SQL", "Web Development"],
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
