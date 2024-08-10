import {readdirSync} from "node:fs";
import {fetchTheme} from "@/themes/ThemeProvider";

export async function GET(request: Request) {
    // Get all theme names from the themes folder.
    // Folder: /public/static/themes/

    const themes = readdirSync("./public/static/themes")

    if (!themes || themes.length === 0) {
        return Response.json(
            {
                "valid": false,
                "error": "The themes folder does not exist!"
            },
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
    const themeNames = [] as string[];
    for (const theme of themes) {
        // Check if the theme folder contains a theme.json file.
        // If so, add it to the themes.
        const dir = readdirSync("./public/static/themes/" + theme);
        if (dir.includes("theme.json") && dir.includes("style.css") && !themeNames.includes(theme)) {
            themeNames.push(theme);
        }
    }
    const themesData = [] as Object[]; // Array of theme objects
    for (const theme of themeNames) {
        const data = await fetchTheme(theme as string);
        if (data) {
            themesData.push(data);
        }
    }
    return Response.json(
        {
            "valid": true,
            "themes": themeNames,
            "themeData": themesData
        },
        {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}