import { h } from "preact";
import cx from "classnames";

type Props = {
  variant: "default" | "error";
  size: "normal" | "small";
};

export function Checkbox({ variant = "default", size = "normal" }: Props) {
  const labelClasses = cx(
    "flex justify-center text-neutral-600 dark:text-neutral-200 cursor-pointer before:rounded before:border-neutral-600 dark:before:border-neutral-200 before:mr-1 hover:before:border-brand-primary-500 dark:hover:before:border-brand-primary-500 peer-checked:before:bg-brand-primary-500 peer-checked:before:border-brand-primary-500 peer-checked:before:ring-inset  dark:peer-checked:before:ring-offset-theme-dark peer-checked:before:ring-brand-primary-500 transition-all duration-300 before:transition-all before:duration-300",
    {
      "before:w-3 before:h-3 before:rounded text-base before:border-2 peer-checked:before:ring-2 peer-checked:before:ring-offset-2 items-end":
        size === "normal",
      "before:w-2 before:h-2 before:rounded-[2.66px] text-xs before:border peer-checked:before:ring-[1.33px] peer-checked:before:ring-offset-[1.33px] items-center before:mt-[2px]":
        size === "small",
      "before:border-danger": variant === "error",
    }
  );
  const acceptSpanClasses = cx({ "text-danger": variant === "error" });
  const linkClasses = cx("text-brand-primary-500 hover:no-underline", {
    "text-neutral-600 dark:text-neutral-200": variant === "error",
  });

  return (
    <div class="flex items-center">
      <input
        id={`${variant}-${size}`}
        type="checkbox"
        class="hidden peer"
        value=""
      />
      <label htmlFor={`${variant}-${size}`} class={labelClasses}>
        <span class="text-neutral-600 dark:text-neutral-200">
          I <span class={acceptSpanClasses}>accept</span> the{" "}
          <a
            href="https://www.iubenda.com/privacy-policy/463009"
            target="_blank"
            rel="noopener noreferrer"
            class={linkClasses}
          >
            Privacy Policy
          </a>
        </span>
      </label>
    </div>
  );
}
