import React from 'react';
import Projectcard from "@/components/ui/projectcard";

function ProjectCards(props) {
    return (
        <div className="grid grid-cols-4 gap-4 py-4">
            <Projectcard/>
            <Projectcard/>
            <Projectcard/>
            <Projectcard/>
        </div>
    );
}

export default ProjectCards; 