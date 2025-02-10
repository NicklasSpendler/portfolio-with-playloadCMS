import React from 'react';
import {Project, Skill} from "@/payload-types";
import {getProjects, getSkills} from "@/lib/queries";
import ProjectPanel from "@/components/ProjectPanel";

interface dataType {
    skills: Skill[],
    projects: Project[]
}

async function Page() {
    const skills = await getSkills();
    
    const projects = await getProjects();
    
    let data: dataType =  {
        skills: skills.docs,
        projects: projects.docs,
    };
    
    return (
        <article>
            <h1 className={"flex justify-center text-6xl text-neonpink"}>Skills</h1>
            <h2 className={"flex justify-center text-sm text-[#b91372]"}>These are my skills that I have accumulated throughout my various projects</h2>
            <ProjectPanel skills={data.skills} projects={data.projects} />
        </article>
    );
}

export default Page;