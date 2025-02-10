"use client"

import React from 'react';
import {Project, Skill} from "@/payload-types";
import SkillTagButton from "@/components/ui/skillTagButton";
import Projectcard from "@/components/ui/projectcard";

function ProjectPanel(props) {
    
    let skills: Skill[] = props.skills;
    let projects: Project[] = props.projects;
    
    const [shownProjects, setShownProjects] = React.useState<Project[]>(projects);
    //let shownProjects: Project[] = projects;

    function filterProjects(name: string) {
        const filteredList = projects.filter(project => project.relatedSkills.some(skill => skill.title == name))
        setShownProjects(filteredList);
    }
    
    function resetProjectsList(){
        setShownProjects(projects);
    }
    
    return (
        <>
            <div className={"skills-menu flex justify-center items-center py-5"}>
                <div className={"flex gap-5"}>
                    {
                        skills && skills.length > 0 && (
                            <>
                                {
                                    skills.map((result: Skill, index) => (
                                        <SkillTagButton name={result.title} key={index} onClick={()=> {
                                            filterProjects(result.title);
                                        }}/>
                                    ))
                                }
                            </>
                        )
                    }
                    <SkillTagButton name={"Reset"} onClick={resetProjectsList}/>
                </div>
            </div>
            <div className={"wrapper projects-list grid grid-cols-4 gap-4 py-4"}>
                {
                    shownProjects.map((result, index) => {

                        return (
                            <Projectcard data={result} key={index}/>
                        )
                    })
                }
            </div>
        </>
    );
}

export default ProjectPanel;