import React, { useContext, useEffect, useState } from "react";
import { ContentWrapper, ImageModalCard, ModalCard, ModalCardContent, ModalContainer, TotalTexts, TotalWrapper } from "../../styles/pages/modal";
import Image from "next/future/image";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { DataContext } from "../../contexts/DataContext";

export default function Modal(){
    const { clearLocalStorage, loadLocalStorage, saveToLocalStorage } = useLocalStorage();
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(false);
    const {  } = useContext(DataContext);

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
        const dataFetched = loadLocalStorage('@ignite-shop:cart');
        dataFetched === undefined ? setCartData([]) : setCartData(dataFetched) 
        
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

                <button>Finalizar compra</button>
            </TotalWrapper>          
        </ModalContainer>
    )
}