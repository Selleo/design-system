import { Component, h } from 'preact';
import classNames from 'classnames';
import { JSXInternal } from 'preact/src/jsx';

import iconsData from '../../../apps/docs/src/components/Icons/data';

type IconProps = {
  component: () => JSXInternal.Element;
  name: string;
} & h.JSX.HTMLAttributes<HTMLDivElement>;

export function Icon({ component, name, ...props }: IconProps) {
  const icon = iconsData.find((obj) => obj.name === name);

  const classes = classNames(
    'flex flex-col justify-center items-center gap-2 rounded border-[1px] border-neutral-600 min-h-[120px] overflow-hidden p-[5px] cursor-pointer'
  );

  return (
    <div class={classes} {...props}>
      {icon?.component}
      <p class="whitespace-nowrap text-ellipsis overflow-hidden inline-block text-xs max-w-[98%]">
        {name}
      </p>
    </div>
  );
}
