import {CollectionAfterChangeHook} from "payload";
import {revalidateTag} from "next/cache";


export const revalidateSkills: CollectionAfterChangeHook = ({
    doc,
    previousDoc,
    req: { payload, context },
                                                            }) =>
{
    revalidateTag('skills')
    return doc
}

export const revalidateProjects: CollectionAfterChangeHook = ({
    doc
}) => {
    revalidateTag('projects')
    return doc
}