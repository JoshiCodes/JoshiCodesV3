import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        <>
            <div className={"bg-zinc-950 w-full py-2"}>
                <div className={""}>
                    <div className={"w-full flex flex-col justify-center content-center items-center text-zinc-500"}>
                        <ul className={"flex flex-row justify-center content-center items-center gap-x-2"}>
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"#contact"}>Kontakt</Link>
                                </li>
                            </ul>
                        <ul className={"my-2 flex flex-row justify-center content-center items-center gap-x-2"}>
                            <li>
                                <a href="https://github.com/JoshiCodes" className="text-zinc-600">
                                    <Image src={"/static/icons/github-mark.svg"} alt="Github" className={"h-8"} width={32} height={32}/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:joshua@joshicodes.de" className="text-zinc-600">
                                    <EnvelopeIcon className={"h-8"} width={32} height={32} />
                                </a>
                            </li>
                        </ul>
                        <span>
                            &copy; {new Date().getFullYear()} Made by <a href="https://joshicodes.com" className="link">JoshiCodes</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}