import {CollectionAfterChangeHook} from "payload";
import {revalidatePath} from "next/cache";
import {Skill} from "@/payload-types";


export const revalidatePage: CollectionAfterChangeHook = ({
                                                                doc,
                                                                previousDoc,
                                                                req: { payload, context },
                                                            }) =>
{
    revalidatePath('/')
    return doc
}