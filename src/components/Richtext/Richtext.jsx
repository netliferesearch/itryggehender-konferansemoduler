import React from "react";

export const Richtext = ({
  offset = false,
  heading = "h2",
  title = "",
  body = "",
  children,
}) => {
  
  const Heading = ({ level = "h2", children }) => {
    switch (level) {
      case "h1":
        return <h1>{children}</h1>;
      case "h2":
        return <h2>{children}</h2>;
      case "h3":
        return <h3>{children}</h3>;
      case "h4":
        return <h4>{children}</h4>;
      case "h5":
        return <h5>{children}</h5>;
      case "h6":
        return <h6>{children}</h6>;
      default:
        return null;
    }
  };

  const centerStyle = "offset-lg-3 offset-md-1 offset-sm-0";
  return (
    <div className="container article">
      <div className="row">
        <div
          className={`${
            !offset ? centerStyle : null
          } col-lg-7 col-md-9 col-sm-12`}
        >
          <Heading level={heading}>{title}</Heading>
          <div className="article__content">{children ? children : body}</div>
        </div>
      </div>
    </div>
  );
};
