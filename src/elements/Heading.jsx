import React from "react";


export const Heading = ({ classes="", level = "h2", children }) => {
  switch (level) {
    case "h1":
      return <h1 className={classes}>{children}</h1>;
    case "h2":
      return <h2 className={classes}>{children}</h2>;
    case "h3":
      return <h3 className={classes}>{children}</h3>;
    case "h4":
      return <h4 className={classes}>{children}</h4>;
    case "h5":
      return <h5 className={classes}>{children}</h5>;
    case "h6":
      return <h6 className={classes}>{children}</h6>;
    default:
      return null;
  }
};

Heading.protoTypes = {
  classes: PropTypes.string,
  level: PropTypes.string,
};
