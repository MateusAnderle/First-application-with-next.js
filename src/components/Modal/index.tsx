import React from "react";
import { ContentWrapper, ImageModalCard, ModalCard, ModalCardContent, ModalContainer, TotalTexts, TotalWrapper } from "../../styles/pages/modal";
import Shirt from '../../assets/shirt.png'
import Image from "next/future/image";

export default function Modal(){
    return (
        <ModalContainer>
            <ContentWrapper>
                <h3>Sacola de compras</h3>
                
                <div>
                    <ModalCard>
                        <ImageModalCard>
                            <Image src={Shirt} width={90} height={90} alt=''/>
                        </ImageModalCard>
                    
                        <ModalCardContent>
                            <span>Camiseta Beyond the limits</span>
                            <strong>R$ 79,90</strong>
                            <p>Remover</p>
                        </ModalCardContent>
                    </ModalCard>

                    <ModalCard>
                        <ImageModalCard>
                            <Image src={Shirt} width={90} height={90} alt=''/>
                        </ImageModalCard>
                    
                        <ModalCardContent>
                            <span>Camiseta Beyond the limits</span>
                            <strong>R$ 79,90</strong>
                            <p>Remover</p>
                        </ModalCardContent>
                    </ModalCard>

                    <ModalCard>
                        <ImageModalCard>
                            <Image src={Shirt} width={90} height={90} alt=''/>
                        </ImageModalCard>
                    
                        <ModalCardContent>
                            <span>Camiseta Beyond the limits</span>
                            <strong>R$ 79,90</strong>
                            <p>Remover</p>
                        </ModalCardContent>
                    </ModalCard>
                </div>
            </ContentWrapper>

            <TotalWrapper>
                <TotalTexts>
                    <span>Quantidade</span>
                    <span>3 Itens</span>
                </TotalTexts>

                <TotalTexts>
                    <strong>Valor total</strong>
                    <strong>R$ 270,00</strong>
                </TotalTexts>

                <button>Finalizar compra</button>
            </TotalWrapper>          
        </ModalContainer>
    )
}