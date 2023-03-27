import { h } from 'preact';

import iconsData from '../../../apps/docs/src/components/Icons/data';

export type IconProps = {
  name: keyof typeof iconsData;
  props?: h.JSX.SVGAttributes<SVGElement>;
};

export function Icon({ name, ...props }: IconProps) {
  const Component = iconsData[name];

  return <Component class="w-[24px] h-[24px]" {...props} />;
}
