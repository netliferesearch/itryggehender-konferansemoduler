import { Heading } from "../../elements/Heading";
import { Icon } from "../../elements/Icon";
import { DummyHtml } from "./dummyRichtext";

const generateDummyContent = (amount) => {
  const dummyArray = [];
  for (let i = 0; i < amount; i++) {
    dummyArray.push({
      img: "https://via.placeholder.com/600x400",
      showImg: false,
      heading:
        "Dette er en ganske lang overskrift for å se om ting knekker/brekker/ikke funker. Pasientsikkerhetskonferansen. brannslukningsapparat",
      body: `En rummelig havesal i KONSUL BERNICKS hus. I forgrunden til venstre
      fører en dør ind til konsulens værelse; længere tilbage, på samme væg,
      er en lignende dør. Midt på den modsatte væg er en større
      fører en dør ind til konsulens værelse; længere tilbage, på samme væg,
      er en lignende dør. Midt på den modsatte væg er en større
      indgangsdør.`,
      url: "#",
    });
  }
  return dummyArray;
};

const LinkHeading = ({ href, children, color }) => {
  if (href) {
    return (
      <a href={href}>
        <h3
          className={`btn c-box__heading ${
            color === "deep-blue" ? "u-btn-link--arrow-white" : ""
          } btn-link--arrow title-link`}
        >
          {children}
        </h3>
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

  return (
    <>
      <section className="container c-transport-module">
        <div className="row">
          <div className="col-8">
          <Heading level="h2" classes="mb-3">
            <span className="c-transport-module__icon">
              <Icon />
            </span>
            {heading}
          </Heading>
          <div className="article mb-4">
            {lead}
            {showDummyText && <DummyHtml />}
          </div>
          </div>
        </div>

        <div className="">
          <div className={`row`}>
            {generateDummyContent(boxes).map(
              (
                {
                  img = "https://via.placeholder.com/600x400",
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
                        {i === 1 ? (
                          <img
                            className={`w-100 c-box__img c-box__img--col-${cols}`}
                            src="https://via.placeholder.com/400x600"
                            alt={altText}
                          />
                        ) : (
                          <img
                            className={`w-100 c-box__img c-box__img--col-${cols}`}
                            src={img}
                            alt={altText}
                          />
                        )}
                      </div>
                    )}
                    <div
                      className={`u-bg-color--${color} box-home c-box__text-container`}
                    >
                      <LinkHeading color={color} href={url}>
                        {heading}
                      </LinkHeading>
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
