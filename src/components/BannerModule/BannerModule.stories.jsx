import { BannerModule as BannerModuleComponent } from "./BannerModule";

export default {
  title: 'Components/BannerModule',
  component: BannerModuleComponent,
  argTypes: {
    overskriftNivå: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select"
      }
    },
    farge: {
      options: ["green", "deep-blue", "blue", "orange", "grey"],
      control:{
        type: "select"
      }
    }
  }
};

export const BannerModule = ({...args}) => {
  return (
    <BannerModuleComponent
      {...args}
    />
  );
}

BannerModule.args = {
  farge: "green",
  overskrift: "Overskrift",
  overskriftNivå: "h1",
  tekst: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vero sequi dolores aut repellat quisquam harum laudantium ipsum ducimus molestias ipsam beatae eveniet assumenda, placeat numquam enim id amet voluptas.`,
  bilde: "https://via.placeholder.com/400x300",
  alternativTekst: "",
  bildeHøyrestilt: true,
  lenke: "#",
  lenkeTekst: "Lenketekst",
  medFaner: false
};