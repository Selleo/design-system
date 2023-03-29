import { FunctionComponent, h } from 'preact';
import { useState } from 'preact/hooks';

import { Button } from '@selleo/core/src/Button';
import { CopyCompletedIcon, CopyIcon } from '@selleo/core/src/icons';

type ButtonProps = {
  icon: {
    htmlString: string;
    reactString: string;
  };
  copyFormat: 'react' | 'html';
};

export const CopyCodeButton: FunctionComponent<ButtonProps> = ({
  icon,
  copyFormat,
  children,
}) => {
  const [isCopying, setIsCopying] = useState(false);

  const updateClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const handleCopy = (variant: 'react' | 'html') => {
    setIsCopying(true);

    setTimeout(() => {
      setIsCopying(false);
    }, 1000);

    navigator.permissions
      .query({ name: 'clipboard-write' as any })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          const codeToCopy =
            variant === 'html' ? icon.htmlString : icon.reactString;

          return updateClipboard(codeToCopy);
        }
        alert('permission denied');
      });
  };

  const CopyIconEnd = () => (
    <CopyIcon class="stroke-white w-[20px] h-[20px] ml-[4px]" />
  );

  const CopyCompletedIconEnd = () => (
    <CopyCompletedIcon class="stroke-white w-[20px] h-[20px] ml-[4px]" />
  );

  return (
    <Button
      size="small"
      variant="primary"
      onClick={() => handleCopy(copyFormat)}
      iconEnd={isCopying ? CopyCompletedIconEnd : CopyIconEnd}
    >
      {children}
    </Button>
  );
};
