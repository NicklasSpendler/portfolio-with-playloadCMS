import React from 'react';
import {getPayload, PaginatedDocs} from "payload";
import config from "@payload-config";
import {unstable_cache} from "next/cache";
import {Skill} from "@/payload-types";
import SkillTagLink from "@/components/ui/skillTagLink";
import {Separator} from "@/components/ui/separator";
import {RenderBlocks} from "@/blocks/RenderBlocks";




const projectQuery: ({slug}: { slug: string }) => Promise<PaginatedDocs<any>> = unstable_cache(async ({ slug }: { slug: string }) => {
        const parsedSlug = decodeURIComponent(slug)

        const payload = await getPayload({ config })
    
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

async function Page({params}) {
    const {slug} = await params

    const data = await projectQuery({
        slug,
    }).then(res => res.docs[0]);
    
    return (
        <div className={"wrapper"}>
            {data.showname ? (
                <h1 className={"text-3xl font-bold capitalize"}>{data.projectname}</h1>
            ): (
                <></>
            )}
            <article className={"flex justify-between flex-col"}>
                <section className={"project-content min-h-[80vh] project-text"}>
                    <RenderBlocks blocks={data.layout}/>
                </section>
                <section className={"pt-1.5"}>
                    <p>Related skills</p>
                    <Separator/>
                    <div className={"related-skills flex gap-2 pt-1"}>
                    {
                        data.relatedSkills.map((skill: Skill, index: number) => (
                            <SkillTagLink name={skill.title} key={index}/>
                        ))
                    }
                    </div>
                </section>
            </article>

        </div>
    );
}

export default Page;