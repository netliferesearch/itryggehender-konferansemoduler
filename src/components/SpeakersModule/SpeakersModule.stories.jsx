import React from "react";
import { default as SpeakersModuleComponent } from "./SpeakersModule";
import speakersModuleData from "./SpeakersModule.data";

export default {
  title: "Components/Speakers Module",
  component: SpeakersModuleComponent,
};

export const SpeakersModule = ({ ...args }) => (
  <SpeakersModuleComponent {...args} />
);

SpeakersModule.args = speakersModuleData;
