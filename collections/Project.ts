import {CollectionConfig} from "payload";

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
            name: 'relatedskills',
            label: 'related skills',
            type: "relationship",
            relationTo: 'skill',
            hasMany: true
        }
    ]
    
}