import Link from "next/link";
import Layout from "../layout";
import { GetServerSideProps } from "next";


export default function Home() {

    const gradient = 'bg-gradient-to-b from-orange-400 to-red-600'

    return (
        <>
            <Link
                href="play"
                className={`${gradient} fixed bottom-40 left-0 right-0 mx-auto w-60 py-2 flex justify-center items-center rounded-xl font-extrabold text-white text-2xl`}
            > JOGAR </Link>
        </>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    ctx.res.setHeader('Location', '/combate');
    ctx.res.statusCode = 302;
    ctx.res.end();
    return {
        redirect: {
          permanent: false,
          destination: "/combate",
        },
        props:{},
    };
};