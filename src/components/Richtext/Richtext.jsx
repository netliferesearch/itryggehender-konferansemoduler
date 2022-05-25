export const Richtext = ({ offset = false, title, body, children }) => {
  const centerStyle = "offset-lg-3 offset-md-1 offset-sm-0"
  return (
    <div className="container article">
      <div className="row">
        <div className={`${!offset ? centerStyle : null} col-lg-7 col-md-9 col-sm-12`}>
          <h2 className="">{title}</h2>
          <div className="article__content">
            {children ? children : body}
          </div>
        </div>
      </div>
    </div>
  );
};
