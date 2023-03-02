import { Fragment, h } from "preact";
import { MenuIcon, SelleoLogo } from "./icons";
import { CaretDownIcon } from "./icons/CaretDownIcon";

export function Header() {
  return (
    <header class="w-full h-fit static bg-white dark:bg-black flex justify-between items-center">
      <div class="px-4 text-black dark:text-white hidden lg:block">
        <SelleoLogo classes="h-3 w-fit" />
      </div>
      <MenuIcon class="ml-2 cursor-pointer lg:hidden" />
      <div class="flex justify-end items-center my-1 cursor-pointer text-neutral-600 dark:text-white mr-2 lg:mr-4">
        <div class="rounded-full bg-transparent border border-neutral-100 dark:border-0 dark:bg-white text-neutral-600 flex items-center justify-center w-3 h-3 text-xxs lg:w-4 lg:h-4 lg:text-xs">
          UN
        </div>
        <Fragment>
          <div class="text-xs font-normal ml-1 hidden lg:block">User Name</div>
          <CaretDownIcon class="ml-0.5 w-2 h-2 hidden lg:block" />
        </Fragment>
      </div>
    </header>
  );
}
