import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Stripe from "stripe";
import { DataContext } from "../../contexts/DataContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps){
    const [cartData, setCartData] = useState([]);
    const { isFallback } = useRouter();
    const { saveToLocalStorage, loadLocalStorage } = useLocalStorage();
    const { setLoading, loading } = useContext(DataContext);

    if (isFallback) {
        return <p>Loading...</p>
    }

    function handleLocalStorage(product){
        setCartData([...cartData, 
            {
                defaultPriceId: product.defaultPriceId,
                description: product.description,
                id: product.id,
                imageUrl: product.imageUrl,
                name: product.name,
                price: product.price,
            }
        ]);

        if(cartData.length === 0){
            return
        }

        setLoading(!loading);
        saveToLocalStorage(cartData, '@ignite-shop:cart');
    }

    useEffect(()=>{
        const dataFetched = loadLocalStorage('@ignite-shop:cart');
        dataFetched === undefined || null ? setCartData([]) : setCartData(dataFetched) 
    },[])

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt={''}/>
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button onClick={() => handleLocalStorage(product)}>Adicionar ao carrinho</button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async => {
    return {
        paths: [
            { params: {id: 'prod_MfqlHTKFoRg1As'} }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(price.unit_amount / 100),
                description: product.description,
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1,
    }
}