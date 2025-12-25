// ThemeToggle
// Propósito: Alternar entre modo claro y oscuro.
// Persistencia: Guarda la preferencia del usuario en localStorage.
// UX: En móviles se oculta al hacer scroll para reducir distracciones visuales.

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    // Estado inicial del tema basado en la preferencia guardada
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark";
    });

    // Controla la visibilidad del botón en dispositivos móviles
    const [visible, setVisible] = useState(() => {
        return window.matchMedia("(max-width: 640px)").matches
            ? window.scrollY < 30
            : true;
    });

    // Alterna el tema y actualiza localStorage y la clase del documento
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    useEffect(() => {
        // Sincroniza el estado del tema con la clase `dark` en <html>
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        // Maneja la visibilidad del botón según el scroll en móvil
        const isMobile = window.matchMedia("(max-width: 640px)").matches;
        if (!isMobile) {
            setVisible(true);
            return;
        }

        const handleScroll = () => {setVisible(window.scrollY < 30);};
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // Botón fijo para alternar el tema visual
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:left-5 max-sm:top-12 top-5 right-10 z-50 p-2 rounded-full transition-all duration-300",
                visible ? "opacity-100 translate-y-0" 
                : "opacity-0 -translate-y-4 pointer-events-none"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-7 w-7 max-sm:h-6 max-sm:w-6 text-yellow-300" />
            ) : (
                <Moon className="h-7 w-7 max-sm:h-6 max-sm:w-6 text-blue-900" />
            )}
        </button>
    );
};
