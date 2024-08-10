import {NextRequest} from "next/server";
import {readdirSync, readFileSync} from "node:fs";
import {DEFAULT_THEME} from "@/themes/ThemeProvider";

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
    const protocol = request.headers.get("x-forwarded-proto") || request.nextUrl.protocol || "http";
    const host = protocol + "://" + (request.headers.get("host") || "http://localhost:3001");
    const cssLink = host + "/static/themes/" + newName.toLowerCase() + "/style.css";

    return Response.json(
        {
            valid: true,
            theme: themeJson,
            cssLink: cssLink
        }
    )

}

async function fetchTheme(theme: string): Promise<Object|null> {
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