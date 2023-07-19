import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/hermetica.svg';
import swapIcon from '../../../public/swap.svg';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    const navLinks = [
        {
            title: 'Vault',
            path: '/',
        },
        {
            title: 'Analytics',
            path: '/analytics',
        },
        {
            title: 'Portfolio',
            path: '',
        },
    ];

    return (
        <nav className="fixed w-full h-20 p-16 pb-10 bg-transparent">
            <div className="flex justify-start items-center w-full h-full px-6 2xl:px-16">
                <Image src={logo} width="250" height="250" />
                <div className="flex flex-grow justify-between items-center">
                    <ul className="hidden md:flex">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <Link
                                    href={link.path}
                                    className={`ml-10 text-sn hover:font-semibold pb-1.5 ${router.pathname === link.path
                                            ? 'border-b-2 font-semibold'
                                            : ''
                                        }`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                        <li btc-color>
                            <Link
                                href="/"
                                className="ml-10 text-sn hover:font-semibold pb-1.5 btc-color flex"
                            >
                                <Image
                                    priority
                                    src={swapIcon}
                                    alt="Swap Icon"
                                    className="mr-1.5"
                                />
                                Bridge
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <button className="connect-button">Connext Wallet</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;