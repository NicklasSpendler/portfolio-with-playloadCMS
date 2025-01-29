import React, {Fragment} from 'react';
import {Project} from "@/payload-types";
import headBannerCompnent from "@/blocks/heroBanner/component";
import RichTextComponent from "@/blocks/richText/component";

const blockComponents = {
    "hero banner": headBannerCompnent,
    richText: RichTextComponent,
}

export const RenderBlocks: React.FC<{
    blocks: Project['layout'][0][]
}> = (props) => {

    const { blocks } = props
    
    if (!blocks) {
        return null
    }

    return(
        <Fragment>
            {blocks.map((block, index) => {
                const { blockType } = block
                if (blockType && blockType in blockComponents) {
                    // @ts-ignore
                    const Block = blockComponents[blockType]
                    if (Block) {
                        return (
                            <div key={index}>
                                <Block {...block} disableInnerContainer />
                            </div>
                        )
                    }
                }
                return null
            })}
        </Fragment>
    )
}