import React from "react";
import { Heading } from "../../elements/Heading";

const boxData = {
  stikkTittel: "Stikktittel",
  tittel: "Tittel",
  // bilde: "https://via.placeholder.com/400x300",
  bilde: "",
  ingress: "Innledende tekst til boksen",
  innhold: `
  Det var en gang en brødtekst. Den skulle fylle litt tomrom slik at 
  utvikleren kunne se hva hvordan ting så ut med, uten å måtte spørre
  om hjelp til å skrive noe eller bruke sånn kjedelig lorem ipsum tekst.
  `,
};

const generateBoxArray = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(boxData);
  }
  return arr;
};

const Box = ({ box }) => {
  const { farge, stikkTittel, tittel, bilde, ingress, innhold } = box;
  return (
    <div
      className={`u-bg-color--${farge} c-transport-collapsible__box  box-home`}
    >
      <div className="">
        {/* heading */}
        <div>
          <div className="c-transport-collapsible__kicker">{stikkTittel}</div>
          <Heading level="h2" classes="">
            {tittel}
          </Heading>
        </div>
        {/* heading end */}
        {/* lead */}
        <div className="c-transport-collapsible__lead">
          <div className="c-transport-collapsible__lead-image">
            {bilde && <img src={bilde} alt="alt tekst" />}
          </div>
          <div className="c-transport-collapsible__lead-text">
            <p>{ingress}</p>
          </div>
        </div>
        {/* lead end */}
      </div>
    </div>
  );
};

export const TransportCollapsible = ({ tittel, ingress }) => {
  return (
    <section className="container">
      <Heading>{tittel}</Heading>
      <div className="">{ingress}</div>

      <div className="c-transport-collapsible__boxes">
        {generateBoxArray(6).map((box, i) => {
          console.log();
          return <Box key={i} box={box} />;
        })}
      </div>
    </section>
  );
};
