import { Fragment, h } from "preact";
import { MenuIcon, SelleoLogo } from "./icons";
import { CaretDownIcon } from "./icons/CaretDownIcon";
import cx from "classnames";

type Props = {
  variant: "desktop" | "mobile";
};

export function Header({ variant = "desktop" }: Props) {
  const userWrapperClasses = cx(
    "flex justify-end items-center my-1 cursor-pointer text-neutral-600 dark:text-white",
    {
      "mr-4": variant === "desktop",
      "mr-2": variant === "mobile",
    }
  );

  const avatarClasses = cx(
    "rounded-full bg-transparent border border-neutral-100 dark:border-0 dark:bg-white text-neutral-600 flex items-center justify-center",
    {
      "w-4 h-4 text-xs": variant === "desktop",
      "w-3 h-3 text-xxs": variant === "mobile",
    }
  );

  return (
    <header class="w-full h-fit static bg-white dark:bg-black flex justify-between items-center">
      {variant === "desktop" ? (
        <div class="px-4 text-black dark:text-white">
          <SelleoLogo classes="h-3 w-fit" />
        </div>
      ) : (
        <MenuIcon class="ml-2 cursor-pointer" />
      )}
      <div class={userWrapperClasses}>
        <div class={avatarClasses}>UN</div>
        {variant === "desktop" && (
          <Fragment>
            <div class="text-xs font-normal ml-1">User Name</div>
            <CaretDownIcon class="ml-0.5 w-2 h-2" />
          </Fragment>
        )}
      </div>
    </header>
  );
}
