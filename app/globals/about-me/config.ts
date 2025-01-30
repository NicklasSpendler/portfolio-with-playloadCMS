import {GlobalConfig} from "payload";
import {FixedToolbarFeature, lexicalEditor} from "@payloadcms/richtext-lexical";

export const aboutMe: GlobalConfig = {
    slug: 'aboutMe',
    fields: [
        {
            name: 'profileText',
            label: 'Profile Text',
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