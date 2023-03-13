import { h } from 'preact';
import { Avatar } from './Avatars';
import { MenuIcon, SelleoLogo } from './icons';
import { CaretDownIcon } from './icons/CaretDownIcon';

export function AppHeader() {
  return (
    <header class="w-full h-fit static bg-white dark:bg-black flex justify-between items-center">
      <div class="px-4 text-black dark:text-white hidden lg:block">
        <SelleoLogo classes="h-3 w-fit" />
      </div>
      <MenuIcon class="ml-2 cursor-pointer lg:hidden" />
      <div class="flex justify-end items-center my-1 cursor-pointer text-neutral-600 dark:text-white mr-2 lg:mr-4">
        <Avatar
          containerClass="hidden lg:flex"
          username="User Name"
          size="big"
        />
        <Avatar
          containerClass="lg:hidden"
          username="User Name"
          size="regular"
          hideName
        />
        <CaretDownIcon class="ml-0.5 w-2 h-2 hidden lg:block" />
      </div>
    </header>
  );
}
