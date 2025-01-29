import React from 'react';
import {getPayload} from "payload";
import config from "@payload-config"
import {Separator} from "@/components/ui/separator";
import Projectcard from "@/components/ui/projectcard";
import {unstable_cache} from "next/cache";


const queryDataBySlug = unstable_cache(async ({ slug }: { slug: string }) => {

    const parsedSlug = decodeURIComponent(slug)

    const payload = await getPayload({ config })

    // Query for skill
    //These extra unstable_cache can probably get removed
    const skillQuery = unstable_cache(async ()=> {
        return await payload.find({
            collection: 'skill',
            limit: 1,
            where: {
                title: {
                    equals: parsedSlug,
                },
            },
        })
    },
        [],
        {
            tags: ['skills']
        })
    
    const cached_skillQuery = await skillQuery();
    const skillData = cached_skillQuery.docs[0]
    
    // query for projects related to skill
    const projectsQuery = unstable_cache(async ()=> {
        return await payload.find({
            collection: 'project',
            limit: 4,
            where: {
                relatedSkills: {
                    equals:  skillData.id
                }
            }
        })
    },
        [],
        {
            tags: ['projects']
        })

    const cached_projectsQuery = await projectsQuery();
    const projectsData = cached_projectsQuery.docs

    return {skillData, projectsData}
},
    [],
    {
        tags: ['skills', 'projects'],
    })

async function Page({params} : any) {
    const {slug} = await params
    const data = await queryDataBySlug({
        slug,
    })
    return (
        <div className={"wrapper"}>
            <article>
                <h1 className={"text-5xl font-bold text-neonpink"}>{data.skillData.title}</h1>
                <Separator/>
                <main className="py-4 flex flex-col justify-between h-[85vh]">
                    <p>
                        {data.skillData.description ? data.skillData.description : "There is no description for this skill"}
                    </p>


                    <div className={"relatedprojects"}>
                        <p>Related projects</p>             
                        <Separator/>
                        <div className={"grid grid-cols-4 gap-4 py-4"}>
                            {
                                data.projectsData.map(project => (
                                    <Projectcard data={project} key={project.id}/>
                                ))
                            }
                        </div>

                    </div>
                </main>
            </article>
        </div>
    );
}

export default Page;