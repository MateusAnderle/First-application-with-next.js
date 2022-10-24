import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product(){
    const { query } = useRouter();

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio similique id cum aut error nulla voluptates obcaecati quod voluptatibus. Tenetur aliquid quis voluptates quisquam dolorem expedita aut laudantium itaque?</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}