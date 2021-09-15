import "antd/dist/antd.css";
import LayoutPage from "../components/layout/Layout";
import { Provider } from "next-auth/client";
import type { AppProps /*, AppContext */ } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (<LayoutPage>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </LayoutPage>)
}

export default App



