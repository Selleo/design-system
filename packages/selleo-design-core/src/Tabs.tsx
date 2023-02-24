import { h } from "preact";
import cx from "classnames";

type TabProps = {
  active: boolean;
  icon?: JSX.Element;
};

export function Tab({ active, icon }: TabProps) {
  const classes = cx(
    "px-2 py-1 text-base font-normal rounded-lg cursor-pointer",
    {
      "text-[#FF6D2A] bg-[#FFF8F5]": active,
      "text-[#4C4D52] bg-white hover:bg-[#FFF8F5] dark:text-white dark:bg-[#2F3033] dark:hover:bg-[#4C4D52]":
        !active,
    }
  );

  return (
    <span class={classes}>
      {icon && "x "}
      Item
    </span>
  );
}
