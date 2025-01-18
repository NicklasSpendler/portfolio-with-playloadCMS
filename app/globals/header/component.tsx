"use client"
import React, {useEffect} from 'react';
import './style.css'
import Link from "next/link";
import {useParams, usePathname} from "next/navigation";
import {replaceSlashes, replaceSpaces} from "@/lib/utils";

function HeaderComponent(props: any) {
    useEffect(() =>{
        init();
    },[]);
    
    const currentPath = usePathname();
    
    function updateSize(){
        if (!selectedElem.current){
            return
        }
        MoveLineTo(selectedElem.current);
    }

    const selectedElem = React.useRef<HTMLElement | null>(null)
    const AnimatedLineRef = React.useRef<HTMLDivElement>(null);
    const MenuListRef = React.useRef<HTMLUListElement>(null);
    
    function init()
    {
        if (!MenuListRef.current || !AnimatedLineRef.current){
            return
        }
        
        //If we are in home just go to first element, this requires home to be the first element all the time.
        if (currentPath == '/'){
            selectedElem.current = MenuListRef.current.children[0] as HTMLElement;
            MoveLineTo(selectedElem.current);
        }else if (currentPath != '/'){
            selectedElem.current = MenuListRef.current.children[compareNavDirection(currentPath)] as HTMLElement;
            MoveLineTo(selectedElem.current);
        }

        //The animated line is invisible to begin with, because its initial position is fucked...
        AnimatedLineRef.current.classList.remove("invisible");
        //Timeout to make it not fade in to the page as it load
        setTimeout(() => {
            AnimatedLineRef.current.classList.add("animated");
        }, 10)
        

        window.addEventListener('resize', updateSize);
    }
    
    function compareNavDirection(compareTo: string){
        for(let i= 0; i< MenuListRef.current.children.length; i++){
            if(replaceSlashes(MenuListRef.current.children[i].dataset.dir) != "" && compareTo.includes(replaceSlashes(MenuListRef.current.children[i].dataset.dir))){
                return(i);
            }
        }
    }
    
    function MoveLineTo(index: HTMLElement): void {
        if (!index || !AnimatedLineRef.current){
            return;
        }

        let offset: number = 0
        let width: number = 0

        if (index instanceof HTMLElement){
            offset = index.offsetLeft;

            width = index.offsetWidth;
        }

        const AnimatedLine: HTMLDivElement = AnimatedLineRef.current;
        AnimatedLine.style.left = offset + "px";
        AnimatedLine.style.width = width + "px";
    }

    const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        selectedElem.current = event.target as HTMLElement;
        MoveLineTo(event.target as HTMLAnchorElement)
    }
    
    return (
        <header className="mb-5">
            <div className="wrapper">
                <nav className="flex justify-end">
                    <ul ref={MenuListRef} className="nav flex gap-5">
                    {
                    props.header.nav.map((item: any, index: number) => {

                            return(
                                <li key={index} data-dir={item.link}>
                                    <Link href={item.link} onMouseOver={(e) => MoveLineTo(e.target as HTMLElement)}
                                       onMouseOut={() => MoveLineTo(selectedElem.current as HTMLElement)}
                                       onClick={handleOnClick}>
                                            {item.label}
                                    </Link>
                                </li>
                            )
                            })
                    }
                    </ul>
                </nav>
                <div ref={AnimatedLineRef} className="animated_line invisible"></div>
            </div>

        </header>
    );
}

export default HeaderComponent;