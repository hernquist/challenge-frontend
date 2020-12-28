import PropTypes from "prop-types";
import Head from "next/head";
import { Main, Body } from "./styles";
import Header from "../header";
import ThemeProvider from "../../styles/theme-provider";
import { useStoreState } from "easy-peasy";

const Shell = ({ children }) => {
  // conditionally polyfill scrolling behavior for browsers without native support.
  async function handleScrollForIncompatibleBrowsers() {
    if (typeof document === "undefined" || !document.documentElement) {
      return;
    }

    if (!("scrollBehavior" in document.documentElement.style)) {
      await import("scroll-behavior-polyfill");
    }
  }
  handleScrollForIncompatibleBrowsers();

  const { user, isAuthenticated } = useStoreState((state) => state);

  return (
    <>
      <Head>
        <title>Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <Body>
          <Header user={user} isAuthenticated={isAuthenticated} />
          <Main>{children}</Main>
        </Body>
      </ThemeProvider>
    </>
  );
};

Shell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Shell;
