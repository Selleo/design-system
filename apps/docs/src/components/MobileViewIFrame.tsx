import { useEffect, useState } from "preact/hooks";
import { isDarkTheme } from "../stores";
import { useStore } from "@nanostores/preact";

type Props = {
  height: string;
  mobilePath: string;
};

export function MobileViewIFrame({ height, mobilePath }: Props) {
  const [counter, setCounter] = useState(0);
  const $isDarkTheme = useStore(isDarkTheme);

  const resetIframe = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    resetIframe();
  }, [$isDarkTheme]);

  return (
    <iframe
      key={counter}
      width="100%"
      height={height}
      src={mobilePath}
      class="mb-2"
    />
  );
}
