import { BannerModule as BannerModuleComponent } from "./BannerModule";

export default {
  title: 'Components/BannerModule',
  component: BannerModuleComponent
};

export const BannerModule = ({...args}) => {
  return (
    <BannerModuleComponent
      {...args}
    />
  );
}

BannerModule.args = {
  color: "green",
  title: "Overskrift", 
  lead: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vero sequi dolores aut repellat quisquam harum laudantium ipsum ducimus molestias ipsam beatae eveniet assumenda, placeat numquam enim id amet voluptas.",
  img: "https://via.placeholder.com/400x300",
  altText: "lorem",
  isImgRight: false,
  url: "#",
  urlText: "Lenketekst",
  headingLevel: "h1",
  withTabs: false
}