import cx from "classnames";
import { h } from "preact";

type ParagraphProps =
  | ({
      size: "large" | "medium";
      weight: "regular" | "bold";
    } & h.JSX.ElementChildrenAttribute)
  | ({
      size: "small";
      weight?: never;
    } & h.JSX.ElementChildrenAttribute);

export function Paragraph({
  size = "large",
  weight = "regular",
  children,
}: ParagraphProps) {
  const paragraphClassname = cx(
    "dark:text-white font-sans tracking-normal text-neutral-400",
    {
      "text-base leading-175": size === "large",
      "text-sm leading-175": size === "medium",
      "text-xs font-normal leading-150": size === "small",
      "font-normal": weight === "regular",
      "font-bold": weight === "bold",
    }
  );
  return <p class={paragraphClassname}>{children}</p>;
}
