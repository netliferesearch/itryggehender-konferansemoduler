import React from "react";
import PropTypes from "prop-types";
import Richtext from "../Richtext";
import ArrowAccordion from "../../img/icons/arrow-accordion.svg";

const SpeakersModule = ({
  overskrift = "",
  ingress = "",
  foredragsholdere = [],
}) => {
  const slugify = (string) =>
    string
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <>
      <Richtext heading="h1" title={overskrift} body={ingress} offset />

      <section className="container">
        <h2 className="mb-5">Overskrift kommer her</h2>

        <ul className="accordion row c-speakers__speaker-list" id="speakers">
          {foredragsholdere.map(
            ({ navn, stilling, selskap, bilde, longDescription }, index) => (
              <li key={index} className="col-md-6">
                <div className={`c-speakers__speaker c-collapsible`}>
                  <button
                    className="c-collapsible__button collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapsePost${slugify(navn)}`}
                    aria-expanded="false"
                    aria-controls={`collapsePost${slugify(navn)}`}
                  >
                    <img
                      className="c-collapsible__button-arrow"
                      src={ArrowAccordion}
                      alt=""
                    />
                  </button>

                  <div className="c-collapsible__body">
                    <div className="c-speakers__speaker-header flex-column flex-lg-row">
                      <img
                        className="c-speakers__speaker-image"
                        src={bilde}
                        alt=""
                      />
                      <div className="c-speakers__speaker-info">
                        <h3 className="c-speakers__speaker-name">{navn}</h3>
                        <div className="c-speakers__speaker-profession">
                          {stilling}
                        </div>
                        <div className="c-speakers__speaker-company">
                          {selskap}
                        </div>
                      </div>
                    </div>
                    
                    <div
                      className="collapse"
                      id={`collapsePost${slugify(navn)}`}
                      data-parent={`#speakers`}
                    >
                      <div className="c-speakers__speaker-description">
                        {longDescription}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

SpeakersModule.propTypes = {
  overskrift: PropTypes.string,
  ingress: PropTypes.string,
  foredragsholdere: PropTypes.arrayOf(
    PropTypes.shape({
      navn: PropTypes.string,
      stilling: PropTypes.string,
      selskap: PropTypes.string,
      bilde: PropTypes.string,
      longDescription: PropTypes.string,
    })
  ),
};

export default SpeakersModule;
