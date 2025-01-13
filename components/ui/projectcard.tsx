import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Skilltag from "@/components/ui/skilltag";

interface SkillcardProps {
    className?: string
}

function Projectcard({className}: SkillcardProps) {
    return (
        <>
            <Card className={`${className} grid grid-rows-cardLayout leading-4 overflow-hidden `}>
                <CardHeader>
                    <CardTitle>This is the title</CardTitle>
                    <CardDescription>This is the card description</CardDescription>
                    <Separator/>
                </CardHeader>
                <CardContent className={""}>
                    <p>is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing and typesetting industry. </p>
                </CardContent>
                
                <CardFooter className="p-2 pt-0 flex gap-2 flex-wrap justify-center -row-end-1 ">
                    <Skilltag name="Javascript"/>
                    <Skilltag name="C#"/>
                    <Skilltag name="java"/>
                    <Skilltag name="CSS"/>
                    <Skilltag name="CSS"/>
                    <Skilltag name="CSS"/>
                    <Skilltag name="CSS"/>
                </CardFooter>
            </Card>
        </>
    );
}

export default Projectcard;