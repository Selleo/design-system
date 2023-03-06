import { h } from 'preact';
import cx from 'classnames';

type CardProps = {
  children: h.JSX.Element;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  const classes = cx(
    'py-3 flex justify-center items-center bg-brand-secondary-100',
    className
  );

  return <div class={classes}>{children}</div>;
};
