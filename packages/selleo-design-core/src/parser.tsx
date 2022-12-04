import { h } from "preact";
import render from "preact-render-to-string";

const parseToReact = (componentAsString: string) => {
  return componentAsString.replaceAll('class="', 'className="');
};

export const parseComponent = (Component: any) => {
  const HTMLString = render(<Component />, null, { pretty: true });
  const ReactString = parseToReact(HTMLString);

  return {
    HTMLString,
    ReactString,
  };
};
