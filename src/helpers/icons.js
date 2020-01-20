import { 
    faTrash, 
    faSignOutAlt, 
    faTrashRestore, 
    faUserEdit, 
    faCircleNotch, 
    faBookDead
 } from "@fortawesome/free-solid-svg-icons";
 
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
 return library.add(faTrash, faSignOutAlt, faTrashRestore, faUserEdit, faCircleNotch, faBookDead);
} 

export default Icons;