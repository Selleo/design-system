import { h } from 'preact';
import cx from 'classnames';

type Props = {
  variant: 'primary' | 'primaryOutlined' | 'link';
  size: 'normal' | 'small';
  iconStart?(props: h.JSX.SVGAttributes<SVGSVGElement>): h.JSX.Element;
  iconEnd?(props: h.JSX.SVGAttributes<SVGSVGElement>): h.JSX.Element;
  iconTest?: h.JSX.Element;
} & Omit<h.JSX.HTMLAttributes<HTMLButtonElement>, 'size'>;

export function Button({
  variant = 'primary',
  size = 'normal',
  iconStart,
  iconEnd,
  iconTest,
  ...rest
}: Props) {
  const IconStart = iconStart;
  const IconEnd = iconEnd;
  const buttonClasses = cx(
    'flex transition-colors duration-300 font-bold rounded disabled:opacity-30',
    {
      'text-white bg-brand-primary-500 hover:bg-brand-primary-600 focus-visible:bg-brand-primary-600 focus-visible:outline focus-visible:outline-1 focus-visible:outline-brand-primary-600 focus-visible:outline-offset-2':
        variant === 'primary',
      'text-brand-primary-500 border border-solid border-brand-primary-500 hover:bg-brand-primary-100 focus-visible:bg-brand-primary-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-500':
        variant === 'primaryOutlined',
      'flex-col items-start text-neutral-500 dark:text-neutral-300 group hover:text-brand-primary-500 dark:hover:text-brand-primary-500 focus-visible:outline-0 after:w-[30%] after:h-[2px] after:bg-neutral-500 dark:after:bg-neutral-300 after:transition-all after:duration-300 after:rounded after:mt-[2px] hover:after:bg-brand-primary-500 dark:hover:after:bg-brand-primary-500 hover:after:w-full focus-visible:after:bg-brand-primary-500 focus-visible:after:w-full disabled:after:bg-brand-primary-400':
        variant === 'link',
      'py-1 px-2 text-xs': size === 'small',
      'py-1 px-3 text-sm': size === 'normal',
    }
  );

  const contentClasses = cx(
    'flex items-center justify-center px-0.5 rounded w-100% text-center',
    {
      'group-focus-visible:bg-brand-primary-500 group-focus-visible:text-white':
        variant === 'link',
      'gap-0.5': size === 'small',
      'gap-1': size === 'normal',
    }
  );

  const iconSize = size === 'small' ? 16 : 24;

  return (
    <button class={buttonClasses} {...rest}>
      <div class={contentClasses}>
        {IconStart && <IconStart width={iconSize} height={iconSize} />}
        Text
        {IconEnd && <IconEnd width={iconSize} height={iconSize} />}
        {iconTest ? iconTest : ''}
      </div>
    </button>
  );
}
