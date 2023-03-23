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

export default iconsData;
