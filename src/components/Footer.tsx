import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className={"bg-zinc-950 w-full py-2"}>
                <div className={""}>
                    <div className={"w-full flex flex-col lg:flex-row justify-center items-center text-zinc-500"}>
                        <div className={"grid grid-cols-2"}>
                            <ul className={""}>
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className={""}>
                            <li>
                                <a href="https://github.com/JoshiCodes" className="text-zinc-600">
                                    <Image src={"/static/icons/github-mark.svg"} alt="Github" className={"h-8"} width={32} height={32}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}