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
    SiCodemagic,
    SiCypress,
    SiTrello,
    SiVercel,
} from "react-icons/si";
import { FaSquareXTwitter, FaGithub, FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TechItem } from "./TechItem";
import Link from 'next/link';


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
                <TechItem icon={SiCypress} text="Cypress" />
                <TechItem icon={SiNextJs} text="Next.js" />
                <TechItem icon={SiVite} text="Vite" />
                <TechItem icon={SiDocker} text="Docker" />
                <TechItem icon={SiPostman} text="Postman" />
                <TechItem icon={SiSwagger} text="Swagger" />
                <TechItem icon={SiFlutter} text="Flutter" />
                <TechItem icon={SiDart} text="Dart" />
                <TechItem icon={SiFirebase} text="Firebase" />
                <TechItem icon={SiCodemagic} text="CodeMagic" />
                <TechItem icon={SiVercel} text="Vercel" /> 
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
                <TechItem icon={SiTrello} text="Trello" /> 
            </div>
            <div className="flex mx-auto mt-28 mb-20 space-x-3 md:space-x-5 text-center text-white justify-center items-center">
                <Link href={'https://facebook.com/victorzarzar58'} target="_blank">
                    <FaFacebook className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
                </Link>
                <Link href={'https://instagram.com/victorzarzar7'} target="_blank">
                    <FaInstagram className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
                </Link>
                <Link href={'https://twitter.com/victorzarzar1'} target="_blank">
                    <FaSquareXTwitter className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
                </Link>
                <Link href={'https://www.linkedin.com/in/victorzarzar'} target="_blank">
                    <FaLinkedin className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
                </Link>
                <Link href={'https://github.com/Victor-Zarzar'} target="_blank">
                    <FaGithub className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
                </Link>
            </div>
        </div>
    )
}
