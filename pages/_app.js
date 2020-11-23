import "../styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "easy-peasy";
import store from "../store/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
