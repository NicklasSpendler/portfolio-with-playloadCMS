import React, {Fragment} from 'react';
import {Project} from "@/payload-types";
import headBannerCompnent from "@/blocks/heroBanner/component";

const blockComponents = {
    "hero banner": headBannerCompnent
}

export const RenderBlocks: React.FC<{
    blocks: Project['layout'][0][]
}> = (props) => {

    const { blocks } = props

    console.log("Blocks: ",blocks)
    
    if (!blocks) {
        return null
    }

    return(
        <Fragment>
            {blocks.map((block, index) => {
                const { blockType } = block
                console.log(blockType)
                if (blockType && blockType in blockComponents) {
                    // @ts-ignore
                    const Block = blockComponents[blockType]
                    if (Block) {
                        return (
                            <div className="my-16" key={index}>
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