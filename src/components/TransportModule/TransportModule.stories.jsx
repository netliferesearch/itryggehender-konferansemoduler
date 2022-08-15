import { TransportModule as TransportModuleComponent } from "./TransportModule.jsx";

export default {
  title: "Components/TransportModule",
  component: TransportModuleComponent,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["orange", "blue", "deep-blue", "green", "grey"],
      },
    },
    cols: {
      control: {
        type: "select",
        options: ["1", "2", "3"],
      },
    },
    alignLead: {
      control: {
        type: "select",
        options: ["default", "left", "center", "right"],
      },
    },
    alignBoxes: {
      control: {
        type: "select",
        options: ["default", "left", "center", "right"],
      },
    },
  },
};

export const TransportModule = ({ ...args }) => {
  return <TransportModuleComponent {...args} />;
};

TransportModule.args = {
  heading: "overskift",
  lead: "",
  alignLead: "default",
  boxes: 3,
  cols: "3",
  alignBoxes: "default",
  color: "blue",
  showImg: false,
  showText: true,
  showDummyText: true,
};
