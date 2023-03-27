import { h } from 'preact';
import type { StateUpdater } from 'preact/hooks';
import classNames from 'classnames';

import { ClearIcon } from '@selleo/core/src/icons';
import { Button } from '@selleo/core/src/Button';
import { H4 } from '@selleo/core/src/Headers';
import { Icon } from '@selleo/core/src/Icon';
import type { IconProps, Icons } from './Icons';

type IconModalProps = {
  iconsObj: IconProps;
  shownIconName: Icons;
  setShownIconName: StateUpdater<string | null>;
};

export const IconModal = ({
  iconsObj,
  shownIconName,
  setShownIconName,
}: IconModalProps) => {
  const icon = iconsObj[shownIconName];

  const updateClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const handleCopy = (variant: 'react' | 'html') =>
    navigator.permissions
      .query({ name: 'clipboard-write' as any })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          const codeToCopy =
            variant === 'html' ? icon.htmlString : icon.reactString;

          return updateClipboard(codeToCopy);
        }
        alert('permission denied');
      });

  const closeModal = (e: h.JSX.TargetedMouseEvent<HTMLDivElement>) => {
    setShownIconName(null);
    e.stopPropagation();
  };

  const modalOverlayClasses = classNames(
    'fixed top-0 left-0 w-full h-full bg-opacity-75 transition-opacity bg-neutral-hero-overlay z-20 border-0'
  );

  return (
    <>
      <div class={modalOverlayClasses} onClick={closeModal} />
      <div class="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] mx-auto py-3 px-3 lg:px-7 lg:py-5 w-96 shadow-lg rounded-md bg-theme-gray-950 dark:bg-neutral-hero-overlay z-30 min-w-[220px] cursor-auto">
        <div onClick={closeModal}>
          <ClearIcon class="absolute top-0 right-0 cursor-pointer" />
        </div>
        <div class="mt-3 text-center">
          <div class="flex items-center justify-center h-12 w-12 rounded-full mx-auto mb-2">
            <Icon name={shownIconName} />
          </div>
          <H4>{shownIconName}</H4>
          <div class="flex items-center text-white z-2 pt-5 gap-2">
            <Button
              size="small"
              variant="primary"
              onClick={() => handleCopy('react')}
            >
              React Code
            </Button>
            <Button
              size="small"
              variant="primary"
              onClick={() => handleCopy('html')}
            >
              HTML Code
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
