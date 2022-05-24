export const Richtext = ({ title, body, children }) => {
  return (
    <div className="container article">
      <div className="row">
        <div className="offset-lg-3 col-lg-7 offset-md-1 col-md-9 offset-sm-0 col-sm-12">
          <h2 className="">{title}</h2>
          <div className="article__content">
            {children ? children : body}
          </div>
        </div>
      </div>
    </div>
  );
};
