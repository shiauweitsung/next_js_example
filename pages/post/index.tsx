import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { data } from './[id]';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Post({ propsData }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(propsData, 'propsData');
    const router = useRouter()

    return (
        <div>
            {propsData.map((item)=>(
                <>
                    <button onClick={()=>{
                       router.push(`post/${item.id}`) 
                    }}>{item.id}</button>
                </>
            ))}
        </div>
    )
}


export const getStaticProps = ({ params }: GetStaticPropsContext) => {
    // Fetch necessary data for the blog post using params.id
    const propsData = data.filter((item) => {
        if (params) {
            return item.id === params.id;
        } else {
            return item
        }

    })
    // console.log(...propsData,'propsData');

    return {
        props: {
            propsData
        }
    }

}