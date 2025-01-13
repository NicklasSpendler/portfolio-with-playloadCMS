import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react'
//import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

function RichTextComponent(props: any) {
    console.log('RichTextComponent ', props)
    return (
        <RichText data={props.data}/>
    );
}

export default RichTextComponent;