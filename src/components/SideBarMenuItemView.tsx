import { SideBarMenuItem } from "../types/types";
import {classNames} from "../util/classes";
import "./SideBarMenuItemView.scss";
import { NavLink } from 'react-router-dom';

interface SideBarMenuItemViewProps{
    item: SideBarMenuItem;
    isOpen:boolean; 
}

export default function SideBarMenuItemView({
    item,
    isOpen,
}: SideBarMenuItemViewProps){
    return (
    <NavLink className='SideBarMenuItemView' to={item.url} id={item.id} >
        <a href={item.url}>
            <div className={classNames('ItemContent', isOpen ? '' : 'collapsed')}>
                <div className="icon">
                    <item.icon size="50" />
                    
                </div>        
                <span className="label">{item.label}</span>        
            </div>      
        </a>    
        {!isOpen ? <div className="tooltip">{item.label}</div> : ""}
    </NavLink>
    );  
} 