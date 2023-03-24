import type { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';

import { IconModal } from './IconModal';
import { IconPreview } from './IconPreview';

export type IconProps = {
  name: string;
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

  const icons = iconsList.map(({ name }) => {
    return <IconPreview name={name} onClick={() => handleClick(name)} />;
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
