import { h } from 'preact';
import cx from 'classnames';

type TabProps = {
  active: boolean;
  icon?(): h.JSX.Element;
};

type TabsProps = {
  tabsAmount: number;
  selectedId: number;
};

export function Tabs({ tabsAmount, selectedId }: TabsProps) {
  const tabs = Array.from({ length: tabsAmount }, (_, key) => (
    <Tab active={selectedId === key + 1} />
  ));

  return <div class="space-x-1">{tabs}</div>;
}

export function Tab({ active, icon }: TabProps) {
  const Icon = icon;

  const classes = cx(
    'px-2 py-1 text-base font-normal rounded-lg cursor-pointer',
    {
      'text-brand-primary-500 bg-brand-primary-100': active,
      'text-neutral-600 bg-transparent hover:bg-brand-primary-100 dark:text-white dark:bg-transparent dark:hover:bg-neutral-600':
        !active,
      'inline-flex items-center': Icon,
    }
  );

  const textClasses = cx({
    'ml-1': Icon,
  });

  return (
    <span class={classes}>
      {Icon && <Icon />}
      <span class={textClasses}>Item</span>
    </span>
  );
}
