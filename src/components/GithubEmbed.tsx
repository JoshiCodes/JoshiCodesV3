"use client";

export default function GithubEmbed(props: { repo: string, format: string }) {
    let repo = props.repo;
    const url = props.format.replace("%s", repo);
    return (
        <>
            <a href={"https://github.com/" + repo} target={"_blank"}>
                <img src={url} alt={repo} className={"h-42 md:h-72 rounded-lg transform transition-all duration-300 hover:scale-110"}/>
            </a>
        </>
    )
}