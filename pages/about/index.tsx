import styles from 'styles/Home.module.css'
import { InferGetStaticPropsType, GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'


export default function About({ data,message }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(data, 'data');
    
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <p>ABOUT PAGE</p>
                <h2>Props text: {message}</h2>
            </main>
        </div>
    )
}

export async function getStaticProps({ params, preview, locale, locales }: GetStaticPropsContext) {
    console.log(params, preview, locale, locales, 'params');
    console.log('test');
    const res = await fetch('https://staging.bridge.sapi.alphacarbon.network/secure/bridge/public/chains');
    const data = await res.json();

    return {
        props: { data,message: `Next.js is awesome` }, // will be passed to the page component as props
        revalidate: 3, // In seconds
    }
}