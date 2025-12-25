// HeroSection
// Sección principal de bienvenida con presentación animada y llamada a la acción.

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (

        // Sección hero a pantalla completa
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4"> 

            {/* Contenedor del contenido principal, por encima de los fondos */}
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">

                    {/* Título principal con animaciones escalonadas */}
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> 
                            Hola, 
                        </span>
                        <span className="opacity-0 animate-fade-in-delay-1"> 
                            {" "}soy
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2"> Ania
                        </span>
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Navegando por el desarrollo de software para crear experiencias digitales funcionales y bien diseñadas.
                    </p>

                    {/* Botón guía hacia los proyectos */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 text-lg md:text-lg">
                        <a href="#projects" className="cosmic-button font-semibold">
                            Mis Proyectos
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Indicador visual de scroll */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-muted-foreground mb-2 text-lg"> Explora </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
};