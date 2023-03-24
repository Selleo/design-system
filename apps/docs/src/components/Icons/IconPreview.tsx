import { h } from 'preact';

import { Icon } from '@selleo/core/src/Icon';

type IconPreviewProps = {
  name: string;
} & h.JSX.HTMLAttributes<HTMLDivElement>;

export const IconPreview = ({ name, ...props }: IconPreviewProps) => {
  return (
    <div
      class="flex flex-col justify-center items-center gap-2 rounded border-[1px] border-neutral-600 min-h-[120px] overflow-hidden p-[5px] cursor-pointer"
      {...props}
    >
      <Icon name={name} />
      <p class="whitespace-nowrap text-ellipsis overflow-hidden inline-block text-xs max-w-[98%]">
        {name}
      </p>
    </div>
  );
};
