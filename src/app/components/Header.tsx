'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Slide } from "react-awesome-reveal";
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <div className="py-8 z-10 font-serif mt-40 md:mt-5">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
                <div className="w-full md:w-1/2 py-8">
                    <Slide>
                        <h1 className="text-purple-900 text-2xl md:text-3xl lg:text-4xl font-semibold leading-none tracking-tighter">
                            Welcome to <p className="text-blue-500">My Portfolio, </p> I´am Web/Mobile Developer🖖🏻.
                        </h1>
                    </Slide>
                </div>
                <div className="w-full md:w-1/2 py-8 text-right">
                    <Image
                        src="/itdeveloper.gif"
                        alt="itdeveloper"
                        priority
                        width={200}
                        height={100}
                        className='h-40 w-40 md:h-60 md:w-60 lg:h-60 lg:w-60 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-1 inline-block'
                    />
                </div>
            </div>
            <div className="container-button relative inline-flex group ml-6 md:ml-0 lg:ml-20 xl:ml-36 2xl:ml-96 space-x-5">
                <Link href="https://github.com/Victor-Zarzar" target="_blank">
                    <Button type='button' className='inline-block px-12 py-3 text-sm font-medium border-purple-900 rounded active:text-violet-500 bg-transparent text-violet-700 hover:text-white hover:bg-purple-900 border focus:outline-none focus:ring'>GitHub</Button>
                </Link>
                <Link href="https://www.linkedin.com/in/victorzarzar" target="_blank">
                    <Button type='button' className='inline-block px-12 py-3 text-sm font-medium border-purple-900 rounded active:text-violet-500 bg-transparent text-violet-700 hover:text-white hover:bg-purple-900 border focus:outline-none focus:ring'>Linkedin</Button>
                </Link>
            </div>
        </div>
    );
}
