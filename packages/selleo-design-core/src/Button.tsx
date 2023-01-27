import { h } from "preact";
import classNames from "classnames";

export function Button(
  { primaryOutlined, link, small, ...rest }: { primaryOutlined?: boolean, link?: boolean, small?: boolean } & h.JSX.HTMLAttributes<HTMLButtonElement>
  ) {
  const buttonClasses = classNames('flex transition-colors duration-300 font-bold rounded disabled:opacity-30', {
    'text-white bg-brand-primary-500 hover:bg-brand-primary-600 focus-visible:bg-brand-primary-600 focus-visible:outline focus-visible:outline-1 focus-visible:outline-brand-primary-600 focus-visible:outline-offset-2': !primaryOutlined && !link,
    'text-brand-primary-500 border border-solid border-brand-primary-500 hover:bg-brand-primary-100 focus-visible:bg-brand-primary-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-brand-primary-500': primaryOutlined,
    'flex-col items-start text-neutral-500 group hover:text-brand-primary-500 focus-visible:outline-0 after:w-[30%] after:h-[2px] after:bg-neutral-500 after:transition-all after:duration-300 after:rounded after:mt-[2px] hover:after:bg-brand-primary-500 hover:after:w-full focus-visible:after:bg-brand-primary-500 focus-visible:after:w-full disabled:after:bg-brand-primary-400': link,
    'py-1 px-2 text-xs': small,
    'py-1 px-3 text-sm': !small,
  })

  const contentClasses = classNames('flex items-center justify-center gap-0.5 px-0.5 rounded', {
    'group-focus-visible:bg-brand-primary-500 group-focus-visible:text-white': link,
    'gap-0.5': small,
    'gap-1': !small
  })

  return (
    <button
      class={buttonClasses}
      {...rest}
    >
      <div class={contentClasses}>Text</div>
    </button>
  )
}
