import { unescape } from "html-escaper";
import type { MarkdownHeading } from "astro";
import type { FunctionalComponent } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";

type ItemOffsets = {
  id: string;
  topOffset: number;
};

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({
  headings = [],
}) => {
  const toc = useRef<HTMLUListElement>();
  const onThisPageID = "on-this-page-heading";
  const itemOffsets = useRef<ItemOffsets[]>([]);
  const [currentID, setCurrentID] = useState("overview");
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)");
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);

    return () => {
      window.removeEventListener("resize", getItemOffsets);
    };
  }, []);

  useEffect(() => {
    if (!toc.current) return;

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageID) continue;
          setCurrentID(entry.target.id);
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: "-100px 0% -66%",
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    );

    // Observe all the headings in the main page content.
    document
      .querySelectorAll("article :is(h1,h2,h3)")
      .forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [toc.current]);

  const onLinkClick = (e) => {
    setCurrentID(e.target.getAttribute("href").replace("#", ""));
  };

  const getDepthClassname = (depth: number) => {
    switch(depth) {
      case 2:
        return 'pl-2'
      case 3:
        return 'pl-4'
      case 4:
        return 'pl-5'
    }
  }

  return (
    <>
      <h2 id={onThisPageID} className="heading mb-1 font-bold leading-none text-sm font-bold py-[0.1rem] px-2 uppercase">
        On this page
      </h2>
      <ul class="list-none p-0" ref={toc}>
        {headings
          .filter(({ depth }) => depth > 1 && depth <= 4)
          .map((heading) => (
            <li
              className={`text-xs md:text-sm transition-colors duration-200 border-l-4 border-theme-gray-950 hover:border-theme-gray-100 dark:border-theme-gray-100 dark:hover:border-theme-gray-950 dark:focus:border-theme-gray-950 focus:border-theme-gray-100 dark:focus-visible:border-theme-gray-950 focus-visible:border-theme-gray-100 no-underline hover:underline ${getDepthClassname(heading.depth)} ${
                currentID === heading.slug ? "bg-theme-accent/15 outline outline-1 outline-transparent" : ""
              }`.trim()}
            >
              <a href={`#${heading.slug}`} class={`focus-visible:underline inline-flex gap-1 w-full py-[0.4rem] md:py-0.5 px-0 leading-tight text-inherit font-inherit text-sm items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-theme-gray-100 dark:focus-visible:outline-white ${
                currentID === heading.slug ? "text-theme-gray-100 dark:text-theme-gray-900" : ""
              }`} onClick={onLinkClick}>
                {unescape(heading.text)}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TableOfContents;
