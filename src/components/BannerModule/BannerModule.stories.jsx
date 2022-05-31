import { BannerModule as BannerModuleComponent } from "./BannerModule";
import bannerModuleData from "./BannerModule.data";

export default {
  title: "Components/BannerModule",
  component: BannerModuleComponent,
  argTypes: {
    overskriftNivå: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select",
      },
    },
    farge: {
      options: ["green", "deep-blue", "blue", "orange", "grey"],
      control: {
        type: "select",
      },
    },
  },
};

export const BannerModule = ({ ...args }) => {
  return <BannerModuleComponent {...args} />;
};

BannerModule.args = bannerModuleData;
