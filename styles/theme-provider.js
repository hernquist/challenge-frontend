import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as Root } from "styled-components";
import defaultTheme from "./theme";

const ThemeProvider = ({ theme, children }) => {
  return <Root theme={theme}>{children}</Root>;
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

ThemeProvider.defaultProps = {
  theme: defaultTheme,
  children: null,
};

export default ThemeProvider;
