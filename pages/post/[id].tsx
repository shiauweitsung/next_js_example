import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export const data = [
    {
        id: '1',
        name: 'abc'
    },
    {
        id: '2',
        name: 'efg'
    },
    {
        id: '3',
        name: 'hig'
    },
]

export default function Post({ propsData }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(propsData, 'propsData');

    return (
        <div>
            {propsData.map((item)=>(
                <>
                    <h2>{item.id}</h2>
                    <p>name: {item.name}</p>
                </>
            ))}
        </div>
    )
}

export const getStaticPaths = async () => {
    // ...
    const paths = data.map((item) => {
        return {
            params: {
                id: item.id,
            }
        }
    })
    // console.log(paths, 'path');

    return {
        paths,
        fallback: false,
    }
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