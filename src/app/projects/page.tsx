'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import LineColor from '../components/LineColor';
import Image from 'next/image';

export default function ProjectsPage() {

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

    return (
        <div>
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
                </div>
            </div>
            <div>
                <Carousel className="w-full max-w-[17rem] md:max-w-md mx-auto mb-44">
                    <CarouselContent>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Image
                                                src={projects[index].photo}
                                                alt={projects[index].title}
                                                width={600}
                                                height={100}
                                                className='h-full w-full'
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <LineColor />
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
