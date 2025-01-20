import React, {cache} from 'react';
import {getPayload, PaginatedDocs} from "payload";
import config from "@payload-config";
import {unstable_cache} from "next/cache";
import {Project, Skill} from "@/payload-types";
import Skilltag from "@/components/ui/skilltag";
import {Separator} from "@/components/ui/separator";


const queryDataBySlug = cache(async ({ slug }: { slug: string }) => {
    const parsedSlug = decodeURIComponent(slug)

    const payload = await getPayload({ config })
    
    const projectQuery: () => Promise<PaginatedDocs<Project>> = unstable_cache(async () => {
        return await payload.find({
            collection: 'project',
            limit: 1,
            where: {
                projectname: {
                    equals: parsedSlug
                }
            }
        })
    },
        [],
        {
            tags: ['projects']
        })
    
    return projectQuery().then(res => res.docs[0]);
})

async function Page({params}) {

    const {slug} = await params

    const data = await queryDataBySlug({
        slug,
    })
    
    console.log(data)
    
    return (
        <div className={"wrapper"}>
            <h1 className={"text-3xl font-bold capitalize"}>{data.projectname}</h1>
            <article className={"flex justify-between flex-col"}>
                <section className={"project-content h-[80vh]"}>
                    <p>Lorem ipsum</p>
                </section>
                <section className={""}>
                    <p>Related skills</p>
                    <Separator/>
                    <div className={"related-skills flex gap-2 pt-1"}>
                    {
                        data.relatedSkills.map((skill: Skill, index) => (
                            <>
                                <Skilltag name={skill.title} key={index}/>
                            </>
                        ))
                    }
                    </div>
                </section>
            </article>

        </div>
    );
}

export default Page;