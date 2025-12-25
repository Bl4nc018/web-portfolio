// ContactSection
// Proporciona formas directas de contacto y enlaces a perfiles profesionales.

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {

    return (
        // Sección con ancla usada para la navegación interna
        <section id="contact" className="py-40 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                
                {/* Encabezado de la sección*/}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                    Contacta <span className="text-primary"> Conmigo </span>
                </h2>

                {/* Texto introductorio*/}
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg md:text-xl">
                    Siempre estoy abierta a nuevos proyectos y oportunidades para crear algo extraordinario. Si crees que nuestras trayectorias pueden cruzarse, hablemos.
                </p>

                    {/* Información de contacto principal */}
                    <div className="space-y-2">
                        <div className="flex flex-col p-4 sm:flex-row justify-center gap-10">

                            {/* Correo electrónico con enlace mailto */}
                            <div className="bg-card w-auto p-4 rounded-lg shadow-xs flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <a
                                    href="mailto:abr04work@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors text-base sm:text-xl"
                                >
                                    abr04work@gmail.com
                                </a>
                            </div>

                            {/* Ubicación geográfica */}
                            <div className="bg-card w-auto p-4 rounded-lg shadow-xs flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <span className="text-muted-foreground text-xl">
                                    Galicia, España
                                </span>
                            </div>
                        </div>

                        
                        {/* Enlaces a redes profesionales */}
                        <div className="pt-8">
                            <h4 className="font-semibold mb-4 text-xl text-primary"> Conectemos</h4>
                            <div className="flex space-x-4 justify-center"> 
                                <a href="https://www.linkedin.com/in/ania-blanco" target="_blank"> <Linkedin size={30}/> </a>
                                <a href="https://www.github.com/Bl4nc018" target="_blank"> <Github size={30}/> </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};