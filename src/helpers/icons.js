import { 
    faTrash, 
    faSignOutAlt, 
    faTrashRestore, 
    faUserEdit, 
    faCircleNotch, 
    faBookDead,
    faCommentDots,
    faLaptopCode,
    faAddressCard,
    faMobileAlt,
    faFighterJet,
    faLock
 } from "@fortawesome/free-solid-svg-icons";
 
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
 return library.add(faTrash, faSignOutAlt, faTrashRestore, faUserEdit, faCircleNotch, faBookDead, faCommentDots, faLaptopCode, faAddressCard, faMobileAlt, faFighterJet, faLock);
} 

export default Icons;

