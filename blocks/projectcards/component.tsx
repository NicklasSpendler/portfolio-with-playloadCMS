import React from 'react';
import Projectcard from "@/components/ui/projectcard";
import {getPayload} from "payload";
import config from '@payload-config'
import {Project} from "@/payload-types";

const payload = await getPayload({config})

const projects = await payload.find({
    collection:'project',
})

function ProjectCards() {
    return (
        <div className="grid grid-cols-4 gap-4 py-4">
            {
                projects.docs.map((result, index) => {
                    console.log(result)
                    return (
                        <Projectcard data={result} key={index}/>
                    )
                })
            }
{/*            <Projectcard projectname={"hello"}/>
            <Projectcard projectname={"hello"}/>
            <Projectcard projectname={"hello"}/>
            <Projectcard projectname={"hello"}/>*/}
        </div>
    );
}

export default ProjectCards; 