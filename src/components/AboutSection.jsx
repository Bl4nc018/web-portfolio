import { Code, Briefcase, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-2-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">
                            I'm Ania Blanco, a dedicated web developer with a passion for creating beautiful and functional digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in building responsive, user-friendly websites and applications that not only look great but also perform seamlessly across all devices.
                        </p>
                        <p className="text-muted-foreground">
                            My journey in web development began several years ago, and since then, I've honed my skills in HTML, CSS, JavaScript, and various frameworks like React and Node.js. I thrive on solving complex problems and continuously learning new technologies to stay ahead in this ever-evolving field.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
                                Download CV
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