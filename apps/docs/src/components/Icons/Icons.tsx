import type { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import {
  BookingDeskIcon,
  BookingRoomIcon,
  CheckIcon,
  ClearIcon,
  DashboardIcon,
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
  MenuIcon,
  PlaceholderIcon,
  PropertiesIcon,
  SearchIcon,
  TwitterIcon,
  UsersIcon,
  CaretDownIcon,
} from '@selleo/core/src/icons';
import { Icon } from '@selleo/core/src/Icon';
import { IconModal } from './IconModal';

type IconProps = {
  component: h.JSX.Element;
  name: string;
};

export const iconsData: IconProps[] = [
  {
    component: <BookingDeskIcon class="h-[24px] w-[24px]" />,
    name: 'booking-desk-icon',
  },
  {
    component: <BookingRoomIcon class="h-[24px] w-[24px]" />,
    name: 'booking-room-icon',
  },
  {
    component: <CaretDownIcon class="h-[24px] w-[24px]" />,
    name: 'caret-down-icon',
  },
  {
    component: <CheckIcon class="h-[24px] w-[24px]" />,
    name: 'check-icon',
  },
  {
    component: <ClearIcon class="h-[24px] w-[24px]" />,
    name: 'clear-icon',
  },
  {
    component: <DashboardIcon class="h-[24px] w-[24px]" />,
    name: 'dashboard-icon',
  },
  {
    component: <FacebookIcon class="h-[24px] w-[24px]" />,
    name: 'facebook-icon',
  },
  {
    component: <GithubIcon class="h-[24px] w-[24px]" />,
    name: 'github-icon',
  },
  {
    component: <GoogleIcon class="h-[24px] w-[24px]" />,
    name: 'google-icon',
  },
  {
    component: <MenuIcon class="h-[24px] w-[24px]" />,
    name: 'menu-icon',
  },
  {
    component: <PlaceholderIcon class="h-[24px] w-[24px]" />,
    name: 'placeholder-icon',
  },
  {
    component: <PropertiesIcon class="h-[24px] w-[24px]" />,
    name: 'properties-icon',
  },
  {
    component: <SearchIcon class="h-[24px] w-[24px]" />,
    name: 'search-icon',
  },
  {
    component: <TwitterIcon class="h-[24px] w-[24px]" />,
    name: 'twitter-icon',
  },
  {
    component: <UsersIcon class="h-[24px] w-[24px]" />,
    name: 'users-icon',
  },
];

export const Icons: FunctionComponent = () => {
  const [shownIconName, setShownIconName] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setShownIconName(name);
  };

  const iconsList = iconsData.map((item) => (
    <Icon {...item} onClick={() => handleClick(item.name)} />
  ));

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 preview bg-neutral-800 p-3 overflow-hidden">
      {iconsList}
      {shownIconName && (
        <IconModal name={shownIconName} setShownIconName={setShownIconName} />
      )}
    </div>
  );
};
