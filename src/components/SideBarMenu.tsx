import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../types/types"
import {classNames} from "../util/classes";
import {VscMenu} from "react-icons/vsc";

import SideBarMenuItemView from "./SideBarMenuItemView"; 
import SideBarMenuCardView from "./SideBarMenuCardView"; 

import "./SideBarMenu.scss"; 

interface SideBarMenuProps{
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}
export function SideBarMenu({items, card}: SideBarMenuProps){
    const [isOpen,setIsOpen] = useState<boolean>(false);


    function handleClick(){
        setIsOpen(!isOpen);
    }
    return( 
        <div 
            className={classNames("SideBarMenu",isOpen? "expanded": "collapsed")}>
            <SideBarMenuCardView card={card} isOpen={isOpen} />
            {items.map((item) =>(
                <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen}/> 
            ))}
        </div>
        );
} 