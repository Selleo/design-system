import { Avatar } from './Avatars';

import { h } from 'preact';
import cx from 'classnames';

type TestimonialProps = {
  variant: 'regular' | 'big' | 'vertical';
  classes: string;
};

const avatar = (
  <img
    src="https://ui-avatars.com/api/?name=John+Doe"
    alt="avatar"
    class="rounded-full w-[100%]"
  />
);

export function Testimonial({ variant, classes }: TestimonialProps) {
  const containerClasses = cx(
    'flex',
    {
      'h-[111px] max-h-[111px] items-center': variant !== 'vertical',
      'flex-col': variant === 'vertical',
    },
    classes
  );

  const avatarVariant = variant !== 'vertical' && variant;

  const contentClasses = cx({
    'space-y-1': variant === 'vertical',
  });

  const imageClass = cx({
    'w-[64px] h-[64px] mr-2': variant === 'regular',
    'w-[111px] h-[111px] mr-4': variant === 'big',
    'w-[64px] h-[64px] mb-2': variant === 'vertical',
  });

  return (
    <div class={containerClasses}>
      {
        <Avatar
          size={avatarVariant || 'regular'}
          image={avatar}
          imageClass={imageClass}
          hideName
        />
      }
      <div className={contentClasses}>
        <h4 className="text-md text-neutral-600 dark:text-white">
          Janek Górski
        </h4>
        <p className="text-xs text-neutral-400 dark:text-white leading-[150%]">
          CTO & Co-Founder
        </p>
      </div>
    </div>
  );
}
