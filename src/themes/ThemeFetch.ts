"use server";
import {readdirSync, readFileSync} from "node:fs";

const DEFAULT_THEME: string = "emerald";

export async function fetchTheme(theme: string): Promise<Object|null> {
    // Check if theme is found in the themes folder
    const themes = readdirSync("./public/static/themes");
    if(!themes.includes(theme)) {
        theme = DEFAULT_THEME;
    }

    console.log("Fetching theme: ", theme);
    const folder = "./public/static/themes/" + theme;
    const dir = readdirSync(folder);

    if(!dir || !dir.includes("theme.json") || !dir.includes("style.css")) {
        console.log("A theme is missing some files!");
        if(theme !== DEFAULT_THEME) {
            return await fetchTheme(DEFAULT_THEME);
        }
        return null;
    }
    const buffer = readFileSync(folder + "/theme.json");
    return JSON.parse(buffer.toString());
}