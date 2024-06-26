import styles from './MainUp.module.scss'


export default function MainUp() {
    return (
        <section>
            <div className={styles.layout}>
                <div className={styles.block}>
                    <div className={styles.block1}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.block2Up}></div>
                        <div className={styles.block2Down}>
                            <div className={styles.block2Down1}></div>
                            <div className={styles.block2Down2}></div>
                        </div>
                    </div>
                    <div className={styles.block1}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.block3}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={styles.side}>
                    <div className={styles.inner}></div>
                    <div className={styles.inner1}></div>
                </div>
            </div>   
        </section>
    )
}