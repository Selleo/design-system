import { h } from "preact";
import render from "preact-render-to-string";

const parseToReact = (componentAsString: string) => {
  return componentAsString.replaceAll('class="', 'className="');
};

export const parseComponent = (Component: any, props: any) => {
  const HTMLString = render(<Component {...props} />, null, { pretty: true });
  const ReactString = parseToReact(HTMLString);

  return {
    HTMLString,
    ReactString,
  };
};
