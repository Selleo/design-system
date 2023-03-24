import { h } from 'preact';

import iconsData from '../../../apps/docs/src/components/Icons/data';

export type IconProps = {
  name: string;
} & h.JSX.SVGAttributes<SVGSVGElement>;

export function Icon({ name, ...props }: IconProps) {
  const icon = iconsData.find((obj) => obj.name === name);

  const { Component } = icon!;

  return <Component class="w-[24px] h-[24px]" {...props} />;
}
