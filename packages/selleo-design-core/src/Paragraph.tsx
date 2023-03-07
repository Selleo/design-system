import cx from 'classnames';
import { h, FunctionComponent } from 'preact';

type ParagraphProps =
  | {
      size: 'large' | 'medium';
      weight: 'regular' | 'bold';
    }
  | {
      size: 'small';
      weight?: never;
    };

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  size = 'large',
  weight = 'regular',
  children,
}) => {
  const paragraphClassname = cx(
    'dark:text-white font-sans tracking-normal text-neutral-400',
    {
      'text-base leading-175': size === 'large',
      'text-sm leading-175': size === 'medium',
      'text-xs font-normal leading-150': size === 'small',
      'font-normal': weight === 'regular',
      'font-bold': weight === 'bold',
    }
  );
  return <p class={paragraphClassname}>{children}</p>;
};
