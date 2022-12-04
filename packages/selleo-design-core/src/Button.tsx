import { h, ComponentChildren } from "preact";
import { parseComponent } from "./parser";

export function Button() {
  return <button class="flex">Button</button>;
}

export const { HTMLString: ButtonHTMLString, ReactString: ButtonReactString } =
  parseComponent(Button);
