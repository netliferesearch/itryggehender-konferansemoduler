import React from "react";
import { Heading } from "../../elements/Heading.jsx";

export const Richtext = ({
  style = "regular",
  heading = "h2",
  title = "Heading kommer her",
  body = "",
  children,
}) => {
  const styles = {
    regular: "col-lg-7 col-md-9 col-sm-12",
    center: "col-lg-7 col-md-9 col-sm-12 offset-lg-3 offset-md-1 offset-sm-0",
    wide: "col-lg-9 col-md-12",
    centerWide: "col-lg-9 col-md-12 offset-lg-1 offset-md-0",
  }
  return (
    <div className="container article">
      <div className="row">
        <div
          className={styles[style]}
        >
          <Heading level={heading}>{title}</Heading>
          <div className="article__content">{children ? children : body}</div>
        </div>
      </div>
    </div>
  );
};
