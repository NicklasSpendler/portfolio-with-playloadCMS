import React from 'react';
import {Media} from "@/payload-types";
import "./style.css"


function headBannerCompnent({title, image}: {title: string, image: Media}) {
    return (
        <div className={"heroBanner relative"}>
            <img className={"w-full block object-cover h-72 "} src={image.url} alt={image.alt} />
            <p className={"absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-neonpink text-outline text-center"}>{title}</p>
        </div>
    );
}

export default headBannerCompnent;