import {readdirSync} from "node:fs";
import {readFileSync} from "fs";
import {NextRequest} from "next/server";

const DEFAULT_THEME = "emerald";

export async function GET(request: NextRequest, { params } : { params: { theme: string } }) {

    let { theme } = params;

    const themeJson = await fetchTheme(theme) as any;
    if(!themeJson || !themeJson.name) {
        return Response.json(
            {
                valid: false,
                error: 'Invalid theme'
            }
        )
    }

    const newName = themeJson.name;
    const cssLink = request.nextUrl.protocol + "//" + request.nextUrl.host + "/static/themes/" + newName.toLowerCase() + "/style.css";

    return Response.json(
        {
            valid: true,
            theme: themeJson,
            cssLink: cssLink
        }
    )

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