import BottomLeft from "./BottomLeft/BottomLeft";
import BottomRight from "./BottomRight/BottomRight";
import MainDown from "./MainDown/MainDown";
import MainUp from "./MainUp/MainUp";
import Sidebar from "./Siderbar/Sidebar";
import Sphere from "./Sphere/Sphere";
import styles from './page.module.scss'


export default function Home() {
    return (
        <div className={styles.grid}>
            <div className={styles.sidebar}><Sidebar/></div>
            <div className={styles.sphere}><Sphere/></div>
            <div className={styles.mainUp}><MainUp/></div>
            <div className={styles.bottomLeft}><BottomLeft/></div>
            <div className={styles.mainDown}><MainDown/></div>
            <div className={styles.bottomRight}><BottomRight/></div>
        </div>
    )
}