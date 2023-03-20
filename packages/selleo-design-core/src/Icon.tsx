import { FunctionComponent, h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import render from 'preact-render-to-string';
import classNames from 'classnames';

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
} from './icons';
import { CaretDownIcon } from './icons/CaretDownIcon';
import { parseToReact } from './parser';
import { Button } from './Button';
import { H4 } from './Headers';

type IconProps = {
  component: h.JSX.Element;
  name: string;
};

type IconsProps = {
  items: IconProps[];
};

export const iconsData = [
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

export function Icon({ component, name }: IconProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const handleCopy = (format: 'react' | 'html') =>
    navigator.permissions
      .query({ name: 'clipboard-write' as any })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          const Component = component;
          const HTMLString = render(Component, {
            pretty: true,
          });

          const codeToCopy =
            format === 'html' ? HTMLString : parseToReact(HTMLString);

          return updateClipboard(codeToCopy);
        }
        alert('permission denied');
      });

  const classes = classNames(
    'flex flex-col justify-center items-center gap-2 rounded border-[1px] border-neutral-600 min-h-[120px] overflow-hidden p-[5px] cursor-pointer'
  );

  const modalOverlayClasses = classNames(
    'fixed top-0 left-0 w-full h-full bg-opacity-75 transition-opacity bg-neutral-hero-overlay z-20 border-0',
    {
      hidden: !isOpen,
    }
  );

  return (
    <>
      <div class={modalOverlayClasses} onClick={() => setIsOpen(false)} />
      <div class={classes} onClick={() => setIsOpen(true)}>
        {component}
        <p class="whitespace-nowrap text-ellipsis overflow-hidden inline-block text-xs max-w-[98%]">
          {name}
        </p>
        {isOpen && (
          <div class="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mx-auto py-3 px-3 lg:px-7 lg:py-5 w-96 shadow-lg rounded-md bg-neutral-hero-overlay z-30 min-w-[220px] cursor-auto">
            <ClearIcon
              class="absolute top-[-1px] right-[-1px] cursor-pointer"
              width={12}
              height={12}
              onClick={(e) => {
                setIsOpen(false);
                e.stopPropagation();
              }}
            />
            <div class="mt-3 text-center">
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full">
                {component}
              </div>
              <H4>{name}</H4>
              <div class="flex items-center text-white z-2 pt-5">
                <Button
                  size="small"
                  variant="primary"
                  onClick={() => handleCopy('react')}
                  class="mr-1"
                >
                  React Code
                </Button>
                <Button
                  size="small"
                  variant="primary"
                  onClick={() => handleCopy('html')}
                  class="ml-1"
                >
                  HTML Code
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export const Icons: FunctionComponent<IconsProps> = () => {
  const icons = iconsData.map((item) => <Icon {...item} />);

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 preview bg-neutral-800 p-3 overflow-hidden">
      {icons}
    </div>
  );
};
