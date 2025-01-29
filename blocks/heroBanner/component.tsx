import React from 'react';
import {Media} from "@/payload-types";
import "./style.css"


function headBannerCompnent({title, image, subtitle}: {title: string, subtitle: string, image: Media}) {
    return (
        <div className={"heroBanner relative mb-16"}>
            <img className={"w-full block object-cover h-72 "} src={image.url} alt={image.alt} />
            <h1 className={"absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-6xl font-bold  text-outline text-center"}>{title}</h1>
            <h2 className={"absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-center"}>{subtitle}</h2>
        </div>
    );
}

export default headBannerCompnent;