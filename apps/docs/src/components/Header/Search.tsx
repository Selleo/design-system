/** @jsxImportSource react */
import { useState, useCallback, useRef } from "react";
import { ALGOLIA } from "../../config";
import "@docsearch/css";

import { createPortal } from "react-dom";
import * as docSearchReact from "@docsearch/react";

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal =
  docSearchReact.DocSearchModal ||
  (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents =
  docSearchReact.useDocSearchKeyboardEvents ||
  (docSearchReact as any).default.useDocSearchKeyboardEvents;

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [initialQuery, setInitialQuery] = useState("");

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <button
        type="button"
        ref={searchButtonRef}
        onClick={onOpen}
        className="flex gap-0.5 grow box-border w-full m-0 py-[0.33em] px-[0.5em] overflow-visible font-medium text-sm font-inherit bg-theme-gray-950 dark:bg-theme-gray-100 border rounded border-theme-gray-950 dark:border-theme-gray-100 text-theme-gray-400 dark:text-theme-gray-800 outline-0 cursor-pointer transition-colors hover:text-theme-gray-100 dark:hover:text-theme-gray-900 focus-visible:text-theme-gray-100 dark:focus-visible:text-theme-gray-900 hover:border hover:border-theme-gray-400 dark:hover:border-theme-gray-800 focus-visible:border-theme-gray-400 dark:focus-visible:border-theme-gray-800 placeholder:font-medium placeholder:hover:text-theme-gray-400 placeholder:dark:hover:text-theme-gray-800 placeholder:focus-visible:text-theme-gray-400 placeholder:dark:focus-visible:text-theme-gray-800"
      >
        <svg width="24" height="24" fill="none">
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Search</span>

        <span className="absolute top-[7px] right-[19px] py-[3px] px-[5px] hidden rounded md:flex items-center justify-center tracking-[0.125em] text-[13px] pointer-events-none border border-theme-gray-800 dark:border-theme-gray-400 text-theme-gray-400 dark:text-theme-gray-800 leading-[14px]">
          <span className="sr-only">Press </span>

          <kbd>/</kbd>

          <span className="sr-only"> to search</span>
        </span>
      </button>

      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            onClose={onClose}
            indexName={ALGOLIA.indexName}
            appId={ALGOLIA.appId}
            apiKey={ALGOLIA.apiKey}
            transformItems={(items) => {
              return items.map((item) => {
                // We transform the absolute URL into a relative URL to
                // work better on localhost, preview URLS.
                const a = document.createElement("a");
                a.href = item.url;
                const hash = a.hash === "#overview" ? "" : a.hash;
                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                };
              });
            }}
          />,
          document.body
        )}
    </>
  );
}
