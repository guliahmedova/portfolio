"use client";
import menu from '@/assets/images/menu.svg';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="bg-space_cadet shadow-lg text-white fixed top-0 left-0 right-0 z-10 text-lg">
            <div className="px-10 py-4">
                <button className="lg:w-10 lg:h-10 w-9 h-9 cursor-pointer lg:hidden bg-slate-600 rounded-md block ml-auto"
                    onClick={() => setOpenMenu(prevState => !prevState)}
                >
                    <Image src={menu} alt="menu" />
                </button>

                <div className={`lg:block ${openMenu ? '' : 'hidden'} w-full`}>
                    <div className="flex justify-around items-center lg:flex-row lg:gap-0 flex-col gap-6 w-full">
                        <Link className="hover:text-brilliant_rose transition-all ease-in-out delay-200" href="#home">
                            Home
                        </Link>
                        <Link className="hover:text-brilliant_rose transition-all ease-in-out delay-200" href="#about">
                            About
                        </Link>
                        <Link className="hover:text-brilliant_rose transition-all ease-in-out delay-200" href="#work">
                            Projects
                        </Link>
                        <Link className="hover:text-brilliant_rose transition-all ease-in-out delay-200" href="#skills">
                            Skills
                        </Link>
                        <Link className="hover:text-brilliant_rose transition-all ease-in-out delay-200" href="#contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
