import React from "react";

import { Richtext as RichtextComponent } from "./Richtext";

export default {
  title: "Components/Heading with richtext",
  component: RichtextComponent,
  argTypes: {
    heading: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select"
      }
    }
  }
}

export const WithoutPlaceholder = (args) => {
  return <RichtextComponent {...args} />
}

WithoutPlaceholder.args = {
  title: "heading",
  body: "text body"
}

export const Richtext = (args) => {
  return <RichtextComponent {...args}>
    <p>Visjonen for det felles arbeidet er:</p>
    <p>
      <strong>
        En trygg og sikker helse- og omsorgstjeneste, uten skade, for
        hver pasient og bruker, alltid og overalt.
      </strong>
    </p>
    <p>
      Målet er færre pasientskader, bedre pasientsikkerhetskultur og
      varige strukturer for pasientsikkerhet og kvalitetsforbedring i
      helse- og omsorgstjenesten. For å lykkes kreves det en samordnet
      innsats i hele helse- og omsorgstjenesten.&nbsp;
    </p>
    <ol>
      <li>list item 1</li>
      <li>list item 2</li>
      <li>list item 3</li>
      <li>list item 4</li>
    </ol>
    <p>
      Pasientsikkerhetsarbeidet er forankret i{" "}
      <a href="https://www.helsedirektoratet.no/veiledere/ledelse-og-kvalitetsforbedring-i-helse-og-omsorgstjenesten/Nasjonal%20handlingsplan%20for%20pasientsikkerhet%20og%20kvalitetsforbedring%202019-2023.pdf/_/attachment/inline/79c83e08-c6ef-4adc-a29a-4de1fc1fc0ef:94a7c49bf505dd36d59d9bf3de16769bad6c32d5/Nasjonal%20handlingsplan%20for%20pasientsikkerhet%20og%20kvalitetsforbedring%202019-2023.pdf">
        Nasjonal handlingsplan for pasientsikkerhet og
        kvalitetsforbedring (2019-2023)
      </a>
      . I trygge hender 24-7 og handlingsplanen er en videreføring og
      videreutvikling av arbeidet i den nasjonale
      pasientsikkerhetskampanjen (2011-2013) og det nasjonale
      pasientsikkerhetsprogrammet (2014-2018).
    </p>
    <p>
      Viktige satsingsområder i handlingsplanen bygger opp under behovet
      for bedre ledelse og kultur, kompetanse, systemer og strukturer og
      nasjonale satsinger for å redusere pasientskader.
    </p>
    <p>
      Systematisk arbeid med pasientsikkerhet og kvalitetsforbedring er
      et ansvar for ledere på alle nivåer. 1.januar 2017 trådte
      Forskrift om ledelse og kvalitetsforbedring i helse- og
      omsorgstjenesten i kraft.{" "}
      <a href="https://www.helsedirektoratet.no/veiledere/ledelse-og-kvalitetsforbedring-i-helse-og-omsorgstjenesten">
        Forskriften og tilhørende veileder
      </a>{" "}
      er viktige verktøy både for systematisk styring og ledelse.
    </p>
    <p>
      Tiltakene i handlingsplanen for pasientsikkerhet og
      kvalitetsforbedring skal bidra til at tjenestene kan etterleve
      kravene i forskriften.
    </p>
    <h3 id="koordinering-og-samordning-av-arbeidet">
      Koordinering og samordning av arbeidet
    </h3>
    <p>
      Helsedirektoratet har ansvar for koordinering og samordning av
      arbeidet med den nasjonale handlingsplanen for pasientsikkerhet og
      kvalitetsforbedring. Ansvaret omfatter å forvalte nettside,
      nyhetsbrev, webinarer og andre kommunikasjonstiltak knyttet til I
      trygge hender
      <br />
      24-7, og å arrangere den årlige&nbsp; .
    </p>
  </RichtextComponent>
}

Richtext.args = {
  heading: "h2",
  title: "Overskrift",
  body: "Lorem ipsum",
  offset: false,
}