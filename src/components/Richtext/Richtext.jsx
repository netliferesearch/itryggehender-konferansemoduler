import React from "react";
import { Heading } from "../../elements/Heading.jsx";

export const Richtext = ({
  offset = false,
  heading = "h2",
  title = "Heading kommer her",
  body = "",
  children,
}) => {
  const centerStyle = "offset-lg-3 offset-md-1 offset-sm-0";
  return (
    <div className="container article">
      <div className="row">
        <div
          className={`${
            !offset ? centerStyle : ""
          } col-lg-7 col-md-9 col-sm-12`}
        >
          <Heading level={heading}>{title}</Heading>
          <div className="article__content">{children ? children : body}</div>
        </div>
      </div>
    </div>
  );
};
