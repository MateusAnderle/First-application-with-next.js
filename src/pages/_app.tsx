import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app";
import {DataContextProvider} from '../contexts/DataContext';
import Header from "../components/Header";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <DataContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </DataContextProvider>
  )
}
