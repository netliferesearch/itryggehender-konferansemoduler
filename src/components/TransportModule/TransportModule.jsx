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

const LinkHeading = ({ href, children }) => {

  if(href){return (
    <a
      href={href}
    >
      <h3 className="btn btn-link--arrow title-link">{children}</h3>
    </a>
  )}
  return <h3>{children}</h3>;
};

export const TransportModule = ({
  cols = 3,
  color = "orange",
  layout = "3"
}) => {

  return (
    <>
      <div className="container">
        <div className={`c-transport-module c-transport-module--col-${layout}`}>
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
                <div className={`c-box`}>
                  {i === 0 && (
                    <div>
                      <img className="w-100" src={img} alt={altText} />
                    </div>
                  )}
                  <div className={`u-bg-color--${color} box-home`}>
                    <LinkHeading href={url}>heading</LinkHeading>
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
