import TypeWriter from "@/components/TypeWriter";
import BackgroundGradient from "@/components/BackgroundGradient";
import React from "react";
import Navbar from "@/components/Navbar";

export default function Home() {

    return (
        <>
            <Navbar />
            <div className={"w-full h-screen flex justify-center content-center items-center"}>
                <div className={"flex flex-col"}>
                    <div className={"flex flex-col sm:flex-row gap-x-4 text-6xl font-semibold text-white z-2"}>
                        <span>Hey, Ich bin</span> <span className={"main-text-highlight font-semibold"}>Joshua</span>
                    </div>
                    <div id={"text-desc-container"} className={"mt-1"}>
                        <TypeWriter/>
                    </div>
                </div>
                <BackgroundGradient from={"main-bg-from"} via={"main-bg-via"} to={"main-bg-to"}/>
            </div>
        </>
    )
}
