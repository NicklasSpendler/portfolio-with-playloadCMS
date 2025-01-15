import {CollectionAfterChangeHook, CollectionConfig} from "payload";
import {revalidatePage} from "@/hooks/revalidatePage";

export const Skill: CollectionConfig = {
    slug: 'skill',
    admin: {
      useAsTitle: 'title',  
    },
    fields: [
        {
            name: 'title',
            label: 'Skill Title',
            type: "text",
            required: true,
        },
        {
            name: 'description',
            label: 'Skill Description',
            type: 'textarea',
            required: false,
        }
    ],
    hooks: {
        afterChange: [revalidatePage]
    }
}