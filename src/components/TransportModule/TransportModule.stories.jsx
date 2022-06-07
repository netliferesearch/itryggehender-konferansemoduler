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
        options: [1, 2, 3],
      },
    },
    layout: {
      control: {
        type: "select",
        options: ["1", "2", "3", "1-2"],
      }
    }
  },
};

export const TransportModule = ({ ...args }) => {
  return <TransportModuleComponent {...args} />;
};

TransportModule.args = {
  cols: 3,
  layout: "3",
  color: "blue",
};
