import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

function RichTextComponent({content}: {content: SerializedEditorState}) {
    console.log('RichTextComponent ', content)
    return (
        <RichText data={content}/>
    );
}

export default RichTextComponent;