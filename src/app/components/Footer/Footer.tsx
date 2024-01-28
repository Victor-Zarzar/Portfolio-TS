import React from 'react';
import clsx from 'clsx';

interface FooterProps {
    theme: string;
}

export default function Footer({ theme }: FooterProps) {
    const currentYear = new Date().getFullYear();

    const footerClasses = clsx({
        'bg-gray-950': theme === 'light',
        'bg-gray-300': theme === 'dark',
    });

    const TextColor = clsx("text-sm md:text-lg font-normal hover:underline mr-4 md:mr-6", {
        'text-gray-300': theme === 'light',
        'text-gray-500': theme === 'dark',
    })

    return (
        <div className={footerClasses}>
            <footer className="mx-auto flex max-w-4xl flex-row h-20 md:h-24 pb-10 p-8">
                <ul className="flex items-center mx-auto flex-wrap mb-6 md:mb-0">
                    <li>
                        <p className={TextColor}>
                            © {currentYear} Victor Zarzar. All rights reserved.
                        </p>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
