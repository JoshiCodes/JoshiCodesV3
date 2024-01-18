import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className={"bg-zinc-950 w-full py-2"}>
                <div className={""}>
                    <div className={"w-full flex flex-col sm:flex-row justify-center items-center text-zinc-500"}>
                        <ul className={""}>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                        </ul>
                        <ul className={""}>
                            <li>
                                <a href="https://github.com/JoshiCodes" className="text-zinc-600">
                                    <img src="/static/icons/github-mark-white.svg" className="h-6" alt="Github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}