import { createRef, Fragment, h } from "preact";
import cx from "classnames";
import { ClearIcon } from "./icons";

type Props = {
  variant: "default" | "error" | "filled";
  label: string;
} & h.JSX.HTMLAttributes<HTMLInputElement>;

export function UploadArea({
  variant = "default",
  label = "Attach file",
}: Props) {
  const inputClasses = cx(
    "border-2 leading-175 rounded p-1 text-center transition-all duration-300 cursor-pointer relative",
    {
      "border-dashed border-neutral-400 text-neutral-400 hover:border-neutral-500 hover:text-neutral-500 dark:hover:border-neutral-300 dark:hover:text-neutral-300":
        variant === "default",
      "border-dashed border-neutral-400 text-danger": variant === "error",
      "border-solid border-black dark:border-white dark:text-white":
        variant === "filled",
    }
  );

  return (
    <div class="relative">
      <div class={inputClasses}>{label}</div>
      {variant === "filled" && (
        <button class="w-3 h-3 flex items-center justify-center rounded-full border-2 border-black dark:border-white block absolute -right-[12px] -top-[12px] bg-white dark:bg-theme-dark text-brand-primary-500">
          <ClearIcon />
        </button>
      )}
    </div>
  );
}
