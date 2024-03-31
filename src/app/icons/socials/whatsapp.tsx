import Image from 'next/image'
import React from 'react';

export default function Whatsapp() {
    return (
        <Image
            src="/whatsapp.gif"
            alt="itdeveloper"
            priority
            width={100}
            height={100}
            className='w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center'
        />
    )
}
