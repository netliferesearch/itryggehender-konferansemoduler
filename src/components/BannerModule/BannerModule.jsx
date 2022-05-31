import { Heading } from "../../elements/Heading.jsx";
import Tabs from "./Tabs.jsx";

export const BannerModule = ({
  farge = "green",
  overskrift = "Overskrift",
  tekst = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vero sequi dolores aut repellat quisquam harum laudantium ipsum ducimus molestias ipsam beatae eveniet assumenda, placeat numquam enim id amet voluptas.`,
  bilde = "https://via.placeholder.com/400x300",
  alternativTekst = "",
  bildeHøyrestilt = true,
  lenke = "#",
  lenkeTekst = "Lenketekst",
  overskriftNivå = "h1",
  medFaner = true,
}) => {
  return (
    <>
      <div className={`c-banner u-bg-color--${farge}`}>
        <div class="container">
          <div className={`row ${bildeHøyrestilt ? "flex-row-reverse" : ""}`}>
            <div className="col-md mb-5 mb-md-0 c-banner__img">
              <img className="w-100" src={bilde} alt={alternativTekst} />
            </div>
            <div className="col-md">
              <Heading classes="mb-4" level={overskriftNivå}>
                {overskrift}
              </Heading>
              {tekst && <p className="c-banner__lead mb-4">{tekst}</p>}
              {lenke && (
                <a
                  href={lenke}
                  className={`btn btn-link btn-link--arrow c-banner__link ${
                    farge === "deep-blue" ? "u-btn-link--arrow-white" : ""
                  }`}
                >
                  {lenkeTekst}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {medFaner && <Tabs />}
    </>
  );
};
