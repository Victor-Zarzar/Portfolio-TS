'use client'
import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button"

type Props = {};

const ContactMe = (_props: Props) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const form: any = useRef();
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "portfolio",
                "template_0xdiby9",
                form.current,
                "LJ2tmRAE4H8BfsKr4",
            )
            .then(
                (_result) => {
                    form.current
                    toast.success("Thank you for contacting me! I will get back to you soon 👋");
                },
                (_error) => {
                    toast.error("Something went wrong");
                },
            );
    };

    const nameInputRef: any = useRef();
    const emailInputRef: any = useRef();
    const subjectInputRef: any = useRef();
    const messageInputRef: any = useRef();
    const focusInput = (inputRef: any) => {
        inputRef.current.focus();
    };

    return (
        <>
            <div className="h-screen mt-14 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <div className="absolute top-24">
                    <Fade>
                        <h3 className="title-skills font-extrabold mb-4 text-3xl md:text-4xl leading-10 tracking-tight text-blue-500 text-center cursor-default">
                            Contact Me ;)
                        </h3>
                    </Fade>
                    <div className="w-32 h-1 rounded-full bg-indigo-500 flex mt-6 mx-auto"></div>
                </div>
                <div className="flex flex-col space-y-10 mt-10">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2 justify-center">
                            <PhoneIcon className="text-blue-500 h-7 w-7" />
                            <p className="text-base md:text-2xl lg:text-2xl text-indigo-500">+55 (51) 9.8618-1044</p>
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <MapPinIcon className="text-blue-500 h-7 w-7" />
                            <p className="text-base md:text-2xl lg:text-2xl text-indigo-500">Novo Hamburgo, RS</p>
                            <Image
                                src="/br.png"
                                alt="br"
                                width={20}
                                height={20}
                                priority
                                className='h-5 w-5 md:w-7 md:h-7 lg:w-7 lg:h-7 mr-1'
                            />
                        </div>
                        <div className="flex items-center space-x-2 justify-center">
                            <EnvelopeIcon className="text-blue-500 h-7 w-7" />
                            <p className="text-base md:text-2xl lg:text-2xl text-indigo-500">victorzarzar58@gmail.com</p>
                        </div>
                    </div>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col space-y-2 w-fit mx-auto">
                        <motion.div
                            initial={{
                                x: -100,
                            }}
                            whileInView={{
                                x: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            className="flex space-x-1 sm:space-x-2 sm:justify-between">
                            <input
                                placeholder="Name"
                                className="contactInput "
                                type="text"
                                style={{ width: "50%" }}
                                name="name"
                                required
                                ref={nameInputRef}
                                onClick={() => focusInput(nameInputRef)}
                                autoComplete="name" />
                            <input
                                placeholder="Email"
                                className="contactInput"
                                type="email"
                                style={{ width: "50%" }}
                                name="email"
                                required
                                ref={emailInputRef}
                                onClick={() => focusInput(emailInputRef)}
                                autoComplete="email" />
                        </motion.div>
                        <motion.input
                            initial={{
                                x: 100,
                                opacity: 0,
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            placeholder="Subject"
                            className="contactInput"
                            type="text"
                            name="subject"
                            required
                            ref={subjectInputRef}
                            onClick={() => focusInput(subjectInputRef)} />
                        <motion.textarea
                            initial={{
                                x: -100,
                                opacity: 0,
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            placeholder="Message"
                            className="contactInput"
                            name="message"
                            required
                            ref={messageInputRef}
                            onClick={() => focusInput(messageInputRef)} />
                        <div className="container-button relative inline-flex">
                            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                            <Button type='submit' className='relative mx-auto w-[23rem] md:w-[27rem] text-[10px] md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 hover:bg-neutral-700 font-pj rounded-lg'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mx-auto mt-0 mb-8 text-center text-white items-center">
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
            <div className="py-8 z-10 font-serif mt-14 mb-10 flex items-center justify-center">
                <div className="container-button relative inline-flex group max-w-6xl mb-2">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                    <Link href="/">
                    <Button type='button' className='relative inline-flex items-center justify-center h-[2.8rem] w-[8rem] md:w-[10rem] text-[10px] md:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 hover:bg-neutral-700 font-pj rounded-lg'>Back To Home Page</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ContactMe;