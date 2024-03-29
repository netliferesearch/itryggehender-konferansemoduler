const generateProgramPosts = ({ amount, bolkNavn }) => {
  let posts = [];

  for (let index = 1; index < amount + 1; index++) {
    posts.push({
      ...(index !== 2 && {
        klokkeslett: `${(9 + index).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}:50`,
      }),
      foredragsholder: "Ola Erik Nordmann, firma",
      foredragTittel: `Navnet på foredrag ${index} fra bolken ${bolkNavn}`,
      ...((index + 1) % 2 && { lokale: "Stedet det holdes" }),
      omForedraget:
        "Ingress om foredraget kommer frem når man trykker seg inn på foredraget og kan være lengre enn navnet på foredraget. Da kan man få muligheten til å fortelle mer i dybden og få frem viktige poenger, man kan også skrive en setning om foredragsholderen under.",
      // bilde: "https://picsum.photos/400/300",
      temaer: [
        {
          tema: "Navn på tema 1",
          colorClass: "orange",
        },
        {
          tema: "Navn på tema 2",
          colorClass: "blue-purple",
        },
        {
          tema: "Navn på tema 3",
          colorClass: "deep-green",
        },
        {
          tema: "Navn på tema 4",
          colorClass: "warm-grey",
        },
        {
          tema: "Navn på tema 5",
          colorClass: "light-orange",
        },
        {
          tema: "Navn på tema 6",
          colorClass: "light-blue",
        },
        {
          tema: "Navn på tema 7",
          colorClass: "light-brown",
        },
      ],
      lesMerLink: "https://www.itryggehender24-7.no/",
      foredragsholdere: [
        {
          navn: "Ola Erik Nordmann",
          stilling: "Lege",
          selskap: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann",
          stilling: "Lege",
          selskap: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann",
          stilling: "Lege",
          selskap: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann",
          stilling: "Lege",
          selskap: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
        {
          navn: "Ola Erik Nordmann",
          stilling: "Lege",
          selskap: "Universitetssykehuset Øst Østfold",
          bilde: "https://picsum.photos/144",
        },
      ],
    });
  }

  return posts;
};

const programModuleData = {
  overskrift: "Dag 1: Heading kommer her",
  ingress:
    "Her er det plass til en ingress om man trenger det. Her er det plass til en ingress om man trenger det. Her er det plass til en ingress om man trenger det. Her er det plass til en ingress om man trenger det.",
  bolker: [
    {
      bolkNavn: "Navn på bolk 1, feks Åpning",
      bolkIngress:
        "Det må være mulig å skrive noen få setninger her om bolken eller noe annet som er relevant for denne bolken av program. Men også mulig uten undertekst, slik som vist under under bolk “parallelsesjoner”",
      programposter: generateProgramPosts({
        amount: 3,
        bolkNavn: "Navn på bolk 1, feks Åpning",
      }),
    },
    {
      bolkNavn: "Navn på bolk 2, feks Midtdel",
      bolkIngress:
        "Det må være mulig å skrive noen få setninger her om bolken eller noe annet som er relevant for denne bolken av program. Men også mulig uten undertekst, slik som vist under under bolk “parallelsesjoner”",
      programposter: generateProgramPosts({
        amount: 3,
        bolkNavn: "Navn på bolk 3, feks Midtdel",
      }),
    },
    {
      bolkNavn: "Navn på bolk 3, feks Avslutning",
      bolkIngress:
        "Det må være mulig å skrive noen få setninger her om bolken eller noe annet som er relevant for denne bolken av program. Men også mulig uten undertekst, slik som vist under under bolk “parallelsesjoner”",
      programposter: generateProgramPosts({
        amount: 3,
        bolkNavn: "Navn på bolk 3, feks Avslutning",
      }),
    },
  ],
};

export default programModuleData;
