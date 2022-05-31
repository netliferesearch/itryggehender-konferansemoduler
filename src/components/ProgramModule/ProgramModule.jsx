import React from "react";
import PropTypes from "prop-types";
import Richtext from "../Richtext";
import ArrowAccordion from "../../img/icons/arrow-accordion.svg";
import Clock from "../../img/icons/clock.svg";
import Place from "../../img/icons/place.svg";

const ProgramModule = ({ overskrift = "", ingress = "", bolker = [] }) => {
  const slugify = (string) =>
    string
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <>
      <Richtext heading="h1" title={overskrift} body={ingress} offset />

      <div className="container">
        {bolker.map(({ bolkNavn, bolkIngress, programposter }) => (
          <section className="row mb-5" key={bolkNavn}>
            <div className="col-lg-7 mb-5">
              <h2 className="c-program__heading">{bolkNavn}</h2>
              <p>{bolkIngress}</p>
            </div>
            <div className="accordion col-12" id={slugify(bolkNavn)}>
              {programposter.map(
                ({
                  klokkeslett,
                  foredragsholder,
                  foredragTittel,
                  lokale,
                  omForedraget,
                  bilde,
                  temaer,
                  lesMerLink,
                  foredragsholdere,
                }) => (
                  <section
                    key={foredragTittel}
                    className="c-program c-collapsible"
                  >
                    <button
                      className="c-collapsible__button collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapsePost${slugify(foredragTittel)}`}
                      aria-expanded="false"
                      aria-controls={`collapsePost${slugify(foredragTittel)}`}
                    >
                      <span>
                        {klokkeslett && (
                          <span className="c-program__meta">
                            <img className="" src={Clock} alt="" />
                            {klokkeslett}
                          </span>
                        )}

                        {lokale && (
                          <span className="c-program__meta">
                            <img className="" src={Place} alt="" />
                            {lokale}
                          </span>
                        )}
                      </span>

                      <img
                        className="c-collapsible__button-arrow"
                        src={ArrowAccordion}
                        alt=""
                      />
                    </button>

                    <div className="c-collapsible__body">
                      <h3 className="c-program__heading">{foredragTittel}</h3>
                      <div className="c-program__main-lecturer">
                        {foredragsholder}
                      </div>
                      <ul className="c-program__themes">
                        {temaer.map(({ tema, colorClass }) => (
                          <li key={tema}>
                            <div
                              className={`c-program__themes-color c-program__themes-color--${colorClass}`}
                            ></div>
                            {tema}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="collapse"
                        id={`collapsePost${slugify(foredragTittel)}`}
                        data-parent={`#${slugify(bolkNavn)}`}
                      >
                        {bilde && <img className="mt-4" src={bilde} alt="" />}
                        <div className="c-program__description">
                          {omForedraget}
                        </div>
                        <p>
                          <a href={lesMerLink}>
                            Les mer om foredragsholderene her
                          </a>
                        </p>
                        <ul className="c-program__lecturers">
                          {foredragsholdere.map(
                            ({ navn, stilling, selskap, bilde }, index) => (
                              <li key={index} className="c-program__lecturer">
                                <img
                                  className="c-program__lecturer-image"
                                  src={bilde}
                                  alt=""
                                  width="140px"
                                  height="140px"
                                />
                                <div className="c-program__lecturer-name">
                                  {navn},
                                </div>
                                <div className="c-program__lecturer-profession">
                                  {stilling}
                                </div>
                                <div className="c-program__lecturer-company">
                                  {selskap}
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </section>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

ProgramModule.propTypes = {
  overskrift: PropTypes.string,
  ingress: PropTypes.string,
  bolker: PropTypes.arrayOf(
    PropTypes.shape({
      programposter: PropTypes.arrayOf(
        PropTypes.shape({
          startdato: PropTypes.string,
          sluttdato: PropTypes.string,
          foredragsholder: PropTypes.string,
          foredragTittel: PropTypes.string,
          lokale: PropTypes.string,
          omForedraget: PropTypes.string,
          bilde: PropTypes.string,
          temaer: PropTypes.arrayOf(
            PropTypes.shape({
              tema: PropTypes.string,
              colorClass: PropTypes.string,
            })
          ),
          lesMerLink: PropTypes.string,
          foredragsholdere: PropTypes.arrayOf(
            PropTypes.shape({
              navn: PropTypes.string,
              stilling: PropTypes.string,
              selskap: PropTypes.string,
              bilde: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
};

export default ProgramModule;
