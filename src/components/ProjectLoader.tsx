"use client"

import GithubEmbed from "@/components/GithubEmbed";
import {useEffect, useState} from "react";

export default function ProjectLoader() {
    const [projects, setProjects] = useState<JSX.Element[]>([]);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const protocol = window.location.protocol;
        const host = window.location.host;
        const projectsFileUrl = protocol + "//" + host + "/static/projects.json";
        const projectsJson = fetch(projectsFileUrl).then(res => res.json()).then(json => {
            return json;
        });
        projectsJson.then(json => {
            if(!json) return;
            if(!json.github_projects) return;
            return json.github_projects;
        }).then(projects => {
            projectsJson.then(json => {
                if(!json) return;
                if(!json.github_project_embed_format) return;
                return json.github_project_embed_format;
            }).then(form => {
                let githubEmbeds = [];
                let i = 0;
                for (const project of projects) {
                    githubEmbeds.push(<GithubEmbed repo={project} format={form} key={"githb_prjkt_" + i}/>);
                    i++;
                }
                setProjects(githubEmbeds);
            });
        });
    });
    return (
        <>
            <div className={"mt-2 grid justify-center content-center items-center md:grid-cols-3 gap-y-4 md:gap-y-8 mx-5 md:m-12"}>
                {projects}
            </div>
        </>
    )
}