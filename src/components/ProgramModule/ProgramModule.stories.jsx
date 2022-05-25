import React from "react";
import { default as ProgramModuleComponent } from "./ProgramModule";

// export default {
//   title: "Components/Program Module (WORK IN PROGRESS)",
//   component: ProgramModuleComponent,
// };

export const ProgramModule = ({ ...args }) => (
  <ProgramModuleComponent {...args} />
);

const generateProgramPosts = ({ amount }) => {
  let posts = [];

  for (let index = 0; index < amount; index++) {
    posts.push({
      ...(index !== 2 && {
        klokkeslett: `${(9 + index).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}:50`,
      }),
      foredragsholder: "Ola Erik Nordmann, firma",
      foredragTittel: `Navnet på foredrag ${index} kommer her og kan være over flere linjer, men bør ikke være for langt`,
      ...((index + 1) % 2 && { lokale: "Stedet det holdes" }),
      omForedraget:
        "Ingress om foredraget kommer frem når man trykker seg inn på foredraget og kan være lengre enn navnet på foredraget. Da kan man få muligheten til å fortelle mer i dybden og få frem viktige poenger, man kan også skrive en setning om foredragsholderen under.",
      // bilde: "https://picsum.photos/400/300",
      temaer: [
        {
          tema: "Navn på tema 1",
          color: "#FE6100",
        },
        {
          tema: "Navn på tema 2",
          color: "#1E0072",
        },
        {
          tema: "Navn på tema 3",
          color: "#00625D",
        },
        {
          tema: "Navn på tema 4",
          color: "#615046",
        },
      ],
      lesMerLink: "https://www.itryggehender24-7.no/",
      foredragsholdere: [
        {
          navn: "Ola Erik Nordmann,",
          beskrivelse: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann,",
          beskrivelse: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann,",
          beskrivelse: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann,",
          beskrivelse: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann,",
          beskrivelse: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
      ],
    });
  }

  return posts;
};

ProgramModule.args = {
  overskrift: "Dag 1: Heading kommer her",
  ingress:
    "Her er det plass til en ingress om man trenger det. Her er det plass til en ingress om man trenger det. Her er det plass til en ingress om man trenger det. Her er det plass til en ingress om man trenger det.",
  programposter: generateProgramPosts({ amount: 3 }),
};
