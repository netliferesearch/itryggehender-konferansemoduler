import { Heading } from "../../elements/Heading";
import { DummyHtml } from "./dummyRichtext";

const generateDummyContent = (amount) => {
  const dummyArray = [];
  for (let i = 0; i < amount; i++) {
    dummyArray.push({
      img: "https://via.placeholder.com/400x300",
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

const LinkHeading = ({ href, children }) => {
  if (href) {
    return (
      <a href={href}>
        <h3 className="btn btn-link--arrow title-link">{children}</h3>
      </a>
    );
  }
  return <h3>{children}</h3>;
};

export const TransportModule = ({
  heading = "overskift",
  lead = "ingress",
  showImg = false,
  showText = false,
  showDummyText = true,
  boxes = 3,
  color = "orange",
  cols = "3",
}) => {
  const layoutStyle = {
    1: "col-8 offset-2",
    2: "col-md-6",
    3: "col-lg-4 col-md-6",
  };
  const boxLayoutStyle = {
    1: "c-box--col-1",
    2: "c-box--col-2",
    3: "c-box--col-3",
  };

  return (
    <>
      <section className="container c-transport-module">
        <Heading level="h2" classes="mb-3">{heading}</Heading>
        <div className="article mb-4">{lead}
        {showDummyText && (<DummyHtml />)}

        </div>

        <div className="">
          <div className={`row c-transport-module__box-container`}>
            {generateDummyContent(boxes).map(
              (
                {
                  img = "https://via.placeholder.com/400x300",
                  altText = "alt text",
                  heading = "heading",
                  body = "text",
                  url = "#",
                  cta = true,
                },
                i
              ) => {
                return (
                  <div className={`c-box ${layoutStyle[cols]}`}>
                    {showImg && (
                      <div>
                        <img className="w-100" src={img} alt={altText} />
                      </div>
                    )}
                    <div
                      className={`u-bg-color--${color} c-box--col-${boxLayoutStyle[cols]} box-home`}
                    >
                      <LinkHeading href={url}>heading</LinkHeading>
                      {showText && (
                        <div className={`c-box__text-body`}>{body}</div>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};
