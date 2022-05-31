import { Heading } from "../../elements/Heading.jsx";

export const BannerModule = ({
  color = "green",
  title = "Overskrift",
  lead = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vero sequi dolores aut repellat quisquam harum laudantium ipsum ducimus molestias ipsam beatae eveniet assumenda, placeat numquam enim id amet voluptas.`,
  img = "https://via.placeholder.com/400x300",
  altText = "",
  isImgRight = true,
  url = "#",
  urlText = "Lenketekst",
  headingLevel = "h1",
  withTabs = false
}) => {
  return (
    <div className={`c-banner u-bg-color--${color}`}>
      <div class="container">
        <div className={`row ${isImgRight ? "flex-row-reverse" : ""}`}>
          <div className="col-md mb-5 mb-md-0 c-banner__img">
            <img className="w-100" src={img} alt={altText} />
          </div>
          <div className="col-md">
            <Heading classes="mb-4" level={headingLevel}>
              {title}
            </Heading>
            {lead && <p className="c-banner__lead mb-4">{lead}</p>}
            {url && (
              <a href={url} className={`btn btn-link btn-link--arrow c-banner__link ${color === "deep-blue" ? "u-btn-link--arrow-white" : ""}`}>
                {color}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
