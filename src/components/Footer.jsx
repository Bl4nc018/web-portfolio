// Footer
// Muestra información básica y un acceso rápido para volver al inicio.

import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-10 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            
            {/* Texto de copyright*/}
            <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Bl4nc018 Built with React & Vite. </p>
            
            {/* Botón para volver al inicio */}
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20}/>
            </a>
        </footer>
    );
};