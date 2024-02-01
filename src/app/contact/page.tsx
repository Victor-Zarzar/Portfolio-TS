'use client'
import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { FaSquareXTwitter, FaGithub, FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

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
                <div className="absolute top-10 md:top-24">
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
                        <Button type='submit' className='inline-block px-12 h-12 w-auto py-3 text-sm font-medium border-purple-900 rounded active:text-violet-500 bg-transparent text-violet-700 hover:text-white hover:bg-purple-900 border focus:outline-none focus:ring'>Submit</Button>
                    </form>
                </div>
            </div>
            <div className="flex mx-auto mt-0 mb-20 space-x-3 md:space-x-5 text-center text-white justify-center items-center">
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
        </>
    );
};

export default ContactMe;