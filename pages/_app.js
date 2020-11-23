import "../styles.css";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "easy-peasy";
import store from "../store/store";
import StyledToastContainer from "../styles/styled-toast-container";

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <StyledToastContainer />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
