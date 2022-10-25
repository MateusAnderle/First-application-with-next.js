import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageWrapper, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }
}

export default function Success({ customerName, product }: SuccessProps){
    //Só para teste de interface console.log
    const arr = [
        {id: 1, item: product},
        {id: 2, item: product},
        {id: 3, item: product},
        {id: 4, item: product},
    ]
    return (
        <>
            <Head>
                <title>Compra Efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex"/>
            </Head>
            
            <SuccessContainer>
                <ImageWrapper>
                    {arr.map((item) => {
                        return (
                            <ImageContainer key={item.id}>
                                <Image src={item.item.imageUrl} width={140} height={140} alt=''/>
                            </ImageContainer>
                        )
                    })}
                </ImageWrapper>
            
                <h1>Compra Efetuada</h1>

                <p>Uhull <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.</p>
            
                <Link href='/'>
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    if(!query.session_id){
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    
    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }
        }
    }
}