'use client'
import React from 'react'
import Image from "next/image";
import ReactIcon from '../icons/react';
import FlutterIcon from '../icons/flutter';
import DockerIcon from '../icons/docker';
import { Fade } from 'react-awesome-reveal';
import clsx from 'clsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LineColor from './LineColor';

interface SkillsProps {
    theme: string;
}

export default function Skills({ theme }: SkillsProps) {

    const SkillsClasses = clsx("rounded-xl border-3 p-0 transform translate-x-6 -translate-y-6 h-[25rem] w-[16rem] md:h-[26rem] md:w-80 mx-auto", {
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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-20 gap-y-10 p-2 md:p-4 lg:p-5 mr-8 md:mr-0'>
                        <Card className={SkillsClasses}>
                            <CardHeader>
                                <ReactIcon />
                                <CardTitle className='text-lg md:text-lg lg:text-xl title-font font-medium mb-3 text-white'>Front End</CardTitle>
                            </CardHeader>
                            <CardContent className='text-sm text-white'>
                                <p className='mb-1'>HTML</p>
                                <p className='mb-1'>Tailwind CSS</p>
                                <p className='mb-1'>Styled Components</p>
                                <p className='mb-1'>React</p>
                                <p className='mb-1'>TypeScript</p>
                                <p className='mb-1'>Next.js</p>
                                <p className='mb-1'>Cypress</p>
                                <p className='mb-1'>Fast API - Swagger</p>
                                <p className='mb-1'>Postman</p>
                            </CardContent>
                            <LineColor />
                        </Card>
                        <Card className={SkillsClasses}>
                            <CardHeader>
                                <FlutterIcon />
                                <CardTitle className='text-lg md:text-lg lg:text-xl title-font font-medium mb-3 text-white'>Mobile</CardTitle>
                            </CardHeader>
                            <CardContent className='text-sm text-white'>
                                <p className='mb-1'>Dart</p>
                                <p className='mb-1'>Flutter</p>
                                <p className='mb-1'>Android Studio</p>
                                <p className='mb-1'>React</p>
                                <p className='mb-1'>Xcode</p>
                                <p className='mb-1'>Firebase</p>
                            </CardContent>
                            <LineColor />
                        </Card>
                        <Card className={SkillsClasses}>
                            <CardHeader>
                                <DockerIcon />
                                <CardTitle className='text-lg md:text-lg lg:text-xl title-font font-medium mb-3 text-white'>Technologies</CardTitle>
                            </CardHeader>
                            <CardContent className='text-sm text-white'>
                                <p className='mb-1'>Docker</p>
                                <p className='mb-1'>Docker Compose</p>
                                <p className='mb-1'>Git</p>
                                <p className='mb-1'>React</p>
                                <p className='mb-1'>GitHub</p>
                                <p className='mb-1'>GitLab</p>
                                <p className='mb-1'>Visual Studio Code</p>
                                <p className='mb-1'>Linux</p>
                                <p className='mb-1'>macOS</p>
                                <p className='mb-1'>Windows</p>
                            </CardContent>
                            <LineColor />
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

