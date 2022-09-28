import React from "react";
import { RichtextData } from "./richtext.data"

import { Richtext as RichtextComponent } from "./Richtext";

export default {
  title: "Components/Heading with richtext",
  component: RichtextComponent,
  argTypes: {
    heading: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select"
      }
    },
    style: {
      control: {
        type: "select",
        options: ["regular", "center", "wide", "centerWide"]
      }
    }
  }
}

export const WithoutPlaceholder = (args) => {
  return <RichtextComponent {...args} />
}

WithoutPlaceholder.args = {
  title: "heading",
  body: "text body"
}

export const Richtext = (args) => {
  return <RichtextComponent {...args}>
    <RichtextData />
  </RichtextComponent>
}

Richtext.args = {
  heading: "h2",
  title: "Overskrift",
  body: "Lorem ipsum",
  offset: "regular",
}