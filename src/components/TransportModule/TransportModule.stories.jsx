import { TransportModule as TransportModuleComponent } from "./TransportModule";

export default {
  title: "Components/Transport Module",
  component: TransportModuleComponent,
};

export const TransportModule = (args) => {
  <TransportModuleComponent {...args} />
}