import { h } from 'preact';

import { Icon } from '@selleo/core/src/Icon/Icon';
import type iconsData from '@selleo/core/src/Icon/data';

type IconPreviewProps = {
  name: keyof typeof iconsData;
} & h.JSX.HTMLAttributes<HTMLDivElement>;

export const IconPreview = ({ name, ...props }: IconPreviewProps) => {
  return (
    <div
      class="flex flex-col justify-center items-center gap-2 rounded border border-neutral-600 min-h-[120px] overflow-hidden p-1 cursor-pointer"
      {...props}
    >
      <Icon name={name} />
      <p class="whitespace-nowrap text-ellipsis overflow-hidden inline-block text-xs px-1">
        {name}
      </p>
    </div>
  );
};
