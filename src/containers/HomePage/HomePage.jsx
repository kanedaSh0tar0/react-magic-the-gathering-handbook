import styles from './HomePage.module.css'

function HomePage() {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.title}>Welcome</h1>
            <p className={styles.text}>You visited my first pet progect written in React. Right now its functionality is small, but it will be expanded in the future.</p>
            <p className={styles.text}>I hope you will enjoy using this application!</p>
        </div>
    )
}

export default HomePage