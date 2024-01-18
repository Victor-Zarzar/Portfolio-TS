'use client'
import React from 'react'
import Image from "next/image";
import ReactIcon from '../icons/react';
import FlutterIcon from '../icons/flutter';
import DockerIcon from '../icons/docker';
import { Fade } from 'react-awesome-reveal';
import clsx from 'clsx';

interface SkillsProps {
    theme: string;
}

export default function Skills({ theme }: SkillsProps) {

    const SkillsClasses = clsx("rounded-2xl p-4 transform translate-x-6 -translate-y-6", {
        'bg-gray-800': theme === 'light',
        'bg-gray-400': theme === 'dark',
    });

    return (
        <>
            <div className="text-gray-200 mt-40">
                <div className="max-w-6xl mx-auto px-0 py-2">
                    <div className="text-center mb-20">
                        <Fade>
                            <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl  text-blue-500 text-center">Skills</h1>
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
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-10 md:gap-16 lg:gap-8 mr-8 md:mr-0 mx-auto">
                        <div className="p-4 md:mb-0 mb-6 flex flex-col mx-auto mt-5">
                            <div className="pattern-dots-md gray-light">
                                <div className={SkillsClasses}>
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <ReactIcon />
                                    </div>
                                    <div className="flex-grow h-[20rem] w-[15rem] md:h-[21rem] md:w-[22rem] lg:h-[21rem] lg:w-[20rem]">
                                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                                        <h2 className="text-lg md:text-lg lg:text-xl title-font font-medium mb-3">Front End</h2>
                                        <ul className="text-sm text-justify">
                                            <li className="mb-2">HTML</li>
                                            <li className="mb-2">Tailwind CSS</li>
                                            <li className="mb-2">Styled Components</li>
                                            <li className="mb-2">Javascript</li>
                                            <li className="mb-2">React</li>
                                            <li className="mb-2">TypeScript</li>
                                            <li className="mb-2">Next.js</li>
                                            <li className="mb-2">Cypress</li>
                                            <li className="mb-2">Fast API - Swagger</li>
                                            <li className="mb-2">Postman</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:mb-0 mb-6 flex flex-col mx-auto mt-5">
                            <div className="pattern-dots-md gray-light">
                                <div className={SkillsClasses}>
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                        <FlutterIcon />
                                    </div>
                                    <div className="flex-grow h-[20rem] w-[15rem] md:h-[21rem] md:w-[22rem] lg:h-[21rem] lg:w-[20rem]">
                                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                                        <h2 className="text-lg md:text-lg lg:text-xl title-font font-medium mb-3">Mobile</h2>
                                        <ul className="text-sm text-justify">
                                            <li className="mb-2">Dart</li>
                                            <li className="mb-2">Flutter</li>
                                            <li className="mb-2">Android Studio</li>
                                            <li className="mb-2">Xcode</li>
                                            <li className="mb-2">Firebase</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:mb-0 mb-6 flex flex-col mx-auto mt-5">
                            <div className="pattern-dots-md gray-light">
                                <div className={SkillsClasses}>
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                        <DockerIcon />
                                    </div>
                                    <div className="flex-grow h-[20rem] w-[15rem] md:h-[21rem] md:w-[22rem] lg:h-[21rem] lg:w-[20rem]">
                                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                                        <h2 className="text-lg md:text-lg lg:text-xl title-font font-medium mb-3">Technologies</h2>
                                        <ul className="text-sm text-justify">
                                            <li className="mb-2">Docker</li>
                                            <li className="mb-2">Docker Compose</li>
                                            <li className="mb-2">Git</li>
                                            <li className="mb-2">GitHub</li>
                                            <li className="mb-2">GitLab</li>
                                            <li className="mb-2">Visual Studio Code</li>
                                            <li className="mb-2">Linux</li>
                                            <li className="mb-2">macOS</li>
                                            <li className="mb-2">Windows</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

