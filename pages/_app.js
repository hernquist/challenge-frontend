import "../styles.css";
import { StoreProvider } from "easy-peasy";
import store from "../store/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
