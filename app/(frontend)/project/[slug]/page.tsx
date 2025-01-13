import React from 'react';
import {Project} from "@/payload-types";

function Page(props: Project) {
    console.log(props);
    return (
        <div>
            Project
        </div>
    );
}

export default Page;