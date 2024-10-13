import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import getProjects from "../netlify-projects"
import { useEffect, useState } from "react";
import Image from "next/image";
import { bangers } from "../fonts";
import { sono } from "../fonts";


const Projects = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    const descriptions = {
        "sketchy-sketch": {
            name: "Sketchy Sketch",
            description: "Board that allows you to create fun and colored pixel drawings.",
            tech: [
                "/javascript.svg",
                "/html-5.svg",
                "/css-3.svg"
            ]
        },
        "calc-wow": {
            name: "Awesome Calculator",
            description: "Fun and colored calculator that allows you to perform all basic operations.",
            tech: [
                "/javascript.svg",
                "/html-5.svg",
                "/css-3.svg"
            ]
        },
        "multistepform-frontendmentor": {
            name: "Multi Step Form",
            description: "Form that gathers information step-by-step and displays an overview",
            tech: [
                "/react.svg",
                "/typescript-icon-round.svg",
                "/html-5.svg",
                "/css-3.svg",
                "/tailwindcss-icon.svg"
            ]
        },
        "world-whereabouts": {
            name: "Where in the world?",
            description: "Web application that lets you research every country in the world; it leverages an API to look up the countries",
            tech: [
                "/react.svg",
                "/javascript.svg",
                "/html-5.svg",
                "/sass.svg"
            ]
        },
        "ip-mapping": {
            name: "IP Location Finder",
            description: "Enter any IP address, and find your location on the map.",
            tech: [
                "/react.svg",
                "/typescript-icon-round.svg",
                "/html-5.svg",
                "/css-3.svg",
                "/tailwindcss-icon.svg"
            ]
        },
        "ai-travels": {
            name: "AI Travels",
            description: "With a little help from ChatGPT you can generate an itinerary for any location in the world that you would like to visit.",
            tech: [
                "/javascript.svg",
                "/html-5.svg",
                "/css-3.svg"
            ]
        },
        "gaspavar-dev":  {
            name: "My Portfolio (old)",
            description: "Previous iteration of my personal portfolio, built from scratch.",
            tech: [
                "/javascript.svg",
                "/html-5.svg",
                "/css-3.svg"
            ]
        },
        "ecommerce-lookalike": {
            name: "Basic e-commerce",
            description: "Basic e-commerce website built with CSS and JavaScript.",
            tech: [
                "/javascript.svg",
                "/html-5.svg",
                "/css-3.svg"
            ]
        }
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projs = await getProjects();
                setProjects(projs)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="projects wrapper">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project) => (
                    <div key={project.id} id={project.id} className="project-card h-62 rounded-lg shadow-lg overflow-hidden transform transition cursor-pointer relative">
                        <div className="project-image w-full h-full">
                            <Image height={200} width={200} className="w-full project-img" src={project.screenshot_url} alt={"project screenshot"} />
                        </div>
                        <div className="project-info p-2 md:p-6 absolute bottom-0 flex flex-col w-full h-full justify-end">
                            <h3 className={`${bangers.className} text-xl font-semibold mb-2`}>{descriptions[project.name] ? descriptions[project.name].name : project.name}</h3>
                            <p className={`${sono.className} mb-4 text-sm overflow-y-auto`}>{descriptions[project.name] ? descriptions[project.name].description : "No description"}</p>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex space-x-2">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="View live project" className="flex gap-2 hover:underline text-sky-600">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        <p className="">Website</p>
                                    </a>
                                    <a href={project.build_settings.repo_url} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository" className="flex gap-2 hover:underline text-sky-600">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sky-600">Repo</p>
                                    </a>
                                </div>
                                <div className="technical-stack grid grid-cols-3 items-center gap-2 md:gap-4">
                                    {descriptions[project.name].tech.map(iconUrl => {
                                        return <Image key={project.name} id={project.name} className="tech-icon" src={iconUrl} height={20} width={20} alt="Tech stack icon"/>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;