import { Fragment, h, VNode } from 'preact';
import render from 'preact-render-to-string';
import { parse } from 'preact-parser';

const parseToReact = (componentAsString: string) => {
  return componentAsString.replaceAll('class="', 'className="');
};

// eslint-disable-next-line react/display-name
const buildComponent = (html: string) => (): VNode => {
  const componentHtml = parse(html);

  return <Fragment>{componentHtml}</Fragment>;
};

export const parseComponent = (html: string) => {
  const Component = buildComponent(html);
  const HTMLString = render(<Component />, null, { pretty: true });
  const ReactString = parseToReact(HTMLString);
  const HTMLStringResult = HTMLString.replaceAll(/><\/input>|><\/img>/g, '>');
  const ReactStringResult = ReactString.replaceAll(/><\/input>|><\/img>/g, '>');

  return {
    HTMLString: HTMLStringResult,
    ReactString: ReactStringResult,
  };
};
