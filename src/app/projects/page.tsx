'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image';

type Project = {
    title: string;
    description: string;
    photo: string;
};

export default function ProjectsPage() {

    const musicplayer = '/musicplayer.jpg';
    const portfolio = '/portfolio.png';
    const mario = '/mario.png';
    const gpt = '/gpt.png';

    const projects: Project[] = [
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
                <Carousel className="w-full max-w-[16rem] md:max-w-2xl lg:max-w-4xl mx-auto mb-32">
                    <CarouselContent className="-ml-1">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Image
                                                src={project.photo}
                                                alt={project.title}
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
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
