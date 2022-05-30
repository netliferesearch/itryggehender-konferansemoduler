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
      url: "#",
    });
  }
  return dummyArray;
};

export const TransportModule = ({
  title = "",
  lead = "",
  icon = "/icons/",
  cols = 2,
  color = "orange",
  isCollapsed = false,
}) => {
  const boxStyles = {
    1: "c-box-style__col-1",
    2: "c-box-style__col-2",
    3: "c-box-style__col-3",
  };

  return (
    <>
      <div className="container">
        <div className={`mb-96 mt-96 c-transport-module`}>
          {generateDummyContent(cols).map(
            (
              {
                img = "https://via.placeholder.com/400x300",
                altText = "alt text",
                showImg = true,
                heading = "heading",
                body = "text",
                url = "#",
                cta = true,
              },
              i
            ) => {
              return (
                <div className="c-transport-module--box">
                  {i === 0 && (
                    <div>
                      <img className="w-100" src={img} alt={altText} />
                    </div>
                  )}
                  <div
                    className={`u-bg-color--${color} c-box-style ${boxStyles[cols]} box-home`}
                  >
                    <a href={url}>
                      <h3
                        className={`${
                          cta ? "btn btn-link--arrow title-link" : ""
                        }`}
                      >
                        {heading}
                      </h3>
                      <div className={`c-box-style__text-body`}>{body}</div>
                    </a>
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
