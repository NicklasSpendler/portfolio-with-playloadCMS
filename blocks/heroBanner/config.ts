import {Block} from "payload";

export const heroBanner: Block = {
    slug: 'hero banner',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true
        },
        {
          name: 'subtitle',
          label: 'Sub Title',
          type: 'text',  
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
        }
    ]
}