'use client'
import React from 'react'
import Image from "next/image";
import { Fade } from 'react-awesome-reveal';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';

interface ProjectsProps {
    theme: string;
}

export default function Projects({ theme }: ProjectsProps) {

    const ProjectsClasses = clsx("flex flex-col shadow-sm h-[26rem] w-auto md:h-[28rem] md:w-auto lg:h-[28rem] lg:w-auto p-8 rounded-2xl", {
        'bg-gray-800': theme === 'light',
        'bg-gray-400': theme === 'dark',
    });

    const musicplayer = '/musicplayer.jpg';
    const portfolio = '/portfolio.png';
    const mario = '/mario.png';
    const gpt = '/gpt.png';

    const projects = [
        {
            title: "Music Player",
            description:
                "App Music Player in flutter Android/iOS.",
            photo: musicplayer,
        },
        {
            title: "Portfolio",
            description:
                "My portfolio in react, typescript, nextjs, web project.",
            photo: portfolio,
        },
        {
            title: "Mario Jump",
            description:
                "App Mario Jump in flutter Android/iOS",
            photo: mario,
        },
        {
            title: "ChatGPT",
            description:
                "App ChatGPT in flutter Android/iOS",
            photo: gpt,
        },
    ];

    const sourceCodeLinks = [
        "https://github.com/Victor-Zarzar/musicplayer-flutter",
        "https://github.com/Victor-Zarzar/portfolio-ts",
        "https://github.com/Victor-Zarzar/SuperMario-Flutter",
        "https://github.com/Victor-Zarzar/chat-gpt",
    ];

    return (
        <div className="col-span-4 mx-auto">
            <div className="p-6">
                <Fade>
                    <h2 className="title-projects mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Projects</h2>
                </Fade>
                <div className="flex mt-6 justify-center">
                    <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className="px-10 my-4 mt-20" id="projects">
                <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight md:text-2xl lg:text-3xl text-blue-500 mt-16 text-center">
                    Featured projects:
                </h1>
                <p className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mb-16 text-center">
                    Here are a few of my live, real-world projects
                </p>
                <div className="max-w-md md:max-w-lg lg:max-w-5xl mx-auto px-0 py-2">
                    <div className="grid-cols-1 grid md:grid-cols-1 lg:grid-cols-2 p-6 md:p-10 mx-auto gap-20 md:gap-20">
                        {projects.map((project, index) => (
                            <div key={index} className="relative">
                                <div className={ProjectsClasses}>
                                    <a href={sourceCodeLinks[index]} target="_blank" rel="noreferrer" className="mb-4">
                                        <Image src={project.photo} alt={project.title} width={350} height={200} priority className='mx-auto h-[8rem] w-[20rem] md:h-[12rem] md:w-[25rem] lg:h-[12rem] lg:w-[20rem]' />
                                    </a>
                                    <h3 className="title-projects mb-4 text-lg font-extrabold leading-10 tracking-tight md:text-lg text-blue-500 text-center">
                                        {project.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-purple-800 md:text-2xl lg:text-2xl font-semibold tracking-tighter mx-auto">
                                        {project.description}
                                    </p>
                                    <div className="container-button relative inline-flex mt-5 mb-3 mx-auto">
                                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
                                        </div>
                                        <a href={sourceCodeLinks[index]} target="_blank" rel="noreferrer">
                                        <Button type='button' className='relative inline-flex items-center justify-center h-[2.6rem] w-[7rem] sm:w-[8rem] md:w-[8rem] text-[9px] md:text-[10px] px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 hover:bg-neutral-700 font-pj rounded-lg'>Source Code</Button>
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></div>
                            </div>
                        ))}
                    </div>
                    <div className="mx-auto mt-28 mb-14 text-center text-white items-center">
                        <ul className="flex justify-center mt-0 space-x-5">
                            <li>
                                <a href="https://facebook.com/victorzarzar58" target="_blank" className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                                    <svg className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/victorzarzar7" target="_blank" className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                                    <svg className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/victorzarzar" target="_blank" className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400" aria-label="Visit TrendyMinds LinkedIn" rel="noreferrer"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg:h-12">
                                    <path fill="currentColor"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Victor-Zarzar" target="_blank" className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                                    <svg className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}