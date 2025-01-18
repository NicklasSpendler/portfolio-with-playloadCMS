import React from 'react';
import Skilltag from "@/components/ui/skilltag";
import {Skill} from "@/payload-types";
import {getSkills} from "@/lib/queries";



async function Page() {
    
    
    
/*    const skills = await payload.find({
        collection: 'skill',
    })*/
    
    const skills = await getSkills();
    
    const data: Skill[] =  skills.docs;

    return (
        <article>
            <h1 className={"flex justify-center text-6xl text-neonpink"}>Skills</h1>
            <h2 className={"flex justify-center text-sm text-[#b91372]"}>These are my skills that I have accumulated throughout my various projects</h2>
            <div className={"flex justify-center items-center py-5"}>
                <div className={"flex gap-5"}>
                    {
                        data && data.length > 0 && (
                            <>
                                {
                                    data.map((result: Skill, index) => (
                                        <Skilltag name={result.title} key={index}/>
                                        ))
                                }
                            </>
                        )
                    }

                    
                </div>
            </div>
        </article>
    );
}

export default Page;