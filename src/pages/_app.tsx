import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/Logo.svg'
import { Container, DivNotification, Header } from "../styles/pages/app";
import Image from 'next/future/image';
import Cart from '../assets/cart.svg'
import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import Modal from "../components/Modal";
import { useLocalStorage } from "../hooks/useLocalStorage";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const { loadLocalStorage } = useLocalStorage();

  function handleMenu () {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(()=>{
      const dataFetched = loadLocalStorage('@ignite-shop:cart');
      dataFetched === undefined ? setCartData([]) : setCartData(dataFetched) 
  },[isMenuOpen])

  return (
      <Container>
        <Header>
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
        </Header>

        <Component {...pageProps} />

        <ReactDimmer
          isOpen={isMenuOpen}
          exitDimmer={setMenuOpen}
          zIndex={100}
          blur={3}
        />
      </Container>
  )
}
