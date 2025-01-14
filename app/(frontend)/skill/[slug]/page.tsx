import React, {cache} from 'react';
import {getPayload} from "payload";
import config from "@payload-config"
import {Separator} from "@/components/ui/separator";
import Projectcard from "@/components/ui/projectcard";


const queryDataBySlug = cache(async ({ slug }: { slug: string }) => {

    const parsedSlug = decodeURIComponent(slug)

    const payload = await getPayload({ config })

    const skillQuery = await payload.find({
        collection: 'skill',
        limit: 1,
        where: {
            title: {
                equals: parsedSlug,
            },
        },
    })
    const skillData = skillQuery.docs[0]
    
    const projectsQuery = await payload.find({
        collection: 'project',
        limit: 4,
        where: {
            relatedskills: {
                equals:  skillData.id
            }
        }
    })
    const projectsData = projectsQuery.docs

    return {skillData, projectsData}
})

async function Page({params} : {params: {slug: string}}) {
    const {slug} = await params
    const data = await queryDataBySlug({
        slug,
    })
    console.log(data)
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