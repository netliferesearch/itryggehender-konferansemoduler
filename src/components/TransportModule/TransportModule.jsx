const generateDummyContent = (amount) => {
  const dummyArray = [];
  for (let i = 0; i < amount; i++) {
    dummyArray.push({
      img: undefined,
      showImg: false,
      heading: "heading",
      body: `En rummelig havesal i KONSUL BERNICKS hus. I forgrunden til venstre
      fører en dør ind til konsulens værelse; længere tilbage, på samme væg,
      er en lignende dør. Midt på den modsatte væg er en større
      indgangsdør.`,
      url: i !== 1 ? "#" : "",
    });
  }
  return dummyArray;
};

export const TransportModule = ({
  title = "",
  lead = "",
  icon = "/icons/",
  cols = 3,
  color = "orange",
  isCollapsed = false,
}) => {
  const layout = {
    1: "col-md-10 col-lg-8 offset-md-1 offset-lg-2",
    2: "col-md-6",
    3: "col-md-6 col-lg-4 mx-auto",
  };

  return (
    <>
      <div className="container">
        <div className={`mb-96 mt-96 row align-items-end`}>
          {generateDummyContent(cols).map(
            (
              {
                img = "https://via.placeholder.com/400x300",
                altText = "alt text",
                showImg = false,
                heading = "heading",
                body = "text",
                url = "#",
                cta = true,
              },
              i
            ) => {
              return (
                <div className={`${layout[cols]} c-box mb-4`}>
                  {i === 0 && (
                    <div>
                      <img className="w-100" src={img} alt={altText} />
                    </div>
                  )}
                  <div className={`u-bg-color--${color} box-home relative`}>
                    {url && <a className="stretched-link" href={url}></a>}
                      <h3
                        className={`${
                          cta && url ? "btn btn-link--arrow title-link" : ""
                        }`}
                      >
                        {heading}
                      </h3>
                      <div className={`c-box__text-body`}>{body}</div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
