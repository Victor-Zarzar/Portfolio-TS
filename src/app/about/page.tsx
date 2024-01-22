'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { TbFileDownload } from "react-icons/tb";
import { FaBug } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  return (
    <>
      <div className="col-span-4">
        <div className="rounded-lg p-6">
          <Fade>
            <h2 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">About Me</h2>
          </Fade>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <Avatar className='w-40 h-40 md:w-72 md:h-72 bg-gray-300 rounded-full mb-4 shrink-0 mx-auto mt-14'>
            <AvatarImage src="profile.jpg" />
            <AvatarFallback>VZ</AvatarFallback>
          </Avatar>
          <p className="text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
            My first contact with programming was in 2009, using SQL-SERVER 2000 & My SQL technologies, creating, restoring and editing databases, and creating sites in PHP.
            Always looking to improve my knowledge daily, Im not afraid of the unknown, I try to evolve every day, new challenges are welcome.
            I love learning about new technologies and solving problems. In love with coffee, my vinyl records & Rock n Roll 🤘🏻.
          </p>
        </div>
        <div className="rounded-lg p-6 mt-20">
          <Fade>
            <h2 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Experience Tech</h2>
          </Fade>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-10">
              <FaBug className="w-5 h-4 md:w-8 md:h-6 text-gray-500" />
              <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl tracking-tighter font-bold">QA Tester - Freelancer - December 2022 - March 2023:</span>
            </div>
          </div>
          <div className="mt-3 mb-4 justify-center items-center text-center">
            <h1 className='text-[11px] md:text-sm text-blue-500 mt-5 font-bold'>Manual tests, Functional, Usability, Load, Localization, Accessibility, Regression.</h1>
            <br />
            <h2 className='text-[11px] md:text-sm text-blue-500 font-bold'>Tests Case Testing of web and mobile apps, Android/iOS.</h2>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-5">
              <FaDev className="w-5 h-4 md:w-8 md:h-6 text-gray-500" />
              <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl tracking-tighter font-bold">Software Developer JR - March 2023 - Present:</span>
            </div>
          </div>
          <div className="mt-3 mb-4 justify-center items-center text-center">
            <h1 className='text-[11px] md:text-sm text-blue-500 mt-5 font-bold'>Html, ReactJS, TypeScript, Tailwind CSS, NextJS, Dart, Flutter, Docker, Cypress.io, Xcode.</h1>
            <br />
            <h2 className='text-[11px] md:text-sm text-blue-500 font-bold'>Android Studio, Front-End Development, Swagger API, Postman API, Git, Gitlab, API Development.</h2>
            <br />
            <h3 className='text-[11px] md:text-sm text-blue-500 font-bold'>Agile Methodologies, Linux, macOS, Visual Studio Code.</h3>
          </div>
        </div>
      </div>
      <div className="rounded-lg p-6 mt-20">
        <Fade >
          <h2 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl  text-blue-500 text-center mt-14">Education</h2>
        </Fade>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <IoSchool className="w-5 h-4 md:w-8 md:h-6 text-gray-500" />
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Analysis and systems development - Ampli/SP</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg p-6 mt-20">
        <Fade>
          <h2 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Certifications</h2>
        </Fade>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">TypeScript from basic to advanced (with React, Express)</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f24a0556-951a-47d6-b5ad-da2a2aec098c.pdf" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Zero to Programmer in just 14 classes. Dart and Flutter</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-6f719ab9-4c08-4a91-8b85-f4a2a698d472.pdf" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Web Design Course: HTML5, CSS3 and JS + 5 Projects</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-36a57d72-6415-4299-b114-3de7bde61067.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Automated Testing with Cypress - Basic</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f23a5752-30a5-4f45-9e5d-284238eab07d.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Automated Testing + COMPLETE Software Testing Course</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9bea2790-1bf7-4ccd-90e9-8dd60f2a2f45.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Automated tests with Cypress (intermediate)</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-8ab2c223-1f55-4e01-973e-90cb243a2a67.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">SwiftUI Masterclass 2023 - iOS App Development & Swift</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b69979d5-eb7a-489c-ac9b-5edf5460fdb2.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <span className="text-xs leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">iOS 12 Apps with Swift 5 and Xcode 10 - Basic</span>
            <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-35f871a3-03a6-4ff1-8461-40a467676d3a.pdf?trk=public_profile_see-credential" target="_blank">
              <TbFileDownload className='w-5 h-4 md:w-8 md:h-6 text-gray-500' />
            </Link>
          </div>
        </div>
        <div className="rounded-lg p-6 mt-20">
          <Fade>
            <h2 className="title-about mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-blue-500 text-center mt-14">Languages</h2>
          </Fade>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-10">
              <Image
                src="/us.png"
                alt="us"
                width={20}
                height={20}
                priority
                className='h-5 w-5 md:w-7 md:h-7 lg:w-7 lg:h-7 mr-1'
              />
              <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">EN - Basic</span>
            </div>
          </div>
          <div className="flex mb-20">
            <div className="flex items-center mx-auto mt-5">
              <Image
                src="/br.png"
                alt="br"
                width={20}
                height={20}
                priority
                className='h-5 w-5 md:w-7 md:h-7 lg:w-7 lg:h-7 mr-1'
              />
              <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">PT-BR - Native Speaker</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}