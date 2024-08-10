import {NextRequest} from "next/server";
import {fetchTheme} from "@/themes/ThemeProvider";

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