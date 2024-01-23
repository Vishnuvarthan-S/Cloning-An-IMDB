import PersistentDrawerLeft from "./Drawer";
import './Sample.css';
export default function Admin(){
    return(
        <>
        <PersistentDrawerLeft/>
        <div className="Testing">
            <p>The total count of users Registered:200</p>
        </div>
        </>
    );
}