import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Experience() {
    return (
        <div className="rounded-lg p-6 mt-20">
            <Fade>
                <h1 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Experience Tech</h1>
            </Fade>
            <div className="flex mt-6 justify-center">
                <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col mx-auto mt-16">
                    <div className="relative ml-2 border-l-[1px] border-l-neutral-700 pb-4 pl-4">
                        <div className="absolute -left-[7px] top-0 h-[14px] w-[14px] rounded-full bg-purple-900" />
                        <div className="flex flex-col">
                            <span className="select-none text-md md:text-xl text-zinc-500">
                                March 2023 - Present
                            </span>
                            <div className="flex flex-col">
                                <h1 className="select-none text-md leading-relaxed text-purple-900 md:text-2xl lg:text-2xl tracking-tighter font-bold">
                                    Front-End Developer JR
                                </h1>
                                <span className="select-none text-md md:text-xl leading-relaxed text-purple-900 tracking-tighter font-bold">
                                    XLabs Security
                                </span>
                                <ul className="pl-0 mt-1 text-blue-500 select-none text-[11px] md:text-lg font-bold">
                                    <li>Html, ReactJS, TypeScript, Tailwind CSS, NextJS, Dart, Flutter, Docker, Cypress.io, Xcode.</li>
                                    <li>Android Studio, Front-End Development, Swagger API, Postman API, Git, Gitlab, API Development.</li>
                                </ul>
                                <ul className="pl-0 mt-1 text-blue-500 select-none text-[11px] md:text-lg font-bold">
                                    <li>Agile Methodologies, Trello, Linux, macOS, Visual Studio Code.</li>
                                </ul>
                            </div>
                            <span className="select-none text-md md:text-xl text-gray-500 mt-1">
                                São Leopoldo, RS, Brazil - Remote
                            </span>
                        </div>
                    </div>
                    <div className="relative ml-2 border-l-[1px] border-l-neutral-700 pl-4">
                        <div className="absolute -left-[7px] top-0 h-[12px] w-[14px] rounded-full bg-purple-900" />
                        <div className="flex flex-col">
                            <span className="select-none text-md md:text-xl text-gray-500">
                                December 2022 - March 2023
                            </span>
                            <div className="flex flex-col">
                                <h1 className="select-none text-md leading-relaxed text-purple-900 md:text-2xl lg:text-2xl tracking-tighter font-bold">
                                    QA Tester
                                </h1>
                                <span className="select-none text-md md:text-xl leading-relaxed text-purple-900 tracking-tighter font-bold">
                                    Freelance
                                </span>
                                <ul className="pl-0 mt-1 text-blue-500 select-none text-[11px] md:text-lg font-bold">
                                    <li>Manual tests: Functional, Usability, Load, Localization, Accessibility, Regression.</li>
                                    <li>Test Case Testing of web and mobile apps, Android/iOS.</li>
                                </ul>
                            </div>
                            <span className="select-none text-md md:text-xl text-gray-500 mt-1">
                                Novo Hamburgo, RS, Brazil - Remote
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
