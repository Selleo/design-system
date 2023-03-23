import type { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

import { Icon } from '@selleo/core/src/Icon';
import { IconModal } from './IconModal';

export type IconProps = {
  name: string;
  component: () => JSXInternal.Element;
  htmlString: string;
  reactString: string;
};

export type IconsProps = {
  iconsList: IconProps[];
};

export const Icons: FunctionComponent<IconsProps> = ({ iconsList }) => {
  const [shownIconName, setShownIconName] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setShownIconName(name);
  };

  const icons = iconsList.map((item) => {
    return <Icon {...item} onClick={() => handleClick(item.name)} />;
  });

  return (
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 preview p-3 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
      {icons}
      {shownIconName && (
        <IconModal
          name={shownIconName}
          setShownIconName={setShownIconName}
          iconsList={iconsList}
        />
      )}
    </div>
  );
};
