import { useState } from "react";

const skills = [

    // Frontend Skills
    {name: "HTML/CSS", level: 95, category:"frontend"},
    {name: "JavaScript", level: 90, category:"frontend"},
    {name: "React", level: 85, category:"frontend"},
    {name: "Tailwind CSS", level: 80, category:"frontend"},

    // Backend Skills
    {name: "Django", level: 70, category:"backend"},
    {name: "Spring Boot", level: 60, category:"backend"},
    {name: "MongoDB", level: 70, category:"backend"},
    {name: "SQL", level: 65, category:"backend"},

    // Tools & Platforms
    {name: "Git/Github", level: 85, category:"tools"},
    {name: "Linux", level: 70, category:"tools"},
    {name: "VS Code", level: 90, category:"tools"},
    {name: "Postman", level: 75, category:"tools"},
    {name: "Docker", level: 60, category:"tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category, key) => (
                        <button key={key}>{category}</button>
                    ))}
                        
                </div> 

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div 
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    )
                )}
                </div>
            </div>
        </section>
    );
};

// Instead of the name and percentage, in line 45, make sure to remember to add the logo of the skill, then the skill name below it. Also change the order.
//Level bar is on line 48