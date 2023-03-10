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
  class: string;
};

export const colorsInfo = {
  brand: {
    primary: {
      sectionOne: [
        {
          size: 'big',
          class: 'bg-brand-primary-500 [&_p]:text-white [&_h4]:text-white',
          colorInfo: {
            title: 'primary.500',
            description: 'HEX #FF6D2A | hsl(19, 100, 58) | Pantone 165 C',
          },
        },
      ],
      sectionTwo: [
        {
          colorInfo: {
            title: 'primary.600',
            description: 'HEX #E25718 | hsl(19, 81, 49)',
          },
          size: 'small',
          class: 'bg-brand-primary-600 [&_p]:text-white [&_h4]:text-white',
        },
        {
          colorInfo: {
            title: 'primary.400',
            description: 'HEX #FF905D | hsl(19, 100, 68)',
          },
          size: 'small',
          class: 'bg-brand-primary-400 &_p]:text-white [&_h4]:text-white',
        },
        {
          colorInfo: {
            title: 'primary.200',
            description: 'HEX #FFEAE0 | hsl(19, 100, 94)',
          },
          size: 'small',
          class:
            'bg-brand-primary-200 [&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black',
        },
        {
          colorInfo: {
            title: 'primary.100',
            description: 'HEX #FFF8F5 | hsl(18, 100, 98',
          },
          size: 'small',
          class:
            'bg-brand-primary-100 [&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black',
        },
      ],
    },
    secondary: {
      sectionOne: [
        {
          size: 'big',
          class: 'bg-brand-secondary-500 [&_p]:text-white [&_h4]:text-white',
          colorInfo: {
            title: 'secondary.500',
            description: 'HEX #5C99D2 | hsl(209, 57, 59) | Pantone 298 C',
          },
        },
      ],
      sectionTwo: [
        {
          size: 'small',
          class: 'bg-brand-secondary-600 [&_p]:text-white [&_h4]:text-white',
          colorInfo: {
            title: 'Secondary.600',
            description: 'HEX #3871A5 | hsl(209, 49, 43)',
          },
        },
        {
          size: 'small',
          class:
            'bg-brand-secondary-200 [&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black',
          colorInfo: {
            title: 'secondary.200',
            description: 'HEX #DFEBF6 | hsl(209, 56, 92)',
          },
        },
        {
          size: 'small',
          class:
            'bg-brand-secondary-100 [&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black',
          colorInfo: {
            title: 'secondary.100',
            description: 'HEX #F3F8FC | hsl(207, 60, 97)',
          },
        },
      ],
    },
  },
  neutral: [
    {
      size: 'medium',
      class: 'bg-black [&_p]:text-white [&_h4]:text-white mb-3',
      colorInfo: {
        title: 'black',
        description: 'HEX #2F3033 | hsl(225, 4, 19) | Pantone 426 C',
      },
    },
    {
      size: 'medium',
      class: 'bg-neutral-600 [&_p]:text-white [&_h4]:text-white mb-3',
      colorInfo: {
        title: 'neutral.600',
        description: 'HEX #4C4D52 | hsl(230, 4, 31)',
      },
    },
    {
      size: 'medium',
      class: 'bg-neutral-500 [&_p]:text-white [&_h4]:text-white mb-3',
      colorInfo: {
        title: 'neutral.500',
        description: 'HEX #696B72 | hsl(227, 4, 43)',
      },
    },
    {
      size: 'medium',
      class: 'bg-neutral-400 [&_p]:text-white [&_h4]:text-white mb-3',
      colorInfo: {
        title: 'neutral.400',
        description: 'HEX #95979D | hsl(225, 4, 60)',
      },
    },
    {
      size: 'medium',
      class: 'bg-neutral-300 [&_p]:text-white [&_h4]:text-white mb-3',
      colorInfo: {
        title: 'neutral.300',
        description: 'HEX #BFC0C4 | hsl(228, 4, 76)',
      },
    },
    {
      size: 'medium',
      class:
        'bg-neutral-200 [&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black mb-3',
      colorInfo: {
        title: 'neutral.200',
        description: 'HEX #EAEAEB | hsl(240, 2, 92)',
      },
    },
    {
      size: 'medium',
      class:
        'bg-neutral-100 [&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black mb-3',
      colorInfo: {
        title: 'neutral.100',
        description: 'HEX #F4F5F5 | hsl(180, 5, 96)',
      },
    },
    {
      size: 'medium',
      class:
        'bg-white [&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black border-[1px] border-neutral-200 mb-3',
      colorInfo: {
        title: 'white',
        description: 'HEX #FFFFFF | hsl(0, 0, 100)',
      },
    },
    {
      size: 'medium',
      class: 'bg-neutral-hero-overlay [&_p]:text-white [&_h4]:text-white mb-3',
      colorInfo: {
        title: 'hero.overlay',
        description: 'HEX #2F3033 | hsl(225, 4, 19)   70%',
      },
    },
  ],
  states: [
    {
      size: 'medium',
      class: 'bg-danger [&_p]:text-white [&_h4]:text-white mb-3',
      colorInfo: {
        title: 'danger.500',
        description: 'HEX #E81B2F | hsl(354, 82, 51)',
      },
    },
    {
      size: 'medium',
      class:
        '[&_p]:text-black [&_h4]:text-black dark:[&_p]:text-black border-[1px] border-neutral-200 mb-3',
      colorInfo: {
        title: 'transparent',
        description: 'HEX #000000 | hsl(0, 0, 0)  0%',
      },
    },
  ],
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

export function ColorsWrapper({
  children,
  itemsLength,
  class: wrapperClasses,
}: ColorsWrapperProps) {
  const classes = cx(
    'flex items-center flex-wrap justify-evenly',
    {
      'gap-4': itemsLength <= 3,
      'gap-2': itemsLength > 3,
    },
    wrapperClasses
  );

  return <div class={classes}>{children}</div>;
}
