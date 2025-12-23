import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, 
    FaLinux, FaGitAlt, FaGithub, FaDocker, FaDatabase, } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiSpringboot, SiMysql, SiMariadb, SiPostgresql, 
    SiSqlite, SiMongodb, SiApachespark, SiApachehadoop, SiPostman, SiJupyter } from "react-icons/si";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "CSS", category: "frontend" },
    { name: "HTML", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },

    // Backend
    { name: "Django", category: "backend" },
    { name: "Java", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Spring Boot", category: "backend" },

    // Databases
    { name: "MariaDB", category: "databases" },
    { name: "MongoDB", category: "databases" },
    { name: "MySQL", category: "databases" },
    { name: "PostgreSQL", category: "databases" },
    { name: "SQL", category: "databases" },
    { name: "SQLite", category: "databases" },

    // Big Data
    { name: "Apache Spark", category: "Big Data" },
    { name: "Hadoop (HDFS)", category: "Big Data" },
    { name: "Sqoop", category: "Big Data" },

    // Tools & Platforms
    { name: "Docker", category: "herramientas" },
    { name: "Git", category: "herramientas" },
    { name: "GitHub", category: "herramientas" },
    { name: "Jupyter Notebooks", category: "herramientas" },
    { name: "Linux", category: "herramientas" },
    { name: "Postman", category: "herramientas" },
];

const skillIcons = {
    HTML: { icon: <FaHtml5 />, color: "#E34F26" },
    CSS: { icon: <FaCss3Alt />, color: "#1572B6" },
    JavaScript: { icon: <FaJs />, color: "#F7DF1E" },
    React: { icon: <FaReact />, color: "#61DAFB" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38BDF8" },

    Python: { icon: <FaPython />, color: "#3776AB" },
    Java: { icon: <FaJava />, color: "#007396" },
    Django: { icon: <SiDjango />, color: "#092E20" },
    "Spring Boot": { icon: <SiSpringboot />, color: "#6DB33F" },

    SQL: { icon: <FaDatabase />, color: "#336791" },
    MySQL: { icon: <SiMysql />, color: "#4479A1" },
    MariaDB: { icon: <SiMariadb />, color: "#003545" },
    PostgreSQL: { icon: <SiPostgresql />, color: "#336791" },
    SQLite: { icon: <SiSqlite />, color: "#003B57" },
    MongoDB: { icon: <SiMongodb />, color: "#47A248" },

    "Apache Spark": { icon: <SiApachespark />, color: "#E25A1C" },
    "Hadoop (HDFS)": { icon: <SiApachehadoop />, color: "#FFCC00" },
    Sqoop: { icon: <FaDatabase />, color: "#6A1B9A" },

    Git: { icon: <FaGitAlt />, color: "#F05032" },
    GitHub: { icon: <FaGithub />, color: "#181717" },
    Linux: { icon: <FaLinux />, color: "#FCC624" },
    Docker: { icon: <FaDocker />, color: "#2496ED" },
    Postman: { icon: <SiPostman />, color: "#FF6C37" },
    "Jupyter Notebooks": { icon: <SiJupyter />, color: "#F37626" },
};

const categories = ["all", "frontend", "backend", "databases", "Big Data", "herramientas"];

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-40 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    Mis <span className="text-primary">Habilidades</span>
                </h2>

                {/* Category filter */}
                <div className="flex flex-wrap justify-center mb-12 gap-4 text-lg">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn( "px-5 py-2 rounded-full transition-colors duration-300 capitalize font-mono",
                            activeCategory === category ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg md:text-xl"> {skill.name} </h3>
                                <span 
                                    className="text-3xl md:text-4xl lg:text-5xl" 
                                    style={{ color: skillIcons[skill.name]?.color,}}
                                    aria-hidden="true"
                                >
                                    {/* Check if skill has icon or not */}
                                    {skillIcons[skill.name]?.icon ?? (<FaDatabase />)}  
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};