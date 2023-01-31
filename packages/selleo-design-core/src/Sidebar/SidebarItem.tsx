import { h } from "preact";
import cx from "classnames";

type Props = {
  icon(): h.JSX.Element;
  label: string;
  active?: boolean;
};

export function SidebarItem({ icon, label, active }: Props) {
  const IconComponent = icon;
  const itemClasses = cx(
    "flex items-center text-base leading-relaxed tracking-normal",
    {
      "text-neutral-600 dark:text-white": !active,
      "text-brand-primary-500": active,
    }
  );
  return (
    <li class="m-0 mb-5 cursor-pointer list-none">
      <div class={itemClasses}>
        <IconComponent />
        <span class="ml-[12px]">{label}</span>
      </div>
    </li>
  );
}
