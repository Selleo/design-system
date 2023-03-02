import { h } from 'preact';

type CardProps = {
  children: h.JSX.Element;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div class="py-3 flex justify-center items-center bg-brand-secondary-100">
      {children}
    </div>
  );
};
