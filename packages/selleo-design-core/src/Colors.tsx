import { ComponentChild, h } from 'preact';
import cx from 'classnames';

import { H4 } from './Headers';
import { Paragraph } from './Paragraph';

type ColorWrapperProps = {
  size: 'small' | 'medium' | 'big';
  class?: string;
  colorInfo: {
    title: string;
    description: string;
  };
};

type ColorsWrapperProps = {
  children: ComponentChild[];
  itemsLength: number;
};

export function ColorWrapper({
  size,
  class: wrapperClass,
  colorInfo,
}: ColorWrapperProps) {
  const { title, description } = colorInfo;

  const classes = cx(
    'relative rounded-[4px]',
    {
      'w-[45%] xxl:w-[30%] min-h-[110px]': size === 'small',
      'w-[100%] min-h-[110px]': size === 'medium',
      'w-[100%] min-h-[284px]': size === 'big',
    },
    wrapperClass
  );

  const contentClasses = cx('absolute', {
    'bottom-[28px] left-[24px]': size === 'big',
    'bottom-[12px] left-[24px]': size === 'medium',
    'bottom-[15px] left-[24px]': size === 'small',
  });

  return (
    <div class={classes}>
      <div class={contentClasses}>
        <H4>{title}</H4>
        <Paragraph size="medium" weight="regular">
          {description}
        </Paragraph>
      </div>
    </div>
  );
}

export function ColorsWrapper({ children, itemsLength }: ColorsWrapperProps) {
  const classes = cx('flex items-center flex-wrap justify-evenly', {
    'gap-4': itemsLength <= 3,
    'gap-2': itemsLength > 3,
  });

  return <div class={classes}>{children}</div>;
}
