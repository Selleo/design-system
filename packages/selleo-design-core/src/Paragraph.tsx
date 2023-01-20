import cx from "classnames";
import { h } from "preact";

type ParagraphProps =
  | {
      size: "large" | "medium";
      weight: "regular" | "bold";
    }
  | {
      size: "small";
      weight?: never;
    };

export function Paragraph({
  size = "large",
  weight = "regular",
}: ParagraphProps) {
  const paragraphClassname = cx(
    "dark:text-white font-sans tracking-normal text-neutral-400",
    {
      "text-base leading-[175%]": size === "large",
      "text-sm leading-[175%]": size === "medium",
      "text-xs font-normal leading-[150%]": size === "small",
      "font-normal": weight === "regular",
      "font-bold": weight === "bold",
    }
  );
  return (
    <p class={paragraphClassname}>
      Paragraph with size=&quot;{size}&quot;
      {size !== "small" ? ` and weight="${weight}"` : null}
    </p>
  );
}
