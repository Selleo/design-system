import { h } from 'preact';

export function SearchIcon(props: h.JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M14.1936 5.5809C16.5254 7.91272 16.5254 11.6933 14.1936 14.0252C11.8618 16.357 8.08117 16.357 5.74935 14.0252C3.41753 11.6933 3.41753 7.91272 5.74935 5.5809C8.08117 3.24908 11.8618 3.24908 14.1936 5.5809"
        stroke="currentColor"
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.1504 14.0596L20.0004 19.9896"
        stroke="currentColor"
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
