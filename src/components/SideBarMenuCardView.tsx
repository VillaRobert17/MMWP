import { SideBarMenuCard } from "../types/types"
import {classNames} from "../util/classes";

interface SideBarMenuCardViewProps{
    card: SideBarMenuCard;
    isOpen: boolean;
}

export default function SideBarMenuCardView({
    card, 
    isOpen,
}:SideBarMenuCardViewProps  ){
    return (
    <div className="SideBarMenuCardView">
    <img className="profile" src ={card.photoUrl} width="100%" />
        <div className={classNames('profileInfo', isOpen? '':'collapsed')}>
        <div className="name">{card.displayName}</div>  
        <div className="title">{card.title}</div>
        <div className="url">
            
            </div> 
        </div>
    </div>
    );
}

