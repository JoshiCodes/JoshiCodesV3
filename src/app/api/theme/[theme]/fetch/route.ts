import {NextRequest} from "next/server";
import {fetchTheme} from "@/themes/ThemeFetch";

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
    const host = protocol + "://" + (request.headers.get("host") || "http://localhost:3000");
    const cssLink = host + "/static/themes/" + newName.toLowerCase() + "/style.css";

    return Response.json(
        {
            valid: true,
            theme: themeJson,
            cssLink: cssLink
        }
    )

}