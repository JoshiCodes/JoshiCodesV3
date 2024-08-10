"use client";

import {useEffect, useState} from "react";
import Theme from "@/themes/Theme";
import {refreshTheme} from "@/themes/ThemeProvider";

export default function ThemeSwitcher() {

    const [currentTheme, setCurrentTheme] = useState<Theme|null>(null);
    const [themes, setThemes] = useState<Theme[]>([]);
    const [themeSwitcherOpen, setThemeSwitcherOpen] = useState<boolean>(false);

    useEffect(() => {
        const currentThemeName = typeof localStorage !== "undefined" ? (localStorage.getItem("theme") || "default") : "default";
        fetch("/api/theme/" + currentThemeName + "/fetch").then(res => res.json()).then(theme => {
            if(!theme) return;
            if(!theme.valid) return;
            if(!theme.theme) return;
            setCurrentTheme(theme.theme);
        });
        fetch("/api/theme/themes/").then(res => res.json()).then(themes => {
            if(!themes) return;
            if(!themes.valid) return;
            if(!themes.themes) return;
            if(!themes.themeData) return;
            setThemes(themes.themeData);
        });
    }, []);

    // add event listener to mouse click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if(!document.getElementById("navbar-theme-switcher-list")) return;
            if(!document.getElementById("navbar-theme-switcher")) return;
            if(!document.getElementById("navbar-theme-switcher")?.contains(e.target as Node)) {
                if(!document.getElementById("navbar-theme-switcher-list")?.contains(e.target as Node)) {
                    setThemeSwitcherOpen(false);
                }
            }
        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, []);

    function selectTheme(themeName: string) {
        return () => {
            fetch("/api/theme/" + themeName + "/fetch").then(res => res.json()).then(theme => {
                if(!theme) return;
                if(!theme.valid) return;
                if(!theme.theme) return;
                setCurrentTheme(theme.theme);
                if(typeof localStorage !== "undefined") {
                    localStorage.setItem("theme", themeName);
                    refreshTheme(themeName);
                }
                // close the theme switcher
                setThemeSwitcherOpen(false);
            });
        }
    }

    return (
        <>
            <div id={"navbar-theme-switcher"} className={"mr-2"}>
                <button onClick={() => setThemeSwitcherOpen(!themeSwitcherOpen)}>
                    {currentTheme !== null ? <ThemePreview {...currentTheme} key={"current_theme"} /> : null}
                </button>
                <div id={"navbar-theme-switcher-list"}
                     className={"absolute top-10 right-0 bg-zinc-900 rounded-lg p-2 mt-10 " + (themeSwitcherOpen ? "block" : "hidden")}>
                    {
                        themes.map((theme, index) => {
                            return <>
                                <button onClick={selectTheme(theme.name)} key={"theme_" + theme.name}>
                                    <ThemePreview {...theme} key={"theme_prevw_" + theme.name} />
                                </button>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
}

function ThemePreview(theme: Theme) {
    return (
        <>
            <div className={"bg-zinc-950 hover:bg-zinc-800 rounded-xl p-2"}>
                <div className={"rounded-lg h-10 w-20 bg-gradient-to-tr " + theme.displayColors.join(" ")}></div>
            </div>
        </>
    )
}