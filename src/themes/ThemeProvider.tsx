"use client";

import {useEffect} from "react";
import {readdirSync} from "node:fs";
import {readFileSync} from "fs";

const DEFAULT_THEME = "emerald";

export function ThemeProvider() {
    useEffect(() => {
        const theme = window.localStorage.getItem("theme") || "default";
        refreshTheme(theme);
    }, []);
    return <></>;
}

export function refreshTheme(theme: string) {
    fetch("/api/theme/" + theme + "/fetch")
        .then(res => res.json())
        .then(data => {
            if(!data) return;
            if(!data.cssLink) return;
            // Remove old CSS
            const oldLink = document.getElementById("theme-stylesheet");
            if(oldLink) {
                oldLink.remove();
            }
            //const cssLink = data.cssLink; // HOST/static/themes/THEME.css
            const cssLink = "/static/themes/" + theme.toLowerCase() + "/style.css"; // HOST/static/themes/THEME.css
            // Inject CSS
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = cssLink;
            link.type = "text/css";
            link.id = "theme-stylesheet";
            document.head.appendChild(link);
        });
}

export async function fetchTheme(theme: string): Promise<Object|null> {
    // Check if theme is found in the themes folder
    const themes = readdirSync("./public/static/themes");
    if(!themes.includes(theme.toLowerCase())) {
        theme = DEFAULT_THEME;
    }

    const folder = "./public/static/themes/" + theme.toLowerCase();
    const dir = readdirSync(folder);

    if(!dir || !dir.includes("theme.json") || !dir.includes("style.css")) {
        console.log("Theme " + theme + " is missing files");
        if(theme.toLowerCase() !== DEFAULT_THEME) {
            return await fetchTheme(DEFAULT_THEME);
        }
        return null;
    }
    const buffer = readFileSync(folder + "/theme.json");
    return JSON.parse(buffer.toString());
}