# Portfolio Web

Este proyecto se trata de una **Single Page Application (SPA)** desarrollada con tecnologías frontend modernas con el propósito de usarse como portfolio profesional. La web está programado con React, JavaScript y Tailwind CSS en el que se incorpora un sistema de diseño basado en tokens y variables CSS para la gestión de temas y estilos. La estructura del código es modular y orientada a la reutilización de componentes.

<p align="left">
   <img src="https://img.shields.io/badge/Build-Passing-brightgreen">
   <img src="https://img.shields.io/badge/Frontend-React-blue">
   <img src="https://img.shields.io/badge/Styling-TailwindCSS-38bdf8">
   <img src="https://img.shields.io/badge/Language-JavaScript-orange">
   <img src="https://img.shields.io/badge/Responsive-yes-success">
   <img src="https://img.shields.io/badge/Theme-Light%20%2F%20Dark-purple">
   <img src="https://img.shields.io/badge/Maintained-yes-brightgreen">
</p>


## Índice
1. [Características del proyecto](#características)
2. [Detalles técnicos](#detalles-técnicos)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Instalación y ejecución](#instalación-y-ejecución)

## Características:

* Centralización de información profesional y proyectos destacados.
* Sistema de estilos escalables basado en tokens y variables CSS.
* Animaciones personalizadas sin dependencias externas.
* Código en el que se puede implementar nuevas funcionalidades de forma sencilla.

## Detalles técnicos

**Lenguaje y tecnologías:** JavaScript, HTML y CSS.

**Frameworks y herramientas:** React, Vite y Tailwind CSS.

**Estilos y UI:**
- Sistema de diseño basado en tokens.
- Gestión de temas claro / oscuro mediante variables CSS.
- Animaciones implementadas con CSS (`@keyframes`).


## Estructura del proyecto

```
📁 web-portfolio/
├── node_modules/
├── public/
│   ├── projects/
│   ├── cv.pdf
│   └── vite.svg
├── 📁 src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectSection.jsx
│   │   ├── SkillSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
La estructura del proyecto sigue una organización clara y modular en la que se separan los recursos estáticos, los componentes reutilizables y la página principal de la aplicación.  
En el directorio `src` se concentra la lógica principal y la interfaz de usuario.

## Instalación y ejecución:

### Requisitos:

* Node.js 18+
* npm o yarn
* Git

### Pasos:

### **1. Clonar el repositorio**
```sh
    git clone git@github.com:Bl4nc018/web-portfolio.git
    cd web-portfolio
```

### **2. Instalar las dependencias (automáticamente instalará los paquetes de package.json o package-lock.json)**

```sh
    npm install
```

### **3. Ejecutar en modo desarrollo**

```sh
    npm run dev
```

Y ahora se podrá acceder al localhost para la preview de la web: `http://localhost:5173`

---

### Desarrollado por:

<p align="left">
   <a href="https://github.com/Bl4nc018">
      <img src="https://avatars.githubusercontent.com/u/92156488?s=400&u=1302f75511bad4df69803bf7b66443a1a8364b60&v=4" width=115><br>
      <sub>Ania</sub>
   </a>
</p>
