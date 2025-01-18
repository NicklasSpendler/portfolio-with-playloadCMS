'use server'

import {unstable_cache} from "next/cache";
import {getPayload} from "payload";
import config from "@payload-config";

const payload = await getPayload({config});

export const getSkills = unstable_cache(async () => {
    return await payload.find({
        collection: 'skill'
    })
},[], 
    {
    tags: ['skills']
}) 

export const getProjects = unstable_cache(async () => {
    return await payload.find({
        collection:'project'
    })
},[],
    {
    tags: ['projects']
})