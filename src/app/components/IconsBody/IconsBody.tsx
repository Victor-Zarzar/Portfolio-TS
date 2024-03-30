import React from 'react'
import Link from 'next/link';
import { FaSquareXTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

export default function IconsBody() {
    return (
        <div className="flex mx-auto mt-28 mb-20 space-x-2 md:space-x-5 text-center text-white justify-center items-center">
            <Link href={'https://api.whatsapp.com/send?phone=5551986181044'} target="_blank">
                <FaWhatsapp className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
            </Link>
            <Link href={'https://github.com/Victor-Zarzar'} target="_blank">
                <FaGithub className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
            </Link>
            <Link href={'https://www.linkedin.com/in/victorzarzar'} target="_blank">
                <FaLinkedin className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
            </Link>
            <Link href={'https://facebook.com/victorzarzar58'} target="_blank">
                <IoLogoFacebook className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
            </Link>
            <Link href={'https://instagram.com/victorzarzar7'} target="_blank">
                <FaInstagram className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
            </Link>
            <Link href={'https://twitter.com/victorzarzar1'} target="_blank">
                <FaSquareXTwitter className='h-10 w-10 md:h-12 md:w-12 text-gray-500 hover:text-gray-400' />
            </Link>
        </div>
    )
}
