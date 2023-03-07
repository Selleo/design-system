import { h, FunctionComponent } from 'preact';
import cx from 'classnames';

type Header = {
  class?: string;
};

export const H1: FunctionComponent<Header> = ({
  class: paragraphClasses,
  children,
}) => {
  const classes = cx(
    'font-sans font-normal text-xxl leading-125 tracking-none',
    paragraphClasses
  );
  return <h1 class={classes}>{children}</h1>;
};
export const H2: FunctionComponent<Header> = ({
  class: paragraphClasses,
  children,
}) => {
  const classes = cx(
    'font-sans font-bold text-xl leading-125 tracking-normal',
    paragraphClasses
  );
  return <h2 class={classes}>{children}</h2>;
};
export const H3: FunctionComponent<Header> = ({
  class: paragraphClasses,
  children,
}) => {
  const classes = cx(
    'font-sans font-bold text-lg leading-125 tracking-normal',
    paragraphClasses
  );
  return <h3 class={classes}>{children}</h3>;
};
export const H4: FunctionComponent<Header> = ({
  class: paragraphClasses,
  children,
}) => {
  const classes = cx(
    'font-sans font-bold text-md leading-125 tracking-normal',
    paragraphClasses
  );
  return <h4 class={classes}>{children}</h4>;
};
export const H5: FunctionComponent<Header> = ({
  class: paragraphClasses,
  children,
}) => {
  const classes = cx(
    'font-sans font-bold text-sm leading-150 tracking-normal',
    paragraphClasses
  );
  return <h5 class={classes}>{children}</h5>;
};
export const H6: FunctionComponent<Header> = ({
  class: paragraphClasses,
  children,
}) => {
  const classes = cx(
    'font-sans font-bold text-xs leading-tight tracking-normal',
    paragraphClasses
  );
  return <h6 class={classes}>{children}</h6>;
};
