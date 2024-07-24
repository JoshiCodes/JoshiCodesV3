"use client";

import Theme from "@/themes/Theme";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

export default function Navbar() {

    return (
        <>
            <div id={"navbar"}
                 className={"py-3 lg:py-5 px-4 h-full w-full flex justify-between content-center items-center sticky top-0 z-10 bg-black bg-opacity-10"}>
                <Link href={"/"} className={"text-3xl text-white font-bold"}>JoshiCodes.de</Link>
                <div className={"flex flex-row h-full justify-center gap-x-4"}>
                    <ThemeSwitcher />
                    <div id={"navbar-links"}>
                        <a>Kontakt</a>
                    </div>
                </div>
            </div>
        </>
    )
}
