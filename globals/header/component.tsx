"use client"
import React, {useEffect} from 'react';
import './style.css'
import config from '@payload-config'
import {getPayload} from "payload";
import Link from "next/link";



function HeaderComponent(props) {
    useEffect(() =>{
        init();
    });

    function updateSize(){
        if (!selectedElem.current){
            return
        }
        MoveLineTo(selectedElem.current);
    }


    const selectedElem = React.useRef<HTMLElement | null>(null)
    const AnimatedLineRef = React.useRef<HTMLDivElement>(null);
    const MenuListRef = React.useRef<HTMLUListElement>(null);

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

    function init()
    {
        if (!MenuListRef.current){
            return
        }

        selectedElem.current = MenuListRef.current.children[0] as HTMLElement

        MoveLineTo(MenuListRef.current.children[0] as HTMLAnchorElement);
        window.addEventListener('resize', updateSize);
    }


    const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        selectedElem.current = event.target as HTMLElement;
        MoveLineTo(event.target as HTMLAnchorElement)
    }
    
    return (
        <header className="mb-5">
            <nav className="flex justify-end">
                <ul ref={MenuListRef} className="nav flex gap-5">
                {
                props.header.nav.map((item, index: number) => {
                        return(
                            <li key={index}>
                                <Link href={`/${item.link}`} onMouseOver={(e) => MoveLineTo(e.target as HTMLElement)}
                                   onMouseOut={() => MoveLineTo(selectedElem.current as HTMLElement)}
                                   onClick={handleOnClick}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                        })
                }
                    
                {/*                    <li>
                        <a onMouseOver={(e) => MoveLineTo(e.target as HTMLElement)}
                           onMouseOut={() => MoveLineTo(selectedElem.current as HTMLElement)}
                           onClick={handleOnClick}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={(e) => MoveLineTo(e.target as HTMLElement)}
                           onMouseOut={() => MoveLineTo(selectedElem.current as HTMLElement)}
                           onClick={handleOnClick}>
                            About
                        </a>
                    </li>
                    <li>
                        <a onMouseOver={(e) => MoveLineTo(e.target as HTMLElement)}
                           onMouseOut={() => MoveLineTo(selectedElem.current as HTMLElement)}
                           onClick={handleOnClick}>
                            Contact
                        </a>
                    </li>*/}
                </ul>
            </nav>
            <div ref={AnimatedLineRef} className="animated_line"></div>

        </header>
    );
}

export default HeaderComponent;