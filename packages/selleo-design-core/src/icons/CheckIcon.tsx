import { h } from "preact";

export function CheckIcon(props: h.JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M20.0001 6.50085L9.00012 17.5009L4.00012 12.5009"
        stroke="currentColor"
        stroke-width="1.375"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
