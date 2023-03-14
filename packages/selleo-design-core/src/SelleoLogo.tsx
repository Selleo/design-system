import { FunctionComponent, h } from 'preact';

import {
  LogoChromatic,
  LogoChromaticWhite,
  LogoNormal,
  LogoNormalWhite,
  LogoVertical,
  LogoVerticalWhite,
  LogoWithPassword,
  LogoWithPasswordWhite,
  SelleoSignet,
  SelleoSignetWhite,
} from './icons';

type LogoProps = {
  variant:
    | 'normal'
    | 'normal-white'
    | 'vertical'
    | 'vertical-white'
    | 'chromatic'
    | 'chromatic-white'
    | 'signet'
    | 'signet-white'
    | 'normal-password'
    | 'normal-password-white';
};

export function Logo({ variant }: LogoProps) {
  switch (variant) {
    case 'normal':
      return <LogoNormal />;
    case 'normal-white':
      return <LogoNormalWhite />;
    case 'vertical':
      return <LogoVertical />;
    case 'vertical-white':
      return <LogoVerticalWhite />;
    case 'chromatic':
      return <LogoChromatic />;
    case 'chromatic-white':
      return <LogoChromaticWhite />;
    case 'signet':
      return <SelleoSignet />;
    case 'signet-white':
      return <SelleoSignetWhite />;
    case 'normal-password':
      return <LogoWithPassword />;
    case 'normal-password-white':
      return <LogoWithPasswordWhite />;
    default:
      return <LogoNormal />;
  }
}

export const LogosContainer: FunctionComponent = ({ children }) => {
  return (
    <div class="flex justify-evenly items-center flex-1/2 gap-2">
      {children}
    </div>
  );
};
