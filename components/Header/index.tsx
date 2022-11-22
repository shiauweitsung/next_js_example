import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <div className={styles.root}>
            <Link href="/">Home Link</Link>
            <Link href="/about">About Link</Link>
            <Link href="/post">Post Link</Link>
            <Link href="/store">Store Link</Link>
        </div>
    )
}