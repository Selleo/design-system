import { h } from 'preact';

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

const iconsData = [
  {
    component: <BookingDeskIcon class="h-[24px] w-[24px]" />,
    name: 'booking-desk',
  },
  {
    component: <BookingRoomIcon class="h-[24px] w-[24px]" />,
    name: 'booking-room',
  },
  {
    component: <CaretDownIcon class="h-[24px] w-[24px]" />,
    name: 'caret-down',
  },
  {
    component: <CheckIcon class="h-[24px] w-[24px]" />,
    name: 'check',
  },
  {
    component: <ClearIcon class="h-[24px] w-[24px]" />,
    name: 'clear',
  },
  {
    component: <DashboardIcon class="h-[24px] w-[24px]" />,
    name: 'dashboard',
  },
  {
    component: <FacebookIcon class="h-[24px] w-[24px]" />,
    name: 'facebook',
  },
  {
    component: <GithubIcon class="h-[24px] w-[24px]" />,
    name: 'github',
  },
  {
    component: <GoogleIcon class="h-[24px] w-[24px]" />,
    name: 'google',
  },
  {
    component: <MenuIcon class="h-[24px] w-[24px]" />,
    name: 'menu',
  },
  {
    component: <PlaceholderIcon class="h-[24px] w-[24px]" />,
    name: 'placeholder',
  },
  {
    component: <PropertiesIcon class="h-[24px] w-[24px]" />,
    name: 'properties',
  },
  {
    component: <SearchIcon class="h-[24px] w-[24px]" />,
    name: 'search',
  },
  {
    component: <TwitterIcon class="h-[24px] w-[24px]" />,
    name: 'twitter',
  },
  {
    component: <UsersIcon class="h-[24px] w-[24px]" />,
    name: 'users',
  },
];

export default iconsData;
