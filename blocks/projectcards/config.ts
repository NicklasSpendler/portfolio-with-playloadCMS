import {Block} from "payload";

export const Projectcards: Block = {
    slug: 'projectcards',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        }
    ]
}