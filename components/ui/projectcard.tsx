import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Skilltag from "@/components/ui/skilltag";
import Link from "next/link";
import {Project} from "@/payload-types";

function Projectcard({data}: {data: Project}) {
    return (
        <>
            <Card className={`flex flex-col leading-4 overflow-hidden hover:scale-110 transition duration-500 transform max-w-[222px]`}>
                <CardHeader>
                    <CardTitle className={"text-neonpink text-2xl text-center"}>{data.projectname}</CardTitle>
                    <Separator/>
                </CardHeader>
                <CardContent>
                    <p>{data.shortdescription}</p>
                </CardContent>
                
                <CardFooter className="p-0 flex-col flex-grow justify-between">
                    <div className="p-2 pt-0 flex gap-2 flex-wrap justify-center -row-end-1 ">
                        {
                            data.relatedskills?.map((result: any, index: number)=> {
                                return(
                                    <Skilltag name={result?.title} key={index}/>
                                )
                            })
                        }
                    </div>
                    <div className="bg-pink-800 w-full text-center flex justify-center h-6">
                        <Link href={`/project/${data.projectname}`}>
                            <p>Read More</p>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}

export default Projectcard;