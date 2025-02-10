import React from 'react';
import Link from "next/link";

type props = {
    name: string,
    skillcolor?: string,
}
// every skill should have a unique color

function SkillTagLink(props: props) {
    return (
        <>
            <Link href={{
                pathname: `/skill/${props.name}`,
            }} passHref>
                <div className="bg-accent p-2 rounded-full">
                    {props.name}
                </div>
            </Link>
        </>
    );
}

export default SkillTagLink;