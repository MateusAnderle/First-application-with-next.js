import React, { useContext } from "react";
import logoImg from '../../assets/Logo.svg'
import Image from 'next/future/image';
import Cart from '../../assets/cart.svg'
import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import Modal from "../../components/Modal";
import { HeaderStyle, DivNotification } from "../../styles/pages/app";
import { DataContext } from "../../contexts/DataContext";

export default function Header(){
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { fetchData, cartData } = useContext(DataContext);
  
    function handleMenu () {
      setMenuOpen(!isMenuOpen);
    };
  
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>
            <HeaderStyle>
            <Link href={'/'}>
                <span>
                <Image src={logoImg} alt=""/>
                </span>
            </Link>

            <DivNotification 
                onClick={handleMenu} 
                style={{
                width: 48, 
                height: 48, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#202024', 
                borderRadius: 6, 
                cursor: 'pointer'
                }}>
                <Image src={Cart} alt=""/>
                {cartData.length === 0 ? null : <span>{cartData.length}</span>}
            </DivNotification>

            <div 
                style={isMenuOpen ? {
                    color: '#fff',
                    height: '100vh',
                    width: '30rem',
                    backgroundColor: '#292929',
                    zIndex: 200,
                    transform: 'translateX(0%)',
                    transition: '0.3s',
                    position: 'fixed',
                    right: 0,
                    top: 0, 
                } : {
                    color: '#fff',
                    height: '100vh',
                    width: '30rem',
                    backgroundColor: '#292929',
                    zIndex: 200,
                    transform: 'translateX(100%)',
                    transition: '0.3s',
                    position: 'fixed',
                    right: 0,
                    top: 0, 
                }}>
                <Modal />
            </div>
            </HeaderStyle>

            <ReactDimmer
            isOpen={isMenuOpen}
            exitDimmer={setMenuOpen}
            zIndex={100}
            blur={3}
            />
        </>
    )
}