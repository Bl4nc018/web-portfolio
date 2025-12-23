import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SaborExpress",
        description: "SaborExpress es una app móvil para descubrir, guardar y compartir recetas sencillas, desarrollada como proyecto final del grado superior en DAM.",
        image:"/projects/project1.png",
        tags: ["Python", "Java", "App móvil", "Full-Stack"],
        githubUrl: "https://github.com/Bl4nc018/saborexpress",
    },
    {
        id: 2,
        title: "Proyecto RPS",
        description: "Implementación en Python del juego piedra, papel, tijera incorporando un agente inteligente basado en modelos para analizar el historial de jugadas y tratar de vencer al usuario.",
        image:"/projects/project2.png",
        tags: ["Python", "Agentes IA", "Lógica"],
        githubUrl: "https://github.com/Bl4nc018/proyecto-RPS",
    },
    {
        id: 3,
        title: "PokeAPI",
        description: "Proyecto desarrollado con Django que permite consultar Pokémon según su ubicación geográfica y comprobar cuáles se encuentran cerca de unas coordenadas específicas.",
        image:"/projects/project3.png",
        tags: ["Python", "Django", "API REST", "Backend"],
        githubUrl: "https://github.com/Bl4nc018/pokemon-api",
    },
]

export const ProjectSection = () => {
    return <section id="projects" className="py-40 px-4 relative">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center"> 
                Proyectos <span className="text-primary"> Destacados </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                Aquí están algunos de los proyectos que he desarrollado. Haz clic en el icono para acceder al código y conocer más sobre cada uno.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                        <div className="h-50 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1.25 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl md:text-3xl text-primary font-semibold mb-4"> {project.title} </h3>
                            <p className="text-lg text-muted-foreground"> {project.description} </p>
                            <div className="flex justify-between items-center mt-auto pt-2">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2 font-semibold text-lg" 
                    target="_blank"
                    href="https://github.com/Bl4nc018"
                >
                    Descubre Mi Github <ArrowRight size={20}/>
                </a>
            </div>
        </div>
    </section>
};