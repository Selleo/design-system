import { h } from 'preact';
import cx from 'classnames';

type Props = {
  size: 'small' | 'normal';
  variant: 'error' | 'default';
  iconStart?(props: h.JSX.SVGAttributes<SVGSVGElement>): h.JSX.Element;
  iconEnd?(props: h.JSX.SVGAttributes<SVGSVGElement>): h.JSX.Element;
} & Omit<h.JSX.HTMLAttributes<HTMLInputElement>, 'size'>;

export function Input({
  size = 'normal',
  variant = 'default',
  iconStart,
  iconEnd,
  placeholder = 'Input placeholder',
  label,
  disabled,
  ...props
}: Props) {
  const IconStart = iconStart;
  const IconEnd = iconEnd;

  const iconSize = size === 'normal' ? 24 : 16;

  const wrapperClasses = cx({
    'opacity-50': disabled,
  });

  const inputWrapperClasses = cx(
    'group relative flex rounded border outline-0 text-neutral-300 hover:text-neutral-600 focus-within:text-neutral-600 focus-within:border-brand-primary-500 hover:focus-within:border-brand-primary-500 disabled:text-danger',
    {
      'bg-white border-neutral-200 hover:border-neutral-300':
        !disabled && variant !== 'error',
      'bg-neutral-200 border-neutral-500 hover:border-neutral-500 cursor-not-allowed':
        disabled,
      'bg-white border-danger hover:border-danger': variant === 'error',
    }
  );

  const iconClasses = cx(
    'absolute top-[50%] translate-y-[-50%] flex items-center peer-valid:text-neutral-600 peer-disabled:text-neutral-500 rounded',
    {
      'bg-white': variant === 'error',
    }
  );

  const startIconClasses = cx(iconClasses, 'order-first', {
    'left-1': size === 'small',
    'left-2': size === 'normal',
  });

  const endIconClasses = cx(iconClasses, {
    'right-1': size === 'small',
    'right-2': size === 'normal',
  });

  const inputClasses = cx(
    'peer rounded w-full pl-1 outline-none placeholder:text-neutral-300 group-hover:placeholder:text-neutral-600 focus:placeholder:text-neutral-600 valid:text-neutral-600 disabled:bg-neutral-200 disabled:placeholder:text-neutral-500 group-hover:disabled:placeholder:text-neutral-500 disabled:cursor-not-allowed',
    {
      'py-2 px-2 text-sm': size === 'normal',
      'py-1 px-1 text-xs': size === 'small',
      'pl-[48px]': size === 'normal' && IconStart,
      'pl-4':
        (size === 'small' && IconStart) || (size === 'normal' && !IconStart),
      'pl-2': size === 'small' && !IconStart,
    }
  );

  return (
    <div class={wrapperClasses}>
      {label && (
        <label class="block text-xs text-neutral-500 mb-1">{label}</label>
      )}
      <div class={inputWrapperClasses}>
        <input
          class={inputClasses}
          placeholder={placeholder}
          required
          disabled={disabled}
          {...props}
        />
        {IconStart && (
          <span class={startIconClasses}>
            <IconStart width={iconSize} height={iconSize} />
          </span>
        )}
        {IconEnd && (
          <span class={endIconClasses}>
            <IconEnd width={iconSize} height={iconSize} />
          </span>
        )}
      </div>
    </div>
  );
}
