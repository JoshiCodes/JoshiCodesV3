"use client"
import React, {useEffect} from "react";
import {ChevronDoubleDownIcon} from "@heroicons/react/24/solid";

export default function ScrollArrow() {
    const [isVisible, setIsVisible] = React.useState(true);

    // show arrow only if page is at top
    const toggleVisibility = () => {
        setIsVisible(!(window.pageYOffset > 300))
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    });

    return (
        isVisible ? <>
            <a href={"#projects"}>
                <div className={"fixed bottom-4 w-full text-white"}>
                    <div className={"animate-hop flex justify-center content-center items-center w-full"}>
                        <ChevronDoubleDownIcon className={"h-10 w-10"}/>
                    </div>
                </div>
            </a>
        </> : <></>
    )
}