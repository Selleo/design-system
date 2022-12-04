import { h } from "preact";
import { parseComponent } from "./parser";

export function Button() {
  return <button className="inline-flex bg-orange-500">Button</button>;
}

export const { HTMLString: ButtonHTMLString, ReactString: ButtonReactString } =
  parseComponent(Button);
