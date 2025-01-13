import {Block} from "payload";
import {FixedToolbarFeature, lexicalEditor} from '@payloadcms/richtext-lexical'

export const RichText: Block = {
    slug: 'richText',
    fields: [
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
            required: true,
            editor: lexicalEditor({
                features: ({defaultFeatures} )=> [
                    ...defaultFeatures.filter((feature) => !['superscript'].includes(feature.key)),
                    FixedToolbarFeature(),
                ]
            })
        }
    ]
}