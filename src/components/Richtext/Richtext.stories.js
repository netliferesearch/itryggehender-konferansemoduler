import React from "react";
import { Richtext as RichtextComponent } from "./Richtext";

export default {
  Title: "Overskrift og brødtekst",
  component: RichtextComponent,
}

export const Richtext = (args) => {
  return <RichtextComponent {...args} />
}

Richtext.args = {
  title: "Overskrift",
  body: ""
}
