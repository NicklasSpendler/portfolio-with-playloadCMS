import {CollectionConfig} from "payload";
import {Projectcards} from "@/blocks/projectcards/config";
import {RichText} from "@/blocks/richText/config";
import {revalidateProjects} from "@/hooks/revalidatePage";
import {heroBanner} from "@/blocks/heroBanner/config";

export const Project: CollectionConfig = {
    slug: 'project',
    admin: {
        useAsTitle: 'projectname',
    },
    fields: [
        {
            name: 'projectname',
            label: 'Project Name',
            type: 'text',
            required: true,
        },
        {
            name: 'shortdescription',
            label: 'Short Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'github',
            label: 'github',
            type: 'text',
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                Projectcards,
                RichText,
                heroBanner,
            ]
        },
        {
            name: 'relatedSkills',
            label: 'related skills',
            type: "relationship",
            relationTo: 'skill',
            hasMany: true
        }
    ],
    hooks: {
        afterChange: [revalidateProjects]
    }
}