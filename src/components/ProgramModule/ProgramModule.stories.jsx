import React from "react";
import { default as ProgramModuleComponent } from "./ProgramModule";
import programModuleData from "./ProgramModule.data";

export default {
  title: "Components/Program Module",
  component: ProgramModuleComponent,
};

export const WithoutContent = ({ ...args }) => (
  <ProgramModuleComponent {...args} />
);

WithoutContent.args = {
  overskrift: "overskrift",
  ingress: "ingress",
  bolker: [
    {
      bolkNavn: "blockName",
      bolkIngress: "blockIngress",
      programposter: [
        {
          klokkeslett: "klokkeslett",
          foredragsholder: "foredragsholder",
          foredragTittel: `foredragTittel`,
          lokale: "lokale",
          omForedraget: "omForedraget",
          // bilde: "https://picsum.photos/400/300",
          temaer: [
            {
              tema: "tema",
              colorClass: "orange",
            },
          ],
          lesMerLink: "https://www.itryggehender24-7.no/",
          foredragsholdere: [
            {
              navn: "navn",
              stilling: "stilling",
              selskap: "selskap",
              bilde: "https://picsum.photos/144",
            },
          ],
        },
      ],
    },
  ],
};

export const ProgramModule = ({ ...args }) => (
  <ProgramModuleComponent {...args} />
);

ProgramModule.args = programModuleData;
