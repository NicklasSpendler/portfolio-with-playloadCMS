import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import './styling.css'

function RichTextComponent({content}: {content: SerializedEditorState}) {
    return (
        <RichText data={content}/>
    );
}

export default RichTextComponent;