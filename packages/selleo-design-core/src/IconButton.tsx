import { h } from "preact";
import cx from "classnames";

type Props = {
  icon(): h.JSX.Element;
  size: "small" | "medium" | "large";
  variant: "primary" | "ghost";
} & Omit<h.JSX.HTMLAttributes<HTMLButtonElement>, "icon" | "size">;

export function IconButton({
  icon,
  size = "medium",
  variant = "primary",
  ...buttonProps
}: Props) {
  const IconComponent = icon;
  const buttonClasses = cx("rounded box-content transition-all duration-300", {
    "w-3 h-3 p-1": size === "large",
    "w-3 h-3 p-0.5": size === "medium",
    "w-2 h-2 p-0.5": size === "small",
    "text-white bg-brand-primary-500 hover:bg-brand-primary-600 focus-visible:bg-brand-primary-600 disabled:bg-brand-primary-600 disabled:opacity-30 outline-0":
      variant === "primary",
    "text-neutral-600 dark:text-neutral-200 dark:hover:text-brand-primary-500 hover:text-brand-primary-500 focus-visible:text-brand-primary-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-brand-primary-500 disabled:opacity-30 disabled:text-neutral-600 dark:disabled:text-neutral-200":
      variant === "ghost",
  });

  return (
    <button {...buttonProps} class={buttonClasses}>
      <IconComponent />
    </button>
  );
}
