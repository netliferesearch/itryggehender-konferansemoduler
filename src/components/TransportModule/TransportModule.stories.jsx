import { TransportModule as TransportModuleComponent } from "./TransportModule.jsx";

export default {
  title: "Components/TransportModule",
  component: TransportModuleComponent,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["orange", "blue", "green", "grey"],
      },
    },
    cols: {
      control: {
        type: "select",
        options: ["1", "2", "3"],
      }
    },
  },
};

export const TransportModule = ({ ...args }) => {
  return <TransportModuleComponent {...args} />;
};

TransportModule.args = {
  heading: "overskift",
  lead: "ingress",
  boxes: 3,
  cols: "3",
  color: "blue",
  showImg: false,
  showText: true,
};
