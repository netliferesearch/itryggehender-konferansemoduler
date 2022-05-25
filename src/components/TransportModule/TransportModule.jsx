import { number } from "prop-types";

export const TransportModule = ({ amount = 0, color = "green"}) => {
  const boxes = [""]
  return (
    <div data-portal-component-type="part" className="container">
      <div className="row mb-96 mt-96">
        <div className="d-flex flex-row">
          {boxes.map(
            ({
              img = null,
              showImg = false,
              title = "",
              lead = "",
              url = "",
            }) => {
              return (
                <div className={`u-bg-color--${color} box-home right-box`}>
                  <a href="#">
                    <h3 className="btn btn-link--arrow title-link">
                      Om pasientsikkerhet
                    </h3>
                    <p>
                      Hver pasientskade er én for mye. Målet er en trygg og
                      sikker helse- og omsorgstjeneste - uten skade, for hver
                      pasient og bruker, alltid og overalt.
                    </p>
                  </a>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};