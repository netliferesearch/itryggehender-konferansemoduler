import { Heading } from "../../elements/Heading";
import { ClockIcon } from "../../elements/Icon";
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
      href: i === 0 ? "" : "#", // Let the first module be a textbox module without link
    });
  }
  return dummyArray;
};

const LinkHeading = ({ href, children, color }) => {
  if (!href) {
    return <h3 className="c-box__heading">{children}</h3>;
  }
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
};

export const TransportModule = ({
  heading = "overskift",
  lead = "ingress",
  alignLead = "left",
  showImg = false,
  showText = false,
  showDummyText = true,
  boxes = 3,
  alignBoxes = "left",
  color = "orange",
  cols = "3",
}) => {
  const layoutStyle = {
    1: "col-12 col-md-10 col-lg-8",
    2: "col-md-6",
    3: "col-lg-4 col-md-6",
  };
  const alignStyle = {
    default: "",
    left: "u-align-left",
    center: "u-align-center",
    right: "u-align-right",
  };

  return (
    <>
      <section className="container c-transport-module">
        <div className="row">
          <div className={`col-12 col-md-10 col-lg-8 ${alignStyle[alignLead]}`}>
            <Heading level="h2" classes="mb-3">
              <span className="c-transport-module__icon">
                <ClockIcon />
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
                  href = "#",
                  cta = true,
                },
                index
              ) => {
                return (
                  <div
                    className={`c-box ${href ? '' : 'c-box--no-link'} ${layoutStyle[cols]} ${
                      cols === "1" ? alignStyle[alignBoxes] : ""
                    }`}
                  >
                    {showImg && (
                      <div>
                        {index === 1 ? (
                          <img
                            className={`w-100 c-box__img c-box__img--col-${cols}`}
                            src="https://via.placeholder.com/1500x500"
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
                      <LinkHeading color={color} href={href}>
                        {heading}
                      </LinkHeading>
                      {showText && (
                        <div className={`c-box__text-body`}>
                          <p>{body}</p>
                          {index === 0 && (
                            <>
                              <ul>
                                <li>Unordered list item</li>
                                <li>
                                  <a href="/">Link</a>
                                </li>
                              </ul>
                              <ol>
                                <li>Ordered list item</li>
                                <li>
                                  <a href="/">Link</a>
                                </li>
                              </ol>
                            </>
                          )}
                        </div>
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
