import { Code, Briefcase, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-2-5xl">

                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center"> Acerca de <span className="text-primary"> mí </span> </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-justify text-glow"> Desarrolladora Full-Stack en constante aprendizaje.</h3>
                        <p className="text-muted-foreground text-xl text-justify">
                            Soy Ania, una programadora con interés por construir soluciones sólidas, eficientes y bien estructuradas. Trabajo tanto en el desarrollo front-end como en el back-end, buscando siempre un equilibrio entre diseño, funcionalidad y rendimiento.
                        </p>
                        <p className="text-muted-foreground text-xl text-justify">
                            Me motiva aprender nuevas tecnologías de forma continua y tener una visión global del desarrollo. Trabajo con lenguajes como Python, Java y SQL, así como HTML y CSS, creando soluciones completas a la par que escalables. Disfruto resolver problemas complejos y aprender constantemente nuevas tecnologías.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center text-lg">
                            <a href="#contact" className="cosmic-button">
                                Ponte en contacto
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-lg"> 
                                Descargar CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Crafting responsive and dynamic websites using modern technologies to deliver exceptional user experiences.
                                    </p>
                                </div>
                            </div>    
                        </div>

                        <div className="gradient-border p-6 card-hover"> 
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive and engaging user interfaces that prioritize usability and aesthetic appeal.
                                    </p>
                                </div>
                            </div>  
                        </div>
                        
                        <div className="gradient-border p-6 card-hover"> 
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management </h4>
                                    <p className="text-muted-foreground">
                                        Experienced in leading projects from concept to completion, ensuring timely delivery and quality outcomes.
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* For the link to the CV, add it to the project and then add it to href, line 23*/