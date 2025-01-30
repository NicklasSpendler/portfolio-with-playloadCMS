import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import './styling.css'

function RichTextComponent({content}: {content: SerializedEditorState}) {
    return (
        <div className={"px-4"}>
            <RichText data={content}/>
        </div>
    );
}

export default RichTextComponent;