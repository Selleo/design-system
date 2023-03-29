import type { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import type iconsData from '@selleo/core/src/Icon/data';
import { IconModal } from './IconModal';
import { IconPreview } from './IconPreview';

export type Icons = keyof typeof iconsData;

export type IconProps = {
  [key in Icons]: {
    htmlString: string;
    reactString: string;
  };
};

export type IconsProps = {
  iconsObj: IconProps;
};

export const Icons: FunctionComponent<IconsProps> = ({ iconsObj }) => {
  const [shownIconName, setShownIconName] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setShownIconName(name);
  };

  const icons = Object.keys(iconsObj).map((icon) => (
    <IconPreview name={icon as Icons} onClick={() => handleClick(icon)} />
  ));

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 preview p-3 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
      {icons}
      {shownIconName && (
        <IconModal
          iconsObj={iconsObj}
          shownIconName={shownIconName as Icons}
          setShownIconName={setShownIconName}
        />
      )}
    </div>
  );
};
