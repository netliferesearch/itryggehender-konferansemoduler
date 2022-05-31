import { Heading } from "../../elements/Heading.jsx";

export const BannerModule = ({
  color = "deep-blue",
  title = "Overskrift",
  lead = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vero sequi dolores aut repellat quisquam harum laudantium ipsum ducimus molestias ipsam beatae eveniet assumenda, placeat numquam enim id amet voluptas.`,
  img = "https://via.placeholder.com/400x300",
  altText = "",
  isImgLeft = true,
  url = "#",
  urlText = "Lenketekst",
  headingLevel = "h1",
}) => {
  return (
    <div className={`c-banner u-bg-color--${color}`}>
      <div class="container">
        <div className="row">
          <div className="col-md mb-4 mb-md-0">
            <img className="w-100" src={img} alt={altText} />
          </div>
          <div className="col-md">
            <Heading classes="mb-4" level={headingLevel}>
              {title}
            </Heading>
            {lead && <p className="c-banner__lead mb-4">{lead}</p>}
            {url && (
              <a href={url} className={`btn btn-link btn-link--arrow ${color === "deep-blue" ? "u-btn-link--arrow-white" : ""}`}>
                {color}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
