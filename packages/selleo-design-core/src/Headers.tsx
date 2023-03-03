import { ComponentChildren, h } from 'preact';

type Header = {
  children: ComponentChildren;
};

export function H1({ children }: Header) {
  return (
    <h1 class="font-sans font-normal text-xxl leading-125 tracking-none">
      {children}
    </h1>
  );
}
export function H2({ children }: Header) {
  return (
    <h2 class="font-sans font-bold text-xl leading-125 tracking-normal">
      {children}
    </h2>
  );
}
export function H3({ children }: Header) {
  return (
    <h3 class="font-sans font-bold text-lg leading-125 tracking-normal">
      {children}
    </h3>
  );
}
export function H4({ children }: Header) {
  return (
    <h4 class="font-sans font-bold text-md leading-125 tracking-normal">
      {children}
    </h4>
  );
}
export function H5({ children }: Header) {
  return (
    <h5 class="font-sans font-bold text-sm leading-150 tracking-normal">
      {children}
    </h5>
  );
}
export function H6({ children }: Header) {
  return (
    <h6 class="font-sans font-bold text-xs leading-tight tracking-normal">
      {children}
    </h6>
  );
}
