import React from "react";
import { default as ProgramModuleComponent } from "./ProgramModule";
import programModuleData from "./ProgramModule.data";

export default {
  title: "Components/Program Module",
  component: ProgramModuleComponent,
};

export const ProgramModule = ({ ...args }) => (
  <ProgramModuleComponent {...args} />
);

ProgramModule.args = programModuleData;
