import {CollectionAfterChangeHook} from "payload";
import {revalidatePath, revalidateTag} from "next/cache";
import {Skill} from "@/payload-types";


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