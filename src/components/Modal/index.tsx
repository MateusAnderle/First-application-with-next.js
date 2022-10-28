import React, { useContext, useEffect, useState } from "react";
import { ContentWrapper, ImageModalCard, ModalCard, ModalCardContent, ModalContainer, TotalTexts, TotalWrapper } from "../../styles/pages/modal";
import Image from "next/future/image";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { DataContext } from "../../contexts/DataContext";
import axios from "axios";

export default function Modal(){
    const { clearLocalStorage, saveToLocalStorage } = useLocalStorage();
    const { fetchData, cartData, setCartData, loading, setLoading } = useContext(DataContext);

    async function handleBuyProduct(){
        try {
            const response = await axios.post('/api/checkout', {
                priceId: cartData[0].defaultPriceId,
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;

        } catch (error) {
            alert('Falha ao redirecionar ao checkout')
        } finally {
            clearLocalStorage();
        }
    }

    function clearCart(){
        clearLocalStorage();
        setLoading(!loading);
    }

    function removeItem(item){
        const newCart = cartData.filter((product) => {
            return product.id !== item.id;
        });
        setCartData(newCart);
        saveToLocalStorage(newCart, '@ignite-shop:cart');
        setLoading(!loading);
    }

    useEffect(()=>{
        fetchData();
    },[loading])

    return (
        <ModalContainer>
            <ContentWrapper>
                <h3>Sacola de compras</h3>
                
                <div>
                    {cartData.map((item) => {
                        return (
                            <ModalCard>
                                <ImageModalCard>
                                    <Image src={item.imageUrl} width={90} height={90} alt=''/>
                                </ImageModalCard>
                            
                                <ModalCardContent>
                                    <span>{item.name}</span>
                                    <strong>R$ 79,90</strong>
                                    <p onClick={() => removeItem(item)}>Remover</p>
                                </ModalCardContent>
                            </ModalCard>
                        )
                    })}
                    
                </div>
            </ContentWrapper>

            <TotalWrapper>
                <TotalTexts>
                    <span>Quantidade</span>
                    <span>{cartData.length === 1 ? cartData.length + ' Item' : cartData.length + ' Itens'}</span>
                </TotalTexts>

                <TotalTexts>
                    <strong>Valor total</strong>
                    <strong>R$ {(cartData.length * 79.90).toFixed(2)}</strong>
                </TotalTexts>

                <TotalTexts>
                    <p onClick={clearCart}><span>Limpar carrinho</span></p>
                </TotalTexts>

                <button onClick={handleBuyProduct}>Finalizar compra</button>
            </TotalWrapper>          
        </ModalContainer>
    )
}