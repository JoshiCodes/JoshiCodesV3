"use client"

import {useEffect, useState} from "react";
import {useOnClickOutside} from "next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside";

const text = [
    "Java",
    "Python",
    "JavaScript / NodeJS",
    "TypeScript",
    "Web Development"
]

export default function TypeWriter() {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        if(typeof window === "undefined") return;
        if(index === text.length) {
            setIndex(0);
        }
        const txt = text[index];
        const target = document.getElementById("title-desc");
        if(target) {
            target.innerHTML = " ";
            let i = 0;
            let speed = 75;
            const typeWriter = () => {
                if(!txt) return;
                if (i < txt.length) {
                    target.innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    // End of text
                    // Wait 2.5 seconds
                    // and Remove text (with typewriter effect)
                    let j = txt.length;
                    const removeText = () => {
                        if (j >= 0) {
                            target.innerHTML = target.innerHTML.slice(0, -1);
                            j--;
                            setTimeout(removeText, speed);
                        } else {
                            // End of text
                            setIndex(index + 1);
                        }
                    }
                    setTimeout(removeText, 2500);
                }
            }
            typeWriter();
        }
    }, [index]);

    return (
        <>
            <span id={"title-desc"} className={"text-white"}></span>
        </>
    )
}
