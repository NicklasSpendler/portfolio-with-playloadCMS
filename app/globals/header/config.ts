import {GlobalConfig} from "payload";

export const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'nav',
            label: 'navigaton',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text'
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text'
                }
            ]
        }
    ]
}