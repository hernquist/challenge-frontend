const styles = {
  mediaQuery: {
    extraSmallMobileOnly:
      "@media screen and (min-width: 300px) and (max-width: 321px)",
    mobileOnly: "@media screen and (max-width: 767px)",
    tabletOnly: "@media screen and (min-width: 768px) and (max-width: 1023px)",
    desktopOnly:
      "@media screen and (min-width: 1024px) and (max-width: 1279px)",
    ipadPortait:
      "@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio: 2)",
    mobileAndTabletOnly: "@media screen and (max-width: 1023px)",
    tablet: "@media screen and (min-width: 768px)", // value copied from cnn design-system
    desktop: "@media screen and (min-width: 1024px)", // value copied from cnn design-system
    desktopL: "@media screen and (min-width: 1280px)", // value copied from cnn design-system
  },
  font: {
    regular: '"Helvetica Neue", Helvetica, Arial, Utkal, sans-serif',
    size: {
      xxs: "1.0rem",
      xs: "1.2rem",
      s: "1.4rem",
      m: "1.6rem",
      l: "1.8rem",
      xl: "2.0rem",
    },
  },
  color: {
    pomengranate: "#E55953",
    orange: "#E88732",
    mustard: "#F0D568",
    atol: "#387D70",
    atolText: "#7DF5DD",
    keppel: "#4ABEB2",
    iceberg: "#A3CACE",
    lavender: "#7451E1",
    denim: "#455ADF",
    dodgerBlue: "#455ADF",
    textOffWhite: "#f8f8f8",
    lightBlue: "#3299fa",
    lightBlueText: "#7cadff",
    white: "#fff",
    offBlack: "#262626",
  },
  boxShadow: {
    primaryCard: "0.2rem 0.2rem #888888",
    smallButton: "0.1rem 0.1rem #888888",
  },
};

export default styles;
