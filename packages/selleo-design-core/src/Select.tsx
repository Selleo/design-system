import { h } from "preact";
import { CaretDownIcon } from "./icons/CaretDownIcon";

type Props = {
  label?: string;
  placeholder: string;
} & h.JSX.HTMLAttributes<HTMLSelectElement>;

export function Select({
  label,
  placeholder = "Input placeholder",
  ...props
}: Props) {
  return (
    <div class="inline-block">
      {label && (
        <label class="text-neutral-500 dark:text-neutral-400 text-xs mb-1 block">
          {label}
        </label>
      )}
      <div class="flex justify-between text-neutral-600 dark:text-neutral-300 items-center w-fit text-xs border border-neutral-200 rounded gap-1 relative">
        <select
          class="appearance-none outline-none p-2 pr-6 cursor-pointer z-10 bg-transparent"
          {...props}
        >
          <option value="" selected>
            {placeholder}
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <CaretDownIcon
          width={24}
          height={24}
          class="m-2 right-0 absolute z-0"
        />
      </div>
    </div>
  );
}
