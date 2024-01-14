"use client";

import {useEffect} from "react";

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
            const cssLink = data.cssLink; // HOST/static/themes/THEME.css
            // Inject CSS
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = cssLink;
            link.type = "text/css";
            link.id = "theme-stylesheet";
            document.head.appendChild(link);
        });
}