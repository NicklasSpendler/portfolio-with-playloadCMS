import React from 'react';

type props = {
    name: string,
    skillcolor?: string,
    onClick?: React.MouseEventHandler
}

function SkillTagLink(props: props) {
    
    return (
        <>
            <div onClick={props.onClick} className="bg-accent p-2 rounded-full cursor-pointer select-none">
                {props.name}
            </div>
        </>
    );
}

export default SkillTagLink;