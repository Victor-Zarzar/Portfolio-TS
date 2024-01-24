import React from 'react'
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import {
    SiVisualstudiocode,
    SiGit,
    SiGithub,
    SiNextdotjs as SiNextJs,
    SiReact,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiNpm,
    SiDocker,
    SiFlutter,
    SiDart,
    SiPostman,
    SiSwagger,
    SiVite,
    SiJest,
    SiGitlab,
    SiAndroidstudio,
    SiXcode,
    SiFirebase,
    SiLinux,
    SiMacos,
    SiWindows,
} from "react-icons/si";
import { TechItem } from "../components/TechItem";


export default function Skills() {

    return (
        <div className="text-gray-200 mt-40">
            <div className="max-w-6xl mx-auto px-0 py-2">
                <div className="text-center mb-20">
                    <Fade>
                        <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center">Skills</h1>
                    </Fade>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Some of the technologies I use in my daily life.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
                        </div>
                    </div>
                    <div className="mx-auto mt-20 mb-8 text-center text-white items-center">
                        <ul className="flex justify-center mt-5 space-x-10">
                            <li>
                                <Image
                                    src="/git.gif"
                                    alt="webdeveloper"
                                    width={60}
                                    height={12}
                                    priority
                                    className='h-10 w-10 md:w-12 md:h-12 lg:w-16 lg:h-16' />
                            </li>
                            <li>
                                <Image
                                    src="/restapi.gif"
                                    alt="webdeveloper"
                                    width={60}
                                    height={12}
                                    priority
                                    className='h-10 w-10 md:w-12 md:h-12 lg:w-16 lg:h-16' />
                            </li>
                            <li>
                                <Image
                                    src="/terminal.gif"
                                    alt="webdeveloper"
                                    width={60}
                                    height={12}
                                    priority
                                    className='h-10 w-10 md:w-12 md:h-12 lg:w-16 lg:h-16' />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 max-w-xs md:max-w-2xl mx-auto rounded-md border-purple-900 hover:border-indigo-500  border-x-2 border-y-2 p-2 font-light mb-6">
                <TechItem icon={SiHtml5} text="Html" />
                <TechItem icon={SiTailwindCSS} text="TailwindCSS" />
                <TechItem icon={SiTypescript} text="TypeScript" />
                <TechItem icon={SiJavascript} text="JavaScript" />
                <TechItem icon={SiReact} text="React.js" />
                <TechItem icon={SiJest} text="Jest" />
                <TechItem icon={SiNextJs} text="Next.js" />
                <TechItem icon={SiVite} text="Vite" />
                <TechItem icon={SiDocker} text="Docker" />
                <TechItem icon={SiPostman} text="Postman" />
                <TechItem icon={SiSwagger} text="Swagger" />
                <TechItem icon={SiFlutter} text="Flutter" />
                <TechItem icon={SiDart} text="Dart" />
                <TechItem icon={SiFirebase} text="Firebase" />
                <TechItem icon={SiGit} text="Git" />
                <TechItem icon={SiGithub} text="Github" />
                <TechItem icon={SiGitlab} text="Gitlab" />
                <TechItem icon={SiNpm} text="Npm" />
                <TechItem icon={SiVisualstudiocode} text="VSCode" />
                <TechItem icon={SiXcode} text="Xcode" />
                <TechItem icon={SiAndroidstudio} text="AndroidStudio" />
                <TechItem icon={SiLinux} text="Linux" />
                <TechItem icon={SiMacos} text="macOS" />
                <TechItem icon={SiWindows} text="Windows" />
            </div>
            <div className="mx-auto mt-28 mb-20 text-center text-white items-center">
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
                        <a href="https://twitter.com/victorzarzar1" target="_blank" className="text-gray-500 hover:text-gray-400 dark:hover:text-white dark:text-gray-400">
                            <svg className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                </path>
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
    )
}
