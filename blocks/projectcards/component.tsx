import React from 'react';
import Projectcard from "@/components/ui/projectcard";
import {getPayload} from "payload";
import config from '@payload-config'
import {getProjects} from "@/lib/queries";



async function ProjectCards() {

    const projects = await getProjects()
    return (
        <div className="grid grid-cols-4 gap-4 py-4">
            {
                projects.docs.map((result, index) => {
                    
                    return (
                        <Projectcard data={result} key={index}/>
                    )
                })
            }
        </div>
    );
}

export default ProjectCards; 